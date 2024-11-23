import Control from './Control';
import General from './General';
import Security from './Security';
import Social from './Social'; 
import Widgets from './Widgets';
import Backup from './Backup';
import { useState } from "react";
const Settings = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    return (
        <div className="page">   
        <h1 className="p-relative">Settings</h1>
        <div className="settings-page m-20 d-grid gap-20"> 
          <Control />  
          <General  />  
          <Security />  
          <Social />   
          <Widgets />  
          <Backup />       
        </div>
      </div>
    );
};
export default Settings;