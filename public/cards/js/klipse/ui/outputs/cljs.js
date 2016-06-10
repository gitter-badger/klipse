// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.ui.outputs.cljs');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.outputs.cljs.placeholder_textarea = ";; Press Ctrl-Enter or wait for 3 sec to eval in clojure...";
/**
 * @constructor
 */
klipse.ui.outputs.cljs.Cljs_textarea = (function klipse$ui$outputs$cljs$Cljs_textarea(){
var this__23458__auto__ = this;
React.Component.apply(this__23458__auto__,arguments);

if(!((this__23458__auto__.initLocalState == null))){
this__23458__auto__.state = this__23458__auto__.initLocalState();
} else {
this__23458__auto__.state = {};
}

return this__23458__auto__;
});

klipse.ui.outputs.cljs.Cljs_textarea.prototype = goog.object.clone(React.Component.prototype);

var x75760_75773 = klipse.ui.outputs.cljs.Cljs_textarea.prototype;
x75760_75773.componentWillUpdate = ((function (x75760_75773){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
if(((!((this__23393__auto__ == null)))?(((false) || (this__23393__auto__.om$next$Ident$))?true:false):false)){
var ident__23397__auto___75774 = om.next.ident.call(null,this__23393__auto__,om.next.props.call(null,this__23393__auto__));
var next_ident__23398__auto___75775 = om.next.ident.call(null,this__23393__auto__,om.next._next_props.call(null,next_props__23394__auto__,this__23393__auto__));
if(cljs.core.not_EQ_.call(null,ident__23397__auto___75774,next_ident__23398__auto___75775)){
var idxr__23399__auto___75776 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23399__auto___75776 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23399__auto___75776),((function (idxr__23399__auto___75776,ident__23397__auto___75774,next_ident__23398__auto___75775,this__23393__auto__,x75760_75773){
return (function (indexes__23400__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23400__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23397__auto___75774], null),cljs.core.disj,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23398__auto___75775], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23393__auto__);
});})(idxr__23399__auto___75776,ident__23397__auto___75774,next_ident__23398__auto___75775,this__23393__auto__,x75760_75773))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23393__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23393__auto__);
});})(x75760_75773))
;

x75760_75773.shouldComponentUpdate = ((function (x75760_75773){
return (function (next_props__23394__auto__,next_state__23395__auto__){
var this__23393__auto__ = this;
var next_children__23396__auto__ = next_props__23394__auto__.children;
var next_props__23394__auto____$1 = goog.object.get(next_props__23394__auto__,"omcljs$value");
var next_props__23394__auto____$2 = (function (){var G__75762 = next_props__23394__auto____$1;
if((next_props__23394__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__75762);
} else {
return G__75762;
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
});})(x75760_75773))
;

x75760_75773.componentWillUnmount = ((function (x75760_75773){
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
});})(x75760_75773))
;

x75760_75773.componentDidUpdate = ((function (x75760_75773){
return (function (prev_props__23401__auto__,prev_state__23402__auto__){
var this__23393__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23393__auto__);
});})(x75760_75773))
;

x75760_75773.isMounted = ((function (x75760_75773){
return (function (){
var this__23393__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23393__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x75760_75773))
;

x75760_75773.componentWillMount = ((function (x75760_75773){
return (function (){
var this__23393__auto__ = this;
var indexer__23403__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23393__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23403__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23403__auto__,this__23393__auto__);
}
});})(x75760_75773))
;

x75760_75773.render = ((function (x75760_75773){
return (function (){
var this__23392__auto__ = this;
var this$ = this__23392__auto__;
var _STAR_reconciler_STAR_75763 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_75764 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_75765 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_75766 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_75767 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23392__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23392__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23392__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23392__auto__);

om.next._STAR_parent_STAR_ = this__23392__auto__;

try{var vec__75768 = new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var status = cljs.core.nth.call(null,vec__75768,(0),null);
var result = cljs.core.nth.call(null,vec__75768,(1),null);
var status_class = (cljs.core.truth_(status)?cljs.core.name.call(null,status):null);
return React.DOM.section({"className": "cljs-textarea"},om.util.force_children.call(null,om.dom.textarea.call(null,{"value": (function (){var or__6221__auto__ = result;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return "";
}
})(), "className": status_class, "placeholder": klipse.ui.outputs.cljs.placeholder_textarea, "readOnly": true})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_75767;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_75766;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_75765;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_75764;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_75763;
}});})(x75760_75773))
;


klipse.ui.outputs.cljs.Cljs_textarea.prototype.constructor = klipse.ui.outputs.cljs.Cljs_textarea;

klipse.ui.outputs.cljs.Cljs_textarea.prototype.constructor.displayName = "klipse.ui.outputs.cljs/Cljs-textarea";

klipse.ui.outputs.cljs.Cljs_textarea.prototype.om$isComponent = true;

var x75771_75777 = klipse.ui.outputs.cljs.Cljs_textarea;
x75771_75777.om$next$IQuery$ = true;

x75771_75777.om$next$IQuery$query$arity$1 = ((function (x75771_75777){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x75771_75777))
;


var x75772_75778 = klipse.ui.outputs.cljs.Cljs_textarea.prototype;
x75772_75778.om$next$IQuery$ = true;

x75772_75778.om$next$IQuery$query$arity$1 = ((function (x75772_75778){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)], null);
});})(x75772_75778))
;


klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$type = true;

klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$ctorStr = "klipse.ui.outputs.cljs/Cljs-textarea";

klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$ctorPrWriter = (function (this__23460__auto__,writer__23461__auto__,opt__23462__auto__){
return cljs.core._write.call(null,writer__23461__auto__,"klipse.ui.outputs.cljs/Cljs-textarea");
});
klipse.ui.outputs.cljs.cljs_textarea = om.next.factory.call(null,klipse.ui.outputs.cljs.Cljs_textarea);

//# sourceMappingURL=cljs.js.map