
import PropTypes from 'prop-types';
const Blog = ({ blog }) => {
    const{title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-4'>
                    <img className="rounded-b-full w-14 mt-2" src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>

                    </div>
                </div>
                <div>
                    <span>{reading_time} read</span>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='text-blue-700'>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes ={
    blog : PropTypes.object.isRequired
}
export default Blog;