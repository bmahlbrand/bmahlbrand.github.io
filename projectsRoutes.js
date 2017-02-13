const express = require('express');
const Project = require('./app/models/projectModel');
const projectsRoutes = module.exports = express();

projectsRoutes.get('/projects/', (req, res) => {
    Project.find({}, (err, projects) => {
        if (!err) {
            res.json(projects);
        } else {
            console.log(err);
        }

    });

});
