"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Blog.module.css";
import "../globals.css";
import rightArrow from "../img/rightarrow.svg";
import b1 from "../img/b1.svg";
import b2 from "../img/b2.svg";
const Blog = () => {
  return (
    <section>
      <div className="index">
        <div className={styles.up}>
          <div className={styles.upDetail}>
            <h1>
              Latest <span>News & Blog</span>{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              aliquam non odio in efficitur. Fusce tincidunt purus et dui
              molestie pharetra sits finibus nu
            </p>
          </div>
          <Link href="" id="a" >
            <div className="btn  mobile-hide">
              View All
              <Image src={rightArrow} />
            </div>
          </Link>
        </div>
        <div className={styles.down}>
          <div className={styles.left}>
            <div className={`${styles.leftBox} ${styles.leftBox1}`}>
              <hr />
              <div className={styles.leftDetail}>
                <h4>23 Nov,2016</h4>
                <h1>Outdoor and motion Lighting</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur aliquam non odio in efficitur. Fusce tincidunt
                </p>
              </div>
            </div>

            <div className={styles.leftBox}>
              <hr />
              <div className={styles.leftDetail}>
                <h4>23 Nov,2016</h4>
                <h1>Outdoor and motion Lighting</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur aliquam non odio in efficitur. Fusce tincidunt
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
          <Link href={""}>
            <div className={styles.rightBox}>

            <Image src={b1}/>
              <div className={styles.boxDetail}>
                <h4>23 Nov,2016</h4>
                <h1>Outdoor and motion Lighting</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur aliquam non odio in efficitur. Fusce tincidunt
                </p>
              </div>

            </div>
            </Link>
            <div className={styles.rightBox}>
            <Link href={""}>
            <div className={styles.rightBox}>

            <Image src={b2}/>
              <div className={styles.boxDetail}>
                <h4>23 Nov,2016</h4>
                <h1>Outdoor and motion Lighting</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur aliquam non odio in efficitur. Fusce tincidunt
                </p>
              </div>

            </div>
            </Link>
            </div>
          </div>
          <Link href="" id="a" className="desktop-hide">
            <div className="btn  ">
              View All
              <Image src={rightArrow} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
