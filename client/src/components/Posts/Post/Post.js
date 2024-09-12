import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId}) => {
    const { card, media, overlay, overlay2, details, title, cardActions } = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {
        if (post.likes.length > 0) {
            return post.likes.find((like) => like === (user?.result?.sub || user?.result?._id))
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    return (
        <Card className={card}>
            <CardMedia className={media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={overlay}>
                <Typography variant="h6">{post?.name || post?.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            {(user?.result?.name === post?.name) && (
            <div className={overlay2}>
                <Button
                    style={{ color: 'white' }} size="small"
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            )}
            <div className={details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color='textSecondary' component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={cardActions}>
                <Button size='small' color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id || post.creator))}>
                    <Likes />
                </Button>
                {(user?.result?.name === post?.name) && (
                <Button size='small' color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                    &nbsp;Delete
                </Button>
                )}
            </CardActions>
        </Card>
    );
};

export default Post;