import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {AnimalsPage, CarsPage, CommentsPage, HomePage, NotFoundPage, PostsPage, UsersPage} from "./pages";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/animals'} element={<AnimalsPage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
