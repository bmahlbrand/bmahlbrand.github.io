import express from 'express';

const router = express();

export function routes() {
    return router;
};

router.get('/projects', (req, res, next) => {
	
});