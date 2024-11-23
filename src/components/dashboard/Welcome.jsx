import { Link } from "react-router-dom";
import welcome from '../../assets/welcome.png'; 
import mohannad from '../../assets/mohannad.jpg';  
const Welcome = () => {
  return (
    <div className="welcome bg-white rad-10 txt-c-mobile block-mobile">
    <div className="intro p-20 d-flex space-between bg-eee">
      <div>
        <h2 className="m-0">Welcome</h2>
        <p className="c-grey mt-5">Mohannad</p>
      </div>
      <img className="hide-mobile" src={welcome} alt="Welcome" />
    </div>
    <img src={mohannad} alt="Avatar" className="avatar" />
    <div className="body txt-c d-flex p-20 mt-20 mb-20 block-mobile">
      <div>
        Mohannad Waheeb <span className="d-block c-grey fs-14 mt-10">Developer</span>
      </div>
      <div>
        80 <span className="d-block c-grey fs-14 mt-10">Projects</span>
      </div>
      <div>
        $8500 <span className="d-block c-grey fs-14 mt-10">Earned</span>
      </div>
    </div>
    <Link to="/profile" className="link visit d-block fs-14 bg-blue c-white w-fit btn-shape">
    Profile
   </Link>
  </div>
) 
};  
export default Welcome;