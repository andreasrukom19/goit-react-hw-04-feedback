import { Component } from "react";
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <table className={css['statistics-table']}>
          <tbody>
            <tr className={css['statistics-table-row']}>
              <td>Good:</td>
              <td>{ good }</td>
            </tr>
            <tr className={css['statistics-table-row']}>
              <td>Neutral:</td>
              <td>{ neutral }</td>
            </tr>
            <tr className={css['statistics-table-row']}>
              <td>Bad:</td>
              <td>{ bad }</td>
            </tr>
            <tr className={css['statistics-table-row']}>
              <td>Total:</td>
              <td>{ total }</td>
            </tr>
            <tr className={css['statistics-table-row']}>
              <td>Positive feedback:</td>
              <td>{ positivePercentage }%</td>
            </tr>
          </tbody>
        </table>
      </>
    )
  }
}