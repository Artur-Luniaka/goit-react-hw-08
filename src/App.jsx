import "./App.css";
import "modern-normalize/modern-normalize.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home/Home"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage.jsx")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
