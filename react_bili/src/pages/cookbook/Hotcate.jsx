import React, { Component } from 'react'
import { Grid } from 'antd-mobile'
import { HotcateWrap } from './styledcookbook'
import { get } from "../../utils/http"
import hotcate from '../../mock/cookbook-hotcate'
export default class Hotcate extends Component {
    state = {
        hotList: []
    }
    async componentDidMount() {
        // let result = await get({
        //     url: "/hotcate"
        // })
        let result = hotcate;
        console.log(result);
        let data = result.map((value) => ({
            name: value.name,
            title: value.title,
            icon: value.url
        }))

        this.setState({
            hotList: data
        })

    }
    _renderItem = dataItem => (
        <div className="item">
            {dataItem.icon && <img src={dataItem.icon} />}
            <span>{dataItem.title}</span>
        </div>
    )
    render() {
        return (
            <HotcateWrap>

                <div className="header">热门分类</div>
                <Grid data={this.state.hotList}
                    columnNum={3}
                    hasLine={false}
                    renderItem={this._renderItem}
                />
            </HotcateWrap>
        );
    }
}
