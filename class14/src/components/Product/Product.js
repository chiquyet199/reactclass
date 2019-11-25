import React from "react";
import {formatMoney} from '../../utils'
import "./Product.css";

const Product = props => {
  const { imgUrl, name, oldPrice, newPrice, isSale } = props;
  return (
    <div className="product">
      <div className="product-image">
        <img src={imgUrl}/>
        {isSale && <span>SALE</span>}
      </div>
      <div className="product-info">
          <h4>{name}</h4>
          <div className="price-container">
              <p className="new-price">{formatMoney(newPrice)}</p>
              {oldPrice && <p className="old-price">{formatMoney(oldPrice)}</p>}
          </div>
      </div>
    </div>
  );
};

export default Product;
