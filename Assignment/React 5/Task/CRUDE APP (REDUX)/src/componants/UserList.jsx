import { useSelector } from "react-redux";
import UserItem from "./UserItem";

const UserList = ({ setUserToEdit }) => {
  const users = useSelector((state) => state.users.users);

  return (
    <div>
      {users.length === 0 ? (
        <p className="text-gray-500">No users added yet!</p>
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} setUserToEdit={setUserToEdit} />)
      )}
    </div>
  );
};

export default UserList;
