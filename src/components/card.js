import React from 'react'

export default class Card extends React.Component {

  static propTypes = {

  }

  render () {
    console.log("the props are",this.props);
    return (
      <div className="Card">
        <img src="http://placehold.it/150x150" />
        <div className="card-content">
          <div className="heading">Title: </div>
          <div>{this.props.title}</div>
          <div className="heading">Upvotes:</div>
          <div>{this.props.upvote}</div>
          <div className="heading">Date:</div>
            <div>{this.props.date}</div>
            </div>
      </div>
    )
  }

}