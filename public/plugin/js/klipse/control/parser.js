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
var len__7296__auto___57148 = arguments.length;
var i__7297__auto___57149 = (0);
while(true){
if((i__7297__auto___57149 < len__7296__auto___57148)){
args__7303__auto__.push((arguments[i__7297__auto___57149]));

var G__57150 = (i__7297__auto___57149 + (1));
i__7297__auto___57149 = G__57150;
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

var vec__57117 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57117,(0),null);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,vec__57117,s){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,vec__57117,s){
return (function (state_57138){
var state_val_57139 = (state_57138[(1)]);
if((state_val_57139 === (1))){
var inst_57123 = [cljs.core.cst$kw$static_DASH_fns];
var inst_57124 = klipse.control.parser.static_fns_QMARK_();
var inst_57125 = [inst_57124];
var inst_57126 = cljs.core.PersistentHashMap.fromArrays(inst_57123,inst_57125);
var inst_57127 = klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,inst_57126], 0));
var state_57138__$1 = state_57138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57138__$1,(2),inst_57127);
} else {
if((state_val_57139 === (2))){
var inst_57129 = (state_57138[(2)]);
var inst_57130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57129,(0),null);
var inst_57131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57129,(1),null);
var inst_57132 = console.log(inst_57131);
var inst_57133 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57134 = JSON.stringify(inst_57131,null,(4));
var inst_57135 = [inst_57130,inst_57134];
var inst_57136 = (new cljs.core.PersistentVector(null,2,(5),inst_57133,inst_57135,null));
var state_57138__$1 = (function (){var statearr_57140 = state_57138;
(statearr_57140[(7)] = inst_57132);

return statearr_57140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57138__$1,inst_57136);
} else {
return null;
}
}
});})(c__14658__auto__,vec__57117,s))
;
return ((function (switch__13584__auto__,c__14658__auto__,vec__57117,s){
return (function() {
var klipse$control$parser$state_machine__13585__auto__ = null;
var klipse$control$parser$state_machine__13585__auto____0 = (function (){
var statearr_57144 = [null,null,null,null,null,null,null,null];
(statearr_57144[(0)] = klipse$control$parser$state_machine__13585__auto__);

(statearr_57144[(1)] = (1));

return statearr_57144;
});
var klipse$control$parser$state_machine__13585__auto____1 = (function (state_57138){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57138);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57145){if((e57145 instanceof Object)){
var ex__13588__auto__ = e57145;
var statearr_57146_57151 = state_57138;
(statearr_57146_57151[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57138);

return cljs.core.cst$kw$recur;
} else {
throw e57145;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57152 = state_57138;
state_57138 = G__57152;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13585__auto__ = function(state_57138){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13585__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13585__auto____1.call(this,state_57138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13585__auto____0;
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13585__auto____1;
return klipse$control$parser$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,vec__57117,s))
})();
var state__14660__auto__ = (function (){var statearr_57147 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_57147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,vec__57117,s))
);

return c__14658__auto__;
});

klipse.control.parser.eval_js.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_js.cljs$lang$applyTo = (function (seq57116){
return klipse.control.parser.eval_js.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57116));
});

klipse.control.parser.eval_clj = (function klipse$control$parser$eval_clj(var_args){
var args__7303__auto__ = [];
var len__7296__auto___57213 = arguments.length;
var i__7297__auto___57214 = (0);
while(true){
if((i__7297__auto___57214 < len__7296__auto___57213)){
args__7303__auto__.push((arguments[i__7297__auto___57214]));

var G__57215 = (i__7297__auto___57214 + (1));
i__7297__auto___57214 = G__57215;
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

var vec__57154 = args__31256__auto__;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57154,(0),null);
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,vec__57154,s){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,vec__57154,s){
return (function (state_57194){
var state_val_57195 = (state_57194[(1)]);
if((state_val_57195 === (1))){
var inst_57160 = [cljs.core.cst$kw$static_DASH_fns];
var inst_57161 = klipse.control.parser.static_fns_QMARK_();
var inst_57162 = [inst_57161];
var inst_57163 = cljs.core.PersistentHashMap.fromArrays(inst_57160,inst_57162);
var inst_57164 = klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,inst_57163], 0));
var state_57194__$1 = state_57194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57194__$1,(2),inst_57164);
} else {
if((state_val_57195 === (2))){
var inst_57168 = (state_57194[(7)]);
var inst_57166 = (state_57194[(8)]);
var inst_57166__$1 = (state_57194[(2)]);
var inst_57167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57166__$1,(0),null);
var inst_57168__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57166__$1,(1),null);
var inst_57169 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57170 = typeof inst_57168__$1 === 'string';
var state_57194__$1 = (function (){var statearr_57196 = state_57194;
(statearr_57196[(9)] = inst_57169);

(statearr_57196[(10)] = inst_57167);

(statearr_57196[(7)] = inst_57168__$1);

(statearr_57196[(8)] = inst_57166__$1);

return statearr_57196;
})();
if(cljs.core.truth_(inst_57170)){
var statearr_57197_57216 = state_57194__$1;
(statearr_57197_57216[(1)] = (3));

} else {
var statearr_57198_57217 = state_57194__$1;
(statearr_57198_57217[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_57195 === (3))){
var inst_57168 = (state_57194[(7)]);
var state_57194__$1 = state_57194;
var statearr_57199_57218 = state_57194__$1;
(statearr_57199_57218[(2)] = inst_57168);

(statearr_57199_57218[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57195 === (4))){
var inst_57173 = (state_57194[(11)]);
var inst_57167 = (state_57194[(10)]);
var inst_57168 = (state_57194[(7)]);
var inst_57166 = (state_57194[(8)]);
var inst_57173__$1 = (new goog.string.StringBuffer());
var inst_57176 = cljs.core._STAR_print_newline_STAR_ = true;
var inst_57177 = (function (){var vec__57157 = inst_57166;
var status = inst_57167;
var res = inst_57168;
var sb__7207__auto__ = inst_57173__$1;
var _STAR_print_newline_STAR_57174 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57175 = cljs.core._STAR_print_fn_STAR_;
return ((function (vec__57157,status,res,sb__7207__auto__,_STAR_print_newline_STAR_57174,_STAR_print_fn_STAR_57175,inst_57173,inst_57167,inst_57168,inst_57166,inst_57173__$1,inst_57176,state_val_57195,c__14658__auto__,vec__57154,s){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});
;})(vec__57157,status,res,sb__7207__auto__,_STAR_print_newline_STAR_57174,_STAR_print_fn_STAR_57175,inst_57173,inst_57167,inst_57168,inst_57166,inst_57173__$1,inst_57176,state_val_57195,c__14658__auto__,vec__57154,s))
})();
var inst_57178 = cljs.core._STAR_print_fn_STAR_ = inst_57177;
var state_57194__$1 = (function (){var statearr_57200 = state_57194;
(statearr_57200[(12)] = inst_57178);

(statearr_57200[(11)] = inst_57173__$1);

(statearr_57200[(13)] = inst_57176);

return statearr_57200;
})();
var statearr_57201_57219 = state_57194__$1;
(statearr_57201_57219[(2)] = null);

(statearr_57201_57219[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57195 === (5))){
var inst_57169 = (state_57194[(9)]);
var inst_57167 = (state_57194[(10)]);
var inst_57190 = (state_57194[(2)]);
var inst_57191 = [inst_57167,inst_57190];
var inst_57192 = (new cljs.core.PersistentVector(null,2,(5),inst_57169,inst_57191,null));
var state_57194__$1 = state_57194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57194__$1,inst_57192);
} else {
if((state_val_57195 === (6))){
var inst_57173 = (state_57194[(11)]);
var inst_57187 = (state_57194[(2)]);
var inst_57188 = [cljs.core.str(inst_57173)].join('');
var state_57194__$1 = (function (){var statearr_57202 = state_57194;
(statearr_57202[(14)] = inst_57187);

return statearr_57202;
})();
var statearr_57203_57220 = state_57194__$1;
(statearr_57203_57220[(2)] = inst_57188);

(statearr_57203_57220[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_57195 === (7))){
var inst_57179 = (state_57194[(2)]);
var inst_57180 = cljs.core._STAR_print_fn_STAR_ = cljs.core._STAR_print_fn_STAR_;
var inst_57181 = cljs.core._STAR_print_newline_STAR_ = cljs.core._STAR_print_newline_STAR_;
var state_57194__$1 = (function (){var statearr_57204 = state_57194;
(statearr_57204[(15)] = inst_57180);

(statearr_57204[(16)] = inst_57179);

(statearr_57204[(17)] = inst_57181);

return statearr_57204;
})();
cljs.core.async.impl.ioc_helpers.process_exception(state_57194__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_57195 === (8))){
var inst_57168 = (state_57194[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_57194,null,null,(7),(6));
var inst_57185 = cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(inst_57168);
var state_57194__$1 = state_57194;
var statearr_57205_57221 = state_57194__$1;
(statearr_57205_57221[(2)] = inst_57185);


cljs.core.async.impl.ioc_helpers.process_exception(state_57194__$1);

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
});})(c__14658__auto__,vec__57154,s))
;
return ((function (switch__13584__auto__,c__14658__auto__,vec__57154,s){
return (function() {
var klipse$control$parser$state_machine__13585__auto__ = null;
var klipse$control$parser$state_machine__13585__auto____0 = (function (){
var statearr_57209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57209[(0)] = klipse$control$parser$state_machine__13585__auto__);

(statearr_57209[(1)] = (1));

return statearr_57209;
});
var klipse$control$parser$state_machine__13585__auto____1 = (function (state_57194){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57194);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57210){if((e57210 instanceof Object)){
var ex__13588__auto__ = e57210;
var statearr_57211_57222 = state_57194;
(statearr_57211_57222[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57194);

return cljs.core.cst$kw$recur;
} else {
throw e57210;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57223 = state_57194;
state_57194 = G__57223;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13585__auto__ = function(state_57194){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13585__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13585__auto____1.call(this,state_57194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13585__auto____0;
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13585__auto____1;
return klipse$control$parser$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,vec__57154,s))
})();
var state__14660__auto__ = (function (){var statearr_57212 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_57212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,vec__57154,s))
);

return c__14658__auto__;
});

klipse.control.parser.eval_clj.cljs$lang$maxFixedArity = (0);

klipse.control.parser.eval_clj.cljs$lang$applyTo = (function (seq57153){
return klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq57153));
});

klipse.control.parser.read = (function klipse$control$parser$read(p__57224,key,params){
var map__57227 = p__57224;
var map__57227__$1 = ((((!((map__57227 == null)))?((((map__57227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57227):map__57227);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57227__$1,cljs.core.cst$kw$state);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["read:",key], 0));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),key,"")], null);
});
if(typeof klipse.control.parser.mutate !== 'undefined'){
} else {
klipse.control.parser.mutate = (function (){var method_table__7146__auto__ = (function (){var G__57229 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57229) : cljs.core.atom.call(null,G__57229));
})();
var prefer_table__7147__auto__ = (function (){var G__57230 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57230) : cljs.core.atom.call(null,G__57230));
})();
var method_cache__7148__auto__ = (function (){var G__57231 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57231) : cljs.core.atom.call(null,G__57231));
})();
var cached_hierarchy__7149__auto__ = (function (){var G__57232 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__57232) : cljs.core.atom.call(null,G__57232));
})();
var hierarchy__7150__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("klipse.control.parser","mutate"),om.next.dispatch,cljs.core.cst$kw$default,hierarchy__7150__auto__,method_table__7146__auto__,prefer_table__7147__auto__,method_cache__7148__auto__,cached_hierarchy__7149__auto__));
})();
}
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$input_SLASH_save,(function (p__57233,_,p__57234){
var map__57235 = p__57233;
var map__57235__$1 = ((((!((map__57235 == null)))?((((map__57235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57235):map__57235);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57235__$1,cljs.core.cst$kw$state);
var map__57236 = p__57234;
var map__57236__$1 = ((((!((map__57236 == null)))?((((map__57236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57236):map__57236);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57236__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__57235,map__57235__$1,state,map__57236,map__57236__$1,value){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$input,value);
});})(map__57235,map__57235__$1,state,map__57236,map__57236__$1,value))
], null);
}));
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$cljs_SLASH_compile,(function (p__57239,_,p__57240){
var map__57241 = p__57239;
var map__57241__$1 = ((((!((map__57241 == null)))?((((map__57241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57241):map__57241);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57241__$1,cljs.core.cst$kw$state);
var map__57242 = p__57240;
var map__57242__$1 = ((((!((map__57242 == null)))?((((map__57242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57242):map__57242);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57242__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__57241,map__57241__$1,state,map__57242,map__57242__$1,value){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$compilation,klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value,cljs.core.cst$kw$static_DASH_fns,klipse.control.parser.static_fns_QMARK_()], 0)));
});})(map__57241,map__57241__$1,state,map__57242,map__57242__$1,value))
], null);
}));
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$js_SLASH_eval,(function (p__57245,_,p__57246){
var map__57247 = p__57245;
var map__57247__$1 = ((((!((map__57247 == null)))?((((map__57247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57247):map__57247);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57247__$1,cljs.core.cst$kw$state);
var map__57248 = p__57246;
var map__57248__$1 = ((((!((map__57248 == null)))?((((map__57248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57248):map__57248);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57248__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__57247,map__57247__$1,state,map__57248,map__57248__$1,value){
return (function (){
return null;
});})(map__57247,map__57247__$1,state,map__57248,map__57248__$1,value))
], null);
}));
klipse.control.parser.mutate.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$sym$clj_SLASH_eval,(function (p__57251,_,p__57252){
var map__57253 = p__57251;
var map__57253__$1 = ((((!((map__57253 == null)))?((((map__57253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57253):map__57253);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57253__$1,cljs.core.cst$kw$state);
var map__57254 = p__57252;
var map__57254__$1 = ((((!((map__57254 == null)))?((((map__57254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57254):map__57254);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$action,((function (map__57253,map__57253__$1,state,map__57254,map__57254__$1,value){
return (function (){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,map__57253,map__57253__$1,state,map__57254,map__57254__$1,value){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,map__57253,map__57253__$1,state,map__57254,map__57254__$1,value){
return (function (state_57262){
var state_val_57263 = (state_57262[(1)]);
if((state_val_57263 === (1))){
var inst_57257 = klipse.control.parser.eval_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0));
var state_57262__$1 = state_57262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57262__$1,(2),inst_57257);
} else {
if((state_val_57263 === (2))){
var inst_57259 = (state_57262[(2)]);
var inst_57260 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$evaluation_DASH_clj,inst_57259);
var state_57262__$1 = state_57262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57262__$1,inst_57260);
} else {
return null;
}
}
});})(c__14658__auto__,map__57253,map__57253__$1,state,map__57254,map__57254__$1,value))
;
return ((function (switch__13584__auto__,c__14658__auto__,map__57253,map__57253__$1,state,map__57254,map__57254__$1,value){
return (function() {
var klipse$control$parser$state_machine__13585__auto__ = null;
var klipse$control$parser$state_machine__13585__auto____0 = (function (){
var statearr_57267 = [null,null,null,null,null,null,null];
(statearr_57267[(0)] = klipse$control$parser$state_machine__13585__auto__);

(statearr_57267[(1)] = (1));

return statearr_57267;
});
var klipse$control$parser$state_machine__13585__auto____1 = (function (state_57262){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_57262);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e57268){if((e57268 instanceof Object)){
var ex__13588__auto__ = e57268;
var statearr_57269_57271 = state_57262;
(statearr_57269_57271[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_57262);

return cljs.core.cst$kw$recur;
} else {
throw e57268;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__57272 = state_57262;
state_57262 = G__57272;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
klipse$control$parser$state_machine__13585__auto__ = function(state_57262){
switch(arguments.length){
case 0:
return klipse$control$parser$state_machine__13585__auto____0.call(this);
case 1:
return klipse$control$parser$state_machine__13585__auto____1.call(this,state_57262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$control$parser$state_machine__13585__auto____0;
klipse$control$parser$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$control$parser$state_machine__13585__auto____1;
return klipse$control$parser$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,map__57253,map__57253__$1,state,map__57254,map__57254__$1,value))
})();
var state__14660__auto__ = (function (){var statearr_57270 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_57270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_57270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,map__57253,map__57253__$1,state,map__57254,map__57254__$1,value))
);

return c__14658__auto__;
});})(map__57253,map__57253__$1,state,map__57254,map__57254__$1,value))
], null);
}));
