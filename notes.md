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