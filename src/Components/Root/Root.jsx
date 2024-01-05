import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <h2>this home</h2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;