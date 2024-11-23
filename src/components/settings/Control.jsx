import { useState } from "react";
const Control = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
    return (
      <div className="p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Site Control</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Control The Website If There Is Maintenance</p>
      <div className="mb-15 between-flex">
        <div>
          <span>Website Control</span>
          <p className="c-grey mt-5 mb-0 fs-13">Open/Close Website And Type The Reason</p>
        </div>
        <div>
          <label>
            <input 
              className="toggle-checkbox" 
              type="checkbox" 
              checked={isChecked} 
              onChange={handleCheckboxChange} 
            />
            <div className="toggle-switch"></div>
          </label>
        </div>
      </div>
      <textarea className="close-message p-10 rad-6 d-block w-full" placeholder="Close Message Content"></textarea>
    </div>
    );
};
export default Control;