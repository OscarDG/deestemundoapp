import './blog.css'
import postImage1 from '../images/podcast-post_1.jpg'
import postImage2 from '../images/podcast-post_2.jpg'
import postImage3 from '../images/podcast-post_3.jpg'
import postImage4 from '../images/podcast-post_4.jpg'

const blogPosts = [{
    title: '¿Por qué hacer un Podcast?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
    date: '2020-01-01',
    image: postImage1,
    link:'./',
},
{
    title: 'La cultura de la eliminación',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
    date: '2020-01-01',
    image: postImage2,
    link:'./',
},
{
    title: 'Sostener y ser sostenido',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
    date: '2020-01-01',
    image: postImage3,
    link:'./',
},
{
    title: 'Miedo, política y control social',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero',
    date: '2020-01-01',
    image: postImage4,
    link:'./',
},
]

function BlogContent(){
    const posts = blogPosts.map((post) => {
        return(
            <div className='posts-content'>
                <article className='post-wrapper'>
                    <h2 className='post-title'>{post.title}</h2>
                    <div className='post-image'>
                        <img src={post.image} alt="Post image"/>
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