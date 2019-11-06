var express = require('express'),
    twilio = require('../Common/Twilio'),
    MessageRoute = express.Router();

    var route = () => {
        
        MessageRoute.get("/message", (req, res) => {
            twilio.message("8778809631", "Hi", (result) => {
                if(result == 200){
                    res.status(200).json({
                        message : "Message Sent",
                        status : 404
                    });
                } else {
                    res.status(404).json({
                        message : "Unable to Send Message",
                        status : 404
                    });
                }
            })
        });

        MessageRoute.post("/message", (req, res) => {
            twilio.message(req.body.to, req.body.message, (result) => {
                if(result == 200){
                    res.status(200).json({
                        message : "Message Sent",
                        status : 404
                    });
                } else {
                    res.status(404).json({
                        message : "Unable to Send Message",
                        status : 404
                    });
                }
            });
        })

        MessageRoute.post("/call", (req, res) => {
            twilio.call(req.body.to, result => {
                if(result != 404){
                    res.status(200).json({
                        message : "Calling...",
                        status : 200
                    });
                } else {
                    res.status(404).json({
                        message : "Unable to Send Message",
                        status : 404
                    });
                }
            })
        })

        return MessageRoute;
    }

module.exports = route;