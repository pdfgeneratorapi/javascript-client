"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Template model module.
 * @module model/Template
 * @version 3.1.1
 */
var Template = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Template</code>.
   * Template object
   * @alias module:model/Template
   */
  function Template() {
    _classCallCheck(this, Template);

    Template.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Template, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Template</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Template} obj Optional instance to populate.
     * @return {module:model/Template} The populated <code>Template</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Template();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _ApiClient["default"].convertToType(data['owner'], 'Boolean');
        }

        if (data.hasOwnProperty('modified')) {
          obj['modified'] = _ApiClient["default"].convertToType(data['modified'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Template;
}();
/**
 * Unique identifier
 * @member {Number} id
 */


Template.prototype['id'] = undefined;
/**
 * Template name
 * @member {String} name
 */

Template.prototype['name'] = undefined;
/**
 * Indicates if the workspace is the owner of the template
 * @member {Boolean} owner
 */

Template.prototype['owner'] = undefined;
/**
 * Timestamp when the template was modified
 * @member {String} modified
 */

Template.prototype['modified'] = undefined;
/**
 * A list of tags assigned to a template
 * @member {Array.<String>} tags
 */

Template.prototype['tags'] = undefined;
var _default = Template;
exports["default"] = _default;