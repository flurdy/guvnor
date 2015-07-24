var express = require('express');
var util    = require('util');
var app     = express();
var flowController = require('./controllers/flow');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
   res.render('index');
});

app.get('/project', function(req, res) {
   res.render('project');
});

app.get('/environment', function(req, res) {
   res.render('environment');
});

app.get('/task', function(req, res) {
   res.render('task');
});

app.get('/admin', function(req, res) {
   res.render('admin');
});

app.use('/flow', flowController.flow);

/*



app.use('/flow/project/:projectName/*', function(req, res, next) {
   if (allProjects[req.params.projectName]) {
      util.log("Setting project by path");
      req.project = allProjects[req.params.projectName];
   }
   util.log("sat project by path:"+req.params.projectName);
   next();
});

app.use('/flow/project/?*', function(req, res, next) {
   if (!req.project && req.param("project")) {
      if (allProjects[req.param("project")]) {
         util.log("Setting project by param");
         req.project = allProjects[req.param("project")];
      }
   }
   next();
});

app.use('/flow/project/:projectName/branch/:branchName/?', function(req, res, next) {
   if (req.params.branchName) {
      util.log("Setting branch by name:"+req.params.branchName);
      req.branch = req.params.branchName;
   }
   next();
});

app.use('/flow/project/:projectName/branch/?', function(req, res, next) {
   if (!req.branch && req.param("branch")) {
      if (req.param("branch")) {
         util.log("Setting branch");
         req.branch = req.param("branch");
      }
   }
   next();
});

app.use('/flow/project/:projectName/branch/:branchName/build/:buildName/*', function(req, res, next) {
   if (req.params.buildName) {
      util.log("Setting branch by name");
      req.build = req.params.buildName;
   }
   next();
});

app.use('/flow/project/:projectName/branch/:branchName/build/?', function(req, res, next) {
   if (!req.build) {
      util.log("Setting build");
      req.build = "build123";
   }
   next();
});

app.use('/flow/project/:projectName/branch/:branch/project-environment/?', function(req, res, next) {
   if (!req.projectEnvironment && req.param("environment")) {
      if (req.param("environment")) {
         util.log("Setting environment");
         req.projectEnvironment = req.param("environment");
      }
   }
   next();
});

app.post('/flow/project/:projectName/branch/:branchName/build/?', function(req, res) {
   res.redirect('/flow/project/' + req.params.projectName + '/branch/'
            + req.params.branchName + '/build/123');
});

app.post('/flow/project/:projectName/branch/:branchName/build/:build/project-environment/:projectEnvironment/deploy/?', function(req, res) {
   res.redirect('/flow/project/' + req.params.projectName
            + '/branch/'  + req.params.branchName
            + '/build/123' + "123"
            + '/project-environment/' + req.params.projectEnvironment );
});

app.get('/flow/?*', function(req, res) {
   if (req.project) {
      util.log("Got project");
      res.render('flow/flow', {
         "rootProject": myDepartment,
         "project" :    req.project,
         "build"   :    req.build,
         "projectEnvironment": req.projectEnvironment,
         "branch"  :    req.branch,
         "branches":    branches,
         "tags":        tags
      });
   }
   else {
      util.log("No project");
      res.render('flow/flow', {
         "rootProject": myDepartment
      });
   }
});

*/


var port = process.env.PORT || 8080;
app.listen(port, process.env.IP);
