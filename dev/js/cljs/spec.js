// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'coll'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (100);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__6885__auto__.call(null,spec,x));
} else {
var m__6885__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__6885__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$5 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__6885__auto__.call(null,spec,path,via,in$,x));
} else {
var m__6885__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__6885__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__6885__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__6885__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__6885__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__6885__auto__.call(null,spec,gfn));
} else {
var m__6885__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__6885__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__6885__auto__.call(null,spec));
} else {
var m__6885__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__6885__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = (function (){var G__28006 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28006) : cljs.core.atom.call(null,G__28006));
})();
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec_SLASH_name,name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return cljs.core.cst$kw$cljs$spec_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_(k))){
var reg = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec))){
var G__28011 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__28011;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name(spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__6209__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__6209__auto__){
return x;
} else {
return and__6209__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__6209__auto__ = cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__6209__auto__)){
return x;
} else {
return and__6209__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__6221__auto__ = cljs.spec.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.spec.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = (function (){var and__6209__auto__ = cljs.spec.named_QMARK_(spec_or_k);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.spec.reg_resolve(spec_or_k);
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$2)){
return or__6221__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_(s))){
return cljs.spec.with_name((cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.regex_spec_impl.call(null,s,null)),cljs.spec.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__6221__auto__ = cljs.spec.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__6221__auto__ = cljs.spec.the_spec(s);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$cljs$spec_SLASH_unknown,s,null,null) : cljs.spec.spec_impl.call(null,cljs.core.cst$kw$cljs$spec_SLASH_unknown,s,null,null));
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_(cljs.spec.specize(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_(cljs.spec.specize(spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__6209__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__6209__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__6209__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = (form instanceof cljs.core.Symbol);
if(and__6209__auto__){
return cljs.core.namespace(form);
} else {
return and__6209__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev(cljs.spec.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_(cljs.spec.specize(spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_(cljs.spec.specize(spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name(spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28062_28108 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28063_28109 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28062_28108,_STAR_print_fn_STAR_28063_28109,sb__7207__auto__){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_28062_28108,_STAR_print_fn_STAR_28063_28109,sb__7207__auto__))
;

try{var seq__28064_28110 = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
var chunk__28065_28111 = null;
var count__28066_28112 = (0);
var i__28067_28113 = (0);
while(true){
if((i__28067_28113 < count__28066_28112)){
var vec__28068_28114 = chunk__28065_28111.cljs$core$IIndexed$_nth$arity$2(null,i__28067_28113);
var path_28115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28114,(0),null);
var map__28071_28116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28068_28114,(1),null);
var map__28071_28117__$1 = ((((!((map__28071_28116 == null)))?((((map__28071_28116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28071_28116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28071_28116):map__28071_28116);
var prob_28118 = map__28071_28117__$1;
var pred_28119 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071_28117__$1,cljs.core.cst$kw$pred);
var val_28120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071_28117__$1,cljs.core.cst$kw$val);
var reason_28121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071_28117__$1,cljs.core.cst$kw$reason);
var via_28122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071_28117__$1,cljs.core.cst$kw$via);
var in_28123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28071_28117__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_28123)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",in_28123,""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_28120], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_28122)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.last(via_28122)], 0));
}

if(cljs.core.empty_QMARK_(path_28115)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",path_28115], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred_28119], 0));

if(cljs.core.truth_(reason_28121)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_28121], 0));
} else {
}

var seq__28073_28124 = cljs.core.seq(prob_28118);
var chunk__28074_28125 = null;
var count__28075_28126 = (0);
var i__28076_28127 = (0);
while(true){
if((i__28076_28127 < count__28075_28126)){
var vec__28077_28128 = chunk__28074_28125.cljs$core$IIndexed$_nth$arity$2(null,i__28076_28127);
var k_28129 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077_28128,(0),null);
var v_28130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28077_28128,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_28129))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",k_28129," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_28130], 0));
}

var G__28131 = seq__28073_28124;
var G__28132 = chunk__28074_28125;
var G__28133 = count__28075_28126;
var G__28134 = (i__28076_28127 + (1));
seq__28073_28124 = G__28131;
chunk__28074_28125 = G__28132;
count__28075_28126 = G__28133;
i__28076_28127 = G__28134;
continue;
} else {
var temp__4657__auto___28135 = cljs.core.seq(seq__28073_28124);
if(temp__4657__auto___28135){
var seq__28073_28136__$1 = temp__4657__auto___28135;
if(cljs.core.chunked_seq_QMARK_(seq__28073_28136__$1)){
var c__7032__auto___28137 = cljs.core.chunk_first(seq__28073_28136__$1);
var G__28138 = cljs.core.chunk_rest(seq__28073_28136__$1);
var G__28139 = c__7032__auto___28137;
var G__28140 = cljs.core.count(c__7032__auto___28137);
var G__28141 = (0);
seq__28073_28124 = G__28138;
chunk__28074_28125 = G__28139;
count__28075_28126 = G__28140;
i__28076_28127 = G__28141;
continue;
} else {
var vec__28080_28142 = cljs.core.first(seq__28073_28136__$1);
var k_28143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28080_28142,(0),null);
var v_28144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28080_28142,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_28143))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",k_28143," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_28144], 0));
}

var G__28145 = cljs.core.next(seq__28073_28136__$1);
var G__28146 = null;
var G__28147 = (0);
var G__28148 = (0);
seq__28073_28124 = G__28145;
chunk__28074_28125 = G__28146;
count__28075_28126 = G__28147;
i__28076_28127 = G__28148;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__28149 = seq__28064_28110;
var G__28150 = chunk__28065_28111;
var G__28151 = count__28066_28112;
var G__28152 = (i__28067_28113 + (1));
seq__28064_28110 = G__28149;
chunk__28065_28111 = G__28150;
count__28066_28112 = G__28151;
i__28067_28113 = G__28152;
continue;
} else {
var temp__4657__auto___28153 = cljs.core.seq(seq__28064_28110);
if(temp__4657__auto___28153){
var seq__28064_28154__$1 = temp__4657__auto___28153;
if(cljs.core.chunked_seq_QMARK_(seq__28064_28154__$1)){
var c__7032__auto___28155 = cljs.core.chunk_first(seq__28064_28154__$1);
var G__28156 = cljs.core.chunk_rest(seq__28064_28154__$1);
var G__28157 = c__7032__auto___28155;
var G__28158 = cljs.core.count(c__7032__auto___28155);
var G__28159 = (0);
seq__28064_28110 = G__28156;
chunk__28065_28111 = G__28157;
count__28066_28112 = G__28158;
i__28067_28113 = G__28159;
continue;
} else {
var vec__28083_28160 = cljs.core.first(seq__28064_28154__$1);
var path_28161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28083_28160,(0),null);
var map__28086_28162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28083_28160,(1),null);
var map__28086_28163__$1 = ((((!((map__28086_28162 == null)))?((((map__28086_28162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28086_28162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28086_28162):map__28086_28162);
var prob_28164 = map__28086_28163__$1;
var pred_28165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28086_28163__$1,cljs.core.cst$kw$pred);
var val_28166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28086_28163__$1,cljs.core.cst$kw$val);
var reason_28167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28086_28163__$1,cljs.core.cst$kw$reason);
var via_28168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28086_28163__$1,cljs.core.cst$kw$via);
var in_28169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28086_28163__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_28169)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",in_28169,""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_28166], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_28168)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.last(via_28168)], 0));
}

