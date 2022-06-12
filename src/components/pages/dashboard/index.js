import logo from './logo.svg'
import './style.css'
import { Link } from 'react-router-dom'
import NbosDashboardTemplate from '../../features/dashboard/NbosDashboardTemplate'

export function DashboardPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>Atomic Element component files</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://bradfrost.com/blog/post/atomic-web-design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Component-Driven Development
        </a>
      </header>

      <div className="App-line" />

      <NbosDashboardTemplate />

      <div className="App-line" />

      <section className="App-main">
        <Link to="/" className="App-link">
          Home Page
        </Link>
      </section>
    </div>
  )
}
