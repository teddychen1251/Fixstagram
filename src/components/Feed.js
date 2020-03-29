import { Text, View } from 'react-native';
import React from 'react';

import CardList from './CardList';
import ExplorePage from './ExplorePage';

export default class Feed extends React.Component {
    
    state = { home: true }

    switchFeed() {
        this.setState(() => {
            this.setState(previousState => {
                return { home: !previousState.home }
            })
        })
    }

    render() {
        return (
            this.state.home ?
                <CardList
                    items={
                    ([
                        'Teddy Chen [@tedthemeap]',
                        'Ngozi Ozor [@ngozi4ever]',
                        'Janielle Hay [@hay.its.janielle]',
                        'Alex Sikorsky [@6sik_Alex]',
                        'Cahil Potnis [@houseonacahil]',
                        'Jaron Lanier [@realJaronLanier]',
                        'Jia Tolentino [@jia.tolentino7]',
                        'Jenny Odell [@odelllll]',
                        'Hannah Markley [@dr.markley2u]',
                        'Marshall McLuhan [@message_man_mcluhan]',
                        'Neil Postman [@neil.keep.me.posted.man]'
                    ]).map((handle, id) => { 
                        return (
                        {
                            id,
                            handle
                        }
                        );
                    })
                    }
                />
            :
                <ExplorePage />
        )
    }
}
