import { Button, Container } from "semantic-ui-react";
import Image from "next/image";
import styles from "../sass/Layout/Header.module.scss";
const Header = () => {
  return (
    <>
      {/* <Image src="../public/images/favicon.svg" alt="Vercel Logo" /> */}

      <section className={styles.Header1}>
        <Container>
          <div className="flexbox jc-space-between">
            <div className={styles.leftCol + " flexbox flex-center"}>
              <div>UAE</div>
              <div className="flexbox jc-center flex-center">
                <Image
                  src="/images/arabilogo.png"
                  alt="Vercel Logo"
                  width={40}
                  height={16}
                  className={styles.arabiimage}
                />
              </div>
              <div>
                <i className="icofont-ui-settings"></i> Site settings
              </div>
            </div>
            <div className={styles.leftCol + " flexbox flex-center"}>
              <div>
                <i className="icofont-heart"></i> Favourite properties
              </div>
              <div>
                <i className="icofont-star"></i> Saved searches
              </div>
              <div>
                <i className="icofont-user-alt-7"></i> Log in
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.Header2 + " white-bg"}>
        <Container>
          <div className="flexbox jc-space-between">
            <div className={styles.leftCol + " flexbox flex-center"}>
              <div>
                <Image
                  src="/images/logosvg.png"
                  alt="Vercel Logo"
                  width={120}
                  height={27}
                  className={styles.headerlogo}
                />
              </div>
            </div>
            <div className={styles.navigation + " flexbox flex-center"}>
              <ul className="no-list flexbox jc-center">
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Find an Agency</a>
                </li>
                <li>
                  <a href="">Floor Plans</a>
                </li>
                <li>
                  <a href="" className={styles.dropdownbtn}>
                    Guides{" "}
                    <i className={styles.arrow + " icofont-caret-down"}></i>
                    <ul className={styles.dropdown + " no-list white-bg hide"}>
                      <li>
                        <a href="">Area Guides</a>
                      </li>
                      <li>
                        <a href="">Building Guides</a>
                      </li>
                      <li>
                        <a href="">School Guides</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="" className={styles.dropdownbtn}>
                    Market Intelligence{" "}
                    <i className={styles.arrow + " icofont-caret-down"}></i>
                    <ul className={styles.dropdown + " no-list white-bg hide"}>
                      <li>
                        <a href="">TruValue™</a>
                      </li>
                      <li>
                        <a href="">Property Prices</a>
                      </li>
                      <li>
                        <a href="">Dubai Transactions</a>
                      </li>

                      <li>
                        <a href="">NEW</a>
                      </li>

                      <li>
                        <a href="">Trends</a>
                      </li>

                      <li>
                        <a href="">New Projects</a>
                      </li>
                    </ul>
                  </a>
                </li>
                <li>
                  <a href="">Agent Portal</a>
                </li>
                <li>
                  <a href="" className={styles.dropdownbtn}>
                    Events{" "}
                    <i className={styles.arrow + " icofont-caret-down"}></i>
                    <ul className={styles.dropdown + " no-list white-bg hide"}>
                      <li>
                        <a href="">B3DXB 2022</a>
                      </li>
                      <li>
                        <a href="">Your Home Your Choice</a>
                      </li>
                    </ul>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
