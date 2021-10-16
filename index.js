const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Success')
})

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
});
