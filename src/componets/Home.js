import React, { Component } from "react";
import Slider from "react-slick";
import Mainslider from "./Mainslider";
import Firstslider from "./Firstslider";
import Entertainment from "./Entertainment";
import Premieres from "./Premieres";
import Events from "./Event";
import Onlinestreamevnts from "./Onlinestreamevnts";
import Outdoorevents from "./Outdoorevents";
import Laughter from "./Laughter";
import Popularevent from "./Popularevent";

function Home() {

    return (
        <>
            <nav>
                <div className="container py-3">
                    <div className="row d-flex justify-content-between">
                        <div className="col-8 d-flex">
                            <a href="#" className="text-decoration-none" style={{ color: "white", fontSize: "25px", fontWeight: "lighter", marginRight: "20px" }}><span>bookmyshow</span></a>
                            <input class="form-control me-2" type="search" placeholder="Search for Movies, Events, Plays, Sports and Actvities" aria-label="Search"></input>
                        </div>
                        <div className="col-auto d-flex">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                surat
                            </a>
                            <button class="btn" type="button">Sign in</button>
                        </div>
                    </div>
                </div>
            </nav>

            <header>
                <div className="container d-flex justify-content-between py-2 px-0">
                    <div>
                        <ul className="d-flex">
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Stream</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Plays</a></li>
                            <li><a href="#">Sports</a></li>
                            <li><a href="#">Activities</a></li>
                            <li><a href="#">Buzz</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className="d-flex">
                            <li><a href="#">ListYourShow</a></li>
                            <li><a href="#">Corporates</a></li>
                            <li><a href="#">Offers</a></li>
                            <li><a href="#">Gift Cards</a></li>
                        </ul>
                    </div>
                </div>
            </header>

            <Mainslider />


            <div className="container">
                <div className="coindcx">
                    <img src={require('../image/img1.avif')} style={{ height: 30 }} />
                </div>
                <div className="row">
                    <h4>Recommended Movies</h4>
                </div>
                <div>
                    <Firstslider />
                </div>
                <div className="row" style={{ marginTop: "40px", marginBottom: "60px" }}>
                    <div className="col-lg-12">
                        <a href="#"><img src={require('../image/stremimg.avif')} style={{ width: "100%" }} /></a>
                    </div>
                </div>
                <div className="row" style={{ marginBottom: "50px" }}>
                    <div className="col">
                        <h5 style={{ fontWeight: "bold" }}>The Best of Entertainment</h5>
                    </div>
                    <div>
                        <Entertainment />
                    </div>
                </div>
            </div>

            <div className="premier">
                <div className="container" >
                    <div className="row">
                        <div className="col">
                            <a href="#"><img src={require('../image/premier.avif')} style={{ width: "100%", marginTop: "20px" }} /></a>
                        </div>
                    </div>
                    <div className="head_premier">
                        <h4>Premieres</h4>
                        <p style={{ fontSize: "13px" }}>Brand new releases every Friday</p>
                    </div>
                    <div>
                        <Premieres />
                    </div>
                </div>
            </div>

            <div className="event_happning">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h5>Events Happening Near You</h5>
                        </div>
                        <div>
                            <Events />
                        </div>
                    </div>
                </div>
            </div>

            <div className="event_online">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h5>Online Streaming Events</h5>
                        </div>
                        <div>
                            <Onlinestreamevnts />
                        </div>
                    </div>
                </div>
            </div>

            <div className="outdoor_events">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col d-flex">
                            <h5>Outdoor Events</h5>
                            <img src={require('../image/new.avif')} style={{ height: "20px", marginTop: "1px", marginLeft: "5px" }} />
                        </div>
                        <div>
                            <Outdoorevents />
                        </div>
                    </div>
                </div>
            </div>

            <div className="laughter_events">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h5>Laughter Therapy</h5>
                        </div>
                        <div>
                            <Laughter/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pop_events">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col">
                            <h5>Popular Events</h5>
                        </div>
                        <div>
                           <Popularevent/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home