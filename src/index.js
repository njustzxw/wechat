import React from "react";
import ReactDOM from "react-dom";
import LogIn from "./views/login/login";
import Main from "./views/Main/Main";
import Detail from "./views/Detail/Detail";
import "./index.css";
import { HashRouter , Route } from "react-router-dom";
import 'weui';
import 'react-weui/build/packages/react-weui.css';


class SiteIndex extends React.Component {
  render() {
    return (
      // 路由
      <HashRouter>
        <div className="hp100">
          <Route exact path="/login" render={() => <LogIn />} />
          <Route path="/detail" render={() => <Detail />} />
          <Route path="/main" render={() => <Main />} />
          {/* <Route path="/dashboard" render={() => <Dashboard />} />
          <Route path="/time" render={() => <Time weather="大风" />} /> */}
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<SiteIndex />, document.getElementById("root"));
