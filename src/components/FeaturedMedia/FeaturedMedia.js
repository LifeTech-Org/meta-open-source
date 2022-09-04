import React from "react";
import "./FeaturedMedia.css";
import FeaturedMediaCard from "./FeaturedMediaCard";
import FeaturedMediaImage1 from "../../assets/imgs/featured-media-1.jpg";
import FeaturedMediaImage2 from "../../assets/imgs/featured-media-2.jpg";
import FeaturedMediaImage3 from "../../assets/imgs/featured-media-3.jpg";

function FeaturedMedia() {
  return (
    <section className="featured__media__cards">
      <FeaturedMediaCard
        img={{ src: FeaturedMediaImage1, alt: "featured media image 1" }}
        title={"open source: 2021 year in review"}
        date={"january 24, 2022"}
      />
      <FeaturedMediaCard
        img={{ src: FeaturedMediaImage2, alt: "featured media image 2" }}
        title={"the diff episode 10: talking open source with paul o'shannessy"}
        date={"december 7, 2021"}
      />
      <FeaturedMediaCard
        img={{ src: FeaturedMediaImage3, alt: "featured media image 3" }}
        title={"explain like i'm 5: season 3"}
        date={"september 8, 2021"}
      />
    </section>
  );
}

export default FeaturedMedia;
