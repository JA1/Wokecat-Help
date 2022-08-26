import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div id='header'>

                <div id='logo'>
                    <a href="index.html">
                        <img src="src/img/awakenslogo.png" id='logoImg'></img>
                    </a>
                </div>

                <div id='navBar'>
                    <div className="navBoxes">
                        <a className="navLinks" target="_blank" href="http://blog.surrealchasm.com/">Dev Blog</a>
                    </div>
                    <div className="navBoxes">
                        <a className="navLinks" target="_blank" href="http://eye.chat/">Dev Server</a>
                    </div>
                    <div className="navBoxes">
                        <a className="navLinks" target="_blank" href="https://wokecat.com/feedback">Feedback</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;