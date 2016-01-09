var React = require('react');

var MemoryItem = React.createClass({
    render: function(){
        return (
                <li className="memoryItem">{this.props.children}</li>
        );
    }
});

module.exports = MemoryItem;