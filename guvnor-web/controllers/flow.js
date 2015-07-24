var express = require('express');
var flow    = express.Router();


var myApplication = {
   "title": "MyApplication",
   "projects": []
};
var anotherApplication = {
   "title": "AnotherApplication",
   "projects": []
};
var myProduct = {
   "title": "MyProduct",
   "projects": [myApplication, anotherApplication]
};
var myOtherProduct = {
   "title": "MyOtherProduct",
   "projects": []
};
var myDepartment = {
   "title": "MyDepartment",
   "projects": [myProduct, myOtherProduct]
};

var allProjects = {
   "MyDepartment": myDepartment,
   "MyProduct": myProduct,
   "MyOtherProduct": myOtherProduct,
   "MyApplication": myApplication,
   "AnotherApplication": anotherApplication
};

var branches = ["master", "v1.2.x", "v1.0.x", "feature/webscale", "bugfix/B4019-typo"];

var tags = ["v1.2", "v1.1", "v1.0.1", "v1.0", "v0.9b", "v0.8b", "v0.4b"];


// flowRouter.use('/flow/project/:projectName/*', function(req, res, next) {
//    if (allProjects[req.params.projectName]) {
//       util.log("Setting project by path");
//       req.project = allProjects[req.params.projectName];
//    }
//    util.log("sat project by path:"+req.params.projectName);
//    next();
// });


