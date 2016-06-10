// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.cards.ui.layout.eval_only');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('klipse.ui.layout');
goog.require('devcards.core');
/**
 * @constructor
 */
klipse.cards.ui.layout.eval_only.Root_computed = (function klipse$cards$ui$layout$eval_only$Root_computed(){
var this__25744__auto__ = this;
React.Component.apply(this__25744__auto__,arguments);

if(!((this__25744__auto__.initLocalState == null))){
this__25744__auto__.state = this__25744__auto__.initLocalState();
} else {
this__25744__auto__.state = {};
}

return this__25744__auto__;
});

klipse.cards.ui.layout.eval_only.Root_computed.prototype = goog.object.clone(React.Component.prototype);

var x31899_31909 = klipse.cards.ui.layout.eval_only.Root_computed.prototype;
x31899_31909.componentWillUpdate = ((function (x31899_31909){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
if(((!((this__25679__auto__ == null)))?(((false) || (this__25679__auto__.om$next$Ident$))?true:false):false)){
var ident__25683__auto___31910 = om.next.ident.call(null,this__25679__auto__,om.next.props.call(null,this__25679__auto__));
var next_ident__25684__auto___31911 = om.next.ident.call(null,this__25679__auto__,om.next._next_props.call(null,next_props__25680__auto__,this__25679__auto__));
if(cljs.core.not_EQ_.call(null,ident__25683__auto___31910,next_ident__25684__auto___31911)){
var idxr__25685__auto___31912 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25685__auto___31912 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25685__auto___31912),((function (idxr__25685__auto___31912,ident__25683__auto___31910,next_ident__25684__auto___31911,this__25679__auto__,x31899_31909){
return (function (indexes__25686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25683__auto___31910], null),cljs.core.disj,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25684__auto___31911], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25679__auto__);
});})(idxr__25685__auto___31912,ident__25683__auto___31910,next_ident__25684__auto___31911,this__25679__auto__,x31899_31909))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25679__auto__);
});})(x31899_31909))
;

x31899_31909.shouldComponentUpdate = ((function (x31899_31909){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
var next_children__25682__auto__ = next_props__25680__auto__.children;
var next_props__25680__auto____$1 = goog.object.get(next_props__25680__auto__,"omcljs$value");
var next_props__25680__auto____$2 = (function (){var G__31901 = next_props__25680__auto____$1;
if((next_props__25680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31901);
} else {
return G__31901;
}
})();
var or__22615__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__25679__auto__),next_props__25680__auto____$2);
if(or__22615__auto__){
return or__22615__auto__;
} else {
var or__22615__auto____$1 = (function (){var and__22603__auto__ = this__25679__auto__.state;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__25679__auto__.state,"omcljs$state"),goog.object.get(next_state__25681__auto__,"omcljs$state"));
} else {
return and__22603__auto__;
}
})();
if(cljs.core.truth_(or__22615__auto____$1)){
return or__22615__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__25679__auto__.props.children,next_children__25682__auto__);
}
}
});})(x31899_31909))
;

x31899_31909.componentWillUnmount = ((function (x31899_31909){
return (function (){
var this__25679__auto__ = this;
var r__25690__auto__ = om.next.get_reconciler.call(null,this__25679__auto__);
var cfg__25691__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__25690__auto__);
var st__25692__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__25691__auto__);
var indexer__25689__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__25691__auto__);
if(cljs.core.truth_((function (){var and__22603__auto__ = !((st__25692__auto__ == null));
if(and__22603__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__25692__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__25679__auto__], null));
} else {
return and__22603__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__25692__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__25679__auto__);
} else {
}

if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x31899_31909))
;

x31899_31909.componentDidUpdate = ((function (x31899_31909){
return (function (prev_props__25687__auto__,prev_state__25688__auto__){
var this__25679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25679__auto__);
});})(x31899_31909))
;

x31899_31909.isMounted = ((function (x31899_31909){
return (function (){
var this__25679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31899_31909))
;

x31899_31909.componentWillMount = ((function (x31899_31909){
return (function (){
var this__25679__auto__ = this;
var indexer__25689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x31899_31909))
;

x31899_31909.render = ((function (x31899_31909){
return (function (){
var this__25678__auto__ = this;
var this$ = this__25678__auto__;
var _STAR_reconciler_STAR_31902 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31903 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31904 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31905 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31906 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25678__auto__);

om.next._STAR_parent_STAR_ = this__25678__auto__;

try{return React.DOM.div({"className": "dev-cards-layout"},om.util.force_children.call(null,klipse.ui.layout.layout.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31906;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31905;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31904;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31903;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31902;
}});})(x31899_31909))
;


klipse.cards.ui.layout.eval_only.Root_computed.prototype.constructor = klipse.cards.ui.layout.eval_only.Root_computed;

klipse.cards.ui.layout.eval_only.Root_computed.prototype.constructor.displayName = "klipse.cards.ui.layout.eval-only/Root-computed";

klipse.cards.ui.layout.eval_only.Root_computed.prototype.om$isComponent = true;

var x31907_31913 = klipse.cards.ui.layout.eval_only.Root_computed;


var x31908_31914 = klipse.cards.ui.layout.eval_only.Root_computed.prototype;


klipse.cards.ui.layout.eval_only.Root_computed.cljs$lang$type = true;

klipse.cards.ui.layout.eval_only.Root_computed.cljs$lang$ctorStr = "klipse.cards.ui.layout.eval-only/Root-computed";

klipse.cards.ui.layout.eval_only.Root_computed.cljs$lang$ctorPrWriter = (function (this__25746__auto__,writer__25747__auto__,opt__25748__auto__){
return cljs.core._write.call(null,writer__25747__auto__,"klipse.cards.ui.layout.eval-only/Root-computed");
});
klipse.cards.ui.layout.eval_only.root_computed = om.next.factory.call(null,klipse.cards.ui.layout.eval_only.Root_computed);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.ui.layout.eval_only","klipse.cards.ui.layout.eval_only",2087506942),new cljs.core.Keyword(null,"klipse-layout-eval-only","klipse-layout-eval-only",-46291144)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"klipse-layout-eval-only",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data,_){
return klipse.cards.ui.layout.eval_only.root_computed.call(null,cljs.core.deref.call(null,data));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code-layout","code-layout",1098272213),new cljs.core.Keyword(null,"eval-only","eval-only",-933784392)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));

//# sourceMappingURL=eval_only.js.map?rel=1465542676102