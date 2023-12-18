import {useState} from 'react';
import {posts} from '../utils/dummyData'
import Banner from '../assets/components/Banner';


const Home = () => {
  const numOfpages = 1;
  const [page, setPage] = useState(1);


  return posts.length < 1 ? <div className='w-full h-full px-8 flex place-items-center justify-center'>No Post <span className='text-lg text-slate-700'> No Post Found</span></div>:
  <div className='py-10 2xl:py-5' >
    <Banner post = {posts[0]}/>
  </div>
};

export default Home;
