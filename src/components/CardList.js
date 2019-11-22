import { FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                handle: PropTypes.string.isRequired
            })
        ).isRequired
    }

    renderItem = ({ item: { id, handle } }) => {
        return (
            <Card
                handle={handle}
                image={ {uri: 'https://picsum.photos/500'} }
            />
        );
    };

    render() {
        const { items } = this.props;

        return (
            <FlatList
                data={items}
                renderItem={this.renderItem}
                keyExtractor={keyExtractor}
            />
        );
    }
}