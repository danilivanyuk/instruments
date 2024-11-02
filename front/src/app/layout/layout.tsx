import { Outlet } from "react-router-dom";

export const Layout = () => {
  // TODO: Authoriztion
  return (
    <main>
      <Outlet />
    </main>
  )
}
