var mongoose = require('mongoose');

var organizationSchema = mongoose.Schema({
    name    : String,
    street  : String,
    city    : String,
    zip     : String,
    url     : String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Organization', organizationSchema);