import React, { Component } from 'react';
import { Carousel } from 'antd-mobile'
import zhaxie from 'assets/swiper_img/zhaxie.jpg'
import fruit from 'assets/swiper_img/fruit.jpg'
import jiroujuan from 'assets/swiper_img/jiroujuan.jpg'
import { SwiperWrap } from './styledcookbook.js'
import { connect } from "react-redux"
const mapState = state => {
    list = state.list
}
class Swiper extends Component {
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
                        {this.props.list.slice(0, 5).map((val) => {
                            <img src={val.img} key={val.id} alt="" />
                        })}
                    </Carousel>
                </SwiperWrap>
            </div>
        );
    }
}
export default connect(mapState)(Swiper)
