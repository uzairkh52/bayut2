import { Grid, Button, Container } from "semantic-ui-react";

import styles from "../../sass/Layout/Herosection.module.scss";

const HomeForm2 = () => {
  return (
    <div className={styles.Herosectionform + " "}>
      <div className={styles.HerosectionformIn + "  br-7"}>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={4} className={styles.Herosectionformcolumn}>
              <Button className={styles.dropdown1Handle}>Buy</Button>
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
        </Grid>
      </div>
    </div>
  );
};

export default HomeForm2;
