// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.ui.editors.cljs');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('klipse.ui.editors.editor');
goog.require('klipse.utils');
goog.require('klipse.ui.editors.common');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('om.next');
klipse.ui.editors.cljs.config_editor = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"mode","mode",654403691),"clojure",new cljs.core.Keyword(null,"scrollbarStyle","scrollbarStyle",-963515367),"overlay"], null);
klipse.ui.editors.cljs.placeholder_editor = [cljs.core.str(";; Write your clojurescript expression \n"),cljs.core.str(";; and press Ctrl-Enter or wait for 3 sec to experiment the magic...")].join('');
klipse.ui.editors.cljs.process_input = (function klipse$ui$editors$cljs$process_input(component,s){
if(clojure.string.blank_QMARK_.call(null,s)){
return null;
} else {
return om.next.transact_BANG_.call(null,component,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__23449__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol("input","save","input/save",-905763806,null)),cljs.core._conj.call(null,(function (){var x__23449__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol("cljs","compile","cljs/compile",-2032446198,null)),cljs.core._conj.call(null,(function (){var x__23449__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol("js","eval","js/eval",536962541,null)),cljs.core._conj.call(null,(function (){var x__23449__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol("clj","eval","clj/eval",537127173,null))], null));
}
});
klipse.ui.editors.cljs.init_input = (function klipse$ui$editors$cljs$init_input(component,s){
return om.next.transact_BANG_.call(null,component,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,(function (){var x__23449__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),s], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol("input","save","input/save",-905763806,null))], null));
});
klipse.ui.editors.cljs.init_editor = (function klipse$ui$editors$cljs$init_editor(compiler){
var $ = klipse.ui.editors.editor.create.call(null,"code-cljs",klipse.ui.editors.cljs.config_editor);
return klipse.ui.editors.common.handle_events.call(null,$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972),(3000),new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168),((function ($){
return (function (){
return klipse.ui.editors.cljs.process_input.call(null,compiler,klipse.ui.editors.editor.get_value.call(null,$));
});})($))
], null));
});
/**
 * @constructor
 */
klipse.ui.editors.cljs.Cljs_editor = (function klipse$ui$editors$cljs$Cljs_editor(){
var this__25744__auto__ = this;
React.Component.apply(this__25744__auto__,arguments);

if(!((this__25744__auto__.initLocalState == null))){
this__25744__auto__.state = this__25744__auto__.initLocalState();
} else {
this__25744__auto__.state = {};
}

return this__25744__auto__;
});

klipse.ui.editors.cljs.Cljs_editor.prototype = goog.object.clone(React.Component.prototype);

var x29967_29977 = klipse.ui.editors.cljs.Cljs_editor.prototype;
x29967_29977.componentWillUpdate = ((function (x29967_29977){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
if(((!((this__25679__auto__ == null)))?(((false) || (this__25679__auto__.om$next$Ident$))?true:false):false)){
var ident__25683__auto___29978 = om.next.ident.call(null,this__25679__auto__,om.next.props.call(null,this__25679__auto__));
var next_ident__25684__auto___29979 = om.next.ident.call(null,this__25679__auto__,om.next._next_props.call(null,next_props__25680__auto__,this__25679__auto__));
if(cljs.core.not_EQ_.call(null,ident__25683__auto___29978,next_ident__25684__auto___29979)){
var idxr__25685__auto___29980 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25685__auto___29980 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25685__auto___29980),((function (idxr__25685__auto___29980,ident__25683__auto___29978,next_ident__25684__auto___29979,this__25679__auto__,x29967_29977){
return (function (indexes__25686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25683__auto___29978], null),cljs.core.disj,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25684__auto___29979], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25679__auto__);
});})(idxr__25685__auto___29980,ident__25683__auto___29978,next_ident__25684__auto___29979,this__25679__auto__,x29967_29977))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25679__auto__);
});})(x29967_29977))
;

x29967_29977.shouldComponentUpdate = ((function (x29967_29977){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
var next_children__25682__auto__ = next_props__25680__auto__.children;
var next_props__25680__auto____$1 = goog.object.get(next_props__25680__auto__,"omcljs$value");
var next_props__25680__auto____$2 = (function (){var G__29969 = next_props__25680__auto____$1;
if((next_props__25680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29969);
} else {
return G__29969;
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
});})(x29967_29977))
;

x29967_29977.componentWillUnmount = ((function (x29967_29977){
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
});})(x29967_29977))
;

x29967_29977.componentDidUpdate = ((function (x29967_29977){
return (function (prev_props__25687__auto__,prev_state__25688__auto__){
var this__25679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25679__auto__);
});})(x29967_29977))
;

x29967_29977.isMounted = ((function (x29967_29977){
return (function (){
var this__25679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29967_29977))
;

x29967_29977.componentWillMount = ((function (x29967_29977){
return (function (){
var this__25679__auto__ = this;
var indexer__25689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x29967_29977))
;

x29967_29977.componentDidMount = ((function (x29967_29977){
return (function (){
var this$ = this;
return klipse.ui.editors.cljs.init_editor.call(null,this$);
});})(x29967_29977))
;

x29967_29977.render = ((function (x29967_29977){
return (function (){
var this__25678__auto__ = this;
var this$ = this__25678__auto__;
var _STAR_reconciler_STAR_29970 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29971 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29972 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29973 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29974 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25678__auto__);

om.next._STAR_parent_STAR_ = this__25678__auto__;

try{var input = new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$2(om.next.props.call(null,this$),new cljs.core.Keyword(null,"cljs_in","cljs_in",1284321894).cljs$core$IFn$_invoke$arity$1(klipse.utils.url_parameters.call(null)));
return React.DOM.section({"className": "cljs-editor"},om.util.force_children.call(null,om.dom.textarea.call(null,{"autoFocus": true, "value": input, "id": "code-cljs", "placeholder": klipse.ui.editors.cljs.placeholder_editor})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29974;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29973;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29972;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29971;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29970;
}});})(x29967_29977))
;


klipse.ui.editors.cljs.Cljs_editor.prototype.constructor = klipse.ui.editors.cljs.Cljs_editor;

klipse.ui.editors.cljs.Cljs_editor.prototype.constructor.displayName = "klipse.ui.editors.cljs/Cljs-editor";

klipse.ui.editors.cljs.Cljs_editor.prototype.om$isComponent = true;

var x29975_29981 = klipse.ui.editors.cljs.Cljs_editor;
x29975_29981.om$next$IQuery$ = true;

x29975_29981.om$next$IQuery$query$arity$1 = ((function (x29975_29981){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null);
});})(x29975_29981))
;


var x29976_29982 = klipse.ui.editors.cljs.Cljs_editor.prototype;
x29976_29982.om$next$IQuery$ = true;

x29976_29982.om$next$IQuery$query$arity$1 = ((function (x29976_29982){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961)], null);
});})(x29976_29982))
;


klipse.ui.editors.cljs.Cljs_editor.cljs$lang$type = true;

klipse.ui.editors.cljs.Cljs_editor.cljs$lang$ctorStr = "klipse.ui.editors.cljs/Cljs-editor";

klipse.ui.editors.cljs.Cljs_editor.cljs$lang$ctorPrWriter = (function (this__25746__auto__,writer__25747__auto__,opt__25748__auto__){
return cljs.core._write.call(null,writer__25747__auto__,"klipse.ui.editors.cljs/Cljs-editor");
});
klipse.ui.editors.cljs.cljs_editor = om.next.factory.call(null,klipse.ui.editors.cljs.Cljs_editor);

//# sourceMappingURL=cljs.js.map?rel=1465542669342