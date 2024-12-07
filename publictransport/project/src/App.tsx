import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import { LoginForm } from './components/LoginForm';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { About } from './pages/About';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { TransportCard } from './components/TransportCard';
import { transportOptions } from './data/transportOptions';

function App() {
  const { user } = useAuthStore();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-8">Available Transport Options</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {transportOptions.map(transport => (
                    <TransportCard key={transport.id} transport={transport} />
                  ))}
                </div>
              </div>
            } />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;