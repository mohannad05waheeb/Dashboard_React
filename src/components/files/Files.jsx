import FileStats from './FileStats';
import FilesContent from './FilesContent';
const Files = () => {
    return (
      <div className="page">
        <h1 className="p-relative">Files</h1>
        <div className="files-page d-flex m-20 gap-20">
          <FileStats />
          <FilesContent />
        </div>
      </div>
    );
};
export default Files