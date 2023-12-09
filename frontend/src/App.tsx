import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//layouts
import HomeLayout from "./layouts/homeLayout";
import OwnerLayout from "./layouts/ownerLayount";
import EmployeeLayout from "./layouts/employeeLayout";
import MemberLayout from "./layouts/memberLayout";

//Home
import Home from "./pages/home/home";
import Login from "./pages/home/login";

//Member
import MenuPreorder from "./pages/member/preOrder";
import ProfileMember from "./pages/member/profile";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/menuPreorder" element={<MenuPreorder />} />
      </Route>

      <Route path="" element={<OwnerLayout />}>
      </Route>

      <Route path="" element={<EmployeeLayout />}>
      </Route>
      
      <Route path="" element={<MemberLayout />}>
        <Route path="/menuPreorder" element={<MenuPreorder />} />
        <Route path="/profileMember" element={<ProfileMember />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
