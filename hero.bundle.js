var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Hero/Hero.jsx
var Hero_exports = {};
__export(Hero_exports, {
  default: () => Hero
});
module.exports = __toCommonJS(Hero_exports);
var import_react = __toESM(require("react"), 1);
var import_hi = require("react-icons/hi");
var import_react_countup = __toESM(require("react-countup"), 1);
function Hero() {
  console.log("CountUp type:", typeof import_react_countup.default, "Value:", import_react_countup.default);
  return /* @__PURE__ */ import_react.default.createElement("section", { className: "hero-wrapper" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "paddings innerWidth flexCenter hero-container" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "flexColStart hero-left" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "hero-title" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "orange-circle" }), /* @__PURE__ */ import_react.default.createElement("h1", null, "Discover ", /* @__PURE__ */ import_react.default.createElement("br", null), " Most Suitable ", /* @__PURE__ */ import_react.default.createElement("br", null), " Property")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flexColStart hero-des" }, /* @__PURE__ */ import_react.default.createElement("span", null, "Find a variety of properties that suit you very easily"), /* @__PURE__ */ import_react.default.createElement("span", null, "Forget all difficulties in finding a residence for you")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flexCenter search-bar" }, /* @__PURE__ */ import_react.default.createElement(import_hi.HiLocationMarker, { color: "var(--blue)", size: 25 }), /* @__PURE__ */ import_react.default.createElement("input", { type: "text" }), /* @__PURE__ */ import_react.default.createElement("button", { className: "button" }, "Search")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flexCenter stats" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement(import_react_countup.default, { start: 0, end: 900, duration: 4 }), /* @__PURE__ */ import_react.default.createElement("span", null, "+")), /* @__PURE__ */ import_react.default.createElement("span", null, "Premium Products")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flexCenter stats" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement(import_react_countup.default, { start: 200, end: 2e3, duration: 4 }), /* @__PURE__ */ import_react.default.createElement("span", null, "+")), /* @__PURE__ */ import_react.default.createElement("span", null, "Happy Customers")), /* @__PURE__ */ import_react.default.createElement("div", { className: "flexCenter stats" }, /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement(import_react_countup.default, { end: 20 }), /* @__PURE__ */ import_react.default.createElement("span", null, "+")), /* @__PURE__ */ import_react.default.createElement("span", null, "Award Winnings"))), /* @__PURE__ */ import_react.default.createElement("div", { className: "flexCenter hero-right" }, /* @__PURE__ */ import_react.default.createElement("div", { className: "image-container" }, /* @__PURE__ */ import_react.default.createElement("img", { src: "./hero-image.png", alt: "" })))));
}
