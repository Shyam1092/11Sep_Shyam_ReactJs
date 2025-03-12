import axios from "axios";

const API_URL = "http://localhost:5000/users";

// Get all users
export const getUsers = async() => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new user
export const addUser = async(user) => {
    const response = await axios.post(API_URL, user);
    return response.data;
};

// Update a user (PUT)
export const updateUser = async(id, updatedUser) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedUser);
    return response.data;
};

// Update a user partially (PATCH)
export const patchUser = async(id, updatedData) => {
    const response = await axios.patch(`${API_URL}/${id}`, updatedData);
    return response.data;
};

// Delete a user
export const deleteUser = async(id) => {
    await axios.delete(`${API_URL}/${id}`);
};