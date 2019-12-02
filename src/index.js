import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// const listItems = numbers.map((number) => 
//     <li>{number}</li>
// );
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

ReactDOM.render(
    // {/* <ul>{listItems}</ul>, // displays a bulletlist of numbers between 1 and 5 */}
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);