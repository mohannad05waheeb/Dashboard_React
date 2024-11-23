import { Link } from "react-router-dom";
const FriendCard = ({ friend }) => {
    const {
      imgSrc,
      name,
      role,
      stats: { friends, projects, articles },
      joinedDate,
      isVip,
      profileLink,
    } = friend;  
    return (
      <div className="friend bg-white rad-6 p-20 p-relative">
        <div className="contact">
          <i className="fa-solid fa-phone"></i>
          <i className="fa-regular fa-envelope"></i>
        </div>
        <div className="txt-c">
          <img className="rad-half mt-10 mb-10 w-100 h-100" src={imgSrc} alt={name} />
          <h4 className="m-0">{name}</h4>
          <p className="c-grey fs-13 mt-5 mb-0">{role}</p>
        </div>
        <div className="icons fs-14 p-relative">
          <div className="mb-10">
            <i className="fa-regular fa-face-smile fa-fw"></i>
            <span>{friends} Friends</span>
          </div>
          <div className="mb-10">
            <i className="fa-solid fa-code-commit fa-fw"></i>
            <span>{projects} Projects</span>
          </div>
          <div>
            <i className="fa-regular fa-newspaper fa-fw"></i>
            <span>{articles} Articles</span>
          </div>
          {isVip && <span className="vip fw-bold c-orange">VIP</span>}
        </div>
        <div className="info between-flex fs-13">
          <span className="c-grey">Joined {joinedDate}</span>
          <div>
            <Link className="bg-blue c-white btn-shape" to={profileLink} target="_blank">
              Profile
            </Link>
            <Link className="bg-red c-white btn-shape" to={null}>
              Remove
            </Link>
          </div>
        </div>
      </div>
    );
};  
export default FriendCard;