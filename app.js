//require the Twilio module and create a REST client
var client = require('twilio')('AC17a94bae85e365bbfce5785fe658492c', 'cc845b37c30699ea527c44a9ac9b01eb');
var express = require('express');
var port = process.env.port || 3000;

var app = express();

app.get('/', function(req,res) {
    res.send('Hello World!');
});

app.get('/reply', function(req,res) {
    res.render('reply.xml');
});

/*
//Send an SMS text message
client.sendMessage({

    to:'+19499039366', // Any number Twilio can deliver to
    from: '+19492844841', // A number you bought from Twilio and can use for outbound communication
    body: 'Hello World!!!' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }
});


// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = 'AC17a94bae85e365bbfce5785fe658492c';
var authToken = "{{ cc845b37c30699ea527c44a9ac9b01eb }}";

 
client.sms.messages("MG6ce1702cff12a1587920ced76673037e").get(function(err, sms) {
    console.log(err);
    console.log(sms.body);
});
*/
app.listen(port);
console.log('App listening on ' + port);