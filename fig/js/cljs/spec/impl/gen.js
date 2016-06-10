// Compiled by ClojureScript 1.9.36 {}
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
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29768 = arguments.length;
var i__23691__auto___29769 = (0);
while(true){
if((i__23691__auto___29769 < len__23690__auto___29768)){
args__23697__auto__.push((arguments[i__23691__auto___29769]));

var G__29770 = (i__23691__auto___29769 + (1));
i__23691__auto___29769 = G__29770;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq29767){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29767));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29772 = arguments.length;
var i__23691__auto___29773 = (0);
while(true){
if((i__23691__auto___29773 < len__23690__auto___29772)){
args__23697__auto__.push((arguments[i__23691__auto___29773]));

var G__29774 = (i__23691__auto___29773 + (1));
i__23691__auto___29773 = G__29774;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq29771){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29771));
});

var g_QMARK__29775 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_29776 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29775){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29775))
,null));
var mkg_29777 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29775,g_29776){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29775,g_29776))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__29775,g_29776,mkg_29777){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29775).call(null,x);
});})(g_QMARK__29775,g_29776,mkg_29777))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__29775,g_29776,mkg_29777){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_29777).call(null,gfn);
});})(g_QMARK__29775,g_29776,mkg_29777))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__29775,g_29776,mkg_29777){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_29776).call(null,generator);
});})(g_QMARK__29775,g_29776,mkg_29777))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29739__auto___29793 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29739__auto___29793){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29794 = arguments.length;
var i__23691__auto___29795 = (0);
while(true){
if((i__23691__auto___29795 < len__23690__auto___29794)){
args__23697__auto__.push((arguments[i__23691__auto___29795]));

var G__29796 = (i__23691__auto___29795 + (1));
i__23691__auto___29795 = G__29796;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29793))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29793){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29793),args);
});})(g__29739__auto___29793))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29739__auto___29793){
return (function (seq29778){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29778));
});})(g__29739__auto___29793))
;


var g__29739__auto___29797 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29739__auto___29797){
return (function cljs$spec$impl$gen$list(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29798 = arguments.length;
var i__23691__auto___29799 = (0);
while(true){
if((i__23691__auto___29799 < len__23690__auto___29798)){
args__23697__auto__.push((arguments[i__23691__auto___29799]));

var G__29800 = (i__23691__auto___29799 + (1));
i__23691__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29797))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29797){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29797),args);
});})(g__29739__auto___29797))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29739__auto___29797){
return (function (seq29779){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29779));
});})(g__29739__auto___29797))
;


var g__29739__auto___29801 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29739__auto___29801){
return (function cljs$spec$impl$gen$map(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29802 = arguments.length;
var i__23691__auto___29803 = (0);
while(true){
if((i__23691__auto___29803 < len__23690__auto___29802)){
args__23697__auto__.push((arguments[i__23691__auto___29803]));

var G__29804 = (i__23691__auto___29803 + (1));
i__23691__auto___29803 = G__29804;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29801))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29801){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29801),args);
});})(g__29739__auto___29801))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29739__auto___29801){
return (function (seq29780){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29780));
});})(g__29739__auto___29801))
;


var g__29739__auto___29805 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29739__auto___29805){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29806 = arguments.length;
var i__23691__auto___29807 = (0);
while(true){
if((i__23691__auto___29807 < len__23690__auto___29806)){
args__23697__auto__.push((arguments[i__23691__auto___29807]));

var G__29808 = (i__23691__auto___29807 + (1));
i__23691__auto___29807 = G__29808;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29805))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29805){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29805),args);
});})(g__29739__auto___29805))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29739__auto___29805){
return (function (seq29781){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29781));
});})(g__29739__auto___29805))
;


var g__29739__auto___29809 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29739__auto___29809){
return (function cljs$spec$impl$gen$set(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29810 = arguments.length;
var i__23691__auto___29811 = (0);
while(true){
if((i__23691__auto___29811 < len__23690__auto___29810)){
args__23697__auto__.push((arguments[i__23691__auto___29811]));

var G__29812 = (i__23691__auto___29811 + (1));
i__23691__auto___29811 = G__29812;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29809))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29809){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29809),args);
});})(g__29739__auto___29809))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29739__auto___29809){
return (function (seq29782){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29782));
});})(g__29739__auto___29809))
;


