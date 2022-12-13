import './App.css'
import {
  Routes,
  BrowserRouter as Router,
  Route

} from 'react-router-dom'
import WelcomePage from './views/Welcome'
import CheckoutView from './views/Checkout'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/checkout" element={<CheckoutView />} />
      </Routes>
    </Router>
  )
}

export default App
