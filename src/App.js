import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">MyBrand</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Welcome to Our Webpage</h2>
          <p>Building something amazing, one step at a time.</p>
          <button className="cta-button">Get Started</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;