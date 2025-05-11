import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation/Navigation";
import AuthProvider from "./context/AuthContext";
import Tickets from "./pages/Tickets";
import Auth from "./pages/Auth";

const baseUrl = process.env.VITE_PUBLIC_URL || '/';

function App() {
  return (
    <AuthProvider>
      <Router basename={baseUrl}>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tickets" element={<Tickets/>} />
          <Route path="/auth/:mode?" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
