import React, { Component } from "react";

class CoctailIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case "drink-bottom":
        ingredient = <div />;
        break;
      case "drink-top":
        ingredient = <div />;
        break;
      case "alcohol":
        ingredient = <div />;
        break;
      case "mixer":
        ingredient = <div />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

export default CoctailIngredient;
