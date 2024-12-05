import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <header className={s.header_wrapper}>
        <AppBar />
      </header>
      <main className={s.main_wrapper}>
        <Suspense fallback={<h2>Loading...</h2>}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
