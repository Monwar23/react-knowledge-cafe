import PropTypes from 'prop-types'; // ES6
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog,handleAddToBookmark, handleMarkAsRead }) => {
    const {id, title, cover_image, author, img, posted_date, reading_time ,hashtag} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full rounded-lg' src={cover_image} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mt-5 '>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min reads</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600'><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl mt-4'>{title}</h2>
            <p className='mt-3'>
                {
                    hashtag.map((hash,index)=><span key={index}><a className='mr-3' href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;