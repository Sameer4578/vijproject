import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { getProduct, deleteProduct } from "../Store/ActionCreators/ProductActionCreators"


export default function Shop() {
    var product = useSelector((state) => state.ProductStateData)
    product.reverse()
    var dispatch = useDispatch()
    function getAPIData() {
        dispatch(getProduct())
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            {/* <div className="hero-wrap hero-bread" style={{backgroundImage: "url('assets/images/bg_6.jpg')"}}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Shop</span></p>
                            <h1 className="mb-0 bread">Shop</h1>
                        </div>
                    </div>
                </div>
            </div> */}
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-10 order-md-last">
                            <div className="row">
                                {
                                    product.map((item, index) => {
                                        return <div key={index} className="col-sm-12 col-md-12 col-lg-4 ftco-animate d-flex">
                                            <div className="product d-flex flex-column">
                                                <a target="_blank" href={`/assets/productimages/${item.pic1}`} className="img-prod"><img className="img-fluid" src={`assets/productimages/${item.pic1}`} style={{height:"250px",width:"100%"}} alt="" />
                                                    <div className="overlay"></div>
                                                </a>
                                                <div className="text py-3 pb-4 px-3">
                                                    <div className="d-flex">
                                                        <div className="cat">
                                                            <span>Lifestyle</span>
                                                        </div>
                                                        <div className="rating">
                                                            <p className="text-right mb-0">
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                                <Link to="#"><span className="ion-ios-star-outline"></span></Link>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h3><Link to="#">Nike Free RN 2019 iD</Link></h3>
                                                    <div className="pricing">
                                                        <p className="price"><span>$120.00</span></p>
                                                    </div>
                                                    <p className="bottom-area d-flex px-3">
                                                        <Link to="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i className="ion-ios-add ml-1"></i></span></Link>
                                                        <Link to="#" className="buy-now text-center py-2">Buy now<span><i className="ion-ios-cart ml-1"></i></span></Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                            <div className="row mt-5">
                                <div className="col text-center">
                                    <div className="block-27">
                                        <ul>
                                            <li><Link to="#">&lt;</Link></li>
                                            <li className="active"><span>1</span></li>
                                            <li><Link to="#">2</Link></li>
                                            <li><Link to="#">3</Link></li>
                                            <li><Link to="#">4</Link></li>
                                            <li><Link to="#">5</Link></li>
                                            <li><Link to="#">&gt;</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-lg-2">
                            <div className="sidebar">
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Categories</h2>
                                    <div className="fancy-collapse-panel">
                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingOne">
                                                    <h4 className="panel-title">
                                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Men's Shoes
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><Link to="#">Sport</Link></li>
                                                            <li><Link to="#">Casual</Link></li>
                                                            <li><Link to="#">Running</Link></li>
                                                            <li><Link to="#">Jordan</Link></li>
                                                            <li><Link to="#">Soccer</Link></li>
                                                            <li><Link to="#">Football</Link></li>
                                                            <li><Link to="#">Lifestyle</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingTwo">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Women's Shoes
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><Link to="#">Sport</Link></li>
                                                            <li><Link to="#">Casual</Link></li>
                                                            <li><Link to="#">Running</Link></li>
                                                            <li><Link to="#">Jordan</Link></li>
                                                            <li><Link to="#">Soccer</Link></li>
                                                            <li><Link to="#">Football</Link></li>
                                                            <li><Link to="#">Lifestyle</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="panel panel-default">
                                                <div className="panel-heading" role="tab" id="headingThree">
                                                    <h4 className="panel-title">
                                                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accessories
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><Link to="#">Jeans</Link></li>
                                                            <li><Link to="#">T-Shirt</Link></li>
                                                            <li><Link to="#">Jacket</Link></li>
                                                            <li><Link to="#">Shoes</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-box-2">
                                    <h2 className="heading">Price Range</h2>
                                    <form method="post" className="colorlib-form-2">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price from:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3"></i>
                                                        <select name="people" id="people" className="form-control">
                                                            <option value="#">1</option>
                                                            <option value="#">200</option>
                                                            <option value="#">300</option>
                                                            <option value="#">400</option>
                                                            <option value="#">1000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="guests">Price to:</label>
                                                    <div className="form-field">
                                                        <i className="icon icon-arrow-down3"></i>
                                                        <select name="people" id="people" className="form-control">
                                                            <option value="#">2000</option>
                                                            <option value="#">4000</option>
                                                            <option value="#">6000</option>
                                                            <option value="#">8000</option>
                                                            <option value="#">10000</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
