// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var FirstParagraph = require('../../components/firstParagraph');
var AddForm = require('../../components/addForm');

ReactDOM.render(
    <div className="wrapper">
        <FirstParagraph test="hello" url="/records/all"> World! </FirstParagraph>
        <AddForm />
    </div>,
    document.getElementById('content')
);