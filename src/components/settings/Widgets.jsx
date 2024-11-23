import { useState } from "react";

const Widgets = () => {
  const [widgets, setWidgets] = useState({
    quickDraft: true,
    yearlyTargets: true,
    ticketsStatistics: true,
    latestNews: true,
    latestTasks: false,
    topSearchItems: true,
  });

  const handleToggle = (key) => {
    setWidgets((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="widgets-control p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Widgets Control</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Show/Hide Widgets</p>

      {Object.entries(widgets).map(([key, value]) => (
        <div key={key} className="control d-flex align-center mb-15">
          <input
            type="checkbox"
            id={key}
            checked={value}
            onChange={() => handleToggle(key)}
          />
          <label htmlFor={key}>
            {key
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Widgets;