if(cljs.core.empty_QMARK_(path_28161)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",path_28161], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pred_28165], 0));

if(cljs.core.truth_(reason_28167)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_28167], 0));
} else {
}

var seq__28088_28170 = cljs.core.seq(prob_28164);
var chunk__28089_28171 = null;
var count__28090_28172 = (0);
var i__28091_28173 = (0);
while(true){
if((i__28091_28173 < count__28090_28172)){
var vec__28092_28174 = chunk__28089_28171.cljs$core$IIndexed$_nth$arity$2(null,i__28091_28173);
var k_28175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28092_28174,(0),null);
var v_28176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28092_28174,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_28175))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",k_28175," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_28176], 0));
}

var G__28177 = seq__28088_28170;
var G__28178 = chunk__28089_28171;
var G__28179 = count__28090_28172;
var G__28180 = (i__28091_28173 + (1));
seq__28088_28170 = G__28177;
chunk__28089_28171 = G__28178;
count__28090_28172 = G__28179;
i__28091_28173 = G__28180;
continue;
} else {
var temp__4657__auto___28181__$1 = cljs.core.seq(seq__28088_28170);
if(temp__4657__auto___28181__$1){
var seq__28088_28182__$1 = temp__4657__auto___28181__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28088_28182__$1)){
var c__7032__auto___28183 = cljs.core.chunk_first(seq__28088_28182__$1);
var G__28184 = cljs.core.chunk_rest(seq__28088_28182__$1);
var G__28185 = c__7032__auto___28183;
var G__28186 = cljs.core.count(c__7032__auto___28183);
var G__28187 = (0);
seq__28088_28170 = G__28184;
chunk__28089_28171 = G__28185;
count__28090_28172 = G__28186;
i__28091_28173 = G__28187;
continue;
} else {
var vec__28095_28188 = cljs.core.first(seq__28088_28182__$1);
var k_28189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095_28188,(0),null);
var v_28190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28095_28188,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_28189))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",k_28189," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_28190], 0));
}

var G__28191 = cljs.core.next(seq__28088_28182__$1);
var G__28192 = null;
var G__28193 = (0);
var G__28194 = (0);
seq__28088_28170 = G__28191;
chunk__28089_28171 = G__28192;
count__28090_28172 = G__28193;
i__28091_28173 = G__28194;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__28195 = cljs.core.next(seq__28064_28154__$1);
var G__28196 = null;
var G__28197 = (0);
var G__28198 = (0);
seq__28064_28110 = G__28195;
chunk__28065_28111 = G__28196;
count__28066_28112 = G__28197;
i__28067_28113 = G__28198;
continue;
}
} else {
}
}
break;
}

var seq__28098_28199 = cljs.core.seq(ed);
var chunk__28099_28200 = null;
var count__28100_28201 = (0);
var i__28101_28202 = (0);
while(true){
if((i__28101_28202 < count__28100_28201)){
var vec__28102_28203 = chunk__28099_28200.cljs$core$IIndexed$_nth$arity$2(null,i__28101_28202);
var k_28204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102_28203,(0),null);
var v_28205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28102_28203,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_28204))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_28204," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_28205], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__28206 = seq__28098_28199;
var G__28207 = chunk__28099_28200;
var G__28208 = count__28100_28201;
var G__28209 = (i__28101_28202 + (1));
seq__28098_28199 = G__28206;
chunk__28099_28200 = G__28207;
count__28100_28201 = G__28208;
i__28101_28202 = G__28209;
continue;
} else {
var temp__4657__auto___28210 = cljs.core.seq(seq__28098_28199);
if(temp__4657__auto___28210){
var seq__28098_28211__$1 = temp__4657__auto___28210;
if(cljs.core.chunked_seq_QMARK_(seq__28098_28211__$1)){
var c__7032__auto___28212 = cljs.core.chunk_first(seq__28098_28211__$1);
var G__28213 = cljs.core.chunk_rest(seq__28098_28211__$1);
var G__28214 = c__7032__auto___28212;
var G__28215 = cljs.core.count(c__7032__auto___28212);
var G__28216 = (0);
seq__28098_28199 = G__28213;
chunk__28099_28200 = G__28214;
count__28100_28201 = G__28215;
i__28101_28202 = G__28216;
continue;
} else {
var vec__28105_28217 = cljs.core.first(seq__28098_28211__$1);
var k_28218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28105_28217,(0),null);
var v_28219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28105_28217,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_28218))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_28218," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_28219], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__28220 = cljs.core.next(seq__28098_28211__$1);
var G__28221 = null;
var G__28222 = (0);
var G__28223 = (0);
seq__28098_28199 = G__28220;
chunk__28099_28200 = G__28221;
count__28100_28201 = G__28222;
i__28101_28202 = G__28223;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28063_28109;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28062_28108;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Success!"], 0));
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out(cljs.spec.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28226_28228 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28227_28229 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28226_28228,_STAR_print_fn_STAR_28227_28229,sb__7207__auto__){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_28226_28228,_STAR_print_fn_STAR_28227_28229,sb__7207__auto__))
;

try{cljs.spec.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28227_28229;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28226_28228;
}
return [cljs.core.str(sb__7207__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize(spec);
var temp__4655__auto__ = (function (){var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.spec.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4655__auto__,spec__$1){
return (function (p1__28230_SHARP_){
return (cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__28230_SHARP_) : cljs.spec.valid_QMARK_.call(null,spec__$1,p1__28230_SHARP_));
});})(g,temp__4655__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map paths (vectors of keywords) to generators. These will be
 *   used instead of the generators at those paths. Note that parent
 *   generator (in the spec or overrides map) will supersede those of any
 *   subtrees. A generator for a regex op must always return a
 *   sequential collection (i.e. a generator for s/? should return either
 *   an empty sequence/vector or a sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args28231 = [];
var len__7296__auto___28234 = arguments.length;
var i__7297__auto___28235 = (0);
while(true){
if((i__7297__auto___28235 < len__7296__auto___28234)){
args28231.push((arguments[i__7297__auto___28235]));

var G__28236 = (i__7297__auto___28235 + (1));
i__7297__auto___28235 = G__28236;
continue;
} else {
}
break;
}

var G__28233 = args28231.length;
switch (G__28233) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28231.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit,cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.spec.named_QMARK_(k);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.namespace(k);
} else {
return and__6209__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword/symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__6221__auto__ = cljs.spec.spec_QMARK_(spec);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.spec.regex_QMARK_(spec);
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref)),spec);
}
}
})())?spec:(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map
 */
cljs.spec.registry = (function cljs$spec$registry(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
});
cljs.spec.fn_spec_roles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null);
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Fn-specs must include at least :args or :ret specs.
 */
