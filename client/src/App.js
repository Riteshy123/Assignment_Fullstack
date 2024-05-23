import React from 'react';
import FetchConfiguration from './components/FetchConfiguration';
import UpdateRemark from './components/UpdateRemark';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4 text-center">
          My Assignment
        </header>
        <nav className="bg-blue-400 text-white py-3">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-200">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Fetch Configuration
                </button>
              </Link>
            </li>
            <li>
              <Link to="/update-remark" className="hover:text-gray-200">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-white hover:text-blue-600 transition-colors duration-300">
                  Update Remark
                </button>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex-grow p-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<FetchConfiguration />} />
              <Route path="/update-remark" element={<UpdateRemark />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
