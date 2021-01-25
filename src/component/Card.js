import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
  render() {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={this.props.gambar} className="card-img-top" alt="..."/> {/*{this.props.gambar} bakal di lempar ke App.js untuk ngisi nilai gambar*/}
        <div className="card-body">
          <h5 class="card-title">{this.props.title}</h5> {/*{this.props.title} bakal di lempar ke App.js untuk ngisi nilai title*/}
          <p className="card-text">{this.props.deskripsi}</p> {/*{this.props.deskripsi} bakal di lempar ke App.js untuk ngisi nilai deskripsi*/}
          <a href="" className="btn btn-primary" onclick ="">Go Detail</a>
        </div>
      </div>
    )
  }
}
