import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <main className="container my-5" style={{ maxWidth: "750px" }}>
        <div className="card shadow-sm border-0 p-5 text-center bg-light">
          <h1 className="display-6 fw-bold mb-3">
            Welcome to the Movie Directory
          </h1>
          <p className="lead text-muted mb-4">
            Explore a collection of famous directors and their iconic movies.
            Click below to start exploring!
          </p>
          <nav className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/directors" className="btn btn-primary px-4">
              <i className="bi bi-film me-2"></i>View Directors
            </Link>
            <Link to="/about" className="btn btn-outline-secondary px-4">
              Learn More About This App
            </Link>
          </nav>
        </div>
      </main>
    </>
  );
}

export default Home;
