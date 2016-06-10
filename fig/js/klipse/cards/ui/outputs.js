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
var this__40383__auto__ = this;
React.Component.apply(this__40383__auto__,arguments);

if(!((this__40383__auto__.initLocalState == null))){
this__40383__auto__.state = this__40383__auto__.initLocalState();
} else {
this__40383__auto__.state = {};
}

return this__40383__auto__;
});

klipse.cards.ui.outputs.Output_cljs_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x46939_46949 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x46939_46949.componentWillUpdate = ((function (x46939_46949){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
if(((!((this__40318__auto__ == null)))?(((false) || (this__40318__auto__.om$next$Ident$))?true:false):false)){
var ident__40322__auto___46950 = om.next.ident.call(null,this__40318__auto__,om.next.props.call(null,this__40318__auto__));
var next_ident__40323__auto___46951 = om.next.ident.call(null,this__40318__auto__,om.next._next_props.call(null,next_props__40319__auto__,this__40318__auto__));
if(cljs.core.not_EQ_.call(null,ident__40322__auto___46950,next_ident__40323__auto___46951)){
var idxr__40324__auto___46952 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40324__auto___46952 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40324__auto___46952),((function (idxr__40324__auto___46952,ident__40322__auto___46950,next_ident__40323__auto___46951,this__40318__auto__,x46939_46949){
return (function (indexes__40325__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40325__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40322__auto___46950], null),cljs.core.disj,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40323__auto___46951], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40318__auto__);
});})(idxr__40324__auto___46952,ident__40322__auto___46950,next_ident__40323__auto___46951,this__40318__auto__,x46939_46949))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40318__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40318__auto__);
});})(x46939_46949))
;

x46939_46949.shouldComponentUpdate = ((function (x46939_46949){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
var next_children__40321__auto__ = next_props__40319__auto__.children;
var next_props__40319__auto____$1 = goog.object.get(next_props__40319__auto__,"omcljs$value");
var next_props__40319__auto____$2 = (function (){var G__46941 = next_props__40319__auto____$1;
if((next_props__40319__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__46941);
} else {
return G__46941;
}
})();
var or__22615__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40318__auto__),next_props__40319__auto____$2);
if(or__22615__auto__){
return or__22615__auto__;
} else {
var or__22615__auto____$1 = (function (){var and__22603__auto__ = this__40318__auto__.state;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40318__auto__.state,"omcljs$state"),goog.object.get(next_state__40320__auto__,"omcljs$state"));
} else {
return and__22603__auto__;
}
})();
if(cljs.core.truth_(or__22615__auto____$1)){
return or__22615__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40318__auto__.props.children,next_children__40321__auto__);
}
}
});})(x46939_46949))
;

x46939_46949.componentWillUnmount = ((function (x46939_46949){
return (function (){
var this__40318__auto__ = this;
var r__40329__auto__ = om.next.get_reconciler.call(null,this__40318__auto__);
var cfg__40330__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40329__auto__);
var st__40331__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40330__auto__);
var indexer__40328__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40330__auto__);
if(cljs.core.truth_((function (){var and__22603__auto__ = !((st__40331__auto__ == null));
if(and__22603__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40331__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40318__auto__], null));
} else {
return and__22603__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40331__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40318__auto__);
} else {
}

if((indexer__40328__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40328__auto__,this__40318__auto__);
}
});})(x46939_46949))
;

x46939_46949.componentDidUpdate = ((function (x46939_46949){
return (function (prev_props__40326__auto__,prev_state__40327__auto__){
var this__40318__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40318__auto__);
});})(x46939_46949))
;

