import { Grid, Button, Container } from "semantic-ui-react";
import { useState } from "react";
import styles from "../../sass/Layout/HerosectionForm.module.scss";

const HomeForm1 = () => {
  const [dropdown1, setdropdown1] = useState(false);
  const dropdown1Handle = () => {
    setdropdown1(alert("sfsf"));
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
                Buy
              </Button>
              <div className={styles.dropdown1 + " white-bg br-7"}>
                <div className="bold darkgray">Purpose</div>
              </div>
            </Grid.Column>
            <Grid.Column computer={8} className={styles.Herosectionformcolumn}>
              <Button className={styles.dropdown1Handle}>Buy</Button>
            </Grid.Column>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button className={styles.dropdown1Handle}>Buy</Button>
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
