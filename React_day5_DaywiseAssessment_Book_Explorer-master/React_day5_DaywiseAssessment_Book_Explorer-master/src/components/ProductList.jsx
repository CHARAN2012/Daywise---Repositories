import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState("all")
    const [sort, setSort] = useState("none")

    //Fetch products
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data =>{
            setProducts(data)
            setFilteredProducts(data)
            setCategories([...new setCategories(data.map(p=>p.category))])
        })
    }),[]
    
}

 return (
    <div className='container my-4'>
        <h1 className='text-center mb-4'>Product Management System</h1>

        //* Product Cards */
     <div className='row'>
    {filteredProducts.map((product) => ( 
        <div key={product.id} className='col-md-4 mb-4'> 
            <div className='card h-100 shadow-sm'> 
                <img 
                    src={product.image} 
                    className='card-img-top p-3' 
                    alt={product.title} 
                    style={{height: '200px', objectFit: 'contain'}} 
                /> 
                <div className='card-body d-flex flex-column'> 
                    <h5 className='card-title'>{product.title}</h5> 
                    <p className='card-text text-truncate'>{product.description}</p> 
                    <div className='mt-auto'> 
                        <p className='fw-bold text-success'>${product.price}</p> 
                        <button className='btn btn-primary w-100'> 
                            Add to Cart 
                        </button> 
                    </div> 
                </div> 
            </div>
        </div>
    ))} 

    {filteredProducts.length === 0 && ( 
        <p className='text-center text-muted'>No product found.</p> 
    )} 
</div>
    </div>
  )



export default ProductList