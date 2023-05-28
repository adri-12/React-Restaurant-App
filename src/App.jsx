import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ErrorBoundary from "./components/ErrorBoundary";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <>
      <ErrorBoundary fallback="There was an Error">
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants/:restaurantId" element={<RestaurantPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
