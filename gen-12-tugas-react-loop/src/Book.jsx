import { Component } from "react";

class Book extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return<>
    <div className="book">
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.author}</p>
      </div>
      <button onClick={this.props.removeFunc} className="remove-btn">remove</button>
    </div>
    </>
  }
}

export default Book