import team1 from '../../assets/team-01.png';
import team2 from '../../assets/team-02.png';
import team3 from '../../assets/team-03.png';
import team4 from '../../assets/team-04.png';
import team5 from '../../assets/team-05.png';
import Project2 from './Project2';
const Projects = () => {
  const projectData = [
    {
      date: '23/11/2024',
      title: 'Elzero Dashboard',
      description: 'Elzero Dashboard Project Design And Programming And Hosting',
      teamImages: [team1, team2, team3, team4, team5],
      tasks: ['Programming', 'Design', 'Hosting', 'Marketing'],
      progressWidth: '50%',
      price: 2500
    },
    {
      date: '15/6/2022',
      title: 'Academy Portal',
      description: 'Academy Portal Project Design And Programming',
      teamImages: [team1, team2, team3],
      tasks: ['Programming', 'Design'],
      progressWidth: '80%',
      price: 1800
    },
    {
      date: '30/10/2024',
      title: 'Sneakers Store',
      description: 'Sneakers Store Project Design And Programming',
      teamImages: [team1, team2, team3],
      tasks: ['Programming', 'Design'],
      progressWidth: '100%',
      price: 950,
    },
    {
      date: '10/11/2024',
      title: 'Food App',
      description: 'Food App Project Design And Programming And Marketing',
      teamImages: [team1, team2, team3 , team4],
      tasks: ['Programming', 'Design' , 'Marketing'],
      progressWidth: '50%',
      price: 1700,
    },
    {
      date: '15/6/2022',
      title: 'Ahmed Portal',
      description: 'Ahmed Portal Project Design And Programming',
      teamImages: [team1, team2, team3],
      tasks: ['Programming', 'Design'],
      progressWidth: '65%',
      price: 850,
    },
    {
      date: '15/6/2024',
      title: 'Mohannad Application',
      description: 'Mohannad Application Project Design',
      teamImages: [team1, team2, team3],
      tasks: ['Design'], 
      progressWidth: '75%',
      price: 950,
    },
    {
      date: '15/6/2024',
      title: 'Fox Appliction',
      description: 'Fox Appliction Project Design And Programming And Hosting',
      teamImages: [team1, team2, team3, team4 , team5],
      tasks: ['Programming', 'Design', 'Hosting', 'Marketing'],
      progressWidth: '100%',
      price: 3500,
    },
    {
      date: '15/6/2024',
      title: 'Mohannad Dashboard',
      description: 'Mohannad Dashboard Project Design And Programming And Hosting',
      teamImages: [team1, team2, team3, team4],
      tasks: ['Programming', 'Design', 'Hosting', 'Marketing'],
      progressWidth: '100%',
      price: 1950,
    },
  ];
  return (
    <div className="page">
      <h1 className="p-relative">Projects</h1>
      <div className="projects-page d-grid m-20 gap-20">
        {projectData.map((project, index) => (
          <Project2
            key={index}
            date={project.date}
            title={project.title}
            description={project.description}
            teamImages={project.teamImages}
            tasks={project.tasks}
            progressWidth={project.progressWidth}
            price={project.price}
          />
        ))}
      </div>
    </div>
  );
};
export default Projects;