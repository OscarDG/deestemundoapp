import React, {useState, useEffect} from 'react'
import NavBar from '../elements/navbar';
import SecondHero from '../elements/secondhero';
import BlogAside from '../elements/blog_aside';
import Footer from '../elements/footer';
import '../pages/blogpage.css'

function BlogPage(){

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 50){
              setSticky(true);
          }else{
              setSticky(false);
          }
      };
      window.addEventListener('scroll', handleScroll);
      return() => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  const blogImages = [
    {
        key: 1,
        image1: 'https://images.unsplash.com/photo-1507525428034-b723cf961',
    },
    {
        key: 2,
        image2: 'https://images.unsplash.com/photo-1507525428034-b723cf961',
    },
    {
        key: 3,
        image3: 'https://images.unsplash.com/photo-1507525428034-b723cf961',
    }
  ];

  const blogEntries = [
    {
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    image: blogImages.image3,
    date: "May 15, 2019",
  },
{
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    image: blogImages.image2,
    date: "May 15, 2019",
},
{
    title: "Blog",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod",
    image: blogImages.image1,
    date: "May 15, 2019",
}
];

const entryWrap = blogEntries.map((entry) => {
    return(
        <div className="entry-wrap">
            <h1 className='entry-title'>{entry.title}</h1>
            <img src={entry.image} alt='Blog image' />
            <p className='entry-content'>{entry.description}</p>
            <span>{entry.date}</span>
        </div>
    )
});



    return(
    <>
        <header className={`app-header ${sticky ? 'sticky' : ''}`}>
            <NavBar />
        </header>
        <section>
            <SecondHero />
        </section>
        <aside className='entries-container'>
            <BlogAside />
        </aside>
        <section>
            
        </section>
        <footer className='App-footer'>
            <Footer />
        </footer>
    </>
    )
}

export default BlogPage;