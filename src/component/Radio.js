import React, { Component } from 'react'

export default class Radio extends Component {

    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label className="form-check-label" for="flexRadioDefault1">
                        {this.props.title}
        </label>
      </div>
                
    )
  }
}