cljs.spec.fn_specs_QMARK_ = (function cljs$spec$fn_specs_QMARK_(m){
var or__6221__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.fn_spec_sym = (function cljs$spec$fn_spec_sym(sym,role){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sym),cljs.core.str("$"),cljs.core.str(cljs.core.name(role))].join(''));
});
/**
 * Returns :args/:ret/:fn map of specs for var or symbol v.
 */
cljs.spec.fn_specs = (function cljs$spec$fn_specs(v){
var s = cljs.spec.__GT_sym(v);
var reg = cljs.spec.registry();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s,reg){
return (function (m,role){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,role,cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,cljs.spec.fn_spec_sym(s,role)));
});})(s,reg))
,cljs.core.PersistentArrayMap.EMPTY,cljs.spec.fn_spec_roles);
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform(spec,data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,conformed)){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),cljs.core.cst$kw$cljs$spec_SLASH_args,args);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Call to "),cljs.core.str(v__$1),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28243_28248 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28244_28249 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28243_28248,_STAR_print_fn_STAR_28244_28249,sb__7207__auto__,ed,conformed){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_28243_28248,_STAR_print_fn_STAR_28244_28249,sb__7207__auto__,ed,conformed))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28244_28249;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28243_28248;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__28245 = ((function (conform_BANG_){
return (function() { 
var G__28250__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_28246 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.fn_specs(v);
var cargs = (cljs.core.truth_(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_(v,cljs.core.cst$kw$args,cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args,args):null);
var ret = (function (){var _STAR_instrument_enabled_STAR_28247 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_28247;
}})();
var cret = (cljs.core.truth_(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_(v,cljs.core.cst$kw$ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret,args):null);
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__6209__auto____$1)){
return cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
conform_BANG_(v,cljs.core.cst$kw$fn,cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null),args);
} else {
}

return ret;
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_28246;
}} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
};
var G__28250 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28251__i = 0, G__28251__a = new Array(arguments.length -  0);
while (G__28251__i < G__28251__a.length) {G__28251__a[G__28251__i] = arguments[G__28251__i + 0]; ++G__28251__i;}
  args = new cljs.core.IndexedSeq(G__28251__a,0);
} 
return G__28250__delegate.call(this,args);};
G__28250.cljs$lang$maxFixedArity = 0;
G__28250.cljs$lang$applyTo = (function (arglist__28252){
var args = cljs.core.seq(arglist__28252);
return G__28250__delegate(args);
});
G__28250.cljs$core$IFn$_invoke$arity$variadic = G__28250__delegate;
return G__28250;
})()
;})(conform_BANG_))
;
goog.object.extend(G__28245,f);

return G__28245;
});
cljs.spec.no_fn_specs = (function cljs$spec$no_fn_specs(v,specs){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Fn at "),cljs.core.str(v),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$var,v,cljs.core.cst$kw$specs,specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = (function (){var G__28253 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__28253) : cljs.core.atom.call(null,G__28253));
})();
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var specs = cljs.spec.fn_specs(v);
if(cljs.core.truth_(cljs.spec.fn_specs_QMARK_(specs))){
var map__28256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.instrumented_vars) : cljs.core.deref.call(null,cljs.spec.instrumented_vars)),v);
var map__28256__$1 = ((((!((map__28256 == null)))?((((map__28256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28256):map__28256);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28256__$1,cljs.core.cst$kw$raw);
var wrapped = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28256__$1,cljs.core.cst$kw$wrapped);
var current = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn(v,current);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$raw,current,cljs.core.cst$kw$wrapped,checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_specs(v,specs);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__4657__auto___28262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.instrumented_vars) : cljs.core.deref.call(null,cljs.spec.instrumented_vars)),v);
if(cljs.core.truth_(temp__4657__auto___28262)){
var map__28260_28263 = temp__4657__auto___28262;
var map__28260_28264__$1 = ((((!((map__28260_28263 == null)))?((((map__28260_28263.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28260_28263.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28260_28263):map__28260_28263);
var raw_28265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28260_28264__$1,cljs.core.cst$kw$raw);
var wrapped_28266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28260_28264__$1,cljs.core.cst$kw$wrapped);
var current_28267 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(v) : cljs.core.deref.call(null,v));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(wrapped_28266,current_28267)){
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.instrumented_vars,cljs.core.dissoc,v);
} else {
}

return v;
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args28268 = [];
var len__7296__auto___28271 = arguments.length;
var i__7297__auto___28272 = (0);
while(true){
if((i__7297__auto___28272 < len__7296__auto___28271)){
args28268.push((arguments[i__7297__auto___28272]));

var G__28273 = (i__7297__auto___28272 + (1));
i__7297__auto___28272 = G__28273;
continue;
} else {
}
break;
}

var G__28270 = args28268.length;
switch (G__28270) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28268.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec(pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0))),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args28275 = [];
var len__7296__auto___28278 = arguments.length;
var i__7297__auto___28279 = (0);
while(true){
if((i__7297__auto___28279 < len__7296__auto___28278)){
args28275.push((arguments[i__7297__auto___28279]));

var G__28280 = (i__7297__auto___28279 + (1));
i__7297__auto___28279 = G__28280;
continue;
} else {
}
break;
}

