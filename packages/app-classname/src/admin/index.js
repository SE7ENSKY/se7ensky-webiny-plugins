// @flow
import React from "react";
import { createElement, createRow, createColumn } from "@webiny/app-page-builder/editor/utils";

import classnameElement from "./classnameElement";
import render from "../render";


export default [
  ...render,
  ...classnameElement,
  {
    name: "pb-editor-block-classname",
    type: "pb-editor-block",
    category: "general",
    title: "ClassName block",
    create(options: Object = {}) {
        return createElement("classname", {
            ...options,
            elements: [
                createRow({
                    elements: [createColumn({ data: { width: 100 } })]
                })
            ]
        });
    },
    image: {
        width: 500,
        height: 70,
        aspectRatio: 500 / 70
    },
    preview() {
        return <img src="https://via.placeholder.com/500x70?text=Block+with+custom+className" alt={"ClassName block"} />;
    }
  }
]
