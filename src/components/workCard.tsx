import React from "react";

type Props = {
  title:string;
}

export default class extends React.Component<Props> {
  render(){
    return (
      <div className="work_card">
        <div className="card_title">
          <span>{this.props.title}</span>
        </div>
        <div className="card_img">
          {this.props.children}
        </div>
      </div>
    );
  } 
}