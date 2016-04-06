import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer txt-small txt-dimmed mb mt txt-center has-icon" role="contentinfo">
        <div class="row">
          <div class="col-lg-12">
            
            <a href="http://www.nearform.com/" className="icon icon-bug icon-dimmed">Sponsor: nearForm</a>
            <p className="m0">{'MIT. Copyright (c) 2016. Vidi: Insights'}</p>
          </div>
        </div>
      </footer>
    );
  }
}
