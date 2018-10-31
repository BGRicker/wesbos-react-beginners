component - reusable part of your website

import React from 'react'; // imports react

class StorePicker extends React.Component { // name your component, extending component
render() { // mandatory render() function for what you're rendering
return <p>Hello!</p> // return value in JSX
}
}

export default StorePicker; // exporting your component, allowing it to be used outside the file

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

comments in JSX done with { /_ comment _/ }
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

stateless function components - if your component only has render method and prop types - takes `props` as an argument, as there's no `this` with function

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

Understanding State:

- an object that lives inside of a component that stores all the data that the component and some of its children need
- 'single source of truth'
-

`ref` allows you to reference a DOM node on the page

constructor method runs before the component is created, must call super(); first:

class StorePicker extends React.Component {
constructor() {
super();
console.log("Gonna create a component!");
this.goToStore = this.goToStore.bind(this);
// overwrites the method with a binding to `this`
}
}

using `this` inside of function without a constructor:

class StorePicker extends React.Component {
myInput = React.createRef();

    goToStore = (evnet) => {
        // 1. property called 'goToStore' just like myInput is a property on component
        // 2. set to arrow function, binding values of `this` to storepicker component
        // 3. if you need to access `this` inside of custom method, must use this syntax or use constructor
        event.preventDefault();
    }

}

    goToStore = event => {
        event.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

// this.props.history.push(route) saying "go to this route, where React will look for the corresponding component to render

'methods that update state and state need to live in the same component'

use set state API to update state:

- take a copy of the existing state, never want to reach into state and modify it directly (mutation)
  - const fishes = {...this.state.fishes} // takes a copy of object, 'object spread' takes copy
- add new fish to that fishes variable
- set new fishes object to state with this.setState({}) passing in the piece of state that you wish to update
  - this.setState({
    fishes // if property&value are the same, you can just pass the property
    })
