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

var x38216_38226 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;
x38216_38226.componentWillUpdate = ((function (x38216_38226){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
if(((!((this__25679__auto__ == null)))?(((false) || (this__25679__auto__.om$next$Ident$))?true:false):false)){
var ident__25683__auto___38227 = om.next.ident.call(null,this__25679__auto__,om.next.props.call(null,this__25679__auto__));
var next_ident__25684__auto___38228 = om.next.ident.call(null,this__25679__auto__,om.next._next_props.call(null,next_props__25680__auto__,this__25679__auto__));
if(cljs.core.not_EQ_.call(null,ident__25683__auto___38227,next_ident__25684__auto___38228)){
var idxr__25685__auto___38229 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25685__auto___38229 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25685__auto___38229),((function (idxr__25685__auto___38229,ident__25683__auto___38227,next_ident__25684__auto___38228,this__25679__auto__,x38216_38226){
return (function (indexes__25686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25683__auto___38227], null),cljs.core.disj,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25684__auto___38228], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25679__auto__);
});})(idxr__25685__auto___38229,ident__25683__auto___38227,next_ident__25684__auto___38228,this__25679__auto__,x38216_38226))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25679__auto__);
});})(x38216_38226))
;

x38216_38226.shouldComponentUpdate = ((function (x38216_38226){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
var next_children__25682__auto__ = next_props__25680__auto__.children;
var next_props__25680__auto____$1 = goog.object.get(next_props__25680__auto__,"omcljs$value");
var next_props__25680__auto____$2 = (function (){var G__38218 = next_props__25680__auto____$1;
if((next_props__25680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__38218);
} else {
return G__38218;
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
});})(x38216_38226))
;

x38216_38226.componentWillUnmount = ((function (x38216_38226){
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
});})(x38216_38226))
;

x38216_38226.componentDidUpdate = ((function (x38216_38226){
return (function (prev_props__25687__auto__,prev_state__25688__auto__){
var this__25679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25679__auto__);
});})(x38216_38226))
;

