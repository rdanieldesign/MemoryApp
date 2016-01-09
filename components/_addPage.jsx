var React = require('react');
const AddForm = require('./addForm.jsx');

const AddPage = React.createClass({
    render: function(){
        return (
            <section className="addPage">
                <h1>This is the AddPage.</h1>
                <AddForm />
            </section>
        );
    }
});

module.exports = AddPage;