import React from 'react';
import { searchFriend } from '../../utils/user.js'

import {
    //main component
    Page,
    SearchBar,
    //for display data
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    Cell,
    CellBody,
    CellFooter
} from 'react-weui';

const CellMore = () => (
    <Cell access link>
        <CellBody>More</CellBody>
        <CellFooter />
    </Cell>
)

export default class SearchBarDemo extends React.Component {
    state={
        searchText: '',
        results: []
    };

    handleChange(text, e){
        console.log(text)
        var params ={
            kwd:text,
            UId:1
        }
        searchFriend(params).then(res =>{
            console.log(res)
            let results = res.data;
            if(results.length > 3) results = results.slice(0,3);
            this.setState({
                results,
                searchText:text,
            });
        })
    }

    render() {
        return (
            <div >
                <SearchBar
                    onChange={this.handleChange.bind(this)}
                    defaultValue={this.state.searchText}
                    placeholder="搜索"
                    lang={{
                        cancel: '取消'
                    }}
                />

                <Panel style={{display: this.state.searchText ? null: 'none', marginTop: 0}}>
                    <PanelHeader>
                        联系人
                    </PanelHeader>
                    <PanelBody>
                        {
                            this.state.results.length > 0 ?
                                this.state.results.map((item,i)=>{
                                    return (
                                        <MediaBox key={i} type="appmsg" href="javascript:void(0);">
                                            <MediaBoxHeader>
                                                <img src={item.U_HeadPortrait} alt=""/>
                                            </MediaBoxHeader>
                                            <MediaBoxBody>
                                                <MediaBoxTitle>{item.U_NickName}</MediaBoxTitle>
                                                <MediaBoxDescription>
                                                {item.F_Name}
                                                </MediaBoxDescription>
                                            </MediaBoxBody>
                                        </MediaBox>
                                    )
                                })
                                : <MediaBox>没有找到相关内容</MediaBox>
                        }
                    </PanelBody>
                    <PanelFooter href="javascript:void(0);">
                        <CellMore />
                    </PanelFooter>
                </Panel>
            </div>
        );
    }
};
