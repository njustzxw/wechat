import React from "react";
import "./login.css";
import { Form,FormCell,CellHeader,CellBody,Label,Input,ButtonArea,Button,Dialog,Toast } from "react-weui";
import {withRouter} from "react-router-dom";
import { login } from '../../utils/user.js'

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showdialog:false,
            msg:'',
            username: "",
            password: "",
            isok:true,
            style: {
                buttons: [
                    {
                        label: '确认',
                        onClick: this.hideDialog.bind(this)
                    }
                ]
            },
            showLoading:false,
            loadingTimer:'',
        };
    }

    componentWillUnmount() {
        this.state.loadingTimer && clearTimeout(this.state.loadingTimer);
    }

    // 弹窗
    hideDialog() {
        this.setState({
            showdialog: false,
        });
    }

    //加载中
    showLoading() {
        this.setState({showLoading: true});
        this.setState({loadingTimer:setTimeout(()=> {
                                        this.setState({showLoading: false});
                                    }, 1000)})
    }

    // 账号密码
     handlechange(key,val){
        this.setState(
             Object.assign({}, { [key]:val.target.value }),
             () => {
                 if(this.state.username.trim() !== ""&&this.state.password.trim() !== ""){
                    this.setState({ isok:false })
                }else{
                    this.setState({ isok:true })
                }
            }
        )
    }   

    // 登陆
    login() {
        let params = {
            username:this.state.username,
            password:this.state.password,
        }
        login(params).then(res => {
            if(res.status){
                this.showLoading()
                this.props.history.push('/main')
            }else{
                this.setState({ msg:res.msg, showdialog:true})
            }
            console.log(res)
        })
    }

    // 渲染DOM
    render() {
        return (
            <div id="login" className="login">
                <h3 className="login-head">微信号/QQ号/邮箱登陆</h3>
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>账号</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="微信号/QQ号/邮箱"onChange={e=>{this.handlechange("username",e);}}/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="password" placeholder="请填写密码" onChange={e=>{this.handlechange("password",e)}}/>
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button size="normal" disabled={this.state.isok} onClick={() => this.login()}>
                        登陆
                    </Button>
                </ButtonArea>
                <span className="login-mode">使用手机号登陆</span>

                <Dialog type="ios" title={this.state.msg}  show={this.state.showdialog} buttons={this.state.style.buttons}></Dialog>
                <Toast icon="loading" show={this.state.showLoading}>Loading...</Toast>
            </div>
        );
    }
}
export default withRouter(LogIn);
