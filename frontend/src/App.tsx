import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import Quizzes from "./pages/Quizzes/Quizzes";
import Profile from "./pages/Profile/Profile";
import Admin from "./pages/Admin/Admin";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import Continentes from "./pages/Quizzes/Continentes";
import Paises from "./pages/Quizzes/Paises";
import Capitais from "./pages/Quizzes/Capitais";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <LandingPage />
            </PublicLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          }
        />
        <Route
          path="/register"
          element={
            <PublicLayout>
              <Register />
            </PublicLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicLayout>
              <ForgotPassword />
            </PublicLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateLayout>
              <Dashboard />
            </PrivateLayout>
          }
        />
        <Route
          path="/quizzes"
          element={
            <PrivateLayout>
              <Quizzes />
            </PrivateLayout>
          }
        />
        <Route
          path="/quizzes/continentes"
          element={
            <PrivateLayout>
              <Continentes />
            </PrivateLayout>
          }
        />
        <Route
          path="/quizzes/paises"
          element={
            <PrivateLayout>
              <Paises />
            </PrivateLayout>
          }
        />
        <Route
          path="/quizzes/capitais"
          element={
            <PrivateLayout>
              <Capitais />
            </PrivateLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateLayout>
              <Profile />
            </PrivateLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateLayout>
              <Admin />
            </PrivateLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
