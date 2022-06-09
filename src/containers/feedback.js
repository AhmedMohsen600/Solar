import React from "react";
import { Feedback, SmcGroup, Hero } from "../components";
import data from "../fixtures/feedback.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function FeedbackContainer() {
  return (
    <Feedback>
      <SmcGroup.Title>
        Students Feedbacks
        <Hero.Line bg />
      </SmcGroup.Title>
      <Feedback.Inner>
        {data.map(({ src }) => (
          <Feedback.CardImage key={src}>
            <LazyLoadImage
              height="100%"
              width="100%"
              src={src}
              alt={src}
              effect="blur"
              style={{
                borderRadius: "16px",
                boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.12)",
              }}
            />
          </Feedback.CardImage>
        ))}
      </Feedback.Inner>
    </Feedback>
  );
}
