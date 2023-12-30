import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../style/Product.module.css";
import "../globals.css";
import rightArrow from "../img/rightarrow.svg";
import blub1 from "../img/blub1.svg";
import blub2 from "../img/blub2.svg";
import blub3 from "../img/blub3.svg";
import blub4 from "../img/blub4.svg";


const Product = () => {
  return (
    <section>
        <div className="index">
            <div className={styles.up}>
                <h2>Our <span>Products</span> </h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt purus et dui molestie pharetra sits finibus nulla, id varius eros porta eu. Quisque egestas porta nunc.</p>
            </div>

            <div className={styles.pDown}>
            <div className={styles.down}>
                    <div className={styles.aboutBox}>
                            <Image src={blub1}/>

                            <h3>Control Panel</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt</p>

                            <Link href="" id="a">
                          <div className="btn   btn-p-more">
                                            More Info
                              </div>
                             </Link>

                    </div>
                    <div className={styles.aboutBox}>
                            <Image src={blub2}/>

                            <h3>Secure</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt</p>

                            <Link href="" id="a">
                          <div className="btn   btn-p-more">
                                            More Info
                              </div>
                             </Link>

                    </div>
                    <div className={styles.aboutBox}>
                            <Image src={blub3}/>

                            <h3>cG emotron</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt</p>

                            <Link href="" id="a">
                          <div className="btn   btn-p-more">
                                            More Info
                              </div>
                             </Link>

                    </div>
                    <div className={styles.aboutBox}>
                            <Image src={blub4}/>

                            <h3>Fluke</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquam non odio in efficitur. Fusce tincidunt</p>

                            <Link href="" id="a">
                          <div className="btn   btn-p-more">
                                            More Info
                              </div>
                             </Link>

                    </div>


                    </div>
                    <Link href="" id="a">
              <div className="btn btn-p">
              view All<Image src={rightArrow} />
              </div>
            </Link>
            </div>

        </div>
    </section>
  )
}

export default Product