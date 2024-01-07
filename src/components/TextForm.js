import React, { useState } from "react";
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("you call uppercase button")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase","success");
    };
    const handleLoClick = () => {
        // console.log("you call uppercase button")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase","success");
    };
    const handleClearClick = () => {
        // console.log("you call uppercase button")
        let newText = " ";
        setText(newText);
        props.showAlert("clear successfully","success");
    };
    const handleExtraSpaces = () => {
        // console.log("you call uppercase button")
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("extra space remove successfully","success");
    };
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","success");
    };
    const handleOnChange = (event) => {
        // console.log("onchange click");
        setText(event.target.value);
    };
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    value={text}
                    onChange={handleOnChange}
                    id="myBox"
                    rows="8"
                    style={{backgroundColor: props.mode === 'dark'?'gray':'white',color: props.mode === 'dark'?'white':'#042743'}}
                    ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                Clear Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>
                Copy Text
            </button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
             Remove Extra Spaces
            </button>
        </div>
        <div className="container my-3 " style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length}minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'enter somthing to preview'}</p>
        </div>
        </>
    );
}
