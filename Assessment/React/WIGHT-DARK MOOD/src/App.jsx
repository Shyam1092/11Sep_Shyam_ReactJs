import { useTheme } from "./ThemeContext";
import ThemeButton from "./ThemeButton";

function App() {
  const { theme } = useTheme();

  return (
    <>
    <div className={`app ${theme}`}>
    <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">
    Email address
  </label>
  <input
    type="email"
    className="form-control"
    id="exampleFormControlInput1"
    placeholder="name@example.com"
  />
</div>
<>
  <label htmlFor="inputPassword5" className="form-label">
    Password
  </label>
  <input
    type="password"
    id="inputPassword5"
    className="form-control"
    aria-describedby="passwordHelpBlock"
  />

</>
<button type="button" class="btn btn-primary">Submit</button>

      <ThemeButton />
    </div>
    </>
  );
}

export default App;
