import mohannad from '../../assets/mohannad.jpg';
const ProfileAvatar = () => {
  return (
    <div className="avatar-box txt-c p-20">
      <img className="rad-half mb-10" src={mohannad} alt="Mohannad" />
      <h3 className="m-0">Mohannad Waheeb</h3>
      <p className="c-grey mt-10">Level 20</p>
      <div className="level rad-6 bg-eee p-relative">
        <span style={{ width: "70%" }}></span>
      </div>
      <div className="rating mt-10 mb-10">
        <i className="fa-solid fa-star c-orange fs-13"></i>
        <i className="fa-solid fa-star c-orange fs-13"></i>
        <i className="fa-solid fa-star c-orange fs-13"></i>
        <i className="fa-solid fa-star c-orange fs-13"></i>
        <i className="fa-solid fa-star c-orange fs-13"></i>
      </div>
      <p className="c-grey m-0 fs-13">550 Rating</p>
    </div>
  );
};
export default ProfileAvatar;