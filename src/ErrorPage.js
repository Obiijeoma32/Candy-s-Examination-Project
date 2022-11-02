import "./App.css";
import { Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

export default function ErrorPage() {
  return (
    <>
      <HelmetProvider>
        <meta name="description" content="Error page" />
        <title>404 page</title>
      </HelmetProvider>
      <main className="error-page-content">
        404 Error page click here
        <Link className="error-page-link" to="/">
          Home Page
        </Link>
      </main>
    </>
  );
}
