import {Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, HomePage, LogInPage, NotFoundPage, PostByCommentPage, TodosPage} from "./pages";
import {RequireAuth} from "./hoc";

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={
                        <RequireAuth>
                            <TodosPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'albums'} element={
                        <RequireAuth>
                            <AlbumsPage/>
                        </RequireAuth>
                    }/>
                    <Route path={'comments'} element={
                        <RequireAuth>
                            <CommentsPage/>
                        </RequireAuth>
                    }>
                        <Route path={':postId'} element={<PostByCommentPage/>}/>
                    </Route>
                    <Route path={'login'} element={<LogInPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
