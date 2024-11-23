const Social = () => {
    return (
        <div className="social-boxes p-20 bg-white rad-10">
        <h2 className="mt-0 mb-10">Social Info</h2>
        <p className="mt-0 mb-20 c-grey fs-15">Social Media Information</p>
        <div className="d-flex align-center mb-15">
          <i className="fa-brands fa-twitter center-flex c-grey"></i>
          <input className="w-full" type="text" placeholder="Twitter Username" />
        </div>
        <div className="d-flex align-center mb-15">
          <i className="fa-brands fa-facebook-f center-flex c-grey"></i>
          <input className="w-full" type="text" placeholder="Mohannad Waheeb" />
        </div>
        <div className="d-flex align-center mb-15">
          <i className="fa-brands fa-linkedin center-flex c-grey"></i>
          <input className="w-full" type="text" placeholder="Mohannad Waheeb" />
        </div>
        <div className="d-flex align-center">
          <i className="fa-brands fa-youtube center-flex c-grey"></i>
          <input className="w-full" type="text" placeholder="Youtube Username" />
        </div>
      </div>    
    );
};
export default Social;