var G__28277 = args28275.length;
switch (G__28277) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28275.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,cljs.core.cst$kw$cljs$spec_SLASH_unknown));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred__$1))){
return cljs.spec.explain_STAR_(pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name(pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.spec.abbrev(form),cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__28284){
var map__28307 = p__28284;
var map__28307__$1 = ((((!((map__28307 == null)))?((((map__28307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28307):map__28307);
var argm = map__28307__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$pred_DASH_exprs);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28307__$1,cljs.core.cst$kw$pred_DASH_forms);
var keys_pred = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__28282_SHARP_){
var or__6221__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__28282_SHARP_) : k__GT_s.call(null,p1__28282_SHARP_));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p1__28282_SHARP_;
}
});})(keys_pred,k__GT_s,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.t_cljs$spec28309 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28309 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__28284,keys__GT_specs,req,map__28307,id,req_keys,opt_specs,k__GT_s,pred_forms,meta28310){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.p__28284 = p__28284;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.map__28307 = map__28307;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta28310 = meta28310;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_28311,meta28310__$1){
var self__ = this;
var _28311__$1 = this;
return (new cljs.spec.t_cljs$spec28309(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.p__28284,self__.keys__GT_specs,self__.req,self__.map__28307,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta28310__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_28311){
var self__ = this;
var _28311__$1 = this;
return self__.meta28310;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.call = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.apply = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,args28312){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28312)));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28309.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.registry();
var ret = m;
var G__28316 = cljs.core.keys(m);
var vec__28317 = G__28316;
var seq__28318 = cljs.core.seq(vec__28317);
var first__28319 = cljs.core.first(seq__28318);
var seq__28318__$1 = cljs.core.next(seq__28318);
var k = first__28319;
var ks = seq__28318__$1;
var keys = vec__28317;
var ret__$1 = ret;
var G__28316__$1 = G__28316;
while(true){
var ret__$2 = ret__$1;
var vec__28320 = G__28316__$1;
var seq__28321 = cljs.core.seq(vec__28320);
var first__28322 = cljs.core.first(seq__28321);
var seq__28321__$1 = cljs.core.next(seq__28321);
var k__$1 = first__28322;
var ks__$1 = seq__28321__$1;
var keys__$1 = vec__28320;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var cv = cljs.spec.conform((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)),v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cv,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__28329 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__28330 = ks__$1;
ret__$1 = G__28329;
G__28316__$1 = G__28330;
continue;
}
} else {
var G__28331 = ret__$2;
var G__28332 = ks__$1;
ret__$1 = G__28331;
G__28316__$1 = G__28332;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
var reg = cljs.spec.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,(function (){var temp__4657__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.abbrev(form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.vec(probs),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__28323){
var vec__28324 = p__28323;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28324,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28324,(1),null);
if(cljs.core.truth_((function (){var or__6221__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k))));
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__28283_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__28283_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__28327 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__28327) : self__.map_spec_impl.call(null,G__28327));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_keys,(function (){var G__28328 = cljs.core.PersistentVector.EMPTY;
var G__28328__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28328,cljs.core.cst$kw$req,cljs.core.array_seq([self__.req], 0)):G__28328);
var G__28328__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28328__$1,cljs.core.cst$kw$opt,cljs.core.array_seq([self__.opt], 0)):G__28328__$1);
var G__28328__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28328__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.array_seq([self__.req_un], 0)):G__28328__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__28328__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.array_seq([self__.opt_un], 0));
} else {
return G__28328__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$opt,cljs.core.with_meta(cljs.core.cst$sym$map_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$opt,cljs.core.cst$sym$gfn], null),cljs.core.cst$kw$as,cljs.core.cst$sym$argm], null)], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'spec' with a map argument"], null)),cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$p__28284,cljs.core.cst$sym$keys_DASH__GT_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$map__28307,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta28310], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec28309.cljs$lang$type = true;

cljs.spec.t_cljs$spec28309.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28309";

cljs.spec.t_cljs$spec28309.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28309");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec28309 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec28309(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__28284__$1,keys__GT_specs__$1,req__$1,map__28307__$2,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta28310){
return (new cljs.spec.t_cljs$spec28309(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,p__28284__$1,keys__GT_specs__$1,req__$1,map__28307__$2,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta28310));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__28307,map__28307__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec28309(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,p__28284,keys__GT_specs,req,map__28307__$1,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(form,pred,gfn,cpred_QMARK_){
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred))){
var G__28339 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__28339,gfn);
} else {
return G__28339;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(pred))){
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(pred))){
var G__28340 = cljs.spec.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__28340,gfn);
} else {
return G__28340;
}
} else {
if(typeof cljs.spec.t_cljs$spec28341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28341 = (function (spec_impl,form,pred,gfn,cpred_QMARK_,meta28342){
this.spec_impl = spec_impl;
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.meta28342 = meta28342;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28343,meta28342__$1){
var self__ = this;
var _28343__$1 = this;
return (new cljs.spec.t_cljs$spec28341(self__.spec_impl,self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,meta28342__$1));
});

cljs.spec.t_cljs$spec28341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28343){
var self__ = this;
var _28343__$1 = this;
return self__.meta28342;
});

cljs.spec.t_cljs$spec28341.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28341.prototype.apply = (function (self__,args28344){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28344)));
});

cljs.spec.t_cljs$spec28341.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28341.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28341.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec28341.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec28341.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.gen_for_pred(self__.pred);
}
});

cljs.spec.t_cljs$spec28341.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.spec_impl.cljs$core$IFn$_invoke$arity$4 ? self__.spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_) : self__.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_));
});

cljs.spec.t_cljs$spec28341.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec28341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'spec'"], null)),cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$meta28342], null);
});

cljs.spec.t_cljs$spec28341.cljs$lang$type = true;

cljs.spec.t_cljs$spec28341.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28341";

cljs.spec.t_cljs$spec28341.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28341");
});

cljs.spec.__GT_t_cljs$spec28341 = (function cljs$spec$spec_impl_$___GT_t_cljs$spec28341(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta28342){
return (new cljs.spec.t_cljs$spec28341(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta28342));
});

}

return (new cljs.spec.t_cljs$spec28341(cljs$spec$spec_impl,form,pred,gfn,cpred_QMARK_,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});
/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args28350 = [];
var len__7296__auto___28365 = arguments.length;
var i__7297__auto___28366 = (0);
while(true){
if((i__7297__auto___28366 < len__7296__auto___28365)){
args28350.push((arguments[i__7297__auto___28366]));

var G__28367 = (i__7297__auto___28366 + (1));
i__7297__auto___28366 = G__28367;
continue;
} else {
}
break;
}

var G__28352 = args28350.length;
switch (G__28352) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28350.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__28345_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__6209__auto__ = cljs.core.contains_QMARK_(cljs.core.methods$(mm),cljs.core._dispatch_fn(mm).call(null,p1__28345_SHARP_));
if(and__6209__auto__){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__28345_SHARP_) : mm.call(null,p1__28345_SHARP_));
} else {
return and__6209__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__28346_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__28346_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__28347_SHARP_,p2__28348_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28347_SHARP_,retag,p2__28348_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec28353 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28353 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta28354){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta28354 = meta28354;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28353.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_28355,meta28354__$1){
var self__ = this;
var _28355__$1 = this;
return (new cljs.spec.t_cljs$spec28353(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta28354__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_28355){
var self__ = this;
var _28355__$1 = this;
return self__.meta28354;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.call = ((function (id,predx,dval,tag){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.apply = ((function (id,predx,dval,tag){
return (function (self__,args28356){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28356)));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,predx,dval,tag){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28353.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,self__.form,cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__28357){
var vec__28358 = p__28357;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28358,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__28358,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__28358,k,f,___$1,id,predx,dval,tag){
return (function (p1__28349_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__28349_SHARP_,k) : self__.tag.call(null,p1__28349_SHARP_,k));
});})(rmap__$1,p,vec__28358,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__7055__auto__ = self__.form;
return cljs.core._conj((function (){var x__7055__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__28358,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__28361){
var vec__28362 = p__28361;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28362,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mmvar) : cljs.core.deref.call(null,self__.mmvar))))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_multi_DASH_spec),(function (){var x__7055__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta28354], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec28353.cljs$lang$type = true;

cljs.spec.t_cljs$spec28353.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28353";

cljs.spec.t_cljs$spec28353.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28353");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec28353 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec28353(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta28354){
return (new cljs.spec.t_cljs$spec28353(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta28354));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec28353(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args28369 = [];
var len__7296__auto___28376 = arguments.length;
var i__7297__auto___28377 = (0);
while(true){
if((i__7297__auto___28377 < len__7296__auto___28376)){
args28369.push((arguments[i__7297__auto___28377]));

var G__28378 = (i__7297__auto___28377 + (1));
i__7297__auto___28377 = G__28378;
continue;
} else {
}
break;
}

var G__28371 = args28369.length;
switch (G__28371) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28369.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec28372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28372 = (function (forms,preds,gfn,meta28373){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta28373 = meta28373;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28374,meta28373__$1){
var self__ = this;
var _28374__$1 = this;
return (new cljs.spec.t_cljs$spec28372(self__.forms,self__.preds,self__.gfn,meta28373__$1));
});

cljs.spec.t_cljs$spec28372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28374){
var self__ = this;
var _28374__$1 = this;
return self__.meta28373;
});

cljs.spec.t_cljs$spec28372.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28372.prototype.apply = (function (self__,args28375){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28375)));
});

