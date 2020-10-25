import React from "react";
import './get-in-touch.scss'

const GetInTouch = (props: any) => {
    return (
        <div className="get-in-touch-wrapper">
            {/*<input type="button" value="Get In Touch" />*/}
            <a href="mailto:karanbd86@gmail.com">
                <button>Get In Touch</button>
            </a>
        </div>
    );
}
export default GetInTouch;
