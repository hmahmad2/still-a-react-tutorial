import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }

// 5 steps to converting a function component into a class
// 1) create ES6 class with same name that extends React.Component
// 2) add a single empty method to it called render()
// 3) Move the body of the function into the render() method.
// 4) Replace props with this.props in the render() body.
// 5) Delete the remaining empty function declaration.
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    /**
     * The Following methods are "Lifecycle Methods"
     */
    // activate the timer when Clock is rendered in the DOM
    // for the first time
    // MOUNTING
    componentDidMount() {
        // since timerID doesn't really participate in the data flow,
        // we can just add the field here
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    // free up resources when the DOM produced by Clock is removed
    // UNMOUNTING
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // Clock will call this every second
    // use this.setState to schedule updates to the component local state
    // meaning that every time this is called, the date of the Clock
    // is updated to a new date.
    // Bascially, only setState() will rerender a component.
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

// setInterval(tick, 1000);

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

/**
 * 1) when Clock is passed to ReactDOM.render(), React calls constructor
 *  of Clock. Since it's supposed to display the current time, it
 *  initializes this.state with an object including the current time. This
 *  state will be updated
 * 
 * 2) React then calls Clock's render() method. This details how React
 *  knows what should be displayed on screen. React updates the DOM to
 *  match Clock's render output.
 * 
 * 3) When Clock output is inserted in the DOM, React calls componentDidMount()
 *  lifecycle method. Inside, Clock component asks browser to set up a timer
 *  to call the components tick() method once a second
 * 
 * 4) Every second the browser cals tick(). Inside, Clock schedules a UI
 *  update via calling setState() with an object containing the current
 *  time. Using this setState() call, React knows the state has been
 *  changed and calls render() again to learn what should be on screen.
 *  This time, this.state.date in the render() method will be different,
 *  and so the render output will include the updated time. React updates
 *  the DOM accordingly
 * 
 * 5) If Clock is ever removed from the DOM, React calls the
 *  componentWillUnmount() lifecycle method so the timer is stopped.
 */