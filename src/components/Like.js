import { StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';

import { Icon } from 'react-native-elements';

export default class Like extends React.Component {

    onPress = () => {
        if (!this.state.liked) {
            this.setState({
                liked: true
            })
        }
    }

    state = { liked: false }
   
    render() {
        return (
            <TouchableHighlight onPress={this.onPress} underlayColor='#eee'>
                {
                    this.state.liked ?
                        <Icon 
                            name='heart' 
                            type='font-awesome'
                            color='#ff0000'
                        />
                        :
                        <Icon 
                            name='thumbs-up' 
                            type='font-awesome'
                            color='#656b69'
                        />
                }
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    
})