var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var long_time_waiting_exports = {};
__export(long_time_waiting_exports, {
  activate: () => activate
});
module.exports = __toCommonJS(long_time_waiting_exports);
var import_coc = require("coc.nvim");
function waiting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 5e3);
  });
}
var activate = async (context) => {
  const languageProvider = {
    async provideCompletionItems() {
      let completionList = null;
      const res = await waiting();
      completionList = {
        items: res,
        isIncomplete: false
      };
      return completionList;
    }
  };
  context.subscriptions.push(
    import_coc.languages.registerCompletionItemProvider(
      "test",
      "test",
      null,
      languageProvider
    )
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate
});
//# sourceMappingURL=index.js.map
