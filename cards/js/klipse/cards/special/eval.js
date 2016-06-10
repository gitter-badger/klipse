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
var len__23690__auto___34651 = arguments.length;
var i__23691__auto___34652 = (0);
while(true){
if((i__23691__auto___34652 < len__23690__auto___34651)){
args__23697__auto__.push((arguments[i__23691__auto___34652]));

var G__34653 = (i__23691__auto___34652 + (1));
i__23691__auto___34652 = G__34653;
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

klipse.cards.special.eval.a_EQ_.cljs$lang$applyTo = (function (seq34650){
return klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34650));
});

klipse.cards.special.eval.error__GT_clj = (function klipse$cards$special$eval$error__GT_clj(p__34654){
var vec__34658 = p__34654;
var status = cljs.core.nth.call(null,vec__34658,(0),null);
var error = cljs.core.nth.call(null,vec__34658,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.special.eval","klipse.cards.special.eval",-678013242),new cljs.core.Keyword(null,"static-fn-failure","static-fn-failure",2119154089)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"static-fn-failure",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"expected failures with static dispatch");
}),(function (){
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
}catch (e34661){var t__27257__auto__ = e34661;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

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
}catch (e34662){var t__27257__auto__ = e34662;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"error->clj","error->clj",916861801,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),"ERROR"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.static_fn_failure.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.static_fn_failure;},new cljs.core.Symbol("klipse.cards.special.eval","static-fn-failure","klipse.cards.special.eval/static-fn-failure",-503512896,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"static-fn-failure","static-fn-failure",-535281680,null),"src/klipse/cards/special/eval.cljs",27,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.static_fn_failure)?klipse.cards.special.eval.static_fn_failure.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.special.eval","klipse.cards.special.eval",-678013242),new cljs.core.Keyword(null,"test-eval-macros","test-eval-macros",1969882658)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test-eval-macros",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"eval with macros");
}),(function (){
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
}catch (e34663){var t__27257__auto__ = e34663;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

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
}catch (e34664){var t__27257__auto__ = e34664;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"eval","eval",536963622,null),"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),"(+ 1 2) => 3\n"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_eval_macros;},new cljs.core.Symbol("klipse.cards.special.eval","test-eval-macros","klipse.cards.special.eval/test-eval-macros",-694697639,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-eval-macros","test-eval-macros",-684553111,null),"src/klipse/cards/special/eval.cljs",26,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_eval_macros)?klipse.cards.special.eval.test_eval_macros.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.special.eval","klipse.cards.special.eval",-678013242),new cljs.core.Keyword(null,"test-str-compile-ok","test-str-compile-ok",307195506)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test-str-compile-ok",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"str-compile should return the compileuation of the expression as a strin");
}),(function (){
try{var values__27219__auto___34669 = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"((1) + (2));\n"),x__23449__auto__);
})();
var result__27220__auto___34670 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34669);
if(cljs.core.truth_(result__27220__auto___34670)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34669),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34669);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34665){var t__27257__auto___34671 = e34665;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34671,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34666){var t__27257__auto__ = e34666;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

klipse.cards.special.eval.test_str_compile_ok = (function klipse$cards$special$eval$test_str_compile_ok(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_compile_ok.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test = (function (){

try{var values__27219__auto___34672 = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"((1) + (2));\n"),x__23449__auto__);
})();
var result__27220__auto___34673 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34672);
if(cljs.core.truth_(result__27220__auto___34673)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34672),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34672);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34667){var t__27257__auto___34674 = e34667;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2)"),"((1) + (2));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34674,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34668){var t__27257__auto__ = e34668;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_compile_ok.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_ok;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-compile-ok","klipse.cards.special.eval/test-str-compile-ok",1962557257,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-compile-ok","test-str-compile-ok",1947727033,null),"src/klipse/cards/special/eval.cljs",29,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_ok)?klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.special.eval","klipse.cards.special.eval",-678013242),new cljs.core.Keyword(null,"test-str-eval-ok","test-str-eval-ok",-2015442066)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test-str-eval-ok",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"str-eval should return the evaluation of the expression as a strin");
}),(function (){
try{var values__27219__auto___34679 = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"3"),x__23449__auto__);
})();
var result__27220__auto___34680 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34679);
if(cljs.core.truth_(result__27220__auto___34680)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34679),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34679);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34675){var t__27257__auto___34681 = e34675;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34681,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34676){var t__27257__auto__ = e34676;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3])"),"(2 3 4)"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

