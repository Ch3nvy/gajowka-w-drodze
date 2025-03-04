import { useNavigate, useLocation } from "react-router-dom";
import ButtonComponent from "../button/Button"; // Import our custom ButtonComponent

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const getButtonStyle = (path: string) => ({
    backgroundColor: location.pathname === path ? "#ff0000" : undefined,
    "&:hover": {
      backgroundColor: location.pathname === path ? "#cc0000" : undefined,
    },
  });

  return (
    <div className="w-full border-2 border-pink-500 flex justify-between items-center p-2">
      <div>
        <ButtonComponent
          variant="contained"
          endIcon={<img src="/vite.svg" alt="logo" className="w-6 h-6" />}
          onClick={() => handleNavigate("/")}
          customStyle="pink"
        >
          Logo
        </ButtonComponent>
      </div>
      <div className="flex gap-2">
        <ButtonComponent
          variant="contained"
          onClick={() => handleNavigate("/home")}
          sx={getButtonStyle("/home")}
        >
          Home
        </ButtonComponent>
        <ButtonComponent
          variant="contained"
          onClick={() => handleNavigate("/")}
          sx={getButtonStyle("/")}
        >
          Welcome
        </ButtonComponent>
        <ButtonComponent
          variant="contained"
          sx={getButtonStyle("/about")}
          onClick={() => handleNavigate("/about")}
        >
          About
        </ButtonComponent>
      </div>
      <div>
        <ButtonComponent
          variant="contained"
          sx={getButtonStyle("/login")}
          onClick={() => handleNavigate("/login")}
        >
          Login
        </ButtonComponent>
      </div>
    </div>
  );
}
