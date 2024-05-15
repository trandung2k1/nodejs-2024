const pureHttp = require('pure-http');
const app = pureHttp();
const port = 3000;
const router = pureHttp.Router('/v1');

function middleware(req, res, next) {
    console.log(req.headers.authorization);
    console.log('Middleware');
    // return res.status(401).json({
    //     msg: 'Not authorized',
    // });
    next();
}

router.get('/', middleware, (req, res) => {
    return res.status(200).json({
        msg: 'Hello world',
    });
});

app.use('/api', router);
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
