import React from 'react';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import {Scene, Router} from 'react-native-router-flux';

const ReduxRouter = connect()(Router);

import reducers from './reducers';
import Home from './home';
import Page from './page';

export default
class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducers, {})}>
                <ReduxRouter>
                    <Scene key="root" hideNavBar>
                        <Scene key="home" component={Home}/>
                        <Scene key="page" component={Page}/>
                    </Scene>
                </ReduxRouter>
            </Provider>
        );
    }
}