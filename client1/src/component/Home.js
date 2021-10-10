import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



export default function Home() {
    return (
        <div>
            <div>
                <nav className=" pt-3 pb-3 navbar navbar-expand-lg navbar-dark bg-success">
                    <div className="container-fluid">
                        <span className="navbar-brand " >Logo</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active mx-3" aria-current="page" to={"/home"}>Home</Link>
                                </li>

                            </ul>
                            <div className="d-flex">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active mx-3" aria-current="page" to={"/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active mx-3" aria-current="page" to={"/register"}>Register</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>


            </div>
            <div style={{ display: 'block', width: 700, padding: 30 }}>
                <h1 style={{color:'darkgreen'}}>Welcome To Online Grocery Shop</h1>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2xwxup1biY_jywFv8RR0fdAHmsSWa-3h3vA&usqp=CAU"
                            alt=" Two" height='300px'
                        />
                        <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNke7saVFPdAQctcfU5ygiigP6XFAPa-MjqQ&usqp=CAU "
                            alt=" Three" height='300px'
                        />
                        <Carousel.Caption>
                            <h3>Label for first slide</h3>
                            <p>Sample Text for Image One</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100 "
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIrbL2lAi1NjJ50TGts8r-q3oCzYB7wHcXQ&usqp=CAU"
                            alt=" Four" height='300px'
                        />
                        <Carousel.Caption>
                            <h3>Label for second slide</h3>
                            <p>Sample Text for Image Two</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
               
            </div>

        </div>
    );
}
