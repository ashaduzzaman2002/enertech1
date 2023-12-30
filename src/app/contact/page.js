"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Contact.module.css";
import "../globals.css";
import hori from "../img/hori.svg";
import Header from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import rightArrow from "../img/rightarrow.svg";

const page = () => {
  return (
    <div>




        <Header/>



        <div className="hero-all" id={styles.heroAll}>
            <h1>Contact Us</h1>
            <Image src={hori} />
          </div>


            <div className={styles.index}>
                        <h1>contact <span>Us</span></h1>
                        <h3>Get in touch with us</h3>

                        <div className={styles.inputs}>
                            <div className={styles.name}>
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name"/>

                                </div>

                                <input type="text" placeholder="Email" />
                                <textarea name="message" id="" cols="30" rows="5" placeholder="Message"></textarea>
                                <Link href="" id="a">
            <div className="btn ">
            Submit
              <Image src={rightArrow} />
            </div>
          </Link>
                        </div>

            </div>

        <Footer/>
    </div>
  )
}

export default page