x38216_38226.isMounted = ((function (x38216_38226){
return (function (){
var this__25679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38216_38226))
;

x38216_38226.componentWillMount = ((function (x38216_38226){
return (function (){
var this__25679__auto__ = this;
var indexer__25689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x38216_38226))
;

x38216_38226.render = ((function (x38216_38226){
return (function (){
var this__25678__auto__ = this;
var this$ = this__25678__auto__;
var _STAR_reconciler_STAR_38219 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38220 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38221 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38222 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38223 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25678__auto__);

om.next._STAR_parent_STAR_ = this__25678__auto__;

try{return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,klipse.ui.editors.cljs.cljs_editor.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38223;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38222;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38221;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38220;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38219;
}});})(x38216_38226))
;


klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor = klipse.cards.ui.editors.Editor_cljs_computed;

klipse.cards.ui.editors.Editor_cljs_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.prototype.om$isComponent = true;

var x38224_38230 = klipse.cards.ui.editors.Editor_cljs_computed;


var x38225_38231 = klipse.cards.ui.editors.Editor_cljs_computed.prototype;


klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Editor-cljs-computed";

klipse.cards.ui.editors.Editor_cljs_computed.cljs$lang$ctorPrWriter = (function (this__25746__auto__,writer__25747__auto__,opt__25748__auto__){
return cljs.core._write.call(null,writer__25747__auto__,"klipse.cards.ui.editors/Editor-cljs-computed");
});
if(typeof klipse.cards.ui.editors.editor_cljs_reconciler !== 'undefined'){
} else {
klipse.cards.ui.editors.editor_cljs_reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 103212 2)"], null),new cljs.core.Keyword(null,"parser","parser",-1543495310),klipse.control.control.parser], null));
}
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.ui.editors","klipse.cards.ui.editors",-2026362149),new cljs.core.Keyword(null,"cljs-editor","cljs-editor",1056110633)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"cljs-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"__Purpose:__ \n  \n  * Basic clojurescript input editor.\n  \n  __Requirements:__ \n  \n  1. UI\n    * Editor takes the entire width of section.\n    * Editor takes the entire height of section.\n    * Syntax hightlighting: `clojurescript`.\n    * Display line number.\n    * Placeholder.\n    * Editor background: a cljs logo in the right bottom corner.\n  \n  2. TOOLS\n    * `ctrl+enter` launch a function handler to update data.\n    * `ctrl+s` launch a function handler.\n    * Typing launch a function handler with a debounce of 3s.",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof klipse.cards.ui.editors.t_klipse$cards$ui$editors38232 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
klipse.cards.ui.editors.t_klipse$cards$ui$editors38232 = (function (meta38233){
this.meta38233 = meta38233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38234,meta38233__$1){
var self__ = this;
var _38234__$1 = this;
return (new klipse.cards.ui.editors.t_klipse$cards$ui$editors38232(meta38233__$1));
});

klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38234){
var self__ = this;
var _38234__$1 = this;
return self__.meta38233;
});

klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.prototype.devcards$core$IDevcard$ = true;

klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this__27567__auto__,devcard_opts__27568__auto__){
var self__ = this;
var this__27567__auto____$1 = this;
var init_data__27569__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcard_opts__27568__auto__);
var state__27570__auto__ = ((om.next.reconciler_QMARK_.call(null,klipse.cards.ui.editors.editor_cljs_reconciler))?null:(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,init_data__27569__auto__))?init_data__27569__auto__:((!(cljs.core.empty_QMARK_.call(null,init_data__27569__auto__)))?cljs.core.atom.call(null,init_data__27569__auto__):((cljs.core.map_QMARK_.call(null,klipse.cards.ui.editors.editor_cljs_reconciler))?cljs.core.atom.call(null,klipse.cards.ui.editors.editor_cljs_reconciler):(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,klipse.cards.ui.editors.editor_cljs_reconciler))?klipse.cards.ui.editors.editor_cljs_reconciler:cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)
)))));
var reconciler__27571__auto__ = ((om.next.reconciler_QMARK_.call(null,klipse.cards.ui.editors.editor_cljs_reconciler))?klipse.cards.ui.editors.editor_cljs_reconciler:om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state__27570__auto__,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),((function (init_data__27569__auto__,state__27570__auto__,this__27567__auto____$1){
return (function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),state__27570__auto__], null);
});})(init_data__27569__auto__,state__27570__auto__,this__27567__auto____$1))
], null))], null)));
var main_obj__27572__auto__ = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256),((function (init_data__27569__auto__,state__27570__auto__,reconciler__27571__auto__,this__27567__auto____$1){
return (function (p1__27566__27573__auto__){
return om.next.add_root_BANG_.call(null,reconciler__27571__auto__,klipse.cards.ui.editors.Editor_cljs_computed,p1__27566__27573__auto__);
});})(init_data__27569__auto__,state__27570__auto__,reconciler__27571__auto__,this__27567__auto____$1))
,new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860),((function (init_data__27569__auto__,state__27570__auto__,reconciler__27571__auto__,this__27567__auto____$1){
return (function (){
return om.next.force_root_render_BANG_.call(null,reconciler__27571__auto__);
});})(init_data__27569__auto__,state__27570__auto__,reconciler__27571__auto__,this__27567__auto____$1))
,new cljs.core.Keyword(null,"data_atom","data_atom",257894504),om.next.app_state.call(null,reconciler__27571__auto__),new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),reconciler__27571__auto__,new cljs.core.Keyword(null,"component","component",1555936782),klipse.cards.ui.editors.Editor_cljs_computed], null);
var card__27574__auto__ = devcards.core.add_environment_defaults.call(null,cljs.core.assoc.call(null,devcard_opts__27568__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),main_obj__27572__auto__,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__27568__auto__)))));
return React.createElement(devcards_om_next.core.OmNextNode,(function (){var obj38236 = {"card":card__27574__auto__};
return obj38236;
})());
});

klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38233","meta38233",828448848,null)], null);
});

klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.cljs$lang$type = true;

klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.cljs$lang$ctorStr = "klipse.cards.ui.editors/t_klipse$cards$ui$editors38232";

klipse.cards.ui.editors.t_klipse$cards$ui$editors38232.cljs$lang$ctorPrWriter = (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"klipse.cards.ui.editors/t_klipse$cards$ui$editors38232");
});

klipse.cards.ui.editors.__GT_t_klipse$cards$ui$editors38232 = (function klipse$cards$ui$editors$__GT_t_klipse$cards$ui$editors38232(meta38233){
return (new klipse.cards.ui.editors.t_klipse$cards$ui$editors38232(meta38233));
});

}

return (new klipse.cards.ui.editors.t_klipse$cards$ui$editors38232(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),"(+ 2 2)"], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true], null)], null));
})], null));
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

var x38241_38253 = klipse.cards.ui.editors.Root_computed.prototype;
x38241_38253.componentWillUpdate = ((function (x38241_38253){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
if(((!((this__25679__auto__ == null)))?(((false) || (this__25679__auto__.om$next$Ident$))?true:false):false)){
var ident__25683__auto___38254 = om.next.ident.call(null,this__25679__auto__,om.next.props.call(null,this__25679__auto__));
var next_ident__25684__auto___38255 = om.next.ident.call(null,this__25679__auto__,om.next._next_props.call(null,next_props__25680__auto__,this__25679__auto__));
if(cljs.core.not_EQ_.call(null,ident__25683__auto___38254,next_ident__25684__auto___38255)){
var idxr__25685__auto___38256 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__25685__auto___38256 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__25685__auto___38256),((function (idxr__25685__auto___38256,ident__25683__auto___38254,next_ident__25684__auto___38255,this__25679__auto__,x38241_38253){
return (function (indexes__25686__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__25686__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__25683__auto___38254], null),cljs.core.disj,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__25684__auto___38255], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__25679__auto__);
});})(idxr__25685__auto___38256,ident__25683__auto___38254,next_ident__25684__auto___38255,this__25679__auto__,x38241_38253))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__25679__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__25679__auto__);
});})(x38241_38253))
;

