import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

// try to use a string that uniquely IDs a list item from its siblings
// Most often you'd wanna use IDs from your data as keys
// const todoItems = todos.map((todo) =>
//     <li key={todo.id}>
//         {todo.text}
//     </li>
// );

// this is a last resort sort of thing
const todoItems = todo.map((todo, index) => 
    // Only do this if you have no stable IDs
    <li key={index}>
        {todo.text}
    </li>
);

// const listItems = numbers.map((number) => 
//     <li>{number}</li>
// );
// Basic list Component
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // keys help React identify which items hace changed,
        // are added, or are removed. Should be given to the elements
        // inside the array to give the elements a stable identity.
        <li key={number.toString()}>
            {number}
        </li>
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