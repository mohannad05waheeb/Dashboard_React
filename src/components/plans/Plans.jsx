import Plan from './Plan';
const Plans = () => {
    const plans = [
      {
        name: "Free",
        price: "0.00",
        color: "green",
        isCurrentPlan: false,
        features: [
          { name: "Access All Text Lessons", isAvailable: true },
          { name: "Access All Videos Lessons", isAvailable: true },
          { name: "Appear On Leaderboard", isAvailable: true },
          { name: "Browse Content Without Ads", isAvailable: false },
          { name: "Access All Assignments", isAvailable: false },
          { name: "Get Daily Prizes", isAvailable: false },
          { name: "Earn Certificate", isAvailable: false },
          { name: "1 GB Space For Hosting Files", isAvailable: false },
          { name: "Access Badge System", isAvailable: false },
        ],
      },
      {
        name: "Basic",
        price: "7.99",
        color: "blue",
        isCurrentPlan: false,
        features: [
          { name: "Access All Text Lessons", isAvailable: true },
          { name: "Access All Videos Lessons", isAvailable: true },
          { name: "Appear On Leaderboard", isAvailable: true },
          { name: "Browse Content Without Ads", isAvailable: true },
          { name: "Access All Assignments", isAvailable: true },
          { name: "Get Daily Prizes", isAvailable: true },
          { name: "Earn Certificate", isAvailable: true },
          { name: "1 GB Space For Hosting Files", isAvailable: false },
          { name: "Access Badge System", isAvailable: false },
        ],
      },
      {
        name: "Premium",
        price: "19.99",
        color: "orange",
        isCurrentPlan: true,
        features: [
          { name: "Access All Text Lessons", isAvailable: true },
          { name: "Access All Videos Lessons", isAvailable: true },
          { name: "Appear On Leaderboard", isAvailable: true },
          { name: "Browse Content Without Ads", isAvailable: true },
          { name: "Access All Assignments", isAvailable: true },
          { name: "Get Daily Prizes", isAvailable: true },
          { name: "Earn Certificate", isAvailable: true },
          { name: "1 GB Space For Hosting Files", isAvailable: true },
          { name: "Access Badge System", isAvailable: true },
        ],
      },
    ];  
    return (
      <div className="page">
        <h1 className="p-relative">Plans</h1>
        <div className="plans-page d-grid m-20 gap-20">
          {plans.map((plan, index) => (
            <Plan key={index} {...plan} />
          ))}
        </div>
      </div>
    );
};
export default Plans;  