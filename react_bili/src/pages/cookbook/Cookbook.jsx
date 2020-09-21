import React, { Component } from 'react';
import Header from './Header'
import Swiper from './swiper'
import Search from '@/search'
export default class Cookbook extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Swiper></Swiper>
                <Search></Search>
            </div>
        );
    }
}
