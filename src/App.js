import first from './assets/first.jpg';
import second from './assets/second.jpg';
import third from './assets/third.jpg';
import { canIShowImages } from './utils/getData'
import './App.css';
import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

function App() {
  const [isLoad, setLoaded] = useState(false)
  useEffect(() => {
    fetchData()
  }, [])
  async function fetchData() {
    const res = await canIShowImages();
    setLoaded(res);
  }
  const images = [first, second, third];
  return (
    <div className='App'>
      <div className='wrapper'>
        {
          isLoad ? images.map((el, i) => <img key={i} src={el} alt="mountains" />)
            : images.map((_, i) => <Skeleton key={i} width={350} height={200} />)
        }
      </div>
    </div>
  );
}
export default App;
