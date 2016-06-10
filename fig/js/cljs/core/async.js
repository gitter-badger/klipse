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
var args32461 = [];
var len__23690__auto___32467 = arguments.length;
var i__23691__auto___32468 = (0);
while(true){
if((i__23691__auto___32468 < len__23690__auto___32467)){
args32461.push((arguments[i__23691__auto___32468]));

var G__32469 = (i__23691__auto___32468 + (1));
i__23691__auto___32468 = G__32469;
continue;
} else {
}
break;
}

var G__32463 = args32461.length;
switch (G__32463) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32461.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32464 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32464 = (function (f,blockable,meta32465){
this.f = f;
this.blockable = blockable;
this.meta32465 = meta32465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32466,meta32465__$1){
var self__ = this;
var _32466__$1 = this;
return (new cljs.core.async.t_cljs$core$async32464(self__.f,self__.blockable,meta32465__$1));
});

cljs.core.async.t_cljs$core$async32464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32466){
var self__ = this;
var _32466__$1 = this;
return self__.meta32465;
});

cljs.core.async.t_cljs$core$async32464.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32464.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32464.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32464.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32465","meta32465",2139816426,null)], null);
});

cljs.core.async.t_cljs$core$async32464.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32464.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32464";

cljs.core.async.t_cljs$core$async32464.cljs$lang$ctorPrWriter = (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async32464");
});

cljs.core.async.__GT_t_cljs$core$async32464 = (function cljs$core$async$__GT_t_cljs$core$async32464(f__$1,blockable__$1,meta32465){
return (new cljs.core.async.t_cljs$core$async32464(f__$1,blockable__$1,meta32465));
});

}

return (new cljs.core.async.t_cljs$core$async32464(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args32473 = [];
var len__23690__auto___32476 = arguments.length;
var i__23691__auto___32477 = (0);
while(true){
if((i__23691__auto___32477 < len__23690__auto___32476)){
args32473.push((arguments[i__23691__auto___32477]));

var G__32478 = (i__23691__auto___32477 + (1));
i__23691__auto___32477 = G__32478;
continue;
} else {
}
break;
}

var G__32475 = args32473.length;
switch (G__32475) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32473.length)].join('')));

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
var args32480 = [];
var len__23690__auto___32483 = arguments.length;
var i__23691__auto___32484 = (0);
while(true){
if((i__23691__auto___32484 < len__23690__auto___32483)){
args32480.push((arguments[i__23691__auto___32484]));

var G__32485 = (i__23691__auto___32484 + (1));
i__23691__auto___32484 = G__32485;
continue;
} else {
}
break;
}

var G__32482 = args32480.length;
switch (G__32482) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32480.length)].join('')));

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
var args32487 = [];
var len__23690__auto___32490 = arguments.length;
var i__23691__auto___32491 = (0);
while(true){
if((i__23691__auto___32491 < len__23690__auto___32490)){
args32487.push((arguments[i__23691__auto___32491]));

var G__32492 = (i__23691__auto___32491 + (1));
i__23691__auto___32491 = G__32492;
continue;
} else {
}
break;
}

var G__32489 = args32487.length;
switch (G__32489) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32487.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32494 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32494);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32494,ret){
return (function (){
return fn1.call(null,val_32494);
});})(val_32494,ret))
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
var args32495 = [];
var len__23690__auto___32498 = arguments.length;
var i__23691__auto___32499 = (0);
while(true){
if((i__23691__auto___32499 < len__23690__auto___32498)){
args32495.push((arguments[i__23691__auto___32499]));

var G__32500 = (i__23691__auto___32499 + (1));
i__23691__auto___32499 = G__32500;
continue;
} else {
}
break;
}

var G__32497 = args32495.length;
switch (G__32497) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32495.length)].join('')));

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
var n__23530__auto___32502 = n;
var x_32503 = (0);
while(true){
if((x_32503 < n__23530__auto___32502)){
(a[x_32503] = (0));

var G__32504 = (x_32503 + (1));
x_32503 = G__32504;
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

var G__32505 = (i + (1));
i = G__32505;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32509 = (function (alt_flag,flag,meta32510){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32510 = meta32510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32511,meta32510__$1){
var self__ = this;
var _32511__$1 = this;
return (new cljs.core.async.t_cljs$core$async32509(self__.alt_flag,self__.flag,meta32510__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32511){
var self__ = this;
var _32511__$1 = this;
return self__.meta32510;
});})(flag))
;

cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32509.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32509.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32510","meta32510",1926202222,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32509";

cljs.core.async.t_cljs$core$async32509.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async32509");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32509 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32509(alt_flag__$1,flag__$1,meta32510){
return (new cljs.core.async.t_cljs$core$async32509(alt_flag__$1,flag__$1,meta32510));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32509(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32515 = (function (alt_handler,flag,cb,meta32516){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32516 = meta32516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32517,meta32516__$1){
var self__ = this;
var _32517__$1 = this;
return (new cljs.core.async.t_cljs$core$async32515(self__.alt_handler,self__.flag,self__.cb,meta32516__$1));
});

cljs.core.async.t_cljs$core$async32515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32517){
var self__ = this;
var _32517__$1 = this;
return self__.meta32516;
});

cljs.core.async.t_cljs$core$async32515.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32516","meta32516",1770801653,null)], null);
});

cljs.core.async.t_cljs$core$async32515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32515";

cljs.core.async.t_cljs$core$async32515.cljs$lang$ctorPrWriter = (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async32515");
});

cljs.core.async.__GT_t_cljs$core$async32515 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32515(alt_handler__$1,flag__$1,cb__$1,meta32516){
return (new cljs.core.async.t_cljs$core$async32515(alt_handler__$1,flag__$1,cb__$1,meta32516));
});

}

