const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config({
  path: './config.env'
});

const db = process.env.DATABASE;

const app = require('./app');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful'));

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
