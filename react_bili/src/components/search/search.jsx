import React, { Component } from 'react';
import search from 'assets/search.png'
import { SearchWrap } from './styledSearch'
export default class Search extends Component {
    render() {
        return (
            <SearchWrap width="0px">
                <div>
                    <img src={search} /> 搜索
                </div>
            </SearchWrap>

        );
    }
}
