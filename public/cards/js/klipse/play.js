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
var args__7303__auto__ = [];
var len__7296__auto___77792 = arguments.length;
var i__7297__auto___77793 = (0);
while(true){
if((i__7297__auto___77793 < len__7296__auto___77792)){
args__7303__auto__.push((arguments[i__7297__auto___77793]));

var G__77794 = (i__7297__auto___77793 + (1));
i__7297__auto___77793 = G__77794;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.play.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.play.noop.cljs$core$IFn$_invoke$arity$variadic = (function (args__32463__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.play/noop",args__32463__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.play/noop",args__32463__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.play/noop\" args__32463__auto__)")].join('')));
}

var vec__77789 = args__32463__auto__;
var a = cljs.core.nth.call(null,vec__77789,(0),null);
return a;
});

klipse.play.noop.cljs$lang$maxFixedArity = (0);

klipse.play.noop.cljs$lang$applyTo = (function (seq77788){
return klipse.play.noop.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq77788));
});

klipse.play.me = (function klipse$play$me(var_args){
var args__7303__auto__ = [];
var len__7296__auto___77799 = arguments.length;
var i__7297__auto___77800 = (0);
while(true){
if((i__7297__auto___77800 < len__7296__auto___77799)){
args__7303__auto__.push((arguments[i__7297__auto___77800]));

var G__77801 = (i__7297__auto___77800 + (1));
i__7297__auto___77800 = G__77801;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return klipse.play.me.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

klipse.play.me.cljs$core$IFn$_invoke$arity$variadic = (function (args__32463__auto__){
if(cljs.core.truth_(gadjett.core.record_function_call.call(null,"klipse.play/me",args__32463__auto__))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(gadjett.core.function_call_err_msg.call(null,"klipse.play/me",args__32463__auto__)),cljs.core.str("\n"),cljs.core.str("(gadjett.core/record-function-call \"klipse.play/me\" args__32463__auto__)")].join('')));
}

var vec__77796 = args__32463__auto__;
return null;
});

klipse.play.me.cljs$lang$maxFixedArity = (0);

klipse.play.me.cljs$lang$applyTo = (function (seq77795){
return klipse.play.me.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq77795));
});


//# sourceMappingURL=play.js.map