// Compiled by ClojureScript 1.9.36 {}
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
var this__25744__auto__ = this;
React.Component.apply(this__25744__auto__,arguments);

if(!((this__25744__auto__.initLocalState == null))){
this__25744__auto__.state = this__25744__auto__.initLocalState();
} else {
this__25744__auto__.state = {};
}

return this__25744__auto__;
});

klipse.cards.ui.editors.Editor_cljs_computed.prototype = goog.object.clone(React.Component.prototype);
}

var x37741_37751 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;
x37741_37751.componentWillUpdate = ((function (x37741_37751){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
if(((!((this__25679__auto__ == null)))?(((false) || (this__25679__auto__.om$next$Ident$))?true:false):false)){
var ident__25683__auto___37752 = om.next.ident.call(null,this__25679__auto__,om.next.props.call(null,this__25679__auto__));
var next_ident__25684__auto___37753 = om.next.ident.call(null,this__25679__auto__,om.next._next_props.call(null,next_props__25680__auto__,this__25679__auto__));
if(cljs.core.not_EQ_.call(null,ident__25683__auto___37752,next_ident__25684__auto___37753)){
var idxr__25685__auto___37754 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25685__auto___37754 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25685__auto___37754),((function (idxr__25685__auto___37754,ident__25683__auto___37752,next_ident__25684__auto___37753,this__25679__auto__,x37741_37751){
return (function (indexes__25686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25683__auto___37752], null),cljs.core.disj,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25684__auto___37753], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25679__auto__);
});})(idxr__25685__auto___37754,ident__25683__auto___37752,next_ident__25684__auto___37753,this__25679__auto__,x37741_37751))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25679__auto__);
});})(x37741_37751))
;

x37741_37751.shouldComponentUpdate = ((function (x37741_37751){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
var next_children__25682__auto__ = next_props__25680__auto__.children;
var next_props__25680__auto____$1 = goog.object.get(next_props__25680__auto__,"omcljs$value");
var next_props__25680__auto____$2 = (function (){var G__37743 = next_props__25680__auto____$1;
if((next_props__25680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37743);
} else {
return G__37743;
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
});})(x37741_37751))
;

x37741_37751.componentWillUnmount = ((function (x37741_37751){
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
});})(x37741_37751))
;

x37741_37751.componentDidUpdate = ((function (x37741_37751){
return (function (prev_props__25687__auto__,prev_state__25688__auto__){
var this__25679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25679__auto__);
});})(x37741_37751))
;

x37741_37751.isMounted = ((function (x37741_37751){
return (function (){
var this__25679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37741_37751))
;

x37741_37751.componentWillMount = ((function (x37741_37751){
return (function (){
var this__25679__auto__ = this;
var indexer__25689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x37741_37751))
;

x37741_37751.render = ((function (x37741_37751){
return (function (){
var this__25678__auto__ = this;
var this$ = this__25678__auto__;
var _STAR_reconciler_STAR_37744 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37745 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37746 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37747 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37748 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25678__auto__);

om.next._STAR_parent_STAR_ = this__25678__auto__;

try{return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37748;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37747;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37746;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37745;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37744;
}});})(x37741_37751))
;


klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor = klipse.cards.ui.editors.Editor_cljs_computed;

klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.prototype.om$isComponent = true;

var x37749_37755 = klipse.cards.ui.editors.Editor_cljs_computed;


var x37750_37756 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;


klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorPrWriter = (function (this__25746__auto__,writer__25747__auto__,opt__25748__auto__){
return cljs.core._write.call(null,writer__25747__auto__,"klipse.cards.ui.editors/Editor-cljs-computed");
});
if(typeof klipse.cards.ui.editors.editor_cljs_reconciler !== 'undefined'){
} else {
klipse.cards.ui.editors.editor_cljs_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 103212 2)"], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.control.control.parser], null));
}
/**
 * @constructor
 */
klipse.cards.ui.editors.Root_computed = (function klipse$cards$ui$editors$Root_computed(){
var this__25744__auto__ = this;
React.Component.apply(this__25744__auto__,arguments);

if(!((this__25744__auto__.initLocalState == null))){
this__25744__auto__.state = this__25744__auto__.initLocalState();
} else {
this__25744__auto__.state = {};
}

return this__25744__auto__;
});

klipse.cards.ui.editors.Root_computed.prototype = goog.object.clone(React.Component.prototype);

var x37761_37773 = klipse.cards.ui.editors.Root_computed.prototype;
x37761_37773.componentWillUpdate = ((function (x37761_37773){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
if(((!((this__25679__auto__ == null)))?(((false) || (this__25679__auto__.om$next$Ident$))?true:false):false)){
var ident__25683__auto___37774 = om.next.ident.call(null,this__25679__auto__,om.next.props.call(null,this__25679__auto__));
var next_ident__25684__auto___37775 = om.next.ident.call(null,this__25679__auto__,om.next._next_props.call(null,next_props__25680__auto__,this__25679__auto__));
if(cljs.core.not_EQ_.call(null,ident__25683__auto___37774,next_ident__25684__auto___37775)){
var idxr__25685__auto___37776 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25685__auto___37776 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25685__auto___37776),((function (idxr__25685__auto___37776,ident__25683__auto___37774,next_ident__25684__auto___37775,this__25679__auto__,x37761_37773){
return (function (indexes__25686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25683__auto___37774], null),cljs.core.disj,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25684__auto___37775], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25679__auto__);
});})(idxr__25685__auto___37776,ident__25683__auto___37774,next_ident__25684__auto___37775,this__25679__auto__,x37761_37773))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25679__auto__);
});})(x37761_37773))
;

