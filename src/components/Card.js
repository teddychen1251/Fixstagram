import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorRow from './AuthorRow';

export default class Card extends React.Component {
    static propTypes = {
        handle: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired
    }

    state = {
        loading: true
    };

    handleLoad = () => {
        this.setState({ loading: false });
    }

    render() {
        const { handle, image } = this.props;
        const { loading } = this.state;

        return (
            <View>
                <AuthorRow handle={handle} />
                <View style={styles.image}>
                    {loading && (
                        <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
                    )}
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={image}
                        onLoad={this.handleLoad}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.02)'
    }
});