import { FlatList, Image, StyleSheet, View } from 'react-native';
import React from 'react';

const keyExtractor = ({ id }) => id.toString();

export default class ExplorePage extends React.Component {

    renderItem = ({ item: { id, affiliation } }) => {
        if (affiliation === 'D') {
            return (
                <View style={styles.image}>
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={ {uri: 'https://apps.voxmedia.com/graphics/vox-convention-delegates/images/STATES_ICON_FL_GOP.png'} }
                    />
                </View>
            );
        } else {
            return (
                <View style={styles.image}>
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={ {uri: 'https://images-na.ssl-images-amazon.com/images/I/41z%2BhyqXXHL._SX425_.jpg'} }
                    />
                </View>
            );
        }
        
    };

    render() {
        let items = []
        for (let i = 0; i < 50; i++) {
            items.push(Math.random() < .5 ? {id: i, affiliation: 'D'} : {id: i, affiliation: 'R'});
            console.log(items[items.length - 1])
        }
        return (
            <FlatList
                data={items}
                renderItem={this.renderItem}
                keyExtractor={keyExtractor}
                numColumns={3}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
        flex: 1
    }
});