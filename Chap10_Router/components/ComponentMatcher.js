import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

class ComponentMatcher extends Component {
    render() {
        console.log(this.props); 
        if ( this.props.match.params.name === 'first' ) {
            return <FirstComponent />
        } else if( this.props.match.params.name === 'second' ) {
            return <SecondComponent />
        } else if( this.props.match.params.name === 'third' ) {
            return <ThirdComponent />
        }
    }
}

export default withRouter(ComponentMatcher);