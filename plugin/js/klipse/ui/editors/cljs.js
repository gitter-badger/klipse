// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.ui.editors.cljs');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('klipse.ui.editors.editor');
goog.require('klipse.utils');
goog.require('klipse.ui.editors.common');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('om.next');
klipse.ui.editors.cljs.config_editor = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$lineNumbers,true,cljs.core.cst$kw$matchBrackets,true,cljs.core.cst$kw$mode,"clojure",cljs.core.cst$kw$scrollbarStyle,"overlay"], null);
klipse.ui.editors.cljs.placeholder_editor = [cljs.core.str(";; Write your clojurescript expression \n"),cljs.core.str(";; and press Ctrl-Enter or wait for 3 sec to experiment the magic...")].join('');
klipse.ui.editors.cljs.process_input = (function klipse$ui$editors$cljs$process_input(component,s){
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__7055__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,s], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$input_SLASH_save),cljs.core._conj((function (){var x__7055__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,s], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$cljs_SLASH_compile),cljs.core._conj((function (){var x__7055__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,s], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$js_SLASH_eval),cljs.core._conj((function (){var x__7055__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,s], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$clj_SLASH_eval)], null));
}
});
klipse.ui.editors.cljs.init_input = (function klipse$ui$editors$cljs$init_input(component,s){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj((function (){var x__7055__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,s], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$input_SLASH_save)], null));
});
klipse.ui.editors.cljs.init_editor = (function klipse$ui$editors$cljs$init_editor(compiler){
var $ = klipse.ui.editors.editor.create("code-cljs",klipse.ui.editors.cljs.config_editor);
return klipse.ui.editors.common.handle_events($,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$idle_DASH_msec,(3000),cljs.core.cst$kw$on_DASH_should_DASH_eval,((function ($){
return (function (){
return klipse.ui.editors.cljs.process_input(compiler,klipse.ui.editors.editor.get_value($));
});})($))
], null));
});
/**
 * @constructor
 */
klipse.ui.editors.cljs.Cljs_editor = (function klipse$ui$editors$cljs$Cljs_editor(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.ui.editors.cljs.Cljs_editor.prototype = goog.object.clone(React.Component.prototype);

var x57297_57316 = klipse.ui.editors.cljs.Cljs_editor.prototype;
x57297_57316.componentWillUpdate = ((function (x57297_57316){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___57317 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___57318 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___57317,next_ident__21730__auto___57318)){
var idxr__21731__auto___57319 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___57319 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___57319),((function (idxr__21731__auto___57319,ident__21729__auto___57317,next_ident__21730__auto___57318,this__21725__auto__,x57297_57316){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___57317], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___57318], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___57319,ident__21729__auto___57317,next_ident__21730__auto___57318,this__21725__auto__,x57297_57316))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x57297_57316))
;

x57297_57316.shouldComponentUpdate = ((function (x57297_57316){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__57299 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__57299);
} else {
return G__57299;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__57304 = this__21725__auto__.state;
var G__57305 = "omcljs$state";
return goog.object.get(G__57304,G__57305);
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
});})(x57297_57316))
;

x57297_57316.componentWillUnmount = ((function (x57297_57316){
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
});})(x57297_57316))
;

x57297_57316.componentDidUpdate = ((function (x57297_57316){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x57297_57316))
;

x57297_57316.isMounted = ((function (x57297_57316){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x57297_57316))
;

x57297_57316.componentWillMount = ((function (x57297_57316){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x57297_57316))
;

x57297_57316.componentDidMount = ((function (x57297_57316){
return (function (){
var this$ = this;
return klipse.ui.editors.cljs.init_editor(this$);
});})(x57297_57316))
;

x57297_57316.render = ((function (x57297_57316){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_57306 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_57307 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_57308 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_57309 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_57310 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var input = cljs.core.cst$kw$input.cljs$core$IFn$_invoke$arity$2(om.next.props(this$),cljs.core.cst$kw$cljs_in.cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters()));
var G__57311 = {"className": "cljs-editor"};
var G__57312 = om.util.force_children((function (){var G__57313 = {"autoFocus": true, "value": input, "id": "code-cljs", "placeholder": klipse.ui.editors.cljs.placeholder_editor};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__57313) : om.dom.textarea.call(null,G__57313));
})());
return React.DOM.section(G__57311,G__57312);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_57310;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_57309;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_57308;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_57307;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_57306;
}});})(x57297_57316))
;


klipse.ui.editors.cljs.Cljs_editor.prototype.constructor = klipse.ui.editors.cljs.Cljs_editor;

klipse.ui.editors.cljs.Cljs_editor.prototype.constructor.displayName = "klipse.ui.editors.cljs/Cljs-editor";

klipse.ui.editors.cljs.Cljs_editor.prototype.om$isComponent = true;

var x57314_57320 = klipse.ui.editors.cljs.Cljs_editor;
x57314_57320.om$next$IQuery$ = true;

x57314_57320.om$next$IQuery$query$arity$1 = ((function (x57314_57320){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input], null);
});})(x57314_57320))
;


var x57315_57321 = klipse.ui.editors.cljs.Cljs_editor.prototype;
x57315_57321.om$next$IQuery$ = true;

x57315_57321.om$next$IQuery$query$arity$1 = ((function (x57315_57321){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input], null);
});})(x57315_57321))
;


klipse.ui.editors.cljs.Cljs_editor.cljs$lang$type = true;

klipse.ui.editors.cljs.Cljs_editor.cljs$lang$ctorStr = "klipse.ui.editors.cljs/Cljs-editor";

klipse.ui.editors.cljs.Cljs_editor.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.ui.editors.cljs/Cljs-editor");
});
klipse.ui.editors.cljs.cljs_editor = om.next.factory.cljs$core$IFn$_invoke$arity$1(klipse.ui.editors.cljs.Cljs_editor);
