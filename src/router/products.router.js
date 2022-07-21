import { Router } from "express";
import productContainer from '../container/productContainer.js'


const productService = new productContainer();
const router = Router();

async function validateID(req,res,next){
  try {
      req.params.id = parseInt(req.params.id)
  } catch (error) {
      console.log(error)
      return res.status(400).send({status:'error', error:'Invalid id'})
  }
  req.params.product = await productService.getById(req.params.id)
  if(req.params.product == null) return res.status(404).send({status:'error', error:'Product not found'})
  next()
}


router.get('/',async(req, res)=>{
  let products = await productService.getAllProducts();
  res.json(products);
})

// para ver los productos por id en la url agregue "api/products/'y el numero que desee'
router.get('/:productId',async(req, res)=>{
  try {

    let product = await productService.getById(parseInt(req.params.productId))
    if(product === null) return res.status(404).send({status:'error', error:'Product not found'})
    res.send({product})
    
} catch (error) {
    console.log('Router get products '+error)
    return res.status(400).send({status:'error', error:'Bad request'})
}
})

router.post('/',async(req, res)=>{
  let product = req.body
  console.log(product)
  let newArray = await productService.saveProduct(product);
  res.json(newArray);
})

router.put('/:id',validateID, async (req,res)=>{
  await productService.updateProduct(req.params.id, parseFloat(req.body.price),req.body.title)
  res.send(`producto con id: ${req.params.id} actualizado`)
})

router.delete('/:id',validateID, async (req,res)=>{
  await productService.deleteById(req.params.id)
  res.send(`Producto con id: ${req.params.id} eliminado de productos`)
})




export default router;