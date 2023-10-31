import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {styled } from '@mui/material/styles';


function ProductsGridTable() {
    const [products1, setproducts] = useState([])

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                console.log(res);
                setproducts(res.data)
            })

    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'unitPrice', headerName: 'UnitPrice', width: 150 },
        {
            field: 'unitsInStock', headerName: 'Stock', width: 150
        },
        {
            headerName: 'Action', width: 150, renderCell: (param) => {
                return (
                    <button onClick={(e) => deleteProduct(param.id)}>Delete </button>
                );
            }
        },
    ]

    const deleteProduct = (id) => {
        console.log(id);
        axios.delete('https://northwind.vercel.app/api/products/' + id)
            .then(res => {
                console.log("Deleted");
                axios.get('https://northwind.vercel.app/api/products')
                    .then(res => {
                        console.log(res);
                        setproducts(res.data)
                    })
            })
    };

    const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
        '.backGround--0': {
            backgroundColor: "red"
            
        },
    }));

    return (<>
        <StyledDataGrid
            columns={columns}
            rows={products1}
            getRowClassName={(params) => `backGround--${params.row.unitsInStock}`}
        />
    </>
    )
}

export default ProductsGridTable