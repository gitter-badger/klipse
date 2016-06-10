// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__55739){
var map__55764 = p__55739;
var map__55764__$1 = ((((!((map__55764 == null)))?((((map__55764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55764):map__55764);
var m = map__55764__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55764__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55764__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__55766_55788 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__55767_55789 = null;
var count__55768_55790 = (0);
var i__55769_55791 = (0);
while(true){
if((i__55769_55791 < count__55768_55790)){
var f_55792 = chunk__55767_55789.cljs$core$IIndexed$_nth$arity$2(null,i__55769_55791);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_55792], 0));

var G__55793 = seq__55766_55788;
var G__55794 = chunk__55767_55789;
var G__55795 = count__55768_55790;
var G__55796 = (i__55769_55791 + (1));
seq__55766_55788 = G__55793;
chunk__55767_55789 = G__55794;
count__55768_55790 = G__55795;
i__55769_55791 = G__55796;
continue;
} else {
var temp__4657__auto___55797 = cljs.core.seq(seq__55766_55788);
if(temp__4657__auto___55797){
var seq__55766_55798__$1 = temp__4657__auto___55797;
if(cljs.core.chunked_seq_QMARK_(seq__55766_55798__$1)){
var c__7032__auto___55799 = cljs.core.chunk_first(seq__55766_55798__$1);
var G__55800 = cljs.core.chunk_rest(seq__55766_55798__$1);
var G__55801 = c__7032__auto___55799;
var G__55802 = cljs.core.count(c__7032__auto___55799);
var G__55803 = (0);
seq__55766_55788 = G__55800;
chunk__55767_55789 = G__55801;
count__55768_55790 = G__55802;
i__55769_55791 = G__55803;
continue;
} else {
var f_55804 = cljs.core.first(seq__55766_55798__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_55804], 0));

var G__55805 = cljs.core.next(seq__55766_55798__$1);
var G__55806 = null;
var G__55807 = (0);
var G__55808 = (0);
seq__55766_55788 = G__55805;
chunk__55767_55789 = G__55806;
count__55768_55790 = G__55807;
i__55769_55791 = G__55808;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_55809 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_55809], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_55809)))?cljs.core.second(arglists_55809):arglists_55809)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__55770_55810 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__55771_55811 = null;
var count__55772_55812 = (0);
var i__55773_55813 = (0);
while(true){
if((i__55773_55813 < count__55772_55812)){
var vec__55774_55814 = chunk__55771_55811.cljs$core$IIndexed$_nth$arity$2(null,i__55773_55813);
var name_55815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55774_55814,(0),null);
var map__55777_55816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55774_55814,(1),null);
var map__55777_55817__$1 = ((((!((map__55777_55816 == null)))?((((map__55777_55816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55777_55816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55777_55816):map__55777_55816);
var doc_55818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55777_55817__$1,cljs.core.cst$kw$doc);
var arglists_55819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55777_55817__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_55815], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_55819], 0));

if(cljs.core.truth_(doc_55818)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_55818], 0));
} else {
}

var G__55820 = seq__55770_55810;
var G__55821 = chunk__55771_55811;
var G__55822 = count__55772_55812;
var G__55823 = (i__55773_55813 + (1));
seq__55770_55810 = G__55820;
chunk__55771_55811 = G__55821;
count__55772_55812 = G__55822;
i__55773_55813 = G__55823;
continue;
} else {
var temp__4657__auto___55824 = cljs.core.seq(seq__55770_55810);
if(temp__4657__auto___55824){
var seq__55770_55825__$1 = temp__4657__auto___55824;
if(cljs.core.chunked_seq_QMARK_(seq__55770_55825__$1)){
var c__7032__auto___55826 = cljs.core.chunk_first(seq__55770_55825__$1);
var G__55827 = cljs.core.chunk_rest(seq__55770_55825__$1);
var G__55828 = c__7032__auto___55826;
var G__55829 = cljs.core.count(c__7032__auto___55826);
var G__55830 = (0);
seq__55770_55810 = G__55827;
chunk__55771_55811 = G__55828;
count__55772_55812 = G__55829;
i__55773_55813 = G__55830;
continue;
} else {
var vec__55779_55831 = cljs.core.first(seq__55770_55825__$1);
var name_55832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55779_55831,(0),null);
var map__55782_55833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55779_55831,(1),null);
var map__55782_55834__$1 = ((((!((map__55782_55833 == null)))?((((map__55782_55833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55782_55833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55782_55833):map__55782_55833);
var doc_55835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55782_55834__$1,cljs.core.cst$kw$doc);
var arglists_55836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55782_55834__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_55832], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_55836], 0));

if(cljs.core.truth_(doc_55835)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_55835], 0));
} else {
}

var G__55837 = cljs.core.next(seq__55770_55825__$1);
var G__55838 = null;
var G__55839 = (0);
var G__55840 = (0);
seq__55770_55810 = G__55837;
chunk__55771_55811 = G__55838;
count__55772_55812 = G__55839;
i__55773_55813 = G__55840;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var specs = cljs.spec.fn_specs(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,cljs.core.vals(specs)))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

return cljs.core.run_BANG_(((function (specs,map__55764,map__55764__$1,m,n,nm){
return (function (p__55784){
var vec__55785 = p__55784;
var role = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55785,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55785,(1),null);
if(cljs.core.truth_((function (){var and__6209__auto__ = spec;
if(cljs.core.truth_(and__6209__auto__)){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$cljs$spec_SLASH_unknown));
} else {
return and__6209__auto__;
}
})())){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec)], 0));
} else {
return null;
}
});})(specs,map__55764,map__55764__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});
