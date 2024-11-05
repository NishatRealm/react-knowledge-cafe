
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleAddToBookmark }) => {
    const{title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className='mx-10 mt-10'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className="rounded-b-full w-14 mt-4" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl mt-2">{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div >
                    <span>{reading_time} read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)} className='pl-2 text-blue-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mt-4'>{title}</h2>
            <p className='text-blue-700'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func
}
export default Blog;