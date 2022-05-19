import React, { useState } from 'react';

function TextForm(props) {

    const [text, setText] = useState('');
    // text = "new text"; //Wrong way to update text in a variable
    // setText("new text"); //Right way to update text in useState vaiable

    const handleOnClick = () => {
        // console.log("On Change");
        setText(event.target.value);
    }

    // Convert to Uppercase
    const handleUpClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    // Convert to Lowercase
    const handleLowerClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    // Convert to Titlecase
    const handleTitleClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    // Remove extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }

    // Remove extra lines
    const handleExtraLines = () => {
        console.log('Title case');

    }

    // Copy text
    const handleCopy = () => {
        let text = document.getElementById('myTextBox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    // Clear text
    const handleClear = () => {
        let newText = '';
        setText(newText);
    }


    return (
        <>
            <div className="container" style={{ color: props.mode==='dark'?'white':'black' }}>
                <h3 className="my-3">{props.heading}</h3>
                <textarea className="form-control" value={text} onChange={handleOnClick} style={{ backgroundColor: props.mode==='dark'?'gray':'white'}} id="myTextBox"  placeholder="Enter text here" cols="30" rows="10"></textarea>
            </div>

            <div className="container  my-2">
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to titlecase</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra space</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraLines}>Remove extra lines</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1" onClick={handleClear}>Clear text</button>
            </div><hr />

            <div className="container my-3" style={{ color: props.mode==='dark'?'white':'black' }}>
                <h3>Your text summary</h3>
                <p><strong>{text.split(" ").length-1}</strong> words and <strong>{text.length}</strong> Characters.</p>
                <p><strong>{0.008 * text.split(' ').length}</strong> minutes to read.</p>
                <hr />
                <h3>Preview</h3>
                <p>{text.length>0 ? text : 'Enter something in above clipboard to priview...'}</p>
            </div>
        </>
    )
}

export default TextForm;
