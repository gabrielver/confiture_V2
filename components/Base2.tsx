import React, { useEffect, useLayoutEffect, useRef } from "react";
import Hero from "./Hero";
import Info from "./Info";
import InfoBis from "./InfoBis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { start } from "repl";

//const ScrollTrigger = dynamic(import("gsap/ScrollTrigger") as any, {ssr: false});
gsap.registerPlugin(ScrollTrigger)

function Base2() {

  if (typeof window !== "undefined") {
    const canvas: HTMLCanvasElement = document.querySelector("#hero-lightpass") as HTMLCanvasElement;
    console.log(canvas);
    const context = canvas.getContext("2d");
    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 120;
    const currentFrame = (index: number) => (
  `webp/${(index + 1).toString().padStart(5, '0')}.webp`
);

const images = []
const confiture = {
  frame: 0
};


for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

const anim = function render() {
  context!.clearRect(0, 0, canvas.width , canvas.height);
  context!.drawImage(images[confiture.frame], 0, 0); 
}

gsap.to(confiture, {
  frame: frameCount -1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger:".main-container",
    scrub: 1,
    start: "top top",
    end: "bottom bottom"
  },
  onUpdate: anim // use animation onUpdate instead of scrollTrigger's onUpdate
});


images[0].onLoad = anim;



  }
  return (
    <div className="main-container">
      {/* <video className='product_video'src="/pot.mkv" autoPlay={false}   >
      </video> */}
      <canvas id="hero-lightpass"></canvas>
      {/*hero */}
      <Hero />
      {/* info */}
      <Info />
      {/* infobis */}
      <InfoBis />
    </div>
  );
}

export default Base2;
