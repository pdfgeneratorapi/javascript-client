"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient["default"];
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _Component["default"];
  }
});
Object.defineProperty(exports, "Data", {
  enumerable: true,
  get: function get() {
    return _Data["default"];
  }
});
Object.defineProperty(exports, "DocumentsApi", {
  enumerable: true,
  get: function get() {
    return _DocumentsApi["default"];
  }
});
Object.defineProperty(exports, "InlineResponse200", {
  enumerable: true,
  get: function get() {
    return _InlineResponse["default"];
  }
});
Object.defineProperty(exports, "InlineResponse2001", {
  enumerable: true,
  get: function get() {
    return _InlineResponse2["default"];
  }
});
Object.defineProperty(exports, "InlineResponse2002", {
  enumerable: true,
  get: function get() {
    return _InlineResponse3["default"];
  }
});
Object.defineProperty(exports, "InlineResponse2002Response", {
  enumerable: true,
  get: function get() {
    return _InlineResponse2002Response["default"];
  }
});
Object.defineProperty(exports, "InlineResponse2003", {
  enumerable: true,
  get: function get() {
    return _InlineResponse4["default"];
  }
});
Object.defineProperty(exports, "InlineResponse2004", {
  enumerable: true,
  get: function get() {
    return _InlineResponse5["default"];
  }
});
Object.defineProperty(exports, "InlineResponse2004Meta", {
  enumerable: true,
  get: function get() {
    return _InlineResponse2004Meta["default"];
  }
});
Object.defineProperty(exports, "InlineResponse2005", {
  enumerable: true,
  get: function get() {
    return _InlineResponse6["default"];
  }
});
Object.defineProperty(exports, "InlineResponse401", {
  enumerable: true,
  get: function get() {
    return _InlineResponse7["default"];
  }
});
Object.defineProperty(exports, "InlineResponse403", {
  enumerable: true,
  get: function get() {
    return _InlineResponse8["default"];
  }
});
Object.defineProperty(exports, "InlineResponse404", {
  enumerable: true,
  get: function get() {
    return _InlineResponse9["default"];
  }
});
Object.defineProperty(exports, "InlineResponse422", {
  enumerable: true,
  get: function get() {
    return _InlineResponse10["default"];
  }
});
Object.defineProperty(exports, "InlineResponse500", {
  enumerable: true,
  get: function get() {
    return _InlineResponse11["default"];
  }
});
Object.defineProperty(exports, "Template", {
  enumerable: true,
  get: function get() {
    return _Template["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinition", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinition["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionDataSettings", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionDataSettings["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionEditor", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionEditor["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionLayout", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionLayout["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionNew", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionNew["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionNewLayout", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionNewLayout["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionNewLayoutMargins", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionNewLayoutMargins["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionNewLayoutRepeatLayout", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionNewLayoutRepeatLayout["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionNewMargins", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionNewMargins["default"];
  }
});
Object.defineProperty(exports, "TemplateDefinitionNewPages", {
  enumerable: true,
  get: function get() {
    return _TemplateDefinitionNewPages["default"];
  }
});
Object.defineProperty(exports, "TemplatesApi", {
  enumerable: true,
  get: function get() {
    return _TemplatesApi["default"];
  }
});
Object.defineProperty(exports, "Workspace", {
  enumerable: true,
  get: function get() {
    return _Workspace["default"];
  }
});
Object.defineProperty(exports, "WorkspacesApi", {
  enumerable: true,
  get: function get() {
    return _WorkspacesApi["default"];
  }
});

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

var _Component = _interopRequireDefault(require("./model/Component"));

var _Data = _interopRequireDefault(require("./model/Data"));

var _InlineResponse = _interopRequireDefault(require("./model/InlineResponse200"));

var _InlineResponse2 = _interopRequireDefault(require("./model/InlineResponse2001"));

var _InlineResponse3 = _interopRequireDefault(require("./model/InlineResponse2002"));

var _InlineResponse2002Response = _interopRequireDefault(require("./model/InlineResponse2002Response"));

var _InlineResponse4 = _interopRequireDefault(require("./model/InlineResponse2003"));

var _InlineResponse5 = _interopRequireDefault(require("./model/InlineResponse2004"));

var _InlineResponse2004Meta = _interopRequireDefault(require("./model/InlineResponse2004Meta"));

var _InlineResponse6 = _interopRequireDefault(require("./model/InlineResponse2005"));

var _InlineResponse7 = _interopRequireDefault(require("./model/InlineResponse401"));

var _InlineResponse8 = _interopRequireDefault(require("./model/InlineResponse403"));

var _InlineResponse9 = _interopRequireDefault(require("./model/InlineResponse404"));

var _InlineResponse10 = _interopRequireDefault(require("./model/InlineResponse422"));

var _InlineResponse11 = _interopRequireDefault(require("./model/InlineResponse500"));

var _Template = _interopRequireDefault(require("./model/Template"));

var _TemplateDefinition = _interopRequireDefault(require("./model/TemplateDefinition"));

var _TemplateDefinitionDataSettings = _interopRequireDefault(require("./model/TemplateDefinitionDataSettings"));

var _TemplateDefinitionEditor = _interopRequireDefault(require("./model/TemplateDefinitionEditor"));

var _TemplateDefinitionLayout = _interopRequireDefault(require("./model/TemplateDefinitionLayout"));

var _TemplateDefinitionNew = _interopRequireDefault(require("./model/TemplateDefinitionNew"));

var _TemplateDefinitionNewLayout = _interopRequireDefault(require("./model/TemplateDefinitionNewLayout"));

var _TemplateDefinitionNewLayoutMargins = _interopRequireDefault(require("./model/TemplateDefinitionNewLayoutMargins"));

var _TemplateDefinitionNewLayoutRepeatLayout = _interopRequireDefault(require("./model/TemplateDefinitionNewLayoutRepeatLayout"));

var _TemplateDefinitionNewMargins = _interopRequireDefault(require("./model/TemplateDefinitionNewMargins"));

var _TemplateDefinitionNewPages = _interopRequireDefault(require("./model/TemplateDefinitionNewPages"));

var _Workspace = _interopRequireDefault(require("./model/Workspace"));

var _DocumentsApi = _interopRequireDefault(require("./PDFGeneratorAPI/DocumentsApi"));

var _TemplatesApi = _interopRequireDefault(require("./PDFGeneratorAPI/TemplatesApi"));

var _WorkspacesApi = _interopRequireDefault(require("./PDFGeneratorAPI/WorkspacesApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }