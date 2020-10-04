import React from 'react'
import { Component } from 'react';
const keys = require('../private/keys.json');

export default class FinanceAPI extends Component{
    constructor (){
        super()
        this.base_url = 'https://financialmodelingprep.com/api/v3/';
    }


    async getSymbols() {
        let api_key = keys.finance_key;
        let symbols_url = this.base_url + 'stock/list?apikey=' + api_key;
        let symbols = await fetch(symbols_url).then(result => result.json());
        return symbols;
    }
}