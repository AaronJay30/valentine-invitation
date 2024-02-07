import React, { useState, useEffect } from "react";
import sound1 from "./assets/bgmusic.mp3";
import sound2 from "./assets/yipi.mp3";
import "./App.css";

function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noBtnCount, setNoBtnCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const [musicPlayed, setMusicPlayed] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 5000); // Change the delay to 2000 milliseconds (2 seconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  const btnFontSize = counter * 50 + 16;

  const noBtnPhrase = [
    "No",
    "Are you sure?",
    "Pretty Please!",
    "Promise?",
    "Don't do this to me :<",
    "Im gonna cry ....",
    "You're breaking my heart </3",
    "Im sad now :(",
  ];

  const gifLink = [
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExazV5bjFiNzh3cm85ZDQ5NXYyYjYzOTFlZDUwcjYzbDZoZjA0bWhkMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9Y5BbDSkSTiY8/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGNpZHdhZDMxNjY4NjRla3ZuY3Jsd3ZkYXI5eHZ0dHFnNmRqc3d3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7SF5scGB2AFrgsXP63/giphy.gif",
    "https://i.giphy.com/aZ4sQUpybai5y.webp",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmxuNWdrMnRqcDlndGdxdTkydnIxem4yd2F4bTh2ZDV1bXdnYXhhciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I1nwVpCaB4k36/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDEwbW5uMXVxMmxyMGhtajJ1aTdpZTAydnZqNDRwdnNqaml4MXZ6bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d2lcHJTG5Tscg/giphy.gif",
    "https://i.giphy.com/TW8Ma1a8ZsZ8I.webp",
    "https://i.giphy.com/klu2KSBQwdYA.webp",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG8weHRtY2tnZXBrazFxMDA1MGJxaWV1NWxlYzZ4bWVwMnFwcmR6ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OaJXHKouvOlK2ueDWB/giphy.gif",
  ];

  function handleClick() {
    setNoBtnCount((noBtnCount + 1) % noBtnPhrase.length);
    setCounter(counter + 1);
  }

  useEffect(() => {
    function playBackgroundMusic() {
      const audio = new Audio(sound1);
      audio.loop = true;
      audio.play();
      setMusicPlayed(true);
    }

    if (!musicPlayed) {
      document.body.addEventListener("click", playBackgroundMusicOnce);
      document.body.addEventListener("touchstart", playBackgroundMusicOnce);
    }

    function playBackgroundMusicOnce() {
      playBackgroundMusic();
      document.body.removeEventListener("click", playBackgroundMusicOnce);
      document.body.removeEventListener("touchstart", playBackgroundMusicOnce);
    }

    return () => {
      document.body.removeEventListener("click", playBackgroundMusicOnce);
      document.body.removeEventListener("touchstart", playBackgroundMusicOnce);
    };
  }, [musicPlayed]);

  function handleYesButtonClick() {
    setYesPressed(true);
    const yippi = new Audio(sound2);
    yippi.play();
  }

  return (
    <>
      {loaderVisible ? (
        <div className="loaderContainer">
          <div className="loader"></div>
          <div className="loaderTips">
            <span className="tipsHeader">TIPS:</span>
            <span>Click the screen if your on pc to enjoy!</span>
            <span>
              If you are in phone refresh and repeatedly tap the screen!
            </span>
          </div>
        </div>
      ) : (
        <div className="valentineContainer">
          <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {yesPressed ? (
            <div className="yesContainer">
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
              <span>
                <h1 style={{ marginBottom: 0 }}>Yeheeey!</h1>
                <h3>See youu on February 14 :) </h3>
              </span>

              <span style={{ marginBottom: 4 }}>Thank you for saying yes!</span>
              <footer className="footer">
                <a
                  href="https://aaronjay30.github.io/aaronjay_portfolio/"
                  target="_blank"
                >
                  © Aaron Jay Gabato. Buy me a Coffee! ☕
                </a>
              </footer>
            </div>
          ) : (
            <div className="noContainer">
              {counter == 0 ? (
                <img
                  className="bearImg"
                  src="https://media.tenor.com/J6xumGwaxh8AAAAi/flowers-flower.gif"
                />
              ) : (
                <img className="bearImg" src={gifLink[noBtnCount]} />
              )}

              <h2>Will you be my valentine?</h2>
              <div
                className="buttonContainer"
                style={{ columnGap: counter * 40 + 10 }}
              >
                <button
                  className="yesBtn btn"
                  onClick={handleYesButtonClick}
                  style={{
                    fontSize: btnFontSize,
                    borderRadius: counter * 10 + 10,
                  }}
                >
                  Yes
                </button>
                <button className="noBtn btn" onClick={handleClick}>
                  {noBtnPhrase[noBtnCount]}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
