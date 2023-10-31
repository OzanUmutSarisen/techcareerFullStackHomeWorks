import axios from 'axios'
import React, { useEffect, useState } from 'react'




function ProductList() {
    const [suppliers, setsuppliers] = useState([])

    useEffect(() => {
        loadSuppliers();
    }, [])


    const loadSuppliers = () => {
        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setsuppliers(res.data)
            })
    }

    const deleteSupplier = (id) => {


        var result = window.confirm("Are you sure?")

        if (result) {
            axios.delete(`https://northwind.vercel.app/api/products/${id}`)
                .then(res => {
                    loadSuppliers()
                })
        }



    }

    const isStockEmpty = (status) => {
        if (status === 0) {
            return { backgroundColor: 'red' };
        }
    };

    return (
        <><table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map(item => {
                        return <tr style={isStockEmpty(item.unitsInStock)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

        </>
    )
}

export default ProductList