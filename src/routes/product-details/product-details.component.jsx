import React, { Component, Fragment } from "react";
import BagButton from "../../components/buttons/bag-button/bag-button.component";
import {
  ProductDescription,
  ProductDetailsContainer,
  ProductHeader,
  ProductMainImage,
  ProductPrice,
  LeftColumn,
  RightColumn,
  ProductConfiguration,
  SizeConfig,
  SizeChoose,
  ProductSideImages,
} from "./product-details.styles.jsx";
import { fetchProductsById } from "../../graphql/fetchData";
import { withRouter } from "react-router-dom";
import AttributeButton from "../../components/buttons/attribute-button/attribute-button.component";
import parse from "html-react-parser";
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attributeMessage: "",
      galleryIndex: 0,
      singleProduct: [],
    };
  }
  attributeMessageHandler = (attributeMsg) => {
    this.setState({ attributeMessage: attributeMsg });
  };

  fetchID = (id) => {
    fetchProductsById(id).then((results) => {
      this.setState({
        singleProduct: [results.data.product],
      });
    });
  };

  componentDidMount() {
    this.props.scrollToTop();
    const { id } = this.props.match.params;
    this.fetchID(id);
  }

  galleryIndexHandler = (gallery, image) => {
    const item = gallery.indexOf(image);
    this.setState({ galleryIndex: item });
  };

  render() {
    const {
      selectedCurrency,
      addItemToCart,
      selectedAttributesHandler,
      selectedAttributes,
    } = this.props;

    const { singleProduct } = this.state;

    function priceSelector() {
      const price = singleProduct.map((product) =>
        product.prices
          .map((item) => item.currency.label)
          .indexOf(selectedCurrency.currency)
      );
      return price[0];
    }

    return (
      <Fragment>
        {this.state.singleProduct.map((prod) => (
          <ProductDetailsContainer key={prod.name}>
            <LeftColumn>
              <ProductSideImages>
                {prod.gallery.map((image) => (
                  <img
                    src={image}
                    alt="Images"
                    key={image}
                    onClick={() =>
                      this.galleryIndexHandler(prod.gallery, image)
                    }
                  />
                ))}
              </ProductSideImages>
              <ProductMainImage>
                <img
                  src={prod.gallery[this.state.galleryIndex]}
                  alt={prod.name}
                />
              </ProductMainImage>
            </LeftColumn>
            <RightColumn>
              <ProductHeader>
                <h1>{prod.name}</h1>
                <span>{prod.brand}</span>
              </ProductHeader>
              {prod.attributes.length !== 0 ? (
                <ProductConfiguration>
                  <span>{this.state.attributeMessage}</span>
                  <SizeConfig>
                    {prod.attributes.map((item) => (
                      <Fragment key={item.id}>
                        <span>{item.name}</span>
                        <SizeChoose>
                          {item.items.map((attribute) => (
                            <AttributeButton
                              onClick={() =>
                                selectedAttributesHandler(
                                  attribute.value,
                                  item.id,
                                  prod.id
                                )
                              }
                              primary={true}
                              style={
                                item.type === "swatch"
                                  ? selectedAttributes.find(
                                      (i) =>
                                        i.value === attribute.value &&
                                        item.id === i.type &&
                                        prod.id === i.id
                                    )
                                    ? {
                                        backgroundColor: attribute.value,
                                        width: "24px",
                                        border: "2px solid #5ECE7B",
                                      }
                                    : {
                                        backgroundColor: attribute.value,
                                        width: "24px",
                                        border: "0px",
                                      }
                                  : selectedAttributes.find(
                                      (i) =>
                                        i.value === attribute.value &&
                                        item.id === i.type &&
                                        prod.id === i.id
                                    )
                                  ? {
                                      backgroundColor: "#1d1f22",
                                      color: "#ffffff",
                                    }
                                  : {
                                      backgroundColor: "#ffffff",
                                      width: "auto",
                                    }
                              }
                              key={attribute.id}
                              attribute={
                                attribute.value.startsWith("#")
                                  ? ""
                                  : attribute.value
                              }
                            ></AttributeButton>
                          ))}
                        </SizeChoose>
                      </Fragment>
                    ))}
                  </SizeConfig>
                </ProductConfiguration>
              ) : (
                ""
              )}
              <ProductPrice>
                <span>PRICE:</span>
                <span>
                  {prod.prices[priceSelector()].currency.symbol}
                  {prod.prices[priceSelector()].amount}
                </span>
              </ProductPrice>
              <BagButton
                buttonType={true}
                disabled={prod.inStock ? false : true}
                onClick={
                  selectedAttributes.length !== prod.attributes.length
                    ? () =>
                        this.attributeMessageHandler("Please select attributes")
                    : () => {
                        addItemToCart(prod, selectedAttributes);
                        this.attributeMessageHandler("");
                      }
                }
                btndata={prod.inStock ? "Add To Cart" : " Not In Stock"}
              />
              <ProductDescription>{parse(prod.description)}</ProductDescription>
            </RightColumn>
          </ProductDetailsContainer>
        ))}
      </Fragment>
    );
  }
}

export default withRouter(ProductDetails);
