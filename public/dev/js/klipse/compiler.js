// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.compiler');
goog.require('cljs.core');
goog.require('replumb.core');
goog.require('klipse.io');
goog.require('goog.date.UtcDateTime');
goog.require('cljs.js');
goog.require('cljs.core.async');
goog.require('goog.date.Interval');
goog.require('goog.string.format');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('cljs.reader');
window.cljs.user = {};
klipse.compiler.load_inlined = (function klipse$compiler$load_inlined(opts,cb){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["load-inlined: ",opts], 0));

var G__31277 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$js,cljs.core.cst$kw$source,""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__31277) : cb.call(null,G__31277));
});
klipse.compiler.known_src_paths = new cljs.core.PersistentArrayMap(null, 4, ["cljs-repo","http://viebel.github.io/cljs-self-host-repository/repository","core.async","https://raw.githubusercontent.com/mfikes/andare/master/src/main/clojure/","gist","https://gist.githubusercontent.com","clojurescript",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/clojure","https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs"], null)], null);
klipse.compiler.repos = (function klipse$compiler$repos(){
return cljs.core.flatten(cljs.core.vals(klipse.compiler.known_src_paths));
});
klipse.compiler.special_fetch = (function klipse$compiler$special_fetch(file_url,src_cb){
return klipse.io.fetch_file_BANG_(clojure.string.replace(file_url,/gist_/,""),src_cb);
});
klipse.compiler.repl_opts_load = (function klipse$compiler$repl_opts_load(){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([replumb.core.options.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$browser,klipse.compiler.repos(),klipse.compiler.special_fetch),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$warning_DASH_as_DASH_error,false,cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$verbose,false], null)], 0));
});
klipse.compiler.read_string_cond = (function klipse$compiler$read_string_cond(s){
try{return cljs.reader.read_string(s);
}catch (e31279){if((e31279 instanceof Object)){
var e = e31279;
return s;
} else {
throw e31279;

}
}});
klipse.compiler.convert_eval_res = (function klipse$compiler$convert_eval_res(p__31280){
var map__31285 = p__31280;
var map__31285__$1 = ((((!((map__31285 == null)))?((((map__31285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31285):map__31285);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,cljs.core.cst$kw$form);
var warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,cljs.core.cst$kw$warning);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,cljs.core.cst$kw$value);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31285__$1,cljs.core.cst$kw$success_QMARK_);
var status = (cljs.core.truth_(error)?cljs.core.cst$kw$error:cljs.core.cst$kw$ok);
var res = (cljs.core.truth_(value)?klipse.compiler.read_string_cond(value):error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.convert_compile_res = (function klipse$compiler$convert_compile_res(p__31299){
var map__31302 = p__31299;
var map__31302__$1 = ((((!((map__31302 == null)))?((((map__31302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31302):map__31302);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31302__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31302__$1,cljs.core.cst$kw$error);
var status = (cljs.core.truth_(error)?cljs.core.cst$kw$error:cljs.core.cst$kw$ok);
var res = (cljs.core.truth_(error)?error:value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.compile = (function klipse$compiler$compile(var_args){
var args__7303__auto__ = [];
var len__7296__auto___31312 = arguments.length;
var i__7297__auto___31313 = (0);
while(true){
if((i__7297__auto___31313 < len__7296__auto___31312)){
args__7303__auto__.push((arguments[i__7297__auto___31313]));

var G__31314 = (i__7297__auto___31313 + (1));
i__7297__auto___31313 = G__31314;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic = (function (args__31256__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call("klipse.compiler/compile",args__31256__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg("klipse.compiler/compile",args__31256__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/compile\" args__31256__auto__)")].join('')));
}

var vec__31305 = args__31256__auto__;
var seq__31306 = cljs.core.seq(vec__31305);
var first__31307 = cljs.core.first(seq__31306);
var seq__31306__$1 = cljs.core.next(seq__31306);
var s = first__31307;
var map__31308 = seq__31306__$1;
var map__31308__$1 = ((((!((map__31308 == null)))?((((map__31308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31308):map__31308);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31308__$1,cljs.core.cst$kw$static_DASH_fns,false);
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$static_DASH_fns,static_fns,cljs.core.cst$kw$load,klipse.compiler.load_inlined], null),klipse.compiler.convert_compile_res);
});

klipse.compiler.compile.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile.cljs$lang$applyTo = (function (seq31304){
return klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31304));
});

klipse.compiler.compile_async = (function klipse$compiler$compile_async(var_args){
var args__7303__auto__ = [];
var len__7296__auto___31335 = arguments.length;
var i__7297__auto___31336 = (0);
while(true){
if((i__7297__auto___31336 < len__7296__auto___31335)){
args__7303__auto__.push((arguments[i__7297__auto___31336]));

var G__31337 = (i__7297__auto___31336 + (1));
i__7297__auto___31336 = G__31337;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic = (function (args__31256__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call("klipse.compiler/compile-async",args__31256__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg("klipse.compiler/compile-async",args__31256__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/compile-async\" args__31256__auto__)")].join('')));
}

var vec__31324 = args__31256__auto__;
var seq__31325 = cljs.core.seq(vec__31324);
var first__31326 = cljs.core.first(seq__31325);
var seq__31325__$1 = cljs.core.next(seq__31325);
var s = first__31326;
var map__31327 = seq__31325__$1;
var map__31327__$1 = ((((!((map__31327 == null)))?((((map__31327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31327):map__31327);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31327__$1,cljs.core.cst$kw$static_DASH_fns,false);
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$static_DASH_fns,static_fns,cljs.core.cst$kw$load,klipse.compiler.load_inlined], null),((function (c,vec__31324,seq__31325,first__31326,seq__31325__$1,s,map__31327,map__31327__$1,static_fns){
return (function (p1__31320_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,klipse.compiler.convert_compile_res(p1__31320_SHARP_));
});})(c,vec__31324,seq__31325,first__31326,seq__31325__$1,s,map__31327,map__31327__$1,static_fns))
);

return c;
});

klipse.compiler.compile_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile_async.cljs$lang$applyTo = (function (seq31321){
return klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31321));
});

klipse.compiler.build_repl_opts = (function klipse$compiler$build_repl_opts(p__31354){
var map__31357 = p__31354;
var map__31357__$1 = ((((!((map__31357 == null)))?((((map__31357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31357):map__31357);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31357__$1,cljs.core.cst$kw$static_DASH_fns);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([replumb.core.options.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$browser,klipse.compiler.repos(),klipse.compiler.special_fetch),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$warning_DASH_as_DASH_error,false,cljs.core.cst$kw$static_DASH_fns,static_fns,cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$verbose,false], null)], 0));
});
klipse.compiler.eval_async_1 = (function klipse$compiler$eval_async_1(var_args){
var args__7303__auto__ = [];
var len__7296__auto___31371 = arguments.length;
var i__7297__auto___31372 = (0);
while(true){
if((i__7297__auto___31372 < len__7296__auto___31371)){
args__7303__auto__.push((arguments[i__7297__auto___31372]));

var G__31373 = (i__7297__auto___31372 + (1));
i__7297__auto___31372 = G__31373;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic = (function (args__31256__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call("klipse.compiler/eval-async-1",args__31256__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg("klipse.compiler/eval-async-1",args__31256__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/eval-async-1\" args__31256__auto__)")].join('')));
}

var vec__31362 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31362,(0),null);
var map__31365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31362,(1),null);
var map__31365__$1 = ((((!((map__31365 == null)))?((((map__31365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31365):map__31365);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31365__$1,cljs.core.cst$kw$static_DASH_fns,false);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["eval-async-1: ",s], 0));

var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var opts = (function (){var x__31222__auto__ = klipse.compiler.build_repl_opts(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$static_DASH_fns,static_fns], null));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.list(cljs.core.cst$sym$build_DASH_repl_DASH_opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$sym$static_DASH_fns], null))),cljs.core.str(": "),cljs.core.str(x__31222__auto__)].join('')], 0));

return x__31222__auto__;
})();
replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3(opts,((function (c,opts,vec__31362,s,map__31365,map__31365__$1,static_fns){
return (function (p1__31360_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,klipse.compiler.convert_eval_res(p1__31360_SHARP_));
});})(c,opts,vec__31362,s,map__31365,map__31365__$1,static_fns))
,s);

return c;
});

klipse.compiler.eval_async_1.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async_1.cljs$lang$applyTo = (function (seq31361){
return klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31361));
});

