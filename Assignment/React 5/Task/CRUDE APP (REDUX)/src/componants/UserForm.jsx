import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../redux/userSlice";

const UserForm = ({ userToEdit, setUserToEdit }) => {
  const [name, setName] = useState(userToEdit ? userToEdit.name : "");
  const [email, setEmail] = useState(userToEdit ? userToEdit.email : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      dispatch(updateUser({ id: userToEdit.id, name, email })); 
      setUserToEdit(null);
    } else {
      dispatch(addUser({ name, email }));
    }
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 mb-2 w-full"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {userToEdit ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
