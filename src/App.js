import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";
import NotePage from "./pages/NotePage";
import './App.css';


function App() {
    return (

        <Router>
            <div className="container">
                <div className={"app"}>
                    <Header/>
                    <Route component={NotesPage} path={'/'} exact/>
                    <Route component={NotePage} path={'/note/:id'} exact/>
                </div>
            </div>
        </Router>
    );
}

export default App;


//npx create-react-app frontend
//npm install -S react-router-bootstrap
//npm install react-router-dom@5
//npm install react-bootstrap bootstrap@5.1.3
//npm install -S react-router-bootstrap@rr-v4