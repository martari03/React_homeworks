import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {AuthLayout, MainLayout} from "./layouts";
import {CarsPage, LoginPage, NotFoundPage, RegisterPage} from "./pages";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'cars'}/>}/>
                    <Route element={<AuthLayout/>}>
                        <Route path={'/cars'} element={<CarsPage/>}/>
                    </Route>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export {App};