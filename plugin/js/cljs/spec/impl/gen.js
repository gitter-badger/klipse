// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.with_meta(cljs.core.cst$sym$cached,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check_SLASH_quick_DASH_check)),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54776 = arguments.length;
var i__7297__auto___54777 = (0);
while(true){
if((i__7297__auto___54777 < len__7296__auto___54776)){
args__7303__auto__.push((arguments[i__7297__auto___54777]));

var G__54778 = (i__7297__auto___54777 + (1));
i__7297__auto___54777 = G__54778;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.quick_check_ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref)),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq54775){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54775));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$properties_SLASH_for_DASH_all_STAR_)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54780 = arguments.length;
var i__7297__auto___54781 = (0);
while(true){
if((i__7297__auto___54781 < len__7296__auto___54780)){
args__7303__auto__.push((arguments[i__7297__auto___54781]));

var G__54782 = (i__7297__auto___54781 + (1));
i__7297__auto___54781 = G__54782;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.for_all_STAR__ref) : cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref)),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq54779){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54779));
});

var g_QMARK__54783 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generator_QMARK_)),cljs.core.str(" never required")].join('')));
}
}),null));
var g_54784 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__54783){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_generate)),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__54783))
,null));
var mkg_54785 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__54783,g_54784){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH__DASH__GT_Generator)),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__54783,g_54784))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__54783,g_54784,mkg_54785){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_QMARK__54783) : cljs.core.deref.call(null,g_QMARK__54783)).call(null,x);
});})(g_QMARK__54783,g_54784,mkg_54785))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__54783,g_54784,mkg_54785){
return (function cljs$spec$impl$gen$generator(gfn){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mkg_54785) : cljs.core.deref.call(null,mkg_54785)).call(null,gfn);
});})(g_QMARK__54783,g_54784,mkg_54785))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__54783,g_54784,mkg_54785){
return (function cljs$spec$impl$gen$generate(generator){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g_54784) : cljs.core.deref.call(null,g_54784)).call(null,generator);
});})(g_QMARK__54783,g_54784,mkg_54785))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator((function (rnd,size){
return cljs.core.cst$kw$gen.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gfnd) : cljs.core.deref.call(null,gfnd))).call(null,rnd,size);
}));
});
var g__27546__auto___54801 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_hash_DASH_map)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27546__auto___54801){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54802 = arguments.length;
var i__7297__auto___54803 = (0);
while(true){
if((i__7297__auto___54803 < len__7296__auto___54802)){
args__7303__auto__.push((arguments[i__7297__auto___54803]));

var G__54804 = (i__7297__auto___54803 + (1));
i__7297__auto___54803 = G__54804;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54801))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54801){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54801) : cljs.core.deref.call(null,g__27546__auto___54801)),args);
});})(g__27546__auto___54801))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27546__auto___54801){
return (function (seq54786){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54786));
});})(g__27546__auto___54801))
;


var g__27546__auto___54805 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_list)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27546__auto___54805){
return (function cljs$spec$impl$gen$list(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54806 = arguments.length;
var i__7297__auto___54807 = (0);
while(true){
if((i__7297__auto___54807 < len__7296__auto___54806)){
args__7303__auto__.push((arguments[i__7297__auto___54807]));

var G__54808 = (i__7297__auto___54807 + (1));
i__7297__auto___54807 = G__54808;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54805))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54805){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54805) : cljs.core.deref.call(null,g__27546__auto___54805)),args);
});})(g__27546__auto___54805))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27546__auto___54805){
return (function (seq54787){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54787));
});})(g__27546__auto___54805))
;


var g__27546__auto___54809 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_map)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27546__auto___54809){
return (function cljs$spec$impl$gen$map(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54810 = arguments.length;
var i__7297__auto___54811 = (0);
while(true){
if((i__7297__auto___54811 < len__7296__auto___54810)){
args__7303__auto__.push((arguments[i__7297__auto___54811]));

var G__54812 = (i__7297__auto___54811 + (1));
i__7297__auto___54811 = G__54812;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54809))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54809){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54809) : cljs.core.deref.call(null,g__27546__auto___54809)),args);
});})(g__27546__auto___54809))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27546__auto___54809){
return (function (seq54788){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54788));
});})(g__27546__auto___54809))
;


