import React from 'react'

class CenterBanner extends React.Component    {
    render()    {
        return (
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
        )
    }
}

export default CenterBanner;