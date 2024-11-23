const Backup = () => {  
return ( 
  <div className="backup-control p-20 bg-white rad-10">
  <h2 className="mt-0 mb-10">Backup Manager</h2>
  <p className="mt-0 mb-20 c-grey fs-15">Control Backup Time And Location</p>
  <div className="date d-flex align-center mb-15">
    <input type="radio" name="time" id="daily" checked />
    <label for="daily">Daily</label>
  </div>
  <div className="date d-flex align-center mb-15">
    <input type="radio" name="time" id="weekly" />
    <label for="weekly">Weekly</label>
  </div>
  <div className="date d-flex align-center mb-15">
    <input type="radio" name="time" id="monthly" />
    <label for="monthly">Monthly</label>
  </div>
  <div className="servers d-flex align-center txt-c">
    <input type="radio" name="servers" id="server-one" />
    <div class="server mb-15 rad-10 w-full">
      <label className="d-block m-15" for="server-one">
        <i className="fa-solid fa-server d-block mb-10"></i>
        Megaman
      </label>
    </div>
    <input type="radio" name="servers" id="server-two" checked />
    <div className="server mb-15 rad-10 w-full">
      <label className="d-block m-15" for="server-two">
        <i className="fa-solid fa-server d-block mb-10"></i>
        Zero
      </label>
    </div>
    <input type="radio" name="servers" id="server-three" />
    <div className="server mb-15 rad-10 w-full">
      <label className="d-block m-15" for="server-three">
        <i className="fa-solid fa-server d-block mb-10"></i>
        Sigma
      </label>
    </div>
  </div>
</div>
)};
export default Backup;