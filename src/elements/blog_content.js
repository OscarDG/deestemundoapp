import '../css/blog_content.css';
import React, {useState} from 'react';
import {blogPosts} from './postsData';

function BlogContent(){

    const [content, setContent] = useState(0);
    const posts = blogPosts.map((post, index) => {
        return(
            <>
            <article className='asidepost-content'>
                <div className='asidepost-image'>
                    <img src={post.image} alt="Post image"/>
                    <div className='asidepost-image--overlay'></div>
                </div>
                <h2 className='asidepost-title'>{post.title}</h2>
                <span className='asidepost-date'>{post.date}</span>
                <a target='_blank' rel='noreferrer' onClick={()=> setContent(index)}>Leer más</a>
            </article>
            </>
        )
    });

    const postIndexNumber = content;
    const postContent = blogPosts[postIndexNumber];

    return(
        <>
            <aside className="aside_wrapper">
                    {posts}
            </aside>
            <div className="post-section">
                    <h1 className='post-section--title'>{postContent.title}</h1>
                    <div className='post-section--hero'>
                        <img src={postContent.image} alt='Imagen de la publicación'></img>
                        <div className='post-section-hero--overlay'>
                        
                        </div>
                        <p className='post-section-span'>{postContent.date}</p>
                    </div>
                    <div className='post-section--content'>
                        <p className='post-section--pharagraph'>{postContent.content}</p>
                    </div>
            </div>
        </>
    );
}

export default BlogContent;