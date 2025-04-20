import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        {/* Footer Section */}
        <footer className="bg-light py-4">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-4">
              <h5 className="text-warning">Quick Links</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-secondary">Home</Link></li>
                <li><Link to="/locations" className="text-secondary">Heatmaps</Link></li>
                <li><Link to="/contact" className="text-secondary">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="text-warning">Contact Us</h5>
              <p className="text-secondary">
                Email: vnrvjiet.in<br />
                Phone: +1-234-567-890<br />
              </p>
              <div>
                <i className="bi bi-facebook mx-1 text-warning"></i>
                <i className="bi bi-twitter mx-1 text-warning"></i>
                <i className="bi bi-instagram mx-1 text-warning"></i>
              </div>
            </div>
            <div className="col-md-4">
              <h5 className="text-warning">Legal</h5>
              <ul className="list-unstyled">
                <li><Link to="/terms" className="text-secondary">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-secondary">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <p className="mt-3 text-secondary">&copy; {new Date().getFullYear()} SecureShe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
