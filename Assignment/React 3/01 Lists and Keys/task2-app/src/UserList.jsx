import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Trupti" },
    { id: 2, name: "Vishva" },
    { id: 3, name: "Dixita" },
    { id: 4, name: "Janvi" },
  ];

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <ul className="list-disc pl-4">
        {users.map((user) => (
          <li key={user.id} className="py-1">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
