import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";
import useKeyPress from "./useKeyPress";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");
  const isEnterPressed = useKeyPress("Enter");

  return (
    <div className="container-fluid min-vh-100 bg-light py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body text-center">
              <p className="text-muted mb-3">
                <small className="fs-6">{currentDate.toLocaleString()}</small>
              </p>

              <h1 className="mb-4 display-4">
                Il valore è: {isOn ? "true" : "false"}
              </h1>
              <button
                className="btn btn-primary btn-lg w-75 rounded-pill mb-3"
                onClick={toggle}
              >
                Cambia Stato
              </button>

              <div className="alert alert-info mt-3" role="alert">
                Enter key pressed:{" "}
                <strong>{isEnterPressed ? "Yes" : "No"}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      {customPointer}
    </div>
  );
}

export default App;
