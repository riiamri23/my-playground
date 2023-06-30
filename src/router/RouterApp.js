import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Index';
import TodoFirebase from '../pages/todofirebase/Index';
import CarouselSlider from '../pages/carouselslider';


export default function RouterApp() {
    //react router v5

    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="todofirebase" element={<TodoFirebase />} />
                <Route path="carouselslider" element={<CarouselSlider />} />
            </Routes>
        </Router>);
}