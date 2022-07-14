import React, { useEffect, useState } from 'react'
import { fetchCustomers } from '../../common/api';
import "./Home.scss";

const Home = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const data = fetchCustomers();
    if (data)
      setCustomers(data.listCustomers)
  }, [])


  return (
    <div className="home">
      <p>Home</p>
    </div>
  )
}

export default Home