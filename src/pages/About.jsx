import NavBar from "../components/NavBar";

function About() {
  return (
    <>
      <NavBar />
      <main className="container my-4" style={{ maxWidth: "800px" }}>
        <div className="card shadow-sm border-0 p-4">
          <h1 className="h2 fw-bold mb-3">About the Movie Directory 🎞️</h1>
          <p className="text-muted">
            This application showcases a list of notable film directors and
            their works. Users can:
          </p>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              Browse a list of directors and their filmographies.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              Add new directors to the database.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              View detailed information about individual movies.
            </li>
            <li className="list-group-item">
              <i className="bi bi-check-circle-fill text-primary me-2"></i>
              Add new movies to a director's collection and instantly view the
              new movie details.
            </li>
          </ul>
          <p className="text-muted mb-0">
            The application is built with React and React Router v6,
            demonstrating concepts such as nested routing, dynamic URL
            parameters, and programmatic navigation.
          </p>
        </div>
      </main>
    </>
  );
}

export default About;
