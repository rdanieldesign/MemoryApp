// main.js
'use strict';

const $ = require('jquery');
const React = require('react');
const ReactDOM = require('react-dom');
const FirstParagraph = require('../../components/firstParagraph.jsx');
const HomePage = require('../../components/_homePage.jsx');
const AddForm = require('../../components/addForm.jsx');
const Router = require('../../components/router.jsx');

let options = {
    container: document.getElementById('content')
};

$(document).ready(function(){
    let view = $('body').data('view');
    let container = document.getElementById(view);
    renderReact(container);
});

function renderReact (container) {
    ReactDOM.render(
        <Router />,
        container
    );
};