import React from 'react';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ fontWeight: 'bold', color: '#3498db' }}>Restaurant Finder</h1>
      <RestaurantList />
    </div>
  );
}

export default App;
