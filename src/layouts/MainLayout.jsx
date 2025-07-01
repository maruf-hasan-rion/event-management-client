import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
}
