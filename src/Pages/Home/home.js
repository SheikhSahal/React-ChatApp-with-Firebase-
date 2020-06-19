import React, {Component} from 'react';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import './home.css';
import { Link } from 'react-router-dom';


export default class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <div class="splash-container">
                    <div class="splash">
                        <h1 class="splash-head"> 
                                Web Chat App
                        </h1>
                         <p class="splash-subhead">
                             Let's talk with our Loved ones
                         </p>

                        <div id="custom-button-wrapper">
                            <Link to="/login">
                                <a class="my-super-cool-btn">
                                    <div class="dots-container">
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>
                                        <div class="dot"></div>

                                    </div>
                                    <span className="buttoncooltext">Get Started</span>
                                </a>
                            </Link>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}