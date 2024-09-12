import axios from 'axios';

const API = axios.create({ baseURL: `${process.env.REACT_APP_BASE_URL}` });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
});

export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => {
    console.log('SignIn FormData:', formData);
    return API.post('/user/signIn', formData)
};

export const signUp = (formData) => {
    console.log('SignUp FormData:', formData);
    return API.post('/user/signUp', formData)
};
