import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <section className="section-padding bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-truck-fast" />
                                    <h6>Free &amp; Next Day Delivery</h6>
                                    <p>We assure next day delivery</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-basket" />
                                    <h6>100% Satisfaction Guarantee</h6>
                                    <p>Satisfaction is our utmost priority</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="feature-box">
                                    <i className="mdi mdi-tag-heart" />
                                    <h6>Great Daily Deals Discount</h6>
                                    <p>Get huge discounts daily</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-padding footer bg-white border-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <h4 className="mb-5 mt-0"><a className="logo" href="index.html"><img src="/img/logo.png" alt="FreshFarms" style={{ maxHeight: '60px' }} /></a></h4>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-phone" /> +91 705 240 3100</a></p>
                                <p className="mb-0"><a className="text-dark" href="#"><i className="mdi mdi-cellphone-iphone" /> 98765 43210, 56847-98562</a></p>
                            </div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">TOP CITIES </h6>
                                <ul>
                                    <li><a href="#">New Delhi</a></li>
                                    <li><a href="#">Bengaluru</a></li>
                                    <li><a href="#">Hyderabad</a></li>
                                    <li><a href="#">Kolkata</a></li>
                                    <li><a href="#">Gurugram</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">CATEGORIES</h6>
                                <ul>
                                    <li><a href="#">Vegetables</a></li>
                                    <li><a href="#">Grocery &amp; Staples</a></li>
                                    <li><a href="#">Breakfast &amp; Dairy</a></li>
                                    <li><a href="#">Soft Drinks</a></li>
                                    <li><a href="#">Biscuits &amp; Cookies</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-2 col-md-2">
                                <h6 className="mb-4">ABOUT US</h6>
                                <ul>
                                    <li><a href="#">Company Information</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Store Location</a></li>
                                    <li><a href="#">Affillate Program</a></li>
                                    <li><a href="#">Copyright</a></li>
                                    <ul>
                                    </ul></ul></div>
                            <div className="col-lg-3 col-md-3">
                                <h6 className="mb-4">Download App</h6>
                                <div className="app">
                                    <a href="#"><img src="/img/google.png" alt="google_logo" /></a>
                                    <a href="#"><img src="/img/apple.png" alt="apple_logo" /></a>
                                </div>
                                <h6 className="mb-3 mt-4">GET IN TOUCH</h6>
                                <div className="footer-social">
                                    <a className="btn-facebook" href="#"><i className="mdi mdi-facebook" /></a>
                                    <a className="btn-twitter" href="#"><i className="mdi mdi-twitter" /></a>
                                    <a className="btn-instagram" href="#"><i className="mdi mdi-instagram" /></a>
                                    <a className="btn-whatsapp" href="#"><i className="mdi mdi-whatsapp" /></a>
                                    <a className="btn-messenger" href="#"><i className="mdi mdi-facebook-messenger" /></a>
                                    <a className="btn-google" href="#"><i className="mdi mdi-google" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Footer */}
                {/* Copyright */}
                <section className="pt-4 pb-4 footer-bottom">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-6 col-sm-6">
                                <p className="mt-1 mb-0">© Copyright 2022 <strong className="text-dark">FreshFarms</strong>. All Rights Reserved<br />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Copyright */}
            </div>
        )
    }
}
