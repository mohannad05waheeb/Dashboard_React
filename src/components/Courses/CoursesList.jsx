import Course from "./Course";

const CoursesList = ({ courses }) => {
  return (
    <div className="courses-page d-grid m-20 gap-20">
      {courses.map((course, index) => (
        <Course
          key={index}
          cover={course.cover}
          instructor={course.instructor}
          title={course.title}
          description={course.description}
          users={course.users}
          price={course.price}
        />
      ))}
    </div>
  );
};
export default CoursesList;