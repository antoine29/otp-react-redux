'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _velocityReact = require('velocity-react');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _legBody = require('./leg-body');

var _legBody2 = _interopRequireDefault(_legBody);

var _viewTripButton = require('../../viewers/view-trip-button');

var _viewTripButton2 = _interopRequireDefault(_viewTripButton);

var _itinerary = require('../../../util/itinerary');

var _time = require('../../../util/time');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IntermediateStops = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(IntermediateStops, _Component);

  function IntermediateStops() {
    (0, _classCallCheck3.default)(this, IntermediateStops);
    return (0, _possibleConstructorReturn3.default)(this, (IntermediateStops.__proto__ || (0, _getPrototypeOf2.default)(IntermediateStops)).apply(this, arguments));
  }

  (0, _createClass3.default)(IntermediateStops, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'intermediate-stops' },
        this.props.stops.map(function (stop, k) {
          return _react2.default.createElement(
            'div',
            { className: 'stop-row', key: k },
            _react2.default.createElement(
              'div',
              { className: 'stop-marker' },
              '\u2022'
            ),
            _react2.default.createElement(
              'div',
              { className: 'stop-name' },
              stop.name
            )
          );
        })
      );
    }
  }]);
  return IntermediateStops;
}(_react.Component), _class.propTypes = {
  stops: _propTypes2.default.array
}, _temp);
exports.default = IntermediateStops;
module.exports = exports['default'];

//# sourceMappingURL=intermediate-stops.js