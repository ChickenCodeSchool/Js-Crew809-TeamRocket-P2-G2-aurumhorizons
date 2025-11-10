import { useState, type FormEvent, type FC } from "react";
import "./CommentSection.css";

interface Comment {
  id: number;
  name: string;
  message: string;
  rating: number;
  date: string;
  stayDates: string;
}

const CommentsSection: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [stayDates, setStayDates] = useState("");

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !message || rating === 0 || !stayDates) return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      message,
      rating,
      date: new Date().toLocaleDateString(),
      stayDates,
    };

    setComments([newComment, ...comments]);
    setName("");
    setMessage("");
    setRating(0);
    setHoverRating(0);
    setStayDates("");
  };

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (i < count ? "★" : "☆")).join("");

  const averageRating =
    comments.length === 0
      ? 0
      : comments.reduce((sum, c) => sum + c.rating, 0) / comments.length;

  return (
    <section className="comments-section">
      <h2>Your feedback on our trips</h2>

      <form onSubmit={handleAddComment} className="comment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Comment:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stayDates">Stay Dates:</label>
          <input
            id="stayDates"
            type="text"
            placeholder="e.g. 06/01/2025 - 06/07/2025"
            value={stayDates}
            onChange={(e) => setStayDates(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <div id="rating" className="star-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`star ${value <= (hoverRating || rating) ? "filled" : ""}`}
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
        <p>Be the first to leave a comment!</p>
      ) : (
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment.id} className="comment-item">
              <p>
                <strong>{comment.name}</strong> – <em>{comment.date}</em>
              </p>
              <p className="comment-stay-dates">
                <strong>Stay Dates:</strong> {comment.stayDates}
              </p>
              <p className="comment-rating">{renderStars(comment.rating)}</p>
              <p>{comment.message}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default CommentsSection;