var g__29739__auto___29813 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29739__auto___29813){
return (function cljs$spec$impl$gen$vector(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29814 = arguments.length;
var i__23691__auto___29815 = (0);
while(true){
if((i__23691__auto___29815 < len__23690__auto___29814)){
args__23697__auto__.push((arguments[i__23691__auto___29815]));

var G__29816 = (i__23691__auto___29815 + (1));
i__23691__auto___29815 = G__29816;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29813))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29813){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29813),args);
});})(g__29739__auto___29813))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29739__auto___29813){
return (function (seq29783){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29783));
});})(g__29739__auto___29813))
;


var g__29739__auto___29817 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29739__auto___29817){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29818 = arguments.length;
var i__23691__auto___29819 = (0);
while(true){
if((i__23691__auto___29819 < len__23690__auto___29818)){
args__23697__auto__.push((arguments[i__23691__auto___29819]));

var G__29820 = (i__23691__auto___29819 + (1));
i__23691__auto___29819 = G__29820;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29817))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29817){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29817),args);
});})(g__29739__auto___29817))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29739__auto___29817){
return (function (seq29784){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29784));
});})(g__29739__auto___29817))
;


var g__29739__auto___29821 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29739__auto___29821){
return (function cljs$spec$impl$gen$elements(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29822 = arguments.length;
var i__23691__auto___29823 = (0);
while(true){
if((i__23691__auto___29823 < len__23690__auto___29822)){
args__23697__auto__.push((arguments[i__23691__auto___29823]));

var G__29824 = (i__23691__auto___29823 + (1));
i__23691__auto___29823 = G__29824;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29821))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29821){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29821),args);
});})(g__29739__auto___29821))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29739__auto___29821){
return (function (seq29785){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29785));
});})(g__29739__auto___29821))
;


var g__29739__auto___29825 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29739__auto___29825){
return (function cljs$spec$impl$gen$bind(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29826 = arguments.length;
var i__23691__auto___29827 = (0);
while(true){
if((i__23691__auto___29827 < len__23690__auto___29826)){
args__23697__auto__.push((arguments[i__23691__auto___29827]));

var G__29828 = (i__23691__auto___29827 + (1));
i__23691__auto___29827 = G__29828;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29825))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29825){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29825),args);
});})(g__29739__auto___29825))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29739__auto___29825){
return (function (seq29786){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29786));
});})(g__29739__auto___29825))
;


var g__29739__auto___29829 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29739__auto___29829){
return (function cljs$spec$impl$gen$choose(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29830 = arguments.length;
var i__23691__auto___29831 = (0);
while(true){
if((i__23691__auto___29831 < len__23690__auto___29830)){
args__23697__auto__.push((arguments[i__23691__auto___29831]));

var G__29832 = (i__23691__auto___29831 + (1));
i__23691__auto___29831 = G__29832;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29829))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29829){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29829),args);
});})(g__29739__auto___29829))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29739__auto___29829){
return (function (seq29787){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29787));
});})(g__29739__auto___29829))
;


var g__29739__auto___29833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29739__auto___29833){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29834 = arguments.length;
var i__23691__auto___29835 = (0);
while(true){
if((i__23691__auto___29835 < len__23690__auto___29834)){
args__23697__auto__.push((arguments[i__23691__auto___29835]));

var G__29836 = (i__23691__auto___29835 + (1));
i__23691__auto___29835 = G__29836;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29833))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29833){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29833),args);
});})(g__29739__auto___29833))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29739__auto___29833){
return (function (seq29788){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29788));
});})(g__29739__auto___29833))
;


var g__29739__auto___29837 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29739__auto___29837){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29838 = arguments.length;
var i__23691__auto___29839 = (0);
while(true){
if((i__23691__auto___29839 < len__23690__auto___29838)){
args__23697__auto__.push((arguments[i__23691__auto___29839]));

var G__29840 = (i__23691__auto___29839 + (1));
i__23691__auto___29839 = G__29840;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29837))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29837){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29837),args);
});})(g__29739__auto___29837))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29739__auto___29837){
return (function (seq29789){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29789));
});})(g__29739__auto___29837))
;


var g__29739__auto___29841 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29739__auto___29841){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29842 = arguments.length;
var i__23691__auto___29843 = (0);
while(true){
if((i__23691__auto___29843 < len__23690__auto___29842)){
args__23697__auto__.push((arguments[i__23691__auto___29843]));

var G__29844 = (i__23691__auto___29843 + (1));
i__23691__auto___29843 = G__29844;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29841))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29841){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29841),args);
});})(g__29739__auto___29841))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29739__auto___29841){
return (function (seq29790){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29790));
});})(g__29739__auto___29841))
;


