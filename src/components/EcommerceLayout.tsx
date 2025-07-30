// src/components/EcommerceLayout.tsx
import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const EcommerceLayout = () => {
  return (
    <>
      <Navber />
      <main className="min-h-screen px-4 py-6">
        <Outlet />
      </main>
    </>
  );
};

export default EcommerceLayout;
