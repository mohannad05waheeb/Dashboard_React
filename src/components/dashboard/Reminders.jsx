const Reminders = () => {
    return (
        <div className="reminders p-20 bg-white rad-10 p-relative">
        <h2 className="mt-0 mb-25">Reminders</h2>
        <ul className="m-0">
          <li className="d-flex align-center mt-15">
            <span className="key bg-blue mr-15 d-block rad-half"></span>
            <div className="pl-15 blue">
              <p className="fs-14 fw-bold mt-0 mb-5">Check My Tasks List</p>
              <span className="fs-13 c-grey">28/09/2022 - 12:00am</span>
            </div>
          </li>
          <li className="d-flex align-center mt-15">
            <span className="key bg-green mr-15 d-block rad-half"></span>
            <div className="pl-15 green">
              <p className="fs-14 fw-bold mt-0 mb-5">Check My Projects</p>
              <span className="fs-13 c-grey">26/10/2022 - 12:00am</span>
            </div>
          </li>
          <li className="d-flex align-center mt-15">
            <span className="key bg-orange mr-15 d-block rad-half"></span>
            <div className="pl-15 orange">
              <p className="fs-14 fw-bold mt-0 mb-5">Call All My Clients</p>
              <span className="fs-13 c-grey">05/11/2022 - 12:00am</span>
            </div>
          </li>
          <li className="d-flex align-center mt-15">
            <span className="key bg-red mr-15 d-block rad-half"></span>
            <div className="pl-15 red">
              <p className="fs-14 fw-bold mt-0 mb-5">Finish The Development Workshop</p>
              <span className="fs-13 c-grey">20/12/2022 - 12:00am</span>
            </div>
          </li>
        </ul>
      </div>
    );
};
export default Reminders;