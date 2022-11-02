import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import "./App.css";

// const sub = "candy";

// function Farewell({ subject }) {
//   return <div>Goodbye {subject.toUpperCase()}</div>;
// }

function ErrorMessage({ error }) {
  return (
    <div role="alert">
      <p>An error occurred</p>
      <p>{error.message}</p>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
