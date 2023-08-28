import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';




const Post = (props) => {
  const params = useParams();
  const postId = parseInt(params.id);
  const navigate = useNavigate();

  const handleDelete = () => {
    props.deletePost(postId);
    navigate('/')
  }


  const filterPost = props.posts.filter(post => post.id === postId);
  return (
    filterPost.length ?(
    <div>
      {filterPost.map(post => (
        <div className='post card' key={post.id}>
          <div className='card-content'>
            <span className='card-title'>{post.title}</span>
            <p className='card-body'>{post.body}</p>
           <div className='center'>
            <button className='btn grey' onClick={handleDelete}>Delete</button>
           </div> 
          </div>
        </div>
      ))}
    </div>
        )  : 
            (<p className='center'>Post not found</p>)
  );
};

const mapStateToProps = (state) => { 
  console.log({state})
  return {
    posts: state.posts.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);



