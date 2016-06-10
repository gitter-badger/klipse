// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
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
var this__21816__auto__ = this;
React.Component.apply(this__21816__auto__,arguments);

if(!((this__21816__auto__.initLocalState == null))){
this__21816__auto__.state = this__21816__auto__.initLocalState();
} else {
this__21816__auto__.state = {};
}

return this__21816__auto__;
});

klipse.ui.layout.Layout.prototype = goog.object.clone(React.Component.prototype);

var x33937_34022 = klipse.ui.layout.Layout.prototype;
x33937_34022.componentWillUpdate = ((function (x33937_34022){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
if(((!((this__21725__auto__ == null)))?(((false) || (this__21725__auto__.om$next$Ident$))?true:false):false)){
var ident__21729__auto___34025 = om.next.ident(this__21725__auto__,om.next.props(this__21725__auto__));
var next_ident__21730__auto___34026 = om.next.ident(this__21725__auto__,om.next._next_props(next_props__21726__auto__,this__21725__auto__));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ident__21729__auto___34025,next_ident__21730__auto___34026)){
var idxr__21731__auto___34038 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((idxr__21731__auto___34038 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(idxr__21731__auto___34038),((function (idxr__21731__auto___34038,ident__21729__auto___34025,next_ident__21730__auto___34026,this__21725__auto__,x33937_34022){
return (function (indexes__21732__auto__){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__21732__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident__21729__auto___34025], null),cljs.core.disj,this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,next_ident__21730__auto___34026], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21725__auto__);
});})(idxr__21731__auto___34038,ident__21729__auto___34025,next_ident__21730__auto___34026,this__21725__auto__,x33937_34022))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_(this__21725__auto__);

return om.next.merge_pending_state_BANG_(this__21725__auto__);
});})(x33937_34022))
;

x33937_34022.shouldComponentUpdate = ((function (x33937_34022){
return (function (next_props__21726__auto__,next_state__21727__auto__){
var this__21725__auto__ = this;
var next_children__21728__auto__ = next_props__21726__auto__.children;
var next_props__21726__auto____$1 = goog.object.get(next_props__21726__auto__,"omcljs$value");
var next_props__21726__auto____$2 = (function (){var G__33939 = next_props__21726__auto____$1;
if((next_props__21726__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap(G__33939);
} else {
return G__33939;
}
})();
var or__6221__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__21725__auto__),next_props__21726__auto____$2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = this__21725__auto__.state;
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__33944 = this__21725__auto__.state;
var G__33945 = "omcljs$state";
return goog.object.get(G__33944,G__33945);
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
});})(x33937_34022))
;

x33937_34022.componentWillUnmount = ((function (x33937_34022){
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
});})(x33937_34022))
;

x33937_34022.componentDidUpdate = ((function (x33937_34022){
return (function (prev_props__21733__auto__,prev_state__21734__auto__){
var this__21725__auto__ = this;
return om.next.clear_prev_props_BANG_(this__21725__auto__);
});})(x33937_34022))
;

