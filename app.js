const express = require('express');
const path = require('path');
const { title } = require('process');
const PORT = process.env.PORT || 3005;
const app = express();

app.set('view engine','hbs');
app.set('views',path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/cards',(req,res)=>{
    const items = [
        { title: 'Apple', description: 'A sweet, edible fruit produced by an apple tree.' },
        { title: 'Banana', description: 'A long curved fruit that grows in clusters and has soft.' },
        { title: 'Carrot', description: 'A tapering orange-colored root eaten as a vegetable.' },
        { title: 'Date', description: 'The sweet fruit of a small palm tree, often eaten dried.' },
        { title: 'Eggplant', description: 'A plant bearing large edible fruit, typically with glossy dark purple skin.' },
        { title: 'Fig', description: 'A soft pear-shaped fruit with sweetten fresh or dried.' },
        { title: 'Grape', description: 'A berry, typically green (classified as white), purple, red, or black, .' },
        { title: 'Honeydew', description: 'A type of melon with sweet green or orange flesh.' },
        { title: 'Indian Fig', description: 'The fruit of the prickly pear cactus, also known as cactus pear or tuna.' },
        { title: 'Jackfruit', description: 'A large tropical fruit with a spiky outer skin and sweet, fibrous flesh inside.' }
    ];

    res.render('cards',{title:'cards',items})
})


app.get('/tables',(req,res)=>{
    const users = [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Doe', email: 'jane@example.com' },
        { name: 'Jack Smith', email: 'jack@example.com' },
    ];

    res.render('tables',{title:'user Table',users})
})


app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})