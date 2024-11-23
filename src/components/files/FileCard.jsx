const FileCard = ({ src, alt, name, uploader, date, size }) => {
    return (
      <div className="file bg-white p-10 rad-10">
        <i className="fa-solid fa-download c-grey p-absolute"></i>
        <div className="icon txt-c">
          <img className="mt-15 mb-15" src={src} alt={alt} />
        </div>
        <div className="txt-c mb-10 fs-14">{name}</div>
        <p className="c-grey fs-13">{uploader}</p>
        <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
          <span>{date}</span>
          <span>{size}</span>
        </div>
      </div>
    );
};
export default FileCard;   