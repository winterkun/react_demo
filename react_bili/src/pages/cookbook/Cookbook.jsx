import React, { Component } from 'react';
import Header from './Header'
import Swiper from './swiper'
import Hotcate from './Hotcate'
import Search from '@/search/search'

export default class Cookbook extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Swiper></Swiper>
                <Search></Search>
                <Hotcate></Hotcate>
            </div>
        );
    }
}
