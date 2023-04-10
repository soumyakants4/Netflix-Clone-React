import "./Featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";

const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/05/john-wick-4-social.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://upload.wikimedia.org/wikipedia/fr/b/bb/John_Wick_-_Chapter_4.jpg"
          alt=""
        />
        <span className="desc">
          With the price on his head ever increasing, legendary hit man John
          Wick takes his fight against the High Table global as he seeks out the
          most powerful players in the underworld, from New York to Paris to
          Japan to Berlin.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
