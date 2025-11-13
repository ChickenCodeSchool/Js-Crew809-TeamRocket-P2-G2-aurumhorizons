import { type FC, type FormEvent, useEffect, useState } from "react";
import "./CommentSection.css";

interface Reply {
  id: number;
  name: string;
  message: string;
  date: string;
}

interface Comment {
  id: number;
  name: string;
  message: string;
  rating: number;
  date: string;
  stayStartDate: string;
  stayEndDate: string;
  replies: Reply[];
}

const CommentsSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const stored = localStorage.getItem("comments");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error reading localStorage:", err);
      return [];
    }
  });

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [stayStartDate, setStayStartDate] = useState("");
  const [stayEndDate, setStayEndDate] = useState("");

  const [replyMessage, setReplyMessage] = useState("");
  const [replyName, setReplyName] = useState("");
  const [replyTo, setReplyTo] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message || rating === 0 || !stayStartDate || !stayEndDate)
      return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
      rating,
      date: new Date().toLocaleDateString(),
      stayStartDate,
      stayEndDate,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
    setRating(0);
    setHoverRating(0);
    setStayStartDate("");
    setStayEndDate("");
  };

  const handleDeleteComment = (id: number) => {
    if (confirm("Are you sure you want to delete this comment?")) {
      setComments((prev) => prev.filter((c) => c.id !== id));
    }
  };

  const handleReplySubmit = (e: FormEvent, commentId: number) => {
    e.preventDefault();
    if (!replyName || !replyMessage) return;

    const newReply: Reply = {
      id: Date.now(),
      name: replyName,
      message: replyMessage,
      date: new Date().toLocaleDateString(),
    };

    setComments((prev) =>
      prev.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment,
      ),
    );

    setReplyTo(null);
    setReplyName("");
    setReplyMessage("");
  };

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (i < count ? "★" : "☆")).join("");

  const averageRating =
    comments.length === 0
      ? 0
      : comments.reduce((sum, c) => sum + c.rating, 0) / comments.length;

  return (
    <section className="comments-section">
      <h2>Your feedback on your trip</h2>

      <form onSubmit={handleAddComment} className="comment-form">
        <div className="form-group">
          <label htmlFor="name">Name :</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Comment :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stayStartDate">Stay Start Date :</label>
          <input
            id="stayStartDate"
            type="date"
            value={stayStartDate}
            onChange={(e) => setStayStartDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stayEndDate">Stay End Date :</label>
          <input
            id="stayEndDate"
            type="date"
            value={stayEndDate}
            onChange={(e) => setStayEndDate(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating :</label>
          <div id="rating" className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`star ${
                  value <= (hoverRating || rating) ? "filled" : ""
                }`}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
                aria-label={`${value} star`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      {comments.length > 0 && (
        <div className="average-rating">
          <strong>Average rating:</strong>{" "}
          <span className="stars">
            {renderStars(Math.round(averageRating))}
          </span>{" "}
          ({averageRating.toFixed(1)} / 5)
        </div>
      )}

      {comments.length === 0 ? (
        <p>We would enjoy your comments!</p>
      ) : (
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <p>
                <strong>{comment.name}</strong> – <em>{comment.date}</em>
              </p>
              <p className="comment-stay-dates">
                <strong>Stay Dates:</strong> {comment.stayStartDate} to{" "}
                {comment.stayEndDate}
              </p>
              <p className="comment-rating">{renderStars(comment.rating)}</p>
              <p>{comment.message}</p>

              <div className="comment-actions">
                <button type="button" onClick={() => setReplyTo(comment.id)}>
                  Reply
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDeleteComment(comment.id)}
                >
                  Delete
                </button>
              </div>

              {replyTo === comment.id && (
                <form
                  onSubmit={(e) => handleReplySubmit(e, comment.id)}
                  className="reply-form"
                >
                  <input
                    type="text"
                    placeholder="Your name"
                    value={replyName}
                    onChange={(e) => setReplyName(e.target.value)}
                    required
                  />
                  <textarea
                    placeholder="Your reply..."
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    required
                  />
                  <button type="submit">Send Reply</button>
                </form>
              )}

              {comment.replies.length > 0 && (
                <ul className="reply-list">
                  {comment.replies.map((reply) => (
                    <li key={reply.id} className="reply-item">
                      <p>
                        <strong>{reply.name}</strong> – <em>{reply.date}</em>
                      </p>
                      <p>{reply.message}</p>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CommentsSection;
