// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args67715 = [];
var len__7296__auto___67721 = arguments.length;
var i__7297__auto___67722 = (0);
while(true){
if((i__7297__auto___67722 < len__7296__auto___67721)){
args67715.push((arguments[i__7297__auto___67722]));

var G__67723 = (i__7297__auto___67722 + (1));
i__7297__auto___67722 = G__67723;
continue;
} else {
}
break;
}

var G__67717 = args67715.length;
switch (G__67717) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67715.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async67718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67718 = (function (f,blockable,meta67719){
this.f = f;
this.blockable = blockable;
this.meta67719 = meta67719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async67718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67720,meta67719__$1){
var self__ = this;
var _67720__$1 = this;
return (new cljs.core.async.t_cljs$core$async67718(self__.f,self__.blockable,meta67719__$1));
});

cljs.core.async.t_cljs$core$async67718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67720){
var self__ = this;
var _67720__$1 = this;
return self__.meta67719;
});

cljs.core.async.t_cljs$core$async67718.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async67718.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async67718.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async67718.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async67718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta67719","meta67719",778641909,null)], null);
});

cljs.core.async.t_cljs$core$async67718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67718";

cljs.core.async.t_cljs$core$async67718.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async67718");
});

cljs.core.async.__GT_t_cljs$core$async67718 = (function cljs$core$async$__GT_t_cljs$core$async67718(f__$1,blockable__$1,meta67719){
return (new cljs.core.async.t_cljs$core$async67718(f__$1,blockable__$1,meta67719));
});

}

return (new cljs.core.async.t_cljs$core$async67718(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args67727 = [];
var len__7296__auto___67730 = arguments.length;
var i__7297__auto___67731 = (0);
while(true){
if((i__7297__auto___67731 < len__7296__auto___67730)){
args67727.push((arguments[i__7297__auto___67731]));

var G__67732 = (i__7297__auto___67731 + (1));
i__7297__auto___67731 = G__67732;
continue;
} else {
}
break;
}

var G__67729 = args67727.length;
switch (G__67729) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67727.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args67734 = [];
var len__7296__auto___67737 = arguments.length;
var i__7297__auto___67738 = (0);
while(true){
if((i__7297__auto___67738 < len__7296__auto___67737)){
args67734.push((arguments[i__7297__auto___67738]));

var G__67739 = (i__7297__auto___67738 + (1));
i__7297__auto___67738 = G__67739;
continue;
} else {
}
break;
}

var G__67736 = args67734.length;
switch (G__67736) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67734.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args67741 = [];
var len__7296__auto___67744 = arguments.length;
var i__7297__auto___67745 = (0);
while(true){
if((i__7297__auto___67745 < len__7296__auto___67744)){
args67741.push((arguments[i__7297__auto___67745]));

var G__67746 = (i__7297__auto___67745 + (1));
i__7297__auto___67745 = G__67746;
continue;
} else {
}
break;
}

var G__67743 = args67741.length;
switch (G__67743) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67741.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_67748 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_67748);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_67748,ret){
return (function (){
return fn1.call(null,val_67748);
});})(val_67748,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args67749 = [];
var len__7296__auto___67752 = arguments.length;
var i__7297__auto___67753 = (0);
while(true){
if((i__7297__auto___67753 < len__7296__auto___67752)){
args67749.push((arguments[i__7297__auto___67753]));

var G__67754 = (i__7297__auto___67753 + (1));
i__7297__auto___67753 = G__67754;
continue;
} else {
}
break;
}

var G__67751 = args67749.length;
switch (G__67751) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67749.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7136__auto___67756 = n;
var x_67757 = (0);
while(true){
if((x_67757 < n__7136__auto___67756)){
(a[x_67757] = (0));

var G__67758 = (x_67757 + (1));
x_67757 = G__67758;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__67759 = (i + (1));
i = G__67759;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async67763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67763 = (function (alt_flag,flag,meta67764){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta67764 = meta67764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async67763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_67765,meta67764__$1){
var self__ = this;
var _67765__$1 = this;
return (new cljs.core.async.t_cljs$core$async67763(self__.alt_flag,self__.flag,meta67764__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async67763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_67765){
var self__ = this;
var _67765__$1 = this;
return self__.meta67764;
});})(flag))
;

cljs.core.async.t_cljs$core$async67763.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async67763.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async67763.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async67763.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async67763.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta67764","meta67764",-1136477093,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async67763.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67763.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67763";

cljs.core.async.t_cljs$core$async67763.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async67763");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async67763 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async67763(alt_flag__$1,flag__$1,meta67764){
return (new cljs.core.async.t_cljs$core$async67763(alt_flag__$1,flag__$1,meta67764));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async67763(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async67769 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async67769 = (function (alt_handler,flag,cb,meta67770){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta67770 = meta67770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async67769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67771,meta67770__$1){
var self__ = this;
var _67771__$1 = this;
return (new cljs.core.async.t_cljs$core$async67769(self__.alt_handler,self__.flag,self__.cb,meta67770__$1));
});

cljs.core.async.t_cljs$core$async67769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67771){
var self__ = this;
var _67771__$1 = this;
return self__.meta67770;
});

cljs.core.async.t_cljs$core$async67769.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async67769.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async67769.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async67769.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async67769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta67770","meta67770",-1148461007,null)], null);
});

cljs.core.async.t_cljs$core$async67769.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async67769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async67769";

cljs.core.async.t_cljs$core$async67769.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async67769");
});

cljs.core.async.__GT_t_cljs$core$async67769 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async67769(alt_handler__$1,flag__$1,cb__$1,meta67770){
return (new cljs.core.async.t_cljs$core$async67769(alt_handler__$1,flag__$1,cb__$1,meta67770));
});

}

