"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import "../globals.css";
import styles from "@/app/style/ProjectPage.module.css";
import Footer from "@/app/components/Footer";
import Product from "@/app/components/Product";
import p2 from "../img/p2.svg";
import p3 from "../img/p3.svg";
import p4 from "../img/p4.svg";
import p5 from "../img/p5.svg";
import p6 from "../img/p6.svg";
import hori from "../img/hori.svg";
import search from "../img/search.svg";

const projectData = [
  {
    imageUrl: p2,
    link: "Link to Project 1",
  },
  {
    imageUrl: p3,
    link: "Link to Project 2",
  },
  {
    imageUrl: p4,
    link: "Link to Project 1",
  },
  {
    imageUrl: p5,
    link: "Link to Project 2",
  },
  {
    imageUrl: p6,
    link: "Link to Project 1",
  },
  {
    imageUrl: p3,
    link: "Link to Project 2",
  },

];

const Page = () => {
  return (
    <div>
      <Header />

      <div className="hero-all" id={styles.heroAll}>
        <h1>Projects</h1>
        <Image src={hori} />
      </div>

      <div className={styles.index}>
        <h1>
          Our Recent <span>Projects</span>{" "}
        </h1>
        <div className={styles.project}>

          {projectData.map((project, index) => (
            <Link key={index} href={project.link} id={styles.box2}>
              <div className={styles.box}>
                <Image src={project.imageUrl} />

                <div className={styles.hover}>
                  <Image src={search} />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>

      <Product />
      <Footer />
    </div>
  );
};

export default Page;
