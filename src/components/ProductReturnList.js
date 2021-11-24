import { useEffect, useState } from 'react'

const CreateProductReturn = () =>{

    const [reasonForReturn, setReasonForReturn] = useState()

   async function postData() {
        console.log('Reason for Reaturn ...', reasonForReturn)
        let newProductReturn = {
          
            ReasonForReturn: reasonForReturn,}
        await fetch('/api/productReturn', {
            method: "POST",
            headers : {
                'Content-Type' : "application/json",
            },
            body: JSON.stringify(newProductReturn)
        })
    }
    return (
        <div>
        <br/>
        <h2>Product Return Form</h2>
            <label>Reason for Return</label>
            <select value={reasonForReturn} onChange={(e) =>{
                setReasonForReturn(e.target.value)
            }}>
                <option value="Item arrived too late">Item arrived too late</option>
                <option value="Missing accessories or parts">Missing accessories or parts</option>
                <option value="Item defective or not work">Item defective or not work</option>
                <option value="Performance or quality not adequate">Performance or quality not adequate</option>
            </select>
            <br/>
            <button onClick={()=>{postData()}}>Return</button>
        </div>
    )
}

const ProductReturnRow = ({orderID, orderDate, productName, soldBy, itemPrice, colour, onProductSelected }) =>(
    <tr onClick={()=> onProductSelected()}>
      <td>{orderID}</td>
      <td>{orderDate}</td>
      <td>{productName}</td>
      <td>{soldBy}</td>
      <td>{itemPrice}</td>
      <td>{colour}</td>
    </tr>
  )
  const ProductReturnList = ({setSelectedProductId}) => {
    const [productReturns , setProductReturns] = useState([])
    useEffect(() => { 
      async function fetchData(){
        console.log('Fetching product return data!')
        let fetchResult = await fetch("/api/productReturn")
        let productReturnList = await fetchResult.json()
        console.log(productReturnList)
        setProductReturns(productReturnList)
      }
      fetchData()
    }, [])
    return(
    <div>
    <h1>Product returned list</h1>
        <table style={{margin:"auto"}}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Ordered Date</th>
              <th>Product Name</th>
              <th>Sold by</th>
              <th>Item Price</th>
              <th>Colour</th>
            </tr>
          </thead>
          <tbody>
            {
              productReturns.map((productReturn, index) => {
                function selectProduct(){
                  console.log('selectProduct called on' , productReturn)
                  setSelectedProductId(productReturn._id)
                }
                return <ProductReturnRow key={index} 
                      onProductSelected={selectProduct}
                      orderID={productReturn.OrderID}  orderDate= {new Date(productReturn.OrderDate).toLocaleDateString("en-ca", {month: "short", day : "numeric", year : "numeric", weekday : "short"})} productName={productReturn.ProductName} 
                           soldBy={productReturn.SoldBy} itemPrice={"$" + productReturn.ItemPrice} colour ={productReturn.Colour} />
                           
              })
            }
          </tbody>
        </table>

        <CreateProductReturn />
    </div>

    
  )
  }

  export default ProductReturnList