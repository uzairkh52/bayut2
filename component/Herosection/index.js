import { Grid, Button, Container } from "semantic-ui-react";
import { useState } from "react";
import Image from "next/image";
import styles from "../../sass/Layout/Herosection.module.scss";
import HomeForm1 from "../HomeForm1";
import HomeForm2 from "../HomeForm2";
const Herosection = () => {
  const [tab1btn, settab1btn] = useState(true);
  const [tab2tn, settab2btn] = useState(false);
  const tab1btnHandle = () => {
    settab1btn(true);
    settab2btn(false);
  };
  const tab2btnHandle = () => {
    settab1btn(false);
    settab2btn(true);
  };
  return (
    <>
      {/* <Image src="../public/images/favicon.svg" alt="Vercel Logo" /> */}

      <section
        className={styles.Herosection + " bc-center bg-cover"}
        style={{
          backgroundImage: "url(/images/111.jpg)",
        }}
      >
        <Container>
          <div className={styles.HerosectionBox + " flexbox jc-center "}>
            <div className="">
              {tab1btn === true ? (
                <>
                  <h1 className="align-center white">
                    Search properties for sale and to rent in the UAE test
                  </h1>
                </>
              ) : tab2tn === true ? (
                <>
                  <h1 className="white align-center">
                    The UAE's Only Instant Property Valuation Solution!
                  </h1>
                </>
              ) : (
                ""
              )}

              <div className={styles.heroTabsbtn + " hgroup darkgray-bg br-7"}>
                <Button
                  className={
                    tab1btn === true
                      ? styles.active +
                        " " +
                        styles.ui +
                        " " +
                        styles.button +
                        "  btn-white "
                      : styles.ui + " " + styles.button + "  btn-white"
                  }
                  onClick={() => tab1btnHandle()}
                >
                  Property Search
                </Button>
                <Button
                  onClick={() => tab2btnHandle()}
                  className={
                    tab2tn == true
                      ? styles.active +
                        " " +
                        styles.ui +
                        " " +
                        styles.button +
                        "  btn-white "
                      : styles.ui + " " + styles.button + "  btn-white "
                  }
                >
                  Tru Value
                </Button>
              </div>
              {tab1btn === true ? (
                <>
                  <HomeForm1 />
                </>
              ) : tab2tn === true ? (
                <>
                  <HomeForm2 />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Herosection;
