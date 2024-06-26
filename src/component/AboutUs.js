import React
, { useState }
    from 'react'

export default function AboutUs() {

    const [myStyle, setMyStyle] = useState({
        color: "Black",
        backgroundColor: "White"
    })

    const [enableText, setEnableText] = useState("Light mode")

    const toggleDarkStyle = () => {
        if (myStyle.color === "dark") {
            console.log("Enabling dark mode")
            setMyStyle({ color: "white", backgroundColor: "black", border: "1px solid white" })
            setEnableText("Dark mode")
        }
        else {
            console.log("Enabling light Mode")
            setMyStyle({ color: "black", backgroundColor: "white" })
            setEnableText("Light mode")
        }
    }

    return (
        <div className="container">
            <h1 className='margin' style={{ display: 'flex' }}>About Us
                <h5>
                <div class="form-check form-switch my-3" style={{ marginLeft: '750px' }}>
                    <input class="form-check-input"  type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleDarkStyle}/>
                    <label class="form-check-label"  htmlFor="flexSwitchCheckDefault">{enableText}</label>
                </div>
                </h5>
                {/* <button type="button" style={{ marginLeft: 'auto' }} className="btn btn-secondary" onClick={toggleStyle}>
                    {enableText}
                </button> */}
            </h1>
            <div className="accordion" id="accordionPanelsStayOpenExample" style={myStyle}>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