var g__27546__auto___54813 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_not_DASH_empty)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27546__auto___54813){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54814 = arguments.length;
var i__7297__auto___54815 = (0);
while(true){
if((i__7297__auto___54815 < len__7296__auto___54814)){
args__7303__auto__.push((arguments[i__7297__auto___54815]));

var G__54816 = (i__7297__auto___54815 + (1));
i__7297__auto___54815 = G__54816;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54813))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54813){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54813) : cljs.core.deref.call(null,g__27546__auto___54813)),args);
});})(g__27546__auto___54813))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27546__auto___54813){
return (function (seq54789){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54789));
});})(g__27546__auto___54813))
;


var g__27546__auto___54817 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_set)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27546__auto___54817){
return (function cljs$spec$impl$gen$set(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54818 = arguments.length;
var i__7297__auto___54819 = (0);
while(true){
if((i__7297__auto___54819 < len__7296__auto___54818)){
args__7303__auto__.push((arguments[i__7297__auto___54819]));

var G__54820 = (i__7297__auto___54819 + (1));
i__7297__auto___54819 = G__54820;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54817))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54817){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54817) : cljs.core.deref.call(null,g__27546__auto___54817)),args);
});})(g__27546__auto___54817))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27546__auto___54817){
return (function (seq54790){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54790));
});})(g__27546__auto___54817))
;


var g__27546__auto___54821 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_vector)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27546__auto___54821){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54822 = arguments.length;
var i__7297__auto___54823 = (0);
while(true){
if((i__7297__auto___54823 < len__7296__auto___54822)){
args__7303__auto__.push((arguments[i__7297__auto___54823]));

var G__54824 = (i__7297__auto___54823 + (1));
i__7297__auto___54823 = G__54824;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54821))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54821){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54821) : cljs.core.deref.call(null,g__27546__auto___54821)),args);
});})(g__27546__auto___54821))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27546__auto___54821){
return (function (seq54791){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54791));
});})(g__27546__auto___54821))
;


var g__27546__auto___54825 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_fmap)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27546__auto___54825){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54826 = arguments.length;
var i__7297__auto___54827 = (0);
while(true){
if((i__7297__auto___54827 < len__7296__auto___54826)){
args__7303__auto__.push((arguments[i__7297__auto___54827]));

var G__54828 = (i__7297__auto___54827 + (1));
i__7297__auto___54827 = G__54828;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54825))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54825){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54825) : cljs.core.deref.call(null,g__27546__auto___54825)),args);
});})(g__27546__auto___54825))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27546__auto___54825){
return (function (seq54792){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54792));
});})(g__27546__auto___54825))
;


var g__27546__auto___54829 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_elements)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27546__auto___54829){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54830 = arguments.length;
var i__7297__auto___54831 = (0);
while(true){
if((i__7297__auto___54831 < len__7296__auto___54830)){
args__7303__auto__.push((arguments[i__7297__auto___54831]));

var G__54832 = (i__7297__auto___54831 + (1));
i__7297__auto___54831 = G__54832;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54829))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54829){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54829) : cljs.core.deref.call(null,g__27546__auto___54829)),args);
});})(g__27546__auto___54829))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27546__auto___54829){
return (function (seq54793){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54793));
});})(g__27546__auto___54829))
;


var g__27546__auto___54833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_bind)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27546__auto___54833){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54834 = arguments.length;
var i__7297__auto___54835 = (0);
while(true){
if((i__7297__auto___54835 < len__7296__auto___54834)){
args__7303__auto__.push((arguments[i__7297__auto___54835]));

var G__54836 = (i__7297__auto___54835 + (1));
i__7297__auto___54835 = G__54836;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54833))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54833){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54833) : cljs.core.deref.call(null,g__27546__auto___54833)),args);
});})(g__27546__auto___54833))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27546__auto___54833){
return (function (seq54794){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54794));
});})(g__27546__auto___54833))
;


var g__27546__auto___54837 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_choose)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27546__auto___54837){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54838 = arguments.length;
var i__7297__auto___54839 = (0);
while(true){
if((i__7297__auto___54839 < len__7296__auto___54838)){
args__7303__auto__.push((arguments[i__7297__auto___54839]));

var G__54840 = (i__7297__auto___54839 + (1));
i__7297__auto___54839 = G__54840;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54837))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54837){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54837) : cljs.core.deref.call(null,g__27546__auto___54837)),args);
});})(g__27546__auto___54837))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27546__auto___54837){
return (function (seq54795){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54795));
});})(g__27546__auto___54837))
;


