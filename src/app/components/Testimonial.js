"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "../style/Testimonial.module.css";
import testibg from "../img/testibg.svg";
import testi from "../img/testi.svg";
import testiicon from "../img/testiicon.svg";

const testimonialsData = [
  {
    imageSrc: testi,
    iconSrc: testiicon,
    title: "profession, Reliable & COST Effective",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis aliquet odio, sit amet rutrum magna. Duis cursus leo in condimentum cursus. Etiam vitae interdum ex, suscipit aliquam erat. Donec lacinia imperdiet mi, ut mattis sem pulvinar a. Praesent placerat, velit at luctus pulvinar, dolor est faucibus orci, vel posuere tellus enim non elit",
    author: "Emery Culhane",
  },
  {
    imageSrc: testi,
    iconSrc: testiicon,
    title: "profession,  ",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis aliquet odio, sit amet rutrum magna. Duis cursus leo in condimentum cursus. Etiam vitae interdum ex, suscipit aliquam erat. Donec lacinia imperdiet mi, ut mattis sem pulvinar a. Praesent placerat, velit at luctus pulvinar, dolor est faucibus orci, vel posuere tellus enim non elit",
    author: "Emery Culhane",
  },

];

const Testimonial = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const handleCircleClick = (index) => {
    setSelectedTestimonial(index);
  };

  return (
    <section className={styles.indexTesti}>
      <div className={styles.up}>

        <div className={styles.indexInfo}>
        <div className={styles.info}>
        <span>Our Statistics</span>
          <h1>Some Important Facts</h1>
        </div>
        <div className={`${styles.info} ${styles.info2}`}>
          <h1>5000+</h1>
         <h4>Residential Projects</h4>
        </div>
        <div className={`${styles.info} ${styles.info2}`}>
          <h1>1000+</h1>
          <h4>Commercial Projects</h4>
        </div>
        <div className={`${styles.info} ${styles.info2}`}>
          <h1>15000+</h1>
          <h4>Industrial Projects</h4>
        </div>
        </div>
      </div>
      <div className={styles.down} style={{ textAlign: 'right' }}>
        <Image src={testibg} />

        <div className={styles.testimonial}>
          <div className={styles.testiImg}>
            <Image src={testimonialsData[selectedTestimonial].imageSrc} id={styles.testiiconimg} />
            <Image src={testimonialsData[selectedTestimonial].iconSrc} id={styles.testiicon} />
          </div>
          <div className={styles.detail}>
            <span>What Our Clients Say</span>
            <h2>{testimonialsData[selectedTestimonial].title}</h2>
            <p>{testimonialsData[selectedTestimonial].text}</p>
            <h4><hr />{testimonialsData[selectedTestimonial].author}</h4>
            <div className={styles.circles}>
          {testimonialsData.map((_, index) => (
            <span
              key={index}
              className={`${styles.circle} ${selectedTestimonial === index ? styles.activeCircle : ''}`}
              onClick={() => handleCircleClick(index)}
            ></span>
          ))}
        </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonial;



