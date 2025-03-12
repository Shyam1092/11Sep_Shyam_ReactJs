import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";

const UserItem = ({ user, setUserToEdit }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2">
      <div>
        <p className="font-bold">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <div>
        <button onClick={() => setUserToEdit(user)} className="text-blue-500 px-2">✏️</button>
        <button onClick={() => dispatch(deleteUser(user.id))} className="text-red-500 px-2">❌</button>
      </div>
    </div>
  );
};

export default UserItem;
