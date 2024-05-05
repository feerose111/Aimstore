import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import Products from "../../Products/Products";

const Banner = ({data ,id}) => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                    "Experience the thrill of technology at our Electronics Sale! Unbeatable discounts on a wide range of devices,
                    from wired headphones to wireless headphones ."
                    </p>
                    <div className="ctas">
                        <div className="banner-cta" >Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;