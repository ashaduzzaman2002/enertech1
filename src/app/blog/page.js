"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import "../globals.css";
import hori from "../img/hori.svg";
import styles from "../style/Blog.module.css";
import style from "@/app/style/BlogPage.module.css";
import Footer from "@/app/components/Footer2";
import rightArrow from "../img/rightarrow.svg";
import { blogData } from "../data/data";

const Page = () => {

    const [visibleCount, setVisibleCount] = useState(9);

    const handleLoadMore = () => {
      setVisibleCount((prevCount) => prevCount + 3);};
      const showLoadMoreButton = visibleCount < blogData.length;

      return (
        <div>
          <Header />

          <div className="hero-all">
            <h1>Blog</h1>
            <Image src={hori} />
          </div>

          <section>
            <div className="index">
              <div className={`${styles.up} ${style.up} `}>
                <div className={styles.upDetail}>
                  <h1>
                    Latest <span>News & Blog</span>{" "}
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt purus et dui
                    molestie pharetra sits finibus nu
                  </p>
                </div>
              </div>
              <div className={style.down}>
                <div className={style.Box}>
                  {blogData.slice(0, visibleCount).map((blog, index) => (
                    <div key={index}>
                      <Link href={blog.link}>
                        <div className={`${styles.rightBox} ${style.rightbox}`}>
                          <Image src={blog.image} />
                          <div className={`${styles.boxDetail} ${style.boxDetail}`}>
                            <h4>{blog.date}</h4>
                            <h1>{blog.title}</h1>
                            <p>{blog.content}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                {showLoadMoreButton && (
                  <div>
                    <button className="btn" id={styles.btnAbout} onClick={handleLoadMore}>
                      Load More
                      <Image src={rightArrow} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      );
    };

    export default Page;