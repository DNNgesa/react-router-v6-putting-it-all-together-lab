import { Link, useOutletContext } from "react-router-dom";

const DirectorList = () => {
    const context = useOutletContext();
    const directors = context?.directors || [];

    const displayDirectors = directors.map((d) => (
        <li key={d.id}>
            <Link to={`/directors/${d.id}`}>{d.name}</Link>
        </li>
    ));

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
};

export default DirectorList;
