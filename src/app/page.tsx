"use client";

import { useEffect, useState } from "react";
import FirstVisitOverlay from "./components/FirstVisitOverlay";

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    // if (!hasVisited) {
    //   setIsFirstVisit(true);
    //   localStorage.setItem("hasVisited", "true");
    // }

    if (true) {
      setIsFirstVisit(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return <main>{isFirstVisit && <FirstVisitOverlay />}</main>;
}