return (new cljs.core.async.t_cljs$core$async32515(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32518_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32518_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32519_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32519_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__22615__auto__ = wport;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32520 = (i + (1));
i = G__32520;
continue;
}
} else {
return null;
}
break;
}
})();
var or__22615__auto__ = ret;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__22603__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__22603__auto__;
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
var args__23697__auto__ = [];
var len__23690__auto___32526 = arguments.length;
var i__23691__auto___32527 = (0);
while(true){
if((i__23691__auto___32527 < len__23690__auto___32526)){
args__23697__auto__.push((arguments[i__23691__auto___32527]));

var G__32528 = (i__23691__auto___32527 + (1));
i__23691__auto___32527 = G__32528;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32523){
var map__32524 = p__32523;
var map__32524__$1 = ((((!((map__32524 == null)))?((((map__32524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32524):map__32524);
var opts = map__32524__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32521){
var G__32522 = cljs.core.first.call(null,seq32521);
var seq32521__$1 = cljs.core.next.call(null,seq32521);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32522,seq32521__$1);
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
var args32529 = [];
var len__23690__auto___32579 = arguments.length;
var i__23691__auto___32580 = (0);
while(true){
if((i__23691__auto___32580 < len__23690__auto___32579)){
args32529.push((arguments[i__23691__auto___32580]));

var G__32581 = (i__23691__auto___32580 + (1));
i__23691__auto___32580 = G__32581;
continue;
} else {
}
break;
}

var G__32531 = args32529.length;
switch (G__32531) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32529.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32416__auto___32583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___32583){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___32583){
return (function (state_32555){
var state_val_32556 = (state_32555[(1)]);
if((state_val_32556 === (7))){
var inst_32551 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32557_32584 = state_32555__$1;
(statearr_32557_32584[(2)] = inst_32551);

(statearr_32557_32584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (1))){
var state_32555__$1 = state_32555;
var statearr_32558_32585 = state_32555__$1;
(statearr_32558_32585[(2)] = null);

(statearr_32558_32585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (4))){
var inst_32534 = (state_32555[(7)]);
var inst_32534__$1 = (state_32555[(2)]);
var inst_32535 = (inst_32534__$1 == null);
var state_32555__$1 = (function (){var statearr_32559 = state_32555;
(statearr_32559[(7)] = inst_32534__$1);

return statearr_32559;
})();
if(cljs.core.truth_(inst_32535)){
var statearr_32560_32586 = state_32555__$1;
(statearr_32560_32586[(1)] = (5));

} else {
var statearr_32561_32587 = state_32555__$1;
(statearr_32561_32587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (13))){
var state_32555__$1 = state_32555;
var statearr_32562_32588 = state_32555__$1;
(statearr_32562_32588[(2)] = null);

(statearr_32562_32588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (6))){
var inst_32534 = (state_32555[(7)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32555__$1,(11),to,inst_32534);
} else {
if((state_val_32556 === (3))){
var inst_32553 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32555__$1,inst_32553);
} else {
if((state_val_32556 === (12))){
var state_32555__$1 = state_32555;
var statearr_32563_32589 = state_32555__$1;
(statearr_32563_32589[(2)] = null);

(statearr_32563_32589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (2))){
var state_32555__$1 = state_32555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32555__$1,(4),from);
} else {
if((state_val_32556 === (11))){
var inst_32544 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
if(cljs.core.truth_(inst_32544)){
var statearr_32564_32590 = state_32555__$1;
(statearr_32564_32590[(1)] = (12));

} else {
var statearr_32565_32591 = state_32555__$1;
(statearr_32565_32591[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (9))){
var state_32555__$1 = state_32555;
var statearr_32566_32592 = state_32555__$1;
(statearr_32566_32592[(2)] = null);

(statearr_32566_32592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (5))){
var state_32555__$1 = state_32555;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32567_32593 = state_32555__$1;
(statearr_32567_32593[(1)] = (8));

} else {
var statearr_32568_32594 = state_32555__$1;
(statearr_32568_32594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (14))){
var inst_32549 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32569_32595 = state_32555__$1;
(statearr_32569_32595[(2)] = inst_32549);

(statearr_32569_32595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (10))){
var inst_32541 = (state_32555[(2)]);
var state_32555__$1 = state_32555;
var statearr_32570_32596 = state_32555__$1;
(statearr_32570_32596[(2)] = inst_32541);

(statearr_32570_32596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32556 === (8))){
var inst_32538 = cljs.core.async.close_BANG_.call(null,to);
var state_32555__$1 = state_32555;
var statearr_32571_32597 = state_32555__$1;
(statearr_32571_32597[(2)] = inst_32538);

(statearr_32571_32597[(1)] = (10));


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
});})(c__32416__auto___32583))
;
return ((function (switch__32304__auto__,c__32416__auto___32583){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_32575 = [null,null,null,null,null,null,null,null];
(statearr_32575[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_32575[(1)] = (1));

return statearr_32575;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_32555){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_32555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e32576){if((e32576 instanceof Object)){
var ex__32308__auto__ = e32576;
var statearr_32577_32598 = state_32555;
(statearr_32577_32598[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32599 = state_32555;
state_32555 = G__32599;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_32555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_32555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___32583))
})();
var state__32418__auto__ = (function (){var statearr_32578 = f__32417__auto__.call(null);
(statearr_32578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___32583);

return statearr_32578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___32583))
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
return (function (p__32787){
var vec__32788 = p__32787;
var v = cljs.core.nth.call(null,vec__32788,(0),null);
var p = cljs.core.nth.call(null,vec__32788,(1),null);
var job = vec__32788;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32416__auto___32974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___32974,res,vec__32788,v,p,job,jobs,results){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___32974,res,vec__32788,v,p,job,jobs,results){
return (function (state_32795){
var state_val_32796 = (state_32795[(1)]);
if((state_val_32796 === (1))){
var state_32795__$1 = state_32795;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32795__$1,(2),res,v);
} else {
if((state_val_32796 === (2))){
var inst_32792 = (state_32795[(2)]);
var inst_32793 = cljs.core.async.close_BANG_.call(null,res);
var state_32795__$1 = (function (){var statearr_32797 = state_32795;
(statearr_32797[(7)] = inst_32792);

return statearr_32797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32795__$1,inst_32793);
} else {
return null;
}
}
});})(c__32416__auto___32974,res,vec__32788,v,p,job,jobs,results))
;
return ((function (switch__32304__auto__,c__32416__auto___32974,res,vec__32788,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0 = (function (){
var statearr_32801 = [null,null,null,null,null,null,null,null];
(statearr_32801[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__);

(statearr_32801[(1)] = (1));

return statearr_32801;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1 = (function (state_32795){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_32795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e32802){if((e32802 instanceof Object)){
var ex__32308__auto__ = e32802;
var statearr_32803_32975 = state_32795;
(statearr_32803_32975[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32976 = state_32795;
state_32795 = G__32976;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = function(state_32795){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1.call(this,state_32795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___32974,res,vec__32788,v,p,job,jobs,results))
})();
var state__32418__auto__ = (function (){var statearr_32804 = f__32417__auto__.call(null);
(statearr_32804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___32974);

return statearr_32804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___32974,res,vec__32788,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32805){
var vec__32806 = p__32805;
var v = cljs.core.nth.call(null,vec__32806,(0),null);
var p = cljs.core.nth.call(null,vec__32806,(1),null);
var job = vec__32806;
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
var n__23530__auto___32977 = n;
var __32978 = (0);
while(true){
if((__32978 < n__23530__auto___32977)){
var G__32809_32979 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32809_32979) {
case "compute":
var c__32416__auto___32981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32978,c__32416__auto___32981,G__32809_32979,n__23530__auto___32977,jobs,results,process,async){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (__32978,c__32416__auto___32981,G__32809_32979,n__23530__auto___32977,jobs,results,process,async){
return (function (state_32822){
var state_val_32823 = (state_32822[(1)]);
if((state_val_32823 === (1))){
var state_32822__$1 = state_32822;
var statearr_32824_32982 = state_32822__$1;
(statearr_32824_32982[(2)] = null);

(statearr_32824_32982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (2))){
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32822__$1,(4),jobs);
} else {
if((state_val_32823 === (3))){
var inst_32820 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32822__$1,inst_32820);
} else {
if((state_val_32823 === (4))){
var inst_32812 = (state_32822[(2)]);
var inst_32813 = process.call(null,inst_32812);
var state_32822__$1 = state_32822;
if(cljs.core.truth_(inst_32813)){
var statearr_32825_32983 = state_32822__$1;
(statearr_32825_32983[(1)] = (5));

} else {
var statearr_32826_32984 = state_32822__$1;
(statearr_32826_32984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (5))){
var state_32822__$1 = state_32822;
var statearr_32827_32985 = state_32822__$1;
(statearr_32827_32985[(2)] = null);

(statearr_32827_32985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (6))){
var state_32822__$1 = state_32822;
var statearr_32828_32986 = state_32822__$1;
(statearr_32828_32986[(2)] = null);

(statearr_32828_32986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (7))){
var inst_32818 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32829_32987 = state_32822__$1;
(statearr_32829_32987[(2)] = inst_32818);

(statearr_32829_32987[(1)] = (3));


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
});})(__32978,c__32416__auto___32981,G__32809_32979,n__23530__auto___32977,jobs,results,process,async))
;
return ((function (__32978,switch__32304__auto__,c__32416__auto___32981,G__32809_32979,n__23530__auto___32977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0 = (function (){
var statearr_32833 = [null,null,null,null,null,null,null];
(statearr_32833[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__);

(statearr_32833[(1)] = (1));

return statearr_32833;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1 = (function (state_32822){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_32822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e32834){if((e32834 instanceof Object)){
var ex__32308__auto__ = e32834;
var statearr_32835_32988 = state_32822;
(statearr_32835_32988[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32834;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32989 = state_32822;
state_32822 = G__32989;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = function(state_32822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1.call(this,state_32822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__;
})()
;})(__32978,switch__32304__auto__,c__32416__auto___32981,G__32809_32979,n__23530__auto___32977,jobs,results,process,async))
})();
var state__32418__auto__ = (function (){var statearr_32836 = f__32417__auto__.call(null);
(statearr_32836[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___32981);

return statearr_32836;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(__32978,c__32416__auto___32981,G__32809_32979,n__23530__auto___32977,jobs,results,process,async))
);


break;
case "async":
var c__32416__auto___32990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32978,c__32416__auto___32990,G__32809_32979,n__23530__auto___32977,jobs,results,process,async){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (__32978,c__32416__auto___32990,G__32809_32979,n__23530__auto___32977,jobs,results,process,async){
return (function (state_32849){
var state_val_32850 = (state_32849[(1)]);
if((state_val_32850 === (1))){
var state_32849__$1 = state_32849;
var statearr_32851_32991 = state_32849__$1;
(statearr_32851_32991[(2)] = null);

(statearr_32851_32991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (2))){
var state_32849__$1 = state_32849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32849__$1,(4),jobs);
} else {
if((state_val_32850 === (3))){
var inst_32847 = (state_32849[(2)]);
var state_32849__$1 = state_32849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32849__$1,inst_32847);
} else {
if((state_val_32850 === (4))){
var inst_32839 = (state_32849[(2)]);
var inst_32840 = async.call(null,inst_32839);
var state_32849__$1 = state_32849;
if(cljs.core.truth_(inst_32840)){
var statearr_32852_32992 = state_32849__$1;
(statearr_32852_32992[(1)] = (5));

} else {
var statearr_32853_32993 = state_32849__$1;
(statearr_32853_32993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (5))){
var state_32849__$1 = state_32849;
var statearr_32854_32994 = state_32849__$1;
(statearr_32854_32994[(2)] = null);

(statearr_32854_32994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (6))){
var state_32849__$1 = state_32849;
var statearr_32855_32995 = state_32849__$1;
(statearr_32855_32995[(2)] = null);

(statearr_32855_32995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32850 === (7))){
var inst_32845 = (state_32849[(2)]);
var state_32849__$1 = state_32849;
var statearr_32856_32996 = state_32849__$1;
(statearr_32856_32996[(2)] = inst_32845);

(statearr_32856_32996[(1)] = (3));


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
});})(__32978,c__32416__auto___32990,G__32809_32979,n__23530__auto___32977,jobs,results,process,async))
;
return ((function (__32978,switch__32304__auto__,c__32416__auto___32990,G__32809_32979,n__23530__auto___32977,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0 = (function (){
var statearr_32860 = [null,null,null,null,null,null,null];
(statearr_32860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__);

(statearr_32860[(1)] = (1));

return statearr_32860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1 = (function (state_32849){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_32849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e32861){if((e32861 instanceof Object)){
var ex__32308__auto__ = e32861;
var statearr_32862_32997 = state_32849;
(statearr_32862_32997[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32998 = state_32849;
state_32849 = G__32998;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = function(state_32849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1.call(this,state_32849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__;
})()
;})(__32978,switch__32304__auto__,c__32416__auto___32990,G__32809_32979,n__23530__auto___32977,jobs,results,process,async))
})();
var state__32418__auto__ = (function (){var statearr_32863 = f__32417__auto__.call(null);
(statearr_32863[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___32990);

return statearr_32863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(__32978,c__32416__auto___32990,G__32809_32979,n__23530__auto___32977,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32999 = (__32978 + (1));
__32978 = G__32999;
continue;
} else {
}
break;
}

var c__32416__auto___33000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___33000,jobs,results,process,async){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___33000,jobs,results,process,async){
return (function (state_32885){
var state_val_32886 = (state_32885[(1)]);
if((state_val_32886 === (1))){
var state_32885__$1 = state_32885;
var statearr_32887_33001 = state_32885__$1;
(statearr_32887_33001[(2)] = null);

(statearr_32887_33001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (2))){
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32885__$1,(4),from);
} else {
if((state_val_32886 === (3))){
var inst_32883 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32885__$1,inst_32883);
} else {
if((state_val_32886 === (4))){
var inst_32866 = (state_32885[(7)]);
var inst_32866__$1 = (state_32885[(2)]);
var inst_32867 = (inst_32866__$1 == null);
var state_32885__$1 = (function (){var statearr_32888 = state_32885;
(statearr_32888[(7)] = inst_32866__$1);

return statearr_32888;
})();
if(cljs.core.truth_(inst_32867)){
var statearr_32889_33002 = state_32885__$1;
(statearr_32889_33002[(1)] = (5));

} else {
var statearr_32890_33003 = state_32885__$1;
(statearr_32890_33003[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (5))){
var inst_32869 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32885__$1 = state_32885;
var statearr_32891_33004 = state_32885__$1;
(statearr_32891_33004[(2)] = inst_32869);

(statearr_32891_33004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (6))){
var inst_32866 = (state_32885[(7)]);
var inst_32871 = (state_32885[(8)]);
var inst_32871__$1 = cljs.core.async.chan.call(null,(1));
var inst_32872 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32873 = [inst_32866,inst_32871__$1];
var inst_32874 = (new cljs.core.PersistentVector(null,2,(5),inst_32872,inst_32873,null));
var state_32885__$1 = (function (){var statearr_32892 = state_32885;
(statearr_32892[(8)] = inst_32871__$1);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32885__$1,(8),jobs,inst_32874);
} else {
if((state_val_32886 === (7))){
var inst_32881 = (state_32885[(2)]);
var state_32885__$1 = state_32885;
var statearr_32893_33005 = state_32885__$1;
(statearr_32893_33005[(2)] = inst_32881);

(statearr_32893_33005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32886 === (8))){
var inst_32871 = (state_32885[(8)]);
var inst_32876 = (state_32885[(2)]);
var state_32885__$1 = (function (){var statearr_32894 = state_32885;
(statearr_32894[(9)] = inst_32876);

return statearr_32894;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32885__$1,(9),results,inst_32871);
} else {
if((state_val_32886 === (9))){
var inst_32878 = (state_32885[(2)]);
var state_32885__$1 = (function (){var statearr_32895 = state_32885;
(statearr_32895[(10)] = inst_32878);

return statearr_32895;
})();
var statearr_32896_33006 = state_32885__$1;
(statearr_32896_33006[(2)] = null);

(statearr_32896_33006[(1)] = (2));


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
});})(c__32416__auto___33000,jobs,results,process,async))
;
return ((function (switch__32304__auto__,c__32416__auto___33000,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0 = (function (){
var statearr_32900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__);

(statearr_32900[(1)] = (1));

return statearr_32900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1 = (function (state_32885){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_32885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e32901){if((e32901 instanceof Object)){
var ex__32308__auto__ = e32901;
var statearr_32902_33007 = state_32885;
(statearr_32902_33007[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33008 = state_32885;
state_32885 = G__33008;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = function(state_32885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1.call(this,state_32885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___33000,jobs,results,process,async))
})();
var state__32418__auto__ = (function (){var statearr_32903 = f__32417__auto__.call(null);
(statearr_32903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___33000);

return statearr_32903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___33000,jobs,results,process,async))
);


var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__,jobs,results,process,async){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__,jobs,results,process,async){
return (function (state_32941){
var state_val_32942 = (state_32941[(1)]);
if((state_val_32942 === (7))){
var inst_32937 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32943_33009 = state_32941__$1;
(statearr_32943_33009[(2)] = inst_32937);

(statearr_32943_33009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (20))){
var state_32941__$1 = state_32941;
var statearr_32944_33010 = state_32941__$1;
(statearr_32944_33010[(2)] = null);

(statearr_32944_33010[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (1))){
var state_32941__$1 = state_32941;
var statearr_32945_33011 = state_32941__$1;
(statearr_32945_33011[(2)] = null);

(statearr_32945_33011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (4))){
var inst_32906 = (state_32941[(7)]);
var inst_32906__$1 = (state_32941[(2)]);
var inst_32907 = (inst_32906__$1 == null);
var state_32941__$1 = (function (){var statearr_32946 = state_32941;
(statearr_32946[(7)] = inst_32906__$1);

return statearr_32946;
})();
if(cljs.core.truth_(inst_32907)){
var statearr_32947_33012 = state_32941__$1;
(statearr_32947_33012[(1)] = (5));

} else {
var statearr_32948_33013 = state_32941__$1;
(statearr_32948_33013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (15))){
var inst_32919 = (state_32941[(8)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32941__$1,(18),to,inst_32919);
} else {
if((state_val_32942 === (21))){
var inst_32932 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32949_33014 = state_32941__$1;
(statearr_32949_33014[(2)] = inst_32932);

(statearr_32949_33014[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (13))){
var inst_32934 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32950 = state_32941;
(statearr_32950[(9)] = inst_32934);

return statearr_32950;
})();
var statearr_32951_33015 = state_32941__$1;
(statearr_32951_33015[(2)] = null);

(statearr_32951_33015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (6))){
var inst_32906 = (state_32941[(7)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32941__$1,(11),inst_32906);
} else {
if((state_val_32942 === (17))){
var inst_32927 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
if(cljs.core.truth_(inst_32927)){
var statearr_32952_33016 = state_32941__$1;
(statearr_32952_33016[(1)] = (19));

} else {
var statearr_32953_33017 = state_32941__$1;
(statearr_32953_33017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (3))){
var inst_32939 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32941__$1,inst_32939);
} else {
if((state_val_32942 === (12))){
var inst_32916 = (state_32941[(10)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32941__$1,(14),inst_32916);
} else {
if((state_val_32942 === (2))){
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32941__$1,(4),results);
} else {
if((state_val_32942 === (19))){
var state_32941__$1 = state_32941;
var statearr_32954_33018 = state_32941__$1;
(statearr_32954_33018[(2)] = null);

(statearr_32954_33018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (11))){
var inst_32916 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32955 = state_32941;
(statearr_32955[(10)] = inst_32916);

return statearr_32955;
})();
var statearr_32956_33019 = state_32941__$1;
(statearr_32956_33019[(2)] = null);

(statearr_32956_33019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (9))){
var state_32941__$1 = state_32941;
var statearr_32957_33020 = state_32941__$1;
(statearr_32957_33020[(2)] = null);

(statearr_32957_33020[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (5))){
var state_32941__$1 = state_32941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32958_33021 = state_32941__$1;
(statearr_32958_33021[(1)] = (8));

} else {
var statearr_32959_33022 = state_32941__$1;
(statearr_32959_33022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (14))){
var inst_32921 = (state_32941[(11)]);
var inst_32919 = (state_32941[(8)]);
var inst_32919__$1 = (state_32941[(2)]);
var inst_32920 = (inst_32919__$1 == null);
var inst_32921__$1 = cljs.core.not.call(null,inst_32920);
var state_32941__$1 = (function (){var statearr_32960 = state_32941;
(statearr_32960[(11)] = inst_32921__$1);

(statearr_32960[(8)] = inst_32919__$1);

return statearr_32960;
})();
if(inst_32921__$1){
var statearr_32961_33023 = state_32941__$1;
(statearr_32961_33023[(1)] = (15));

} else {
var statearr_32962_33024 = state_32941__$1;
(statearr_32962_33024[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (16))){
var inst_32921 = (state_32941[(11)]);
var state_32941__$1 = state_32941;
var statearr_32963_33025 = state_32941__$1;
(statearr_32963_33025[(2)] = inst_32921);

(statearr_32963_33025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (10))){
var inst_32913 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32964_33026 = state_32941__$1;
(statearr_32964_33026[(2)] = inst_32913);

(statearr_32964_33026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (18))){
var inst_32924 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32965_33027 = state_32941__$1;
(statearr_32965_33027[(2)] = inst_32924);

(statearr_32965_33027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (8))){
var inst_32910 = cljs.core.async.close_BANG_.call(null,to);
var state_32941__$1 = state_32941;
var statearr_32966_33028 = state_32941__$1;
(statearr_32966_33028[(2)] = inst_32910);

(statearr_32966_33028[(1)] = (10));


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
});})(c__32416__auto__,jobs,results,process,async))
;
return ((function (switch__32304__auto__,c__32416__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0 = (function (){
var statearr_32970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32970[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__);

(statearr_32970[(1)] = (1));

return statearr_32970;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1 = (function (state_32941){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_32941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e32971){if((e32971 instanceof Object)){
var ex__32308__auto__ = e32971;
var statearr_32972_33029 = state_32941;
(statearr_32972_33029[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33030 = state_32941;
state_32941 = G__33030;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__ = function(state_32941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1.call(this,state_32941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32305__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,jobs,results,process,async))
})();
var state__32418__auto__ = (function (){var statearr_32973 = f__32417__auto__.call(null);
(statearr_32973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_32973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__,jobs,results,process,async))
);

return c__32416__auto__;
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
var args33031 = [];
var len__23690__auto___33034 = arguments.length;
var i__23691__auto___33035 = (0);
while(true){
if((i__23691__auto___33035 < len__23690__auto___33034)){
args33031.push((arguments[i__23691__auto___33035]));

var G__33036 = (i__23691__auto___33035 + (1));
i__23691__auto___33035 = G__33036;
continue;
} else {
}
break;
}

var G__33033 = args33031.length;
switch (G__33033) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33031.length)].join('')));

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
var args33038 = [];
var len__23690__auto___33041 = arguments.length;
var i__23691__auto___33042 = (0);
while(true){
if((i__23691__auto___33042 < len__23690__auto___33041)){
args33038.push((arguments[i__23691__auto___33042]));

var G__33043 = (i__23691__auto___33042 + (1));
i__23691__auto___33042 = G__33043;
continue;
} else {
}
break;
}

var G__33040 = args33038.length;
switch (G__33040) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33038.length)].join('')));

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
var args33045 = [];
var len__23690__auto___33098 = arguments.length;
var i__23691__auto___33099 = (0);
while(true){
if((i__23691__auto___33099 < len__23690__auto___33098)){
args33045.push((arguments[i__23691__auto___33099]));

var G__33100 = (i__23691__auto___33099 + (1));
i__23691__auto___33099 = G__33100;
continue;
} else {
}
break;
}

var G__33047 = args33045.length;
switch (G__33047) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33045.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32416__auto___33102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___33102,tc,fc){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___33102,tc,fc){
return (function (state_33073){
var state_val_33074 = (state_33073[(1)]);
if((state_val_33074 === (7))){
var inst_33069 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33075_33103 = state_33073__$1;
(statearr_33075_33103[(2)] = inst_33069);

(statearr_33075_33103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (1))){
var state_33073__$1 = state_33073;
var statearr_33076_33104 = state_33073__$1;
(statearr_33076_33104[(2)] = null);

(statearr_33076_33104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (4))){
var inst_33050 = (state_33073[(7)]);
var inst_33050__$1 = (state_33073[(2)]);
var inst_33051 = (inst_33050__$1 == null);
var state_33073__$1 = (function (){var statearr_33077 = state_33073;
(statearr_33077[(7)] = inst_33050__$1);

return statearr_33077;
})();
if(cljs.core.truth_(inst_33051)){
var statearr_33078_33105 = state_33073__$1;
(statearr_33078_33105[(1)] = (5));

} else {
var statearr_33079_33106 = state_33073__$1;
(statearr_33079_33106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (13))){
var state_33073__$1 = state_33073;
var statearr_33080_33107 = state_33073__$1;
(statearr_33080_33107[(2)] = null);

(statearr_33080_33107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (6))){
var inst_33050 = (state_33073[(7)]);
var inst_33056 = p.call(null,inst_33050);
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33056)){
var statearr_33081_33108 = state_33073__$1;
(statearr_33081_33108[(1)] = (9));

} else {
var statearr_33082_33109 = state_33073__$1;
(statearr_33082_33109[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (3))){
var inst_33071 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33073__$1,inst_33071);
} else {
if((state_val_33074 === (12))){
var state_33073__$1 = state_33073;
var statearr_33083_33110 = state_33073__$1;
(statearr_33083_33110[(2)] = null);

(statearr_33083_33110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (2))){
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33073__$1,(4),ch);
} else {
if((state_val_33074 === (11))){
var inst_33050 = (state_33073[(7)]);
var inst_33060 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33073__$1,(8),inst_33060,inst_33050);
} else {
if((state_val_33074 === (9))){
var state_33073__$1 = state_33073;
var statearr_33084_33111 = state_33073__$1;
(statearr_33084_33111[(2)] = tc);

(statearr_33084_33111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (5))){
var inst_33053 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33054 = cljs.core.async.close_BANG_.call(null,fc);
var state_33073__$1 = (function (){var statearr_33085 = state_33073;
(statearr_33085[(8)] = inst_33053);

return statearr_33085;
})();
var statearr_33086_33112 = state_33073__$1;
(statearr_33086_33112[(2)] = inst_33054);

(statearr_33086_33112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (14))){
var inst_33067 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33087_33113 = state_33073__$1;
(statearr_33087_33113[(2)] = inst_33067);

(statearr_33087_33113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (10))){
var state_33073__$1 = state_33073;
var statearr_33088_33114 = state_33073__$1;
(statearr_33088_33114[(2)] = fc);

(statearr_33088_33114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (8))){
var inst_33062 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
if(cljs.core.truth_(inst_33062)){
var statearr_33089_33115 = state_33073__$1;
(statearr_33089_33115[(1)] = (12));

} else {
var statearr_33090_33116 = state_33073__$1;
(statearr_33090_33116[(1)] = (13));

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
});})(c__32416__auto___33102,tc,fc))
;
return ((function (switch__32304__auto__,c__32416__auto___33102,tc,fc){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_33094 = [null,null,null,null,null,null,null,null,null];
(statearr_33094[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_33094[(1)] = (1));

return statearr_33094;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_33073){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_33073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e33095){if((e33095 instanceof Object)){
var ex__32308__auto__ = e33095;
var statearr_33096_33117 = state_33073;
(statearr_33096_33117[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33118 = state_33073;
state_33073 = G__33118;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_33073){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_33073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___33102,tc,fc))
})();
var state__32418__auto__ = (function (){var statearr_33097 = f__32417__auto__.call(null);
(statearr_33097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___33102);

return statearr_33097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___33102,tc,fc))
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
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__){
return (function (state_33182){
var state_val_33183 = (state_33182[(1)]);
if((state_val_33183 === (7))){
var inst_33178 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33184_33205 = state_33182__$1;
(statearr_33184_33205[(2)] = inst_33178);

(statearr_33184_33205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (1))){
var inst_33162 = init;
var state_33182__$1 = (function (){var statearr_33185 = state_33182;
(statearr_33185[(7)] = inst_33162);

return statearr_33185;
})();
var statearr_33186_33206 = state_33182__$1;
(statearr_33186_33206[(2)] = null);

(statearr_33186_33206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (4))){
var inst_33165 = (state_33182[(8)]);
var inst_33165__$1 = (state_33182[(2)]);
var inst_33166 = (inst_33165__$1 == null);
var state_33182__$1 = (function (){var statearr_33187 = state_33182;
(statearr_33187[(8)] = inst_33165__$1);

return statearr_33187;
})();
if(cljs.core.truth_(inst_33166)){
var statearr_33188_33207 = state_33182__$1;
(statearr_33188_33207[(1)] = (5));

} else {
var statearr_33189_33208 = state_33182__$1;
(statearr_33189_33208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (6))){
var inst_33165 = (state_33182[(8)]);
var inst_33169 = (state_33182[(9)]);
var inst_33162 = (state_33182[(7)]);
var inst_33169__$1 = f.call(null,inst_33162,inst_33165);
var inst_33170 = cljs.core.reduced_QMARK_.call(null,inst_33169__$1);
var state_33182__$1 = (function (){var statearr_33190 = state_33182;
(statearr_33190[(9)] = inst_33169__$1);

return statearr_33190;
})();
if(inst_33170){
var statearr_33191_33209 = state_33182__$1;
(statearr_33191_33209[(1)] = (8));

} else {
var statearr_33192_33210 = state_33182__$1;
(statearr_33192_33210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (3))){
var inst_33180 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33182__$1,inst_33180);
} else {
if((state_val_33183 === (2))){
var state_33182__$1 = state_33182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33182__$1,(4),ch);
} else {
if((state_val_33183 === (9))){
var inst_33169 = (state_33182[(9)]);
var inst_33162 = inst_33169;
var state_33182__$1 = (function (){var statearr_33193 = state_33182;
(statearr_33193[(7)] = inst_33162);

return statearr_33193;
})();
var statearr_33194_33211 = state_33182__$1;
(statearr_33194_33211[(2)] = null);

(statearr_33194_33211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (5))){
var inst_33162 = (state_33182[(7)]);
var state_33182__$1 = state_33182;
var statearr_33195_33212 = state_33182__$1;
(statearr_33195_33212[(2)] = inst_33162);

(statearr_33195_33212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (10))){
var inst_33176 = (state_33182[(2)]);
var state_33182__$1 = state_33182;
var statearr_33196_33213 = state_33182__$1;
(statearr_33196_33213[(2)] = inst_33176);

(statearr_33196_33213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33183 === (8))){
var inst_33169 = (state_33182[(9)]);
var inst_33172 = cljs.core.deref.call(null,inst_33169);
var state_33182__$1 = state_33182;
var statearr_33197_33214 = state_33182__$1;
(statearr_33197_33214[(2)] = inst_33172);

(statearr_33197_33214[(1)] = (10));


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
});})(c__32416__auto__))
;
return ((function (switch__32304__auto__,c__32416__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32305__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32305__auto____0 = (function (){
var statearr_33201 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33201[(0)] = cljs$core$async$reduce_$_state_machine__32305__auto__);

(statearr_33201[(1)] = (1));

return statearr_33201;
});
var cljs$core$async$reduce_$_state_machine__32305__auto____1 = (function (state_33182){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_33182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e33202){if((e33202 instanceof Object)){
var ex__32308__auto__ = e33202;
var statearr_33203_33215 = state_33182;
(statearr_33203_33215[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33216 = state_33182;
state_33182 = G__33216;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32305__auto__ = function(state_33182){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32305__auto____1.call(this,state_33182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32305__auto____0;
cljs$core$async$reduce_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32305__auto____1;
return cljs$core$async$reduce_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__))
})();
var state__32418__auto__ = (function (){var statearr_33204 = f__32417__auto__.call(null);
(statearr_33204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_33204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__))
);

return c__32416__auto__;
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
var args33217 = [];
var len__23690__auto___33269 = arguments.length;
var i__23691__auto___33270 = (0);
while(true){
if((i__23691__auto___33270 < len__23690__auto___33269)){
args33217.push((arguments[i__23691__auto___33270]));

var G__33271 = (i__23691__auto___33270 + (1));
i__23691__auto___33270 = G__33271;
continue;
} else {
}
break;
}

var G__33219 = args33217.length;
switch (G__33219) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33217.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__){
return (function (state_33244){
var state_val_33245 = (state_33244[(1)]);
if((state_val_33245 === (7))){
var inst_33226 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
var statearr_33246_33273 = state_33244__$1;
(statearr_33246_33273[(2)] = inst_33226);

(statearr_33246_33273[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (1))){
var inst_33220 = cljs.core.seq.call(null,coll);
var inst_33221 = inst_33220;
var state_33244__$1 = (function (){var statearr_33247 = state_33244;
(statearr_33247[(7)] = inst_33221);

return statearr_33247;
})();
var statearr_33248_33274 = state_33244__$1;
(statearr_33248_33274[(2)] = null);

(statearr_33248_33274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (4))){
var inst_33221 = (state_33244[(7)]);
var inst_33224 = cljs.core.first.call(null,inst_33221);
var state_33244__$1 = state_33244;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33244__$1,(7),ch,inst_33224);
} else {
if((state_val_33245 === (13))){
var inst_33238 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
var statearr_33249_33275 = state_33244__$1;
(statearr_33249_33275[(2)] = inst_33238);

(statearr_33249_33275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (6))){
var inst_33229 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
if(cljs.core.truth_(inst_33229)){
var statearr_33250_33276 = state_33244__$1;
(statearr_33250_33276[(1)] = (8));

} else {
var statearr_33251_33277 = state_33244__$1;
(statearr_33251_33277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (3))){
var inst_33242 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33244__$1,inst_33242);
} else {
if((state_val_33245 === (12))){
var state_33244__$1 = state_33244;
var statearr_33252_33278 = state_33244__$1;
(statearr_33252_33278[(2)] = null);

(statearr_33252_33278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (2))){
var inst_33221 = (state_33244[(7)]);
var state_33244__$1 = state_33244;
if(cljs.core.truth_(inst_33221)){
var statearr_33253_33279 = state_33244__$1;
(statearr_33253_33279[(1)] = (4));

} else {
var statearr_33254_33280 = state_33244__$1;
(statearr_33254_33280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (11))){
var inst_33235 = cljs.core.async.close_BANG_.call(null,ch);
var state_33244__$1 = state_33244;
var statearr_33255_33281 = state_33244__$1;
(statearr_33255_33281[(2)] = inst_33235);

(statearr_33255_33281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (9))){
var state_33244__$1 = state_33244;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33256_33282 = state_33244__$1;
(statearr_33256_33282[(1)] = (11));

} else {
var statearr_33257_33283 = state_33244__$1;
(statearr_33257_33283[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (5))){
var inst_33221 = (state_33244[(7)]);
var state_33244__$1 = state_33244;
var statearr_33258_33284 = state_33244__$1;
(statearr_33258_33284[(2)] = inst_33221);

(statearr_33258_33284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (10))){
var inst_33240 = (state_33244[(2)]);
var state_33244__$1 = state_33244;
var statearr_33259_33285 = state_33244__$1;
(statearr_33259_33285[(2)] = inst_33240);

(statearr_33259_33285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33245 === (8))){
var inst_33221 = (state_33244[(7)]);
var inst_33231 = cljs.core.next.call(null,inst_33221);
var inst_33221__$1 = inst_33231;
var state_33244__$1 = (function (){var statearr_33260 = state_33244;
(statearr_33260[(7)] = inst_33221__$1);

return statearr_33260;
})();
var statearr_33261_33286 = state_33244__$1;
(statearr_33261_33286[(2)] = null);

(statearr_33261_33286[(1)] = (2));


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
});})(c__32416__auto__))
;
return ((function (switch__32304__auto__,c__32416__auto__){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_33265 = [null,null,null,null,null,null,null,null];
(statearr_33265[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_33265[(1)] = (1));

return statearr_33265;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_33244){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_33244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e33266){if((e33266 instanceof Object)){
var ex__32308__auto__ = e33266;
var statearr_33267_33287 = state_33244;
(statearr_33267_33287[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33288 = state_33244;
state_33244 = G__33288;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_33244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_33244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__))
})();
var state__32418__auto__ = (function (){var statearr_33268 = f__32417__auto__.call(null);
(statearr_33268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_33268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__))
);

return c__32416__auto__;
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
var x__23278__auto__ = (((_ == null))?null:_);
var m__23279__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,_);
} else {
var m__23279__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,_);
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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__23279__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m,ch);
} else {
var m__23279__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m,ch);
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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m);
} else {
var m__23279__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33514 = (function (mult,ch,cs,meta33515){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33515 = meta33515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33516,meta33515__$1){
var self__ = this;
var _33516__$1 = this;
return (new cljs.core.async.t_cljs$core$async33514(self__.mult,self__.ch,self__.cs,meta33515__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33516){
var self__ = this;
var _33516__$1 = this;
return self__.meta33515;
});})(cs))
;

cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33514.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33514.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33515","meta33515",477601527,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33514";

cljs.core.async.t_cljs$core$async33514.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async33514");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33514 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33514(mult__$1,ch__$1,cs__$1,meta33515){
return (new cljs.core.async.t_cljs$core$async33514(mult__$1,ch__$1,cs__$1,meta33515));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33514(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32416__auto___33739 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___33739,cs,m,dchan,dctr,done){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___33739,cs,m,dchan,dctr,done){
return (function (state_33651){
var state_val_33652 = (state_33651[(1)]);
if((state_val_33652 === (7))){
var inst_33647 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33653_33740 = state_33651__$1;
(statearr_33653_33740[(2)] = inst_33647);

(statearr_33653_33740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (20))){
var inst_33550 = (state_33651[(7)]);
var inst_33562 = cljs.core.first.call(null,inst_33550);
var inst_33563 = cljs.core.nth.call(null,inst_33562,(0),null);
var inst_33564 = cljs.core.nth.call(null,inst_33562,(1),null);
var state_33651__$1 = (function (){var statearr_33654 = state_33651;
(statearr_33654[(8)] = inst_33563);

return statearr_33654;
})();
if(cljs.core.truth_(inst_33564)){
var statearr_33655_33741 = state_33651__$1;
(statearr_33655_33741[(1)] = (22));

} else {
var statearr_33656_33742 = state_33651__$1;
(statearr_33656_33742[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (27))){
var inst_33519 = (state_33651[(9)]);
var inst_33594 = (state_33651[(10)]);
var inst_33592 = (state_33651[(11)]);
var inst_33599 = (state_33651[(12)]);
var inst_33599__$1 = cljs.core._nth.call(null,inst_33592,inst_33594);
var inst_33600 = cljs.core.async.put_BANG_.call(null,inst_33599__$1,inst_33519,done);
var state_33651__$1 = (function (){var statearr_33657 = state_33651;
(statearr_33657[(12)] = inst_33599__$1);

return statearr_33657;
})();
if(cljs.core.truth_(inst_33600)){
var statearr_33658_33743 = state_33651__$1;
(statearr_33658_33743[(1)] = (30));

} else {
var statearr_33659_33744 = state_33651__$1;
(statearr_33659_33744[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (1))){
var state_33651__$1 = state_33651;
var statearr_33660_33745 = state_33651__$1;
(statearr_33660_33745[(2)] = null);

(statearr_33660_33745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (24))){
var inst_33550 = (state_33651[(7)]);
var inst_33569 = (state_33651[(2)]);
var inst_33570 = cljs.core.next.call(null,inst_33550);
var inst_33528 = inst_33570;
var inst_33529 = null;
var inst_33530 = (0);
var inst_33531 = (0);
var state_33651__$1 = (function (){var statearr_33661 = state_33651;
(statearr_33661[(13)] = inst_33531);

(statearr_33661[(14)] = inst_33569);

(statearr_33661[(15)] = inst_33528);

(statearr_33661[(16)] = inst_33529);

(statearr_33661[(17)] = inst_33530);

return statearr_33661;
})();
var statearr_33662_33746 = state_33651__$1;
(statearr_33662_33746[(2)] = null);

(statearr_33662_33746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (39))){
var state_33651__$1 = state_33651;
var statearr_33666_33747 = state_33651__$1;
(statearr_33666_33747[(2)] = null);

(statearr_33666_33747[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (4))){
var inst_33519 = (state_33651[(9)]);
var inst_33519__$1 = (state_33651[(2)]);
var inst_33520 = (inst_33519__$1 == null);
var state_33651__$1 = (function (){var statearr_33667 = state_33651;
(statearr_33667[(9)] = inst_33519__$1);

return statearr_33667;
})();
if(cljs.core.truth_(inst_33520)){
var statearr_33668_33748 = state_33651__$1;
(statearr_33668_33748[(1)] = (5));

} else {
var statearr_33669_33749 = state_33651__$1;
(statearr_33669_33749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (15))){
var inst_33531 = (state_33651[(13)]);
var inst_33528 = (state_33651[(15)]);
var inst_33529 = (state_33651[(16)]);
var inst_33530 = (state_33651[(17)]);
var inst_33546 = (state_33651[(2)]);
var inst_33547 = (inst_33531 + (1));
var tmp33663 = inst_33528;
var tmp33664 = inst_33529;
var tmp33665 = inst_33530;
var inst_33528__$1 = tmp33663;
var inst_33529__$1 = tmp33664;
var inst_33530__$1 = tmp33665;
var inst_33531__$1 = inst_33547;
var state_33651__$1 = (function (){var statearr_33670 = state_33651;
(statearr_33670[(13)] = inst_33531__$1);

(statearr_33670[(15)] = inst_33528__$1);

(statearr_33670[(16)] = inst_33529__$1);

(statearr_33670[(18)] = inst_33546);

(statearr_33670[(17)] = inst_33530__$1);

return statearr_33670;
})();
var statearr_33671_33750 = state_33651__$1;
(statearr_33671_33750[(2)] = null);

(statearr_33671_33750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (21))){
var inst_33573 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33675_33751 = state_33651__$1;
(statearr_33675_33751[(2)] = inst_33573);

(statearr_33675_33751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (31))){
var inst_33599 = (state_33651[(12)]);
var inst_33603 = done.call(null,null);
var inst_33604 = cljs.core.async.untap_STAR_.call(null,m,inst_33599);
var state_33651__$1 = (function (){var statearr_33676 = state_33651;
(statearr_33676[(19)] = inst_33603);

return statearr_33676;
})();
var statearr_33677_33752 = state_33651__$1;
(statearr_33677_33752[(2)] = inst_33604);

(statearr_33677_33752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (32))){
var inst_33593 = (state_33651[(20)]);
var inst_33594 = (state_33651[(10)]);
var inst_33591 = (state_33651[(21)]);
var inst_33592 = (state_33651[(11)]);
var inst_33606 = (state_33651[(2)]);
var inst_33607 = (inst_33594 + (1));
var tmp33672 = inst_33593;
var tmp33673 = inst_33591;
var tmp33674 = inst_33592;
var inst_33591__$1 = tmp33673;
var inst_33592__$1 = tmp33674;
var inst_33593__$1 = tmp33672;
var inst_33594__$1 = inst_33607;
var state_33651__$1 = (function (){var statearr_33678 = state_33651;
(statearr_33678[(20)] = inst_33593__$1);

(statearr_33678[(10)] = inst_33594__$1);

(statearr_33678[(21)] = inst_33591__$1);

(statearr_33678[(11)] = inst_33592__$1);

(statearr_33678[(22)] = inst_33606);

return statearr_33678;
})();
var statearr_33679_33753 = state_33651__$1;
(statearr_33679_33753[(2)] = null);

(statearr_33679_33753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (40))){
var inst_33619 = (state_33651[(23)]);
var inst_33623 = done.call(null,null);
var inst_33624 = cljs.core.async.untap_STAR_.call(null,m,inst_33619);
var state_33651__$1 = (function (){var statearr_33680 = state_33651;
(statearr_33680[(24)] = inst_33623);

return statearr_33680;
})();
var statearr_33681_33754 = state_33651__$1;
(statearr_33681_33754[(2)] = inst_33624);

(statearr_33681_33754[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (33))){
var inst_33610 = (state_33651[(25)]);
var inst_33612 = cljs.core.chunked_seq_QMARK_.call(null,inst_33610);
var state_33651__$1 = state_33651;
if(inst_33612){
var statearr_33682_33755 = state_33651__$1;
(statearr_33682_33755[(1)] = (36));

} else {
var statearr_33683_33756 = state_33651__$1;
(statearr_33683_33756[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (13))){
var inst_33540 = (state_33651[(26)]);
var inst_33543 = cljs.core.async.close_BANG_.call(null,inst_33540);
var state_33651__$1 = state_33651;
var statearr_33684_33757 = state_33651__$1;
(statearr_33684_33757[(2)] = inst_33543);

(statearr_33684_33757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (22))){
var inst_33563 = (state_33651[(8)]);
var inst_33566 = cljs.core.async.close_BANG_.call(null,inst_33563);
var state_33651__$1 = state_33651;
var statearr_33685_33758 = state_33651__$1;
(statearr_33685_33758[(2)] = inst_33566);

(statearr_33685_33758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (36))){
var inst_33610 = (state_33651[(25)]);
var inst_33614 = cljs.core.chunk_first.call(null,inst_33610);
var inst_33615 = cljs.core.chunk_rest.call(null,inst_33610);
var inst_33616 = cljs.core.count.call(null,inst_33614);
var inst_33591 = inst_33615;
var inst_33592 = inst_33614;
var inst_33593 = inst_33616;
var inst_33594 = (0);
var state_33651__$1 = (function (){var statearr_33686 = state_33651;
(statearr_33686[(20)] = inst_33593);

(statearr_33686[(10)] = inst_33594);

(statearr_33686[(21)] = inst_33591);

(statearr_33686[(11)] = inst_33592);

return statearr_33686;
})();
var statearr_33687_33759 = state_33651__$1;
(statearr_33687_33759[(2)] = null);

(statearr_33687_33759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (41))){
var inst_33610 = (state_33651[(25)]);
var inst_33626 = (state_33651[(2)]);
var inst_33627 = cljs.core.next.call(null,inst_33610);
var inst_33591 = inst_33627;
var inst_33592 = null;
var inst_33593 = (0);
var inst_33594 = (0);
var state_33651__$1 = (function (){var statearr_33688 = state_33651;
(statearr_33688[(20)] = inst_33593);

(statearr_33688[(27)] = inst_33626);

(statearr_33688[(10)] = inst_33594);

(statearr_33688[(21)] = inst_33591);

(statearr_33688[(11)] = inst_33592);

return statearr_33688;
})();
var statearr_33689_33760 = state_33651__$1;
(statearr_33689_33760[(2)] = null);

(statearr_33689_33760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (43))){
var state_33651__$1 = state_33651;
var statearr_33690_33761 = state_33651__$1;
(statearr_33690_33761[(2)] = null);

(statearr_33690_33761[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (29))){
var inst_33635 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33691_33762 = state_33651__$1;
(statearr_33691_33762[(2)] = inst_33635);

(statearr_33691_33762[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (44))){
var inst_33644 = (state_33651[(2)]);
var state_33651__$1 = (function (){var statearr_33692 = state_33651;
(statearr_33692[(28)] = inst_33644);

return statearr_33692;
})();
var statearr_33693_33763 = state_33651__$1;
(statearr_33693_33763[(2)] = null);

(statearr_33693_33763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (6))){
var inst_33583 = (state_33651[(29)]);
var inst_33582 = cljs.core.deref.call(null,cs);
var inst_33583__$1 = cljs.core.keys.call(null,inst_33582);
var inst_33584 = cljs.core.count.call(null,inst_33583__$1);
var inst_33585 = cljs.core.reset_BANG_.call(null,dctr,inst_33584);
var inst_33590 = cljs.core.seq.call(null,inst_33583__$1);
var inst_33591 = inst_33590;
var inst_33592 = null;
var inst_33593 = (0);
var inst_33594 = (0);
var state_33651__$1 = (function (){var statearr_33694 = state_33651;
(statearr_33694[(29)] = inst_33583__$1);

(statearr_33694[(20)] = inst_33593);

(statearr_33694[(10)] = inst_33594);

(statearr_33694[(21)] = inst_33591);

(statearr_33694[(11)] = inst_33592);

(statearr_33694[(30)] = inst_33585);

return statearr_33694;
})();
var statearr_33695_33764 = state_33651__$1;
(statearr_33695_33764[(2)] = null);

(statearr_33695_33764[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (28))){
var inst_33610 = (state_33651[(25)]);
var inst_33591 = (state_33651[(21)]);
var inst_33610__$1 = cljs.core.seq.call(null,inst_33591);
var state_33651__$1 = (function (){var statearr_33696 = state_33651;
(statearr_33696[(25)] = inst_33610__$1);

return statearr_33696;
})();
if(inst_33610__$1){
var statearr_33697_33765 = state_33651__$1;
(statearr_33697_33765[(1)] = (33));

} else {
var statearr_33698_33766 = state_33651__$1;
(statearr_33698_33766[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (25))){
var inst_33593 = (state_33651[(20)]);
var inst_33594 = (state_33651[(10)]);
var inst_33596 = (inst_33594 < inst_33593);
var inst_33597 = inst_33596;
var state_33651__$1 = state_33651;
if(cljs.core.truth_(inst_33597)){
var statearr_33699_33767 = state_33651__$1;
(statearr_33699_33767[(1)] = (27));

} else {
var statearr_33700_33768 = state_33651__$1;
(statearr_33700_33768[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (34))){
var state_33651__$1 = state_33651;
var statearr_33701_33769 = state_33651__$1;
(statearr_33701_33769[(2)] = null);

(statearr_33701_33769[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (17))){
var state_33651__$1 = state_33651;
var statearr_33702_33770 = state_33651__$1;
(statearr_33702_33770[(2)] = null);

(statearr_33702_33770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (3))){
var inst_33649 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33651__$1,inst_33649);
} else {
if((state_val_33652 === (12))){
var inst_33578 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33703_33771 = state_33651__$1;
(statearr_33703_33771[(2)] = inst_33578);

(statearr_33703_33771[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (2))){
var state_33651__$1 = state_33651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33651__$1,(4),ch);
} else {
if((state_val_33652 === (23))){
var state_33651__$1 = state_33651;
var statearr_33704_33772 = state_33651__$1;
(statearr_33704_33772[(2)] = null);

(statearr_33704_33772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (35))){
var inst_33633 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33705_33773 = state_33651__$1;
(statearr_33705_33773[(2)] = inst_33633);

(statearr_33705_33773[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (19))){
var inst_33550 = (state_33651[(7)]);
var inst_33554 = cljs.core.chunk_first.call(null,inst_33550);
var inst_33555 = cljs.core.chunk_rest.call(null,inst_33550);
var inst_33556 = cljs.core.count.call(null,inst_33554);
var inst_33528 = inst_33555;
var inst_33529 = inst_33554;
var inst_33530 = inst_33556;
var inst_33531 = (0);
var state_33651__$1 = (function (){var statearr_33706 = state_33651;
(statearr_33706[(13)] = inst_33531);

(statearr_33706[(15)] = inst_33528);

(statearr_33706[(16)] = inst_33529);

(statearr_33706[(17)] = inst_33530);

return statearr_33706;
})();
var statearr_33707_33774 = state_33651__$1;
(statearr_33707_33774[(2)] = null);

(statearr_33707_33774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (11))){
var inst_33550 = (state_33651[(7)]);
var inst_33528 = (state_33651[(15)]);
var inst_33550__$1 = cljs.core.seq.call(null,inst_33528);
var state_33651__$1 = (function (){var statearr_33708 = state_33651;
(statearr_33708[(7)] = inst_33550__$1);

return statearr_33708;
})();
if(inst_33550__$1){
var statearr_33709_33775 = state_33651__$1;
(statearr_33709_33775[(1)] = (16));

} else {
var statearr_33710_33776 = state_33651__$1;
(statearr_33710_33776[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (9))){
var inst_33580 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33711_33777 = state_33651__$1;
(statearr_33711_33777[(2)] = inst_33580);

(statearr_33711_33777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (5))){
var inst_33526 = cljs.core.deref.call(null,cs);
var inst_33527 = cljs.core.seq.call(null,inst_33526);
var inst_33528 = inst_33527;
var inst_33529 = null;
var inst_33530 = (0);
var inst_33531 = (0);
var state_33651__$1 = (function (){var statearr_33712 = state_33651;
(statearr_33712[(13)] = inst_33531);

(statearr_33712[(15)] = inst_33528);

(statearr_33712[(16)] = inst_33529);

(statearr_33712[(17)] = inst_33530);

return statearr_33712;
})();
var statearr_33713_33778 = state_33651__$1;
(statearr_33713_33778[(2)] = null);

(statearr_33713_33778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (14))){
var state_33651__$1 = state_33651;
var statearr_33714_33779 = state_33651__$1;
(statearr_33714_33779[(2)] = null);

(statearr_33714_33779[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (45))){
var inst_33641 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33715_33780 = state_33651__$1;
(statearr_33715_33780[(2)] = inst_33641);

(statearr_33715_33780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (26))){
var inst_33583 = (state_33651[(29)]);
var inst_33637 = (state_33651[(2)]);
var inst_33638 = cljs.core.seq.call(null,inst_33583);
var state_33651__$1 = (function (){var statearr_33716 = state_33651;
(statearr_33716[(31)] = inst_33637);

return statearr_33716;
})();
if(inst_33638){
var statearr_33717_33781 = state_33651__$1;
(statearr_33717_33781[(1)] = (42));

} else {
var statearr_33718_33782 = state_33651__$1;
(statearr_33718_33782[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (16))){
var inst_33550 = (state_33651[(7)]);
var inst_33552 = cljs.core.chunked_seq_QMARK_.call(null,inst_33550);
var state_33651__$1 = state_33651;
if(inst_33552){
var statearr_33719_33783 = state_33651__$1;
(statearr_33719_33783[(1)] = (19));

} else {
var statearr_33720_33784 = state_33651__$1;
(statearr_33720_33784[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (38))){
var inst_33630 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33721_33785 = state_33651__$1;
(statearr_33721_33785[(2)] = inst_33630);

(statearr_33721_33785[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (30))){
var state_33651__$1 = state_33651;
var statearr_33722_33786 = state_33651__$1;
(statearr_33722_33786[(2)] = null);

(statearr_33722_33786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (10))){
var inst_33531 = (state_33651[(13)]);
var inst_33529 = (state_33651[(16)]);
var inst_33539 = cljs.core._nth.call(null,inst_33529,inst_33531);
var inst_33540 = cljs.core.nth.call(null,inst_33539,(0),null);
var inst_33541 = cljs.core.nth.call(null,inst_33539,(1),null);
var state_33651__$1 = (function (){var statearr_33723 = state_33651;
(statearr_33723[(26)] = inst_33540);

return statearr_33723;
})();
if(cljs.core.truth_(inst_33541)){
var statearr_33724_33787 = state_33651__$1;
(statearr_33724_33787[(1)] = (13));

} else {
var statearr_33725_33788 = state_33651__$1;
(statearr_33725_33788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (18))){
var inst_33576 = (state_33651[(2)]);
var state_33651__$1 = state_33651;
var statearr_33726_33789 = state_33651__$1;
(statearr_33726_33789[(2)] = inst_33576);

(statearr_33726_33789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (42))){
var state_33651__$1 = state_33651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33651__$1,(45),dchan);
} else {
if((state_val_33652 === (37))){
var inst_33619 = (state_33651[(23)]);
var inst_33610 = (state_33651[(25)]);
var inst_33519 = (state_33651[(9)]);
var inst_33619__$1 = cljs.core.first.call(null,inst_33610);
var inst_33620 = cljs.core.async.put_BANG_.call(null,inst_33619__$1,inst_33519,done);
var state_33651__$1 = (function (){var statearr_33727 = state_33651;
(statearr_33727[(23)] = inst_33619__$1);

return statearr_33727;
})();
if(cljs.core.truth_(inst_33620)){
var statearr_33728_33790 = state_33651__$1;
(statearr_33728_33790[(1)] = (39));

} else {
var statearr_33729_33791 = state_33651__$1;
(statearr_33729_33791[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33652 === (8))){
var inst_33531 = (state_33651[(13)]);
var inst_33530 = (state_33651[(17)]);
var inst_33533 = (inst_33531 < inst_33530);
var inst_33534 = inst_33533;
var state_33651__$1 = state_33651;
if(cljs.core.truth_(inst_33534)){
var statearr_33730_33792 = state_33651__$1;
(statearr_33730_33792[(1)] = (10));

} else {
var statearr_33731_33793 = state_33651__$1;
(statearr_33731_33793[(1)] = (11));

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
});})(c__32416__auto___33739,cs,m,dchan,dctr,done))
;
return ((function (switch__32304__auto__,c__32416__auto___33739,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32305__auto__ = null;
var cljs$core$async$mult_$_state_machine__32305__auto____0 = (function (){
var statearr_33735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33735[(0)] = cljs$core$async$mult_$_state_machine__32305__auto__);

(statearr_33735[(1)] = (1));

return statearr_33735;
});
var cljs$core$async$mult_$_state_machine__32305__auto____1 = (function (state_33651){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_33651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e33736){if((e33736 instanceof Object)){
var ex__32308__auto__ = e33736;
var statearr_33737_33794 = state_33651;
(statearr_33737_33794[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33795 = state_33651;
state_33651 = G__33795;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32305__auto__ = function(state_33651){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32305__auto____1.call(this,state_33651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32305__auto____0;
cljs$core$async$mult_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32305__auto____1;
return cljs$core$async$mult_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___33739,cs,m,dchan,dctr,done))
})();
var state__32418__auto__ = (function (){var statearr_33738 = f__32417__auto__.call(null);
(statearr_33738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___33739);

return statearr_33738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___33739,cs,m,dchan,dctr,done))
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
var args33796 = [];
var len__23690__auto___33799 = arguments.length;
var i__23691__auto___33800 = (0);
while(true){
if((i__23691__auto___33800 < len__23690__auto___33799)){
args33796.push((arguments[i__23691__auto___33800]));

var G__33801 = (i__23691__auto___33800 + (1));
i__23691__auto___33800 = G__33801;
continue;
} else {
}
break;
}

var G__33798 = args33796.length;
switch (G__33798) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33796.length)].join('')));

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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m,ch);
} else {
var m__23279__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m,ch);
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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m,ch);
} else {
var m__23279__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m,ch);
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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m);
} else {
var m__23279__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m);
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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m,state_map);
} else {
var m__23279__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m,state_map);
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
var x__23278__auto__ = (((m == null))?null:m);
var m__23279__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,m,mode);
} else {
var m__23279__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__23697__auto__ = [];
var len__23690__auto___33813 = arguments.length;
var i__23691__auto___33814 = (0);
while(true){
if((i__23691__auto___33814 < len__23690__auto___33813)){
args__23697__auto__.push((arguments[i__23691__auto___33814]));

var G__33815 = (i__23691__auto___33814 + (1));
i__23691__auto___33814 = G__33815;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((3) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__23698__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33807){
var map__33808 = p__33807;
var map__33808__$1 = ((((!((map__33808 == null)))?((((map__33808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33808):map__33808);
var opts = map__33808__$1;
var statearr_33810_33816 = state;
(statearr_33810_33816[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__33808,map__33808__$1,opts){
return (function (val){
var statearr_33811_33817 = state;
(statearr_33811_33817[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33808,map__33808__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_33812_33818 = state;
(statearr_33812_33818[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33803){
var G__33804 = cljs.core.first.call(null,seq33803);
var seq33803__$1 = cljs.core.next.call(null,seq33803);
var G__33805 = cljs.core.first.call(null,seq33803__$1);
var seq33803__$2 = cljs.core.next.call(null,seq33803__$1);
var G__33806 = cljs.core.first.call(null,seq33803__$2);
var seq33803__$3 = cljs.core.next.call(null,seq33803__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33804,G__33805,G__33806,seq33803__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33984 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33984 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33985){
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
this.meta33985 = meta33985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33986,meta33985__$1){
var self__ = this;
var _33986__$1 = this;
return (new cljs.core.async.t_cljs$core$async33984(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33985__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33986){
var self__ = this;
var _33986__$1 = this;
return self__.meta33985;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33984.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33985","meta33985",689401206,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33984.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33984.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33984";

cljs.core.async.t_cljs$core$async33984.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async33984");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33984 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33985){
return (new cljs.core.async.t_cljs$core$async33984(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33985));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33984(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32416__auto___34149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___34149,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___34149,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34086){
var state_val_34087 = (state_34086[(1)]);
if((state_val_34087 === (7))){
var inst_34002 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34088_34150 = state_34086__$1;
(statearr_34088_34150[(2)] = inst_34002);

(statearr_34088_34150[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (20))){
var inst_34014 = (state_34086[(7)]);
var state_34086__$1 = state_34086;
var statearr_34089_34151 = state_34086__$1;
(statearr_34089_34151[(2)] = inst_34014);

(statearr_34089_34151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (27))){
var state_34086__$1 = state_34086;
var statearr_34090_34152 = state_34086__$1;
(statearr_34090_34152[(2)] = null);

(statearr_34090_34152[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (1))){
var inst_33990 = (state_34086[(8)]);
var inst_33990__$1 = calc_state.call(null);
var inst_33992 = (inst_33990__$1 == null);
var inst_33993 = cljs.core.not.call(null,inst_33992);
var state_34086__$1 = (function (){var statearr_34091 = state_34086;
(statearr_34091[(8)] = inst_33990__$1);

return statearr_34091;
})();
if(inst_33993){
var statearr_34092_34153 = state_34086__$1;
(statearr_34092_34153[(1)] = (2));

} else {
var statearr_34093_34154 = state_34086__$1;
(statearr_34093_34154[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (24))){
var inst_34060 = (state_34086[(9)]);
var inst_34037 = (state_34086[(10)]);
var inst_34046 = (state_34086[(11)]);
var inst_34060__$1 = inst_34037.call(null,inst_34046);
var state_34086__$1 = (function (){var statearr_34094 = state_34086;
(statearr_34094[(9)] = inst_34060__$1);

return statearr_34094;
})();
if(cljs.core.truth_(inst_34060__$1)){
var statearr_34095_34155 = state_34086__$1;
(statearr_34095_34155[(1)] = (29));

} else {
var statearr_34096_34156 = state_34086__$1;
(statearr_34096_34156[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (4))){
var inst_34005 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_34005)){
var statearr_34097_34157 = state_34086__$1;
(statearr_34097_34157[(1)] = (8));

} else {
var statearr_34098_34158 = state_34086__$1;
(statearr_34098_34158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (15))){
var inst_34031 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_34031)){
var statearr_34099_34159 = state_34086__$1;
(statearr_34099_34159[(1)] = (19));

} else {
var statearr_34100_34160 = state_34086__$1;
(statearr_34100_34160[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (21))){
var inst_34036 = (state_34086[(12)]);
var inst_34036__$1 = (state_34086[(2)]);
var inst_34037 = cljs.core.get.call(null,inst_34036__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34038 = cljs.core.get.call(null,inst_34036__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34039 = cljs.core.get.call(null,inst_34036__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34086__$1 = (function (){var statearr_34101 = state_34086;
(statearr_34101[(12)] = inst_34036__$1);

(statearr_34101[(10)] = inst_34037);

(statearr_34101[(13)] = inst_34038);

return statearr_34101;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34086__$1,(22),inst_34039);
} else {
if((state_val_34087 === (31))){
var inst_34068 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_34068)){
var statearr_34102_34161 = state_34086__$1;
(statearr_34102_34161[(1)] = (32));

} else {
var statearr_34103_34162 = state_34086__$1;
(statearr_34103_34162[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (32))){
var inst_34045 = (state_34086[(14)]);
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34086__$1,(35),out,inst_34045);
} else {
if((state_val_34087 === (33))){
var inst_34036 = (state_34086[(12)]);
var inst_34014 = inst_34036;
var state_34086__$1 = (function (){var statearr_34104 = state_34086;
(statearr_34104[(7)] = inst_34014);

return statearr_34104;
})();
var statearr_34105_34163 = state_34086__$1;
(statearr_34105_34163[(2)] = null);

(statearr_34105_34163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (13))){
var inst_34014 = (state_34086[(7)]);
var inst_34021 = inst_34014.cljs$lang$protocol_mask$partition0$;
var inst_34022 = (inst_34021 & (64));
var inst_34023 = inst_34014.cljs$core$ISeq$;
var inst_34024 = (inst_34022) || (inst_34023);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_34024)){
var statearr_34106_34164 = state_34086__$1;
(statearr_34106_34164[(1)] = (16));

} else {
var statearr_34107_34165 = state_34086__$1;
(statearr_34107_34165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (22))){
var inst_34045 = (state_34086[(14)]);
var inst_34046 = (state_34086[(11)]);
var inst_34044 = (state_34086[(2)]);
var inst_34045__$1 = cljs.core.nth.call(null,inst_34044,(0),null);
var inst_34046__$1 = cljs.core.nth.call(null,inst_34044,(1),null);
var inst_34047 = (inst_34045__$1 == null);
var inst_34048 = cljs.core._EQ_.call(null,inst_34046__$1,change);
var inst_34049 = (inst_34047) || (inst_34048);
var state_34086__$1 = (function (){var statearr_34108 = state_34086;
(statearr_34108[(14)] = inst_34045__$1);

(statearr_34108[(11)] = inst_34046__$1);

return statearr_34108;
})();
if(cljs.core.truth_(inst_34049)){
var statearr_34109_34166 = state_34086__$1;
(statearr_34109_34166[(1)] = (23));

} else {
var statearr_34110_34167 = state_34086__$1;
(statearr_34110_34167[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (36))){
var inst_34036 = (state_34086[(12)]);
var inst_34014 = inst_34036;
var state_34086__$1 = (function (){var statearr_34111 = state_34086;
(statearr_34111[(7)] = inst_34014);

return statearr_34111;
})();
var statearr_34112_34168 = state_34086__$1;
(statearr_34112_34168[(2)] = null);

(statearr_34112_34168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (29))){
var inst_34060 = (state_34086[(9)]);
var state_34086__$1 = state_34086;
var statearr_34113_34169 = state_34086__$1;
(statearr_34113_34169[(2)] = inst_34060);

(statearr_34113_34169[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (6))){
var state_34086__$1 = state_34086;
var statearr_34114_34170 = state_34086__$1;
(statearr_34114_34170[(2)] = false);

(statearr_34114_34170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (28))){
var inst_34056 = (state_34086[(2)]);
var inst_34057 = calc_state.call(null);
var inst_34014 = inst_34057;
var state_34086__$1 = (function (){var statearr_34115 = state_34086;
(statearr_34115[(15)] = inst_34056);

(statearr_34115[(7)] = inst_34014);

return statearr_34115;
})();
var statearr_34116_34171 = state_34086__$1;
(statearr_34116_34171[(2)] = null);

(statearr_34116_34171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (25))){
var inst_34082 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34117_34172 = state_34086__$1;
(statearr_34117_34172[(2)] = inst_34082);

(statearr_34117_34172[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (34))){
var inst_34080 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34118_34173 = state_34086__$1;
(statearr_34118_34173[(2)] = inst_34080);

(statearr_34118_34173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (17))){
var state_34086__$1 = state_34086;
var statearr_34119_34174 = state_34086__$1;
(statearr_34119_34174[(2)] = false);

(statearr_34119_34174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (3))){
var state_34086__$1 = state_34086;
var statearr_34120_34175 = state_34086__$1;
(statearr_34120_34175[(2)] = false);

(statearr_34120_34175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (12))){
var inst_34084 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34086__$1,inst_34084);
} else {
if((state_val_34087 === (2))){
var inst_33990 = (state_34086[(8)]);
var inst_33995 = inst_33990.cljs$lang$protocol_mask$partition0$;
var inst_33996 = (inst_33995 & (64));
var inst_33997 = inst_33990.cljs$core$ISeq$;
var inst_33998 = (inst_33996) || (inst_33997);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_33998)){
var statearr_34121_34176 = state_34086__$1;
(statearr_34121_34176[(1)] = (5));

} else {
var statearr_34122_34177 = state_34086__$1;
(statearr_34122_34177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (23))){
var inst_34045 = (state_34086[(14)]);
var inst_34051 = (inst_34045 == null);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_34051)){
var statearr_34123_34178 = state_34086__$1;
(statearr_34123_34178[(1)] = (26));

} else {
var statearr_34124_34179 = state_34086__$1;
(statearr_34124_34179[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (35))){
var inst_34071 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
if(cljs.core.truth_(inst_34071)){
var statearr_34125_34180 = state_34086__$1;
(statearr_34125_34180[(1)] = (36));

} else {
var statearr_34126_34181 = state_34086__$1;
(statearr_34126_34181[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (19))){
var inst_34014 = (state_34086[(7)]);
var inst_34033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34014);
var state_34086__$1 = state_34086;
var statearr_34127_34182 = state_34086__$1;
(statearr_34127_34182[(2)] = inst_34033);

(statearr_34127_34182[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (11))){
var inst_34014 = (state_34086[(7)]);
var inst_34018 = (inst_34014 == null);
var inst_34019 = cljs.core.not.call(null,inst_34018);
var state_34086__$1 = state_34086;
if(inst_34019){
var statearr_34128_34183 = state_34086__$1;
(statearr_34128_34183[(1)] = (13));

} else {
var statearr_34129_34184 = state_34086__$1;
(statearr_34129_34184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (9))){
var inst_33990 = (state_34086[(8)]);
var state_34086__$1 = state_34086;
var statearr_34130_34185 = state_34086__$1;
(statearr_34130_34185[(2)] = inst_33990);

(statearr_34130_34185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (5))){
var state_34086__$1 = state_34086;
var statearr_34131_34186 = state_34086__$1;
(statearr_34131_34186[(2)] = true);

(statearr_34131_34186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (14))){
var state_34086__$1 = state_34086;
var statearr_34132_34187 = state_34086__$1;
(statearr_34132_34187[(2)] = false);

(statearr_34132_34187[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (26))){
var inst_34046 = (state_34086[(11)]);
var inst_34053 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34046);
var state_34086__$1 = state_34086;
var statearr_34133_34188 = state_34086__$1;
(statearr_34133_34188[(2)] = inst_34053);

(statearr_34133_34188[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (16))){
var state_34086__$1 = state_34086;
var statearr_34134_34189 = state_34086__$1;
(statearr_34134_34189[(2)] = true);

(statearr_34134_34189[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (38))){
var inst_34076 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34135_34190 = state_34086__$1;
(statearr_34135_34190[(2)] = inst_34076);

(statearr_34135_34190[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (30))){
var inst_34037 = (state_34086[(10)]);
var inst_34046 = (state_34086[(11)]);
var inst_34038 = (state_34086[(13)]);
var inst_34063 = cljs.core.empty_QMARK_.call(null,inst_34037);
var inst_34064 = inst_34038.call(null,inst_34046);
var inst_34065 = cljs.core.not.call(null,inst_34064);
var inst_34066 = (inst_34063) && (inst_34065);
var state_34086__$1 = state_34086;
var statearr_34136_34191 = state_34086__$1;
(statearr_34136_34191[(2)] = inst_34066);

(statearr_34136_34191[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (10))){
var inst_33990 = (state_34086[(8)]);
var inst_34010 = (state_34086[(2)]);
var inst_34011 = cljs.core.get.call(null,inst_34010,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34012 = cljs.core.get.call(null,inst_34010,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34013 = cljs.core.get.call(null,inst_34010,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34014 = inst_33990;
var state_34086__$1 = (function (){var statearr_34137 = state_34086;
(statearr_34137[(16)] = inst_34012);

(statearr_34137[(7)] = inst_34014);

(statearr_34137[(17)] = inst_34011);

(statearr_34137[(18)] = inst_34013);

return statearr_34137;
})();
var statearr_34138_34192 = state_34086__$1;
(statearr_34138_34192[(2)] = null);

(statearr_34138_34192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (18))){
var inst_34028 = (state_34086[(2)]);
var state_34086__$1 = state_34086;
var statearr_34139_34193 = state_34086__$1;
(statearr_34139_34193[(2)] = inst_34028);

(statearr_34139_34193[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (37))){
var state_34086__$1 = state_34086;
var statearr_34140_34194 = state_34086__$1;
(statearr_34140_34194[(2)] = null);

(statearr_34140_34194[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34087 === (8))){
var inst_33990 = (state_34086[(8)]);
var inst_34007 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33990);
var state_34086__$1 = state_34086;
var statearr_34141_34195 = state_34086__$1;
(statearr_34141_34195[(2)] = inst_34007);

(statearr_34141_34195[(1)] = (10));


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
});})(c__32416__auto___34149,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32304__auto__,c__32416__auto___34149,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32305__auto__ = null;
var cljs$core$async$mix_$_state_machine__32305__auto____0 = (function (){
var statearr_34145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34145[(0)] = cljs$core$async$mix_$_state_machine__32305__auto__);

(statearr_34145[(1)] = (1));

return statearr_34145;
});
var cljs$core$async$mix_$_state_machine__32305__auto____1 = (function (state_34086){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e34146){if((e34146 instanceof Object)){
var ex__32308__auto__ = e34146;
var statearr_34147_34196 = state_34086;
(statearr_34147_34196[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34197 = state_34086;
state_34086 = G__34197;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32305__auto__ = function(state_34086){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32305__auto____1.call(this,state_34086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32305__auto____0;
cljs$core$async$mix_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32305__auto____1;
return cljs$core$async$mix_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___34149,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32418__auto__ = (function (){var statearr_34148 = f__32417__auto__.call(null);
(statearr_34148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___34149);

return statearr_34148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___34149,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__23278__auto__ = (((p == null))?null:p);
var m__23279__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__23279__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__23278__auto__ = (((p == null))?null:p);
var m__23279__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,p,v,ch);
} else {
var m__23279__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34198 = [];
var len__23690__auto___34201 = arguments.length;
var i__23691__auto___34202 = (0);
while(true){
if((i__23691__auto___34202 < len__23690__auto___34201)){
args34198.push((arguments[i__23691__auto___34202]));

var G__34203 = (i__23691__auto___34202 + (1));
i__23691__auto___34202 = G__34203;
continue;
} else {
}
break;
}

var G__34200 = args34198.length;
switch (G__34200) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34198.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__23278__auto__ = (((p == null))?null:p);
var m__23279__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,p);
} else {
var m__23279__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,p);
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
var x__23278__auto__ = (((p == null))?null:p);
var m__23279__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__23278__auto__)]);
if(!((m__23279__auto__ == null))){
return m__23279__auto__.call(null,p,v);
} else {
var m__23279__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__23279__auto____$1 == null))){
return m__23279__auto____$1.call(null,p,v);
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
var args34206 = [];
var len__23690__auto___34331 = arguments.length;
var i__23691__auto___34332 = (0);
while(true){
if((i__23691__auto___34332 < len__23690__auto___34331)){
args34206.push((arguments[i__23691__auto___34332]));

var G__34333 = (i__23691__auto___34332 + (1));
i__23691__auto___34332 = G__34333;
continue;
} else {
}
break;
}

var G__34208 = args34206.length;
switch (G__34208) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34206.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__22615__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__22615__auto__,mults){
return (function (p1__34205_SHARP_){
if(cljs.core.truth_(p1__34205_SHARP_.call(null,topic))){
return p1__34205_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34205_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__22615__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34209 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34210){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34210 = meta34210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34211,meta34210__$1){
var self__ = this;
var _34211__$1 = this;
return (new cljs.core.async.t_cljs$core$async34209(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34210__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34211){
var self__ = this;
var _34211__$1 = this;
return self__.meta34210;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34209.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34209.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34210","meta34210",1402170182,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34209";

cljs.core.async.t_cljs$core$async34209.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async34209");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34209 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34209(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34210){
return (new cljs.core.async.t_cljs$core$async34209(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34210));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34209(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32416__auto___34335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___34335,mults,ensure_mult,p){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___34335,mults,ensure_mult,p){
return (function (state_34283){
var state_val_34284 = (state_34283[(1)]);
if((state_val_34284 === (7))){
var inst_34279 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34285_34336 = state_34283__$1;
(statearr_34285_34336[(2)] = inst_34279);

(statearr_34285_34336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (20))){
var state_34283__$1 = state_34283;
var statearr_34286_34337 = state_34283__$1;
(statearr_34286_34337[(2)] = null);

(statearr_34286_34337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (1))){
var state_34283__$1 = state_34283;
var statearr_34287_34338 = state_34283__$1;
(statearr_34287_34338[(2)] = null);

(statearr_34287_34338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (24))){
var inst_34262 = (state_34283[(7)]);
var inst_34271 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34262);
var state_34283__$1 = state_34283;
var statearr_34288_34339 = state_34283__$1;
(statearr_34288_34339[(2)] = inst_34271);

(statearr_34288_34339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (4))){
var inst_34214 = (state_34283[(8)]);
var inst_34214__$1 = (state_34283[(2)]);
var inst_34215 = (inst_34214__$1 == null);
var state_34283__$1 = (function (){var statearr_34289 = state_34283;
(statearr_34289[(8)] = inst_34214__$1);

return statearr_34289;
})();
if(cljs.core.truth_(inst_34215)){
var statearr_34290_34340 = state_34283__$1;
(statearr_34290_34340[(1)] = (5));

} else {
var statearr_34291_34341 = state_34283__$1;
(statearr_34291_34341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (15))){
var inst_34256 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34292_34342 = state_34283__$1;
(statearr_34292_34342[(2)] = inst_34256);

(statearr_34292_34342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (21))){
var inst_34276 = (state_34283[(2)]);
var state_34283__$1 = (function (){var statearr_34293 = state_34283;
(statearr_34293[(9)] = inst_34276);

return statearr_34293;
})();
var statearr_34294_34343 = state_34283__$1;
(statearr_34294_34343[(2)] = null);

(statearr_34294_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (13))){
var inst_34238 = (state_34283[(10)]);
var inst_34240 = cljs.core.chunked_seq_QMARK_.call(null,inst_34238);
var state_34283__$1 = state_34283;
if(inst_34240){
var statearr_34295_34344 = state_34283__$1;
(statearr_34295_34344[(1)] = (16));

} else {
var statearr_34296_34345 = state_34283__$1;
(statearr_34296_34345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (22))){
var inst_34268 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
if(cljs.core.truth_(inst_34268)){
var statearr_34297_34346 = state_34283__$1;
(statearr_34297_34346[(1)] = (23));

} else {
var statearr_34298_34347 = state_34283__$1;
(statearr_34298_34347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (6))){
var inst_34264 = (state_34283[(11)]);
var inst_34262 = (state_34283[(7)]);
var inst_34214 = (state_34283[(8)]);
var inst_34262__$1 = topic_fn.call(null,inst_34214);
var inst_34263 = cljs.core.deref.call(null,mults);
var inst_34264__$1 = cljs.core.get.call(null,inst_34263,inst_34262__$1);
var state_34283__$1 = (function (){var statearr_34299 = state_34283;
(statearr_34299[(11)] = inst_34264__$1);

(statearr_34299[(7)] = inst_34262__$1);

return statearr_34299;
})();
if(cljs.core.truth_(inst_34264__$1)){
var statearr_34300_34348 = state_34283__$1;
(statearr_34300_34348[(1)] = (19));

} else {
var statearr_34301_34349 = state_34283__$1;
(statearr_34301_34349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (25))){
var inst_34273 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34302_34350 = state_34283__$1;
(statearr_34302_34350[(2)] = inst_34273);

(statearr_34302_34350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (17))){
var inst_34238 = (state_34283[(10)]);
var inst_34247 = cljs.core.first.call(null,inst_34238);
var inst_34248 = cljs.core.async.muxch_STAR_.call(null,inst_34247);
var inst_34249 = cljs.core.async.close_BANG_.call(null,inst_34248);
var inst_34250 = cljs.core.next.call(null,inst_34238);
var inst_34224 = inst_34250;
var inst_34225 = null;
var inst_34226 = (0);
var inst_34227 = (0);
var state_34283__$1 = (function (){var statearr_34303 = state_34283;
(statearr_34303[(12)] = inst_34227);

(statearr_34303[(13)] = inst_34249);

(statearr_34303[(14)] = inst_34224);

(statearr_34303[(15)] = inst_34225);

(statearr_34303[(16)] = inst_34226);

return statearr_34303;
})();
var statearr_34304_34351 = state_34283__$1;
(statearr_34304_34351[(2)] = null);

(statearr_34304_34351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (3))){
var inst_34281 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34283__$1,inst_34281);
} else {
if((state_val_34284 === (12))){
var inst_34258 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34305_34352 = state_34283__$1;
(statearr_34305_34352[(2)] = inst_34258);

(statearr_34305_34352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (2))){
var state_34283__$1 = state_34283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34283__$1,(4),ch);
} else {
if((state_val_34284 === (23))){
var state_34283__$1 = state_34283;
var statearr_34306_34353 = state_34283__$1;
(statearr_34306_34353[(2)] = null);

(statearr_34306_34353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (19))){
var inst_34264 = (state_34283[(11)]);
var inst_34214 = (state_34283[(8)]);
var inst_34266 = cljs.core.async.muxch_STAR_.call(null,inst_34264);
var state_34283__$1 = state_34283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34283__$1,(22),inst_34266,inst_34214);
} else {
if((state_val_34284 === (11))){
var inst_34238 = (state_34283[(10)]);
var inst_34224 = (state_34283[(14)]);
var inst_34238__$1 = cljs.core.seq.call(null,inst_34224);
var state_34283__$1 = (function (){var statearr_34307 = state_34283;
(statearr_34307[(10)] = inst_34238__$1);

return statearr_34307;
})();
if(inst_34238__$1){
var statearr_34308_34354 = state_34283__$1;
(statearr_34308_34354[(1)] = (13));

} else {
var statearr_34309_34355 = state_34283__$1;
(statearr_34309_34355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (9))){
var inst_34260 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34310_34356 = state_34283__$1;
(statearr_34310_34356[(2)] = inst_34260);

(statearr_34310_34356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (5))){
var inst_34221 = cljs.core.deref.call(null,mults);
var inst_34222 = cljs.core.vals.call(null,inst_34221);
var inst_34223 = cljs.core.seq.call(null,inst_34222);
var inst_34224 = inst_34223;
var inst_34225 = null;
var inst_34226 = (0);
var inst_34227 = (0);
var state_34283__$1 = (function (){var statearr_34311 = state_34283;
(statearr_34311[(12)] = inst_34227);

(statearr_34311[(14)] = inst_34224);

(statearr_34311[(15)] = inst_34225);

(statearr_34311[(16)] = inst_34226);

return statearr_34311;
})();
var statearr_34312_34357 = state_34283__$1;
(statearr_34312_34357[(2)] = null);

(statearr_34312_34357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (14))){
var state_34283__$1 = state_34283;
var statearr_34316_34358 = state_34283__$1;
(statearr_34316_34358[(2)] = null);

(statearr_34316_34358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (16))){
var inst_34238 = (state_34283[(10)]);
var inst_34242 = cljs.core.chunk_first.call(null,inst_34238);
var inst_34243 = cljs.core.chunk_rest.call(null,inst_34238);
var inst_34244 = cljs.core.count.call(null,inst_34242);
var inst_34224 = inst_34243;
var inst_34225 = inst_34242;
var inst_34226 = inst_34244;
var inst_34227 = (0);
var state_34283__$1 = (function (){var statearr_34317 = state_34283;
(statearr_34317[(12)] = inst_34227);

(statearr_34317[(14)] = inst_34224);

(statearr_34317[(15)] = inst_34225);

(statearr_34317[(16)] = inst_34226);

return statearr_34317;
})();
var statearr_34318_34359 = state_34283__$1;
(statearr_34318_34359[(2)] = null);

(statearr_34318_34359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (10))){
var inst_34227 = (state_34283[(12)]);
var inst_34224 = (state_34283[(14)]);
var inst_34225 = (state_34283[(15)]);
var inst_34226 = (state_34283[(16)]);
var inst_34232 = cljs.core._nth.call(null,inst_34225,inst_34227);
var inst_34233 = cljs.core.async.muxch_STAR_.call(null,inst_34232);
var inst_34234 = cljs.core.async.close_BANG_.call(null,inst_34233);
var inst_34235 = (inst_34227 + (1));
var tmp34313 = inst_34224;
var tmp34314 = inst_34225;
var tmp34315 = inst_34226;
var inst_34224__$1 = tmp34313;
var inst_34225__$1 = tmp34314;
var inst_34226__$1 = tmp34315;
var inst_34227__$1 = inst_34235;
var state_34283__$1 = (function (){var statearr_34319 = state_34283;
(statearr_34319[(12)] = inst_34227__$1);

(statearr_34319[(17)] = inst_34234);

(statearr_34319[(14)] = inst_34224__$1);

(statearr_34319[(15)] = inst_34225__$1);

(statearr_34319[(16)] = inst_34226__$1);

return statearr_34319;
})();
var statearr_34320_34360 = state_34283__$1;
(statearr_34320_34360[(2)] = null);

(statearr_34320_34360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (18))){
var inst_34253 = (state_34283[(2)]);
var state_34283__$1 = state_34283;
var statearr_34321_34361 = state_34283__$1;
(statearr_34321_34361[(2)] = inst_34253);

(statearr_34321_34361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34284 === (8))){
var inst_34227 = (state_34283[(12)]);
var inst_34226 = (state_34283[(16)]);
var inst_34229 = (inst_34227 < inst_34226);
var inst_34230 = inst_34229;
var state_34283__$1 = state_34283;
if(cljs.core.truth_(inst_34230)){
var statearr_34322_34362 = state_34283__$1;
(statearr_34322_34362[(1)] = (10));

} else {
var statearr_34323_34363 = state_34283__$1;
(statearr_34323_34363[(1)] = (11));

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
});})(c__32416__auto___34335,mults,ensure_mult,p))
;
return ((function (switch__32304__auto__,c__32416__auto___34335,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_34327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34327[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_34327[(1)] = (1));

return statearr_34327;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_34283){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e34328){if((e34328 instanceof Object)){
var ex__32308__auto__ = e34328;
var statearr_34329_34364 = state_34283;
(statearr_34329_34364[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34365 = state_34283;
state_34283 = G__34365;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_34283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_34283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___34335,mults,ensure_mult,p))
})();
var state__32418__auto__ = (function (){var statearr_34330 = f__32417__auto__.call(null);
(statearr_34330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___34335);

return statearr_34330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___34335,mults,ensure_mult,p))
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
var args34366 = [];
var len__23690__auto___34369 = arguments.length;
var i__23691__auto___34370 = (0);
while(true){
if((i__23691__auto___34370 < len__23690__auto___34369)){
args34366.push((arguments[i__23691__auto___34370]));

var G__34371 = (i__23691__auto___34370 + (1));
i__23691__auto___34370 = G__34371;
continue;
} else {
}
break;
}

var G__34368 = args34366.length;
switch (G__34368) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34366.length)].join('')));

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
var args34373 = [];
var len__23690__auto___34376 = arguments.length;
var i__23691__auto___34377 = (0);
while(true){
if((i__23691__auto___34377 < len__23690__auto___34376)){
args34373.push((arguments[i__23691__auto___34377]));

var G__34378 = (i__23691__auto___34377 + (1));
i__23691__auto___34377 = G__34378;
continue;
} else {
}
break;
}

var G__34375 = args34373.length;
switch (G__34375) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34373.length)].join('')));

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
var args34380 = [];
var len__23690__auto___34451 = arguments.length;
var i__23691__auto___34452 = (0);
while(true){
if((i__23691__auto___34452 < len__23690__auto___34451)){
args34380.push((arguments[i__23691__auto___34452]));

var G__34453 = (i__23691__auto___34452 + (1));
i__23691__auto___34452 = G__34453;
continue;
} else {
}
break;
}

var G__34382 = args34380.length;
switch (G__34382) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34380.length)].join('')));

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
var c__32416__auto___34455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___34455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___34455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34421){
var state_val_34422 = (state_34421[(1)]);
if((state_val_34422 === (7))){
var state_34421__$1 = state_34421;
var statearr_34423_34456 = state_34421__$1;
(statearr_34423_34456[(2)] = null);

(statearr_34423_34456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (1))){
var state_34421__$1 = state_34421;
var statearr_34424_34457 = state_34421__$1;
(statearr_34424_34457[(2)] = null);

(statearr_34424_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (4))){
var inst_34385 = (state_34421[(7)]);
var inst_34387 = (inst_34385 < cnt);
var state_34421__$1 = state_34421;
if(cljs.core.truth_(inst_34387)){
var statearr_34425_34458 = state_34421__$1;
(statearr_34425_34458[(1)] = (6));

} else {
var statearr_34426_34459 = state_34421__$1;
(statearr_34426_34459[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (15))){
var inst_34417 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34427_34460 = state_34421__$1;
(statearr_34427_34460[(2)] = inst_34417);

(statearr_34427_34460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (13))){
var inst_34410 = cljs.core.async.close_BANG_.call(null,out);
var state_34421__$1 = state_34421;
var statearr_34428_34461 = state_34421__$1;
(statearr_34428_34461[(2)] = inst_34410);

(statearr_34428_34461[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (6))){
var state_34421__$1 = state_34421;
var statearr_34429_34462 = state_34421__$1;
(statearr_34429_34462[(2)] = null);

(statearr_34429_34462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (3))){
var inst_34419 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34421__$1,inst_34419);
} else {
if((state_val_34422 === (12))){
var inst_34407 = (state_34421[(8)]);
var inst_34407__$1 = (state_34421[(2)]);
var inst_34408 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34407__$1);
var state_34421__$1 = (function (){var statearr_34430 = state_34421;
(statearr_34430[(8)] = inst_34407__$1);

return statearr_34430;
})();
if(cljs.core.truth_(inst_34408)){
var statearr_34431_34463 = state_34421__$1;
(statearr_34431_34463[(1)] = (13));

} else {
var statearr_34432_34464 = state_34421__$1;
(statearr_34432_34464[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (2))){
var inst_34384 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34385 = (0);
var state_34421__$1 = (function (){var statearr_34433 = state_34421;
(statearr_34433[(9)] = inst_34384);

(statearr_34433[(7)] = inst_34385);

return statearr_34433;
})();
var statearr_34434_34465 = state_34421__$1;
(statearr_34434_34465[(2)] = null);

(statearr_34434_34465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (11))){
var inst_34385 = (state_34421[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34421,(10),Object,null,(9));
var inst_34394 = chs__$1.call(null,inst_34385);
var inst_34395 = done.call(null,inst_34385);
var inst_34396 = cljs.core.async.take_BANG_.call(null,inst_34394,inst_34395);
var state_34421__$1 = state_34421;
var statearr_34435_34466 = state_34421__$1;
(statearr_34435_34466[(2)] = inst_34396);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34421__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (9))){
var inst_34385 = (state_34421[(7)]);
var inst_34398 = (state_34421[(2)]);
var inst_34399 = (inst_34385 + (1));
var inst_34385__$1 = inst_34399;
var state_34421__$1 = (function (){var statearr_34436 = state_34421;
(statearr_34436[(10)] = inst_34398);

(statearr_34436[(7)] = inst_34385__$1);

return statearr_34436;
})();
var statearr_34437_34467 = state_34421__$1;
(statearr_34437_34467[(2)] = null);

(statearr_34437_34467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (5))){
var inst_34405 = (state_34421[(2)]);
var state_34421__$1 = (function (){var statearr_34438 = state_34421;
(statearr_34438[(11)] = inst_34405);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34421__$1,(12),dchan);
} else {
if((state_val_34422 === (14))){
var inst_34407 = (state_34421[(8)]);
var inst_34412 = cljs.core.apply.call(null,f,inst_34407);
var state_34421__$1 = state_34421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34421__$1,(16),out,inst_34412);
} else {
if((state_val_34422 === (16))){
var inst_34414 = (state_34421[(2)]);
var state_34421__$1 = (function (){var statearr_34439 = state_34421;
(statearr_34439[(12)] = inst_34414);

return statearr_34439;
})();
var statearr_34440_34468 = state_34421__$1;
(statearr_34440_34468[(2)] = null);

(statearr_34440_34468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (10))){
var inst_34389 = (state_34421[(2)]);
var inst_34390 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34421__$1 = (function (){var statearr_34441 = state_34421;
(statearr_34441[(13)] = inst_34389);

return statearr_34441;
})();
var statearr_34442_34469 = state_34421__$1;
(statearr_34442_34469[(2)] = inst_34390);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34421__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34422 === (8))){
var inst_34403 = (state_34421[(2)]);
var state_34421__$1 = state_34421;
var statearr_34443_34470 = state_34421__$1;
(statearr_34443_34470[(2)] = inst_34403);

(statearr_34443_34470[(1)] = (5));


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
});})(c__32416__auto___34455,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32304__auto__,c__32416__auto___34455,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_34447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34447[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_34447[(1)] = (1));

return statearr_34447;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_34421){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e34448){if((e34448 instanceof Object)){
var ex__32308__auto__ = e34448;
var statearr_34449_34471 = state_34421;
(statearr_34449_34471[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34472 = state_34421;
state_34421 = G__34472;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_34421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_34421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___34455,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32418__auto__ = (function (){var statearr_34450 = f__32417__auto__.call(null);
(statearr_34450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___34455);

return statearr_34450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___34455,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34474 = [];
var len__23690__auto___34532 = arguments.length;
var i__23691__auto___34533 = (0);
while(true){
if((i__23691__auto___34533 < len__23690__auto___34532)){
args34474.push((arguments[i__23691__auto___34533]));

var G__34534 = (i__23691__auto___34533 + (1));
i__23691__auto___34533 = G__34534;
continue;
} else {
}
break;
}

var G__34476 = args34474.length;
switch (G__34476) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34474.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32416__auto___34536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___34536,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___34536,out){
return (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (7))){
var inst_34488 = (state_34508[(7)]);
var inst_34487 = (state_34508[(8)]);
var inst_34487__$1 = (state_34508[(2)]);
var inst_34488__$1 = cljs.core.nth.call(null,inst_34487__$1,(0),null);
var inst_34489 = cljs.core.nth.call(null,inst_34487__$1,(1),null);
var inst_34490 = (inst_34488__$1 == null);
var state_34508__$1 = (function (){var statearr_34510 = state_34508;
(statearr_34510[(7)] = inst_34488__$1);

(statearr_34510[(9)] = inst_34489);

(statearr_34510[(8)] = inst_34487__$1);

return statearr_34510;
})();
if(cljs.core.truth_(inst_34490)){
var statearr_34511_34537 = state_34508__$1;
(statearr_34511_34537[(1)] = (8));

} else {
var statearr_34512_34538 = state_34508__$1;
(statearr_34512_34538[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (1))){
var inst_34477 = cljs.core.vec.call(null,chs);
var inst_34478 = inst_34477;
var state_34508__$1 = (function (){var statearr_34513 = state_34508;
(statearr_34513[(10)] = inst_34478);

return statearr_34513;
})();
var statearr_34514_34539 = state_34508__$1;
(statearr_34514_34539[(2)] = null);

(statearr_34514_34539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (4))){
var inst_34478 = (state_34508[(10)]);
var state_34508__$1 = state_34508;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34508__$1,(7),inst_34478);
} else {
if((state_val_34509 === (6))){
var inst_34504 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34515_34540 = state_34508__$1;
(statearr_34515_34540[(2)] = inst_34504);

(statearr_34515_34540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (3))){
var inst_34506 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34508__$1,inst_34506);
} else {
if((state_val_34509 === (2))){
var inst_34478 = (state_34508[(10)]);
var inst_34480 = cljs.core.count.call(null,inst_34478);
var inst_34481 = (inst_34480 > (0));
var state_34508__$1 = state_34508;
if(cljs.core.truth_(inst_34481)){
var statearr_34517_34541 = state_34508__$1;
(statearr_34517_34541[(1)] = (4));

} else {
var statearr_34518_34542 = state_34508__$1;
(statearr_34518_34542[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (11))){
var inst_34478 = (state_34508[(10)]);
var inst_34497 = (state_34508[(2)]);
var tmp34516 = inst_34478;
var inst_34478__$1 = tmp34516;
var state_34508__$1 = (function (){var statearr_34519 = state_34508;
(statearr_34519[(11)] = inst_34497);

(statearr_34519[(10)] = inst_34478__$1);

return statearr_34519;
})();
var statearr_34520_34543 = state_34508__$1;
(statearr_34520_34543[(2)] = null);

(statearr_34520_34543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (9))){
var inst_34488 = (state_34508[(7)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34508__$1,(11),out,inst_34488);
} else {
if((state_val_34509 === (5))){
var inst_34502 = cljs.core.async.close_BANG_.call(null,out);
var state_34508__$1 = state_34508;
var statearr_34521_34544 = state_34508__$1;
(statearr_34521_34544[(2)] = inst_34502);

(statearr_34521_34544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (10))){
var inst_34500 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
var statearr_34522_34545 = state_34508__$1;
(statearr_34522_34545[(2)] = inst_34500);

(statearr_34522_34545[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (8))){
var inst_34478 = (state_34508[(10)]);
var inst_34488 = (state_34508[(7)]);
var inst_34489 = (state_34508[(9)]);
var inst_34487 = (state_34508[(8)]);
var inst_34492 = (function (){var cs = inst_34478;
var vec__34483 = inst_34487;
var v = inst_34488;
var c = inst_34489;
return ((function (cs,vec__34483,v,c,inst_34478,inst_34488,inst_34489,inst_34487,state_val_34509,c__32416__auto___34536,out){
return (function (p1__34473_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34473_SHARP_);
});
;})(cs,vec__34483,v,c,inst_34478,inst_34488,inst_34489,inst_34487,state_val_34509,c__32416__auto___34536,out))
})();
var inst_34493 = cljs.core.filterv.call(null,inst_34492,inst_34478);
var inst_34478__$1 = inst_34493;
var state_34508__$1 = (function (){var statearr_34523 = state_34508;
(statearr_34523[(10)] = inst_34478__$1);

return statearr_34523;
})();
var statearr_34524_34546 = state_34508__$1;
(statearr_34524_34546[(2)] = null);

(statearr_34524_34546[(1)] = (2));


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
});})(c__32416__auto___34536,out))
;
return ((function (switch__32304__auto__,c__32416__auto___34536,out){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_34528 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34528[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_34528[(1)] = (1));

return statearr_34528;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_34508){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e34529){if((e34529 instanceof Object)){
var ex__32308__auto__ = e34529;
var statearr_34530_34547 = state_34508;
(statearr_34530_34547[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34548 = state_34508;
state_34508 = G__34548;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___34536,out))
})();
var state__32418__auto__ = (function (){var statearr_34531 = f__32417__auto__.call(null);
(statearr_34531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___34536);

return statearr_34531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___34536,out))
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
var args34549 = [];
var len__23690__auto___34598 = arguments.length;
var i__23691__auto___34599 = (0);
while(true){
if((i__23691__auto___34599 < len__23690__auto___34598)){
args34549.push((arguments[i__23691__auto___34599]));

var G__34600 = (i__23691__auto___34599 + (1));
i__23691__auto___34599 = G__34600;
continue;
} else {
}
break;
}

var G__34551 = args34549.length;
switch (G__34551) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34549.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32416__auto___34602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___34602,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___34602,out){
return (function (state_34575){
var state_val_34576 = (state_34575[(1)]);
if((state_val_34576 === (7))){
var inst_34557 = (state_34575[(7)]);
var inst_34557__$1 = (state_34575[(2)]);
var inst_34558 = (inst_34557__$1 == null);
var inst_34559 = cljs.core.not.call(null,inst_34558);
var state_34575__$1 = (function (){var statearr_34577 = state_34575;
(statearr_34577[(7)] = inst_34557__$1);

return statearr_34577;
})();
if(inst_34559){
var statearr_34578_34603 = state_34575__$1;
(statearr_34578_34603[(1)] = (8));

} else {
var statearr_34579_34604 = state_34575__$1;
(statearr_34579_34604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (1))){
var inst_34552 = (0);
var state_34575__$1 = (function (){var statearr_34580 = state_34575;
(statearr_34580[(8)] = inst_34552);

return statearr_34580;
})();
var statearr_34581_34605 = state_34575__$1;
(statearr_34581_34605[(2)] = null);

(statearr_34581_34605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (4))){
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34575__$1,(7),ch);
} else {
if((state_val_34576 === (6))){
var inst_34570 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34582_34606 = state_34575__$1;
(statearr_34582_34606[(2)] = inst_34570);

(statearr_34582_34606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (3))){
var inst_34572 = (state_34575[(2)]);
var inst_34573 = cljs.core.async.close_BANG_.call(null,out);
var state_34575__$1 = (function (){var statearr_34583 = state_34575;
(statearr_34583[(9)] = inst_34572);

return statearr_34583;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34575__$1,inst_34573);
} else {
if((state_val_34576 === (2))){
var inst_34552 = (state_34575[(8)]);
var inst_34554 = (inst_34552 < n);
var state_34575__$1 = state_34575;
if(cljs.core.truth_(inst_34554)){
var statearr_34584_34607 = state_34575__$1;
(statearr_34584_34607[(1)] = (4));

} else {
var statearr_34585_34608 = state_34575__$1;
(statearr_34585_34608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (11))){
var inst_34552 = (state_34575[(8)]);
var inst_34562 = (state_34575[(2)]);
var inst_34563 = (inst_34552 + (1));
var inst_34552__$1 = inst_34563;
var state_34575__$1 = (function (){var statearr_34586 = state_34575;
(statearr_34586[(8)] = inst_34552__$1);

(statearr_34586[(10)] = inst_34562);

return statearr_34586;
})();
var statearr_34587_34609 = state_34575__$1;
(statearr_34587_34609[(2)] = null);

(statearr_34587_34609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (9))){
var state_34575__$1 = state_34575;
var statearr_34588_34610 = state_34575__$1;
(statearr_34588_34610[(2)] = null);

(statearr_34588_34610[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (5))){
var state_34575__$1 = state_34575;
var statearr_34589_34611 = state_34575__$1;
(statearr_34589_34611[(2)] = null);

(statearr_34589_34611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (10))){
var inst_34567 = (state_34575[(2)]);
var state_34575__$1 = state_34575;
var statearr_34590_34612 = state_34575__$1;
(statearr_34590_34612[(2)] = inst_34567);

(statearr_34590_34612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34576 === (8))){
var inst_34557 = (state_34575[(7)]);
var state_34575__$1 = state_34575;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34575__$1,(11),out,inst_34557);
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
});})(c__32416__auto___34602,out))
;
return ((function (switch__32304__auto__,c__32416__auto___34602,out){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_34594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34594[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_34594[(1)] = (1));

return statearr_34594;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_34575){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e34595){if((e34595 instanceof Object)){
var ex__32308__auto__ = e34595;
var statearr_34596_34613 = state_34575;
(statearr_34596_34613[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34614 = state_34575;
state_34575 = G__34614;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_34575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_34575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___34602,out))
})();
var state__32418__auto__ = (function (){var statearr_34597 = f__32417__auto__.call(null);
(statearr_34597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___34602);

return statearr_34597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___34602,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34622 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34622 = (function (map_LT_,f,ch,meta34623){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34623 = meta34623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34624,meta34623__$1){
var self__ = this;
var _34624__$1 = this;
return (new cljs.core.async.t_cljs$core$async34622(self__.map_LT_,self__.f,self__.ch,meta34623__$1));
});

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34624){
var self__ = this;
var _34624__$1 = this;
return self__.meta34623;
});

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34625 = (function (map_LT_,f,ch,meta34623,_,fn1,meta34626){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34623 = meta34623;
this._ = _;
this.fn1 = fn1;
this.meta34626 = meta34626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34627,meta34626__$1){
var self__ = this;
var _34627__$1 = this;
return (new cljs.core.async.t_cljs$core$async34625(self__.map_LT_,self__.f,self__.ch,self__.meta34623,self__._,self__.fn1,meta34626__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34627){
var self__ = this;
var _34627__$1 = this;
return self__.meta34626;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34625.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34625.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34615_SHARP_){
return f1.call(null,(((p1__34615_SHARP_ == null))?null:self__.f.call(null,p1__34615_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34625.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34623","meta34623",1188021236,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34622","cljs.core.async/t_cljs$core$async34622",1976953668,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34626","meta34626",-1607157781,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34625";

cljs.core.async.t_cljs$core$async34625.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async34625");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34625 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34625(map_LT___$1,f__$1,ch__$1,meta34623__$1,___$2,fn1__$1,meta34626){
return (new cljs.core.async.t_cljs$core$async34625(map_LT___$1,f__$1,ch__$1,meta34623__$1,___$2,fn1__$1,meta34626));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34625(self__.map_LT_,self__.f,self__.ch,self__.meta34623,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__22603__auto__ = ret;
if(cljs.core.truth_(and__22603__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__22603__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34622.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34623","meta34623",1188021236,null)], null);
});

cljs.core.async.t_cljs$core$async34622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34622";

cljs.core.async.t_cljs$core$async34622.cljs$lang$ctorPrWriter = (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async34622");
});

cljs.core.async.__GT_t_cljs$core$async34622 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34622(map_LT___$1,f__$1,ch__$1,meta34623){
return (new cljs.core.async.t_cljs$core$async34622(map_LT___$1,f__$1,ch__$1,meta34623));
});

}

return (new cljs.core.async.t_cljs$core$async34622(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34631 = (function (map_GT_,f,ch,meta34632){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34632 = meta34632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34633,meta34632__$1){
var self__ = this;
var _34633__$1 = this;
return (new cljs.core.async.t_cljs$core$async34631(self__.map_GT_,self__.f,self__.ch,meta34632__$1));
});

cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34633){
var self__ = this;
var _34633__$1 = this;
return self__.meta34632;
});

cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34632","meta34632",769517592,null)], null);
});

cljs.core.async.t_cljs$core$async34631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34631";

cljs.core.async.t_cljs$core$async34631.cljs$lang$ctorPrWriter = (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async34631");
});

cljs.core.async.__GT_t_cljs$core$async34631 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34631(map_GT___$1,f__$1,ch__$1,meta34632){
return (new cljs.core.async.t_cljs$core$async34631(map_GT___$1,f__$1,ch__$1,meta34632));
});

}

return (new cljs.core.async.t_cljs$core$async34631(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34637 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34637 = (function (filter_GT_,p,ch,meta34638){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34638 = meta34638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34639,meta34638__$1){
var self__ = this;
var _34639__$1 = this;
return (new cljs.core.async.t_cljs$core$async34637(self__.filter_GT_,self__.p,self__.ch,meta34638__$1));
});

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34639){
var self__ = this;
var _34639__$1 = this;
return self__.meta34638;
});

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34637.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34638","meta34638",1276971892,null)], null);
});

cljs.core.async.t_cljs$core$async34637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34637";

cljs.core.async.t_cljs$core$async34637.cljs$lang$ctorPrWriter = (function (this__23221__auto__,writer__23222__auto__,opt__23223__auto__){
return cljs.core._write.call(null,writer__23222__auto__,"cljs.core.async/t_cljs$core$async34637");
});

cljs.core.async.__GT_t_cljs$core$async34637 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34637(filter_GT___$1,p__$1,ch__$1,meta34638){
return (new cljs.core.async.t_cljs$core$async34637(filter_GT___$1,p__$1,ch__$1,meta34638));
});

}

return (new cljs.core.async.t_cljs$core$async34637(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34640 = [];
var len__23690__auto___34684 = arguments.length;
var i__23691__auto___34685 = (0);
while(true){
if((i__23691__auto___34685 < len__23690__auto___34684)){
args34640.push((arguments[i__23691__auto___34685]));

var G__34686 = (i__23691__auto___34685 + (1));
i__23691__auto___34685 = G__34686;
continue;
} else {
}
break;
}

var G__34642 = args34640.length;
switch (G__34642) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34640.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32416__auto___34688 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___34688,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___34688,out){
return (function (state_34663){
var state_val_34664 = (state_34663[(1)]);
if((state_val_34664 === (7))){
var inst_34659 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
var statearr_34665_34689 = state_34663__$1;
(statearr_34665_34689[(2)] = inst_34659);

(statearr_34665_34689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (1))){
var state_34663__$1 = state_34663;
var statearr_34666_34690 = state_34663__$1;
(statearr_34666_34690[(2)] = null);

(statearr_34666_34690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (4))){
var inst_34645 = (state_34663[(7)]);
var inst_34645__$1 = (state_34663[(2)]);
var inst_34646 = (inst_34645__$1 == null);
var state_34663__$1 = (function (){var statearr_34667 = state_34663;
(statearr_34667[(7)] = inst_34645__$1);

return statearr_34667;
})();
if(cljs.core.truth_(inst_34646)){
var statearr_34668_34691 = state_34663__$1;
(statearr_34668_34691[(1)] = (5));

} else {
var statearr_34669_34692 = state_34663__$1;
(statearr_34669_34692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (6))){
var inst_34645 = (state_34663[(7)]);
var inst_34650 = p.call(null,inst_34645);
var state_34663__$1 = state_34663;
if(cljs.core.truth_(inst_34650)){
var statearr_34670_34693 = state_34663__$1;
(statearr_34670_34693[(1)] = (8));

} else {
var statearr_34671_34694 = state_34663__$1;
(statearr_34671_34694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (3))){
var inst_34661 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34663__$1,inst_34661);
} else {
if((state_val_34664 === (2))){
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34663__$1,(4),ch);
} else {
if((state_val_34664 === (11))){
var inst_34653 = (state_34663[(2)]);
var state_34663__$1 = state_34663;
var statearr_34672_34695 = state_34663__$1;
(statearr_34672_34695[(2)] = inst_34653);

(statearr_34672_34695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (9))){
var state_34663__$1 = state_34663;
var statearr_34673_34696 = state_34663__$1;
(statearr_34673_34696[(2)] = null);

(statearr_34673_34696[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (5))){
var inst_34648 = cljs.core.async.close_BANG_.call(null,out);
var state_34663__$1 = state_34663;
var statearr_34674_34697 = state_34663__$1;
(statearr_34674_34697[(2)] = inst_34648);

(statearr_34674_34697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (10))){
var inst_34656 = (state_34663[(2)]);
var state_34663__$1 = (function (){var statearr_34675 = state_34663;
(statearr_34675[(8)] = inst_34656);

return statearr_34675;
})();
var statearr_34676_34698 = state_34663__$1;
(statearr_34676_34698[(2)] = null);

(statearr_34676_34698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34664 === (8))){
var inst_34645 = (state_34663[(7)]);
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34663__$1,(11),out,inst_34645);
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
});})(c__32416__auto___34688,out))
;
return ((function (switch__32304__auto__,c__32416__auto___34688,out){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_34680 = [null,null,null,null,null,null,null,null,null];
(statearr_34680[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_34680[(1)] = (1));

return statearr_34680;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_34663){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e34681){if((e34681 instanceof Object)){
var ex__32308__auto__ = e34681;
var statearr_34682_34699 = state_34663;
(statearr_34682_34699[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34681;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34700 = state_34663;
state_34663 = G__34700;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_34663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_34663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___34688,out))
})();
var state__32418__auto__ = (function (){var statearr_34683 = f__32417__auto__.call(null);
(statearr_34683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___34688);

return statearr_34683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___34688,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34701 = [];
var len__23690__auto___34704 = arguments.length;
var i__23691__auto___34705 = (0);
while(true){
if((i__23691__auto___34705 < len__23690__auto___34704)){
args34701.push((arguments[i__23691__auto___34705]));

var G__34706 = (i__23691__auto___34705 + (1));
i__23691__auto___34705 = G__34706;
continue;
} else {
}
break;
}

var G__34703 = args34701.length;
switch (G__34703) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34701.length)].join('')));

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
var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__){
return (function (state_34873){
var state_val_34874 = (state_34873[(1)]);
if((state_val_34874 === (7))){
var inst_34869 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34875_34916 = state_34873__$1;
(statearr_34875_34916[(2)] = inst_34869);

(statearr_34875_34916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (20))){
var inst_34839 = (state_34873[(7)]);
var inst_34850 = (state_34873[(2)]);
var inst_34851 = cljs.core.next.call(null,inst_34839);
var inst_34825 = inst_34851;
var inst_34826 = null;
var inst_34827 = (0);
var inst_34828 = (0);
var state_34873__$1 = (function (){var statearr_34876 = state_34873;
(statearr_34876[(8)] = inst_34826);

(statearr_34876[(9)] = inst_34828);

(statearr_34876[(10)] = inst_34850);

(statearr_34876[(11)] = inst_34827);

(statearr_34876[(12)] = inst_34825);

return statearr_34876;
})();
var statearr_34877_34917 = state_34873__$1;
(statearr_34877_34917[(2)] = null);

(statearr_34877_34917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (1))){
var state_34873__$1 = state_34873;
var statearr_34878_34918 = state_34873__$1;
(statearr_34878_34918[(2)] = null);

(statearr_34878_34918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (4))){
var inst_34814 = (state_34873[(13)]);
var inst_34814__$1 = (state_34873[(2)]);
var inst_34815 = (inst_34814__$1 == null);
var state_34873__$1 = (function (){var statearr_34879 = state_34873;
(statearr_34879[(13)] = inst_34814__$1);

return statearr_34879;
})();
if(cljs.core.truth_(inst_34815)){
var statearr_34880_34919 = state_34873__$1;
(statearr_34880_34919[(1)] = (5));

} else {
var statearr_34881_34920 = state_34873__$1;
(statearr_34881_34920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (15))){
var state_34873__$1 = state_34873;
var statearr_34885_34921 = state_34873__$1;
(statearr_34885_34921[(2)] = null);

(statearr_34885_34921[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (21))){
var state_34873__$1 = state_34873;
var statearr_34886_34922 = state_34873__$1;
(statearr_34886_34922[(2)] = null);

(statearr_34886_34922[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (13))){
var inst_34826 = (state_34873[(8)]);
var inst_34828 = (state_34873[(9)]);
var inst_34827 = (state_34873[(11)]);
var inst_34825 = (state_34873[(12)]);
var inst_34835 = (state_34873[(2)]);
var inst_34836 = (inst_34828 + (1));
var tmp34882 = inst_34826;
var tmp34883 = inst_34827;
var tmp34884 = inst_34825;
var inst_34825__$1 = tmp34884;
var inst_34826__$1 = tmp34882;
var inst_34827__$1 = tmp34883;
var inst_34828__$1 = inst_34836;
var state_34873__$1 = (function (){var statearr_34887 = state_34873;
(statearr_34887[(8)] = inst_34826__$1);

(statearr_34887[(14)] = inst_34835);

(statearr_34887[(9)] = inst_34828__$1);

(statearr_34887[(11)] = inst_34827__$1);

(statearr_34887[(12)] = inst_34825__$1);

return statearr_34887;
})();
var statearr_34888_34923 = state_34873__$1;
(statearr_34888_34923[(2)] = null);

(statearr_34888_34923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (22))){
var state_34873__$1 = state_34873;
var statearr_34889_34924 = state_34873__$1;
(statearr_34889_34924[(2)] = null);

(statearr_34889_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (6))){
var inst_34814 = (state_34873[(13)]);
var inst_34823 = f.call(null,inst_34814);
var inst_34824 = cljs.core.seq.call(null,inst_34823);
var inst_34825 = inst_34824;
var inst_34826 = null;
var inst_34827 = (0);
var inst_34828 = (0);
var state_34873__$1 = (function (){var statearr_34890 = state_34873;
(statearr_34890[(8)] = inst_34826);

(statearr_34890[(9)] = inst_34828);

(statearr_34890[(11)] = inst_34827);

(statearr_34890[(12)] = inst_34825);

return statearr_34890;
})();
var statearr_34891_34925 = state_34873__$1;
(statearr_34891_34925[(2)] = null);

(statearr_34891_34925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (17))){
var inst_34839 = (state_34873[(7)]);
var inst_34843 = cljs.core.chunk_first.call(null,inst_34839);
var inst_34844 = cljs.core.chunk_rest.call(null,inst_34839);
var inst_34845 = cljs.core.count.call(null,inst_34843);
var inst_34825 = inst_34844;
var inst_34826 = inst_34843;
var inst_34827 = inst_34845;
var inst_34828 = (0);
var state_34873__$1 = (function (){var statearr_34892 = state_34873;
(statearr_34892[(8)] = inst_34826);

(statearr_34892[(9)] = inst_34828);

(statearr_34892[(11)] = inst_34827);

(statearr_34892[(12)] = inst_34825);

return statearr_34892;
})();
var statearr_34893_34926 = state_34873__$1;
(statearr_34893_34926[(2)] = null);

(statearr_34893_34926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (3))){
var inst_34871 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34873__$1,inst_34871);
} else {
if((state_val_34874 === (12))){
var inst_34859 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34894_34927 = state_34873__$1;
(statearr_34894_34927[(2)] = inst_34859);

(statearr_34894_34927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (2))){
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34873__$1,(4),in$);
} else {
if((state_val_34874 === (23))){
var inst_34867 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34895_34928 = state_34873__$1;
(statearr_34895_34928[(2)] = inst_34867);

(statearr_34895_34928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (19))){
var inst_34854 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34896_34929 = state_34873__$1;
(statearr_34896_34929[(2)] = inst_34854);

(statearr_34896_34929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (11))){
var inst_34825 = (state_34873[(12)]);
var inst_34839 = (state_34873[(7)]);
var inst_34839__$1 = cljs.core.seq.call(null,inst_34825);
var state_34873__$1 = (function (){var statearr_34897 = state_34873;
(statearr_34897[(7)] = inst_34839__$1);

return statearr_34897;
})();
if(inst_34839__$1){
var statearr_34898_34930 = state_34873__$1;
(statearr_34898_34930[(1)] = (14));

} else {
var statearr_34899_34931 = state_34873__$1;
(statearr_34899_34931[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (9))){
var inst_34861 = (state_34873[(2)]);
var inst_34862 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34873__$1 = (function (){var statearr_34900 = state_34873;
(statearr_34900[(15)] = inst_34861);

return statearr_34900;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_34901_34932 = state_34873__$1;
(statearr_34901_34932[(1)] = (21));

} else {
var statearr_34902_34933 = state_34873__$1;
(statearr_34902_34933[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (5))){
var inst_34817 = cljs.core.async.close_BANG_.call(null,out);
var state_34873__$1 = state_34873;
var statearr_34903_34934 = state_34873__$1;
(statearr_34903_34934[(2)] = inst_34817);

(statearr_34903_34934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (14))){
var inst_34839 = (state_34873[(7)]);
var inst_34841 = cljs.core.chunked_seq_QMARK_.call(null,inst_34839);
var state_34873__$1 = state_34873;
if(inst_34841){
var statearr_34904_34935 = state_34873__$1;
(statearr_34904_34935[(1)] = (17));

} else {
var statearr_34905_34936 = state_34873__$1;
(statearr_34905_34936[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (16))){
var inst_34857 = (state_34873[(2)]);
var state_34873__$1 = state_34873;
var statearr_34906_34937 = state_34873__$1;
(statearr_34906_34937[(2)] = inst_34857);

(statearr_34906_34937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34874 === (10))){
var inst_34826 = (state_34873[(8)]);
var inst_34828 = (state_34873[(9)]);
var inst_34833 = cljs.core._nth.call(null,inst_34826,inst_34828);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34873__$1,(13),out,inst_34833);
} else {
if((state_val_34874 === (18))){
var inst_34839 = (state_34873[(7)]);
var inst_34848 = cljs.core.first.call(null,inst_34839);
var state_34873__$1 = state_34873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34873__$1,(20),out,inst_34848);
} else {
if((state_val_34874 === (8))){
var inst_34828 = (state_34873[(9)]);
var inst_34827 = (state_34873[(11)]);
var inst_34830 = (inst_34828 < inst_34827);
var inst_34831 = inst_34830;
var state_34873__$1 = state_34873;
if(cljs.core.truth_(inst_34831)){
var statearr_34907_34938 = state_34873__$1;
(statearr_34907_34938[(1)] = (10));

} else {
var statearr_34908_34939 = state_34873__$1;
(statearr_34908_34939[(1)] = (11));

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
});})(c__32416__auto__))
;
return ((function (switch__32304__auto__,c__32416__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32305__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32305__auto____0 = (function (){
var statearr_34912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34912[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32305__auto__);

(statearr_34912[(1)] = (1));

return statearr_34912;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32305__auto____1 = (function (state_34873){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e34913){if((e34913 instanceof Object)){
var ex__32308__auto__ = e34913;
var statearr_34914_34940 = state_34873;
(statearr_34914_34940[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_34873;
state_34873 = G__34941;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32305__auto__ = function(state_34873){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32305__auto____1.call(this,state_34873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32305__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32305__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__))
})();
var state__32418__auto__ = (function (){var statearr_34915 = f__32417__auto__.call(null);
(statearr_34915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_34915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__))
);

return c__32416__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34942 = [];
var len__23690__auto___34945 = arguments.length;
var i__23691__auto___34946 = (0);
while(true){
if((i__23691__auto___34946 < len__23690__auto___34945)){
args34942.push((arguments[i__23691__auto___34946]));

var G__34947 = (i__23691__auto___34946 + (1));
i__23691__auto___34946 = G__34947;
continue;
} else {
}
break;
}

var G__34944 = args34942.length;
switch (G__34944) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34942.length)].join('')));

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
var args34949 = [];
var len__23690__auto___34952 = arguments.length;
var i__23691__auto___34953 = (0);
while(true){
if((i__23691__auto___34953 < len__23690__auto___34952)){
args34949.push((arguments[i__23691__auto___34953]));

var G__34954 = (i__23691__auto___34953 + (1));
i__23691__auto___34953 = G__34954;
continue;
} else {
}
break;
}

var G__34951 = args34949.length;
switch (G__34951) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34949.length)].join('')));

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
var args34956 = [];
var len__23690__auto___35007 = arguments.length;
var i__23691__auto___35008 = (0);
while(true){
if((i__23691__auto___35008 < len__23690__auto___35007)){
args34956.push((arguments[i__23691__auto___35008]));

var G__35009 = (i__23691__auto___35008 + (1));
i__23691__auto___35008 = G__35009;
continue;
} else {
}
break;
}

var G__34958 = args34956.length;
switch (G__34958) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34956.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32416__auto___35011 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___35011,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___35011,out){
return (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (7))){
var inst_34977 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34984_35012 = state_34982__$1;
(statearr_34984_35012[(2)] = inst_34977);

(statearr_34984_35012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var inst_34959 = null;
var state_34982__$1 = (function (){var statearr_34985 = state_34982;
(statearr_34985[(7)] = inst_34959);

return statearr_34985;
})();
var statearr_34986_35013 = state_34982__$1;
(statearr_34986_35013[(2)] = null);

(statearr_34986_35013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34962 = (state_34982[(8)]);
var inst_34962__$1 = (state_34982[(2)]);
var inst_34963 = (inst_34962__$1 == null);
var inst_34964 = cljs.core.not.call(null,inst_34963);
var state_34982__$1 = (function (){var statearr_34987 = state_34982;
(statearr_34987[(8)] = inst_34962__$1);

return statearr_34987;
})();
if(inst_34964){
var statearr_34988_35014 = state_34982__$1;
(statearr_34988_35014[(1)] = (5));

} else {
var statearr_34989_35015 = state_34982__$1;
(statearr_34989_35015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
var state_34982__$1 = state_34982;
var statearr_34990_35016 = state_34982__$1;
(statearr_34990_35016[(2)] = null);

(statearr_34990_35016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34979 = (state_34982[(2)]);
var inst_34980 = cljs.core.async.close_BANG_.call(null,out);
var state_34982__$1 = (function (){var statearr_34991 = state_34982;
(statearr_34991[(9)] = inst_34979);

return statearr_34991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34982__$1,inst_34980);
} else {
if((state_val_34983 === (2))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(4),ch);
} else {
if((state_val_34983 === (11))){
var inst_34962 = (state_34982[(8)]);
var inst_34971 = (state_34982[(2)]);
var inst_34959 = inst_34962;
var state_34982__$1 = (function (){var statearr_34992 = state_34982;
(statearr_34992[(10)] = inst_34971);

(statearr_34992[(7)] = inst_34959);

return statearr_34992;
})();
var statearr_34993_35017 = state_34982__$1;
(statearr_34993_35017[(2)] = null);

(statearr_34993_35017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var inst_34962 = (state_34982[(8)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34982__$1,(11),out,inst_34962);
} else {
if((state_val_34983 === (5))){
var inst_34962 = (state_34982[(8)]);
var inst_34959 = (state_34982[(7)]);
var inst_34966 = cljs.core._EQ_.call(null,inst_34962,inst_34959);
var state_34982__$1 = state_34982;
if(inst_34966){
var statearr_34995_35018 = state_34982__$1;
(statearr_34995_35018[(1)] = (8));

} else {
var statearr_34996_35019 = state_34982__$1;
(statearr_34996_35019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34974 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34997_35020 = state_34982__$1;
(statearr_34997_35020[(2)] = inst_34974);

(statearr_34997_35020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34959 = (state_34982[(7)]);
var tmp34994 = inst_34959;
var inst_34959__$1 = tmp34994;
var state_34982__$1 = (function (){var statearr_34998 = state_34982;
(statearr_34998[(7)] = inst_34959__$1);

return statearr_34998;
})();
var statearr_34999_35021 = state_34982__$1;
(statearr_34999_35021[(2)] = null);

(statearr_34999_35021[(1)] = (2));


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
});})(c__32416__auto___35011,out))
;
return ((function (switch__32304__auto__,c__32416__auto___35011,out){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_35003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35003[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_35003[(1)] = (1));

return statearr_35003;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_34982){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_34982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e35004){if((e35004 instanceof Object)){
var ex__32308__auto__ = e35004;
var statearr_35005_35022 = state_34982;
(statearr_35005_35022[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35023 = state_34982;
state_34982 = G__35023;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___35011,out))
})();
var state__32418__auto__ = (function (){var statearr_35006 = f__32417__auto__.call(null);
(statearr_35006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___35011);

return statearr_35006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___35011,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args35024 = [];
var len__23690__auto___35094 = arguments.length;
var i__23691__auto___35095 = (0);
while(true){
if((i__23691__auto___35095 < len__23690__auto___35094)){
args35024.push((arguments[i__23691__auto___35095]));

var G__35096 = (i__23691__auto___35095 + (1));
i__23691__auto___35095 = G__35096;
continue;
} else {
}
break;
}

var G__35026 = args35024.length;
switch (G__35026) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35024.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32416__auto___35098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___35098,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___35098,out){
return (function (state_35064){
var state_val_35065 = (state_35064[(1)]);
if((state_val_35065 === (7))){
var inst_35060 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
var statearr_35066_35099 = state_35064__$1;
(statearr_35066_35099[(2)] = inst_35060);

(statearr_35066_35099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (1))){
var inst_35027 = (new Array(n));
var inst_35028 = inst_35027;
var inst_35029 = (0);
var state_35064__$1 = (function (){var statearr_35067 = state_35064;
(statearr_35067[(7)] = inst_35029);

(statearr_35067[(8)] = inst_35028);

return statearr_35067;
})();
var statearr_35068_35100 = state_35064__$1;
(statearr_35068_35100[(2)] = null);

(statearr_35068_35100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (4))){
var inst_35032 = (state_35064[(9)]);
var inst_35032__$1 = (state_35064[(2)]);
var inst_35033 = (inst_35032__$1 == null);
var inst_35034 = cljs.core.not.call(null,inst_35033);
var state_35064__$1 = (function (){var statearr_35069 = state_35064;
(statearr_35069[(9)] = inst_35032__$1);

return statearr_35069;
})();
if(inst_35034){
var statearr_35070_35101 = state_35064__$1;
(statearr_35070_35101[(1)] = (5));

} else {
var statearr_35071_35102 = state_35064__$1;
(statearr_35071_35102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (15))){
var inst_35054 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
var statearr_35072_35103 = state_35064__$1;
(statearr_35072_35103[(2)] = inst_35054);

(statearr_35072_35103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (13))){
var state_35064__$1 = state_35064;
var statearr_35073_35104 = state_35064__$1;
(statearr_35073_35104[(2)] = null);

(statearr_35073_35104[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (6))){
var inst_35029 = (state_35064[(7)]);
var inst_35050 = (inst_35029 > (0));
var state_35064__$1 = state_35064;
if(cljs.core.truth_(inst_35050)){
var statearr_35074_35105 = state_35064__$1;
(statearr_35074_35105[(1)] = (12));

} else {
var statearr_35075_35106 = state_35064__$1;
(statearr_35075_35106[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (3))){
var inst_35062 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35064__$1,inst_35062);
} else {
if((state_val_35065 === (12))){
var inst_35028 = (state_35064[(8)]);
var inst_35052 = cljs.core.vec.call(null,inst_35028);
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35064__$1,(15),out,inst_35052);
} else {
if((state_val_35065 === (2))){
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35064__$1,(4),ch);
} else {
if((state_val_35065 === (11))){
var inst_35044 = (state_35064[(2)]);
var inst_35045 = (new Array(n));
var inst_35028 = inst_35045;
var inst_35029 = (0);
var state_35064__$1 = (function (){var statearr_35076 = state_35064;
(statearr_35076[(10)] = inst_35044);

(statearr_35076[(7)] = inst_35029);

(statearr_35076[(8)] = inst_35028);

return statearr_35076;
})();
var statearr_35077_35107 = state_35064__$1;
(statearr_35077_35107[(2)] = null);

(statearr_35077_35107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (9))){
var inst_35028 = (state_35064[(8)]);
var inst_35042 = cljs.core.vec.call(null,inst_35028);
var state_35064__$1 = state_35064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35064__$1,(11),out,inst_35042);
} else {
if((state_val_35065 === (5))){
var inst_35037 = (state_35064[(11)]);
var inst_35032 = (state_35064[(9)]);
var inst_35029 = (state_35064[(7)]);
var inst_35028 = (state_35064[(8)]);
var inst_35036 = (inst_35028[inst_35029] = inst_35032);
var inst_35037__$1 = (inst_35029 + (1));
var inst_35038 = (inst_35037__$1 < n);
var state_35064__$1 = (function (){var statearr_35078 = state_35064;
(statearr_35078[(11)] = inst_35037__$1);

(statearr_35078[(12)] = inst_35036);

return statearr_35078;
})();
if(cljs.core.truth_(inst_35038)){
var statearr_35079_35108 = state_35064__$1;
(statearr_35079_35108[(1)] = (8));

} else {
var statearr_35080_35109 = state_35064__$1;
(statearr_35080_35109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (14))){
var inst_35057 = (state_35064[(2)]);
var inst_35058 = cljs.core.async.close_BANG_.call(null,out);
var state_35064__$1 = (function (){var statearr_35082 = state_35064;
(statearr_35082[(13)] = inst_35057);

return statearr_35082;
})();
var statearr_35083_35110 = state_35064__$1;
(statearr_35083_35110[(2)] = inst_35058);

(statearr_35083_35110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (10))){
var inst_35048 = (state_35064[(2)]);
var state_35064__$1 = state_35064;
var statearr_35084_35111 = state_35064__$1;
(statearr_35084_35111[(2)] = inst_35048);

(statearr_35084_35111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35065 === (8))){
var inst_35037 = (state_35064[(11)]);
var inst_35028 = (state_35064[(8)]);
var tmp35081 = inst_35028;
var inst_35028__$1 = tmp35081;
var inst_35029 = inst_35037;
var state_35064__$1 = (function (){var statearr_35085 = state_35064;
(statearr_35085[(7)] = inst_35029);

(statearr_35085[(8)] = inst_35028__$1);

return statearr_35085;
})();
var statearr_35086_35112 = state_35064__$1;
(statearr_35086_35112[(2)] = null);

(statearr_35086_35112[(1)] = (2));


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
});})(c__32416__auto___35098,out))
;
return ((function (switch__32304__auto__,c__32416__auto___35098,out){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_35090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35090[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_35090[(1)] = (1));

return statearr_35090;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_35064){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_35064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e35091){if((e35091 instanceof Object)){
var ex__32308__auto__ = e35091;
var statearr_35092_35113 = state_35064;
(statearr_35092_35113[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35114 = state_35064;
state_35064 = G__35114;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_35064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_35064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___35098,out))
})();
var state__32418__auto__ = (function (){var statearr_35093 = f__32417__auto__.call(null);
(statearr_35093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___35098);

return statearr_35093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___35098,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args35115 = [];
var len__23690__auto___35189 = arguments.length;
var i__23691__auto___35190 = (0);
while(true){
if((i__23691__auto___35190 < len__23690__auto___35189)){
args35115.push((arguments[i__23691__auto___35190]));

var G__35191 = (i__23691__auto___35190 + (1));
i__23691__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var G__35117 = args35115.length;
switch (G__35117) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35115.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32416__auto___35193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___35193,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___35193,out){
return (function (state_35159){
var state_val_35160 = (state_35159[(1)]);
if((state_val_35160 === (7))){
var inst_35155 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35161_35194 = state_35159__$1;
(statearr_35161_35194[(2)] = inst_35155);

(statearr_35161_35194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (1))){
var inst_35118 = [];
var inst_35119 = inst_35118;
var inst_35120 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35159__$1 = (function (){var statearr_35162 = state_35159;
(statearr_35162[(7)] = inst_35120);

(statearr_35162[(8)] = inst_35119);

return statearr_35162;
})();
var statearr_35163_35195 = state_35159__$1;
(statearr_35163_35195[(2)] = null);

(statearr_35163_35195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (4))){
var inst_35123 = (state_35159[(9)]);
var inst_35123__$1 = (state_35159[(2)]);
var inst_35124 = (inst_35123__$1 == null);
var inst_35125 = cljs.core.not.call(null,inst_35124);
var state_35159__$1 = (function (){var statearr_35164 = state_35159;
(statearr_35164[(9)] = inst_35123__$1);

return statearr_35164;
})();
if(inst_35125){
var statearr_35165_35196 = state_35159__$1;
(statearr_35165_35196[(1)] = (5));

} else {
var statearr_35166_35197 = state_35159__$1;
(statearr_35166_35197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (15))){
var inst_35149 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35167_35198 = state_35159__$1;
(statearr_35167_35198[(2)] = inst_35149);

(statearr_35167_35198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (13))){
var state_35159__$1 = state_35159;
var statearr_35168_35199 = state_35159__$1;
(statearr_35168_35199[(2)] = null);

(statearr_35168_35199[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (6))){
var inst_35119 = (state_35159[(8)]);
var inst_35144 = inst_35119.length;
var inst_35145 = (inst_35144 > (0));
var state_35159__$1 = state_35159;
if(cljs.core.truth_(inst_35145)){
var statearr_35169_35200 = state_35159__$1;
(statearr_35169_35200[(1)] = (12));

} else {
var statearr_35170_35201 = state_35159__$1;
(statearr_35170_35201[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (3))){
var inst_35157 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35159__$1,inst_35157);
} else {
if((state_val_35160 === (12))){
var inst_35119 = (state_35159[(8)]);
var inst_35147 = cljs.core.vec.call(null,inst_35119);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35159__$1,(15),out,inst_35147);
} else {
if((state_val_35160 === (2))){
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35159__$1,(4),ch);
} else {
if((state_val_35160 === (11))){
var inst_35123 = (state_35159[(9)]);
var inst_35127 = (state_35159[(10)]);
var inst_35137 = (state_35159[(2)]);
var inst_35138 = [];
var inst_35139 = inst_35138.push(inst_35123);
var inst_35119 = inst_35138;
var inst_35120 = inst_35127;
var state_35159__$1 = (function (){var statearr_35171 = state_35159;
(statearr_35171[(11)] = inst_35139);

(statearr_35171[(7)] = inst_35120);

(statearr_35171[(8)] = inst_35119);

(statearr_35171[(12)] = inst_35137);

return statearr_35171;
})();
var statearr_35172_35202 = state_35159__$1;
(statearr_35172_35202[(2)] = null);

(statearr_35172_35202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (9))){
var inst_35119 = (state_35159[(8)]);
var inst_35135 = cljs.core.vec.call(null,inst_35119);
var state_35159__$1 = state_35159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35159__$1,(11),out,inst_35135);
} else {
if((state_val_35160 === (5))){
var inst_35123 = (state_35159[(9)]);
var inst_35120 = (state_35159[(7)]);
var inst_35127 = (state_35159[(10)]);
var inst_35127__$1 = f.call(null,inst_35123);
var inst_35128 = cljs.core._EQ_.call(null,inst_35127__$1,inst_35120);
var inst_35129 = cljs.core.keyword_identical_QMARK_.call(null,inst_35120,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35130 = (inst_35128) || (inst_35129);
var state_35159__$1 = (function (){var statearr_35173 = state_35159;
(statearr_35173[(10)] = inst_35127__$1);

return statearr_35173;
})();
if(cljs.core.truth_(inst_35130)){
var statearr_35174_35203 = state_35159__$1;
(statearr_35174_35203[(1)] = (8));

} else {
var statearr_35175_35204 = state_35159__$1;
(statearr_35175_35204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (14))){
var inst_35152 = (state_35159[(2)]);
var inst_35153 = cljs.core.async.close_BANG_.call(null,out);
var state_35159__$1 = (function (){var statearr_35177 = state_35159;
(statearr_35177[(13)] = inst_35152);

return statearr_35177;
})();
var statearr_35178_35205 = state_35159__$1;
(statearr_35178_35205[(2)] = inst_35153);

(statearr_35178_35205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (10))){
var inst_35142 = (state_35159[(2)]);
var state_35159__$1 = state_35159;
var statearr_35179_35206 = state_35159__$1;
(statearr_35179_35206[(2)] = inst_35142);

(statearr_35179_35206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35160 === (8))){
var inst_35123 = (state_35159[(9)]);
var inst_35127 = (state_35159[(10)]);
var inst_35119 = (state_35159[(8)]);
var inst_35132 = inst_35119.push(inst_35123);
var tmp35176 = inst_35119;
var inst_35119__$1 = tmp35176;
var inst_35120 = inst_35127;
var state_35159__$1 = (function (){var statearr_35180 = state_35159;
(statearr_35180[(7)] = inst_35120);

(statearr_35180[(8)] = inst_35119__$1);

(statearr_35180[(14)] = inst_35132);

return statearr_35180;
})();
var statearr_35181_35207 = state_35159__$1;
(statearr_35181_35207[(2)] = null);

(statearr_35181_35207[(1)] = (2));


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
});})(c__32416__auto___35193,out))
;
return ((function (switch__32304__auto__,c__32416__auto___35193,out){
return (function() {
var cljs$core$async$state_machine__32305__auto__ = null;
var cljs$core$async$state_machine__32305__auto____0 = (function (){
var statearr_35185 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35185[(0)] = cljs$core$async$state_machine__32305__auto__);

(statearr_35185[(1)] = (1));

return statearr_35185;
});
var cljs$core$async$state_machine__32305__auto____1 = (function (state_35159){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_35159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e35186){if((e35186 instanceof Object)){
var ex__32308__auto__ = e35186;
var statearr_35187_35208 = state_35159;
(statearr_35187_35208[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35209 = state_35159;
state_35159 = G__35209;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
cljs$core$async$state_machine__32305__auto__ = function(state_35159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32305__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32305__auto____1.call(this,state_35159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32305__auto____0;
cljs$core$async$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32305__auto____1;
return cljs$core$async$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___35193,out))
})();
var state__32418__auto__ = (function (){var statearr_35188 = f__32417__auto__.call(null);
(statearr_35188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___35193);

return statearr_35188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___35193,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1465451161895