"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import About from "@/app/components/About";
import Product from "@/app/components/Product";
import Testimonial from "@/app/components/Testimonial";
import Recents from "@/app/components/Recents";
import Blog from "@/app/components/Blog";
import Footer from "@/app/components/Footer";
import styles from "@/app/style/Index.module.css";
import "../app/globals.css";
import sline from "./img/sline.svg";
import rightArrow from "./img/rightarrow.svg";
import prev from "./img/prev.svg";
import next from "./img/next.svg";
import herobg from "./img/heroel.svg";
import herobg3 from "./img/heroel3.svg";




const heroImages = [
  herobg,
  herobg3


];

export default function Home() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main>
      <Header />
      <div className={styles.mainHero}>
        <div className={styles.heroLeft}>
          <div className={styles.line}>
            <Image src={sline} />
          </div>
          <div className={styles.heroDetail}>
            <h3>
              Welcome To <span>Enertech System</span>{" "}
            </h3>
            <h1>
              need any <span>help we are ready for you</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              facilisis aliquet odio, sit amet rutrum magna. Duis cursus leo in
              condimentum cursus.{" "}
            </p>
            <Link href="" id="a">
              <div className="btn btn-hero">
                Get Estimate Now <Image src={rightArrow} />
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImg}>
            <Image src={heroImages[currentImageIndex]} id={styles.heroImg} />
            <div className={styles.prevImg}>
              <Image src={prev} onClick={handlePrevClick} />
              <Image src={next} onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </div>

      <About/>
      <Product/>
      <Testimonial/>
      <Recents/>
      <Blog/>
      <Footer/>
    </main>
  );
}
