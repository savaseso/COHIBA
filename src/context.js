import React, { Component } from 'react';
import { productsInfo } from './assets/data/productsinfo';


const Context = React.createContext();

export class Provider extends Component {
    state = {
         products: [],
         detailProduct:{}
     }

    componentDidMount() {
        this.setProducts()
    }
    getItem = id => this.state.products.find(item => item.id === id)

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




    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail
                }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;