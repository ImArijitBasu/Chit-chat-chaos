
import { Navigate, Outlet } from "react-router";
import useAuth from "../Hooks/useAuth";
import Mainlayout from "./Mainlayout";


const RootLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Mainlayout>
      <Outlet />
    </Mainlayout>
  );
};

export default RootLayout;
