// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.play');
goog.require('cljs.core');
goog.require('gadjett.core');
klipse.play.run = (function klipse$play$run(){
if(cljs.core._EQ_.call(null,(1),(3))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("blah blah"),cljs.core.str("\n"),cljs.core.str("(= 1 3)")].join('')));
}

return (998);
});
klipse.play.noop = (function klipse$play$noop(var_args){
var args__23697__auto__ = [];
var len__23690__auto___47028 = arguments.length;
var i__23691__auto___47029 = (0);
while(true){
if((i__23691__auto___47029 < len__23690__auto___47028)){
args__23697__auto__.push((arguments[i__23691__auto___47029]));

var G__47030 = (i__23691__auto___47029 + (1));
i__23691__auto___47029 = G__47030;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.play.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.play.noop.cljs$core$IFn$_invoke$arity$variadic = (function (args__36054__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.play/noop",args__36054__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.play/noop",args__36054__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.play/noop\" args__36054__auto__)")].join('')));
}

var vec__47025 = args__36054__auto__;
var a = cljs.core.nth.call(null,vec__47025,(0),null);
return a;
});

klipse.play.noop.cljs$lang$maxFixedArity = (0);

klipse.play.noop.cljs$lang$applyTo = (function (seq47024){
return klipse.play.noop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47024));
});

klipse.play.me = (function klipse$play$me(var_args){
var args__23697__auto__ = [];
var len__23690__auto___47035 = arguments.length;
var i__23691__auto___47036 = (0);
while(true){
if((i__23691__auto___47036 < len__23690__auto___47035)){
args__23697__auto__.push((arguments[i__23691__auto___47036]));

var G__47037 = (i__23691__auto___47036 + (1));
i__23691__auto___47036 = G__47037;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return klipse.play.me.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

klipse.play.me.cljs$core$IFn$_invoke$arity$variadic = (function (args__36054__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.play/me",args__36054__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.play/me",args__36054__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.play/me\" args__36054__auto__)")].join('')));
}

var vec__47032 = args__36054__auto__;
return null;
});

klipse.play.me.cljs$lang$maxFixedArity = (0);

klipse.play.me.cljs$lang$applyTo = (function (seq47031){
return klipse.play.me.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47031));
});


//# sourceMappingURL=play.js.map?rel=1465451191844