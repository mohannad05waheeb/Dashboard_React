import FriendCard from './FriendCard';
const FriendList = ({ friends }) => {
  return (
    <div className="friends-page d-grid m-20 gap-20">
      {friends.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
    </div>
  );
};
export default FriendList;