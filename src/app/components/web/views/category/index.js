import React, { Component } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default class Category extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 7,
            slidesToScroll: 2,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };
        return (
            <div style={{ background: '#fff' }}>
                <div className="container" id="header-category-bk">
                    <Slider {...settings}>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/fruits`,
                                }}>
                                    <img className="img-fluid" src="img/category/fruits.png" alt="fruits" />
                                    <h6>Fruits</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/vegetables`,
                                }}>
                                    <img className="img-fluid" src="img/category/vegetables.png" alt="vegetables" />
                                    <h6>Vegetables</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/milk`,
                                }}>
                                    <img className="img-fluid" src="img/category/milk.png" alt="milk" />
                                    <h6>Milk</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/breads`,
                                }}>
                                    <img className="img-fluid" src="img/category/breads.png" alt="breads" />
                                    <h6>Breads</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/beverages`,
                                }}>
                                    <img className="img-fluid" src="img/category/beverage.png" alt="beverages" />
                                    <h6>Beverages</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/milk-products`,
                                }}>
                                    <img className="img-fluid" src="img/category/breakfastdairy.png" alt="milk-products" />
                                    <h6>Milk Products</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/eggs`,
                                }}>
                                    <img className="img-fluid" src="img/category/eggs.png" alt="eggs" />
                                    <h6>Eggs</h6>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/noodles-sauces-instant-food`,
                                }}>
                                    <img className="img-fluid" src="img/category/noodles.png" alt="noodles" />
                                    <h6>Noodles, Sauces &amp; Instant Food</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/pet-care`,
                                }}>
                                    <img className="img-fluid" src="img/category/petcare.png" alt="pet-care" />
                                    <h6>Pet Care</h6>
                                </Link>
                            </div>
                        </div>
                        <div className="item">
                            <div className="category-item">
                                <Link to={{
                                    pathname: `/shop/baby-care`,
                                }}>
                                    <img className="img-fluid" src="img/category/babycare.png" alt="baby-care" />
                                    <h6>Baby Care</h6>
                                </Link>
                            </div>
                        </div> */}
                    </Slider >
                </div>
            </div >
        )
    }
}
