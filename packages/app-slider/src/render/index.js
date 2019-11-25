// @flow
import React from "react";
import Slider from "./components/Slider";

export default [
  {
      name: "pb-render-element-slider",
      type: "pb-render-page-element",
      elementType: "slider",
      render(props) {
          return <Slider {...props} />;
      }
  }
];
