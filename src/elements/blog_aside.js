import './blog_aside.css'
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