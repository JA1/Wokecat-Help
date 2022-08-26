import React from 'react';
import CenterBanner from './CenterBanner.jsx';
import Overlay from './Overlay.jsx';
import Header from './Header.jsx';
import Topics from './Topics.jsx';
import './Splash.css';


class Splash extends React.Component {
    render() {
        return (

            <>
                <Overlay />
                <Header />
                <CenterBanner />
                <Topics 
                    setPage={page=>this.props.setPage(page)}
                />
            </>
        )

    }
}

export default Splash;

