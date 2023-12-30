
"use client"
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Recent.module.css";
import "../globals.css";
import r1 from "../img/r1.svg";
import r2 from "../img/r2.svg";
import r3 from "../img/r3.svg";
import rightArrow from "../img/rightarrow.svg";
import recentbg from "../img/recentbg.svg";

const Recents = () => {
  const [images, setImages] = useState([

    r1, r2, r3, r1, r2, r3, r1, r2, r3, r1, r2, r3, r1, r2, r3,



]);
  const [scrollIndex, setScrollIndex] = useState(0);

  const imageContainerRef = useRef(null);
  const startXRef = useRef(null);
  const scrollLeftRef = useRef(null);

  const handleMouseDown = (e, index) => {
    startXRef.current = e.pageX - imageContainerRef.current.offsetLeft;
    scrollLeftRef.current = imageContainerRef.current.scrollLeft;
    setScrollIndex(index);
  };

  const handleMouseMove = (e) => {
    if (!startXRef.current) return;
    const x = e.pageX - imageContainerRef.current.offsetLeft;
    const walk = x - startXRef.current;
    imageContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    startXRef.current = null;
    scrollLeftRef.current = null;
  };

  return (
    <section>
      <div className={styles.index}>
        <div className={styles.up}>
          <h2>
            Our Recent <span>Projects</span>{" "}
          </h2>
          <Link href="" id="a">
            <div className="btn mobile-hide ">
              View All
              <Image src={rightArrow} />
            </div>
          </Link>
        </div>

        <div
          className={styles.down}
          ref={imageContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
            <Image src={recentbg} className={styles.bg}/>

          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.imageWrapper} ${
                index === scrollIndex ? styles.active : ""
              }`}
            >
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                // width={278} // Set the desired width
                // height={371} // Set the desired height
              />
            </div>
          ))}



        </div>
        <Link href="" id="a">
            <div className="btn desktop-hide ">
              View All
              <Image src={rightArrow} />
            </div>
          </Link>
      </div>
    </section>
  );
};

export default Recents;
