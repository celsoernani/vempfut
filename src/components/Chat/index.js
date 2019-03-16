import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default class Chat extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Procura um jogo ai vai ! (Prototipo do app Vem p Fut)',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://pbs.twimg.com/media/Dn83uJYWsAA5S0u.jpg',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
        placeholder = {"Solta a resenha ai..."}
      />
    )
  }
}