x46939_46949.isMounted = ((function (x46939_46949){
return (function (){
var this__40318__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40318__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46939_46949))
;

x46939_46949.componentWillMount = ((function (x46939_46949){
return (function (){
var this__40318__auto__ = this;
var indexer__40328__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40328__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40328__auto__,this__40318__auto__);
}
});})(x46939_46949))
;

x46939_46949.render = ((function (x46939_46949){
return (function (){
var this__40317__auto__ = this;
var this$ = this__40317__auto__;
var _STAR_reconciler_STAR_46942 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46943 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46944 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46945 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46946 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40317__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40317__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40317__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40317__auto__);

om.next._STAR_parent_STAR_ = this__40317__auto__;

try{return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,React.DOM.div({"className": "toolbox"},om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_46942,_STAR_depth_STAR_46943,_STAR_shared_STAR_46944,_STAR_instrument_STAR_46945,_STAR_parent_STAR_46946,this$,this__40317__auto__,x46939_46949){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","success","output-cljs/success",-1643208417,null))], null));
});})(_STAR_reconciler_STAR_46942,_STAR_depth_STAR_46943,_STAR_shared_STAR_46944,_STAR_instrument_STAR_46945,_STAR_parent_STAR_46946,this$,this__40317__auto__,x46939_46949))
},om.util.force_children.call(null,"Emulate success"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_46942,_STAR_depth_STAR_46943,_STAR_shared_STAR_46944,_STAR_instrument_STAR_46945,_STAR_parent_STAR_46946,this$,this__40317__auto__,x46939_46949){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","error","output-cljs/error",-747469895,null))], null));
});})(_STAR_reconciler_STAR_46942,_STAR_depth_STAR_46943,_STAR_shared_STAR_46944,_STAR_instrument_STAR_46945,_STAR_parent_STAR_46946,this$,this__40317__auto__,x46939_46949))
},om.util.force_children.call(null,"Emulate error"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_46942,_STAR_depth_STAR_46943,_STAR_shared_STAR_46944,_STAR_instrument_STAR_46945,_STAR_parent_STAR_46946,this$,this__40317__auto__,x46939_46949){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-cljs","default","output-cljs/default",1064314509,null))], null));
});})(_STAR_reconciler_STAR_46942,_STAR_depth_STAR_46943,_STAR_shared_STAR_46944,_STAR_instrument_STAR_46945,_STAR_parent_STAR_46946,this$,this__40317__auto__,x46939_46949))
},om.util.force_children.call(null,"Emulate empty"))))),om.util.force_children.call(null,klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46946;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46945;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46944;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46943;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46942;
}});})(x46939_46949))
;


klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor = klipse.cards.ui.outputs.Output_cljs_computed;

klipse.cards.ui.outputs.Output_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.prototype.om$isComponent = true;

var x46947_46953 = klipse.cards.ui.outputs.Output_cljs_computed;
x46947_46953.om$next$IQuery$ = true;

x46947_46953.om$next$IQuery$query$arity$1 = ((function (x46947_46953){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x46947_46953))
;


var x46948_46954 = klipse.cards.ui.outputs.Output_cljs_computed.prototype;
x46948_46954.om$next$IQuery$ = true;

x46948_46954.om$next$IQuery$query$arity$1 = ((function (x46948_46954){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x46948_46954))
;


klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-cljs-computed";

klipse.cards.ui.outputs.Output_cljs_computed.cljs$lang$ctorPrWriter = (function (this__40385__auto__,writer__40386__auto__,opt__40387__auto__){
return cljs.core._write.call(null,writer__40386__auto__,"klipse.cards.ui.outputs/Output-cljs-computed");
});
if(typeof klipse.cards.ui.outputs.Output_js_computed !== 'undefined'){
} else {
/**
 * @constructor
 */
klipse.cards.ui.outputs.Output_js_computed = (function klipse$cards$ui$outputs$Output_js_computed(){
var this__40383__auto__ = this;
React.Component.apply(this__40383__auto__,arguments);

if(!((this__40383__auto__.initLocalState == null))){
this__40383__auto__.state = this__40383__auto__.initLocalState();
} else {
this__40383__auto__.state = {};
}

return this__40383__auto__;
});

klipse.cards.ui.outputs.Output_js_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x46959_46969 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x46959_46969.componentWillUpdate = ((function (x46959_46969){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
if(((!((this__40318__auto__ == null)))?(((false) || (this__40318__auto__.om$next$Ident$))?true:false):false)){
var ident__40322__auto___46970 = om.next.ident.call(null,this__40318__auto__,om.next.props.call(null,this__40318__auto__));
var next_ident__40323__auto___46971 = om.next.ident.call(null,this__40318__auto__,om.next._next_props.call(null,next_props__40319__auto__,this__40318__auto__));
if(cljs.core.not_EQ_.call(null,ident__40322__auto___46970,next_ident__40323__auto___46971)){
var idxr__40324__auto___46972 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40324__auto___46972 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40324__auto___46972),((function (idxr__40324__auto___46972,ident__40322__auto___46970,next_ident__40323__auto___46971,this__40318__auto__,x46959_46969){
return (function (indexes__40325__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40325__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40322__auto___46970], null),cljs.core.disj,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40323__auto___46971], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40318__auto__);
});})(idxr__40324__auto___46972,ident__40322__auto___46970,next_ident__40323__auto___46971,this__40318__auto__,x46959_46969))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40318__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40318__auto__);
});})(x46959_46969))
;

