import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../component/Header";
import Herosection from "../component/Herosection";
const Home = () => {
  return (
    <>
      <Header />
      <Herosection />
    </>
  );
};
export default Home;
