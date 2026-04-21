import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    customers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [productsRes, ordersRes, customersRes] = await Promise.all([
          api.get('/products'),
          api.get('/orders'),
          api.get('/customers')
        ]);
        
        setStats({
          products: productsRes.data.length || 0,
          orders: ordersRes.data.length || 0,
          customers: customersRes.data.length || 0
        });
      } catch (error) {
        console.error("Error fetching admin stats:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Beshop Admin Panel</h1>
      <p>Welcome to the custom Next.js admin dashboard connected to your Laravel MongoDB backend.</p>
      
      {loading ? (
        <p>Loading stats...</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', minWidth: '150px' }}>
            <h2>Products</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.products}</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', minWidth: '150px' }}>
            <h2>Orders</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.orders}</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', minWidth: '150px' }}>
            <h2>Customers</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stats.customers}</p>
          </div>
        </div>
      )}
      <div style={{ marginTop: '40px' }}>
        <button style={{ padding: '10px 20px', backgroundColor: '#000', color: '#fff', cursor: 'pointer' }}>
          Add New Product
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
