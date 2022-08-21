import { Grid, Button, Container } from "semantic-ui-react";
import { useState } from "react";
import styles from "../../sass/Layout/HerosectionForm.module.scss";

const HomeForm1 = () => {
  const [dropdown1, setdropdown1] = useState(false);
  const [tab1btn, settab1btn] = useState(true);
  const [tab2tn, settab2btn] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [residentialToggle, setResidentialToggle] = useState(false);

  const [buy, setBuy] = useState("buy");
  const [residentDropdown, setResidentDropdown] = useState(true);
  console.log("residentDropdown", residentDropdown);
  const [commercialDropdown, setCommercialDropdown] = useState(false);
  const [residential, setResidential] = useState("Residential");
  // resid and commer
  const residentSelectbtn = () => {
    setResidentialToggle(!residentialToggle);
  };
  const ResidentBtn = () => {
    setResidentDropdown(true);
    setCommercialDropdown(false);
    setResidential("Residential");
    // settab2btn(false);
    // setBuy("Buy");
    // console.log("buy value", buy);
  };
  const CommercialBtn = () => {
    setResidentDropdown(false);
    setCommercialDropdown(true);
    setResidential("Commercial");
    // setBuy("Rent");
  };

  const Buybtn = () => {
    settab1btn(true);
    settab2btn(false);
    setBuy("Buy");
    console.log("buy value", buy);
  };
  const RentBtn = () => {
    settab1btn(false);
    settab2btn(true);
    setBuy("Rent");
  };
  const dropdown1Handle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={styles.Herosectionform + " "}>
      <div className={styles.HerosectionformIn + "  br-7"}>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button
                onClick={() => dropdown1Handle()}
                className={styles.dropdown1Handle + " form-arrow"}
              >
                {buy}
              </Button>
              {toggle == true ? (
                <div className={styles.dropdown1Box + " white-bg br-7"}>
                  <div className={styles.title + " bold darkgray"}>Purpose</div>

                  <div
                    className={
                      styles.dropdown1BoxTabbtn + " hgroup white-bg br-7"
                    }
                  >
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
                      onClick={() => Buybtn()}
                    >
                      Buy
                    </Button>
                    <Button
                      onClick={() => RentBtn()}
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
                      Rent
                    </Button>
                  </div>
                  <div className={styles.body}>
                    <div className={styles.title + " bold darkgray"}>
                      Rent Frequency
                    </div>
                    <div>
                      <Button
                        className={
                          styles.active +
                          " " +
                          styles.freqBtn +
                          " " +
                          styles.ui +
                          " " +
                          styles.button +
                          "  btn-white"
                        }
                      >
                        Yearly
                      </Button>
                      <Button
                        className={
                          styles.freqBtn +
                          " " +
                          styles.ui +
                          " " +
                          styles.button +
                          "  btn-white"
                        }
                      >
                        Monthly
                      </Button>
                      <Button
                        className={
                          styles.freqBtn +
                          " " +
                          styles.ui +
                          " " +
                          styles.button +
                          "  btn-white"
                        }
                      >
                        Weekly
                      </Button>
                      <Button
                        className={
                          styles.freqBtn +
                          " " +
                          styles.ui +
                          " " +
                          styles.button +
                          "  btn-white"
                        }
                      >
                        Daily Any RESET DONE
                      </Button>
                      <Button
                        className={
                          styles.freqBtn +
                          " " +
                          styles.ui +
                          " " +
                          styles.button +
                          "  btn-white"
                        }
                      >
                        Daily Any
                      </Button>
                    </div>
                    <div
                      className={
                        styles.dropdown1Boxfooter + " flexbox jc-space-between"
                      }
                    >
                      <Button className={"btn btn-secondary btn-border"}>
                        Reset
                      </Button>

                      <Button className={"btn btn-secondary"}>Done</Button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </Grid.Column>
            <Grid.Column computer={8} className={styles.Herosectionformcolumn}>
              <Button className={styles.dropdown1Handle}>Buy</Button>
            </Grid.Column>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button
                onClick={() => residentSelectbtn()}
                className={styles.dropdown1Handle + " form-arrow"}
              >
                {residential}
              </Button>
              {residentialToggle == true ? (
                <div
                  className={
                    styles.dropdown1Box +
                    " " +
                    styles.dropdown1Box3 +
                    " white-bg br-7"
                  }
                >
                  <div
                    className={
                      styles.dropdown1BoxTabbtn3 + " hgroup white-bg br-7"
                    }
                  >
                    <Button
                      className={
                        residentDropdown === true
                          ? styles.active +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white "
                          : styles.ui + " " + styles.button + "  btn-white"
                      }
                      onClick={() => ResidentBtn()}
                    >
                      Residential
                    </Button>
                    <Button
                      onClick={() => CommercialBtn()}
                      className={
                        commercialDropdown == true
                          ? styles.active +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white "
                          : styles.ui + " " + styles.button + "  btn-white "
                      }
                    >
                      Commercial
                    </Button>
                  </div>
                  {/* setCommercialDropdown */}
                  {residentDropdown == true ? (
                    <div className={styles.body}>
                      <div>
                        <Button
                          className={
                            styles.active +
                            " " +
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Apartment
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Townhouse
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Villa Compound
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Residential Plot
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Villa
                        </Button>

                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Penthouse
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Hotel Apartment
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Residential Floor
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Residential Building
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Residential Building
                        </Button>
                      </div>
                      <div
                        className={
                          styles.dropdown1Boxfooter +
                          " flexbox jc-space-between"
                        }
                      >
                        <Button className={"btn btn-secondary btn-border"}>
                          Reset
                        </Button>

                        <Button className={"btn btn-secondary"}>Done</Button>
                      </div>
                    </div>
                  ) : commercialDropdown == true ? (
                    <div className={styles.body}>
                      <div>
                        <Button
                          className={
                            styles.active +
                            " " +
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Apartment
                        </Button>
                        <Button
                          className={
                            styles.freqBtn +
                            " " +
                            styles.ui +
                            " " +
                            styles.button +
                            "  btn-white"
                          }
                        >
                          Townhouse
                        </Button>
                      </div>
                      <div
                        className={
                          styles.dropdown1Boxfooter +
                          " flexbox jc-space-between"
                        }
                      >
                        <Button className={"btn btn-secondary btn-border"}>
                          Reset
                        </Button>

                        <Button className={"btn btn-secondary"}>Done</Button>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                ""
              )}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button className={styles.dropdown1Handle}>Buy</Button>
            </Grid.Column>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button className={styles.dropdown1Handle}>Buy</Button>
            </Grid.Column>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button className={styles.dropdown1Handle}>Buy</Button>
            </Grid.Column>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button primary className={styles.submitButton}>
                Buy
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={16} className={styles.Herosectionformcolumn}>
              <img src="/images/banner.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
};

export default HomeForm1;