klipse.compiler.contains_macro_def_QMARK_ = (function klipse$compiler$contains_macro_def_QMARK_(exp){
return cljs.core.re_find(/\$macros/,exp);
});
klipse.compiler.eval_async = (function klipse$compiler$eval_async(var_args){
var args__7303__auto__ = [];
var len__7296__auto___31418 = arguments.length;
var i__7297__auto___31419 = (0);
while(true){
if((i__7297__auto___31419 < len__7296__auto___31418)){
args__7303__auto__.push((arguments[i__7297__auto___31419]));

var G__31421 = (i__7297__auto___31419 + (1));
i__7297__auto___31419 = G__31421;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic = (function (args__31256__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call("klipse.compiler/eval-async",args__31256__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg("klipse.compiler/eval-async",args__31256__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/eval-async\" args__31256__auto__)")].join('')));
}

var vec__31379 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31379,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31379,(1),null);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,vec__31379,s,args){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,vec__31379,s,args){
return (function (state_31400){
var state_val_31401 = (state_31400[(1)]);
if((state_val_31401 === (1))){
var inst_31382 = klipse.compiler.contains_macro_def_QMARK_(s);
var state_31400__$1 = state_31400;
if(cljs.core.truth_(inst_31382)){
var statearr_31402_31427 = state_31400__$1;
(statearr_31402_31427[(1)] = (2));

} else {
var statearr_31403_31428 = state_31400__$1;
(statearr_31403_31428[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31401 === (2))){
var inst_31384 = klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,args], 0));
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31400__$1,(5),inst_31384);
} else {
if((state_val_31401 === (3))){
var state_31400__$1 = state_31400;
var statearr_31404_31430 = state_31400__$1;
(statearr_31404_31430[(2)] = null);

(statearr_31404_31430[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31401 === (4))){
var inst_31389 = (state_31400[(2)]);
var inst_31393 = cljs.core.cst$sym$args;
var inst_31394 = [cljs.core.str(inst_31393),cljs.core.str(": "),cljs.core.str(args)].join('');
var inst_31395 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_31394], 0));
var inst_31396 = klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,args], 0));
var state_31400__$1 = (function (){var statearr_31405 = state_31400;
(statearr_31405[(7)] = inst_31395);

(statearr_31405[(8)] = inst_31389);

return statearr_31405;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31400__$1,(6),inst_31396);
} else {
if((state_val_31401 === (5))){
var inst_31386 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31408_31496 = state_31400__$1;
(statearr_31408_31496[(2)] = inst_31386);

(statearr_31408_31496[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31401 === (6))){
var inst_31398 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31400__$1,inst_31398);
} else {
return null;
}
}
}
}
}
}
});})(c__14658__auto__,vec__31379,s,args))
;
return ((function (switch__13584__auto__,c__14658__auto__,vec__31379,s,args){
return (function() {
var klipse$compiler$state_machine__13585__auto__ = null;
var klipse$compiler$state_machine__13585__auto____0 = (function (){
var statearr_31412 = [null,null,null,null,null,null,null,null,null];
(statearr_31412[(0)] = klipse$compiler$state_machine__13585__auto__);

(statearr_31412[(1)] = (1));

return statearr_31412;
});
var klipse$compiler$state_machine__13585__auto____1 = (function (state_31400){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_31400);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e31413){if((e31413 instanceof Object)){
var ex__13588__auto__ = e31413;
var statearr_31414_31508 = state_31400;
(statearr_31414_31508[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31400);

return cljs.core.cst$kw$recur;
} else {
throw e31413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__31510 = state_31400;
state_31400 = G__31510;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$compiler$state_machine__13585__auto__ = function(state_31400){
switch(arguments.length){
case 0:
return klipse$compiler$state_machine__13585__auto____0.call(this);
case 1:
return klipse$compiler$state_machine__13585__auto____1.call(this,state_31400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$state_machine__13585__auto____0;
klipse$compiler$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$state_machine__13585__auto____1;
return klipse$compiler$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,vec__31379,s,args))
})();
var state__14660__auto__ = (function (){var statearr_31415 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_31415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_31415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,vec__31379,s,args))
);

return c__14658__auto__;
});

klipse.compiler.eval_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async.cljs$lang$applyTo = (function (seq31376){
return klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31376));
});

klipse.compiler.eval = (function klipse$compiler$eval(var_args){
var args__7303__auto__ = [];
var len__7296__auto___31546 = arguments.length;
var i__7297__auto___31550 = (0);
while(true){
if((i__7297__auto___31550 < len__7296__auto___31546)){
args__7303__auto__.push((arguments[i__7297__auto___31550]));

var G__31551 = (i__7297__auto___31550 + (1));
i__7297__auto___31550 = G__31551;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic = (function (args__31256__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call("klipse.compiler/eval",args__31256__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg("klipse.compiler/eval",args__31256__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/eval\" args__31256__auto__)")].join('')));
}

var vec__31538 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31538,(0),null);
var map__31541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31538,(1),null);
var map__31541__$1 = ((((!((map__31541 == null)))?((((map__31541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31541):map__31541);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31541__$1,cljs.core.cst$kw$static_DASH_fns,false);
var opts = klipse.compiler.build_repl_opts(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$static_DASH_fns,static_fns], null));
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3(opts,klipse.compiler.convert_eval_res,s);
});

klipse.compiler.eval.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval.cljs$lang$applyTo = (function (seq31526){
return klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31526));
});

klipse.compiler.str_compile = (function klipse$compiler$str_compile(exp){
return [cljs.core.str(cljs.core.second(klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp], 0))))].join('');
});
klipse.compiler.str_compile_async = (function klipse$compiler$str_compile_async(exp){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_31590){
var state_val_31591 = (state_31590[(1)]);
if((state_val_31591 === (1))){
var inst_31584 = klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp], 0));
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31590__$1,(2),inst_31584);
} else {
if((state_val_31591 === (2))){
var inst_31586 = (state_31590[(2)]);
var inst_31587 = cljs.core.second(inst_31586);
var inst_31588 = [cljs.core.str(inst_31587)].join('');
var state_31590__$1 = state_31590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31590__$1,inst_31588);
} else {
return null;
}
}
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var klipse$compiler$str_compile_async_$_state_machine__13585__auto__ = null;
var klipse$compiler$str_compile_async_$_state_machine__13585__auto____0 = (function (){
var statearr_31597 = [null,null,null,null,null,null,null];
(statearr_31597[(0)] = klipse$compiler$str_compile_async_$_state_machine__13585__auto__);

(statearr_31597[(1)] = (1));

return statearr_31597;
});
var klipse$compiler$str_compile_async_$_state_machine__13585__auto____1 = (function (state_31590){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_31590);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e31598){if((e31598 instanceof Object)){
var ex__13588__auto__ = e31598;
var statearr_31599_31621 = state_31590;
(statearr_31599_31621[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31590);

return cljs.core.cst$kw$recur;
} else {
throw e31598;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__31623 = state_31590;
state_31590 = G__31623;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$compiler$str_compile_async_$_state_machine__13585__auto__ = function(state_31590){
switch(arguments.length){
case 0:
return klipse$compiler$str_compile_async_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$compiler$str_compile_async_$_state_machine__13585__auto____1.call(this,state_31590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_compile_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_compile_async_$_state_machine__13585__auto____0;
klipse$compiler$str_compile_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_compile_async_$_state_machine__13585__auto____1;
return klipse$compiler$str_compile_async_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_31600 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_31600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_31600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
klipse.compiler.str_eval = (function klipse$compiler$str_eval(exp){
return [cljs.core.str(cljs.core.second(klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp], 0))))].join('');
});
klipse.compiler.str_eval_async = (function klipse$compiler$str_eval_async(exp,p__31628){
var map__31668 = p__31628;
var map__31668__$1 = ((((!((map__31668 == null)))?((((map__31668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31668):map__31668);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31668__$1,cljs.core.cst$kw$static_DASH_fns,false);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,map__31668,map__31668__$1,static_fns){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,map__31668,map__31668__$1,static_fns){
return (function (state_31681){
var state_val_31682 = (state_31681[(1)]);
if((state_val_31682 === (1))){
var inst_31671 = [cljs.core.cst$kw$static_DASH_fns];
var inst_31672 = [static_fns];
var inst_31673 = cljs.core.PersistentHashMap.fromArrays(inst_31671,inst_31672);
var inst_31674 = klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp,inst_31673], 0));
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31681__$1,(2),inst_31674);
} else {
if((state_val_31682 === (2))){
var inst_31676 = (state_31681[(2)]);
var inst_31677 = cljs.core.second(inst_31676);
var inst_31678 = [cljs.core.str(inst_31677)].join('');
var state_31681__$1 = state_31681;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31681__$1,inst_31678);
} else {
return null;
}
}
});})(c__14658__auto__,map__31668,map__31668__$1,static_fns))
;
return ((function (switch__13584__auto__,c__14658__auto__,map__31668,map__31668__$1,static_fns){
return (function() {
var klipse$compiler$str_eval_async_$_state_machine__13585__auto__ = null;
var klipse$compiler$str_eval_async_$_state_machine__13585__auto____0 = (function (){
var statearr_31688 = [null,null,null,null,null,null,null];
(statearr_31688[(0)] = klipse$compiler$str_eval_async_$_state_machine__13585__auto__);

(statearr_31688[(1)] = (1));

return statearr_31688;
});
var klipse$compiler$str_eval_async_$_state_machine__13585__auto____1 = (function (state_31681){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_31681);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e31689){if((e31689 instanceof Object)){
var ex__13588__auto__ = e31689;
var statearr_31690_31700 = state_31681;
(statearr_31690_31700[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31681);

return cljs.core.cst$kw$recur;
} else {
throw e31689;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__31701 = state_31681;
state_31681 = G__31701;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$compiler$str_eval_async_$_state_machine__13585__auto__ = function(state_31681){
switch(arguments.length){
case 0:
return klipse$compiler$str_eval_async_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$compiler$str_eval_async_$_state_machine__13585__auto____1.call(this,state_31681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_eval_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_eval_async_$_state_machine__13585__auto____0;
klipse$compiler$str_eval_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_eval_async_$_state_machine__13585__auto____1;
return klipse$compiler$str_eval_async_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,map__31668,map__31668__$1,static_fns))
})();
var state__14660__auto__ = (function (){var statearr_31691 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_31691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_31691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,map__31668,map__31668__$1,static_fns))
);

return c__14658__auto__;
});
klipse.compiler.eval_file = (function klipse$compiler$eval_file(url){
return klipse.io.fetch_file_BANG_(url,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.print,klipse.compiler.eval));
});
