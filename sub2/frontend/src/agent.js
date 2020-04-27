import axios from "axios";

// const API_ROOT = "http://52.79.156.160/api";
const API_ROOT = "http://localhost:8000";


const requests = {
  get: (url, header) => axios.get(`${API_ROOT}${url}`, { headers: header }),
  post: (url, body, header) =>
    axios.post(`${API_ROOT}${url}`, body, { headers: header }),
};

const Data = {
  all: (pageNumber) => requests.get(`/api/all_stores?page=${pageNumber}`),

  search: (info, pageNumber) =>
    requests.get(
      `/api/search_stores?store_name=${info.store_name}&address=${info.address}&page=${pageNumber}`
    ),

  detail: (id) => requests.get(`/api/id_stores?store_id=${id}`),

  id_review: (store_id) => requests.get(`/api/id_reviews?store_id=${store_id}`),

  id_myreview: (user_id) =>
    requests.get(`/api/id_myreviews?user_id=${user_id}`),

  id_menu: (store_id) =>
    requests.get(`/api/storeid_menus?store_id=${store_id}`),

  register: (user) =>
    requests.post(`/rest-auth/registration/`, {
      email: user.email,
      username: user.username,
      password1: user.password,
      password2: user.pw2,
    }),
};

const Auth = {
  login : (name, pw) => 
    requests.post('/rest-auth/login/', 
    {username: name, password: pw}, 
    {})
  
}

export default {
  Data,
  Auth
};
