import Post from '../post/Post';
import Share from '../share/Share';  
import './Feed.css';
import {Posts, Users} from '../../assets/Data.js'
const Feed = () =>{
    return (

        <>
        <div className='feed'>
            <div className='feedWrapper'>
                <Share />
                {
                    Posts.map((post)=>(
                        <Post key={post.id} post={post}/>
                    ))
                }
                
            </div>
        </div>
        </>
    )
}
export default Feed;