import React, { Component } from 'react'
import Bannerslider from '../banner-carousel';
import Topsavers1 from './top-section1';
import Topsavers2 from './top-section2';
import Topsavers3 from './top-section3';
import Topsavers4 from './top-section4';
import Topsavers5 from './top-section5';
import Topsavers6 from './top-section6';
import Topsavers7 from './top-section7';
import Bestofferbanner from './best-offers-banner';
import Topstample from './top-stample';

export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Bannerslider />
                <Topsavers1 />
                <hr />
                <Topsavers2 />
                <hr />
                <Topsavers3 />
                <hr />
                <Topsavers4 />
                <hr />
                <Topsavers5 />
                <hr />
                <Topsavers6 />
                <hr />
                <Topsavers7 />
                <Bestofferbanner />
                {/* <Topstample /> */}
            </div>
        )
    }
}
