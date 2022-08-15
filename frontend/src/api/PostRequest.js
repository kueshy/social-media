import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });

export const uploadPost = (data) => API.post("/api/post/new", data);
export const likePost = (id, userId) =>
  API.put(`/api/post/${id}/like`, { userId: userId });
export const getTimelinePosts = (id) => API.get(`/api/post/${id}/timeline`);
