import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(process.env.REACT_APP_STRIPE_APP_DEV_URL)
      .then(response => {
        console.log('API response:', response.data);
        setOrders(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const ordersArray = Object.values(orders);

  return (
    <div>
      <h1>Orders</h1>
      <ul>
        {ordersArray.map(order => (
          <li key={order.id}>
            <h2>Order {order.id}</h2>
            <p>Status: {order.status}</p>
            {/* Render other order details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;