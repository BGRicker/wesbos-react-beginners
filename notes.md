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

can import stylesheets several different ways, including just 'importing' them:
import './css/style.css';

React knows this is not a javascript file, load in CSS, stick in style tag, and hot reload npm server when any changes are made

Import components wherever you need them, if you have components in your Header then just import them in Header rather than main .js file

props is kind of like an object of data that's passed in, an argument in a function
App.js:
<Header tagline="cool tagline props"/>

Header.js:
<span>{this.props.tagline}</span>

`this` refers to the instance of the Component

$0 will show clicked item, $1 will show second last, $2 third, etc.
$r shows component instance with props, helps to understand that a component is just an object

stateless function components - if your component only has render method and prop types
    - takes `props` as an argument, as there's no `this` with function

const Header = props => (
can destruct props to be named variables, e.g. const Header = ({tagline, age, name})

Router is a component as well, setting matches for the URL and the component to be rendered:
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} /> // render StorePicker if root path
            <Route path="/store/:storeId" component={App} /> // render App if store and a storeId is present
            <Route component={NotFound} /> // otherwise, render the NotFound component
        </Switch>
    </BrowserRouter>
)