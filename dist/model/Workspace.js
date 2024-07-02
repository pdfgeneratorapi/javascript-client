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
 * The Workspace model module.
 * @module model/Workspace
 * @version 4.0.3
 */
var Workspace = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Workspace</code>.
   * @alias module:model/Workspace
   */
  function Workspace() {
    _classCallCheck(this, Workspace);

    Workspace.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Workspace, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Workspace</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workspace} obj Optional instance to populate.
     * @return {module:model/Workspace} The populated <code>Workspace</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Workspace();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('is_master_workspace')) {
          obj['is_master_workspace'] = _ApiClient["default"].convertToType(data['is_master_workspace'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }
      }

      return obj;
    }
    /**
     * Validates the JSON data with respect to <code>Workspace</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Workspace</code>.
     */

  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['identifier'] && !(typeof data['identifier'] === 'string' || data['identifier'] instanceof String)) {
        throw new Error("Expected the field `identifier` to be a primitive type in the JSON string but got " + data['identifier']);
      } // ensure the json data is a string


      if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
        throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
      }

      return true;
    }
  }]);

  return Workspace;
}();
/**
 * Internal workspace id
 * @member {Number} id
 */


Workspace.prototype['id'] = undefined;
/**
 * The unique workspace idenfitifer specified by your application
 * @member {String} identifier
 */

Workspace.prototype['identifier'] = undefined;
/**
 * True if a master workspace
 * @member {Boolean} is_master_workspace
 */

Workspace.prototype['is_master_workspace'] = undefined;
/**
 * @member {String} created_at
 */

Workspace.prototype['created_at'] = undefined;
var _default = Workspace;
exports["default"] = _default;