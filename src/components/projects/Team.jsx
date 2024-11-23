const Team = ({ teamImages }) => {
    return (
      <div className="team">
        {teamImages.map((img, index) => (
          <a href="#" key={index}><img src={img} alt={`team${index}`} /></a>
        ))}
      </div>
    );
};
export default Team;