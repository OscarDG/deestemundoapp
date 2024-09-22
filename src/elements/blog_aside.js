import './blog_aside.css';
import {blogPosts} from './postsData';

function BlogAside(){
    const posts = blogPosts.map((post) => {
        return(
            <article className='asidepost-content'>
                <div className='asidepost-image'>
                    <img src={post.image} alt="Post image"/>
                    <div className='asidepost-image--overlay'></div>
                </div>
                <h2 className='asidepost-title'>{post.title}</h2>
                <span className='asidepost-date'>{post.date}</span>
                <a href={post.link} target='_blank' rel='noreferrer'>Leer más</a>
            </article>
        )
    });

    return(
        <>
            <section className="aside_wrapper">
                <div className="aside-content">
                    {posts}
                </div>
            </section>
        </>
    )
}

export default BlogAside;