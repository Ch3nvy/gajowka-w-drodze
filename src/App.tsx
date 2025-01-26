import { DeleteOutline } from "@mui/icons-material";
import "./App.css";
import ButtonComponent from "./components/button/Button";

function App() {
  const showAlert = (message: string) => {
    alert(message);
  };

  return (
    <>
      <div>
        <p className="text-blue-300">Siema</p>
        <ButtonComponent
          sx={{ bgcolor: "red" }}
          variant="contained"
          onClick={() => showAlert("uwaga")}
          endIcon={<DeleteOutline />}
        >
          Przycisk!@
        </ButtonComponent>
      </div>
    </>
  );
}

export default App;
