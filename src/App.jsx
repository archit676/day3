import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <h2>My React App</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#counter">Counter</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tag">WELCOME 👋</p>

          <h1>
            Hello, I'm
            <span> React Developer</span>
          </h1>

          <p>
            Welcome to my React application.
            This page is created using React and CSS.
          </p>

          <button
            onClick={() => setCount(count + 1)}
          >
            Click Me 🚀
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>Why React?</h2>

        <div className="cards">

          <div className="card">
            <h3>⚡ Fast</h3>
            <p>
              React helps you create fast and responsive
              web applications.
            </p>
          </div>

          <div className="card">
            <h3>🎨 Beautiful</h3>
            <p>
              Create beautiful interfaces with reusable
              React components.
            </p>
          </div>

          <div className="card">
            <h3>🚀 Powerful</h3>
            <p>
              React provides powerful tools for building
              modern websites.
            </p>
          </div>

        </div>
      </section>

      {/* Counter Section */}
      <section className="counter" id="counter">
        <h2>Counter</h2>

        <p>You clicked the button:</p>

        <div className="count">
          {count}
        </div>

        <button onClick={() => setCount(count + 1)}>
          + Increase
        </button>

        <button
          className="reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 My React App</p>
        <p>Built with ❤️ and React</p>
      </footer>

    </div>
  )
}

export default App