x46959_46969.shouldComponentUpdate = ((function (x46959_46969){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
var next_children__40321__auto__ = next_props__40319__auto__.children;
var next_props__40319__auto____$1 = goog.object.get(next_props__40319__auto__,"omcljs$value");
var next_props__40319__auto____$2 = (function (){var G__46961 = next_props__40319__auto____$1;
if((next_props__40319__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__46961);
} else {
return G__46961;
}
})();
var or__22615__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40318__auto__),next_props__40319__auto____$2);
if(or__22615__auto__){
return or__22615__auto__;
} else {
var or__22615__auto____$1 = (function (){var and__22603__auto__ = this__40318__auto__.state;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40318__auto__.state,"omcljs$state"),goog.object.get(next_state__40320__auto__,"omcljs$state"));
} else {
return and__22603__auto__;
}
})();
if(cljs.core.truth_(or__22615__auto____$1)){
return or__22615__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40318__auto__.props.children,next_children__40321__auto__);
}
}
});})(x46959_46969))
;

x46959_46969.componentWillUnmount = ((function (x46959_46969){
return (function (){
var this__40318__auto__ = this;
var r__40329__auto__ = om.next.get_reconciler.call(null,this__40318__auto__);
var cfg__40330__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40329__auto__);
var st__40331__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40330__auto__);
var indexer__40328__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40330__auto__);
if(cljs.core.truth_((function (){var and__22603__auto__ = !((st__40331__auto__ == null));
if(and__22603__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40331__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40318__auto__], null));
} else {
return and__22603__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40331__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40318__auto__);
} else {
}

if((indexer__40328__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40328__auto__,this__40318__auto__);
}
});})(x46959_46969))
;

x46959_46969.componentDidUpdate = ((function (x46959_46969){
return (function (prev_props__40326__auto__,prev_state__40327__auto__){
var this__40318__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40318__auto__);
});})(x46959_46969))
;

x46959_46969.isMounted = ((function (x46959_46969){
return (function (){
var this__40318__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40318__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46959_46969))
;

x46959_46969.componentWillMount = ((function (x46959_46969){
return (function (){
var this__40318__auto__ = this;
var indexer__40328__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40328__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40328__auto__,this__40318__auto__);
}
});})(x46959_46969))
;

x46959_46969.render = ((function (x46959_46969){
return (function (){
var this__40317__auto__ = this;
var this$ = this__40317__auto__;
var _STAR_reconciler_STAR_46962 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46963 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46964 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46965 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46966 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40317__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40317__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40317__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40317__auto__);

om.next._STAR_parent_STAR_ = this__40317__auto__;

try{return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,React.DOM.div({"className": "toolbox"},om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_46962,_STAR_depth_STAR_46963,_STAR_shared_STAR_46964,_STAR_instrument_STAR_46965,_STAR_parent_STAR_46966,this$,this__40317__auto__,x46959_46969){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","success","output-js/success",1368911396,null))], null));
});})(_STAR_reconciler_STAR_46962,_STAR_depth_STAR_46963,_STAR_shared_STAR_46964,_STAR_instrument_STAR_46965,_STAR_parent_STAR_46966,this$,this__40317__auto__,x46959_46969))
},om.util.force_children.call(null,"Emulate success"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_46962,_STAR_depth_STAR_46963,_STAR_shared_STAR_46964,_STAR_instrument_STAR_46965,_STAR_parent_STAR_46966,this$,this__40317__auto__,x46959_46969){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","error","output-js/error",-1734846832,null))], null));
});})(_STAR_reconciler_STAR_46962,_STAR_depth_STAR_46963,_STAR_shared_STAR_46964,_STAR_instrument_STAR_46965,_STAR_parent_STAR_46966,this$,this__40317__auto__,x46959_46969))
},om.util.force_children.call(null,"Emulate error"))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (_STAR_reconciler_STAR_46962,_STAR_depth_STAR_46963,_STAR_shared_STAR_46964,_STAR_instrument_STAR_46965,_STAR_parent_STAR_46966,this$,this__40317__auto__,x46959_46969){
return (function (){
return om.next.transact_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("output-js","default","output-js/default",1973383604,null))], null));
});})(_STAR_reconciler_STAR_46962,_STAR_depth_STAR_46963,_STAR_shared_STAR_46964,_STAR_instrument_STAR_46965,_STAR_parent_STAR_46966,this$,this__40317__auto__,x46959_46969))
},om.util.force_children.call(null,"Emulate empty"))))),om.util.force_children.call(null,klipse.ui.outputs.js.js_textarea.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46966;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46965;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46964;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46963;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46962;
}});})(x46959_46969))
;


