import React from 'react';
import Splash from './Components/Splash/Splash.jsx'
import Frame from './Components/Commands/frame.jsx';
import Topics from './Components/Splash/Topics.jsx';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            page: 'account'
        };
    }
    
    setPage (page) {
        this.setState({page:page})
    }

    render() {
        return (
            this.state.page == 'splash' ? <Splash 
                setPage={page => this.setPage(page)}/> 
            : this.state.page == 'account' ? <Frame page='account'/> 
            : this.state.page == 'style' ? <Frame page='style'/> 
            : this.state.page == 'mod' ? <Frame page='mod'/>
            :  <Frame page='full'/>
            
        )
    }
}

export default App;

