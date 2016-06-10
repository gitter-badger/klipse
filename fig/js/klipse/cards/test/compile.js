// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.cards.test.compile');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('klipse.compiler');
goog.require('devcards.core');
klipse.cards.test.compile.remove_chars = (function klipse$cards$test$compile$remove_chars(s){
return clojure.string.replace.call(null,s,/\n|\s/,"");
});
klipse.cards.test.compile.a_EQ_ = (function klipse$cards$test$compile$a_EQ_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33532 = arguments.length;
var i__23691__auto___33533 = (0);
while(true){
if((i__23691__auto___33533 < len__23690__auto___33532)){
args__23697__auto__.push((arguments[i__23691__auto___33533]));

var G__33534 = (i__23691__auto___33533 + (1));
i__23691__auto___33533 = G__33534;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse.cards.test.compile.remove_chars,args));
});

klipse.cards.test.compile.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.test.compile.a_EQ_.cljs$lang$applyTo = (function (seq33531){
return klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33531));
});

klipse.cards.test.compile.error__GT_clj = (function klipse$cards$test$compile$error__GT_clj(p__33535){
var vec__33539 = p__33535;
var status = cljs.core.nth.call(null,vec__33539,(0),null);
var error = cljs.core.nth.call(null,vec__33539,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});

klipse.cards.test.compile.success = (function klipse$cards$test$compile$success(){
return cljs.test.test_var.call(null,klipse$cards$test$compile$success.cljs$lang$var);
});
klipse.cards.test.compile.success.cljs$lang$test = (function (){

try{var values__27219__auto___33545 = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)"));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),x__23449__auto__);
})();
var result__27220__auto___33546 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___33545);
if(cljs.core.truth_(result__27220__auto___33546)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___33545),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto___33545);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33542){var t__27257__auto___33547 = e33542;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___33547,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto___33548 = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(if 2 3) (def x (if 2 3))"));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.user.x= (3);"),x__23449__auto__);
})();
var result__27220__auto___33549 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___33548);
if(cljs.core.truth_(result__27220__auto___33549)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___33548),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto___33548);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33543){var t__27257__auto___33550 = e33543;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___33550,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto__ = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(= 1 2)"));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core._EQ_.call(null,(1),(2));"),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33544){var t__27257__auto__ = e33544;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.compile.success.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.success;},new cljs.core.Symbol("klipse.cards.test.compile","success","klipse.cards.test.compile/success",734952039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.compile","klipse.cards.test.compile",187841508,null),new cljs.core.Symbol(null,"success","success",-763789863,null),"src/klipse/cards/test/compile.cljs",17,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.success)?klipse.cards.test.compile.success.cljs$lang$test:null)]));

klipse.cards.test.compile.static_fn = (function klipse$cards$test$compile$static_fn(){
return cljs.test.test_var.call(null,klipse$cards$test$compile$static_fn.cljs$lang$var);
});
klipse.cards.test.compile.static_fn.cljs$lang$test = (function (){

try{var values__27219__auto__ = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(= 1 2)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33551){var t__27257__auto__ = e33551;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.compile.static_fn.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.static_fn;},new cljs.core.Symbol("klipse.cards.test.compile","static-fn","klipse.cards.test.compile/static-fn",75860280,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.compile","klipse.cards.test.compile",187841508,null),new cljs.core.Symbol(null,"static-fn","static-fn",-1353545006,null),"src/klipse/cards/test/compile.cljs",19,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.static_fn)?klipse.cards.test.compile.static_fn.cljs$lang$test:null)]));

//# sourceMappingURL=compile.js.map?rel=1465542765082