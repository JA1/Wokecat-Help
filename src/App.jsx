import React from 'react';

class App extends React.Component {
    render() {
        return (

            <>
                <div id='overlay'></div>
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
                            <a className="navLinks" target="_blank" href="http://surrealchasm.com/">Feedback</a>
                        </div>
                    </div>

                </div>

                <div id='centerBanner'>

                    <div id='centerMessage'>
                        <span id='mHeader'>
                            Wokecat Help!
                            <hr style={{width: 55 + '%'}}></hr>
                        </span>
                        <span id='mText'>
                            Having trouble getting a plugin to work or just looking to get started? Choose one of the topics below to access
                            our
                            documentation.
            </span>
                    </div>

                    <div id='searchBar'>
                        <div className="search">
                            <button type="submit" className="searchButton">
                                <div id='icon'>
                                    <img src='src/img/glass.png' style={{ height: 90 + '%', width: 90 + '%' }}></img>
                                </div>
                            </button>
                            <input id="query" type="text" className="searchTerm" placeholder="How can we help?"></input>
                        </div>
                    </div>

                </div>

                <div id='topicPanel'>

                    <div id='gStarted' className='topicBox'>
                        Getting Started
        </div>

                    <div id='uCommands' className='topicBox' >
                        User Commands
        </div>

                    <div id='cCommands' className='topicBox' >
                        Channel Commands
        </div>

                    <div id='mCommands' className='topicBox' >
                        Mod Commands
        </div>

                    <div id='pHelp' className='topicBox'>
                        Plugin Help
        </div>

                    <div id='faq' className='topicBox'>
                        FAQ
        </div>

                </div>

        </>
        )
        
    }
}

export default App;

