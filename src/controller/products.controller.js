import Product from "../models/Product"


export const createProduct = async (req,res) => {

  const {name, category, price, imgURL } = req.body 

    const newProduct = new Product ({name, category, price , imgURL});

    const produsctSave = await newProduct.save ()

    res.status(201).json(produsctSave) /*201 es un nuevo recurso que se creo*/ 

}

export const getProducts =async(req,res) => {

const produsct = await  Product.find() //trae todos los productos de la base de datos
res.json (produsct)

}


export const getProductsById = async(req,res) => {
 const product = await Product.findById(req.params.productId);
 res.status(200).json(product)
}


export const upDateProductsById =async(req,res) => {

  const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body,
     { new: true }); // datos actualizados
  res.status(200).json(updatedProduct);


}


export const deleteProductsById =async(req,res) => {
  const {productId} = req.params;
  await Product.findByIdAndDelete(productId);
  res.status(204).json();

}

