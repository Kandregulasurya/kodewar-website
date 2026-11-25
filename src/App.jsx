import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CinematicIntro from "./Components/CinematicIntro";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home page/HomePage";
import Aboutpage from "./Pages/About Page/Aboutpage";
import WorkPage from "./Pages/Work page/WorkPage";
import Contactpage from "./Pages/Contact Page/Contactpage";


import "./App.css";

function App() {

  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {

    // Your cinematic intro duration
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);

    return () => clearTimeout(introTimer);

  }, []);

  return (
    <BrowserRouter>

      {showIntro ? (

        /* =========================
           CINEMATIC INTRO
        ========================= */

        <CinematicIntro />

      ) : (

        /* =========================
           HOME PAGE
        ========================= */

        <>
          <Navbar />

          <Routes>

            <Route
              path="/"
              element={<HomePage/>}
            />
            <Route
              path="/About"
              element={<Aboutpage/>}
            />
            <Route
              path="/work"
              element={<WorkPage/>}
            />
            <Route
              path="/Contact"
              element={<Contactpage/>}
            />
           
           
          </Routes>
        </>

      )}

    </BrowserRouter>
  

  );
}

export default App;