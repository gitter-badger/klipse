// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.cards.ui.outputs');
goog.require('cljs.core');
goog.require('klipse.ui.outputs.cljs');
goog.require('klipse.ui.outputs.js');
goog.require('om.next');
goog.require('om.dom');
goog.require('devcards_om_next.core');
goog.require('devcards.core');
if(typeof klipse.cards.ui.outputs.Output_cljs_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.outputs.Output_cljs_computed = (function klipse$cards$ui$outputs$Output_cljs_computed(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.cards.ui.outputs.Output_cljs_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x60273_60303 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x60273_60303.componentWillUpdate = ((function (x60273_60303){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___60304 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___60305 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___60304,next_ident__21730__auto___60305)){
var idxr__21731__auto___60306 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___60306 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___60306),((function (idxr__21731__auto___60306,ident__21729__auto___60304,next_ident__21730__auto___60305,this__21725__auto__,x60273_60303){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___60304], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___60305], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___60306,ident__21729__auto___60304,next_ident__21730__auto___60305,this__21725__auto__,x60273_60303))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x60273_60303))
;

x60273_60303.shouldComponentUpdate = ((function (x60273_60303){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__60275 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__60275);
} else {
return G__60275;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__60280 = this__21725__auto__.state;
var G__60281 = "omcljs$state";
return goog.object.get(G__60280,G__60281);
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
});})(x60273_60303))
;

x60273_60303.componentWillUnmount = ((function (x60273_60303){
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
});})(x60273_60303))
;

x60273_60303.componentDidUpdate = ((function (x60273_60303){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x60273_60303))
;

x60273_60303.isMounted = ((function (x60273_60303){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x60273_60303))
;

x60273_60303.componentWillMount = ((function (x60273_60303){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x60273_60303))
;

x60273_60303.render = ((function (x60273_60303){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_60282 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_60283 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_60284 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_60285 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_60286 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var G__60287 = {"className": "dev-cards-section"};
var G__60288 = om.util.force_children((function (){var G__60290 = {"className": "toolbox"};
var G__60291 = om.util.force_children((function (){var G__60294 = {"onClick": ((function (G__60290,G__60287,_STAR_reconciler_STAR_60282,_STAR_depth_STAR_60283,_STAR_shared_STAR_60284,_STAR_instrument_STAR_60285,_STAR_parent_STAR_60286,this$,this__21724__auto__,x60273_60303){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_cljs_SLASH_success)], null));
});})(G__60290,G__60287,_STAR_reconciler_STAR_60282,_STAR_depth_STAR_60283,_STAR_shared_STAR_60284,_STAR_instrument_STAR_60285,_STAR_parent_STAR_60286,this$,this__21724__auto__,x60273_60303))
};
var G__60295 = om.util.force_children("Emulate success");
return React.DOM.button(G__60294,G__60295);
})());
var G__60292 = om.util.force_children((function (){var G__60296 = {"onClick": ((function (G__60290,G__60291,G__60287,_STAR_reconciler_STAR_60282,_STAR_depth_STAR_60283,_STAR_shared_STAR_60284,_STAR_instrument_STAR_60285,_STAR_parent_STAR_60286,this$,this__21724__auto__,x60273_60303){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_cljs_SLASH_error)], null));
});})(G__60290,G__60291,G__60287,_STAR_reconciler_STAR_60282,_STAR_depth_STAR_60283,_STAR_shared_STAR_60284,_STAR_instrument_STAR_60285,_STAR_parent_STAR_60286,this$,this__21724__auto__,x60273_60303))
};
var G__60297 = om.util.force_children("Emulate error");
return React.DOM.button(G__60296,G__60297);
})());
var G__60293 = om.util.force_children((function (){var G__60298 = {"onClick": ((function (G__60290,G__60291,G__60292,G__60287,_STAR_reconciler_STAR_60282,_STAR_depth_STAR_60283,_STAR_shared_STAR_60284,_STAR_instrument_STAR_60285,_STAR_parent_STAR_60286,this$,this__21724__auto__,x60273_60303){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_cljs_SLASH_default)], null));
});})(G__60290,G__60291,G__60292,G__60287,_STAR_reconciler_STAR_60282,_STAR_depth_STAR_60283,_STAR_shared_STAR_60284,_STAR_instrument_STAR_60285,_STAR_parent_STAR_60286,this$,this__21724__auto__,x60273_60303))
};
var G__60299 = om.util.force_children("Emulate empty");
return React.DOM.button(G__60298,G__60299);
})());
return React.DOM.div(G__60290,G__60291,G__60292,G__60293);
})());
var G__60289 = om.util.force_children((function (){var G__60300 = om.next.props(this$);
return (klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1(G__60300) : klipse.ui.outputs.cljs.cljs_textarea.call(null,G__60300));
})());
return React.DOM.div(G__60287,G__60288,G__60289);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_60286;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_60285;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_60284;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_60283;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_60282;
}});})(x60273_60303))
;


klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor = klipse.cards.ui.outputs.Output_cljs_computed;

klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.prototype.om$isComponent = true;

var x60301_60307 = klipse.cards.ui.outputs.Output_cljs_computed;
x60301_60307.om$next$IQuery$ = true;

x60301_60307.om$next$IQuery$query$arity$1 = ((function (x60301_60307){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_clj], null);
});})(x60301_60307))
;


var x60302_60308 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x60302_60308.om$next$IQuery$ = true;

x60302_60308.om$next$IQuery$query$arity$1 = ((function (x60302_60308){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_clj], null);
});})(x60302_60308))
;


klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.cards.ui.outputs/Output-cljs-computed");
});
if(typeof klipse.cards.ui.outputs.Output_js_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.outputs.Output_js_computed = (function klipse$cards$ui$outputs$Output_js_computed(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.cards.ui.outputs.Output_js_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x60313_60343 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x60313_60343.componentWillUpdate = ((function (x60313_60343){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___60344 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___60345 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___60344,next_ident__21730__auto___60345)){
var idxr__21731__auto___60346 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___60346 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___60346),((function (idxr__21731__auto___60346,ident__21729__auto___60344,next_ident__21730__auto___60345,this__21725__auto__,x60313_60343){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___60344], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___60345], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___60346,ident__21729__auto___60344,next_ident__21730__auto___60345,this__21725__auto__,x60313_60343))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x60313_60343))
;

x60313_60343.shouldComponentUpdate = ((function (x60313_60343){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__60315 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__60315);
} else {
return G__60315;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__60320 = this__21725__auto__.state;
var G__60321 = "omcljs$state";
return goog.object.get(G__60320,G__60321);
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
});})(x60313_60343))
;

x60313_60343.componentWillUnmount = ((function (x60313_60343){
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
});})(x60313_60343))
;

x60313_60343.componentDidUpdate = ((function (x60313_60343){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x60313_60343))
;

x60313_60343.isMounted = ((function (x60313_60343){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x60313_60343))
;

x60313_60343.componentWillMount = ((function (x60313_60343){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x60313_60343))
;

x60313_60343.render = ((function (x60313_60343){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_60322 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_60323 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_60324 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_60325 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_60326 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var G__60327 = {"className": "dev-cards-section"};
var G__60328 = om.util.force_children((function (){var G__60330 = {"className": "toolbox"};
var G__60331 = om.util.force_children((function (){var G__60334 = {"onClick": ((function (G__60330,G__60327,_STAR_reconciler_STAR_60322,_STAR_depth_STAR_60323,_STAR_shared_STAR_60324,_STAR_instrument_STAR_60325,_STAR_parent_STAR_60326,this$,this__21724__auto__,x60313_60343){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_js_SLASH_success)], null));
});})(G__60330,G__60327,_STAR_reconciler_STAR_60322,_STAR_depth_STAR_60323,_STAR_shared_STAR_60324,_STAR_instrument_STAR_60325,_STAR_parent_STAR_60326,this$,this__21724__auto__,x60313_60343))
};
var G__60335 = om.util.force_children("Emulate success");
return React.DOM.button(G__60334,G__60335);
})());
var G__60332 = om.util.force_children((function (){var G__60336 = {"onClick": ((function (G__60330,G__60331,G__60327,_STAR_reconciler_STAR_60322,_STAR_depth_STAR_60323,_STAR_shared_STAR_60324,_STAR_instrument_STAR_60325,_STAR_parent_STAR_60326,this$,this__21724__auto__,x60313_60343){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_js_SLASH_error)], null));
});})(G__60330,G__60331,G__60327,_STAR_reconciler_STAR_60322,_STAR_depth_STAR_60323,_STAR_shared_STAR_60324,_STAR_instrument_STAR_60325,_STAR_parent_STAR_60326,this$,this__21724__auto__,x60313_60343))
};
var G__60337 = om.util.force_children("Emulate error");
return React.DOM.button(G__60336,G__60337);
})());
var G__60333 = om.util.force_children((function (){var G__60338 = {"onClick": ((function (G__60330,G__60331,G__60332,G__60327,_STAR_reconciler_STAR_60322,_STAR_depth_STAR_60323,_STAR_shared_STAR_60324,_STAR_instrument_STAR_60325,_STAR_parent_STAR_60326,this$,this__21724__auto__,x60313_60343){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_js_SLASH_default)], null));
});})(G__60330,G__60331,G__60332,G__60327,_STAR_reconciler_STAR_60322,_STAR_depth_STAR_60323,_STAR_shared_STAR_60324,_STAR_instrument_STAR_60325,_STAR_parent_STAR_60326,this$,this__21724__auto__,x60313_60343))
};
var G__60339 = om.util.force_children("Emulate empty");
return React.DOM.button(G__60338,G__60339);
})());
return React.DOM.div(G__60330,G__60331,G__60332,G__60333);
})());
var G__60329 = om.util.force_children((function (){var G__60340 = om.next.props(this$);
return (klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1(G__60340) : klipse.ui.outputs.js.js_textarea.call(null,G__60340));
})());
return React.DOM.div(G__60327,G__60328,G__60329);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_60326;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_60325;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_60324;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_60323;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_60322;
}});})(x60313_60343))
;


