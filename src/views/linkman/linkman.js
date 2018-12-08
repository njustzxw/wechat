import React from "react";
import Searchbar from "../../components/main/searchbar";
import { searchFriend } from '../../utils/user.js'
import  './linkman.css'
import {withRouter} from "react-router-dom";
import {
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
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

class Linkman extends React.Component {
    state={
        linkmanarr: []
    };
    componentWillMount(){
        var params ={
            kwd:"",
            UId:1
        }
        searchFriend(params).then(res => {
            console.log(res)
            this.setState({
                linkmanarr:res.data,
            });
        })
    }
    lookdetail(uid) {
        this.props.router.push({ pathname:'/sort',state:{name : 'sunny' } })
        //alert(1)
    }
    render() {
        return (
            <div>
                <Searchbar />
                <Panel style={{ marginTop: 0}}>
                    <PanelHeader>
                        联系人
                    </PanelHeader>
                    <PanelBody>
                        {
                            this.state.linkmanarr.length > 0 ?
                                this.state.linkmanarr.map((item,i)=>{
                                    return (
                                        <div key={i} className="likmanitem clearfix" onClick={() => this.lookdetail(item.U_Uid)}>
                                            <img style={{width: '40px', display: 'block'}} className="fl" src={item.U_HeadPortrait} alt=""/>
                                            <div className="fl likmanname">{item.F_Name?item.F_Name:item.U_NickName}</div>
                                        </div>
                                    )
                                })
                                : <MediaBox>暂无联系人</MediaBox>
                        }
                    </PanelBody>
                    <PanelFooter href="javascript:void(0);">
                        <CellMore />
                    </PanelFooter>
                </Panel>
            </div>
        );
    }
}
export default withRouter(Linkman);