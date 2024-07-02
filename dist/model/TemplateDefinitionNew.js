"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

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
 * The TemplateDefinitionNew model module.
 * @module model/TemplateDefinitionNew
 * @version 4.0.3
 */
var TemplateDefinitionNew = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateDefinitionNew</code>.
   * Template configuration
   * @alias module:model/TemplateDefinitionNew
   * @param name {String} Template name
   */
  function TemplateDefinitionNew(name) {
    _classCallCheck(this, TemplateDefinitionNew);

    TemplateDefinitionNew.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TemplateDefinitionNew, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['name'] = name;
    }
    /**
     * Constructs a <code>TemplateDefinitionNew</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateDefinitionNew} obj Optional instance to populate.
     * @return {module:model/TemplateDefinitionNew} The populated <code>TemplateDefinitionNew</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateDefinitionNew();

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
      }

      return obj;
    }
    /**
     * Validates the JSON data with respect to <code>TemplateDefinitionNew</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TemplateDefinitionNew</code>.
     */

  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(TemplateDefinitionNew.RequiredProperties),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;

          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        } // ensure the json data is a string

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

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


        var _iterator2 = _createForOfIteratorHelper(data['pages']),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;

            _TemplateDefinitionNewPagesInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        ;
      }

      return true;
    }
  }]);

  return TemplateDefinitionNew;
}();

TemplateDefinitionNew.RequiredProperties = ["name"];
/**
 * Template name
 * @member {String} name
 */

TemplateDefinitionNew.prototype['name'] = undefined;
/**
 * A list of tags assigned to a template
 * @member {Array.<String>} tags
 */

TemplateDefinitionNew.prototype['tags'] = undefined;
/**
 * Indicates if the template is a draft or published.
 * @member {Boolean} isDraft
 */

TemplateDefinitionNew.prototype['isDraft'] = undefined;
/**
 * @member {module:model/TemplateDefinitionNewLayout} layout
 */

TemplateDefinitionNew.prototype['layout'] = undefined;
/**
 * Defines page or label size, margins and components on page or label
 * @member {Array.<module:model/TemplateDefinitionNewPagesInner>} pages
 */

TemplateDefinitionNew.prototype['pages'] = undefined;
var _default = TemplateDefinitionNew;
exports["default"] = _default;