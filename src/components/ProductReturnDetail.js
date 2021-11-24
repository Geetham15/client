import { useEffect, useState } from 'react'

import './ProductReturnDetail.css'

const ProductReturnDetail = ({productId}) =>{


    const [returnDetail, setReturnDetail] = useState({products:[]})
    useEffect(()=>{
      const fetchProductReturn = async() => {
        let fetchResult = await fetch('api/productReturn/'+productId) //61972e0acfa16b00fb4fe506
        let fetchedProductReturnDetail = await fetchResult.json()
        setReturnDetail(fetchedProductReturnDetail)
      }
      fetchProductReturn()
    },[productId])
    return(
      <div>
        <h2>Product Return Detail</h2>
        <div className="detail-fields">
          <div className="field-title">Order ID</div>
          <div className="field-value">{returnDetail.OrderID}</div>
          <div className="field-title">Ordered Date</div>
          <div className="field-value">{returnDetail.OrderDate}</div>
          <div className="field-title">Product Name</div>
          <div className="field-value">{returnDetail.ProductName}</div>
          <div className="field-title">Sold By</div>
          <div className="field-value">{returnDetail.SoldBy}</div>
          <div className="field-title">Item Price</div>
          <div className="field-value">{returnDetail.ItemPrice}</div>
          <div className="field-title">Colour</div>
          <div className="field-value">{returnDetail.Colour}</div>
        </div>
      </div>
    )
  }

export default ProductReturnDetail