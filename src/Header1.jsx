import React from 'react'
import { Link } from 'react-router-dom'

function Header1() {
  return (
    <div>
          {/* Header Section */}
      <header className="bg-light py-3">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="logo-container d-flex align-items-center">
            <img
            //  src="data:image/jpeg;base64,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"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOXX7pGW3gZ11dNDKle2vfwtNie-DiR3gZbVeOq1k0vd8EY4ZQDaqqNE9E3GdXnvrhno&usqp=CAU"
            alt="logo"
              width={75}
              className="mx-2 rounded-circle border border-warning"
            />
            <h1 className="text-warning mb-0" style={{ fontWeight: 'bold' }}>
              SecureShe
            </h1>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark" style={{ fontWeight: '500' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/locations" className="nav-link text-dark" style={{ fontWeight: '500' }}>
                  Alert Zones
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link text-dark" style={{ fontWeight: '500' }}>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link text-white rounded"
                  style={{
                    backgroundColor: '#f0a500',
                    fontWeight: '600',
                  }}
                >
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

     
    </div>
  )
}

export default Header1