cljs.spec.t_cljs$spec28372.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28372.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28372.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),v,(self__.forms.cljs$core$IFn$_invoke$arity$1 ? self__.forms.cljs$core$IFn$_invoke$arity$1(i) : self__.forms.call(null,i)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cv)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__28380 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__28381 = (i + (1));
ret = G__28380;
i = G__28381;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec28372.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7055__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.array_seq([(function (){var x__7055__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec28372.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec28372.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec28372.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_tuple),self__.forms)));
});

cljs.spec.t_cljs$spec28372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta28373], null);
});

cljs.spec.t_cljs$spec28372.cljs$lang$type = true;

cljs.spec.t_cljs$spec28372.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28372";

cljs.spec.t_cljs$spec28372.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28372");
});

cljs.spec.__GT_t_cljs$spec28372 = (function cljs$spec$__GT_t_cljs$spec28372(forms__$1,preds__$1,gfn__$1,meta28373){
return (new cljs.spec.t_cljs$spec28372(forms__$1,preds__$1,gfn__$1,meta28373));
});

}

return (new cljs.spec.t_cljs$spec28372(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var cform = ((function (id){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count(preds))){
var pred = (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(i) : preds.call(null,i));
var ret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms,i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret)){
var G__28390 = (i + (1));
i = G__28390;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null);
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
break;
}
});})(id))
;
if(typeof cljs.spec.t_cljs$spec28386 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28386 = (function (or_spec_impl,keys,forms,preds,gfn,id,cform,meta28387){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.cform = cform;
this.meta28387 = meta28387;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,cform){
return (function (_28388,meta28387__$1){
var self__ = this;
var _28388__$1 = this;
return (new cljs.spec.t_cljs$spec28386(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.cform,meta28387__$1));
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,cform){
return (function (_28388){
var self__ = this;
var _28388__$1 = this;
return self__.meta28387;
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.call = ((function (id,cform){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.apply = ((function (id,cform){
return (function (self__,args28389){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28389)));
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,cform){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28386.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,cform){
return (function (){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,cform))
,null)));
}
});})(___$1,id,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
}
}
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.getBasis = ((function (id,cform){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$or_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'or'"], null)),cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta28387], null);
});})(id,cform))
;

cljs.spec.t_cljs$spec28386.cljs$lang$type = true;

cljs.spec.t_cljs$spec28386.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28386";

cljs.spec.t_cljs$spec28386.cljs$lang$ctorPrWriter = ((function (id,cform){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28386");
});})(id,cform))
;

cljs.spec.__GT_t_cljs$spec28386 = ((function (id,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec28386(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta28387){
return (new cljs.spec.t_cljs$spec28386(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta28387));
});})(id,cform))
;

}

return (new cljs.spec.t_cljs$spec28386(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__28417 = preds;
var vec__28419 = G__28417;
var seq__28420 = cljs.core.seq(vec__28419);
var first__28421 = cljs.core.first(seq__28420);
var seq__28420__$1 = cljs.core.next(seq__28420);
var pred = first__28421;
var preds__$1 = seq__28420__$1;
var G__28418 = forms;
var vec__28422 = G__28418;
var seq__28423 = cljs.core.seq(vec__28422);
var first__28424 = cljs.core.first(seq__28423);
var seq__28423__$1 = cljs.core.next(seq__28423);
var form = first__28424;
var forms__$1 = seq__28423__$1;
var ret__$1 = ret;
var G__28417__$1 = G__28417;
var G__28418__$1 = G__28418;
while(true){
var ret__$2 = ret__$1;
var vec__28425 = G__28417__$1;
var seq__28426 = cljs.core.seq(vec__28425);
var first__28427 = cljs.core.first(seq__28426);
var seq__28426__$1 = cljs.core.next(seq__28426);
var pred__$1 = first__28427;
var preds__$2 = seq__28426__$1;
var vec__28428 = G__28418__$1;
var seq__28429 = cljs.core.seq(vec__28428);
var first__28430 = cljs.core.first(seq__28429);
var seq__28429__$1 = cljs.core.next(seq__28429);
var form__$1 = first__28430;
var forms__$2 = seq__28429__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,nret)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__28431 = nret;
var G__28432 = preds__$2;
var G__28433 = forms__$2;
ret__$1 = G__28431;
G__28417__$1 = G__28432;
G__28418__$1 = G__28433;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__28460 = forms;
var vec__28462 = G__28460;
var seq__28463 = cljs.core.seq(vec__28462);
var first__28464 = cljs.core.first(seq__28463);
var seq__28463__$1 = cljs.core.next(seq__28463);
var form = first__28464;
var forms__$1 = seq__28463__$1;
var G__28461 = preds;
var vec__28465 = G__28461;
var seq__28466 = cljs.core.seq(vec__28465);
var first__28467 = cljs.core.first(seq__28466);
var seq__28466__$1 = cljs.core.next(seq__28466);
var pred = first__28467;
var preds__$1 = seq__28466__$1;
var ret__$1 = ret;
var G__28460__$1 = G__28460;
var G__28461__$1 = G__28461;
while(true){
var ret__$2 = ret__$1;
var vec__28468 = G__28460__$1;
var seq__28469 = cljs.core.seq(vec__28468);
var first__28470 = cljs.core.first(seq__28469);
var seq__28469__$1 = cljs.core.next(seq__28469);
var form__$1 = first__28470;
var forms__$2 = seq__28469__$1;
var vec__28471 = G__28461__$1;
var seq__28472 = cljs.core.seq(vec__28471);
var first__28473 = cljs.core.first(seq__28472);
var seq__28472__$1 = cljs.core.next(seq__28472);
var pred__$1 = first__28473;
var preds__$2 = seq__28472__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,nret)){
var G__28474 = nret;
var G__28475 = forms__$2;
var G__28476 = preds__$2;
ret__$1 = G__28474;
G__28460__$1 = G__28475;
G__28461__$1 = G__28476;
continue;
} else {
return cljs.spec.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec28481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28481 = (function (and_spec_impl,forms,preds,gfn,meta28482){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta28482 = meta28482;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28483,meta28482__$1){
var self__ = this;
var _28483__$1 = this;
return (new cljs.spec.t_cljs$spec28481(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta28482__$1));
});

cljs.spec.t_cljs$spec28481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28483){
var self__ = this;
var _28483__$1 = this;
return self__.meta28482;
});

