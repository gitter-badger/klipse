// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.cards.ui.editors');
goog.require('cljs.core');
goog.require('devcards_om_next.core');
goog.require('devcards.core');
goog.require('om.dom');
goog.require('klipse.ui.editors.js');
goog.require('klipse.control.control');
goog.require('klipse.ui.editors.cljs');
goog.require('om.next');
if(typeof klipse.cards.ui.editors.Editor_cljs_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.editors.Editor_cljs_computed = (function klipse$cards$ui$editors$Editor_cljs_computed(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.cards.ui.editors.Editor_cljs_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x33889_33917 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;
x33889_33917.componentWillUpdate = ((function (x33889_33917){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___33920 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___33921 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___33920,next_ident__21730__auto___33921)){
var idxr__21731__auto___33927 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___33927 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___33927),((function (idxr__21731__auto___33927,ident__21729__auto___33920,next_ident__21730__auto___33921,this__21725__auto__,x33889_33917){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___33920], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___33921], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___33927,ident__21729__auto___33920,next_ident__21730__auto___33921,this__21725__auto__,x33889_33917))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x33889_33917))
;

x33889_33917.shouldComponentUpdate = ((function (x33889_33917){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__33896 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__33896);
} else {
return G__33896;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__33903 = this__21725__auto__.state;
var G__33904 = "omcljs$state";
return goog.object.get(G__33903,G__33904);
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
});})(x33889_33917))
;

x33889_33917.componentWillUnmount = ((function (x33889_33917){
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
});})(x33889_33917))
;

x33889_33917.componentDidUpdate = ((function (x33889_33917){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x33889_33917))
;

x33889_33917.isMounted = ((function (x33889_33917){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33889_33917))
;

x33889_33917.componentWillMount = ((function (x33889_33917){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x33889_33917))
;

x33889_33917.render = ((function (x33889_33917){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_33907 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33908 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33909 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33910 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33911 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var G__33912 = {"className": "dev-cards-section"};
var G__33913 = om.util.force_children((function (){var G__33914 = om.next.props(this$);
return (klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1(G__33914) : klipse.ui.editors.cljs.cljs_editor.call(null,G__33914));
})());
return React.DOM.div(G__33912,G__33913);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33911;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33910;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33909;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33908;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33907;
}});})(x33889_33917))
;


klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor = klipse.cards.ui.editors.Editor_cljs_computed;

klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.prototype.om$isComponent = true;

var x33915_34001 = klipse.cards.ui.editors.Editor_cljs_computed;


var x33916_34003 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;


klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.cards.ui.editors/Editor-cljs-computed");
});
if(typeof klipse.cards.ui.editors.editor_cljs_reconciler !== 'undefined'){
} else {
klipse.cards.ui.editors.editor_cljs_reconciler = om.next.reconciler(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$input,"(+ 103212 2)"], null),cljs.core.cst$kw$parser,klipse.control.control.parser], null));
}
/**
 * @constructor
 */
klipse.cards.ui.editors.Root_computed = (function klipse$cards$ui$editors$Root_computed(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.cards.ui.editors.Root_computed.prototype = goog.object.clone(React.Component.prototype);

var x34008_34040 = klipse.cards.ui.editors.Root_computed.prototype;
x34008_34040.componentWillUpdate = ((function (x34008_34040){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___34041 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___34042 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___34041,next_ident__21730__auto___34042)){
var idxr__21731__auto___34044 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___34044 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___34044),((function (idxr__21731__auto___34044,ident__21729__auto___34041,next_ident__21730__auto___34042,this__21725__auto__,x34008_34040){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___34041], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___34042], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___34044,ident__21729__auto___34041,next_ident__21730__auto___34042,this__21725__auto__,x34008_34040))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x34008_34040))
;

x34008_34040.shouldComponentUpdate = ((function (x34008_34040){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__34010 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__34010);
} else {
return G__34010;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__34015 = this__21725__auto__.state;
var G__34016 = "omcljs$state";
return goog.object.get(G__34015,G__34016);
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
});})(x34008_34040))
;

x34008_34040.componentWillUnmount = ((function (x34008_34040){
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
});})(x34008_34040))
;

x34008_34040.componentDidUpdate = ((function (x34008_34040){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x34008_34040))
;

x34008_34040.isMounted = ((function (x34008_34040){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34008_34040))
;

x34008_34040.componentWillMount = ((function (x34008_34040){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x34008_34040))
;

x34008_34040.render = ((function (x34008_34040){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_34017 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34018 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34019 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34020 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34021 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var map__34023 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(this$);
var map__34023__$1 = ((((!((map__34023 == null)))?((((map__34023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34023):map__34023);
var updateJS = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34023__$1,cljs.core.cst$kw$updateJS);
var G__34027 = {"className": "dev-cards-section"};
var G__34028 = om.util.force_children((function (){var G__34030 = {"className": "toolbox"};
var G__34031 = om.util.force_children((function (){var G__34032 = {"onClick": updateJS};
var G__34033 = om.util.force_children("Add JS code to editor");
return React.DOM.button(G__34032,G__34033);
})());
return React.DOM.div(G__34030,G__34031);
})());
var G__34029 = om.util.force_children((function (){var G__34034 = om.next.props(this$);
return (klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1(G__34034) : klipse.ui.editors.js.js_editor.call(null,G__34034));
})());
return React.DOM.div(G__34027,G__34028,G__34029);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34021;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34020;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34019;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34018;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34017;
}});})(x34008_34040))
;


klipse.cards.ui.editors.Root_computed.prototype.constructor = klipse.cards.ui.editors.Root_computed;

klipse.cards.ui.editors.Root_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.prototype.om$isComponent = true;

var x34035_34075 = klipse.cards.ui.editors.Root_computed;


var x34037_34076 = klipse.cards.ui.editors.Root_computed.prototype;


klipse.cards.ui.editors.Root_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.cards.ui.editors/Root-computed");
});
klipse.cards.ui.editors.root_computed = om.next.factory.cljs$core$IFn$_invoke$arity$1(klipse.cards.ui.editors.Root_computed);
