// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('klipse.cards.special.eval');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('gadjett.core');
goog.require('klipse.compiler');
goog.require('devcards.core');
klipse.cards.special.eval.remove_chars = (function klipse$cards$special$eval$remove_chars(s){
return clojure.string.replace(s,/\n|\s/,"");
});
klipse.cards.special.eval.a_EQ_ = (function klipse$cards$special$eval$a_EQ_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___60235 = arguments.length;
var i__7297__auto___60236 = (0);
while(true){
if((i__7297__auto___60236 < len__7296__auto___60235)){
args__7303__auto__.push((arguments[i__7297__auto___60236]));

var G__60237 = (i__7297__auto___60236 + (1));
i__7297__auto___60236 = G__60237;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(klipse.cards.special.eval.remove_chars,args));
});

klipse.cards.special.eval.a_EQ_.cljs$lang$maxFixedArity = (0);

klipse.cards.special.eval.a_EQ_.cljs$lang$applyTo = (function (seq60234){
return klipse.cards.special.eval.a_EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60234));
});

klipse.cards.special.eval.error__GT_clj = (function klipse$cards$special$eval$error__GT_clj(p__60238){
var vec__60242 = p__60238;
var status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60242,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [status,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,error.message], null)], null);
});

klipse.cards.special.eval.static_fn_failure = (function klipse$cards$special$eval$static_fn_failure(){
return cljs.test.test_var(klipse$cards$special$eval$static_fn_failure.cljs$lang$var);
});
klipse.cards.special.eval.static_fn_failure.cljs$lang$test = (function (){

try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.cards.special.eval.error__GT_clj(klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",cljs.core.cst$kw$static_DASH_fns,true], 0)));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",cljs.core.cst$kw$static_DASH_fns,true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",cljs.core.cst$kw$static_DASH_fns,true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e60245){var t__19334__auto__ = e60245;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$error_DASH__GT_clj,cljs.core.list(cljs.core.cst$sym$eval,"(defn f ([a] a) ([a b] [a b])) (defn g [] (f 1 2)) (defn f [& args] :args) (g)",cljs.core.cst$kw$static_DASH_fns,true)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,"ERROR"], null)], null)),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.special.eval.static_fn_failure.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.static_fn_failure;},cljs.core.cst$sym$klipse$cards$special$eval_SLASH_static_DASH_fn_DASH_failure,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$special$eval,cljs.core.cst$sym$static_DASH_fn_DASH_failure,"src/klipse/cards/special/eval.cljs",27,1,19,19,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.static_fn_failure)?klipse.cards.special.eval.static_fn_failure.cljs$lang$test:null)]));

klipse.cards.special.eval.test_eval_macros = (function klipse$cards$special$eval$test_eval_macros(){
return cljs.test.test_var(klipse$cards$special$eval$test_eval_macros.cljs$lang$var);
});
klipse.cards.special.eval.test_eval_macros.cljs$lang$test = (function (){

try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.compiler.eval.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"], 0));
return cljs.core._conj((function (){var x__7055__auto____$1 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"(+ 1 2) => 3\n"], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"(+ 1 2) => 3\n"], null)),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"(+ 1 2) => 3\n"], null)),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e60246){var t__19334__auto__ = e60246;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$eval,"(ns my.ns$macros) (defmacro disp [& forms] (cons `str (for [form forms] `(str (pr-str '~form) \" => \" (pr-str ~form) \"\n\")))) (my.ns/disp (+ 1 2))"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ok,"(+ 1 2) => 3\n"], null)),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.special.eval.test_eval_macros.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_eval_macros;},cljs.core.cst$sym$klipse$cards$special$eval_SLASH_test_DASH_eval_DASH_macros,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$special$eval,cljs.core.cst$sym$test_DASH_eval_DASH_macros,"src/klipse/cards/special/eval.cljs",26,1,25,25,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_eval_macros)?klipse.cards.special.eval.test_eval_macros.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_compile_ok = (function klipse$cards$special$eval$test_str_compile_ok(){
return cljs.test.test_var(klipse$cards$special$eval$test_str_compile_ok.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test = (function (){

try{var values__19259__auto___60249 = (function (){var x__7055__auto__ = klipse.compiler.str_compile("(+ 1 2)");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"((1) + (2));\n"),x__7055__auto__);
})();
var result__19260__auto___60250 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___60249);
if(cljs.core.truth_(result__19260__auto___60250)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(+ 1 2)"),"((1) + (2));\n"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___60249),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(+ 1 2)"),"((1) + (2));\n"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___60249);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e60247){var t__19334__auto___60251 = e60247;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(+ 1 2)"),"((1) + (2));\n"),cljs.core.cst$kw$actual,t__19334__auto___60251,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.compiler.str_compile("(map inc [1 2 3])");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e60248){var t__19334__auto__ = e60248;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(map inc [1 2 3])"),"cljs.core.map.call(null,cljs.core.inc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null));\n"),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.special.eval.test_str_compile_ok.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_ok;},cljs.core.cst$sym$klipse$cards$special$eval_SLASH_test_DASH_str_DASH_compile_DASH_ok,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$special$eval,cljs.core.cst$sym$test_DASH_str_DASH_compile_DASH_ok,"src/klipse/cards/special/eval.cljs",29,1,32,32,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_ok)?klipse.cards.special.eval.test_str_compile_ok.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_eval_ok = (function klipse$cards$special$eval$test_str_eval_ok(){
return cljs.test.test_var(klipse$cards$special$eval$test_str_eval_ok.cljs$lang$var);
});
klipse.cards.special.eval.test_str_eval_ok.cljs$lang$test = (function (){

try{var values__19259__auto___60254 = (function (){var x__7055__auto__ = klipse.compiler.str_eval("(+ 1 2)");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"3"),x__7055__auto__);
})();
var result__19260__auto___60255 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___60254);
if(cljs.core.truth_(result__19260__auto___60255)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(+ 1 2)"),"3"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___60254),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(+ 1 2)"),"3"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___60254);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e60252){var t__19334__auto___60256 = e60252;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(+ 1 2)"),"3"),cljs.core.cst$kw$actual,t__19334__auto___60256,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.compiler.str_eval("(map inc [1 2 3])");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"(2 3 4)"),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(map inc [1 2 3])"),"(2 3 4)"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(map inc [1 2 3])"),"(2 3 4)"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e60253){var t__19334__auto__ = e60253;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(map inc [1 2 3])"),"(2 3 4)"),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.special.eval.test_str_eval_ok.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_eval_ok;},cljs.core.cst$sym$klipse$cards$special$eval_SLASH_test_DASH_str_DASH_eval_DASH_ok,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$special$eval,cljs.core.cst$sym$test_DASH_str_DASH_eval_DASH_ok,"src/klipse/cards/special/eval.cljs",26,1,39,39,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_eval_ok)?klipse.cards.special.eval.test_str_eval_ok.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_eval_error = (function klipse$cards$special$eval$test_str_eval_error(){
return cljs.test.test_var(klipse$cards$special$eval$test_str_eval_error.cljs$lang$var);
});
klipse.cards.special.eval.test_str_eval_error.cljs$lang$test = (function (){

try{var values__19259__auto___60259 = (function (){var x__7055__auto__ = klipse.compiler.str_eval("(+ 1 2");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),x__7055__auto__);
})();
var result__19260__auto___60260 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___60259);
if(cljs.core.truth_(result__19260__auto___60260)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___60259),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___60259);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e60257){var t__19334__auto___60261 = e60257;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(+ 1 2"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),cljs.core.cst$kw$actual,t__19334__auto___60261,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.compiler.str_eval("(map inc [1 2 3]");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e60258){var t__19334__auto__ = e60258;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_eval,"(map inc [1 2 3]"),"#error {:message \"EOF while reading\", :data {:type :reader-exception}}"),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.special.eval.test_str_eval_error.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_eval_error;},cljs.core.cst$sym$klipse$cards$special$eval_SLASH_test_DASH_str_DASH_eval_DASH_error,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$special$eval,cljs.core.cst$sym$test_DASH_str_DASH_eval_DASH_error,"src/klipse/cards/special/eval.cljs",29,1,46,46,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_eval_error)?klipse.cards.special.eval.test_str_eval_error.cljs$lang$test:null)]));

klipse.cards.special.eval.test_str_compile_error = (function klipse$cards$special$eval$test_str_compile_error(){
return cljs.test.test_var(klipse$cards$special$eval$test_str_compile_error.cljs$lang$var);
});
klipse.cards.special.eval.test_str_compile_error.cljs$lang$test = (function (){

try{var values__19259__auto___60264 = (function (){var x__7055__auto__ = klipse.compiler.str_compile("(+ 1 2");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),x__7055__auto__);
})();
var result__19260__auto___60265 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto___60264);
if(cljs.core.truth_(result__19260__auto___60265)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto___60264),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto___60264);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

}catch (e60262){var t__19334__auto___60266 = e60262;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(+ 1 2"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 6, :file \"cljs-in\"}}}"),cljs.core.cst$kw$actual,t__19334__auto___60266,cljs.core.cst$kw$message,null], null));
}
try{var values__19259__auto__ = (function (){var x__7055__auto__ = klipse.compiler.str_compile("(map inc [1 2 3]");
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),x__7055__auto__);
})();
var result__19260__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__19259__auto__);
if(cljs.core.truth_(result__19260__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$pass,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),cljs.core.cst$kw$actual,cljs.core.cons(cljs.core._EQ_,values__19259__auto__),cljs.core.cst$kw$message,null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$fail,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),cljs.core.cst$kw$actual,cljs.core._conj((function (){var x__7055__auto__ = cljs.core.cons(cljs.core.cst$sym$_EQ_,values__19259__auto__);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$not),cljs.core.cst$kw$message,null], null));
}

