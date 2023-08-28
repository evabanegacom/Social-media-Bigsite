import React, { Component } from 'react';
import { connect } from 'react-redux';  // Connect is a function that returns a higher order component
import Rainbow from '../HOC/Rainbow';
import { Link } from 'react-router-dom';
import img from '.././assets/louis.jpg';


class Home extends Component {

    render() {
        const postList = this.props.posts.length ? (

            this.props.posts.map(post => {
                return (
                    <div className='post card' key={post.id}>
                        <div className='card-content'>
                        <p className='pic'><img src={img}></img></p>
                            <span className='card-title'><Link to={`posts/${post?.id}`}>{post.title}</Link></span>
                            <p className='card-body'>{post.body}</p>
                        </div>
                    </div>
                )
            })
        )
            :
            (<div className='center'><p>There are no Posts</p></div>);
        return (
            <div>
                <h1 className='center'>Home</h1>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Rainbow(Home));