var apiKey = require('./../.env').apiKey;

function apiCall (){
}

apiCall.prototype.getapiCall= function(input){
    $.get('https://api.github.com/users/'+  input +'/repos?access_token='+ apiKey).then(function(response){
        $('.details').text(JSON.stringify(response));
    }).fail(function(error){
        $('.details').text(error.responseJSON.message);
    });
};

exports.apiCallModule= apiCall;
