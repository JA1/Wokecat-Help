import React from 'react';
import { render } from 'react-dom';
import './Frame.css';

class Account extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id='accountCont' className='docContainer'>
                <ul className='contents'>
                    <h2>Account Commands</h2>
                    <li>Set Username:
                        <p>(/nick johnadams69) - Sets temporary desired username for current session.</p>
                    </li>
                    <li>Register Account:
                        <p>(/register johnadams69 password123) - Registers desired username with included password. Username can no longer be used by anyone else.</p>
                    </li>
                    <li>Account Security Questions:
                        <p>(/setquestion First Pet Name | FiDo) - Sets security question/answer for account currently logged in. Vertical bar " | " is used to separate the question and answer.</p>
                    </li>
                    <li>Login:
                        <p>(/login johnadams69 password123) - Logs into account. </p>
                    </li>
                    <li>Logout:
                        <p>(/logout) - Logs out of account.</p>
                    </li>
                    <li>Forgot Password:
                        <p>(/forgotpw johnadams69) - Outputs privately the security question set on account.</p>
                    </li>
                    <li>Recover Password:
                        <p>(/recoverpw johnadams69 FiDo) - Recovers account credentials using answer to security question set on the account. </p>
                    </li>
                    <li>Change Your Password:
                        <p>(/change_password password123 password456) - Changes password of the account currently logged in. </p>
                    </li>

                </ul>
            </div>
        )
    }
}

class Style extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id='styleCont' className='docContainer'>

            </div>
        )
    }
}

class Mod extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id='modCont' className='docContainer'>

            </div>
        )
    }
}

class Full extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id='full' className='docContainer'>

            </div>
        )
    }
}

class Container extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            this.props.page === 'account' ? <Account />
                : this.props.page === 'style' ? <Style />
                    : this.props.page === 'mod' ? <Mod />
                        : <Full />
        )
    }
}

export default Container;