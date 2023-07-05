import React, { useEffect, useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PricingPlanThreeItem = ({name, list=[], price, tipePrice, popular, save,percentSave,textbtn}) => {

    return (
        <div className="col-xl-3 col-md-6">
        <div className="pricing-plan-three style-two">
          <span className="badge">{"popular"}</span>
          <h4>{name}</h4>
          <ul className="list-style-two">
            {list.map((element, index) => <li key={`li${index}`}>{element}</li>)}
            
           
          </ul>
          <div className="price-and-btn">
            <div className="content">
              <span className="price">{price}</span>
              <span className="save">
                {"save"}<span> {percentSave}%</span>
              </span>
              <Link href="#contact">
                <a className="theme-btn style-three colorBTNprice">
                  {textbtn} {" "}
                  <i className="fas fa-angle-double-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PricingPlanThreeItem;
