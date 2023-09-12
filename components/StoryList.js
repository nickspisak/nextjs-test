import StoryItem from "./StoryItem";
import storyStyles from "../styles/Story.module.css";

const StoryList = ({ stories }) => {
  const [selectedGenre, setSelectedGenre] = useState('All'); 

  const filteredStories = selectedGenre === 'All' 
    ? stories 
    : stories.filter(story => story.genres.includes(selectedGenre));

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const storyGenerator = () => {
    return (
      <>
        {filteredStories.map(story => (
          <StoryItem key={story} story={story} />
        ))}
      </>
    );
  };

  return (
    <div className={storyStyles.grid}>
      <div className="genre-dropdown">
        <label htmlFor="genre">Filter by Genre:</label>
        <select id="genre" onChange={handleGenreChange}>
          <option value="All">All</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      {storyGenerator()}
    </div>
  );
};

export default StoryList;
