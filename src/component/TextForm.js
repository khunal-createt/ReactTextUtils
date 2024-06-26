import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Text converted to upper case!" + text);
        setText(text.toUpperCase());
        props.showAlert("Text converted to upper case", "success");
    }

    const handleLowerClick = () => {
        console.log("Text converted to Lower case!" + text);
        setText(text.toLowerCase());
        props.showAlert("Text converted to lower case", "success");
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);

        if (event.target.value === "") {
            setWordCount(0)
        }
        else {
            handleWordLength();
        }
    }

    const handleClearClick = () => {
        setText('')
        console.log("Text cleared!");
        props.showAlert("Text cleared!", "success");
    }

    const handleWordLength = () => {
        const words = text.split(/\s+/);
        setWordCount(words.length)
    }

    const handleCapitalCase = () => {
        console.log("text converted to sentence case.");
        setText(text.toLowerCase().replace(/\b\w/g, (match) => match.toUpperCase()));
        props.showAlert("Text converted to capital case", "success");
    }

    const copyToClipboard = () => {
        var copyText = document.getElementById("textBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text copied to clipboard!", "success");
    };

    const removeExtraSpaces = () => {
        setText(text.split(/[ ]+/g).join(" "));
        props.showAlert("removed extra spaces", "success");
    }

    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);

    return (
        <>
            <div className={`container text-${props.mode==="white"?"dark":"white"}`}>
                <h4>{props.heading}</h4>
                <div className="my-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={
                        {
                            backgroundColor: props.mode==="dark"?"#212529bf":"white", 
                            color: props.mode==="dark"?"white":"black"
                        }
                        } id="textBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>UPPER CASE</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>lower case</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalCase}>Capitalized case</button>
                <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>remove extra spaces</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={copyToClipboard}>Copy</button>
            </div>
            <div className= {`"container my-3 text-${props.mode==="white"?"dark":"white"}`}>
                <h4>Your text summary</h4>
                <p>{wordCount} words and {text.length} alphabets</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter text in window to preview."}</p>
            </div>
        </>
    )
}
