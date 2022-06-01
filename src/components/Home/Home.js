import React, { useEffect, useState } from 'react';
import classes from '../FetchValorant/Valo.module.css';

const Home = () => {
  const [harryPother, setHarryPother] = useState(null);

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then((response) => response.json())
      .then((result) => {
        setHarryPother(result);
      });
  }, []);

  return (
    harryPother && (
      <ol className={classes.testimg}>
        {harryPother.map((pother) => (
          <li key={harryPother.pother}>
            <img src={pother.image} alt="" />
            <h3>{pother.name}</h3>
          </li>
        ))}
      </ol>
    )
  );
};

export default Home;
