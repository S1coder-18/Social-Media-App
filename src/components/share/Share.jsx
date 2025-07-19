import "./Share.css";
import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import image from "../../assets/person/1.jpeg";
const Share = () => {
  console.log("Image path:", image);

  return (
    <div className="share">
      <div className="shareTop">
        <img src={image} alt="Profile" className="shareProfileImg" />
        <input
          placeholder="What’s in your mind?"
          type="text"
          className="shareInput"
        />
      </div>
      <hr className="shareHr" />
      <div className="shareBottom">
        <div className="shareOptions">
          <PermMedia htmlColor="tomato" className="shareIcon" />
          <span className="shareOptionText">Photo or Video</span>
        </div>
        <div className="shareOptions">
          <Label htmlColor="blue" className="shareIcon" />
          <span className="shareOptionText">Tag</span>
        </div>
        <div className="shareOptions">
          <Room htmlColor="green" className="shareIcon" />
          <span className="shareOptionText">Location</span>
        </div>
        <div className="shareOptions">
          <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
          <span className="shareOptionText">Feelings</span>
        </div>
        <button className="shareButton">Post</button>
      </div>
    </div>
  );
};

export default Share;
