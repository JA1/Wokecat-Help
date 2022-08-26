import React from 'react' 
import App from '/src/App.jsx';

class Topics extends React.Component    {
    render()    {
        return (
            <div id='topicPanel'>

            <div id='account' className='topicBox' onClick={() => {
                this.props.setPage('account');
            }}>
                Account Commands
</div>

            <div id='style' className='topicBox' onClick={() => {
                this.props.setPage('style');
            }}>
                Style Commands
</div>

            <div id='mod' className='topicBox' onClick={() => {
                this.props.setPage('mod');
            }} >
                Mod Commands
</div>

            <div id='misc' className='topicBox' onClick={() => {
                this.props.setPage('misc');
            }} >
                Full Documentation
</div>

            <div id='plugin' className='topicBox' onClick={() => {
                this.props.setPage('plugin');
            }}>
                Plugin Help
</div>

            <div id='faq' className='topicBox' onClick={() => {
                this.props.setPage('faq');
            }}>
                FAQ
</div>

        </div>
        )
    }
}

export default Topics;