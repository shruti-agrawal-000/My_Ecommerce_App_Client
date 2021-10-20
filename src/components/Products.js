import React from "react"
import ReactDOM from "react-dom"
import "../style/Products.css"

const Products = () =>{
    return(
        <div className="table-containers">

          <h2>table to show products</h2>
            <table className="table">

  <tr>
    <th className="table-head">Product Id</th>
    <th className="table-head">Product Name</th> 
    <th className="table-head">Product Price</th>
    <th className="table-head"> Edit</th>
    <th className="table-head">  Delete</th>
    
  </tr>
  <tr>
    <td className="table-column">7302874</td>
    <td className="table-column">Ring</td>
    <td className="table-column">&#8377;50</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn">Delete</button></td>
  </tr>
  <tr>
    <td className="table-column">720730</td>
    <td className="table-column">Chain</td>
    <td className="table-column">&#8377;94</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn">Delete</button></td>
  </tr>
  <tr>
    <td className="table-column">48215285</td>
    <td className="table-column">Anklet</td>
    <td className="table-column"> &#8377;80</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn"> Delete</button></td>
  </tr>
  <tr>
    <td className="table-column">48215285</td>
    <td className="table-column">Anklet</td>
    <td className="table-column"> &#8377;80</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn"> Delete</button></td>
  </tr>
  <tr>
    <td className="table-column">48215285</td>
    <td className="table-column">Anklet</td>
    <td className="table-column"> &#8377;80</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn"> Delete</button></td>
  </tr>
  <tr>
    <td className="table-column">48215285</td>
    <td className="table-column">Anklet</td>
    <td className="table-column"> &#8377;80</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn"> Delete</button></td>
  </tr>
  <tr>
    <td className="table-column">48215285</td>
    <td className="table-column">Anklet</td>
    <td className="table-column"> &#8377;80</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn"> Delete</button></td>
  </tr>

  <tr>
    <td className="table-column">48215285</td>
    <td className="table-column">Anklet</td>
    <td className="table-column"> &#8377;80</td>
    <td className="table-column"><button className="edt-btn">Edit</button></td>
    <td className="table-column"><button className="edt-btn"> Delete</button></td>
  </tr>
</table>

        </div>
    )
}

export default Products;