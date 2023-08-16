import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { useResizeDetector } from 'react-resize-detector';
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function AppWithResizeDetector() {
  const { width, ref } = useResizeDetector();

  return (
    <div ref={ref}>
      <App width={width} />
    </div>
  );
}

root.render(
  <StrictMode>
    <AppWithResizeDetector />
  </StrictMode>
);
