import React, { Component } from 'react'

class Search extends Component {
    
    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                <i className="material-icons">search<input type="text" ref={ (value) => {this.myValue = value} } placeholder="Enter Job Name" onChange={this.filterUpdate.bind(this)}></input></i>
            </div>
        )
    }
}

export default Search