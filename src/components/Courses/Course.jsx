const Course = ({ cover, instructor, title, description, users, price }) => {
    return (
      <div className="course bg-white rad-6 p-relative">
        <img className="cover" src={cover} alt="course cover" />
        <img className="instructor" src={instructor} alt="instructor" />
        <div className="p-20">
          <h4 className="m-0">{title}</h4>
          <p className="description c-grey mt-15 fs-14">{description}</p>
        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey">
            <i className="fa-regular fa-user"></i> {users}
          </span>
          <span className="c-grey">
            <i className="fa-solid fa-dollar-sign"></i> {price}
          </span>
        </div>
      </div>
    );
};  
export default Course;