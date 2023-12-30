"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/style/Header.module.css";
import location from "../img/location.svg";
import time from "../img/time.svg";
import face from "../img/face.svg";
import insta from "../img/insta.svg";
import twit from "../img/twit.svg";
import tel from "../img/tel.svg";
import logo from "../img/logo.svg";
import rightArrow from "../img/rightarrow.svg";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const pathname = usePathname();

  console.log(pathname);

  return (
    <div>
      <header>
        <div className={styles.head}>
          <div className={styles.heading}>
            <Link href="">
              <Image src={insta} alt="sa" />
            </Link>
            <Link href="">
              <Image src={face} alt="" />
            </Link>
            <Link href="">
              <Image src={twit} alt="" />
            </Link>
            <Link href="">
              {" "}
              <Image src={tel} alt="" />
            </Link>
          </div>

          <div className={styles.headmail}>
            <div className={`${styles.info} ${styles.info1}`}>
              <span href="">
                <Image src={location} alt="" />
                <h1>C-201,Udhna Sangh Comercial Complex, Udhna , Surat</h1>
              </span>
            </div>
            <div className={styles.info}>
              <span href="tel:1800 8899 757">
                <Image src={time} alt="" />
                <h1>Mon-Fri : 08:00 AM -5:00PM</h1>
              </span>
            </div>
          </div>
        </div>

        <div className={styles.mainhead}>
          <Link href={"/"}>
            <Image src={logo} alt="" id="logo" />
          </Link>

          <div>
            <nav>
              <div
                id={styles.menuIcon}
                className={`menuIcon ${menuOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
              </div>

              <ul className={styles.NavbarList}>
                <li>
                  <Link href="/" onClick={closeMenu}>
                    <span className={menuOpen ? "active" : ""}>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={closeMenu}>
                    <span className={menuOpen ? "active" : ""}>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/Products" onClick={closeMenu}>
                    <span className={menuOpen ? "active" : ""}>Products</span>
                  </Link>
                </li>
                <li>
                  <Link href="/project" onClick={closeMenu}>
                    <span className={menuOpen ? "active" : ""}>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={closeMenu}>
                    <span className={menuOpen ? "active" : ""}>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={closeMenu}>
                    <span className={menuOpen ? "active" : ""}>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </nav>
            {menuOpen && (
              <div className={styles.mobileNav}>
                <div
                  className={styles.closebtn}
                  onClick={() => setMenuOpen(false)}
                >
                  <Image src={""} alt="" />
                </div>
                <ul>
                  <li>
                    <Link href="/" onClick={closeMenu}>
                      <span className={menuOpen ? "active" : ""}>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={closeMenu}>
                      <span className={menuOpen ? "active" : ""}>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Products" onClick={closeMenu}>
                      <span className={menuOpen ? "active" : ""}>Products</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/project" onClick={closeMenu}>
                      <span className={menuOpen ? "active" : ""}>Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" onClick={closeMenu}>
                      <span className={menuOpen ? "active" : ""}>Blog</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" onClick={closeMenu}>
                      <span className={menuOpen ? "active" : ""}>
                        Contact Us
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="" id={styles.a}>
            <div className={`${styles.btn} btn`}>
              Get Estimate Now <Image src={rightArrow} />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
