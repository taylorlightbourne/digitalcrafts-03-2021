import "./App.css";
import AboutMe from "./components/AboutMe";
import Nav from "./components/Nav";
import AboutContainer from "./components/AboutContainer";
import Sidebar from "./components/Sidebar";
function App() {
    return (
        <div className="App">
            <Nav/>
            <div className="main-contents">
                <AboutContainer />
                <Sidebar />
                <AboutMe />
            </div>
        </div>
    );
}

export default App;
