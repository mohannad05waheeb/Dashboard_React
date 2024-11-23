import team1 from '../../assets/team-01.png';
import team2 from '../../assets/team-02.png';
import team3 from '../../assets/team-03.png';
import team4 from '../../assets/team-04.png';
import team5 from '../../assets/team-05.png';
const projects = [
  {
    id: 1,
    name: 'Sneakers Store',
    finishDate: '30 Oct 2024',
    client: 'Ministry',
    price: '$5300',
    team: [team1, team2, team3, team5],
    status: 'Pending',
    statusClass: 'bg-orange',
  },
  {
    id: 2,
    name: 'Elzero Shop',
    finishDate: '12 Oct 2021',
    client: 'Elzero Company',
    price: '$1500',
    team: [team1, team2, team5],
    status: 'In Progress',
    statusClass: 'bg-blue',
  },
  {
    id: 3,
    name: 'Food App',
    finishDate: '10 Nov 2024',
    client: 'Bouba',
    price: '$800',
    team: [team1, team3],
    status: 'Completed',
    statusClass: 'bg-green',
  },
  {
    id: 4,
    name: 'Mahmoud Website',
    finishDate: '22 May 2021',
    client: 'Mahmoud',
    price: '$600',
    team: [team1, team2],
    status: 'Completed',
    statusClass: 'bg-green',
  },
  {
    id: 5,
    name: 'Sayed Website',
    finishDate: '24 May 2021',
    client: 'Sayed',
    price: '$300',
    team: [team1, team3],
    status: 'Rejected',
    statusClass: 'bg-red',
  },
  {
    id: 6,
    name: 'Arena Application',
    finishDate: '01 Mar 2021',
    client: 'Arena Company',
    price: '$2600',
    team: [team1, team2, team3, team4],
    status: 'Completed',
    statusClass: 'bg-green',
  },
];
const Table = () => {
  return (
    <div className="projects p-20 bg-white rad-10 m-20">
      <h2 className="mt-0 mb-20">Projects</h2>
      <div className="responsive-table">
        <table className="fs-15 w-full">
          <thead>
            <tr>
              <td>Name</td>
              <td>Finish Date</td>
              <td>Client</td>
              <td>Price</td>
              <td>Team</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.finishDate}</td>
                <td>{project.client}</td>
                <td>{project.price}</td>
                <td>
                  {project.team.map((member, index) => (
                    <img key={index} src={member} alt={`team-member-${index}`} />
                  ))}
                </td>
                <td>
                  <span className={`label btn-shape ${project.statusClass} c-white`}>
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;