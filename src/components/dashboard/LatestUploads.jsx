import upload1 from '../../assets/upload1.png';
import upload2 from '../../assets/upload2.png';
import upload3 from '../../assets/upload3.png';
import upload4 from '../../assets/upload4.png';
import upload5 from '../../assets/upload5.png';
import upload6 from '../../assets/upload6.png';
const uploads = [
  { id: 1, src: upload1, name: 'my-file.pdf', user: 'Mohannad', size: '2.9mb', type: 'pdf' },
  { id: 2, src: upload2, name: 'My-Video-File.avi', user: 'Admin', size: '4.9mb', type: 'avi' },
  { id: 3, src: upload3, name: 'My-Psd-File.pdf', user: 'Omar', size: '4.5mb', type: 'psd' },
  { id: 4, src: upload4, name: 'My-Zip-File.pdf', user: 'User', size: '8.9mb', type: 'zip' },
  { id: 5, src: upload5, name: 'My-DLL-File.pdf', user: 'Programmer', size: '4.9mb', type: 'dll' },
  { id: 6, src: upload6, name: 'My-Eps-File.pdf', user: 'Designer', size: '8.9mb', type: 'eps' },
];
const LatestUploads = () => {
  return (
    <div className="latest-uploads p-20 bg-white rad-10">
      <h2 className="mt-0 mb-20">Latest Uploads</h2>
      <ul className="m-0">
        {uploads.map((upload) => (
          <li key={upload.id} className="between-flex pb-10 mb-10">
            <div className="d-flex align-center">
              <img className="mr-10" src={upload.src} alt={upload.type} />
              <div>
                <span className="d-block">{upload.name}</span>
                <span className="fs-15 c-grey">{upload.user}</span>
              </div>
            </div>
            <div className="bg-eee btn-shape fs-13">{upload.size}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LatestUploads;