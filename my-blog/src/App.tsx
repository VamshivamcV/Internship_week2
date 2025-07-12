import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Navbar from './components/NavBar';
import { BlogProvider } from './context/BlogContext';

function App() {
  return (
    <BlogProvider>
      <div className="min-h-screen flex flex-col bg-green-400">
        <Router>
          <Navbar />
          
          <main className="flex-grow bg-green-200 p-4 sm:p-6 lg:p-8 rounded-xl text-gray-800">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog/:id" element={<Blog />} />
            </Routes>
          </main>
        </Router>
      </div>
    </BlogProvider>
  );
}

export default App;
