const TicketsStatistics = () => {
  const ticketStats = [
    {
      iconClass: "fa-rectangle-list",
      colorClass: "orange",
      count: 2500,
      label: "Total"
    },
    {
      iconClass: "fa-spinner",
      colorClass: "blue",
      count: 500,
      label: "Pending"
    },
    {
      iconClass: "fa-circle-check",
      colorClass: "green",
      count: 1900,
      label: "Closed"
    },
    {
      iconClass: "fa-rectangle-xmark",
      colorClass: "red",
      count: 100,
      label: "Deleted"
    }
  ];
  return (
    <div className="tickets p-20 bg-white rad-10">
      <h2 className="mt-0 mb-10">Tickets Statistics</h2>
      <p className="mt-0 mb-20 c-grey fs-15">Everything About Support Tickets</p>
      <div className="d-flex txt-c gap-20 f-wrap">
        {ticketStats.map((stat, index) => (
          <div key={index} className="box p-20 rad-10 fs-13 c-grey">
            <i className={`fa-regular ${stat.iconClass} fa-2x mb-10 c-${stat.colorClass}`}></i>
            <span className="d-block c-black fw-bold fs-25 mb-5">{stat.count}</span>
            {stat.label}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TicketsStatistics;