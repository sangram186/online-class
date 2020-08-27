import React, { useState } from 'react';
import './App.css';
import fakeData from './fakeData/fakeData';
import Header from './Component/Header/Header';
import Course from './Component/Course/Course';
import Cart from './Component/Cart/Cart';

function App() {
  const [allData, setAllData] = useState(fakeData);

  const [cart, setCart] = useState([]);

  const enrollBtn = (item)=>{
    const newCart = [...cart, item];
    setCart(newCart);
  }
  
  return (
    <div>
      <div className="course">
      <Header cart={cart}></Header>
        <h2 className='filter-course'>Newest courses</h2>
        <div className="all-course">
          {
            allData.map(data => <Course enrollBtn={enrollBtn} data={data}></Course>)
          }
        </div>
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
}

export default App;
