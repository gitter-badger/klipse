// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.ui.editors.js');
goog.require('cljs.core');
goog.require('klipse.ui.editors.editor');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.editors.js.config_editor = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"javascript",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"overlay"], null);
klipse.ui.editors.js.placeholder_editor = ";; Press Ctrl-Enter or wait for 3 sec to transpile...";
klipse.ui.editors.js.init_editor = (function klipse$ui$editors$js$init_editor(compiler){
return klipse.ui.editors.editor.create.call(null,"code-js",klipse.ui.editors.js.config_editor);
});
/**
 * @constructor
 */
klipse.ui.editors.js.Js_editor = (function klipse$ui$editors$js$Js_editor(){
var this__23458__auto__ = this;
React.Component.apply(this__23458__auto__,arguments);

if(!((this__23458__auto__.initLocalState == null))){
this__23458__auto__.state = this__23458__auto__.initLocalState();
} else {
this__23458__auto__.state = {};
}

return this__23458__auto__;
});

klipse.ui.editors.js.Js_editor.prototype = goog.object.clone(React.Component.prototype);

var x74590_74603 = klipse.ui.editors.js.Js_editor.prototype;
x74590_74603.componentWillUpdate = ((function (x74590_74603){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
if(((!((this__23393__auto__ == null)))?(((false) || (this__23393__auto__.om$next$Ident$))?true:false):false)){
var ident__23397__auto___74604 = om.next.ident.call(null,this__23393__auto__,om.next.props.call(null,this__23393__auto__));
var next_ident__23398__auto___74605 = om.next.ident.call(null,this__23393__auto__,om.next._next_props.call(null,next_props__23394__auto__,this__23393__auto__));
if(cljs.core.not_EQ_.call(null,ident__23397__auto___74604,next_ident__23398__auto___74605)){
var idxr__23399__auto___74606 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23399__auto___74606 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23399__auto___74606),((function (idxr__23399__auto___74606,ident__23397__auto___74604,next_ident__23398__auto___74605,this__23393__auto__,x74590_74603){
return (function (indexes__23400__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23400__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23397__auto___74604], null),cljs.core.disj,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23398__auto___74605], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23393__auto__);
});})(idxr__23399__auto___74606,ident__23397__auto___74604,next_ident__23398__auto___74605,this__23393__auto__,x74590_74603))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23393__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23393__auto__);
});})(x74590_74603))
;

x74590_74603.shouldComponentUpdate = ((function (x74590_74603){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
var next_children__23396__auto__ = next_props__23394__auto__.children;
var next_props__23394__auto____$1 = goog.object.get(next_props__23394__auto__,"omcljs$value");
var next_props__23394__auto____$2 = (function (){var G__74592 = next_props__23394__auto____$1;
if((next_props__23394__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__74592);
} else {
return G__74592;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23393__auto__),next_props__23394__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__23393__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23393__auto__.state,"omcljs$state"),goog.object.get(next_state__23395__auto__,"omcljs$state"));
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__23393__auto__.props.children,next_children__23396__auto__);
}
}
});})(x74590_74603))
;

x74590_74603.componentWillUnmount = ((function (x74590_74603){
return (function (){
var this__23393__auto__ = this;
var r__23404__auto__ = om.next.get_reconciler.call(null,this__23393__auto__);
var cfg__23405__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23404__auto__);
var st__23406__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23405__auto__);
var indexer__23403__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23405__auto__);
if(cljs.core.truth_((function (){var and__6209__auto__ = !((st__23406__auto__ == null));
if(and__6209__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__23406__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__23393__auto__], null));
} else {
return and__6209__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__23406__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23393__auto__);
} else {
}

if((indexer__23403__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23403__auto__,this__23393__auto__);
}
});})(x74590_74603))
;

x74590_74603.isMounted = ((function (x74590_74603){
return (function (){
var this__23393__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23393__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x74590_74603))
;

x74590_74603.componentWillMount = ((function (x74590_74603){
return (function (){
var this__23393__auto__ = this;
var indexer__23403__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23403__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23403__auto__,this__23393__auto__);
}
});})(x74590_74603))
;

x74590_74603.componentDidUpdate = ((function (x74590_74603){
return (function (prev_props__23383__auto__,prev_state__23384__auto__){
var this__23382__auto__ = this;
var this$ = this__23382__auto__;
var prev_props = om.next._prev_props.call(null,prev_props__23383__auto__,this__23382__auto__);
var prev_state = goog.object.get(prev_state__23384__auto__,"omcljs$previousState");
var vec__74593_74607 = new cljs.core.Keyword(null,"compilation","compilation",-1328774561).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var status_74608 = cljs.core.nth.call(null,vec__74593_74607,(0),null);
var result_74609 = cljs.core.nth.call(null,vec__74593_74607,(1),null);
var editor_js_74610 = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"editor","editor",-989377770));
if(cljs.core.truth_(editor_js_74610)){
klipse.ui.editors.editor.goto_start.call(null,klipse.ui.editors.editor.auto_indent.call(null,klipse.ui.editors.editor.auto_format.call(null,klipse.ui.editors.editor.set_value.call(null,editor_js_74610,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status_74608))?result_74609:" ")))));
} else {
}

return om.next.clear_prev_props_BANG_.call(null,this__23382__auto__);
});})(x74590_74603))
;

x74590_74603.componentDidMount = ((function (x74590_74603){
return (function (){
var this$ = this;
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",-989377770),klipse.ui.editors.js.init_editor.call(null,this$)], null));
});})(x74590_74603))
;

x74590_74603.render = ((function (x74590_74603){
return (function (){
var this__23392__auto__ = this;
var this$ = this__23392__auto__;
var _STAR_reconciler_STAR_74596 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_74597 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_74598 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_74599 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_74600 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23392__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23392__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23392__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23392__auto__);

om.next._STAR_parent_STAR_ = this__23392__auto__;

try{return React.DOM.section({"className": "js-editor"},om.util.force_children.call(null,om.dom.textarea.call(null,{"id": "code-js", "placeholder": klipse.ui.editors.js.placeholder_editor})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_74600;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_74599;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_74598;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_74597;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_74596;
}});})(x74590_74603))
;


klipse.ui.editors.js.Js_editor.prototype.constructor = klipse.ui.editors.js.Js_editor;

klipse.ui.editors.js.Js_editor.prototype.constructor.displayName = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.prototype.om$isComponent = true;

var x74601_74611 = klipse.ui.editors.js.Js_editor;
x74601_74611.om$next$IQuery$ = true;

x74601_74611.om$next$IQuery$query$arity$1 = ((function (x74601_74611){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null);
});})(x74601_74611))
;


var x74602_74612 = klipse.ui.editors.js.Js_editor.prototype;
x74602_74612.om$next$IQuery$ = true;

x74602_74612.om$next$IQuery$query$arity$1 = ((function (x74602_74612){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null);
});})(x74602_74612))
;


klipse.ui.editors.js.Js_editor.cljs$lang$type = true;

klipse.ui.editors.js.Js_editor.cljs$lang$ctorStr = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.cljs$lang$ctorPrWriter = (function (this__23460__auto__,writer__23461__auto__,opt__23462__auto__){
return cljs.core._write.call(null,writer__23461__auto__,"klipse.ui.editors.js/Js-editor");
});
klipse.ui.editors.js.js_editor = om.next.factory.call(null,klipse.ui.editors.js.Js_editor);

//# sourceMappingURL=js.js.map