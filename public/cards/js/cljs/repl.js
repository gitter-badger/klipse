// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__67132){
var map__67157 = p__67132;
var map__67157__$1 = ((((!((map__67157 == null)))?((((map__67157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67157):map__67157);
var m = map__67157__$1;
var n = cljs.core.get.call(null,map__67157__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__67157__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__67159_67181 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67160_67182 = null;
var count__67161_67183 = (0);
var i__67162_67184 = (0);
while(true){
if((i__67162_67184 < count__67161_67183)){
var f_67185 = cljs.core._nth.call(null,chunk__67160_67182,i__67162_67184);
cljs.core.println.call(null,"  ",f_67185);

var G__67186 = seq__67159_67181;
var G__67187 = chunk__67160_67182;
var G__67188 = count__67161_67183;
var G__67189 = (i__67162_67184 + (1));
seq__67159_67181 = G__67186;
chunk__67160_67182 = G__67187;
count__67161_67183 = G__67188;
i__67162_67184 = G__67189;
continue;
} else {
var temp__4657__auto___67190 = cljs.core.seq.call(null,seq__67159_67181);
if(temp__4657__auto___67190){
var seq__67159_67191__$1 = temp__4657__auto___67190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67159_67191__$1)){
var c__7032__auto___67192 = cljs.core.chunk_first.call(null,seq__67159_67191__$1);
var G__67193 = cljs.core.chunk_rest.call(null,seq__67159_67191__$1);
var G__67194 = c__7032__auto___67192;
var G__67195 = cljs.core.count.call(null,c__7032__auto___67192);
var G__67196 = (0);
seq__67159_67181 = G__67193;
chunk__67160_67182 = G__67194;
count__67161_67183 = G__67195;
i__67162_67184 = G__67196;
continue;
} else {
var f_67197 = cljs.core.first.call(null,seq__67159_67191__$1);
cljs.core.println.call(null,"  ",f_67197);

var G__67198 = cljs.core.next.call(null,seq__67159_67191__$1);
var G__67199 = null;
var G__67200 = (0);
var G__67201 = (0);
seq__67159_67181 = G__67198;
chunk__67160_67182 = G__67199;
count__67161_67183 = G__67200;
i__67162_67184 = G__67201;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_67202 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6221__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_67202);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_67202)))?cljs.core.second.call(null,arglists_67202):arglists_67202));
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
var seq__67163_67203 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__67164_67204 = null;
var count__67165_67205 = (0);
var i__67166_67206 = (0);
while(true){
if((i__67166_67206 < count__67165_67205)){
var vec__67167_67207 = cljs.core._nth.call(null,chunk__67164_67204,i__67166_67206);
var name_67208 = cljs.core.nth.call(null,vec__67167_67207,(0),null);
var map__67170_67209 = cljs.core.nth.call(null,vec__67167_67207,(1),null);
var map__67170_67210__$1 = ((((!((map__67170_67209 == null)))?((((map__67170_67209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67170_67209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67170_67209):map__67170_67209);
var doc_67211 = cljs.core.get.call(null,map__67170_67210__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67212 = cljs.core.get.call(null,map__67170_67210__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_67208);

cljs.core.println.call(null," ",arglists_67212);

if(cljs.core.truth_(doc_67211)){
cljs.core.println.call(null," ",doc_67211);
} else {
}

var G__67213 = seq__67163_67203;
var G__67214 = chunk__67164_67204;
var G__67215 = count__67165_67205;
var G__67216 = (i__67166_67206 + (1));
seq__67163_67203 = G__67213;
chunk__67164_67204 = G__67214;
count__67165_67205 = G__67215;
i__67166_67206 = G__67216;
continue;
} else {
var temp__4657__auto___67217 = cljs.core.seq.call(null,seq__67163_67203);
if(temp__4657__auto___67217){
var seq__67163_67218__$1 = temp__4657__auto___67217;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67163_67218__$1)){
var c__7032__auto___67219 = cljs.core.chunk_first.call(null,seq__67163_67218__$1);
var G__67220 = cljs.core.chunk_rest.call(null,seq__67163_67218__$1);
var G__67221 = c__7032__auto___67219;
var G__67222 = cljs.core.count.call(null,c__7032__auto___67219);
var G__67223 = (0);
seq__67163_67203 = G__67220;
chunk__67164_67204 = G__67221;
count__67165_67205 = G__67222;
i__67166_67206 = G__67223;
continue;
} else {
var vec__67172_67224 = cljs.core.first.call(null,seq__67163_67218__$1);
var name_67225 = cljs.core.nth.call(null,vec__67172_67224,(0),null);
var map__67175_67226 = cljs.core.nth.call(null,vec__67172_67224,(1),null);
var map__67175_67227__$1 = ((((!((map__67175_67226 == null)))?((((map__67175_67226.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67175_67226.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67175_67226):map__67175_67226);
var doc_67228 = cljs.core.get.call(null,map__67175_67227__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_67229 = cljs.core.get.call(null,map__67175_67227__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_67225);

cljs.core.println.call(null," ",arglists_67229);

if(cljs.core.truth_(doc_67228)){
cljs.core.println.call(null," ",doc_67228);
} else {
}

var G__67230 = cljs.core.next.call(null,seq__67163_67218__$1);
var G__67231 = null;
var G__67232 = (0);
var G__67233 = (0);
seq__67163_67203 = G__67230;
chunk__67164_67204 = G__67231;
count__67165_67205 = G__67232;
i__67166_67206 = G__67233;
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

return cljs.core.run_BANG_.call(null,((function (specs,map__67157,map__67157__$1,m,n,nm){
return (function (p__67177){
var vec__67178 = p__67177;
var role = cljs.core.nth.call(null,vec__67178,(0),null);
var spec = cljs.core.nth.call(null,vec__67178,(1),null);
if(cljs.core.truth_((function (){var and__6209__auto__ = spec;
if(cljs.core.truth_(and__6209__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__6209__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__67157,map__67157__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map