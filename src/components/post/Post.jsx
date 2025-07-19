import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import image from "../../assets/person/2.jpeg";
import post_imaeg1 from "../../assets/post/1 (1).jpeg";
import heart_icon from "../../assets/heart.png";
import like_icon from "../../assets/like.png";

const Post = () => {
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImage" src={image} alt="" h />
              <span className="postUserName">Sachin Gupta</span>
              <span className="postDate">5 mins Ago</span>
            </div>

            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">Hey! Its my first post:)</span>
            <img className="postImg" src={post_imaeg1} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src={heart_icon} alt="" />
              <img className="likeIcon" src={like_icon} alt="" />
              <span className="postLikeCounter">32 people like it!.</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">9 comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
