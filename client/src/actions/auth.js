import * as API from '../api/index.js';

export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        // log in the user...
        const { data } = await API.signIn(formData);

        dispatch({ type: 'AUTH', data });

        navigate('/');
    } catch (error) {
        console.log(error);
    }
};

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        // sign up the user...
        const { data } = await API.signUp(formData);

        dispatch({ type: 'AUTH', data });

        navigate('/');
    } catch (error) {
        // console.log(error);
        console.error('SignUp Error:', error.response?.data || error.message);
    }
};