return result__19260__auto__;
}catch (e60263){var t__19334__auto__ = e60263;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$expected,cljs.core.list(cljs.core.cst$sym$_EQ_,cljs.core.list(cljs.core.cst$sym$str_DASH_compile,"(map inc [1 2 3]"),"#error {:message \"Could not compile cljs-in\", :data {:tag :cljs/analysis-error}, :cause #error {:message \"EOF while reading, starting at line 1 and column 1\", :data {:type :reader-exception, :line 1, :column 17, :file \"cljs-in\"}}}"),cljs.core.cst$kw$actual,t__19334__auto__,cljs.core.cst$kw$message,null], null));
}});

klipse.cards.special.eval.test_str_compile_error.cljs$lang$var = new cljs.core.Var(function(){return klipse.cards.special.eval.test_str_compile_error;},cljs.core.cst$sym$klipse$cards$special$eval_SLASH_test_DASH_str_DASH_compile_DASH_error,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$klipse$cards$special$eval,cljs.core.cst$sym$test_DASH_str_DASH_compile_DASH_error,"src/klipse/cards/special/eval.cljs",32,1,53,53,cljs.core.List.EMPTY,null,(cljs.core.truth_(klipse.cards.special.eval.test_str_compile_error)?klipse.cards.special.eval.test_str_compile_error.cljs$lang$test:null)]));
