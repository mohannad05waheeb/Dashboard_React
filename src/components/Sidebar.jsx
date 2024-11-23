import { Link } from "react-router-dom";
import mohannad from '../assets/mohannad.jpg'; 
import RoutesApp from "../routs";
import { FaSearch } from 'react-icons/fa';
const Sidebar = () => {
    return (
        <div className="page d-flex">
            <div className="sidebar bg-white p-20 p-relative">
                <h3 className="p-relative txt-c mt-0">Mohannad</h3>
                <ul>
                    <li>
                        <Link className="link active d-flex align-center fs-14 c-black rad-6 p-10" to="/">
                            <i className="fa-regular fa-chart-bar fa-fw"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="link d-flex align-center fs-14 c-black rad-6 p-10" to="/settings">
                            <i className="fa-solid fa-gear fa-fw"></i>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="link d-flex align-center fs-14 c-black rad-6 p-10" to="/profile">
                            <i className="fa-regular fa-user fa-fw"></i>
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="link d-flex align-center fs-14 c-black rad-6 p-10" to="/projects">
                            <i className="fa-solid fa-diagram-project fa-fw"></i>
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="link d-flex align-center fs-14 c-black rad-6 p-10" to="/courses">
                            <i className="fa-solid fa-graduation-cap fa-fw"></i>
                            <span>Courses</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="link d-flex align-center fs-14 c-black rad-6 p-10" to="/friends">
                            <i className="fa-regular fa-circle-user fa-fw"></i>
                            <span>Friends</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="link d-flex align-center fs-14 c-black rad-6 p-10" to="/files">
                            <i className="fa-regular fa-file fa-fw"></i>
                            <span>Files</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="link d-flex align-center fs-14 c-black rad-6 p-10" to="/plans">
                            <i className="fa-regular fa-credit-card fa-fw"></i>
                            <span>Plans</span>
                        </Link>
                    </li>
                </ul>
            </div>       
           <div>            
            <div className="head bg-white p-15 between-flex">
          <div className="search p-relative">
            <input className="p-10" type="search" placeholder="Type A Keyword" />
            <FaSearch className="search-icon" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          <div className="icons d-flex align-center">
            <span className="notification p-relative">
              <i className="fa-regular fa-bell fa-lg"></i>
            </span>
            <Link to='/profile'>
            <img src={mohannad} alt="Mohannad" />
            </Link>
          </div>
         </div>
         <div className="app">
        <RoutesApp />   
         </div>
      </div>   
    </div>          
    );
};
export default Sidebar;