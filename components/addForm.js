// main.js
var React = require('react');
var $ = require('jquery');

var AddForm = React.createClass({
    getInitialState: function(){
        return {hello: ''}
    },
    inputChange: function(e){
        this.setState({hello: e.target.value});
    },
    submitHandler: function(e){
        e.preventDefault();
        var data = this.state.hello;
        $.ajax({
            url: '/records/new',
            dataType: 'json',
            data: data,
            type: 'POST'
        }).done( function(res){
            if (res.msg === '') {
                console.log('great!');
            } else {
                alert(res.msg);
            }
        });
    },
    render: function(){
        return (
                <form className="addForm" action="/records/new" onSubmit={this.submitHandler}>
                    <input placeholder="Add hello value" value={this.state.hello} onChange={this.inputChange}></input>
                    <input type="submit" value="Submit" />
                </form>
        );
    }
});

module.exports = AddForm;