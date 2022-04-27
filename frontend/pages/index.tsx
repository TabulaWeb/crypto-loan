import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import Loader from '../components/Loader';
import styles from  '../styles/Home.module.css';

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
  };

  if(firstLoad == 'true') {
    return (
      <div className="container">
        <Intro checkLoad={loadCheck} />
      </div>
    );
  };

  if(loading) {
    return (
      <div className="container">
        <Loader />
      </div>
    );
  };

  return (
    <div className="container">
      <div className="home">
        <h1>Главная страница</h1>
      </div>
    </div>
  );
};

export default Home;
