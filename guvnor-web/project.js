var express = require('express');
// var util    = require('util');
var bodyParser = require('body-parser');
var router  = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var projects = ["wishlist","snaps","lmstfy","shop","tapit","gifts","regit","gantry"];

var branches = {
   "masterBranch": "master",
   "branches": ["master","v9.0.x","feature-fantastic"]
};
var versions = {
   "masterSnapshot" : "v10.0.0-SNAPSHOT",
   "snapshots" : ["v9.1.0-SNAPSHOT","v9.0.1-SNAPSHOT"],
   "releases"  : ["v9.0.0","v8.4.2","v8.4.1","v8.4.0","v8.3.0"]
};
var environments = {
   // "development" : ["dev-01","dev-02","dev-03"],
   "funnelStart" : "integration",
   "funnel" : [{
         "environment": "dev-01",
         "version": "v9.0.2-SNAPSHOT",
         "type": "development",
         "funnel" : ["integration"]
      },{
         "environment": "dev-02",
         "version": "v9.0.2-SNAPSHOT",
         "type": "development",
         "funnel" : ["integration"]
      },{
         "environment": "dev-03",
         "version": "v9.1.0-SNAPSHOT",
         "type": "development",
         "funnel" : ["integration"]
      },{
         "environment": "integration",
         "version": "v9.0.1",
         "funnel" : ["staging","demo-01"]
      },{
         "environment": "staging",
         "version": "v9.0.0",
         "funnel" : ["pre-prod"]
      },{
         "environment": "demo-01",
         "version": "v9.0.0"
      },{
         "environment": "pre-prod",
         "version": "v8.6.3",
         "funnel" : ["production","prod-test"]
      },{
         "environment": "production",
         "version": "v8.6.3"
      },{
         "environment": "prod-test",
         "version": "v8.6.3"
      }]
};

router.param('project', function(req, res, next, project) {
   req.project = {'title':project,'repository': "git@example.com/" + project };
   next();
});

router.post('/:project/build', urlencodedParser, function(req, res) {
   console.log("building " + req.project.title +
      " branch " + req.body.branch +
      " from repo " + req.project.repository);
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/build', function(req, res) {
   res.render('project/project-build',{ "project": req.project,
         "masterBranch": branches.masterBranch,
         "branches": branches.branches});
});

router.post('/:project/environment/deploy', urlencodedParser, function(req, res) {
   console.log("deploying " + req.project.title +
      " version " + req.body.version +
      " to " + req.body.environment);
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/environment/deploy', function(req, res) {
   res.render('project/project-deploy',{ "project": req.project, "versions": versions, "environments": environments});
});

router.post('/:project/test', urlencodedParser, function(req, res) {
   console.log("testing " + req.project.title +
      " type " + req.body.testtype +
      " on " + req.body.environment);
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/test', function(req, res) {
   res.render('project/project-test',{ "project": req.project, "branches": branches, "versions": versions, "environments": environments});
});

router.post('/:project/tag', urlencodedParser, function(req, res) {
   console.log("tagging " + req.project.title +
      " branch " + req.body.branch +
      " quantifier " + req.body.quantifier +
      " phase " + req.body.phase);
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/tag', function(req, res) {
   res.render('project/project-tag',{ "project": req.project});
});

router.post('/:project/environment/promote', urlencodedParser, function(req, res) {
   console.log("promoting " + req.project.title +
      " from " + req.body.environment);
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/environment/promote', function(req, res) {
   res.render('project/project-promote',{ "project": req.project, "environments": environments});
});

router.post('/:project/environment/restart', urlencodedParser, function(req, res) {
   console.log("restarting " + req.project.title +
      " in " + req.body.environment);
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/environment/restart', function(req, res) {
   res.render('project/project-environment-restart',{ "project": req.project, "environments": environments});
});

router.get('/:project/environment/versions', function(req, res) {
   res.render('project/project-versions',{ "project": req.project, "environments": environments });
});

router.get('/:project', function(req, res) {
   res.render('project/project',{ "project": req.project});
});

router.get('/', function(req, res) {
   res.render('project/project-list',{ "projects": projects});
});

module.exports.router = router;
