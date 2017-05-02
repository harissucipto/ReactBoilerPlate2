var React = require('react');


//Load foudation
require('style!css!sass!foundation-sites/dist/foundation.min.css')
$(document).foundation();

require('style!css!applicationStyles');

var Main = (props) => {
  return (
    <div>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
