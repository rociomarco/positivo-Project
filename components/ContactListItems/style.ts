import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderRadius: 1,
        borderColor: '#d8d8f2',
        borderBottomWidth: 0,
        shadowColor: '#d8d8f2',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 0.3,
        elevation: 0.4,
        marginLeft: 0.5,
        marginRight: 0.5,
        marginTop: 0.5,

    },
    leftContainer:{
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent:'space-around',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius:50,
        marginRight: 15,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    age: {
        fontSize: 14,
        color: 'grey',
    },
    distance: {
        fontSize: 14,
        color: 'grey',
    },
    distanceIcon: {
        fontSize: 30,
        color: '#d8d8f2',
        marginLeft: 27,
        marginBottom: 4,
    }
});

export default styles;
