import React from "react";

class AddButton extends React.PureComponent {
  render() {
    return (
      <div>
        <div
          className="walmart-add-cart-button-container"
          style={{ justifyContent: "center", width: "95%" }}
        >
          <span
            id="addProductToCart"
            className="ProductCardButton__AddToCartButton-sc-1r8ezq4-0 iRLHuO walmart-add-cart-button pt-5 text-center cp-no-select"
          >
            Agregar
          </span>
        </div>
      </div>
    );
  }
}

export default AddButton;
