import { Link } from "react-router-dom";
const SocialMedia = () => {
    return (
        <div className="social-media p-20 bg-white rad-10 p-relative">
        <h2 className="mt-0 mb-25">Social Media Stats</h2>
        <div className="box twitter p-15 p-relative mb-10 between-flex">
          <i className="fa-brands fa-twitter fa-2x c-white h-full center-flex"></i>
          <span>90K Followers</span>
          <Link className="link fs-13 c-white btn-shape" to="https://twitter.com" target="_blank">
          Follow
          </Link>
        </div>
        <div className="box facebook p-15 p-relative mb-10 between-flex">
          <i className="fa-brands fa-facebook-f fa-2x c-white h-full center-flex"></i>
          <span>2M Like</span>
          <Link className="link fs-13 c-white btn-shape" to="https://facebook.com/mohannadismail.waheeb" target="_blank">
          Like
          </Link>
        </div>
        <div className="box youtube p-15 p-relative mb-10 between-flex">
          <i className="fa-brands fa-youtube fa-2x c-white h-full center-flex"></i>
          <span>1M Subs</span>
          <Link className="link fs-13 c-white btn-shape" to="https://youtube.com" target="_blank">
          Subscribe
          </Link>
        </div>
        <div className="box linkedin p-15 p-relative mb-10 between-flex">
          <i className="fa-brands fa-linkedin fa-2x c-white h-full center-flex"></i>
          <span>70K Followers</span>
          <Link className="link fs-13 c-white btn-shape" to="https://www.linkedin.com/in/mohannad-waheeb-660501319/" target="_blank">
          Follow
          </Link>
        </div>
      </div>
    );
};
export default SocialMedia;