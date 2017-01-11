var apiCall= require('./../js/api.js').apiCallModule;

$(document).ready(function(){
    var currentuserObject= new apiCall();
    $('#enterUser').submit(function(event){
        event.preventDefault();
        var input = $('#user').val();
        $('#user').val("");
        currentuserObject.getapiCall(input);
    });
});  