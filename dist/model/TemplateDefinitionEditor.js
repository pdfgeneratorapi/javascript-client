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
 * The TemplateDefinitionEditor model module.
 * @module model/TemplateDefinitionEditor
 * @version 3.1.1
 */
var TemplateDefinitionEditor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionEditor</code>.
   * Configuration preferences for the editor
   * @alias module:model/TemplateDefinitionEditor
   */
  function TemplateDefinitionEditor() {
    _classCallCheck(this, TemplateDefinitionEditor);

    TemplateDefinitionEditor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionEditor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinitionEditor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionEditor} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionEditor} The populated <code>TemplateDefinitionEditor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionEditor();

        if (data.hasOwnProperty('heightMultiplier')) {
          obj['heightMultiplier'] = _ApiClient["default"].convertToType(data['heightMultiplier'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TemplateDefinitionEditor;
}();
/**
 * @member {Number} heightMultiplier
 */


TemplateDefinitionEditor.prototype['heightMultiplier'] = undefined;
var _default = TemplateDefinitionEditor;
exports["default"] = _default;