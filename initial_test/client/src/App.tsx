import HomePage from "./pages/home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;