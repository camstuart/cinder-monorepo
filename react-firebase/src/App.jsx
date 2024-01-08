import Profile from './pages/profile';



import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import SignUp from "../pages/sign-up.jsx";
import SignIn from "../pages/sign-in.jsx";

function App() {

    return (
        <Router>
            <div>
                <section>
                    <Routes>                                                                        <Route path="/" element={<Home/>}/>
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route path="/sign-in" element={<SignIn/>} />
                        <Route path="/log-out" element={<SignOut/>} />
                        <Route path="/profile" element={<Profile/>} />
                    </Routes>
                </section>
            </div>
        </Router>
    );
}

export default App;
