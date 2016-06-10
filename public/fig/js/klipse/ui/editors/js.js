// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.ui.editors.js');
goog.require('cljs.core');
goog.require('klipse.ui.editors.editor');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.editors.js.config_editor = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),true,new cljs.core.Keyword(null,"mode","mode",654403691),"javascript",new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"overlay"], null);
klipse.ui.editors.js.placeholder_editor = ";; Press Ctrl-Enter or wait for 3 sec to transpile...";
klipse.ui.editors.js.init_editor = (function klipse$ui$editors$js$init_editor(compiler){
return klipse.ui.editors.editor.create.call(null,"code-js",klipse.ui.editors.js.config_editor);
});
/**
 * @constructor
 */
klipse.ui.editors.js.Js_editor = (function klipse$ui$editors$js$Js_editor(){
var this__40383__auto__ = this;
React.Component.apply(this__40383__auto__,arguments);

if(!((this__40383__auto__.initLocalState == null))){
this__40383__auto__.state = this__40383__auto__.initLocalState();
} else {
this__40383__auto__.state = {};
}

return this__40383__auto__;
});

klipse.ui.editors.js.Js_editor.prototype = goog.object.clone(React.Component.prototype);

var x41580_41593 = klipse.ui.editors.js.Js_editor.prototype;
x41580_41593.componentWillUpdate = ((function (x41580_41593){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
if(((!((this__40318__auto__ == null)))?(((false) || (this__40318__auto__.om$next$Ident$))?true:false):false)){
var ident__40322__auto___41594 = om.next.ident.call(null,this__40318__auto__,om.next.props.call(null,this__40318__auto__));
var next_ident__40323__auto___41595 = om.next.ident.call(null,this__40318__auto__,om.next._next_props.call(null,next_props__40319__auto__,this__40318__auto__));
if(cljs.core.not_EQ_.call(null,ident__40322__auto___41594,next_ident__40323__auto___41595)){
var idxr__40324__auto___41596 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40324__auto___41596 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40324__auto___41596),((function (idxr__40324__auto___41596,ident__40322__auto___41594,next_ident__40323__auto___41595,this__40318__auto__,x41580_41593){
return (function (indexes__40325__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40325__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40322__auto___41594], null),cljs.core.disj,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40323__auto___41595], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40318__auto__);
});})(idxr__40324__auto___41596,ident__40322__auto___41594,next_ident__40323__auto___41595,this__40318__auto__,x41580_41593))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40318__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40318__auto__);
});})(x41580_41593))
;

x41580_41593.shouldComponentUpdate = ((function (x41580_41593){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
var next_children__40321__auto__ = next_props__40319__auto__.children;
var next_props__40319__auto____$1 = goog.object.get(next_props__40319__auto__,"omcljs$value");
var next_props__40319__auto____$2 = (function (){var G__41582 = next_props__40319__auto____$1;
if((next_props__40319__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41582);
} else {
return G__41582;
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
});})(x41580_41593))
;

x41580_41593.componentWillUnmount = ((function (x41580_41593){
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
});})(x41580_41593))
;

x41580_41593.isMounted = ((function (x41580_41593){
return (function (){
var this__40318__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40318__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41580_41593))
;

x41580_41593.componentWillMount = ((function (x41580_41593){
return (function (){
var this__40318__auto__ = this;
var indexer__40328__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40328__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40328__auto__,this__40318__auto__);
}
});})(x41580_41593))
;

x41580_41593.componentDidUpdate = ((function (x41580_41593){
return (function (prev_props__40308__auto__,prev_state__40309__auto__){
var this__40307__auto__ = this;
var this$ = this__40307__auto__;
var prev_props = om.next._prev_props.call(null,prev_props__40308__auto__,this__40307__auto__);
var prev_state = goog.object.get(prev_state__40309__auto__,"omcljs$previousState");
var vec__41583_41597 = new cljs.core.Keyword(null,"compilation","compilation",-1328774561).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var status_41598 = cljs.core.nth.call(null,vec__41583_41597,(0),null);
var result_41599 = cljs.core.nth.call(null,vec__41583_41597,(1),null);
var editor_js_41600 = om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"editor","editor",-989377770));
if(cljs.core.truth_(editor_js_41600)){
klipse.ui.editors.editor.goto_start.call(null,klipse.ui.editors.editor.auto_indent.call(null,klipse.ui.editors.editor.auto_format.call(null,klipse.ui.editors.editor.set_value.call(null,editor_js_41600,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"ok","ok",967785236),status_41598))?result_41599:" ")))));
} else {
}

return om.next.clear_prev_props_BANG_.call(null,this__40307__auto__);
});})(x41580_41593))
;

x41580_41593.componentDidMount = ((function (x41580_41593){
return (function (){
var this$ = this;
return om.next.set_state_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor","editor",-989377770),klipse.ui.editors.js.init_editor.call(null,this$)], null));
});})(x41580_41593))
;

x41580_41593.render = ((function (x41580_41593){
return (function (){
var this__40317__auto__ = this;
var this$ = this__40317__auto__;
var _STAR_reconciler_STAR_41586 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41587 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41588 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41589 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41590 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40317__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40317__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40317__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40317__auto__);

om.next._STAR_parent_STAR_ = this__40317__auto__;

try{return React.DOM.section({"className": "js-editor"},om.util.force_children.call(null,om.dom.textarea.call(null,{"id": "code-js", "placeholder": klipse.ui.editors.js.placeholder_editor})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41590;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41589;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41588;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41587;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41586;
}});})(x41580_41593))
;


klipse.ui.editors.js.Js_editor.prototype.constructor = klipse.ui.editors.js.Js_editor;

klipse.ui.editors.js.Js_editor.prototype.constructor.displayName = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.prototype.om$isComponent = true;

var x41591_41601 = klipse.ui.editors.js.Js_editor;
x41591_41601.om$next$IQuery$ = true;

x41591_41601.om$next$IQuery$query$arity$1 = ((function (x41591_41601){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null);
});})(x41591_41601))
;


var x41592_41602 = klipse.ui.editors.js.Js_editor.prototype;
x41592_41602.om$next$IQuery$ = true;

x41592_41602.om$next$IQuery$query$arity$1 = ((function (x41592_41602){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null);
});})(x41592_41602))
;


klipse.ui.editors.js.Js_editor.cljs$lang$type = true;

klipse.ui.editors.js.Js_editor.cljs$lang$ctorStr = "klipse.ui.editors.js/Js-editor";

klipse.ui.editors.js.Js_editor.cljs$lang$ctorPrWriter = (function (this__40385__auto__,writer__40386__auto__,opt__40387__auto__){
return cljs.core._write.call(null,writer__40386__auto__,"klipse.ui.editors.js/Js-editor");
});
klipse.ui.editors.js.js_editor = om.next.factory.call(null,klipse.ui.editors.js.Js_editor);

//# sourceMappingURL=js.js.map?rel=1465451169192