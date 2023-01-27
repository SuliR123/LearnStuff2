//within the actual app, create a routes and router, that at the entry page has a link with this component
import { Routes, Route } from "react-router-dom";
import { Landing } from "../component/Landing";
import { Froggy } from "../component/Froggy";
import { Home } from "../component/Home";

export const HomePage: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/froggy" element={<Froggy/>}/>
            <Route path="/froggy/click" element={<Landing/>}/> 
        </Routes>
    );    
};

export default HomePage

