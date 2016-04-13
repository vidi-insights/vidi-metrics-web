import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const indexClass = location.pathname === "/" ? "active" : "";
    const builderClass = location.pathname.match(/^\/builder/) ? "active" : "";
    const pasteClass = location.pathname.match(/^\/paste/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              
              <li class={indexClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>              
              <li class={pasteClass}>
                <Link to="paste" onClick={this.toggleCollapse.bind(this)}>Paste</Link>
              </li>
              <li class={builderClass}>
                <Link to="builder" onClick={this.toggleCollapse.bind(this)}>Builder</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}