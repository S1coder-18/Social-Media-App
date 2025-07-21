import "./Post.css";
import { MoreVert } from "@mui/icons-material";
import image from "../../assets/person/2.jpeg";
import heart_icon from "../../assets/heart.png";
import like_icon from "../../assets/like.png";
import {Users} from '../../assets/Data.js'

const Post = ({post}) => {
  const user = Users.filter(u => u.id===1);
  console.log(user);
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImage" src={image} alt="" h />
              <span className="postUserName">Sachin Gupta</span>
              <span className="postDate">{post.date}</span>
            </div>

            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="Error" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img className="likeIcon" src={heart_icon} alt="" />
              <img className="likeIcon" src={like_icon} alt="" />
              <span className="postLikeCounter">{post.like} people like it!.</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
