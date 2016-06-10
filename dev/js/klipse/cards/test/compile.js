// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.cards.test.compile');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('klipse.compiler');
goog.require('devcards.core');
klipse.cards.test.compile.remove_chars = (function klipse$cards$test$compile$remove_chars(s){
return clojure.string.replace(s,/\n|\s/,"");
});
klipse.cards.test.compile.a_EQ_ = (function klipse$cards$test$compile$a_EQ_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___34129 = arguments.length;
var i__7297__auto___34130 = (0);
while(true){
if((i__7297__auto___34130 < len__7296__auto___34129)){
args__7303__auto__.push((arguments[i__7297__auto___34130]));

var G__34131 = (i__7297__auto___34130 + (1));
i__7297__auto___34130 = G__34131;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(klipse.cards.test.compile.remove_chars,args));
});

klipse.cards.test.compile.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.test.compile.a_EQ_.cljs$lang$applyTo = (function (seq34128){
return klipse.cards.test.compile.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34128));
});

klipse.cards.test.compile.error__GT_clj = (function klipse$cards$test$compile$error__GT_clj(p__34135){
var vec__34139 = p__34135;
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34139,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,error.message], null)], null);
});

klipse.cards.test.compile.success = (function klipse$cards$test$compile$success(){
return cljs.test.test_var(klipse$cards$test$compile$success.cljs$lang$var);
});
klipse.cards.test.compile.success.cljs$lang$test = (function (){

try{var values__19259__auto___34165 = (function (){var x__7055__auto__ = cljs.core.second(klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(ns my-project.my-ns) (def x 1) (def y 2)"], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),x__7055__auto__);
})();
var result__19260__auto___34166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(klipse.cards.test.compile.a_EQ_,values__19259__auto___34165);
if(cljs.core.truth_(result__19260__auto___34166)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),cljs.core.cst$kw$actual,cljs.core.cons(klipse.cards.test.compile.a_EQ_,values__19259__auto___34165),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$a_EQ_,values__19259__auto___34165);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e34150){var t__19334__auto___34398 = e34150;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(ns my-project.my-ns) (def x 1) (def y 2)")),"goog.provide('my_project.my_ns'); goog.require('cljs.core'); my_project.my_ns.x = (1); my_project.my_ns.y = (2);"),cljs.core.cst$kw$actual,t__19334__auto___34398,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto___34400 = (function (){var x__7055__auto__ = cljs.core.second(klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(if 2 3) (def x (if 2 3))"], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"cljs.user.x= (3);"),x__7055__auto__);
})();
var result__19260__auto___34401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(klipse.cards.test.compile.a_EQ_,values__19259__auto___34400);
if(cljs.core.truth_(result__19260__auto___34401)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),cljs.core.cst$kw$actual,cljs.core.cons(klipse.cards.test.compile.a_EQ_,values__19259__auto___34400),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$a_EQ_,values__19259__auto___34400);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e34156){var t__19334__auto___34405 = e34156;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(if 2 3) (def x (if 2 3))")),"cljs.user.x= (3);"),cljs.core.cst$kw$actual,t__19334__auto___34405,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto__ = (function (){var x__7055__auto__ = cljs.core.second(klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(= 1 2)"], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"cljs.core._EQ_.call(null,(1),(2));"),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(klipse.cards.test.compile.a_EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),cljs.core.cst$kw$actual,cljs.core.cons(klipse.cards.test.compile.a_EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$a_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e34158){var t__19334__auto__ = e34158;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(= 1 2)")),"cljs.core._EQ_.call(null,(1),(2));"),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.test.compile.success.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.success;},cljs.core.cst$sym$klipse$cards$test$compile_SLASH_success,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$test$compile,cljs.core.cst$sym$success,"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/test/compile.cljs",17,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.success)?klipse.cards.test.compile.success.cljs$lang$test:null)]));

klipse.cards.test.compile.static_fn = (function klipse$cards$test$compile$static_fn(){
return cljs.test.test_var(klipse$cards$test$compile$static_fn.cljs$lang$var);
});
klipse.cards.test.compile.static_fn.cljs$lang$test = (function (){

try{var values__19259__auto__ = (function (){var x__7055__auto__ = cljs.core.second(klipse.compiler.compile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(= 1 2)",cljs.core.cst$kw$static_DASH_fns,true], 0)));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(klipse.cards.test.compile.a_EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(= 1 2)",cljs.core.cst$kw$static_DASH_fns,true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),cljs.core.cst$kw$actual,cljs.core.cons(klipse.cards.test.compile.a_EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(= 1 2)",cljs.core.cst$kw$static_DASH_fns,true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$a_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e34412){var t__19334__auto__ = e34412;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$compile,"(= 1 2)",cljs.core.cst$kw$static_DASH_fns,true)),"cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(2));"),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.test.compile.static_fn.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.compile.static_fn;},cljs.core.cst$sym$klipse$cards$test$compile_SLASH_static_DASH_fn,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$test$compile,cljs.core.cst$sym$static_DASH_fn,"/Users/yehonathan.sharvit/prj/klipse/src/klipse/cards/test/compile.cljs",19,1,28,28,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.compile.static_fn)?klipse.cards.test.compile.static_fn.cljs$lang$test:null)]));
