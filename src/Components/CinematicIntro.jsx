import React, { useEffect, useState } from "react";
import "../Styles/CinematicIntro.css";

function CinematicIntro({ onFinish }) {
  const [scene, setScene] = useState(1);
  const [number, setNumber] = useState(1);
  const [showLogo, setShowLogo] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timers = [];

    timers.push(
      setTimeout(() => {
        setScene(2);
        setNumber(1);
      }, 1000)
    );

    timers.push(
      setTimeout(() => {
        setNumber(2);
      }, 1800)
    );

    timers.push(
      setTimeout(() => {
        setNumber(3);
      }, 2600)
    );

    timers.push(
      setTimeout(() => {
        setScene(3);
      }, 3400)
    );

    timers.push(
      setTimeout(() => {
        setShowLogo(true);
      }, 4300)
    );

    timers.push(
      setTimeout(() => {
        onFinish();
      }, 6000)
    );

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }

        return prev + 100 / 60;
      });
    }, 100);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [onFinish]);

  const skipIntro = () => {
    onFinish();
  };

  return (
    <div className="cinematic-intro">

      {/* Scene 1 */}
      {scene === 1 && (
        <div className="intro-scene camera-scene">

          <div className="camera-wrapper">

            <div className="camera-leg leg-one"></div>
            <div className="camera-leg leg-two"></div>
            <div className="camera-leg leg-three"></div>

            <div className="camera-body">

              <div className="film-reel reel-left">
                <span></span>
              </div>

              <div className="film-reel reel-right">
                <span></span>
              </div>

              <div className="camera-screen"></div>

              <div className="camera-lens">
                <div></div>
              </div>

              <div className="camera-light"></div>

            </div>

          </div>

          <div className="intro-hud">
            <span className="hud-left">
              CAMERA ROLLING
            </span>

            <span className="hud-right">
              <i></i>
              REC
            </span>

            <span className="time-code">
              00:00:01
            </span>
          </div>

        </div>
      )}

      {scene === 2 && (
        <div className="intro-scene countdown-scene">

          <div className="countdown-ring">

            <div className="countdown-sweep"></div>

            <div className="inner-ring"></div>

            <div className="cross-horizontal"></div>
            <div className="cross-vertical"></div>

            <div className="count-number">
              {number}
            </div>

          </div>

          <div className="intro-hud">
            <span className="hud-left">
              TAKE {number}
            </span>

            <span className="hud-right">
              <i></i>
              REC
            </span>
          </div>

        </div>
      )}

      {/* Scene 3 */}
      {scene === 3 && (
        <div className="intro-scene theater-scene">

          <div className="theater-room">

            <div className="projector-beam"></div>

            <div className="cinema-screen">
              <div className="screen-glow"></div>
            </div>

            <div className="speaker speaker-left"></div>
            <div className="speaker speaker-right"></div>

            <div className="cinema-seats">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="floor-glow"></div>

          </div>

          {showLogo && (
            <div className="intro-logo">

              <h1>
                PK
              </h1>

              <p>
                ENTERTAINMENTS
              </p>

            </div>
          )}

          <div className="intro-hud">
            <span className="hud-left">
              NOW SHOWING
            </span>

            <span className="hud-right">
              <i></i>
              REC
            </span>
          </div>

        </div>
      )}

      {/* Effects */}
      <div className="intro-vignette"></div>
      <div className="intro-grain"></div>

      {/* Progress */}
      <div
        className="intro-progress"
        style={{ width: `${progress}%` }}
      ></div>

      {/* Skip */}
      <button
        className="skip-intro"
        onClick={skipIntro}
      >
        Skip intro
      </button>

    </div>
  );
}

export default CinematicIntro;