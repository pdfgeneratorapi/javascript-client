"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TemplateDefinitionDataSettings = _interopRequireDefault(require("./TemplateDefinitionDataSettings"));

var _TemplateDefinitionEditor = _interopRequireDefault(require("./TemplateDefinitionEditor"));

var _TemplateDefinitionNewLayout = _interopRequireDefault(require("./TemplateDefinitionNewLayout"));

var _TemplateDefinitionNewPagesInner = _interopRequireDefault(require("./TemplateDefinitionNewPagesInner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TemplateDefinition model module.
 * @module model/TemplateDefinition
 * @version 4.0.3
 */
var TemplateDefinition = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinition</code>.
   * @alias module:model/TemplateDefinition
   */
  function TemplateDefinition() {
    _classCallCheck(this, TemplateDefinition);

    TemplateDefinition.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinition, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TemplateDefinition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinition} obj Optional instance to populate.
     * @return {module:model/TemplateDefinition} The populated <code>TemplateDefinition</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinition();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], ['String']);
        }

        if (data.hasOwnProperty('isDraft')) {
          obj['isDraft'] = _ApiClient["default"].convertToType(data['isDraft'], 'Boolean');
        }

        if (data.hasOwnProperty('layout')) {
          obj['layout'] = _TemplateDefinitionNewLayout["default"].constructFromObject(data['layout']);
        }

        if (data.hasOwnProperty('pages')) {
          obj['pages'] = _ApiClient["default"].convertToType(data['pages'], [_TemplateDefinitionNewPagesInner["default"]]);
        }

        if (data.hasOwnProperty('dataSettings')) {
          obj['dataSettings'] = _TemplateDefinitionDataSettings["default"].constructFromObject(data['dataSettings']);
        }

        if (data.hasOwnProperty('editor')) {
          obj['editor'] = _TemplateDefinitionEditor["default"].constructFromObject(data['editor']);
        }
      }

      return obj;
    }
    /**
     * Validates the JSON data with respect to <code>TemplateDefinition</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateDefinition</code>.
     */

  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
        throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
      } // ensure the json data is an array


      if (!Array.isArray(data['tags'])) {
        throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
      } // validate the optional field `layout`


      if (data['layout']) {
        // data not null
        _TemplateDefinitionNewLayout["default"].validateJSON(data['layout']);
      }

      if (data['pages']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['pages'])) {
          throw new Error("Expected the field `pages` to be an array in the JSON data but got " + data['pages']);
        } // validate the optional field `pages` (array)


        var _iterator = _createForOfIteratorHelper(data['pages']),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            _TemplateDefinitionNewPagesInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        ;
      } // validate the optional field `dataSettings`


      if (data['dataSettings']) {
        // data not null
        _TemplateDefinitionDataSettings["default"].validateJSON(data['dataSettings']);
      } // validate the optional field `editor`


      if (data['editor']) {
        // data not null
        _TemplateDefinitionEditor["default"].validateJSON(data['editor']);
      }

      return true;
    }
  }]);

  return TemplateDefinition;
}();
/**
 * Unique identifier
 * @member {Number} id
 */


TemplateDefinition.prototype['id'] = undefined;
/**
 * Template name
 * @member {String} name
 */

TemplateDefinition.prototype['name'] = undefined;
/**
 * A list of tags assigned to a template
 * @member {Array.<String>} tags
 */

TemplateDefinition.prototype['tags'] = undefined;
/**
 * Indicates if the template is a draft or published.
 * @member {Boolean} isDraft
 */

TemplateDefinition.prototype['isDraft'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewLayout} layout
 */

TemplateDefinition.prototype['layout'] = undefined;
/**
 * Defines page or label size, margins and components on page or label
 * @member {Array.<module:model/TemplateDefinitionNewPagesInner>} pages
 */

TemplateDefinition.prototype['pages'] = undefined;
/**
 * @member {module:model/TemplateDefinitionDataSettings} dataSettings
 */

TemplateDefinition.prototype['dataSettings'] = undefined;
/**
 * @member {module:model/TemplateDefinitionEditor} editor
 */

TemplateDefinition.prototype['editor'] = undefined;
var _default = TemplateDefinition;
exports["default"] = _default;