import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import RestaurantDetails from "./pages/RestaurantDetails"
import FoodOverlay from "./components/FoodOverlay/FoodOverlay"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<RestaurantDetails />} />
        <Route path="/test" element={<FoodOverlay/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App