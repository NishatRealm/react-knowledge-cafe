import './index.css'; 
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';

function App() {
      const[bookmarks, setBookMarks] = useState([]);
      const[readingTime, setReadingTime] = useState(0);

      const handleAddToBookmark = blog => {
        const newBookmark = [...bookmarks,blog];
        setBookMarks(newBookmark);
      }
      const handleMarkAsread = (time) => {
        const newReadingTime = readingTime + Number(time); 
        setReadingTime(newReadingTime);
      };
      

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsread={handleMarkAsread}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App