var g__27546__auto___54841 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_one_DASH_of)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27546__auto___54841){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54842 = arguments.length;
var i__7297__auto___54843 = (0);
while(true){
if((i__7297__auto___54843 < len__7296__auto___54842)){
args__7303__auto__.push((arguments[i__7297__auto___54843]));

var G__54844 = (i__7297__auto___54843 + (1));
i__7297__auto___54843 = G__54844;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54841))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54841){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54841) : cljs.core.deref.call(null,g__27546__auto___54841)),args);
});})(g__27546__auto___54841))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27546__auto___54841){
return (function (seq54796){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54796));
});})(g__27546__auto___54841))
;


var g__27546__auto___54845 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_such_DASH_that)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27546__auto___54845){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54846 = arguments.length;
var i__7297__auto___54847 = (0);
while(true){
if((i__7297__auto___54847 < len__7296__auto___54846)){
args__7303__auto__.push((arguments[i__7297__auto___54847]));

var G__54848 = (i__7297__auto___54847 + (1));
i__7297__auto___54847 = G__54848;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54845))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54845){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54845) : cljs.core.deref.call(null,g__27546__auto___54845)),args);
});})(g__27546__auto___54845))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27546__auto___54845){
return (function (seq54797){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54797));
});})(g__27546__auto___54845))
;


var g__27546__auto___54849 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_tuple)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27546__auto___54849){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54850 = arguments.length;
var i__7297__auto___54851 = (0);
while(true){
if((i__7297__auto___54851 < len__7296__auto___54850)){
args__7303__auto__.push((arguments[i__7297__auto___54851]));

var G__54852 = (i__7297__auto___54851 + (1));
i__7297__auto___54851 = G__54852;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54849))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54849){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54849) : cljs.core.deref.call(null,g__27546__auto___54849)),args);
});})(g__27546__auto___54849))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27546__auto___54849){
return (function (seq54798){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54798));
});})(g__27546__auto___54849))
;


var g__27546__auto___54853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_sample)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27546__auto___54853){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54854 = arguments.length;
var i__7297__auto___54855 = (0);
while(true){
if((i__7297__auto___54855 < len__7296__auto___54854)){
args__7303__auto__.push((arguments[i__7297__auto___54855]));

var G__54856 = (i__7297__auto___54855 + (1));
i__7297__auto___54855 = G__54856;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54853))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54853){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54853) : cljs.core.deref.call(null,g__27546__auto___54853)),args);
});})(g__27546__auto___54853))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27546__auto___54853){
return (function (seq54799){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54799));
});})(g__27546__auto___54853))
;


var g__27546__auto___54857 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_return)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27546__auto___54857){
return (function cljs$spec$impl$gen$return(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54858 = arguments.length;
var i__7297__auto___54859 = (0);
while(true){
if((i__7297__auto___54859 < len__7296__auto___54858)){
args__7303__auto__.push((arguments[i__7297__auto___54859]));

var G__54860 = (i__7297__auto___54859 + (1));
i__7297__auto___54859 = G__54860;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27546__auto___54857))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27546__auto___54857){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27546__auto___54857) : cljs.core.deref.call(null,g__27546__auto___54857)),args);
});})(g__27546__auto___54857))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27546__auto___54857){
return (function (seq54800){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54800));
});})(g__27546__auto___54857))
;

var g__27559__auto___54882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27559__auto___54882){
return (function cljs$spec$impl$gen$any(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54883 = arguments.length;
var i__7297__auto___54884 = (0);
while(true){
if((i__7297__auto___54884 < len__7296__auto___54883)){
args__7303__auto__.push((arguments[i__7297__auto___54884]));

var G__54885 = (i__7297__auto___54884 + (1));
i__7297__auto___54884 = G__54885;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54882))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54882){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54882) : cljs.core.deref.call(null,g__27559__auto___54882));
});})(g__27559__auto___54882))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27559__auto___54882){
return (function (seq54861){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54861));
});})(g__27559__auto___54882))
;


var g__27559__auto___54886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_any_DASH_printable)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27559__auto___54886){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54887 = arguments.length;
var i__7297__auto___54888 = (0);
while(true){
if((i__7297__auto___54888 < len__7296__auto___54887)){
args__7303__auto__.push((arguments[i__7297__auto___54888]));

var G__54889 = (i__7297__auto___54888 + (1));
i__7297__auto___54888 = G__54889;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54886))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54886){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54886) : cljs.core.deref.call(null,g__27559__auto___54886));
});})(g__27559__auto___54886))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27559__auto___54886){
return (function (seq54862){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54862));
});})(g__27559__auto___54886))
;


