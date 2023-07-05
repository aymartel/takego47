export const navigationHover = () => {};
// Sticky nav
export const stickyNav = () => {
  let offset = window.scrollY;
  const sticky = document.querySelectorAll(".main-header");
  const floatButton = document.getElementById("floatButton");
  for (let i = 0; i < sticky.length; i++) {
    const stick = sticky[i];
    if (stick) {
      if (offset > 10) {
        floatButton.classList.remove("btVisible");
        stick.classList.add("fixed-header");
      } else {
        floatButton.classList.add("btVisible");
        stick.classList.remove("fixed-header");
      }
    }
  }
};

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
