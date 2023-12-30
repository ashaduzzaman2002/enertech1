"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Navbar";
import Footer from "@/app/components/Footer2";
import hori from "../img/hori.svg";
import styles from "@/app/style/Product.module.css";
import blub1 from "../img/blub1.svg";
import blub2 from "../img/blub2.svg";

const AboutBox = ({ imageSrc, title, description, link }) => (
  <div className={styles.aboutBox} id={styles.aboutBox}>
    <Image src={blub1} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <Link href={link} id="a">
      <div className="btn btn-p-more">More Info</div>
    </Link>
  </div>
);

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products data from your JSON file
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        // Set the products state with the fetched data
        setProducts(data.products);
      });
  }, []);
  useEffect(() => {
    fetch('/product.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="hero-all">
        <h1>Products</h1>
        <Image src={hori} alt="Hero Image" />
      </div>

      <section>
        <div className="index">
          <div className={styles.up}>
            <h2>Our <span>Products</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt purus et dui molestie pharetra sits finibus nulla, id varius eros porta eu. Quisque egestas porta nunc.</p>
          </div>

          <div className={styles.pDown}>
            <div className={styles.down} id={styles.down}>
              {products.map((product, index) => (
                <AboutBox
                  key={index}
                  imageSrc={product.imageSrc}
                  title={product.title}
                  description={product.description}
                  link={product.link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
