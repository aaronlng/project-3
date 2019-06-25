import React from "react";

export function SearchInput(props) {
    return (
        <div>
            <input {...props} />
        </div>
    )
}

export function SearchBtn(props) {
    return (
        <button {...props}>
            {props.children}
        </button>
    )
}

export function SearchSelect(props) {
    return (
        <select {...props}>
            {props.children}
        </select>
    )

}