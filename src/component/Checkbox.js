import React, { Component } from 'react'

export default class Checkbox extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    <label class="form-check-label" for="flexCheckChecked">
                        {this.props.title}
        </label>
      </div>
    )
  }
}
