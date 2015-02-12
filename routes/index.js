var express = require('express');

var router = express.Router();
var appdata = require('../data.json');

router.get('/', function(req, res){
    var buildCollection = [];
    appdata.architects.forEach(function(item){
       buildCollection = buildCollection.concat(item.buildings);
    });
    res.render('index', {
        title: 'Home',
        buildColl: buildCollection,
        page: 'home'
    });
});
/* get a list of all the architects */
router.get('/architects', function(req,res){
    var buildCollection = [];
    var myBuilders = [];
    myBuilders = appdata.architects;

    appdata.architects.forEach(function(item){
        buildCollection = buildCollection.concat(item.buildings);
    });
    res.render('architects', {
        title: 'Architects',
        buildColl: buildCollection,
        builders: myBuilders,
        page: 'architectList'
    });
} );

/* Build a spotlight of the architect */
router.get('/architects/:architectid', function(req,res){
    var buildCollection = [];
    var myBuilders = [];

    appdata.architects.forEach(function(item){
        if(item.shortName == req.params.architectid) {
            myBuilders.push(item);
            buildCollection = buildCollection.concat(item.buildings);
        }
    });

    res.render('architects', {
        title: 'Architects',
        buildColl: buildCollection,
        builders: myBuilders,
        page: 'architectDetails'
    });
} );
module.exports = router;