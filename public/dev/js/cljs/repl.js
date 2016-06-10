// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29572){
var map__29597 = p__29572;
var map__29597__$1 = ((((!((map__29597 == null)))?((((map__29597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29597):map__29597);
var m = map__29597__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29597__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29597__$1,cljs.core.cst$kw$name);
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
var seq__29599_29624 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__29600_29625 = null;
var count__29601_29626 = (0);
var i__29602_29627 = (0);
while(true){
if((i__29602_29627 < count__29601_29626)){
var f_29629 = chunk__29600_29625.cljs$core$IIndexed$_nth$arity$2(null,i__29602_29627);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_29629], 0));

var G__29631 = seq__29599_29624;
var G__29632 = chunk__29600_29625;
var G__29633 = count__29601_29626;
var G__29634 = (i__29602_29627 + (1));
seq__29599_29624 = G__29631;
chunk__29600_29625 = G__29632;
count__29601_29626 = G__29633;
i__29602_29627 = G__29634;
continue;
} else {
var temp__4657__auto___29635 = cljs.core.seq(seq__29599_29624);
if(temp__4657__auto___29635){
var seq__29599_29636__$1 = temp__4657__auto___29635;
if(cljs.core.chunked_seq_QMARK_(seq__29599_29636__$1)){
var c__7032__auto___29637 = cljs.core.chunk_first(seq__29599_29636__$1);
var G__29638 = cljs.core.chunk_rest(seq__29599_29636__$1);
var G__29639 = c__7032__auto___29637;
var G__29640 = cljs.core.count(c__7032__auto___29637);
var G__29641 = (0);
seq__29599_29624 = G__29638;
chunk__29600_29625 = G__29639;
count__29601_29626 = G__29640;
i__29602_29627 = G__29641;
continue;
} else {
var f_29642 = cljs.core.first(seq__29599_29636__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_29642], 0));

var G__29643 = cljs.core.next(seq__29599_29636__$1);
var G__29644 = null;
var G__29645 = (0);
var G__29646 = (0);
seq__29599_29624 = G__29643;
chunk__29600_29625 = G__29644;
count__29601_29626 = G__29645;
i__29602_29627 = G__29646;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29649 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6221__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_29649], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_29649)))?cljs.core.second(arglists_29649):arglists_29649)], 0));
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
var seq__29603_29652 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__29604_29653 = null;
var count__29605_29654 = (0);
var i__29606_29655 = (0);
while(true){
if((i__29606_29655 < count__29605_29654)){
var vec__29607_29656 = chunk__29604_29653.cljs$core$IIndexed$_nth$arity$2(null,i__29606_29655);
var name_29657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29607_29656,(0),null);
var map__29610_29658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29607_29656,(1),null);
var map__29610_29659__$1 = ((((!((map__29610_29658 == null)))?((((map__29610_29658.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29610_29658.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29610_29658):map__29610_29658);
var doc_29660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29610_29659__$1,cljs.core.cst$kw$doc);
var arglists_29661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29610_29659__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_29657], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_29661], 0));

if(cljs.core.truth_(doc_29660)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_29660], 0));
} else {
}

var G__29662 = seq__29603_29652;
var G__29663 = chunk__29604_29653;
var G__29664 = count__29605_29654;
var G__29665 = (i__29606_29655 + (1));
seq__29603_29652 = G__29662;
chunk__29604_29653 = G__29663;
count__29605_29654 = G__29664;
i__29606_29655 = G__29665;
continue;
} else {
var temp__4657__auto___29667 = cljs.core.seq(seq__29603_29652);
if(temp__4657__auto___29667){
var seq__29603_29668__$1 = temp__4657__auto___29667;
if(cljs.core.chunked_seq_QMARK_(seq__29603_29668__$1)){
var c__7032__auto___29678 = cljs.core.chunk_first(seq__29603_29668__$1);
var G__29679 = cljs.core.chunk_rest(seq__29603_29668__$1);
var G__29680 = c__7032__auto___29678;
var G__29681 = cljs.core.count(c__7032__auto___29678);
var G__29682 = (0);
seq__29603_29652 = G__29679;
chunk__29604_29653 = G__29680;
count__29605_29654 = G__29681;
i__29606_29655 = G__29682;
continue;
} else {
var vec__29612_29684 = cljs.core.first(seq__29603_29668__$1);
var name_29685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29612_29684,(0),null);
var map__29615_29686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29612_29684,(1),null);
var map__29615_29687__$1 = ((((!((map__29615_29686 == null)))?((((map__29615_29686.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29615_29686.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29615_29686):map__29615_29686);
var doc_29688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29615_29687__$1,cljs.core.cst$kw$doc);
var arglists_29689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29615_29687__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_29685], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_29689], 0));

if(cljs.core.truth_(doc_29688)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_29688], 0));
} else {
}

var G__29705 = cljs.core.next(seq__29603_29668__$1);
var G__29706 = null;
var G__29707 = (0);
var G__29708 = (0);
seq__29603_29652 = G__29705;
chunk__29604_29653 = G__29706;
count__29605_29654 = G__29707;
i__29606_29655 = G__29708;
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

return cljs.core.run_BANG_(((function (specs,map__29597,map__29597__$1,m,n,nm){
return (function (p__29617){
var vec__29618 = p__29617;
var role = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29618,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29618,(1),null);
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
});})(specs,map__29597,map__29597__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});
