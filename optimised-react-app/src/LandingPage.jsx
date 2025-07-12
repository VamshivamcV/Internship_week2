import React from 'react';

const LandingPage = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1>Supercharged JavaScript. Lightning-Fast Performance.</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          Modern, modular, and ready for the future — built with Webpack and Babel for maximum efficiency and flexibility.
        </p>
        <button style={{ padding: '1rem 2rem', fontSize: '1rem', marginTop: '1rem', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px' }}>
          🔥 Get Started
        </button>
      </section>

      {/* About Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Build Smarter Frontends with Cutting-Edge Tooling</h2>
        <p>
          This project is a modern frontend starter kit powered by <strong>Webpack</strong> and <strong>Babel</strong>. It’s designed to help developers write clean, modular, and scalable JavaScript using the latest ECMAScript features — all while ensuring compatibility across all major browsers.
        </p>
        <p>
          With automatic bundling, live reloading, and performance optimizations out of the box, you can focus on building amazing experiences instead of worrying about tooling.
        </p>
      </section>

      {/* Features Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Features</h2>
        <ul>
          <li>✅ ES6+ Support via Babel</li>
          <li>⚡ Lightning-fast development with Webpack Dev Server</li>
          <li>🔄 Hot Module Replacement (HMR)</li>
          <li>🧱 Modular JavaScript Architecture</li>
          <li>📦 Optimized production builds</li>
          <li>📜 Simple, readable configuration</li>
        </ul>
      </section>

      {/* How It Works */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>How It Works</h2>
        <ol>
          <li>Write modern JavaScript with the latest syntax.</li>
          <li>Run the dev server to preview changes instantly.</li>
          <li>Build for production and deploy with confidence.</li>
        </ol>
      </section>

      {/* Audience Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Who Is This For?</h2>
        <ul>
          <li>JavaScript developers who want full control over their build system.</li>
          <li>Teams building SPAs or static sites.</li>
          <li>Anyone looking to learn how modern bundlers and transpilers work under the hood.</li>
        </ul>
      </section>

      {/* Getting Started */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Try the Starter Template</h2>
        <pre style={{ backgroundColor: '#f4f4f4', padding: '1rem', borderRadius: '5px', overflowX: 'auto' }}>
{`git clone https://github.com/your-repo/webpack-babel-starter.git
cd webpack-babel-starter
npm install
npm run start`}
        </pre>
        <p>
          🔗 <a href="https://github.com/your-repo/webpack-babel-starter" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </p>
      </section>

      {/* CTA Footer */}
      <section style={{ textAlign: 'center', marginTop: '4rem' }}>
        <h2>Ready to build your next JavaScript app?</h2>
        <div style={{ marginTop: '1rem' }}>
          <button style={{ marginRight: '1rem', padding: '0.8rem 1.5rem', fontSize: '1rem', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Download the Starter
          </button>
          <button style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px' }}>
            View the Docs
          </button>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
