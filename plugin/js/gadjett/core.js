// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('gadjett.core');
goog.require('cljs.core');
goog.require('gadjett.collections');
if(typeof gadjett.core.history !== 'undefined'){
} else {
gadjett.core.history = (function (){var G__56660 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__56660) : cljs.core.atom.call(null,G__56660));
})();
}
if(typeof gadjett.core.settings !== 'undefined'){
} else {
gadjett.core.settings = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max_DASH_function_DASH_calls,(50),cljs.core.cst$kw$timeslot_DASH_function_DASH_calls_DASH_msec,(1000),cljs.core.cst$kw$compact_DASH_max_DASH_elements_DASH_in_DASH_seq,(5),cljs.core.cst$kw$compact_DASH_max_DASH_chars_DASH_in_DASH_str,(10)], null);
}
gadjett.core.settings_BANG_ = (function gadjett$core$settings_BANG_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56665 = arguments.length;
var i__7297__auto___56666 = (0);
while(true){
if((i__7297__auto___56666 < len__7296__auto___56665)){
args__7303__auto__.push((arguments[i__7297__auto___56666]));

var G__56667 = (i__7297__auto___56666 + (1));
i__7297__auto___56666 = G__56667;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__56662){
var map__56663 = p__56662;
var map__56663__$1 = ((((!((map__56663 == null)))?((((map__56663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56663):map__56663);
var args = map__56663__$1;
return gadjett.core.settings = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gadjett.core.settings,args], 0));
});

gadjett.core.settings_BANG_.cljs$lang$maxFixedArity = (0);

gadjett.core.settings_BANG_.cljs$lang$applyTo = (function (seq56661){
return gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56661));
});

gadjett.core.add_event_and_filter = (function gadjett$core$add_event_and_filter(timestamp_msec,events){
var timeslot = cljs.core.cst$kw$timeslot_DASH_function_DASH_calls_DASH_msec.cljs$core$IFn$_invoke$arity$1(gadjett.core.settings);
return cljs.core.cons(timestamp_msec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (timeslot){
return (function (p1__56668_SHARP_){
return (p1__56668_SHARP_ > (timestamp_msec - timeslot));
});})(timeslot))
,events));
});
gadjett.core.add_event = (function gadjett$core$add_event(history,func_name,timestamp_msec){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(history,func_name,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gadjett.core.add_event_and_filter,timestamp_msec));
});
gadjett.core.record_function_call = (function gadjett$core$record_function_call(func_name,args){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gadjett.core.history,gadjett.core.add_event,func_name,(new Date()).valueOf());

return (cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gadjett.core.history) : cljs.core.deref.call(null,gadjett.core.history)),func_name)) <= cljs.core.cst$kw$max_DASH_function_DASH_calls.cljs$core$IFn$_invoke$arity$1(gadjett.core.settings));
});
/**
 * returns the history sorted by number of function calls
 */
gadjett.core.sort_history = (function gadjett$core$sort_history(hist){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,gadjett.collections.map_object(cljs.core.count,hist));
});
/**
 * returns the history as an array, sorted by number of function calls
 */
gadjett.core.the_history = (function gadjett$core$the_history(var_args){
var args56669 = [];
var len__7296__auto___56672 = arguments.length;
var i__7297__auto___56673 = (0);
while(true){
if((i__7297__auto___56673 < len__7296__auto___56672)){
args56669.push((arguments[i__7297__auto___56673]));

var G__56674 = (i__7297__auto___56673 + (1));
i__7297__auto___56673 = G__56674;
continue;
} else {
}
break;
}

var G__56671 = args56669.length;
switch (G__56671) {
case 1:
return gadjett.core.the_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return gadjett.core.the_history.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56669.length)].join('')));

}
});

gadjett.core.the_history.cljs$core$IFn$_invoke$arity$1 = (function (k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gadjett.core.history) : cljs.core.deref.call(null,gadjett.core.history)),k);
});

gadjett.core.the_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return gadjett.core.sort_history((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gadjett.core.history) : cljs.core.deref.call(null,gadjett.core.history)));
});

gadjett.core.the_history.cljs$lang$maxFixedArity = 1;

gadjett.core.function_call_err_msg = (function gadjett$core$function_call_err_msg(func_name,args){
return [cljs.core.str(func_name),cljs.core.str(" was called too much over the last "),cljs.core.str(cljs.core.cst$kw$timeslot_DASH_function_DASH_calls_DASH_msec.cljs$core$IFn$_invoke$arity$1(gadjett.core.settings)),cljs.core.str(" msec: "),cljs.core.str(func_name)].join('');
});
