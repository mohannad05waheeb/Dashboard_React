import { Link } from "react-router-dom"; 
const General  = () => {
    return (
        <div className="p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">General Info</h2>
        <p className="mt-0 mb-20 c-grey fs-15">General Information About Your Account</p>
        <div className="mb-15">
          <label className="fs-14 c-grey d-block mb-10" htmlFor="first">First Name</label>
          <input
            className="b-none border-ccc p-10 rad-6 d-block w-full"
            type="text"
            id="first"
            placeholder="First Name"
          />
        </div>
        <div className="mb-15">
          <label className="fs-14 c-grey d-block mb-5" htmlFor="last">Last Name</label>
          <input
            className="b-none border-ccc p-10 rad-6 d-block w-full"
            id="last"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div>
          <label className="fs-14 c-grey d-block mb-5" htmlFor="email">Email</label>
          <input
            className="email b-none border-ccc p-10 rad-6 w-full mr-10"
            id="email"
            type="email"
            value="mohannadwaheeb05@gmail.com"
            disabled
          />
          <Link className="c-blue link" to={null}>Change</Link>
        </div>
      </div>
    );
};
export default General;