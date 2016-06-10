// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('devcards_om_next.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('devcards.util.utils');
var base__20888__auto___33823 = {"getInitialState": (function (){
return {"state_change_count": (0), "omnext$unique-id": [cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$omnext_DASH_component_DASH_))].join('')};
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var watch_atom_QMARK_ = cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(devcards.core.get_props(this$,cljs.core.cst$kw$card)));
var update_QMARK_ = (function (){var or__6221__auto__ = watch_atom_QMARK_;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count),next_state.state_change_count);
}
})();
return update_QMARK_;
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var data_atom = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main_DASH_obj,cljs.core.cst$kw$data_atom], null));
var unique_id = devcards.core.get_state(this$,cljs.core.cst$kw$omnext$unique_DASH_id);
return this$.setState({"data_atom": data_atom});
}):(function (){
return null;
})), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){
var this$ = this;
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var main_obj = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
var mount_fn = cljs.core.cst$kw$mount_DASH_fn.cljs$core$IFn$_invoke$arity$1(main_obj);
var unique_id = devcards.core.get_state(this$,cljs.core.cst$kw$omnext$unique_DASH_id);
var target = document.getElementById(unique_id);
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
(mount_fn.cljs$core$IFn$_invoke$arity$1 ? mount_fn.cljs$core$IFn$_invoke$arity$1(target) : mount_fn.call(null,target));

var temp__4657__auto__ = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom__$1 = temp__4657__auto__;
return cljs.core.add_watch(data_atom__$1,unique_id,((function (data_atom__$1,temp__4657__auto__,card,main_obj,mount_fn,unique_id,target,data_atom,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count) + (1))});
});})(data_atom__$1,temp__4657__auto__,card,main_obj,mount_fn,unique_id,target,data_atom,this$))
);
} else {
return null;
}
}):(function (){
return null;
})), "componentDidUpdate": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (prev_props,prev_state){
var this$ = this;
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var main_obj = cljs.core.cst$kw$main_DASH_obj.cljs$core$IFn$_invoke$arity$1(card);
var reload_fn = cljs.core.cst$kw$reload_DASH_fn.cljs$core$IFn$_invoke$arity$1(main_obj);
var mount_fn = cljs.core.cst$kw$mount_DASH_fn.cljs$core$IFn$_invoke$arity$1(main_obj);
var reconciler = cljs.core.cst$kw$reconciler.cljs$core$IFn$_invoke$arity$1(main_obj);
var unique_id = devcards.core.get_state(this$,cljs.core.cst$kw$omnext$unique_DASH_id);
var target = document.getElementById(unique_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count),prev_state.state_change_count)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__33808 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__33808) : cljs.core.deref.call(null,G__33808));
})(),cljs.core.cst$kw$render))){
return (reload_fn.cljs$core$IFn$_invoke$arity$0 ? reload_fn.cljs$core$IFn$_invoke$arity$0() : reload_fn.call(null));
} else {
return (mount_fn.cljs$core$IFn$_invoke$arity$1 ? mount_fn.cljs$core$IFn$_invoke$arity$1(target) : mount_fn.call(null,target));
}
} else {
return null;
}
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var id = devcards.core.get_state(this$,cljs.core.cst$kw$omnext$unique_DASH_id);
if(cljs.core.truth_((function (){var and__6209__auto__ = data_atom;
if(cljs.core.truth_(and__6209__auto__)){
return id;
} else {
return and__6209__auto__;
}
})())){
return cljs.core.remove_watch(data_atom,id);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var card = devcards.core.get_props(this$,cljs.core.cst$kw$card);
var options = cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(card);
var unique_id = devcards.core.get_state(this$,cljs.core.cst$kw$omnext$unique_DASH_id);
var data_atom = devcards.core.get_state(this$,cljs.core.cst$kw$data_atom);
var main = (function (){var G__33810 = (function (){var G__33812 = {"id": unique_id};
return React.DOM.div(G__33812);
})();
if(cljs.core.cst$kw$watch_DASH_atom.cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update(devcards.core.get_state(this$,cljs.core.cst$kw$state_change_count),G__33810);
} else {
return G__33810;
}
})();
return devcards.core.render_all_card_elements(main,data_atom,card);
})};
if(typeof devcards_om_next.core.OmNextNode !== 'undefined'){
} else {
devcards_om_next.core.OmNextNode = React.createClass(base__20888__auto___33823);
}

var seq__33815_33856 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__33816_33857 = null;
var count__33817_33858 = (0);
var i__33818_33859 = (0);
while(true){
if((i__33818_33859 < count__33817_33858)){
var property__20889__auto___33862 = chunk__33816_33857.cljs$core$IIndexed$_nth$arity$2(null,i__33818_33859);
if(cljs.core.truth_((base__20888__auto___33823[property__20889__auto___33862]))){
(devcards_om_next.core.OmNextNode.prototype[property__20889__auto___33862] = (base__20888__auto___33823[property__20889__auto___33862]));
} else {
}

var G__33863 = seq__33815_33856;
var G__33864 = chunk__33816_33857;
var G__33865 = count__33817_33858;
var G__33866 = (i__33818_33859 + (1));
seq__33815_33856 = G__33863;
chunk__33816_33857 = G__33864;
count__33817_33858 = G__33865;
i__33818_33859 = G__33866;
continue;
} else {
var temp__4657__auto___33867 = cljs.core.seq(seq__33815_33856);
if(temp__4657__auto___33867){
var seq__33815_33868__$1 = temp__4657__auto___33867;
if(cljs.core.chunked_seq_QMARK_(seq__33815_33868__$1)){
var c__7032__auto___33869 = cljs.core.chunk_first(seq__33815_33868__$1);
var G__33870 = cljs.core.chunk_rest(seq__33815_33868__$1);
var G__33871 = c__7032__auto___33869;
var G__33872 = cljs.core.count(c__7032__auto___33869);
var G__33873 = (0);
seq__33815_33856 = G__33870;
chunk__33816_33857 = G__33871;
count__33817_33858 = G__33872;
i__33818_33859 = G__33873;
continue;
} else {
var property__20889__auto___33874 = cljs.core.first(seq__33815_33868__$1);
if(cljs.core.truth_((base__20888__auto___33823[property__20889__auto___33874]))){
(devcards_om_next.core.OmNextNode.prototype[property__20889__auto___33874] = (base__20888__auto___33823[property__20889__auto___33874]));
} else {
}

var G__33875 = cljs.core.next(seq__33815_33868__$1);
var G__33876 = null;
var G__33877 = (0);
var G__33878 = (0);
seq__33815_33856 = G__33875;
chunk__33816_33857 = G__33876;
count__33817_33858 = G__33877;
i__33818_33859 = G__33878;
continue;
}
} else {
}
}
break;
}
