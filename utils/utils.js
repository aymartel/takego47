export const navigationHover = () => {};
// Sticky nav
export const stickyNav = () => {
  let offset = window.scrollY;
  const floatButton = document.getElementById("floatButton");
  const nav = document.getElementById("navbar");
  const logotext = document.getElementById("logotext");
  const navlink1 = document.getElementById("nav-link1");
  const navlink2 = document.getElementById("nav-link2");
  const navlink3 = document.getElementById("nav-link3");
  const navlink4 = document.getElementById("nav-link4");
  const navlink5 = document.getElementById("nav-link5");
 console.log(offset)
      if (offset > 129) {
        floatButton.classList.remove("btVisible");
        nav.classList.remove("navtop");
        nav.classList.add("navunder");
        logotext.classList.add("logotext-white");
        navlink1.classList.add("text-white");
        navlink2.classList.add("text-white");
        navlink3.classList.add("text-white");
        navlink4.classList.add("text-white");
      } else {
        logotext.classList.remove("logotext-white");
        floatButton.classList.add("btVisible");
        nav.classList.remove("navunder");
        nav.classList.add("navtop");
        navlink1.classList.remove("text-white");
        navlink2.classList.remove("text-white");
        navlink3.classList.remove("text-white");
        navlink4.classList.remove("text-white");
      }
    
  }
;

// Animation with wowjs
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// sidebar toggle
export const sideBarToggle = () => {
  const body = document.querySelector("body");
  body.classList.toggle("side-content-visible");
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

import { useTranslations } from "next-intl";
import { useState } from "react"

export const useForm = (initialState={}) => {
    
    const [values, setValues] = useState(initialState);
    
    const reset = ()=>{
        setValues(initialState);
    }

    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        });
    }

    return[ values, handleInputChange, reset]
}

export const t = (value) => {
  const trans = useTranslations('Messages');
  return trans(value);
};

export function linesToParagraphs(line) {
  return line.split('\n').map((parr,index)=><p className="mb-0" key={`line-${index}`}>{parr}<br/></p>)
}
