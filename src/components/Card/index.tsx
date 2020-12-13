import React, { FC } from "react";
import { CarouselItem } from "../Carousel";
import "./styles.css";

interface Props extends CarouselItem {
  index: number;
  total: number;
  onIndexChange: (param: number) => void;
}

const Card: FC<Props> = ({
  icon,
  title,
  text,
  image,
  index,
  total,
  onIndexChange,
}) => {
  return (
    <div className="container card-container">
      <div className="card-container__text">
        <img src={icon} alt="carousel-icon" />
        <h2>{title}</h2>
        <p>{text}</p>

        <div className="carousel-pagination">
          {Array(total)
            .fill(0)
            .map((_, current) => (
              <button
                onClick={() => onIndexChange(current)}
                className={index === current ? "active" : ""}
              ></button>
            ))}
        </div>
      </div>

      <div className="card-container__image">
        <img src={image} alt={title} />
        <div className="card-container__buttons">
          <button
            className="arrow-left"
            disabled={index === 0}
            onClick={() => onIndexChange(index - 1)}
          >
            <img src="/assets/left-and-right-arrows.svg" alt="arrow-left" />
          </button>
          <button
            className="arrow-right"
            disabled={index === total - 1}
            onClick={() => onIndexChange(index + 1)}
          >
            <img src="/assets/left-and-right-arrows-1.svg" alt="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
