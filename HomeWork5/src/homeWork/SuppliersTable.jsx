import React from 'react'
import { suppliers } from '../Data/suppliersData'

function SuppliersTable() {
    suppliers
    return (<>
        <table className='w3-table w3-striped'>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>companyName</td>
                    <td>contactName</td>
                    <td>contactTitle</td>
                </tr>

            </thead>
            <tbody>
                {
                    suppliers.map((item) => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
    )
}

export default SuppliersTable