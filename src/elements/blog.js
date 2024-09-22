import './blog.css'
import { blogPosts } from './postsData';

function BlogContent(){
    const posts = blogPosts.map((post) => {
        return(
            <div className='posts-content'>
                <article className='post-wrapper'>
                    <h2 className='post-title'>{post.title}</h2>
                    <div className='post-image'>
                        <img src={post.image} alt="Post image"/>
                        <div className='post-image--overlay'></div>
                    </div>
                    <span className='post-date'>{post.date}</span>
                    <span className='post-content'>{post.content}</span>
                    <a href={post.link} target='_blank' rel='noreferrer'>Leer más</a>
                </article>
            </div>
        )
    });

    return(
        <>
            <section className="blog-wrapper">
            <h1 className="blog-title">NUESTRO BLOG</h1>
                <div className="blog-content">
                    {posts}
                </div>
            </section>
        </>
    )
}

export default BlogContent;