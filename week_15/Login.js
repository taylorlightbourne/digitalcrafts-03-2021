import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../components/LoginRegister.css';
import InspoCard from "./InspoCard";
import footerDesign from '../Assets/FooterDesign.png'



const Login = () => {

    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    useEffect(() => {
    Inspiration();
    }, []);

    const Inspiration = async () => {
    const response = await fetch("http://quotes.rest/qod.json", {
    headers: { Accept: "application/json" },
    });

    const parsedData = await response.json();
    console.log(parsedData.contents.quotes[0].author)
    setQuote(parsedData.contents.quotes[0].quote)
    setAuthor(parsedData.contents.quotes[0].author)

    };

    return (
        <div className="main-container">
                <div className="main-contents">
                    <div className="header">
                        <h1>Login</h1>
                        <p>Please sign into your account.</p>
                    </div>
                    <form>
                        <div className="email__input">
                            <input type="text" name="email" placeholder="Email" id="floatingInput" required></input>
                        </div>
                        <div className="password__input">
                            <input type="password" name="password" placeholder="Password" id="floatingInput" required></input>
                        </div>
                        <div className="submit__btn">
                            <button type="submit" id="submit__btn">Login</button>
                        </div>
                    </form>
                    <Link to="/register">
                        <p>New User? Create an Account Here</p>
                    </Link>
                    <div className="quoteAPI">
                        <InspoCard author={author} quote={quote}/>
                    </div>
                </div>
                <footer>
                    <img src={footerDesign} />
                </footer>
        </div>
    )
};

export default Login;