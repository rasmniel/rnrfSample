import React from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {Scene, Actions, Router} from 'react-native-router-flux';
import Home from './home';
import Page from './page';

const navigator = Actions.create(<Scene key="root" hideNavBar>
  <Scene key="home" component={Home}/>
  <Scene key="page" component={Page}/>
</Scene>);

const ReduxRouter = connect((state) => ({ state: state.route }))(Router);
// it is important to load reducers AFTER actions.create (so no import here)
const reducers = require('./reducers').default;

export default
class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers, {})}>
                <ReduxRouter navigator={navigator} />
            </Provider>
        );
    }
}