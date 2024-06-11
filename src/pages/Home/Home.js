import React, { useState } from 'react'
import "./home.module.css"
import Header from '../../componets/Header/Header'
import ExploreMenu from '../../componets/ExploreMenu/ExploreMenu'
export default function Home() {

    const [category, setCategory] = useState('All');
  
    return (
      <div>
        <Header />
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
    );
  
}
