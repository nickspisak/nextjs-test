import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import { useContext } from "react";
import AppContext from "../context/appContext";
import ShortsList from "./ShortsList";
import About from "./About";
const Layout = ({ children, shorts}) => {
  const value = useContext(AppContext);
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <About />
          <ShortsList shorts = {value.shorts} />
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
