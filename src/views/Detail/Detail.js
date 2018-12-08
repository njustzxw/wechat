import React from "react";

class Detail extends React.Component {

    componentWillMount(){
        console.log(1)
        // var params ={
        //     kwd:"",
        //     UId:1
        // }
        // searchFriend(params).then(res => {
        //     console.log(res)
        //     this.setState({
        //         linkmanarr:res.data,
        //     });
        // })
    }
  render() {
    return (
      <div id="detail">
        123
      </div>
    );
  }
}
export default Detail;