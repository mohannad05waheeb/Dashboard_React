const PlanFeature = ({ isAvailable, featureName }) => {
    return (
      <li>
        <i className={`fa-solid fa-${isAvailable ? "check yes" : "xmark"} fa-fw`}></i>
        <span>{featureName}</span>
        <i className="fa-solid fa-circle-info help"></i>
      </li>
    );
};
export default PlanFeature;  