cljs.spec.t_cljs$spec28481.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28481.prototype.apply = (function (self__,args28484){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28484)));
});

cljs.spec.t_cljs$spec28481.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28481.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28481.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds(x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec28481.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec28481.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});

cljs.spec.t_cljs$spec28481.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.t_cljs$spec28481.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$s_SLASH_and),self__.forms)));
});

cljs.spec.t_cljs$spec28481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$and_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'and'"], null)),cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta28482], null);
});

cljs.spec.t_cljs$spec28481.cljs$lang$type = true;

cljs.spec.t_cljs$spec28481.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28481";

cljs.spec.t_cljs$spec28481.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28481");
});

cljs.spec.__GT_t_cljs$spec28481 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec28481(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28482){
return (new cljs.spec.t_cljs$spec28481(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta28482));
});

}

return (new cljs.spec.t_cljs$spec28481(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__28485){
var map__28488 = p__28485;
var map__28488__$1 = ((((!((map__28488 == null)))?((((map__28488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28488):map__28488);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28488__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__28490){
var map__28503 = p__28490;
var map__28503__$1 = ((((!((map__28503 == null)))?((((map__28503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28503):map__28503);
var vec__28504 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503__$1,cljs.core.cst$kw$ps);
var seq__28505 = cljs.core.seq(vec__28504);
var first__28506 = cljs.core.first(seq__28505);
var seq__28505__$1 = cljs.core.next(seq__28505);
var p1 = first__28506;
var pr = seq__28505__$1;
var ps = vec__28504;
var vec__28507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503__$1,cljs.core.cst$kw$ks);
var seq__28508 = cljs.core.seq(vec__28507);
var first__28509 = cljs.core.first(seq__28508);
var seq__28508__$1 = cljs.core.next(seq__28508);
var k1 = first__28509;
var kr = seq__28508__$1;
var ks = vec__28507;
var vec__28510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503__$1,cljs.core.cst$kw$forms);
var seq__28511 = cljs.core.seq(vec__28510);
var first__28512 = cljs.core.first(seq__28511);
var seq__28511__$1 = cljs.core.next(seq__28511);
var f1 = first__28512;
var fr = seq__28511__$1;
var forms = vec__28510;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28503__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null));
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__7303__auto__ = [];
var len__7296__auto___28515 = arguments.length;
var i__7297__auto___28516 = (0);
while(true){
if((i__7297__auto___28516 < len__7296__auto___28515)){
args__7303__auto__.push((arguments[i__7297__auto___28516]));

var G__28517 = (i__7297__auto___28516 + (1));
i__7297__auto___28516 = G__28517;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq28514){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28514));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.array_seq([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.array_seq([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7055__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH__STAR_),(function (){var x__7055__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__6221__auto__ = ks;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__28518_SHARP_){
var G__28521 = cljs.core.first(p1__28518_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28521) : f.call(null,G__28521));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__6221__auto__ = cljs.core.seq(ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq(forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__28519_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__28519_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__28531 = cljs.spec.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__28534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(0),null);
var seq__28535 = cljs.core.seq(vec__28534);
var first__28536 = cljs.core.first(seq__28535);
var seq__28535__$1 = cljs.core.next(seq__28535);
var p1 = first__28536;
var pr = seq__28535__$1;
var ps__$1 = vec__28534;
var vec__28537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28537,(0),null);
var ks__$1 = vec__28537;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28531,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.spec.accept(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__7303__auto__ = [];
var len__7296__auto___28541 = arguments.length;
var i__7297__auto___28542 = (0);
while(true){
if((i__7297__auto___28542 < len__7296__auto___28541)){
args__7303__auto__.push((arguments[i__7297__auto___28542]));

var G__28543 = (i__7297__auto___28542 + (1));
i__7297__auto___28542 = G__28543;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_(ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq28540){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28540));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__6209__auto__ = p1;
if(cljs.core.truth_(and__6209__auto__)){
return p2;
} else {
return and__6209__auto__;
}
})())){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));
} else {
var or__6221__auto__ = p1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.spec.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept(cljs.core.cst$kw$cljs$spec_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec_SLASH_nil], null));
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__6221__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec_SLASH_nil);
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_pcat,null,cljs.core.cst$kw$cljs$spec_SLASH_rep,null], null), null).call(null,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve(p1)));
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__28547 = cljs.spec.reg_resolve(p);
var map__28547__$1 = ((((!((map__28547 == null)))?((((map__28547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28547):map__28547);
var p__$1 = map__28547__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28547__$1,cljs.core.cst$kw$forms);
var G__28549 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__28549)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28549)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__28549)){
var and__6209__auto__ = cljs$spec$accept_nil_QMARK_(p1);
if(cljs.core.truth_(and__6209__auto__)){
var or__6221__auto__ = cljs.spec.noret_QMARK_(p1,(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var ret = cljs.spec.and_preds((cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)),ps,cljs.core.next(forms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return null;
} else {
return ret;
}
}
} else {
return and__6209__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__28549)){
var or__6221__auto__ = (p1 === p2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs$spec$accept_nil_QMARK_(p1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__28549)){
return cljs.core.every_QMARK_(cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__28549)){
return cljs.core.some(cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__28568 = cljs.spec.reg_resolve(p);
var map__28568__$1 = ((((!((map__28568 == null)))?((((map__28568.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28568.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28568):map__28568);
var p__$1 = map__28568__$1;
var vec__28569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,cljs.core.cst$kw$ps);
var seq__28570 = cljs.core.seq(vec__28569);
var first__28571 = cljs.core.first(seq__28570);
var seq__28570__$1 = cljs.core.next(seq__28570);
var p0 = first__28571;
var pr = seq__28570__$1;
var ps = vec__28569;
var vec__28572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28572,(0),null);
var ks = vec__28572;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28568__$1,cljs.core.cst$kw$forms);
var G__28576 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__28576)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28576)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__28576)){
var pret = cljs$spec$preturn(p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec_SLASH_nil;
} else {
return cljs.spec.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__28576)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__28576)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__28576)){
var vec__28577 = cljs.spec.filter_alt(ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__28580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28577,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28580,(0),null);
var vec__28583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28577,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28583,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec_SLASH_nil:cljs$spec$preturn(p0__$1));
if(cljs.core.truth_(k0)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null);
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__28589 = cljs.spec.reg_resolve(p);
var map__28589__$1 = ((((!((map__28589 == null)))?((((map__28589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28589):map__28589);
var p__$1 = map__28589__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28589__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28589__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28589__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__28589,map__28589__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__28589,map__28589__$1,p__$1,op,ps,splice))
;
var G__28591 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28591)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__28591)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__28591)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__28591)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__28591)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__28591)){
return prop();
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__28606 = cljs.spec.reg_resolve(p);
var map__28606__$1 = ((((!((map__28606 == null)))?((((map__28606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28606):map__28606);
var p__$1 = map__28606__$1;
var vec__28607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$ps);
var seq__28608 = cljs.core.seq(vec__28607);
var first__28609 = cljs.core.first(seq__28608);
var seq__28608__$1 = cljs.core.next(seq__28608);
var p0 = first__28609;
var pr = seq__28608__$1;
var ps = vec__28607;
var vec__28610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$ks);
var seq__28611 = cljs.core.seq(vec__28610);
var first__28612 = cljs.core.first(seq__28611);
var seq__28611__$1 = cljs.core.next(seq__28611);
var k0 = first__28612;
var kr = seq__28611__$1;
var ks = vec__28610;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28606__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__28614 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__28614)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28614)){
var ret__$1 = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret__$1)){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__28614)){
var temp__4657__auto__ = cljs$spec$deriv(p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
return cljs.spec.amp_impl(p1__$1,ps,forms);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__28614)){
return cljs.spec.alt2(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons(cljs$spec$deriv(p0,x),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p0))?cljs$spec$deriv(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.add_ret(p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__28614)){
return cljs.spec.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__28614,map__28606,map__28606__$1,p__$1,vec__28607,seq__28608,first__28609,seq__28608__$1,p0,pr,ps,vec__28610,seq__28611,first__28612,seq__28611__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__28592_SHARP_){
return cljs$spec$deriv(p1__28592_SHARP_,x);
});})(G__28614,map__28606,map__28606__$1,p__$1,vec__28607,seq__28608,first__28609,seq__28608__$1,p0,pr,ps,vec__28610,seq__28611,first__28612,seq__28611__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__28614)){
return cljs.spec.alt2(cljs.spec.rep_STAR_(cljs$spec$deriv(p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))?cljs$spec$deriv(cljs.spec.rep_STAR_(p2,p2,cljs.spec.add_ret(p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__28618 = cljs.spec.reg_resolve(p);
var map__28618__$1 = ((((!((map__28618 == null)))?((((map__28618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28618):map__28618);
var p__$1 = map__28618__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28618__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28618__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28618__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28618__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28618__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28618__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28618__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.truth_(p__$1)){
var G__28620 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__28620)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28620)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__28620)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$clojure$spec_SLASH__AMPERSAND_,cljs$spec$op_describe(p1),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__28620)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__7055__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([(function (){var or__6221__auto__ = cljs.core.seq(ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq(forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__28620)){
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__28620)){
var x__7055__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec_SLASH__STAR_);
return cljs.core._conj((function (){var x__7055__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__28652 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28652,(0),null);
var input__$1 = vec__28652;
var map__28655 = cljs.spec.reg_resolve(p);
var map__28655__$1 = ((((!((map__28655 == null)))?((((map__28655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28655):map__28655);
var p__$1 = map__28655__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28655__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name(p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__28652,x,input__$1,map__28655,map__28655__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,cljs.spec.abbrev(form__$1),cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], true, false);
});})(vec__28652,x,input__$1,map__28655,map__28655__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__28657 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__28657)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28657)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__28657)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))){
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1));
} else {
return insufficient(path,cljs.spec.op_describe(p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1__$1));
} else {
return cljs$spec$op_explain(cljs.spec.op_describe(p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__28657)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__6221__auto__ = cljs.core.seq(ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq(forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__28658 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__28657,vec__28652,x,input__$1,map__28655,map__28655__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__28661){
var vec__28662 = p__28661;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28662,(0),null);
return cljs.spec.accept_nil_QMARK_(p__$2);
});})(pkfs,G__28657,vec__28652,x,input__$1,map__28655,map__28655__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28658,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28658,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28658,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__6221__auto__ = form__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return cljs$spec$op_explain(form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__28657)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__28657,vec__28652,x,input__$1,map__28655,map__28655__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain((function (){var or__6221__auto__ = form__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),via__$1,in$,input__$1);
});})(G__28657,vec__28652,x,input__$1,map__28655,map__28655__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__6221__auto__ = cljs.core.seq(ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq(forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__28657)){
return cljs$spec$op_explain((((p1 === p2))?forms:cljs.spec.op_describe(p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__28686 = cljs.spec.reg_resolve(p);
var map__28686__$1 = ((((!((map__28686 == null)))?((((map__28686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28686):map__28686);
var p__$1 = map__28686__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$splice);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$ret);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28686__$1,cljs.core.cst$kw$id);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck(rmap,id):rmap);
var ggens = ((function (map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__6209__auto__ = rmap__$1;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = id;
if(cljs.core.truth_(and__6209__auto____$1)){
var and__6209__auto____$2 = k;
if(cljs.core.truth_(and__6209__auto____$2)){
return cljs.spec.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__6209__auto____$2;
}
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__6221__auto__ = f__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p__$2;
}
})());
});})(map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__6221__auto__ = f__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__6221__auto__ = cljs.core.seq(ks__$1);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq(forms__$1);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__6221__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__28689 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__28689)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28689)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__28690 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__28690)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28690)){
var temp__4657__auto__ = cljs.spec.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__28690)){
return cljs$spec$re_gen(p1,overrides,path,rmap__$1,cljs.spec.op_describe(p1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__28690)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__28690)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__28690)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__4657__auto__ = cljs$spec$re_gen(p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4657__auto__,G__28690,or__6221__auto__,map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__28665_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__28665_SHARP_);
});})(g,temp__4657__auto__,G__28690,or__6221__auto__,map__28686,map__28686__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__28691){
while(true){
var vec__28695 = p__28691;
var seq__28696 = cljs.core.seq(vec__28695);
var first__28697 = cljs.core.first(seq__28696);
var seq__28696__$1 = cljs.core.next(seq__28696);
var x = first__28697;
var xs = seq__28696__$1;
var data = vec__28695;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p))){
var ret = cljs.spec.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__28698 = dp;
var G__28699 = xs;
p = G__28698;
p__28691 = G__28699;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__28713 = input;
var vec__28714 = G__28713;
var seq__28715 = cljs.core.seq(vec__28714);
var first__28716 = cljs.core.first(seq__28715);
var seq__28715__$1 = cljs.core.next(seq__28715);
var x = first__28716;
var xs = seq__28715__$1;
var data = vec__28714;
var i = (0);
var p__$1 = p;
var G__28713__$1 = G__28713;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__28717 = G__28713__$1;
var seq__28718 = cljs.core.seq(vec__28717);
var first__28719 = cljs.core.first(seq__28718);
var seq__28718__$1 = cljs.core.next(seq__28718);
var x__$1 = first__28719;
var xs__$1 = seq__28718__$1;
var data__$1 = vec__28717;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__28720 = dp;
var G__28721 = xs__$1;
var G__28722 = (i__$2 + (1));
p__$1 = G__28720;
G__28713__$1 = G__28721;
i__$1 = G__28722;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec_SLASH_pcat)){
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(re)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], true, false);
}
} else {
var or__6221__auto__ = cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(p__$2)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec28727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28727 = (function (regex_spec_impl,re,gfn,meta28728){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta28728 = meta28728;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28729,meta28728__$1){
var self__ = this;
var _28729__$1 = this;
return (new cljs.spec.t_cljs$spec28727(self__.regex_spec_impl,self__.re,self__.gfn,meta28728__$1));
});

cljs.spec.t_cljs$spec28727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28729){
var self__ = this;
var _28729__$1 = this;
return self__.meta28728;
});

