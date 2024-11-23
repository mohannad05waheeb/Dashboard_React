import PlanFeature from './PlanFeature';
const Plan = ({ name, price, features, color, isCurrentPlan }) => {
    return (
      <div className={`plan ${color} bg-white p-20`}>
        <div className={`top bg-${color} txt-c p-20`}>
          <h2 className="m-0 c-white">{name}</h2>
          <div className="price c-white">
            <span>$</span>{price}
          </div>
        </div>
        <ul className="list-none p-0">
          {features.map((feature, index) => (
            <PlanFeature key={index} isAvailable={feature.isAvailable} featureName={feature.name} />
          ))}
        </ul>
        {isCurrentPlan ? (
          <p className="c-grey m-0 txt-c">This Is Your Current Plan</p>
        ) : (
          <a href="#" className={`btn-shape bg-${color} c-white d-block w-fit`}>Join</a>
        )}
      </div>
    );
};
export default Plan;  