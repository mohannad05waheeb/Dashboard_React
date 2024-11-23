import Welcome from './Welcome';
import QuickDraft from './QuickDraft';
import YearlyTargets from './YearlyTargets'; 
import TicketsStatistics from './TicketsStatistics';
import LatestNews from './LatestNews';
import LatestTasks from './LatestTasks';
import Items from './Items';
import LatestUploads from './LatestUploads';
import Project from './Project';
import Reminders from './Reminders';
import Post from './Post';
import SocialMedia from './SocialMedia';
import Table from './Table';
const Dashboard = () => {
  return (
    <div className="page">
      <h1 className="p-relative">Dashboard</h1>
      <div className="wrapper d-grid gap-20">
        <Welcome />
        <QuickDraft />
        <YearlyTargets />
        <TicketsStatistics />   
        <LatestNews />
        <LatestTasks />
        <Items /> 
        <LatestUploads />
        <Project />
        <Reminders />
        <Post />
        <SocialMedia />
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;