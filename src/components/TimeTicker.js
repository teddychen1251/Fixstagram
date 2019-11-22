import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';

export default class TimeTicker extends React.Component {
    
    componentDidMount() {
        setInterval(() => {
            this.setState(previousState => {
                if (previousState.minutes == 59) {
                    return { hours: previousState.hours + 1, minutes: 0 };
                } else {
                    return { hours: previousState.hours, minutes: previousState.minutes + 1 }
                }
            });
        }, 1000)
        setInterval(() => {
            this.setState(previousState => {
                return { fontSize: previousState.fontSize + 5}
            })
        }, 10000);
    }

    state = { hours: 0, minutes: 0, fontSize: 10 }

    render() {
        return (
            <Text style={[styles.text, { fontSize: this.state.fontSize }]}>
                {`${this.state.hours}:${this.state.minutes < 10 ? `0${this.state.minutes}` : this.state.minutes}`}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        position: 'absolute',
        top: -1
    }
})