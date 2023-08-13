const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.set('view engine', 'ejs')

const user = {
    firstName: "woramet",
    lastName: "tompudsa",
    admin: true
}

const posts = [
    {title: 'title 1', body: 'This is body 1'},
    {title: 'title 2', body: 'This is body 2'},
    {title: 'title 3', body: 'This is body 3'},
    {title: 'title 4', body: 'This is body 4'},
]

app.use('/css', express.static(path.join(__dirname, 'views', 'css')));

// middleware when request anytime
app.use((req, res, next) => {
    console.log('Middleware 1');
    next(); // ไปยัง middleware ถัดไป
});

// middleware when request /about
app.use('/articles', (req, res, next) => {
    console.log('Middleware about 1')
    next()
})

// middleware when request /about
app.use('/articles', (req, res, next) => {
    console.log('Middleware about 2')
    next()
})

// when request HTTP GET /
app.get('/', (req, res) => {
    res.render('pages/index', {userValue: user, value2: 'HomePage'})
})

// when request HTTP GET /articles
app.get('/articles', (req, res) => {
    res.render('pages/articles', {postsValue: posts, value2: 'ArticlesPage'})
})

app.listen(port, ()=>{
    console.log(`add listening at port ${port}`)
})