import React from 'react';
import {Platform} from 'react-native';

export default fonts = (Platform.OS === 'ios') ? {
    900: {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: '900'
    },
    700: {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: '700'
    },
    500: {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: '500'
    },
    300: {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: '300'
    },
    100: {
        fontFamily: 'Museo Sans Cyrl',
        fontWeight: '100'
    }
} : {
    900: {
        fontFamily: 'MuseoSansCyrl_900',
    },
    700: {
        fontFamily: 'MuseoSansCyrl_700',
    },
    500: {
        fontFamily: 'MuseoSansCyrl_500',
    },
    300: {
        fontFamily: 'MuseoSansCyrl_300',
    },
    100: {
        fontFamily: 'MuseoSansCyrl_100',
    }
};
