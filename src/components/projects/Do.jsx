const Do = ({ tasks }) => {
    return (
      <div className="do d-flex">
        {tasks.map((task, index) => (
          <span className="fs-13 rad-6 bg-eee" key={index}>{task}</span>
        ))}
      </div>
    );
};
export default Do;