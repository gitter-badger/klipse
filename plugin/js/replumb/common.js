// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('replumb.common');
goog.require('cljs.core');
goog.require('clojure.string');
replumb.common.error_branch_QMARK_ = (function replumb$common$error_branch_QMARK_(error){
return (error instanceof Error);
});
replumb.common.error_children = (function replumb$common$error_children(error){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error.cause], null);
});
replumb.common.error_seq = (function replumb$common$error_seq(error){
return cljs.core.tree_seq(replumb.common.error_branch_QMARK_,replumb.common.error_children,error);
});
/**
 * Iteratively extracts messages inside nested #error objects, returns a
 *   string.
 * 
 *   If the boolean `exclude-error-msg?` is true, only the messages not
 *   marked as "ERROR" will be included in the final string.
 * 
 *   If the boolean `print-stack?` is true, the stack will be added
 *   to the final string. They both default to false.
 * 
 *   ** Be sure to pass a js/Error object here **
 */
replumb.common.extract_message = (function replumb$common$extract_message(var_args){
var args54523 = [];
var len__7296__auto___54527 = arguments.length;
var i__7297__auto___54528 = (0);
while(true){
if((i__7297__auto___54528 < len__7296__auto___54527)){
args54523.push((arguments[i__7297__auto___54528]));

var G__54529 = (i__7297__auto___54528 + (1));
i__7297__auto___54528 = G__54529;
continue;
} else {
}
break;
}

var G__54525 = args54523.length;
switch (G__54525) {
case 1:
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54523.length)].join('')));

}
});

replumb.common.extract_message.cljs$core$IFn$_invoke$arity$1 = (function (err){
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$3(false,false,err);
});

replumb.common.extract_message.cljs$core$IFn$_invoke$arity$2 = (function (print_stack_QMARK_,err){
return replumb.common.extract_message.cljs$core$IFn$_invoke$arity$3(print_stack_QMARK_,false,err);
});

replumb.common.extract_message.cljs$core$IFn$_invoke$arity$3 = (function (print_stack_QMARK_,exclude_error_msg_QMARK_,err){
return [cljs.core.str((function (){var strings = (function (){var G__54526 = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,replumb.common.error_seq(err));
var G__54526__$1 = (cljs.core.truth_(exclude_error_msg_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__54526){
return (function (p1__54521_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("ERROR",p1__54521_SHARP_.message);
});})(G__54526))
,G__54526):G__54526);
var G__54526__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__54526,G__54526__$1){
return (function (p1__54522_SHARP_){
return p1__54522_SHARP_.message;
});})(G__54526,G__54526__$1))
,G__54526__$1)
;
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.empty_QMARK_),G__54526__$2);

})();
if(cljs.core.seq(strings)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" - ",strings);
} else {
return "Error";
}
})()),cljs.core.str((cljs.core.truth_(print_stack_QMARK_)?[cljs.core.str("\n"),cljs.core.str(err.stack)].join(''):null))].join('');
});

replumb.common.extract_message.cljs$lang$maxFixedArity = 3;

/**
 * Callback that just echoes the result map. It also asserts the correct
 *   result format in its post condition. Useful for debugging and
 *   testing.
 */
replumb.common.echo_callback = (function replumb$common$echo_callback(result_map){
return result_map;
});
/**
 * Wraps the message in a success map.
 */
replumb.common.wrap_success = (function replumb$common$wrap_success(message){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,message], null);
});
/**
 * Wraps the message in a error map.
 */
replumb.common.wrap_error = (function replumb$common$wrap_error(message){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,message], null);
});
/**
 * Returns true if the string contains the newline \\n or \\r as
 *   characters.
 */
replumb.common.inline_newline_QMARK_ = (function replumb$common$inline_newline_QMARK_(s){
return cljs.core.re_matches(/\\{2,}n|\\{2,}r/,s);
});
/**
 * Is the string returned from an evaluation valid?
 */
replumb.common.valid_eval_result_QMARK_ = (function replumb$common$valid_eval_result_QMARK_(var_args){
var args54531 = [];
var len__7296__auto___54534 = arguments.length;
var i__7297__auto___54535 = (0);
while(true){
if((i__7297__auto___54535 < len__7296__auto___54534)){
args54531.push((arguments[i__7297__auto___54535]));

var G__54536 = (i__7297__auto___54535 + (1));
i__7297__auto___54535 = G__54536;
continue;
} else {
}
break;
}

var G__54533 = args54531.length;
switch (G__54533) {
case 1:
return replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args54531.length)].join('')));

}
});

replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (result){
return replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,result);
});

replumb.common.valid_eval_result_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (opts,result){
var or__6221__auto__ = (cljs.core.not(cljs.core.cst$kw$no_DASH_pr_DASH_str_DASH_on_DASH_value.cljs$core$IFn$_invoke$arity$1(opts))) && (typeof result === 'string') && (cljs.core.not(replumb.common.inline_newline_QMARK_(result)));
if(or__6221__auto__){
return or__6221__auto__;
} else {
var and__6209__auto__ = cljs.core.cst$kw$no_DASH_pr_DASH_str_DASH_on_DASH_value.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__6209__auto__)){
return !((result == null));
} else {
return and__6209__auto__;
}
}
});

replumb.common.valid_eval_result_QMARK_.cljs$lang$maxFixedArity = 2;

/**
 * Is the string returned from an evaluation valid?
 */
replumb.common.valid_eval_error_QMARK_ = (function replumb$common$valid_eval_error_QMARK_(error){
return (error instanceof Error);
});
/**
 * Is the string returned from an evaluation valid?
 */
replumb.common.valid_eval_warning_QMARK_ = (function replumb$common$valid_eval_warning_QMARK_(warning){
return typeof warning === 'string';
});
replumb.common.has_valid_warning_QMARK_ = (function replumb$common$has_valid_warning_QMARK_(result){
var G__54539 = cljs.core.cst$kw$warning.cljs$core$IFn$_invoke$arity$1(result);
if((G__54539 == null)){
return null;
} else {
return replumb.common.valid_eval_warning_QMARK_(G__54539);
}
});
/**
 * Yields a "keyword not supported" error map. Receives the
 *   symbol/keyword printed in the message and ex-info data.
 */
replumb.common.error_keyword_not_supported = (function replumb$common$error_keyword_not_supported(keyword,ex_info_data){
return replumb.common.wrap_error(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("The "),cljs.core.str(keyword),cljs.core.str(" keyword is not supported at the moment")].join(''),ex_info_data));
});
/**
 * Yields a "Argument must a be a symbol" error map. Receives the
 *   symbol/fn name printed in the message and ex-info data.
 */
replumb.common.error_argument_must_be_symbol = (function replumb$common$error_argument_must_be_symbol(symbol,ex_info_data){
return replumb.common.wrap_error(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Argument to "),cljs.core.str(symbol),cljs.core.str(" must be a symbol")].join(''),ex_info_data));
});
/**
 * Filter out the option map keys that have -fn in it.
 */
replumb.common.filter_fn_keys = (function replumb$common$filter_fn_keys(opts){
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

var new_fn_entries = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54540_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54540_SHARP_,(1),"<hidden function>");
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54541_SHARP_){
return cljs.core.re_find(/-fn/,cljs.core.name(cljs.core.first(p1__54541_SHARP_)));
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,opts)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(opts,new_fn_entries);
});
/**
 * The function used by replumb for logging. It simply calls println for
 *   now so you that client code can set *print-fn* to customize the
 *   behavior, for example the following marks traces as DEBUG:
 * 
 *   (set! *print-fn*
 *  (fn [& args]
 *    (.apply (.-debug js/console) js/console (into-array args))))
 */
replumb.common.debug_prn = (function replumb$common$debug_prn(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54543 = arguments.length;
var i__7297__auto___54544 = (0);
while(true){
if((i__7297__auto___54544 < len__7296__auto___54543)){
args__7303__auto__.push((arguments[i__7297__auto___54544]));

var G__54545 = (i__7297__auto___54544 + (1));
i__7297__auto___54544 = G__54545;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,args);
});

replumb.common.debug_prn.cljs$lang$maxFixedArity = (0);

replumb.common.debug_prn.cljs$lang$applyTo = (function (seq54542){
return replumb.common.debug_prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54542));
});

/**
 * Adds a / if missing at the end of the path.
 */
replumb.common.normalize_path = (function replumb$common$normalize_path(path){
return [cljs.core.str(path),cljs.core.str(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(path)))?null:"/"))].join('');
});
/**
 * Set up the cljs.user namespace
 */
replumb.common.set_cljs_user_BANG_ = (function replumb$common$set_cljs_user_BANG_(){
return cljs.user = {};
});
