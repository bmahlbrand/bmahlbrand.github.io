import express from 'express';
import Blog from './models/blogpostModel';

const router = express();

export function routes() {
    return router;
};

router.get('/blog', (req, res, next) => {
	
});

router.post('/blog', (req, res, next) => {
	
});