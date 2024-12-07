import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";
import { Triangle } from "react-loader-spinner";
const Layout = ({ children }) => {
  return (
    <>
      <header className={s.header_wrapper}>
        <AppBar />
      </header>
      <main className={s.main_wrapper}>
        <Suspense
          fallback={
            <div className={s.loader}>
              <Triangle />
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
