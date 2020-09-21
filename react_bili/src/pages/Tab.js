import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

import Cookbook from './cookbook/Cookbook'
import food from '../assets/food.png';
import food_map from '../assets/food_map.png';
import kind from '../assets/kind.png';
import more from '../assets/more.png';
import food_select from '../assets/food_select.png';
import food_map_select from '../assets/food_map_select.png';
import kind_select from '../assets/kind_select.png';
import more_select from '../assets/more_select.png';

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'food_select',
            hidden: false,
            fullScreen: true,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    Click to show/hide tab-bar
        </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    Click to switch fullscreen
        </a>
            </div>
        );
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#666"
                    tintColor="#000"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="Food"
                        key="Food"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${food}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${food_select}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'food_select'}

                        onPress={() => {
                            this.setState({
                                selectedTab: 'food_select',
                            });
                        }}
                        data-seed="logId"
                    >
                        <Cookbook></Cookbook>
                        {this.renderContent('Food')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${kind}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${kind_select}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="Kind"
                        key="Kind"

                        selected={this.state.selectedTab === 'kind_select'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'kind_select',
                            });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Kind')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${food_map}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${food_map_select}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="Food_map"
                        key="Food_map"
                        // dot
                        selected={this.state.selectedTab === 'food_map_select'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'food_map_select',
                            });
                        }}
                    >
                        {this.renderContent('Food_map')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: `${more}` }}
                        selectedIcon={{ uri: `${more_select}` }}
                        title="More"
                        key="More"
                        selected={this.state.selectedTab === 'more_select'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'more_select',
                            });
                        }}
                    >
                        {this.renderContent('more')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
