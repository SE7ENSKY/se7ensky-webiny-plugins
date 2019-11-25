// @flow
import React from "react";
import { createElement, createRow, createColumn } from "@webiny/app-page-builder/editor/utils";

import sliderElement from "./sliderElement";


export default [
  ...sliderElement,
  {
    name: "pb-editor-block-slider",
    type: "pb-editor-block",
    category: "general",
    title: "Slider block",
    create(options: Object = {}) {
        return createElement('slider', {
            ...options,
            component: 'slider'
        });
    },
    image: {
        width: 500,
        height: 70,
        aspectRatio: 500 / 70
    },
    preview() {
        return <img src="https://via.placeholder.com/500x70?text=Just+add+rows+to+it" alt={"Slider block"} />;
    }
  }
];