klipse.cards.ui.outputs.Output_js_computed.prototype.constructor = klipse.cards.ui.outputs.Output_js_computed;

klipse.cards.ui.outputs.Output_js_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.prototype.om$isComponent = true;

var x60341_60347 = klipse.cards.ui.outputs.Output_js_computed;
x60341_60347.om$next$IQuery$ = true;

x60341_60347.om$next$IQuery$query$arity$1 = ((function (x60341_60347){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_js], null);
});})(x60341_60347))
;


var x60342_60348 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x60342_60348.om$next$IQuery$ = true;

x60342_60348.om$next$IQuery$query$arity$1 = ((function (x60342_60348){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_js], null);
});})(x60342_60348))
;


klipse.cards.ui.outputs.Output_js_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.cards.ui.outputs/Output-js-computed");
});
klipse.cards.ui.outputs.read = (function klipse$cards$ui$outputs$read(p__60349,key,params){
var map__60352 = p__60349;
var map__60352__$1 = ((((!((map__60352 == null)))?((((map__60352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60352):map__60352);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60352__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,"")], null);
});
if(typeof klipse.cards.ui.outputs.mutate !== 'undefined'){
} else {
klipse.cards.ui.outputs.mutate = (function (){var method_table__7146__auto__ = (function (){var G__60354 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__60354) : cljs.core.atom.call(null,G__60354));
})();
var prefer_table__7147__auto__ = (function (){var G__60355 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__60355) : cljs.core.atom.call(null,G__60355));
})();
var method_cache__7148__auto__ = (function (){var G__60356 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__60356) : cljs.core.atom.call(null,G__60356));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__60357 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__60357) : cljs.core.atom.call(null,G__60357));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("klipse.cards.ui.outputs","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_cljs_SLASH_default,(function (p__60358,_,___$1){
var map__60359 = p__60358;
var map__60359__$1 = ((((!((map__60359 == null)))?((((map__60359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60359):map__60359);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60359__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__60359,map__60359__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$evaluation_DASH_clj);
});})(map__60359,map__60359__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_cljs_SLASH_error,(function (p__60361,_,___$1){
var map__60362 = p__60361;
var map__60362__$1 = ((((!((map__60362 == null)))?((((map__60362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60362):map__60362);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60362__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__60362,map__60362__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_clj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"ERROR"], null));
});})(map__60362,map__60362__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_cljs_SLASH_success,(function (p__60364,_,___$1){
var map__60365 = p__60364;
var map__60365__$1 = ((((!((map__60365 == null)))?((((map__60365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60365):map__60365);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60365__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__60365,map__60365__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_clj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"[:a :b :c]"], null));
});})(map__60365,map__60365__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_js_SLASH_default,(function (p__60367,_,___$1){
var map__60368 = p__60367;
var map__60368__$1 = ((((!((map__60368 == null)))?((((map__60368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60368):map__60368);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60368__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__60368,map__60368__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$evaluation_DASH_js);
});})(map__60368,map__60368__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_js_SLASH_error,(function (p__60370,_,___$1){
var map__60371 = p__60370;
var map__60371__$1 = ((((!((map__60371 == null)))?((((map__60371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60371):map__60371);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60371__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__60371,map__60371__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_js,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"ERROR"], null));
});})(map__60371,map__60371__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_js_SLASH_success,(function (p__60373,_,___$1){
var map__60374 = p__60373;
var map__60374__$1 = ((((!((map__60374 == null)))?((((map__60374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__60374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60374):map__60374);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60374__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__60374,map__60374__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_js,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"#'cljs.user/x"], null));
});})(map__60374,map__60374__$1,state))
], null);
}));
if(typeof klipse.cards.ui.outputs.output_cljs_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_cljs_data = (function (){var G__60376 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__60376) : cljs.core.atom.call(null,G__60376));
})();
}
if(typeof klipse.cards.ui.outputs.output_js_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_js_data = (function (){var G__60377 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__60377) : cljs.core.atom.call(null,G__60377));
})();
}
klipse.cards.ui.outputs.output_parser = om.next.parser(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,klipse.cards.ui.outputs.read,cljs.core.cst$kw$mutate,klipse.cards.ui.outputs.mutate], null));
if(typeof klipse.cards.ui.outputs.output_cljs_reconciler !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_cljs_reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,klipse.cards.ui.outputs.output_cljs_data,cljs.core.cst$kw$parser,klipse.cards.ui.outputs.output_parser], null));
}
if(typeof klipse.cards.ui.outputs.output_js_reconciler !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_js_reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,klipse.cards.ui.outputs.output_js_data,cljs.core.cst$kw$parser,klipse.cards.ui.outputs.output_parser], null));
}
