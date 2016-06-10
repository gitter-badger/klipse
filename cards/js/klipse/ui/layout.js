// Compiled by ClojureScript 1.9.36 {}
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
var this__25744__auto__ = this;
React.Component.apply(this__25744__auto__,arguments);

if(!((this__25744__auto__.initLocalState == null))){
this__25744__auto__.state = this__25744__auto__.initLocalState();
} else {
this__25744__auto__.state = {};
}

return this__25744__auto__;
});

klipse.ui.layout.Layout.prototype = goog.object.clone(React.Component.prototype);

var x31552_31565 = klipse.ui.layout.Layout.prototype;
x31552_31565.componentWillUpdate = ((function (x31552_31565){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
if(((!((this__25679__auto__ == null)))?(((false) || (this__25679__auto__.om$next$Ident$))?true:false):false)){
var ident__25683__auto___31566 = om.next.ident.call(null,this__25679__auto__,om.next.props.call(null,this__25679__auto__));
var next_ident__25684__auto___31567 = om.next.ident.call(null,this__25679__auto__,om.next._next_props.call(null,next_props__25680__auto__,this__25679__auto__));
if(cljs.core.not_EQ_.call(null,ident__25683__auto___31566,next_ident__25684__auto___31567)){
var idxr__25685__auto___31568 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25685__auto___31568 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25685__auto___31568),((function (idxr__25685__auto___31568,ident__25683__auto___31566,next_ident__25684__auto___31567,this__25679__auto__,x31552_31565){
return (function (indexes__25686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25683__auto___31566], null),cljs.core.disj,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25684__auto___31567], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25679__auto__);
});})(idxr__25685__auto___31568,ident__25683__auto___31566,next_ident__25684__auto___31567,this__25679__auto__,x31552_31565))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25679__auto__);
});})(x31552_31565))
;

x31552_31565.shouldComponentUpdate = ((function (x31552_31565){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
var next_children__25682__auto__ = next_props__25680__auto__.children;
var next_props__25680__auto____$1 = goog.object.get(next_props__25680__auto__,"omcljs$value");
var next_props__25680__auto____$2 = (function (){var G__31554 = next_props__25680__auto____$1;
if((next_props__25680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31554);
} else {
return G__31554;
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
});})(x31552_31565))
;

x31552_31565.componentWillUnmount = ((function (x31552_31565){
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
});})(x31552_31565))
;

x31552_31565.componentDidUpdate = ((function (x31552_31565){
return (function (prev_props__25687__auto__,prev_state__25688__auto__){
var this__25679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25679__auto__);
});})(x31552_31565))
;

x31552_31565.isMounted = ((function (x31552_31565){
return (function (){
var this__25679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31552_31565))
;

x31552_31565.componentWillMount = ((function (x31552_31565){
return (function (){
var this__25679__auto__ = this;
var indexer__25689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x31552_31565))
;

x31552_31565.render = ((function (x31552_31565){
return (function (){
var this__25678__auto__ = this;
var this$ = this__25678__auto__;
var _STAR_reconciler_STAR_31555 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31556 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31557 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31558 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31559 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25678__auto__);

om.next._STAR_parent_STAR_ = this__25678__auto__;

try{var map__31560 = om.next.props.call(null,this$);
var map__31560__$1 = ((((!((map__31560 == null)))?((((map__31560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31560):map__31560);
var code_layout = cljs.core.get.call(null,map__31560__$1,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213));
var G__31562 = (((code_layout instanceof cljs.core.Keyword))?code_layout.fqn:null);
switch (G__31562) {
case "eval-only":
return React.DOM.div({"className": "klipse-layout klipse-layout-eval-only"},om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$))))));

break;
case "js-only":
return React.DOM.div({"className": "klipse-layout klipse-layout-js-only"},om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.editors.js.js_editor.call(null,om.next.props.call(null,this$))))));

break;
default:
return React.DOM.div({"className": "klipse-layout klipse-layout-global"},om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.editors.js.js_editor.call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.outputs.cljs.cljs_textarea.call(null,om.next.props.call(null,this$))))),om.util.force_children.call(null,React.DOM.div({"className": "klipse-item"},om.util.force_children.call(null,klipse.ui.outputs.js.js_textarea.call(null,om.next.props.call(null,this$))))));

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31559;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31558;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31557;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31556;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31555;
}});})(x31552_31565))
;


klipse.ui.layout.Layout.prototype.constructor = klipse.ui.layout.Layout;

klipse.ui.layout.Layout.prototype.constructor.displayName = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.prototype.om$isComponent = true;

var x31563_31570 = klipse.ui.layout.Layout;
x31563_31570.om$next$IQuery$ = true;

x31563_31570.om$next$IQuery$query$arity$1 = ((function (x31563_31570){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input","input",556931961)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.editors.js.Js_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
});})(x31563_31570))
;


var x31564_31571 = klipse.ui.layout.Layout.prototype;
x31564_31571.om$next$IQuery$ = true;

x31564_31571.om$next$IQuery$query$arity$1 = ((function (x31564_31571){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"code-layout","code-layout",1098272213)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"input","input",556931961)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"compilation","compilation",-1328774561)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.editors.js.Js_editor);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-clj","evaluation-clj",1549949402)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)),(function (){var x__23449__auto__ = om.next.get_query.call(null,klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
});})(x31564_31571))
;


klipse.ui.layout.Layout.cljs$lang$type = true;

klipse.ui.layout.Layout.cljs$lang$ctorStr = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.cljs$lang$ctorPrWriter = (function (this__25746__auto__,writer__25747__auto__,opt__25748__auto__){
return cljs.core._write.call(null,writer__25747__auto__,"klipse.ui.layout/Layout");
});
klipse.ui.layout.layout = om.next.factory.call(null,klipse.ui.layout.Layout);

//# sourceMappingURL=layout.js.map?rel=1465542675737