import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX

function Greeting() {
	return (
		<div>
			<Person />
			<p>this is my message</p>
		</div>
	)
}

const Person = () => <h2>john doe</h2>;

ReactDom.render(<Greeting />, document.getElementById('root'));