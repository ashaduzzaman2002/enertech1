"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import "../globals.css";
import styles from "@/app/style/AboutPage.module.css";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer2";
import a1 from "../img/a1.svg";
import a2 from "../img/a2.svg";
import s1 from "../img/s1.svg";
import s2 from "../img/s2.svg";
import s3 from "../img/s3.svg";
import s4 from "../img/s4.svg";
import hori from "../img/hori.svg";

const page = () => {
  return (
    <div>
      <Header />

     <div className="hero-all">
        <h1>About Us</h1>
            <Image src={hori}/>
      </div>

      <About />

      <div className="index">
        <div className={styles.service}>
          <div className={styles.box}>
            <div className={styles.left}>
              <h1>Our Story</h1>
              <h2>Providing Electrical Services Since 2019</h2>
              <p>
                Enertech Systems was established in 2019 as a leader in
                Electrical Power & Energy solutions. Our seasoned technocrats
                with vast industry experience offer specialized services in
                electrical power distribution, control systems, power
                measurement, and energy analysis for diverse industries.
              </p>
              <p>
                At Enertech, we focus on more than just providing top-tier
                electrical products. We’re committed to delivering comprehensive
                power and energy solutions tailored to meet the unique needs
              </p>
            </div>
            <div className={styles.right}>
              <Image src={a1} />
            </div>
          </div>
          <div className={`${styles.box} ${styles.box21}`} id={styles.box2}>
            <div className={styles.right}>
              <Image src={a2} />
            </div>
            <div className={styles.left}>
              <h1>Our Story</h1>
              <h2>Providing Electrical Services Since 2019</h2>
              <p>
                Enertech Systems was established in 2019 as a leader in
                Electrical Power & Energy solutions. Our seasoned technocrats
                with vast industry experience offer specialized services in
                electrical power distribution, control systems, power
                measurement, and energy analysis for diverse industries.
              </p>
              <p>
                At Enertech, we focus on more than just providing top-tier
                electrical products. We’re committed to delivering comprehensive
                power and energy solutions tailored to meet the unique needs
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="index">

        <div className={styles.up}>
                <h1>Our Partners</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis aliquet odio, sit amet rutrum magna. Duis cursus leo in condimentum cursus. Etiam vitae interdum ex, suscipit aliquam erat.</p>
        </div>


        <div className={styles.down}>
                  <Image src={s1}/><hr />
                  <Image src={s2}/><hr />
                  <Image src={s3}/><hr />
                  <Image src={s4}/>
        </div>




      </section>
      <Footer/>

    </div>
  );
};

export default page;
