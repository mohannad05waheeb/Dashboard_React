import FriendList from './FriendList';
import mohamed from '../../assets/mohamed.jpg';
import omar from '../../assets/omar.jpg';
import radwan from '../../assets/radwan.jpg';
import nour from '../../assets/nour.jpg';
import eslam from '../../assets/eslam.jpg';
import yousef from '../../assets/yousef.jpg';
import fox from '../../assets/fox.jpg';
const Friends = () => {
  const friendsData = [
    {
      imgSrc: omar,
      name: 'Omar Waheeb',
      role: 'Entrepreneur',
      stats: { friends: 99, projects: 15, articles: 25 },
      joinedDate: '27/02/2010',
      isVip: true,
      profileLink: 'https://www.linkedin.com/in/omar-waheeb-77ba8522a/',
    },
    {
      imgSrc: fox,
      name: 'Mohamed Ashraf',
      role: 'Web & Mobile Developer',
      stats: { friends: 30, projects: 11, articles: 12 },
      joinedDate: '02/05/2024',
      isVip: true,
      profileLink: 'https://www.linkedin.com/in/urboifox/',
    },
    {
      imgSrc: radwan,
      name: 'Radwan Gaber',
      role: 'Back-End Developer',
      stats: { friends: 80, projects: 20, articles: 18 },
      joinedDate: '25/01/2024',
      isVip: false,
      profileLink: 'https://www.linkedin.com/in/radwan-gaber-2366b6219/',
    },
    {
        imgSrc: nour,
        name: 'Nour Elbana',
        role: 'Back-End Developer',
        stats: { friends: 70, projects: 30, articles: 18 },
        joinedDate: '25/03/2022',
        isVip: false,
        profileLink: 'https://www.linkedin.com/in/nour-elbana-978653134/',
    },
    {
        imgSrc: eslam,
        name: 'Eslam Elgedawy',
        role: 'Front-End Developer',
        stats: { friends: 80, projects: 30, articles: 18 },
        joinedDate: '25/03/2024',
        isVip: false,
        profileLink: 'https://www.linkedin.com/in/eslam-elgedawy/',
    },
    {
        imgSrc: yousef,
        name: 'Yousef Moheb',
        role: 'Student',
        stats: { friends: 70, projects: 30, articles: 18 },
        joinedDate: '22/12/2020',
        isVip: false,
        profileLink: 'https://www.facebook.com/profile.php?id=100049603094413',
    },
    {
        imgSrc: mohamed,
        name: 'Mohamed Ahmed',
        role: 'MERN Developer',
        stats: { friends: 70, projects: 30, articles: 18 },
        joinedDate: '16/11/2024',
        isVip: false,
        profileLink: 'https://www.linkedin.com/in/mohamed-alkomali/',
    },
];
  return (
    <div className="page">
      <h1 className="p-relative">Friends</h1>
      <FriendList friends={friendsData} />
    </div>
  );
};
export default Friends;