return (new cljs.core.async.t_cljs$core$async67769(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__67772_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67772_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__67773_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__67773_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6221__auto__ = wport;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return port;
}
})()], null));
} else {
var G__67774 = (i + (1));
i = G__67774;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6221__auto__ = ret;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6209__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___67780 = arguments.length;
var i__7297__auto___67781 = (0);
while(true){
if((i__7297__auto___67781 < len__7296__auto___67780)){
args__7303__auto__.push((arguments[i__7297__auto___67781]));

var G__67782 = (i__7297__auto___67781 + (1));
i__7297__auto___67781 = G__67782;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__67777){
var map__67778 = p__67777;
var map__67778__$1 = ((((!((map__67778 == null)))?((((map__67778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67778):map__67778);
var opts = map__67778__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq67775){
var G__67776 = cljs.core.first.call(null,seq67775);
var seq67775__$1 = cljs.core.next.call(null,seq67775);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__67776,seq67775__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args67783 = [];
var len__7296__auto___67833 = arguments.length;
var i__7297__auto___67834 = (0);
while(true){
if((i__7297__auto___67834 < len__7296__auto___67833)){
args67783.push((arguments[i__7297__auto___67834]));

var G__67835 = (i__7297__auto___67834 + (1));
i__7297__auto___67834 = G__67835;
continue;
} else {
}
break;
}

var G__67785 = args67783.length;
switch (G__67785) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67783.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15364__auto___67837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___67837){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___67837){
return (function (state_67809){
var state_val_67810 = (state_67809[(1)]);
if((state_val_67810 === (7))){
var inst_67805 = (state_67809[(2)]);
var state_67809__$1 = state_67809;
var statearr_67811_67838 = state_67809__$1;
(statearr_67811_67838[(2)] = inst_67805);

(statearr_67811_67838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (1))){
var state_67809__$1 = state_67809;
var statearr_67812_67839 = state_67809__$1;
(statearr_67812_67839[(2)] = null);

(statearr_67812_67839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (4))){
var inst_67788 = (state_67809[(7)]);
var inst_67788__$1 = (state_67809[(2)]);
var inst_67789 = (inst_67788__$1 == null);
var state_67809__$1 = (function (){var statearr_67813 = state_67809;
(statearr_67813[(7)] = inst_67788__$1);

return statearr_67813;
})();
if(cljs.core.truth_(inst_67789)){
var statearr_67814_67840 = state_67809__$1;
(statearr_67814_67840[(1)] = (5));

} else {
var statearr_67815_67841 = state_67809__$1;
(statearr_67815_67841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (13))){
var state_67809__$1 = state_67809;
var statearr_67816_67842 = state_67809__$1;
(statearr_67816_67842[(2)] = null);

(statearr_67816_67842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (6))){
var inst_67788 = (state_67809[(7)]);
var state_67809__$1 = state_67809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_67809__$1,(11),to,inst_67788);
} else {
if((state_val_67810 === (3))){
var inst_67807 = (state_67809[(2)]);
var state_67809__$1 = state_67809;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67809__$1,inst_67807);
} else {
if((state_val_67810 === (12))){
var state_67809__$1 = state_67809;
var statearr_67817_67843 = state_67809__$1;
(statearr_67817_67843[(2)] = null);

(statearr_67817_67843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (2))){
var state_67809__$1 = state_67809;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67809__$1,(4),from);
} else {
if((state_val_67810 === (11))){
var inst_67798 = (state_67809[(2)]);
var state_67809__$1 = state_67809;
if(cljs.core.truth_(inst_67798)){
var statearr_67818_67844 = state_67809__$1;
(statearr_67818_67844[(1)] = (12));

} else {
var statearr_67819_67845 = state_67809__$1;
(statearr_67819_67845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (9))){
var state_67809__$1 = state_67809;
var statearr_67820_67846 = state_67809__$1;
(statearr_67820_67846[(2)] = null);

(statearr_67820_67846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (5))){
var state_67809__$1 = state_67809;
if(cljs.core.truth_(close_QMARK_)){
var statearr_67821_67847 = state_67809__$1;
(statearr_67821_67847[(1)] = (8));

} else {
var statearr_67822_67848 = state_67809__$1;
(statearr_67822_67848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (14))){
var inst_67803 = (state_67809[(2)]);
var state_67809__$1 = state_67809;
var statearr_67823_67849 = state_67809__$1;
(statearr_67823_67849[(2)] = inst_67803);

(statearr_67823_67849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (10))){
var inst_67795 = (state_67809[(2)]);
var state_67809__$1 = state_67809;
var statearr_67824_67850 = state_67809__$1;
(statearr_67824_67850[(2)] = inst_67795);

(statearr_67824_67850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67810 === (8))){
var inst_67792 = cljs.core.async.close_BANG_.call(null,to);
var state_67809__$1 = state_67809;
var statearr_67825_67851 = state_67809__$1;
(statearr_67825_67851[(2)] = inst_67792);

(statearr_67825_67851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___67837))
;
return ((function (switch__15250__auto__,c__15364__auto___67837){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_67829 = [null,null,null,null,null,null,null,null];
(statearr_67829[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_67829[(1)] = (1));

return statearr_67829;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_67809){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_67809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e67830){if((e67830 instanceof Object)){
var ex__15254__auto__ = e67830;
var statearr_67831_67852 = state_67809;
(statearr_67831_67852[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67853 = state_67809;
state_67809 = G__67853;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_67809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_67809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___67837))
})();
var state__15366__auto__ = (function (){var statearr_67832 = f__15365__auto__.call(null);
(statearr_67832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___67837);

return statearr_67832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___67837))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__68041){
var vec__68042 = p__68041;
var v = cljs.core.nth.call(null,vec__68042,(0),null);
var p = cljs.core.nth.call(null,vec__68042,(1),null);
var job = vec__68042;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__15364__auto___68228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___68228,res,vec__68042,v,p,job,jobs,results){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___68228,res,vec__68042,v,p,job,jobs,results){
return (function (state_68049){
var state_val_68050 = (state_68049[(1)]);
if((state_val_68050 === (1))){
var state_68049__$1 = state_68049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68049__$1,(2),res,v);
} else {
if((state_val_68050 === (2))){
var inst_68046 = (state_68049[(2)]);
var inst_68047 = cljs.core.async.close_BANG_.call(null,res);
var state_68049__$1 = (function (){var statearr_68051 = state_68049;
(statearr_68051[(7)] = inst_68046);

return statearr_68051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68049__$1,inst_68047);
} else {
return null;
}
}
});})(c__15364__auto___68228,res,vec__68042,v,p,job,jobs,results))
;
return ((function (switch__15250__auto__,c__15364__auto___68228,res,vec__68042,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0 = (function (){
var statearr_68055 = [null,null,null,null,null,null,null,null];
(statearr_68055[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__);

(statearr_68055[(1)] = (1));

return statearr_68055;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1 = (function (state_68049){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68056){if((e68056 instanceof Object)){
var ex__15254__auto__ = e68056;
var statearr_68057_68229 = state_68049;
(statearr_68057_68229[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68230 = state_68049;
state_68049 = G__68230;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = function(state_68049){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1.call(this,state_68049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___68228,res,vec__68042,v,p,job,jobs,results))
})();
var state__15366__auto__ = (function (){var statearr_68058 = f__15365__auto__.call(null);
(statearr_68058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___68228);

return statearr_68058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___68228,res,vec__68042,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__68059){
var vec__68060 = p__68059;
var v = cljs.core.nth.call(null,vec__68060,(0),null);
var p = cljs.core.nth.call(null,vec__68060,(1),null);
var job = vec__68060;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7136__auto___68231 = n;
var __68232 = (0);
while(true){
if((__68232 < n__7136__auto___68231)){
var G__68063_68233 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__68063_68233) {
case "compute":
var c__15364__auto___68235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68232,c__15364__auto___68235,G__68063_68233,n__7136__auto___68231,jobs,results,process,async){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (__68232,c__15364__auto___68235,G__68063_68233,n__7136__auto___68231,jobs,results,process,async){
return (function (state_68076){
var state_val_68077 = (state_68076[(1)]);
if((state_val_68077 === (1))){
var state_68076__$1 = state_68076;
var statearr_68078_68236 = state_68076__$1;
(statearr_68078_68236[(2)] = null);

(statearr_68078_68236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68077 === (2))){
var state_68076__$1 = state_68076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68076__$1,(4),jobs);
} else {
if((state_val_68077 === (3))){
var inst_68074 = (state_68076[(2)]);
var state_68076__$1 = state_68076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68076__$1,inst_68074);
} else {
if((state_val_68077 === (4))){
var inst_68066 = (state_68076[(2)]);
var inst_68067 = process.call(null,inst_68066);
var state_68076__$1 = state_68076;
if(cljs.core.truth_(inst_68067)){
var statearr_68079_68237 = state_68076__$1;
(statearr_68079_68237[(1)] = (5));

} else {
var statearr_68080_68238 = state_68076__$1;
(statearr_68080_68238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68077 === (5))){
var state_68076__$1 = state_68076;
var statearr_68081_68239 = state_68076__$1;
(statearr_68081_68239[(2)] = null);

(statearr_68081_68239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68077 === (6))){
var state_68076__$1 = state_68076;
var statearr_68082_68240 = state_68076__$1;
(statearr_68082_68240[(2)] = null);

(statearr_68082_68240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68077 === (7))){
var inst_68072 = (state_68076[(2)]);
var state_68076__$1 = state_68076;
var statearr_68083_68241 = state_68076__$1;
(statearr_68083_68241[(2)] = inst_68072);

(statearr_68083_68241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__68232,c__15364__auto___68235,G__68063_68233,n__7136__auto___68231,jobs,results,process,async))
;
return ((function (__68232,switch__15250__auto__,c__15364__auto___68235,G__68063_68233,n__7136__auto___68231,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0 = (function (){
var statearr_68087 = [null,null,null,null,null,null,null];
(statearr_68087[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__);

(statearr_68087[(1)] = (1));

return statearr_68087;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1 = (function (state_68076){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68088){if((e68088 instanceof Object)){
var ex__15254__auto__ = e68088;
var statearr_68089_68242 = state_68076;
(statearr_68089_68242[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68243 = state_68076;
state_68076 = G__68243;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = function(state_68076){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1.call(this,state_68076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__;
})()
;})(__68232,switch__15250__auto__,c__15364__auto___68235,G__68063_68233,n__7136__auto___68231,jobs,results,process,async))
})();
var state__15366__auto__ = (function (){var statearr_68090 = f__15365__auto__.call(null);
(statearr_68090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___68235);

return statearr_68090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(__68232,c__15364__auto___68235,G__68063_68233,n__7136__auto___68231,jobs,results,process,async))
);


break;
case "async":
var c__15364__auto___68244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__68232,c__15364__auto___68244,G__68063_68233,n__7136__auto___68231,jobs,results,process,async){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (__68232,c__15364__auto___68244,G__68063_68233,n__7136__auto___68231,jobs,results,process,async){
return (function (state_68103){
var state_val_68104 = (state_68103[(1)]);
if((state_val_68104 === (1))){
var state_68103__$1 = state_68103;
var statearr_68105_68245 = state_68103__$1;
(statearr_68105_68245[(2)] = null);

(statearr_68105_68245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68104 === (2))){
var state_68103__$1 = state_68103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68103__$1,(4),jobs);
} else {
if((state_val_68104 === (3))){
var inst_68101 = (state_68103[(2)]);
var state_68103__$1 = state_68103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68103__$1,inst_68101);
} else {
if((state_val_68104 === (4))){
var inst_68093 = (state_68103[(2)]);
var inst_68094 = async.call(null,inst_68093);
var state_68103__$1 = state_68103;
if(cljs.core.truth_(inst_68094)){
var statearr_68106_68246 = state_68103__$1;
(statearr_68106_68246[(1)] = (5));

} else {
var statearr_68107_68247 = state_68103__$1;
(statearr_68107_68247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68104 === (5))){
var state_68103__$1 = state_68103;
var statearr_68108_68248 = state_68103__$1;
(statearr_68108_68248[(2)] = null);

(statearr_68108_68248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68104 === (6))){
var state_68103__$1 = state_68103;
var statearr_68109_68249 = state_68103__$1;
(statearr_68109_68249[(2)] = null);

(statearr_68109_68249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68104 === (7))){
var inst_68099 = (state_68103[(2)]);
var state_68103__$1 = state_68103;
var statearr_68110_68250 = state_68103__$1;
(statearr_68110_68250[(2)] = inst_68099);

(statearr_68110_68250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__68232,c__15364__auto___68244,G__68063_68233,n__7136__auto___68231,jobs,results,process,async))
;
return ((function (__68232,switch__15250__auto__,c__15364__auto___68244,G__68063_68233,n__7136__auto___68231,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0 = (function (){
var statearr_68114 = [null,null,null,null,null,null,null];
(statearr_68114[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__);

(statearr_68114[(1)] = (1));

return statearr_68114;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1 = (function (state_68103){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68115){if((e68115 instanceof Object)){
var ex__15254__auto__ = e68115;
var statearr_68116_68251 = state_68103;
(statearr_68116_68251[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68252 = state_68103;
state_68103 = G__68252;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = function(state_68103){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1.call(this,state_68103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__;
})()
;})(__68232,switch__15250__auto__,c__15364__auto___68244,G__68063_68233,n__7136__auto___68231,jobs,results,process,async))
})();
var state__15366__auto__ = (function (){var statearr_68117 = f__15365__auto__.call(null);
(statearr_68117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___68244);

return statearr_68117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(__68232,c__15364__auto___68244,G__68063_68233,n__7136__auto___68231,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__68253 = (__68232 + (1));
__68232 = G__68253;
continue;
} else {
}
break;
}

var c__15364__auto___68254 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___68254,jobs,results,process,async){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___68254,jobs,results,process,async){
return (function (state_68139){
var state_val_68140 = (state_68139[(1)]);
if((state_val_68140 === (1))){
var state_68139__$1 = state_68139;
var statearr_68141_68255 = state_68139__$1;
(statearr_68141_68255[(2)] = null);

(statearr_68141_68255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68140 === (2))){
var state_68139__$1 = state_68139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68139__$1,(4),from);
} else {
if((state_val_68140 === (3))){
var inst_68137 = (state_68139[(2)]);
var state_68139__$1 = state_68139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68139__$1,inst_68137);
} else {
if((state_val_68140 === (4))){
var inst_68120 = (state_68139[(7)]);
var inst_68120__$1 = (state_68139[(2)]);
var inst_68121 = (inst_68120__$1 == null);
var state_68139__$1 = (function (){var statearr_68142 = state_68139;
(statearr_68142[(7)] = inst_68120__$1);

return statearr_68142;
})();
if(cljs.core.truth_(inst_68121)){
var statearr_68143_68256 = state_68139__$1;
(statearr_68143_68256[(1)] = (5));

} else {
var statearr_68144_68257 = state_68139__$1;
(statearr_68144_68257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68140 === (5))){
var inst_68123 = cljs.core.async.close_BANG_.call(null,jobs);
var state_68139__$1 = state_68139;
var statearr_68145_68258 = state_68139__$1;
(statearr_68145_68258[(2)] = inst_68123);

(statearr_68145_68258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68140 === (6))){
var inst_68120 = (state_68139[(7)]);
var inst_68125 = (state_68139[(8)]);
var inst_68125__$1 = cljs.core.async.chan.call(null,(1));
var inst_68126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_68127 = [inst_68120,inst_68125__$1];
var inst_68128 = (new cljs.core.PersistentVector(null,2,(5),inst_68126,inst_68127,null));
var state_68139__$1 = (function (){var statearr_68146 = state_68139;
(statearr_68146[(8)] = inst_68125__$1);

return statearr_68146;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68139__$1,(8),jobs,inst_68128);
} else {
if((state_val_68140 === (7))){
var inst_68135 = (state_68139[(2)]);
var state_68139__$1 = state_68139;
var statearr_68147_68259 = state_68139__$1;
(statearr_68147_68259[(2)] = inst_68135);

(statearr_68147_68259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68140 === (8))){
var inst_68125 = (state_68139[(8)]);
var inst_68130 = (state_68139[(2)]);
var state_68139__$1 = (function (){var statearr_68148 = state_68139;
(statearr_68148[(9)] = inst_68130);

return statearr_68148;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68139__$1,(9),results,inst_68125);
} else {
if((state_val_68140 === (9))){
var inst_68132 = (state_68139[(2)]);
var state_68139__$1 = (function (){var statearr_68149 = state_68139;
(statearr_68149[(10)] = inst_68132);

return statearr_68149;
})();
var statearr_68150_68260 = state_68139__$1;
(statearr_68150_68260[(2)] = null);

(statearr_68150_68260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___68254,jobs,results,process,async))
;
return ((function (switch__15250__auto__,c__15364__auto___68254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0 = (function (){
var statearr_68154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__);

(statearr_68154[(1)] = (1));

return statearr_68154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1 = (function (state_68139){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68155){if((e68155 instanceof Object)){
var ex__15254__auto__ = e68155;
var statearr_68156_68261 = state_68139;
(statearr_68156_68261[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68262 = state_68139;
state_68139 = G__68262;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = function(state_68139){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1.call(this,state_68139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___68254,jobs,results,process,async))
})();
var state__15366__auto__ = (function (){var statearr_68157 = f__15365__auto__.call(null);
(statearr_68157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___68254);

return statearr_68157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___68254,jobs,results,process,async))
);


var c__15364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto__,jobs,results,process,async){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto__,jobs,results,process,async){
return (function (state_68195){
var state_val_68196 = (state_68195[(1)]);
if((state_val_68196 === (7))){
var inst_68191 = (state_68195[(2)]);
var state_68195__$1 = state_68195;
var statearr_68197_68263 = state_68195__$1;
(statearr_68197_68263[(2)] = inst_68191);

(statearr_68197_68263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (20))){
var state_68195__$1 = state_68195;
var statearr_68198_68264 = state_68195__$1;
(statearr_68198_68264[(2)] = null);

(statearr_68198_68264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (1))){
var state_68195__$1 = state_68195;
var statearr_68199_68265 = state_68195__$1;
(statearr_68199_68265[(2)] = null);

(statearr_68199_68265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (4))){
var inst_68160 = (state_68195[(7)]);
var inst_68160__$1 = (state_68195[(2)]);
var inst_68161 = (inst_68160__$1 == null);
var state_68195__$1 = (function (){var statearr_68200 = state_68195;
(statearr_68200[(7)] = inst_68160__$1);

return statearr_68200;
})();
if(cljs.core.truth_(inst_68161)){
var statearr_68201_68266 = state_68195__$1;
(statearr_68201_68266[(1)] = (5));

} else {
var statearr_68202_68267 = state_68195__$1;
(statearr_68202_68267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (15))){
var inst_68173 = (state_68195[(8)]);
var state_68195__$1 = state_68195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68195__$1,(18),to,inst_68173);
} else {
if((state_val_68196 === (21))){
var inst_68186 = (state_68195[(2)]);
var state_68195__$1 = state_68195;
var statearr_68203_68268 = state_68195__$1;
(statearr_68203_68268[(2)] = inst_68186);

(statearr_68203_68268[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (13))){
var inst_68188 = (state_68195[(2)]);
var state_68195__$1 = (function (){var statearr_68204 = state_68195;
(statearr_68204[(9)] = inst_68188);

return statearr_68204;
})();
var statearr_68205_68269 = state_68195__$1;
(statearr_68205_68269[(2)] = null);

(statearr_68205_68269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (6))){
var inst_68160 = (state_68195[(7)]);
var state_68195__$1 = state_68195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68195__$1,(11),inst_68160);
} else {
if((state_val_68196 === (17))){
var inst_68181 = (state_68195[(2)]);
var state_68195__$1 = state_68195;
if(cljs.core.truth_(inst_68181)){
var statearr_68206_68270 = state_68195__$1;
(statearr_68206_68270[(1)] = (19));

} else {
var statearr_68207_68271 = state_68195__$1;
(statearr_68207_68271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (3))){
var inst_68193 = (state_68195[(2)]);
var state_68195__$1 = state_68195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68195__$1,inst_68193);
} else {
if((state_val_68196 === (12))){
var inst_68170 = (state_68195[(10)]);
var state_68195__$1 = state_68195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68195__$1,(14),inst_68170);
} else {
if((state_val_68196 === (2))){
var state_68195__$1 = state_68195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68195__$1,(4),results);
} else {
if((state_val_68196 === (19))){
var state_68195__$1 = state_68195;
var statearr_68208_68272 = state_68195__$1;
(statearr_68208_68272[(2)] = null);

(statearr_68208_68272[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (11))){
var inst_68170 = (state_68195[(2)]);
var state_68195__$1 = (function (){var statearr_68209 = state_68195;
(statearr_68209[(10)] = inst_68170);

return statearr_68209;
})();
var statearr_68210_68273 = state_68195__$1;
(statearr_68210_68273[(2)] = null);

(statearr_68210_68273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (9))){
var state_68195__$1 = state_68195;
var statearr_68211_68274 = state_68195__$1;
(statearr_68211_68274[(2)] = null);

(statearr_68211_68274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (5))){
var state_68195__$1 = state_68195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68212_68275 = state_68195__$1;
(statearr_68212_68275[(1)] = (8));

} else {
var statearr_68213_68276 = state_68195__$1;
(statearr_68213_68276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (14))){
var inst_68173 = (state_68195[(8)]);
var inst_68175 = (state_68195[(11)]);
var inst_68173__$1 = (state_68195[(2)]);
var inst_68174 = (inst_68173__$1 == null);
var inst_68175__$1 = cljs.core.not.call(null,inst_68174);
var state_68195__$1 = (function (){var statearr_68214 = state_68195;
(statearr_68214[(8)] = inst_68173__$1);

(statearr_68214[(11)] = inst_68175__$1);

return statearr_68214;
})();
if(inst_68175__$1){
var statearr_68215_68277 = state_68195__$1;
(statearr_68215_68277[(1)] = (15));

} else {
var statearr_68216_68278 = state_68195__$1;
(statearr_68216_68278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (16))){
var inst_68175 = (state_68195[(11)]);
var state_68195__$1 = state_68195;
var statearr_68217_68279 = state_68195__$1;
(statearr_68217_68279[(2)] = inst_68175);

(statearr_68217_68279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (10))){
var inst_68167 = (state_68195[(2)]);
var state_68195__$1 = state_68195;
var statearr_68218_68280 = state_68195__$1;
(statearr_68218_68280[(2)] = inst_68167);

(statearr_68218_68280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (18))){
var inst_68178 = (state_68195[(2)]);
var state_68195__$1 = state_68195;
var statearr_68219_68281 = state_68195__$1;
(statearr_68219_68281[(2)] = inst_68178);

(statearr_68219_68281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68196 === (8))){
var inst_68164 = cljs.core.async.close_BANG_.call(null,to);
var state_68195__$1 = state_68195;
var statearr_68220_68282 = state_68195__$1;
(statearr_68220_68282[(2)] = inst_68164);

(statearr_68220_68282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto__,jobs,results,process,async))
;
return ((function (switch__15250__auto__,c__15364__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0 = (function (){
var statearr_68224 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68224[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__);

(statearr_68224[(1)] = (1));

return statearr_68224;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1 = (function (state_68195){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68225){if((e68225 instanceof Object)){
var ex__15254__auto__ = e68225;
var statearr_68226_68283 = state_68195;
(statearr_68226_68283[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68284 = state_68195;
state_68195 = G__68284;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__ = function(state_68195){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1.call(this,state_68195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15251__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto__,jobs,results,process,async))
})();
var state__15366__auto__ = (function (){var statearr_68227 = f__15365__auto__.call(null);
(statearr_68227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto__);

return statearr_68227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto__,jobs,results,process,async))
);

return c__15364__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args68285 = [];
var len__7296__auto___68288 = arguments.length;
var i__7297__auto___68289 = (0);
while(true){
if((i__7297__auto___68289 < len__7296__auto___68288)){
args68285.push((arguments[i__7297__auto___68289]));

var G__68290 = (i__7297__auto___68289 + (1));
i__7297__auto___68289 = G__68290;
continue;
} else {
}
break;
}

var G__68287 = args68285.length;
switch (G__68287) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68285.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args68292 = [];
var len__7296__auto___68295 = arguments.length;
var i__7297__auto___68296 = (0);
while(true){
if((i__7297__auto___68296 < len__7296__auto___68295)){
args68292.push((arguments[i__7297__auto___68296]));

var G__68297 = (i__7297__auto___68296 + (1));
i__7297__auto___68296 = G__68297;
continue;
} else {
}
break;
}

var G__68294 = args68292.length;
switch (G__68294) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68292.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args68299 = [];
var len__7296__auto___68352 = arguments.length;
var i__7297__auto___68353 = (0);
while(true){
if((i__7297__auto___68353 < len__7296__auto___68352)){
args68299.push((arguments[i__7297__auto___68353]));

var G__68354 = (i__7297__auto___68353 + (1));
i__7297__auto___68353 = G__68354;
continue;
} else {
}
break;
}

var G__68301 = args68299.length;
switch (G__68301) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68299.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__15364__auto___68356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___68356,tc,fc){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___68356,tc,fc){
return (function (state_68327){
var state_val_68328 = (state_68327[(1)]);
if((state_val_68328 === (7))){
var inst_68323 = (state_68327[(2)]);
var state_68327__$1 = state_68327;
var statearr_68329_68357 = state_68327__$1;
(statearr_68329_68357[(2)] = inst_68323);

(statearr_68329_68357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (1))){
var state_68327__$1 = state_68327;
var statearr_68330_68358 = state_68327__$1;
(statearr_68330_68358[(2)] = null);

(statearr_68330_68358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (4))){
var inst_68304 = (state_68327[(7)]);
var inst_68304__$1 = (state_68327[(2)]);
var inst_68305 = (inst_68304__$1 == null);
var state_68327__$1 = (function (){var statearr_68331 = state_68327;
(statearr_68331[(7)] = inst_68304__$1);

return statearr_68331;
})();
if(cljs.core.truth_(inst_68305)){
var statearr_68332_68359 = state_68327__$1;
(statearr_68332_68359[(1)] = (5));

} else {
var statearr_68333_68360 = state_68327__$1;
(statearr_68333_68360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (13))){
var state_68327__$1 = state_68327;
var statearr_68334_68361 = state_68327__$1;
(statearr_68334_68361[(2)] = null);

(statearr_68334_68361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (6))){
var inst_68304 = (state_68327[(7)]);
var inst_68310 = p.call(null,inst_68304);
var state_68327__$1 = state_68327;
if(cljs.core.truth_(inst_68310)){
var statearr_68335_68362 = state_68327__$1;
(statearr_68335_68362[(1)] = (9));

} else {
var statearr_68336_68363 = state_68327__$1;
(statearr_68336_68363[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (3))){
var inst_68325 = (state_68327[(2)]);
var state_68327__$1 = state_68327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68327__$1,inst_68325);
} else {
if((state_val_68328 === (12))){
var state_68327__$1 = state_68327;
var statearr_68337_68364 = state_68327__$1;
(statearr_68337_68364[(2)] = null);

(statearr_68337_68364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (2))){
var state_68327__$1 = state_68327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68327__$1,(4),ch);
} else {
if((state_val_68328 === (11))){
var inst_68304 = (state_68327[(7)]);
var inst_68314 = (state_68327[(2)]);
var state_68327__$1 = state_68327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68327__$1,(8),inst_68314,inst_68304);
} else {
if((state_val_68328 === (9))){
var state_68327__$1 = state_68327;
var statearr_68338_68365 = state_68327__$1;
(statearr_68338_68365[(2)] = tc);

(statearr_68338_68365[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (5))){
var inst_68307 = cljs.core.async.close_BANG_.call(null,tc);
var inst_68308 = cljs.core.async.close_BANG_.call(null,fc);
var state_68327__$1 = (function (){var statearr_68339 = state_68327;
(statearr_68339[(8)] = inst_68307);

return statearr_68339;
})();
var statearr_68340_68366 = state_68327__$1;
(statearr_68340_68366[(2)] = inst_68308);

(statearr_68340_68366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (14))){
var inst_68321 = (state_68327[(2)]);
var state_68327__$1 = state_68327;
var statearr_68341_68367 = state_68327__$1;
(statearr_68341_68367[(2)] = inst_68321);

(statearr_68341_68367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (10))){
var state_68327__$1 = state_68327;
var statearr_68342_68368 = state_68327__$1;
(statearr_68342_68368[(2)] = fc);

(statearr_68342_68368[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68328 === (8))){
var inst_68316 = (state_68327[(2)]);
var state_68327__$1 = state_68327;
if(cljs.core.truth_(inst_68316)){
var statearr_68343_68369 = state_68327__$1;
(statearr_68343_68369[(1)] = (12));

} else {
var statearr_68344_68370 = state_68327__$1;
(statearr_68344_68370[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___68356,tc,fc))
;
return ((function (switch__15250__auto__,c__15364__auto___68356,tc,fc){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_68348 = [null,null,null,null,null,null,null,null,null];
(statearr_68348[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_68348[(1)] = (1));

return statearr_68348;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_68327){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68349){if((e68349 instanceof Object)){
var ex__15254__auto__ = e68349;
var statearr_68350_68371 = state_68327;
(statearr_68350_68371[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68372 = state_68327;
state_68327 = G__68372;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_68327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_68327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___68356,tc,fc))
})();
var state__15366__auto__ = (function (){var statearr_68351 = f__15365__auto__.call(null);
(statearr_68351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___68356);

return statearr_68351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___68356,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto__){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto__){
return (function (state_68436){
var state_val_68437 = (state_68436[(1)]);
if((state_val_68437 === (7))){
var inst_68432 = (state_68436[(2)]);
var state_68436__$1 = state_68436;
var statearr_68438_68459 = state_68436__$1;
(statearr_68438_68459[(2)] = inst_68432);

(statearr_68438_68459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68437 === (1))){
var inst_68416 = init;
var state_68436__$1 = (function (){var statearr_68439 = state_68436;
(statearr_68439[(7)] = inst_68416);

return statearr_68439;
})();
var statearr_68440_68460 = state_68436__$1;
(statearr_68440_68460[(2)] = null);

(statearr_68440_68460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68437 === (4))){
var inst_68419 = (state_68436[(8)]);
var inst_68419__$1 = (state_68436[(2)]);
var inst_68420 = (inst_68419__$1 == null);
var state_68436__$1 = (function (){var statearr_68441 = state_68436;
(statearr_68441[(8)] = inst_68419__$1);

return statearr_68441;
})();
if(cljs.core.truth_(inst_68420)){
var statearr_68442_68461 = state_68436__$1;
(statearr_68442_68461[(1)] = (5));

} else {
var statearr_68443_68462 = state_68436__$1;
(statearr_68443_68462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68437 === (6))){
var inst_68416 = (state_68436[(7)]);
var inst_68419 = (state_68436[(8)]);
var inst_68423 = (state_68436[(9)]);
var inst_68423__$1 = f.call(null,inst_68416,inst_68419);
var inst_68424 = cljs.core.reduced_QMARK_.call(null,inst_68423__$1);
var state_68436__$1 = (function (){var statearr_68444 = state_68436;
(statearr_68444[(9)] = inst_68423__$1);

return statearr_68444;
})();
if(inst_68424){
var statearr_68445_68463 = state_68436__$1;
(statearr_68445_68463[(1)] = (8));

} else {
var statearr_68446_68464 = state_68436__$1;
(statearr_68446_68464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68437 === (3))){
var inst_68434 = (state_68436[(2)]);
var state_68436__$1 = state_68436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68436__$1,inst_68434);
} else {
if((state_val_68437 === (2))){
var state_68436__$1 = state_68436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68436__$1,(4),ch);
} else {
if((state_val_68437 === (9))){
var inst_68423 = (state_68436[(9)]);
var inst_68416 = inst_68423;
var state_68436__$1 = (function (){var statearr_68447 = state_68436;
(statearr_68447[(7)] = inst_68416);

return statearr_68447;
})();
var statearr_68448_68465 = state_68436__$1;
(statearr_68448_68465[(2)] = null);

(statearr_68448_68465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68437 === (5))){
var inst_68416 = (state_68436[(7)]);
var state_68436__$1 = state_68436;
var statearr_68449_68466 = state_68436__$1;
(statearr_68449_68466[(2)] = inst_68416);

(statearr_68449_68466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68437 === (10))){
var inst_68430 = (state_68436[(2)]);
var state_68436__$1 = state_68436;
var statearr_68450_68467 = state_68436__$1;
(statearr_68450_68467[(2)] = inst_68430);

(statearr_68450_68467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68437 === (8))){
var inst_68423 = (state_68436[(9)]);
var inst_68426 = cljs.core.deref.call(null,inst_68423);
var state_68436__$1 = state_68436;
var statearr_68451_68468 = state_68436__$1;
(statearr_68451_68468[(2)] = inst_68426);

(statearr_68451_68468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto__))
;
return ((function (switch__15250__auto__,c__15364__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15251__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15251__auto____0 = (function (){
var statearr_68455 = [null,null,null,null,null,null,null,null,null,null];
(statearr_68455[(0)] = cljs$core$async$reduce_$_state_machine__15251__auto__);

(statearr_68455[(1)] = (1));

return statearr_68455;
});
var cljs$core$async$reduce_$_state_machine__15251__auto____1 = (function (state_68436){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68456){if((e68456 instanceof Object)){
var ex__15254__auto__ = e68456;
var statearr_68457_68469 = state_68436;
(statearr_68457_68469[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68470 = state_68436;
state_68436 = G__68470;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15251__auto__ = function(state_68436){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15251__auto____1.call(this,state_68436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15251__auto____0;
cljs$core$async$reduce_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15251__auto____1;
return cljs$core$async$reduce_$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto__))
})();
var state__15366__auto__ = (function (){var statearr_68458 = f__15365__auto__.call(null);
(statearr_68458[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto__);

return statearr_68458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto__))
);

return c__15364__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args68471 = [];
var len__7296__auto___68523 = arguments.length;
var i__7297__auto___68524 = (0);
while(true){
if((i__7297__auto___68524 < len__7296__auto___68523)){
args68471.push((arguments[i__7297__auto___68524]));

var G__68525 = (i__7297__auto___68524 + (1));
i__7297__auto___68524 = G__68525;
continue;
} else {
}
break;
}

var G__68473 = args68471.length;
switch (G__68473) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args68471.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto__){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto__){
return (function (state_68498){
var state_val_68499 = (state_68498[(1)]);
if((state_val_68499 === (7))){
var inst_68480 = (state_68498[(2)]);
var state_68498__$1 = state_68498;
var statearr_68500_68527 = state_68498__$1;
(statearr_68500_68527[(2)] = inst_68480);

(statearr_68500_68527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (1))){
var inst_68474 = cljs.core.seq.call(null,coll);
var inst_68475 = inst_68474;
var state_68498__$1 = (function (){var statearr_68501 = state_68498;
(statearr_68501[(7)] = inst_68475);

return statearr_68501;
})();
var statearr_68502_68528 = state_68498__$1;
(statearr_68502_68528[(2)] = null);

(statearr_68502_68528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (4))){
var inst_68475 = (state_68498[(7)]);
var inst_68478 = cljs.core.first.call(null,inst_68475);
var state_68498__$1 = state_68498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_68498__$1,(7),ch,inst_68478);
} else {
if((state_val_68499 === (13))){
var inst_68492 = (state_68498[(2)]);
var state_68498__$1 = state_68498;
var statearr_68503_68529 = state_68498__$1;
(statearr_68503_68529[(2)] = inst_68492);

(statearr_68503_68529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (6))){
var inst_68483 = (state_68498[(2)]);
var state_68498__$1 = state_68498;
if(cljs.core.truth_(inst_68483)){
var statearr_68504_68530 = state_68498__$1;
(statearr_68504_68530[(1)] = (8));

} else {
var statearr_68505_68531 = state_68498__$1;
(statearr_68505_68531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (3))){
var inst_68496 = (state_68498[(2)]);
var state_68498__$1 = state_68498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68498__$1,inst_68496);
} else {
if((state_val_68499 === (12))){
var state_68498__$1 = state_68498;
var statearr_68506_68532 = state_68498__$1;
(statearr_68506_68532[(2)] = null);

(statearr_68506_68532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (2))){
var inst_68475 = (state_68498[(7)]);
var state_68498__$1 = state_68498;
if(cljs.core.truth_(inst_68475)){
var statearr_68507_68533 = state_68498__$1;
(statearr_68507_68533[(1)] = (4));

} else {
var statearr_68508_68534 = state_68498__$1;
(statearr_68508_68534[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (11))){
var inst_68489 = cljs.core.async.close_BANG_.call(null,ch);
var state_68498__$1 = state_68498;
var statearr_68509_68535 = state_68498__$1;
(statearr_68509_68535[(2)] = inst_68489);

(statearr_68509_68535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (9))){
var state_68498__$1 = state_68498;
if(cljs.core.truth_(close_QMARK_)){
var statearr_68510_68536 = state_68498__$1;
(statearr_68510_68536[(1)] = (11));

} else {
var statearr_68511_68537 = state_68498__$1;
(statearr_68511_68537[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (5))){
var inst_68475 = (state_68498[(7)]);
var state_68498__$1 = state_68498;
var statearr_68512_68538 = state_68498__$1;
(statearr_68512_68538[(2)] = inst_68475);

(statearr_68512_68538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (10))){
var inst_68494 = (state_68498[(2)]);
var state_68498__$1 = state_68498;
var statearr_68513_68539 = state_68498__$1;
(statearr_68513_68539[(2)] = inst_68494);

(statearr_68513_68539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68499 === (8))){
var inst_68475 = (state_68498[(7)]);
var inst_68485 = cljs.core.next.call(null,inst_68475);
var inst_68475__$1 = inst_68485;
var state_68498__$1 = (function (){var statearr_68514 = state_68498;
(statearr_68514[(7)] = inst_68475__$1);

return statearr_68514;
})();
var statearr_68515_68540 = state_68498__$1;
(statearr_68515_68540[(2)] = null);

(statearr_68515_68540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto__))
;
return ((function (switch__15250__auto__,c__15364__auto__){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_68519 = [null,null,null,null,null,null,null,null];
(statearr_68519[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_68519[(1)] = (1));

return statearr_68519;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_68498){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68520){if((e68520 instanceof Object)){
var ex__15254__auto__ = e68520;
var statearr_68521_68541 = state_68498;
(statearr_68521_68541[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68542 = state_68498;
state_68498 = G__68542;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_68498){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_68498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto__))
})();
var state__15366__auto__ = (function (){var statearr_68522 = f__15365__auto__.call(null);
(statearr_68522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto__);

return statearr_68522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto__))
);

return c__15364__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__6884__auto__ = (((_ == null))?null:_);
var m__6885__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,_);
} else {
var m__6885__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__6885__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m,ch);
} else {
var m__6885__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m);
} else {
var m__6885__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async68768 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async68768 = (function (mult,ch,cs,meta68769){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta68769 = meta68769;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_68770,meta68769__$1){
var self__ = this;
var _68770__$1 = this;
return (new cljs.core.async.t_cljs$core$async68768(self__.mult,self__.ch,self__.cs,meta68769__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_68770){
var self__ = this;
var _68770__$1 = this;
return self__.meta68769;
});})(cs))
;

cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async68768.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async68768.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta68769","meta68769",-1371468399,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async68768.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async68768.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async68768";

cljs.core.async.t_cljs$core$async68768.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async68768");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async68768 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async68768(mult__$1,ch__$1,cs__$1,meta68769){
return (new cljs.core.async.t_cljs$core$async68768(mult__$1,ch__$1,cs__$1,meta68769));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async68768(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15364__auto___68993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___68993,cs,m,dchan,dctr,done){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___68993,cs,m,dchan,dctr,done){
return (function (state_68905){
var state_val_68906 = (state_68905[(1)]);
if((state_val_68906 === (7))){
var inst_68901 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68907_68994 = state_68905__$1;
(statearr_68907_68994[(2)] = inst_68901);

(statearr_68907_68994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (20))){
var inst_68804 = (state_68905[(7)]);
var inst_68816 = cljs.core.first.call(null,inst_68804);
var inst_68817 = cljs.core.nth.call(null,inst_68816,(0),null);
var inst_68818 = cljs.core.nth.call(null,inst_68816,(1),null);
var state_68905__$1 = (function (){var statearr_68908 = state_68905;
(statearr_68908[(8)] = inst_68817);

return statearr_68908;
})();
if(cljs.core.truth_(inst_68818)){
var statearr_68909_68995 = state_68905__$1;
(statearr_68909_68995[(1)] = (22));

} else {
var statearr_68910_68996 = state_68905__$1;
(statearr_68910_68996[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (27))){
var inst_68853 = (state_68905[(9)]);
var inst_68846 = (state_68905[(10)]);
var inst_68848 = (state_68905[(11)]);
var inst_68773 = (state_68905[(12)]);
var inst_68853__$1 = cljs.core._nth.call(null,inst_68846,inst_68848);
var inst_68854 = cljs.core.async.put_BANG_.call(null,inst_68853__$1,inst_68773,done);
var state_68905__$1 = (function (){var statearr_68911 = state_68905;
(statearr_68911[(9)] = inst_68853__$1);

return statearr_68911;
})();
if(cljs.core.truth_(inst_68854)){
var statearr_68912_68997 = state_68905__$1;
(statearr_68912_68997[(1)] = (30));

} else {
var statearr_68913_68998 = state_68905__$1;
(statearr_68913_68998[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (1))){
var state_68905__$1 = state_68905;
var statearr_68914_68999 = state_68905__$1;
(statearr_68914_68999[(2)] = null);

(statearr_68914_68999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (24))){
var inst_68804 = (state_68905[(7)]);
var inst_68823 = (state_68905[(2)]);
var inst_68824 = cljs.core.next.call(null,inst_68804);
var inst_68782 = inst_68824;
var inst_68783 = null;
var inst_68784 = (0);
var inst_68785 = (0);
var state_68905__$1 = (function (){var statearr_68915 = state_68905;
(statearr_68915[(13)] = inst_68785);

(statearr_68915[(14)] = inst_68782);

(statearr_68915[(15)] = inst_68784);

(statearr_68915[(16)] = inst_68823);

(statearr_68915[(17)] = inst_68783);

return statearr_68915;
})();
var statearr_68916_69000 = state_68905__$1;
(statearr_68916_69000[(2)] = null);

(statearr_68916_69000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (39))){
var state_68905__$1 = state_68905;
var statearr_68920_69001 = state_68905__$1;
(statearr_68920_69001[(2)] = null);

(statearr_68920_69001[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (4))){
var inst_68773 = (state_68905[(12)]);
var inst_68773__$1 = (state_68905[(2)]);
var inst_68774 = (inst_68773__$1 == null);
var state_68905__$1 = (function (){var statearr_68921 = state_68905;
(statearr_68921[(12)] = inst_68773__$1);

return statearr_68921;
})();
if(cljs.core.truth_(inst_68774)){
var statearr_68922_69002 = state_68905__$1;
(statearr_68922_69002[(1)] = (5));

} else {
var statearr_68923_69003 = state_68905__$1;
(statearr_68923_69003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (15))){
var inst_68785 = (state_68905[(13)]);
var inst_68782 = (state_68905[(14)]);
var inst_68784 = (state_68905[(15)]);
var inst_68783 = (state_68905[(17)]);
var inst_68800 = (state_68905[(2)]);
var inst_68801 = (inst_68785 + (1));
var tmp68917 = inst_68782;
var tmp68918 = inst_68784;
var tmp68919 = inst_68783;
var inst_68782__$1 = tmp68917;
var inst_68783__$1 = tmp68919;
var inst_68784__$1 = tmp68918;
var inst_68785__$1 = inst_68801;
var state_68905__$1 = (function (){var statearr_68924 = state_68905;
(statearr_68924[(18)] = inst_68800);

(statearr_68924[(13)] = inst_68785__$1);

(statearr_68924[(14)] = inst_68782__$1);

(statearr_68924[(15)] = inst_68784__$1);

(statearr_68924[(17)] = inst_68783__$1);

return statearr_68924;
})();
var statearr_68925_69004 = state_68905__$1;
(statearr_68925_69004[(2)] = null);

(statearr_68925_69004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (21))){
var inst_68827 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68929_69005 = state_68905__$1;
(statearr_68929_69005[(2)] = inst_68827);

(statearr_68929_69005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (31))){
var inst_68853 = (state_68905[(9)]);
var inst_68857 = done.call(null,null);
var inst_68858 = cljs.core.async.untap_STAR_.call(null,m,inst_68853);
var state_68905__$1 = (function (){var statearr_68930 = state_68905;
(statearr_68930[(19)] = inst_68857);

return statearr_68930;
})();
var statearr_68931_69006 = state_68905__$1;
(statearr_68931_69006[(2)] = inst_68858);

(statearr_68931_69006[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (32))){
var inst_68847 = (state_68905[(20)]);
var inst_68846 = (state_68905[(10)]);
var inst_68848 = (state_68905[(11)]);
var inst_68845 = (state_68905[(21)]);
var inst_68860 = (state_68905[(2)]);
var inst_68861 = (inst_68848 + (1));
var tmp68926 = inst_68847;
var tmp68927 = inst_68846;
var tmp68928 = inst_68845;
var inst_68845__$1 = tmp68928;
var inst_68846__$1 = tmp68927;
var inst_68847__$1 = tmp68926;
var inst_68848__$1 = inst_68861;
var state_68905__$1 = (function (){var statearr_68932 = state_68905;
(statearr_68932[(20)] = inst_68847__$1);

(statearr_68932[(10)] = inst_68846__$1);

(statearr_68932[(22)] = inst_68860);

(statearr_68932[(11)] = inst_68848__$1);

(statearr_68932[(21)] = inst_68845__$1);

return statearr_68932;
})();
var statearr_68933_69007 = state_68905__$1;
(statearr_68933_69007[(2)] = null);

(statearr_68933_69007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (40))){
var inst_68873 = (state_68905[(23)]);
var inst_68877 = done.call(null,null);
var inst_68878 = cljs.core.async.untap_STAR_.call(null,m,inst_68873);
var state_68905__$1 = (function (){var statearr_68934 = state_68905;
(statearr_68934[(24)] = inst_68877);

return statearr_68934;
})();
var statearr_68935_69008 = state_68905__$1;
(statearr_68935_69008[(2)] = inst_68878);

(statearr_68935_69008[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (33))){
var inst_68864 = (state_68905[(25)]);
var inst_68866 = cljs.core.chunked_seq_QMARK_.call(null,inst_68864);
var state_68905__$1 = state_68905;
if(inst_68866){
var statearr_68936_69009 = state_68905__$1;
(statearr_68936_69009[(1)] = (36));

} else {
var statearr_68937_69010 = state_68905__$1;
(statearr_68937_69010[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (13))){
var inst_68794 = (state_68905[(26)]);
var inst_68797 = cljs.core.async.close_BANG_.call(null,inst_68794);
var state_68905__$1 = state_68905;
var statearr_68938_69011 = state_68905__$1;
(statearr_68938_69011[(2)] = inst_68797);

(statearr_68938_69011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (22))){
var inst_68817 = (state_68905[(8)]);
var inst_68820 = cljs.core.async.close_BANG_.call(null,inst_68817);
var state_68905__$1 = state_68905;
var statearr_68939_69012 = state_68905__$1;
(statearr_68939_69012[(2)] = inst_68820);

(statearr_68939_69012[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (36))){
var inst_68864 = (state_68905[(25)]);
var inst_68868 = cljs.core.chunk_first.call(null,inst_68864);
var inst_68869 = cljs.core.chunk_rest.call(null,inst_68864);
var inst_68870 = cljs.core.count.call(null,inst_68868);
var inst_68845 = inst_68869;
var inst_68846 = inst_68868;
var inst_68847 = inst_68870;
var inst_68848 = (0);
var state_68905__$1 = (function (){var statearr_68940 = state_68905;
(statearr_68940[(20)] = inst_68847);

(statearr_68940[(10)] = inst_68846);

(statearr_68940[(11)] = inst_68848);

(statearr_68940[(21)] = inst_68845);

return statearr_68940;
})();
var statearr_68941_69013 = state_68905__$1;
(statearr_68941_69013[(2)] = null);

(statearr_68941_69013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (41))){
var inst_68864 = (state_68905[(25)]);
var inst_68880 = (state_68905[(2)]);
var inst_68881 = cljs.core.next.call(null,inst_68864);
var inst_68845 = inst_68881;
var inst_68846 = null;
var inst_68847 = (0);
var inst_68848 = (0);
var state_68905__$1 = (function (){var statearr_68942 = state_68905;
(statearr_68942[(20)] = inst_68847);

(statearr_68942[(10)] = inst_68846);

(statearr_68942[(11)] = inst_68848);

(statearr_68942[(27)] = inst_68880);

(statearr_68942[(21)] = inst_68845);

return statearr_68942;
})();
var statearr_68943_69014 = state_68905__$1;
(statearr_68943_69014[(2)] = null);

(statearr_68943_69014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (43))){
var state_68905__$1 = state_68905;
var statearr_68944_69015 = state_68905__$1;
(statearr_68944_69015[(2)] = null);

(statearr_68944_69015[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (29))){
var inst_68889 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68945_69016 = state_68905__$1;
(statearr_68945_69016[(2)] = inst_68889);

(statearr_68945_69016[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (44))){
var inst_68898 = (state_68905[(2)]);
var state_68905__$1 = (function (){var statearr_68946 = state_68905;
(statearr_68946[(28)] = inst_68898);

return statearr_68946;
})();
var statearr_68947_69017 = state_68905__$1;
(statearr_68947_69017[(2)] = null);

(statearr_68947_69017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (6))){
var inst_68837 = (state_68905[(29)]);
var inst_68836 = cljs.core.deref.call(null,cs);
var inst_68837__$1 = cljs.core.keys.call(null,inst_68836);
var inst_68838 = cljs.core.count.call(null,inst_68837__$1);
var inst_68839 = cljs.core.reset_BANG_.call(null,dctr,inst_68838);
var inst_68844 = cljs.core.seq.call(null,inst_68837__$1);
var inst_68845 = inst_68844;
var inst_68846 = null;
var inst_68847 = (0);
var inst_68848 = (0);
var state_68905__$1 = (function (){var statearr_68948 = state_68905;
(statearr_68948[(20)] = inst_68847);

(statearr_68948[(10)] = inst_68846);

(statearr_68948[(11)] = inst_68848);

(statearr_68948[(29)] = inst_68837__$1);

(statearr_68948[(21)] = inst_68845);

(statearr_68948[(30)] = inst_68839);

return statearr_68948;
})();
var statearr_68949_69018 = state_68905__$1;
(statearr_68949_69018[(2)] = null);

(statearr_68949_69018[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (28))){
var inst_68845 = (state_68905[(21)]);
var inst_68864 = (state_68905[(25)]);
var inst_68864__$1 = cljs.core.seq.call(null,inst_68845);
var state_68905__$1 = (function (){var statearr_68950 = state_68905;
(statearr_68950[(25)] = inst_68864__$1);

return statearr_68950;
})();
if(inst_68864__$1){
var statearr_68951_69019 = state_68905__$1;
(statearr_68951_69019[(1)] = (33));

} else {
var statearr_68952_69020 = state_68905__$1;
(statearr_68952_69020[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (25))){
var inst_68847 = (state_68905[(20)]);
var inst_68848 = (state_68905[(11)]);
var inst_68850 = (inst_68848 < inst_68847);
var inst_68851 = inst_68850;
var state_68905__$1 = state_68905;
if(cljs.core.truth_(inst_68851)){
var statearr_68953_69021 = state_68905__$1;
(statearr_68953_69021[(1)] = (27));

} else {
var statearr_68954_69022 = state_68905__$1;
(statearr_68954_69022[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (34))){
var state_68905__$1 = state_68905;
var statearr_68955_69023 = state_68905__$1;
(statearr_68955_69023[(2)] = null);

(statearr_68955_69023[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (17))){
var state_68905__$1 = state_68905;
var statearr_68956_69024 = state_68905__$1;
(statearr_68956_69024[(2)] = null);

(statearr_68956_69024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (3))){
var inst_68903 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68905__$1,inst_68903);
} else {
if((state_val_68906 === (12))){
var inst_68832 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68957_69025 = state_68905__$1;
(statearr_68957_69025[(2)] = inst_68832);

(statearr_68957_69025[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (2))){
var state_68905__$1 = state_68905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68905__$1,(4),ch);
} else {
if((state_val_68906 === (23))){
var state_68905__$1 = state_68905;
var statearr_68958_69026 = state_68905__$1;
(statearr_68958_69026[(2)] = null);

(statearr_68958_69026[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (35))){
var inst_68887 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68959_69027 = state_68905__$1;
(statearr_68959_69027[(2)] = inst_68887);

(statearr_68959_69027[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (19))){
var inst_68804 = (state_68905[(7)]);
var inst_68808 = cljs.core.chunk_first.call(null,inst_68804);
var inst_68809 = cljs.core.chunk_rest.call(null,inst_68804);
var inst_68810 = cljs.core.count.call(null,inst_68808);
var inst_68782 = inst_68809;
var inst_68783 = inst_68808;
var inst_68784 = inst_68810;
var inst_68785 = (0);
var state_68905__$1 = (function (){var statearr_68960 = state_68905;
(statearr_68960[(13)] = inst_68785);

(statearr_68960[(14)] = inst_68782);

(statearr_68960[(15)] = inst_68784);

(statearr_68960[(17)] = inst_68783);

return statearr_68960;
})();
var statearr_68961_69028 = state_68905__$1;
(statearr_68961_69028[(2)] = null);

(statearr_68961_69028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (11))){
var inst_68804 = (state_68905[(7)]);
var inst_68782 = (state_68905[(14)]);
var inst_68804__$1 = cljs.core.seq.call(null,inst_68782);
var state_68905__$1 = (function (){var statearr_68962 = state_68905;
(statearr_68962[(7)] = inst_68804__$1);

return statearr_68962;
})();
if(inst_68804__$1){
var statearr_68963_69029 = state_68905__$1;
(statearr_68963_69029[(1)] = (16));

} else {
var statearr_68964_69030 = state_68905__$1;
(statearr_68964_69030[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (9))){
var inst_68834 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68965_69031 = state_68905__$1;
(statearr_68965_69031[(2)] = inst_68834);

(statearr_68965_69031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (5))){
var inst_68780 = cljs.core.deref.call(null,cs);
var inst_68781 = cljs.core.seq.call(null,inst_68780);
var inst_68782 = inst_68781;
var inst_68783 = null;
var inst_68784 = (0);
var inst_68785 = (0);
var state_68905__$1 = (function (){var statearr_68966 = state_68905;
(statearr_68966[(13)] = inst_68785);

(statearr_68966[(14)] = inst_68782);

(statearr_68966[(15)] = inst_68784);

(statearr_68966[(17)] = inst_68783);

return statearr_68966;
})();
var statearr_68967_69032 = state_68905__$1;
(statearr_68967_69032[(2)] = null);

(statearr_68967_69032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (14))){
var state_68905__$1 = state_68905;
var statearr_68968_69033 = state_68905__$1;
(statearr_68968_69033[(2)] = null);

(statearr_68968_69033[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (45))){
var inst_68895 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68969_69034 = state_68905__$1;
(statearr_68969_69034[(2)] = inst_68895);

(statearr_68969_69034[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (26))){
var inst_68837 = (state_68905[(29)]);
var inst_68891 = (state_68905[(2)]);
var inst_68892 = cljs.core.seq.call(null,inst_68837);
var state_68905__$1 = (function (){var statearr_68970 = state_68905;
(statearr_68970[(31)] = inst_68891);

return statearr_68970;
})();
if(inst_68892){
var statearr_68971_69035 = state_68905__$1;
(statearr_68971_69035[(1)] = (42));

} else {
var statearr_68972_69036 = state_68905__$1;
(statearr_68972_69036[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (16))){
var inst_68804 = (state_68905[(7)]);
var inst_68806 = cljs.core.chunked_seq_QMARK_.call(null,inst_68804);
var state_68905__$1 = state_68905;
if(inst_68806){
var statearr_68973_69037 = state_68905__$1;
(statearr_68973_69037[(1)] = (19));

} else {
var statearr_68974_69038 = state_68905__$1;
(statearr_68974_69038[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (38))){
var inst_68884 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68975_69039 = state_68905__$1;
(statearr_68975_69039[(2)] = inst_68884);

(statearr_68975_69039[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (30))){
var state_68905__$1 = state_68905;
var statearr_68976_69040 = state_68905__$1;
(statearr_68976_69040[(2)] = null);

(statearr_68976_69040[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (10))){
var inst_68785 = (state_68905[(13)]);
var inst_68783 = (state_68905[(17)]);
var inst_68793 = cljs.core._nth.call(null,inst_68783,inst_68785);
var inst_68794 = cljs.core.nth.call(null,inst_68793,(0),null);
var inst_68795 = cljs.core.nth.call(null,inst_68793,(1),null);
var state_68905__$1 = (function (){var statearr_68977 = state_68905;
(statearr_68977[(26)] = inst_68794);

return statearr_68977;
})();
if(cljs.core.truth_(inst_68795)){
var statearr_68978_69041 = state_68905__$1;
(statearr_68978_69041[(1)] = (13));

} else {
var statearr_68979_69042 = state_68905__$1;
(statearr_68979_69042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (18))){
var inst_68830 = (state_68905[(2)]);
var state_68905__$1 = state_68905;
var statearr_68980_69043 = state_68905__$1;
(statearr_68980_69043[(2)] = inst_68830);

(statearr_68980_69043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (42))){
var state_68905__$1 = state_68905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68905__$1,(45),dchan);
} else {
if((state_val_68906 === (37))){
var inst_68773 = (state_68905[(12)]);
var inst_68864 = (state_68905[(25)]);
var inst_68873 = (state_68905[(23)]);
var inst_68873__$1 = cljs.core.first.call(null,inst_68864);
var inst_68874 = cljs.core.async.put_BANG_.call(null,inst_68873__$1,inst_68773,done);
var state_68905__$1 = (function (){var statearr_68981 = state_68905;
(statearr_68981[(23)] = inst_68873__$1);

return statearr_68981;
})();
if(cljs.core.truth_(inst_68874)){
var statearr_68982_69044 = state_68905__$1;
(statearr_68982_69044[(1)] = (39));

} else {
var statearr_68983_69045 = state_68905__$1;
(statearr_68983_69045[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68906 === (8))){
var inst_68785 = (state_68905[(13)]);
var inst_68784 = (state_68905[(15)]);
var inst_68787 = (inst_68785 < inst_68784);
var inst_68788 = inst_68787;
var state_68905__$1 = state_68905;
if(cljs.core.truth_(inst_68788)){
var statearr_68984_69046 = state_68905__$1;
(statearr_68984_69046[(1)] = (10));

} else {
var statearr_68985_69047 = state_68905__$1;
(statearr_68985_69047[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___68993,cs,m,dchan,dctr,done))
;
return ((function (switch__15250__auto__,c__15364__auto___68993,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15251__auto__ = null;
var cljs$core$async$mult_$_state_machine__15251__auto____0 = (function (){
var statearr_68989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68989[(0)] = cljs$core$async$mult_$_state_machine__15251__auto__);

(statearr_68989[(1)] = (1));

return statearr_68989;
});
var cljs$core$async$mult_$_state_machine__15251__auto____1 = (function (state_68905){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_68905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e68990){if((e68990 instanceof Object)){
var ex__15254__auto__ = e68990;
var statearr_68991_69048 = state_68905;
(statearr_68991_69048[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69049 = state_68905;
state_68905 = G__69049;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15251__auto__ = function(state_68905){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15251__auto____1.call(this,state_68905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15251__auto____0;
cljs$core$async$mult_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15251__auto____1;
return cljs$core$async$mult_$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___68993,cs,m,dchan,dctr,done))
})();
var state__15366__auto__ = (function (){var statearr_68992 = f__15365__auto__.call(null);
(statearr_68992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___68993);

return statearr_68992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___68993,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args69050 = [];
var len__7296__auto___69053 = arguments.length;
var i__7297__auto___69054 = (0);
while(true){
if((i__7297__auto___69054 < len__7296__auto___69053)){
args69050.push((arguments[i__7297__auto___69054]));

var G__69055 = (i__7297__auto___69054 + (1));
i__7297__auto___69054 = G__69055;
continue;
} else {
}
break;
}

var G__69052 = args69050.length;
switch (G__69052) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69050.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m,ch);
} else {
var m__6885__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m,ch);
} else {
var m__6885__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m);
} else {
var m__6885__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m,state_map);
} else {
var m__6885__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__6884__auto__ = (((m == null))?null:m);
var m__6885__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,m,mode);
} else {
var m__6885__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___69067 = arguments.length;
var i__7297__auto___69068 = (0);
while(true){
if((i__7297__auto___69068 < len__7296__auto___69067)){
args__7303__auto__.push((arguments[i__7297__auto___69068]));

var G__69069 = (i__7297__auto___69068 + (1));
i__7297__auto___69068 = G__69069;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((3) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__69061){
var map__69062 = p__69061;
var map__69062__$1 = ((((!((map__69062 == null)))?((((map__69062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69062):map__69062);
var opts = map__69062__$1;
var statearr_69064_69070 = state;
(statearr_69064_69070[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__69062,map__69062__$1,opts){
return (function (val){
var statearr_69065_69071 = state;
(statearr_69065_69071[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__69062,map__69062__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_69066_69072 = state;
(statearr_69066_69072[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq69057){
var G__69058 = cljs.core.first.call(null,seq69057);
var seq69057__$1 = cljs.core.next.call(null,seq69057);
var G__69059 = cljs.core.first.call(null,seq69057__$1);
var seq69057__$2 = cljs.core.next.call(null,seq69057__$1);
var G__69060 = cljs.core.first.call(null,seq69057__$2);
var seq69057__$3 = cljs.core.next.call(null,seq69057__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__69058,G__69059,G__69060,seq69057__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async69238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69238 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta69239){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta69239 = meta69239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69240,meta69239__$1){
var self__ = this;
var _69240__$1 = this;
return (new cljs.core.async.t_cljs$core$async69238(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta69239__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_69240){
var self__ = this;
var _69240__$1 = this;
return self__.meta69239;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta69239","meta69239",-1138705758,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async69238.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69238.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69238";

cljs.core.async.t_cljs$core$async69238.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async69238");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async69238 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async69238(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69239){
return (new cljs.core.async.t_cljs$core$async69238(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta69239));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async69238(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15364__auto___69403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___69403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___69403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_69340){
var state_val_69341 = (state_69340[(1)]);
if((state_val_69341 === (7))){
var inst_69256 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
var statearr_69342_69404 = state_69340__$1;
(statearr_69342_69404[(2)] = inst_69256);

(statearr_69342_69404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (20))){
var inst_69268 = (state_69340[(7)]);
var state_69340__$1 = state_69340;
var statearr_69343_69405 = state_69340__$1;
(statearr_69343_69405[(2)] = inst_69268);

(statearr_69343_69405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (27))){
var state_69340__$1 = state_69340;
var statearr_69344_69406 = state_69340__$1;
(statearr_69344_69406[(2)] = null);

(statearr_69344_69406[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (1))){
var inst_69244 = (state_69340[(8)]);
var inst_69244__$1 = calc_state.call(null);
var inst_69246 = (inst_69244__$1 == null);
var inst_69247 = cljs.core.not.call(null,inst_69246);
var state_69340__$1 = (function (){var statearr_69345 = state_69340;
(statearr_69345[(8)] = inst_69244__$1);

return statearr_69345;
})();
if(inst_69247){
var statearr_69346_69407 = state_69340__$1;
(statearr_69346_69407[(1)] = (2));

} else {
var statearr_69347_69408 = state_69340__$1;
(statearr_69347_69408[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (24))){
var inst_69300 = (state_69340[(9)]);
var inst_69314 = (state_69340[(10)]);
var inst_69291 = (state_69340[(11)]);
var inst_69314__$1 = inst_69291.call(null,inst_69300);
var state_69340__$1 = (function (){var statearr_69348 = state_69340;
(statearr_69348[(10)] = inst_69314__$1);

return statearr_69348;
})();
if(cljs.core.truth_(inst_69314__$1)){
var statearr_69349_69409 = state_69340__$1;
(statearr_69349_69409[(1)] = (29));

} else {
var statearr_69350_69410 = state_69340__$1;
(statearr_69350_69410[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (4))){
var inst_69259 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
if(cljs.core.truth_(inst_69259)){
var statearr_69351_69411 = state_69340__$1;
(statearr_69351_69411[(1)] = (8));

} else {
var statearr_69352_69412 = state_69340__$1;
(statearr_69352_69412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (15))){
var inst_69285 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
if(cljs.core.truth_(inst_69285)){
var statearr_69353_69413 = state_69340__$1;
(statearr_69353_69413[(1)] = (19));

} else {
var statearr_69354_69414 = state_69340__$1;
(statearr_69354_69414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (21))){
var inst_69290 = (state_69340[(12)]);
var inst_69290__$1 = (state_69340[(2)]);
var inst_69291 = cljs.core.get.call(null,inst_69290__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69292 = cljs.core.get.call(null,inst_69290__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69293 = cljs.core.get.call(null,inst_69290__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_69340__$1 = (function (){var statearr_69355 = state_69340;
(statearr_69355[(13)] = inst_69292);

(statearr_69355[(11)] = inst_69291);

(statearr_69355[(12)] = inst_69290__$1);

return statearr_69355;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_69340__$1,(22),inst_69293);
} else {
if((state_val_69341 === (31))){
var inst_69322 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
if(cljs.core.truth_(inst_69322)){
var statearr_69356_69415 = state_69340__$1;
(statearr_69356_69415[(1)] = (32));

} else {
var statearr_69357_69416 = state_69340__$1;
(statearr_69357_69416[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (32))){
var inst_69299 = (state_69340[(14)]);
var state_69340__$1 = state_69340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69340__$1,(35),out,inst_69299);
} else {
if((state_val_69341 === (33))){
var inst_69290 = (state_69340[(12)]);
var inst_69268 = inst_69290;
var state_69340__$1 = (function (){var statearr_69358 = state_69340;
(statearr_69358[(7)] = inst_69268);

return statearr_69358;
})();
var statearr_69359_69417 = state_69340__$1;
(statearr_69359_69417[(2)] = null);

(statearr_69359_69417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (13))){
var inst_69268 = (state_69340[(7)]);
var inst_69275 = inst_69268.cljs$lang$protocol_mask$partition0$;
var inst_69276 = (inst_69275 & (64));
var inst_69277 = inst_69268.cljs$core$ISeq$;
var inst_69278 = (inst_69276) || (inst_69277);
var state_69340__$1 = state_69340;
if(cljs.core.truth_(inst_69278)){
var statearr_69360_69418 = state_69340__$1;
(statearr_69360_69418[(1)] = (16));

} else {
var statearr_69361_69419 = state_69340__$1;
(statearr_69361_69419[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (22))){
var inst_69299 = (state_69340[(14)]);
var inst_69300 = (state_69340[(9)]);
var inst_69298 = (state_69340[(2)]);
var inst_69299__$1 = cljs.core.nth.call(null,inst_69298,(0),null);
var inst_69300__$1 = cljs.core.nth.call(null,inst_69298,(1),null);
var inst_69301 = (inst_69299__$1 == null);
var inst_69302 = cljs.core._EQ_.call(null,inst_69300__$1,change);
var inst_69303 = (inst_69301) || (inst_69302);
var state_69340__$1 = (function (){var statearr_69362 = state_69340;
(statearr_69362[(14)] = inst_69299__$1);

(statearr_69362[(9)] = inst_69300__$1);

return statearr_69362;
})();
if(cljs.core.truth_(inst_69303)){
var statearr_69363_69420 = state_69340__$1;
(statearr_69363_69420[(1)] = (23));

} else {
var statearr_69364_69421 = state_69340__$1;
(statearr_69364_69421[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (36))){
var inst_69290 = (state_69340[(12)]);
var inst_69268 = inst_69290;
var state_69340__$1 = (function (){var statearr_69365 = state_69340;
(statearr_69365[(7)] = inst_69268);

return statearr_69365;
})();
var statearr_69366_69422 = state_69340__$1;
(statearr_69366_69422[(2)] = null);

(statearr_69366_69422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (29))){
var inst_69314 = (state_69340[(10)]);
var state_69340__$1 = state_69340;
var statearr_69367_69423 = state_69340__$1;
(statearr_69367_69423[(2)] = inst_69314);

(statearr_69367_69423[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (6))){
var state_69340__$1 = state_69340;
var statearr_69368_69424 = state_69340__$1;
(statearr_69368_69424[(2)] = false);

(statearr_69368_69424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (28))){
var inst_69310 = (state_69340[(2)]);
var inst_69311 = calc_state.call(null);
var inst_69268 = inst_69311;
var state_69340__$1 = (function (){var statearr_69369 = state_69340;
(statearr_69369[(15)] = inst_69310);

(statearr_69369[(7)] = inst_69268);

return statearr_69369;
})();
var statearr_69370_69425 = state_69340__$1;
(statearr_69370_69425[(2)] = null);

(statearr_69370_69425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (25))){
var inst_69336 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
var statearr_69371_69426 = state_69340__$1;
(statearr_69371_69426[(2)] = inst_69336);

(statearr_69371_69426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (34))){
var inst_69334 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
var statearr_69372_69427 = state_69340__$1;
(statearr_69372_69427[(2)] = inst_69334);

(statearr_69372_69427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (17))){
var state_69340__$1 = state_69340;
var statearr_69373_69428 = state_69340__$1;
(statearr_69373_69428[(2)] = false);

(statearr_69373_69428[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (3))){
var state_69340__$1 = state_69340;
var statearr_69374_69429 = state_69340__$1;
(statearr_69374_69429[(2)] = false);

(statearr_69374_69429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (12))){
var inst_69338 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69340__$1,inst_69338);
} else {
if((state_val_69341 === (2))){
var inst_69244 = (state_69340[(8)]);
var inst_69249 = inst_69244.cljs$lang$protocol_mask$partition0$;
var inst_69250 = (inst_69249 & (64));
var inst_69251 = inst_69244.cljs$core$ISeq$;
var inst_69252 = (inst_69250) || (inst_69251);
var state_69340__$1 = state_69340;
if(cljs.core.truth_(inst_69252)){
var statearr_69375_69430 = state_69340__$1;
(statearr_69375_69430[(1)] = (5));

} else {
var statearr_69376_69431 = state_69340__$1;
(statearr_69376_69431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (23))){
var inst_69299 = (state_69340[(14)]);
var inst_69305 = (inst_69299 == null);
var state_69340__$1 = state_69340;
if(cljs.core.truth_(inst_69305)){
var statearr_69377_69432 = state_69340__$1;
(statearr_69377_69432[(1)] = (26));

} else {
var statearr_69378_69433 = state_69340__$1;
(statearr_69378_69433[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (35))){
var inst_69325 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
if(cljs.core.truth_(inst_69325)){
var statearr_69379_69434 = state_69340__$1;
(statearr_69379_69434[(1)] = (36));

} else {
var statearr_69380_69435 = state_69340__$1;
(statearr_69380_69435[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (19))){
var inst_69268 = (state_69340[(7)]);
var inst_69287 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69268);
var state_69340__$1 = state_69340;
var statearr_69381_69436 = state_69340__$1;
(statearr_69381_69436[(2)] = inst_69287);

(statearr_69381_69436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (11))){
var inst_69268 = (state_69340[(7)]);
var inst_69272 = (inst_69268 == null);
var inst_69273 = cljs.core.not.call(null,inst_69272);
var state_69340__$1 = state_69340;
if(inst_69273){
var statearr_69382_69437 = state_69340__$1;
(statearr_69382_69437[(1)] = (13));

} else {
var statearr_69383_69438 = state_69340__$1;
(statearr_69383_69438[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (9))){
var inst_69244 = (state_69340[(8)]);
var state_69340__$1 = state_69340;
var statearr_69384_69439 = state_69340__$1;
(statearr_69384_69439[(2)] = inst_69244);

(statearr_69384_69439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (5))){
var state_69340__$1 = state_69340;
var statearr_69385_69440 = state_69340__$1;
(statearr_69385_69440[(2)] = true);

(statearr_69385_69440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (14))){
var state_69340__$1 = state_69340;
var statearr_69386_69441 = state_69340__$1;
(statearr_69386_69441[(2)] = false);

(statearr_69386_69441[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (26))){
var inst_69300 = (state_69340[(9)]);
var inst_69307 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_69300);
var state_69340__$1 = state_69340;
var statearr_69387_69442 = state_69340__$1;
(statearr_69387_69442[(2)] = inst_69307);

(statearr_69387_69442[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (16))){
var state_69340__$1 = state_69340;
var statearr_69388_69443 = state_69340__$1;
(statearr_69388_69443[(2)] = true);

(statearr_69388_69443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (38))){
var inst_69330 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
var statearr_69389_69444 = state_69340__$1;
(statearr_69389_69444[(2)] = inst_69330);

(statearr_69389_69444[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (30))){
var inst_69292 = (state_69340[(13)]);
var inst_69300 = (state_69340[(9)]);
var inst_69291 = (state_69340[(11)]);
var inst_69317 = cljs.core.empty_QMARK_.call(null,inst_69291);
var inst_69318 = inst_69292.call(null,inst_69300);
var inst_69319 = cljs.core.not.call(null,inst_69318);
var inst_69320 = (inst_69317) && (inst_69319);
var state_69340__$1 = state_69340;
var statearr_69390_69445 = state_69340__$1;
(statearr_69390_69445[(2)] = inst_69320);

(statearr_69390_69445[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (10))){
var inst_69244 = (state_69340[(8)]);
var inst_69264 = (state_69340[(2)]);
var inst_69265 = cljs.core.get.call(null,inst_69264,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_69266 = cljs.core.get.call(null,inst_69264,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_69267 = cljs.core.get.call(null,inst_69264,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_69268 = inst_69244;
var state_69340__$1 = (function (){var statearr_69391 = state_69340;
(statearr_69391[(16)] = inst_69266);

(statearr_69391[(7)] = inst_69268);

(statearr_69391[(17)] = inst_69265);

(statearr_69391[(18)] = inst_69267);

return statearr_69391;
})();
var statearr_69392_69446 = state_69340__$1;
(statearr_69392_69446[(2)] = null);

(statearr_69392_69446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (18))){
var inst_69282 = (state_69340[(2)]);
var state_69340__$1 = state_69340;
var statearr_69393_69447 = state_69340__$1;
(statearr_69393_69447[(2)] = inst_69282);

(statearr_69393_69447[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (37))){
var state_69340__$1 = state_69340;
var statearr_69394_69448 = state_69340__$1;
(statearr_69394_69448[(2)] = null);

(statearr_69394_69448[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69341 === (8))){
var inst_69244 = (state_69340[(8)]);
var inst_69261 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69244);
var state_69340__$1 = state_69340;
var statearr_69395_69449 = state_69340__$1;
(statearr_69395_69449[(2)] = inst_69261);

(statearr_69395_69449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___69403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15250__auto__,c__15364__auto___69403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15251__auto__ = null;
var cljs$core$async$mix_$_state_machine__15251__auto____0 = (function (){
var statearr_69399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69399[(0)] = cljs$core$async$mix_$_state_machine__15251__auto__);

(statearr_69399[(1)] = (1));

return statearr_69399;
});
var cljs$core$async$mix_$_state_machine__15251__auto____1 = (function (state_69340){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_69340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e69400){if((e69400 instanceof Object)){
var ex__15254__auto__ = e69400;
var statearr_69401_69450 = state_69340;
(statearr_69401_69450[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69451 = state_69340;
state_69340 = G__69451;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15251__auto__ = function(state_69340){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15251__auto____1.call(this,state_69340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15251__auto____0;
cljs$core$async$mix_$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15251__auto____1;
return cljs$core$async$mix_$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___69403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15366__auto__ = (function (){var statearr_69402 = f__15365__auto__.call(null);
(statearr_69402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___69403);

return statearr_69402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___69403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__6885__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,p,v,ch);
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args69452 = [];
var len__7296__auto___69455 = arguments.length;
var i__7297__auto___69456 = (0);
while(true){
if((i__7297__auto___69456 < len__7296__auto___69455)){
args69452.push((arguments[i__7297__auto___69456]));

var G__69457 = (i__7297__auto___69456 + (1));
i__7297__auto___69456 = G__69457;
continue;
} else {
}
break;
}

var G__69454 = args69452.length;
switch (G__69454) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69452.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,p);
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,p,v);
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args69460 = [];
var len__7296__auto___69585 = arguments.length;
var i__7297__auto___69586 = (0);
while(true){
if((i__7297__auto___69586 < len__7296__auto___69585)){
args69460.push((arguments[i__7297__auto___69586]));

var G__69587 = (i__7297__auto___69586 + (1));
i__7297__auto___69586 = G__69587;
continue;
} else {
}
break;
}

var G__69462 = args69460.length;
switch (G__69462) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69460.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6221__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6221__auto__,mults){
return (function (p1__69459_SHARP_){
if(cljs.core.truth_(p1__69459_SHARP_.call(null,topic))){
return p1__69459_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__69459_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6221__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async69463 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69463 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta69464){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta69464 = meta69464;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_69465,meta69464__$1){
var self__ = this;
var _69465__$1 = this;
return (new cljs.core.async.t_cljs$core$async69463(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta69464__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_69465){
var self__ = this;
var _69465__$1 = this;
return self__.meta69464;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta69464","meta69464",1733410281,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async69463.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69463.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69463";

cljs.core.async.t_cljs$core$async69463.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async69463");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async69463 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async69463(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69464){
return (new cljs.core.async.t_cljs$core$async69463(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta69464));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async69463(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15364__auto___69589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___69589,mults,ensure_mult,p){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___69589,mults,ensure_mult,p){
return (function (state_69537){
var state_val_69538 = (state_69537[(1)]);
if((state_val_69538 === (7))){
var inst_69533 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
var statearr_69539_69590 = state_69537__$1;
(statearr_69539_69590[(2)] = inst_69533);

(statearr_69539_69590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (20))){
var state_69537__$1 = state_69537;
var statearr_69540_69591 = state_69537__$1;
(statearr_69540_69591[(2)] = null);

(statearr_69540_69591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (1))){
var state_69537__$1 = state_69537;
var statearr_69541_69592 = state_69537__$1;
(statearr_69541_69592[(2)] = null);

(statearr_69541_69592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (24))){
var inst_69516 = (state_69537[(7)]);
var inst_69525 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_69516);
var state_69537__$1 = state_69537;
var statearr_69542_69593 = state_69537__$1;
(statearr_69542_69593[(2)] = inst_69525);

(statearr_69542_69593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (4))){
var inst_69468 = (state_69537[(8)]);
var inst_69468__$1 = (state_69537[(2)]);
var inst_69469 = (inst_69468__$1 == null);
var state_69537__$1 = (function (){var statearr_69543 = state_69537;
(statearr_69543[(8)] = inst_69468__$1);

return statearr_69543;
})();
if(cljs.core.truth_(inst_69469)){
var statearr_69544_69594 = state_69537__$1;
(statearr_69544_69594[(1)] = (5));

} else {
var statearr_69545_69595 = state_69537__$1;
(statearr_69545_69595[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (15))){
var inst_69510 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
var statearr_69546_69596 = state_69537__$1;
(statearr_69546_69596[(2)] = inst_69510);

(statearr_69546_69596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (21))){
var inst_69530 = (state_69537[(2)]);
var state_69537__$1 = (function (){var statearr_69547 = state_69537;
(statearr_69547[(9)] = inst_69530);

return statearr_69547;
})();
var statearr_69548_69597 = state_69537__$1;
(statearr_69548_69597[(2)] = null);

(statearr_69548_69597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (13))){
var inst_69492 = (state_69537[(10)]);
var inst_69494 = cljs.core.chunked_seq_QMARK_.call(null,inst_69492);
var state_69537__$1 = state_69537;
if(inst_69494){
var statearr_69549_69598 = state_69537__$1;
(statearr_69549_69598[(1)] = (16));

} else {
var statearr_69550_69599 = state_69537__$1;
(statearr_69550_69599[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (22))){
var inst_69522 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
if(cljs.core.truth_(inst_69522)){
var statearr_69551_69600 = state_69537__$1;
(statearr_69551_69600[(1)] = (23));

} else {
var statearr_69552_69601 = state_69537__$1;
(statearr_69552_69601[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (6))){
var inst_69516 = (state_69537[(7)]);
var inst_69518 = (state_69537[(11)]);
var inst_69468 = (state_69537[(8)]);
var inst_69516__$1 = topic_fn.call(null,inst_69468);
var inst_69517 = cljs.core.deref.call(null,mults);
var inst_69518__$1 = cljs.core.get.call(null,inst_69517,inst_69516__$1);
var state_69537__$1 = (function (){var statearr_69553 = state_69537;
(statearr_69553[(7)] = inst_69516__$1);

(statearr_69553[(11)] = inst_69518__$1);

return statearr_69553;
})();
if(cljs.core.truth_(inst_69518__$1)){
var statearr_69554_69602 = state_69537__$1;
(statearr_69554_69602[(1)] = (19));

} else {
var statearr_69555_69603 = state_69537__$1;
(statearr_69555_69603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (25))){
var inst_69527 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
var statearr_69556_69604 = state_69537__$1;
(statearr_69556_69604[(2)] = inst_69527);

(statearr_69556_69604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (17))){
var inst_69492 = (state_69537[(10)]);
var inst_69501 = cljs.core.first.call(null,inst_69492);
var inst_69502 = cljs.core.async.muxch_STAR_.call(null,inst_69501);
var inst_69503 = cljs.core.async.close_BANG_.call(null,inst_69502);
var inst_69504 = cljs.core.next.call(null,inst_69492);
var inst_69478 = inst_69504;
var inst_69479 = null;
var inst_69480 = (0);
var inst_69481 = (0);
var state_69537__$1 = (function (){var statearr_69557 = state_69537;
(statearr_69557[(12)] = inst_69481);

(statearr_69557[(13)] = inst_69479);

(statearr_69557[(14)] = inst_69503);

(statearr_69557[(15)] = inst_69478);

(statearr_69557[(16)] = inst_69480);

return statearr_69557;
})();
var statearr_69558_69605 = state_69537__$1;
(statearr_69558_69605[(2)] = null);

(statearr_69558_69605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (3))){
var inst_69535 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69537__$1,inst_69535);
} else {
if((state_val_69538 === (12))){
var inst_69512 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
var statearr_69559_69606 = state_69537__$1;
(statearr_69559_69606[(2)] = inst_69512);

(statearr_69559_69606[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (2))){
var state_69537__$1 = state_69537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69537__$1,(4),ch);
} else {
if((state_val_69538 === (23))){
var state_69537__$1 = state_69537;
var statearr_69560_69607 = state_69537__$1;
(statearr_69560_69607[(2)] = null);

(statearr_69560_69607[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (19))){
var inst_69518 = (state_69537[(11)]);
var inst_69468 = (state_69537[(8)]);
var inst_69520 = cljs.core.async.muxch_STAR_.call(null,inst_69518);
var state_69537__$1 = state_69537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69537__$1,(22),inst_69520,inst_69468);
} else {
if((state_val_69538 === (11))){
var inst_69492 = (state_69537[(10)]);
var inst_69478 = (state_69537[(15)]);
var inst_69492__$1 = cljs.core.seq.call(null,inst_69478);
var state_69537__$1 = (function (){var statearr_69561 = state_69537;
(statearr_69561[(10)] = inst_69492__$1);

return statearr_69561;
})();
if(inst_69492__$1){
var statearr_69562_69608 = state_69537__$1;
(statearr_69562_69608[(1)] = (13));

} else {
var statearr_69563_69609 = state_69537__$1;
(statearr_69563_69609[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (9))){
var inst_69514 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
var statearr_69564_69610 = state_69537__$1;
(statearr_69564_69610[(2)] = inst_69514);

(statearr_69564_69610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (5))){
var inst_69475 = cljs.core.deref.call(null,mults);
var inst_69476 = cljs.core.vals.call(null,inst_69475);
var inst_69477 = cljs.core.seq.call(null,inst_69476);
var inst_69478 = inst_69477;
var inst_69479 = null;
var inst_69480 = (0);
var inst_69481 = (0);
var state_69537__$1 = (function (){var statearr_69565 = state_69537;
(statearr_69565[(12)] = inst_69481);

(statearr_69565[(13)] = inst_69479);

(statearr_69565[(15)] = inst_69478);

(statearr_69565[(16)] = inst_69480);

return statearr_69565;
})();
var statearr_69566_69611 = state_69537__$1;
(statearr_69566_69611[(2)] = null);

(statearr_69566_69611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (14))){
var state_69537__$1 = state_69537;
var statearr_69570_69612 = state_69537__$1;
(statearr_69570_69612[(2)] = null);

(statearr_69570_69612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (16))){
var inst_69492 = (state_69537[(10)]);
var inst_69496 = cljs.core.chunk_first.call(null,inst_69492);
var inst_69497 = cljs.core.chunk_rest.call(null,inst_69492);
var inst_69498 = cljs.core.count.call(null,inst_69496);
var inst_69478 = inst_69497;
var inst_69479 = inst_69496;
var inst_69480 = inst_69498;
var inst_69481 = (0);
var state_69537__$1 = (function (){var statearr_69571 = state_69537;
(statearr_69571[(12)] = inst_69481);

(statearr_69571[(13)] = inst_69479);

(statearr_69571[(15)] = inst_69478);

(statearr_69571[(16)] = inst_69480);

return statearr_69571;
})();
var statearr_69572_69613 = state_69537__$1;
(statearr_69572_69613[(2)] = null);

(statearr_69572_69613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (10))){
var inst_69481 = (state_69537[(12)]);
var inst_69479 = (state_69537[(13)]);
var inst_69478 = (state_69537[(15)]);
var inst_69480 = (state_69537[(16)]);
var inst_69486 = cljs.core._nth.call(null,inst_69479,inst_69481);
var inst_69487 = cljs.core.async.muxch_STAR_.call(null,inst_69486);
var inst_69488 = cljs.core.async.close_BANG_.call(null,inst_69487);
var inst_69489 = (inst_69481 + (1));
var tmp69567 = inst_69479;
var tmp69568 = inst_69478;
var tmp69569 = inst_69480;
var inst_69478__$1 = tmp69568;
var inst_69479__$1 = tmp69567;
var inst_69480__$1 = tmp69569;
var inst_69481__$1 = inst_69489;
var state_69537__$1 = (function (){var statearr_69573 = state_69537;
(statearr_69573[(12)] = inst_69481__$1);

(statearr_69573[(17)] = inst_69488);

(statearr_69573[(13)] = inst_69479__$1);

(statearr_69573[(15)] = inst_69478__$1);

(statearr_69573[(16)] = inst_69480__$1);

return statearr_69573;
})();
var statearr_69574_69614 = state_69537__$1;
(statearr_69574_69614[(2)] = null);

(statearr_69574_69614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (18))){
var inst_69507 = (state_69537[(2)]);
var state_69537__$1 = state_69537;
var statearr_69575_69615 = state_69537__$1;
(statearr_69575_69615[(2)] = inst_69507);

(statearr_69575_69615[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69538 === (8))){
var inst_69481 = (state_69537[(12)]);
var inst_69480 = (state_69537[(16)]);
var inst_69483 = (inst_69481 < inst_69480);
var inst_69484 = inst_69483;
var state_69537__$1 = state_69537;
if(cljs.core.truth_(inst_69484)){
var statearr_69576_69616 = state_69537__$1;
(statearr_69576_69616[(1)] = (10));

} else {
var statearr_69577_69617 = state_69537__$1;
(statearr_69577_69617[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___69589,mults,ensure_mult,p))
;
return ((function (switch__15250__auto__,c__15364__auto___69589,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_69581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69581[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_69581[(1)] = (1));

return statearr_69581;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_69537){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_69537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e69582){if((e69582 instanceof Object)){
var ex__15254__auto__ = e69582;
var statearr_69583_69618 = state_69537;
(statearr_69583_69618[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69619 = state_69537;
state_69537 = G__69619;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_69537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_69537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___69589,mults,ensure_mult,p))
})();
var state__15366__auto__ = (function (){var statearr_69584 = f__15365__auto__.call(null);
(statearr_69584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___69589);

return statearr_69584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___69589,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args69620 = [];
var len__7296__auto___69623 = arguments.length;
var i__7297__auto___69624 = (0);
while(true){
if((i__7297__auto___69624 < len__7296__auto___69623)){
args69620.push((arguments[i__7297__auto___69624]));

var G__69625 = (i__7297__auto___69624 + (1));
i__7297__auto___69624 = G__69625;
continue;
} else {
}
break;
}

var G__69622 = args69620.length;
switch (G__69622) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69620.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args69627 = [];
var len__7296__auto___69630 = arguments.length;
var i__7297__auto___69631 = (0);
while(true){
if((i__7297__auto___69631 < len__7296__auto___69630)){
args69627.push((arguments[i__7297__auto___69631]));

var G__69632 = (i__7297__auto___69631 + (1));
i__7297__auto___69631 = G__69632;
continue;
} else {
}
break;
}

var G__69629 = args69627.length;
switch (G__69629) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69627.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args69634 = [];
var len__7296__auto___69705 = arguments.length;
var i__7297__auto___69706 = (0);
while(true){
if((i__7297__auto___69706 < len__7296__auto___69705)){
args69634.push((arguments[i__7297__auto___69706]));

var G__69707 = (i__7297__auto___69706 + (1));
i__7297__auto___69706 = G__69707;
continue;
} else {
}
break;
}

var G__69636 = args69634.length;
switch (G__69636) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69634.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__15364__auto___69709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___69709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___69709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_69675){
var state_val_69676 = (state_69675[(1)]);
if((state_val_69676 === (7))){
var state_69675__$1 = state_69675;
var statearr_69677_69710 = state_69675__$1;
(statearr_69677_69710[(2)] = null);

(statearr_69677_69710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (1))){
var state_69675__$1 = state_69675;
var statearr_69678_69711 = state_69675__$1;
(statearr_69678_69711[(2)] = null);

(statearr_69678_69711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (4))){
var inst_69639 = (state_69675[(7)]);
var inst_69641 = (inst_69639 < cnt);
var state_69675__$1 = state_69675;
if(cljs.core.truth_(inst_69641)){
var statearr_69679_69712 = state_69675__$1;
(statearr_69679_69712[(1)] = (6));

} else {
var statearr_69680_69713 = state_69675__$1;
(statearr_69680_69713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (15))){
var inst_69671 = (state_69675[(2)]);
var state_69675__$1 = state_69675;
var statearr_69681_69714 = state_69675__$1;
(statearr_69681_69714[(2)] = inst_69671);

(statearr_69681_69714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (13))){
var inst_69664 = cljs.core.async.close_BANG_.call(null,out);
var state_69675__$1 = state_69675;
var statearr_69682_69715 = state_69675__$1;
(statearr_69682_69715[(2)] = inst_69664);

(statearr_69682_69715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (6))){
var state_69675__$1 = state_69675;
var statearr_69683_69716 = state_69675__$1;
(statearr_69683_69716[(2)] = null);

(statearr_69683_69716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (3))){
var inst_69673 = (state_69675[(2)]);
var state_69675__$1 = state_69675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69675__$1,inst_69673);
} else {
if((state_val_69676 === (12))){
var inst_69661 = (state_69675[(8)]);
var inst_69661__$1 = (state_69675[(2)]);
var inst_69662 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_69661__$1);
var state_69675__$1 = (function (){var statearr_69684 = state_69675;
(statearr_69684[(8)] = inst_69661__$1);

return statearr_69684;
})();
if(cljs.core.truth_(inst_69662)){
var statearr_69685_69717 = state_69675__$1;
(statearr_69685_69717[(1)] = (13));

} else {
var statearr_69686_69718 = state_69675__$1;
(statearr_69686_69718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (2))){
var inst_69638 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_69639 = (0);
var state_69675__$1 = (function (){var statearr_69687 = state_69675;
(statearr_69687[(9)] = inst_69638);

(statearr_69687[(7)] = inst_69639);

return statearr_69687;
})();
var statearr_69688_69719 = state_69675__$1;
(statearr_69688_69719[(2)] = null);

(statearr_69688_69719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (11))){
var inst_69639 = (state_69675[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_69675,(10),Object,null,(9));
var inst_69648 = chs__$1.call(null,inst_69639);
var inst_69649 = done.call(null,inst_69639);
var inst_69650 = cljs.core.async.take_BANG_.call(null,inst_69648,inst_69649);
var state_69675__$1 = state_69675;
var statearr_69689_69720 = state_69675__$1;
(statearr_69689_69720[(2)] = inst_69650);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (9))){
var inst_69639 = (state_69675[(7)]);
var inst_69652 = (state_69675[(2)]);
var inst_69653 = (inst_69639 + (1));
var inst_69639__$1 = inst_69653;
var state_69675__$1 = (function (){var statearr_69690 = state_69675;
(statearr_69690[(10)] = inst_69652);

(statearr_69690[(7)] = inst_69639__$1);

return statearr_69690;
})();
var statearr_69691_69721 = state_69675__$1;
(statearr_69691_69721[(2)] = null);

(statearr_69691_69721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (5))){
var inst_69659 = (state_69675[(2)]);
var state_69675__$1 = (function (){var statearr_69692 = state_69675;
(statearr_69692[(11)] = inst_69659);

return statearr_69692;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69675__$1,(12),dchan);
} else {
if((state_val_69676 === (14))){
var inst_69661 = (state_69675[(8)]);
var inst_69666 = cljs.core.apply.call(null,f,inst_69661);
var state_69675__$1 = state_69675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69675__$1,(16),out,inst_69666);
} else {
if((state_val_69676 === (16))){
var inst_69668 = (state_69675[(2)]);
var state_69675__$1 = (function (){var statearr_69693 = state_69675;
(statearr_69693[(12)] = inst_69668);

return statearr_69693;
})();
var statearr_69694_69722 = state_69675__$1;
(statearr_69694_69722[(2)] = null);

(statearr_69694_69722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (10))){
var inst_69643 = (state_69675[(2)]);
var inst_69644 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_69675__$1 = (function (){var statearr_69695 = state_69675;
(statearr_69695[(13)] = inst_69643);

return statearr_69695;
})();
var statearr_69696_69723 = state_69675__$1;
(statearr_69696_69723[(2)] = inst_69644);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69675__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69676 === (8))){
var inst_69657 = (state_69675[(2)]);
var state_69675__$1 = state_69675;
var statearr_69697_69724 = state_69675__$1;
(statearr_69697_69724[(2)] = inst_69657);

(statearr_69697_69724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___69709,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15250__auto__,c__15364__auto___69709,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_69701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69701[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_69701[(1)] = (1));

return statearr_69701;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_69675){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_69675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e69702){if((e69702 instanceof Object)){
var ex__15254__auto__ = e69702;
var statearr_69703_69725 = state_69675;
(statearr_69703_69725[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69726 = state_69675;
state_69675 = G__69726;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_69675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_69675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___69709,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15366__auto__ = (function (){var statearr_69704 = f__15365__auto__.call(null);
(statearr_69704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___69709);

return statearr_69704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___69709,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args69728 = [];
var len__7296__auto___69786 = arguments.length;
var i__7297__auto___69787 = (0);
while(true){
if((i__7297__auto___69787 < len__7296__auto___69786)){
args69728.push((arguments[i__7297__auto___69787]));

var G__69788 = (i__7297__auto___69787 + (1));
i__7297__auto___69787 = G__69788;
continue;
} else {
}
break;
}

var G__69730 = args69728.length;
switch (G__69730) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69728.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15364__auto___69790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___69790,out){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___69790,out){
return (function (state_69762){
var state_val_69763 = (state_69762[(1)]);
if((state_val_69763 === (7))){
var inst_69741 = (state_69762[(7)]);
var inst_69742 = (state_69762[(8)]);
var inst_69741__$1 = (state_69762[(2)]);
var inst_69742__$1 = cljs.core.nth.call(null,inst_69741__$1,(0),null);
var inst_69743 = cljs.core.nth.call(null,inst_69741__$1,(1),null);
var inst_69744 = (inst_69742__$1 == null);
var state_69762__$1 = (function (){var statearr_69764 = state_69762;
(statearr_69764[(7)] = inst_69741__$1);

(statearr_69764[(9)] = inst_69743);

(statearr_69764[(8)] = inst_69742__$1);

return statearr_69764;
})();
if(cljs.core.truth_(inst_69744)){
var statearr_69765_69791 = state_69762__$1;
(statearr_69765_69791[(1)] = (8));

} else {
var statearr_69766_69792 = state_69762__$1;
(statearr_69766_69792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69763 === (1))){
var inst_69731 = cljs.core.vec.call(null,chs);
var inst_69732 = inst_69731;
var state_69762__$1 = (function (){var statearr_69767 = state_69762;
(statearr_69767[(10)] = inst_69732);

return statearr_69767;
})();
var statearr_69768_69793 = state_69762__$1;
(statearr_69768_69793[(2)] = null);

(statearr_69768_69793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69763 === (4))){
var inst_69732 = (state_69762[(10)]);
var state_69762__$1 = state_69762;
return cljs.core.async.ioc_alts_BANG_.call(null,state_69762__$1,(7),inst_69732);
} else {
if((state_val_69763 === (6))){
var inst_69758 = (state_69762[(2)]);
var state_69762__$1 = state_69762;
var statearr_69769_69794 = state_69762__$1;
(statearr_69769_69794[(2)] = inst_69758);

(statearr_69769_69794[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69763 === (3))){
var inst_69760 = (state_69762[(2)]);
var state_69762__$1 = state_69762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69762__$1,inst_69760);
} else {
if((state_val_69763 === (2))){
var inst_69732 = (state_69762[(10)]);
var inst_69734 = cljs.core.count.call(null,inst_69732);
var inst_69735 = (inst_69734 > (0));
var state_69762__$1 = state_69762;
if(cljs.core.truth_(inst_69735)){
var statearr_69771_69795 = state_69762__$1;
(statearr_69771_69795[(1)] = (4));

} else {
var statearr_69772_69796 = state_69762__$1;
(statearr_69772_69796[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69763 === (11))){
var inst_69732 = (state_69762[(10)]);
var inst_69751 = (state_69762[(2)]);
var tmp69770 = inst_69732;
var inst_69732__$1 = tmp69770;
var state_69762__$1 = (function (){var statearr_69773 = state_69762;
(statearr_69773[(10)] = inst_69732__$1);

(statearr_69773[(11)] = inst_69751);

return statearr_69773;
})();
var statearr_69774_69797 = state_69762__$1;
(statearr_69774_69797[(2)] = null);

(statearr_69774_69797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69763 === (9))){
var inst_69742 = (state_69762[(8)]);
var state_69762__$1 = state_69762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69762__$1,(11),out,inst_69742);
} else {
if((state_val_69763 === (5))){
var inst_69756 = cljs.core.async.close_BANG_.call(null,out);
var state_69762__$1 = state_69762;
var statearr_69775_69798 = state_69762__$1;
(statearr_69775_69798[(2)] = inst_69756);

(statearr_69775_69798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69763 === (10))){
var inst_69754 = (state_69762[(2)]);
var state_69762__$1 = state_69762;
var statearr_69776_69799 = state_69762__$1;
(statearr_69776_69799[(2)] = inst_69754);

(statearr_69776_69799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69763 === (8))){
var inst_69741 = (state_69762[(7)]);
var inst_69743 = (state_69762[(9)]);
var inst_69742 = (state_69762[(8)]);
var inst_69732 = (state_69762[(10)]);
var inst_69746 = (function (){var cs = inst_69732;
var vec__69737 = inst_69741;
var v = inst_69742;
var c = inst_69743;
return ((function (cs,vec__69737,v,c,inst_69741,inst_69743,inst_69742,inst_69732,state_val_69763,c__15364__auto___69790,out){
return (function (p1__69727_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__69727_SHARP_);
});
;})(cs,vec__69737,v,c,inst_69741,inst_69743,inst_69742,inst_69732,state_val_69763,c__15364__auto___69790,out))
})();
var inst_69747 = cljs.core.filterv.call(null,inst_69746,inst_69732);
var inst_69732__$1 = inst_69747;
var state_69762__$1 = (function (){var statearr_69777 = state_69762;
(statearr_69777[(10)] = inst_69732__$1);

return statearr_69777;
})();
var statearr_69778_69800 = state_69762__$1;
(statearr_69778_69800[(2)] = null);

(statearr_69778_69800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___69790,out))
;
return ((function (switch__15250__auto__,c__15364__auto___69790,out){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_69782 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69782[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_69782[(1)] = (1));

return statearr_69782;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_69762){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_69762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e69783){if((e69783 instanceof Object)){
var ex__15254__auto__ = e69783;
var statearr_69784_69801 = state_69762;
(statearr_69784_69801[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69802 = state_69762;
state_69762 = G__69802;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_69762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_69762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___69790,out))
})();
var state__15366__auto__ = (function (){var statearr_69785 = f__15365__auto__.call(null);
(statearr_69785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___69790);

return statearr_69785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___69790,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args69803 = [];
var len__7296__auto___69852 = arguments.length;
var i__7297__auto___69853 = (0);
while(true){
if((i__7297__auto___69853 < len__7296__auto___69852)){
args69803.push((arguments[i__7297__auto___69853]));

var G__69854 = (i__7297__auto___69853 + (1));
i__7297__auto___69853 = G__69854;
continue;
} else {
}
break;
}

var G__69805 = args69803.length;
switch (G__69805) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69803.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15364__auto___69856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___69856,out){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___69856,out){
return (function (state_69829){
var state_val_69830 = (state_69829[(1)]);
if((state_val_69830 === (7))){
var inst_69811 = (state_69829[(7)]);
var inst_69811__$1 = (state_69829[(2)]);
var inst_69812 = (inst_69811__$1 == null);
var inst_69813 = cljs.core.not.call(null,inst_69812);
var state_69829__$1 = (function (){var statearr_69831 = state_69829;
(statearr_69831[(7)] = inst_69811__$1);

return statearr_69831;
})();
if(inst_69813){
var statearr_69832_69857 = state_69829__$1;
(statearr_69832_69857[(1)] = (8));

} else {
var statearr_69833_69858 = state_69829__$1;
(statearr_69833_69858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (1))){
var inst_69806 = (0);
var state_69829__$1 = (function (){var statearr_69834 = state_69829;
(statearr_69834[(8)] = inst_69806);

return statearr_69834;
})();
var statearr_69835_69859 = state_69829__$1;
(statearr_69835_69859[(2)] = null);

(statearr_69835_69859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (4))){
var state_69829__$1 = state_69829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69829__$1,(7),ch);
} else {
if((state_val_69830 === (6))){
var inst_69824 = (state_69829[(2)]);
var state_69829__$1 = state_69829;
var statearr_69836_69860 = state_69829__$1;
(statearr_69836_69860[(2)] = inst_69824);

(statearr_69836_69860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (3))){
var inst_69826 = (state_69829[(2)]);
var inst_69827 = cljs.core.async.close_BANG_.call(null,out);
var state_69829__$1 = (function (){var statearr_69837 = state_69829;
(statearr_69837[(9)] = inst_69826);

return statearr_69837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69829__$1,inst_69827);
} else {
if((state_val_69830 === (2))){
var inst_69806 = (state_69829[(8)]);
var inst_69808 = (inst_69806 < n);
var state_69829__$1 = state_69829;
if(cljs.core.truth_(inst_69808)){
var statearr_69838_69861 = state_69829__$1;
(statearr_69838_69861[(1)] = (4));

} else {
var statearr_69839_69862 = state_69829__$1;
(statearr_69839_69862[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (11))){
var inst_69806 = (state_69829[(8)]);
var inst_69816 = (state_69829[(2)]);
var inst_69817 = (inst_69806 + (1));
var inst_69806__$1 = inst_69817;
var state_69829__$1 = (function (){var statearr_69840 = state_69829;
(statearr_69840[(8)] = inst_69806__$1);

(statearr_69840[(10)] = inst_69816);

return statearr_69840;
})();
var statearr_69841_69863 = state_69829__$1;
(statearr_69841_69863[(2)] = null);

(statearr_69841_69863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (9))){
var state_69829__$1 = state_69829;
var statearr_69842_69864 = state_69829__$1;
(statearr_69842_69864[(2)] = null);

(statearr_69842_69864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (5))){
var state_69829__$1 = state_69829;
var statearr_69843_69865 = state_69829__$1;
(statearr_69843_69865[(2)] = null);

(statearr_69843_69865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (10))){
var inst_69821 = (state_69829[(2)]);
var state_69829__$1 = state_69829;
var statearr_69844_69866 = state_69829__$1;
(statearr_69844_69866[(2)] = inst_69821);

(statearr_69844_69866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69830 === (8))){
var inst_69811 = (state_69829[(7)]);
var state_69829__$1 = state_69829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69829__$1,(11),out,inst_69811);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___69856,out))
;
return ((function (switch__15250__auto__,c__15364__auto___69856,out){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_69848 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_69848[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_69848[(1)] = (1));

return statearr_69848;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_69829){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_69829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e69849){if((e69849 instanceof Object)){
var ex__15254__auto__ = e69849;
var statearr_69850_69867 = state_69829;
(statearr_69850_69867[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69868 = state_69829;
state_69829 = G__69868;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_69829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_69829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___69856,out))
})();
var state__15366__auto__ = (function (){var statearr_69851 = f__15365__auto__.call(null);
(statearr_69851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___69856);

return statearr_69851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___69856,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async69876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69876 = (function (map_LT_,f,ch,meta69877){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta69877 = meta69877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69878,meta69877__$1){
var self__ = this;
var _69878__$1 = this;
return (new cljs.core.async.t_cljs$core$async69876(self__.map_LT_,self__.f,self__.ch,meta69877__$1));
});

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69878){
var self__ = this;
var _69878__$1 = this;
return self__.meta69877;
});

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async69879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69879 = (function (map_LT_,f,ch,meta69877,_,fn1,meta69880){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta69877 = meta69877;
this._ = _;
this.fn1 = fn1;
this.meta69880 = meta69880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_69881,meta69880__$1){
var self__ = this;
var _69881__$1 = this;
return (new cljs.core.async.t_cljs$core$async69879(self__.map_LT_,self__.f,self__.ch,self__.meta69877,self__._,self__.fn1,meta69880__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async69879.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_69881){
var self__ = this;
var _69881__$1 = this;
return self__.meta69880;
});})(___$1))
;

cljs.core.async.t_cljs$core$async69879.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async69879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async69879.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async69879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__69869_SHARP_){
return f1.call(null,(((p1__69869_SHARP_ == null))?null:self__.f.call(null,p1__69869_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async69879.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69877","meta69877",1331963238,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async69876","cljs.core.async/t_cljs$core$async69876",1776058438,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta69880","meta69880",363087935,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async69879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69879";

cljs.core.async.t_cljs$core$async69879.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async69879");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async69879 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69879(map_LT___$1,f__$1,ch__$1,meta69877__$1,___$2,fn1__$1,meta69880){
return (new cljs.core.async.t_cljs$core$async69879(map_LT___$1,f__$1,ch__$1,meta69877__$1,___$2,fn1__$1,meta69880));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async69879(self__.map_LT_,self__.f,self__.ch,self__.meta69877,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6209__auto__ = ret;
if(cljs.core.truth_(and__6209__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6209__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async69876.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async69876.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69877","meta69877",1331963238,null)], null);
});

cljs.core.async.t_cljs$core$async69876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69876";

cljs.core.async.t_cljs$core$async69876.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async69876");
});

cljs.core.async.__GT_t_cljs$core$async69876 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async69876(map_LT___$1,f__$1,ch__$1,meta69877){
return (new cljs.core.async.t_cljs$core$async69876(map_LT___$1,f__$1,ch__$1,meta69877));
});

}

return (new cljs.core.async.t_cljs$core$async69876(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async69885 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69885 = (function (map_GT_,f,ch,meta69886){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta69886 = meta69886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69887,meta69886__$1){
var self__ = this;
var _69887__$1 = this;
return (new cljs.core.async.t_cljs$core$async69885(self__.map_GT_,self__.f,self__.ch,meta69886__$1));
});

cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69887){
var self__ = this;
var _69887__$1 = this;
return self__.meta69886;
});

cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async69885.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async69885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69886","meta69886",125899409,null)], null);
});

cljs.core.async.t_cljs$core$async69885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69885";

cljs.core.async.t_cljs$core$async69885.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async69885");
});

cljs.core.async.__GT_t_cljs$core$async69885 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async69885(map_GT___$1,f__$1,ch__$1,meta69886){
return (new cljs.core.async.t_cljs$core$async69885(map_GT___$1,f__$1,ch__$1,meta69886));
});

}

return (new cljs.core.async.t_cljs$core$async69885(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async69891 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async69891 = (function (filter_GT_,p,ch,meta69892){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta69892 = meta69892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_69893,meta69892__$1){
var self__ = this;
var _69893__$1 = this;
return (new cljs.core.async.t_cljs$core$async69891(self__.filter_GT_,self__.p,self__.ch,meta69892__$1));
});

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_69893){
var self__ = this;
var _69893__$1 = this;
return self__.meta69892;
});

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async69891.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async69891.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta69892","meta69892",1071106645,null)], null);
});

cljs.core.async.t_cljs$core$async69891.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async69891.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async69891";

cljs.core.async.t_cljs$core$async69891.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.core.async/t_cljs$core$async69891");
});

cljs.core.async.__GT_t_cljs$core$async69891 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async69891(filter_GT___$1,p__$1,ch__$1,meta69892){
return (new cljs.core.async.t_cljs$core$async69891(filter_GT___$1,p__$1,ch__$1,meta69892));
});

}

return (new cljs.core.async.t_cljs$core$async69891(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args69894 = [];
var len__7296__auto___69938 = arguments.length;
var i__7297__auto___69939 = (0);
while(true){
if((i__7297__auto___69939 < len__7296__auto___69938)){
args69894.push((arguments[i__7297__auto___69939]));

var G__69940 = (i__7297__auto___69939 + (1));
i__7297__auto___69939 = G__69940;
continue;
} else {
}
break;
}

var G__69896 = args69894.length;
switch (G__69896) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69894.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15364__auto___69942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___69942,out){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___69942,out){
return (function (state_69917){
var state_val_69918 = (state_69917[(1)]);
if((state_val_69918 === (7))){
var inst_69913 = (state_69917[(2)]);
var state_69917__$1 = state_69917;
var statearr_69919_69943 = state_69917__$1;
(statearr_69919_69943[(2)] = inst_69913);

(statearr_69919_69943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (1))){
var state_69917__$1 = state_69917;
var statearr_69920_69944 = state_69917__$1;
(statearr_69920_69944[(2)] = null);

(statearr_69920_69944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (4))){
var inst_69899 = (state_69917[(7)]);
var inst_69899__$1 = (state_69917[(2)]);
var inst_69900 = (inst_69899__$1 == null);
var state_69917__$1 = (function (){var statearr_69921 = state_69917;
(statearr_69921[(7)] = inst_69899__$1);

return statearr_69921;
})();
if(cljs.core.truth_(inst_69900)){
var statearr_69922_69945 = state_69917__$1;
(statearr_69922_69945[(1)] = (5));

} else {
var statearr_69923_69946 = state_69917__$1;
(statearr_69923_69946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (6))){
var inst_69899 = (state_69917[(7)]);
var inst_69904 = p.call(null,inst_69899);
var state_69917__$1 = state_69917;
if(cljs.core.truth_(inst_69904)){
var statearr_69924_69947 = state_69917__$1;
(statearr_69924_69947[(1)] = (8));

} else {
var statearr_69925_69948 = state_69917__$1;
(statearr_69925_69948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (3))){
var inst_69915 = (state_69917[(2)]);
var state_69917__$1 = state_69917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69917__$1,inst_69915);
} else {
if((state_val_69918 === (2))){
var state_69917__$1 = state_69917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69917__$1,(4),ch);
} else {
if((state_val_69918 === (11))){
var inst_69907 = (state_69917[(2)]);
var state_69917__$1 = state_69917;
var statearr_69926_69949 = state_69917__$1;
(statearr_69926_69949[(2)] = inst_69907);

(statearr_69926_69949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (9))){
var state_69917__$1 = state_69917;
var statearr_69927_69950 = state_69917__$1;
(statearr_69927_69950[(2)] = null);

(statearr_69927_69950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (5))){
var inst_69902 = cljs.core.async.close_BANG_.call(null,out);
var state_69917__$1 = state_69917;
var statearr_69928_69951 = state_69917__$1;
(statearr_69928_69951[(2)] = inst_69902);

(statearr_69928_69951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (10))){
var inst_69910 = (state_69917[(2)]);
var state_69917__$1 = (function (){var statearr_69929 = state_69917;
(statearr_69929[(8)] = inst_69910);

return statearr_69929;
})();
var statearr_69930_69952 = state_69917__$1;
(statearr_69930_69952[(2)] = null);

(statearr_69930_69952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69918 === (8))){
var inst_69899 = (state_69917[(7)]);
var state_69917__$1 = state_69917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_69917__$1,(11),out,inst_69899);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___69942,out))
;
return ((function (switch__15250__auto__,c__15364__auto___69942,out){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_69934 = [null,null,null,null,null,null,null,null,null];
(statearr_69934[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_69934[(1)] = (1));

return statearr_69934;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_69917){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_69917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e69935){if((e69935 instanceof Object)){
var ex__15254__auto__ = e69935;
var statearr_69936_69953 = state_69917;
(statearr_69936_69953[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69954 = state_69917;
state_69917 = G__69954;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_69917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_69917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___69942,out))
})();
var state__15366__auto__ = (function (){var statearr_69937 = f__15365__auto__.call(null);
(statearr_69937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___69942);

return statearr_69937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___69942,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args69955 = [];
var len__7296__auto___69958 = arguments.length;
var i__7297__auto___69959 = (0);
while(true){
if((i__7297__auto___69959 < len__7296__auto___69958)){
args69955.push((arguments[i__7297__auto___69959]));

var G__69960 = (i__7297__auto___69959 + (1));
i__7297__auto___69959 = G__69960;
continue;
} else {
}
break;
}

var G__69957 = args69955.length;
switch (G__69957) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args69955.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15364__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto__){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto__){
return (function (state_70127){
var state_val_70128 = (state_70127[(1)]);
if((state_val_70128 === (7))){
var inst_70123 = (state_70127[(2)]);
var state_70127__$1 = state_70127;
var statearr_70129_70170 = state_70127__$1;
(statearr_70129_70170[(2)] = inst_70123);

(statearr_70129_70170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (20))){
var inst_70093 = (state_70127[(7)]);
var inst_70104 = (state_70127[(2)]);
var inst_70105 = cljs.core.next.call(null,inst_70093);
var inst_70079 = inst_70105;
var inst_70080 = null;
var inst_70081 = (0);
var inst_70082 = (0);
var state_70127__$1 = (function (){var statearr_70130 = state_70127;
(statearr_70130[(8)] = inst_70082);

(statearr_70130[(9)] = inst_70104);

(statearr_70130[(10)] = inst_70080);

(statearr_70130[(11)] = inst_70081);

(statearr_70130[(12)] = inst_70079);

return statearr_70130;
})();
var statearr_70131_70171 = state_70127__$1;
(statearr_70131_70171[(2)] = null);

(statearr_70131_70171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (1))){
var state_70127__$1 = state_70127;
var statearr_70132_70172 = state_70127__$1;
(statearr_70132_70172[(2)] = null);

(statearr_70132_70172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (4))){
var inst_70068 = (state_70127[(13)]);
var inst_70068__$1 = (state_70127[(2)]);
var inst_70069 = (inst_70068__$1 == null);
var state_70127__$1 = (function (){var statearr_70133 = state_70127;
(statearr_70133[(13)] = inst_70068__$1);

return statearr_70133;
})();
if(cljs.core.truth_(inst_70069)){
var statearr_70134_70173 = state_70127__$1;
(statearr_70134_70173[(1)] = (5));

} else {
var statearr_70135_70174 = state_70127__$1;
(statearr_70135_70174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (15))){
var state_70127__$1 = state_70127;
var statearr_70139_70175 = state_70127__$1;
(statearr_70139_70175[(2)] = null);

(statearr_70139_70175[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (21))){
var state_70127__$1 = state_70127;
var statearr_70140_70176 = state_70127__$1;
(statearr_70140_70176[(2)] = null);

(statearr_70140_70176[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (13))){
var inst_70082 = (state_70127[(8)]);
var inst_70080 = (state_70127[(10)]);
var inst_70081 = (state_70127[(11)]);
var inst_70079 = (state_70127[(12)]);
var inst_70089 = (state_70127[(2)]);
var inst_70090 = (inst_70082 + (1));
var tmp70136 = inst_70080;
var tmp70137 = inst_70081;
var tmp70138 = inst_70079;
var inst_70079__$1 = tmp70138;
var inst_70080__$1 = tmp70136;
var inst_70081__$1 = tmp70137;
var inst_70082__$1 = inst_70090;
var state_70127__$1 = (function (){var statearr_70141 = state_70127;
(statearr_70141[(8)] = inst_70082__$1);

(statearr_70141[(10)] = inst_70080__$1);

(statearr_70141[(11)] = inst_70081__$1);

(statearr_70141[(14)] = inst_70089);

(statearr_70141[(12)] = inst_70079__$1);

return statearr_70141;
})();
var statearr_70142_70177 = state_70127__$1;
(statearr_70142_70177[(2)] = null);

(statearr_70142_70177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (22))){
var state_70127__$1 = state_70127;
var statearr_70143_70178 = state_70127__$1;
(statearr_70143_70178[(2)] = null);

(statearr_70143_70178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (6))){
var inst_70068 = (state_70127[(13)]);
var inst_70077 = f.call(null,inst_70068);
var inst_70078 = cljs.core.seq.call(null,inst_70077);
var inst_70079 = inst_70078;
var inst_70080 = null;
var inst_70081 = (0);
var inst_70082 = (0);
var state_70127__$1 = (function (){var statearr_70144 = state_70127;
(statearr_70144[(8)] = inst_70082);

(statearr_70144[(10)] = inst_70080);

(statearr_70144[(11)] = inst_70081);

(statearr_70144[(12)] = inst_70079);

return statearr_70144;
})();
var statearr_70145_70179 = state_70127__$1;
(statearr_70145_70179[(2)] = null);

(statearr_70145_70179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (17))){
var inst_70093 = (state_70127[(7)]);
var inst_70097 = cljs.core.chunk_first.call(null,inst_70093);
var inst_70098 = cljs.core.chunk_rest.call(null,inst_70093);
var inst_70099 = cljs.core.count.call(null,inst_70097);
var inst_70079 = inst_70098;
var inst_70080 = inst_70097;
var inst_70081 = inst_70099;
var inst_70082 = (0);
var state_70127__$1 = (function (){var statearr_70146 = state_70127;
(statearr_70146[(8)] = inst_70082);

(statearr_70146[(10)] = inst_70080);

(statearr_70146[(11)] = inst_70081);

(statearr_70146[(12)] = inst_70079);

return statearr_70146;
})();
var statearr_70147_70180 = state_70127__$1;
(statearr_70147_70180[(2)] = null);

(statearr_70147_70180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (3))){
var inst_70125 = (state_70127[(2)]);
var state_70127__$1 = state_70127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70127__$1,inst_70125);
} else {
if((state_val_70128 === (12))){
var inst_70113 = (state_70127[(2)]);
var state_70127__$1 = state_70127;
var statearr_70148_70181 = state_70127__$1;
(statearr_70148_70181[(2)] = inst_70113);

(statearr_70148_70181[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (2))){
var state_70127__$1 = state_70127;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70127__$1,(4),in$);
} else {
if((state_val_70128 === (23))){
var inst_70121 = (state_70127[(2)]);
var state_70127__$1 = state_70127;
var statearr_70149_70182 = state_70127__$1;
(statearr_70149_70182[(2)] = inst_70121);

(statearr_70149_70182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (19))){
var inst_70108 = (state_70127[(2)]);
var state_70127__$1 = state_70127;
var statearr_70150_70183 = state_70127__$1;
(statearr_70150_70183[(2)] = inst_70108);

(statearr_70150_70183[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (11))){
var inst_70079 = (state_70127[(12)]);
var inst_70093 = (state_70127[(7)]);
var inst_70093__$1 = cljs.core.seq.call(null,inst_70079);
var state_70127__$1 = (function (){var statearr_70151 = state_70127;
(statearr_70151[(7)] = inst_70093__$1);

return statearr_70151;
})();
if(inst_70093__$1){
var statearr_70152_70184 = state_70127__$1;
(statearr_70152_70184[(1)] = (14));

} else {
var statearr_70153_70185 = state_70127__$1;
(statearr_70153_70185[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (9))){
var inst_70115 = (state_70127[(2)]);
var inst_70116 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_70127__$1 = (function (){var statearr_70154 = state_70127;
(statearr_70154[(15)] = inst_70115);

return statearr_70154;
})();
if(cljs.core.truth_(inst_70116)){
var statearr_70155_70186 = state_70127__$1;
(statearr_70155_70186[(1)] = (21));

} else {
var statearr_70156_70187 = state_70127__$1;
(statearr_70156_70187[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (5))){
var inst_70071 = cljs.core.async.close_BANG_.call(null,out);
var state_70127__$1 = state_70127;
var statearr_70157_70188 = state_70127__$1;
(statearr_70157_70188[(2)] = inst_70071);

(statearr_70157_70188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (14))){
var inst_70093 = (state_70127[(7)]);
var inst_70095 = cljs.core.chunked_seq_QMARK_.call(null,inst_70093);
var state_70127__$1 = state_70127;
if(inst_70095){
var statearr_70158_70189 = state_70127__$1;
(statearr_70158_70189[(1)] = (17));

} else {
var statearr_70159_70190 = state_70127__$1;
(statearr_70159_70190[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (16))){
var inst_70111 = (state_70127[(2)]);
var state_70127__$1 = state_70127;
var statearr_70160_70191 = state_70127__$1;
(statearr_70160_70191[(2)] = inst_70111);

(statearr_70160_70191[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70128 === (10))){
var inst_70082 = (state_70127[(8)]);
var inst_70080 = (state_70127[(10)]);
var inst_70087 = cljs.core._nth.call(null,inst_70080,inst_70082);
var state_70127__$1 = state_70127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70127__$1,(13),out,inst_70087);
} else {
if((state_val_70128 === (18))){
var inst_70093 = (state_70127[(7)]);
var inst_70102 = cljs.core.first.call(null,inst_70093);
var state_70127__$1 = state_70127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70127__$1,(20),out,inst_70102);
} else {
if((state_val_70128 === (8))){
var inst_70082 = (state_70127[(8)]);
var inst_70081 = (state_70127[(11)]);
var inst_70084 = (inst_70082 < inst_70081);
var inst_70085 = inst_70084;
var state_70127__$1 = state_70127;
if(cljs.core.truth_(inst_70085)){
var statearr_70161_70192 = state_70127__$1;
(statearr_70161_70192[(1)] = (10));

} else {
var statearr_70162_70193 = state_70127__$1;
(statearr_70162_70193[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto__))
;
return ((function (switch__15250__auto__,c__15364__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15251__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15251__auto____0 = (function (){
var statearr_70166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70166[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15251__auto__);

(statearr_70166[(1)] = (1));

return statearr_70166;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15251__auto____1 = (function (state_70127){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_70127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e70167){if((e70167 instanceof Object)){
var ex__15254__auto__ = e70167;
var statearr_70168_70194 = state_70127;
(statearr_70168_70194[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70195 = state_70127;
state_70127 = G__70195;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15251__auto__ = function(state_70127){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15251__auto____1.call(this,state_70127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15251__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15251__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto__))
})();
var state__15366__auto__ = (function (){var statearr_70169 = f__15365__auto__.call(null);
(statearr_70169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto__);

return statearr_70169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto__))
);

return c__15364__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args70196 = [];
var len__7296__auto___70199 = arguments.length;
var i__7297__auto___70200 = (0);
while(true){
if((i__7297__auto___70200 < len__7296__auto___70199)){
args70196.push((arguments[i__7297__auto___70200]));

var G__70201 = (i__7297__auto___70200 + (1));
i__7297__auto___70200 = G__70201;
continue;
} else {
}
break;
}

var G__70198 = args70196.length;
switch (G__70198) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70196.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args70203 = [];
var len__7296__auto___70206 = arguments.length;
var i__7297__auto___70207 = (0);
while(true){
if((i__7297__auto___70207 < len__7296__auto___70206)){
args70203.push((arguments[i__7297__auto___70207]));

var G__70208 = (i__7297__auto___70207 + (1));
i__7297__auto___70207 = G__70208;
continue;
} else {
}
break;
}

var G__70205 = args70203.length;
switch (G__70205) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70203.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args70210 = [];
var len__7296__auto___70261 = arguments.length;
var i__7297__auto___70262 = (0);
while(true){
if((i__7297__auto___70262 < len__7296__auto___70261)){
args70210.push((arguments[i__7297__auto___70262]));

var G__70263 = (i__7297__auto___70262 + (1));
i__7297__auto___70262 = G__70263;
continue;
} else {
}
break;
}

var G__70212 = args70210.length;
switch (G__70212) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70210.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15364__auto___70265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___70265,out){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___70265,out){
return (function (state_70236){
var state_val_70237 = (state_70236[(1)]);
if((state_val_70237 === (7))){
var inst_70231 = (state_70236[(2)]);
var state_70236__$1 = state_70236;
var statearr_70238_70266 = state_70236__$1;
(statearr_70238_70266[(2)] = inst_70231);

(statearr_70238_70266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70237 === (1))){
var inst_70213 = null;
var state_70236__$1 = (function (){var statearr_70239 = state_70236;
(statearr_70239[(7)] = inst_70213);

return statearr_70239;
})();
var statearr_70240_70267 = state_70236__$1;
(statearr_70240_70267[(2)] = null);

(statearr_70240_70267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70237 === (4))){
var inst_70216 = (state_70236[(8)]);
var inst_70216__$1 = (state_70236[(2)]);
var inst_70217 = (inst_70216__$1 == null);
var inst_70218 = cljs.core.not.call(null,inst_70217);
var state_70236__$1 = (function (){var statearr_70241 = state_70236;
(statearr_70241[(8)] = inst_70216__$1);

return statearr_70241;
})();
if(inst_70218){
var statearr_70242_70268 = state_70236__$1;
(statearr_70242_70268[(1)] = (5));

} else {
var statearr_70243_70269 = state_70236__$1;
(statearr_70243_70269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70237 === (6))){
var state_70236__$1 = state_70236;
var statearr_70244_70270 = state_70236__$1;
(statearr_70244_70270[(2)] = null);

(statearr_70244_70270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70237 === (3))){
var inst_70233 = (state_70236[(2)]);
var inst_70234 = cljs.core.async.close_BANG_.call(null,out);
var state_70236__$1 = (function (){var statearr_70245 = state_70236;
(statearr_70245[(9)] = inst_70233);

return statearr_70245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70236__$1,inst_70234);
} else {
if((state_val_70237 === (2))){
var state_70236__$1 = state_70236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70236__$1,(4),ch);
} else {
if((state_val_70237 === (11))){
var inst_70216 = (state_70236[(8)]);
var inst_70225 = (state_70236[(2)]);
var inst_70213 = inst_70216;
var state_70236__$1 = (function (){var statearr_70246 = state_70236;
(statearr_70246[(7)] = inst_70213);

(statearr_70246[(10)] = inst_70225);

return statearr_70246;
})();
var statearr_70247_70271 = state_70236__$1;
(statearr_70247_70271[(2)] = null);

(statearr_70247_70271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70237 === (9))){
var inst_70216 = (state_70236[(8)]);
var state_70236__$1 = state_70236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70236__$1,(11),out,inst_70216);
} else {
if((state_val_70237 === (5))){
var inst_70216 = (state_70236[(8)]);
var inst_70213 = (state_70236[(7)]);
var inst_70220 = cljs.core._EQ_.call(null,inst_70216,inst_70213);
var state_70236__$1 = state_70236;
if(inst_70220){
var statearr_70249_70272 = state_70236__$1;
(statearr_70249_70272[(1)] = (8));

} else {
var statearr_70250_70273 = state_70236__$1;
(statearr_70250_70273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70237 === (10))){
var inst_70228 = (state_70236[(2)]);
var state_70236__$1 = state_70236;
var statearr_70251_70274 = state_70236__$1;
(statearr_70251_70274[(2)] = inst_70228);

(statearr_70251_70274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70237 === (8))){
var inst_70213 = (state_70236[(7)]);
var tmp70248 = inst_70213;
var inst_70213__$1 = tmp70248;
var state_70236__$1 = (function (){var statearr_70252 = state_70236;
(statearr_70252[(7)] = inst_70213__$1);

return statearr_70252;
})();
var statearr_70253_70275 = state_70236__$1;
(statearr_70253_70275[(2)] = null);

(statearr_70253_70275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___70265,out))
;
return ((function (switch__15250__auto__,c__15364__auto___70265,out){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_70257 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_70257[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_70257[(1)] = (1));

return statearr_70257;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_70236){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_70236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e70258){if((e70258 instanceof Object)){
var ex__15254__auto__ = e70258;
var statearr_70259_70276 = state_70236;
(statearr_70259_70276[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70277 = state_70236;
state_70236 = G__70277;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_70236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_70236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___70265,out))
})();
var state__15366__auto__ = (function (){var statearr_70260 = f__15365__auto__.call(null);
(statearr_70260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___70265);

return statearr_70260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___70265,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args70278 = [];
var len__7296__auto___70348 = arguments.length;
var i__7297__auto___70349 = (0);
while(true){
if((i__7297__auto___70349 < len__7296__auto___70348)){
args70278.push((arguments[i__7297__auto___70349]));

var G__70350 = (i__7297__auto___70349 + (1));
i__7297__auto___70349 = G__70350;
continue;
} else {
}
break;
}

var G__70280 = args70278.length;
switch (G__70280) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70278.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15364__auto___70352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___70352,out){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___70352,out){
return (function (state_70318){
var state_val_70319 = (state_70318[(1)]);
if((state_val_70319 === (7))){
var inst_70314 = (state_70318[(2)]);
var state_70318__$1 = state_70318;
var statearr_70320_70353 = state_70318__$1;
(statearr_70320_70353[(2)] = inst_70314);

(statearr_70320_70353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (1))){
var inst_70281 = (new Array(n));
var inst_70282 = inst_70281;
var inst_70283 = (0);
var state_70318__$1 = (function (){var statearr_70321 = state_70318;
(statearr_70321[(7)] = inst_70283);

(statearr_70321[(8)] = inst_70282);

return statearr_70321;
})();
var statearr_70322_70354 = state_70318__$1;
(statearr_70322_70354[(2)] = null);

(statearr_70322_70354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (4))){
var inst_70286 = (state_70318[(9)]);
var inst_70286__$1 = (state_70318[(2)]);
var inst_70287 = (inst_70286__$1 == null);
var inst_70288 = cljs.core.not.call(null,inst_70287);
var state_70318__$1 = (function (){var statearr_70323 = state_70318;
(statearr_70323[(9)] = inst_70286__$1);

return statearr_70323;
})();
if(inst_70288){
var statearr_70324_70355 = state_70318__$1;
(statearr_70324_70355[(1)] = (5));

} else {
var statearr_70325_70356 = state_70318__$1;
(statearr_70325_70356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (15))){
var inst_70308 = (state_70318[(2)]);
var state_70318__$1 = state_70318;
var statearr_70326_70357 = state_70318__$1;
(statearr_70326_70357[(2)] = inst_70308);

(statearr_70326_70357[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (13))){
var state_70318__$1 = state_70318;
var statearr_70327_70358 = state_70318__$1;
(statearr_70327_70358[(2)] = null);

(statearr_70327_70358[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (6))){
var inst_70283 = (state_70318[(7)]);
var inst_70304 = (inst_70283 > (0));
var state_70318__$1 = state_70318;
if(cljs.core.truth_(inst_70304)){
var statearr_70328_70359 = state_70318__$1;
(statearr_70328_70359[(1)] = (12));

} else {
var statearr_70329_70360 = state_70318__$1;
(statearr_70329_70360[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (3))){
var inst_70316 = (state_70318[(2)]);
var state_70318__$1 = state_70318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70318__$1,inst_70316);
} else {
if((state_val_70319 === (12))){
var inst_70282 = (state_70318[(8)]);
var inst_70306 = cljs.core.vec.call(null,inst_70282);
var state_70318__$1 = state_70318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70318__$1,(15),out,inst_70306);
} else {
if((state_val_70319 === (2))){
var state_70318__$1 = state_70318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70318__$1,(4),ch);
} else {
if((state_val_70319 === (11))){
var inst_70298 = (state_70318[(2)]);
var inst_70299 = (new Array(n));
var inst_70282 = inst_70299;
var inst_70283 = (0);
var state_70318__$1 = (function (){var statearr_70330 = state_70318;
(statearr_70330[(10)] = inst_70298);

(statearr_70330[(7)] = inst_70283);

(statearr_70330[(8)] = inst_70282);

return statearr_70330;
})();
var statearr_70331_70361 = state_70318__$1;
(statearr_70331_70361[(2)] = null);

(statearr_70331_70361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (9))){
var inst_70282 = (state_70318[(8)]);
var inst_70296 = cljs.core.vec.call(null,inst_70282);
var state_70318__$1 = state_70318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70318__$1,(11),out,inst_70296);
} else {
if((state_val_70319 === (5))){
var inst_70291 = (state_70318[(11)]);
var inst_70283 = (state_70318[(7)]);
var inst_70282 = (state_70318[(8)]);
var inst_70286 = (state_70318[(9)]);
var inst_70290 = (inst_70282[inst_70283] = inst_70286);
var inst_70291__$1 = (inst_70283 + (1));
var inst_70292 = (inst_70291__$1 < n);
var state_70318__$1 = (function (){var statearr_70332 = state_70318;
(statearr_70332[(11)] = inst_70291__$1);

(statearr_70332[(12)] = inst_70290);

return statearr_70332;
})();
if(cljs.core.truth_(inst_70292)){
var statearr_70333_70362 = state_70318__$1;
(statearr_70333_70362[(1)] = (8));

} else {
var statearr_70334_70363 = state_70318__$1;
(statearr_70334_70363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (14))){
var inst_70311 = (state_70318[(2)]);
var inst_70312 = cljs.core.async.close_BANG_.call(null,out);
var state_70318__$1 = (function (){var statearr_70336 = state_70318;
(statearr_70336[(13)] = inst_70311);

return statearr_70336;
})();
var statearr_70337_70364 = state_70318__$1;
(statearr_70337_70364[(2)] = inst_70312);

(statearr_70337_70364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (10))){
var inst_70302 = (state_70318[(2)]);
var state_70318__$1 = state_70318;
var statearr_70338_70365 = state_70318__$1;
(statearr_70338_70365[(2)] = inst_70302);

(statearr_70338_70365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70319 === (8))){
var inst_70291 = (state_70318[(11)]);
var inst_70282 = (state_70318[(8)]);
var tmp70335 = inst_70282;
var inst_70282__$1 = tmp70335;
var inst_70283 = inst_70291;
var state_70318__$1 = (function (){var statearr_70339 = state_70318;
(statearr_70339[(7)] = inst_70283);

(statearr_70339[(8)] = inst_70282__$1);

return statearr_70339;
})();
var statearr_70340_70366 = state_70318__$1;
(statearr_70340_70366[(2)] = null);

(statearr_70340_70366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___70352,out))
;
return ((function (switch__15250__auto__,c__15364__auto___70352,out){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_70344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70344[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_70344[(1)] = (1));

return statearr_70344;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_70318){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_70318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e70345){if((e70345 instanceof Object)){
var ex__15254__auto__ = e70345;
var statearr_70346_70367 = state_70318;
(statearr_70346_70367[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70368 = state_70318;
state_70318 = G__70368;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_70318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_70318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___70352,out))
})();
var state__15366__auto__ = (function (){var statearr_70347 = f__15365__auto__.call(null);
(statearr_70347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___70352);

return statearr_70347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___70352,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args70369 = [];
var len__7296__auto___70443 = arguments.length;
var i__7297__auto___70444 = (0);
while(true){
if((i__7297__auto___70444 < len__7296__auto___70443)){
args70369.push((arguments[i__7297__auto___70444]));

var G__70445 = (i__7297__auto___70444 + (1));
i__7297__auto___70444 = G__70445;
continue;
} else {
}
break;
}

var G__70371 = args70369.length;
switch (G__70371) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70369.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__15364__auto___70447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__15364__auto___70447,out){
return (function (){
var f__15365__auto__ = (function (){var switch__15250__auto__ = ((function (c__15364__auto___70447,out){
return (function (state_70413){
var state_val_70414 = (state_70413[(1)]);
if((state_val_70414 === (7))){
var inst_70409 = (state_70413[(2)]);
var state_70413__$1 = state_70413;
var statearr_70415_70448 = state_70413__$1;
(statearr_70415_70448[(2)] = inst_70409);

(statearr_70415_70448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (1))){
var inst_70372 = [];
var inst_70373 = inst_70372;
var inst_70374 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_70413__$1 = (function (){var statearr_70416 = state_70413;
(statearr_70416[(7)] = inst_70374);

(statearr_70416[(8)] = inst_70373);

return statearr_70416;
})();
var statearr_70417_70449 = state_70413__$1;
(statearr_70417_70449[(2)] = null);

(statearr_70417_70449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (4))){
var inst_70377 = (state_70413[(9)]);
var inst_70377__$1 = (state_70413[(2)]);
var inst_70378 = (inst_70377__$1 == null);
var inst_70379 = cljs.core.not.call(null,inst_70378);
var state_70413__$1 = (function (){var statearr_70418 = state_70413;
(statearr_70418[(9)] = inst_70377__$1);

return statearr_70418;
})();
if(inst_70379){
var statearr_70419_70450 = state_70413__$1;
(statearr_70419_70450[(1)] = (5));

} else {
var statearr_70420_70451 = state_70413__$1;
(statearr_70420_70451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (15))){
var inst_70403 = (state_70413[(2)]);
var state_70413__$1 = state_70413;
var statearr_70421_70452 = state_70413__$1;
(statearr_70421_70452[(2)] = inst_70403);

(statearr_70421_70452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (13))){
var state_70413__$1 = state_70413;
var statearr_70422_70453 = state_70413__$1;
(statearr_70422_70453[(2)] = null);

(statearr_70422_70453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (6))){
var inst_70373 = (state_70413[(8)]);
var inst_70398 = inst_70373.length;
var inst_70399 = (inst_70398 > (0));
var state_70413__$1 = state_70413;
if(cljs.core.truth_(inst_70399)){
var statearr_70423_70454 = state_70413__$1;
(statearr_70423_70454[(1)] = (12));

} else {
var statearr_70424_70455 = state_70413__$1;
(statearr_70424_70455[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (3))){
var inst_70411 = (state_70413[(2)]);
var state_70413__$1 = state_70413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70413__$1,inst_70411);
} else {
if((state_val_70414 === (12))){
var inst_70373 = (state_70413[(8)]);
var inst_70401 = cljs.core.vec.call(null,inst_70373);
var state_70413__$1 = state_70413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70413__$1,(15),out,inst_70401);
} else {
if((state_val_70414 === (2))){
var state_70413__$1 = state_70413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70413__$1,(4),ch);
} else {
if((state_val_70414 === (11))){
var inst_70377 = (state_70413[(9)]);
var inst_70381 = (state_70413[(10)]);
var inst_70391 = (state_70413[(2)]);
var inst_70392 = [];
var inst_70393 = inst_70392.push(inst_70377);
var inst_70373 = inst_70392;
var inst_70374 = inst_70381;
var state_70413__$1 = (function (){var statearr_70425 = state_70413;
(statearr_70425[(7)] = inst_70374);

(statearr_70425[(8)] = inst_70373);

(statearr_70425[(11)] = inst_70393);

(statearr_70425[(12)] = inst_70391);

return statearr_70425;
})();
var statearr_70426_70456 = state_70413__$1;
(statearr_70426_70456[(2)] = null);

(statearr_70426_70456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (9))){
var inst_70373 = (state_70413[(8)]);
var inst_70389 = cljs.core.vec.call(null,inst_70373);
var state_70413__$1 = state_70413;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_70413__$1,(11),out,inst_70389);
} else {
if((state_val_70414 === (5))){
var inst_70374 = (state_70413[(7)]);
var inst_70377 = (state_70413[(9)]);
var inst_70381 = (state_70413[(10)]);
var inst_70381__$1 = f.call(null,inst_70377);
var inst_70382 = cljs.core._EQ_.call(null,inst_70381__$1,inst_70374);
var inst_70383 = cljs.core.keyword_identical_QMARK_.call(null,inst_70374,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_70384 = (inst_70382) || (inst_70383);
var state_70413__$1 = (function (){var statearr_70427 = state_70413;
(statearr_70427[(10)] = inst_70381__$1);

return statearr_70427;
})();
if(cljs.core.truth_(inst_70384)){
var statearr_70428_70457 = state_70413__$1;
(statearr_70428_70457[(1)] = (8));

} else {
var statearr_70429_70458 = state_70413__$1;
(statearr_70429_70458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (14))){
var inst_70406 = (state_70413[(2)]);
var inst_70407 = cljs.core.async.close_BANG_.call(null,out);
var state_70413__$1 = (function (){var statearr_70431 = state_70413;
(statearr_70431[(13)] = inst_70406);

return statearr_70431;
})();
var statearr_70432_70459 = state_70413__$1;
(statearr_70432_70459[(2)] = inst_70407);

(statearr_70432_70459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (10))){
var inst_70396 = (state_70413[(2)]);
var state_70413__$1 = state_70413;
var statearr_70433_70460 = state_70413__$1;
(statearr_70433_70460[(2)] = inst_70396);

(statearr_70433_70460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70414 === (8))){
var inst_70373 = (state_70413[(8)]);
var inst_70377 = (state_70413[(9)]);
var inst_70381 = (state_70413[(10)]);
var inst_70386 = inst_70373.push(inst_70377);
var tmp70430 = inst_70373;
var inst_70373__$1 = tmp70430;
var inst_70374 = inst_70381;
var state_70413__$1 = (function (){var statearr_70434 = state_70413;
(statearr_70434[(14)] = inst_70386);

(statearr_70434[(7)] = inst_70374);

(statearr_70434[(8)] = inst_70373__$1);

return statearr_70434;
})();
var statearr_70435_70461 = state_70413__$1;
(statearr_70435_70461[(2)] = null);

(statearr_70435_70461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15364__auto___70447,out))
;
return ((function (switch__15250__auto__,c__15364__auto___70447,out){
return (function() {
var cljs$core$async$state_machine__15251__auto__ = null;
var cljs$core$async$state_machine__15251__auto____0 = (function (){
var statearr_70439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70439[(0)] = cljs$core$async$state_machine__15251__auto__);

(statearr_70439[(1)] = (1));

return statearr_70439;
});
var cljs$core$async$state_machine__15251__auto____1 = (function (state_70413){
while(true){
var ret_value__15252__auto__ = (function (){try{while(true){
var result__15253__auto__ = switch__15250__auto__.call(null,state_70413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__15253__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__15253__auto__;
}
break;
}
}catch (e70440){if((e70440 instanceof Object)){
var ex__15254__auto__ = e70440;
var statearr_70441_70462 = state_70413;
(statearr_70441_70462[(5)] = ex__15254__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__15252__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70463 = state_70413;
state_70413 = G__70463;
continue;
} else {
return ret_value__15252__auto__;
}
break;
}
});
cljs$core$async$state_machine__15251__auto__ = function(state_70413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15251__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15251__auto____1.call(this,state_70413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15251__auto____0;
cljs$core$async$state_machine__15251__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15251__auto____1;
return cljs$core$async$state_machine__15251__auto__;
})()
;})(switch__15250__auto__,c__15364__auto___70447,out))
})();
var state__15366__auto__ = (function (){var statearr_70442 = f__15365__auto__.call(null);
(statearr_70442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15364__auto___70447);

return statearr_70442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__15366__auto__);
});})(c__15364__auto___70447,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map