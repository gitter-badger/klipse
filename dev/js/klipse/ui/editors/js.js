// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.ui.editors.js');
goog.require('cljs.core');
goog.require('klipse.ui.editors.editor');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.editors.js.config_editor = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$lineNumbers,true,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$autoCloseBrackets,true,cljs.core.cst$kw$mode,"javascript",cljs.core.cst$kw$readOnly,true,cljs.core.cst$kw$scrollbarStyle,"overlay"], null);
klipse.ui.editors.js.placeholder_editor = ";; Press Ctrl-Enter or wait for 3 sec to transpile...";
klipse.ui.editors.js.init_editor = (function klipse$ui$editors$js$init_editor(compiler){
return klipse.ui.editors.editor.create("code-js",klipse.ui.editors.js.config_editor);
});
/**
 * @constructor
 */
klipse.ui.editors.js.Js_editor = (function klipse$ui$editors$js$Js_editor(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.ui.editors.js.Js_editor.prototype = goog.object.clone(React.Component.prototype);

var x31319_31351 = klipse.ui.editors.js.Js_editor.prototype;
x31319_31351.componentWillUpdate = ((function (x31319_31351){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___31352 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___31353 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___31352,next_ident__21730__auto___31353)){
var idxr__21731__auto___31358 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___31358 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___31358),((function (idxr__21731__auto___31358,ident__21729__auto___31352,next_ident__21730__auto___31353,this__21725__auto__,x31319_31351){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___31352], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___31353], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___31358,ident__21729__auto___31352,next_ident__21730__auto___31353,this__21725__auto__,x31319_31351))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x31319_31351))
;

x31319_31351.shouldComponentUpdate = ((function (x31319_31351){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__31323 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__31323);
} else {
return G__31323;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31333 = this__21725__auto__.state;
var G__31334 = "omcljs$state";
return goog.object.get(G__31333,G__31334);
})(),goog.object.get(next_state__21727__auto__,"omcljs$state"));
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(this__21725__auto__.props.children,next_children__21728__auto__);
}
}
});})(x31319_31351))
;

x31319_31351.componentWillUnmount = ((function (x31319_31351){
return (function (){
var this__21725__auto__ = this;
var r__21736__auto__ = om.next.get_reconciler(this__21725__auto__);
var cfg__21737__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__21736__auto__);
var st__21738__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__21737__auto__);
var indexer__21735__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__21737__auto__);
if(cljs.core.truth_((function (){var and__6209__auto__ = !((st__21738__auto__ == null));
if(and__6209__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st__21738__auto__) : cljs.core.deref.call(null,st__21738__auto__)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,this__21725__auto__], null));
} else {
return and__6209__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__21738__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__21725__auto__], 0));
} else {
}

if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x31319_31351))
;

x31319_31351.isMounted = ((function (x31319_31351){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31319_31351))
;

x31319_31351.componentWillMount = ((function (x31319_31351){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x31319_31351))
;

x31319_31351.componentDidUpdate = ((function (x31319_31351){
return (function (prev_props__21715__auto__,prev_state__21716__auto__){
var this__21714__auto__ = this;
var this$ = this__21714__auto__;
var prev_props = om.next._prev_props(prev_props__21715__auto__,this__21714__auto__);
var prev_state = goog.object.get(prev_state__21716__auto__,"omcljs$previousState");
var vec__31338_31367 = cljs.core.cst$kw$compilation.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var status_31368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31338_31367,(0),null);
var result_31369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31338_31367,(1),null);
var editor_js_31370 = om.next.get_state.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.cst$kw$editor);
if(cljs.core.truth_(editor_js_31370)){
klipse.ui.editors.editor.goto_start(klipse.ui.editors.editor.auto_indent(klipse.ui.editors.editor.auto_format(klipse.ui.editors.editor.set_value(editor_js_31370,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ok,status_31368))?result_31369:" ")))));
} else {
}

return om.next.clear_prev_props_BANG_(this__21714__auto__);
});})(x31319_31351))
;

x31319_31351.componentDidMount = ((function (x31319_31351){
return (function (){
var this$ = this;
return om.next.set_state_BANG_(this$,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$editor,klipse.ui.editors.js.init_editor(this$)], null));
});})(x31319_31351))
;

x31319_31351.render = ((function (x31319_31351){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_31341 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31342 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31343 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31344 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31345 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var G__31346 = {"className": "js-editor"};
var G__31347 = om.util.force_children((function (){var G__31348 = {"id": "code-js", "placeholder": klipse.ui.editors.js.placeholder_editor};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__31348) : om.dom.textarea.call(null,G__31348));
})());
return React.DOM.section(G__31346,G__31347);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31345;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31344;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31343;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31342;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31341;
}});})(x31319_31351))
;


klipse.ui.editors.js.Js_editor.prototype.constructor = klipse.ui.editors.js.Js_editor;

klipse.ui.editors.js.Js_editor.prototype.constructor.displayName = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.prototype.om$isComponent = true;

var x31349_31374 = klipse.ui.editors.js.Js_editor;
x31349_31374.om$next$IQuery$ = true;

x31349_31374.om$next$IQuery$query$arity$1 = ((function (x31349_31374){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compilation], null);
});})(x31349_31374))
;


var x31350_31375 = klipse.ui.editors.js.Js_editor.prototype;
x31350_31375.om$next$IQuery$ = true;

x31350_31375.om$next$IQuery$query$arity$1 = ((function (x31350_31375){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compilation], null);
});})(x31350_31375))
;


klipse.ui.editors.js.Js_editor.cljs$lang$type = true;

klipse.ui.editors.js.Js_editor.cljs$lang$ctorStr = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.ui.editors.js/Js-editor");
});
klipse.ui.editors.js.js_editor = om.next.factory.cljs$core$IFn$_invoke$arity$1(klipse.ui.editors.js.Js_editor);
