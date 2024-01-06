import { Component } from "react";
import css from './Section.module.css';

export class Section extends Component {
  render() {
    return (
      <>
        <h2 className={css.title}>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </>
    )
  }
}