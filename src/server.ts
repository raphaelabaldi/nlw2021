import express, { request } from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World!' });
});
app.post('/', (request, response) => {
    //receber os dados
    return response.json({ message: 'Data saved successfully!' });
});

app.listen(3333, () => console.log('Server is up and running!'));