var g__29739__auto___29845 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29739__auto___29845){
return (function cljs$spec$impl$gen$sample(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29846 = arguments.length;
var i__23691__auto___29847 = (0);
while(true){
if((i__23691__auto___29847 < len__23690__auto___29846)){
args__23697__auto__.push((arguments[i__23691__auto___29847]));

var G__29848 = (i__23691__auto___29847 + (1));
i__23691__auto___29847 = G__29848;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29845))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29845){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29845),args);
});})(g__29739__auto___29845))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29739__auto___29845){
return (function (seq29791){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29791));
});})(g__29739__auto___29845))
;


var g__29739__auto___29849 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29739__auto___29849){
return (function cljs$spec$impl$gen$return(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29850 = arguments.length;
var i__23691__auto___29851 = (0);
while(true){
if((i__23691__auto___29851 < len__23690__auto___29850)){
args__23697__auto__.push((arguments[i__23691__auto___29851]));

var G__29852 = (i__23691__auto___29851 + (1));
i__23691__auto___29851 = G__29852;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29739__auto___29849))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29739__auto___29849){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29739__auto___29849),args);
});})(g__29739__auto___29849))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29739__auto___29849){
return (function (seq29792){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29792));
});})(g__29739__auto___29849))
;

var g__29752__auto___29874 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29752__auto___29874){
return (function cljs$spec$impl$gen$any(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29875 = arguments.length;
var i__23691__auto___29876 = (0);
while(true){
if((i__23691__auto___29876 < len__23690__auto___29875)){
args__23697__auto__.push((arguments[i__23691__auto___29876]));

var G__29877 = (i__23691__auto___29876 + (1));
i__23691__auto___29876 = G__29877;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29874))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29874){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29874);
});})(g__29752__auto___29874))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29752__auto___29874){
return (function (seq29853){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29853));
});})(g__29752__auto___29874))
;


var g__29752__auto___29878 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29752__auto___29878){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29879 = arguments.length;
var i__23691__auto___29880 = (0);
while(true){
if((i__23691__auto___29880 < len__23690__auto___29879)){
args__23697__auto__.push((arguments[i__23691__auto___29880]));

var G__29881 = (i__23691__auto___29880 + (1));
i__23691__auto___29880 = G__29881;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29878))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29878){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29878);
});})(g__29752__auto___29878))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29752__auto___29878){
return (function (seq29854){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29854));
});})(g__29752__auto___29878))
;


var g__29752__auto___29882 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29752__auto___29882){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29883 = arguments.length;
var i__23691__auto___29884 = (0);
while(true){
if((i__23691__auto___29884 < len__23690__auto___29883)){
args__23697__auto__.push((arguments[i__23691__auto___29884]));

var G__29885 = (i__23691__auto___29884 + (1));
i__23691__auto___29884 = G__29885;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29882))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29882){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29882);
});})(g__29752__auto___29882))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29752__auto___29882){
return (function (seq29855){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29855));
});})(g__29752__auto___29882))
;


var g__29752__auto___29886 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29752__auto___29886){
return (function cljs$spec$impl$gen$char(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29887 = arguments.length;
var i__23691__auto___29888 = (0);
while(true){
if((i__23691__auto___29888 < len__23690__auto___29887)){
args__23697__auto__.push((arguments[i__23691__auto___29888]));

var G__29889 = (i__23691__auto___29888 + (1));
i__23691__auto___29888 = G__29889;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29886))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29886){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29886);
});})(g__29752__auto___29886))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29752__auto___29886){
return (function (seq29856){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29856));
});})(g__29752__auto___29886))
;


var g__29752__auto___29890 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29752__auto___29890){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29891 = arguments.length;
var i__23691__auto___29892 = (0);
while(true){
if((i__23691__auto___29892 < len__23690__auto___29891)){
args__23697__auto__.push((arguments[i__23691__auto___29892]));

var G__29893 = (i__23691__auto___29892 + (1));
i__23691__auto___29892 = G__29893;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29890))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29890){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29890);
});})(g__29752__auto___29890))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29752__auto___29890){
return (function (seq29857){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29857));
});})(g__29752__auto___29890))
;


var g__29752__auto___29894 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29752__auto___29894){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29895 = arguments.length;
var i__23691__auto___29896 = (0);
while(true){
if((i__23691__auto___29896 < len__23690__auto___29895)){
args__23697__auto__.push((arguments[i__23691__auto___29896]));

var G__29897 = (i__23691__auto___29896 + (1));
i__23691__auto___29896 = G__29897;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29894))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29894){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29894);
});})(g__29752__auto___29894))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29752__auto___29894){
return (function (seq29858){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29858));
});})(g__29752__auto___29894))
;


