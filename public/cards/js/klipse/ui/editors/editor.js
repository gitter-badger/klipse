// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.ui.editors.editor');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('cljsjs.codemirror');
goog.require('cljsjs.codemirror.addon.display.placeholder');
goog.require('cljsjs.codemirror.mode.clojure');
goog.require('cljsjs.codemirror.mode.javascript');
goog.require('gadjett.core');
goog.require('cljsjs.codemirror.addon.edit.matchbrackets');
goog.require('cljsjs.codemirror.addon.scroll.simplescrollbars');
if(cljs.core.truth_(window.initMirrorCustomExtensions)){
window.initMirrorCustomExtensions();
} else {
}
klipse.ui.editors.editor.create = (function klipse$ui$editors$editor$create(dom_id,config){
return CodeMirror.fromTextArea(document.getElementById(dom_id),cljs.core.clj__GT_js.call(null,config));
});
klipse.ui.editors.editor.get_value = (function klipse$ui$editors$editor$get_value(editor){
return editor.getValue();
});
klipse.ui.editors.editor.set_value = (function klipse$ui$editors$editor$set_value(editor,value){
editor.setValue(value);

return editor;
});
klipse.ui.editors.editor.on_change = (function klipse$ui$editors$editor$on_change(editor,f){
return editor.on("change",f);
});
klipse.ui.editors.editor.set_option = (function klipse$ui$editors$editor$set_option(editor,option,value){
return editor.setOption(option,value);
});
klipse.ui.editors.editor.select_all = (function klipse$ui$editors$editor$select_all(editor){
CodeMirror.commands.selectAll(editor);

return editor;
});
klipse.ui.editors.editor.goto_start = (function klipse$ui$editors$editor$goto_start(editor){
CodeMirror.commands.goDocStart(editor);

return editor;
});
klipse.ui.editors.editor.auto_format = (function klipse$ui$editors$editor$auto_format(editor){
klipse.ui.editors.editor.select_all.call(null,editor);

var from_74580 = editor.getCursor(true);
var to_74581 = editor.getCursor(false);
editor.autoFormatRange(from_74580,to_74581);

return editor;
});
klipse.ui.editors.editor.auto_indent = (function klipse$ui$editors$editor$auto_indent(editor){
klipse.ui.editors.editor.select_all.call(null,editor);

var from_74582 = editor.getCursor(true);
var to_74583 = editor.getCursor(false);
editor.autoIndentRange(from_74582,to_74583);

return editor;
});
klipse.ui.editors.editor.replace_element_by_editor = (function klipse$ui$editors$editor$replace_element_by_editor(element,value,opts){
var editor = CodeMirror((function (elt){
return goog.dom.replaceNode(elt,element);
}),cljs.core.clj__GT_js.call(null,opts));
return klipse.ui.editors.editor.goto_start.call(null,klipse.ui.editors.editor.auto_indent.call(null,klipse.ui.editors.editor.auto_format.call(null,klipse.ui.editors.editor.set_value.call(null,editor,value))));
});
klipse.ui.editors.editor.create_div_after = (function klipse$ui$editors$editor$create_div_after(element){
var div = goog.dom.createDom("div",null,goog.dom.createTextNode(""));
goog.dom.insertSiblingAfter(div,element);

return div;
});
klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(element,value,opts){
return klipse.ui.editors.editor.replace_element_by_editor.call(null,klipse.ui.editors.editor.create_div_after.call(null,element),value,opts);
});

//# sourceMappingURL=editor.js.map