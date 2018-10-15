component - reusable part of your website


import React from 'react';  // imports react

class StorePicker extends React.Component { // name your component, extending component
    render() {                              // mandatory render() function for what you're rendering
        return <p>Hello!</p>                // return value in JSX
    }
}

export default StorePicker;                 // exporting your component, allowing it to be used outside the file

// in file that this will be used in:
import StorePicker from './components/StorePicker'; // import your component with a relative path

// you can't return sibling elements, elements have to be in a wrapper element or <React.Fragments> tag
// comment at beginning of component will error, needs to be in fragment or inside wrapping element
class StorePicker extends React.Component {
    render() {
        // return <p>Hello!</p>
        return (
            <React.Fragment>
            <p>This is a sibling element</p> 
        <form className="store-selector">
            <h2>Please enter a store</h2>
        </form>
            </React.Fragment>
        )
    }
} 

comments in JSX done with { /* comment */ }
curly brackets {} used for javascript in JSX