var g__27559__auto___54890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_boolean)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27559__auto___54890){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54891 = arguments.length;
var i__7297__auto___54892 = (0);
while(true){
if((i__7297__auto___54892 < len__7296__auto___54891)){
args__7303__auto__.push((arguments[i__7297__auto___54892]));

var G__54893 = (i__7297__auto___54892 + (1));
i__7297__auto___54892 = G__54893;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54890))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54890){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54890) : cljs.core.deref.call(null,g__27559__auto___54890));
});})(g__27559__auto___54890))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27559__auto___54890){
return (function (seq54863){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54863));
});})(g__27559__auto___54890))
;


var g__27559__auto___54894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27559__auto___54894){
return (function cljs$spec$impl$gen$char(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54895 = arguments.length;
var i__7297__auto___54896 = (0);
while(true){
if((i__7297__auto___54896 < len__7296__auto___54895)){
args__7303__auto__.push((arguments[i__7297__auto___54896]));

var G__54897 = (i__7297__auto___54896 + (1));
i__7297__auto___54896 = G__54897;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54894))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54894){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54894) : cljs.core.deref.call(null,g__27559__auto___54894));
});})(g__27559__auto___54894))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27559__auto___54894){
return (function (seq54864){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54864));
});})(g__27559__auto___54894))
;


var g__27559__auto___54898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alpha)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27559__auto___54898){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54899 = arguments.length;
var i__7297__auto___54900 = (0);
while(true){
if((i__7297__auto___54900 < len__7296__auto___54899)){
args__7303__auto__.push((arguments[i__7297__auto___54900]));

var G__54901 = (i__7297__auto___54900 + (1));
i__7297__auto___54900 = G__54901;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54898))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54898){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54898) : cljs.core.deref.call(null,g__27559__auto___54898));
});})(g__27559__auto___54898))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27559__auto___54898){
return (function (seq54865){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54865));
});})(g__27559__auto___54898))
;


var g__27559__auto___54902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_alphanumeric)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27559__auto___54902){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54903 = arguments.length;
var i__7297__auto___54904 = (0);
while(true){
if((i__7297__auto___54904 < len__7296__auto___54903)){
args__7303__auto__.push((arguments[i__7297__auto___54904]));

var G__54905 = (i__7297__auto___54904 + (1));
i__7297__auto___54904 = G__54905;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54902))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54902){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54902) : cljs.core.deref.call(null,g__27559__auto___54902));
});})(g__27559__auto___54902))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27559__auto___54902){
return (function (seq54866){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54866));
});})(g__27559__auto___54902))
;


var g__27559__auto___54906 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_char_DASH_ascii)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27559__auto___54906){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54907 = arguments.length;
var i__7297__auto___54908 = (0);
while(true){
if((i__7297__auto___54908 < len__7296__auto___54907)){
args__7303__auto__.push((arguments[i__7297__auto___54908]));

var G__54909 = (i__7297__auto___54908 + (1));
i__7297__auto___54908 = G__54909;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54906))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54906){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54906) : cljs.core.deref.call(null,g__27559__auto___54906));
});})(g__27559__auto___54906))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27559__auto___54906){
return (function (seq54867){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54867));
});})(g__27559__auto___54906))
;


var g__27559__auto___54910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_double)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27559__auto___54910){
return (function cljs$spec$impl$gen$double(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54911 = arguments.length;
var i__7297__auto___54912 = (0);
while(true){
if((i__7297__auto___54912 < len__7296__auto___54911)){
args__7303__auto__.push((arguments[i__7297__auto___54912]));

var G__54913 = (i__7297__auto___54912 + (1));
i__7297__auto___54912 = G__54913;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54910))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54910){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54910) : cljs.core.deref.call(null,g__27559__auto___54910));
});})(g__27559__auto___54910))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27559__auto___54910){
return (function (seq54868){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54868));
});})(g__27559__auto___54910))
;


var g__27559__auto___54914 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_int)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27559__auto___54914){
return (function cljs$spec$impl$gen$int(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54915 = arguments.length;
var i__7297__auto___54916 = (0);
while(true){
if((i__7297__auto___54916 < len__7296__auto___54915)){
args__7303__auto__.push((arguments[i__7297__auto___54916]));

var G__54917 = (i__7297__auto___54916 + (1));
i__7297__auto___54916 = G__54917;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54914))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54914){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54914) : cljs.core.deref.call(null,g__27559__auto___54914));
});})(g__27559__auto___54914))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27559__auto___54914){
return (function (seq54869){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54869));
});})(g__27559__auto___54914))
;


