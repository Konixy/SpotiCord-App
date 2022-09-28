import React, { Component } from "react";
import { useEffect } from "react";
import { Amplitude } from "amplitudejs";

export default class Player extends Component {
  render() {
    return (
      <div>
        <div className="bg-white border-neutral-100 dark:bg-neutral-800 dark:border-neutral-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
          <div className="flex items-center space-x-4">
            <img
              src="/full-stack-radio.png"
              alt=""
              width={88}
              height={88}
              className="flex-none rounded-lg bg-neutral-100"
              loading="lazy"
            />
            <div className="min-w-0 flex-auto space-y-1 font-semibold">
              <p className="text-green-500 dark:text-green-400 text-sm leading-6">
                {"Artist"}
              </p>
              <h2 className="text-neutral-500 dark:text-neutral-400 text-sm leading-6 truncate">
                {"Album"}
              </h2>
              <p className="text-neutral-900 dark:text-neutral-50 text-lg">
                {"Musique"}
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <div className="rounded-full overflow-hidden">
                <input
                  className="w-full h-2 progressBar"
                  type="range"
                  // aria-label="music progress"
                  // aria-valuenow={/* data.seek / 1000 */ 1456}
                  // aria-valuemin={0}
                  // aria-valuemax={
                  //   /* data.server.currentTrack.duraction / 1000 */ 4550
                  // }
                  // onClickCapture={seekEvent}
                />
              </div>
            </div>
            <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
              <div className="text-green-500 dark:text-neutral-100">24:16</div>
              <div className="text-neutral-500 dark:text-neutral-400">
                75:50
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-50 text-neutral-500 dark:bg-neutral-600 dark:text-neutral-200 rounded-b-xl flex items-center">
          <div className="flex-auto flex items-center justify-evenly">
            <button type="button" aria-label="Add to favorites">
              <svg width={24} height={24}>
                <path
                  d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Previous"
            >
              <svg width={24} height={24} fill="none">
                <path
                  d="m10 12 8-6v12l-8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6v12"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button type="button" aria-label="Rewind 10 seconds">
              <svg width={24} height={24} fill="none">
                <path
                  d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5 5v3.111c0 .491.398.889.889.889H9"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <button
            type="button"
            className="bg-white text-neutral-900 dark:bg-neutral-100 dark:text-neutral-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-neutral-900/5 shadow-md flex items-center justify-center"
            aria-label="Pause"
          >
            <svg width={30} height={32} fill="currentColor">
              <rect x={6} y={4} width={4} height={24} rx={2} />
              <rect x={20} y={4} width={4} height={24} rx={2} />
            </svg>
          </button>
          <div className="flex-auto flex items-center justify-evenly">
            <button type="button" aria-label="Skip 10 seconds">
              <svg width={24} height={24} fill="none">
                <path
                  d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="hidden sm:block lg:hidden xl:block"
              aria-label="Next"
            >
              <svg width={24} height={24} fill="none">
                <path
                  d="M14 12 6 6v12l8-6Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 6v12"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-neutral-500 text-neutral-500 dark:text-neutral-100 dark:ring-0 dark:bg-neutral-500"
            >
              1x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function PlayerFunction() {
  console.log(document.querySelector(".song-saved"));
  document.querySelector(".song-saved").addEventListener("click", function () {
    document.querySelector(".song-saved").classList.toggle("saved");
  });

  Amplitude.init({
    bindings: {
      37: "prev",
      39: "next",
      32: "play_pause",
    },
    callbacks: {
      timeupdate: function () {
        let percentage = Amplitude.getSongPlayedPercentage();

        if (isNaN(percentage)) {
          percentage = 0;
        }

        /**
         * Massive Help from: https://nikitahl.com/style-range-input-css
         */
        let slider = document.querySelector(".song-percentage-played");
        slider.style.backgroundSize = percentage + "% 100%";
      },
    },
    songs: [
      {
        name: "First Snow",
        artist: "Emancipator",
        album: "Soon It Will Be Cold Enough",
        url: "https://521dimensions.com/song/FirstSnow-Emancipator.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
      },
      {
        name: "Intro / Sweet Glory",
        artist: "Jimkata",
        album: "Die Digital",
        url: "https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg",
      },
      {
        name: "Offcut #6",
        artist: "Little People",
        album: "We Are But Hunks of Wood Remixes",
        url: "https://521dimensions.com/song/Offcut6-LittlePeople.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg",
      },
      {
        name: "Dusk To Dawn",
        artist: "Emancipator",
        album: "Dusk To Dawn",
        url: "https://521dimensions.com/song/DuskToDawn-Emancipator.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg",
      },
      {
        name: "Anthem",
        artist: "Emancipator",
        album: "Soon It Will Be Cold Enough",
        url: "https://521dimensions.com/song/Anthem-Emancipator.mp3",
        cover_art_url:
          "https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg",
      },
    ],
  });

  window.onkeydown = function (e) {
    return !(e.keyCode == 32);
  };
}

class Player1 extends Component {
  render() {
    return (
      <>
        <div className="bg-[#F8FAFC] dark:bg-[#0A1122] w-screen h-screen flex flex-col items-center justify-center">
          <div className="relative w-player flex flex-col rounded-xl shadow-player-light bg-player-light-background border border-player-light-border dark:shadow-player-dark dark:bg-player-dark-background dark:border-player-dark-border dark:backdrop-blur-xl">
            <div className="px-10 pt-10 pb-4 flex items-center z-50">
              <img
                data-amplitude-song-info="cover_art_url"
                className="w-24 h-24 rounded-md mr-6 border border-bg-player-light-background dark:border-cover-dark-border"
              />
              <div className="flex flex-col">
                <span
                  data-amplitude-song-info="name"
                  className="font-sans text-lg font-medium leading-7 text-slate-900 dark:text-white"
                />
                <span
                  data-amplitude-song-info="artist"
                  className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
                />
                <span
                  data-amplitude-song-info="album"
                  className="font-sans text-base font-medium leading-6 text-gray-500 dark:text-gray-400"
                />
              </div>
            </div>
            <div className="w-full flex flex-col px-10 pb-6 z-50">
              <input
                type="range"
                className="amplitude-song-slider mb-3 song-percentage-played"
                step=".1"
              />
              <div className="flex w-full justify-between">
                <span className="amplitude-current-time text-xs font-sans tracking-wide font-medium text-sky-500 dark:text-sky-300" />
                <span className="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-gray-500" />
              </div>
            </div>
            <div className="h-control-panel px-10 rounded-b-xl bg-control-panel-light-background border-t border-gray-200 flex items-center justify-between z-50 dark:bg-control-panel-dark-background dark:border-gray-900">
              <div className="cursor-pointer song-saved">
                <svg
                  width={26}
                  height={24}
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 7C25 3.68629 22.2018 1 18.75 1C16.1692 1 13.9537 2.5017 13 4.64456C12.0463 2.5017 9.83082 1 7.25 1C3.79822 1 1 3.68629 1 7C1 14.6072 8.49219 20.1822 11.6365 22.187C12.4766 22.7226 13.5234 22.7226 14.3635 22.187C17.5078 20.1822 25 14.6072 25 7Z"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cursor-pointer amplitude-shuffle">
                <svg
                  width={28}
                  height={26}
                  viewBox="0 0 28 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 20C0.447715 20 0 20.4477 0 21C0 21.5523 0.447715 22 1 22V20ZM7.75736 19.2426L8.46447 19.9497H8.46447L7.75736 19.2426ZM20.2426 6.75736L19.5355 6.05025L19.5355 6.05025L20.2426 6.75736ZM27 5L27.7071 5.70711C28.0976 5.31658 28.0976 4.68342 27.7071 4.29289L27 5ZM27 21L27.7071 21.7071C28.0976 21.3166 28.0976 20.6834 27.7071 20.2929L27 21ZM1 4C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6V4ZM7.75736 6.75736L8.46447 6.05025L7.75736 6.75736ZM20.2426 19.2426L20.9497 18.5355L20.2426 19.2426ZM10.4645 10.8787C10.855 11.2692 11.4882 11.2692 11.8787 10.8787C12.2692 10.4882 12.2692 9.85499 11.8787 9.46447L10.4645 10.8787ZM17.5355 15.1213C17.145 14.7308 16.5118 14.7308 16.1213 15.1213C15.7308 15.5118 15.7308 16.145 16.1213 16.5355L17.5355 15.1213ZM23.7071 0.292893C23.3166 -0.0976311 22.6834 -0.0976311 22.2929 0.292893C21.9024 0.683417 21.9024 1.31658 22.2929 1.70711L23.7071 0.292893ZM22.2929 8.29289C21.9024 8.68342 21.9024 9.31658 22.2929 9.70711C22.6834 10.0976 23.3166 10.0976 23.7071 9.70711L22.2929 8.29289ZM23.7071 16.2929C23.3166 15.9024 22.6834 15.9024 22.2929 16.2929C21.9024 16.6834 21.9024 17.3166 22.2929 17.7071L23.7071 16.2929ZM22.2929 24.2929C21.9024 24.6834 21.9024 25.3166 22.2929 25.7071C22.6834 26.0976 23.3166 26.0976 23.7071 25.7071L22.2929 24.2929ZM1 22H3.51472V20H1V22ZM8.46447 19.9497L20.9497 7.46446L19.5355 6.05025L7.05025 18.5355L8.46447 19.9497ZM24.4853 6H27V4H24.4853V6ZM20.9497 7.46446C21.8874 6.52678 23.1592 6 24.4853 6V4C22.6288 4 20.8483 4.7375 19.5355 6.05025L20.9497 7.46446ZM3.51472 22C5.37123 22 7.15171 21.2625 8.46447 19.9497L7.05025 18.5355C6.11257 19.4732 4.8408 20 3.51472 20V22ZM27 20H24.4853V22H27V20ZM3.51472 4H1V6H3.51472V4ZM8.46447 6.05025C7.15171 4.7375 5.37123 4 3.51472 4V6C4.8408 6 6.11257 6.52678 7.05025 7.46446L8.46447 6.05025ZM24.4853 20C23.1592 20 21.8874 19.4732 20.9497 18.5355L19.5355 19.9497C20.8483 21.2625 22.6288 22 24.4853 22V20ZM11.8787 9.46447L8.46447 6.05025L7.05025 7.46446L10.4645 10.8787L11.8787 9.46447ZM20.9497 18.5355L17.5355 15.1213L16.1213 16.5355L19.5355 19.9497L20.9497 18.5355ZM22.2929 1.70711L26.2929 5.70711L27.7071 4.29289L23.7071 0.292893L22.2929 1.70711ZM26.2929 4.29289L22.2929 8.29289L23.7071 9.70711L27.7071 5.70711L26.2929 4.29289ZM22.2929 17.7071L26.2929 21.7071L27.7071 20.2929L23.7071 16.2929L22.2929 17.7071ZM26.2929 20.2929L22.2929 24.2929L23.7071 25.7071L27.7071 21.7071L26.2929 20.2929Z"
                    fill="#94A3B8"
                  />
                </svg>
              </div>
              <div className="cursor-pointer amplitude-prev">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 7C26 5.76393 24.5889 5.05836 23.6 5.8L11.6 14.8C10.8 15.4 10.8 16.6 11.6 17.2L23.6 26.2C24.5889 26.9416 26 26.2361 26 25V7Z"
                    fill="#94A3B8"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 5L6 27"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cursor-pointer amplitude-play-pause w-24 h-24 rounded-full bg-white border border-play-pause-light-border shadow-xl flex items-center justify-center dark:bg-play-pause-dark-background dark:border-play-pause-dark-border">
                <svg
                  className="ml-[10px] play-icon"
                  width={31}
                  height={37}
                  viewBox="0 0 31 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.6901 16.6608L4.00209 0.747111C2.12875 -0.476923 0.599998 0.421814 0.599998 2.75545V33.643C0.599998 35.9728 2.12747 36.8805 4.00209 35.6514L29.6901 19.7402C29.6901 19.7402 30.6043 19.0973 30.6043 18.2012C30.6043 17.3024 29.6901 16.6608 29.6901 16.6608Z"
                    className="fill-slate-500 dark:fill-slate-400"
                  />
                </svg>
                <svg
                  className="pause-icon"
                  width={24}
                  height={36}
                  viewBox="0 0 24 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width={6}
                    height={36}
                    rx={3}
                    className="fill-slate-500 dark:fill-slate-400"
                  />
                  <rect
                    x={18}
                    width={6}
                    height={36}
                    rx={3}
                    className="fill-slate-500 dark:fill-slate-400"
                  />
                </svg>
              </div>
              <div className="cursor-pointer amplitude-next">
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7C6 5.76393 7.41115 5.05836 8.4 5.8L20.4 14.8C21.2 15.4 21.2 16.6 20.4 17.2L8.4 26.2C7.41115 26.9416 6 26.2361 6 25V7Z"
                    fill="#94A3B8"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26 5L26 27"
                    stroke="#94A3B8"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cursor-pointer amplitude-repeat-song">
                <svg
                  width={26}
                  height={24}
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7071 15.7071C18.0976 15.3166 18.0976 14.6834 17.7071 14.2929C17.3166 13.9024 16.6834 13.9024 16.2929 14.2929L17.7071 15.7071ZM13 19L12.2929 18.2929C11.9024 18.6834 11.9024 19.3166 12.2929 19.7071L13 19ZM16.2929 23.7071C16.6834 24.0976 17.3166 24.0976 17.7071 23.7071C18.0976 23.3166 18.0976 22.6834 17.7071 22.2929L16.2929 23.7071ZM19.9359 18.7035L19.8503 17.7072L19.9359 18.7035ZM8.95082 19.9005C9.50243 19.9277 9.97163 19.5025 9.99879 18.9509C10.026 18.3993 9.6008 17.9301 9.04918 17.9029L8.95082 19.9005ZM6.06408 18.7035L5.97851 19.6998L6.06408 18.7035ZM1.07501 13.4958L0.075929 13.5387L1.07501 13.4958ZM1.07501 6.50423L0.0759292 6.46127L1.07501 6.50423ZM6.06409 1.29649L6.14965 2.29282L6.06409 1.29649ZM19.9359 1.29649L19.8503 2.29283L19.9359 1.29649ZM24.925 6.50423L23.9259 6.54718L24.925 6.50423ZM24.925 13.4958L25.9241 13.5387V13.5387L24.925 13.4958ZM16.2929 14.2929L12.2929 18.2929L13.7071 19.7071L17.7071 15.7071L16.2929 14.2929ZM12.2929 19.7071L16.2929 23.7071L17.7071 22.2929L13.7071 18.2929L12.2929 19.7071ZM19.8503 17.7072C17.5929 17.901 15.3081 18 13 18V20C15.3653 20 17.7072 19.8986 20.0215 19.6998L19.8503 17.7072ZM9.04918 17.9029C8.07792 17.8551 7.1113 17.7898 6.14964 17.7072L5.97851 19.6998C6.96438 19.7845 7.95525 19.8515 8.95082 19.9005L9.04918 17.9029ZM2.07408 13.4528C2.02486 12.3081 2 11.157 2 10H0C0 11.1856 0.0254804 12.3654 0.075929 13.5387L2.07408 13.4528ZM2 10C2 8.84302 2.02486 7.69192 2.07408 6.54718L0.0759292 6.46127C0.0254806 7.63461 0 8.81436 0 10H2ZM6.14965 2.29282C8.4071 2.09896 10.6919 2 13 2V0C10.6347 0 8.29281 0.101411 5.97853 0.30016L6.14965 2.29282ZM13 2C15.3081 2 17.5929 2.09896 19.8503 2.29283L20.0215 0.30016C17.7072 0.101411 15.3653 0 13 0V2ZM23.9259 6.54718C23.9751 7.69192 24 8.84302 24 10H26C26 8.81436 25.9745 7.63461 25.9241 6.46127L23.9259 6.54718ZM24 10C24 11.157 23.9751 12.3081 23.9259 13.4528L25.9241 13.5387C25.9745 12.3654 26 11.1856 26 10H24ZM19.8503 2.29283C22.092 2.48534 23.8293 4.29889 23.9259 6.54718L25.9241 6.46127C25.7842 3.20897 23.2653 0.578736 20.0215 0.30016L19.8503 2.29283ZM6.14964 17.7072C3.90797 17.5147 2.17075 15.7011 2.07408 13.4528L0.075929 13.5387C0.215764 16.791 2.7347 19.4213 5.97851 19.6998L6.14964 17.7072ZM2.07408 6.54718C2.17075 4.29889 3.90798 2.48534 6.14965 2.29282L5.97853 0.30016C2.73471 0.578735 0.215764 3.20897 0.0759292 6.46127L2.07408 6.54718ZM20.0215 19.6998C23.2653 19.4213 25.7842 16.791 25.9241 13.5387L23.9259 13.4528C23.8292 15.7011 22.092 17.5147 19.8503 17.7072L20.0215 19.6998Z"
                    fill="#94A3B8"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 7H24.5V5H7.5V7ZM7.5 12H24.5V10H7.5V12ZM24.5 12C26.433 12 28 10.433 28 8.5H26C26 9.32843 25.3284 10 24.5 10V12ZM7.5 10C6.67157 10 6 9.32843 6 8.5H4C4 10.433 5.567 12 7.5 12V10ZM24.5 7C25.3284 7 26 7.67157 26 8.5H28C28 6.567 26.433 5 24.5 5V7ZM7.5 5C5.567 5 4 6.567 4 8.5H6C6 7.67157 6.67157 7 7.5 7V5Z"
                    fill="#94A3B8"
                  />
                  <path
                    d="M5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17V15ZM27 17C27.5523 17 28 16.5523 28 16C28 15.4477 27.5523 15 27 15V17ZM5 17H27V15H5V17Z"
                    fill="#94A3B8"
                  />
                  <path
                    d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22V20ZM27 22C27.5523 22 28 21.5523 28 21C28 20.4477 27.5523 20 27 20V22ZM5 22H27V20H5V22Z"
                    fill="#94A3B8"
                  />
                  <path
                    d="M5 25C4.44772 25 4 25.4477 4 26C4 26.5523 4.44772 27 5 27V25ZM27 27C27.5523 27 28 26.5523 28 26C28 25.4477 27.5523 25 27 25V27ZM5 27H27V25H5V27Z"
                    fill="#94A3B8"
                  />
                </svg>
              </div>
            </div>
            <div className="hidden top-14 w-full absolute ml-auto mr-auto left-0 right-0 text-center max-w-lg h-72 rounded-full bg-highlight blur-2xl dark:block"></div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <a
              className="text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 flex items-center hover:bg-sky-400/20"
              target="_blank"
              href="https://tailwindcss.com/"
            >
              Designed With:{" "}
              <strong className="font-semibold">Tailwind CSS v3.0</strong>
              <svg
                width={3}
                height={6}
                className="ml-3 overflow-visible text-sky-300 dark:text-sky-400"
                aria-hidden="true"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              className="ml-5 text-xs leading-5 font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-400/10 rounded-full py-1 px-3 flex items-center hover:bg-emerald-400/20"
              target="_blank"
              href="https://github.com/serversideup/amplitudejs"
            >
              Functionality By:{" "}
              <strong className="font-semibold">AmplitudeJS v5.2</strong>
              <svg
                width={3}
                height={6}
                className="ml-3 overflow-visible text-emerald-300 dark:text-emerald-400"
                aria-hidden="true"
              >
                <path
                  d="M0 0L3 3L0 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </>
    );
  }
}

function Player2() {
  return (
    <div>
      <div className="bg-white border-neutral-100 dark:bg-neutral-800 dark:border-neutral-500 border-b rounded-t-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8">
        <div className="flex items-center space-x-4">
          <img
            src="/full-stack-radio.png"
            alt=""
            width={88}
            height={88}
            className="flex-none rounded-lg bg-neutral-100"
            loading="lazy"
          />
          <div className="min-w-0 flex-auto space-y-1 font-semibold">
            <p className="text-green-500 dark:text-green-400 text-sm leading-6">
              {"Artist"}
            </p>
            <h2 className="text-neutral-500 dark:text-neutral-400 text-sm leading-6 truncate">
              {"Album"}
            </h2>
            <p className="text-neutral-900 dark:text-neutral-50 text-lg">
              {"Musique"}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="relative">
            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="bg-green-500 dark:bg-green-400 w-1/2 h-2 progressBar"
                role="progressbar"
                aria-label="music progress"
                aria-valuenow={/* data.seek / 1000 */ 1456}
                aria-valuemin={0}
                aria-valuemax={
                  /* data.server.currentTrack.duraction / 1000 */ 4550
                }
                onClickCapture={seekEvent}
              />
            </div>
            <div className="ring-green-500 dark:ring-green-400 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow">
              <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full ring-1 ring-inset ring-neutral-900/5" />
            </div>
          </div>
          <div className="flex justify-between text-sm leading-6 font-medium tabular-nums">
            <div className="text-green-500 dark:text-neutral-100">24:16</div>
            <div className="text-neutral-500 dark:text-neutral-400">75:50</div>
          </div>
        </div>
      </div>
      <div className="bg-neutral-50 text-neutral-500 dark:bg-neutral-600 dark:text-neutral-200 rounded-b-xl flex items-center">
        <div className="flex-auto flex items-center justify-evenly">
          <button type="button" aria-label="Add to favorites">
            <svg width={24} height={24}>
              <path
                d="M7 6.931C7 5.865 7.853 5 8.905 5h6.19C16.147 5 17 5.865 17 6.931V19l-5-4-5 4V6.931Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="hidden sm:block lg:hidden xl:block"
            aria-label="Previous"
          >
            <svg width={24} height={24} fill="none">
              <path
                d="m10 12 8-6v12l-8-6Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6v12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" aria-label="Rewind 10 seconds">
            <svg width={24} height={24} fill="none">
              <path
                d="M6.492 16.95c2.861 2.733 7.5 2.733 10.362 0 2.861-2.734 2.861-7.166 0-9.9-2.862-2.733-7.501-2.733-10.362 0A7.096 7.096 0 0 0 5.5 8.226"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 5v3.111c0 .491.398.889.889.889H9"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <button
          type="button"
          className="bg-white text-neutral-900 dark:bg-neutral-100 dark:text-neutral-700 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-neutral-900/5 shadow-md flex items-center justify-center"
          aria-label="Pause"
        >
          <svg width={30} height={32} fill="currentColor">
            <rect x={6} y={4} width={4} height={24} rx={2} />
            <rect x={20} y={4} width={4} height={24} rx={2} />
          </svg>
        </button>
        <div className="flex-auto flex items-center justify-evenly">
          <button type="button" aria-label="Skip 10 seconds">
            <svg width={24} height={24} fill="none">
              <path
                d="M17.509 16.95c-2.862 2.733-7.501 2.733-10.363 0-2.861-2.734-2.861-7.166 0-9.9 2.862-2.733 7.501-2.733 10.363 0 .38.365.711.759.991 1.176"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 5v3.111c0 .491-.398.889-.889.889H15"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="hidden sm:block lg:hidden xl:block"
            aria-label="Next"
          >
            <svg width={24} height={24} fill="none">
              <path
                d="M14 12 6 6v12l8-6Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 6v12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="rounded-lg text-xs leading-6 font-semibold px-2 ring-2 ring-inset ring-neutral-500 text-neutral-500 dark:text-neutral-100 dark:ring-0 dark:bg-neutral-500"
          >
            1x
          </button>
        </div>
      </div>
    </div>
  );
}

function seekEvent() {
  console.log("event");
}
