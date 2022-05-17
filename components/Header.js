import headerStyles from "../styles/Header.module.css";
const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Spishstories</span>
      </h1>
      <p className={headerStyles.description}>New Stories Updated Regularly!</p>
    </div>
  );
};
export default Header;
