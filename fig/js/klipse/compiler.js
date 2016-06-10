// Compiled by ClojureScript 1.9.36 {}
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
cljs.core.print.call(null,"load-inlined: ",opts);

return cb.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"source","source",-433931539),""], null));
});
klipse.compiler.known_src_paths = new cljs.core.PersistentArrayMap(null, 4, ["cljs-repo","http://viebel.github.io/cljs-self-host-repository/repository","core.async","https://raw.githubusercontent.com/mfikes/andare/master/src/main/clojure/","gist","https://gist.githubusercontent.com","clojurescript",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/clojure","https://raw.githubusercontent.com/clojure/clojurescript/master/src/main/cljs"], null)], null);
klipse.compiler.repos = (function klipse$compiler$repos(){
return cljs.core.flatten.call(null,cljs.core.vals.call(null,klipse.compiler.known_src_paths));
});
klipse.compiler.special_fetch = (function klipse$compiler$special_fetch(file_url,src_cb){
return klipse.io.fetch_file_BANG_.call(null,clojure.string.replace.call(null,file_url,/gist_/,""),src_cb);
});
klipse.compiler.repl_opts_load = (function klipse$compiler$repl_opts_load(){
return cljs.core.merge.call(null,replumb.core.options.call(null,new cljs.core.Keyword(null,"browser","browser",828191719),klipse.compiler.repos.call(null),klipse.compiler.special_fetch),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),false,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"verbose","verbose",1694226060),false], null));
});
klipse.compiler.read_string_cond = (function klipse$compiler$read_string_cond(s){
try{return cljs.reader.read_string.call(null,s);
}catch (e32538){if((e32538 instanceof Object)){
var e = e32538;
return s;
} else {
throw e32538;

}
}});
klipse.compiler.convert_eval_res = (function klipse$compiler$convert_eval_res(p__32539){
var map__32542 = p__32539;
var map__32542__$1 = ((((!((map__32542 == null)))?((((map__32542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32542):map__32542);
var form = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__32542__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(value)?klipse.compiler.read_string_cond.call(null,value):error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.convert_compile_res = (function klipse$compiler$convert_compile_res(p__32544){
var map__32547 = p__32544;
var map__32547__$1 = ((((!((map__32547 == null)))?((((map__32547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32547):map__32547);
var value = cljs.core.get.call(null,map__32547__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__32547__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.compile = (function klipse$compiler$compile(var_args){
var args__23697__auto__ = [];
var len__23690__auto___32555 = arguments.length;
var i__23691__auto___32556 = (0);
while(true){
if((i__23691__auto___32556 < len__23690__auto___32555)){
args__23697__auto__.push((arguments[i__23691__auto___32556]));

var G__32557 = (i__23691__auto___32556 + (1));
i__23691__auto___32556 = G__32557;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic = (function (args__25618__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.compiler/compile",args__25618__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.compiler/compile",args__25618__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/compile\" args__25618__auto__)")].join('')));
}

var vec__32550 = args__25618__auto__;
var seq__32551 = cljs.core.seq.call(null,vec__32550);
var first__32552 = cljs.core.first.call(null,seq__32551);
var seq__32551__$1 = cljs.core.next.call(null,seq__32551);
var s = first__32552;
var map__32553 = seq__32551__$1;
var map__32553__$1 = ((((!((map__32553 == null)))?((((map__32553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32553):map__32553);
var static_fns = cljs.core.get.call(null,map__32553__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
return cljs.js.compile_str.call(null,cljs.js.empty_state.call(null),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),klipse.compiler.load_inlined], null),klipse.compiler.convert_compile_res);
});

klipse.compiler.compile.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile.cljs$lang$applyTo = (function (seq32549){
return klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32549));
});

klipse.compiler.compile_async = (function klipse$compiler$compile_async(var_args){
var args__23697__auto__ = [];
var len__23690__auto___32565 = arguments.length;
var i__23691__auto___32566 = (0);
while(true){
if((i__23691__auto___32566 < len__23690__auto___32565)){
args__23697__auto__.push((arguments[i__23691__auto___32566]));

var G__32567 = (i__23691__auto___32566 + (1));
i__23691__auto___32566 = G__32567;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic = (function (args__25618__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.compiler/compile-async",args__25618__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.compiler/compile-async",args__25618__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/compile-async\" args__25618__auto__)")].join('')));
}

var vec__32560 = args__25618__auto__;
var seq__32561 = cljs.core.seq.call(null,vec__32560);
var first__32562 = cljs.core.first.call(null,seq__32561);
var seq__32561__$1 = cljs.core.next.call(null,seq__32561);
var s = first__32562;
var map__32563 = seq__32561__$1;
var map__32563__$1 = ((((!((map__32563 == null)))?((((map__32563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32563):map__32563);
var static_fns = cljs.core.get.call(null,map__32563__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var c = cljs.core.async.chan.call(null);
cljs.js.compile_str.call(null,cljs.js.empty_state.call(null),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),klipse.compiler.load_inlined], null),((function (c,vec__32560,seq__32561,first__32562,seq__32561__$1,s,map__32563,map__32563__$1,static_fns){
return (function (p1__32558_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,klipse.compiler.convert_compile_res.call(null,p1__32558_SHARP_));
});})(c,vec__32560,seq__32561,first__32562,seq__32561__$1,s,map__32563,map__32563__$1,static_fns))
);

return c;
});

klipse.compiler.compile_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile_async.cljs$lang$applyTo = (function (seq32559){
return klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32559));
});

klipse.compiler.build_repl_opts = (function klipse$compiler$build_repl_opts(p__32568){
var map__32571 = p__32568;
var map__32571__$1 = ((((!((map__32571 == null)))?((((map__32571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32571):map__32571);
var static_fns = cljs.core.get.call(null,map__32571__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748));
return cljs.core.merge.call(null,replumb.core.options.call(null,new cljs.core.Keyword(null,"browser","browser",828191719),klipse.compiler.repos.call(null),klipse.compiler.special_fetch),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),false,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"verbose","verbose",1694226060),false], null));
});
klipse.compiler.eval_async_1 = (function klipse$compiler$eval_async_1(var_args){
var args__23697__auto__ = [];
var len__23690__auto___32580 = arguments.length;
var i__23691__auto___32581 = (0);
while(true){
if((i__23691__auto___32581 < len__23690__auto___32580)){
args__23697__auto__.push((arguments[i__23691__auto___32581]));

var G__32582 = (i__23691__auto___32581 + (1));
i__23691__auto___32581 = G__32582;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic = (function (args__25618__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.compiler/eval-async-1",args__25618__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.compiler/eval-async-1",args__25618__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/eval-async-1\" args__25618__auto__)")].join('')));
}

var vec__32575 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__32575,(0),null);
var map__32578 = cljs.core.nth.call(null,vec__32575,(1),null);
var map__32578__$1 = ((((!((map__32578 == null)))?((((map__32578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32578):map__32578);
var static_fns = cljs.core.get.call(null,map__32578__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var c = cljs.core.async.chan.call(null);
var opts = (function (){var x__25584__auto__ = klipse.compiler.build_repl_opts.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns], null));
cljs.core.print.call(null,[cljs.core.str(cljs.core.list(new cljs.core.Symbol(null,"build-repl-opts","build-repl-opts",139381363,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Symbol(null,"static-fns","static-fns",1138580779,null)], null))),cljs.core.str(": "),cljs.core.str(x__25584__auto__)].join(''));

return x__25584__auto__;
})();
replumb.core.read_eval_call.call(null,opts,((function (c,opts,vec__32575,s,map__32578,map__32578__$1,static_fns){
return (function (p1__32573_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,klipse.compiler.convert_eval_res.call(null,p1__32573_SHARP_));
});})(c,opts,vec__32575,s,map__32578,map__32578__$1,static_fns))
,s);

return c;
});

klipse.compiler.eval_async_1.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async_1.cljs$lang$applyTo = (function (seq32574){
return klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32574));
});

klipse.compiler.contains_macro_def_QMARK_ = (function klipse$compiler$contains_macro_def_QMARK_(exp){
return cljs.core.re_find.call(null,/\$macros/,exp);
});
klipse.compiler.eval_async = (function klipse$compiler$eval_async(var_args){
var args__23697__auto__ = [];
var len__23690__auto___32616 = arguments.length;
var i__23691__auto___32617 = (0);
while(true){
if((i__23691__auto___32617 < len__23690__auto___32616)){
args__23697__auto__.push((arguments[i__23691__auto___32617]));

var G__32618 = (i__23691__auto___32617 + (1));
i__23691__auto___32617 = G__32618;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic = (function (args__25618__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.compiler/eval-async",args__25618__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.compiler/eval-async",args__25618__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/eval-async\" args__25618__auto__)")].join('')));
}

var vec__32584 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__32584,(0),null);
var args = cljs.core.nth.call(null,vec__32584,(1),null);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,vec__32584,s,args){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,vec__32584,s,args){
return (function (state_32602){
var state_val_32603 = (state_32602[(1)]);
if((state_val_32603 === (1))){
var inst_32587 = klipse.compiler.contains_macro_def_QMARK_.call(null,s);
var state_32602__$1 = state_32602;
if(cljs.core.truth_(inst_32587)){
var statearr_32604_32619 = state_32602__$1;
(statearr_32604_32619[(1)] = (2));

} else {
var statearr_32605_32620 = state_32602__$1;
(statearr_32605_32620[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (2))){
var inst_32589 = klipse.compiler.eval_async_1.call(null,s,args);
var state_32602__$1 = state_32602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32602__$1,(5),inst_32589);
} else {
if((state_val_32603 === (3))){
var state_32602__$1 = state_32602;
var statearr_32606_32621 = state_32602__$1;
(statearr_32606_32621[(2)] = null);

(statearr_32606_32621[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (4))){
var inst_32594 = (state_32602[(2)]);
var inst_32595 = new cljs.core.Symbol(null,"args","args",-1338879193,null);
var inst_32596 = [cljs.core.str(inst_32595),cljs.core.str(": "),cljs.core.str(args)].join('');
var inst_32597 = cljs.core.print.call(null,inst_32596);
var inst_32598 = klipse.compiler.eval_async_1.call(null,s,args);
var state_32602__$1 = (function (){var statearr_32607 = state_32602;
(statearr_32607[(7)] = inst_32597);

(statearr_32607[(8)] = inst_32594);

return statearr_32607;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32602__$1,(6),inst_32598);
} else {
if((state_val_32603 === (5))){
var inst_32591 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
var statearr_32608_32622 = state_32602__$1;
(statearr_32608_32622[(2)] = inst_32591);

(statearr_32608_32622[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32603 === (6))){
var inst_32600 = (state_32602[(2)]);
var state_32602__$1 = state_32602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32602__$1,inst_32600);
} else {
return null;
}
}
}
}
}
}
});})(c__25265__auto__,vec__32584,s,args))
;
return ((function (switch__25244__auto__,c__25265__auto__,vec__32584,s,args){
return (function() {
var klipse$compiler$state_machine__25245__auto__ = null;
var klipse$compiler$state_machine__25245__auto____0 = (function (){
var statearr_32612 = [null,null,null,null,null,null,null,null,null];
(statearr_32612[(0)] = klipse$compiler$state_machine__25245__auto__);

(statearr_32612[(1)] = (1));

return statearr_32612;
});
var klipse$compiler$state_machine__25245__auto____1 = (function (state_32602){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_32602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e32613){if((e32613 instanceof Object)){
var ex__25248__auto__ = e32613;
var statearr_32614_32623 = state_32602;
(statearr_32614_32623[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32624 = state_32602;
state_32602 = G__32624;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$compiler$state_machine__25245__auto__ = function(state_32602){
switch(arguments.length){
case 0:
return klipse$compiler$state_machine__25245__auto____0.call(this);
case 1:
return klipse$compiler$state_machine__25245__auto____1.call(this,state_32602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$state_machine__25245__auto____0;
klipse$compiler$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$state_machine__25245__auto____1;
return klipse$compiler$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,vec__32584,s,args))
})();
var state__25267__auto__ = (function (){var statearr_32615 = f__25266__auto__.call(null);
(statearr_32615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_32615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,vec__32584,s,args))
);

return c__25265__auto__;
});

klipse.compiler.eval_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async.cljs$lang$applyTo = (function (seq32583){
return klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32583));
});

klipse.compiler.eval = (function klipse$compiler$eval(var_args){
var args__23697__auto__ = [];
var len__23690__auto___32631 = arguments.length;
var i__23691__auto___32632 = (0);
while(true){
if((i__23691__auto___32632 < len__23690__auto___32631)){
args__23697__auto__.push((arguments[i__23691__auto___32632]));

var G__32633 = (i__23691__auto___32632 + (1));
i__23691__auto___32632 = G__32633;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic = (function (args__25618__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.compiler/eval",args__25618__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.compiler/eval",args__25618__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.compiler/eval\" args__25618__auto__)")].join('')));
}

var vec__32626 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__32626,(0),null);
var map__32629 = cljs.core.nth.call(null,vec__32626,(1),null);
var map__32629__$1 = ((((!((map__32629 == null)))?((((map__32629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32629):map__32629);
var static_fns = cljs.core.get.call(null,map__32629__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var opts = klipse.compiler.build_repl_opts.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns], null));
return replumb.core.read_eval_call.call(null,opts,klipse.compiler.convert_eval_res,s);
});

klipse.compiler.eval.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval.cljs$lang$applyTo = (function (seq32625){
return klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32625));
});

klipse.compiler.str_compile = (function klipse$compiler$str_compile(exp){
return [cljs.core.str(cljs.core.second.call(null,klipse.compiler.compile.call(null,exp)))].join('');
});
klipse.compiler.str_compile_async = (function klipse$compiler$str_compile_async(exp){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_32655){
var state_val_32656 = (state_32655[(1)]);
if((state_val_32656 === (1))){
var inst_32649 = klipse.compiler.compile_async.call(null,exp);
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32655__$1,(2),inst_32649);
} else {
if((state_val_32656 === (2))){
var inst_32651 = (state_32655[(2)]);
var inst_32652 = cljs.core.second.call(null,inst_32651);
var inst_32653 = [cljs.core.str(inst_32652)].join('');
var state_32655__$1 = state_32655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32655__$1,inst_32653);
} else {
return null;
}
}
});})(c__25265__auto__))
;
return ((function (switch__25244__auto__,c__25265__auto__){
return (function() {
var klipse$compiler$str_compile_async_$_state_machine__25245__auto__ = null;
var klipse$compiler$str_compile_async_$_state_machine__25245__auto____0 = (function (){
var statearr_32660 = [null,null,null,null,null,null,null];
(statearr_32660[(0)] = klipse$compiler$str_compile_async_$_state_machine__25245__auto__);

(statearr_32660[(1)] = (1));

return statearr_32660;
});
var klipse$compiler$str_compile_async_$_state_machine__25245__auto____1 = (function (state_32655){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_32655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e32661){if((e32661 instanceof Object)){
var ex__25248__auto__ = e32661;
var statearr_32662_32664 = state_32655;
(statearr_32662_32664[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32665 = state_32655;
state_32655 = G__32665;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$compiler$str_compile_async_$_state_machine__25245__auto__ = function(state_32655){
switch(arguments.length){
case 0:
return klipse$compiler$str_compile_async_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$compiler$str_compile_async_$_state_machine__25245__auto____1.call(this,state_32655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_compile_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_compile_async_$_state_machine__25245__auto____0;
klipse$compiler$str_compile_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_compile_async_$_state_machine__25245__auto____1;
return klipse$compiler$str_compile_async_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_32663 = f__25266__auto__.call(null);
(statearr_32663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_32663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});
klipse.compiler.str_eval = (function klipse$compiler$str_eval(exp){
return [cljs.core.str(cljs.core.second.call(null,klipse.compiler.eval.call(null,exp)))].join('');
});
klipse.compiler.str_eval_async = (function klipse$compiler$str_eval_async(exp,p__32666){
var map__32687 = p__32666;
var map__32687__$1 = ((((!((map__32687 == null)))?((((map__32687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32687):map__32687);
var static_fns = cljs.core.get.call(null,map__32687__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,map__32687,map__32687__$1,static_fns){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,map__32687,map__32687__$1,static_fns){
return (function (state_32698){
var state_val_32699 = (state_32698[(1)]);
if((state_val_32699 === (1))){
var inst_32689 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_32690 = [static_fns];
var inst_32691 = cljs.core.PersistentHashMap.fromArrays(inst_32689,inst_32690);
var inst_32692 = klipse.compiler.eval_async.call(null,exp,inst_32691);
var state_32698__$1 = state_32698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32698__$1,(2),inst_32692);
} else {
if((state_val_32699 === (2))){
var inst_32694 = (state_32698[(2)]);
var inst_32695 = cljs.core.second.call(null,inst_32694);
var inst_32696 = [cljs.core.str(inst_32695)].join('');
var state_32698__$1 = state_32698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32698__$1,inst_32696);
} else {
return null;
}
}
});})(c__25265__auto__,map__32687,map__32687__$1,static_fns))
;
return ((function (switch__25244__auto__,c__25265__auto__,map__32687,map__32687__$1,static_fns){
return (function() {
var klipse$compiler$str_eval_async_$_state_machine__25245__auto__ = null;
var klipse$compiler$str_eval_async_$_state_machine__25245__auto____0 = (function (){
var statearr_32703 = [null,null,null,null,null,null,null];
(statearr_32703[(0)] = klipse$compiler$str_eval_async_$_state_machine__25245__auto__);

(statearr_32703[(1)] = (1));

return statearr_32703;
});
var klipse$compiler$str_eval_async_$_state_machine__25245__auto____1 = (function (state_32698){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_32698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e32704){if((e32704 instanceof Object)){
var ex__25248__auto__ = e32704;
var statearr_32705_32707 = state_32698;
(statearr_32705_32707[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32704;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32708 = state_32698;
state_32698 = G__32708;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$compiler$str_eval_async_$_state_machine__25245__auto__ = function(state_32698){
switch(arguments.length){
case 0:
return klipse$compiler$str_eval_async_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$compiler$str_eval_async_$_state_machine__25245__auto____1.call(this,state_32698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_eval_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_eval_async_$_state_machine__25245__auto____0;
klipse$compiler$str_eval_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_eval_async_$_state_machine__25245__auto____1;
return klipse$compiler$str_eval_async_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,map__32687,map__32687__$1,static_fns))
})();
var state__25267__auto__ = (function (){var statearr_32706 = f__25266__auto__.call(null);
(statearr_32706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_32706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,map__32687,map__32687__$1,static_fns))
);

return c__25265__auto__;
});
klipse.compiler.eval_file = (function klipse$compiler$eval_file(url){
return klipse.io.fetch_file_BANG_.call(null,url,cljs.core.comp.call(null,cljs.core.print,klipse.compiler.eval));
});

//# sourceMappingURL=compiler.js.map?rel=1465542764317