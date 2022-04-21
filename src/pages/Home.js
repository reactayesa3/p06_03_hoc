import React, { Component } from 'react'
import withModal from '../hocs/withModal'

export class Home extends Component {


    componentDidMount() {
        this.props.handleSetModalText('Lorem ipsum dolor.....')
    }

  render() {
    return (
      <div className='container'>
          <h1>Bienvenid@ a nuestra aplicación</h1>
          <button onClick={this.props.handleToggleModal}>Ver condiciones legales</button>
      </div>
    )
  }
}

export default withModal(Home);