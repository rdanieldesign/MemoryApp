// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var FirstParagraph = React.createClass({
    getData: function(){
        var self = this;
        $.ajax({
            url: '/records/all',
            dataType: 'json',
            success: function(data){
                self.setState({data: data[0].hello});
            }
        });
    },
    getInitialState: function(){
        return {data: []}
    },
    componentDidMount: function(){
        this.getData();
    },
    render: function(){
        return (
                <p className="firstParagraph" data={this.state.data}> {this.state.data} {this.props.children}</p>
        );
    }
});

ReactDOM.render(
    <div className="wrapper">
        <FirstParagraph test="hello" url="/records/all"> World! </FirstParagraph>
    </div>,
    document.getElementById('content')
);