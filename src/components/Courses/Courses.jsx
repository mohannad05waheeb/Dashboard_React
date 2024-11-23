import CoursesList from "./CoursesList";
import course1 from "../../assets/course-01.jpg";
import course2 from "../../assets/course-02.jpg";
import course3 from "../../assets/course-03.jpg";
import course4 from "../../assets/course-04.jpg";
import course5 from "../../assets/course-05.jpg";
import team1 from "../../assets/team-01.png";
import team2 from "../../assets/team-02.png";
import team3 from "../../assets/team-03.png";
const Courses = () => {
  const courses = [
    {
      cover: course1,
      instructor: team1,
      title: "Mastering Web Design",
      description:
        "Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture",
      users: 950,
      price: 165,
    },
    {
      cover: course2,
      instructor: team2,
      title: "Data Structure And Algorithms",
      description:
        "Master The Art Of Data Structure And Famous Algorithms Like Sorting, Dividing And Conquering",
      users: 1150,
      price: 210,
    },
    {
      cover: course3,
      instructor: team1,
      title: "Responsive Web Design",
      description:
        "Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints",
      users: 650,
      price: 90,
    },
    {
      cover: course4,
      instructor: team3,
      title: "Mastering Python",
      description:
        "Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life",
      users: 950,
      price: 250,
    },
    {
      cover: course5,
      instructor: team3,
      title: "PHP Examples",
      description:
        "PHP Tutorials And Examples And Practice On Web Application And Connecting With Databases",
      users: 850,
      price: 150,
    },
    {
        cover: course1,
        instructor: team1,
        title: "PHP Examples",
        description:
          "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        users: 1150,
        price: 210,
    },
    {
        cover: course3,
        instructor: team2,
        title: "PHP Examples",
        description:
          "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        users: 650,
        price: 90,
    },
    {
        cover: course1,
        instructor: team3,
        title: "PHP Examples",
        description:
          "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        users: 850,
        price: 145,
    },
    {
        cover: course2,
        instructor: team3,
        title: "PHP Examples",
        description:
          "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        users: 850,
        price: 150,
    },
    {
        cover: course3,
        instructor: team3,
        title: "PHP Examples",
        description:
          "Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering",
        users: 950,
        price: 250,
    },
];
return (
    <div className="page">
      <h1 className="p-relative">Courses</h1>
      <CoursesList courses={courses} />
    </div>
  );
};
export default Courses;