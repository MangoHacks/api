import express from 'express';
import bodyParser from 'body-parser';
import messages from './data/messages'

const PORT = 3000;
const app = express();

app.use(bodyParser({urlextended: false}));

app.get('/', (req, res) => res.send('Welcome to Abelian'));
app.get('/messages', (req, res) => res.json(messages));

app.listen(PORT, () => console.log(`Parallel API running on port ${PORT}`));