const FileStats = () => {
    return (
      <div className="files-stats p-20 bg-white rad-10">
        <h2 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
        {[
          { icon: "fa-file-pdf", color: "blue", type: "PDF Files", count: "130", size: "6.5GB" },
          { icon: "fa-images", color: "green", type: "Images", count: "115 Files", size: "3.5GB" },
          { icon: "fa-file-word", color: "red", type: "Word Files", count: "110 Files", size: "3.2GB" },
          { icon: "fa-file-csv", color: "orange", type: "CSV Files", count: "99 Files", size: "2.9GB" },
        ].map((stat, index) => (
          <div key={index} className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i className={`fa-regular ${stat.icon} fa-lg ${stat.color} center-flex c-${stat.color} icon`}></i>
            <div className="info">
              <span>{stat.type}</span>
              <span className="c-grey d-block mt-5">{stat.count}</span>
            </div>
            <div className="size c-grey">{stat.size}</div>
          </div>
        ))}
        <a className="upload bg-blue c-white fs-13 rad-6 d-block w-fit" href="#">
          <i className="fa-solid fa-angles-up mr-10"></i> Upload
        </a>
      </div>
    );
};
export default FileStats; 