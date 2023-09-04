import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* <li>
          <Link href="/shorts">Shorts</Link>
        </li> */}
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
      <h1>ReadSpishstories.com</h1>
    </nav>
  );
};
 export default Nav;
