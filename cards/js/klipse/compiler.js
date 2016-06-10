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
}catch (e33594){if((e33594 instanceof Object)){
var e = e33594;
return s;
} else {
throw e33594;

}
}});
klipse.compiler.convert_eval_res = (function klipse$compiler$convert_eval_res(p__33595){
var map__33598 = p__33595;
var map__33598__$1 = ((((!((map__33598 == null)))?((((map__33598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33598):map__33598);
var form = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var warning = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"warning","warning",-1685650671));
var error = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"value","value",305978217));
var success_QMARK_ = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"success?","success?",-122854052));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(value)?klipse.compiler.read_string_cond.call(null,value):error);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.convert_compile_res = (function klipse$compiler$convert_compile_res(p__33600){
var map__33603 = p__33600;
var map__33603__$1 = ((((!((map__33603 == null)))?((((map__33603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33603):map__33603);
var value = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var status = (cljs.core.truth_(error)?new cljs.core.Keyword(null,"error","error",-978969032):new cljs.core.Keyword(null,"ok","ok",967785236));
var res = (cljs.core.truth_(error)?error:value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,res], null);
});
klipse.compiler.compile = (function klipse$compiler$compile(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33611 = arguments.length;
var i__23691__auto___33612 = (0);
while(true){
if((i__23691__auto___33612 < len__23690__auto___33611)){
args__23697__auto__.push((arguments[i__23691__auto___33612]));

var G__33613 = (i__23691__auto___33612 + (1));
i__23691__auto___33612 = G__33613;
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

var vec__33606 = args__25618__auto__;
var seq__33607 = cljs.core.seq.call(null,vec__33606);
var first__33608 = cljs.core.first.call(null,seq__33607);
var seq__33607__$1 = cljs.core.next.call(null,seq__33607);
var s = first__33608;
var map__33609 = seq__33607__$1;
var map__33609__$1 = ((((!((map__33609 == null)))?((((map__33609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33609):map__33609);
var static_fns = cljs.core.get.call(null,map__33609__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
return cljs.js.compile_str.call(null,cljs.js.empty_state.call(null),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),klipse.compiler.load_inlined], null),klipse.compiler.convert_compile_res);
});

klipse.compiler.compile.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile.cljs$lang$applyTo = (function (seq33605){
return klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33605));
});

klipse.compiler.compile_async = (function klipse$compiler$compile_async(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33621 = arguments.length;
var i__23691__auto___33622 = (0);
while(true){
if((i__23691__auto___33622 < len__23690__auto___33621)){
args__23697__auto__.push((arguments[i__23691__auto___33622]));

var G__33623 = (i__23691__auto___33622 + (1));
i__23691__auto___33622 = G__33623;
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

var vec__33616 = args__25618__auto__;
var seq__33617 = cljs.core.seq.call(null,vec__33616);
var first__33618 = cljs.core.first.call(null,seq__33617);
var seq__33617__$1 = cljs.core.next.call(null,seq__33617);
var s = first__33618;
var map__33619 = seq__33617__$1;
var map__33619__$1 = ((((!((map__33619 == null)))?((((map__33619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33619):map__33619);
var static_fns = cljs.core.get.call(null,map__33619__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var c = cljs.core.async.chan.call(null);
cljs.js.compile_str.call(null,cljs.js.empty_state.call(null),s,"cljs-in",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"load","load",-1318641184),klipse.compiler.load_inlined], null),((function (c,vec__33616,seq__33617,first__33618,seq__33617__$1,s,map__33619,map__33619__$1,static_fns){
return (function (p1__33614_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,klipse.compiler.convert_compile_res.call(null,p1__33614_SHARP_));
});})(c,vec__33616,seq__33617,first__33618,seq__33617__$1,s,map__33619,map__33619__$1,static_fns))
);

return c;
});

klipse.compiler.compile_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.compile_async.cljs$lang$applyTo = (function (seq33615){
return klipse.compiler.compile_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33615));
});

klipse.compiler.build_repl_opts = (function klipse$compiler$build_repl_opts(p__33624){
var map__33627 = p__33624;
var map__33627__$1 = ((((!((map__33627 == null)))?((((map__33627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33627):map__33627);
var static_fns = cljs.core.get.call(null,map__33627__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748));
return cljs.core.merge.call(null,replumb.core.options.call(null,new cljs.core.Keyword(null,"browser","browser",828191719),klipse.compiler.repos.call(null),klipse.compiler.special_fetch),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"warning-as-error","warning-as-error",1347418166),false,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"verbose","verbose",1694226060),false], null));
});
klipse.compiler.eval_async_1 = (function klipse$compiler$eval_async_1(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33636 = arguments.length;
var i__23691__auto___33637 = (0);
while(true){
if((i__23691__auto___33637 < len__23690__auto___33636)){
args__23697__auto__.push((arguments[i__23691__auto___33637]));

var G__33638 = (i__23691__auto___33637 + (1));
i__23691__auto___33637 = G__33638;
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

var vec__33631 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__33631,(0),null);
var map__33634 = cljs.core.nth.call(null,vec__33631,(1),null);
var map__33634__$1 = ((((!((map__33634 == null)))?((((map__33634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33634):map__33634);
var static_fns = cljs.core.get.call(null,map__33634__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var c = cljs.core.async.chan.call(null);
var opts = (function (){var x__25584__auto__ = klipse.compiler.build_repl_opts.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns], null));
cljs.core.print.call(null,[cljs.core.str(cljs.core.list(new cljs.core.Symbol(null,"build-repl-opts","build-repl-opts",139381363,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Symbol(null,"static-fns","static-fns",1138580779,null)], null))),cljs.core.str(": "),cljs.core.str(x__25584__auto__)].join(''));

return x__25584__auto__;
})();
replumb.core.read_eval_call.call(null,opts,((function (c,opts,vec__33631,s,map__33634,map__33634__$1,static_fns){
return (function (p1__33629_SHARP_){
return cljs.core.async.put_BANG_.call(null,c,klipse.compiler.convert_eval_res.call(null,p1__33629_SHARP_));
});})(c,opts,vec__33631,s,map__33634,map__33634__$1,static_fns))
,s);

return c;
});

klipse.compiler.eval_async_1.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async_1.cljs$lang$applyTo = (function (seq33630){
return klipse.compiler.eval_async_1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33630));
});

klipse.compiler.contains_macro_def_QMARK_ = (function klipse$compiler$contains_macro_def_QMARK_(exp){
return cljs.core.re_find.call(null,/\$macros/,exp);
});
klipse.compiler.eval_async = (function klipse$compiler$eval_async(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33672 = arguments.length;
var i__23691__auto___33673 = (0);
while(true){
if((i__23691__auto___33673 < len__23690__auto___33672)){
args__23697__auto__.push((arguments[i__23691__auto___33673]));

var G__33674 = (i__23691__auto___33673 + (1));
i__23691__auto___33673 = G__33674;
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

var vec__33640 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__33640,(0),null);
var args = cljs.core.nth.call(null,vec__33640,(1),null);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,vec__33640,s,args){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,vec__33640,s,args){
return (function (state_33658){
var state_val_33659 = (state_33658[(1)]);
if((state_val_33659 === (1))){
var inst_33643 = klipse.compiler.contains_macro_def_QMARK_.call(null,s);
var state_33658__$1 = state_33658;
if(cljs.core.truth_(inst_33643)){
var statearr_33660_33675 = state_33658__$1;
(statearr_33660_33675[(1)] = (2));

} else {
var statearr_33661_33676 = state_33658__$1;
(statearr_33661_33676[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (2))){
var inst_33645 = klipse.compiler.eval_async_1.call(null,s,args);
var state_33658__$1 = state_33658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33658__$1,(5),inst_33645);
} else {
if((state_val_33659 === (3))){
var state_33658__$1 = state_33658;
var statearr_33662_33677 = state_33658__$1;
(statearr_33662_33677[(2)] = null);

(statearr_33662_33677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (4))){
var inst_33650 = (state_33658[(2)]);
var inst_33651 = new cljs.core.Symbol(null,"args","args",-1338879193,null);
var inst_33652 = [cljs.core.str(inst_33651),cljs.core.str(": "),cljs.core.str(args)].join('');
var inst_33653 = cljs.core.print.call(null,inst_33652);
var inst_33654 = klipse.compiler.eval_async_1.call(null,s,args);
var state_33658__$1 = (function (){var statearr_33663 = state_33658;
(statearr_33663[(7)] = inst_33653);

(statearr_33663[(8)] = inst_33650);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33658__$1,(6),inst_33654);
} else {
if((state_val_33659 === (5))){
var inst_33647 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
var statearr_33664_33678 = state_33658__$1;
(statearr_33664_33678[(2)] = inst_33647);

(statearr_33664_33678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33659 === (6))){
var inst_33656 = (state_33658[(2)]);
var state_33658__$1 = state_33658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33658__$1,inst_33656);
} else {
return null;
}
}
}
}
}
}
});})(c__25265__auto__,vec__33640,s,args))
;
return ((function (switch__25244__auto__,c__25265__auto__,vec__33640,s,args){
return (function() {
var klipse$compiler$state_machine__25245__auto__ = null;
var klipse$compiler$state_machine__25245__auto____0 = (function (){
var statearr_33668 = [null,null,null,null,null,null,null,null,null];
(statearr_33668[(0)] = klipse$compiler$state_machine__25245__auto__);

(statearr_33668[(1)] = (1));

return statearr_33668;
});
var klipse$compiler$state_machine__25245__auto____1 = (function (state_33658){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_33658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e33669){if((e33669 instanceof Object)){
var ex__25248__auto__ = e33669;
var statearr_33670_33679 = state_33658;
(statearr_33670_33679[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33680 = state_33658;
state_33658 = G__33680;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$compiler$state_machine__25245__auto__ = function(state_33658){
switch(arguments.length){
case 0:
return klipse$compiler$state_machine__25245__auto____0.call(this);
case 1:
return klipse$compiler$state_machine__25245__auto____1.call(this,state_33658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$state_machine__25245__auto____0;
klipse$compiler$state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$state_machine__25245__auto____1;
return klipse$compiler$state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,vec__33640,s,args))
})();
var state__25267__auto__ = (function (){var statearr_33671 = f__25266__auto__.call(null);
(statearr_33671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_33671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,vec__33640,s,args))
);

return c__25265__auto__;
});

klipse.compiler.eval_async.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval_async.cljs$lang$applyTo = (function (seq33639){
return klipse.compiler.eval_async.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33639));
});

klipse.compiler.eval = (function klipse$compiler$eval(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33687 = arguments.length;
var i__23691__auto___33688 = (0);
while(true){
if((i__23691__auto___33688 < len__23690__auto___33687)){
args__23697__auto__.push((arguments[i__23691__auto___33688]));

var G__33689 = (i__23691__auto___33688 + (1));
i__23691__auto___33688 = G__33689;
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

var vec__33682 = args__25618__auto__;
var s = cljs.core.nth.call(null,vec__33682,(0),null);
var map__33685 = cljs.core.nth.call(null,vec__33682,(1),null);
var map__33685__$1 = ((((!((map__33685 == null)))?((((map__33685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33685):map__33685);
var static_fns = cljs.core.get.call(null,map__33685__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var opts = klipse.compiler.build_repl_opts.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),static_fns], null));
return replumb.core.read_eval_call.call(null,opts,klipse.compiler.convert_eval_res,s);
});

klipse.compiler.eval.cljs$lang$maxFixedArity = (0);

klipse.compiler.eval.cljs$lang$applyTo = (function (seq33681){
return klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33681));
});

klipse.compiler.str_compile = (function klipse$compiler$str_compile(exp){
return [cljs.core.str(cljs.core.second.call(null,klipse.compiler.compile.call(null,exp)))].join('');
});
klipse.compiler.str_compile_async = (function klipse$compiler$str_compile_async(exp){
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__){
return (function (state_33711){
var state_val_33712 = (state_33711[(1)]);
if((state_val_33712 === (1))){
var inst_33705 = klipse.compiler.compile_async.call(null,exp);
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33711__$1,(2),inst_33705);
} else {
if((state_val_33712 === (2))){
var inst_33707 = (state_33711[(2)]);
var inst_33708 = cljs.core.second.call(null,inst_33707);
var inst_33709 = [cljs.core.str(inst_33708)].join('');
var state_33711__$1 = state_33711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33711__$1,inst_33709);
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
var statearr_33716 = [null,null,null,null,null,null,null];
(statearr_33716[(0)] = klipse$compiler$str_compile_async_$_state_machine__25245__auto__);

(statearr_33716[(1)] = (1));

return statearr_33716;
});
var klipse$compiler$str_compile_async_$_state_machine__25245__auto____1 = (function (state_33711){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_33711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e33717){if((e33717 instanceof Object)){
var ex__25248__auto__ = e33717;
var statearr_33718_33720 = state_33711;
(statearr_33718_33720[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33721 = state_33711;
state_33711 = G__33721;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$compiler$str_compile_async_$_state_machine__25245__auto__ = function(state_33711){
switch(arguments.length){
case 0:
return klipse$compiler$str_compile_async_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$compiler$str_compile_async_$_state_machine__25245__auto____1.call(this,state_33711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_compile_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_compile_async_$_state_machine__25245__auto____0;
klipse$compiler$str_compile_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_compile_async_$_state_machine__25245__auto____1;
return klipse$compiler$str_compile_async_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__))
})();
var state__25267__auto__ = (function (){var statearr_33719 = f__25266__auto__.call(null);
(statearr_33719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_33719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__))
);

return c__25265__auto__;
});
klipse.compiler.str_eval = (function klipse$compiler$str_eval(exp){
return [cljs.core.str(cljs.core.second.call(null,klipse.compiler.eval.call(null,exp)))].join('');
});
klipse.compiler.str_eval_async = (function klipse$compiler$str_eval_async(exp,p__33722){
var map__33743 = p__33722;
var map__33743__$1 = ((((!((map__33743 == null)))?((((map__33743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33743):map__33743);
var static_fns = cljs.core.get.call(null,map__33743__$1,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),false);
var c__25265__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25265__auto__,map__33743,map__33743__$1,static_fns){
return (function (){
var f__25266__auto__ = (function (){var switch__25244__auto__ = ((function (c__25265__auto__,map__33743,map__33743__$1,static_fns){
return (function (state_33754){
var state_val_33755 = (state_33754[(1)]);
if((state_val_33755 === (1))){
var inst_33745 = [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748)];
var inst_33746 = [static_fns];
var inst_33747 = cljs.core.PersistentHashMap.fromArrays(inst_33745,inst_33746);
var inst_33748 = klipse.compiler.eval_async.call(null,exp,inst_33747);
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33754__$1,(2),inst_33748);
} else {
if((state_val_33755 === (2))){
var inst_33750 = (state_33754[(2)]);
var inst_33751 = cljs.core.second.call(null,inst_33750);
var inst_33752 = [cljs.core.str(inst_33751)].join('');
var state_33754__$1 = state_33754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33754__$1,inst_33752);
} else {
return null;
}
}
});})(c__25265__auto__,map__33743,map__33743__$1,static_fns))
;
return ((function (switch__25244__auto__,c__25265__auto__,map__33743,map__33743__$1,static_fns){
return (function() {
var klipse$compiler$str_eval_async_$_state_machine__25245__auto__ = null;
var klipse$compiler$str_eval_async_$_state_machine__25245__auto____0 = (function (){
var statearr_33759 = [null,null,null,null,null,null,null];
(statearr_33759[(0)] = klipse$compiler$str_eval_async_$_state_machine__25245__auto__);

(statearr_33759[(1)] = (1));

return statearr_33759;
});
var klipse$compiler$str_eval_async_$_state_machine__25245__auto____1 = (function (state_33754){
while(true){
var ret_value__25246__auto__ = (function (){try{while(true){
var result__25247__auto__ = switch__25244__auto__.call(null,state_33754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25247__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25247__auto__;
}
break;
}
}catch (e33760){if((e33760 instanceof Object)){
var ex__25248__auto__ = e33760;
var statearr_33761_33763 = state_33754;
(statearr_33761_33763[(5)] = ex__25248__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33764 = state_33754;
state_33754 = G__33764;
continue;
} else {
return ret_value__25246__auto__;
}
break;
}
});
klipse$compiler$str_eval_async_$_state_machine__25245__auto__ = function(state_33754){
switch(arguments.length){
case 0:
return klipse$compiler$str_eval_async_$_state_machine__25245__auto____0.call(this);
case 1:
return klipse$compiler$str_eval_async_$_state_machine__25245__auto____1.call(this,state_33754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
klipse$compiler$str_eval_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$0 = klipse$compiler$str_eval_async_$_state_machine__25245__auto____0;
klipse$compiler$str_eval_async_$_state_machine__25245__auto__.cljs$core$IFn$_invoke$arity$1 = klipse$compiler$str_eval_async_$_state_machine__25245__auto____1;
return klipse$compiler$str_eval_async_$_state_machine__25245__auto__;
})()
;})(switch__25244__auto__,c__25265__auto__,map__33743,map__33743__$1,static_fns))
})();
var state__25267__auto__ = (function (){var statearr_33762 = f__25266__auto__.call(null);
(statearr_33762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25265__auto__);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25267__auto__);
});})(c__25265__auto__,map__33743,map__33743__$1,static_fns))
);

return c__25265__auto__;
});
klipse.compiler.eval_file = (function klipse$compiler$eval_file(url){
return klipse.io.fetch_file_BANG_.call(null,url,cljs.core.comp.call(null,cljs.core.print,klipse.compiler.eval));
});

//# sourceMappingURL=compiler.js.map?rel=1465542767186