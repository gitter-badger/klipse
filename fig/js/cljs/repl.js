// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30932){
var map__30957 = p__30932;
var map__30957__$1 = ((((!((map__30957 == null)))?((((map__30957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30957):map__30957);
var m = map__30957__$1;
var n = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30957__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30959_30981 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30960_30982 = null;
var count__30961_30983 = (0);
var i__30962_30984 = (0);
while(true){
if((i__30962_30984 < count__30961_30983)){
var f_30985 = cljs.core._nth.call(null,chunk__30960_30982,i__30962_30984);
cljs.core.println.call(null,"  ",f_30985);

var G__30986 = seq__30959_30981;
var G__30987 = chunk__30960_30982;
var G__30988 = count__30961_30983;
var G__30989 = (i__30962_30984 + (1));
seq__30959_30981 = G__30986;
chunk__30960_30982 = G__30987;
count__30961_30983 = G__30988;
i__30962_30984 = G__30989;
continue;
} else {
var temp__4657__auto___30990 = cljs.core.seq.call(null,seq__30959_30981);
if(temp__4657__auto___30990){
var seq__30959_30991__$1 = temp__4657__auto___30990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30959_30991__$1)){
var c__23426__auto___30992 = cljs.core.chunk_first.call(null,seq__30959_30991__$1);
var G__30993 = cljs.core.chunk_rest.call(null,seq__30959_30991__$1);
var G__30994 = c__23426__auto___30992;
var G__30995 = cljs.core.count.call(null,c__23426__auto___30992);
var G__30996 = (0);
seq__30959_30981 = G__30993;
chunk__30960_30982 = G__30994;
count__30961_30983 = G__30995;
i__30962_30984 = G__30996;
continue;
} else {
var f_30997 = cljs.core.first.call(null,seq__30959_30991__$1);
cljs.core.println.call(null,"  ",f_30997);

var G__30998 = cljs.core.next.call(null,seq__30959_30991__$1);
var G__30999 = null;
var G__31000 = (0);
var G__31001 = (0);
seq__30959_30981 = G__30998;
chunk__30960_30982 = G__30999;
count__30961_30983 = G__31000;
i__30962_30984 = G__31001;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31002 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22615__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31002);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31002)))?cljs.core.second.call(null,arglists_31002):arglists_31002));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30963_31003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30964_31004 = null;
var count__30965_31005 = (0);
var i__30966_31006 = (0);
while(true){
if((i__30966_31006 < count__30965_31005)){
var vec__30967_31007 = cljs.core._nth.call(null,chunk__30964_31004,i__30966_31006);
var name_31008 = cljs.core.nth.call(null,vec__30967_31007,(0),null);
var map__30970_31009 = cljs.core.nth.call(null,vec__30967_31007,(1),null);
var map__30970_31010__$1 = ((((!((map__30970_31009 == null)))?((((map__30970_31009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30970_31009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30970_31009):map__30970_31009);
var doc_31011 = cljs.core.get.call(null,map__30970_31010__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31012 = cljs.core.get.call(null,map__30970_31010__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31008);

cljs.core.println.call(null," ",arglists_31012);

if(cljs.core.truth_(doc_31011)){
cljs.core.println.call(null," ",doc_31011);
} else {
}

var G__31013 = seq__30963_31003;
var G__31014 = chunk__30964_31004;
var G__31015 = count__30965_31005;
var G__31016 = (i__30966_31006 + (1));
seq__30963_31003 = G__31013;
chunk__30964_31004 = G__31014;
count__30965_31005 = G__31015;
i__30966_31006 = G__31016;
continue;
} else {
var temp__4657__auto___31017 = cljs.core.seq.call(null,seq__30963_31003);
if(temp__4657__auto___31017){
var seq__30963_31018__$1 = temp__4657__auto___31017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30963_31018__$1)){
var c__23426__auto___31019 = cljs.core.chunk_first.call(null,seq__30963_31018__$1);
var G__31020 = cljs.core.chunk_rest.call(null,seq__30963_31018__$1);
var G__31021 = c__23426__auto___31019;
var G__31022 = cljs.core.count.call(null,c__23426__auto___31019);
var G__31023 = (0);
seq__30963_31003 = G__31020;
chunk__30964_31004 = G__31021;
count__30965_31005 = G__31022;
i__30966_31006 = G__31023;
continue;
} else {
var vec__30972_31024 = cljs.core.first.call(null,seq__30963_31018__$1);
var name_31025 = cljs.core.nth.call(null,vec__30972_31024,(0),null);
var map__30975_31026 = cljs.core.nth.call(null,vec__30972_31024,(1),null);
var map__30975_31027__$1 = ((((!((map__30975_31026 == null)))?((((map__30975_31026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30975_31026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30975_31026):map__30975_31026);
var doc_31028 = cljs.core.get.call(null,map__30975_31027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31029 = cljs.core.get.call(null,map__30975_31027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31025);

cljs.core.println.call(null," ",arglists_31029);

if(cljs.core.truth_(doc_31028)){
cljs.core.println.call(null," ",doc_31028);
} else {
}

var G__31030 = cljs.core.next.call(null,seq__30963_31018__$1);
var G__31031 = null;
var G__31032 = (0);
var G__31033 = (0);
seq__30963_31003 = G__31030;
chunk__30964_31004 = G__31031;
count__30965_31005 = G__31032;
i__30966_31006 = G__31033;
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
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__30957,map__30957__$1,m,n,nm){
return (function (p__30977){
var vec__30978 = p__30977;
var role = cljs.core.nth.call(null,vec__30978,(0),null);
var spec = cljs.core.nth.call(null,vec__30978,(1),null);
if(cljs.core.truth_((function (){var and__22603__auto__ = spec;
if(cljs.core.truth_(and__22603__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__22603__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__30957,map__30957__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1465451158294