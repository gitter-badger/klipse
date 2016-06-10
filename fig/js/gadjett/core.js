// Compiled by ClojureScript 1.9.36 {}
goog.provide('gadjett.core');
goog.require('cljs.core');
goog.require('gadjett.collections');
if(typeof gadjett.core.history !== 'undefined'){
} else {
gadjett.core.history = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof gadjett.core.settings !== 'undefined'){
} else {
gadjett.core.settings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-function-calls","max-function-calls",-350003092),(50),new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",189712759),(1000),new cljs.core.Keyword(null,"compact-max-elements-in-seq","compact-max-elements-in-seq",418251211),(5),new cljs.core.Keyword(null,"compact-max-chars-in-str","compact-max-chars-in-str",240586724),(10)], null);
}
gadjett.core.settings_BANG_ = (function gadjett$core$settings_BANG_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___35733 = arguments.length;
var i__23691__auto___35734 = (0);
while(true){
if((i__23691__auto___35734 < len__23690__auto___35733)){
args__23697__auto__.push((arguments[i__23691__auto___35734]));

var G__35735 = (i__23691__auto___35734 + (1));
i__23691__auto___35734 = G__35735;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__35730){
var map__35731 = p__35730;
var map__35731__$1 = ((((!((map__35731 == null)))?((((map__35731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35731):map__35731);
var args = map__35731__$1;
return gadjett.core.settings = cljs.core.merge.call(null,gadjett.core.settings,args);
});

gadjett.core.settings_BANG_.cljs$lang$maxFixedArity = (0);

gadjett.core.settings_BANG_.cljs$lang$applyTo = (function (seq35729){
return gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35729));
});

gadjett.core.add_event_and_filter = (function gadjett$core$add_event_and_filter(timestamp_msec,events){
var timeslot = new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",189712759).cljs$core$IFn$_invoke$arity$1(gadjett.core.settings);
return cljs.core.cons.call(null,timestamp_msec,cljs.core.take_while.call(null,((function (timeslot){
return (function (p1__35736_SHARP_){
return (p1__35736_SHARP_ > (timestamp_msec - timeslot));
});})(timeslot))
,events));
});
gadjett.core.add_event = (function gadjett$core$add_event(history,func_name,timestamp_msec){
return cljs.core.update.call(null,history,func_name,cljs.core.partial.call(null,gadjett.core.add_event_and_filter,timestamp_msec));
});
gadjett.core.record_function_call = (function gadjett$core$record_function_call(func_name,args){
cljs.core.swap_BANG_.call(null,gadjett.core.history,gadjett.core.add_event,func_name,(new Date()).valueOf());

return (cljs.core.count.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,gadjett.core.history),func_name)) <= new cljs.core.Keyword(null,"max-function-calls","max-function-calls",-350003092).cljs$core$IFn$_invoke$arity$1(gadjett.core.settings));
});
/**
 * returns the history sorted by number of function calls
 */
gadjett.core.sort_history = (function gadjett$core$sort_history(hist){
return cljs.core.sort_by.call(null,cljs.core.second,gadjett.collections.map_object.call(null,cljs.core.count,hist));
});
/**
 * returns the history as an array, sorted by number of function calls
 */
gadjett.core.the_history = (function gadjett$core$the_history(var_args){
var args35737 = [];
var len__23690__auto___35740 = arguments.length;
var i__23691__auto___35741 = (0);
while(true){
if((i__23691__auto___35741 < len__23690__auto___35740)){
args35737.push((arguments[i__23691__auto___35741]));

var G__35742 = (i__23691__auto___35741 + (1));
i__23691__auto___35741 = G__35742;
continue;
} else {
}
break;
}

var G__35739 = args35737.length;
switch (G__35739) {
case 1:
return gadjett.core.the_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return gadjett.core.the_history.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35737.length)].join('')));

}
});

gadjett.core.the_history.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get.call(null,cljs.core.deref.call(null,gadjett.core.history),k);
});

gadjett.core.the_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return gadjett.core.sort_history.call(null,cljs.core.deref.call(null,gadjett.core.history));
});

gadjett.core.the_history.cljs$lang$maxFixedArity = 1;

gadjett.core.function_call_err_msg = (function gadjett$core$function_call_err_msg(func_name,args){
return [cljs.core.str(func_name),cljs.core.str(" was called too much over the last "),cljs.core.str(new cljs.core.Keyword(null,"timeslot-function-calls-msec","timeslot-function-calls-msec",189712759).cljs$core$IFn$_invoke$arity$1(gadjett.core.settings)),cljs.core.str(" msec: "),cljs.core.str(func_name)].join('');
});

//# sourceMappingURL=core.js.map?rel=1465451162590