var g__29752__auto___29898 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29752__auto___29898){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29899 = arguments.length;
var i__23691__auto___29900 = (0);
while(true){
if((i__23691__auto___29900 < len__23690__auto___29899)){
args__23697__auto__.push((arguments[i__23691__auto___29900]));

var G__29901 = (i__23691__auto___29900 + (1));
i__23691__auto___29900 = G__29901;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29898))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29898){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29898);
});})(g__29752__auto___29898))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29752__auto___29898){
return (function (seq29859){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29859));
});})(g__29752__auto___29898))
;


var g__29752__auto___29902 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29752__auto___29902){
return (function cljs$spec$impl$gen$double(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29903 = arguments.length;
var i__23691__auto___29904 = (0);
while(true){
if((i__23691__auto___29904 < len__23690__auto___29903)){
args__23697__auto__.push((arguments[i__23691__auto___29904]));

var G__29905 = (i__23691__auto___29904 + (1));
i__23691__auto___29904 = G__29905;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29902))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29902){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29902);
});})(g__29752__auto___29902))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29752__auto___29902){
return (function (seq29860){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29860));
});})(g__29752__auto___29902))
;


var g__29752__auto___29906 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29752__auto___29906){
return (function cljs$spec$impl$gen$int(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29907 = arguments.length;
var i__23691__auto___29908 = (0);
while(true){
if((i__23691__auto___29908 < len__23690__auto___29907)){
args__23697__auto__.push((arguments[i__23691__auto___29908]));

var G__29909 = (i__23691__auto___29908 + (1));
i__23691__auto___29908 = G__29909;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29906))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29906){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29906);
});})(g__29752__auto___29906))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29752__auto___29906){
return (function (seq29861){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29861));
});})(g__29752__auto___29906))
;


var g__29752__auto___29910 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29752__auto___29910){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29911 = arguments.length;
var i__23691__auto___29912 = (0);
while(true){
if((i__23691__auto___29912 < len__23690__auto___29911)){
args__23697__auto__.push((arguments[i__23691__auto___29912]));

var G__29913 = (i__23691__auto___29912 + (1));
i__23691__auto___29912 = G__29913;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29910))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29910){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29910);
});})(g__29752__auto___29910))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29752__auto___29910){
return (function (seq29862){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29862));
});})(g__29752__auto___29910))
;


var g__29752__auto___29914 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29752__auto___29914){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29915 = arguments.length;
var i__23691__auto___29916 = (0);
while(true){
if((i__23691__auto___29916 < len__23690__auto___29915)){
args__23697__auto__.push((arguments[i__23691__auto___29916]));

var G__29917 = (i__23691__auto___29916 + (1));
i__23691__auto___29916 = G__29917;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29914))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29914){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29914);
});})(g__29752__auto___29914))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29752__auto___29914){
return (function (seq29863){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29863));
});})(g__29752__auto___29914))
;


var g__29752__auto___29918 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29752__auto___29918){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29919 = arguments.length;
var i__23691__auto___29920 = (0);
while(true){
if((i__23691__auto___29920 < len__23690__auto___29919)){
args__23697__auto__.push((arguments[i__23691__auto___29920]));

var G__29921 = (i__23691__auto___29920 + (1));
i__23691__auto___29920 = G__29921;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29918))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29918){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29918);
});})(g__29752__auto___29918))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29752__auto___29918){
return (function (seq29864){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29864));
});})(g__29752__auto___29918))
;


var g__29752__auto___29922 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29752__auto___29922){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29923 = arguments.length;
var i__23691__auto___29924 = (0);
while(true){
if((i__23691__auto___29924 < len__23690__auto___29923)){
args__23697__auto__.push((arguments[i__23691__auto___29924]));

var G__29925 = (i__23691__auto___29924 + (1));
i__23691__auto___29924 = G__29925;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29922))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29922){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29922);
});})(g__29752__auto___29922))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29752__auto___29922){
return (function (seq29865){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29865));
});})(g__29752__auto___29922))
;


var g__29752__auto___29926 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29752__auto___29926){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29927 = arguments.length;
var i__23691__auto___29928 = (0);
while(true){
if((i__23691__auto___29928 < len__23690__auto___29927)){
args__23697__auto__.push((arguments[i__23691__auto___29928]));

var G__29929 = (i__23691__auto___29928 + (1));
i__23691__auto___29928 = G__29929;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29926))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29926){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29926);
});})(g__29752__auto___29926))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29752__auto___29926){
return (function (seq29866){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29866));
});})(g__29752__auto___29926))
;


