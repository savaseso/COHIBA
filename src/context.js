import React, { Component } from 'react';
import { productsInfo } from './assets/data/productsinfo';
import productsList from '../src/assets/data/productList.json';
import CurrentProducts from '../src/assets/data/productList.json'



const Context = React.createContext();

export class Provider extends Component {
    state = {
        products: [],
        availableProducts: [],
        retailProducts: [],
        hummidorProducts: [],
        modalOpen: false,
        modalProduct: {},
        detailProduct: {},
        cart: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
    }

    componentDidMount() {
        this.setProducts()
        this.setState({
            availableProducts: [...productsList.products, ...productsList.bundles, ...productsList.vintages, ...productsList.hummidors],
            retailProducts: CurrentProducts.products,
            hummidorProducts:CurrentProducts.hummidors
        })
    }
    getItem = id => this.state.products.find(item => item.id === id)
    getAvailableItem = id => this.state.availableProducts.find(item => item.id === id)

    openModal = id => {
        const product = this.getAvailableItem(id);
        this.setState({ modalProduct: product, modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }
    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState({ detailProduct: product })
    }

    setProducts = () => {
        let tempProducts = [];
        productsInfo.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState({ products: tempProducts })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.availableProducts];
        const index = tempProducts.indexOf(this.getAvailableItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState({ availableProducts: tempProducts, cart: [...this.state.cart, product] }, () => this.addTotals())
    }
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState({ cart: [...tempCart] }, () => { this.addTotals() })
    }
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id)
        } else {
            product.total = product.count * product.price;
            this.setState({ cart: [...tempCart] }, () => { this.addTotals() })
        }
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.availableProducts]
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id)
        const index = tempProducts.indexOf(this.getAvailableItem(id))
        let removedProduct = tempProducts[index]
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState({ cart: [...tempCart], availableProducts: [...tempProducts] }, () => { this.addTotals() })
    }
    clearCart = () => {
        this.setState({ cart: [] }, () => {
            this.setProducts();
            this.addTotals()
        })
    }
    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.13;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState({ cartSubtotal: subTotal, cartTax: tax, cartTotal: total })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.13;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState({ cartSubtotal: subTotal, cartTax: tax, cartTotal: total })
    }

    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;