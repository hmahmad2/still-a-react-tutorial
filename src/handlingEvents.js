import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // This binding is necessary to make 'this' work in the callback
        // Recommended solution to avoid performance problems
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            // the callback to handleClick without the () works because
            // we bound it to 'this' via bind()
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

class LoggingButton extends Component {
    // This syntax ensures 'this' is bound within handleClick
    // Enabled by default in Create React
    // Warning: this is *EXPERIMENTAL* syntax
    handleClick = () => {
        console.log('this is:', this);
    }

    // render() {
    //     return (
    //         // this syntax is enabled by default in Create React App
    //         <button onClick={this.handleClick}>
    //             Click me
    //         </button>
    //     );
    // }

    render() {
        // This syntax ensures that 'this' is bound within handleClick
        return (
            // a different callback  is created each time LoggingButton
            // renders. Problematic if passed as a prop to lower components,
            // might force a re-rendering
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        );
    }
}

ReactDOM.render(
    // {/* <Toggle />, */}
    <Toggle />,
    document.getElementById('root')
);