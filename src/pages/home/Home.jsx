
import Feed from '../../components/feed/Feed';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
import Rightbar from '../../components/rightbar/Rightbar';
const Home = () =>{

    return(
        <>
        <div>
            <Navbar />
            <div className='homeContainer'>
                            <Sidebar />
                            <Feed />
                            <Rightbar />

            </div>
        </div>
        </>
    )
}
export default Home;