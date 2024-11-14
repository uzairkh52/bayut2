import { Button, Container } from "semantic-ui-react";
import Image from "next/image";
import styles from "../sass/Layout/Header.module.scss";

import Script from 'next/script'
import Head from 'next/head';

const Header = () => {
  
  return (
    <>
<Head>
  <meta name="google-site-verification" content="l556Qqvxm0WIu4TDeOY0EMYPtEAd6zYR0nS9JBMNWoo" />
  {/* <!-- Google tag (gtag.js) --> */}
  <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4TRSZ5V876"></Script>
  <Script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-4TRSZ5V876');
  `}
  </Script>

  {/* google tag manager */}
  {/* <!-- Google Tag Manager --> */}
  <Script>
  {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-58CC4PJ5');`}</Script>
  {/* <!-- End Google Tag Manager --> */}
</Head>
{/* <!-- Google Tag Manager (noscript) --> */}
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-58CC4PJ5"
height="0" width="0" className={styles.dNone + styles.hidden}></iframe></noscript>

{/* <!-- End Google Tag Manager (noscript) --> */}

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
                    
                  </a>
                </li>
                <li>
                  <a href="" className={styles.dropdownbtn}>
                    Market Intelligence{" "}
                    <i className={styles.arrow + " icofont-caret-down"}></i>
                    
                  </a>
                </li>
                <li>
                  <a href="">Agent Portal</a>
                </li>
                <li>
                  <a href="" className={styles.dropdownbtn}>
                    Events{" "}
                    <i className={styles.arrow + " icofont-caret-down"}></i>
                    
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