x33937_34022.isMounted = ((function (x33937_34022){
return (function (){
var this__21725__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__21725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33937_34022))
;

x33937_34022.componentWillMount = ((function (x33937_34022){
return (function (){
var this__21725__auto__ = this;
var indexer__21735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__21725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__21735__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__21735__auto__,this__21725__auto__);
}
});})(x33937_34022))
;

x33937_34022.render = ((function (x33937_34022){
return (function (){
var this__21724__auto__ = this;
var this$ = this__21724__auto__;
var _STAR_reconciler_STAR_33946 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33947 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33948 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33949 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33950 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this__21724__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth(this__21724__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this__21724__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument(this__21724__auto__);

om.next._STAR_parent_STAR_ = this__21724__auto__;

try{var map__33951 = om.next.props(this$);
var map__33951__$1 = ((((!((map__33951 == null)))?((((map__33951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33951):map__33951);
var code_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33951__$1,cljs.core.cst$kw$code_DASH_layout);
var G__33953 = (((code_layout instanceof cljs.core.Keyword))?code_layout.fqn:null);
switch (G__33953) {
case "eval-only":
var G__33954 = {"className": "klipse-layout klipse-layout-eval-only"};
var G__33955 = om.util.force_children((function (){var G__33957 = {"className": "klipse-item"};
var G__33958 = om.util.force_children((function (){var G__33959 = om.next.props(this$);
return (klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1(G__33959) : klipse.ui.editors.cljs.cljs_editor.call(null,G__33959));
})());
return React.DOM.div(G__33957,G__33958);
})());
var G__33956 = om.util.force_children((function (){var G__33960 = {"className": "klipse-item"};
var G__33961 = om.util.force_children((function (){var G__33962 = om.next.props(this$);
return (klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1(G__33962) : klipse.ui.outputs.cljs.cljs_textarea.call(null,G__33962));
})());
return React.DOM.div(G__33960,G__33961);
})());
return React.DOM.div(G__33954,G__33955,G__33956);

break;
case "js-only":
var G__33963 = {"className": "klipse-layout klipse-layout-js-only"};
var G__33964 = om.util.force_children((function (){var G__33966 = {"className": "klipse-item"};
var G__33967 = om.util.force_children((function (){var G__33968 = om.next.props(this$);
return (klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1(G__33968) : klipse.ui.editors.cljs.cljs_editor.call(null,G__33968));
})());
return React.DOM.div(G__33966,G__33967);
})());
var G__33965 = om.util.force_children((function (){var G__33969 = {"className": "klipse-item"};
var G__33970 = om.util.force_children((function (){var G__33971 = om.next.props(this$);
return (klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1(G__33971) : klipse.ui.editors.js.js_editor.call(null,G__33971));
})());
return React.DOM.div(G__33969,G__33970);
})());
return React.DOM.div(G__33963,G__33964,G__33965);

break;
default:
var G__33972 = {"className": "klipse-layout klipse-layout-global"};
var G__33973 = om.util.force_children((function (){var G__33977 = {"className": "klipse-item"};
var G__33978 = om.util.force_children((function (){var G__33979 = om.next.props(this$);
return (klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.cljs.cljs_editor.cljs$core$IFn$_invoke$arity$1(G__33979) : klipse.ui.editors.cljs.cljs_editor.call(null,G__33979));
})());
return React.DOM.div(G__33977,G__33978);
})());
var G__33974 = om.util.force_children((function (){var G__33980 = {"className": "klipse-item"};
var G__33981 = om.util.force_children((function (){var G__33982 = om.next.props(this$);
return (klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.editors.js.js_editor.cljs$core$IFn$_invoke$arity$1(G__33982) : klipse.ui.editors.js.js_editor.call(null,G__33982));
})());
return React.DOM.div(G__33980,G__33981);
})());
var G__33975 = om.util.force_children((function (){var G__33985 = {"className": "klipse-item"};
var G__33986 = om.util.force_children((function (){var G__33987 = om.next.props(this$);
return (klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.cljs.cljs_textarea.cljs$core$IFn$_invoke$arity$1(G__33987) : klipse.ui.outputs.cljs.cljs_textarea.call(null,G__33987));
})());
return React.DOM.div(G__33985,G__33986);
})());
var G__33976 = om.util.force_children((function (){var G__33988 = {"className": "klipse-item"};
var G__33989 = om.util.force_children((function (){var G__33990 = om.next.props(this$);
return (klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1 ? klipse.ui.outputs.js.js_textarea.cljs$core$IFn$_invoke$arity$1(G__33990) : klipse.ui.outputs.js.js_textarea.call(null,G__33990));
})());
return React.DOM.div(G__33988,G__33989);
})());
return React.DOM.div(G__33972,G__33973,G__33974,G__33975,G__33976);

}
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33950;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33949;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33948;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33947;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33946;
}});})(x33937_34022))
;


klipse.ui.layout.Layout.prototype.constructor = klipse.ui.layout.Layout;

klipse.ui.layout.Layout.prototype.constructor.displayName = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.prototype.om$isComponent = true;

var x33991_34102 = klipse.ui.layout.Layout;
x33991_34102.om$next$IQuery$ = true;

x33991_34102.om$next$IQuery$query$arity$1 = ((function (x33991_34102){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code_DASH_layout),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.array_seq([(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$compilation),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.js.Js_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_clj),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_js),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()], 0)))));
});})(x33991_34102))
;


var x34002_34104 = klipse.ui.layout.Layout.prototype;
x34002_34104.om$next$IQuery$ = true;

x34002_34104.om$next$IQuery$query$arity$1 = ((function (x34002_34104){
return (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$code_DASH_layout),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$input),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.cljs.Cljs_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.array_seq([(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$compilation),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.editors.js.Js_editor);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_clj),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.cljs.Cljs_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$evaluation_DASH_js),(function (){var x__7055__auto__ = om.next.get_query(klipse.ui.outputs.js.Js_textarea);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()], 0)))));
});})(x34002_34104))
;


klipse.ui.layout.Layout.cljs$lang$type = true;

klipse.ui.layout.Layout.cljs$lang$ctorStr = "klipse.ui.layout/Layout";

klipse.ui.layout.Layout.cljs$lang$ctorPrWriter = (function (this__21818__auto__,writer__21819__auto__,opt__21820__auto__){
return cljs.core._write(writer__21819__auto__,"klipse.ui.layout/Layout");
});
klipse.ui.layout.layout = om.next.factory.cljs$core$IFn$_invoke$arity$1(klipse.ui.layout.Layout);
