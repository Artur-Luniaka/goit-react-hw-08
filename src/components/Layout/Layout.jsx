import { Suspense } from "react";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <AppBar />
      </header>
      <main>
        <Suspense fallback={<h2>Loading...</h2>}>{children}</Suspense>
      </main>
    </>
  );
};

export default Layout;
