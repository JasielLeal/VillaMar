import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <NavBar />
    </>
  )
}