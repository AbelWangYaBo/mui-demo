import * as React from "react";
import { Route } from "react-router-dom";
// import PropTypes from 'prop-types'

class RouterViewMap extends React.Component {
  render() {
    let router = [];
    this.props.routesTable.forEach((item) => {
      router.push(
        <Route exact={item.fullPath === "/" ? true : false} key={"isLayout"} />
      );
    });
  }
}

// class RouterViewMap extends React.Component {
//   render() {
//     let router = []
//     this.props.routesTable.forEach(item => {
//       router.push(
//         <Route
//                     exact={ item.fullPath === '/' ? true : false }
//                     // key={ item.fullPath }  //一级路由之间切换都会重新初始化layout，使用相同的key可实现layout组件复用
//                     key = { 'isLayout' }
//                     path = { item.fullPath }
//                     render = {
//           props => {
//         if(item.component){
//         return <item.component { ...this.props } {...props} routesTable = { item.children } route = { item } />
//                             }
// if (item.redirect) {
//   return <Redirect to={ item.redirect } />
// }
// return null
//                         }
//                     }
// />
//             )
//         })
// if (this.props.route !== undefined) {  //多级路由
//   if (this.props.route.fullPath !== this.props.location.pathname) {
//     router.push(<Redirect to='/404' key = '/404' />)
//   }
//   if (this.props.route.redirect) {
//     router.push(<Redirect to={ this.props.route.redirect } key = { 'redirect' + this.props.route.redirect } />)
//   }
// }
// return (
//   <Switch>
//   { router }
//   < /Switch>
// )
//     }
// }

// RouterViewMap.propTypes = {
//   routesTable: PropTypes.array,
//   route: PropTypes.object,
//   location: PropTypes.object
// }

// function RouterView(props) {
//   return <RouterViewMap { ...props } />
// }

const RouterView = () => {
  return <div>111</div>;
};

export default RouterView;
