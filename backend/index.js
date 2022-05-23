/*const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: false}).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});*/

const express = require ('express');
const morgan = require('morgan');
const cors = require('cors')

const form = require ('./src/routes/form.js'); 

const app = express();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


app.use(form)

app.use((err,req,res,next)=>{
   return res.json({message: err.message})
})

app.listen(3002)
console.log('server on port 3002');