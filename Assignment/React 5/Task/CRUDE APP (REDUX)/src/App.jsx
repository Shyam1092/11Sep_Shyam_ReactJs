import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserForm from "./componants/UserForm";
import UserList from "./componants/UserList";
import { useState } from "react";

function App() {
  const [userToEdit, setUserToEdit] = useState(null);

  return (
    <Provider store={store}>
      <div className="max-w-md mx-auto mt-10 p-4 shadow-md bg-white rounded">
        <h1 className="text-xl font-bold text-center mb-4">User Management</h1>
        <UserForm userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
        <UserList setUserToEdit={setUserToEdit} />
      </div>
    </Provider>
  );
}

export default App;
