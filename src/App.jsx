import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1>AI Assistant</h1>
          <p>Your Personal RAG-powered Chatbot</p>
          <div className="header-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </header>
      
      <main className="main-content">
        <section className="intro-section">
          <h2>Experience Next-Gen AI Assistance</h2>
          <p>Unlock the power of artificial intelligence with our advanced chatbot solution</p>
        </section>

        <div className="features">
          <div className="feature-card">
            <h2>24/7 Assistance</h2>
            <p>Get help anytime, anywhere</p>
          </div>
          <div className="feature-card">
            <h2>Smart Responses</h2>
            <p>Powered by advanced AI</p>
          </div>
          <div className="feature-card">
            <h2>Easy Integration</h2>
            <p>Seamless experience</p>
          </div>
          <div className="feature-card">
            <h2>Real-time Learning</h2>
            <p>Adapts to your needs instantly</p>
          </div>
          <div className="feature-card">
            <h2>Secure & Private</h2>
            <p>Your data is protected</p>
          </div>
          <div className="feature-card">
            <h2>Custom Solutions</h2>
            <p>Tailored to your requirements</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h2>Multi-language Support</h2>
            <p>Communicate in multiple languages seamlessly</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h2>Analytics Dashboard</h2>
            <p>Track and analyze conversations</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h2>Context Awareness</h2>
            <p>Maintains conversation context</p>
          </div>
        </div>

        <section className="stats-section">
          <div className="stat-card">
            <h3>10M+</h3>
            <p>Conversations</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Languages</p>
          </div>
          <div className="stat-card">
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
        </section>

        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Try it yourself!</h3>
            <p>Experience the power of our AI Assistant</p>
          </div>
          <iframe
            src="https://app.vectorshift.ai/chatbots/embedded/67bbf621db413f030404d88d?openChatbot=true"
            className="chatbot-frame"
            allow="clipboard-read; clipboard-write; microphone"
            title="AI Chatbot"
          />
        </div>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <a href="#">Documentation</a>
            <a href="#">API</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        <p className="copyright">© 2025 AI Assistant. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
