import express from 'express';
//For middleware
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.port || 4000;

//Use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' })); //maximum data size from client can submit to server
app.use(cors());
/**If we have route like: app.use( '/', cors);
only request from http://localhost:5000/ will apply func cors
if no round like this: app.use(cors());
All request will be run through middleware bodyParser and cors
**/

/**Example to create an round */
app.get('/', (req, res) => {
  res.send('Success');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
