const express = require('express');

const Gallery = require('./app/models/galleryModel');

const galleryRoutes = module.exports = express();


galleryRoutes.get('*pix', (req, res) => {
    Gallery.find({}, (err, gallery) => {
        if (!err) {
            res.json(gallery);
        } else {
            console.log(err);
        }

    });

});
