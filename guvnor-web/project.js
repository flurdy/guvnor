var express = require('express');
var util    = require('util');;
var bodyParser = require('body-parser')
var router  = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.param('project', function(req, res, next, project) {
   req.project = {'title':project,'repository': "git@example.com/" + project }
   next();
});

router.post('/:project/build', urlencodedParser, function(req, res) {
   console.log("building " + req.project.title +
      " branch " + req.body.branch +
      " from repo " + req.project.repository)
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/build', function(req, res) {
   res.render('project/project-build',{ "project": req.project});
});

router.post('/:project/deploy', urlencodedParser, function(req, res) {
   console.log("deploying " + req.project.title +
      " version " + req.body.version +
      " to " + req.body.environment)
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/deploy', function(req, res) {
   res.render('project/project-deploy',{ "project": req.project});
});

router.post('/:project/test', urlencodedParser, function(req, res) {
   console.log("testing " + req.project.title +
      " type " + req.body.testtype +
      " on " + req.body.environment)
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/test', function(req, res) {
   res.render('project/project-test',{ "project": req.project});
});

router.post('/:project/tag', urlencodedParser, function(req, res) {
   console.log("tagging " + req.project.title +
      " branch " + req.body.branch +
      " quantifier " + req.body.quantifier +
      " phase " + req.body.phase)
   res.redirect('/project/' + req.project.title);
});

router.get('/:project/tag', function(req, res) {
   res.render('project/project-tag',{ "project": req.project});
});

router.get('/:project/promote', function(req, res) {
   res.render('project/project-promote',{ "project": req.project});
});

router.get('/:project', function(req, res) {
   res.render('project/project',{ "project": req.project});
});

router.get('/', function(req, res) {
   var projects = ["wishlist","snaps","lmstfy","shop","tapit","gifts","regit","gantry"]
   res.render('project/project-list',{ "projects": projects});
});

module.exports.router = router;
