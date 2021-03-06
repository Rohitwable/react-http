import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                console.log(result);
                const posts = result.data.slice(0, 4);
                const updatedPosts = posts.map((post) => {
                    return {
                        ...post,
                        author: "rohit"
                    }
                })
                this.setState({ posts: updatedPosts });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    selectPostHandler = (postId) => {
        this.setState({ selectedPostId: postId })
    }
    render() {
        const posts = this.state.posts.map((post, index) => (
            <Post
                title={post.title}
                key={post.id}
                author={post.author}
                clicked={() => this.selectPostHandler(post.id)}
            />
        ))
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;