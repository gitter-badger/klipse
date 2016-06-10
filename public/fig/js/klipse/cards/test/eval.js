// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.cards.test.eval');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('klipse.compiler');
goog.require('devcards.core');
klipse.cards.test.eval.remove_chars = (function klipse$cards$test$eval$remove_chars(s){
return clojure.string.replace.call(null,s,/\n|\s/,"");
});
klipse.cards.test.eval.a_EQ_ = (function klipse$cards$test$eval$a_EQ_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___32712 = arguments.length;
var i__23691__auto___32713 = (0);
while(true){
if((i__23691__auto___32713 < len__23690__auto___32712)){
args__23697__auto__.push((arguments[i__23691__auto___32713]));

var G__32714 = (i__23691__auto___32713 + (1));
i__23691__auto___32713 = G__32714;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse.cards.test.eval.remove_chars,args));
});

klipse.cards.test.eval.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.test.eval.a_EQ_.cljs$lang$applyTo = (function (seq32711){
return klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32711));
});

klipse.cards.test.eval.error__GT_clj = (function klipse$cards$test$eval$error__GT_clj(p__32715){
var vec__32719 = p__32715;
var status = cljs.core.nth.call(null,vec__32719,(0),null);
var error = cljs.core.nth.call(null,vec__32719,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});

klipse.cards.test.eval.test_eval = (function klipse$cards$test$eval$test_eval(){
return cljs.test.test_var.call(null,klipse$cards$test$eval$test_eval.cljs$lang$var);
});
klipse.cards.test.eval.test_eval.cljs$lang$test = (function (){

try{var values__27219__auto___32724 = (function (){var x__23449__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"EOF while reading"], null)], null);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = klipse.cards.test.eval.error__GT_clj.call(null,klipse.compiler.eval.call(null,"(+ 1 2"));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto___32725 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___32724);
if(cljs.core.truth_(result__27220__auto___32725)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"EOF while reading"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___32724),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"EOF while reading"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___32724);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32722){var t__27257__auto___32726 = e32722;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"EOF while reading"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___32726,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto__ = (function (){var x__23449__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = klipse.cards.test.eval.error__GT_clj.call(null,klipse.compiler.eval.call(null,"(a)"));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(a)"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(a)"))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e32723){var t__27257__auto__ = e32723;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(a)"))),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.eval.test_eval.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval","klipse.cards.test.eval/test-eval",-1937427125,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval","test-eval",-971461358,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/test/eval.cljs",19,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval)?klipse.cards.test.eval.test_eval.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_2 = (function klipse$cards$test$eval$test_eval_2(){
return cljs.test.test_var.call(null,klipse$cards$test$eval$test_eval_2.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_2.cljs$lang$test = (function (){

try{var values__27219__auto___32732 = (function (){var x__23449__auto__ = klipse.compiler.eval.call(null," (def x 12)\n         (+ x 5)");
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto___32733 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___32732);
if(cljs.core.truth_(result__27220__auto___32733)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n         (+ x 5)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___32732),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n         (+ x 5)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___32732);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32727){var t__27257__auto___32734 = e32727;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null)," (def x 12)\n         (+ x 5)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(17)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___32734,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto___32735 = (function (){var x__23449__auto__ = klipse.compiler.eval.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto___32736 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___32735);
if(cljs.core.truth_(result__27220__auto___32736)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___32735),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___32735);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32728){var t__27257__auto___32737 = e32728;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___32737,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto___32738 = (function (){var x__23449__auto__ = klipse.compiler.eval.call(null,"(map inc [1 2 3])");
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list((2),(3),(4))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto___32739 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___32738);
if(cljs.core.truth_(result__27220__auto___32739)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___32738),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___32738);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32729){var t__27257__auto___32740 = e32729;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(map inc [1 2 3])"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((2),(3),(4)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___32740,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto___32741 = (function (){var x__23449__auto__ = klipse.compiler.eval.call(null,"(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))");
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list((10),(11),(12))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto___32742 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___32741);
if(cljs.core.truth_(result__27220__auto___32742)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___32741),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___32741);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32730){var t__27257__auto___32743 = e32730;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list((10),(11),(12)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___32743,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.compiler.eval.call(null,"(ns my.aa) (+ 1 2)");
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e32731){var t__27257__auto__ = e32731;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.aa) (+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(3)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.eval.test_eval_2.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_2;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-2","klipse.cards.test.eval/test-eval-2",610299424,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-2","test-eval-2",1863055047,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/test/eval.cljs",21,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_2)?klipse.cards.test.eval.test_eval_2.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_macros = (function klipse$cards$test$eval$test_eval_macros(){
return cljs.test.test_var.call(null,klipse$cards$test$eval$test_eval_macros.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_macros.cljs$lang$test = (function (){

try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.compiler.eval.call(null,"(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)");
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13))], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e32744){var t__27257__auto__ = e32744;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),(13)))], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.eval.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_macros;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-macros","klipse.cards.test.eval/test-eval-macros",-1840749386,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-macros","test-eval-macros",-684553111,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/test/eval.cljs",26,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_macros)?klipse.cards.test.eval.test_eval_macros.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_twice_macro = (function klipse$cards$test$eval$test_eval_twice_macro(){
return cljs.test.test_var.call(null,klipse$cards$test$eval$test_eval_twice_macro.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_twice_macro.cljs$lang$test = (function (){

try{var values__27219__auto__ = (function (){var x__23449__auto__ = (function (){
klipse.compiler.eval.call(null,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)");

return klipse.compiler.eval.call(null,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)");
})()
;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(14)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(14)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(14)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e32745){var t__27257__auto__ = e32745;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),(14)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.eval.test_eval_twice_macro.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_twice_macro;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-twice-macro","klipse.cards.test.eval/test-eval-twice-macro",464826561,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-twice-macro","test-eval-twice-macro",-971777992,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/test/eval.cljs",31,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_twice_macro)?klipse.cards.test.eval.test_eval_twice_macro.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_4 = (function klipse$cards$test$eval$test_eval_4(){
return cljs.test.test_var.call(null,klipse$cards$test$eval$test_eval_4.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_4.cljs$lang$test = (function (){

try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.cards.test.eval.remove_chars.call(null,cljs.core.second.call(null,klipse.compiler.eval.call(null,"(type 1)")));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#object[Number \"function Number() {\n    [native code]\n}\"]"),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,klipse.cards.test.eval.a_EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"remove-chars","remove-chars",1134581463,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)"))),"#object[Number \"function Number() {\n    [native code]\n}\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.eval.a_EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"remove-chars","remove-chars",1134581463,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)"))),"#object[Number \"function Number() {\n    [native code]\n}\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e32746){var t__27257__auto__ = e32746;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"remove-chars","remove-chars",1134581463,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(type 1)"))),"#object[Number \"function Number() {\n    [native code]\n}\"]"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.eval.test_eval_4.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_4;},new cljs.core.Symbol("klipse.cards.test.eval","test-eval-4","klipse.cards.test.eval/test-eval-4",-860176866,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.eval","klipse.cards.test.eval",1764838112,null),new cljs.core.Symbol(null,"test-eval-4","test-eval-4",-1237301659,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/test/eval.cljs",21,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_4)?klipse.cards.test.eval.test_eval_4.cljs$lang$test:null)]));

//# sourceMappingURL=eval.js.map?rel=1465542764449