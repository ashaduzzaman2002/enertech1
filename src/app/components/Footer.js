"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Footer.module.css";
import logo from "../img/logo.svg";
import call from "../img/call.svg";
import mail from "../img/mail.svg";
import mails from "../img/mail2.svg";
import fface from "../img/fface.svg";
import ftwit from "../img/ftwit.svg";
import finsta from "../img/finsta.svg";
import flink from "../img/flink.svg";

const Footer = () => {
  return (
    <div className="main-footer">
      <footer className={styles.footer}>
        <div className={styles.footerBox}>
          <div className={styles.detail}>
            <Image src={logo} />
            <h5>C-201, Udhna Sangh Comercial Complex,Udhna,Surat-394210.</h5>
            <div className={styles.contact}>
              <div className={styles.add}>
                <Image src={call} />
                <div className={styles.addDetail}>
                  <h3>Have a question?</h3>
                  <h2>(406) 555-0120</h2>
                </div>
              </div>
              <div className={styles.add}>
                <Image src={mail} />
                <div className={styles.addDetail}>
                  <h3>Contact us at</h3>
                  <h2>megacoding123@gmail.com</h2>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.news}>
            <h1>Newsletter</h1>
            <p>
              Be the first one to know about discounts, offers and events weekly
              in your mailbox. Unsubscribe whenever you like with one click.
            </p>
            <div className={styles.inputs}>
              <div className={styles.inputText}>
                <Image src={mails} />
                <input type="text" placeholder="Enter your email" />
              </div>
              <Link href={""}><div className={styles.btn}>
                        <h4>Submit</h4>

              </div>
              </Link>
            </div>
          </div>
        </div>
        <hr />

                <div className={styles.copy}>
                <div className={styles.social}>
                          <Link href=""> <Image src={fface}/></Link>
                          <Link href=""> <Image src={ftwit}/></Link>
                          <Link href=""> <Image src={flink}/></Link>
                          <Link href=""><Image src={finsta}/></Link>
                            </div>
                            <div className={styles.link}>

                                <Link href="/">Home </Link>
                                <Link href="/About">About Us </Link>
                                <Link href="/">Products </Link>
                                <Link href="/">Projects </Link>
                                <Link href="/">Blog </Link>
                                <Link href="/">Contact Us </Link>
                                <Link href="/">Privacy policy </Link>
                                <Link href="/">Terms of Use </Link>


                             </div>
                <div className={styles.copyright}>
                                <h3>© 2000-2021, All Rights Reserved</h3>
                </div>
                </div>


      </footer>
    </div>
  );
};

export default Footer;
