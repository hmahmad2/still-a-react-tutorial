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
// const todoItems = todo.map((todo, index) => 
//     // Only do this if you have no stable IDs
//     <li key={index}>
//         {todo.text}
//     </li>
// );

// const listItems = numbers.map((number) => 
//     <li>{number}</li>
// );

// Keys only make sense in the surrounding array.
function ListItem(props) {
    // No need to specify a key here in this scenario
    return <li>{props.value}</li>;
}

// Basic list Component
function NumberList(props) {
    const numbers = props.numbers;

    // Good rule of thumb: elements inside the map() call need keys
    // const listItems = numbers.map((number) =>
    //     // keys help React identify which items hace changed,
    //     // are added, or are removed. Should be given to the elements
    //     // inside the array to give the elements a stable identity.
    //     // {/* <li key={number.toString()}>
    //     //     {number}
    //     // </li> */}
        
    //     // In this scenario, the key should be specified inside array
    //     <ListItem key={number.toString()} value={number} />
    // );
    // return (
    //     <ul>
    //         {listItems}
    //     </ul>
    // );

    // JSX allows embedding any expression in curly braces, so
    // inlining map result is possible
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()}
                          value={number} />
            )}
        </ul>
    );
}

// Keys within arrays should be unique among their siblings. Don't
// need to be globally unique. Can produce same keys when we produce two
// different arrays
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    // keys don't get passed to components. If the same value is needed
    // in the component, pass it explicitly as a prop with a different
    // name. In this example, this is the origin of the key, no
    // explicit passing required.
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm'}
];

ReactDOM.render(
    // {/* <ul>{listItems}</ul>, // displays a bulletlist of numbers between 1 and 5 */}
    // {/* <NumberList numbers={numbers} />, */}
    <Blog posts={posts} />,
    document.getElementById('root')
);