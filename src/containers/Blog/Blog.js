import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                console.log(result);
                this.setState({ posts: result.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        const posts = this.state.posts.map((post, index) => (
            <Post
                title={post.title}
                key={post.id}
            />
        ))
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;