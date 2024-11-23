const Info = ({ progressWidth, price }) => {
    return (
      <div className="info between-flex">
        <div className="prog bg-eee">
          <span className="bg-green" style={{ width: progressWidth }}></span>
        </div>
        <div className="fs-14 c-grey">
          <i className="fa-solid fa-dollar-sign"></i>
          {price}
        </div>
      </div>
    );
};
export default Info;