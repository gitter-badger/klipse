// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.ui.outputs.cljs');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.outputs.cljs.placeholder_textarea = ";; Press Ctrl-Enter or wait for 3 sec to eval in clojure...";
/**
 * @constructor
 */
klipse.ui.outputs.cljs.Cljs_textarea = (function klipse$ui$outputs$cljs$Cljs_textarea(){
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.ui.outputs.cljs.Cljs_textarea.prototype = goog.object.clone(React.Component.prototype);

var x58198_58220 = klipse.ui.outputs.cljs.Cljs_textarea.prototype;
x58198_58220.componentWillUpdate = ((function (x58198_58220){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___58221 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___58222 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___58221,next_ident__21730__auto___58222)){
var idxr__21731__auto___58223 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___58223 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___58223),((function (idxr__21731__auto___58223,ident__21729__auto___58221,next_ident__21730__auto___58222,this__21725__auto__,x58198_58220){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___58221], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___58222], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___58223,ident__21729__auto___58221,next_ident__21730__auto___58222,this__21725__auto__,x58198_58220))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x58198_58220))
;

x58198_58220.shouldComponentUpdate = ((function (x58198_58220){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__58200 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__58200);
} else {
return G__58200;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__58205 = this__21725__auto__.state;
var G__58206 = "omcljs$state";
return goog.object.get(G__58205,G__58206);
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
});})(x58198_58220))
;

x58198_58220.componentWillUnmount = ((function (x58198_58220){
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
});})(x58198_58220))
;

x58198_58220.componentDidUpdate = ((function (x58198_58220){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x58198_58220))
;

x58198_58220.isMounted = ((function (x58198_58220){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x58198_58220))
;

x58198_58220.componentWillMount = ((function (x58198_58220){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x58198_58220))
;

x58198_58220.render = ((function (x58198_58220){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_58207 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_58208 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_58209 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_58210 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_58211 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var vec__58212 = cljs.core.cst$kw$evaluation_DASH_clj.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58212,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58212,(1),null);
var status_class = (cljs.core.truth_(status)?cljs.core.name(status):null);
var G__58215 = {"className": "cljs-textarea"};
var G__58216 = om.util.force_children((function (){var G__58217 = {"value": (function (){var or__6221__auto__ = result;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return "";
}
})(), "className": status_class, "placeholder": klipse.ui.outputs.cljs.placeholder_textarea, "readOnly": true};
return (om.dom.textarea.cljs$core$IFn$_invoke$arity$1 ? om.dom.textarea.cljs$core$IFn$_invoke$arity$1(G__58217) : om.dom.textarea.call(null,G__58217));
})());
return React.DOM.section(G__58215,G__58216);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_58211;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_58210;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_58209;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_58208;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_58207;
}});})(x58198_58220))
;


klipse.ui.outputs.cljs.Cljs_textarea.prototype.constructor = klipse.ui.outputs.cljs.Cljs_textarea;

klipse.ui.outputs.cljs.Cljs_textarea.prototype.constructor.displayName = "klipse.ui.outputs.cljs/Cljs-textarea";

klipse.ui.outputs.cljs.Cljs_textarea.prototype.om$isComponent = true;

var x58218_58224 = klipse.ui.outputs.cljs.Cljs_textarea;
x58218_58224.om$next$IQuery$ = true;

x58218_58224.om$next$IQuery$query$arity$1 = ((function (x58218_58224){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_clj], null);
});})(x58218_58224))
;


var x58219_58225 = klipse.ui.outputs.cljs.Cljs_textarea.prototype;
x58219_58225.om$next$IQuery$ = true;

x58219_58225.om$next$IQuery$query$arity$1 = ((function (x58219_58225){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$evaluation_DASH_clj], null);
});})(x58219_58225))
;


klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$type = true;

klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$ctorStr = "klipse.ui.outputs.cljs/Cljs-textarea";

klipse.ui.outputs.cljs.Cljs_textarea.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.ui.outputs.cljs/Cljs-textarea");
});
klipse.ui.outputs.cljs.cljs_textarea = om.next.factory.cljs$core$IFn$_invoke$arity$1(klipse.ui.outputs.cljs.Cljs_textarea);
