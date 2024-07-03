
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./index');
const PORT = process.env.PORT||3000

dotenv.config({ path: './dotenv.config' });

console.log(process.env.NODE_ENV);

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception 💥');
  console.log(err.name);

  process.exit(1);
});

mongoose.connect(process.env.DATABASE).then(() => { 
  console.log('✅ Connected to database');
});      
app.listen(PORT,()=>{
  console.log(`server start at port on ${PORT}`)
})

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection 💥');
  console.log(err.name, err.message);

  server.close(() => process.exit(1));
});

















