import React, {useState, useEffect} from 'react'
import NavBar from '../elements/navbar';
import SecondHero from '../elements/secondhero';
import BlogContent from '../elements/blog_content';
import Footer from '../elements/footer';
import {blogEntries} from './entriesData';
import '../css/blogpage.css'

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

{const entryWrap = blogEntries.map((entry) => {
    return(
        <div className="entry-wrap">
            <h1 className='entry-title'>{entry.title}</h1>
            <img src={entry.image} alt='Blog image' />
            <p className='entry-content'>{entry.description}</p>
            <span>{entry.date}</span>
        </div>
    )
})};



    return(
    <>
        <header className={`app-header ${sticky ? 'sticky' : ''}`}>
            <NavBar />
        </header>
        <section>
            <SecondHero />
        </section>
        <div className='entries-container'>
            <BlogContent />
        </div>
        <footer className='App-footer'>
            <Footer />
        </footer>
    </>
    )
}

export default BlogPage;