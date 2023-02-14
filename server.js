// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.post('/api/users', (req, res) => {
//     setTimeout(() => {
//         res.send(req.body)
//     }, 1500)
// })
// app.use(cors());
// app.use(express.json())
// app.listen('5000', () => {
//     console.log('listening on port 5000')
// })


const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json())
app.post('/api/users', (req, res) => {
    setTimeout(() => {
        res.send(req.body)

    }, 3000)
})

app.listen('5000', () => {
    console.log('listening on 50000k')
})