import React, { useState, FC } from "react";

import Card from "../Card";

export interface CarouselItem {
  icon: string;
  title: string;
  text: string;
  image: string;
}

interface Props {
  items: CarouselItem[];
}

const Carousel: FC<Props> = ({ items }) => {
  const [index, setIndex] = useState<number>(0);
  const item = items[index];

  if (!items.length) {
    return null;
  }

  return (
    <Card
      icon={item.icon}
      title={item.title}
      text={item.text}
      image={item.image}
      index={index}
      total={items.length}
      onIndexChange={setIndex}
    />
  );
};

export default Carousel;
