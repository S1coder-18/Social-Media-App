import gift_icon from "../../assets/gift.png";
import add_icon from "../../assets/ad.png";
import p3 from "../../assets/post/3.jpeg";
import "./Rightbar.css";

const Rightbar = () => {
  return (
    <>
      <div>
        <div className="rightbar">
          <div className="rightbarWrapper">
            <div className="birthdayContainer">
              <img className="birthdayImg" src={gift_icon} alt="" />
              <span className="birthdayText">
                <strong>Sachin </strong> and{" "}
                <strong>3 others friends have </strong> birthday today
              </span>
            </div>
            <img className="rightbarAd" src={add_icon} alt="" />
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
              <li className="rightbarFriendList">
                <div className="rightProfileImageContainer">
                  <img className="" src={p3} alt="" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">Sachin Gupta</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriendList">
                <div className="rightProfileImageContainer">
                  <img className="" src={p3} alt="" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">Sachin Gupta</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriendList">
                <div className="rightProfileImageContainer">
                  <img className="" src={p3} alt="" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">Sachin Gupta</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriendList">
                <div className="rightProfileImageContainer">
                  <img className="" src={p3} alt="" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">Sachin Gupta</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriendList">
                <div className="rightProfileImageContainer">
                  <img className="" src={p3} alt="" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">Sachin Gupta</span>
              </li>
            </ul>
            <ul className="rightbarFriendList">
              <li className="rightbarFriendList">
                <div className="rightProfileImageContainer">
                  <img className="" src={p3} alt="" />
                  <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUserName">Sachin Gupta</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightbar;
