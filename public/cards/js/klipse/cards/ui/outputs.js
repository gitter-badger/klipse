// Compiled by ClojureScript 1.9.36 {}
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
var this__23458__auto__ = this;
React.Component.apply(this__23458__auto__,arguments);

if(!((this__23458__auto__.initLocalState == null))){
this__23458__auto__.state = this__23458__auto__.initLocalState();
} else {
this__23458__auto__.state = {};
}

return this__23458__auto__;
});

klipse.cards.ui.outputs.Output_cljs_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x77703_77713 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x77703_77713.componentWillUpdate = ((function (x77703_77713){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
if(((!((this__23393__auto__ == null)))?(((false) || (this__23393__auto__.om$next$Ident$))?true:false):false)){
var ident__23397__auto___77714 = om.next.ident.call(null,this__23393__auto__,om.next.props.call(null,this__23393__auto__));
var next_ident__23398__auto___77715 = om.next.ident.call(null,this__23393__auto__,om.next._next_props.call(null,next_props__23394__auto__,this__23393__auto__));
if(cljs.core.not_EQ_.call(null,ident__23397__auto___77714,next_ident__23398__auto___77715)){
var idxr__23399__auto___77716 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23399__auto___77716 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23399__auto___77716),((function (idxr__23399__auto___77716,ident__23397__auto___77714,next_ident__23398__auto___77715,this__23393__auto__,x77703_77713){
return (function (indexes__23400__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23400__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23397__auto___77714], null),cljs.core.disj,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23398__auto___77715], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23393__auto__);
});})(idxr__23399__auto___77716,ident__23397__auto___77714,next_ident__23398__auto___77715,this__23393__auto__,x77703_77713))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23393__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23393__auto__);
});})(x77703_77713))
;

x77703_77713.shouldComponentUpdate = ((function (x77703_77713){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
var next_children__23396__auto__ = next_props__23394__auto__.children;
var next_props__23394__auto____$1 = goog.object.get(next_props__23394__auto__,"omcljs$value");
var next_props__23394__auto____$2 = (function (){var G__77705 = next_props__23394__auto____$1;
if((next_props__23394__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__77705);
} else {
return G__77705;
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
});})(x77703_77713))
;

x77703_77713.componentWillUnmount = ((function (x77703_77713){
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
});})(x77703_77713))
;

x77703_77713.componentDidUpdate = ((function (x77703_77713){
return (function (prev_props__23401__auto__,prev_state__23402__auto__){
var this__23393__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23393__auto__);
});})(x77703_77713))
;

x77703_77713.isMounted = ((function (x77703_77713){
return (function (){
var this__23393__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23393__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x77703_77713))
;

x77703_77713.componentWillMount = ((function (x77703_77713){
return (function (){
var this__23393__auto__ = this;
var indexer__23403__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23403__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23403__auto__,this__23393__auto__);
}
});})(x77703_77713))
;

x77703_77713.render = ((function (x77703_77713){
return (function (){
var this__23392__auto__ = this;
var this$ = this__23392__auto__;
var _STAR_reconciler_STAR_77706 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_77707 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_77708 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_77709 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_77710 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23392__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23392__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23392__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23392__auto__);

om.next._STAR_parent_STAR_ = this__23392__auto__;

try{return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,React.DOM.div({"className": "toolbox"},om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_77706,_STAR_depth_STAR_77707,_STAR_shared_STAR_77708,_STAR_instrument_STAR_77709,_STAR_parent_STAR_77710,this$,this__23392__auto__,x77703_77713){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","success","output-cljs/success",-1643208417,null))], null));
});})(_STAR_reconciler_STAR_77706,_STAR_depth_STAR_77707,_STAR_shared_STAR_77708,_STAR_instrument_STAR_77709,_STAR_parent_STAR_77710,this$,this__23392__auto__,x77703_77713))
},om.util.force_children.call(null,"Emulate success"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_77706,_STAR_depth_STAR_77707,_STAR_shared_STAR_77708,_STAR_instrument_STAR_77709,_STAR_parent_STAR_77710,this$,this__23392__auto__,x77703_77713){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","error","output-cljs/error",-747469895,null))], null));
});})(_STAR_reconciler_STAR_77706,_STAR_depth_STAR_77707,_STAR_shared_STAR_77708,_STAR_instrument_STAR_77709,_STAR_parent_STAR_77710,this$,this__23392__auto__,x77703_77713))
},om.util.force_children.call(null,"Emulate error"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_77706,_STAR_depth_STAR_77707,_STAR_shared_STAR_77708,_STAR_instrument_STAR_77709,_STAR_parent_STAR_77710,this$,this__23392__auto__,x77703_77713){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","default","output-cljs/default",1064314509,null))], null));
});})(_STAR_reconciler_STAR_77706,_STAR_depth_STAR_77707,_STAR_shared_STAR_77708,_STAR_instrument_STAR_77709,_STAR_parent_STAR_77710,this$,this__23392__auto__,x77703_77713))
},om.util.force_children.call(null,"Emulate empty"))))),om.util.force_children.call(null,klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_77710;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_77709;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_77708;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_77707;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_77706;
}});})(x77703_77713))
;


klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor = klipse.cards.ui.outputs.Output_cljs_computed;

klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.prototype.om$isComponent = true;

var x77711_77717 = klipse.cards.ui.outputs.Output_cljs_computed;
x77711_77717.om$next$IQuery$ = true;

x77711_77717.om$next$IQuery$query$arity$1 = ((function (x77711_77717){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x77711_77717))
;


var x77712_77718 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x77712_77718.om$next$IQuery$ = true;

x77712_77718.om$next$IQuery$query$arity$1 = ((function (x77712_77718){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x77712_77718))
;


klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorPrWriter = (function (this__23460__auto__,writer__23461__auto__,opt__23462__auto__){
return cljs.core._write.call(null,writer__23461__auto__,"klipse.cards.ui.outputs/Output-cljs-computed");
});
if(typeof klipse.cards.ui.outputs.Output_js_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.outputs.Output_js_computed = (function klipse$cards$ui$outputs$Output_js_computed(){
var this__23458__auto__ = this;
React.Component.apply(this__23458__auto__,arguments);

if(!((this__23458__auto__.initLocalState == null))){
this__23458__auto__.state = this__23458__auto__.initLocalState();
} else {
this__23458__auto__.state = {};
}

return this__23458__auto__;
});

klipse.cards.ui.outputs.Output_js_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x77723_77733 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x77723_77733.componentWillUpdate = ((function (x77723_77733){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
if(((!((this__23393__auto__ == null)))?(((false) || (this__23393__auto__.om$next$Ident$))?true:false):false)){
var ident__23397__auto___77734 = om.next.ident.call(null,this__23393__auto__,om.next.props.call(null,this__23393__auto__));
var next_ident__23398__auto___77735 = om.next.ident.call(null,this__23393__auto__,om.next._next_props.call(null,next_props__23394__auto__,this__23393__auto__));
if(cljs.core.not_EQ_.call(null,ident__23397__auto___77734,next_ident__23398__auto___77735)){
var idxr__23399__auto___77736 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23399__auto___77736 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23399__auto___77736),((function (idxr__23399__auto___77736,ident__23397__auto___77734,next_ident__23398__auto___77735,this__23393__auto__,x77723_77733){
return (function (indexes__23400__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23400__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23397__auto___77734], null),cljs.core.disj,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23398__auto___77735], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23393__auto__);
});})(idxr__23399__auto___77736,ident__23397__auto___77734,next_ident__23398__auto___77735,this__23393__auto__,x77723_77733))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23393__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23393__auto__);
});})(x77723_77733))
;

