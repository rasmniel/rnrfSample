import {ActionConst} from 'react-native-router-flux'

const INITIAL_STATE = {scene: {}};

export default (state = INITIAL_STATE, {type, scene}) => {

    console.log('Reducing action: ', type);

    switch (type) {
        case ActionConst.FOCUS:
            console.log('FOCUS event fired with scene parameter: ', scene);
            return {...state, scene: scene};

        default:
            return state
    }
}