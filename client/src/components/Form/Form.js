import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    const { root, paper, form, fileInput, buttonSubmit } = useStyles();

    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }
        clear();
    };

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
    };

    if (!user?.result?.name) {
        return (
            <Paper className={`${root} ${paper}`}>
                <Typography variant='h6' align='center'>
                    Please Sign In to create Post and like someone's post
                </Typography>
            </Paper>
        );
    }

    return (
        // Here is Paper is like a div which has whitish bg
        <Paper className={`${paper} ${root}`}>
            <form autoComplete='off' noValidate className={`${root} ${form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    {currentId ? `Edit Post` : `Creating a Post`}
                </Typography>
                <TextField
                    name="title"
                    variant='outlined'
                    label="Title"
                    value={postData.title}
                    onChange={e => setPostData({ ...postData, title: e.target.value })}
                    fullWidth
                />
                <TextField
                    name="message"
                    variant='outlined'
                    label="Message"
                    value={postData.message}
                    onChange={e => setPostData({ ...postData, message: e.target.value })}
                    fullWidth
                />
                <TextField
                    name="tags"
                    variant='outlined'
                    label="Tags"
                    value={postData.tags}
                    onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })}
                    fullWidth
                />
                <div className={fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>
                    Submit
                </Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;