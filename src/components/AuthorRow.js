import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Avatar from './Avatar';

export default class AuthorRow extends React.Component {
    static propTypes = {
        handle: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Avatar size={35}/>
                <Text style={styles.text} numberOfLines={1}>
                    {this.props.handle}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    text: {
        flex: 1,
        marginHorizontal: 6
    }
})