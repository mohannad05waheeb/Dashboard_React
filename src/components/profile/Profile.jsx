import { useState } from 'react';
import ProfileAvatar from './ProfileAvatar';
import ProfileInfoBox from './ProfileInfoBox';
import SkillsCard from './SkillsCard';
import Activities from './Activities';
const Profile = () => {
  const [checkedState1, setCheckedState1] = useState(true);
  const [checkedState2, setCheckedState2] = useState(false);
  const [checkedState3, setCheckedState3] = useState(true);
  const [checkedState4, setCheckedState4] = useState(false);
  const handleChange1 = () => setCheckedState1(!checkedState1);
  const handleChange2 = () => setCheckedState2(!checkedState2);
  const handleChange3 = () => setCheckedState3(!checkedState3);
  const handleChange4 = () => setCheckedState4(!checkedState4);
  const generalInfo = [
    { label: 'Full Name', value: 'Mohannad Waheeb' },
    { label: 'Gender', value: 'Male' },
    { label: 'Country', value: 'Egypt' }
  ];
  const personalInfo = [
    { label: 'Email', value: 'mohannadwaheeb05@gmail.com' },
    { label: 'Phone', value: '01023134652' },
    { label: 'Date Of Birth', value: '27/2/2010' }
  ];
  const jobInfo = [
    { label: 'Title', value: 'Front-End Developer' },
    { label: 'Programming Language', value: 'JavaScript' },
    { label: 'Years Of Experience', value: '2+' }
  ];
  const billingInfo = [
    { label: 'Payment Method', value: 'Paypal' },
    { label: 'Email', value: 'email@website.com' },
    { label: 'Subscription', value: 'Monthly' }
  ];
  return (
    <div className="page">
      <h1 className="p-relative">Profile</h1>
      <div className="profile-page m-20">
        <div className="overview bg-white rad-10 d-flex align-center">
          <ProfileAvatar />
          <div className="info-box w-full txt-c-mobile">
            <ProfileInfoBox title="General Information" data={generalInfo} checkedState={checkedState1} onChange={handleChange1} />
            <ProfileInfoBox title="Personal Information" data={personalInfo} checkedState={checkedState2} onChange={handleChange2} />
            <ProfileInfoBox title="Job Information" data={jobInfo} checkedState={checkedState3} onChange={handleChange3} />
            <ProfileInfoBox title="Billing Information" data={billingInfo} checkedState={checkedState4} onChange={handleChange4} />
          </div>
        </div>
        <div className="other-data d-flex gap-20">
          <SkillsCard />
          <Activities />
        </div>
      </div>
    </div>
  );
};
export default Profile;