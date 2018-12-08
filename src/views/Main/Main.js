import React from 'react';
import { Tab, TabBarItem, Article } from 'react-weui';
import Chat from "../chat/chat";
import Linkman from "../linkman/linkman";
import {withRouter} from "react-router-dom";

class TabBarAutoDemo extends React.Component {
    render() {
        return (
            <Tab type="tabbar">
                <TabBarItem icon={<i className="fa fa-wechat"></i>} label="微信">
                    <Chat />
                </TabBarItem>
                <TabBarItem icon={<i className="fa  fa-address-book-o"></i>} label="通讯录">
                    <Linkman />
                </TabBarItem>
                <TabBarItem icon={<i className="fa fa-compass"></i>} label="发现">
                    <Article>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
                <TabBarItem icon={<i className="fa fa-user-o"></i>} label="个人">
                    <Article>
                        <h1>Page 3</h1>
                        <section>
                            <h2 className="title">Heading</h2>
                            <section>
                                <h3>3.1 Title</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute</p>
                            </section>
                        </section>
                    </Article>
                </TabBarItem>
            </Tab>
        );
    }
};
export default withRouter(TabBarAutoDemo)