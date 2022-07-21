import express from 'express';
import productRouter from '../router/products.router.js'


const app = express();
const PORT = 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const server = app.listen(PORT,()=>{
  console.log(`listening port ${PORT}`);
});

app.get('/',(req, res)=>{
  res.send("hola Bienvenido")
})

app.use('/api/products',productRouter);