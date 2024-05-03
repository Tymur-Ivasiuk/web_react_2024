import { useRouteError } from 'react-router-dom';
import s from './ErrorPage.module.css';

const ErrorPage = (props) => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops!</h1>
            
            <p>
                <i>
                    {error.statusText || error.message }
                </i>
            </p>
        </div>
    );
}

export default ErrorPage;
