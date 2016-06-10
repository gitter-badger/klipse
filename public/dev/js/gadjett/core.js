// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('gadjett.core');
goog.require('cljs.core');
goog.require('gadjett.collections');
if(typeof gadjett.core.history !== 'undefined'){
} else {
gadjett.core.history = (function (){var G__30755 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__30755) : cljs.core.atom.call(null,G__30755));
})();
}
if(typeof gadjett.core.settings !== 'undefined'){
} else {
gadjett.core.settings = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$max_DASH_function_DASH_calls,(50),cljs.core.cst$kw$timeslot_DASH_function_DASH_calls_DASH_msec,(1000),cljs.core.cst$kw$compact_DASH_max_DASH_elements_DASH_in_DASH_seq,(5),cljs.core.cst$kw$compact_DASH_max_DASH_chars_DASH_in_DASH_str,(10)], null);
}
gadjett.core.settings_BANG_ = (function gadjett$core$settings_BANG_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___30766 = arguments.length;
var i__7297__auto___30767 = (0);
while(true){
if((i__7297__auto___30767 < len__7296__auto___30766)){
args__7303__auto__.push((arguments[i__7297__auto___30767]));

var G__30768 = (i__7297__auto___30767 + (1));
i__7297__auto___30767 = G__30768;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__30763){
var map__30764 = p__30763;
var map__30764__$1 = ((((!((map__30764 == null)))?((((map__30764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30764):map__30764);
var args = map__30764__$1;
return gadjett.core.settings = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gadjett.core.settings,args], 0));
});

gadjett.core.settings_BANG_.cljs$lang$maxFixedArity = (0);

gadjett.core.settings_BANG_.cljs$lang$applyTo = (function (seq30759){
return gadjett.core.settings_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30759));
});

gadjett.core.add_event_and_filter = (function gadjett$core$add_event_and_filter(timestamp_msec,events){
var timeslot = cljs.core.cst$kw$timeslot_DASH_function_DASH_calls_DASH_msec.cljs$core$IFn$_invoke$arity$1(gadjett.core.settings);
return cljs.core.cons(timestamp_msec,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (timeslot){
return (function (p1__30769_SHARP_){
return (p1__30769_SHARP_ > (timestamp_msec - timeslot));
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
var args30776 = [];
var len__7296__auto___30779 = arguments.length;
var i__7297__auto___30780 = (0);
while(true){
if((i__7297__auto___30780 < len__7296__auto___30779)){
args30776.push((arguments[i__7297__auto___30780]));

var G__30781 = (i__7297__auto___30780 + (1));
i__7297__auto___30780 = G__30781;
continue;
} else {
}
break;
}

var G__30778 = args30776.length;
switch (G__30778) {
case 1:
return gadjett.core.the_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return gadjett.core.the_history.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30776.length)].join('')));

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
