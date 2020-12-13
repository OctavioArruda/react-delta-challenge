import React, { useState } from "react";

import "./App.css";

import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <Navbar onButtonClick={() => setIsExpanded(true)} />
      <Menu
        onButtonClick={() => setIsExpanded(false)}
        isExpanded={isExpanded}
      />
      <Carousel
        items={[
          {
            icon: "/assets/truck.svg",
            title: 'Carousel 1',
            text:
              "Lorem ipsum dolo sit amet, consectetur adipiscing elit. Ut ac urna ipsum. Morbi sed ante id nisi auctor convallis." +
              "Maecenas venenatis neque vitae sapien pharetra feugiat.",
            image: "/assets/carousel-bg-1.png",
          },
          {
            icon: "/assets/truck.svg",
            title: 'Carousel 2',
            text:
              "Lorem ipsum dolo sit amet, consectetur adipiscing elit. Ut ac urna ipsum. Morbi sed ante id nisi auctor convallis." +
              "Maecenas venenatis neque vitae sapien pharetra feugiat.",
            image: "/assets/carousel-bg-2.png",
          },
          {
            icon: "/assets/maps-and-location.svg",
            title: 'Carousel 3',
            text:
              "Lorem ipsum dolo sit amet, consectetur adipiscing elit. Ut ac urna ipsum. Morbi sed ante id nisi auctor convallis." +
              "Maecenas venenatis neque vitae sapien pharetra feugiat.",
            image: "/assets/carousel-bg-3.png",
          },
        ]}
      />
    </>
  );
}

export default App;
