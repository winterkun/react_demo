import React, { Component } from 'react';
import { Carousel } from 'antd-mobile'
import zhaxie from 'assets/zhaxie.jpg'
import fruit from 'assets/fruit.jpg'
import jiroujuan from 'assets/jiroujuan.jpg'
import { SwiperWrap } from './styledcookbook.js'
export default class Swiper extends Component {
    render() {
        return (
            <div>
                <SwiperWrap>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        <img src={zhaxie} alt="" />
                        <img src={jiroujuan} alt="" />
                        <img src={fruit} alt="" />
                        <img src={zhaxie} alt="" />
                    </Carousel>
                </SwiperWrap>
            </div>
        );
    }
}
