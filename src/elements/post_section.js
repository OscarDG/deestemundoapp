import { blogPosts } from "../elements/postsData";
import React, {useState} from 'react'

function PostSection(){
    const [posts, setPosts] = useState();

    return(
        <div className="post-section">
            {blogPosts.map((post) => (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </>
            ))}
        </div>
    )
}

export {PostSection};