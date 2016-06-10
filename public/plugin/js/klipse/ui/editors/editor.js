// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.ui.editors.editor');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('gadjett.core');
if(cljs.core.truth_(window.initMirrorCustomExtensions)){
window.initMirrorCustomExtensions();
} else {
}
klipse.ui.editors.editor.create = (function klipse$ui$editors$editor$create(dom_id,config){
var G__56896 = document.getElementById(dom_id);
var G__56897 = cljs.core.clj__GT_js(config);
return CodeMirror.fromTextArea(G__56896,G__56897);
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
klipse.ui.editors.editor.select_all(editor);

var from_56898 = editor.getCursor(true);
var to_56899 = editor.getCursor(false);
editor.autoFormatRange(from_56898,to_56899);

return editor;
});
klipse.ui.editors.editor.auto_indent = (function klipse$ui$editors$editor$auto_indent(editor){
klipse.ui.editors.editor.select_all(editor);

var from_56900 = editor.getCursor(true);
var to_56901 = editor.getCursor(false);
editor.autoIndentRange(from_56900,to_56901);

return editor;
});
klipse.ui.editors.editor.replace_element_by_editor = (function klipse$ui$editors$editor$replace_element_by_editor(element,value,opts){
var editor = (function (){var G__56904 = (function (elt){
return goog.dom.replaceNode(elt,element);
});
var G__56905 = cljs.core.clj__GT_js(opts);
return CodeMirror(G__56904,G__56905);
})();
return klipse.ui.editors.editor.goto_start(klipse.ui.editors.editor.auto_indent(klipse.ui.editors.editor.auto_format(klipse.ui.editors.editor.set_value(editor,value))));
});
klipse.ui.editors.editor.create_div_after = (function klipse$ui$editors$editor$create_div_after(element){
var div = (function (){var G__56909 = "div";
var G__56910 = null;
var G__56911 = goog.dom.createTextNode("");
return goog.dom.createDom(G__56909,G__56910,G__56911);
})();
goog.dom.insertSiblingAfter(div,element);

return div;
});
klipse.ui.editors.editor.create_editor_after_element = (function klipse$ui$editors$editor$create_editor_after_element(element,value,opts){
return klipse.ui.editors.editor.replace_element_by_editor(klipse.ui.editors.editor.create_div_after(element),value,opts);
});