var g__27559__auto___54918 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27559__auto___54918){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54919 = arguments.length;
var i__7297__auto___54920 = (0);
while(true){
if((i__7297__auto___54920 < len__7296__auto___54919)){
args__7303__auto__.push((arguments[i__7297__auto___54920]));

var G__54921 = (i__7297__auto___54920 + (1));
i__7297__auto___54920 = G__54921;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54918))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54918){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54918) : cljs.core.deref.call(null,g__27559__auto___54918));
});})(g__27559__auto___54918))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27559__auto___54918){
return (function (seq54870){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54870));
});})(g__27559__auto___54918))
;


var g__27559__auto___54922 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_keyword_DASH_ns)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27559__auto___54922){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54923 = arguments.length;
var i__7297__auto___54924 = (0);
while(true){
if((i__7297__auto___54924 < len__7296__auto___54923)){
args__7303__auto__.push((arguments[i__7297__auto___54924]));

var G__54925 = (i__7297__auto___54924 + (1));
i__7297__auto___54924 = G__54925;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54922))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54922){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54922) : cljs.core.deref.call(null,g__27559__auto___54922));
});})(g__27559__auto___54922))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27559__auto___54922){
return (function (seq54871){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54871));
});})(g__27559__auto___54922))
;


var g__27559__auto___54926 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_large_DASH_integer)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27559__auto___54926){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54927 = arguments.length;
var i__7297__auto___54928 = (0);
while(true){
if((i__7297__auto___54928 < len__7296__auto___54927)){
args__7303__auto__.push((arguments[i__7297__auto___54928]));

var G__54929 = (i__7297__auto___54928 + (1));
i__7297__auto___54928 = G__54929;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54926))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54926){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54926) : cljs.core.deref.call(null,g__27559__auto___54926));
});})(g__27559__auto___54926))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27559__auto___54926){
return (function (seq54872){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54872));
});})(g__27559__auto___54926))
;


var g__27559__auto___54930 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_ratio)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27559__auto___54930){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54931 = arguments.length;
var i__7297__auto___54932 = (0);
while(true){
if((i__7297__auto___54932 < len__7296__auto___54931)){
args__7303__auto__.push((arguments[i__7297__auto___54932]));

var G__54933 = (i__7297__auto___54932 + (1));
i__7297__auto___54932 = G__54933;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54930))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54930){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54930) : cljs.core.deref.call(null,g__27559__auto___54930));
});})(g__27559__auto___54930))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27559__auto___54930){
return (function (seq54873){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54873));
});})(g__27559__auto___54930))
;


var g__27559__auto___54934 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27559__auto___54934){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54935 = arguments.length;
var i__7297__auto___54936 = (0);
while(true){
if((i__7297__auto___54936 < len__7296__auto___54935)){
args__7303__auto__.push((arguments[i__7297__auto___54936]));

var G__54937 = (i__7297__auto___54936 + (1));
i__7297__auto___54936 = G__54937;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54934))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54934){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54934) : cljs.core.deref.call(null,g__27559__auto___54934));
});})(g__27559__auto___54934))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27559__auto___54934){
return (function (seq54874){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54874));
});})(g__27559__auto___54934))
;


var g__27559__auto___54938 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_simple_DASH_type_DASH_printable)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27559__auto___54938){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54939 = arguments.length;
var i__7297__auto___54940 = (0);
while(true){
if((i__7297__auto___54940 < len__7296__auto___54939)){
args__7303__auto__.push((arguments[i__7297__auto___54940]));

var G__54941 = (i__7297__auto___54940 + (1));
i__7297__auto___54940 = G__54941;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54938))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54938){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54938) : cljs.core.deref.call(null,g__27559__auto___54938));
});})(g__27559__auto___54938))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27559__auto___54938){
return (function (seq54875){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54875));
});})(g__27559__auto___54938))
;


var g__27559__auto___54942 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27559__auto___54942){
return (function cljs$spec$impl$gen$string(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54943 = arguments.length;
var i__7297__auto___54944 = (0);
while(true){
if((i__7297__auto___54944 < len__7296__auto___54943)){
args__7303__auto__.push((arguments[i__7297__auto___54944]));

var G__54945 = (i__7297__auto___54944 + (1));
i__7297__auto___54944 = G__54945;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54942))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54942){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54942) : cljs.core.deref.call(null,g__27559__auto___54942));
});})(g__27559__auto___54942))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27559__auto___54942){
return (function (seq54876){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54876));
});})(g__27559__auto___54942))
;


