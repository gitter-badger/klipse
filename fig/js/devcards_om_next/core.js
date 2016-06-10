// Compiled by ClojureScript 1.9.36 {}
goog.provide('devcards_om_next.core');
goog.require('cljs.core');
goog.require('devcards.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('devcards.util.utils');
var base__37092__auto___41506 = {"getInitialState": (function (){
return {"state_change_count": (0), "omnext$unique-id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"omnext-component-","omnext-component-",217631378,null)))].join('')};
}), "shouldComponentUpdate": (function (next_props,next_state){
var this$ = this;
var watch_atom_QMARK_ = new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152))));
var update_QMARK_ = (function (){var or__22615__auto__ = watch_atom_QMARK_;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),next_state.state_change_count);
}
})();
return update_QMARK_;
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var data_atom = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),new cljs.core.Keyword(null,"data_atom","data_atom",257894504)], null));
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
return this$.setState({"data_atom": data_atom});
}):(function (){
return null;
})), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var main_obj = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
var mount_fn = new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256).cljs$core$IFn$_invoke$arity$1(main_obj);
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
mount_fn.call(null,target);

var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom__$1 = temp__4657__auto__;
return cljs.core.add_watch.call(null,data_atom__$1,unique_id,((function (data_atom__$1,temp__4657__auto__,card,main_obj,mount_fn,unique_id,target,data_atom,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(data_atom__$1,temp__4657__auto__,card,main_obj,mount_fn,unique_id,target,data_atom,this$))
);
} else {
return null;
}
}):(function (){
return null;
})), "componentDidUpdate": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (prev_props,prev_state){
var this$ = this;
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var main_obj = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
var reload_fn = new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860).cljs$core$IFn$_invoke$arity$1(main_obj);
var mount_fn = new cljs.core.Keyword(null,"mount-fn","mount-fn",-579956256).cljs$core$IFn$_invoke$arity$1(main_obj);
var reconciler = new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966).cljs$core$IFn$_invoke$arity$1(main_obj);
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var target = document.getElementById(unique_id);
if(cljs.core._EQ_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),prev_state.state_change_count)){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)))){
return reload_fn.call(null);
} else {
return mount_fn.call(null,target);
}
} else {
return null;
}
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
if(cljs.core.truth_((function (){var and__22603__auto__ = data_atom;
if(cljs.core.truth_(and__22603__auto__)){
return id;
} else {
return and__22603__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var unique_id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"omnext$unique-id","omnext$unique-id",-283034378));
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var main = (function (){var G__41501 = React.DOM.div({"id": unique_id});
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)),G__41501);
} else {
return G__41501;
}
})();
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards_om_next.core.OmNextNode !== 'undefined'){
} else {
devcards_om_next.core.OmNextNode = React.createClass(base__37092__auto___41506);
}

var seq__41502_41507 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__41503_41508 = null;
var count__41504_41509 = (0);
var i__41505_41510 = (0);
while(true){
if((i__41505_41510 < count__41504_41509)){
var property__37093__auto___41511 = cljs.core._nth.call(null,chunk__41503_41508,i__41505_41510);
if(cljs.core.truth_((base__37092__auto___41506[property__37093__auto___41511]))){
(devcards_om_next.core.OmNextNode.prototype[property__37093__auto___41511] = (base__37092__auto___41506[property__37093__auto___41511]));
} else {
}

var G__41512 = seq__41502_41507;
var G__41513 = chunk__41503_41508;
var G__41514 = count__41504_41509;
var G__41515 = (i__41505_41510 + (1));
seq__41502_41507 = G__41512;
chunk__41503_41508 = G__41513;
count__41504_41509 = G__41514;
i__41505_41510 = G__41515;
continue;
} else {
var temp__4657__auto___41516 = cljs.core.seq.call(null,seq__41502_41507);
if(temp__4657__auto___41516){
var seq__41502_41517__$1 = temp__4657__auto___41516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41502_41517__$1)){
var c__23426__auto___41518 = cljs.core.chunk_first.call(null,seq__41502_41517__$1);
var G__41519 = cljs.core.chunk_rest.call(null,seq__41502_41517__$1);
var G__41520 = c__23426__auto___41518;
var G__41521 = cljs.core.count.call(null,c__23426__auto___41518);
var G__41522 = (0);
seq__41502_41507 = G__41519;
chunk__41503_41508 = G__41520;
count__41504_41509 = G__41521;
i__41505_41510 = G__41522;
continue;
} else {
var property__37093__auto___41523 = cljs.core.first.call(null,seq__41502_41517__$1);
if(cljs.core.truth_((base__37092__auto___41506[property__37093__auto___41523]))){
(devcards_om_next.core.OmNextNode.prototype[property__37093__auto___41523] = (base__37092__auto___41506[property__37093__auto___41523]));
} else {
}

var G__41524 = cljs.core.next.call(null,seq__41502_41517__$1);
var G__41525 = null;
var G__41526 = (0);
var G__41527 = (0);
seq__41502_41507 = G__41524;
chunk__41503_41508 = G__41525;
count__41504_41509 = G__41526;
i__41505_41510 = G__41527;
continue;
}
} else {
}
}
break;
}

//# sourceMappingURL=core.js.map?rel=1465451168944