import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Intro from '../components/Intro';

const demoAsyncCall = () => {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), 2500));
}

const Home: NextPage = () => {
  const [firstLoad, setFirstLoad] = useState<string | null>('true')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setFirstLoad(localStorage.getItem('firstLoad') || 'true');
    demoAsyncCall().then(() => setLoading(false));
  }, [])

  const loadCheck = () => {
    setFirstLoad('false')
  } 

  if(firstLoad == 'true') {
    return (
      <Intro checkLoad={loadCheck} />
    );
  }

  if(loading) {
    return (
      <p>Гружусь</p>
    );
  }

  return (
    <>
      <h1>Главная страница</h1> 
    </>
  )
};

export default Home;
