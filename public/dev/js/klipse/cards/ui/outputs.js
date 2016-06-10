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

var x34571_34611 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x34571_34611.componentWillUpdate = ((function (x34571_34611){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___34615 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___34616 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___34615,next_ident__21730__auto___34616)){
var idxr__21731__auto___34617 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___34617 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___34617),((function (idxr__21731__auto___34617,ident__21729__auto___34615,next_ident__21730__auto___34616,this__21725__auto__,x34571_34611){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___34615], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___34616], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___34617,ident__21729__auto___34615,next_ident__21730__auto___34616,this__21725__auto__,x34571_34611))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x34571_34611))
;

x34571_34611.shouldComponentUpdate = ((function (x34571_34611){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__34578 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34578);
} else {
return G__34578;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34584 = this__21725__auto__.state;
var G__34585 = "omcljs$state";
return goog.object.get(G__34584,G__34585);
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
});})(x34571_34611))
;

x34571_34611.componentWillUnmount = ((function (x34571_34611){
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
});})(x34571_34611))
;

x34571_34611.componentDidUpdate = ((function (x34571_34611){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x34571_34611))
;

x34571_34611.isMounted = ((function (x34571_34611){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34571_34611))
;

x34571_34611.componentWillMount = ((function (x34571_34611){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x34571_34611))
;

x34571_34611.render = ((function (x34571_34611){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_34586 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34587 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34588 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34589 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34590 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var G__34591 = {"className": "dev-cards-section"};
var G__34592 = om.util.force_children((function (){var G__34594 = {"className": "toolbox"};
var G__34595 = om.util.force_children((function (){var G__34598 = {"onClick": ((function (G__34594,G__34591,_STAR_reconciler_STAR_34586,_STAR_depth_STAR_34587,_STAR_shared_STAR_34588,_STAR_instrument_STAR_34589,_STAR_parent_STAR_34590,this$,this__21724__auto__,x34571_34611){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_cljs_SLASH_success)], null));
});})(G__34594,G__34591,_STAR_reconciler_STAR_34586,_STAR_depth_STAR_34587,_STAR_shared_STAR_34588,_STAR_instrument_STAR_34589,_STAR_parent_STAR_34590,this$,this__21724__auto__,x34571_34611))
};
var G__34599 = om.util.force_children("Emulate success");
return React.DOM.button(G__34598,G__34599);
})());
var G__34596 = om.util.force_children((function (){var G__34600 = {"onClick": ((function (G__34594,G__34595,G__34591,_STAR_reconciler_STAR_34586,_STAR_depth_STAR_34587,_STAR_shared_STAR_34588,_STAR_instrument_STAR_34589,_STAR_parent_STAR_34590,this$,this__21724__auto__,x34571_34611){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_cljs_SLASH_error)], null));
});})(G__34594,G__34595,G__34591,_STAR_reconciler_STAR_34586,_STAR_depth_STAR_34587,_STAR_shared_STAR_34588,_STAR_instrument_STAR_34589,_STAR_parent_STAR_34590,this$,this__21724__auto__,x34571_34611))
};
var G__34601 = om.util.force_children("Emulate error");
return React.DOM.button(G__34600,G__34601);
})());
var G__34597 = om.util.force_children((function (){var G__34606 = {"onClick": ((function (G__34594,G__34595,G__34596,G__34591,_STAR_reconciler_STAR_34586,_STAR_depth_STAR_34587,_STAR_shared_STAR_34588,_STAR_instrument_STAR_34589,_STAR_parent_STAR_34590,this$,this__21724__auto__,x34571_34611){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_cljs_SLASH_default)], null));
});})(G__34594,G__34595,G__34596,G__34591,_STAR_reconciler_STAR_34586,_STAR_depth_STAR_34587,_STAR_shared_STAR_34588,_STAR_instrument_STAR_34589,_STAR_parent_STAR_34590,this$,this__21724__auto__,x34571_34611))
};
var G__34607 = om.util.force_children("Emulate empty");
return React.DOM.button(G__34606,G__34607);
})());
return React.DOM.div(G__34594,G__34595,G__34596,G__34597);
})());
var G__34593 = om.util.force_children((function (){var G__34608 = om.next.props(this$);
return (klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1(G__34608) : klipse.ui.outputs.cljs.cljs_textarea.call(null,G__34608));
})());
return React.DOM.div(G__34591,G__34592,G__34593);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34590;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34589;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34588;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34587;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34586;
}});})(x34571_34611))
;


klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor = klipse.cards.ui.outputs.Output_cljs_computed;

klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.prototype.om$isComponent = true;

var x34609_34666 = klipse.cards.ui.outputs.Output_cljs_computed;
x34609_34666.om$next$IQuery$ = true;

x34609_34666.om$next$IQuery$query$arity$1 = ((function (x34609_34666){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_clj], null);
});})(x34609_34666))
;


var x34610_34667 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x34610_34667.om$next$IQuery$ = true;

x34610_34667.om$next$IQuery$query$arity$1 = ((function (x34610_34667){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_clj], null);
});})(x34610_34667))
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

var x34673_34711 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x34673_34711.componentWillUpdate = ((function (x34673_34711){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___34712 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___34713 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___34712,next_ident__21730__auto___34713)){
var idxr__21731__auto___34719 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___34719 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___34719),((function (idxr__21731__auto___34719,ident__21729__auto___34712,next_ident__21730__auto___34713,this__21725__auto__,x34673_34711){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___34712], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___34713], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___34719,ident__21729__auto___34712,next_ident__21730__auto___34713,this__21725__auto__,x34673_34711))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x34673_34711))
;

x34673_34711.shouldComponentUpdate = ((function (x34673_34711){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__34679 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34679);
} else {
return G__34679;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34685 = this__21725__auto__.state;
var G__34686 = "omcljs$state";
return goog.object.get(G__34685,G__34686);
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
});})(x34673_34711))
;

x34673_34711.componentWillUnmount = ((function (x34673_34711){
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
});})(x34673_34711))
;

x34673_34711.componentDidUpdate = ((function (x34673_34711){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x34673_34711))
;

x34673_34711.isMounted = ((function (x34673_34711){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34673_34711))
;

x34673_34711.componentWillMount = ((function (x34673_34711){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x34673_34711))
;

x34673_34711.render = ((function (x34673_34711){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_34687 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34688 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34689 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34690 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34691 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var G__34693 = {"className": "dev-cards-section"};
var G__34694 = om.util.force_children((function (){var G__34696 = {"className": "toolbox"};
var G__34697 = om.util.force_children((function (){var G__34700 = {"onClick": ((function (G__34696,G__34693,_STAR_reconciler_STAR_34687,_STAR_depth_STAR_34688,_STAR_shared_STAR_34689,_STAR_instrument_STAR_34690,_STAR_parent_STAR_34691,this$,this__21724__auto__,x34673_34711){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_js_SLASH_success)], null));
});})(G__34696,G__34693,_STAR_reconciler_STAR_34687,_STAR_depth_STAR_34688,_STAR_shared_STAR_34689,_STAR_instrument_STAR_34690,_STAR_parent_STAR_34691,this$,this__21724__auto__,x34673_34711))
};
var G__34701 = om.util.force_children("Emulate success");
return React.DOM.button(G__34700,G__34701);
})());
var G__34698 = om.util.force_children((function (){var G__34702 = {"onClick": ((function (G__34696,G__34697,G__34693,_STAR_reconciler_STAR_34687,_STAR_depth_STAR_34688,_STAR_shared_STAR_34689,_STAR_instrument_STAR_34690,_STAR_parent_STAR_34691,this$,this__21724__auto__,x34673_34711){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_js_SLASH_error)], null));
});})(G__34696,G__34697,G__34693,_STAR_reconciler_STAR_34687,_STAR_depth_STAR_34688,_STAR_shared_STAR_34689,_STAR_instrument_STAR_34690,_STAR_parent_STAR_34691,this$,this__21724__auto__,x34673_34711))
};
var G__34703 = om.util.force_children("Emulate error");
return React.DOM.button(G__34702,G__34703);
})());
var G__34699 = om.util.force_children((function (){var G__34704 = {"onClick": ((function (G__34696,G__34697,G__34698,G__34693,_STAR_reconciler_STAR_34687,_STAR_depth_STAR_34688,_STAR_shared_STAR_34689,_STAR_instrument_STAR_34690,_STAR_parent_STAR_34691,this$,this__21724__auto__,x34673_34711){
return (function (){
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$output_DASH_js_SLASH_default)], null));
});})(G__34696,G__34697,G__34698,G__34693,_STAR_reconciler_STAR_34687,_STAR_depth_STAR_34688,_STAR_shared_STAR_34689,_STAR_instrument_STAR_34690,_STAR_parent_STAR_34691,this$,this__21724__auto__,x34673_34711))
};
var G__34705 = om.util.force_children("Emulate empty");
return React.DOM.button(G__34704,G__34705);
})());
return React.DOM.div(G__34696,G__34697,G__34698,G__34699);
})());
var G__34695 = om.util.force_children((function (){var G__34706 = om.next.props(this$);
return (klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1(G__34706) : klipse.ui.outputs.js.js_textarea.call(null,G__34706));
})());
return React.DOM.div(G__34693,G__34694,G__34695);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34691;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34690;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34689;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34688;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34687;
}});})(x34673_34711))
;


