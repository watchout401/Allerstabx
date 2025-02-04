import React from 'react';
import StatsGraph from '../components/StatsGraph';

function Home() {
  return (
    <div>
      <h1>Welcome to the Spices Information Website</h1>
      <p>Learn all about different spices and their uses!</p>
      <h2>Statistics Overview</h2>
      <StatsGraph />
    </div>
  );
}

export default Home;