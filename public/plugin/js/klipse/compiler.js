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

var G__56679 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lang,cljs.core.cst$kw$js,cljs.core.cst$kw$source,""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__56679) : cb.call(null,G__56679));
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
}catch (e56681){if((e56681 instanceof Object)){
var e = e56681;
return s;
} else {
throw e56681;

}
}});
klipse.compiler.convert_eval_res = (function klipse$compiler$convert_eval_res(p__56682){
var map__56685 = p__56682;
var map__56685__$1 = ((((!((map__56685 == null)))?((((map__56685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56685):map__56685);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56685__$1,cljs.core.cst$kw$form);
var warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56685__$1,cljs.core.cst$kw$warning);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56685__$1,cljs.core.cst$kw$error);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56685__$1,cljs.core.cst$kw$value);
var success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56685__$1,cljs.core.cst$kw$success_QMARK_);
var status = (cljs.core.truth_(error)?cljs.core.cst$kw$error:cljs.core.cst$kw$ok);
var res = (cljs.core.truth_(value)?klipse.compiler.read_string_cond(value):error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.convert_compile_res = (function klipse$compiler$convert_compile_res(p__56687){
var map__56690 = p__56687;
var map__56690__$1 = ((((!((map__56690 == null)))?((((map__56690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56690):map__56690);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56690__$1,cljs.core.cst$kw$value);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56690__$1,cljs.core.cst$kw$error);
var status = (cljs.core.truth_(error)?cljs.core.cst$kw$error:cljs.core.cst$kw$ok);
var res = (cljs.core.truth_(error)?error:value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.compile = (function klipse$compiler$compile(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56698 = arguments.length;
var i__7297__auto___56699 = (0);
while(true){
if((i__7297__auto___56699 < len__7296__auto___56698)){
args__7303__auto__.push((arguments[i__7297__auto___56699]));

var G__56700 = (i__7297__auto___56699 + (1));
i__7297__auto___56699 = G__56700;
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

var vec__56693 = args__31256__auto__;
var seq__56694 = cljs.core.seq(vec__56693);
var first__56695 = cljs.core.first(seq__56694);
var seq__56694__$1 = cljs.core.next(seq__56694);
var s = first__56695;
var map__56696 = seq__56694__$1;
var map__56696__$1 = ((((!((map__56696 == null)))?((((map__56696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56696):map__56696);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56696__$1,cljs.core.cst$kw$static_DASH_fns,false);
return cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$static_DASH_fns,static_fns,cljs.core.cst$kw$load,klipse.compiler.load_inlined], null),klipse.compiler.convert_compile_res);
});

klipse.compiler.compile.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile.cljs$lang$applyTo = (function (seq56692){
return klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56692));
});

klipse.compiler.compile_async = (function klipse$compiler$compile_async(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56708 = arguments.length;
var i__7297__auto___56709 = (0);
while(true){
if((i__7297__auto___56709 < len__7296__auto___56708)){
args__7303__auto__.push((arguments[i__7297__auto___56709]));

var G__56710 = (i__7297__auto___56709 + (1));
i__7297__auto___56709 = G__56710;
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

var vec__56703 = args__31256__auto__;
var seq__56704 = cljs.core.seq(vec__56703);
var first__56705 = cljs.core.first(seq__56704);
var seq__56704__$1 = cljs.core.next(seq__56704);
var s = first__56705;
var map__56706 = seq__56704__$1;
var map__56706__$1 = ((((!((map__56706 == null)))?((((map__56706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56706):map__56706);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56706__$1,cljs.core.cst$kw$static_DASH_fns,false);
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
cljs.js.compile_str.cljs$core$IFn$_invoke$arity$5(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$static_DASH_fns,static_fns,cljs.core.cst$kw$load,klipse.compiler.load_inlined], null),((function (c,vec__56703,seq__56704,first__56705,seq__56704__$1,s,map__56706,map__56706__$1,static_fns){
return (function (p1__56701_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,klipse.compiler.convert_compile_res(p1__56701_SHARP_));
});})(c,vec__56703,seq__56704,first__56705,seq__56704__$1,s,map__56706,map__56706__$1,static_fns))
);

return c;
});

klipse.compiler.compile_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile_async.cljs$lang$applyTo = (function (seq56702){
return klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56702));
});

klipse.compiler.build_repl_opts = (function klipse$compiler$build_repl_opts(p__56711){
var map__56714 = p__56711;
var map__56714__$1 = ((((!((map__56714 == null)))?((((map__56714.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56714.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56714):map__56714);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56714__$1,cljs.core.cst$kw$static_DASH_fns);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([replumb.core.options.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$browser,klipse.compiler.repos(),klipse.compiler.special_fetch),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$warning_DASH_as_DASH_error,false,cljs.core.cst$kw$static_DASH_fns,static_fns,cljs.core.cst$kw$context,cljs.core.cst$kw$statement,cljs.core.cst$kw$verbose,false], null)], 0));
});
klipse.compiler.eval_async_1 = (function klipse$compiler$eval_async_1(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56723 = arguments.length;
var i__7297__auto___56724 = (0);
while(true){
if((i__7297__auto___56724 < len__7296__auto___56723)){
args__7303__auto__.push((arguments[i__7297__auto___56724]));

var G__56725 = (i__7297__auto___56724 + (1));
i__7297__auto___56724 = G__56725;
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

var vec__56718 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56718,(0),null);
var map__56721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56718,(1),null);
var map__56721__$1 = ((((!((map__56721 == null)))?((((map__56721.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56721.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56721):map__56721);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56721__$1,cljs.core.cst$kw$static_DASH_fns,false);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["eval-async-1: ",s], 0));

var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var opts = (function (){var x__31222__auto__ = klipse.compiler.build_repl_opts(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$static_DASH_fns,static_fns], null));
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.list(cljs.core.cst$sym$build_DASH_repl_DASH_opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$static_DASH_fns,cljs.core.cst$sym$static_DASH_fns], null))),cljs.core.str(": "),cljs.core.str(x__31222__auto__)].join('')], 0));

return x__31222__auto__;
})();
replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3(opts,((function (c,opts,vec__56718,s,map__56721,map__56721__$1,static_fns){
return (function (p1__56716_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(c,klipse.compiler.convert_eval_res(p1__56716_SHARP_));
});})(c,opts,vec__56718,s,map__56721,map__56721__$1,static_fns))
,s);

return c;
});

klipse.compiler.eval_async_1.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async_1.cljs$lang$applyTo = (function (seq56717){
return klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56717));
});

klipse.compiler.contains_macro_def_QMARK_ = (function klipse$compiler$contains_macro_def_QMARK_(exp){
return cljs.core.re_find(/\$macros/,exp);
});
klipse.compiler.eval_async = (function klipse$compiler$eval_async(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56759 = arguments.length;
var i__7297__auto___56760 = (0);
while(true){
if((i__7297__auto___56760 < len__7296__auto___56759)){
args__7303__auto__.push((arguments[i__7297__auto___56760]));

var G__56761 = (i__7297__auto___56760 + (1));
i__7297__auto___56760 = G__56761;
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

var vec__56727 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56727,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56727,(1),null);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,vec__56727,s,args){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,vec__56727,s,args){
return (function (state_56745){
var state_val_56746 = (state_56745[(1)]);
if((state_val_56746 === (1))){
var inst_56730 = klipse.compiler.contains_macro_def_QMARK_(s);
var state_56745__$1 = state_56745;
if(cljs.core.truth_(inst_56730)){
var statearr_56747_56762 = state_56745__$1;
(statearr_56747_56762[(1)] = (2));

} else {
var statearr_56748_56763 = state_56745__$1;
(statearr_56748_56763[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_56746 === (2))){
var inst_56732 = klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,args], 0));
var state_56745__$1 = state_56745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56745__$1,(5),inst_56732);
} else {
if((state_val_56746 === (3))){
var state_56745__$1 = state_56745;
var statearr_56749_56764 = state_56745__$1;
(statearr_56749_56764[(2)] = null);

(statearr_56749_56764[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_56746 === (4))){
var inst_56737 = (state_56745[(2)]);
var inst_56738 = cljs.core.cst$sym$args;
var inst_56739 = [cljs.core.str(inst_56738),cljs.core.str(": "),cljs.core.str(args)].join('');
var inst_56740 = cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_56739], 0));
var inst_56741 = klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,args], 0));
var state_56745__$1 = (function (){var statearr_56750 = state_56745;
(statearr_56750[(7)] = inst_56740);

(statearr_56750[(8)] = inst_56737);

return statearr_56750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56745__$1,(6),inst_56741);
} else {
if((state_val_56746 === (5))){
var inst_56734 = (state_56745[(2)]);
var state_56745__$1 = state_56745;
var statearr_56751_56765 = state_56745__$1;
(statearr_56751_56765[(2)] = inst_56734);

(statearr_56751_56765[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_56746 === (6))){
var inst_56743 = (state_56745[(2)]);
var state_56745__$1 = state_56745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56745__$1,inst_56743);
} else {
return null;
}
}
}
}
}
}
});})(c__14658__auto__,vec__56727,s,args))
;
return ((function (switch__13584__auto__,c__14658__auto__,vec__56727,s,args){
return (function() {
var klipse$compiler$state_machine__13585__auto__ = null;
var klipse$compiler$state_machine__13585__auto____0 = (function (){
var statearr_56755 = [null,null,null,null,null,null,null,null,null];
(statearr_56755[(0)] = klipse$compiler$state_machine__13585__auto__);

(statearr_56755[(1)] = (1));

return statearr_56755;
});
var klipse$compiler$state_machine__13585__auto____1 = (function (state_56745){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_56745);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e56756){if((e56756 instanceof Object)){
var ex__13588__auto__ = e56756;
var statearr_56757_56766 = state_56745;
(statearr_56757_56766[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56745);

return cljs.core.cst$kw$recur;
} else {
throw e56756;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__56767 = state_56745;
state_56745 = G__56767;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$compiler$state_machine__13585__auto__ = function(state_56745){
switch(arguments.length){
case 0:
return klipse$compiler$state_machine__13585__auto____0.call(this);
case 1:
return klipse$compiler$state_machine__13585__auto____1.call(this,state_56745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$state_machine__13585__auto____0;
klipse$compiler$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$state_machine__13585__auto____1;
return klipse$compiler$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,vec__56727,s,args))
})();
var state__14660__auto__ = (function (){var statearr_56758 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_56758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_56758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,vec__56727,s,args))
);

return c__14658__auto__;
});

klipse.compiler.eval_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async.cljs$lang$applyTo = (function (seq56726){
return klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56726));
});

klipse.compiler.eval = (function klipse$compiler$eval(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56774 = arguments.length;
var i__7297__auto___56775 = (0);
while(true){
if((i__7297__auto___56775 < len__7296__auto___56774)){
args__7303__auto__.push((arguments[i__7297__auto___56775]));

var G__56776 = (i__7297__auto___56775 + (1));
i__7297__auto___56775 = G__56776;
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

var vec__56769 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56769,(0),null);
var map__56772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56769,(1),null);
var map__56772__$1 = ((((!((map__56772 == null)))?((((map__56772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56772):map__56772);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56772__$1,cljs.core.cst$kw$static_DASH_fns,false);
var opts = klipse.compiler.build_repl_opts(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$static_DASH_fns,static_fns], null));
return replumb.core.read_eval_call.cljs$core$IFn$_invoke$arity$3(opts,klipse.compiler.convert_eval_res,s);
});

klipse.compiler.eval.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval.cljs$lang$applyTo = (function (seq56768){
return klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56768));
});

klipse.compiler.str_compile = (function klipse$compiler$str_compile(exp){
return [cljs.core.str(cljs.core.second(klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp], 0))))].join('');
});
klipse.compiler.str_compile_async = (function klipse$compiler$str_compile_async(exp){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_56798){
var state_val_56799 = (state_56798[(1)]);
if((state_val_56799 === (1))){
var inst_56792 = klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp], 0));
var state_56798__$1 = state_56798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56798__$1,(2),inst_56792);
} else {
if((state_val_56799 === (2))){
var inst_56794 = (state_56798[(2)]);
var inst_56795 = cljs.core.second(inst_56794);
var inst_56796 = [cljs.core.str(inst_56795)].join('');
var state_56798__$1 = state_56798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56798__$1,inst_56796);
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
var statearr_56803 = [null,null,null,null,null,null,null];
(statearr_56803[(0)] = klipse$compiler$str_compile_async_$_state_machine__13585__auto__);

(statearr_56803[(1)] = (1));

return statearr_56803;
});
var klipse$compiler$str_compile_async_$_state_machine__13585__auto____1 = (function (state_56798){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_56798);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e56804){if((e56804 instanceof Object)){
var ex__13588__auto__ = e56804;
var statearr_56805_56807 = state_56798;
(statearr_56805_56807[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56798);

return cljs.core.cst$kw$recur;
} else {
throw e56804;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__56808 = state_56798;
state_56798 = G__56808;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$compiler$str_compile_async_$_state_machine__13585__auto__ = function(state_56798){
switch(arguments.length){
case 0:
return klipse$compiler$str_compile_async_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$compiler$str_compile_async_$_state_machine__13585__auto____1.call(this,state_56798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_compile_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_compile_async_$_state_machine__13585__auto____0;
klipse$compiler$str_compile_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_compile_async_$_state_machine__13585__auto____1;
return klipse$compiler$str_compile_async_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_56806 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_56806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_56806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
klipse.compiler.str_eval = (function klipse$compiler$str_eval(exp){
return [cljs.core.str(cljs.core.second(klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp], 0))))].join('');
});
klipse.compiler.str_eval_async = (function klipse$compiler$str_eval_async(exp,p__56809){
var map__56830 = p__56809;
var map__56830__$1 = ((((!((map__56830 == null)))?((((map__56830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56830):map__56830);
var static_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56830__$1,cljs.core.cst$kw$static_DASH_fns,false);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,map__56830,map__56830__$1,static_fns){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,map__56830,map__56830__$1,static_fns){
return (function (state_56841){
var state_val_56842 = (state_56841[(1)]);
if((state_val_56842 === (1))){
var inst_56832 = [cljs.core.cst$kw$static_DASH_fns];
var inst_56833 = [static_fns];
var inst_56834 = cljs.core.PersistentHashMap.fromArrays(inst_56832,inst_56833);
var inst_56835 = klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([exp,inst_56834], 0));
var state_56841__$1 = state_56841;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56841__$1,(2),inst_56835);
} else {
if((state_val_56842 === (2))){
var inst_56837 = (state_56841[(2)]);
var inst_56838 = cljs.core.second(inst_56837);
var inst_56839 = [cljs.core.str(inst_56838)].join('');
var state_56841__$1 = state_56841;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56841__$1,inst_56839);
} else {
return null;
}
}
});})(c__14658__auto__,map__56830,map__56830__$1,static_fns))
;
return ((function (switch__13584__auto__,c__14658__auto__,map__56830,map__56830__$1,static_fns){
return (function() {
var klipse$compiler$str_eval_async_$_state_machine__13585__auto__ = null;
var klipse$compiler$str_eval_async_$_state_machine__13585__auto____0 = (function (){
var statearr_56846 = [null,null,null,null,null,null,null];
(statearr_56846[(0)] = klipse$compiler$str_eval_async_$_state_machine__13585__auto__);

(statearr_56846[(1)] = (1));

return statearr_56846;
});
var klipse$compiler$str_eval_async_$_state_machine__13585__auto____1 = (function (state_56841){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_56841);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e56847){if((e56847 instanceof Object)){
var ex__13588__auto__ = e56847;
var statearr_56848_56850 = state_56841;
(statearr_56848_56850[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_56841);

return cljs.core.cst$kw$recur;
} else {
throw e56847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__56851 = state_56841;
state_56841 = G__56851;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$compiler$str_eval_async_$_state_machine__13585__auto__ = function(state_56841){
switch(arguments.length){
case 0:
return klipse$compiler$str_eval_async_$_state_machine__13585__auto____0.call(this);
case 1:
return klipse$compiler$str_eval_async_$_state_machine__13585__auto____1.call(this,state_56841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_eval_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_eval_async_$_state_machine__13585__auto____0;
klipse$compiler$str_eval_async_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_eval_async_$_state_machine__13585__auto____1;
return klipse$compiler$str_eval_async_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,map__56830,map__56830__$1,static_fns))
})();
var state__14660__auto__ = (function (){var statearr_56849 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_56849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_56849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,map__56830,map__56830__$1,static_fns))
);

return c__14658__auto__;
});
klipse.compiler.eval_file = (function klipse$compiler$eval_file(url){
return klipse.io.fetch_file_BANG_(url,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.print,klipse.compiler.eval));
});
