import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import { useContext } from "react";
import AppContext from "../context/appContext";
import StoryList from "./StoryList";
import About from "./About";
const Layout = ({ children, stories }) => {
  const value = useContext(AppContext);
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <About />
          <StoryList stories = {value.stories} />
          {children}
        </main>
      </div>
    </>
  );
};
export default Layout;
