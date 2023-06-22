import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Index';
import TodoFirebase from '../pages/todofirebase/Index';


export default function RouterApp() {
    //react router v5

    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="todofirebase" element={<TodoFirebase />} />
            </Routes>
        </Router>);
}