x37761_37773.shouldComponentUpdate = ((function (x37761_37773){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
var next_children__25682__auto__ = next_props__25680__auto__.children;
var next_props__25680__auto____$1 = goog.object.get(next_props__25680__auto__,"omcljs$value");
var next_props__25680__auto____$2 = (function (){var G__37763 = next_props__25680__auto____$1;
if((next_props__25680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__37763);
} else {
return G__37763;
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
});})(x37761_37773))
;

x37761_37773.componentWillUnmount = ((function (x37761_37773){
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
});})(x37761_37773))
;

x37761_37773.componentDidUpdate = ((function (x37761_37773){
return (function (prev_props__25687__auto__,prev_state__25688__auto__){
var this__25679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25679__auto__);
});})(x37761_37773))
;

x37761_37773.isMounted = ((function (x37761_37773){
return (function (){
var this__25679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37761_37773))
;

x37761_37773.componentWillMount = ((function (x37761_37773){
return (function (){
var this__25679__auto__ = this;
var indexer__25689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x37761_37773))
;

x37761_37773.render = ((function (x37761_37773){
return (function (){
var this__25678__auto__ = this;
var this$ = this__25678__auto__;
var _STAR_reconciler_STAR_37764 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37765 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37766 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37767 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37768 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25678__auto__);

om.next._STAR_parent_STAR_ = this__25678__auto__;

try{var map__37769 = om.next.get_computed.call(null,this$);
var map__37769__$1 = ((((!((map__37769 == null)))?((((map__37769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37769):map__37769);
var updateJS = cljs.core.get.call(null,map__37769__$1,new cljs.core.Keyword(null,"updateJS","updateJS",-1174586884));
return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,React.DOM.div({"className": "toolbox"},om.util.force_children.call(null,React.DOM.button({"onClick": updateJS},om.util.force_children.call(null,"Add JS code to editor"))))),om.util.force_children.call(null,klipse.ui.editors.js.js_editor.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37768;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37767;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37766;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37765;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37764;
}});})(x37761_37773))
;


klipse.cards.ui.editors.Root_computed.prototype.constructor = klipse.cards.ui.editors.Root_computed;

klipse.cards.ui.editors.Root_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.prototype.om$isComponent = true;

var x37771_37777 = klipse.cards.ui.editors.Root_computed;


var x37772_37778 = klipse.cards.ui.editors.Root_computed.prototype;


klipse.cards.ui.editors.Root_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorPrWriter = (function (this__25746__auto__,writer__25747__auto__,opt__25748__auto__){
return cljs.core._write.call(null,writer__25747__auto__,"klipse.cards.ui.editors/Root-computed");
});
klipse.cards.ui.editors.root_computed = om.next.factory.call(null,klipse.cards.ui.editors.Root_computed);

//# sourceMappingURL=editors.js.map?rel=1465542892237