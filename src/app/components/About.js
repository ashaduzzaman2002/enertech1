"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/About.module.css";
import "../globals.css";
import right from "../img/right.svg";
import rightArrow from "../img/rightarrow.svg";
import aboutbg1 from "../img/aboutbg1.svg";
import aboutbg2 from "../img/aboutbg2.svg";

const About = () => {
  return (
    <section className={styles.abSection}>
      <div className="index ">
        <div className={styles.aboutMain}>
          <div className={styles.left}>
            <Image src={aboutbg1} id={styles.aboutbg2} />
            <Image src={aboutbg2} id={styles.aboutbg} />
          </div>
          <div className={styles.right}>
            <h4>ABOUT US</h4>
            <h1>
              Outstanding <span>Residential & Commercial Services</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              aliquam non odio in efficitur. Fusce tincidunt purus et dui
              molestie pharetra sits finibus nulla, id varius eros porta eu.
              Quisque egestas porta nunc.
            </p>

            <div className={styles.work}>
              <h5>
                <Image src={right} />
                Electrical Consultancy{" "}
              </h5>
              <h5>
                <Image src={right} />
                Project Documentation{" "}
              </h5>
              <h5>
                <Image src={right} />
                Retrofitting{" "}
              </h5>
              <h5>
                <Image src={right} />
                Break down service{" "}
              </h5>
            </div>

            <Link href="" id="a">
              <div className="btn " id={styles.btnAbout}>
                Read More
                <Image src={rightArrow} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
