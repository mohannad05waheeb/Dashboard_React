import latest1 from '../../assets/latest1.jfif';
import latest2 from '../../assets/latest2.jfif';
import latest3 from '../../assets/latest3.jfif';
import latest4 from '../../assets/latest4.jfif';
const LatestNews = () => {
  const newsItems = [
    {
      image: latest1,
      title: "Created SASS Section",
      description: "New SASS Examples & Tutorials",
      timeAgo: "3 Days Ago"
    },
    {
      image: latest2,
      title: "Changed The Design",
      description: "A Brand New Website Design",
      timeAgo: "5 Days Ago"
    },
    {
      image: latest3,
      title: "Team Increased",
      description: "3 Developers Joined The Team",
      timeAgo: "7 Days Ago"
    },
    {
      image: latest4,
      title: "Added Payment Gateway",
      description: "Many New Payment Gateways Added",
      timeAgo: "9 Days Ago"
    }
  ];
  return (
    <div className="latest-news p-20 bg-white rad-10 txt-c-mobile">
      <h2 className="mt-0 mb-20">Latest News</h2>
      {newsItems.map((news, index) => (
        <div key={index} className="news-row d-flex align-center">
          <img src={news.image} alt="latest new" />
          <div className="info">
            <h3>{news.title}</h3>
            <p className="m-0 fs-14 c-grey">{news.description}</p>
          </div>
          <div className="btn-shape bg-eee fs-13 label">{news.timeAgo}</div>
        </div>
      ))}
    </div>
  );
};
export default LatestNews;