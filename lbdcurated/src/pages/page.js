
// pages/index.js
import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Vintage Vibes</h1>
        <p>Your go-to shop for unique vintage clothing items.</p>
      </header>

      <nav>
        <Link href="/shop"><button>Shop Now</button></Link>
        <Link href="/signin"><button>Sign In/Sign Up</button></Link>
      </nav>

      <section>
        <h2>Featured Items</h2>
        <p>Check out our latest vintage collections!</p>
        {/* Add a grid or list of featured items here */}
      </section>
    </div>
  );
}

export default HomePage;
