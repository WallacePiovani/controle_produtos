import app from './src/app.js';
import 'dotenv/config.js';

const port = process.env.PORT || 1401;

app.listen(port, () =>{
    console.log (`Servidor está rodando em: http://localhost:${port}`);
})
