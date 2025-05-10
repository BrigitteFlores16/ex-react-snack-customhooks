import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer("🔥");

  return (
    <div className="container">
      <div className="d-flex justify-content-end pt-3">
        <div className="text-center p-4 bg-light rounded shadow-sm">
          <p className="text-muted mb-3 fs-5">
            <small>{currentDate.toLocaleString()}</small>
          </p>
          <h1 className="mb-4 display-4">
            Il valore è: {isOn ? "true" : "false"}
          </h1>
          <button
            className="btn btn-primary btn-lg px-5 rounded-pill"
            onClick={toggle}
          >
            Cambia Stato
          </button>
        </div>
      </div>
      {customPointer}
    </div>
  );
}

export default App;
