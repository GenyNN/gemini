import EStyleSheet from 'react-native-extended-stylesheet';
export default styles = EStyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    backgroundImageWtv: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    backdropViewVtw: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    borderStyleTr: {
        marginTop: 10,
        borderBottomColor:'#FFFFFF',
        borderBottomWidth: 0.3
    },
    weeklyTestItemWt: {
        flex: 1
    },
    textStyleWt: {
        color: 'white',
        fontSize: 46,
        fontFamily: 'Lemon Tuesday',
        paddingTop:10,
        paddingBottom: 10
    },
    containerWtl: {
        flex: 1,
        width: null,
        height: null
    },
    imageWtl: {
        width: null,
        height: 112,
        flex:1,
        borderRadius: 10,
        resizeMode: 'cover'
    },
    textWtl: {
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 10
    }
});