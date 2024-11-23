import Team from "./Team";
import Do from './Do';
import Info from "./Info";
const Project2 = ({ date, title, description, teamImages, tasks, progressWidth, price }) => {
    return (
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">{date}</span>
        <h4 className="m-0">{title}</h4>
        <p className="c-grey mt-10 mb-10 fs-14">{description}</p>
        <Team teamImages={teamImages} />
        <Do tasks={tasks} />
        <Info progressWidth={progressWidth} price={price} />
      </div>
    );
};
export default Project2;