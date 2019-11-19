import { Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

export default class Avatar extends React.Component {
    static propTypes = {
        size: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props);
        this.avatarStyle = {
            width: this.props.size,
            height: this.props.size
        };
        this.imageStyle = {
            borderRadius: this.props.size / 2
        };
    } 

    render() {
        return (
            <View style={[styles.container, this.avatarStyle]}>
                <Image
                    style={[StyleSheet.absoluteFill, this.imageStyle]}
                    source={ {uri: 'https://picsum.photos/200'}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})