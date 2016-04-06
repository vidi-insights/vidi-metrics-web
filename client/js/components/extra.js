import React from "react";

export default class Extra extends React.Component {
  render() {
    return  <ul>
              { this.props.items.map((item, i) => {
                return <section id="main" key={item}>
                       <li >
                          { item }
                          <a href='#' className="destroy" onClick={ this.props.handleDelete.bind(null, item) }>
                            [delete]
                          </a>
                       </li>
                       </section>
              }) }
            </ul>;
  }
  
  
}