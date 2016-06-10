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
var len__23690__auto___34618 = arguments.length;
var i__23691__auto___34619 = (0);
while(true){
if((i__23691__auto___34619 < len__23690__auto___34618)){
args__23697__auto__.push((arguments[i__23691__auto___34619]));

var G__34620 = (i__23691__auto___34619 + (1));
i__23691__auto___34619 = G__34620;
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

klipse.cards.test.compile.a_EQ_.cljs$lang$applyTo = (function (seq34617){
return klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34617));
});

klipse.cards.test.compile.error__GT_clj = (function klipse$cards$test$compile$error__GT_clj(p__34621){
var vec__34625 = p__34621;
var status = cljs.core.nth.call(null,vec__34625,(0),null);
var error = cljs.core.nth.call(null,vec__34625,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error.message], null)], null);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.test.compile","klipse.cards.test.compile",-1452690019),new cljs.core.Keyword(null,"success","success",1890645906)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"success",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"compile with success");
}),(function (){
try{var values__27219__auto___34634 = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)"));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),x__23449__auto__);
})();
var result__27220__auto___34635 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34634);
if(cljs.core.truth_(result__27220__auto___34635)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34634),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto___34634);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34628){var t__27257__auto___34636 = e34628;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34636,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto___34637 = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(if 2 3) (def x (if 2 3))"));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.user.x= (3);"),x__23449__auto__);
})();
var result__27220__auto___34638 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34637);
if(cljs.core.truth_(result__27220__auto___34638)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34637),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto___34637);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34629){var t__27257__auto___34639 = e34629;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34639,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34630){var t__27257__auto__ = e34630;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

klipse.cards.test.compile.success = (function klipse$cards$test$compile$success(){
return cljs.test.test_var.call(null,klipse$cards$test$compile$success.cljs$lang$var);
});
klipse.cards.test.compile.success.cljs$lang$test = (function (){

try{var values__27219__auto___34640 = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(ns my-project.my-ns) (def x 1) (def y 2)"));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),x__23449__auto__);
})();
var result__27220__auto___34641 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34640);
if(cljs.core.truth_(result__27220__auto___34641)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34640),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto___34640);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34631){var t__27257__auto___34642 = e34631;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34642,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__27219__auto___34643 = (function (){var x__23449__auto__ = cljs.core.second.call(null,klipse.compiler.compile.call(null,"(if 2 3) (def x (if 2 3))"));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.user.x= (3);"),x__23449__auto__);
})();
var result__27220__auto___34644 = cljs.core.apply.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34643);
if(cljs.core.truth_(result__27220__auto___34644)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,klipse.cards.test.compile.a_EQ_,values__27219__auto___34643),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol(null,"a=","a=",1533554587,null),values__27219__auto___34643);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e34632){var t__27257__auto___34645 = e34632;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto___34645,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
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
}catch (e34633){var t__27257__auto__ = e34633;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.compile.success.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.success;},new cljs.core.Symbol("klipse.cards.test.compile","success","klipse.cards.test.compile/success",734952039,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.compile","klipse.cards.test.compile",187841508,null),new cljs.core.Symbol(null,"success","success",-763789863,null),"src/klipse/cards/test/compile.cljs",17,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.success)?klipse.cards.test.compile.success.cljs$lang$test:null)]));
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"klipse.cards.test.compile","klipse.cards.test.compile",-1452690019),new cljs.core.Keyword(null,"static-fn","static-fn",1300890763)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"static-fn",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
return devcards.core.test_doc.call(null,"compile with static dispatch (:static-fns true)");
}),(function (){
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
}catch (e34646){var t__27257__auto__ = e34646;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

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
}catch (e34647){var t__27257__auto__ = e34647;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"a=","a=",1533554587,null),cljs.core.list(new cljs.core.Symbol(null,"second","second",1195829517,null),cljs.core.list(new cljs.core.Symbol(null,"compile","compile",-2046249340,null),"(= 1 2)",new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),new cljs.core.Keyword(null,"actual","actual",107306363),t__27257__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

klipse.cards.test.compile.static_fn.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.static_fn;},new cljs.core.Symbol("klipse.cards.test.compile","static-fn","klipse.cards.test.compile/static-fn",75860280,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"klipse.cards.test.compile","klipse.cards.test.compile",187841508,null),new cljs.core.Symbol(null,"static-fn","static-fn",-1353545006,null),"src/klipse/cards/test/compile.cljs",19,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.static_fn)?klipse.cards.test.compile.static_fn.cljs$lang$test:null)]));

//# sourceMappingURL=compile.js.map?rel=1465542768299