const ProfileInfoBox = ({ title, data, checkedState, onChange }) => {
  return (
    <div className="box p-20 d-flex align-center">
      <h4 className="c-grey fs-15 m-0 w-full">{title}</h4>
      {data.map((item, index) => (
        <div key={index} className="fs-14">
          <span className="c-grey">{item.label}: </span>
          <span>{item.value}</span>
        </div>
      ))}
      <div className="fs-14">
        <label>
          <input
            className="toggle-checkbox"
            type="checkbox"
            checked={checkedState}
            onChange={onChange}
          />
          <div className="toggle-switch"></div>
        </label>
      </div>
    </div>
  );
};
export default ProfileInfoBox;