x77723_77733.shouldComponentUpdate = ((function (x77723_77733){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
var next_children__23396__auto__ = next_props__23394__auto__.children;
var next_props__23394__auto____$1 = goog.object.get(next_props__23394__auto__,"omcljs$value");
var next_props__23394__auto____$2 = (function (){var G__77725 = next_props__23394__auto____$1;
if((next_props__23394__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__77725);
} else {
return G__77725;
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
});})(x77723_77733))
;

x77723_77733.componentWillUnmount = ((function (x77723_77733){
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
});})(x77723_77733))
;

x77723_77733.componentDidUpdate = ((function (x77723_77733){
return (function (prev_props__23401__auto__,prev_state__23402__auto__){
var this__23393__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23393__auto__);
});})(x77723_77733))
;

x77723_77733.isMounted = ((function (x77723_77733){
return (function (){
var this__23393__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23393__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x77723_77733))
;

x77723_77733.componentWillMount = ((function (x77723_77733){
return (function (){
var this__23393__auto__ = this;
var indexer__23403__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23403__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23403__auto__,this__23393__auto__);
}
});})(x77723_77733))
;

x77723_77733.render = ((function (x77723_77733){
return (function (){
var this__23392__auto__ = this;
var this$ = this__23392__auto__;
var _STAR_reconciler_STAR_77726 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_77727 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_77728 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_77729 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_77730 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23392__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23392__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23392__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23392__auto__);

om.next._STAR_parent_STAR_ = this__23392__auto__;

try{return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,React.DOM.div({"className": "toolbox"},om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_77726,_STAR_depth_STAR_77727,_STAR_shared_STAR_77728,_STAR_instrument_STAR_77729,_STAR_parent_STAR_77730,this$,this__23392__auto__,x77723_77733){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","success","output-js/success",1368911396,null))], null));
});})(_STAR_reconciler_STAR_77726,_STAR_depth_STAR_77727,_STAR_shared_STAR_77728,_STAR_instrument_STAR_77729,_STAR_parent_STAR_77730,this$,this__23392__auto__,x77723_77733))
},om.util.force_children.call(null,"Emulate success"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_77726,_STAR_depth_STAR_77727,_STAR_shared_STAR_77728,_STAR_instrument_STAR_77729,_STAR_parent_STAR_77730,this$,this__23392__auto__,x77723_77733){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","error","output-js/error",-1734846832,null))], null));
});})(_STAR_reconciler_STAR_77726,_STAR_depth_STAR_77727,_STAR_shared_STAR_77728,_STAR_instrument_STAR_77729,_STAR_parent_STAR_77730,this$,this__23392__auto__,x77723_77733))
},om.util.force_children.call(null,"Emulate error"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_77726,_STAR_depth_STAR_77727,_STAR_shared_STAR_77728,_STAR_instrument_STAR_77729,_STAR_parent_STAR_77730,this$,this__23392__auto__,x77723_77733){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","default","output-js/default",1973383604,null))], null));
});})(_STAR_reconciler_STAR_77726,_STAR_depth_STAR_77727,_STAR_shared_STAR_77728,_STAR_instrument_STAR_77729,_STAR_parent_STAR_77730,this$,this__23392__auto__,x77723_77733))
},om.util.force_children.call(null,"Emulate empty"))))),om.util.force_children.call(null,klipse.ui.outputs.js.js_textarea.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_77730;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_77729;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_77728;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_77727;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_77726;
}});})(x77723_77733))
;


klipse.cards.ui.outputs.Output_js_computed.prototype.constructor = klipse.cards.ui.outputs.Output_js_computed;

klipse.cards.ui.outputs.Output_js_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.prototype.om$isComponent = true;

var x77731_77737 = klipse.cards.ui.outputs.Output_js_computed;
x77731_77737.om$next$IQuery$ = true;

