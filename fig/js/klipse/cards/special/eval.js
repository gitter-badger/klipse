// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.cards.special.eval');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('klipse.compiler');
goog.require('devcards.core');
klipse.cards.special.eval.remove_chars = (function klipse$cards$special$eval$remove_chars(s){
return clojure.string.replace.call(null,s,/\n|\s/,"");
});
klipse.cards.special.eval.a_EQ_ = (function klipse$cards$special$eval$a_EQ_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33555 = arguments.length;
var i__23691__auto___33556 = (0);
while(true){
if((i__23691__auto___33556 < len__23690__auto___33555)){
args__23697__auto__.push((arguments[i__23691__auto___33556]));

var G__33557 = (i__23691__auto___33556 + (1));
i__23691__auto___33556 = G__33557;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,klipse.cards.special.eval.remove_chars,args));
});

klipse.cards.special.eval.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.special.eval.a_EQ_.cljs$lang$applyTo = (function (seq33554){
return klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33554));
});

klipse.cards.special.eval.error__GT_clj = (function klipse$cards$special$eval$error__GT_clj(p__33558){
var vec__33562 = p__33558;
var status = cljs.core.nth.call(null,vec__33562,(0),null);
var error = cljs.core.nth.call(null,vec__33562,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});

klipse.cards.special.eval.static_fn_failure = (function klipse$cards$special$eval$static_fn_failure(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$static_fn_failure.cljs$lang$var);
});
klipse.cards.special.eval.static_fn_failure.cljs$lang$test = (function (){

try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.cards.special.eval.error__GT_clj.call(null,klipse.compiler.eval.call(null,"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true));
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33565){var t__27257__auto__ = e33565;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.static_fn_failure.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.static_fn_failure;},new cljs.core.Symbol("klipse.cards.special.eval","static-fn-failure","klipse.cards.special.eval/static-fn-failure",-503512896,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"static-fn-failure","static-fn-failure",-535281680,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/special/eval.cljs",27,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.static_fn_failure)?klipse.cards.special.eval.static_fn_failure.cljs$lang$test:null)]));

klipse.cards.special.eval.test_eval_macros = (function klipse$cards$special$eval$test_eval_macros(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_eval_macros.cljs$lang$var);
});
klipse.cards.special.eval.test_eval_macros.cljs$lang$test = (function (){

try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.compiler.eval.call(null,"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))");
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33566){var t__27257__auto__ = e33566;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_eval_macros;},new cljs.core.Symbol("klipse.cards.special.eval","test-eval-macros","klipse.cards.special.eval/test-eval-macros",-694697639,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-eval-macros","test-eval-macros",-684553111,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/special/eval.cljs",26,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_eval_macros)?klipse.cards.special.eval.test_eval_macros.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_compile_ok = (function klipse$cards$special$eval$test_str_compile_ok(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_compile_ok.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test = (function (){

try{var values__27219__auto___33569 = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"((1) + (2));\n"),x__23449__auto__);
})();
var result__27220__auto___33570 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___33569);
if(cljs.core.truth_(result__27220__auto___33570)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___33569),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___33569);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33567){var t__27257__auto___33571 = e33567;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___33571,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(map inc [1 2 3])");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33568){var t__27257__auto__ = e33568;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_compile_ok.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_ok;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-compile-ok","klipse.cards.special.eval/test-str-compile-ok",1962557257,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-compile-ok","test-str-compile-ok",1947727033,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/special/eval.cljs",29,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_ok)?klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_eval_ok = (function klipse$cards$special$eval$test_str_eval_ok(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_eval_ok.cljs$lang$var);
});
klipse.cards.special.eval.test_str_eval_ok.cljs$lang$test = (function (){

try{var values__27219__auto___33574 = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"3"),x__23449__auto__);
})();
var result__27220__auto___33575 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___33574);
if(cljs.core.truth_(result__27220__auto___33575)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___33574),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___33574);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33572){var t__27257__auto___33576 = e33572;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___33576,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(map inc [1 2 3])");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"(2 3 4)"),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3])"),"(2 3 4)"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3])"),"(2 3 4)"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33573){var t__27257__auto__ = e33573;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3])"),"(2 3 4)"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_eval_ok.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_eval_ok;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-eval-ok","klipse.cards.special.eval/test-str-eval-ok",-381120667,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-eval-ok","test-str-eval-ok",-374910539,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/special/eval.cljs",26,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_eval_ok)?klipse.cards.special.eval.test_str_eval_ok.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_eval_error = (function klipse$cards$special$eval$test_str_eval_error(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_eval_error.cljs$lang$var);
});
klipse.cards.special.eval.test_str_eval_error.cljs$lang$test = (function (){

try{var values__27219__auto___33579 = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(+ 1 2");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),x__23449__auto__);
})();
var result__27220__auto___33580 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___33579);
if(cljs.core.truth_(result__27220__auto___33580)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___33579),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___33579);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33577){var t__27257__auto___33581 = e33577;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___33581,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(map inc [1 2 3]");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33578){var t__27257__auto__ = e33578;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_eval_error.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_eval_error;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-eval-error","klipse.cards.special.eval/test-str-eval-error",807370063,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-eval-error","test-str-eval-error",829567007,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/special/eval.cljs",29,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_eval_error)?klipse.cards.special.eval.test_str_eval_error.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_compile_error = (function klipse$cards$special$eval$test_str_compile_error(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_compile_error.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_error.cljs$lang$test = (function (){

try{var values__27219__auto___33584 = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(+ 1 2");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),x__23449__auto__);
})();
var result__27220__auto___33585 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___33584);
if(cljs.core.truth_(result__27220__auto___33585)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___33584),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___33584);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33582){var t__27257__auto___33586 = e33582;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___33586,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto__ = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(map inc [1 2 3]");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),x__23449__auto__);
})();
var result__27220__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto__);
if(cljs.core.truth_(result__27220__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto__);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__27220__auto__;
}catch (e33583){var t__27257__auto__ = e33583;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_compile_error.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_error;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-compile-error","klipse.cards.special.eval/test-str-compile-error",-902258301,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-compile-error","test-str-compile-error",-896273229,null),"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/special/eval.cljs",32,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_error)?klipse.cards.special.eval.test_str_compile_error.cljs$lang$test:null)]));

//# sourceMappingURL=eval.js.map?rel=1465542765179