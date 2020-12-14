import React, { useState } from "react";

import "./App.css";

import Carousel, { CarouselItem } from "./components/Carousel";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Hero from "./components/Hero";

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const carouselItems: CarouselItem[] = 
      [{
        icon: "/assets/truck.svg",
        title: "Carousel 1",
        text:
          "Lorem ipsum dolo sit amet, consectetur adipiscing elit. Ut ac urna ipsum. Morbi sed ante id nisi auctor convallis." +
          "Maecenas venenatis neque vitae sapien pharetra feugiat.",
        image: "/assets/carousel-bg-1.png",
      },
      {
        icon: "/assets/truck.svg",
        title: "Carousel 2",
        text:
          "Lorem ipsum dolo sit amet, consectetur adipiscing elit. Ut ac urna ipsum. Morbi sed ante id nisi auctor convallis." +
          "Maecenas venenatis neque vitae sapien pharetra feugiat.",
        image: "/assets/carousel-bg-2.png",
      },
      {
        icon: "/assets/maps-and-location.svg",
        title: "Carousel 3",
        text:
          "Lorem ipsum dolo sit amet, consectetur adipiscing elit. Ut ac urna ipsum. Morbi sed ante id nisi auctor convallis." +
          "Maecenas venenatis neque vitae sapien pharetra feugiat.",
        image: "/assets/carousel-bg-3.png",
      }];

  return (
    <>
      <Navbar onButtonClick={() => setIsExpanded(true)} />
      <Hero />
      <Menu
        onButtonClick={() => setIsExpanded(false)}
        isExpanded={isExpanded}
      />
      <Carousel
        items={carouselItems}
      />
    </>
  );
}

export default App;
