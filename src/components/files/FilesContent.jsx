import FileCard from "./FileCard";
import upload1 from '../../assets/upload1.png';
import upload2 from '../../assets/upload2.png';
import upload3 from '../../assets/upload3.png';
import upload4 from '../../assets/upload4.png';
import upload5 from '../../assets/upload5.png';
import upload6 from '../../assets/upload6.png';
const FilesContent = () => {
    const files = [
      { src: upload1, alt: "pdf", name: "my-file.pdf", uploader: "Mohannad", date: "20/06/2020", size: "5.5MB" },
      { src: upload2, alt: "avi", name: "my-file.avi", uploader: "Admin", date: "16/05/2021", size: "12.5MB" },
      { src: upload6, alt: "eps", name: "my-file.eps", uploader: "Uploader", date: "16/05/2021", size: "2.7MB" },
      { src: upload3, alt: "psd", name: "my-file.psd", uploader: "Mohannad", date: "16/05/2021", size: "15.1MB" },
      { src: upload5, alt: "dll", name: "my-file.dll", uploader: "Coder", date: "16/05/2021", size: "2.2MB" },
      { src: upload6, alt: "png", name: "my-file.zip", uploader: "Designer", date: "16/05/2021", size: "1.1MB" },
      { src: upload4, alt: "png", name: "my-file.zip", uploader: "Programmer", date: "16/05/2021", size: "1.1MB" },
      { src: upload4, alt: "png", name: "my-file.zip", uploader: "Designer", date: "16/05/2021", size: "1.1MB" },
      { src: upload1, alt: "pdf", name: "my-file.pdf", uploader: "Mohannad", date: "20/06/2020", size: "5.5MB" },
      { src: upload2, alt: "avi", name: "my-file.avi", uploader: "Admin", date: "16/05/2021", size: "12.5MB" },
      { src: upload2, alt: "avi", name: "my-file.avi", uploader: "Admin", date: "16/05/2021", size: "12.5MB" },
      { src: upload6, alt: "png", name: "my-file.zip", uploader: "Designer", date: "16/05/2021", size: "1.1MB" },
      { src: upload6, alt: "png", name: "my-file.zip", uploader: "Designer", date: "16/05/2021", size: "1.1MB" },
      { src: upload3, alt: "psd", name: "my-file.psd", uploader: "Mohannad", date: "16/05/2021", size: "15.1MB" },
      { src: upload3, alt: "psd", name: "my-file.psd", uploader: "Mohannad", date: "16/05/2021", size: "15.1MB" },
      { src: upload5, alt: "dll", name: "my-file.dll", uploader: "Coder", date: "16/05/2021", size: "2.2MB" },
      { src: upload5, alt: "dll", name: "my-file.dll", uploader: "Coder", date: "16/05/2021", size: "2.2MB" },
    ];  
    return (
      <div className="files-content d-grid gap-20">
        {files.map((file, index) => (
          <FileCard key={index} {...file} />
        ))}
      </div>
    );
};
export default FilesContent;  