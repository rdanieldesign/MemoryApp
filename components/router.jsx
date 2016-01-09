const React = require('react');
const Router = require('react-router').Router
const Route = require('react-router').Route
const HomePage = require('./_homePage.jsx');
const AddPage = require('./_addPage.jsx');
const AboutPage = require('./_aboutPage.jsx');

const ReactRouter = React.createClass({
    render: function(){
        return (
            <Router>
              <Route path="/" component={HomePage} />
              <Route path="/new" component={AddPage} />
              <Route path="/login" component={AboutPage} />
            </Router>
        )
    }
})

module.exports = ReactRouter;