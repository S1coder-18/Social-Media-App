import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import "./Sidebar.css";
import p2 from "../../assets/person/2.jpeg";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarwrapper">
          <ul className="sidebarList">
            <li className="sidebarlistitem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarlistitem">
              <Chat className="sidebarIcon" />{" "}
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarlistitem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarlistitem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarlistitem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarlistitem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">BookMarks</span>
            </li>
            <li className="sidebarlistitem">
              <WorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sidebarlistitem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarlistitem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImage" src={p2} alt="" />
              <span className="sidebarFriendName">Sachin Gupta</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
