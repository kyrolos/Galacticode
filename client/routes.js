import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Main, Game, UserAccount, Challenge, Home, Tutorial} from './components'
import {me} from './store'
import {auth} from '../firebase/firebase.utils'

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor(){
    super();
  }
  unSubscripeFromAuth = null;
  componentDidMount() {
    this.unSubscripeFromAuth = auth.onAuthStateChanged( user => {
      this.props.isLoggedIn = user.id;
      console.log(user)
    })
    this.props.loadInitialData()
  };

  componentWillUnmount(){
    this.unSubscripeFromAuth();
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {isLoggedIn && (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/planet/:planetId" component={Game} />
            <Route path="/challenge/:challengeId" component={Challenge} />
            <Route path="/account" component={UserAccount} />
            <Route path="/tutorial" component={Tutorial} />
          </Switch>
        )}
        <Route component={Main} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
