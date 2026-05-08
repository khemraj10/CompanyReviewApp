import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ReviewDetails from "../pages/ReviewDetails";
import AddReviewPage from "../pages/AddReviewPage";
import AddCompanyPage from "../pages/AddCompanyPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies/:id/reviews" element={<ReviewDetails />} />
          <Route path="/add-company" element={<AddCompanyPage />} />
          <Route
            path="/companies/:id/reviews/add-review"
            element={<AddReviewPage />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRoutes;
