// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.control.parser');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('gadjett.core');
goog.require('cljs.reader');
goog.require('klipse.utils');
goog.require('klipse.compiler');
goog.require('om.next');
klipse.control.parser.static_fns_QMARK_ = (function klipse$control$parser$static_fns_QMARK_(){
return cljs.core.boolean$(cljs.reader.read_string(cljs.core.cst$kw$static_DASH_fns.cljs$core$IFn$_invoke$arity$2(klipse.utils.url_parameters(),"false")));
});
klipse.control.parser.eval_js = (function klipse$control$parser$eval_js(var_args){
var args__7303__auto__ = [];
var len__7296__auto___31945 = arguments.length;
var i__7297__auto___31946 = (0);
while(true){
if((i__7297__auto___31946 < len__7296__auto___31945)){
args__7303__auto__.push((arguments[i__7297__auto___31946]));

var G__31947 = (i__7297__auto___31946 + (1));
i__7297__auto___31946 = G__31947;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic = (function (args__31256__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call("klipse.control.parser/eval-js",args__31256__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg("klipse.control.parser/eval-js",args__31256__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.control.parser/eval-js\" args__31256__auto__)")].join('')));
}

var vec__31912 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31912,(0),null);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,vec__31912,s){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,vec__31912,s){
return (function (state_31933){
var state_val_31934 = (state_31933[(1)]);
if((state_val_31934 === (1))){
var inst_31918 = [cljs.core.cst$kw$static_DASH_fns];
var inst_31919 = klipse.control.parser.static_fns_QMARK_();
var inst_31920 = [inst_31919];
var inst_31921 = cljs.core.PersistentHashMap.fromArrays(inst_31918,inst_31920);
var inst_31922 = klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,inst_31921], 0));
var state_31933__$1 = state_31933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31933__$1,(2),inst_31922);
} else {
if((state_val_31934 === (2))){
var inst_31924 = (state_31933[(2)]);
var inst_31925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31924,(0),null);
var inst_31926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31924,(1),null);
var inst_31927 = console.log(inst_31926);
var inst_31928 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31929 = JSON.stringify(inst_31926,null,(4));
var inst_31930 = [inst_31925,inst_31929];
var inst_31931 = (new cljs.core.PersistentVector(null,2,(5),inst_31928,inst_31930,null));
var state_31933__$1 = (function (){var statearr_31935 = state_31933;
(statearr_31935[(7)] = inst_31927);

return statearr_31935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31933__$1,inst_31931);
} else {
return null;
}
}
});})(c__14658__auto__,vec__31912,s))
;
return ((function (switch__13584__auto__,c__14658__auto__,vec__31912,s){
return (function() {
var klipse$control$parser$state_machine__13585__auto__ = null;
var klipse$control$parser$state_machine__13585__auto____0 = (function (){
var statearr_31940 = [null,null,null,null,null,null,null,null];
(statearr_31940[(0)] = klipse$control$parser$state_machine__13585__auto__);

(statearr_31940[(1)] = (1));

return statearr_31940;
});
var klipse$control$parser$state_machine__13585__auto____1 = (function (state_31933){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_31933);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e31942){if((e31942 instanceof Object)){
var ex__13588__auto__ = e31942;
var statearr_31943_31970 = state_31933;
(statearr_31943_31970[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31933);

return cljs.core.cst$kw$recur;
} else {
throw e31942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__31972 = state_31933;
state_31933 = G__31972;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13585__auto__ = function(state_31933){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13585__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13585__auto____1.call(this,state_31933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13585__auto____0;
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13585__auto____1;
return klipse$control$parser$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,vec__31912,s))
})();
var state__14660__auto__ = (function (){var statearr_31944 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_31944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_31944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,vec__31912,s))
);

return c__14658__auto__;
});

klipse.control.parser.eval_js.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_js.cljs$lang$applyTo = (function (seq31911){
return klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31911));
});

klipse.control.parser.eval_clj = (function klipse$control$parser$eval_clj(var_args){
var args__7303__auto__ = [];
var len__7296__auto___32095 = arguments.length;
var i__7297__auto___32096 = (0);
while(true){
if((i__7297__auto___32096 < len__7296__auto___32095)){
args__7303__auto__.push((arguments[i__7297__auto___32096]));

var G__32097 = (i__7297__auto___32096 + (1));
i__7297__auto___32096 = G__32097;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic = (function (args__31256__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call("klipse.control.parser/eval-clj",args__31256__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg("klipse.control.parser/eval-clj",args__31256__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.control.parser/eval-clj\" args__31256__auto__)")].join('')));
}

var vec__31994 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31994,(0),null);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,vec__31994,s){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,vec__31994,s){
return (function (state_32050){
var state_val_32051 = (state_32050[(1)]);
if((state_val_32051 === (1))){
var inst_32005 = [cljs.core.cst$kw$static_DASH_fns];
var inst_32006 = klipse.control.parser.static_fns_QMARK_();
var inst_32007 = [inst_32006];
var inst_32008 = cljs.core.PersistentHashMap.fromArrays(inst_32005,inst_32007);
var inst_32009 = klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,inst_32008], 0));
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32050__$1,(2),inst_32009);
} else {
if((state_val_32051 === (2))){
var inst_32011 = (state_32050[(7)]);
var inst_32013 = (state_32050[(8)]);
var inst_32011__$1 = (state_32050[(2)]);
var inst_32012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32011__$1,(0),null);
var inst_32013__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32011__$1,(1),null);
var inst_32014 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32018 = typeof inst_32013__$1 === 'string';
var state_32050__$1 = (function (){var statearr_32052 = state_32050;
(statearr_32052[(9)] = inst_32014);

(statearr_32052[(7)] = inst_32011__$1);

(statearr_32052[(10)] = inst_32012);

(statearr_32052[(8)] = inst_32013__$1);

return statearr_32052;
})();
if(cljs.core.truth_(inst_32018)){
var statearr_32053_32098 = state_32050__$1;
(statearr_32053_32098[(1)] = (3));

} else {
var statearr_32054_32099 = state_32050__$1;
(statearr_32054_32099[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32051 === (3))){
var inst_32013 = (state_32050[(8)]);
var state_32050__$1 = state_32050;
var statearr_32055_32101 = state_32050__$1;
(statearr_32055_32101[(2)] = inst_32013);

(statearr_32055_32101[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32051 === (4))){
var inst_32011 = (state_32050[(7)]);
var inst_32021 = (state_32050[(11)]);
var inst_32012 = (state_32050[(10)]);
var inst_32013 = (state_32050[(8)]);
var inst_32021__$1 = (new goog.string.StringBuffer());
var inst_32032 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_32033 = (function (){var vec__31997 = inst_32011;
var status = inst_32012;
var res = inst_32013;
var sb__7207__auto__ = inst_32021__$1;
var _STAR_print_newline_STAR_32022 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_32023 = cljs.core._STAR_print_fn_STAR_;
return ((function (vec__31997,status,res,sb__7207__auto__,_STAR_print_newline_STAR_32022,_STAR_print_fn_STAR_32023,inst_32011,inst_32021,inst_32012,inst_32013,inst_32021__$1,inst_32032,state_val_32051,c__14658__auto__,vec__31994,s){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});
;})(vec__31997,status,res,sb__7207__auto__,_STAR_print_newline_STAR_32022,_STAR_print_fn_STAR_32023,inst_32011,inst_32021,inst_32012,inst_32013,inst_32021__$1,inst_32032,state_val_32051,c__14658__auto__,vec__31994,s))
})();
var inst_32034 = cljs.core._STAR_print_fn_STAR_ = inst_32033;
var state_32050__$1 = (function (){var statearr_32056 = state_32050;
(statearr_32056[(12)] = inst_32032);

(statearr_32056[(13)] = inst_32034);

(statearr_32056[(11)] = inst_32021__$1);

return statearr_32056;
})();
var statearr_32057_32109 = state_32050__$1;
(statearr_32057_32109[(2)] = null);

(statearr_32057_32109[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32051 === (5))){
var inst_32014 = (state_32050[(9)]);
var inst_32012 = (state_32050[(10)]);
var inst_32046 = (state_32050[(2)]);
var inst_32047 = [inst_32012,inst_32046];
var inst_32048 = (new cljs.core.PersistentVector(null,2,(5),inst_32014,inst_32047,null));
var state_32050__$1 = state_32050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32050__$1,inst_32048);
} else {
if((state_val_32051 === (6))){
var inst_32021 = (state_32050[(11)]);
var inst_32043 = (state_32050[(2)]);
var inst_32044 = [cljs.core.str(inst_32021)].join('');
var state_32050__$1 = (function (){var statearr_32063 = state_32050;
(statearr_32063[(14)] = inst_32043);

return statearr_32063;
})();
var statearr_32064_32111 = state_32050__$1;
(statearr_32064_32111[(2)] = inst_32044);

(statearr_32064_32111[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32051 === (7))){
var inst_32035 = (state_32050[(2)]);
var inst_32036 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_32037 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_32050__$1 = (function (){var statearr_32065 = state_32050;
(statearr_32065[(15)] = inst_32036);

(statearr_32065[(16)] = inst_32035);

(statearr_32065[(17)] = inst_32037);

return statearr_32065;
})();
cljs.core.async.impl.ioc_helpers.process_exception(state_32050__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32051 === (8))){
var inst_32013 = (state_32050[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32050,null,null,(7),(6));
var inst_32041 = cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(inst_32013);
var state_32050__$1 = state_32050;
var statearr_32066_32115 = state_32050__$1;
(statearr_32066_32115[(2)] = inst_32041);


cljs.core.async.impl.ioc_helpers.process_exception(state_32050__$1);

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__14658__auto__,vec__31994,s))
;
return ((function (switch__13584__auto__,c__14658__auto__,vec__31994,s){
return (function() {
var klipse$control$parser$state_machine__13585__auto__ = null;
var klipse$control$parser$state_machine__13585__auto____0 = (function (){
var statearr_32072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32072[(0)] = klipse$control$parser$state_machine__13585__auto__);

(statearr_32072[(1)] = (1));

return statearr_32072;
});
var klipse$control$parser$state_machine__13585__auto____1 = (function (state_32050){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_32050);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e32077){if((e32077 instanceof Object)){
var ex__13588__auto__ = e32077;
var statearr_32078_32116 = state_32050;
(statearr_32078_32116[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32050);

return cljs.core.cst$kw$recur;
} else {
throw e32077;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__32118 = state_32050;
state_32050 = G__32118;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13585__auto__ = function(state_32050){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13585__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13585__auto____1.call(this,state_32050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13585__auto____0;
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13585__auto____1;
return klipse$control$parser$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,vec__31994,s))
})();
var state__14660__auto__ = (function (){var statearr_32080 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_32080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_32080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,vec__31994,s))
);

return c__14658__auto__;
});

klipse.control.parser.eval_clj.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_clj.cljs$lang$applyTo = (function (seq31984){
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq31984));
});

klipse.control.parser.read = (function klipse$control$parser$read(p__32119,key,params){
var map__32122 = p__32119;
var map__32122__$1 = ((((!((map__32122 == null)))?((((map__32122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32122):map__32122);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32122__$1,cljs.core.cst$kw$state);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["read:",key], 0));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,"")], null);
});
if(typeof klipse.control.parser.mutate !== 'undefined'){
} else {
klipse.control.parser.mutate = (function (){var method_table__7146__auto__ = (function (){var G__32124 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32124) : cljs.core.atom.call(null,G__32124));
})();
var prefer_table__7147__auto__ = (function (){var G__32125 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32125) : cljs.core.atom.call(null,G__32125));
})();
var method_cache__7148__auto__ = (function (){var G__32126 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32126) : cljs.core.atom.call(null,G__32126));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__32127 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32127) : cljs.core.atom.call(null,G__32127));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("klipse.control.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$input_SLASH_save,(function (p__32128,_,p__32129){
var map__32130 = p__32128;
var map__32130__$1 = ((((!((map__32130 == null)))?((((map__32130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32130):map__32130);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32130__$1,cljs.core.cst$kw$state);
var map__32131 = p__32129;
var map__32131__$1 = ((((!((map__32131 == null)))?((((map__32131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32131):map__32131);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32131__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__32130,map__32130__$1,state,map__32131,map__32131__$1,value){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$input,value);
});})(map__32130,map__32130__$1,state,map__32131,map__32131__$1,value))
], null);
}));
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cljs_SLASH_compile,(function (p__32139,_,p__32140){
var map__32141 = p__32139;
var map__32141__$1 = ((((!((map__32141 == null)))?((((map__32141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32141):map__32141);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32141__$1,cljs.core.cst$kw$state);
var map__32142 = p__32140;
var map__32142__$1 = ((((!((map__32142 == null)))?((((map__32142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32142):map__32142);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32142__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__32141,map__32141__$1,state,map__32142,map__32142__$1,value){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$compilation,klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value,cljs.core.cst$kw$static_DASH_fns,klipse.control.parser.static_fns_QMARK_()], 0)));
});})(map__32141,map__32141__$1,state,map__32142,map__32142__$1,value))
], null);
}));
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$js_SLASH_eval,(function (p__32148,_,p__32149){
var map__32150 = p__32148;
var map__32150__$1 = ((((!((map__32150 == null)))?((((map__32150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32150):map__32150);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32150__$1,cljs.core.cst$kw$state);
var map__32151 = p__32149;
var map__32151__$1 = ((((!((map__32151 == null)))?((((map__32151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32151):map__32151);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32151__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__32150,map__32150__$1,state,map__32151,map__32151__$1,value){
return (function (){
return null;
});})(map__32150,map__32150__$1,state,map__32151,map__32151__$1,value))
], null);
}));
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clj_SLASH_eval,(function (p__32158,_,p__32159){
var map__32160 = p__32158;
var map__32160__$1 = ((((!((map__32160 == null)))?((((map__32160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32160):map__32160);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32160__$1,cljs.core.cst$kw$state);
var map__32161 = p__32159;
var map__32161__$1 = ((((!((map__32161 == null)))?((((map__32161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32161):map__32161);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32161__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__32160,map__32160__$1,state,map__32161,map__32161__$1,value){
return (function (){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,map__32160,map__32160__$1,state,map__32161,map__32161__$1,value){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,map__32160,map__32160__$1,state,map__32161,map__32161__$1,value){
return (function (state_32169){
var state_val_32170 = (state_32169[(1)]);
if((state_val_32170 === (1))){
var inst_32164 = klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0));
var state_32169__$1 = state_32169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32169__$1,(2),inst_32164);
} else {
if((state_val_32170 === (2))){
var inst_32166 = (state_32169[(2)]);
var inst_32167 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_clj,inst_32166);
var state_32169__$1 = state_32169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32169__$1,inst_32167);
} else {
return null;
}
}
});})(c__14658__auto__,map__32160,map__32160__$1,state,map__32161,map__32161__$1,value))
;
return ((function (switch__13584__auto__,c__14658__auto__,map__32160,map__32160__$1,state,map__32161,map__32161__$1,value){
return (function() {
var klipse$control$parser$state_machine__13585__auto__ = null;
var klipse$control$parser$state_machine__13585__auto____0 = (function (){
var statearr_32174 = [null,null,null,null,null,null,null];
(statearr_32174[(0)] = klipse$control$parser$state_machine__13585__auto__);

(statearr_32174[(1)] = (1));

return statearr_32174;
});
var klipse$control$parser$state_machine__13585__auto____1 = (function (state_32169){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_32169);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e32175){if((e32175 instanceof Object)){
var ex__13588__auto__ = e32175;
var statearr_32176_32179 = state_32169;
(statearr_32176_32179[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32169);

return cljs.core.cst$kw$recur;
} else {
throw e32175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__32180 = state_32169;
state_32169 = G__32180;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13585__auto__ = function(state_32169){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13585__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13585__auto____1.call(this,state_32169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13585__auto____0;
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13585__auto____1;
return klipse$control$parser$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,map__32160,map__32160__$1,state,map__32161,map__32161__$1,value))
})();
var state__14660__auto__ = (function (){var statearr_32177 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_32177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_32177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,map__32160,map__32160__$1,state,map__32161,map__32161__$1,value))
);

return c__14658__auto__;
});})(map__32160,map__32160__$1,state,map__32161,map__32161__$1,value))
], null);
}));
