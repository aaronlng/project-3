import React from "react";
import "./style.css"

export function SearchInput(props) {
    return (
        <div >
            <input {...props} />
        </div>
    )
}

export function SearchBtn(props) {
    return (
        <a {...props}>
            {props.children}
        </a>
    )
}

export function SearchSelect(props) {
    return (
        <div>
            <select className="browser-default" {...props}>
                {props.children}
            </select>
        </div>
    )
}