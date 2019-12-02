import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

// Let's create a stateful component that will render Login or
// Logout depending on the current state. Will also render
// <Greeting /> from earlier
class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }

    // Change isLoggedIn to true from false
    handleLoginClick() {
        this.setState({
            isLoggedIn: true
        });
    }

    // Change isLoggedIn to false
    handleLogoutClick() {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        // Set an element to a button. I can do that.
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        // // Reusing <Greeting /> to help denote what state we're in
        // return (
        //     <div>
        //         <Greeting isLoggedIn={isLoggedIn} />
        //         {button}
        //     </div>
        // );

        return (
            <div>
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                    <LoginButton onClick={this.handleLoginClick} />
                )}
            </div>
        );
    }
}

// {true && expression} always evaluates to {expression}
// {false && expression} always evaluates to {false}
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

// Returning null from a component's render does not affect firing
// method of component's lifecycle methods.
// For example, componentDidUpdate will still be called
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    };
}

const messages = ['React', 'Re: React', 'Re: Re: React'];
ReactDOM.render(
    // // See what happens if we set isLoggedIn={true}
    // <Greeting isLoggedIn={false} />,
    // {/* <LoginControl />, */}
    <Page />,
    // {/* <Mailbox unreadMessages={messages} />, */}
    document.getElementById('root')
);