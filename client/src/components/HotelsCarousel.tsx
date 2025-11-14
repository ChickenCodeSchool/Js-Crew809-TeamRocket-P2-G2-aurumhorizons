import type React from "react";
import { useEffect, useState } from "react";
import "./HotelsCarousel.css";

import hotel1 from "../assets/images/hotel-egypt-1.jpg.webp";
import hotel2 from "../assets/images/hotel-egypt-2.jpg.webp";
import hotel3 from "../assets/images/hotel-egypt-3.jpg.avif";

interface Hotel {
  img: string;
  title: string;
  description: string;
  link: string;
}

const hotels: Hotel[] = [
  {
    img: hotel1,
    title: "The Nile Serenity",
    description:
      "Located along the Nile River, The Nile Serenity offers spacious suites with breathtaking views of the water. Every detail is designed for comfort and refinement, featuring personalized service and a luxurious spa. Guests can enjoy sunrise boat rides, gourmet dining with local ingredients, and a peaceful atmosphere that invites relaxation and contemplation of Egypt's iconic landscapes.",
    link: "https://fr.hotels.com/ho324822/?rfrr=HSR&selectedRatePlan=403413845&star=50&top_cur=EUR&useRewards=false&userIntent=&destination=Hurghada%2C+Gouvernorat+de+la+Mer-Rouge%2C+Égypte&chkin=2025-11-26&sort=RECOMMENDED&destType=MARKET&referrerUrl=aHR0cHM6Ly9mci5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cHBR-ym2DQ2R6K0aUQKM3Nn_IjTVvhoGqKMF8sJrUUonAI2UtlrPOxoCuBUQAvD_BwE&neighborhoodId=553248633981717834&expediaPropertyId=2392023&chkout=2025-11-27&searchId=c251bcba-c5fc-4992-82d3-5c73e6fe7cad&top_dp=191&x_pwa=1&regionId=1512&latLong=27.257899%2C33.811694&rm1=a2&selectedRoomType=326985067&semcid=HCOM-FR.UB.GOOGLE.DT-c-FR.HOTEL&pwa_ts=1762962766264&semdtl=a112650294635.b1120181455557.g1kwd-463526718907.e1c.m1CjwKCAiA_dDIBhB6EiwAvzc1cHBR-ym2DQ2R6K0aUQKM3Nn_IjTVvhoGqKMF8sJrUUonAI2UtlrPOxoCuBUQAvD_BwE.r1422714a73da33b8182540b8cc80e32fc7e53d339493cfbe50c9b3430b6959a05.c1PR-K1ne6lHkIoMkTGoF4eA.j19055561.k12818.d1511057426697.h1e.i1.l1.n1.o1.p1.q1.s1hotels+5+etoiles+hurghada.t1.x1.f1.u1.v1.w1",
  },
  {
    img: hotel2,
    title: "Pyramids Horizon Hotel",
    description:
      "Just steps away from the majestic Pyramids of Giza, Pyramids Horizon Hotel blends traditional elegance with modern comfort. Its rooms offer exceptional views of ancient monuments, while the hotel features a refined restaurant, a panoramic lounge, and private excursions. Each stay is designed to immerse travelers in history and culture while enjoying discreet and sophisticated luxury.",
    link: "https://fr.hotels.com/ho546722/bellevue-beach-hotel-el-gouna-egypte?chkin=2025-11-26&chkout=2025-11-27&x_pwa=1&rfrr=HSR&pwa_ts=1762962775565&referrerUrl=aHR0cHM6Ly9mci5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=false&rm1=a2&regionId=1512&destination=Hurghada%2C%20Gouvernorat%20de%20la%20Mer-Rouge%2C%20Égypte&destType=MARKET&latLong=27.257899%2C33.811694&star=50&sort=RECOMMENDED&top_dp=409&top_cur=EUR&gclid=CjwKCAiA_dDIBhB6EiwAvzc1cHBR-ym2DQ2R6K0aUQKM3Nn_IjTVvhoGqKMF8sJrUUonAI2UtlrPOxoCuBUQAvD_BwE&semcid=HCOM-FR.UB.GOOGLE.DT-c-FR.HOTEL&semdtl=a112650294635.b1120181455557.g1kwd-463526718907.e1c.m1CjwKCAiA_dDIBhB6EiwAvzc1cHBR-ym2DQ2R6K0aUQKM3Nn_IjTVvhoGqKMF8sJrUUonAI2UtlrPOxoCuBUQAvD_BwE.r1422714a73da33b8182540b8cc80e32fc7e53d339493cfbe50c9b3430b6959a05.c1PR-K1ne6lHkIoMkTGoF4eA.j19055561.k12818.d1511057426697.h1e.i1.l1.n1.o1.p1.q1.s1hotels%205%20etoiles%20hurghada.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=325447659&selectedRatePlan=401872165&expediaPropertyId=12315381&searchId=ffff4e8c-d652-443a-a7c2-a940ddb55b2d",
  },
  {
    img: hotel3,
    title: "Desert Oasis Retreat",
    description:
      "In the heart of the Egyptian desert, Desert Oasis Retreat is a true sanctuary of peace. Secluded villas provide privacy and comfort with terraces overlooking golden dunes and stunning sunsets. The hotel offers exclusive activities such as private safaris, local cooking classes, and spa treatments, creating a unique experience where luxury and nature meet for unforgettable memories.",
    link: "https://www.stayforlong.fr/hotel/eg/meraki-resort-adults-only-all-inclusive_hurghada-and-vicinity?adults=2&checkIn=2025-11-16&checkOut=2025-11-19&internal_navigation=true&lang=fr&market=fr",
  },
];

const HotelsCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const next = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % hotels.length);
      setFade(true);
    }, 400);
  };

  const prev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + hotels.length) % hotels.length);
      setFade(true);
    }, 400);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, []);

  const hotel = hotels[index];

  return (
    <div className="hotels-section">
      <h2 className="section-title">Our Exclusive Hotels</h2>
      <div className="hotels-carousel-page">
        <div className="hotels-text-section">
          <h2>{hotel.title}</h2>
          <p>{hotel.description}</p>
          <a
            href={hotels[index].link}
            target="_blank"
            rel="noopener noreferrer"
            className="hotel-link-button"
          >
            Visit Website
          </a>
        </div>

        <div className="hotels-carousel-section">
          <img
            src={hotel.img}
            alt={hotel.title}
            className={`carousel-image ${fade ? "fade-in" : "fade-out"}`}
          />
          <div className="carousel-buttons">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button onClick={prev}>❮</button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button onClick={next}>❯</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsCarousel;
