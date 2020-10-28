import './App.css';
import { Link } from 'react-scroll'; // Use link component from react-scroll library
function App() {
  return (
    <div className='app'>
      <nav className='app__navbar'>
        {/* 
        OLD LINKS
        <a href='#page1'>page 1</a>
        <a href='#page2'>page 2</a>
        <a href='#page3'>page 3</a> 
        */}
        <Link to='page1' smooth={true}>
          p1
        </Link>
        <Link to='page2' smooth={true}>
          p2
        </Link>
        <Link to='page3' smooth={true}>
          p3
        </Link>
      </nav>
      <section id='page1'>
        <img
          src='https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg'
          alt=''
        />
      </section>
      <section id='page2'>
        <img
          src='https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0d3f33fb6aa6e0154b7713a00454c83d'
          alt=''
        />
      </section>
      <section id='page3'>
        <img
          src='https://api.timeforkids.com/wp-content/uploads/2020/04/200410016385.jpg'
          alt=''
        />
      </section>
    </div>
  );
}

export default App;
