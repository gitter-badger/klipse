// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43093 = arguments.length;
var i__23691__auto___43094 = (0);
while(true){
if((i__23691__auto___43094 < len__23690__auto___43093)){
args__23697__auto__.push((arguments[i__23691__auto___43094]));

var G__43095 = (i__23691__auto___43094 + (1));
i__23691__auto___43094 = G__43095;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})());
var G__43096 = threaded;
var G__43097 = cljs.core.next.call(null,forms__$1);
x__$1 = G__43096;
forms__$1 = G__43097;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq43089){
var G__43090 = cljs.core.first.call(null,seq43089);
var seq43089__$1 = cljs.core.next.call(null,seq43089);
var G__43091 = cljs.core.first.call(null,seq43089__$1);
var seq43089__$2 = cljs.core.next.call(null,seq43089__$1);
var G__43092 = cljs.core.first.call(null,seq43089__$2);
var seq43089__$3 = cljs.core.next.call(null,seq43089__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__43090,G__43091,G__43092,seq43089__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43102 = arguments.length;
var i__23691__auto___43103 = (0);
while(true){
if((i__23691__auto___43103 < len__23690__auto___43102)){
args__23697__auto__.push((arguments[i__23691__auto___43103]));

var G__43104 = (i__23691__auto___43103 + (1));
i__23691__auto___43103 = G__43104;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__23449__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})());
var G__43105 = threaded;
var G__43106 = cljs.core.next.call(null,forms__$1);
x__$1 = G__43105;
forms__$1 = G__43106;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq43098){
var G__43099 = cljs.core.first.call(null,seq43098);
var seq43098__$1 = cljs.core.next.call(null,seq43098);
var G__43100 = cljs.core.first.call(null,seq43098__$1);
var seq43098__$2 = cljs.core.next.call(null,seq43098__$1);
var G__43101 = cljs.core.first.call(null,seq43098__$2);
var seq43098__$3 = cljs.core.next.call(null,seq43098__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__43099,G__43100,G__43101,seq43098__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args43107 = [];
var len__23690__auto___43115 = arguments.length;
var i__23691__auto___43116 = (0);
while(true){
if((i__23691__auto___43116 < len__23690__auto___43115)){
args43107.push((arguments[i__23691__auto___43116]));

var G__43117 = (i__23691__auto___43116 + (1));
i__23691__auto___43116 = G__43117;
continue;
} else {
}
break;
}

var G__43114 = args43107.length;
switch (G__43114) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43107.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq43108){
var G__43109 = cljs.core.first.call(null,seq43108);
var seq43108__$1 = cljs.core.next.call(null,seq43108);
var G__43110 = cljs.core.first.call(null,seq43108__$1);
var seq43108__$2 = cljs.core.next.call(null,seq43108__$1);
var G__43111 = cljs.core.first.call(null,seq43108__$2);
var seq43108__$3 = cljs.core.next.call(null,seq43108__$2);
var G__43112 = cljs.core.first.call(null,seq43108__$3);
var seq43108__$4 = cljs.core.next.call(null,seq43108__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__43109,G__43110,G__43111,G__43112,seq43108__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43122 = arguments.length;
var i__23691__auto___43123 = (0);
while(true){
if((i__23691__auto___43123 < len__23690__auto___43122)){
args__23697__auto__.push((arguments[i__23691__auto___43123]));

var G__43124 = (i__23691__auto___43123 + (1));
i__23691__auto___43123 = G__43124;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq43119){
var G__43120 = cljs.core.first.call(null,seq43119);
var seq43119__$1 = cljs.core.next.call(null,seq43119);
var G__43121 = cljs.core.first.call(null,seq43119__$1);
var seq43119__$2 = cljs.core.next.call(null,seq43119__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__43120,G__43121,seq43119__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43128 = arguments.length;
var i__23691__auto___43129 = (0);
while(true){
if((i__23691__auto___43129 < len__23690__auto___43128)){
args__23697__auto__.push((arguments[i__23691__auto___43129]));

var G__43130 = (i__23691__auto___43129 + (1));
i__23691__auto___43129 = G__43130;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__23449__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$2);
})(),x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq43125){
var G__43126 = cljs.core.first.call(null,seq43125);
var seq43125__$1 = cljs.core.next.call(null,seq43125);
var G__43127 = cljs.core.first.call(null,seq43125__$1);
var seq43125__$2 = cljs.core.next.call(null,seq43125__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__43126,G__43127,seq43125__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43135 = arguments.length;
var i__23691__auto___43136 = (0);
while(true){
if((i__23691__auto___43136 < len__23690__auto___43135)){
args__23697__auto__.push((arguments[i__23691__auto___43136]));

var G__43137 = (i__23691__auto___43136 + (1));
i__23691__auto___43136 = G__43137;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__43131_SHARP_){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.vary_meta.call(null,p1__43131_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq43132){
var G__43133 = cljs.core.first.call(null,seq43132);
var seq43132__$1 = cljs.core.next.call(null,seq43132);
var G__43134 = cljs.core.first.call(null,seq43132__$1);
var seq43132__$2 = cljs.core.next.call(null,seq43132__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__43133,G__43134,seq43132__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43142 = arguments.length;
var i__23691__auto___43143 = (0);
while(true){
if((i__23691__auto___43143 < len__23690__auto___43142)){
args__23697__auto__.push((arguments[i__23691__auto___43143]));

var G__43144 = (i__23691__auto___43143 + (1));
i__23691__auto___43143 = G__43144;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__23449__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq43138){
var G__43139 = cljs.core.first.call(null,seq43138);
var seq43138__$1 = cljs.core.next.call(null,seq43138);
var G__43140 = cljs.core.first.call(null,seq43138__$1);
var seq43138__$2 = cljs.core.next.call(null,seq43138__$1);
var G__43141 = cljs.core.first.call(null,seq43138__$2);
var seq43138__$3 = cljs.core.next.call(null,seq43138__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__43139,G__43140,G__43141,seq43138__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__43145 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__43146 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__43145;
s = G__43146;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__43151){
var vec__43152 = p__43151;
var t = cljs.core.nth.call(null,vec__43152,(0),null);
var fs = cljs.core.nth.call(null,vec__43152,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__23449__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43159 = arguments.length;
var i__23691__auto___43160 = (0);
while(true){
if((i__23691__auto___43160 < len__23690__auto___43159)){
args__23697__auto__.push((arguments[i__23691__auto___43160]));

var G__43161 = (i__23691__auto___43160 + (1));
i__23691__auto___43160 = G__43161;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq43155){
var G__43156 = cljs.core.first.call(null,seq43155);
var seq43155__$1 = cljs.core.next.call(null,seq43155);
var G__43157 = cljs.core.first.call(null,seq43155__$1);
var seq43155__$2 = cljs.core.next.call(null,seq43155__$1);
var G__43158 = cljs.core.first.call(null,seq43155__$2);
var seq43155__$3 = cljs.core.next.call(null,seq43155__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__43156,G__43157,G__43158,seq43155__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__43162 = cljs.core.next.call(null,params__$1);
var G__43163 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__43164 = lets;
params__$1 = G__43162;
new_params = G__43163;
lets = G__43164;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__43165 = cljs.core.next.call(null,params__$1);
var G__43166 = cljs.core.conj.call(null,new_params,gparam);
var G__43167 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__43165;
new_params = G__43166;
lets = G__43167;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43174 = arguments.length;
var i__23691__auto___43175 = (0);
while(true){
if((i__23691__auto___43175 < len__23690__auto___43174)){
args__23697__auto__.push((arguments[i__23691__auto___43175]));

var G__43176 = (i__23691__auto___43175 + (1));
i__23691__auto___43175 = G__43176;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__23449__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__43171 = sig;
var seq__43172 = cljs.core.seq.call(null,vec__43171);
var first__43173 = cljs.core.first.call(null,seq__43172);
var seq__43172__$1 = cljs.core.next.call(null,seq__43172);
var params = first__43173;
var body = seq__43172__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__22615__auto__ = conds;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__23449__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.map.call(null,((function (vec__43171,seq__43172,first__43173,seq__43172__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__23449__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(vec__43171,seq__43172,first__43173,seq__43172__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__43171,seq__43172,first__43173,seq__43172__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__23449__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(vec__43171,seq__43172,first__43173,seq__43172__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq43168){
var G__43169 = cljs.core.first.call(null,seq43168);
var seq43168__$1 = cljs.core.next.call(null,seq43168);
var G__43170 = cljs.core.first.call(null,seq43168__$1);
var seq43168__$2 = cljs.core.next.call(null,seq43168__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__43169,G__43170,seq43168__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43181 = arguments.length;
var i__23691__auto___43182 = (0);
while(true){
if((i__23691__auto___43182 < len__23690__auto___43181)){
args__23697__auto__.push((arguments[i__23691__auto___43182]));

var G__43183 = (i__23691__auto___43182 + (1));
i__23691__auto___43182 = G__43183;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq43177){
var G__43178 = cljs.core.first.call(null,seq43177);
var seq43177__$1 = cljs.core.next.call(null,seq43177);
var G__43179 = cljs.core.first.call(null,seq43177__$1);
var seq43177__$2 = cljs.core.next.call(null,seq43177__$1);
var G__43180 = cljs.core.first.call(null,seq43177__$2);
var seq43177__$3 = cljs.core.next.call(null,seq43177__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__43178,G__43179,G__43180,seq43177__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args43185 = [];
var len__23690__auto___43194 = arguments.length;
var i__23691__auto___43195 = (0);
while(true){
if((i__23691__auto___43195 < len__23690__auto___43194)){
args43185.push((arguments[i__23691__auto___43195]));

var G__43196 = (i__23691__auto___43195 + (1));
i__23691__auto___43195 = G__43196;
continue;
} else {
}
break;
}

var G__43193 = args43185.length;
switch (G__43193) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43185.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__23709__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__23449__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43184__auto__","temp__43184__auto__",-1034826253,null)),(function (){var x__23449__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43184__auto__","temp__43184__auto__",-1034826253,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43184__auto__","temp__43184__auto__",-1034826253,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq43186){
var G__43187 = cljs.core.first.call(null,seq43186);
var seq43186__$1 = cljs.core.next.call(null,seq43186);
var G__43188 = cljs.core.first.call(null,seq43186__$1);
var seq43186__$2 = cljs.core.next.call(null,seq43186__$1);
var G__43189 = cljs.core.first.call(null,seq43186__$2);
var seq43186__$3 = cljs.core.next.call(null,seq43186__$2);
var G__43190 = cljs.core.first.call(null,seq43186__$3);
var seq43186__$4 = cljs.core.next.call(null,seq43186__$3);
var G__43191 = cljs.core.first.call(null,seq43186__$4);
var seq43186__$5 = cljs.core.next.call(null,seq43186__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__43187,G__43188,G__43189,G__43190,G__43191,seq43186__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args43198 = [];
var len__23690__auto___43201 = arguments.length;
var i__23691__auto___43202 = (0);
while(true){
if((i__23691__auto___43202 < len__23690__auto___43201)){
args43198.push((arguments[i__23691__auto___43202]));

var G__43203 = (i__23691__auto___43202 + (1));
i__23691__auto___43202 = G__43203;
continue;
} else {
}
break;
}

var G__43200 = args43198.length;
switch (G__43200) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args43198.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43210 = arguments.length;
var i__23691__auto___43211 = (0);
while(true){
if((i__23691__auto___43211 < len__23690__auto___43210)){
args__23697__auto__.push((arguments[i__23691__auto___43211]));

var G__43212 = (i__23691__auto___43211 + (1));
i__23691__auto___43211 = G__43212;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__43205_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__43205_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq43206){
var G__43207 = cljs.core.first.call(null,seq43206);
var seq43206__$1 = cljs.core.next.call(null,seq43206);
var G__43208 = cljs.core.first.call(null,seq43206__$1);
var seq43206__$2 = cljs.core.next.call(null,seq43206__$1);
var G__43209 = cljs.core.first.call(null,seq43206__$2);
var seq43206__$3 = cljs.core.next.call(null,seq43206__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__43207,G__43208,G__43209,seq43206__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43217 = arguments.length;
var i__23691__auto___43218 = (0);
while(true){
if((i__23691__auto___43218 < len__23690__auto___43217)){
args__23697__auto__.push((arguments[i__23691__auto___43218]));

var G__43219 = (i__23691__auto___43218 + (1));
i__23691__auto___43218 = G__43219;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq43213){
var G__43214 = cljs.core.first.call(null,seq43213);
var seq43213__$1 = cljs.core.next.call(null,seq43213);
var G__43215 = cljs.core.first.call(null,seq43213__$1);
var seq43213__$2 = cljs.core.next.call(null,seq43213__$1);
var G__43216 = cljs.core.first.call(null,seq43213__$2);
var seq43213__$3 = cljs.core.next.call(null,seq43213__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__43214,G__43215,G__43216,seq43213__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43224 = arguments.length;
var i__23691__auto___43225 = (0);
while(true){
if((i__23691__auto___43225 < len__23690__auto___43224)){
args__23697__auto__.push((arguments[i__23691__auto___43225]));

var G__43226 = (i__23691__auto___43225 + (1));
i__23691__auto___43225 = G__43226;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq43220){
var G__43221 = cljs.core.first.call(null,seq43220);
var seq43220__$1 = cljs.core.next.call(null,seq43220);
var G__43222 = cljs.core.first.call(null,seq43220__$1);
var seq43220__$2 = cljs.core.next.call(null,seq43220__$1);
var G__43223 = cljs.core.first.call(null,seq43220__$2);
var seq43220__$3 = cljs.core.next.call(null,seq43220__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__43221,G__43222,G__43223,seq43220__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43235 = arguments.length;
var i__23691__auto___43236 = (0);
while(true){
if((i__23691__auto___43236 < len__23690__auto___43235)){
args__23697__auto__.push((arguments[i__23691__auto___43236]));

var G__43237 = (i__23691__auto___43236 + (1));
i__23691__auto___43236 = G__43237;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__43232 = bindings;
var x = cljs.core.nth.call(null,vec__43232,(0),null);
var xs = cljs.core.nth.call(null,vec__43232,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__43227__auto__","xs__43227__auto__",969686681,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__23449__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__43227__auto__","xs__43227__auto__",969686681,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq43228){
var G__43229 = cljs.core.first.call(null,seq43228);
var seq43228__$1 = cljs.core.next.call(null,seq43228);
var G__43230 = cljs.core.first.call(null,seq43228__$1);
var seq43228__$2 = cljs.core.next.call(null,seq43228__$1);
var G__43231 = cljs.core.first.call(null,seq43228__$2);
var seq43228__$3 = cljs.core.next.call(null,seq43228__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__43229,G__43230,G__43231,seq43228__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43243 = arguments.length;
var i__23691__auto___43244 = (0);
while(true){
if((i__23691__auto___43244 < len__23690__auto___43243)){
args__23697__auto__.push((arguments[i__23691__auto___43244]));

var G__43245 = (i__23691__auto___43244 + (1));
i__23691__auto___43244 = G__43245;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43238__auto__","temp__43238__auto__",2005266342,null)),(function (){var x__23449__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43238__auto__","temp__43238__auto__",2005266342,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43238__auto__","temp__43238__auto__",2005266342,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq43239){
var G__43240 = cljs.core.first.call(null,seq43239);
var seq43239__$1 = cljs.core.next.call(null,seq43239);
var G__43241 = cljs.core.first.call(null,seq43239__$1);
var seq43239__$2 = cljs.core.next.call(null,seq43239__$1);
var G__43242 = cljs.core.first.call(null,seq43239__$2);
var seq43239__$3 = cljs.core.next.call(null,seq43239__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__43240,G__43241,G__43242,seq43239__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43250 = arguments.length;
var i__23691__auto___43251 = (0);
while(true){
if((i__23691__auto___43251 < len__23690__auto___43250)){
args__23697__auto__.push((arguments[i__23691__auto___43251]));

var G__43252 = (i__23691__auto___43251 + (1));
i__23691__auto___43251 = G__43252;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),null),x__23449__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq43246){
var G__43247 = cljs.core.first.call(null,seq43246);
var seq43246__$1 = cljs.core.next.call(null,seq43246);
var G__43248 = cljs.core.first.call(null,seq43246__$1);
var seq43246__$2 = cljs.core.next.call(null,seq43246__$1);
var G__43249 = cljs.core.first.call(null,seq43246__$2);
var seq43246__$3 = cljs.core.next.call(null,seq43246__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__43247,G__43248,G__43249,seq43246__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43257 = arguments.length;
var i__23691__auto___43258 = (0);
while(true){
if((i__23691__auto___43258 < len__23690__auto___43257)){
args__23697__auto__.push((arguments[i__23691__auto___43258]));

var G__43259 = (i__23691__auto___43258 + (1));
i__23691__auto___43258 = G__43259;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq43253){
var G__43254 = cljs.core.first.call(null,seq43253);
var seq43253__$1 = cljs.core.next.call(null,seq43253);
var G__43255 = cljs.core.first.call(null,seq43253__$1);
var seq43253__$2 = cljs.core.next.call(null,seq43253__$1);
var G__43256 = cljs.core.first.call(null,seq43253__$2);
var seq43253__$3 = cljs.core.next.call(null,seq43253__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__43254,G__43255,G__43256,seq43253__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43268 = arguments.length;
var i__23691__auto___43269 = (0);
while(true){
if((i__23691__auto___43269 < len__23690__auto___43268)){
args__23697__auto__.push((arguments[i__23691__auto___43269]));

var G__43270 = (i__23691__auto___43269 + (1));
i__23691__auto___43269 = G__43270;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__43264){
var vec__43265 = p__43264;
var test = cljs.core.nth.call(null,vec__43265,(0),null);
var step = cljs.core.nth.call(null,vec__43265,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq43260){
var G__43261 = cljs.core.first.call(null,seq43260);
var seq43260__$1 = cljs.core.next.call(null,seq43260);
var G__43262 = cljs.core.first.call(null,seq43260__$1);
var seq43260__$2 = cljs.core.next.call(null,seq43260__$1);
var G__43263 = cljs.core.first.call(null,seq43260__$2);
var seq43260__$3 = cljs.core.next.call(null,seq43260__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__43261,G__43262,G__43263,seq43260__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43279 = arguments.length;
var i__23691__auto___43280 = (0);
while(true){
if((i__23691__auto___43280 < len__23690__auto___43279)){
args__23697__auto__.push((arguments[i__23691__auto___43280]));

var G__43281 = (i__23691__auto___43280 + (1));
i__23691__auto___43280 = G__43281;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__43275){
var vec__43276 = p__43275;
var test = cljs.core.nth.call(null,vec__43276,(0),null);
var step = cljs.core.nth.call(null,vec__43276,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq43271){
var G__43272 = cljs.core.first.call(null,seq43271);
var seq43271__$1 = cljs.core.next.call(null,seq43271);
var G__43273 = cljs.core.first.call(null,seq43271__$1);
var seq43271__$2 = cljs.core.next.call(null,seq43271__$1);
var G__43274 = cljs.core.first.call(null,seq43271__$2);
var seq43271__$3 = cljs.core.next.call(null,seq43271__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__43272,G__43273,G__43274,seq43271__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43287 = arguments.length;
var i__23691__auto___43288 = (0);
while(true){
if((i__23691__auto___43288 < len__23690__auto___43287)){
args__23697__auto__.push((arguments[i__23691__auto___43288]));

var G__43289 = (i__23691__auto___43288 + (1));
i__23691__auto___43288 = G__43289;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((4) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23698__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq43282){
var G__43283 = cljs.core.first.call(null,seq43282);
var seq43282__$1 = cljs.core.next.call(null,seq43282);
var G__43284 = cljs.core.first.call(null,seq43282__$1);
var seq43282__$2 = cljs.core.next.call(null,seq43282__$1);
var G__43285 = cljs.core.first.call(null,seq43282__$2);
var seq43282__$3 = cljs.core.next.call(null,seq43282__$2);
var G__43286 = cljs.core.first.call(null,seq43282__$3);
var seq43282__$4 = cljs.core.next.call(null,seq43282__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__43283,G__43284,G__43285,G__43286,seq43282__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43294 = arguments.length;
var i__23691__auto___43295 = (0);
while(true){
if((i__23691__auto___43295 < len__23690__auto___43294)){
args__23697__auto__.push((arguments[i__23691__auto___43295]));

var G__43296 = (i__23691__auto___43295 + (1));
i__23691__auto___43295 = G__43296;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq43290){
var G__43291 = cljs.core.first.call(null,seq43290);
var seq43290__$1 = cljs.core.next.call(null,seq43290);
var G__43292 = cljs.core.first.call(null,seq43290__$1);
var seq43290__$2 = cljs.core.next.call(null,seq43290__$1);
var G__43293 = cljs.core.first.call(null,seq43290__$2);
var seq43290__$3 = cljs.core.next.call(null,seq43290__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__43291,G__43292,G__43293,seq43290__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43301 = arguments.length;
var i__23691__auto___43302 = (0);
while(true){
if((i__23691__auto___43302 < len__23690__auto___43301)){
args__23697__auto__.push((arguments[i__23691__auto___43302]));

var G__43303 = (i__23691__auto___43302 + (1));
i__23691__auto___43302 = G__43303;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq43297){
var G__43298 = cljs.core.first.call(null,seq43297);
var seq43297__$1 = cljs.core.next.call(null,seq43297);
var G__43299 = cljs.core.first.call(null,seq43297__$1);
var seq43297__$2 = cljs.core.next.call(null,seq43297__$1);
var G__43300 = cljs.core.first.call(null,seq43297__$2);
var seq43297__$3 = cljs.core.next.call(null,seq43297__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__43298,G__43299,G__43300,seq43297__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args43305 = [];
var len__23690__auto___43314 = arguments.length;
var i__23691__auto___43315 = (0);
while(true){
if((i__23691__auto___43315 < len__23690__auto___43314)){
args43305.push((arguments[i__23691__auto___43315]));

var G__43316 = (i__23691__auto___43315 + (1));
i__23691__auto___43315 = G__43316;
continue;
} else {
}
break;
}

var G__43313 = args43305.length;
switch (G__43313) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43305.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__23709__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__23449__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43304__auto__","temp__43304__auto__",-1887203567,null)),(function (){var x__23449__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43304__auto__","temp__43304__auto__",-1887203567,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43304__auto__","temp__43304__auto__",-1887203567,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq43306){
var G__43307 = cljs.core.first.call(null,seq43306);
var seq43306__$1 = cljs.core.next.call(null,seq43306);
var G__43308 = cljs.core.first.call(null,seq43306__$1);
var seq43306__$2 = cljs.core.next.call(null,seq43306__$1);
var G__43309 = cljs.core.first.call(null,seq43306__$2);
var seq43306__$3 = cljs.core.next.call(null,seq43306__$2);
var G__43310 = cljs.core.first.call(null,seq43306__$3);
var seq43306__$4 = cljs.core.next.call(null,seq43306__$3);
var G__43311 = cljs.core.first.call(null,seq43306__$4);
var seq43306__$5 = cljs.core.next.call(null,seq43306__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__43307,G__43308,G__43309,G__43310,G__43311,seq43306__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43323 = arguments.length;
var i__23691__auto___43324 = (0);
while(true){
if((i__23691__auto___43324 < len__23690__auto___43323)){
args__23697__auto__.push((arguments[i__23691__auto___43324]));

var G__43325 = (i__23691__auto___43324 + (1));
i__23691__auto___43324 = G__43325;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43318__auto__","temp__43318__auto__",-282452604,null)),(function (){var x__23449__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43318__auto__","temp__43318__auto__",-282452604,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__43318__auto__","temp__43318__auto__",-282452604,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq43319){
var G__43320 = cljs.core.first.call(null,seq43319);
var seq43319__$1 = cljs.core.next.call(null,seq43319);
var G__43321 = cljs.core.first.call(null,seq43319__$1);
var seq43319__$2 = cljs.core.next.call(null,seq43319__$1);
var G__43322 = cljs.core.first.call(null,seq43319__$2);
var seq43319__$3 = cljs.core.next.call(null,seq43319__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__43320,G__43321,G__43322,seq43319__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__43326_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__43326_SHARP_)){
return cljs.core.first.call(null,p1__43326_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__43326_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__43326_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__43327_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__43327_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__43328 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__43329 = cljs.core.next.call(null,fdecls);
ret = G__43328;
fdecls = G__43329;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__23449__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__23449__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__43335 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__43336 = n;
var G__43337 = cljs.core.nnext.call(null,bs);
var G__43338 = true;
ret = G__43335;
n = G__43336;
bs = G__43337;
seen_rest_QMARK_ = G__43338;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__43339 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__23449__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__23449__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__23449__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__43340 = (n + (1));
var G__43341 = cljs.core.next.call(null,bs);
var G__43342 = seen_rest_QMARK_;
ret = G__43339;
n = G__43340;
bs = G__43341;
seen_rest_QMARK_ = G__43342;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__23449__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__23449__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))));
var bes = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (p1__43330_SHARP_,p2__43331_SHARP_){
return cljs.core.assoc.call(null,p1__43330_SHARP_,p2__43331_SHARP_,cljs.core.val.call(null,entry).call(null,p2__43331_SHARP_));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),((function (ret,gmap,defaults,pvec,bents){
return (function (p1__43332_SHARP_){
if((p1__43332_SHARP_ instanceof cljs.core.Keyword)){
return p1__43332_SHARP_;
} else {
return cljs.core.keyword.call(null,[cljs.core.str(p1__43332_SHARP_)].join(''));
}
});})(ret,gmap,defaults,pvec,bents))
,new cljs.core.Keyword(null,"strs","strs",1175537277),cljs.core.str,new cljs.core.Keyword(null,"syms","syms",-1575891762),((function (ret,gmap,defaults,pvec,bents){
return (function (p1__43333_SHARP_){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = p1__43333_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(ret,gmap,defaults,pvec,bents))
], null));
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,bb))?cljs.core._conj.call(null,(function (){var x__23449__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$2 = defaults.call(null,bb);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$2);
})(),x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__23449__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__43343 = (((bb instanceof cljs.core.Symbol))?cljs.core.conj.call(null,cljs.core.conj.call(null,ret,(cljs.core.truth_(cljs.core.namespace.call(null,bb))?cljs.core.symbol.call(null,cljs.core.name.call(null,bb)):bb)),bv):(((bb instanceof cljs.core.Keyword))?cljs.core.conj.call(null,ret,cljs.core.symbol.call(null,cljs.core.name.call(null,bb)),bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv)
));
var G__43344 = cljs.core.next.call(null,bes);
ret = G__43343;
bes = G__43344;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__43334_SHARP_){
return (cljs.core.first.call(null,p1__43334_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__23449__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__23449__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43349 = arguments.length;
var i__23691__auto___43350 = (0);
while(true){
if((i__23691__auto___43350 < len__23690__auto___43349)){
args__23697__auto__.push((arguments[i__23691__auto___43350]));

var G__43351 = (i__23691__auto___43350 + (1));
i__23691__auto___43350 = G__43351;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__23449__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq43345){
var G__43346 = cljs.core.first.call(null,seq43345);
var seq43345__$1 = cljs.core.next.call(null,seq43345);
var G__43347 = cljs.core.first.call(null,seq43345__$1);
var seq43345__$2 = cljs.core.next.call(null,seq43345__$1);
var G__43348 = cljs.core.first.call(null,seq43345__$2);
var seq43345__$3 = cljs.core.next.call(null,seq43345__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__43346,G__43347,G__43348,seq43345__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43360 = arguments.length;
var i__23691__auto___43361 = (0);
while(true){
if((i__23691__auto___43361 < len__23690__auto___43360)){
args__23697__auto__.push((arguments[i__23691__auto___43361]));

var G__43362 = (i__23691__auto___43361 + (1));
i__23691__auto___43361 = G__43362;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__23449__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__43356){
var vec__43357 = p__43356;
var b = cljs.core.nth.call(null,vec__43357,(0),null);
var v = cljs.core.nth.call(null,vec__43357,(1),null);
var g = cljs.core.nth.call(null,vec__43357,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq43352){
var G__43353 = cljs.core.first.call(null,seq43352);
var seq43352__$1 = cljs.core.next.call(null,seq43352);
var G__43354 = cljs.core.first.call(null,seq43352__$1);
var seq43352__$2 = cljs.core.next.call(null,seq43352__$1);
var G__43355 = cljs.core.first.call(null,seq43352__$2);
var seq43352__$3 = cljs.core.next.call(null,seq43352__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__43353,G__43354,G__43355,seq43352__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__43363_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__43363_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__43364){
var vec__43365 = p__43364;
var p = cljs.core.nth.call(null,vec__43365,(0),null);
var b = cljs.core.nth.call(null,vec__43365,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43371 = arguments.length;
var i__23691__auto___43372 = (0);
while(true){
if((i__23691__auto___43372 < len__23690__auto___43371)){
args__23697__auto__.push((arguments[i__23691__auto___43372]));

var G__43373 = (i__23691__auto___43372 + (1));
i__23691__auto___43372 = G__43373;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq43368){
var G__43369 = cljs.core.first.call(null,seq43368);
var seq43368__$1 = cljs.core.next.call(null,seq43368);
var G__43370 = cljs.core.first.call(null,seq43368__$1);
var seq43368__$2 = cljs.core.next.call(null,seq43368__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__43369,G__43370,seq43368__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__22603__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__22603__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__22603__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args43377 = [];
var len__23690__auto___43384 = arguments.length;
var i__23691__auto___43385 = (0);
while(true){
if((i__23691__auto___43385 < len__23690__auto___43384)){
args43377.push((arguments[i__23691__auto___43385]));

var G__43386 = (i__23691__auto___43385 + (1));
i__23691__auto___43385 = G__43386;
continue;
} else {
}
break;
}

var G__43383 = args43377.length;
switch (G__43383) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43377.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23709__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__43374_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__43374_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__43375_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__43375_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__23449__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__43376__auto__","and__43376__auto__",-615585455,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__43376__auto__","and__43376__auto__",-615585455,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__43376__auto__","and__43376__auto__",-615585455,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq43378){
var G__43379 = cljs.core.first.call(null,seq43378);
var seq43378__$1 = cljs.core.next.call(null,seq43378);
var G__43380 = cljs.core.first.call(null,seq43378__$1);
var seq43378__$2 = cljs.core.next.call(null,seq43378__$1);
var G__43381 = cljs.core.first.call(null,seq43378__$2);
var seq43378__$3 = cljs.core.next.call(null,seq43378__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__43379,G__43380,G__43381,seq43378__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args43391 = [];
var len__23690__auto___43398 = arguments.length;
var i__23691__auto___43399 = (0);
while(true){
if((i__23691__auto___43399 < len__23690__auto___43398)){
args43391.push((arguments[i__23691__auto___43399]));

var G__43400 = (i__23691__auto___43399 + (1));
i__23691__auto___43399 = G__43400;
continue;
} else {
}
break;
}

var G__43397 = args43391.length;
switch (G__43397) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43391.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23709__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__43388_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__43388_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__43389_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__43389_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__23449__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__43390__auto__","or__43390__auto__",-240931799,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__43390__auto__","or__43390__auto__",-240931799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__43390__auto__","or__43390__auto__",-240931799,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq43392){
var G__43393 = cljs.core.first.call(null,seq43392);
var seq43392__$1 = cljs.core.next.call(null,seq43392);
var G__43394 = cljs.core.first.call(null,seq43392__$1);
var seq43392__$2 = cljs.core.next.call(null,seq43392__$1);
var G__43395 = cljs.core.first.call(null,seq43392__$2);
var seq43392__$3 = cljs.core.next.call(null,seq43392__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__43393,G__43394,G__43395,seq43392__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__23449__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__43406 = clojure.string.split.call(null,comment,/\n/);
var seq__43407 = cljs.core.seq.call(null,vec__43406);
var first__43408 = cljs.core.first.call(null,seq__43407);
var seq__43407__$1 = cljs.core.next.call(null,seq__43407);
var x = first__43408;
var ys = seq__43407__$1;
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__43406,seq__43407,first__43408,seq__43407__$1,x,ys){
return (function (p1__43402_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__43402_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__43406,seq__43407,first__43408,seq__43407__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$2);
})(),x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43409__auto__","c__43409__auto__",169297541,null)),(function (){var x__23449__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43410__auto__","x__43410__auto__",835781685,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43410__auto__","x__43410__auto__",835781685,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__43409__auto__","c__43409__auto__",169297541,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args43411 = [];
var len__23690__auto___43419 = arguments.length;
var i__23691__auto___43420 = (0);
while(true){
if((i__23691__auto___43420 < len__23690__auto___43419)){
args43411.push((arguments[i__23691__auto___43420]));

var G__43421 = (i__23691__auto___43420 + (1));
i__23691__auto___43420 = G__43421;
continue;
} else {
}
break;
}

var G__43418 = args43411.length;
switch (G__43418) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43411.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__23449__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq43412){
var G__43413 = cljs.core.first.call(null,seq43412);
var seq43412__$1 = cljs.core.next.call(null,seq43412);
var G__43414 = cljs.core.first.call(null,seq43412__$1);
var seq43412__$2 = cljs.core.next.call(null,seq43412__$1);
var G__43415 = cljs.core.first.call(null,seq43412__$2);
var seq43412__$3 = cljs.core.next.call(null,seq43412__$2);
var G__43416 = cljs.core.first.call(null,seq43412__$3);
var seq43412__$4 = cljs.core.next.call(null,seq43412__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__43413,G__43414,G__43415,G__43416,seq43412__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args43423 = [];
var len__23690__auto___43432 = arguments.length;
var i__23691__auto___43433 = (0);
while(true){
if((i__23691__auto___43433 < len__23690__auto___43432)){
args43423.push((arguments[i__23691__auto___43433]));

var G__43434 = (i__23691__auto___43433 + (1));
i__23691__auto___43433 = G__43434;
continue;
} else {
}
break;
}

var G__43431 = args43423.length;
switch (G__43431) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43423.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__23709__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$2);
})(),x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__23449__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq43424){
var G__43425 = cljs.core.first.call(null,seq43424);
var seq43424__$1 = cljs.core.next.call(null,seq43424);
var G__43426 = cljs.core.first.call(null,seq43424__$1);
var seq43424__$2 = cljs.core.next.call(null,seq43424__$1);
var G__43427 = cljs.core.first.call(null,seq43424__$2);
var seq43424__$3 = cljs.core.next.call(null,seq43424__$2);
var G__43428 = cljs.core.first.call(null,seq43424__$3);
var seq43424__$4 = cljs.core.next.call(null,seq43424__$3);
var G__43429 = cljs.core.first.call(null,seq43424__$4);
var seq43424__$5 = cljs.core.next.call(null,seq43424__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__43425,G__43426,G__43427,G__43428,G__43429,seq43424__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args43436 = [];
var len__23690__auto___43444 = arguments.length;
var i__23691__auto___43445 = (0);
while(true){
if((i__23691__auto___43445 < len__23690__auto___43444)){
args43436.push((arguments[i__23691__auto___43445]));

var G__43446 = (i__23691__auto___43445 + (1));
i__23691__auto___43445 = G__43446;
continue;
} else {
}
break;
}

var G__43443 = args43436.length;
switch (G__43443) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43436.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq43437){
var G__43438 = cljs.core.first.call(null,seq43437);
var seq43437__$1 = cljs.core.next.call(null,seq43437);
var G__43439 = cljs.core.first.call(null,seq43437__$1);
var seq43437__$2 = cljs.core.next.call(null,seq43437__$1);
var G__43440 = cljs.core.first.call(null,seq43437__$2);
var seq43437__$3 = cljs.core.next.call(null,seq43437__$2);
var G__43441 = cljs.core.first.call(null,seq43437__$3);
var seq43437__$4 = cljs.core.next.call(null,seq43437__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__43438,G__43439,G__43440,G__43441,seq43437__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43451 = arguments.length;
var i__23691__auto___43452 = (0);
while(true){
if((i__23691__auto___43452 < len__23690__auto___43451)){
args__23697__auto__.push((arguments[i__23691__auto___43452]));

var G__43453 = (i__23691__auto___43452 + (1));
i__23691__auto___43452 = G__43453;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq43448){
var G__43449 = cljs.core.first.call(null,seq43448);
var seq43448__$1 = cljs.core.next.call(null,seq43448);
var G__43450 = cljs.core.first.call(null,seq43448__$1);
var seq43448__$2 = cljs.core.next.call(null,seq43448__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__43449,G__43450,seq43448__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43457 = arguments.length;
var i__23691__auto___43458 = (0);
while(true){
if((i__23691__auto___43458 < len__23690__auto___43457)){
args__23697__auto__.push((arguments[i__23691__auto___43458]));

var G__43459 = (i__23691__auto___43458 + (1));
i__23691__auto___43458 = G__43459;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq43454){
var G__43455 = cljs.core.first.call(null,seq43454);
var seq43454__$1 = cljs.core.next.call(null,seq43454);
var G__43456 = cljs.core.first.call(null,seq43454__$1);
var seq43454__$2 = cljs.core.next.call(null,seq43454__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__43455,G__43456,seq43454__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43463 = arguments.length;
var i__23691__auto___43464 = (0);
while(true){
if((i__23691__auto___43464 < len__23690__auto___43463)){
args__23697__auto__.push((arguments[i__23691__auto___43464]));

var G__43465 = (i__23691__auto___43464 + (1));
i__23691__auto___43464 = G__43465;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq43460){
var G__43461 = cljs.core.first.call(null,seq43460);
var seq43460__$1 = cljs.core.next.call(null,seq43460);
var G__43462 = cljs.core.first.call(null,seq43460__$1);
var seq43460__$2 = cljs.core.next.call(null,seq43460__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__43461,G__43462,seq43460__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43469 = arguments.length;
var i__23691__auto___43470 = (0);
while(true){
if((i__23691__auto___43470 < len__23690__auto___43469)){
args__23697__auto__.push((arguments[i__23691__auto___43470]));

var G__43471 = (i__23691__auto___43470 + (1));
i__23691__auto___43470 = G__43471;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq43466){
var G__43467 = cljs.core.first.call(null,seq43466);
var seq43466__$1 = cljs.core.next.call(null,seq43466);
var G__43468 = cljs.core.first.call(null,seq43466__$1);
var seq43466__$2 = cljs.core.next.call(null,seq43466__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__43467,G__43468,seq43466__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43475 = arguments.length;
var i__23691__auto___43476 = (0);
while(true){
if((i__23691__auto___43476 < len__23690__auto___43475)){
args__23697__auto__.push((arguments[i__23691__auto___43476]));

var G__43477 = (i__23691__auto___43476 + (1));
i__23691__auto___43476 = G__43477;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq43472){
var G__43473 = cljs.core.first.call(null,seq43472);
var seq43472__$1 = cljs.core.next.call(null,seq43472);
var G__43474 = cljs.core.first.call(null,seq43472__$1);
var seq43472__$2 = cljs.core.next.call(null,seq43472__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__43473,G__43474,seq43472__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43481 = arguments.length;
var i__23691__auto___43482 = (0);
while(true){
if((i__23691__auto___43482 < len__23690__auto___43481)){
args__23697__auto__.push((arguments[i__23691__auto___43482]));

var G__43483 = (i__23691__auto___43482 + (1));
i__23691__auto___43482 = G__43483;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq43478){
var G__43479 = cljs.core.first.call(null,seq43478);
var seq43478__$1 = cljs.core.next.call(null,seq43478);
var G__43480 = cljs.core.first.call(null,seq43478__$1);
var seq43478__$2 = cljs.core.next.call(null,seq43478__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__43479,G__43480,seq43478__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43487 = arguments.length;
var i__23691__auto___43488 = (0);
while(true){
if((i__23691__auto___43488 < len__23690__auto___43487)){
args__23697__auto__.push((arguments[i__23691__auto___43488]));

var G__43489 = (i__23691__auto___43488 + (1));
i__23691__auto___43488 = G__43489;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq43484){
var G__43485 = cljs.core.first.call(null,seq43484);
var seq43484__$1 = cljs.core.next.call(null,seq43484);
var G__43486 = cljs.core.first.call(null,seq43484__$1);
var seq43484__$2 = cljs.core.next.call(null,seq43484__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__43485,G__43486,seq43484__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args43490 = [];
var len__23690__auto___43498 = arguments.length;
var i__23691__auto___43499 = (0);
while(true){
if((i__23691__auto___43499 < len__23690__auto___43498)){
args43490.push((arguments[i__23691__auto___43499]));

var G__43500 = (i__23691__auto___43499 + (1));
i__23691__auto___43499 = G__43500;
continue;
} else {
}
break;
}

var G__43497 = args43490.length;
switch (G__43497) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43490.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq43491){
var G__43492 = cljs.core.first.call(null,seq43491);
var seq43491__$1 = cljs.core.next.call(null,seq43491);
var G__43493 = cljs.core.first.call(null,seq43491__$1);
var seq43491__$2 = cljs.core.next.call(null,seq43491__$1);
var G__43494 = cljs.core.first.call(null,seq43491__$2);
var seq43491__$3 = cljs.core.next.call(null,seq43491__$2);
var G__43495 = cljs.core.first.call(null,seq43491__$3);
var seq43491__$4 = cljs.core.next.call(null,seq43491__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__43492,G__43493,G__43494,G__43495,seq43491__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args43502 = [];
var len__23690__auto___43510 = arguments.length;
var i__23691__auto___43511 = (0);
while(true){
if((i__23691__auto___43511 < len__23690__auto___43510)){
args43502.push((arguments[i__23691__auto___43511]));

var G__43512 = (i__23691__auto___43511 + (1));
i__23691__auto___43511 = G__43512;
continue;
} else {
}
break;
}

var G__43509 = args43502.length;
switch (G__43509) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43502.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq43503){
var G__43504 = cljs.core.first.call(null,seq43503);
var seq43503__$1 = cljs.core.next.call(null,seq43503);
var G__43505 = cljs.core.first.call(null,seq43503__$1);
var seq43503__$2 = cljs.core.next.call(null,seq43503__$1);
var G__43506 = cljs.core.first.call(null,seq43503__$2);
var seq43503__$3 = cljs.core.next.call(null,seq43503__$2);
var G__43507 = cljs.core.first.call(null,seq43503__$3);
var seq43503__$4 = cljs.core.next.call(null,seq43503__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__43504,G__43505,G__43506,G__43507,seq43503__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args43514 = [];
var len__23690__auto___43522 = arguments.length;
var i__23691__auto___43523 = (0);
while(true){
if((i__23691__auto___43523 < len__23690__auto___43522)){
args43514.push((arguments[i__23691__auto___43523]));

var G__43524 = (i__23691__auto___43523 + (1));
i__23691__auto___43523 = G__43524;
continue;
} else {
}
break;
}

var G__43521 = args43514.length;
switch (G__43521) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43514.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq43515){
var G__43516 = cljs.core.first.call(null,seq43515);
var seq43515__$1 = cljs.core.next.call(null,seq43515);
var G__43517 = cljs.core.first.call(null,seq43515__$1);
var seq43515__$2 = cljs.core.next.call(null,seq43515__$1);
var G__43518 = cljs.core.first.call(null,seq43515__$2);
var seq43515__$3 = cljs.core.next.call(null,seq43515__$2);
var G__43519 = cljs.core.first.call(null,seq43515__$3);
var seq43515__$4 = cljs.core.next.call(null,seq43515__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__43516,G__43517,G__43518,G__43519,seq43515__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args43526 = [];
var len__23690__auto___43534 = arguments.length;
var i__23691__auto___43535 = (0);
while(true){
if((i__23691__auto___43535 < len__23690__auto___43534)){
args43526.push((arguments[i__23691__auto___43535]));

var G__43536 = (i__23691__auto___43535 + (1));
i__23691__auto___43535 = G__43536;
continue;
} else {
}
break;
}

var G__43533 = args43526.length;
switch (G__43533) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43526.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq43527){
var G__43528 = cljs.core.first.call(null,seq43527);
var seq43527__$1 = cljs.core.next.call(null,seq43527);
var G__43529 = cljs.core.first.call(null,seq43527__$1);
var seq43527__$2 = cljs.core.next.call(null,seq43527__$1);
var G__43530 = cljs.core.first.call(null,seq43527__$2);
var seq43527__$3 = cljs.core.next.call(null,seq43527__$2);
var G__43531 = cljs.core.first.call(null,seq43527__$3);
var seq43527__$4 = cljs.core.next.call(null,seq43527__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__43528,G__43529,G__43530,G__43531,seq43527__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args43538 = [];
var len__23690__auto___43546 = arguments.length;
var i__23691__auto___43547 = (0);
while(true){
if((i__23691__auto___43547 < len__23690__auto___43546)){
args43538.push((arguments[i__23691__auto___43547]));

var G__43548 = (i__23691__auto___43547 + (1));
i__23691__auto___43547 = G__43548;
continue;
} else {
}
break;
}

var G__43545 = args43538.length;
switch (G__43545) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43538.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq43539){
var G__43540 = cljs.core.first.call(null,seq43539);
var seq43539__$1 = cljs.core.next.call(null,seq43539);
var G__43541 = cljs.core.first.call(null,seq43539__$1);
var seq43539__$2 = cljs.core.next.call(null,seq43539__$1);
var G__43542 = cljs.core.first.call(null,seq43539__$2);
var seq43539__$3 = cljs.core.next.call(null,seq43539__$2);
var G__43543 = cljs.core.first.call(null,seq43539__$3);
var seq43539__$4 = cljs.core.next.call(null,seq43539__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__43540,G__43541,G__43542,G__43543,seq43539__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args43550 = [];
var len__23690__auto___43558 = arguments.length;
var i__23691__auto___43559 = (0);
while(true){
if((i__23691__auto___43559 < len__23690__auto___43558)){
args43550.push((arguments[i__23691__auto___43559]));

var G__43560 = (i__23691__auto___43559 + (1));
i__23691__auto___43559 = G__43560;
continue;
} else {
}
break;
}

var G__43557 = args43550.length;
switch (G__43557) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43550.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq43551){
var G__43552 = cljs.core.first.call(null,seq43551);
var seq43551__$1 = cljs.core.next.call(null,seq43551);
var G__43553 = cljs.core.first.call(null,seq43551__$1);
var seq43551__$2 = cljs.core.next.call(null,seq43551__$1);
var G__43554 = cljs.core.first.call(null,seq43551__$2);
var seq43551__$3 = cljs.core.next.call(null,seq43551__$2);
var G__43555 = cljs.core.first.call(null,seq43551__$3);
var seq43551__$4 = cljs.core.next.call(null,seq43551__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43552,G__43553,G__43554,G__43555,seq43551__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args43562 = [];
var len__23690__auto___43570 = arguments.length;
var i__23691__auto___43571 = (0);
while(true){
if((i__23691__auto___43571 < len__23690__auto___43570)){
args43562.push((arguments[i__23691__auto___43571]));

var G__43572 = (i__23691__auto___43571 + (1));
i__23691__auto___43571 = G__43572;
continue;
} else {
}
break;
}

var G__43569 = args43562.length;
switch (G__43569) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43562.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq43563){
var G__43564 = cljs.core.first.call(null,seq43563);
var seq43563__$1 = cljs.core.next.call(null,seq43563);
var G__43565 = cljs.core.first.call(null,seq43563__$1);
var seq43563__$2 = cljs.core.next.call(null,seq43563__$1);
var G__43566 = cljs.core.first.call(null,seq43563__$2);
var seq43563__$3 = cljs.core.next.call(null,seq43563__$2);
var G__43567 = cljs.core.first.call(null,seq43563__$3);
var seq43563__$4 = cljs.core.next.call(null,seq43563__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__43564,G__43565,G__43566,G__43567,seq43563__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args43574 = [];
var len__23690__auto___43582 = arguments.length;
var i__23691__auto___43583 = (0);
while(true){
if((i__23691__auto___43583 < len__23690__auto___43582)){
args43574.push((arguments[i__23691__auto___43583]));

var G__43584 = (i__23691__auto___43583 + (1));
i__23691__auto___43583 = G__43584;
continue;
} else {
}
break;
}

var G__43581 = args43574.length;
switch (G__43581) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43574.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq43575){
var G__43576 = cljs.core.first.call(null,seq43575);
var seq43575__$1 = cljs.core.next.call(null,seq43575);
var G__43577 = cljs.core.first.call(null,seq43575__$1);
var seq43575__$2 = cljs.core.next.call(null,seq43575__$1);
var G__43578 = cljs.core.first.call(null,seq43575__$2);
var seq43575__$3 = cljs.core.next.call(null,seq43575__$2);
var G__43579 = cljs.core.first.call(null,seq43575__$3);
var seq43575__$4 = cljs.core.next.call(null,seq43575__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43576,G__43577,G__43578,G__43579,seq43575__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args43586 = [];
var len__23690__auto___43594 = arguments.length;
var i__23691__auto___43595 = (0);
while(true){
if((i__23691__auto___43595 < len__23690__auto___43594)){
args43586.push((arguments[i__23691__auto___43595]));

var G__43596 = (i__23691__auto___43595 + (1));
i__23691__auto___43595 = G__43596;
continue;
} else {
}
break;
}

var G__43593 = args43586.length;
switch (G__43593) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43586.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq43587){
var G__43588 = cljs.core.first.call(null,seq43587);
var seq43587__$1 = cljs.core.next.call(null,seq43587);
var G__43589 = cljs.core.first.call(null,seq43587__$1);
var seq43587__$2 = cljs.core.next.call(null,seq43587__$1);
var G__43590 = cljs.core.first.call(null,seq43587__$2);
var seq43587__$3 = cljs.core.next.call(null,seq43587__$2);
var G__43591 = cljs.core.first.call(null,seq43587__$3);
var seq43587__$4 = cljs.core.next.call(null,seq43587__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43588,G__43589,G__43590,G__43591,seq43587__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args43600 = [];
var len__23690__auto___43608 = arguments.length;
var i__23691__auto___43609 = (0);
while(true){
if((i__23691__auto___43609 < len__23690__auto___43608)){
args43600.push((arguments[i__23691__auto___43609]));

var G__43610 = (i__23691__auto___43609 + (1));
i__23691__auto___43609 = G__43610;
continue;
} else {
}
break;
}

var G__43607 = args43600.length;
switch (G__43607) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43600.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43598__auto__","x__43598__auto__",-1298296693,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__43599__auto__","y__43599__auto__",-1551666097,null)),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43598__auto__","x__43598__auto__",-1298296693,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__43599__auto__","y__43599__auto__",-1551666097,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43598__auto__","x__43598__auto__",-1298296693,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__43599__auto__","y__43599__auto__",-1551666097,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq43601){
var G__43602 = cljs.core.first.call(null,seq43601);
var seq43601__$1 = cljs.core.next.call(null,seq43601);
var G__43603 = cljs.core.first.call(null,seq43601__$1);
var seq43601__$2 = cljs.core.next.call(null,seq43601__$1);
var G__43604 = cljs.core.first.call(null,seq43601__$2);
var seq43601__$3 = cljs.core.next.call(null,seq43601__$2);
var G__43605 = cljs.core.first.call(null,seq43601__$3);
var seq43601__$4 = cljs.core.next.call(null,seq43601__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__43602,G__43603,G__43604,G__43605,seq43601__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args43614 = [];
var len__23690__auto___43622 = arguments.length;
var i__23691__auto___43623 = (0);
while(true){
if((i__23691__auto___43623 < len__23690__auto___43622)){
args43614.push((arguments[i__23691__auto___43623]));

var G__43624 = (i__23691__auto___43623 + (1));
i__23691__auto___43623 = G__43624;
continue;
} else {
}
break;
}

var G__43621 = args43614.length;
switch (G__43621) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43614.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43612__auto__","x__43612__auto__",551296751,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__43613__auto__","y__43613__auto__",2099631138,null)),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43612__auto__","x__43612__auto__",551296751,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__43613__auto__","y__43613__auto__",2099631138,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43612__auto__","x__43612__auto__",551296751,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__43613__auto__","y__43613__auto__",2099631138,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq43615){
var G__43616 = cljs.core.first.call(null,seq43615);
var seq43615__$1 = cljs.core.next.call(null,seq43615);
var G__43617 = cljs.core.first.call(null,seq43615__$1);
var seq43615__$2 = cljs.core.next.call(null,seq43615__$1);
var G__43618 = cljs.core.first.call(null,seq43615__$2);
var seq43615__$3 = cljs.core.next.call(null,seq43615__$2);
var G__43619 = cljs.core.first.call(null,seq43615__$3);
var seq43615__$4 = cljs.core.next.call(null,seq43615__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__43616,G__43617,G__43618,G__43619,seq43615__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args43626 = [];
var len__23690__auto___43634 = arguments.length;
var i__23691__auto___43635 = (0);
while(true){
if((i__23691__auto___43635 < len__23690__auto___43634)){
args43626.push((arguments[i__23691__auto___43635]));

var G__43636 = (i__23691__auto___43635 + (1));
i__23691__auto___43635 = G__43636;
continue;
} else {
}
break;
}

var G__43633 = args43626.length;
switch (G__43633) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43626.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq43627){
var G__43628 = cljs.core.first.call(null,seq43627);
var seq43627__$1 = cljs.core.next.call(null,seq43627);
var G__43629 = cljs.core.first.call(null,seq43627__$1);
var seq43627__$2 = cljs.core.next.call(null,seq43627__$1);
var G__43630 = cljs.core.first.call(null,seq43627__$2);
var seq43627__$3 = cljs.core.next.call(null,seq43627__$2);
var G__43631 = cljs.core.first.call(null,seq43627__$3);
var seq43627__$4 = cljs.core.next.call(null,seq43627__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__43628,G__43629,G__43630,G__43631,seq43627__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args43638 = [];
var len__23690__auto___43646 = arguments.length;
var i__23691__auto___43647 = (0);
while(true){
if((i__23691__auto___43647 < len__23690__auto___43646)){
args43638.push((arguments[i__23691__auto___43647]));

var G__43648 = (i__23691__auto___43647 + (1));
i__23691__auto___43647 = G__43648;
continue;
} else {
}
break;
}

var G__43645 = args43638.length;
switch (G__43645) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43638.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq43639){
var G__43640 = cljs.core.first.call(null,seq43639);
var seq43639__$1 = cljs.core.next.call(null,seq43639);
var G__43641 = cljs.core.first.call(null,seq43639__$1);
var seq43639__$2 = cljs.core.next.call(null,seq43639__$1);
var G__43642 = cljs.core.first.call(null,seq43639__$2);
var seq43639__$3 = cljs.core.next.call(null,seq43639__$2);
var G__43643 = cljs.core.first.call(null,seq43639__$3);
var seq43639__$4 = cljs.core.next.call(null,seq43639__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__43640,G__43641,G__43642,G__43643,seq43639__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args43650 = [];
var len__23690__auto___43658 = arguments.length;
var i__23691__auto___43659 = (0);
while(true){
if((i__23691__auto___43659 < len__23690__auto___43658)){
args43650.push((arguments[i__23691__auto___43659]));

var G__43660 = (i__23691__auto___43659 + (1));
i__23691__auto___43659 = G__43660;
continue;
} else {
}
break;
}

var G__43657 = args43650.length;
switch (G__43657) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43650.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq43651){
var G__43652 = cljs.core.first.call(null,seq43651);
var seq43651__$1 = cljs.core.next.call(null,seq43651);
var G__43653 = cljs.core.first.call(null,seq43651__$1);
var seq43651__$2 = cljs.core.next.call(null,seq43651__$1);
var G__43654 = cljs.core.first.call(null,seq43651__$2);
var seq43651__$3 = cljs.core.next.call(null,seq43651__$2);
var G__43655 = cljs.core.first.call(null,seq43651__$3);
var seq43651__$4 = cljs.core.next.call(null,seq43651__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__43652,G__43653,G__43654,G__43655,seq43651__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args43662 = [];
var len__23690__auto___43670 = arguments.length;
var i__23691__auto___43671 = (0);
while(true){
if((i__23691__auto___43671 < len__23690__auto___43670)){
args43662.push((arguments[i__23691__auto___43671]));

var G__43672 = (i__23691__auto___43671 + (1));
i__23691__auto___43671 = G__43672;
continue;
} else {
}
break;
}

var G__43669 = args43662.length;
switch (G__43669) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43662.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq43663){
var G__43664 = cljs.core.first.call(null,seq43663);
var seq43663__$1 = cljs.core.next.call(null,seq43663);
var G__43665 = cljs.core.first.call(null,seq43663__$1);
var seq43663__$2 = cljs.core.next.call(null,seq43663__$1);
var G__43666 = cljs.core.first.call(null,seq43663__$2);
var seq43663__$3 = cljs.core.next.call(null,seq43663__$2);
var G__43667 = cljs.core.first.call(null,seq43663__$3);
var seq43663__$4 = cljs.core.next.call(null,seq43663__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__43664,G__43665,G__43666,G__43667,seq43663__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args43674 = [];
var len__23690__auto___43682 = arguments.length;
var i__23691__auto___43683 = (0);
while(true){
if((i__23691__auto___43683 < len__23690__auto___43682)){
args43674.push((arguments[i__23691__auto___43683]));

var G__43684 = (i__23691__auto___43683 + (1));
i__23691__auto___43683 = G__43684;
continue;
} else {
}
break;
}

var G__43681 = args43674.length;
switch (G__43681) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args43674.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq43675){
var G__43676 = cljs.core.first.call(null,seq43675);
var seq43675__$1 = cljs.core.next.call(null,seq43675);
var G__43677 = cljs.core.first.call(null,seq43675__$1);
var seq43675__$2 = cljs.core.next.call(null,seq43675__$1);
var G__43678 = cljs.core.first.call(null,seq43675__$2);
var seq43675__$3 = cljs.core.next.call(null,seq43675__$2);
var G__43679 = cljs.core.first.call(null,seq43675__$3);
var seq43675__$4 = cljs.core.next.call(null,seq43675__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__43676,G__43677,G__43678,G__43679,seq43675__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__23449__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__43686__auto__","h__43686__auto__",-752839308,null)),(function (){var x__23449__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__43686__auto__","h__43686__auto__",-752839308,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__43686__auto__","h__43686__auto__",-752839308,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__43686__auto__","h__43686__auto__",-752839308,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__43686__auto__","h__43686__auto__",-752839308,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__43686__auto__","h__43686__auto__",-752839308,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43687__auto__","x__43687__auto__",1031671497,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43687__auto__","x__43687__auto__",1031671497,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43695 = arguments.length;
var i__23691__auto___43696 = (0);
while(true){
if((i__23691__auto___43696 < len__23690__auto___43695)){
args__23697__auto__.push((arguments[i__23691__auto___43696]));

var G__43697 = (i__23691__auto___43696 + (1));
i__23691__auto___43696 = G__43697;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((6) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__23698__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq43688){
var G__43689 = cljs.core.first.call(null,seq43688);
var seq43688__$1 = cljs.core.next.call(null,seq43688);
var G__43690 = cljs.core.first.call(null,seq43688__$1);
var seq43688__$2 = cljs.core.next.call(null,seq43688__$1);
var G__43691 = cljs.core.first.call(null,seq43688__$2);
var seq43688__$3 = cljs.core.next.call(null,seq43688__$2);
var G__43692 = cljs.core.first.call(null,seq43688__$3);
var seq43688__$4 = cljs.core.next.call(null,seq43688__$3);
var G__43693 = cljs.core.first.call(null,seq43688__$4);
var seq43688__$5 = cljs.core.next.call(null,seq43688__$4);
var G__43694 = cljs.core.first.call(null,seq43688__$5);
var seq43688__$6 = cljs.core.next.call(null,seq43688__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__43689,G__43690,G__43691,G__43692,G__43693,G__43694,seq43688__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = clojure.walk.postwalk.call(null,(function (p1__43698_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__43698_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__43698_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__43698_SHARP_));
} else {
return p1__43698_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__43699,fkv){
var vec__43703 = p__43699;
var f1 = cljs.core.nth.call(null,vec__43703,(0),null);
var k = cljs.core.nth.call(null,vec__43703,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43709 = arguments.length;
var i__23691__auto___43710 = (0);
while(true){
if((i__23691__auto___43710 < len__23690__auto___43709)){
args__23697__auto__.push((arguments[i__23691__auto___43710]));

var G__43711 = (i__23691__auto___43710 + (1));
i__23691__auto___43710 = G__43711;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__23449__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__23449__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),locals,(function (){var x__23449__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),locals,(function (){var x__23449__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq43706){
var G__43707 = cljs.core.first.call(null,seq43706);
var seq43706__$1 = cljs.core.next.call(null,seq43706);
var G__43708 = cljs.core.first.call(null,seq43706__$1);
var seq43706__$2 = cljs.core.next.call(null,seq43706__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__43707,G__43708,seq43706__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43716 = arguments.length;
var i__23691__auto___43717 = (0);
while(true){
if((i__23691__auto___43717 < len__23690__auto___43716)){
args__23697__auto__.push((arguments[i__23691__auto___43717]));

var G__43718 = (i__23691__auto___43717 + (1));
i__23691__auto___43717 = G__43718;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq43712){
var G__43713 = cljs.core.first.call(null,seq43712);
var seq43712__$1 = cljs.core.next.call(null,seq43712);
var G__43714 = cljs.core.first.call(null,seq43712__$1);
var seq43712__$2 = cljs.core.next.call(null,seq43712__$1);
var G__43715 = cljs.core.first.call(null,seq43712__$2);
var seq43712__$3 = cljs.core.next.call(null,seq43712__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43713,G__43714,G__43715,seq43712__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43723 = arguments.length;
var i__23691__auto___43724 = (0);
while(true){
if((i__23691__auto___43724 < len__23690__auto___43723)){
args__23697__auto__.push((arguments[i__23691__auto___43724]));

var G__43725 = (i__23691__auto___43724 + (1));
i__23691__auto___43724 = G__43725;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq43719){
var G__43720 = cljs.core.first.call(null,seq43719);
var seq43719__$1 = cljs.core.next.call(null,seq43719);
var G__43721 = cljs.core.first.call(null,seq43719__$1);
var seq43719__$2 = cljs.core.next.call(null,seq43719__$1);
var G__43722 = cljs.core.first.call(null,seq43719__$2);
var seq43719__$3 = cljs.core.next.call(null,seq43719__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__43720,G__43721,G__43722,seq43719__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43730 = arguments.length;
var i__23691__auto___43731 = (0);
while(true){
if((i__23691__auto___43731 < len__23690__auto___43730)){
args__23697__auto__.push((arguments[i__23691__auto___43731]));

var G__43732 = (i__23691__auto___43731 + (1));
i__23691__auto___43731 = G__43732;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq43726){
var G__43727 = cljs.core.first.call(null,seq43726);
var seq43726__$1 = cljs.core.next.call(null,seq43726);
var G__43728 = cljs.core.first.call(null,seq43726__$1);
var seq43726__$2 = cljs.core.next.call(null,seq43726__$1);
var G__43729 = cljs.core.first.call(null,seq43726__$2);
var seq43726__$3 = cljs.core.next.call(null,seq43726__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__43727,G__43728,G__43729,seq43726__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__22603__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__22603__auto__)){
var and__22603__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__22603__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__22603__auto____$1;
}
} else {
return and__22603__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__43733 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__43734 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__43733;
s = G__43734;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__43735){
var vec__43743 = p__43735;
var p = cljs.core.nth.call(null,vec__43743,(0),null);
var sigs = cljs.core.nth.call(null,vec__43743,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__23449__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__43743,p,sigs){
return (function (p__43746){
var vec__43747 = p__43746;
var seq__43748 = cljs.core.seq.call(null,vec__43747);
var first__43749 = cljs.core.first.call(null,seq__43748);
var seq__43748__$1 = cljs.core.next.call(null,seq__43748);
var f = first__43749;
var meths = seq__43748__$1;
var form = vec__43747;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(psym,pfn_prefix,vec__43743,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__23540__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23541__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23542__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23543__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23544__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__,hierarchy__23544__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__,hierarchy__23544__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23544__auto__,method_table__23540__auto__,prefer_table__23541__auto__,method_cache__23542__auto__,cached_hierarchy__23543__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__23449__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__23449__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__23449__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__43750){
var vec__43757 = p__43750;
var seq__43758 = cljs.core.seq.call(null,vec__43757);
var first__43759 = cljs.core.first.call(null,seq__43758);
var seq__43758__$1 = cljs.core.next.call(null,seq__43758);
var vec__43760 = first__43759;
var seq__43761 = cljs.core.seq.call(null,vec__43760);
var first__43762 = cljs.core.first.call(null,seq__43761);
var seq__43761__$1 = cljs.core.next.call(null,seq__43761);
var this$ = first__43762;
var args = seq__43761__$1;
var sig = vec__43760;
var body = seq__43758__$1;
var x__23449__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__43763){
var vec__43770 = p__43763;
var seq__43771 = cljs.core.seq.call(null,vec__43770);
var first__43772 = cljs.core.first.call(null,seq__43771);
var seq__43771__$1 = cljs.core.next.call(null,seq__43771);
var vec__43773 = first__43772;
var seq__43774 = cljs.core.seq.call(null,vec__43773);
var first__43775 = cljs.core.first.call(null,seq__43774);
var seq__43774__$1 = cljs.core.next.call(null,seq__43774);
var this$ = first__43775;
var args = seq__43774__$1;
var sig = vec__43773;
var body = seq__43771__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__23449__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__43776){
var vec__43783 = p__43776;
var seq__43784 = cljs.core.seq.call(null,vec__43783);
var first__43785 = cljs.core.first.call(null,seq__43784);
var seq__43784__$1 = cljs.core.next.call(null,seq__43784);
var vec__43786 = first__43785;
var seq__43787 = cljs.core.seq.call(null,vec__43786);
var first__43788 = cljs.core.first.call(null,seq__43787);
var seq__43787__$1 = cljs.core.next.call(null,seq__43787);
var this$ = first__43788;
var args = seq__43787__$1;
var sig = vec__43786;
var body = seq__43784__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__23449__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__43789){
var vec__43796 = p__43789;
var seq__43797 = cljs.core.seq.call(null,vec__43796);
var first__43798 = cljs.core.first.call(null,seq__43797);
var seq__43797__$1 = cljs.core.next.call(null,seq__43797);
var vec__43799 = first__43798;
var seq__43800 = cljs.core.seq.call(null,vec__43799);
var first__43801 = cljs.core.first.call(null,seq__43800);
var seq__43800__$1 = cljs.core.next.call(null,seq__43800);
var this$ = first__43801;
var args = seq__43800__$1;
var sig = vec__43799;
var body = seq__43797__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__23449__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__43810){
var vec__43811 = p__43810;
var seq__43812 = cljs.core.seq.call(null,vec__43811);
var first__43813 = cljs.core.first.call(null,seq__43812);
var seq__43812__$1 = cljs.core.next.call(null,seq__43812);
var f = first__43813;
var meths = seq__43812__$1;
var form = vec__43811;
var vec__43814 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__43814,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__43814,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__43814,f__$1,meths__$1,vec__43811,seq__43812,first__43813,seq__43812__$1,f,meths,form){
return (function (p1__43802_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__43802_SHARP_);
});})(vec__43814,f__$1,meths__$1,vec__43811,seq__43812,first__43813,seq__43812__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__43818){
var vec__43822 = p__43818;
var seq__43823 = cljs.core.seq.call(null,vec__43822);
var first__43824 = cljs.core.first.call(null,seq__43823);
var seq__43823__$1 = cljs.core.next.call(null,seq__43823);
var f = first__43824;
var meths = seq__43823__$1;
var form = vec__43822;
return cljs.core.map.call(null,((function (vec__43822,seq__43823,first__43824,seq__43823__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(vec__43822,seq__43823,first__43824,seq__43823__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__43822,seq__43823,first__43824,seq__43823__$1,f,meths,form){
return (function (p1__43817_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__43817_SHARP_);
});})(vec__43822,seq__43823,first__43824,seq__43823__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__43826){
var vec__43830 = p__43826;
var seq__43831 = cljs.core.seq.call(null,vec__43830);
var first__43832 = cljs.core.first.call(null,seq__43831);
var seq__43831__$1 = cljs.core.next.call(null,seq__43831);
var f = first__43832;
var meths = seq__43831__$1;
var form = vec__43830;
var meths__$1 = cljs.core.map.call(null,((function (vec__43830,seq__43831,first__43832,seq__43831__$1,f,meths,form){
return (function (p1__43825_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__43825_SHARP_);
});})(vec__43830,seq__43831,first__43832,seq__43831__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__23449__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__23449__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__23449__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__23449__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__43833){
var vec__43841 = p__43833;
var seq__43842 = cljs.core.seq.call(null,vec__43841);
var first__43843 = cljs.core.first.call(null,seq__43842);
var seq__43842__$1 = cljs.core.next.call(null,seq__43842);
var f = first__43843;
var meths = seq__43842__$1;
var form = vec__43841;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__43841,seq__43842,first__43843,seq__43842__$1,f,meths,form){
return (function (p__43844){
var vec__43845 = p__43844;
var seq__43846 = cljs.core.seq.call(null,vec__43845);
var first__43847 = cljs.core.first.call(null,seq__43846);
var seq__43846__$1 = cljs.core.next.call(null,seq__43846);
var sig = first__43847;
var body = seq__43846__$1;
var meth = vec__43845;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(pf,vec__43841,seq__43842,first__43843,seq__43842__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__43848){
var vec__43852 = p__43848;
var p = cljs.core.nth.call(null,vec__43852,(0),null);
var sigs = cljs.core.nth.call(null,vec__43852,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__43852,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__43852,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__43858 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__43858,(0),null);
var sigs = cljs.core.nth.call(null,vec__43858,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_43861 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_43861))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__43862 = cljs.core.next.call(null,sigs__$1);
var G__43863 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__43862;
seen = G__43863;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_43870 = cljs.core.PersistentHashSet.EMPTY;
var methods_43871__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_43871__$1)){
var vec__43867_43872 = cljs.core.first.call(null,methods_43871__$1);
var fname_43873 = cljs.core.nth.call(null,vec__43867_43872,(0),null);
var method_43874 = vec__43867_43872;
if(cljs.core.contains_QMARK_.call(null,seen_43870,fname_43873)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_43873], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_43874);

var G__43875 = cljs.core.conj.call(null,seen_43870,fname_43873);
var G__43876 = cljs.core.next.call(null,methods_43871__$1);
seen_43870 = G__43875;
methods_43871__$1 = G__43876;
continue;
} else {
}
break;
}

var G__43877 = cljs.core.conj.call(null,protos,proto);
var G__43878 = impls__$2;
protos = G__43877;
impls__$1 = G__43878;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43887 = arguments.length;
var i__23691__auto___43888 = (0);
while(true){
if((i__23691__auto___43888 < len__23690__auto___43887)){
args__23697__auto__.push((arguments[i__23691__auto___43888]));

var G__43889 = (i__23691__auto___43888 + (1));
i__23691__auto___43888 = G__43889;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__43884 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__43884,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__43884,(1),null);
if(cljs.core.truth_((function (){var and__22603__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__22603__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__43884,type,assign_impls){
return (function (p1__43879_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__43879_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__43884,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq43880){
var G__43881 = cljs.core.first.call(null,seq43880);
var seq43880__$1 = cljs.core.next.call(null,seq43880);
var G__43882 = cljs.core.first.call(null,seq43880__$1);
var seq43880__$2 = cljs.core.next.call(null,seq43880__$1);
var G__43883 = cljs.core.first.call(null,seq43880__$2);
var seq43880__$3 = cljs.core.next.call(null,seq43880__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__43881,G__43882,G__43883,seq43880__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__43891){
var vec__43895 = p__43891;
var f = cljs.core.nth.call(null,vec__43895,(0),null);
var sigs = cljs.core.nth.call(null,vec__43895,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__43895,f,sigs){
return (function (p1__43890_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__43890_SHARP_),cljs.core.nnext.call(null,p1__43890_SHARP_));
});})(vec__43895,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args43898 = [];
var len__23690__auto___43901 = arguments.length;
var i__23691__auto___43902 = (0);
while(true){
if((i__23691__auto___43902 < len__23690__auto___43901)){
args43898.push((arguments[i__23691__auto___43902]));

var G__43903 = (i__23691__auto___43902 + (1));
i__23691__auto___43902 = G__43903;
continue;
} else {
}
break;
}

var G__43900 = args43898.length;
switch (G__43900) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43898.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__43905 = ret__$1;
var G__43906 = specs__$2;
ret = G__43905;
specs__$1 = G__43906;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__43907_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__43907_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__23449__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43919 = arguments.length;
var i__23691__auto___43920 = (0);
while(true){
if((i__23691__auto___43920 < len__23690__auto___43919)){
args__23697__auto__.push((arguments[i__23691__auto___43920]));

var G__43921 = (i__23691__auto___43920 + (1));
i__23691__auto___43920 = G__43921;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((4) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23698__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__43916 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__43916,(0),null);
var pmasks = cljs.core.nth.call(null,vec__43916,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__23449__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__23449__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__23449__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__23449__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__23449__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__23449__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43908__auto__","this__43908__auto__",-1509116575,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43909__auto__","writer__43909__auto__",-1863845879,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__43910__auto__","opt__43910__auto__",1179997706,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43909__auto__","writer__43909__auto__",-1863845879,null)),(function (){var x__23449__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq43911){
var G__43912 = cljs.core.first.call(null,seq43911);
var seq43911__$1 = cljs.core.next.call(null,seq43911);
var G__43913 = cljs.core.first.call(null,seq43911__$1);
var seq43911__$2 = cljs.core.next.call(null,seq43911__$1);
var G__43914 = cljs.core.first.call(null,seq43911__$2);
var seq43911__$3 = cljs.core.next.call(null,seq43911__$2);
var G__43915 = cljs.core.first.call(null,seq43911__$3);
var seq43911__$4 = cljs.core.next.call(null,seq43911__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__43912,G__43913,G__43914,G__43915,seq43911__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__43922_SHARP_){
return cljs.core.with_meta.call(null,p1__43922_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43923__auto__","this__43923__auto__",657115467,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43924__auto__","this__43924__auto__",-1774162309,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43924__auto__","this__43924__auto__",-1774162309,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43925__auto__","this__43925__auto__",2031664350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__43926__auto__","other__43926__auto__",-415053918,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__43926__auto__","other__43926__auto__",-415053918,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43925__auto__","this__43925__auto__",2031664350,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__43926__auto__","other__43926__auto__",-415053918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43925__auto__","this__43925__auto__",2031664350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__43926__auto__","other__43926__auto__",-415053918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43927__auto__","this__43927__auto__",418091747,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43928__auto__","this__43928__auto__",-910430554,null)),(function (){var x__23449__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43929__auto__","this__43929__auto__",869485706,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43930__auto__","k__43930__auto__",-598071369,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43929__auto__","this__43929__auto__",869485706,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43930__auto__","k__43930__auto__",-598071369,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43931__auto__","this__43931__auto__",-425800614,null)),(function (){var x__23449__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__43932__auto__","else__43932__auto__",-1336610623,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__23449__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__23449__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__43932__auto__","else__43932__auto__",-1336610623,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43933__auto__","this__43933__auto__",2121952131,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__23449__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43934__auto__","this__43934__auto__",1749961374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43935__auto__","entry__43935__auto__",647177512,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43935__auto__","entry__43935__auto__",647177512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43934__auto__","this__43934__auto__",1749961374,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43935__auto__","entry__43935__auto__",647177512,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43935__auto__","entry__43935__auto__",647177512,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43934__auto__","this__43934__auto__",1749961374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__43935__auto__","entry__43935__auto__",647177512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43936__auto__","this__43936__auto__",-1594930159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43937__auto__","k__43937__auto__",-953015471,null)),(function (){var x__23449__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43937__auto__","k__43937__auto__",-953015471,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43937__auto__","k__43937__auto__",-953015471,null)),(function (){var x__23449__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43938__auto__","this__43938__auto__",1635062830,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43939__auto__","k__43939__auto__",-193321207,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43939__auto__","k__43939__auto__",-193321207,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43938__auto__","this__43938__auto__",1635062830,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43939__auto__","k__43939__auto__",-193321207,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__43939__auto__","k__43939__auto__",-193321207,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43941__auto__","this__43941__auto__",-821178126,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__43940_SHARP_){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.keyword.call(null,p1__43940_SHARP_);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = p1__43940_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__23449__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43943__auto__","this__43943__auto__",-2048075862,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43944__auto__","writer__43944__auto__",126502228,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__43945__auto__","opts__43945__auto__",-821361249,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__43946__auto__","pr-pair__43946__auto__",-204168405,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__43947__auto__","keyval__43947__auto__",-298395946,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43944__auto__","writer__43944__auto__",126502228,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__43945__auto__","opts__43945__auto__",-821361249,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__43947__auto__","keyval__43947__auto__",-298395946,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43944__auto__","writer__43944__auto__",126502228,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__43946__auto__","pr-pair__43946__auto__",-204168405,null)),(function (){var x__23449__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__43945__auto__","opts__43945__auto__",-821361249,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__43942_SHARP_){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.keyword.call(null,p1__43942_SHARP_);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = p1__43942_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))], null));
var vec__43951 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__43951,(0),null);
var pmasks = cljs.core.nth.call(null,vec__43951,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__23449__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__23449__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__23449__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__23449__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43961 = arguments.length;
var i__23691__auto___43962 = (0);
while(true){
if((i__23691__auto___43962 < len__23690__auto___43961)){
args__23697__auto__.push((arguments[i__23691__auto___43962]));

var G__43963 = (i__23691__auto___43962 + (1));
i__23691__auto___43962 = G__43963;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((4) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23698__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__23449__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__23449__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__23449__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43954__auto__","this__43954__auto__",-1660440156,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__23449__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__23449__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__43954__auto__","this__43954__auto__",-1660440156,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43955__auto__","writer__43955__auto__",424913802,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__43955__auto__","writer__43955__auto__",424913802,null)),(function (){var x__23449__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq43956){
var G__43957 = cljs.core.first.call(null,seq43956);
var seq43956__$1 = cljs.core.next.call(null,seq43956);
var G__43958 = cljs.core.first.call(null,seq43956__$1);
var seq43956__$2 = cljs.core.next.call(null,seq43956__$1);
var G__43959 = cljs.core.first.call(null,seq43956__$2);
var seq43956__$3 = cljs.core.next.call(null,seq43956__$2);
var G__43960 = cljs.core.first.call(null,seq43956__$3);
var seq43956__$4 = cljs.core.next.call(null,seq43956__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__43957,G__43958,G__43959,G__43960,seq43956__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__23697__auto__ = [];
var len__23690__auto___43991 = arguments.length;
var i__23691__auto___43992 = (0);
while(true){
if((i__23691__auto___43992 < len__23690__auto___43991)){
args__23697__auto__.push((arguments[i__23691__auto___43992]));

var G__43993 = (i__23691__auto___43992 + (1));
i__23691__auto___43992 = G__43993;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__43970 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__43970,(0),null);
var methods$ = cljs.core.nth.call(null,vec__43970,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__43970,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__43970,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__43973 = cljs.core.seq.call(null,methods$);
var chunk__43974 = null;
var count__43975 = (0);
var i__43976 = (0);
while(true){
if((i__43976 < count__43975)){
var vec__43977 = cljs.core._nth.call(null,chunk__43974,i__43976);
var seq__43978 = cljs.core.seq.call(null,vec__43977);
var first__43979 = cljs.core.first.call(null,seq__43978);
var seq__43978__$1 = cljs.core.next.call(null,seq__43978);
var mname = first__43979;
var arities = seq__43978__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__43994 = seq__43973;
var G__43995 = chunk__43974;
var G__43996 = count__43975;
var G__43997 = (i__43976 + (1));
seq__43973 = G__43994;
chunk__43974 = G__43995;
count__43975 = G__43996;
i__43976 = G__43997;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43973);
if(temp__4657__auto__){
var seq__43973__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43973__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__43973__$1);
var G__43998 = cljs.core.chunk_rest.call(null,seq__43973__$1);
var G__43999 = c__23426__auto__;
var G__44000 = cljs.core.count.call(null,c__23426__auto__);
var G__44001 = (0);
seq__43973 = G__43998;
chunk__43974 = G__43999;
count__43975 = G__44000;
i__43976 = G__44001;
continue;
} else {
var vec__43980 = cljs.core.first.call(null,seq__43973__$1);
var seq__43981 = cljs.core.seq.call(null,vec__43980);
var first__43982 = cljs.core.first.call(null,seq__43981);
var seq__43981__$1 = cljs.core.next.call(null,seq__43981);
var mname = first__43982;
var arities = seq__43981__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__44002 = cljs.core.next.call(null,seq__43973__$1);
var G__44003 = null;
var G__44004 = (0);
var G__44005 = (0);
seq__43973 = G__44002;
chunk__43974 = G__44003;
count__43975 = G__44004;
i__43976 = G__44005;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = sig;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43964__auto__","x__43964__auto__",-1022169023,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43965__auto__","m__43965__auto__",1277947071,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__23449__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__43964__auto__","x__43964__auto__",-1022169023,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43965__auto__","m__43965__auto__",1277947071,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43965__auto__","m__43965__auto__",1277947071,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43965__auto__","m__43965__auto__",1277947071,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__23449__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43965__auto__","m__43965__auto__",1277947071,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__43965__auto__","m__43965__auto__",1277947071,null)),sig)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__23449__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.first.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__43983){
var vec__43984 = p__43983;
var seq__43985 = cljs.core.seq.call(null,vec__43984);
var first__43986 = cljs.core.first.call(null,seq__43985);
var seq__43985__$1 = cljs.core.next.call(null,seq__43985);
var fname = first__43986;
var sigs = seq__43985__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__43987){
var vec__43988 = p__43987;
var seq__43989 = cljs.core.seq.call(null,vec__43988);
var first__43990 = cljs.core.first.call(null,seq__43989);
var seq__43989__$1 = cljs.core.next.call(null,seq__43989);
var fname = first__43990;
var sigs = seq__43989__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__23449__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__43988,seq__43989,first__43990,seq__43989__$1,fname,sigs,p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__43988,seq__43989,first__43990,seq__43989__$1,fname,sigs,p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__43970,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__23449__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq43966){
var G__43967 = cljs.core.first.call(null,seq43966);
var seq43966__$1 = cljs.core.next.call(null,seq43966);
var G__43968 = cljs.core.first.call(null,seq43966__$1);
var seq43966__$2 = cljs.core.next.call(null,seq43966__$1);
var G__43969 = cljs.core.first.call(null,seq43966__$2);
var seq43966__$3 = cljs.core.next.call(null,seq43966__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__43967,G__43968,G__43969,seq43966__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__44009 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__44009,(0),null);
var bit = cljs.core.nth.call(null,vec__44009,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__23449__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__23449__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__44015 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__44015,(0),null);
var bit = cljs.core.nth.call(null,vec__44015,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__23449__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__23449__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__23449__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__23449__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__23449__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__23449__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44021 = arguments.length;
var i__23691__auto___44022 = (0);
while(true){
if((i__23691__auto___44022 < len__23690__auto___44021)){
args__23697__auto__.push((arguments[i__23691__auto___44022]));

var G__44023 = (i__23691__auto___44022 + (1));
i__23691__auto___44022 = G__44023;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq44018){
var G__44019 = cljs.core.first.call(null,seq44018);
var seq44018__$1 = cljs.core.next.call(null,seq44018);
var G__44020 = cljs.core.first.call(null,seq44018__$1);
var seq44018__$2 = cljs.core.next.call(null,seq44018__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__44019,G__44020,seq44018__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44027 = arguments.length;
var i__23691__auto___44028 = (0);
while(true){
if((i__23691__auto___44028 < len__23690__auto___44027)){
args__23697__auto__.push((arguments[i__23691__auto___44028]));

var G__44029 = (i__23691__auto___44028 + (1));
i__23691__auto___44028 = G__44029;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq44024){
var G__44025 = cljs.core.first.call(null,seq44024);
var seq44024__$1 = cljs.core.next.call(null,seq44024);
var G__44026 = cljs.core.first.call(null,seq44024__$1);
var seq44024__$2 = cljs.core.next.call(null,seq44024__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__44025,G__44026,seq44024__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44038 = arguments.length;
var i__23691__auto___44039 = (0);
while(true){
if((i__23691__auto___44039 < len__23690__auto___44038)){
args__23697__auto__.push((arguments[i__23691__auto___44039]));

var G__44040 = (i__23691__auto___44039 + (1));
i__23691__auto___44039 = G__44040;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__44034){
var vec__44035 = p__44034;
var k = cljs.core.nth.call(null,vec__44035,(0),null);
var v = cljs.core.nth.call(null,vec__44035,(1),null);
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq44030){
var G__44031 = cljs.core.first.call(null,seq44030);
var seq44030__$1 = cljs.core.next.call(null,seq44030);
var G__44032 = cljs.core.first.call(null,seq44030__$1);
var seq44030__$2 = cljs.core.next.call(null,seq44030__$1);
var G__44033 = cljs.core.first.call(null,seq44030__$2);
var seq44030__$3 = cljs.core.next.call(null,seq44030__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__44031,G__44032,G__44033,seq44030__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44045 = arguments.length;
var i__23691__auto___44046 = (0);
while(true){
if((i__23691__auto___44046 < len__23690__auto___44045)){
args__23697__auto__.push((arguments[i__23691__auto___44046]));

var G__44047 = (i__23691__auto___44046 + (1));
i__23691__auto___44046 = G__44047;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__23449__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq44041){
var G__44042 = cljs.core.first.call(null,seq44041);
var seq44041__$1 = cljs.core.next.call(null,seq44041);
var G__44043 = cljs.core.first.call(null,seq44041__$1);
var seq44041__$2 = cljs.core.next.call(null,seq44041__$1);
var G__44044 = cljs.core.first.call(null,seq44041__$2);
var seq44041__$3 = cljs.core.next.call(null,seq44041__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__44042,G__44043,G__44044,seq44041__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44066 = arguments.length;
var i__23691__auto___44067 = (0);
while(true){
if((i__23691__auto___44067 < len__23690__auto___44066)){
args__23697__auto__.push((arguments[i__23691__auto___44067]));

var G__44068 = (i__23691__auto___44067 + (1));
i__23691__auto___44067 = G__44068;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((4) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23698__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__44060 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__44063 = cljs.core.nth.call(null,vec__44060,(0),null);
var a = cljs.core.nth.call(null,vec__44063,(0),null);
var b = cljs.core.nth.call(null,vec__44063,(1),null);
var c = cljs.core.nth.call(null,vec__44063,(2),null);
var clause = vec__44063;
var more = cljs.core.nth.call(null,vec__44060,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__23449__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__44048__auto__","p__44048__auto__",232035668,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__44048__auto__","p__44048__auto__",232035668,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq44049){
var G__44050 = cljs.core.first.call(null,seq44049);
var seq44049__$1 = cljs.core.next.call(null,seq44049);
var G__44051 = cljs.core.first.call(null,seq44049__$1);
var seq44049__$2 = cljs.core.next.call(null,seq44049__$1);
var G__44052 = cljs.core.first.call(null,seq44049__$2);
var seq44049__$3 = cljs.core.next.call(null,seq44049__$2);
var G__44053 = cljs.core.first.call(null,seq44049__$3);
var seq44049__$4 = cljs.core.next.call(null,seq44049__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__44050,G__44051,G__44052,G__44053,seq44049__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__22603__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__22603__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__22603__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44089 = arguments.length;
var i__23691__auto___44090 = (0);
while(true){
if((i__23691__auto___44090 < len__23690__auto___44089)){
args__23697__auto__.push((arguments[i__23691__auto___44090]));

var G__44091 = (i__23691__auto___44090 + (1));
i__23691__auto___44090 = G__44091;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__23449__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__44077){
var vec__44078 = p__44077;
var test = cljs.core.nth.call(null,vec__44078,(0),null);
var expr = cljs.core.nth.call(null,vec__44078,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__44078,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__23449__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__44078,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__23449__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (default$,env,pairs,esym,tests){
return (function (p1__44069_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__44069_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__44070_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__44070_SHARP_)){
return cljs.core.vec.call(null,p1__44070_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44070_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__23449__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__44072_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__44072_SHARP_)){
return cljs.core.vec.call(null,p1__44072_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44072_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__44071_SHARP_){
return [cljs.core.str(p1__44071_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__23449__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__23449__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__23449__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__44085){
var vec__44086 = p__44085;
var m = cljs.core.nth.call(null,vec__44086,(0),null);
var c = cljs.core.nth.call(null,vec__44086,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__23449__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__23449__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq44073){
var G__44074 = cljs.core.first.call(null,seq44073);
var seq44073__$1 = cljs.core.next.call(null,seq44073);
var G__44075 = cljs.core.first.call(null,seq44073__$1);
var seq44073__$2 = cljs.core.next.call(null,seq44073__$1);
var G__44076 = cljs.core.first.call(null,seq44073__$2);
var seq44073__$3 = cljs.core.next.call(null,seq44073__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__44074,G__44075,G__44076,seq44073__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args44092 = [];
var len__23690__auto___44095 = arguments.length;
var i__23691__auto___44096 = (0);
while(true){
if((i__23691__auto___44096 < len__23690__auto___44095)){
args44092.push((arguments[i__23691__auto___44096]));

var G__44097 = (i__23691__auto___44096 + (1));
i__23691__auto___44096 = G__44097;
continue;
} else {
}
break;
}

var G__44094 = args44092.length;
switch (G__44094) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args44092.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__23449__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__23449__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__23449__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__44185){
var vec__44186 = p__44185;
var k = cljs.core.nth.call(null,vec__44186,(0),null);
var v = cljs.core.nth.call(null,vec__44186,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__44266__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__44266 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__44267__i = 0, G__44267__a = new Array(arguments.length -  0);
while (G__44267__i < G__44267__a.length) {G__44267__a[G__44267__i] = arguments[G__44267__i + 0]; ++G__44267__i;}
  msg = new cljs.core.IndexedSeq(G__44267__a,0);
} 
return G__44266__delegate.call(this,msg);};
G__44266.cljs$lang$maxFixedArity = 0;
G__44266.cljs$lang$applyTo = (function (arglist__44268){
var msg = cljs.core.seq(arglist__44268);
return G__44266__delegate(msg);
});
G__44266.cljs$core$IFn$_invoke$arity$variadic = G__44266__delegate;
return G__44266;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__44189){
var vec__44228 = p__44189;
var seq__44229 = cljs.core.seq.call(null,vec__44228);
var first__44230 = cljs.core.first.call(null,seq__44229);
var seq__44229__$1 = cljs.core.next.call(null,seq__44229);
var vec__44231 = first__44230;
var seq__44232 = cljs.core.seq.call(null,vec__44231);
var first__44233 = cljs.core.first.call(null,seq__44232);
var seq__44232__$1 = cljs.core.next.call(null,seq__44232);
var bind = first__44233;
var first__44233__$1 = cljs.core.first.call(null,seq__44232__$1);
var seq__44232__$2 = cljs.core.next.call(null,seq__44232__$1);
var expr = first__44233__$1;
var mod_pairs = seq__44232__$2;
var vec__44234 = seq__44229__$1;
var vec__44237 = cljs.core.nth.call(null,vec__44234,(0),null);
var _ = cljs.core.nth.call(null,vec__44237,(0),null);
var next_expr = cljs.core.nth.call(null,vec__44237,(1),null);
var next_groups = vec__44234;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__44228,seq__44229,first__44230,seq__44229__$1,vec__44231,seq__44232,first__44233,seq__44232__$1,bind,first__44233__$1,seq__44232__$2,expr,mod_pairs,vec__44234,vec__44237,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__44240){
var vec__44247 = p__44240;
var seq__44248 = cljs.core.seq.call(null,vec__44247);
var first__44249 = cljs.core.first.call(null,seq__44248);
var seq__44248__$1 = cljs.core.next.call(null,seq__44248);
var vec__44250 = first__44249;
var k = cljs.core.nth.call(null,vec__44250,(0),null);
var v = cljs.core.nth.call(null,vec__44250,(1),null);
var pair = vec__44250;
var etc = seq__44248__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__44099__auto__","iterys__44099__auto__",531916736,null)),(function (){var x__23449__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__44100__auto__","fs__44100__auto__",-1993082267,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__44099__auto__","iterys__44099__auto__",531916736,null)),(function (){var x__23449__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__44100__auto__","fs__44100__auto__",-1993082267,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__44100__auto__","fs__44100__auto__",-1993082267,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__23449__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__44228,seq__44229,first__44230,seq__44229__$1,vec__44231,seq__44232,first__44233,seq__44232__$1,bind,first__44233__$1,seq__44232__$2,expr,mod_pairs,vec__44234,vec__44237,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__44228,seq__44229,first__44230,seq__44229__$1,vec__44231,seq__44232,first__44233,seq__44232__$1,bind,first__44233__$1,seq__44232__$2,expr,mod_pairs,vec__44234,vec__44237,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__44253){
var vec__44260 = p__44253;
var seq__44261 = cljs.core.seq.call(null,vec__44260);
var first__44262 = cljs.core.first.call(null,seq__44261);
var seq__44261__$1 = cljs.core.next.call(null,seq__44261);
var vec__44263 = first__44262;
var k = cljs.core.nth.call(null,vec__44263,(0),null);
var v = cljs.core.nth.call(null,vec__44263,(1),null);
var pair = vec__44263;
var etc = seq__44261__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__23449__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__23449__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__23449__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__44228,seq__44229,first__44230,seq__44229__$1,vec__44231,seq__44232,first__44233,seq__44232__$1,bind,first__44233__$1,seq__44232__$2,expr,mod_pairs,vec__44234,vec__44237,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__44101__auto__","c__44101__auto__",1359217901,null)),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/yehonathan.sharvit/prj/klipse/resources/public/fig/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2298),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2298),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__44102__auto__","size__44102__auto__",-1652070257,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__44101__auto__","c__44101__auto__",1359217901,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__44102__auto__","size__44102__auto__",-1652070257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__44102__auto__","size__44102__auto__",-1652070257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__44101__auto__","c__44101__auto__",1359217901,null)),(function (){var x__23449__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__23449__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__23449__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__23449__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__44103__auto__","iter__44103__auto__",-856742875,null)),(function (){var x__23449__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__44103__auto__","iter__44103__auto__",-856742875,null)),(function (){var x__23449__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44274 = arguments.length;
var i__23691__auto___44275 = (0);
while(true){
if((i__23691__auto___44275 < len__23690__auto___44274)){
args__23697__auto__.push((arguments[i__23691__auto___44275]));

var G__44276 = (i__23691__auto___44275 + (1));
i__23691__auto___44275 = G__44276;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__44277__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__44277 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__44278__i = 0, G__44278__a = new Array(arguments.length -  0);
while (G__44278__i < G__44278__a.length) {G__44278__a[G__44278__i] = arguments[G__44278__i + 0]; ++G__44278__i;}
  msg = new cljs.core.IndexedSeq(G__44278__a,0);
} 
return G__44277__delegate.call(this,msg);};
G__44277.cljs$lang$maxFixedArity = 0;
G__44277.cljs$lang$applyTo = (function (arglist__44279){
var msg = cljs.core.seq(arglist__44279);
return G__44277__delegate(msg);
});
G__44277.cljs$core$IFn$_invoke$arity$variadic = G__44277__delegate;
return G__44277;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__23449__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__23449__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__23449__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__44269__auto__","c__44269__auto__",-588851554,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__44269__auto__","c__44269__auto__",-588851554,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__44269__auto__","c__44269__auto__",-588851554,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__23449__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq44270){
var G__44271 = cljs.core.first.call(null,seq44270);
var seq44270__$1 = cljs.core.next.call(null,seq44270);
var G__44272 = cljs.core.first.call(null,seq44270__$1);
var seq44270__$2 = cljs.core.next.call(null,seq44270__$1);
var G__44273 = cljs.core.first.call(null,seq44270__$2);
var seq44270__$3 = cljs.core.next.call(null,seq44270__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__44271,G__44272,G__44273,seq44270__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44283 = arguments.length;
var i__23691__auto___44284 = (0);
while(true){
if((i__23691__auto___44284 < len__23690__auto___44283)){
args__23697__auto__.push((arguments[i__23691__auto___44284]));

var G__44285 = (i__23691__auto___44284 + (1));
i__23691__auto___44284 = G__44285;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq44280){
var G__44281 = cljs.core.first.call(null,seq44280);
var seq44280__$1 = cljs.core.next.call(null,seq44280);
var G__44282 = cljs.core.first.call(null,seq44280__$1);
var seq44280__$2 = cljs.core.next.call(null,seq44280__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__44281,G__44282,seq44280__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args44289 = [];
var len__23690__auto___44297 = arguments.length;
var i__23691__auto___44298 = (0);
while(true){
if((i__23691__auto___44298 < len__23690__auto___44297)){
args44289.push((arguments[i__23691__auto___44298]));

var G__44299 = (i__23691__auto___44298 + (1));
i__23691__auto___44298 = G__44299;
continue;
} else {
}
break;
}

var G__44296 = args44289.length;
switch (G__44296) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args44289.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23709__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__23449__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__23449__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__44286__auto__","dims__44286__auto__",-1092694644,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__44287__auto__","dimarray__44287__auto__",-1930981606,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__23449__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__44288__auto__","i__44288__auto__",-1096485789,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__44287__auto__","dimarray__44287__auto__",-1930981606,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__44287__auto__","dimarray__44287__auto__",-1930981606,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__44288__auto__","i__44288__auto__",-1096485789,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__44286__auto__","dims__44286__auto__",-1092694644,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__44287__auto__","dimarray__44287__auto__",-1930981606,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq44290){
var G__44291 = cljs.core.first.call(null,seq44290);
var seq44290__$1 = cljs.core.next.call(null,seq44290);
var G__44292 = cljs.core.first.call(null,seq44290__$1);
var seq44290__$2 = cljs.core.next.call(null,seq44290__$1);
var G__44293 = cljs.core.first.call(null,seq44290__$2);
var seq44290__$3 = cljs.core.next.call(null,seq44290__$2);
var G__44294 = cljs.core.first.call(null,seq44290__$3);
var seq44290__$4 = cljs.core.next.call(null,seq44290__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__44291,G__44292,G__44293,G__44294,seq44290__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args44302 = [];
var len__23690__auto___44309 = arguments.length;
var i__23691__auto___44310 = (0);
while(true){
if((i__23691__auto___44310 < len__23690__auto___44309)){
args44302.push((arguments[i__23691__auto___44310]));

var G__44311 = (i__23691__auto___44310 + (1));
i__23691__auto___44310 = G__44311;
continue;
} else {
}
break;
}

var G__44308 = args44302.length;
switch (G__44308) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args44302.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23709__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__44301__auto__","x__44301__auto__",-1977646515,null)),(function (){var x__23449__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__44301__auto__","x__44301__auto__",-1977646515,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq44303){
var G__44304 = cljs.core.first.call(null,seq44303);
var seq44303__$1 = cljs.core.next.call(null,seq44303);
var G__44305 = cljs.core.first.call(null,seq44303__$1);
var seq44303__$2 = cljs.core.next.call(null,seq44303__$1);
var G__44306 = cljs.core.first.call(null,seq44303__$2);
var seq44303__$3 = cljs.core.next.call(null,seq44303__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__44304,G__44305,G__44306,seq44303__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args44313 = [];
var len__23690__auto___44319 = arguments.length;
var i__23691__auto___44320 = (0);
while(true){
if((i__23691__auto___44320 < len__23690__auto___44319)){
args44313.push((arguments[i__23691__auto___44320]));

var G__44321 = (i__23691__auto___44320 + (1));
i__23691__auto___44320 = G__44321;
continue;
} else {
}
break;
}

var G__44318 = args44313.length;
switch (G__44318) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args44313.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23709__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq44314){
var G__44315 = cljs.core.first.call(null,seq44314);
var seq44314__$1 = cljs.core.next.call(null,seq44314);
var G__44316 = cljs.core.first.call(null,seq44314__$1);
var seq44314__$2 = cljs.core.next.call(null,seq44314__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__44315,G__44316,seq44314__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args44325 = [];
var len__23690__auto___44331 = arguments.length;
var i__23691__auto___44332 = (0);
while(true){
if((i__23691__auto___44332 < len__23690__auto___44331)){
args44325.push((arguments[i__23691__auto___44332]));

var G__44333 = (i__23691__auto___44332 + (1));
i__23691__auto___44332 = G__44333;
continue;
} else {
}
break;
}

var G__44330 = args44325.length;
switch (G__44330) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args44325.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23709__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__44323_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__44323_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__44324_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__44324_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq44326){
var G__44327 = cljs.core.first.call(null,seq44326);
var seq44326__$1 = cljs.core.next.call(null,seq44326);
var G__44328 = cljs.core.first.call(null,seq44326__$1);
var seq44326__$2 = cljs.core.next.call(null,seq44326__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__44327,G__44328,seq44326__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args44335 = [];
var len__23690__auto___44341 = arguments.length;
var i__23691__auto___44342 = (0);
while(true){
if((i__23691__auto___44342 < len__23690__auto___44341)){
args44335.push((arguments[i__23691__auto___44342]));

var G__44343 = (i__23691__auto___44342 + (1));
i__23691__auto___44342 = G__44343;
continue;
} else {
}
break;
}

var G__44340 = args44335.length;
switch (G__44340) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args44335.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23709__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq44336){
var G__44337 = cljs.core.first.call(null,seq44336);
var seq44336__$1 = cljs.core.next.call(null,seq44336);
var G__44338 = cljs.core.first.call(null,seq44336__$1);
var seq44336__$2 = cljs.core.next.call(null,seq44336__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__44337,G__44338,seq44336__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args44347 = [];
var len__23690__auto___44353 = arguments.length;
var i__23691__auto___44354 = (0);
while(true){
if((i__23691__auto___44354 < len__23690__auto___44353)){
args44347.push((arguments[i__23691__auto___44354]));

var G__44355 = (i__23691__auto___44354 + (1));
i__23691__auto___44354 = G__44355;
continue;
} else {
}
break;
}

var G__44352 = args44347.length;
switch (G__44352) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__23709__auto__ = (new cljs.core.IndexedSeq(args44347.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23709__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__44345_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__44345_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__44346_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__44346_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__23449__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq44348){
var G__44349 = cljs.core.first.call(null,seq44348);
var seq44348__$1 = cljs.core.next.call(null,seq44348);
var G__44350 = cljs.core.first.call(null,seq44348__$1);
var seq44348__$2 = cljs.core.next.call(null,seq44348__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__44349,G__44350,seq44348__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44372 = arguments.length;
var i__23691__auto___44373 = (0);
while(true){
if((i__23691__auto___44373 < len__23690__auto___44372)){
args__23697__auto__.push((arguments[i__23691__auto___44373]));

var G__44374 = (i__23691__auto___44373 + (1));
i__23691__auto___44373 = G__44374;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__44360){
var vec__44361 = p__44360;
var k = cljs.core.nth.call(null,vec__44361,(0),null);
var _ = cljs.core.nth.call(null,vec__44361,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__23449__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__44364){
var vec__44365 = p__44364;
var k = cljs.core.nth.call(null,vec__44365,(0),null);
var v = cljs.core.nth.call(null,vec__44365,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__23449__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__44368){
var vec__44369 = p__44368;
var k = cljs.core.nth.call(null,vec__44369,(0),null);
var v = cljs.core.nth.call(null,vec__44369,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__23449__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__23449__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq44357){
var G__44358 = cljs.core.first.call(null,seq44357);
var seq44357__$1 = cljs.core.next.call(null,seq44357);
var G__44359 = cljs.core.first.call(null,seq44357__$1);
var seq44357__$2 = cljs.core.next.call(null,seq44357__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__44358,G__44359,seq44357__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__44375__auto__","a__44375__auto__",-1811610528,null)),(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__44375__auto__","a__44375__auto__",-1811610528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__44375__auto__","a__44375__auto__",-1811610528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__23449__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__44376__auto__","a__44376__auto__",59135815,null)),(function (){var x__23449__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__23449__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__44376__auto__","a__44376__auto__",59135815,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__23449__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44382 = arguments.length;
var i__23691__auto___44383 = (0);
while(true){
if((i__23691__auto___44383 < len__23690__auto___44382)){
args__23697__auto__.push((arguments[i__23691__auto___44383]));

var G__44384 = (i__23691__auto___44383 + (1));
i__23691__auto___44383 = G__44384;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__44377__auto__","n__44377__auto__",-351385520,null)),(function (){var x__23449__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__44377__auto__","n__44377__auto__",-351385520,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__23449__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq44378){
var G__44379 = cljs.core.first.call(null,seq44378);
var seq44378__$1 = cljs.core.next.call(null,seq44378);
var G__44380 = cljs.core.first.call(null,seq44378__$1);
var seq44378__$2 = cljs.core.next.call(null,seq44378__$1);
var G__44381 = cljs.core.first.call(null,seq44378__$2);
var seq44378__$3 = cljs.core.next.call(null,seq44378__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__44379,G__44380,G__44381,seq44378__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44388 = arguments.length;
var i__23691__auto___44389 = (0);
while(true){
if((i__23691__auto___44389 < len__23690__auto___44388)){
args__23697__auto__.push((arguments[i__23691__auto___44389]));

var G__44390 = (i__23691__auto___44389 + (1));
i__23691__auto___44389 = G__44390;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__44385_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__44385_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq44386){
var G__44387 = cljs.core.first.call(null,seq44386);
var seq44386__$1 = cljs.core.next.call(null,seq44386);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__44387,seq44386__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44400 = arguments.length;
var i__23691__auto___44401 = (0);
while(true){
if((i__23691__auto___44401 < len__23690__auto___44400)){
args__23697__auto__.push((arguments[i__23691__auto___44401]));

var G__44402 = (i__23691__auto___44401 + (1));
i__23691__auto___44401 = G__44402;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__44391__auto__","method-table__44391__auto__",-1869986522,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__44392__auto__","prefer-table__44392__auto__",-104616881,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__44393__auto__","method-cache__44393__auto__",-1300916486,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__44394__auto__","cached-hierarchy__44394__auto__",2048633521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__44395__auto__","hierarchy__44395__auto__",1590053754,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__23449__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__23449__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__44395__auto__","hierarchy__44395__auto__",1590053754,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__44391__auto__","method-table__44391__auto__",-1869986522,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__44392__auto__","prefer-table__44392__auto__",-104616881,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__44393__auto__","method-cache__44393__auto__",-1300916486,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__44394__auto__","cached-hierarchy__44394__auto__",2048633521,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq44396){
var G__44397 = cljs.core.first.call(null,seq44396);
var seq44396__$1 = cljs.core.next.call(null,seq44396);
var G__44398 = cljs.core.first.call(null,seq44396__$1);
var seq44396__$2 = cljs.core.next.call(null,seq44396__$1);
var G__44399 = cljs.core.first.call(null,seq44396__$2);
var seq44396__$3 = cljs.core.next.call(null,seq44396__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__44397,G__44398,G__44399,seq44396__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44408 = arguments.length;
var i__23691__auto___44409 = (0);
while(true){
if((i__23691__auto___44409 < len__23690__auto___44408)){
args__23697__auto__.push((arguments[i__23691__auto___44409]));

var G__44410 = (i__23691__auto___44409 + (1));
i__23691__auto___44409 = G__44410;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((4) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23698__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq44403){
var G__44404 = cljs.core.first.call(null,seq44403);
var seq44403__$1 = cljs.core.next.call(null,seq44403);
var G__44405 = cljs.core.first.call(null,seq44403__$1);
var seq44403__$2 = cljs.core.next.call(null,seq44403__$1);
var G__44406 = cljs.core.first.call(null,seq44403__$2);
var seq44403__$3 = cljs.core.next.call(null,seq44403__$2);
var G__44407 = cljs.core.first.call(null,seq44403__$3);
var seq44403__$4 = cljs.core.next.call(null,seq44403__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__44404,G__44405,G__44406,G__44407,seq44403__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__44411__auto__","start__44411__auto__",-135412506,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__44412__auto__","ret__44412__auto__",-283983305,null)),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__44411__auto__","start__44411__auto__",-135412506,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__44412__auto__","ret__44412__auto__",-283983305,null)))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44427 = arguments.length;
var i__23691__auto___44428 = (0);
while(true){
if((i__23691__auto___44428 < len__23690__auto___44427)){
args__23697__auto__.push((arguments[i__23691__auto___44428]));

var G__44429 = (i__23691__auto___44428 + (1));
i__23691__auto___44428 = G__44429;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((5) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__23698__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__44424){
var map__44425 = p__44424;
var map__44425__$1 = ((((!((map__44425 == null)))?((((map__44425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44425):map__44425);
var print_fn = cljs.core.get.call(null,map__44425__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__44413__auto__","start__44413__auto__",1039117269,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__44414__auto__","ret__44414__auto__",230215479,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___44415__auto__","___44415__auto__",376948547,null)),(function (){var x__23449__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__44416__auto__","end__44416__auto__",1748211414,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__44417__auto__","elapsed__44417__auto__",-500323450,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__44416__auto__","end__44416__auto__",1748211414,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__44413__auto__","start__44413__auto__",1039117269,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__23449__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__23449__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__23449__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__44417__auto__","elapsed__44417__auto__",-500323450,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq44418){
var G__44419 = cljs.core.first.call(null,seq44418);
var seq44418__$1 = cljs.core.next.call(null,seq44418);
var G__44420 = cljs.core.first.call(null,seq44418__$1);
var seq44418__$2 = cljs.core.next.call(null,seq44418__$1);
var G__44421 = cljs.core.first.call(null,seq44418__$2);
var seq44418__$3 = cljs.core.next.call(null,seq44418__$2);
var G__44422 = cljs.core.first.call(null,seq44418__$3);
var seq44418__$4 = cljs.core.next.call(null,seq44418__$3);
var G__44423 = cljs.core.first.call(null,seq44418__$4);
var seq44418__$5 = cljs.core.next.call(null,seq44418__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__44419,G__44420,G__44421,G__44422,G__44423,seq44418__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args44430 = [];
var len__23690__auto___44433 = arguments.length;
var i__23691__auto___44434 = (0);
while(true){
if((i__23691__auto___44434 < len__23690__auto___44433)){
args44430.push((arguments[i__23691__auto___44434]));

var G__44435 = (i__23691__auto___44434 + (1));
i__23691__auto___44434 = G__44435;
continue;
} else {
}
break;
}

var G__44432 = args44430.length;
switch (G__44432) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44430.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__23449__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__23449__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44442 = arguments.length;
var i__23691__auto___44443 = (0);
while(true){
if((i__23691__auto___44443 < len__23690__auto___44442)){
args__23697__auto__.push((arguments[i__23691__auto___44443]));

var G__44444 = (i__23691__auto___44443 + (1));
i__23691__auto___44443 = G__44444;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__44437__auto__","sb__44437__auto__",1331695528,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__44438__auto__","x__44438__auto__",1128848020,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__44437__auto__","sb__44437__auto__",1331695528,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__44438__auto__","x__44438__auto__",1128848020,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__44437__auto__","sb__44437__auto__",1331695528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq44439){
var G__44440 = cljs.core.first.call(null,seq44439);
var seq44439__$1 = cljs.core.next.call(null,seq44439);
var G__44441 = cljs.core.first.call(null,seq44439__$1);
var seq44439__$2 = cljs.core.next.call(null,seq44439__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__44440,G__44441,seq44439__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44449 = arguments.length;
var i__23691__auto___44450 = (0);
while(true){
if((i__23691__auto___44450 < len__23690__auto___44449)){
args__23697__auto__.push((arguments[i__23691__auto___44450]));

var G__44451 = (i__23691__auto___44450 + (1));
i__23691__auto___44450 = G__44451;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((2) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23698__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__44445_SHARP_){
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = p1__44445_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq44446){
var G__44447 = cljs.core.first.call(null,seq44446);
var seq44446__$1 = cljs.core.next.call(null,seq44446);
var G__44448 = cljs.core.first.call(null,seq44446__$1);
var seq44446__$2 = cljs.core.next.call(null,seq44446__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__44447,G__44448,seq44446__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__23449__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__23449__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44452__auto__","this__44452__auto__",791182496,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__44452__auto__","this__44452__auto__",791182496,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__44453){
var vec__44465 = p__44453;
var quote = cljs.core.nth.call(null,vec__44465,(0),null);
var ns = cljs.core.nth.call(null,vec__44465,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__23449__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__44465,quote,ns){
return (function (p__44472){
var vec__44473 = p__44472;
var sym = cljs.core.nth.call(null,vec__44473,(0),null);
var _ = cljs.core.nth.call(null,vec__44473,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__23449__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
});})(vec__44465,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__44476,p__44477){
var vec__44484 = p__44476;
var quote0 = cljs.core.nth.call(null,vec__44484,(0),null);
var ns = cljs.core.nth.call(null,vec__44484,(1),null);
var vec__44487 = p__44477;
var quote1 = cljs.core.nth.call(null,vec__44487,(0),null);
var sym = cljs.core.nth.call(null,vec__44487,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__23449__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44495 = arguments.length;
var i__23691__auto___44496 = (0);
while(true){
if((i__23691__auto___44496 < len__23690__auto___44495)){
args__23697__auto__.push((arguments[i__23691__auto___44496]));

var G__44497 = (i__23691__auto___44496 + (1));
i__23691__auto___44496 = G__44497;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((4) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__23698__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__23449__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__23449__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq44490){
var G__44491 = cljs.core.first.call(null,seq44490);
var seq44490__$1 = cljs.core.next.call(null,seq44490);
var G__44492 = cljs.core.first.call(null,seq44490__$1);
var seq44490__$2 = cljs.core.next.call(null,seq44490__$1);
var G__44493 = cljs.core.first.call(null,seq44490__$2);
var seq44490__$3 = cljs.core.next.call(null,seq44490__$2);
var G__44494 = cljs.core.first.call(null,seq44490__$3);
var seq44490__$4 = cljs.core.next.call(null,seq44490__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44491,G__44492,G__44493,G__44494,seq44490__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44502 = arguments.length;
var i__23691__auto___44503 = (0);
while(true){
if((i__23691__auto___44503 < len__23690__auto___44502)){
args__23697__auto__.push((arguments[i__23691__auto___44503]));

var G__44504 = (i__23691__auto___44503 + (1));
i__23691__auto___44503 = G__44504;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq44498){
var G__44499 = cljs.core.first.call(null,seq44498);
var seq44498__$1 = cljs.core.next.call(null,seq44498);
var G__44500 = cljs.core.first.call(null,seq44498__$1);
var seq44498__$2 = cljs.core.next.call(null,seq44498__$1);
var G__44501 = cljs.core.first.call(null,seq44498__$2);
var seq44498__$3 = cljs.core.next.call(null,seq44498__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__44499,G__44500,G__44501,seq44498__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__23449__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__23449__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__44505 = form_SINGLEQUOTE_;
var G__44506 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__44505;
form_SINGLEQUOTE_ = G__44506;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__23449__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__22603__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__22603__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__22603__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args44507 = [];
var len__23690__auto___44514 = arguments.length;
var i__23691__auto___44515 = (0);
while(true){
if((i__23691__auto___44515 < len__23690__auto___44514)){
args44507.push((arguments[i__23691__auto___44515]));

var G__44516 = (i__23691__auto___44515 + (1));
i__23691__auto___44515 = G__44516;
continue;
} else {
}
break;
}

var G__44509 = args44507.length;
switch (G__44509) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44507.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__44510,solo){
var vec__44511 = p__44510;
var seq__44512 = cljs.core.seq.call(null,vec__44511);
var first__44513 = cljs.core.first.call(null,seq__44512);
var seq__44512__$1 = cljs.core.next.call(null,seq__44512);
var arglist = first__44513;
var body = seq__44512__$1;
var method = vec__44511;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/yehonathan.sharvit/prj/klipse/resources/public/fig/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2748),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2748),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/yehonathan.sharvit/prj/klipse/resources/public/fig/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2749),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2749),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
});})(sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),params,(function (){var x__23449__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__23449__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});})(sig,restarg,vec__44511,seq__44512,first__44513,seq__44512__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))):null),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__44518__auto__","len__44518__auto__",299120225,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__44519__auto__","i__44519__auto__",472547346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__44519__auto__","i__44519__auto__",472547346,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__44518__auto__","len__44518__auto__",299120225,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__23449__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__44519__auto__","i__44519__auto__",472547346,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__44519__auto__","i__44519__auto__",472547346,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__44522,emit_var_QMARK_){
var vec__44529 = p__44522;
var vec__44532 = cljs.core.nth.call(null,vec__44529,(0),null);
var seq__44533 = cljs.core.seq.call(null,vec__44532);
var first__44534 = cljs.core.first.call(null,seq__44533);
var seq__44533__$1 = cljs.core.next.call(null,seq__44533);
var arglist = first__44534;
var body = seq__44533__$1;
var method = vec__44532;
var fdecl = vec__44529;
var dest_args = ((function (vec__44529,vec__44532,seq__44533,first__44534,seq__44533__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__44529,vec__44532,seq__44533,first__44534,seq__44533__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});})(vec__44529,vec__44532,seq__44533,first__44534,seq__44533__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__44529,vec__44532,seq__44533,first__44534,seq__44533__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__23449__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__44520__auto__","args__44520__auto__",-429038908,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__44520__auto__","args__44520__auto__",-429038908,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__44521__auto__","argseq__44521__auto__",-960266104,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__23449__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__44520__auto__","args__44520__auto__",-429038908,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/yehonathan.sharvit/prj/klipse/resources/public/fig/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2796),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2796),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__44520__auto__","args__44520__auto__",-429038908,null)),(function (){var x__23449__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__44521__auto__","argseq__44521__auto__",-960266104,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__44559){
var vec__44563 = p__44559;
var seq__44564 = cljs.core.seq.call(null,vec__44563);
var first__44565 = cljs.core.first.call(null,seq__44564);
var seq__44564__$1 = cljs.core.next.call(null,seq__44564);
var sig = first__44565;
var body = seq__44564__$1;
var method = vec__44563;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__44535_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__44535_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__23449__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__23449__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__23449__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__44536_SHARP_){
return fixed_arity.call(null,rname,p1__44536_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__23449__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__23449__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__44537__auto__","argseq__44537__auto__",-1054973719,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/yehonathan.sharvit/prj/klipse/resources/public/fig/js/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2854),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2854),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__23449__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__44537__auto__","argseq__44537__auto__",-1054973719,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__23449__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__23449__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__23449__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),(function (){var x__23449__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__23449__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__23449__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__44566__i = 0, G__44566__a = new Array(arguments.length -  3);
while (G__44566__i < G__44566__a.length) {G__44566__a[G__44566__i] = arguments[G__44566__i + 3]; ++G__44566__i;}
  fdecl = new cljs.core.IndexedSeq(G__44566__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__44567){
var _AMPERSAND_form = cljs.core.first(arglist__44567);
arglist__44567 = cljs.core.next(arglist__44567);
var _AMPERSAND_env = cljs.core.first(arglist__44567);
arglist__44567 = cljs.core.next(arglist__44567);
var name = cljs.core.first(arglist__44567);
var fdecl = cljs.core.rest(arglist__44567);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__23697__auto__ = [];
var len__23690__auto___44572 = arguments.length;
var i__23691__auto___44573 = (0);
while(true){
if((i__23691__auto___44573 < len__23690__auto___44572)){
args__23697__auto__.push((arguments[i__23691__auto___44573]));

var G__44574 = (i__23691__auto___44573 + (1));
i__23691__auto___44573 = G__44574;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__23449__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__44575 = cljs.core.cons.call(null,f,p);
var G__44576 = cljs.core.next.call(null,args__$1);
p = G__44575;
args__$1 = G__44576;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__44577 = cljs.core.cons.call(null,f,p);
var G__44578 = cljs.core.next.call(null,args__$1);
p = G__44577;
args__$1 = G__44578;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__44579 = cljs.core.next.call(null,fd);
fd = G__44579;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__44580 = cljs.core.next.call(null,fd);
fd = G__44580;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__23449__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__44581 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__44582 = cljs.core.next.call(null,ds);
acc = G__44581;
ds = G__44582;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__44583 = cljs.core.next.call(null,p);
var G__44584 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__44583;
d = G__44584;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__23449__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = cljs.core._conj.call(null,(function (){var x__23449__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__23449__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__23449__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__23449__auto____$1);
})(),x__23449__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq44568){
var G__44569 = cljs.core.first.call(null,seq44568);
var seq44568__$1 = cljs.core.next.call(null,seq44568);
var G__44570 = cljs.core.first.call(null,seq44568__$1);
var seq44568__$2 = cljs.core.next.call(null,seq44568__$1);
var G__44571 = cljs.core.first.call(null,seq44568__$2);
var seq44568__$3 = cljs.core.next.call(null,seq44568__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__44569,G__44570,G__44571,seq44568__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map?rel=1465451189666