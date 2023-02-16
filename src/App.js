import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, PostByCommentPage, TodosPage} from "./pages";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<PostByCommentPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
