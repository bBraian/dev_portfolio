import { BrowserRouter } from "react-router-dom";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { Router } from "./Router";
import { AppContextProvider } from "./context/AppContext";

export function App() {
  return (
    <AppContextProvider>
      {/* LazyMotion + `m` components ship only the animation features we use. */}
      <LazyMotion features={domAnimation} strict>
        <MotionConfig reducedMotion="user">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </MotionConfig>
      </LazyMotion>
    </AppContextProvider>
  );
}
