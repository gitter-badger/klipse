// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.cards.test.eval');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('klipse.compiler');
goog.require('devcards.core');
klipse.cards.test.eval.remove_chars = (function klipse$cards$test$eval$remove_chars(s){
return clojure.string.replace(s,/\n|\s/,"");
});
klipse.cards.test.eval.a_EQ_ = (function klipse$cards$test$eval$a_EQ_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56855 = arguments.length;
var i__7297__auto___56856 = (0);
while(true){
if((i__7297__auto___56856 < len__7296__auto___56855)){
args__7303__auto__.push((arguments[i__7297__auto___56856]));

var G__56857 = (i__7297__auto___56856 + (1));
i__7297__auto___56856 = G__56857;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(klipse.cards.test.eval.remove_chars,args));
});

klipse.cards.test.eval.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.test.eval.a_EQ_.cljs$lang$applyTo = (function (seq56854){
return klipse.cards.test.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56854));
});

klipse.cards.test.eval.error__GT_clj = (function klipse$cards$test$eval$error__GT_clj(p__56858){
var vec__56862 = p__56858;
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56862,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56862,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,error.message], null)], null);
});

klipse.cards.test.eval.test_eval = (function klipse$cards$test$eval$test_eval(){
return cljs.test.test_var(klipse$cards$test$eval$test_eval.cljs$lang$var);
});
klipse.cards.test.eval.test_eval.cljs$lang$test = (function (){

try{var values__19259__auto___56867 = (function (){var x__7055__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"EOF while reading"], null)], null);
return cljs.core._conj((function (){var x__7055__auto____$1 = klipse.cards.test.eval.error__GT_clj(klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(+ 1 2"], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto___56868 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___56867);
if(cljs.core.truth_(result__19260__auto___56868)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"EOF while reading"], null)], null),cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(+ 1 2"))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___56867),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"EOF while reading"], null)], null),cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(+ 1 2"))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___56867);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e56865){var t__19334__auto___56869 = e56865;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"EOF while reading"], null)], null),cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(+ 1 2"))),cljs.core.cst$kw$actual,t__19334__auto___56869,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto__ = (function (){var x__7055__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null);
return cljs.core._conj((function (){var x__7055__auto____$1 = klipse.cards.test.eval.error__GT_clj(klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(a)"], 0)));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null),cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(a)"))),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null),cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(a)"))),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e56866){var t__19334__auto__ = e56866;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null),cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(a)"))),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.test.eval.test_eval.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval;},cljs.core.cst$sym$klipse$cards$test$eval_SLASH_test_DASH_eval,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$test$eval,cljs.core.cst$sym$test_DASH_eval,"src/klipse/cards/test/eval.cljs",19,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval)?klipse.cards.test.eval.test_eval.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_2 = (function klipse$cards$test$eval$test_eval_2(){
return cljs.test.test_var(klipse$cards$test$eval$test_eval_2.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_2.cljs$lang$test = (function (){

try{var values__19259__auto___56875 = (function (){var x__7055__auto__ = klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" (def x 12)\n         (+ x 5)"], 0));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(17)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto___56876 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___56875);
if(cljs.core.truth_(result__19260__auto___56876)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval," (def x 12)\n         (+ x 5)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(17)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___56875),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval," (def x 12)\n         (+ x 5)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(17)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___56875);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e56870){var t__19334__auto___56877 = e56870;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval," (def x 12)\n         (+ x 5)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(17)], null)),cljs.core.cst$kw$actual,t__19334__auto___56877,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto___56878 = (function (){var x__7055__auto__ = klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(+ 1 2)"], 0));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto___56879 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___56878);
if(cljs.core.truth_(result__19260__auto___56879)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___56878),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___56878);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e56871){var t__19334__auto___56880 = e56871;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null)),cljs.core.cst$kw$actual,t__19334__auto___56880,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto___56881 = (function (){var x__7055__auto__ = klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(map inc [1 2 3])"], 0));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list((2),(3),(4))], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto___56882 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___56881);
if(cljs.core.truth_(result__19260__auto___56882)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(map inc [1 2 3])"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list((2),(3),(4)))], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___56881),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(map inc [1 2 3])"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list((2),(3),(4)))], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___56881);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e56872){var t__19334__auto___56883 = e56872;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(map inc [1 2 3])"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list((2),(3),(4)))], null)),cljs.core.cst$kw$actual,t__19334__auto___56883,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto___56884 = (function (){var x__7055__auto__ = klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))"], 0));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list((10),(11),(12))], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto___56885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___56884);
if(cljs.core.truth_(result__19260__auto___56885)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list((10),(11),(12)))], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___56884),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list((10),(11),(12)))], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___56884);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e56873){var t__19334__auto___56886 = e56873;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(defn append-cyclic[lst a]\n           (concat (rest lst) [a]))\n       (-> (repeat 3 nil)\n       (append-cyclic  9)\n       (append-cyclic  10)\n       (append-cyclic  11)\n       (append-cyclic  12))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list((10),(11),(12)))], null)),cljs.core.cst$kw$actual,t__19334__auto___56886,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(ns my.aa) (+ 1 2)"], 0));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.aa) (+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.aa) (+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e56874){var t__19334__auto__ = e56874;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.aa) (+ 1 2)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(3)], null)),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.test.eval.test_eval_2.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_2;},cljs.core.cst$sym$klipse$cards$test$eval_SLASH_test_DASH_eval_DASH_2,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$test$eval,cljs.core.cst$sym$test_DASH_eval_DASH_2,"src/klipse/cards/test/eval.cljs",21,1,26,26,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_2)?klipse.cards.test.eval.test_eval_2.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_macros = (function klipse$cards$test$eval$test_eval_macros(){
return cljs.test.test_var(klipse$cards$test$eval$test_eval_macros.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_macros.cljs$lang$test = (function (){

try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)"], 0));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_inc,(13))], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_inc,(13)))], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_inc,(13)))], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e56887){var t__19334__auto__ = e56887;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello) \n       (defmacro hello \n       [x] \n       `(inc ~x))\n       (hello nil nil 13)"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_inc,(13)))], null)),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.test.eval.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_macros;},cljs.core.cst$sym$klipse$cards$test$eval_SLASH_test_DASH_eval_DASH_macros,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$test$eval,cljs.core.cst$sym$test_DASH_eval_DASH_macros,"src/klipse/cards/test/eval.cljs",26,1,44,44,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_macros)?klipse.cards.test.eval.test_eval_macros.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_twice_macro = (function klipse$cards$test$eval$test_eval_twice_macro(){
return cljs.test.test_var(klipse$cards$test$eval$test_eval_twice_macro.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_twice_macro.cljs$lang$test = (function (){

try{var values__19259__auto__ = (function (){var x__7055__auto__ = (function (){
klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"], 0));

return klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"], 0));
})()
;
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(14)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"),cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(14)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"),cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(14)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e56888){var t__19334__auto__ = e56888;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$do,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)"),cljs.core.list(cljs.core.cst$sym$eval,"(ns my.hello$macros) (defmacro hello [x] `(inc ~x)) (my.hello/hello 13)")),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,(14)], null)),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.test.eval.test_eval_twice_macro.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_twice_macro;},cljs.core.cst$sym$klipse$cards$test$eval_SLASH_test_DASH_eval_DASH_twice_DASH_macro,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$test$eval,cljs.core.cst$sym$test_DASH_eval_DASH_twice_DASH_macro,"src/klipse/cards/test/eval.cljs",31,1,64,64,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_twice_macro)?klipse.cards.test.eval.test_eval_twice_macro.cljs$lang$test:null)]));

klipse.cards.test.eval.test_eval_4 = (function klipse$cards$test$eval$test_eval_4(){
return cljs.test.test_var(klipse$cards$test$eval$test_eval_4.cljs$lang$var);
});
klipse.cards.test.eval.test_eval_4.cljs$lang$test = (function (){

try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.cards.test.eval.remove_chars(cljs.core.second(klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(type 1)"], 0))));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"#object[Number \"function Number() {\n    [native code]\n}\"]"),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(klipse.cards.test.eval.a_EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$remove_DASH_chars,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$eval,"(type 1)"))),"#object[Number \"function Number() {\n    [native code]\n}\"]"),cljs.core.cst$kw$actual,cljs.core.cons(klipse.cards.test.eval.a_EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$remove_DASH_chars,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$eval,"(type 1)"))),"#object[Number \"function Number() {\n    [native code]\n}\"]"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$a_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e56889){var t__19334__auto__ = e56889;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$a_EQ_,cljs.core.list(cljs.core.cst$sym$remove_DASH_chars,cljs.core.list(cljs.core.cst$sym$second,cljs.core.list(cljs.core.cst$sym$eval,"(type 1)"))),"#object[Number \"function Number() {\n    [native code]\n}\"]"),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.test.eval.test_eval_4.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.test.eval.test_eval_4;},cljs.core.cst$sym$klipse$cards$test$eval_SLASH_test_DASH_eval_DASH_4,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$test$eval,cljs.core.cst$sym$test_DASH_eval_DASH_4,"src/klipse/cards/test/eval.cljs",21,1,78,78,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.test.eval.test_eval_4)?klipse.cards.test.eval.test_eval_4.cljs$lang$test:null)]));
