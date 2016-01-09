var React = require('react');
const Link = require('react-router').Link;
const MemoryList = require('./memoryList.jsx');

const HomePage = React.createClass({
    render: function(){
        return (
            <section className="homePage">
                <h1>This is the Homepage.</h1>
                <Link to='/login'>About</Link>
                <Link to='/new'>Add Memory</Link>
                <MemoryList />
            </section>
        );
    }
});

module.exports = HomePage;