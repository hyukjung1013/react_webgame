import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FirstComponent from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

class ComponentMatcher extends Component {
    render() {
        console.log(this.props.location.search);         
        console.log(this.props.location.search);
        var params = new URLSearchParams(this.props.location.search.slice(1));
        console.log(params.get('name'));

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