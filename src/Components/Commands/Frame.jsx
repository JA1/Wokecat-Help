import React from 'react';
import App from '/src/App.jsx';
import Container from './Container';
import './Frame.css'

class Header extends React.Component {
    render() {
        return (
            <>
            <div id='fHeader'>

            <div id='docLogo'>
                <img style={{width:'100%', height:'100%'}} src={'/src/img/awakenslogo.png'}/>
            </div>

            </div>
            </>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <>
            <div id='sidebar'>



            </div>
            </>
        )
    }
}

class Frame extends React.Component {
    render() {
        return (
            <div id='container'>
            <Header />,
            <Container page={this.props.page}/>,
            <Sidebar />
            </div>
        )
    }
}

export default Frame;