var g__27559__auto___54946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_ascii)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27559__auto___54946){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54947 = arguments.length;
var i__7297__auto___54948 = (0);
while(true){
if((i__7297__auto___54948 < len__7296__auto___54947)){
args__7303__auto__.push((arguments[i__7297__auto___54948]));

var G__54949 = (i__7297__auto___54948 + (1));
i__7297__auto___54948 = G__54949;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54946))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54946){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54946) : cljs.core.deref.call(null,g__27559__auto___54946));
});})(g__27559__auto___54946))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27559__auto___54946){
return (function (seq54877){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54877));
});})(g__27559__auto___54946))
;


var g__27559__auto___54950 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_string_DASH_alphanumeric)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27559__auto___54950){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54951 = arguments.length;
var i__7297__auto___54952 = (0);
while(true){
if((i__7297__auto___54952 < len__7296__auto___54951)){
args__7303__auto__.push((arguments[i__7297__auto___54952]));

var G__54953 = (i__7297__auto___54952 + (1));
i__7297__auto___54952 = G__54953;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54950))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54950){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54950) : cljs.core.deref.call(null,g__27559__auto___54950));
});})(g__27559__auto___54950))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27559__auto___54950){
return (function (seq54878){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54878));
});})(g__27559__auto___54950))
;


var g__27559__auto___54954 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27559__auto___54954){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54955 = arguments.length;
var i__7297__auto___54956 = (0);
while(true){
if((i__7297__auto___54956 < len__7296__auto___54955)){
args__7303__auto__.push((arguments[i__7297__auto___54956]));

var G__54957 = (i__7297__auto___54956 + (1));
i__7297__auto___54956 = G__54957;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54954))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54954){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54954) : cljs.core.deref.call(null,g__27559__auto___54954));
});})(g__27559__auto___54954))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27559__auto___54954){
return (function (seq54879){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54879));
});})(g__27559__auto___54954))
;


var g__27559__auto___54958 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_symbol_DASH_ns)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27559__auto___54958){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54959 = arguments.length;
var i__7297__auto___54960 = (0);
while(true){
if((i__7297__auto___54960 < len__7296__auto___54959)){
args__7303__auto__.push((arguments[i__7297__auto___54960]));

var G__54961 = (i__7297__auto___54960 + (1));
i__7297__auto___54960 = G__54961;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54958))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54958){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54958) : cljs.core.deref.call(null,g__27559__auto___54958));
});})(g__27559__auto___54958))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27559__auto___54958){
return (function (seq54880){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54880));
});})(g__27559__auto___54958))
;


var g__27559__auto___54962 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace(cljs.core.cst$sym$clojure$test$check$generators_SLASH_uuid)),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27559__auto___54962){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54963 = arguments.length;
var i__7297__auto___54964 = (0);
while(true){
if((i__7297__auto___54964 < len__7296__auto___54963)){
args__7303__auto__.push((arguments[i__7297__auto___54964]));

var G__54965 = (i__7297__auto___54964 + (1));
i__7297__auto___54964 = G__54965;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});})(g__27559__auto___54962))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27559__auto___54962){
return (function (args){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(g__27559__auto___54962) : cljs.core.deref.call(null,g__27559__auto___54962));
});})(g__27559__auto___54962))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27559__auto___54962){
return (function (seq54881){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54881));
});})(g__27559__auto___54962))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7303__auto__ = [];
var len__7296__auto___54968 = arguments.length;
var i__7297__auto___54969 = (0);
while(true){
if((i__7297__auto___54969 < len__7296__auto___54968)){
args__7303__auto__.push((arguments[i__7297__auto___54969]));

var G__54970 = (i__7297__auto___54969 + (1));
i__7297__auto___54969 = G__54970;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (p1__54966_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__54966_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gens)], 0));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq54967){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54967));
});

cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable();
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.char$(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)], 0)),cljs.spec.impl.gen.string_alphanumeric(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0)),cljs.spec.impl.gen.keyword_ns(),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0)], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([true], 0)),cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer(),cljs.spec.impl.gen.double$()], null)], 0)),cljs.spec.impl.gen.symbol_ns(),cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple,simple], 0)),cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0)),cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([simple], 0))], null)], 0))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_(pred)){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred], 0));
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.impl.gen.gen_builtins) : cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins)),pred);
}
});
