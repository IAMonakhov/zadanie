"use client";

import { useRef } from "react";
import "@google/model-viewer";

import classes from "./ModelViewer.module.scss";

interface IModelViewerProps {
  src: string;
}

const ModelViewer: React.FC<IModelViewerProps> = ({ src }) => {
  const modelViewerRef = useRef<HTMLElement>(null);

  return (
    // @ts-ignore
    <model-viewer
      ref={modelViewerRef}
      src={src}
      alt="3D model"
      camera-controls
      auto-rotate
      className={classes.model}
    />
  );
};

export default ModelViewer;
