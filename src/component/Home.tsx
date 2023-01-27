import { Link } from "react-router-dom";

export const Home: React.FC = () => {
    return (
        <>
            <h1>
                Welcome to our amazing site, check out our links:
            </h1>
            <ul>
                <li> 
                    <Link to="/froggy">Default Froggy/Link</Link>
                </li>

                <li> 
                    <Link to="/froggy/click">Froggy Click</Link>
                </li>
            </ul>
        </>
    );
}