import { Outlet } from "react-router-dom";;

export default function EmployeeLayout() {
  return (
    <>
      <header>
        </header>
          <Outlet/>
        <footer>
      </footer>
    </>
  );
}