x38241_38253.shouldComponentUpdate = ((function (x38241_38253){
return (function (next_props__25680__auto__,next_state__25681__auto__){
var this__25679__auto__ = this;
var next_children__25682__auto__ = next_props__25680__auto__.children;
var next_props__25680__auto____$1 = goog.object.get(next_props__25680__auto__,"omcljs$value");
var next_props__25680__auto____$2 = (function (){var G__38243 = next_props__25680__auto____$1;
if((next_props__25680__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__38243);
} else {
return G__38243;
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
});})(x38241_38253))
;

x38241_38253.componentWillUnmount = ((function (x38241_38253){
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
});})(x38241_38253))
;

x38241_38253.componentDidUpdate = ((function (x38241_38253){
return (function (prev_props__25687__auto__,prev_state__25688__auto__){
var this__25679__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__25679__auto__);
});})(x38241_38253))
;

x38241_38253.isMounted = ((function (x38241_38253){
return (function (){
var this__25679__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__25679__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38241_38253))
;

x38241_38253.componentWillMount = ((function (x38241_38253){
return (function (){
var this__25679__auto__ = this;
var indexer__25689__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__25679__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__25689__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__25689__auto__,this__25679__auto__);
}
});})(x38241_38253))
;

x38241_38253.render = ((function (x38241_38253){
return (function (){
var this__25678__auto__ = this;
var this$ = this__25678__auto__;
var _STAR_reconciler_STAR_38244 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38245 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38246 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38247 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38248 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__25678__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__25678__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__25678__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__25678__auto__);

om.next._STAR_parent_STAR_ = this__25678__auto__;

try{var map__38249 = om.next.get_computed.call(null,this$);
var map__38249__$1 = ((((!((map__38249 == null)))?((((map__38249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38249):map__38249);
var updateJS = cljs.core.get.call(null,map__38249__$1,new cljs.core.Keyword(null,"updateJS","updateJS",-1174586884));
return React.DOM.div({"className": "dev-cards-section"},om.util.force_children.call(null,React.DOM.div({"className": "toolbox"},om.util.force_children.call(null,React.DOM.button({"onClick": updateJS},om.util.force_children.call(null,"Add JS code to editor"))))),om.util.force_children.call(null,klipse.ui.editors.js.js_editor.call(null,om.next.props.call(null,this$))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38248;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38247;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38246;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38245;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38244;
}});})(x38241_38253))
;


klipse.cards.ui.editors.Root_computed.prototype.constructor = klipse.cards.ui.editors.Root_computed;

klipse.cards.ui.editors.Root_computed.prototype.constructor.displayName = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.prototype.om$isComponent = true;

var x38251_38257 = klipse.cards.ui.editors.Root_computed;


var x38252_38258 = klipse.cards.ui.editors.Root_computed.prototype;


klipse.cards.ui.editors.Root_computed.cljs$lang$type = true;

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorStr = "klipse.cards.ui.editors/Root-computed";

klipse.cards.ui.editors.Root_computed.cljs$lang$ctorPrWriter = (function (this__25746__auto__,writer__25747__auto__,opt__25748__auto__){
return cljs.core._write.call(null,writer__25747__auto__,"klipse.cards.ui.editors/Root-computed");
});
klipse.cards.ui.editors.root_computed = om.next.factory.call(null,klipse.cards.ui.editors.Root_computed);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.ui.editors","klipse.cards.ui.editors",-2026362149),new cljs.core.Keyword(null,"js-editor","js-editor",-2124337597)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"js-editor",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"__Purpose:__ \n  \n  * Basic javascript read-only editor.\n  \n  __Requirements:__ \n  \n  1. UI\n    * Editor takes the entire width of section.\n    * Editor takes the entire height of section.\n    * Syntax hightlighting: `javascript`.\n    * Display line number.\n    * Placeholder.\n    * Editor background: a js logo in the right bottom corner.\n  \n  2. TOOLS\n    * Automatic js beautifier.\n  \n  __ToolBox:__",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (data,_){
var p_data = cljs.core.deref.call(null,data);
var f_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"updateJS","updateJS",-1174586884),((function (p_data){
return (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.assoc,new cljs.core.Keyword(null,"compilation","compilation",-1328774561),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"cljs.user.f = (function cljs$user$f(x){return (x + x);});"], null));
});})(p_data))
], null);
return klipse.cards.ui.editors.root_computed.call(null,om.next.computed.call(null,p_data,f_data));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compilation","compilation",-1328774561),null], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),true,new cljs.core.Keyword(null,"history","history",-247395220),true], null)], null));
})], null));

//# sourceMappingURL=editors.js.map?rel=1465542893747