import fox from '../../assets/fox.jpg';
const Post = () => {
    return (
        <div className="latest-post p-20 bg-white rad-10 p-relative">
        <h2 className="mt-0 mb-25">Latest Post</h2>
        <div className="top d-flex align-center">
        <img className="avatar mr-15 red-full" src={fox} alt="Fox" />   
            <div className="info">
            <span className="d-block mb-5 fw-bold">Mohamed Ashraf</span>
            <span className="c-grey">About 3 Hours Ago</span>
          </div>
        </div>
        <div className="post-content txt-c-mobile pt-20 pb-20 mt-20 mb-20">
          You can fool all of the people some of the time, and some of the people all of the time, but you can't
          fool all of the people all of the time.
        </div>
        <div className="post-stats between-flex c-grey">
          <div>
            <i className="fa-regular fa-heart"></i>
            <span>1.8K</span>
          </div>
          <div>
            <i className="fa-regular fa-comments"></i>
            <span>500</span>
          </div>
        </div>
      </div>
    )
};
export default Post;