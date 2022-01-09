const express = require('express');
const axios = require('axios');

const app = express();

const url = 'https://type.fit/api/quotes';

app.use(express.static('./public'));
app.use(express.json());

app.get('/title', (req, res) => {
  res.send('quote generator');
});

app.get('/data', async (req, res) => {
  try {
    const { data } = await axios(url);

    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
