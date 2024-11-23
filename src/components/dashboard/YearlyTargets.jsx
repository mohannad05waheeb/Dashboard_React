const YearlyTargets = () => {
  const targets = [
    {
      iconClass: "fa-dollar-sign",
      colorClass: "blue",
      label: "Money",
      value: "$20.000",
      progress: 80
    },
    {
      iconClass: "fa-code",
      colorClass: "orange",
      label: "Projects",
      value: "24",
      progress: 55
    },
    {
      iconClass: "fa-user",
      colorClass: "green",
      label: "Team",
      value: "12",
      progress: 75
    }
];
  return (
    <div className="targets p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Yearly Targets</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Targets Of The Year</p>
      {targets.map((target, index) => (
        <div key={index} className={`target-row mb-20 center-flex ${target.colorClass}`}>
          <div className="icon center-flex">
            <i className={`fa-solid ${target.iconClass} fa-lg c-${target.colorClass}`}></i>
          </div>
          <div className="details">
            <span className="fs-14 c-grey">{target.label}</span>
            <span className="d-block mt-5 mb-10 fw-bold">{target.value}</span>
            <div className="progress p-relative">
              <span className={`bg-${target.colorClass} ${target.colorClass}`} style={{ width: `${target.progress}%` }}>
                <span className={`bg-${target.colorClass}`}>{target.progress}%</span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default YearlyTargets;