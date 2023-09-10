import ShortsItem from "./ShortsItem";
import storyStyles from "../styles/Story.module.css";

const ShortsList = ({ shorts }) => {
  console.log({shorts})
 const shortGenerator = () => {
  return (
    <>
      {
        shorts.map(short => {
          return <ShortsItem key = {short} short = {short} />
        })
      }
    </>
  )
 }
  return (
    <div className={storyStyles.grid}>
   {shortGenerator()}
    </div>
  );
};
export default ShortsList;