klipse.cards.ui.outputs.Output_js_computed.prototype.constructor = klipse.cards.ui.outputs.Output_js_computed;

klipse.cards.ui.outputs.Output_js_computed.prototype.constructor.displayName = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.prototype.om$isComponent = true;

var x46967_46973 = klipse.cards.ui.outputs.Output_js_computed;
x46967_46973.om$next$IQuery$ = true;

x46967_46973.om$next$IQuery$query$arity$1 = ((function (x46967_46973){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x46967_46973))
;


var x46968_46974 = klipse.cards.ui.outputs.Output_js_computed.prototype;
x46968_46974.om$next$IQuery$ = true;

x46968_46974.om$next$IQuery$query$arity$1 = ((function (x46968_46974){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x46968_46974))
;


klipse.cards.ui.outputs.Output_js_computed.cljs$lang$type = true;

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorStr = "klipse.cards.ui.outputs/Output-js-computed";

klipse.cards.ui.outputs.Output_js_computed.cljs$lang$ctorPrWriter = (function (this__40385__auto__,writer__40386__auto__,opt__40387__auto__){
return cljs.core._write.call(null,writer__40386__auto__,"klipse.cards.ui.outputs/Output-js-computed");
});
klipse.cards.ui.outputs.read = (function klipse$cards$ui$outputs$read(p__46975,key,params){
var map__46978 = p__46975;
var map__46978__$1 = ((((!((map__46978 == null)))?((((map__46978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46978):map__46978);
var state = cljs.core.get.call(null,map__46978__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,cljs.core.deref.call(null,state),key,"")], null);
});
if(typeof klipse.cards.ui.outputs.mutate !== 'undefined'){
} else {
klipse.cards.ui.outputs.mutate = (function (){var method_table__23540__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23544__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"klipse.cards.ui.outputs","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23544__auto__,method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__));
})();
}
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","default","output-cljs/default",1064314509,null),(function (p__46980,_,___$1){
var map__46981 = p__46980;
var map__46981__$1 = ((((!((map__46981 == null)))?((((map__46981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46981):map__46981);
var state = cljs.core.get.call(null,map__46981__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46981,map__46981__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402));
});})(map__46981,map__46981__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","error","output-cljs/error",-747469895,null),(function (p__46983,_,___$1){
var map__46984 = p__46983;
var map__46984__$1 = ((((!((map__46984 == null)))?((((map__46984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46984):map__46984);
var state = cljs.core.get.call(null,map__46984__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46984,map__46984__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),"ERROR"], null));
});})(map__46984,map__46984__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-cljs","success","output-cljs/success",-1643208417,null),(function (p__46986,_,___$1){
var map__46987 = p__46986;
var map__46987__$1 = ((((!((map__46987 == null)))?((((map__46987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46987):map__46987);
var state = cljs.core.get.call(null,map__46987__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46987,map__46987__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"[:a :b :c]"], null));
});})(map__46987,map__46987__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","default","output-js/default",1973383604,null),(function (p__46989,_,___$1){
var map__46990 = p__46989;
var map__46990__$1 = ((((!((map__46990 == null)))?((((map__46990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46990):map__46990);
var state = cljs.core.get.call(null,map__46990__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46990,map__46990__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.dissoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413));
});})(map__46990,map__46990__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","error","output-js/error",-1734846832,null),(function (p__46992,_,___$1){
var map__46993 = p__46992;
var map__46993__$1 = ((((!((map__46993 == null)))?((((map__46993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46993):map__46993);
var state = cljs.core.get.call(null,map__46993__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46993,map__46993__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),"ERROR"], null));
});})(map__46993,map__46993__$1,state))
], null);
}));
cljs.core._add_method.call(null,klipse.cards.ui.outputs.mutate,new cljs.core.Symbol("output-js","success","output-js/success",1368911396,null),(function (p__46995,_,___$1){
var map__46996 = p__46995;
var map__46996__$1 = ((((!((map__46996 == null)))?((((map__46996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46996):map__46996);
var state = cljs.core.get.call(null,map__46996__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (map__46996,map__46996__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"#'cljs.user/x"], null));
});})(map__46996,map__46996__$1,state))
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

//# sourceMappingURL=outputs.js.map?rel=1465451191752