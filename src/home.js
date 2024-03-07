import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Konyv from './Konyv';

function Home() {
  const [konyvek, setKonyvek] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/Konyv')
      .then(response => {
        setKonyvek(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
  <>
    <div className='container'>
      <h1>Könyvek</h1>
      <div className='row'>
        {konyvek.map(konyv => (
            <Konyv key={konyv.konyvId} {...konyv}></Konyv>
        ))}
      </div>
    </div>
  </>
  );
}

export default Home;