var g__29752__auto___29930 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29752__auto___29930){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29931 = arguments.length;
var i__23691__auto___29932 = (0);
while(true){
if((i__23691__auto___29932 < len__23690__auto___29931)){
args__23697__auto__.push((arguments[i__23691__auto___29932]));

var G__29933 = (i__23691__auto___29932 + (1));
i__23691__auto___29932 = G__29933;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29930))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29930){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29930);
});})(g__29752__auto___29930))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29752__auto___29930){
return (function (seq29867){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29867));
});})(g__29752__auto___29930))
;


var g__29752__auto___29934 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29752__auto___29934){
return (function cljs$spec$impl$gen$string(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29935 = arguments.length;
var i__23691__auto___29936 = (0);
while(true){
if((i__23691__auto___29936 < len__23690__auto___29935)){
args__23697__auto__.push((arguments[i__23691__auto___29936]));

var G__29937 = (i__23691__auto___29936 + (1));
i__23691__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29934))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29934){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29934);
});})(g__29752__auto___29934))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29752__auto___29934){
return (function (seq29868){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29868));
});})(g__29752__auto___29934))
;


var g__29752__auto___29938 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29752__auto___29938){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29939 = arguments.length;
var i__23691__auto___29940 = (0);
while(true){
if((i__23691__auto___29940 < len__23690__auto___29939)){
args__23697__auto__.push((arguments[i__23691__auto___29940]));

var G__29941 = (i__23691__auto___29940 + (1));
i__23691__auto___29940 = G__29941;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29938))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29938){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29938);
});})(g__29752__auto___29938))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29752__auto___29938){
return (function (seq29869){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29869));
});})(g__29752__auto___29938))
;


var g__29752__auto___29942 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29752__auto___29942){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29943 = arguments.length;
var i__23691__auto___29944 = (0);
while(true){
if((i__23691__auto___29944 < len__23690__auto___29943)){
args__23697__auto__.push((arguments[i__23691__auto___29944]));

var G__29945 = (i__23691__auto___29944 + (1));
i__23691__auto___29944 = G__29945;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29942))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29942){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29942);
});})(g__29752__auto___29942))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29752__auto___29942){
return (function (seq29870){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29870));
});})(g__29752__auto___29942))
;


var g__29752__auto___29946 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29752__auto___29946){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29947 = arguments.length;
var i__23691__auto___29948 = (0);
while(true){
if((i__23691__auto___29948 < len__23690__auto___29947)){
args__23697__auto__.push((arguments[i__23691__auto___29948]));

var G__29949 = (i__23691__auto___29948 + (1));
i__23691__auto___29948 = G__29949;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29946))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29946){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29946);
});})(g__29752__auto___29946))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29752__auto___29946){
return (function (seq29871){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29871));
});})(g__29752__auto___29946))
;


var g__29752__auto___29950 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29752__auto___29950){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29951 = arguments.length;
var i__23691__auto___29952 = (0);
while(true){
if((i__23691__auto___29952 < len__23690__auto___29951)){
args__23697__auto__.push((arguments[i__23691__auto___29952]));

var G__29953 = (i__23691__auto___29952 + (1));
i__23691__auto___29952 = G__29953;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29950))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29950){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29950);
});})(g__29752__auto___29950))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29752__auto___29950){
return (function (seq29872){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29872));
});})(g__29752__auto___29950))
;


var g__29752__auto___29954 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29752__auto___29954){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29955 = arguments.length;
var i__23691__auto___29956 = (0);
while(true){
if((i__23691__auto___29956 < len__23690__auto___29955)){
args__23697__auto__.push((arguments[i__23691__auto___29956]));

var G__29957 = (i__23691__auto___29956 + (1));
i__23691__auto___29956 = G__29957;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});})(g__29752__auto___29954))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29752__auto___29954){
return (function (args){
return cljs.core.deref.call(null,g__29752__auto___29954);
});})(g__29752__auto___29954))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29752__auto___29954){
return (function (seq29873){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29873));
});})(g__29752__auto___29954))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__23697__auto__ = [];
var len__23690__auto___29960 = arguments.length;
var i__23691__auto___29961 = (0);
while(true){
if((i__23691__auto___29961 < len__23690__auto___29960)){
args__23697__auto__.push((arguments[i__23691__auto___29961]));

var G__29962 = (i__23691__auto___29961 + (1));
i__23691__auto___29961 = G__29962;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__29958_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__29958_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq29959){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29959));
});

cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.zero_QMARK_,cljs.core.nil_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1465451156616