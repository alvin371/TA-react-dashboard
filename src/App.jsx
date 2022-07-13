import "react-toastify/dist/ReactToastify.min.css";
import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { ToastContainer } from "react-toastify";
import {
  ProtectedRoute,
  AccessibleNavigationAnnouncer,
  PublicRoute,
  ScrollToTop,
} from "./components";
const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));


const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Navigate to="login" />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route
            path="app/*"
            element={
              <ProtectedRoute>
                <ScrollToTop>
                  <Layout />
                </ScrollToTop>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      <ToastContainer hideProgressBar={true} autoClose={1500} />
    </GlobalProvider>
  );
};


export default App;
