const LatestTasks = () => {
  const tasks = [
    { title: "Record One New Video", description: "Record Python Create Exe Project", done: false },
    { title: "Write Article", description: "Write Low Level vs High Level Languages", done: false },
    { title: "Finish Project", description: "Publish Academy Programming Project", done: false },
    { title: "Attend The Meeting", description: "Attend The Project Business Analysis Meeting", done: true },
    { title: "Finish Lesson", description: "Finish Teaching Flex Box", done: false },
  ];
  return (
    <div className="tasks p-20 bg-white rad-10">
      <h2 className="mt-0 mb-20">Latest Tasks</h2>
      {tasks.map((task, index) => (
        <div key={index} className={`task-row between-flex ${task.done ? 'done' : ''}`}>
          <div className="info">
            <h3 className="mt-0 mb-5 fs-15">{task.title}</h3>
            <p className="m-0 c-grey">{task.description}</p>
          </div>
          <i className="fa-regular fa-trash-can delete"></i>
        </div>
      ))}
    </div>
  );
};
export default LatestTasks;