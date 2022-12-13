import './App.css'
import {
  Routes,
  BrowserRouter as Router,
  Route

} from 'react-router-dom'
import WelcomePage from './views/Welcome'
import BillingCurrency from './views/BillingCurrency'
import StripeConfiguration from './views/StripeConfiguration'
import ConnectStripeAccount from './views/ConnectStripeAccount'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/choose-billing-currency" element={<BillingCurrency />} />
        <Route path="/stripe-configs" element={<StripeConfiguration />} />
        <Route path="/connect-account" element={<ConnectStripeAccount />} />
      </Routes>
    </Router>
  )
}

export default App