klipse.cards.special.eval.test_str_eval_ok = (function klipse$cards$special$eval$test_str_eval_ok(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_eval_ok.cljs$lang$var);
});
klipse.cards.special.eval.test_str_eval_ok.cljs$lang$test = (function (){

try{var values__27219__auto___34682 = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(+ 1 2)");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"3"),x__23449__auto__);
})();
var result__27220__auto___34683 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34682);
if(cljs.core.truth_(result__27220__auto___34683)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34682),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34682);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34677){var t__27257__auto___34684 = e34677;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2)"),"3"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34684,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34678){var t__27257__auto__ = e34678;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3])"),"(2 3 4)"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_eval_ok.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_eval_ok;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-eval-ok","klipse.cards.special.eval/test-str-eval-ok",-381120667,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-eval-ok","test-str-eval-ok",-374910539,null),"src/klipse/cards/special/eval.cljs",26,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_eval_ok)?klipse.cards.special.eval.test_str_eval_ok.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.special.eval","klipse.cards.special.eval",-678013242),new cljs.core.Keyword(null,"test-str-eval-error","test-str-eval-error",-810964520)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test-str-eval-error",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"str-eval should return an error as a string");
}),(function (){
try{var values__27219__auto___34689 = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(+ 1 2");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),x__23449__auto__);
})();
var result__27220__auto___34690 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34689);
if(cljs.core.truth_(result__27220__auto___34690)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34689),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34689);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34685){var t__27257__auto___34691 = e34685;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34691,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34686){var t__27257__auto__ = e34686;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

klipse.cards.special.eval.test_str_eval_error = (function klipse$cards$special$eval$test_str_eval_error(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_eval_error.cljs$lang$var);
});
klipse.cards.special.eval.test_str_eval_error.cljs$lang$test = (function (){

try{var values__27219__auto___34692 = (function (){var x__23449__auto__ = klipse.compiler.str_eval.call(null,"(+ 1 2");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),x__23449__auto__);
})();
var result__27220__auto___34693 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34692);
if(cljs.core.truth_(result__27220__auto___34693)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34692),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34692);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34687){var t__27257__auto___34694 = e34687;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34694,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34688){var t__27257__auto__ = e34688;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-eval","str-eval",149937784,null),"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_eval_error.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_eval_error;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-eval-error","klipse.cards.special.eval/test-str-eval-error",807370063,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-eval-error","test-str-eval-error",829567007,null),"src/klipse/cards/special/eval.cljs",29,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_eval_error)?klipse.cards.special.eval.test_str_eval_error.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.special.eval","klipse.cards.special.eval",-678013242),new cljs.core.Keyword(null,"test-str-compile-error","test-str-compile-error",1758162540)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test-str-compile-error",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"str-compile should return an error as a string");
}),(function (){
try{var values__27219__auto___34699 = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(+ 1 2");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),x__23449__auto__);
})();
var result__27220__auto___34700 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34699);
if(cljs.core.truth_(result__27220__auto___34700)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34699),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34699);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34695){var t__27257__auto___34701 = e34695;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34701,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34696){var t__27257__auto__ = e34696;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

klipse.cards.special.eval.test_str_compile_error = (function klipse$cards$special$eval$test_str_compile_error(){
return cljs.test.test_var.call(null,klipse$cards$special$eval$test_str_compile_error.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_error.cljs$lang$test = (function (){

try{var values__27219__auto___34702 = (function (){var x__23449__auto__ = klipse.compiler.str_compile.call(null,"(+ 1 2");
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),x__23449__auto__);
})();
var result__27220__auto___34703 = cljs.core.apply.call(null,cljs.core._EQ_,values__27219__auto___34702);
if(cljs.core.truth_(result__27220__auto___34703)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__27219__auto___34702),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__27219__auto___34702);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34697){var t__27257__auto___34704 = e34697;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34704,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34698){var t__27257__auto__ = e34698;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-compile","str-compile",-38637206,null),"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.special.eval.test_str_compile_error.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_error;},new cljs.core.Symbol("klipse.cards.special.eval","test-str-compile-error","klipse.cards.special.eval/test-str-compile-error",-902258301,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.special.eval","klipse.cards.special.eval",962518285,null),new cljs.core.Symbol(null,"test-str-compile-error","test-str-compile-error",-896273229,null),"src/klipse/cards/special/eval.cljs",32,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_error)?klipse.cards.special.eval.test_str_compile_error.cljs$lang$test:null)]));

//# sourceMappingURL=eval.js.map?rel=1465542768471