x77731_77737.om$next$IQuery$query$arity$1 = ((function (x77731_77737){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x77731_77737))
;


var x77732_77738 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x77732_77738.om$next$IQuery$ = true;

x77732_77738.om$next$IQuery$query$arity$1 = ((function (x77732_77738){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x77732_77738))
;


klipse.cards.ui.outputs.Output_js_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorPrWriter = (function (this__23460__auto__,writer__23461__auto__,opt__23462__auto__){
return cljs.core._write.call(null,writer__23461__auto__,"klipse.cards.ui.outputs/Output-js-computed");
});
klipse.cards.ui.outputs.read = (function klipse$cards$ui$outputs$read(p__77739,key,params){
var map__77742 = p__77739;
var map__77742__$1 = ((((!((map__77742 == null)))?((((map__77742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77742):map__77742);
var state = cljs.core.get.call(null,map__77742__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),key,"")], null);
});
if(typeof klipse.cards.ui.outputs.mutate !== 'undefined'){
} else {
klipse.cards.ui.outputs.mutate = (function (){var method_table__7146__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__7147__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__7148__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__7149__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__7150__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.cards.ui.outputs","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","default","output-cljs/default",1064314509,null),(function (p__77744,_,___$1){
var map__77745 = p__77744;
var map__77745__$1 = ((((!((map__77745 == null)))?((((map__77745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77745):map__77745);
var state = cljs.core.get.call(null,map__77745__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__77745,map__77745__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402));
});})(map__77745,map__77745__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","error","output-cljs/error",-747469895,null),(function (p__77747,_,___$1){
var map__77748 = p__77747;
var map__77748__$1 = ((((!((map__77748 == null)))?((((map__77748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77748):map__77748);
var state = cljs.core.get.call(null,map__77748__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__77748,map__77748__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),"ERROR"], null));
});})(map__77748,map__77748__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","success","output-cljs/success",-1643208417,null),(function (p__77750,_,___$1){
var map__77751 = p__77750;
var map__77751__$1 = ((((!((map__77751 == null)))?((((map__77751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77751):map__77751);
var state = cljs.core.get.call(null,map__77751__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__77751,map__77751__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"[:a :b :c]"], null));
});})(map__77751,map__77751__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","default","output-js/default",1973383604,null),(function (p__77753,_,___$1){
var map__77754 = p__77753;
var map__77754__$1 = ((((!((map__77754 == null)))?((((map__77754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77754):map__77754);
var state = cljs.core.get.call(null,map__77754__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__77754,map__77754__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413));
});})(map__77754,map__77754__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","error","output-js/error",-1734846832,null),(function (p__77756,_,___$1){
var map__77757 = p__77756;
var map__77757__$1 = ((((!((map__77757 == null)))?((((map__77757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77757):map__77757);
var state = cljs.core.get.call(null,map__77757__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__77757,map__77757__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),"ERROR"], null));
});})(map__77757,map__77757__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","success","output-js/success",1368911396,null),(function (p__77759,_,___$1){
var map__77760 = p__77759;
var map__77760__$1 = ((((!((map__77760 == null)))?((((map__77760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77760):map__77760);
var state = cljs.core.get.call(null,map__77760__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__77760,map__77760__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"#'cljs.user/x"], null));
});})(map__77760,map__77760__$1,state))
], null);
}));
if(typeof klipse.cards.ui.outputs.output_cljs_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_cljs_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof klipse.cards.ui.outputs.output_js_data !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_js_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
klipse.cards.ui.outputs.output_parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),klipse.cards.ui.outputs.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),klipse.cards.ui.outputs.mutate], null));
if(typeof klipse.cards.ui.outputs.output_cljs_reconciler !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_cljs_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),klipse.cards.ui.outputs.output_cljs_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.cards.ui.outputs.output_parser], null));
}
if(typeof klipse.cards.ui.outputs.output_js_reconciler !== 'undefined'){
} else {
klipse.cards.ui.outputs.output_js_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),klipse.cards.ui.outputs.output_js_data,new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.cards.ui.outputs.output_parser], null));
}

//# sourceMappingURL=outputs.js.map