klipse.cards.ui.outputs.Output_js_computed.prototype.constructor = klipse.cards.ui.outputs.Output_js_computed;

klipse.cards.ui.outputs.Output_js_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.prototype.om$isComponent = true;

var x34707_34733 = klipse.cards.ui.outputs.Output_js_computed;
x34707_34733.om$next$IQuery$ = true;

x34707_34733.om$next$IQuery$query$arity$1 = ((function (x34707_34733){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_js], null);
});})(x34707_34733))
;


var x34708_34734 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x34708_34734.om$next$IQuery$ = true;

x34708_34734.om$next$IQuery$query$arity$1 = ((function (x34708_34734){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_js], null);
});})(x34708_34734))
;


klipse.cards.ui.outputs.Output_js_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.cards.ui.outputs/Output-js-computed");
});
klipse.cards.ui.outputs.read = (function klipse$cards$ui$outputs$read(p__34735,key,params){
var map__34738 = p__34735;
var map__34738__$1 = ((((!((map__34738 == null)))?((((map__34738.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34738.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34738):map__34738);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34738__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,"")], null);
});
if(typeof klipse.cards.ui.outputs.mutate !== 'undefined'){
} else {
klipse.cards.ui.outputs.mutate = (function (){var method_table__7146__auto__ = (function (){var G__34740 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34740) : cljs.core.atom.call(null,G__34740));
})();
var prefer_table__7147__auto__ = (function (){var G__34741 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34741) : cljs.core.atom.call(null,G__34741));
})();
var method_cache__7148__auto__ = (function (){var G__34742 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34742) : cljs.core.atom.call(null,G__34742));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__34743 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34743) : cljs.core.atom.call(null,G__34743));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("klipse.cards.ui.outputs","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_cljs_SLASH_default,(function (p__34744,_,___$1){
var map__34745 = p__34744;
var map__34745__$1 = ((((!((map__34745 == null)))?((((map__34745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34745):map__34745);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__34745,map__34745__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$evaluation_DASH_clj);
});})(map__34745,map__34745__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_cljs_SLASH_error,(function (p__34751,_,___$1){
var map__34752 = p__34751;
var map__34752__$1 = ((((!((map__34752 == null)))?((((map__34752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34752):map__34752);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34752__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__34752,map__34752__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_clj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"ERROR"], null));
});})(map__34752,map__34752__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_cljs_SLASH_success,(function (p__34757,_,___$1){
var map__34758 = p__34757;
var map__34758__$1 = ((((!((map__34758 == null)))?((((map__34758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34758):map__34758);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34758__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__34758,map__34758__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_clj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"[:a :b :c]"], null));
});})(map__34758,map__34758__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_js_SLASH_default,(function (p__34770,_,___$1){
var map__34771 = p__34770;
var map__34771__$1 = ((((!((map__34771 == null)))?((((map__34771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34771):map__34771);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34771__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__34771,map__34771__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.dissoc,cljs.core.cst$kw$evaluation_DASH_js);
});})(map__34771,map__34771__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_js_SLASH_error,(function (p__34773,_,___$1){
var map__34774 = p__34773;
var map__34774__$1 = ((((!((map__34774 == null)))?((((map__34774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34774):map__34774);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34774__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__34774,map__34774__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_js,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,"ERROR"], null));
});})(map__34774,map__34774__$1,state))
], null);
}));
klipse.cards.ui.outputs.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$output_DASH_js_SLASH_success,(function (p__34779,_,___$1){
var map__34780 = p__34779;
var map__34780__$1 = ((((!((map__34780 == null)))?((((map__34780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34780):map__34780);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34780__$1,cljs.core.cst$kw$state);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__34780,map__34780__$1,state){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_js,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"#'cljs.user/x"], null));
});})(map__34780,map__34780__$1,state))
], null);
}));
if(typeof klipse.cards.ui.outputs.output_cljs_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_cljs_data = (function (){var G__34783 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34783) : cljs.core.atom.call(null,G__34783));
})();
}
if(typeof klipse.cards.ui.outputs.output_js_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_js_data = (function (){var G__34784 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__34784) : cljs.core.atom.call(null,G__34784));
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
