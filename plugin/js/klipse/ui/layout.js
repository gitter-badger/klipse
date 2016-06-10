// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.ui.layout');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('klipse.ui.editors.cljs');
goog.require('klipse.ui.editors.js');
goog.require('klipse.ui.outputs.cljs');
goog.require('klipse.ui.outputs.js');
/**
 * @constructor
 */
klipse.ui.layout.Layout = (function klipse$ui$layout$Layout(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.ui.layout.Layout.prototype = goog.object.clone(React.Component.prototype);

var x58266_58320 = klipse.ui.layout.Layout.prototype;
x58266_58320.componentWillUpdate = ((function (x58266_58320){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___58321 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___58322 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___58321,next_ident__21730__auto___58322)){
var idxr__21731__auto___58323 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___58323 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___58323),((function (idxr__21731__auto___58323,ident__21729__auto___58321,next_ident__21730__auto___58322,this__21725__auto__,x58266_58320){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___58321], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___58322], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___58323,ident__21729__auto___58321,next_ident__21730__auto___58322,this__21725__auto__,x58266_58320))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x58266_58320))
;

x58266_58320.shouldComponentUpdate = ((function (x58266_58320){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__58268 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__58268);
} else {
return G__58268;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__58273 = this__21725__auto__.state;
var G__58274 = "omcljs$state";
return goog.object.get(G__58273,G__58274);
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
});})(x58266_58320))
;

x58266_58320.componentWillUnmount = ((function (x58266_58320){
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
});})(x58266_58320))
;

x58266_58320.componentDidUpdate = ((function (x58266_58320){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x58266_58320))
;

x58266_58320.isMounted = ((function (x58266_58320){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x58266_58320))
;

x58266_58320.componentWillMount = ((function (x58266_58320){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x58266_58320))
;

x58266_58320.render = ((function (x58266_58320){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_58275 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_58276 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_58277 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_58278 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_58279 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var map__58280 = om.next.props(this$);
var map__58280__$1 = ((((!((map__58280 == null)))?((((map__58280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__58280):map__58280);
var code_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58280__$1,cljs.core.cst$kw$code_DASH_layout);
var G__58282 = (((code_layout instanceof cljs.core.Keyword))?code_layout.fqn:null);
switch (G__58282) {
case "eval-only":
var G__58283 = {"className": "klipse-layout klipse-layout-eval-only"};
var G__58284 = om.util.force_children((function (){var G__58286 = {"className": "klipse-item"};
var G__58287 = om.util.force_children((function (){var G__58288 = om.next.props(this$);
return (klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1(G__58288) : klipse.ui.editors.cljs.cljs_editor.call(null,G__58288));
})());
return React.DOM.div(G__58286,G__58287);
})());
var G__58285 = om.util.force_children((function (){var G__58289 = {"className": "klipse-item"};
var G__58290 = om.util.force_children((function (){var G__58291 = om.next.props(this$);
return (klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1(G__58291) : klipse.ui.outputs.cljs.cljs_textarea.call(null,G__58291));
})());
return React.DOM.div(G__58289,G__58290);
})());
return React.DOM.div(G__58283,G__58284,G__58285);

break;
case "js-only":
var G__58292 = {"className": "klipse-layout klipse-layout-js-only"};
var G__58293 = om.util.force_children((function (){var G__58295 = {"className": "klipse-item"};
var G__58296 = om.util.force_children((function (){var G__58297 = om.next.props(this$);
return (klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1(G__58297) : klipse.ui.editors.cljs.cljs_editor.call(null,G__58297));
})());
return React.DOM.div(G__58295,G__58296);
})());
var G__58294 = om.util.force_children((function (){var G__58298 = {"className": "klipse-item"};
var G__58299 = om.util.force_children((function (){var G__58300 = om.next.props(this$);
return (klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1(G__58300) : klipse.ui.editors.js.js_editor.call(null,G__58300));
})());
return React.DOM.div(G__58298,G__58299);
})());
return React.DOM.div(G__58292,G__58293,G__58294);

break;
default:
var G__58301 = {"className": "klipse-layout klipse-layout-global"};
var G__58302 = om.util.force_children((function (){var G__58306 = {"className": "klipse-item"};
var G__58307 = om.util.force_children((function (){var G__58308 = om.next.props(this$);
return (klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1(G__58308) : klipse.ui.editors.cljs.cljs_editor.call(null,G__58308));
})());
return React.DOM.div(G__58306,G__58307);
})());
var G__58303 = om.util.force_children((function (){var G__58309 = {"className": "klipse-item"};
var G__58310 = om.util.force_children((function (){var G__58311 = om.next.props(this$);
return (klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1(G__58311) : klipse.ui.editors.js.js_editor.call(null,G__58311));
})());
return React.DOM.div(G__58309,G__58310);
})());
var G__58304 = om.util.force_children((function (){var G__58312 = {"className": "klipse-item"};
var G__58313 = om.util.force_children((function (){var G__58314 = om.next.props(this$);
return (klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1(G__58314) : klipse.ui.outputs.cljs.cljs_textarea.call(null,G__58314));
})());
return React.DOM.div(G__58312,G__58313);
})());
var G__58305 = om.util.force_children((function (){var G__58315 = {"className": "klipse-item"};
var G__58316 = om.util.force_children((function (){var G__58317 = om.next.props(this$);
return (klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1(G__58317) : klipse.ui.outputs.js.js_textarea.call(null,G__58317));
})());
return React.DOM.div(G__58315,G__58316);
})());
return React.DOM.div(G__58301,G__58302,G__58303,G__58304,G__58305);

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_58279;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_58278;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_58277;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_58276;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_58275;
}});})(x58266_58320))
;


klipse.ui.layout.Layout.prototype.constructor = klipse.ui.layout.Layout;

klipse.ui.layout.Layout.prototype.constructor.displayName = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.prototype.om$isComponent = true;

var x58318_58325 = klipse.ui.layout.Layout;
x58318_58325.om$next$IQuery$ = true;

x58318_58325.om$next$IQuery$query$arity$1 = ((function (x58318_58325){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code_DASH_layout),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.array_seq([(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$compilation),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.js.Js_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_clj),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_js),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()], 0)))));
});})(x58318_58325))
;


var x58319_58326 = klipse.ui.layout.Layout.prototype;
x58319_58326.om$next$IQuery$ = true;

x58319_58326.om$next$IQuery$query$arity$1 = ((function (x58319_58326){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code_DASH_layout),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.array_seq([(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$compilation),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.js.Js_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_clj),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_js),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()], 0)))));
});})(x58319_58326))
;


klipse.ui.layout.Layout.cljs$lang$type = true;

klipse.ui.layout.Layout.cljs$lang$ctorStr = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.ui.layout/Layout");
});
klipse.ui.layout.layout = om.next.factory.cljs$core$IFn$_invoke$arity$1(klipse.ui.layout.Layout);
