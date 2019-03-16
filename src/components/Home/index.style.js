import { StyleSheet } from 'react-native';

export const colors = {
    black: '#2d7b1e',
    gray: '#2d7b1e',
    background1: '#2d7b1e',
    background2: '#2d7b1e'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.black
    },
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: colors.black
    },
    title: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'transparent',
        color: 'rgba(0, 0, 0, 0.55)',
        fontSize: 18,
        textAlign: 'left',
        opacity:0.70
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});