import React, { Component } from 'react'

export default class Textarea extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
  render() {
    return (
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">{this.props.title}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" col="4"></textarea>
      </div>
    )
  }
}