cljs.spec.t_cljs$spec28727.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28727.prototype.apply = (function (self__,args28730){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28730)));
});

cljs.spec.t_cljs$spec28727.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});

cljs.spec.t_cljs$spec28727.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28727.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});

cljs.spec.t_cljs$spec28727.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(self__.re)),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec28727.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.re_gen(self__.re,overrides,path,rmap,cljs.spec.op_describe(self__.re));
}
});

cljs.spec.t_cljs$spec28727.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : self__.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.t_cljs$spec28727.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe(self__.re);
});

cljs.spec.t_cljs$spec28727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$regex_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'spec' with a regex op argument"], null)),cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta28728], null);
});

cljs.spec.t_cljs$spec28727.cljs$lang$type = true;

cljs.spec.t_cljs$spec28727.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28727";

cljs.spec.t_cljs$spec28727.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28727");
});

cljs.spec.__GT_t_cljs$spec28727 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec28727(regex_spec_impl__$1,re__$1,gfn__$1,meta28728){
return (new cljs.spec.t_cljs$spec28727(regex_spec_impl__$1,re__$1,gfn__$1,meta28728));
});

}

return (new cljs.spec.t_cljs$spec28727(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__6209__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cret,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
if(and__6209__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__6209__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__28731_SHARP_){
return cljs.spec.call_valid_QMARK_(f,specs,p1__28731_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__4655__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__28735 = temp__4655__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28735,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
if(cljs.core.truth_((function (){var and__6209__auto__ = argspec;
if(cljs.core.truth_(and__6209__auto__)){
return retspec;
} else {
return and__6209__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (c/and argspec retspec)"));
}

var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if(typeof cljs.spec.t_cljs$spec28745 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec28745 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta28746){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta28746 = meta28746;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec28745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_28747,meta28746__$1){
var self__ = this;
var _28747__$1 = this;
return (new cljs.spec.t_cljs$spec28745(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta28746__$1));
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_28747){
var self__ = this;
var _28747__$1 = this;
return self__.meta28746;
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.call = ((function (specs){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.apply = ((function (specs){
return (function (self__,args28748){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args28748)));
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (specs){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec28745.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_(f)){
if((f === cljs.spec.validate_fn(f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_(f)){
var args = cljs.spec.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e28749){if((e28749 instanceof Error)){
var t = e28749;
return t;
} else {
throw e28749;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
} else {
var cret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cret)){
return cljs.spec.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform(self__.argspec,args);
return cljs.spec.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pred,cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
if(cljs.core.truth_(self__.fnspec)){
return null;
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$4,specs){
return (function() { 
var G__28752__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_28750_28753 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_28751_28754 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_28750_28753,_STAR_print_fn_STAR_28751_28754,sb__7207__auto__,___$4,specs){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_28750_28753,_STAR_print_fn_STAR_28751_28754,sb__7207__auto__,___$4,specs))
;

try{cljs.spec.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28751_28754;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28750_28753;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(self__.retspec));
};
var G__28752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28755__i = 0, G__28755__a = new Array(arguments.length -  0);
while (G__28755__i < G__28755__a.length) {G__28755__a[G__28755__i] = arguments[G__28755__i + 0]; ++G__28755__i;}
  args = new cljs.core.IndexedSeq(G__28755__a,0);
} 
return G__28752__delegate.call(this,args);};
G__28752.cljs$lang$maxFixedArity = 0;
G__28752.cljs$lang$applyTo = (function (arglist__28756){
var args = cljs.core.seq(arglist__28756);
return G__28752__delegate(args);
});
G__28752.cljs$core$IFn$_invoke$arity$variadic = G__28752__delegate;
return G__28752;
})()
;})(___$4,specs))
], 0));
}
}
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? self__.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.t_cljs$spec28745.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_fspec),(function (){var x__7055__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),cljs.core.array_seq([(function (){var x__7055__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.t_cljs$spec28745.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fspec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'fspec'"], null)),cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta28746], null);
});})(specs))
;

cljs.spec.t_cljs$spec28745.cljs$lang$type = true;

cljs.spec.t_cljs$spec28745.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec28745";

cljs.spec.t_cljs$spec28745.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.spec/t_cljs$spec28745");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec28745 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec28745(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta28746){
return (new cljs.spec.t_cljs$spec28745(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta28746));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec28745(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_any,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_spec,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_constantly,true),cljs.core.cst$kw$gen,cljs.core.cst$sym$cljs$spec$impl$gen_SLASH_any),cljs.spec.spec_impl(cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_constantly,true),cljs.core.constantly(true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28757_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__28757_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__28757_SHARP_)))),cljs.spec.spec_impl(cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__28757_SHARP_], null),cljs.core.list(cljs.core.cst$sym$zipmap,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__28757_SHARP_),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__28757_SHARP_))),(function (p1__28757_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_k,p1__28757_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_v,p1__28757_SHARP_));
}),null,true));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args28759 = [];
var len__7296__auto___28762 = arguments.length;
var i__7297__auto___28763 = (0);
while(true){
if((i__7297__auto___28763 < len__7296__auto___28762)){
args28759.push((arguments[i__7297__auto___28763]));

var G__28764 = (i__7297__auto___28763 + (1));
i__7297__auto___28763 = G__28764;
continue;
} else {
}
break;
}

var G__28761 = args28759.length;
switch (G__28761) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28759.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28758_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__28758_SHARP_,cljs.spec.conform(spec,p1__28758_SHARP_)],null));
}),cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__28766_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,p1__28766_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_(coll)) && (cljs.core.every_QMARK_(check_QMARK_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty(init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (init){
return (function (p1__28767_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__28767_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__28767_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(pred)], 0))], 0));
});
;})(init))
});
