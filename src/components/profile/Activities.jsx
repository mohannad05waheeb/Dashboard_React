import activity1 from '../../assets/activity-01.png';
import activity2 from '../../assets/activity-02.png';
import activity3 from '../../assets/activity-03.png';
const ActivityItem = ({ image, title, description, time, date }) => {
    return (
      <div className="activity d-flex align-center txt-c-mobile">
        <img src={image} alt={title} />
        <div className="info">
          <span className="d-block mb-10">{title}</span>
          <span className="c-grey">{description}</span>
        </div>
        <div className="date">
          <span className="d-block mb-10">{time}</span>
          <span className="c-grey">{date}</span>
        </div>
      </div>
    );
};  
const Activities = () => {
    return (
      <div className="activities p-20 bg-white rad-10 mt-20">
        <h2 className="mt-0 mb-10">Latest Activities</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Latest Activities Done By The User</p>
        <ActivityItem image={activity1} title="Store" description="Bought The Mastering JS Course" time="18:10" date="Yesterday" />
        <ActivityItem image={activity2} title="Academy" description="Got The ReactJS Certificate" time="16:05" date="Yesterday" />
        <ActivityItem image={activity3} title="Badges" description="Unlocked The 10 Skills Badge" time="18:05" date="Yesterday" />
        <ActivityItem image={activity1} title="Store" description="Bought The Typescript Course" time="12:05" date="Yesterday" />
      </div>
    );
};  
export default Activities;