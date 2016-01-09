var React = require('react');
var $ = require('jquery');
var getMemories = require('../stores/memories').getAll;
var MemoryItem = require('./memoryItem.jsx');

var MemoryList = React.createClass({

    getInitialState:
    render: function(){

        var items = [];

        getMemories().done(function(memories){
            memories.forEach( function(item){
                console.log(item);
                items.push(<MemoryItem>item._id</MemoryItem>);
            });
        });

        console.log(items);

        return (
                <ul className="memoryList">
                    hey { items }
                </ul>
        );
    }
});

module.exports = MemoryList;