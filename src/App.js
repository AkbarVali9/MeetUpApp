import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import RegisterForm from './components/RegisterForm'
import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    isRegistered: false,
    showError: false,
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state

    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.onChangeName,
          changeTopic: this.onChangeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterForm} />
          <NotFound />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
