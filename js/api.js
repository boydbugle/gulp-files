var apiKey = require('./../.env').apiKey;

function apiCall (){
}

apiCall.prototype.getapiCall= function(input){
    $.get('https://api.github.com/users/'+  input +'?access_token='+ apiKey).then(function(response){
        console.log(JSON.stringify(response));
    }).fail(function(error){
        console.log(error.responseJSON.message);
    });
}

exports.apiCallModule= apiCall
