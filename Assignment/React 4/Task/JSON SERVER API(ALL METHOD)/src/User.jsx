import React, { useEffect, useState } from "react";
import {
  getUsers,
  addUser,
  updateUser,
  patchUser,
  deleteUser,
} from "./UserService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleAddUser = async () => {
    if (name && email) {
      await addUser({ name, email });
      fetchUsers();
      setName("");
      setEmail("");
    }
  };

  const handleEditUser = async () => {
    if (editId) {
      await updateUser(editId, { name, email });
      fetchUsers();
      setEditId(null);
      setName("");
      setEmail("");
    }
  };

  const handlePatchUser = async (id) => {
    await patchUser(id, { name: "Updated Name" });
    fetchUsers();
  };

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">User Management</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-2 py-1"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1"
        />
        {editId ? (
          <button onClick={handleEditUser} className="bg-yellow-500 text-white px-4 py-1">
            Update
          </button>
        ) : (
          <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-1">
            Add
          </button>
        )}
      </div>

      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 px-4 py-2">{user.id}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => {
                    setEditId(user.id);
                    setName(user.name);
                    setEmail(user.email);
                  }}
                  className="bg-yellow-500 text-white px-2 py-1 mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handlePatchUser(user.id)}
                  className="bg-purple-500 text-white px-2 py-1 mx-1"
                >
                  Patch
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="bg-red-500 text-white px-2 py-1 mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
