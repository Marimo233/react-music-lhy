import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Header from 'components/header/Header'
import Tab from 'components/tab/Tab'
import Recommend from 'components/recommend/Recommend'
import Player from 'components/player/Player'
// import UserCenter from "components/user-center/UserCenter";
import Search from 'components/search/Search'
// import Singer from 'components/singer/Singer'
// import Rank from 'components/rank/Rank'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Tab />
          <Switch>
              {/*配置默认路由*/}
              <Route
                  exact
                  path="/"
                  render={() => <Redirect to="/recommend" />}
              />
              <Route path="/recommend" component={Recommend}/>
              <Route path="/rank" component={Rank}/>
              <Route path="/search" component={Search}/>
              <Route path="/singer" component={Singer}/>
          </Switch>
          <Route path="/user" component={UserCenter}/>
          <Player/>
      </div>
    );
  }
}

export default App;

import Loadable from 'react-loadable';
import Loading from 'reuse/loading/Loading';
const Rank = Loadable({
        loader: () => {return import(/* webpackChunkName: "Rank" */ 'components/rank/Rank')},
        loading: () => <Loading text={"按需加载"}/>
    });

// const Search = Loadable({
//         loader: () => {return import(/* webpackChunkName: "Search" */ 'components/search/Search')},
//         loading: () => <Loading text={"按需加载"}/>
// });

const Singer = Loadable({
        loader: () => {return import(/* webpackChunkName: "Singer" */ 'components/singer/Singer')},
        loading: () => <Loading text={"按需加载"}/>
});

const UserCenter = Loadable({
        loader: () => {return import(/* webpackChunkName: "UserCenter" */ 'components/user-center/UserCenter')},
        loading: () => <Loading text={"按需加载"}/>
});