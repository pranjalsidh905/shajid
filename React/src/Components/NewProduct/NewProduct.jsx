import React from 'react'
import './NewProduct.css'

function NewProduct() {
  return (
      <section className="new-product">
  <div className="container">
    <div className="feature-product">
      <div className="feature-text">
        <div className="main-text">
          <span>NEW PRODUCTS</span>
        </div>
        <p>Bring called seed first of third give itself now ment</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="new_product">
          <h5 className="text-uppercase">collection of 2019</h5>
          <h3 className="text-uppercase">Men’s summer t-shirt</h3>
          <div className="product-img">
            <img className="img-fluid" src="https://themewagon.github.io/eiser/img/product/new-product/new-product1.png" alt />
          </div>
          <h4>$120.70</h4>
          <a href="#" className="main_btn">Add to cart</a>
        </div>
      </div>
      <div className="col-lg-6 mt-5 mt-lg-0">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-product">
              <div className="product-img">
                <img className="img-fluid w-100" src="https://themewagon.github.io/eiser/img/product/new-product/n1.jpg" alt />
                <div className="hover-views">
                  <div className="hov">
                    <a href="#"><i className="fa-regular fa-eye" /></a>
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                    <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
                  </div>
                </div>
                <div className="product-btm">
                  <a href="#" className="d-block">
                    <h4>Nike latest sneaker</h4>
                  </a>
                  <div className="mt-3">
                    <span className="mr-4">$25.00</span>
                    <del>$35.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-product">
              <div className="product-img">
                <img className="img-fluid w-100" src="https://themewagon.github.io/eiser/img/product/new-product/n2.jpg" alt />
                <div className="hover-views">
                  <div className="hov">
                    <a href="#"><i className="fa-regular fa-eye" /></a>
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                    <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
                  </div>
                </div>
              </div>
              <div className="product-btm">
                <a href="#" className="d-block">
                  <h4>Men’s denim jeans</h4>
                </a>
                <div className="mt-3">
                  <span className="mr-4">$25.00</span>
                  <del>$35.00</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-product">
              <div className="product-img">
                <img className="img-fluid w-100" src="https://themewagon.github.io/eiser/img/product/new-product/n3.jpg" alt />
                <div className="hover-views">
                  <div className="hov">
                    <a href="#"><i className="fa-regular fa-eye" /></a>
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                    <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
                  </div>
                </div>
              </div>
              <div className="product-btm">
                <a href="#" className="d-block">
                  <h4>quartz hand watch</h4>
                </a>
                <div className="mt-3">
                  <span className="mr-4">$25.00</span>
                  <del>$35.00</del>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="single-product">
              <div className="product-img">
                <img className="img-fluid w-100" src="https://themewagon.github.io/eiser/img/product/new-product/n4.jpg" alt />
                <div className="hover-views">
                  <div className="hov">
                    <a href="#"><i className="fa-regular fa-eye" /></a>
                    <a href="#"><i className="fa-regular fa-heart" /></a>
                    <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
                  </div>
                </div>
              </div>
              <div className="product-btm">
                <a href="#" className="d-block">
                  <h4>adidas sport shoe</h4>
                </a>
                <div className="mt-3">
                  <span className="mr-4">$25.00</span>
                  <del>$35.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default NewProduct