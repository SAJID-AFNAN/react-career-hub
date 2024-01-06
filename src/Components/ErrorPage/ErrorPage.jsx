import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <h3>Opps !!! this not a valid link</h3>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default ErrorPage;