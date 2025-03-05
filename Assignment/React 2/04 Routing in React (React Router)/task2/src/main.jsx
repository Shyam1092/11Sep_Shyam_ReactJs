import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar'
import '../src/style.css'
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
createRoot(document.getElementById("demo")).render(

    <StrictMode>

<Router>
    <Routes>
    <Route path="/" element={<Navbar />} />
<Route path="Register-here" element={<Register/>} />
<Route path="*" element={<PageNotFound />} />

    </Routes>
    </Router>
    </StrictMode>
)