import { Button } from "semantic-ui-react";

import styles from "../sass/Layout/Header.module.scss";
const Header = () => {
  return (
    <section className={styles.Header}>
      <Button content="Primary" primary />
      <Button content="Secondary" secondary />
    </section>
  );
};

export default Header;
