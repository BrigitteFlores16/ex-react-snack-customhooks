import useSwitch from "./useSwitch";

function App() {
  const [isOn, toggle] = useSwitch();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <h1 className="mb-4">Il valore è: {isOn ? "TRUE" : "FALSE"}</h1>
          <button onClick={toggle} className="btn btn-primary">
            Cambia Stato
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
