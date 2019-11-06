require('dotenv').config();
var twilio = require('twilio');

module.exports = {
    message : (to, text, callback) => {
        const client = twilio(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTHTOKEN);
        client.messages
        .create({
            body : text,
            from : process.env.TWILIO_FROM_NUMBER,
            to : to
        }).then( result => {
            if(result) {
                callback(200);
            } else {
                callback(404);
            }
        });
    },
    call : (to , callback) => {
        const client = twilio(process.env.TWILIO_ACCOUNTSID, process.env.TWILIO_AUTHTOKEN);
        client.calls.create({
            url : "http://demo.twilio.com/docs/voice.xml",
            from : process.env.TWILIO_FROM_NUMBER,
            to : to
        }).then(call => {
            if(call) {
                callback(call);
            } else {
                callback(404);
            }
        })
    }
}