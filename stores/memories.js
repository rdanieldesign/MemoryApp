const $ = require('jquery');

const getAllMemories = function(){
    return $.getJSON('/records/all');
}

const addMemory = function(memory){
    return $.ajax({
        url: '/records/new',
        dataType: 'json',
        data: memory,
        type: 'POST'
    }).done( function(res){
        if (res.msg === '') {
            console.log('great!');
        } else {
            alert(res.msg);
        }
    });
};

module.exports = {
    getAll: getAllMemories,
    add: addMemory
};