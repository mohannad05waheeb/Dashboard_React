const Project = () => {
    return (
        <div className="last-project p-20 bg-white rad-10 p-relative">
        <h2 className="mt-0 mb-20">Last Project Progress</h2>
        <ul className="m-0 p-relative">
          <li className="mt-25 d-flex align-center done">Got The Project</li>
          <li className="mt-25 d-flex align-center done">Started The Project</li>
          <li className="mt-25 d-flex align-center done">The Project About To Finish</li>
          <li className="mt-25 d-flex align-center current">Test The Project</li>
          <li className="mt-25 d-flex align-center">Finish The Project & Get Money</li>
        </ul>
        <img className="launch-icon hide-mobile" src="imgs/project.png" alt="" />
      </div>
    )
};
export default Project;