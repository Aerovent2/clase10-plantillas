const productos =[{title:"arroz",price:108,thumbnail:"http://placekitten.com/100/100"},{title:"michi",price:202,thumbnail:"http://placekitten.com/100/100"}]

const getProducts = (req,res)=>{
    try{
        res.render('products.pug', {productos})

    }
    catch(e){
        console.log('Error: ',e)
        res.sendStatus(500)
    }
}
const formPruduct = (req,res)=>{
    try{
        res.render('productsForm.pug')

    }
    catch(e){
        console.log('Error: ',e)
        res.sendStatus(500)
    }
}
const addProduct = (req,res)=>{
    try{
        productos.push(req.body)
        res.redirect('/')

    }
    catch(e){
        console.log('Error: ',e)
        res.sendStatus(500)
    }
}

module.exports ={getProducts, addProduct, formPruduct}