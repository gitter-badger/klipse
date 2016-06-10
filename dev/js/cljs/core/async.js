// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14723 = [];
var len__7296__auto___14729 = arguments.length;
var i__7297__auto___14730 = (0);
while(true){
if((i__7297__auto___14730 < len__7296__auto___14729)){
args14723.push((arguments[i__7297__auto___14730]));

var G__14732 = (i__7297__auto___14730 + (1));
i__7297__auto___14730 = G__14732;
continue;
} else {
}
break;
}

var G__14725 = args14723.length;
switch (G__14725) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14723.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14726 = (function (f,blockable,meta14727){
this.f = f;
this.blockable = blockable;
this.meta14727 = meta14727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14728,meta14727__$1){
var self__ = this;
var _14728__$1 = this;
return (new cljs.core.async.t_cljs$core$async14726(self__.f,self__.blockable,meta14727__$1));
});

cljs.core.async.t_cljs$core$async14726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14728){
var self__ = this;
var _14728__$1 = this;
return self__.meta14727;
});

cljs.core.async.t_cljs$core$async14726.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14727], null);
});

cljs.core.async.t_cljs$core$async14726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14726";

cljs.core.async.t_cljs$core$async14726.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async14726");
});

cljs.core.async.__GT_t_cljs$core$async14726 = (function cljs$core$async$__GT_t_cljs$core$async14726(f__$1,blockable__$1,meta14727){
return (new cljs.core.async.t_cljs$core$async14726(f__$1,blockable__$1,meta14727));
});

}

return (new cljs.core.async.t_cljs$core$async14726(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args14742 = [];
var len__7296__auto___14761 = arguments.length;
var i__7297__auto___14762 = (0);
while(true){
if((i__7297__auto___14762 < len__7296__auto___14761)){
args14742.push((arguments[i__7297__auto___14762]));

var G__14763 = (i__7297__auto___14762 + (1));
i__7297__auto___14762 = G__14763;
continue;
} else {
}
break;
}

var G__14755 = args14742.length;
switch (G__14755) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14742.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args14772 = [];
var len__7296__auto___14789 = arguments.length;
var i__7297__auto___14790 = (0);
while(true){
if((i__7297__auto___14790 < len__7296__auto___14789)){
args14772.push((arguments[i__7297__auto___14790]));

var G__14791 = (i__7297__auto___14790 + (1));
i__7297__auto___14790 = G__14791;
continue;
} else {
}
break;
}

var G__14781 = args14772.length;
switch (G__14781) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14772.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args14797 = [];
var len__7296__auto___14804 = arguments.length;
var i__7297__auto___14805 = (0);
while(true){
if((i__7297__auto___14805 < len__7296__auto___14804)){
args14797.push((arguments[i__7297__auto___14805]));

var G__14806 = (i__7297__auto___14805 + (1));
i__7297__auto___14805 = G__14806;
continue;
} else {
}
break;
}

var G__14799 = args14797.length;
switch (G__14799) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14797.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14808 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14808) : fn1.call(null,val_14808));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14808,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14808) : fn1.call(null,val_14808));
});})(val_14808,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var args14810 = [];
var len__7296__auto___14818 = arguments.length;
var i__7297__auto___14819 = (0);
while(true){
if((i__7297__auto___14819 < len__7296__auto___14818)){
args14810.push((arguments[i__7297__auto___14819]));

var G__14821 = (i__7297__auto___14819 + (1));
i__7297__auto___14819 = G__14821;
continue;
} else {
}
break;
}

var G__14815 = args14810.length;
switch (G__14815) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14810.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7136__auto___14833 = n;
var x_14834 = (0);
while(true){
if((x_14834 < n__7136__auto___14833)){
(a[x_14834] = (0));

var G__14836 = (x_14834 + (1));
x_14834 = G__14836;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__14837 = (i + (1));
i = G__14837;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14847 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14847 = (function (alt_flag,flag,meta14848){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14848 = meta14848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14849,meta14848__$1){
var self__ = this;
var _14849__$1 = this;
return (new cljs.core.async.t_cljs$core$async14847(self__.alt_flag,self__.flag,meta14848__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14847.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14849){
var self__ = this;
var _14849__$1 = this;
return self__.meta14848;
});})(flag))
;

cljs.core.async.t_cljs$core$async14847.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14847.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14847.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14848], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14847.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14847.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14847";

cljs.core.async.t_cljs$core$async14847.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async14847");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14847 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14847(alt_flag__$1,flag__$1,meta14848){
return (new cljs.core.async.t_cljs$core$async14847(alt_flag__$1,flag__$1,meta14848));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14847(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14869 = (function (alt_handler,flag,cb,meta14870){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14870 = meta14870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14871,meta14870__$1){
var self__ = this;
var _14871__$1 = this;
return (new cljs.core.async.t_cljs$core$async14869(self__.alt_handler,self__.flag,self__.cb,meta14870__$1));
});

cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14871){
var self__ = this;
var _14871__$1 = this;
return self__.meta14870;
});

cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14870], null);
});

cljs.core.async.t_cljs$core$async14869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14869";

cljs.core.async.t_cljs$core$async14869.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async14869");
});

cljs.core.async.__GT_t_cljs$core$async14869 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14869(alt_handler__$1,flag__$1,cb__$1,meta14870){
return (new cljs.core.async.t_cljs$core$async14869(alt_handler__$1,flag__$1,cb__$1,meta14870));
});

}

return (new cljs.core.async.t_cljs$core$async14869(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14873_SHARP_){
var G__14877 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14873_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14877) : fret.call(null,G__14877));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14874_SHARP_){
var G__14878 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14874_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14878) : fret.call(null,G__14878));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6221__auto__ = wport;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14879 = (i + (1));
i = G__14879;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6209__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__7296__auto___14888 = arguments.length;
var i__7297__auto___14889 = (0);
while(true){
if((i__7297__auto___14889 < len__7296__auto___14888)){
args__7303__auto__.push((arguments[i__7297__auto___14889]));

var G__14890 = (i__7297__auto___14889 + (1));
i__7297__auto___14889 = G__14890;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14882){
var map__14883 = p__14882;
var map__14883__$1 = ((((!((map__14883 == null)))?((((map__14883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14883):map__14883);
var opts = map__14883__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14880){
var G__14881 = cljs.core.first(seq14880);
var seq14880__$1 = cljs.core.next(seq14880);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14881,seq14880__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args14892 = [];
var len__7296__auto___14950 = arguments.length;
var i__7297__auto___14951 = (0);
while(true){
if((i__7297__auto___14951 < len__7296__auto___14950)){
args14892.push((arguments[i__7297__auto___14951]));

var G__14952 = (i__7297__auto___14951 + (1));
i__7297__auto___14951 = G__14952;
continue;
} else {
}
break;
}

var G__14894 = args14892.length;
switch (G__14894) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14892.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14658__auto___14954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___14954){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___14954){
return (function (state_14922){
var state_val_14923 = (state_14922[(1)]);
if((state_val_14923 === (7))){
var inst_14918 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
var statearr_14924_14955 = state_14922__$1;
(statearr_14924_14955[(2)] = inst_14918);

(statearr_14924_14955[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (1))){
var state_14922__$1 = state_14922;
var statearr_14925_14956 = state_14922__$1;
(statearr_14925_14956[(2)] = null);

(statearr_14925_14956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (4))){
var inst_14901 = (state_14922[(7)]);
var inst_14901__$1 = (state_14922[(2)]);
var inst_14902 = (inst_14901__$1 == null);
var state_14922__$1 = (function (){var statearr_14926 = state_14922;
(statearr_14926[(7)] = inst_14901__$1);

return statearr_14926;
})();
if(cljs.core.truth_(inst_14902)){
var statearr_14927_14960 = state_14922__$1;
(statearr_14927_14960[(1)] = (5));

} else {
var statearr_14928_14961 = state_14922__$1;
(statearr_14928_14961[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (13))){
var state_14922__$1 = state_14922;
var statearr_14929_14962 = state_14922__$1;
(statearr_14929_14962[(2)] = null);

(statearr_14929_14962[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (6))){
var inst_14901 = (state_14922[(7)]);
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14922__$1,(11),to,inst_14901);
} else {
if((state_val_14923 === (3))){
var inst_14920 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14922__$1,inst_14920);
} else {
if((state_val_14923 === (12))){
var state_14922__$1 = state_14922;
var statearr_14933_14963 = state_14922__$1;
(statearr_14933_14963[(2)] = null);

(statearr_14933_14963[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (2))){
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14922__$1,(4),from);
} else {
if((state_val_14923 === (11))){
var inst_14911 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
if(cljs.core.truth_(inst_14911)){
var statearr_14934_14964 = state_14922__$1;
(statearr_14934_14964[(1)] = (12));

} else {
var statearr_14936_14965 = state_14922__$1;
(statearr_14936_14965[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (9))){
var state_14922__$1 = state_14922;
var statearr_14937_14966 = state_14922__$1;
(statearr_14937_14966[(2)] = null);

(statearr_14937_14966[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (5))){
var state_14922__$1 = state_14922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14938_14967 = state_14922__$1;
(statearr_14938_14967[(1)] = (8));

} else {
var statearr_14939_14968 = state_14922__$1;
(statearr_14939_14968[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (14))){
var inst_14916 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
var statearr_14940_14969 = state_14922__$1;
(statearr_14940_14969[(2)] = inst_14916);

(statearr_14940_14969[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (10))){
var inst_14908 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
var statearr_14941_14970 = state_14922__$1;
(statearr_14941_14970[(2)] = inst_14908);

(statearr_14941_14970[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14923 === (8))){
var inst_14905 = cljs.core.async.close_BANG_(to);
var state_14922__$1 = state_14922;
var statearr_14942_14971 = state_14922__$1;
(statearr_14942_14971[(2)] = inst_14905);

(statearr_14942_14971[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___14954))
;
return ((function (switch__13584__auto__,c__14658__auto___14954){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_14946 = [null,null,null,null,null,null,null,null];
(statearr_14946[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_14946[(1)] = (1));

return statearr_14946;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_14922){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_14922);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e14947){if((e14947 instanceof Object)){
var ex__13588__auto__ = e14947;
var statearr_14948_14973 = state_14922;
(statearr_14948_14973[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14922);

return cljs.core.cst$kw$recur;
} else {
throw e14947;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__14974 = state_14922;
state_14922 = G__14974;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_14922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_14922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___14954))
})();
var state__14660__auto__ = (function (){var statearr_14949 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_14949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___14954);

return statearr_14949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___14954))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__15207){
var vec__15208 = p__15207;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15208,(1),null);
var job = vec__15208;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14658__auto___15450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___15450,res,vec__15208,v,p,job,jobs,results){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___15450,res,vec__15208,v,p,job,jobs,results){
return (function (state_15217){
var state_val_15218 = (state_15217[(1)]);
if((state_val_15218 === (1))){
var state_15217__$1 = state_15217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15217__$1,(2),res,v);
} else {
if((state_val_15218 === (2))){
var inst_15213 = (state_15217[(2)]);
var inst_15215 = cljs.core.async.close_BANG_(res);
var state_15217__$1 = (function (){var statearr_15219 = state_15217;
(statearr_15219[(7)] = inst_15213);

return statearr_15219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15217__$1,inst_15215);
} else {
return null;
}
}
});})(c__14658__auto___15450,res,vec__15208,v,p,job,jobs,results))
;
return ((function (switch__13584__auto__,c__14658__auto___15450,res,vec__15208,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_15227 = [null,null,null,null,null,null,null,null];
(statearr_15227[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_15227[(1)] = (1));

return statearr_15227;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_15217){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15217);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15232){if((e15232 instanceof Object)){
var ex__13588__auto__ = e15232;
var statearr_15233_15453 = state_15217;
(statearr_15233_15453[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15217);

return cljs.core.cst$kw$recur;
} else {
throw e15232;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15454 = state_15217;
state_15217 = G__15454;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_15217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_15217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___15450,res,vec__15208,v,p,job,jobs,results))
})();
var state__14660__auto__ = (function (){var statearr_15235 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___15450);

return statearr_15235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___15450,res,vec__15208,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__15237){
var vec__15238 = p__15237;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15238,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15238,(1),null);
var job = vec__15238;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__7136__auto___15456 = n;
var __15457 = (0);
while(true){
if((__15457 < n__7136__auto___15456)){
var G__15242_15458 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__15242_15458) {
case "compute":
var c__14658__auto___15460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15457,c__14658__auto___15460,G__15242_15458,n__7136__auto___15456,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (__15457,c__14658__auto___15460,G__15242_15458,n__7136__auto___15456,jobs,results,process,async){
return (function (state_15256){
var state_val_15257 = (state_15256[(1)]);
if((state_val_15257 === (1))){
var state_15256__$1 = state_15256;
var statearr_15258_15462 = state_15256__$1;
(statearr_15258_15462[(2)] = null);

(statearr_15258_15462[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (2))){
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15256__$1,(4),jobs);
} else {
if((state_val_15257 === (3))){
var inst_15254 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15256__$1,inst_15254);
} else {
if((state_val_15257 === (4))){
var inst_15246 = (state_15256[(2)]);
var inst_15247 = process(inst_15246);
var state_15256__$1 = state_15256;
if(cljs.core.truth_(inst_15247)){
var statearr_15261_15463 = state_15256__$1;
(statearr_15261_15463[(1)] = (5));

} else {
var statearr_15262_15464 = state_15256__$1;
(statearr_15262_15464[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (5))){
var state_15256__$1 = state_15256;
var statearr_15264_15465 = state_15256__$1;
(statearr_15264_15465[(2)] = null);

(statearr_15264_15465[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (6))){
var state_15256__$1 = state_15256;
var statearr_15265_15466 = state_15256__$1;
(statearr_15265_15466[(2)] = null);

(statearr_15265_15466[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15257 === (7))){
var inst_15252 = (state_15256[(2)]);
var state_15256__$1 = state_15256;
var statearr_15267_15467 = state_15256__$1;
(statearr_15267_15467[(2)] = inst_15252);

(statearr_15267_15467[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15457,c__14658__auto___15460,G__15242_15458,n__7136__auto___15456,jobs,results,process,async))
;
return ((function (__15457,switch__13584__auto__,c__14658__auto___15460,G__15242_15458,n__7136__auto___15456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_15271 = [null,null,null,null,null,null,null];
(statearr_15271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_15271[(1)] = (1));

return statearr_15271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_15256){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15256);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15272){if((e15272 instanceof Object)){
var ex__13588__auto__ = e15272;
var statearr_15273_15478 = state_15256;
(statearr_15273_15478[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15256);

return cljs.core.cst$kw$recur;
} else {
throw e15272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15481 = state_15256;
state_15256 = G__15481;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_15256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_15256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(__15457,switch__13584__auto__,c__14658__auto___15460,G__15242_15458,n__7136__auto___15456,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_15275 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___15460);

return statearr_15275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(__15457,c__14658__auto___15460,G__15242_15458,n__7136__auto___15456,jobs,results,process,async))
);


break;
case "async":
var c__14658__auto___15488 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__15457,c__14658__auto___15488,G__15242_15458,n__7136__auto___15456,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (__15457,c__14658__auto___15488,G__15242_15458,n__7136__auto___15456,jobs,results,process,async){
return (function (state_15289){
var state_val_15290 = (state_15289[(1)]);
if((state_val_15290 === (1))){
var state_15289__$1 = state_15289;
var statearr_15292_15495 = state_15289__$1;
(statearr_15292_15495[(2)] = null);

(statearr_15292_15495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (2))){
var state_15289__$1 = state_15289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15289__$1,(4),jobs);
} else {
if((state_val_15290 === (3))){
var inst_15287 = (state_15289[(2)]);
var state_15289__$1 = state_15289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15289__$1,inst_15287);
} else {
if((state_val_15290 === (4))){
var inst_15279 = (state_15289[(2)]);
var inst_15280 = async(inst_15279);
var state_15289__$1 = state_15289;
if(cljs.core.truth_(inst_15280)){
var statearr_15293_15498 = state_15289__$1;
(statearr_15293_15498[(1)] = (5));

} else {
var statearr_15294_15499 = state_15289__$1;
(statearr_15294_15499[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (5))){
var state_15289__$1 = state_15289;
var statearr_15295_15501 = state_15289__$1;
(statearr_15295_15501[(2)] = null);

(statearr_15295_15501[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (6))){
var state_15289__$1 = state_15289;
var statearr_15300_15503 = state_15289__$1;
(statearr_15300_15503[(2)] = null);

(statearr_15300_15503[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15290 === (7))){
var inst_15285 = (state_15289[(2)]);
var state_15289__$1 = state_15289;
var statearr_15301_15506 = state_15289__$1;
(statearr_15301_15506[(2)] = inst_15285);

(statearr_15301_15506[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__15457,c__14658__auto___15488,G__15242_15458,n__7136__auto___15456,jobs,results,process,async))
;
return ((function (__15457,switch__13584__auto__,c__14658__auto___15488,G__15242_15458,n__7136__auto___15456,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_15310 = [null,null,null,null,null,null,null];
(statearr_15310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_15310[(1)] = (1));

return statearr_15310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_15289){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15289);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15311){if((e15311 instanceof Object)){
var ex__13588__auto__ = e15311;
var statearr_15312_15510 = state_15289;
(statearr_15312_15510[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15289);

return cljs.core.cst$kw$recur;
} else {
throw e15311;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15511 = state_15289;
state_15289 = G__15511;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_15289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_15289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(__15457,switch__13584__auto__,c__14658__auto___15488,G__15242_15458,n__7136__auto___15456,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_15314 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___15488);

return statearr_15314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(__15457,c__14658__auto___15488,G__15242_15458,n__7136__auto___15456,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__15513 = (__15457 + (1));
__15457 = G__15513;
continue;
} else {
}
break;
}

var c__14658__auto___15514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___15514,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___15514,jobs,results,process,async){
return (function (state_15336){
var state_val_15337 = (state_15336[(1)]);
if((state_val_15337 === (1))){
var state_15336__$1 = state_15336;
var statearr_15338_15516 = state_15336__$1;
(statearr_15338_15516[(2)] = null);

(statearr_15338_15516[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15337 === (2))){
var state_15336__$1 = state_15336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15336__$1,(4),from);
} else {
if((state_val_15337 === (3))){
var inst_15334 = (state_15336[(2)]);
var state_15336__$1 = state_15336;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15336__$1,inst_15334);
} else {
if((state_val_15337 === (4))){
var inst_15317 = (state_15336[(7)]);
var inst_15317__$1 = (state_15336[(2)]);
var inst_15318 = (inst_15317__$1 == null);
var state_15336__$1 = (function (){var statearr_15340 = state_15336;
(statearr_15340[(7)] = inst_15317__$1);

return statearr_15340;
})();
if(cljs.core.truth_(inst_15318)){
var statearr_15341_15517 = state_15336__$1;
(statearr_15341_15517[(1)] = (5));

} else {
var statearr_15342_15518 = state_15336__$1;
(statearr_15342_15518[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15337 === (5))){
var inst_15320 = cljs.core.async.close_BANG_(jobs);
var state_15336__$1 = state_15336;
var statearr_15343_15519 = state_15336__$1;
(statearr_15343_15519[(2)] = inst_15320);

(statearr_15343_15519[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15337 === (6))){
var inst_15317 = (state_15336[(7)]);
var inst_15322 = (state_15336[(8)]);
var inst_15322__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15323 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15324 = [inst_15317,inst_15322__$1];
var inst_15325 = (new cljs.core.PersistentVector(null,2,(5),inst_15323,inst_15324,null));
var state_15336__$1 = (function (){var statearr_15344 = state_15336;
(statearr_15344[(8)] = inst_15322__$1);

return statearr_15344;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15336__$1,(8),jobs,inst_15325);
} else {
if((state_val_15337 === (7))){
var inst_15332 = (state_15336[(2)]);
var state_15336__$1 = state_15336;
var statearr_15345_15530 = state_15336__$1;
(statearr_15345_15530[(2)] = inst_15332);

(statearr_15345_15530[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15337 === (8))){
var inst_15322 = (state_15336[(8)]);
var inst_15327 = (state_15336[(2)]);
var state_15336__$1 = (function (){var statearr_15346 = state_15336;
(statearr_15346[(9)] = inst_15327);

return statearr_15346;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15336__$1,(9),results,inst_15322);
} else {
if((state_val_15337 === (9))){
var inst_15329 = (state_15336[(2)]);
var state_15336__$1 = (function (){var statearr_15347 = state_15336;
(statearr_15347[(10)] = inst_15329);

return statearr_15347;
})();
var statearr_15348_15541 = state_15336__$1;
(statearr_15348_15541[(2)] = null);

(statearr_15348_15541[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___15514,jobs,results,process,async))
;
return ((function (switch__13584__auto__,c__14658__auto___15514,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_15356 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_15356[(1)] = (1));

return statearr_15356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_15336){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15336);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15357){if((e15357 instanceof Object)){
var ex__13588__auto__ = e15357;
var statearr_15359_15542 = state_15336;
(statearr_15359_15542[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15336);

return cljs.core.cst$kw$recur;
} else {
throw e15357;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15543 = state_15336;
state_15336 = G__15543;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_15336){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_15336);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___15514,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_15361 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___15514);

return statearr_15361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___15514,jobs,results,process,async))
);


var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,jobs,results,process,async){
return (function (state_15403){
var state_val_15404 = (state_15403[(1)]);
if((state_val_15404 === (7))){
var inst_15399 = (state_15403[(2)]);
var state_15403__$1 = state_15403;
var statearr_15405_15544 = state_15403__$1;
(statearr_15405_15544[(2)] = inst_15399);

(statearr_15405_15544[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (20))){
var state_15403__$1 = state_15403;
var statearr_15406_15545 = state_15403__$1;
(statearr_15406_15545[(2)] = null);

(statearr_15406_15545[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (1))){
var state_15403__$1 = state_15403;
var statearr_15409_15547 = state_15403__$1;
(statearr_15409_15547[(2)] = null);

(statearr_15409_15547[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (4))){
var inst_15366 = (state_15403[(7)]);
var inst_15366__$1 = (state_15403[(2)]);
var inst_15367 = (inst_15366__$1 == null);
var state_15403__$1 = (function (){var statearr_15412 = state_15403;
(statearr_15412[(7)] = inst_15366__$1);

return statearr_15412;
})();
if(cljs.core.truth_(inst_15367)){
var statearr_15413_15549 = state_15403__$1;
(statearr_15413_15549[(1)] = (5));

} else {
var statearr_15414_15550 = state_15403__$1;
(statearr_15414_15550[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (15))){
var inst_15380 = (state_15403[(8)]);
var state_15403__$1 = state_15403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15403__$1,(18),to,inst_15380);
} else {
if((state_val_15404 === (21))){
var inst_15394 = (state_15403[(2)]);
var state_15403__$1 = state_15403;
var statearr_15415_15551 = state_15403__$1;
(statearr_15415_15551[(2)] = inst_15394);

(statearr_15415_15551[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (13))){
var inst_15396 = (state_15403[(2)]);
var state_15403__$1 = (function (){var statearr_15416 = state_15403;
(statearr_15416[(9)] = inst_15396);

return statearr_15416;
})();
var statearr_15417_15553 = state_15403__$1;
(statearr_15417_15553[(2)] = null);

(statearr_15417_15553[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (6))){
var inst_15366 = (state_15403[(7)]);
var state_15403__$1 = state_15403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15403__$1,(11),inst_15366);
} else {
if((state_val_15404 === (17))){
var inst_15389 = (state_15403[(2)]);
var state_15403__$1 = state_15403;
if(cljs.core.truth_(inst_15389)){
var statearr_15419_15556 = state_15403__$1;
(statearr_15419_15556[(1)] = (19));

} else {
var statearr_15420_15557 = state_15403__$1;
(statearr_15420_15557[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (3))){
var inst_15401 = (state_15403[(2)]);
var state_15403__$1 = state_15403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15403__$1,inst_15401);
} else {
if((state_val_15404 === (12))){
var inst_15377 = (state_15403[(10)]);
var state_15403__$1 = state_15403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15403__$1,(14),inst_15377);
} else {
if((state_val_15404 === (2))){
var state_15403__$1 = state_15403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15403__$1,(4),results);
} else {
if((state_val_15404 === (19))){
var state_15403__$1 = state_15403;
var statearr_15426_15560 = state_15403__$1;
(statearr_15426_15560[(2)] = null);

(statearr_15426_15560[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (11))){
var inst_15377 = (state_15403[(2)]);
var state_15403__$1 = (function (){var statearr_15427 = state_15403;
(statearr_15427[(10)] = inst_15377);

return statearr_15427;
})();
var statearr_15428_15561 = state_15403__$1;
(statearr_15428_15561[(2)] = null);

(statearr_15428_15561[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (9))){
var state_15403__$1 = state_15403;
var statearr_15429_15562 = state_15403__$1;
(statearr_15429_15562[(2)] = null);

(statearr_15429_15562[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (5))){
var state_15403__$1 = state_15403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15430_15564 = state_15403__$1;
(statearr_15430_15564[(1)] = (8));

} else {
var statearr_15431_15565 = state_15403__$1;
(statearr_15431_15565[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (14))){
var inst_15380 = (state_15403[(8)]);
var inst_15383 = (state_15403[(11)]);
var inst_15380__$1 = (state_15403[(2)]);
var inst_15382 = (inst_15380__$1 == null);
var inst_15383__$1 = cljs.core.not(inst_15382);
var state_15403__$1 = (function (){var statearr_15432 = state_15403;
(statearr_15432[(8)] = inst_15380__$1);

(statearr_15432[(11)] = inst_15383__$1);

return statearr_15432;
})();
if(inst_15383__$1){
var statearr_15433_15567 = state_15403__$1;
(statearr_15433_15567[(1)] = (15));

} else {
var statearr_15434_15568 = state_15403__$1;
(statearr_15434_15568[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (16))){
var inst_15383 = (state_15403[(11)]);
var state_15403__$1 = state_15403;
var statearr_15435_15569 = state_15403__$1;
(statearr_15435_15569[(2)] = inst_15383);

(statearr_15435_15569[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (10))){
var inst_15374 = (state_15403[(2)]);
var state_15403__$1 = state_15403;
var statearr_15437_15570 = state_15403__$1;
(statearr_15437_15570[(2)] = inst_15374);

(statearr_15437_15570[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (18))){
var inst_15386 = (state_15403[(2)]);
var state_15403__$1 = state_15403;
var statearr_15438_15573 = state_15403__$1;
(statearr_15438_15573[(2)] = inst_15386);

(statearr_15438_15573[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15404 === (8))){
var inst_15370 = cljs.core.async.close_BANG_(to);
var state_15403__$1 = state_15403;
var statearr_15442_15575 = state_15403__$1;
(statearr_15442_15575[(2)] = inst_15370);

(statearr_15442_15575[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto__,jobs,results,process,async))
;
return ((function (switch__13584__auto__,c__14658__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_15446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_15446[(1)] = (1));

return statearr_15446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_15403){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15403);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15447){if((e15447 instanceof Object)){
var ex__13588__auto__ = e15447;
var statearr_15448_15577 = state_15403;
(statearr_15448_15577[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15403);

return cljs.core.cst$kw$recur;
} else {
throw e15447;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15578 = state_15403;
state_15403 = G__15578;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_15403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_15403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_15449 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_15449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__,jobs,results,process,async))
);

return c__14658__auto__;
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
var args15579 = [];
var len__7296__auto___15594 = arguments.length;
var i__7297__auto___15595 = (0);
while(true){
if((i__7297__auto___15595 < len__7296__auto___15594)){
args15579.push((arguments[i__7297__auto___15595]));

var G__15596 = (i__7297__auto___15595 + (1));
i__7297__auto___15595 = G__15596;
continue;
} else {
}
break;
}

var G__15584 = args15579.length;
switch (G__15584) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15579.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var args15602 = [];
var len__7296__auto___15619 = arguments.length;
var i__7297__auto___15620 = (0);
while(true){
if((i__7297__auto___15620 < len__7296__auto___15619)){
args15602.push((arguments[i__7297__auto___15620]));

var G__15621 = (i__7297__auto___15620 + (1));
i__7297__auto___15620 = G__15621;
continue;
} else {
}
break;
}

var G__15613 = args15602.length;
switch (G__15613) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15602.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var args15625 = [];
var len__7296__auto___15706 = arguments.length;
var i__7297__auto___15707 = (0);
while(true){
if((i__7297__auto___15707 < len__7296__auto___15706)){
args15625.push((arguments[i__7297__auto___15707]));

var G__15711 = (i__7297__auto___15707 + (1));
i__7297__auto___15707 = G__15711;
continue;
} else {
}
break;
}

var G__15631 = args15625.length;
switch (G__15631) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15625.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14658__auto___15713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___15713,tc,fc){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___15713,tc,fc){
return (function (state_15662){
var state_val_15664 = (state_15662[(1)]);
if((state_val_15664 === (7))){
var inst_15658 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
var statearr_15672_15714 = state_15662__$1;
(statearr_15672_15714[(2)] = inst_15658);

(statearr_15672_15714[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (1))){
var state_15662__$1 = state_15662;
var statearr_15673_15715 = state_15662__$1;
(statearr_15673_15715[(2)] = null);

(statearr_15673_15715[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (4))){
var inst_15635 = (state_15662[(7)]);
var inst_15635__$1 = (state_15662[(2)]);
var inst_15636 = (inst_15635__$1 == null);
var state_15662__$1 = (function (){var statearr_15674 = state_15662;
(statearr_15674[(7)] = inst_15635__$1);

return statearr_15674;
})();
if(cljs.core.truth_(inst_15636)){
var statearr_15675_15716 = state_15662__$1;
(statearr_15675_15716[(1)] = (5));

} else {
var statearr_15676_15717 = state_15662__$1;
(statearr_15676_15717[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (13))){
var state_15662__$1 = state_15662;
var statearr_15681_15718 = state_15662__$1;
(statearr_15681_15718[(2)] = null);

(statearr_15681_15718[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (6))){
var inst_15635 = (state_15662[(7)]);
var inst_15641 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15635) : p.call(null,inst_15635));
var state_15662__$1 = state_15662;
if(cljs.core.truth_(inst_15641)){
var statearr_15682_15719 = state_15662__$1;
(statearr_15682_15719[(1)] = (9));

} else {
var statearr_15683_15720 = state_15662__$1;
(statearr_15683_15720[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (3))){
var inst_15660 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15662__$1,inst_15660);
} else {
if((state_val_15664 === (12))){
var state_15662__$1 = state_15662;
var statearr_15688_15721 = state_15662__$1;
(statearr_15688_15721[(2)] = null);

(statearr_15688_15721[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (2))){
var state_15662__$1 = state_15662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15662__$1,(4),ch);
} else {
if((state_val_15664 === (11))){
var inst_15635 = (state_15662[(7)]);
var inst_15645 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15662__$1,(8),inst_15645,inst_15635);
} else {
if((state_val_15664 === (9))){
var state_15662__$1 = state_15662;
var statearr_15691_15722 = state_15662__$1;
(statearr_15691_15722[(2)] = tc);

(statearr_15691_15722[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (5))){
var inst_15638 = cljs.core.async.close_BANG_(tc);
var inst_15639 = cljs.core.async.close_BANG_(fc);
var state_15662__$1 = (function (){var statearr_15692 = state_15662;
(statearr_15692[(8)] = inst_15638);

return statearr_15692;
})();
var statearr_15693_15723 = state_15662__$1;
(statearr_15693_15723[(2)] = inst_15639);

(statearr_15693_15723[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (14))){
var inst_15656 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
var statearr_15694_15724 = state_15662__$1;
(statearr_15694_15724[(2)] = inst_15656);

(statearr_15694_15724[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (10))){
var state_15662__$1 = state_15662;
var statearr_15695_15725 = state_15662__$1;
(statearr_15695_15725[(2)] = fc);

(statearr_15695_15725[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15664 === (8))){
var inst_15651 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
if(cljs.core.truth_(inst_15651)){
var statearr_15696_15726 = state_15662__$1;
(statearr_15696_15726[(1)] = (12));

} else {
var statearr_15697_15727 = state_15662__$1;
(statearr_15697_15727[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___15713,tc,fc))
;
return ((function (switch__13584__auto__,c__14658__auto___15713,tc,fc){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_15701 = [null,null,null,null,null,null,null,null,null];
(statearr_15701[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_15701[(1)] = (1));

return statearr_15701;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_15662){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15662);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15702){if((e15702 instanceof Object)){
var ex__13588__auto__ = e15702;
var statearr_15703_15728 = state_15662;
(statearr_15703_15728[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15662);

return cljs.core.cst$kw$recur;
} else {
throw e15702;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15729 = state_15662;
state_15662 = G__15729;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_15662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_15662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___15713,tc,fc))
})();
var state__14660__auto__ = (function (){var statearr_15704 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___15713);

return statearr_15704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___15713,tc,fc))
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
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_15813){
var state_val_15814 = (state_15813[(1)]);
if((state_val_15814 === (7))){
var inst_15808 = (state_15813[(2)]);
var state_15813__$1 = state_15813;
var statearr_15817_15838 = state_15813__$1;
(statearr_15817_15838[(2)] = inst_15808);

(statearr_15817_15838[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15814 === (1))){
var inst_15792 = init;
var state_15813__$1 = (function (){var statearr_15818 = state_15813;
(statearr_15818[(7)] = inst_15792);

return statearr_15818;
})();
var statearr_15819_15839 = state_15813__$1;
(statearr_15819_15839[(2)] = null);

(statearr_15819_15839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15814 === (4))){
var inst_15795 = (state_15813[(8)]);
var inst_15795__$1 = (state_15813[(2)]);
var inst_15796 = (inst_15795__$1 == null);
var state_15813__$1 = (function (){var statearr_15820 = state_15813;
(statearr_15820[(8)] = inst_15795__$1);

return statearr_15820;
})();
if(cljs.core.truth_(inst_15796)){
var statearr_15821_15840 = state_15813__$1;
(statearr_15821_15840[(1)] = (5));

} else {
var statearr_15822_15841 = state_15813__$1;
(statearr_15822_15841[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15814 === (6))){
var inst_15799 = (state_15813[(9)]);
var inst_15795 = (state_15813[(8)]);
var inst_15792 = (state_15813[(7)]);
var inst_15799__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15792,inst_15795) : f.call(null,inst_15792,inst_15795));
var inst_15800 = cljs.core.reduced_QMARK_(inst_15799__$1);
var state_15813__$1 = (function (){var statearr_15823 = state_15813;
(statearr_15823[(9)] = inst_15799__$1);

return statearr_15823;
})();
if(inst_15800){
var statearr_15824_15842 = state_15813__$1;
(statearr_15824_15842[(1)] = (8));

} else {
var statearr_15825_15843 = state_15813__$1;
(statearr_15825_15843[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15814 === (3))){
var inst_15810 = (state_15813[(2)]);
var state_15813__$1 = state_15813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15813__$1,inst_15810);
} else {
if((state_val_15814 === (2))){
var state_15813__$1 = state_15813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15813__$1,(4),ch);
} else {
if((state_val_15814 === (9))){
var inst_15799 = (state_15813[(9)]);
var inst_15792 = inst_15799;
var state_15813__$1 = (function (){var statearr_15826 = state_15813;
(statearr_15826[(7)] = inst_15792);

return statearr_15826;
})();
var statearr_15827_15844 = state_15813__$1;
(statearr_15827_15844[(2)] = null);

(statearr_15827_15844[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15814 === (5))){
var inst_15792 = (state_15813[(7)]);
var state_15813__$1 = state_15813;
var statearr_15828_15845 = state_15813__$1;
(statearr_15828_15845[(2)] = inst_15792);

(statearr_15828_15845[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15814 === (10))){
var inst_15806 = (state_15813[(2)]);
var state_15813__$1 = state_15813;
var statearr_15829_15846 = state_15813__$1;
(statearr_15829_15846[(2)] = inst_15806);

(statearr_15829_15846[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15814 === (8))){
var inst_15799 = (state_15813[(9)]);
var inst_15802 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_15799) : cljs.core.deref.call(null,inst_15799));
var state_15813__$1 = state_15813;
var statearr_15830_15847 = state_15813__$1;
(statearr_15830_15847[(2)] = inst_15802);

(statearr_15830_15847[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13585__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13585__auto____0 = (function (){
var statearr_15834 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15834[(0)] = cljs$core$async$reduce_$_state_machine__13585__auto__);

(statearr_15834[(1)] = (1));

return statearr_15834;
});
var cljs$core$async$reduce_$_state_machine__13585__auto____1 = (function (state_15813){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15813);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15835){if((e15835 instanceof Object)){
var ex__13588__auto__ = e15835;
var statearr_15836_15853 = state_15813;
(statearr_15836_15853[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15813);

return cljs.core.cst$kw$recur;
} else {
throw e15835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15868 = state_15813;
state_15813 = G__15868;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13585__auto__ = function(state_15813){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13585__auto____1.call(this,state_15813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13585__auto____0;
cljs$core$async$reduce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13585__auto____1;
return cljs$core$async$reduce_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_15837 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_15837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
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
var args15870 = [];
var len__7296__auto___15946 = arguments.length;
var i__7297__auto___15947 = (0);
while(true){
if((i__7297__auto___15947 < len__7296__auto___15946)){
args15870.push((arguments[i__7297__auto___15947]));

var G__15953 = (i__7297__auto___15947 + (1));
i__7297__auto___15947 = G__15953;
continue;
} else {
}
break;
}

var G__15872 = args15870.length;
switch (G__15872) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15870.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_15899){
var state_val_15900 = (state_15899[(1)]);
if((state_val_15900 === (7))){
var inst_15881 = (state_15899[(2)]);
var state_15899__$1 = state_15899;
var statearr_15901_15965 = state_15899__$1;
(statearr_15901_15965[(2)] = inst_15881);

(statearr_15901_15965[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (1))){
var inst_15874 = cljs.core.seq(coll);
var inst_15875 = inst_15874;
var state_15899__$1 = (function (){var statearr_15904 = state_15899;
(statearr_15904[(7)] = inst_15875);

return statearr_15904;
})();
var statearr_15905_15968 = state_15899__$1;
(statearr_15905_15968[(2)] = null);

(statearr_15905_15968[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (4))){
var inst_15875 = (state_15899[(7)]);
var inst_15879 = cljs.core.first(inst_15875);
var state_15899__$1 = state_15899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15899__$1,(7),ch,inst_15879);
} else {
if((state_val_15900 === (13))){
var inst_15893 = (state_15899[(2)]);
var state_15899__$1 = state_15899;
var statearr_15906_15970 = state_15899__$1;
(statearr_15906_15970[(2)] = inst_15893);

(statearr_15906_15970[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (6))){
var inst_15884 = (state_15899[(2)]);
var state_15899__$1 = state_15899;
if(cljs.core.truth_(inst_15884)){
var statearr_15907_15971 = state_15899__$1;
(statearr_15907_15971[(1)] = (8));

} else {
var statearr_15908_15972 = state_15899__$1;
(statearr_15908_15972[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (3))){
var inst_15897 = (state_15899[(2)]);
var state_15899__$1 = state_15899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15899__$1,inst_15897);
} else {
if((state_val_15900 === (12))){
var state_15899__$1 = state_15899;
var statearr_15909_15973 = state_15899__$1;
(statearr_15909_15973[(2)] = null);

(statearr_15909_15973[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (2))){
var inst_15875 = (state_15899[(7)]);
var state_15899__$1 = state_15899;
if(cljs.core.truth_(inst_15875)){
var statearr_15910_15974 = state_15899__$1;
(statearr_15910_15974[(1)] = (4));

} else {
var statearr_15911_15975 = state_15899__$1;
(statearr_15911_15975[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (11))){
var inst_15890 = cljs.core.async.close_BANG_(ch);
var state_15899__$1 = state_15899;
var statearr_15912_15976 = state_15899__$1;
(statearr_15912_15976[(2)] = inst_15890);

(statearr_15912_15976[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (9))){
var state_15899__$1 = state_15899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15914_15977 = state_15899__$1;
(statearr_15914_15977[(1)] = (11));

} else {
var statearr_15915_15978 = state_15899__$1;
(statearr_15915_15978[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (5))){
var inst_15875 = (state_15899[(7)]);
var state_15899__$1 = state_15899;
var statearr_15926_15979 = state_15899__$1;
(statearr_15926_15979[(2)] = inst_15875);

(statearr_15926_15979[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (10))){
var inst_15895 = (state_15899[(2)]);
var state_15899__$1 = state_15899;
var statearr_15927_15981 = state_15899__$1;
(statearr_15927_15981[(2)] = inst_15895);

(statearr_15927_15981[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15900 === (8))){
var inst_15875 = (state_15899[(7)]);
var inst_15886 = cljs.core.next(inst_15875);
var inst_15875__$1 = inst_15886;
var state_15899__$1 = (function (){var statearr_15929 = state_15899;
(statearr_15929[(7)] = inst_15875__$1);

return statearr_15929;
})();
var statearr_15930_15983 = state_15899__$1;
(statearr_15930_15983[(2)] = null);

(statearr_15930_15983[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_15937 = [null,null,null,null,null,null,null,null];
(statearr_15937[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_15937[(1)] = (1));

return statearr_15937;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_15899){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_15899);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e15938){if((e15938 instanceof Object)){
var ex__13588__auto__ = e15938;
var statearr_15939_15984 = state_15899;
(statearr_15939_15984[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15899);

return cljs.core.cst$kw$recur;
} else {
throw e15938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__15985 = state_15899;
state_15899 = G__15985;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_15899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_15899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_15943 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_15943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_15943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__6885__auto__.call(null,_));
} else {
var m__6885__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__6885__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6885__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__6885__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__6885__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto__.call(null,m,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto__.call(null,m));
} else {
var m__6885__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__16246 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16246) : cljs.core.atom.call(null,G__16246));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16247 = (function (mult,ch,cs,meta16248){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta16248 = meta16248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16249,meta16248__$1){
var self__ = this;
var _16249__$1 = this;
return (new cljs.core.async.t_cljs$core$async16247(self__.mult,self__.ch,self__.cs,meta16248__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16249){
var self__ = this;
var _16249__$1 = this;
return self__.meta16248;
});})(cs))
;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16251_16511 = self__.cs;
var G__16252_16512 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16251_16511,G__16252_16512) : cljs.core.reset_BANG_.call(null,G__16251_16511,G__16252_16512));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16247.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta16248], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16247";

cljs.core.async.t_cljs$core$async16247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async16247");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async16247 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16247(mult__$1,ch__$1,cs__$1,meta16248){
return (new cljs.core.async.t_cljs$core$async16247(mult__$1,ch__$1,cs__$1,meta16248));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16247(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__14658__auto___16513 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___16513,cs,m,dchan,dctr,done){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___16513,cs,m,dchan,dctr,done){
return (function (state_16395){
var state_val_16396 = (state_16395[(1)]);
if((state_val_16396 === (7))){
var inst_16391 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16397_16517 = state_16395__$1;
(statearr_16397_16517[(2)] = inst_16391);

(statearr_16397_16517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (20))){
var inst_16293 = (state_16395[(7)]);
var inst_16306 = cljs.core.first(inst_16293);
var inst_16307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16306,(0),null);
var inst_16308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16306,(1),null);
var state_16395__$1 = (function (){var statearr_16398 = state_16395;
(statearr_16398[(8)] = inst_16307);

return statearr_16398;
})();
if(cljs.core.truth_(inst_16308)){
var statearr_16399_16518 = state_16395__$1;
(statearr_16399_16518[(1)] = (22));

} else {
var statearr_16400_16519 = state_16395__$1;
(statearr_16400_16519[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (27))){
var inst_16343 = (state_16395[(9)]);
var inst_16338 = (state_16395[(10)]);
var inst_16262 = (state_16395[(11)]);
var inst_16336 = (state_16395[(12)]);
var inst_16343__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16336,inst_16338);
var inst_16344 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16343__$1,inst_16262,done);
var state_16395__$1 = (function (){var statearr_16401 = state_16395;
(statearr_16401[(9)] = inst_16343__$1);

return statearr_16401;
})();
if(cljs.core.truth_(inst_16344)){
var statearr_16402_16520 = state_16395__$1;
(statearr_16402_16520[(1)] = (30));

} else {
var statearr_16403_16521 = state_16395__$1;
(statearr_16403_16521[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (1))){
var state_16395__$1 = state_16395;
var statearr_16404_16522 = state_16395__$1;
(statearr_16404_16522[(2)] = null);

(statearr_16404_16522[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (24))){
var inst_16293 = (state_16395[(7)]);
var inst_16313 = (state_16395[(2)]);
var inst_16314 = cljs.core.next(inst_16293);
var inst_16271 = inst_16314;
var inst_16272 = null;
var inst_16273 = (0);
var inst_16274 = (0);
var state_16395__$1 = (function (){var statearr_16405 = state_16395;
(statearr_16405[(13)] = inst_16272);

(statearr_16405[(14)] = inst_16271);

(statearr_16405[(15)] = inst_16273);

(statearr_16405[(16)] = inst_16274);

(statearr_16405[(17)] = inst_16313);

return statearr_16405;
})();
var statearr_16406_16523 = state_16395__$1;
(statearr_16406_16523[(2)] = null);

(statearr_16406_16523[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (39))){
var state_16395__$1 = state_16395;
var statearr_16410_16524 = state_16395__$1;
(statearr_16410_16524[(2)] = null);

(statearr_16410_16524[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (4))){
var inst_16262 = (state_16395[(11)]);
var inst_16262__$1 = (state_16395[(2)]);
var inst_16263 = (inst_16262__$1 == null);
var state_16395__$1 = (function (){var statearr_16411 = state_16395;
(statearr_16411[(11)] = inst_16262__$1);

return statearr_16411;
})();
if(cljs.core.truth_(inst_16263)){
var statearr_16412_16526 = state_16395__$1;
(statearr_16412_16526[(1)] = (5));

} else {
var statearr_16413_16527 = state_16395__$1;
(statearr_16413_16527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (15))){
var inst_16272 = (state_16395[(13)]);
var inst_16271 = (state_16395[(14)]);
var inst_16273 = (state_16395[(15)]);
var inst_16274 = (state_16395[(16)]);
var inst_16289 = (state_16395[(2)]);
var inst_16290 = (inst_16274 + (1));
var tmp16407 = inst_16272;
var tmp16408 = inst_16271;
var tmp16409 = inst_16273;
var inst_16271__$1 = tmp16408;
var inst_16272__$1 = tmp16407;
var inst_16273__$1 = tmp16409;
var inst_16274__$1 = inst_16290;
var state_16395__$1 = (function (){var statearr_16414 = state_16395;
(statearr_16414[(13)] = inst_16272__$1);

(statearr_16414[(14)] = inst_16271__$1);

(statearr_16414[(15)] = inst_16273__$1);

(statearr_16414[(18)] = inst_16289);

(statearr_16414[(16)] = inst_16274__$1);

return statearr_16414;
})();
var statearr_16418_16528 = state_16395__$1;
(statearr_16418_16528[(2)] = null);

(statearr_16418_16528[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (21))){
var inst_16317 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16425_16529 = state_16395__$1;
(statearr_16425_16529[(2)] = inst_16317);

(statearr_16425_16529[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (31))){
var inst_16343 = (state_16395[(9)]);
var inst_16347 = done(null);
var inst_16348 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16343);
var state_16395__$1 = (function (){var statearr_16426 = state_16395;
(statearr_16426[(19)] = inst_16347);

return statearr_16426;
})();
var statearr_16427_16530 = state_16395__$1;
(statearr_16427_16530[(2)] = inst_16348);

(statearr_16427_16530[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (32))){
var inst_16337 = (state_16395[(20)]);
var inst_16338 = (state_16395[(10)]);
var inst_16336 = (state_16395[(12)]);
var inst_16335 = (state_16395[(21)]);
var inst_16350 = (state_16395[(2)]);
var inst_16351 = (inst_16338 + (1));
var tmp16422 = inst_16337;
var tmp16423 = inst_16336;
var tmp16424 = inst_16335;
var inst_16335__$1 = tmp16424;
var inst_16336__$1 = tmp16423;
var inst_16337__$1 = tmp16422;
var inst_16338__$1 = inst_16351;
var state_16395__$1 = (function (){var statearr_16428 = state_16395;
(statearr_16428[(20)] = inst_16337__$1);

(statearr_16428[(10)] = inst_16338__$1);

(statearr_16428[(12)] = inst_16336__$1);

(statearr_16428[(21)] = inst_16335__$1);

(statearr_16428[(22)] = inst_16350);

return statearr_16428;
})();
var statearr_16429_16531 = state_16395__$1;
(statearr_16429_16531[(2)] = null);

(statearr_16429_16531[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (40))){
var inst_16363 = (state_16395[(23)]);
var inst_16367 = done(null);
var inst_16368 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16363);
var state_16395__$1 = (function (){var statearr_16430 = state_16395;
(statearr_16430[(24)] = inst_16367);

return statearr_16430;
})();
var statearr_16431_16532 = state_16395__$1;
(statearr_16431_16532[(2)] = inst_16368);

(statearr_16431_16532[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (33))){
var inst_16354 = (state_16395[(25)]);
var inst_16356 = cljs.core.chunked_seq_QMARK_(inst_16354);
var state_16395__$1 = state_16395;
if(inst_16356){
var statearr_16434_16533 = state_16395__$1;
(statearr_16434_16533[(1)] = (36));

} else {
var statearr_16435_16534 = state_16395__$1;
(statearr_16435_16534[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (13))){
var inst_16283 = (state_16395[(26)]);
var inst_16286 = cljs.core.async.close_BANG_(inst_16283);
var state_16395__$1 = state_16395;
var statearr_16437_16535 = state_16395__$1;
(statearr_16437_16535[(2)] = inst_16286);

(statearr_16437_16535[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (22))){
var inst_16307 = (state_16395[(8)]);
var inst_16310 = cljs.core.async.close_BANG_(inst_16307);
var state_16395__$1 = state_16395;
var statearr_16438_16536 = state_16395__$1;
(statearr_16438_16536[(2)] = inst_16310);

(statearr_16438_16536[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (36))){
var inst_16354 = (state_16395[(25)]);
var inst_16358 = cljs.core.chunk_first(inst_16354);
var inst_16359 = cljs.core.chunk_rest(inst_16354);
var inst_16360 = cljs.core.count(inst_16358);
var inst_16335 = inst_16359;
var inst_16336 = inst_16358;
var inst_16337 = inst_16360;
var inst_16338 = (0);
var state_16395__$1 = (function (){var statearr_16440 = state_16395;
(statearr_16440[(20)] = inst_16337);

(statearr_16440[(10)] = inst_16338);

(statearr_16440[(12)] = inst_16336);

(statearr_16440[(21)] = inst_16335);

return statearr_16440;
})();
var statearr_16441_16537 = state_16395__$1;
(statearr_16441_16537[(2)] = null);

(statearr_16441_16537[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (41))){
var inst_16354 = (state_16395[(25)]);
var inst_16370 = (state_16395[(2)]);
var inst_16371 = cljs.core.next(inst_16354);
var inst_16335 = inst_16371;
var inst_16336 = null;
var inst_16337 = (0);
var inst_16338 = (0);
var state_16395__$1 = (function (){var statearr_16442 = state_16395;
(statearr_16442[(20)] = inst_16337);

(statearr_16442[(10)] = inst_16338);

(statearr_16442[(12)] = inst_16336);

(statearr_16442[(21)] = inst_16335);

(statearr_16442[(27)] = inst_16370);

return statearr_16442;
})();
var statearr_16443_16538 = state_16395__$1;
(statearr_16443_16538[(2)] = null);

(statearr_16443_16538[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (43))){
var state_16395__$1 = state_16395;
var statearr_16444_16539 = state_16395__$1;
(statearr_16444_16539[(2)] = null);

(statearr_16444_16539[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (29))){
var inst_16379 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16445_16540 = state_16395__$1;
(statearr_16445_16540[(2)] = inst_16379);

(statearr_16445_16540[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (44))){
var inst_16388 = (state_16395[(2)]);
var state_16395__$1 = (function (){var statearr_16446 = state_16395;
(statearr_16446[(28)] = inst_16388);

return statearr_16446;
})();
var statearr_16447_16541 = state_16395__$1;
(statearr_16447_16541[(2)] = null);

(statearr_16447_16541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (6))){
var inst_16327 = (state_16395[(29)]);
var inst_16326 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16327__$1 = cljs.core.keys(inst_16326);
var inst_16328 = cljs.core.count(inst_16327__$1);
var inst_16329 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_16328) : cljs.core.reset_BANG_.call(null,dctr,inst_16328));
var inst_16334 = cljs.core.seq(inst_16327__$1);
var inst_16335 = inst_16334;
var inst_16336 = null;
var inst_16337 = (0);
var inst_16338 = (0);
var state_16395__$1 = (function (){var statearr_16452 = state_16395;
(statearr_16452[(20)] = inst_16337);

(statearr_16452[(10)] = inst_16338);

(statearr_16452[(12)] = inst_16336);

(statearr_16452[(21)] = inst_16335);

(statearr_16452[(30)] = inst_16329);

(statearr_16452[(29)] = inst_16327__$1);

return statearr_16452;
})();
var statearr_16453_16549 = state_16395__$1;
(statearr_16453_16549[(2)] = null);

(statearr_16453_16549[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (28))){
var inst_16354 = (state_16395[(25)]);
var inst_16335 = (state_16395[(21)]);
var inst_16354__$1 = cljs.core.seq(inst_16335);
var state_16395__$1 = (function (){var statearr_16454 = state_16395;
(statearr_16454[(25)] = inst_16354__$1);

return statearr_16454;
})();
if(inst_16354__$1){
var statearr_16455_16559 = state_16395__$1;
(statearr_16455_16559[(1)] = (33));

} else {
var statearr_16456_16560 = state_16395__$1;
(statearr_16456_16560[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (25))){
var inst_16337 = (state_16395[(20)]);
var inst_16338 = (state_16395[(10)]);
var inst_16340 = (inst_16338 < inst_16337);
var inst_16341 = inst_16340;
var state_16395__$1 = state_16395;
if(cljs.core.truth_(inst_16341)){
var statearr_16457_16564 = state_16395__$1;
(statearr_16457_16564[(1)] = (27));

} else {
var statearr_16458_16565 = state_16395__$1;
(statearr_16458_16565[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (34))){
var state_16395__$1 = state_16395;
var statearr_16459_16566 = state_16395__$1;
(statearr_16459_16566[(2)] = null);

(statearr_16459_16566[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (17))){
var state_16395__$1 = state_16395;
var statearr_16460_16567 = state_16395__$1;
(statearr_16460_16567[(2)] = null);

(statearr_16460_16567[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (3))){
var inst_16393 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16395__$1,inst_16393);
} else {
if((state_val_16396 === (12))){
var inst_16322 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16461_16568 = state_16395__$1;
(statearr_16461_16568[(2)] = inst_16322);

(statearr_16461_16568[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (2))){
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16395__$1,(4),ch);
} else {
if((state_val_16396 === (23))){
var state_16395__$1 = state_16395;
var statearr_16462_16569 = state_16395__$1;
(statearr_16462_16569[(2)] = null);

(statearr_16462_16569[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (35))){
var inst_16377 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16463_16573 = state_16395__$1;
(statearr_16463_16573[(2)] = inst_16377);

(statearr_16463_16573[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (19))){
var inst_16293 = (state_16395[(7)]);
var inst_16297 = cljs.core.chunk_first(inst_16293);
var inst_16298 = cljs.core.chunk_rest(inst_16293);
var inst_16299 = cljs.core.count(inst_16297);
var inst_16271 = inst_16298;
var inst_16272 = inst_16297;
var inst_16273 = inst_16299;
var inst_16274 = (0);
var state_16395__$1 = (function (){var statearr_16464 = state_16395;
(statearr_16464[(13)] = inst_16272);

(statearr_16464[(14)] = inst_16271);

(statearr_16464[(15)] = inst_16273);

(statearr_16464[(16)] = inst_16274);

return statearr_16464;
})();
var statearr_16465_16577 = state_16395__$1;
(statearr_16465_16577[(2)] = null);

(statearr_16465_16577[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (11))){
var inst_16271 = (state_16395[(14)]);
var inst_16293 = (state_16395[(7)]);
var inst_16293__$1 = cljs.core.seq(inst_16271);
var state_16395__$1 = (function (){var statearr_16466 = state_16395;
(statearr_16466[(7)] = inst_16293__$1);

return statearr_16466;
})();
if(inst_16293__$1){
var statearr_16467_16578 = state_16395__$1;
(statearr_16467_16578[(1)] = (16));

} else {
var statearr_16468_16579 = state_16395__$1;
(statearr_16468_16579[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (9))){
var inst_16324 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16469_16580 = state_16395__$1;
(statearr_16469_16580[(2)] = inst_16324);

(statearr_16469_16580[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (5))){
var inst_16269 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_16270 = cljs.core.seq(inst_16269);
var inst_16271 = inst_16270;
var inst_16272 = null;
var inst_16273 = (0);
var inst_16274 = (0);
var state_16395__$1 = (function (){var statearr_16470 = state_16395;
(statearr_16470[(13)] = inst_16272);

(statearr_16470[(14)] = inst_16271);

(statearr_16470[(15)] = inst_16273);

(statearr_16470[(16)] = inst_16274);

return statearr_16470;
})();
var statearr_16471_16581 = state_16395__$1;
(statearr_16471_16581[(2)] = null);

(statearr_16471_16581[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (14))){
var state_16395__$1 = state_16395;
var statearr_16472_16582 = state_16395__$1;
(statearr_16472_16582[(2)] = null);

(statearr_16472_16582[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (45))){
var inst_16385 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16473_16586 = state_16395__$1;
(statearr_16473_16586[(2)] = inst_16385);

(statearr_16473_16586[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (26))){
var inst_16327 = (state_16395[(29)]);
var inst_16381 = (state_16395[(2)]);
var inst_16382 = cljs.core.seq(inst_16327);
var state_16395__$1 = (function (){var statearr_16480 = state_16395;
(statearr_16480[(31)] = inst_16381);

return statearr_16480;
})();
if(inst_16382){
var statearr_16481_16587 = state_16395__$1;
(statearr_16481_16587[(1)] = (42));

} else {
var statearr_16482_16588 = state_16395__$1;
(statearr_16482_16588[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (16))){
var inst_16293 = (state_16395[(7)]);
var inst_16295 = cljs.core.chunked_seq_QMARK_(inst_16293);
var state_16395__$1 = state_16395;
if(inst_16295){
var statearr_16483_16592 = state_16395__$1;
(statearr_16483_16592[(1)] = (19));

} else {
var statearr_16484_16593 = state_16395__$1;
(statearr_16484_16593[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (38))){
var inst_16374 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16485_16594 = state_16395__$1;
(statearr_16485_16594[(2)] = inst_16374);

(statearr_16485_16594[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (30))){
var state_16395__$1 = state_16395;
var statearr_16490_16595 = state_16395__$1;
(statearr_16490_16595[(2)] = null);

(statearr_16490_16595[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (10))){
var inst_16272 = (state_16395[(13)]);
var inst_16274 = (state_16395[(16)]);
var inst_16282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16272,inst_16274);
var inst_16283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16282,(0),null);
var inst_16284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16282,(1),null);
var state_16395__$1 = (function (){var statearr_16491 = state_16395;
(statearr_16491[(26)] = inst_16283);

return statearr_16491;
})();
if(cljs.core.truth_(inst_16284)){
var statearr_16492_16596 = state_16395__$1;
(statearr_16492_16596[(1)] = (13));

} else {
var statearr_16493_16597 = state_16395__$1;
(statearr_16493_16597[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (18))){
var inst_16320 = (state_16395[(2)]);
var state_16395__$1 = state_16395;
var statearr_16494_16598 = state_16395__$1;
(statearr_16494_16598[(2)] = inst_16320);

(statearr_16494_16598[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (42))){
var state_16395__$1 = state_16395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16395__$1,(45),dchan);
} else {
if((state_val_16396 === (37))){
var inst_16262 = (state_16395[(11)]);
var inst_16354 = (state_16395[(25)]);
var inst_16363 = (state_16395[(23)]);
var inst_16363__$1 = cljs.core.first(inst_16354);
var inst_16364 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16363__$1,inst_16262,done);
var state_16395__$1 = (function (){var statearr_16497 = state_16395;
(statearr_16497[(23)] = inst_16363__$1);

return statearr_16497;
})();
if(cljs.core.truth_(inst_16364)){
var statearr_16498_16600 = state_16395__$1;
(statearr_16498_16600[(1)] = (39));

} else {
var statearr_16499_16601 = state_16395__$1;
(statearr_16499_16601[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16396 === (8))){
var inst_16273 = (state_16395[(15)]);
var inst_16274 = (state_16395[(16)]);
var inst_16276 = (inst_16274 < inst_16273);
var inst_16277 = inst_16276;
var state_16395__$1 = state_16395;
if(cljs.core.truth_(inst_16277)){
var statearr_16501_16602 = state_16395__$1;
(statearr_16501_16602[(1)] = (10));

} else {
var statearr_16502_16603 = state_16395__$1;
(statearr_16502_16603[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___16513,cs,m,dchan,dctr,done))
;
return ((function (switch__13584__auto__,c__14658__auto___16513,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13585__auto__ = null;
var cljs$core$async$mult_$_state_machine__13585__auto____0 = (function (){
var statearr_16506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16506[(0)] = cljs$core$async$mult_$_state_machine__13585__auto__);

(statearr_16506[(1)] = (1));

return statearr_16506;
});
var cljs$core$async$mult_$_state_machine__13585__auto____1 = (function (state_16395){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_16395);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e16507){if((e16507 instanceof Object)){
var ex__13588__auto__ = e16507;
var statearr_16508_16605 = state_16395;
(statearr_16508_16605[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16395);

return cljs.core.cst$kw$recur;
} else {
throw e16507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__16606 = state_16395;
state_16395 = G__16606;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13585__auto__ = function(state_16395){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13585__auto____1.call(this,state_16395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13585__auto____0;
cljs$core$async$mult_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13585__auto____1;
return cljs$core$async$mult_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___16513,cs,m,dchan,dctr,done))
})();
var state__14660__auto__ = (function (){var statearr_16509 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_16509[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___16513);

return statearr_16509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___16513,cs,m,dchan,dctr,done))
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
var args16607 = [];
var len__7296__auto___16610 = arguments.length;
var i__7297__auto___16611 = (0);
while(true){
if((i__7297__auto___16611 < len__7296__auto___16610)){
args16607.push((arguments[i__7297__auto___16611]));

var G__16612 = (i__7297__auto___16611 + (1));
i__7297__auto___16611 = G__16612;
continue;
} else {
}
break;
}

var G__16609 = args16607.length;
switch (G__16609) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16607.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto__.call(null,m,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto__.call(null,m,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__6885__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto__.call(null,m));
} else {
var m__6885__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__6885__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6885__auto__.call(null,m,state_map));
} else {
var m__6885__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__6885__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6885__auto__.call(null,m,mode));
} else {
var m__6885__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__6885__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___16644 = arguments.length;
var i__7297__auto___16645 = (0);
while(true){
if((i__7297__auto___16645 < len__7296__auto___16644)){
args__7303__auto__.push((arguments[i__7297__auto___16645]));

var G__16646 = (i__7297__auto___16645 + (1));
i__7297__auto___16645 = G__16646;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((3) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16635){
var map__16636 = p__16635;
var map__16636__$1 = ((((!((map__16636 == null)))?((((map__16636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16636):map__16636);
var opts = map__16636__$1;
var statearr_16638_16650 = state;
(statearr_16638_16650[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__16636,map__16636__$1,opts){
return (function (val){
var statearr_16639_16651 = state;
(statearr_16639_16651[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__16636,map__16636__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_16643_16652 = state;
(statearr_16643_16652[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16627){
var G__16628 = cljs.core.first(seq16627);
var seq16627__$1 = cljs.core.next(seq16627);
var G__16629 = cljs.core.first(seq16627__$1);
var seq16627__$2 = cljs.core.next(seq16627__$1);
var G__16630 = cljs.core.first(seq16627__$2);
var seq16627__$3 = cljs.core.next(seq16627__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16628,G__16629,G__16630,seq16627__$3);
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
var cs = (function (){var G__16849 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16849) : cljs.core.atom.call(null,G__16849));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute) : cljs.core.atom.call(null,cljs.core.cst$kw$mute));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async16854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16854 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16855){
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
this.meta16855 = meta16855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16856,meta16855__$1){
var self__ = this;
var _16856__$1 = this;
return (new cljs.core.async.t_cljs$core$async16854(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16855__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16856){
var self__ = this;
var _16856__$1 = this;
return self__.meta16855;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__16857_17072 = self__.cs;
var G__16858_17073 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__16857_17072,G__16858_17073) : cljs.core.reset_BANG_.call(null,G__16857_17072,G__16858_17073));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta16855], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16854";

cljs.core.async.t_cljs$core$async16854.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async16854");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async16854 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16855){
return (new cljs.core.async.t_cljs$core$async16854(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16855));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16854(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14658__auto___17074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___17074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___17074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16973){
var state_val_16977 = (state_16973[(1)]);
if((state_val_16977 === (7))){
var inst_16880 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_16978_17078 = state_16973__$1;
(statearr_16978_17078[(2)] = inst_16880);

(statearr_16978_17078[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (20))){
var inst_16892 = (state_16973[(7)]);
var state_16973__$1 = state_16973;
var statearr_16979_17079 = state_16973__$1;
(statearr_16979_17079[(2)] = inst_16892);

(statearr_16979_17079[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (27))){
var state_16973__$1 = state_16973;
var statearr_16980_17083 = state_16973__$1;
(statearr_16980_17083[(2)] = null);

(statearr_16980_17083[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (1))){
var inst_16868 = (state_16973[(8)]);
var inst_16868__$1 = calc_state();
var inst_16870 = (inst_16868__$1 == null);
var inst_16871 = cljs.core.not(inst_16870);
var state_16973__$1 = (function (){var statearr_16983 = state_16973;
(statearr_16983[(8)] = inst_16868__$1);

return statearr_16983;
})();
if(inst_16871){
var statearr_16984_17084 = state_16973__$1;
(statearr_16984_17084[(1)] = (2));

} else {
var statearr_16985_17085 = state_16973__$1;
(statearr_16985_17085[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (24))){
var inst_16924 = (state_16973[(9)]);
var inst_16941 = (state_16973[(10)]);
var inst_16915 = (state_16973[(11)]);
var inst_16941__$1 = (inst_16915.cljs$core$IFn$_invoke$arity$1 ? inst_16915.cljs$core$IFn$_invoke$arity$1(inst_16924) : inst_16915.call(null,inst_16924));
var state_16973__$1 = (function (){var statearr_16986 = state_16973;
(statearr_16986[(10)] = inst_16941__$1);

return statearr_16986;
})();
if(cljs.core.truth_(inst_16941__$1)){
var statearr_16987_17086 = state_16973__$1;
(statearr_16987_17086[(1)] = (29));

} else {
var statearr_16988_17087 = state_16973__$1;
(statearr_16988_17087[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (4))){
var inst_16883 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16883)){
var statearr_16989_17088 = state_16973__$1;
(statearr_16989_17088[(1)] = (8));

} else {
var statearr_16990_17089 = state_16973__$1;
(statearr_16990_17089[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (15))){
var inst_16909 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16909)){
var statearr_16994_17090 = state_16973__$1;
(statearr_16994_17090[(1)] = (19));

} else {
var statearr_16998_17091 = state_16973__$1;
(statearr_16998_17091[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (21))){
var inst_16914 = (state_16973[(12)]);
var inst_16914__$1 = (state_16973[(2)]);
var inst_16915 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16914__$1,cljs.core.cst$kw$solos);
var inst_16916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16914__$1,cljs.core.cst$kw$mutes);
var inst_16917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16914__$1,cljs.core.cst$kw$reads);
var state_16973__$1 = (function (){var statearr_16999 = state_16973;
(statearr_16999[(13)] = inst_16916);

(statearr_16999[(11)] = inst_16915);

(statearr_16999[(12)] = inst_16914__$1);

return statearr_16999;
})();
return cljs.core.async.ioc_alts_BANG_(state_16973__$1,(22),inst_16917);
} else {
if((state_val_16977 === (31))){
var inst_16952 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16952)){
var statearr_17000_17092 = state_16973__$1;
(statearr_17000_17092[(1)] = (32));

} else {
var statearr_17001_17093 = state_16973__$1;
(statearr_17001_17093[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (32))){
var inst_16923 = (state_16973[(14)]);
var state_16973__$1 = state_16973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16973__$1,(35),out,inst_16923);
} else {
if((state_val_16977 === (33))){
var inst_16914 = (state_16973[(12)]);
var inst_16892 = inst_16914;
var state_16973__$1 = (function (){var statearr_17002 = state_16973;
(statearr_17002[(7)] = inst_16892);

return statearr_17002;
})();
var statearr_17003_17094 = state_16973__$1;
(statearr_17003_17094[(2)] = null);

(statearr_17003_17094[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (13))){
var inst_16892 = (state_16973[(7)]);
var inst_16899 = inst_16892.cljs$lang$protocol_mask$partition0$;
var inst_16900 = (inst_16899 & (64));
var inst_16901 = inst_16892.cljs$core$ISeq$;
var inst_16902 = (inst_16900) || (inst_16901);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16902)){
var statearr_17004_17095 = state_16973__$1;
(statearr_17004_17095[(1)] = (16));

} else {
var statearr_17005_17096 = state_16973__$1;
(statearr_17005_17096[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (22))){
var inst_16924 = (state_16973[(9)]);
var inst_16923 = (state_16973[(14)]);
var inst_16922 = (state_16973[(2)]);
var inst_16923__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16922,(0),null);
var inst_16924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16922,(1),null);
var inst_16925 = (inst_16923__$1 == null);
var inst_16926 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16924__$1,change);
var inst_16927 = (inst_16925) || (inst_16926);
var state_16973__$1 = (function (){var statearr_17006 = state_16973;
(statearr_17006[(9)] = inst_16924__$1);

(statearr_17006[(14)] = inst_16923__$1);

return statearr_17006;
})();
if(cljs.core.truth_(inst_16927)){
var statearr_17007_17109 = state_16973__$1;
(statearr_17007_17109[(1)] = (23));

} else {
var statearr_17008_17110 = state_16973__$1;
(statearr_17008_17110[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (36))){
var inst_16914 = (state_16973[(12)]);
var inst_16892 = inst_16914;
var state_16973__$1 = (function (){var statearr_17009 = state_16973;
(statearr_17009[(7)] = inst_16892);

return statearr_17009;
})();
var statearr_17010_17111 = state_16973__$1;
(statearr_17010_17111[(2)] = null);

(statearr_17010_17111[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (29))){
var inst_16941 = (state_16973[(10)]);
var state_16973__$1 = state_16973;
var statearr_17012_17112 = state_16973__$1;
(statearr_17012_17112[(2)] = inst_16941);

(statearr_17012_17112[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (6))){
var state_16973__$1 = state_16973;
var statearr_17018_17113 = state_16973__$1;
(statearr_17018_17113[(2)] = false);

(statearr_17018_17113[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (28))){
var inst_16934 = (state_16973[(2)]);
var inst_16935 = calc_state();
var inst_16892 = inst_16935;
var state_16973__$1 = (function (){var statearr_17019 = state_16973;
(statearr_17019[(7)] = inst_16892);

(statearr_17019[(15)] = inst_16934);

return statearr_17019;
})();
var statearr_17020_17114 = state_16973__$1;
(statearr_17020_17114[(2)] = null);

(statearr_17020_17114[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (25))){
var inst_16966 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_17027_17115 = state_16973__$1;
(statearr_17027_17115[(2)] = inst_16966);

(statearr_17027_17115[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (34))){
var inst_16964 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_17028_17116 = state_16973__$1;
(statearr_17028_17116[(2)] = inst_16964);

(statearr_17028_17116[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (17))){
var state_16973__$1 = state_16973;
var statearr_17029_17129 = state_16973__$1;
(statearr_17029_17129[(2)] = false);

(statearr_17029_17129[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (3))){
var state_16973__$1 = state_16973;
var statearr_17030_17130 = state_16973__$1;
(statearr_17030_17130[(2)] = false);

(statearr_17030_17130[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (12))){
var inst_16968 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16973__$1,inst_16968);
} else {
if((state_val_16977 === (2))){
var inst_16868 = (state_16973[(8)]);
var inst_16873 = inst_16868.cljs$lang$protocol_mask$partition0$;
var inst_16874 = (inst_16873 & (64));
var inst_16875 = inst_16868.cljs$core$ISeq$;
var inst_16876 = (inst_16874) || (inst_16875);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16876)){
var statearr_17031_17131 = state_16973__$1;
(statearr_17031_17131[(1)] = (5));

} else {
var statearr_17032_17132 = state_16973__$1;
(statearr_17032_17132[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (23))){
var inst_16923 = (state_16973[(14)]);
var inst_16929 = (inst_16923 == null);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16929)){
var statearr_17033_17133 = state_16973__$1;
(statearr_17033_17133[(1)] = (26));

} else {
var statearr_17034_17134 = state_16973__$1;
(statearr_17034_17134[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (35))){
var inst_16955 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
if(cljs.core.truth_(inst_16955)){
var statearr_17035_17135 = state_16973__$1;
(statearr_17035_17135[(1)] = (36));

} else {
var statearr_17036_17136 = state_16973__$1;
(statearr_17036_17136[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (19))){
var inst_16892 = (state_16973[(7)]);
var inst_16911 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16892);
var state_16973__$1 = state_16973;
var statearr_17037_17137 = state_16973__$1;
(statearr_17037_17137[(2)] = inst_16911);

(statearr_17037_17137[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (11))){
var inst_16892 = (state_16973[(7)]);
var inst_16896 = (inst_16892 == null);
var inst_16897 = cljs.core.not(inst_16896);
var state_16973__$1 = state_16973;
if(inst_16897){
var statearr_17038_17138 = state_16973__$1;
(statearr_17038_17138[(1)] = (13));

} else {
var statearr_17039_17139 = state_16973__$1;
(statearr_17039_17139[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (9))){
var inst_16868 = (state_16973[(8)]);
var state_16973__$1 = state_16973;
var statearr_17040_17140 = state_16973__$1;
(statearr_17040_17140[(2)] = inst_16868);

(statearr_17040_17140[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (5))){
var state_16973__$1 = state_16973;
var statearr_17041_17141 = state_16973__$1;
(statearr_17041_17141[(2)] = true);

(statearr_17041_17141[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (14))){
var state_16973__$1 = state_16973;
var statearr_17042_17142 = state_16973__$1;
(statearr_17042_17142[(2)] = false);

(statearr_17042_17142[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (26))){
var inst_16924 = (state_16973[(9)]);
var inst_16931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16924);
var state_16973__$1 = state_16973;
var statearr_17043_17143 = state_16973__$1;
(statearr_17043_17143[(2)] = inst_16931);

(statearr_17043_17143[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (16))){
var state_16973__$1 = state_16973;
var statearr_17047_17144 = state_16973__$1;
(statearr_17047_17144[(2)] = true);

(statearr_17047_17144[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (38))){
var inst_16960 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_17048_17145 = state_16973__$1;
(statearr_17048_17145[(2)] = inst_16960);

(statearr_17048_17145[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (30))){
var inst_16924 = (state_16973[(9)]);
var inst_16916 = (state_16973[(13)]);
var inst_16915 = (state_16973[(11)]);
var inst_16947 = cljs.core.empty_QMARK_(inst_16915);
var inst_16948 = (inst_16916.cljs$core$IFn$_invoke$arity$1 ? inst_16916.cljs$core$IFn$_invoke$arity$1(inst_16924) : inst_16916.call(null,inst_16924));
var inst_16949 = cljs.core.not(inst_16948);
var inst_16950 = (inst_16947) && (inst_16949);
var state_16973__$1 = state_16973;
var statearr_17049_17146 = state_16973__$1;
(statearr_17049_17146[(2)] = inst_16950);

(statearr_17049_17146[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (10))){
var inst_16868 = (state_16973[(8)]);
var inst_16888 = (state_16973[(2)]);
var inst_16889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16888,cljs.core.cst$kw$solos);
var inst_16890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16888,cljs.core.cst$kw$mutes);
var inst_16891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16888,cljs.core.cst$kw$reads);
var inst_16892 = inst_16868;
var state_16973__$1 = (function (){var statearr_17053 = state_16973;
(statearr_17053[(16)] = inst_16889);

(statearr_17053[(17)] = inst_16890);

(statearr_17053[(7)] = inst_16892);

(statearr_17053[(18)] = inst_16891);

return statearr_17053;
})();
var statearr_17054_17152 = state_16973__$1;
(statearr_17054_17152[(2)] = null);

(statearr_17054_17152[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (18))){
var inst_16906 = (state_16973[(2)]);
var state_16973__$1 = state_16973;
var statearr_17055_17153 = state_16973__$1;
(statearr_17055_17153[(2)] = inst_16906);

(statearr_17055_17153[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (37))){
var state_16973__$1 = state_16973;
var statearr_17056_17154 = state_16973__$1;
(statearr_17056_17154[(2)] = null);

(statearr_17056_17154[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16977 === (8))){
var inst_16868 = (state_16973[(8)]);
var inst_16885 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_16868);
var state_16973__$1 = state_16973;
var statearr_17057_17155 = state_16973__$1;
(statearr_17057_17155[(2)] = inst_16885);

(statearr_17057_17155[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___17074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13584__auto__,c__14658__auto___17074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13585__auto__ = null;
var cljs$core$async$mix_$_state_machine__13585__auto____0 = (function (){
var statearr_17061 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17061[(0)] = cljs$core$async$mix_$_state_machine__13585__auto__);

(statearr_17061[(1)] = (1));

return statearr_17061;
});
var cljs$core$async$mix_$_state_machine__13585__auto____1 = (function (state_16973){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_16973);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e17062){if((e17062 instanceof Object)){
var ex__13588__auto__ = e17062;
var statearr_17063_17159 = state_16973;
(statearr_17063_17159[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16973);

return cljs.core.cst$kw$recur;
} else {
throw e17062;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__17167 = state_16973;
state_16973 = G__17167;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13585__auto__ = function(state_16973){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13585__auto____1.call(this,state_16973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13585__auto____0;
cljs$core$async$mix_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13585__auto____1;
return cljs$core$async$mix_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___17074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14660__auto__ = (function (){var statearr_17064 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_17064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___17074);

return statearr_17064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___17074,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$4 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6885__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__6885__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__6885__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6885__auto__.call(null,p,v,ch));
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__6885__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args17190 = [];
var len__7296__auto___17221 = arguments.length;
var i__7297__auto___17222 = (0);
while(true){
if((i__7297__auto___17222 < len__7296__auto___17221)){
args17190.push((arguments[i__7297__auto___17222]));

var G__17223 = (i__7297__auto___17222 + (1));
i__7297__auto___17222 = G__17223;
continue;
} else {
}
break;
}

var G__17192 = args17190.length;
switch (G__17192) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17190.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__6884__auto__ = (((p == null))?null:p);
var m__6885__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__6885__auto__.call(null,p));
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__6885__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__6885__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__6885__auto__.call(null,p,v));
} else {
var m__6885__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return (m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6885__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__6885__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var args17231 = [];
var len__7296__auto___17408 = arguments.length;
var i__7297__auto___17409 = (0);
while(true){
if((i__7297__auto___17409 < len__7296__auto___17408)){
args17231.push((arguments[i__7297__auto___17409]));

var G__17410 = (i__7297__auto___17409 + (1));
i__7297__auto___17409 = G__17410;
continue;
} else {
}
break;
}

var G__17240 = args17231.length;
switch (G__17240) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17231.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__17241 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17241) : cljs.core.atom.call(null,G__17241));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6221__auto__,mults){
return (function (p1__17230_SHARP_){
if(cljs.core.truth_((p1__17230_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17230_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17230_SHARP_.call(null,topic)))){
return p1__17230_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17230_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6221__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async17248 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17248 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17249){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17249 = meta17249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17250,meta17249__$1){
var self__ = this;
var _17250__$1 = this;
return (new cljs.core.async.t_cljs$core$async17248(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17249__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17250){
var self__ = this;
var _17250__$1 = this;
return self__.meta17249;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17251 = self__.mults;
var G__17252 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17251,G__17252) : cljs.core.reset_BANG_.call(null,G__17251,G__17252));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta17249], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async17248.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17248";

cljs.core.async.t_cljs$core$async17248.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async17248");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async17248 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async17248(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17249){
return (new cljs.core.async.t_cljs$core$async17248(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta17249));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async17248(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14658__auto___17424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___17424,mults,ensure_mult,p){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___17424,mults,ensure_mult,p){
return (function (state_17342){
var state_val_17343 = (state_17342[(1)]);
if((state_val_17343 === (7))){
var inst_17329 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
var statearr_17344_17428 = state_17342__$1;
(statearr_17344_17428[(2)] = inst_17329);

(statearr_17344_17428[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (20))){
var state_17342__$1 = state_17342;
var statearr_17345_17429 = state_17342__$1;
(statearr_17345_17429[(2)] = null);

(statearr_17345_17429[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (1))){
var state_17342__$1 = state_17342;
var statearr_17346_17436 = state_17342__$1;
(statearr_17346_17436[(2)] = null);

(statearr_17346_17436[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (24))){
var inst_17312 = (state_17342[(7)]);
var inst_17321 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17312);
var state_17342__$1 = state_17342;
var statearr_17347_17437 = state_17342__$1;
(statearr_17347_17437[(2)] = inst_17321);

(statearr_17347_17437[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (4))){
var inst_17255 = (state_17342[(8)]);
var inst_17255__$1 = (state_17342[(2)]);
var inst_17256 = (inst_17255__$1 == null);
var state_17342__$1 = (function (){var statearr_17348 = state_17342;
(statearr_17348[(8)] = inst_17255__$1);

return statearr_17348;
})();
if(cljs.core.truth_(inst_17256)){
var statearr_17349_17438 = state_17342__$1;
(statearr_17349_17438[(1)] = (5));

} else {
var statearr_17350_17439 = state_17342__$1;
(statearr_17350_17439[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (15))){
var inst_17306 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
var statearr_17351_17440 = state_17342__$1;
(statearr_17351_17440[(2)] = inst_17306);

(statearr_17351_17440[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (21))){
var inst_17326 = (state_17342[(2)]);
var state_17342__$1 = (function (){var statearr_17352 = state_17342;
(statearr_17352[(9)] = inst_17326);

return statearr_17352;
})();
var statearr_17353_17447 = state_17342__$1;
(statearr_17353_17447[(2)] = null);

(statearr_17353_17447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (13))){
var inst_17279 = (state_17342[(10)]);
var inst_17281 = cljs.core.chunked_seq_QMARK_(inst_17279);
var state_17342__$1 = state_17342;
if(inst_17281){
var statearr_17354_17448 = state_17342__$1;
(statearr_17354_17448[(1)] = (16));

} else {
var statearr_17355_17449 = state_17342__$1;
(statearr_17355_17449[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (22))){
var inst_17318 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
if(cljs.core.truth_(inst_17318)){
var statearr_17356_17450 = state_17342__$1;
(statearr_17356_17450[(1)] = (23));

} else {
var statearr_17357_17451 = state_17342__$1;
(statearr_17357_17451[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (6))){
var inst_17312 = (state_17342[(7)]);
var inst_17314 = (state_17342[(11)]);
var inst_17255 = (state_17342[(8)]);
var inst_17312__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17255) : topic_fn.call(null,inst_17255));
var inst_17313 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17314__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17313,inst_17312__$1);
var state_17342__$1 = (function (){var statearr_17358 = state_17342;
(statearr_17358[(7)] = inst_17312__$1);

(statearr_17358[(11)] = inst_17314__$1);

return statearr_17358;
})();
if(cljs.core.truth_(inst_17314__$1)){
var statearr_17359_17452 = state_17342__$1;
(statearr_17359_17452[(1)] = (19));

} else {
var statearr_17360_17453 = state_17342__$1;
(statearr_17360_17453[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (25))){
var inst_17323 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
var statearr_17361_17454 = state_17342__$1;
(statearr_17361_17454[(2)] = inst_17323);

(statearr_17361_17454[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (17))){
var inst_17279 = (state_17342[(10)]);
var inst_17297 = cljs.core.first(inst_17279);
var inst_17298 = cljs.core.async.muxch_STAR_(inst_17297);
var inst_17299 = cljs.core.async.close_BANG_(inst_17298);
var inst_17300 = cljs.core.next(inst_17279);
var inst_17265 = inst_17300;
var inst_17266 = null;
var inst_17267 = (0);
var inst_17268 = (0);
var state_17342__$1 = (function (){var statearr_17365 = state_17342;
(statearr_17365[(12)] = inst_17266);

(statearr_17365[(13)] = inst_17299);

(statearr_17365[(14)] = inst_17265);

(statearr_17365[(15)] = inst_17267);

(statearr_17365[(16)] = inst_17268);

return statearr_17365;
})();
var statearr_17366_17457 = state_17342__$1;
(statearr_17366_17457[(2)] = null);

(statearr_17366_17457[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (3))){
var inst_17331 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17342__$1,inst_17331);
} else {
if((state_val_17343 === (12))){
var inst_17308 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
var statearr_17370_17461 = state_17342__$1;
(statearr_17370_17461[(2)] = inst_17308);

(statearr_17370_17461[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (2))){
var state_17342__$1 = state_17342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17342__$1,(4),ch);
} else {
if((state_val_17343 === (23))){
var state_17342__$1 = state_17342;
var statearr_17371_17462 = state_17342__$1;
(statearr_17371_17462[(2)] = null);

(statearr_17371_17462[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (19))){
var inst_17314 = (state_17342[(11)]);
var inst_17255 = (state_17342[(8)]);
var inst_17316 = cljs.core.async.muxch_STAR_(inst_17314);
var state_17342__$1 = state_17342;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17342__$1,(22),inst_17316,inst_17255);
} else {
if((state_val_17343 === (11))){
var inst_17279 = (state_17342[(10)]);
var inst_17265 = (state_17342[(14)]);
var inst_17279__$1 = cljs.core.seq(inst_17265);
var state_17342__$1 = (function (){var statearr_17372 = state_17342;
(statearr_17372[(10)] = inst_17279__$1);

return statearr_17372;
})();
if(inst_17279__$1){
var statearr_17373_17463 = state_17342__$1;
(statearr_17373_17463[(1)] = (13));

} else {
var statearr_17374_17464 = state_17342__$1;
(statearr_17374_17464[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (9))){
var inst_17310 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
var statearr_17375_17465 = state_17342__$1;
(statearr_17375_17465[(2)] = inst_17310);

(statearr_17375_17465[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (5))){
var inst_17262 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_17263 = cljs.core.vals(inst_17262);
var inst_17264 = cljs.core.seq(inst_17263);
var inst_17265 = inst_17264;
var inst_17266 = null;
var inst_17267 = (0);
var inst_17268 = (0);
var state_17342__$1 = (function (){var statearr_17376 = state_17342;
(statearr_17376[(12)] = inst_17266);

(statearr_17376[(14)] = inst_17265);

(statearr_17376[(15)] = inst_17267);

(statearr_17376[(16)] = inst_17268);

return statearr_17376;
})();
var statearr_17377_17469 = state_17342__$1;
(statearr_17377_17469[(2)] = null);

(statearr_17377_17469[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (14))){
var state_17342__$1 = state_17342;
var statearr_17381_17470 = state_17342__$1;
(statearr_17381_17470[(2)] = null);

(statearr_17381_17470[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (16))){
var inst_17279 = (state_17342[(10)]);
var inst_17283 = cljs.core.chunk_first(inst_17279);
var inst_17284 = cljs.core.chunk_rest(inst_17279);
var inst_17285 = cljs.core.count(inst_17283);
var inst_17265 = inst_17284;
var inst_17266 = inst_17283;
var inst_17267 = inst_17285;
var inst_17268 = (0);
var state_17342__$1 = (function (){var statearr_17382 = state_17342;
(statearr_17382[(12)] = inst_17266);

(statearr_17382[(14)] = inst_17265);

(statearr_17382[(15)] = inst_17267);

(statearr_17382[(16)] = inst_17268);

return statearr_17382;
})();
var statearr_17386_17471 = state_17342__$1;
(statearr_17386_17471[(2)] = null);

(statearr_17386_17471[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (10))){
var inst_17266 = (state_17342[(12)]);
var inst_17265 = (state_17342[(14)]);
var inst_17267 = (state_17342[(15)]);
var inst_17268 = (state_17342[(16)]);
var inst_17273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17266,inst_17268);
var inst_17274 = cljs.core.async.muxch_STAR_(inst_17273);
var inst_17275 = cljs.core.async.close_BANG_(inst_17274);
var inst_17276 = (inst_17268 + (1));
var tmp17378 = inst_17266;
var tmp17379 = inst_17265;
var tmp17380 = inst_17267;
var inst_17265__$1 = tmp17379;
var inst_17266__$1 = tmp17378;
var inst_17267__$1 = tmp17380;
var inst_17268__$1 = inst_17276;
var state_17342__$1 = (function (){var statearr_17390 = state_17342;
(statearr_17390[(12)] = inst_17266__$1);

(statearr_17390[(17)] = inst_17275);

(statearr_17390[(14)] = inst_17265__$1);

(statearr_17390[(15)] = inst_17267__$1);

(statearr_17390[(16)] = inst_17268__$1);

return statearr_17390;
})();
var statearr_17391_17472 = state_17342__$1;
(statearr_17391_17472[(2)] = null);

(statearr_17391_17472[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (18))){
var inst_17303 = (state_17342[(2)]);
var state_17342__$1 = state_17342;
var statearr_17392_17473 = state_17342__$1;
(statearr_17392_17473[(2)] = inst_17303);

(statearr_17392_17473[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17343 === (8))){
var inst_17267 = (state_17342[(15)]);
var inst_17268 = (state_17342[(16)]);
var inst_17270 = (inst_17268 < inst_17267);
var inst_17271 = inst_17270;
var state_17342__$1 = state_17342;
if(cljs.core.truth_(inst_17271)){
var statearr_17393_17477 = state_17342__$1;
(statearr_17393_17477[(1)] = (10));

} else {
var statearr_17394_17478 = state_17342__$1;
(statearr_17394_17478[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___17424,mults,ensure_mult,p))
;
return ((function (switch__13584__auto__,c__14658__auto___17424,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_17401 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17401[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_17401[(1)] = (1));

return statearr_17401;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_17342){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_17342);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e17405){if((e17405 instanceof Object)){
var ex__13588__auto__ = e17405;
var statearr_17406_17482 = state_17342;
(statearr_17406_17482[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17342);

return cljs.core.cst$kw$recur;
} else {
throw e17405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__17483 = state_17342;
state_17342 = G__17483;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_17342){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_17342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___17424,mults,ensure_mult,p))
})();
var state__14660__auto__ = (function (){var statearr_17407 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_17407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___17424);

return statearr_17407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___17424,mults,ensure_mult,p))
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
var args17490 = [];
var len__7296__auto___17496 = arguments.length;
var i__7297__auto___17497 = (0);
while(true){
if((i__7297__auto___17497 < len__7296__auto___17496)){
args17490.push((arguments[i__7297__auto___17497]));

var G__17498 = (i__7297__auto___17497 + (1));
i__7297__auto___17497 = G__17498;
continue;
} else {
}
break;
}

var G__17492 = args17490.length;
switch (G__17492) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17490.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args17502 = [];
var len__7296__auto___17513 = arguments.length;
var i__7297__auto___17514 = (0);
while(true){
if((i__7297__auto___17514 < len__7296__auto___17513)){
args17502.push((arguments[i__7297__auto___17514]));

var G__17515 = (i__7297__auto___17514 + (1));
i__7297__auto___17514 = G__17515;
continue;
} else {
}
break;
}

var G__17508 = args17502.length;
switch (G__17508) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17502.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var args17517 = [];
var len__7296__auto___17617 = arguments.length;
var i__7297__auto___17618 = (0);
while(true){
if((i__7297__auto___17618 < len__7296__auto___17617)){
args17517.push((arguments[i__7297__auto___17618]));

var G__17619 = (i__7297__auto___17618 + (1));
i__7297__auto___17618 = G__17619;
continue;
} else {
}
break;
}

var G__17534 = args17517.length;
switch (G__17534) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17517.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__14658__auto___17621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___17621,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___17621,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17586){
var state_val_17587 = (state_17586[(1)]);
if((state_val_17587 === (7))){
var state_17586__$1 = state_17586;
var statearr_17588_17622 = state_17586__$1;
(statearr_17588_17622[(2)] = null);

(statearr_17588_17622[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (1))){
var state_17586__$1 = state_17586;
var statearr_17589_17623 = state_17586__$1;
(statearr_17589_17623[(2)] = null);

(statearr_17589_17623[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (4))){
var inst_17537 = (state_17586[(7)]);
var inst_17539 = (inst_17537 < cnt);
var state_17586__$1 = state_17586;
if(cljs.core.truth_(inst_17539)){
var statearr_17590_17624 = state_17586__$1;
(statearr_17590_17624[(1)] = (6));

} else {
var statearr_17591_17625 = state_17586__$1;
(statearr_17591_17625[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (15))){
var inst_17582 = (state_17586[(2)]);
var state_17586__$1 = state_17586;
var statearr_17592_17630 = state_17586__$1;
(statearr_17592_17630[(2)] = inst_17582);

(statearr_17592_17630[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (13))){
var inst_17563 = cljs.core.async.close_BANG_(out);
var state_17586__$1 = state_17586;
var statearr_17593_17631 = state_17586__$1;
(statearr_17593_17631[(2)] = inst_17563);

(statearr_17593_17631[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (6))){
var state_17586__$1 = state_17586;
var statearr_17594_17632 = state_17586__$1;
(statearr_17594_17632[(2)] = null);

(statearr_17594_17632[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (3))){
var inst_17584 = (state_17586[(2)]);
var state_17586__$1 = state_17586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17586__$1,inst_17584);
} else {
if((state_val_17587 === (12))){
var inst_17560 = (state_17586[(8)]);
var inst_17560__$1 = (state_17586[(2)]);
var inst_17561 = cljs.core.some(cljs.core.nil_QMARK_,inst_17560__$1);
var state_17586__$1 = (function (){var statearr_17595 = state_17586;
(statearr_17595[(8)] = inst_17560__$1);

return statearr_17595;
})();
if(cljs.core.truth_(inst_17561)){
var statearr_17596_17637 = state_17586__$1;
(statearr_17596_17637[(1)] = (13));

} else {
var statearr_17597_17638 = state_17586__$1;
(statearr_17597_17638[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (2))){
var inst_17536 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_17537 = (0);
var state_17586__$1 = (function (){var statearr_17598 = state_17586;
(statearr_17598[(9)] = inst_17536);

(statearr_17598[(7)] = inst_17537);

return statearr_17598;
})();
var statearr_17599_17642 = state_17586__$1;
(statearr_17599_17642[(2)] = null);

(statearr_17599_17642[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (11))){
var inst_17537 = (state_17586[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_17586,(10),Object,null,(9));
var inst_17547 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17537) : chs__$1.call(null,inst_17537));
var inst_17548 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17537) : done.call(null,inst_17537));
var inst_17549 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17547,inst_17548);
var state_17586__$1 = state_17586;
var statearr_17601_17646 = state_17586__$1;
(statearr_17601_17646[(2)] = inst_17549);


cljs.core.async.impl.ioc_helpers.process_exception(state_17586__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (9))){
var inst_17537 = (state_17586[(7)]);
var inst_17551 = (state_17586[(2)]);
var inst_17552 = (inst_17537 + (1));
var inst_17537__$1 = inst_17552;
var state_17586__$1 = (function (){var statearr_17602 = state_17586;
(statearr_17602[(10)] = inst_17551);

(statearr_17602[(7)] = inst_17537__$1);

return statearr_17602;
})();
var statearr_17603_17647 = state_17586__$1;
(statearr_17603_17647[(2)] = null);

(statearr_17603_17647[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (5))){
var inst_17558 = (state_17586[(2)]);
var state_17586__$1 = (function (){var statearr_17604 = state_17586;
(statearr_17604[(11)] = inst_17558);

return statearr_17604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17586__$1,(12),dchan);
} else {
if((state_val_17587 === (14))){
var inst_17560 = (state_17586[(8)]);
var inst_17565 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17560);
var state_17586__$1 = state_17586;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17586__$1,(16),out,inst_17565);
} else {
if((state_val_17587 === (16))){
var inst_17576 = (state_17586[(2)]);
var state_17586__$1 = (function (){var statearr_17605 = state_17586;
(statearr_17605[(12)] = inst_17576);

return statearr_17605;
})();
var statearr_17606_17651 = state_17586__$1;
(statearr_17606_17651[(2)] = null);

(statearr_17606_17651[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (10))){
var inst_17542 = (state_17586[(2)]);
var inst_17543 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17586__$1 = (function (){var statearr_17607 = state_17586;
(statearr_17607[(13)] = inst_17542);

return statearr_17607;
})();
var statearr_17608_17655 = state_17586__$1;
(statearr_17608_17655[(2)] = inst_17543);


cljs.core.async.impl.ioc_helpers.process_exception(state_17586__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_17587 === (8))){
var inst_17556 = (state_17586[(2)]);
var state_17586__$1 = state_17586;
var statearr_17609_17656 = state_17586__$1;
(statearr_17609_17656[(2)] = inst_17556);

(statearr_17609_17656[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___17621,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13584__auto__,c__14658__auto___17621,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_17613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17613[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_17613[(1)] = (1));

return statearr_17613;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_17586){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_17586);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e17614){if((e17614 instanceof Object)){
var ex__13588__auto__ = e17614;
var statearr_17615_17657 = state_17586;
(statearr_17615_17657[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17586);

return cljs.core.cst$kw$recur;
} else {
throw e17614;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__17658 = state_17586;
state_17586 = G__17658;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_17586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_17586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___17621,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14660__auto__ = (function (){var statearr_17616 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_17616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___17621);

return statearr_17616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___17621,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args17660 = [];
var len__7296__auto___17730 = arguments.length;
var i__7297__auto___17731 = (0);
while(true){
if((i__7297__auto___17731 < len__7296__auto___17730)){
args17660.push((arguments[i__7297__auto___17731]));

var G__17732 = (i__7297__auto___17731 + (1));
i__7297__auto___17731 = G__17732;
continue;
} else {
}
break;
}

var G__17665 = args17660.length;
switch (G__17665) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17660.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___17734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___17734,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___17734,out){
return (function (state_17700){
var state_val_17701 = (state_17700[(1)]);
if((state_val_17701 === (7))){
var inst_17680 = (state_17700[(7)]);
var inst_17679 = (state_17700[(8)]);
var inst_17679__$1 = (state_17700[(2)]);
var inst_17680__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17679__$1,(0),null);
var inst_17681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17679__$1,(1),null);
var inst_17682 = (inst_17680__$1 == null);
var state_17700__$1 = (function (){var statearr_17705 = state_17700;
(statearr_17705[(9)] = inst_17681);

(statearr_17705[(7)] = inst_17680__$1);

(statearr_17705[(8)] = inst_17679__$1);

return statearr_17705;
})();
if(cljs.core.truth_(inst_17682)){
var statearr_17706_17735 = state_17700__$1;
(statearr_17706_17735[(1)] = (8));

} else {
var statearr_17707_17736 = state_17700__$1;
(statearr_17707_17736[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17701 === (1))){
var inst_17666 = cljs.core.vec(chs);
var inst_17667 = inst_17666;
var state_17700__$1 = (function (){var statearr_17711 = state_17700;
(statearr_17711[(10)] = inst_17667);

return statearr_17711;
})();
var statearr_17712_17737 = state_17700__$1;
(statearr_17712_17737[(2)] = null);

(statearr_17712_17737[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17701 === (4))){
var inst_17667 = (state_17700[(10)]);
var state_17700__$1 = state_17700;
return cljs.core.async.ioc_alts_BANG_(state_17700__$1,(7),inst_17667);
} else {
if((state_val_17701 === (6))){
var inst_17696 = (state_17700[(2)]);
var state_17700__$1 = state_17700;
var statearr_17713_17741 = state_17700__$1;
(statearr_17713_17741[(2)] = inst_17696);

(statearr_17713_17741[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17701 === (3))){
var inst_17698 = (state_17700[(2)]);
var state_17700__$1 = state_17700;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17700__$1,inst_17698);
} else {
if((state_val_17701 === (2))){
var inst_17667 = (state_17700[(10)]);
var inst_17672 = cljs.core.count(inst_17667);
var inst_17673 = (inst_17672 > (0));
var state_17700__$1 = state_17700;
if(cljs.core.truth_(inst_17673)){
var statearr_17715_17742 = state_17700__$1;
(statearr_17715_17742[(1)] = (4));

} else {
var statearr_17716_17743 = state_17700__$1;
(statearr_17716_17743[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17701 === (11))){
var inst_17667 = (state_17700[(10)]);
var inst_17689 = (state_17700[(2)]);
var tmp17714 = inst_17667;
var inst_17667__$1 = tmp17714;
var state_17700__$1 = (function (){var statearr_17717 = state_17700;
(statearr_17717[(11)] = inst_17689);

(statearr_17717[(10)] = inst_17667__$1);

return statearr_17717;
})();
var statearr_17718_17748 = state_17700__$1;
(statearr_17718_17748[(2)] = null);

(statearr_17718_17748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17701 === (9))){
var inst_17680 = (state_17700[(7)]);
var state_17700__$1 = state_17700;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17700__$1,(11),out,inst_17680);
} else {
if((state_val_17701 === (5))){
var inst_17694 = cljs.core.async.close_BANG_(out);
var state_17700__$1 = state_17700;
var statearr_17719_17752 = state_17700__$1;
(statearr_17719_17752[(2)] = inst_17694);

(statearr_17719_17752[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17701 === (10))){
var inst_17692 = (state_17700[(2)]);
var state_17700__$1 = state_17700;
var statearr_17720_17755 = state_17700__$1;
(statearr_17720_17755[(2)] = inst_17692);

(statearr_17720_17755[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17701 === (8))){
var inst_17681 = (state_17700[(9)]);
var inst_17667 = (state_17700[(10)]);
var inst_17680 = (state_17700[(7)]);
var inst_17679 = (state_17700[(8)]);
var inst_17684 = (function (){var cs = inst_17667;
var vec__17675 = inst_17679;
var v = inst_17680;
var c = inst_17681;
return ((function (cs,vec__17675,v,c,inst_17681,inst_17667,inst_17680,inst_17679,state_val_17701,c__14658__auto___17734,out){
return (function (p1__17659_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17659_SHARP_);
});
;})(cs,vec__17675,v,c,inst_17681,inst_17667,inst_17680,inst_17679,state_val_17701,c__14658__auto___17734,out))
})();
var inst_17685 = cljs.core.filterv(inst_17684,inst_17667);
var inst_17667__$1 = inst_17685;
var state_17700__$1 = (function (){var statearr_17721 = state_17700;
(statearr_17721[(10)] = inst_17667__$1);

return statearr_17721;
})();
var statearr_17722_17759 = state_17700__$1;
(statearr_17722_17759[(2)] = null);

(statearr_17722_17759[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___17734,out))
;
return ((function (switch__13584__auto__,c__14658__auto___17734,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_17726 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17726[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_17726[(1)] = (1));

return statearr_17726;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_17700){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_17700);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e17727){if((e17727 instanceof Object)){
var ex__13588__auto__ = e17727;
var statearr_17728_17767 = state_17700;
(statearr_17728_17767[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17700);

return cljs.core.cst$kw$recur;
} else {
throw e17727;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__17768 = state_17700;
state_17700 = G__17768;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_17700){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_17700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___17734,out))
})();
var state__14660__auto__ = (function (){var statearr_17729 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_17729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___17734);

return statearr_17729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___17734,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args17771 = [];
var len__7296__auto___17826 = arguments.length;
var i__7297__auto___17827 = (0);
while(true){
if((i__7297__auto___17827 < len__7296__auto___17826)){
args17771.push((arguments[i__7297__auto___17827]));

var G__17828 = (i__7297__auto___17827 + (1));
i__7297__auto___17827 = G__17828;
continue;
} else {
}
break;
}

var G__17773 = args17771.length;
switch (G__17773) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17771.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___17830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___17830,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___17830,out){
return (function (state_17797){
var state_val_17798 = (state_17797[(1)]);
if((state_val_17798 === (7))){
var inst_17779 = (state_17797[(7)]);
var inst_17779__$1 = (state_17797[(2)]);
var inst_17780 = (inst_17779__$1 == null);
var inst_17781 = cljs.core.not(inst_17780);
var state_17797__$1 = (function (){var statearr_17799 = state_17797;
(statearr_17799[(7)] = inst_17779__$1);

return statearr_17799;
})();
if(inst_17781){
var statearr_17800_17834 = state_17797__$1;
(statearr_17800_17834[(1)] = (8));

} else {
var statearr_17801_17835 = state_17797__$1;
(statearr_17801_17835[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (1))){
var inst_17774 = (0);
var state_17797__$1 = (function (){var statearr_17802 = state_17797;
(statearr_17802[(8)] = inst_17774);

return statearr_17802;
})();
var statearr_17803_17839 = state_17797__$1;
(statearr_17803_17839[(2)] = null);

(statearr_17803_17839[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (4))){
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17797__$1,(7),ch);
} else {
if((state_val_17798 === (6))){
var inst_17792 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17804_17840 = state_17797__$1;
(statearr_17804_17840[(2)] = inst_17792);

(statearr_17804_17840[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (3))){
var inst_17794 = (state_17797[(2)]);
var inst_17795 = cljs.core.async.close_BANG_(out);
var state_17797__$1 = (function (){var statearr_17805 = state_17797;
(statearr_17805[(9)] = inst_17794);

return statearr_17805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17797__$1,inst_17795);
} else {
if((state_val_17798 === (2))){
var inst_17774 = (state_17797[(8)]);
var inst_17776 = (inst_17774 < n);
var state_17797__$1 = state_17797;
if(cljs.core.truth_(inst_17776)){
var statearr_17806_17841 = state_17797__$1;
(statearr_17806_17841[(1)] = (4));

} else {
var statearr_17807_17842 = state_17797__$1;
(statearr_17807_17842[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (11))){
var inst_17774 = (state_17797[(8)]);
var inst_17784 = (state_17797[(2)]);
var inst_17785 = (inst_17774 + (1));
var inst_17774__$1 = inst_17785;
var state_17797__$1 = (function (){var statearr_17808 = state_17797;
(statearr_17808[(8)] = inst_17774__$1);

(statearr_17808[(10)] = inst_17784);

return statearr_17808;
})();
var statearr_17809_17843 = state_17797__$1;
(statearr_17809_17843[(2)] = null);

(statearr_17809_17843[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (9))){
var state_17797__$1 = state_17797;
var statearr_17810_17844 = state_17797__$1;
(statearr_17810_17844[(2)] = null);

(statearr_17810_17844[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (5))){
var state_17797__$1 = state_17797;
var statearr_17814_17845 = state_17797__$1;
(statearr_17814_17845[(2)] = null);

(statearr_17814_17845[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (10))){
var inst_17789 = (state_17797[(2)]);
var state_17797__$1 = state_17797;
var statearr_17815_17846 = state_17797__$1;
(statearr_17815_17846[(2)] = inst_17789);

(statearr_17815_17846[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17798 === (8))){
var inst_17779 = (state_17797[(7)]);
var state_17797__$1 = state_17797;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17797__$1,(11),out,inst_17779);
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
});})(c__14658__auto___17830,out))
;
return ((function (switch__13584__auto__,c__14658__auto___17830,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_17819 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17819[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_17819[(1)] = (1));

return statearr_17819;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_17797){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_17797);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e17820){if((e17820 instanceof Object)){
var ex__13588__auto__ = e17820;
var statearr_17824_17847 = state_17797;
(statearr_17824_17847[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17797);

return cljs.core.cst$kw$recur;
} else {
throw e17820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__17848 = state_17797;
state_17797 = G__17848;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_17797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_17797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___17830,out))
})();
var state__14660__auto__ = (function (){var statearr_17825 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_17825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___17830);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___17830,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17861 = (function (map_LT_,f,ch,meta17862){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17862 = meta17862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17863,meta17862__$1){
var self__ = this;
var _17863__$1 = this;
return (new cljs.core.async.t_cljs$core$async17861(self__.map_LT_,self__.f,self__.ch,meta17862__$1));
});

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17863){
var self__ = this;
var _17863__$1 = this;
return self__.meta17862;
});

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async17867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17867 = (function (map_LT_,f,ch,meta17862,_,fn1,meta17868){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta17862 = meta17862;
this._ = _;
this.fn1 = fn1;
this.meta17868 = meta17868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17869,meta17868__$1){
var self__ = this;
var _17869__$1 = this;
return (new cljs.core.async.t_cljs$core$async17867(self__.map_LT_,self__.f,self__.ch,self__.meta17862,self__._,self__.fn1,meta17868__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17869){
var self__ = this;
var _17869__$1 = this;
return self__.meta17868;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17867.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async17867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17849_SHARP_){
var G__17876 = (((p1__17849_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17849_SHARP_) : self__.f.call(null,p1__17849_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17876) : f1.call(null,G__17876));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17867.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17862,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async17861], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta17868], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17867";

cljs.core.async.t_cljs$core$async17867.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async17867");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async17867 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17867(map_LT___$1,f__$1,ch__$1,meta17862__$1,___$2,fn1__$1,meta17868){
return (new cljs.core.async.t_cljs$core$async17867(map_LT___$1,f__$1,ch__$1,meta17862__$1,___$2,fn1__$1,meta17868));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17867(self__.map_LT_,self__.f,self__.ch,self__.meta17862,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6209__auto__ = ret;
if(cljs.core.truth_(and__6209__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6209__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17877 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17877) : self__.f.call(null,G__17877));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17861.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17861.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17862], null);
});

cljs.core.async.t_cljs$core$async17861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17861";

cljs.core.async.t_cljs$core$async17861.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async17861");
});

cljs.core.async.__GT_t_cljs$core$async17861 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17861(map_LT___$1,f__$1,ch__$1,meta17862){
return (new cljs.core.async.t_cljs$core$async17861(map_LT___$1,f__$1,ch__$1,meta17862));
});

}

return (new cljs.core.async.t_cljs$core$async17861(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async17933 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17933 = (function (map_GT_,f,ch,meta17934){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta17934 = meta17934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17935,meta17934__$1){
var self__ = this;
var _17935__$1 = this;
return (new cljs.core.async.t_cljs$core$async17933(self__.map_GT_,self__.f,self__.ch,meta17934__$1));
});

cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17935){
var self__ = this;
var _17935__$1 = this;
return self__.meta17934;
});

cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17933.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async17933.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17934], null);
});

cljs.core.async.t_cljs$core$async17933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17933";

cljs.core.async.t_cljs$core$async17933.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async17933");
});

cljs.core.async.__GT_t_cljs$core$async17933 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17933(map_GT___$1,f__$1,ch__$1,meta17934){
return (new cljs.core.async.t_cljs$core$async17933(map_GT___$1,f__$1,ch__$1,meta17934));
});

}

return (new cljs.core.async.t_cljs$core$async17933(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async17951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17951 = (function (filter_GT_,p,ch,meta17952){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta17952 = meta17952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17953,meta17952__$1){
var self__ = this;
var _17953__$1 = this;
return (new cljs.core.async.t_cljs$core$async17951(self__.filter_GT_,self__.p,self__.ch,meta17952__$1));
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17953){
var self__ = this;
var _17953__$1 = this;
return self__.meta17952;
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async17951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17951.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta17952], null);
});

cljs.core.async.t_cljs$core$async17951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17951";

cljs.core.async.t_cljs$core$async17951.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async17951");
});

cljs.core.async.__GT_t_cljs$core$async17951 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17951(filter_GT___$1,p__$1,ch__$1,meta17952){
return (new cljs.core.async.t_cljs$core$async17951(filter_GT___$1,p__$1,ch__$1,meta17952));
});

}

return (new cljs.core.async.t_cljs$core$async17951(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args17963 = [];
var len__7296__auto___18013 = arguments.length;
var i__7297__auto___18014 = (0);
while(true){
if((i__7297__auto___18014 < len__7296__auto___18013)){
args17963.push((arguments[i__7297__auto___18014]));

var G__18015 = (i__7297__auto___18014 + (1));
i__7297__auto___18014 = G__18015;
continue;
} else {
}
break;
}

var G__17965 = args17963.length;
switch (G__17965) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17963.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___18017 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___18017,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___18017,out){
return (function (state_17992){
var state_val_17993 = (state_17992[(1)]);
if((state_val_17993 === (7))){
var inst_17988 = (state_17992[(2)]);
var state_17992__$1 = state_17992;
var statearr_17994_18018 = state_17992__$1;
(statearr_17994_18018[(2)] = inst_17988);

(statearr_17994_18018[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (1))){
var state_17992__$1 = state_17992;
var statearr_17995_18019 = state_17992__$1;
(statearr_17995_18019[(2)] = null);

(statearr_17995_18019[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (4))){
var inst_17968 = (state_17992[(7)]);
var inst_17968__$1 = (state_17992[(2)]);
var inst_17969 = (inst_17968__$1 == null);
var state_17992__$1 = (function (){var statearr_17996 = state_17992;
(statearr_17996[(7)] = inst_17968__$1);

return statearr_17996;
})();
if(cljs.core.truth_(inst_17969)){
var statearr_17997_18020 = state_17992__$1;
(statearr_17997_18020[(1)] = (5));

} else {
var statearr_17998_18021 = state_17992__$1;
(statearr_17998_18021[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (6))){
var inst_17968 = (state_17992[(7)]);
var inst_17979 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17968) : p.call(null,inst_17968));
var state_17992__$1 = state_17992;
if(cljs.core.truth_(inst_17979)){
var statearr_17999_18022 = state_17992__$1;
(statearr_17999_18022[(1)] = (8));

} else {
var statearr_18000_18023 = state_17992__$1;
(statearr_18000_18023[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (3))){
var inst_17990 = (state_17992[(2)]);
var state_17992__$1 = state_17992;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17992__$1,inst_17990);
} else {
if((state_val_17993 === (2))){
var state_17992__$1 = state_17992;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17992__$1,(4),ch);
} else {
if((state_val_17993 === (11))){
var inst_17982 = (state_17992[(2)]);
var state_17992__$1 = state_17992;
var statearr_18001_18024 = state_17992__$1;
(statearr_18001_18024[(2)] = inst_17982);

(statearr_18001_18024[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (9))){
var state_17992__$1 = state_17992;
var statearr_18002_18025 = state_17992__$1;
(statearr_18002_18025[(2)] = null);

(statearr_18002_18025[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (5))){
var inst_17971 = cljs.core.async.close_BANG_(out);
var state_17992__$1 = state_17992;
var statearr_18003_18026 = state_17992__$1;
(statearr_18003_18026[(2)] = inst_17971);

(statearr_18003_18026[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (10))){
var inst_17985 = (state_17992[(2)]);
var state_17992__$1 = (function (){var statearr_18004 = state_17992;
(statearr_18004[(8)] = inst_17985);

return statearr_18004;
})();
var statearr_18005_18027 = state_17992__$1;
(statearr_18005_18027[(2)] = null);

(statearr_18005_18027[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17993 === (8))){
var inst_17968 = (state_17992[(7)]);
var state_17992__$1 = state_17992;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17992__$1,(11),out,inst_17968);
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
});})(c__14658__auto___18017,out))
;
return ((function (switch__13584__auto__,c__14658__auto___18017,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_18009 = [null,null,null,null,null,null,null,null,null];
(statearr_18009[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_18009[(1)] = (1));

return statearr_18009;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_17992){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_17992);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e18010){if((e18010 instanceof Object)){
var ex__13588__auto__ = e18010;
var statearr_18011_18032 = state_17992;
(statearr_18011_18032[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17992);

return cljs.core.cst$kw$recur;
} else {
throw e18010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__18036 = state_17992;
state_17992 = G__18036;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_17992){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_17992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___18017,out))
})();
var state__14660__auto__ = (function (){var statearr_18012 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_18012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___18017);

return statearr_18012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___18017,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18040 = [];
var len__7296__auto___18043 = arguments.length;
var i__7297__auto___18044 = (0);
while(true){
if((i__7297__auto___18044 < len__7296__auto___18043)){
args18040.push((arguments[i__7297__auto___18044]));

var G__18045 = (i__7297__auto___18044 + (1));
i__7297__auto___18044 = G__18045;
continue;
} else {
}
break;
}

var G__18042 = args18040.length;
switch (G__18042) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18040.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__){
return (function (state_18212){
var state_val_18213 = (state_18212[(1)]);
if((state_val_18213 === (7))){
var inst_18208 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18214_18269 = state_18212__$1;
(statearr_18214_18269[(2)] = inst_18208);

(statearr_18214_18269[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (20))){
var inst_18178 = (state_18212[(7)]);
var inst_18189 = (state_18212[(2)]);
var inst_18190 = cljs.core.next(inst_18178);
var inst_18164 = inst_18190;
var inst_18165 = null;
var inst_18166 = (0);
var inst_18167 = (0);
var state_18212__$1 = (function (){var statearr_18215 = state_18212;
(statearr_18215[(8)] = inst_18165);

(statearr_18215[(9)] = inst_18164);

(statearr_18215[(10)] = inst_18167);

(statearr_18215[(11)] = inst_18189);

(statearr_18215[(12)] = inst_18166);

return statearr_18215;
})();
var statearr_18216_18278 = state_18212__$1;
(statearr_18216_18278[(2)] = null);

(statearr_18216_18278[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (1))){
var state_18212__$1 = state_18212;
var statearr_18217_18279 = state_18212__$1;
(statearr_18217_18279[(2)] = null);

(statearr_18217_18279[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (4))){
var inst_18153 = (state_18212[(13)]);
var inst_18153__$1 = (state_18212[(2)]);
var inst_18154 = (inst_18153__$1 == null);
var state_18212__$1 = (function (){var statearr_18218 = state_18212;
(statearr_18218[(13)] = inst_18153__$1);

return statearr_18218;
})();
if(cljs.core.truth_(inst_18154)){
var statearr_18219_18280 = state_18212__$1;
(statearr_18219_18280[(1)] = (5));

} else {
var statearr_18220_18281 = state_18212__$1;
(statearr_18220_18281[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (15))){
var state_18212__$1 = state_18212;
var statearr_18224_18282 = state_18212__$1;
(statearr_18224_18282[(2)] = null);

(statearr_18224_18282[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (21))){
var state_18212__$1 = state_18212;
var statearr_18225_18283 = state_18212__$1;
(statearr_18225_18283[(2)] = null);

(statearr_18225_18283[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (13))){
var inst_18165 = (state_18212[(8)]);
var inst_18164 = (state_18212[(9)]);
var inst_18167 = (state_18212[(10)]);
var inst_18166 = (state_18212[(12)]);
var inst_18174 = (state_18212[(2)]);
var inst_18175 = (inst_18167 + (1));
var tmp18221 = inst_18165;
var tmp18222 = inst_18164;
var tmp18223 = inst_18166;
var inst_18164__$1 = tmp18222;
var inst_18165__$1 = tmp18221;
var inst_18166__$1 = tmp18223;
var inst_18167__$1 = inst_18175;
var state_18212__$1 = (function (){var statearr_18230 = state_18212;
(statearr_18230[(8)] = inst_18165__$1);

(statearr_18230[(9)] = inst_18164__$1);

(statearr_18230[(10)] = inst_18167__$1);

(statearr_18230[(12)] = inst_18166__$1);

(statearr_18230[(14)] = inst_18174);

return statearr_18230;
})();
var statearr_18231_18284 = state_18212__$1;
(statearr_18231_18284[(2)] = null);

(statearr_18231_18284[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (22))){
var state_18212__$1 = state_18212;
var statearr_18235_18285 = state_18212__$1;
(statearr_18235_18285[(2)] = null);

(statearr_18235_18285[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (6))){
var inst_18153 = (state_18212[(13)]);
var inst_18162 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18153) : f.call(null,inst_18153));
var inst_18163 = cljs.core.seq(inst_18162);
var inst_18164 = inst_18163;
var inst_18165 = null;
var inst_18166 = (0);
var inst_18167 = (0);
var state_18212__$1 = (function (){var statearr_18236 = state_18212;
(statearr_18236[(8)] = inst_18165);

(statearr_18236[(9)] = inst_18164);

(statearr_18236[(10)] = inst_18167);

(statearr_18236[(12)] = inst_18166);

return statearr_18236;
})();
var statearr_18237_18286 = state_18212__$1;
(statearr_18237_18286[(2)] = null);

(statearr_18237_18286[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (17))){
var inst_18178 = (state_18212[(7)]);
var inst_18182 = cljs.core.chunk_first(inst_18178);
var inst_18183 = cljs.core.chunk_rest(inst_18178);
var inst_18184 = cljs.core.count(inst_18182);
var inst_18164 = inst_18183;
var inst_18165 = inst_18182;
var inst_18166 = inst_18184;
var inst_18167 = (0);
var state_18212__$1 = (function (){var statearr_18238 = state_18212;
(statearr_18238[(8)] = inst_18165);

(statearr_18238[(9)] = inst_18164);

(statearr_18238[(10)] = inst_18167);

(statearr_18238[(12)] = inst_18166);

return statearr_18238;
})();
var statearr_18239_18287 = state_18212__$1;
(statearr_18239_18287[(2)] = null);

(statearr_18239_18287[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (3))){
var inst_18210 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18212__$1,inst_18210);
} else {
if((state_val_18213 === (12))){
var inst_18198 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18240_18288 = state_18212__$1;
(statearr_18240_18288[(2)] = inst_18198);

(statearr_18240_18288[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (2))){
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18212__$1,(4),in$);
} else {
if((state_val_18213 === (23))){
var inst_18206 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18241_18289 = state_18212__$1;
(statearr_18241_18289[(2)] = inst_18206);

(statearr_18241_18289[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (19))){
var inst_18193 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18242_18290 = state_18212__$1;
(statearr_18242_18290[(2)] = inst_18193);

(statearr_18242_18290[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (11))){
var inst_18178 = (state_18212[(7)]);
var inst_18164 = (state_18212[(9)]);
var inst_18178__$1 = cljs.core.seq(inst_18164);
var state_18212__$1 = (function (){var statearr_18243 = state_18212;
(statearr_18243[(7)] = inst_18178__$1);

return statearr_18243;
})();
if(inst_18178__$1){
var statearr_18244_18291 = state_18212__$1;
(statearr_18244_18291[(1)] = (14));

} else {
var statearr_18245_18292 = state_18212__$1;
(statearr_18245_18292[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (9))){
var inst_18200 = (state_18212[(2)]);
var inst_18201 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18212__$1 = (function (){var statearr_18246 = state_18212;
(statearr_18246[(15)] = inst_18200);

return statearr_18246;
})();
if(cljs.core.truth_(inst_18201)){
var statearr_18247_18295 = state_18212__$1;
(statearr_18247_18295[(1)] = (21));

} else {
var statearr_18248_18299 = state_18212__$1;
(statearr_18248_18299[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (5))){
var inst_18156 = cljs.core.async.close_BANG_(out);
var state_18212__$1 = state_18212;
var statearr_18249_18300 = state_18212__$1;
(statearr_18249_18300[(2)] = inst_18156);

(statearr_18249_18300[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (14))){
var inst_18178 = (state_18212[(7)]);
var inst_18180 = cljs.core.chunked_seq_QMARK_(inst_18178);
var state_18212__$1 = state_18212;
if(inst_18180){
var statearr_18254_18301 = state_18212__$1;
(statearr_18254_18301[(1)] = (17));

} else {
var statearr_18255_18302 = state_18212__$1;
(statearr_18255_18302[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (16))){
var inst_18196 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18256_18303 = state_18212__$1;
(statearr_18256_18303[(2)] = inst_18196);

(statearr_18256_18303[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18213 === (10))){
var inst_18165 = (state_18212[(8)]);
var inst_18167 = (state_18212[(10)]);
var inst_18172 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18165,inst_18167);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18212__$1,(13),out,inst_18172);
} else {
if((state_val_18213 === (18))){
var inst_18178 = (state_18212[(7)]);
var inst_18187 = cljs.core.first(inst_18178);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18212__$1,(20),out,inst_18187);
} else {
if((state_val_18213 === (8))){
var inst_18167 = (state_18212[(10)]);
var inst_18166 = (state_18212[(12)]);
var inst_18169 = (inst_18167 < inst_18166);
var inst_18170 = inst_18169;
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18170)){
var statearr_18260_18322 = state_18212__$1;
(statearr_18260_18322[(1)] = (10));

} else {
var statearr_18261_18323 = state_18212__$1;
(statearr_18261_18323[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__14658__auto__))
;
return ((function (switch__13584__auto__,c__14658__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_18265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18265[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__);

(statearr_18265[(1)] = (1));

return statearr_18265;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____1 = (function (state_18212){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_18212);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e18266){if((e18266 instanceof Object)){
var ex__13588__auto__ = e18266;
var statearr_18267_18336 = state_18212;
(statearr_18267_18336[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18212);

return cljs.core.cst$kw$recur;
} else {
throw e18266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__18337 = state_18212;
state_18212 = G__18337;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__ = function(state_18212){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____1.call(this,state_18212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_18268 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_18268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_18268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto__))
);

return c__14658__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18338 = [];
var len__7296__auto___18352 = arguments.length;
var i__7297__auto___18353 = (0);
while(true){
if((i__7297__auto___18353 < len__7296__auto___18352)){
args18338.push((arguments[i__7297__auto___18353]));

var G__18354 = (i__7297__auto___18353 + (1));
i__7297__auto___18353 = G__18354;
continue;
} else {
}
break;
}

var G__18344 = args18338.length;
switch (G__18344) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18338.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18375 = [];
var len__7296__auto___18378 = arguments.length;
var i__7297__auto___18379 = (0);
while(true){
if((i__7297__auto___18379 < len__7296__auto___18378)){
args18375.push((arguments[i__7297__auto___18379]));

var G__18380 = (i__7297__auto___18379 + (1));
i__7297__auto___18379 = G__18380;
continue;
} else {
}
break;
}

var G__18377 = args18375.length;
switch (G__18377) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18375.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18382 = [];
var len__7296__auto___18458 = arguments.length;
var i__7297__auto___18459 = (0);
while(true){
if((i__7297__auto___18459 < len__7296__auto___18458)){
args18382.push((arguments[i__7297__auto___18459]));

var G__18460 = (i__7297__auto___18459 + (1));
i__7297__auto___18459 = G__18460;
continue;
} else {
}
break;
}

var G__18384 = args18382.length;
switch (G__18384) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18382.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___18462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___18462,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___18462,out){
return (function (state_18409){
var state_val_18410 = (state_18409[(1)]);
if((state_val_18410 === (7))){
var inst_18404 = (state_18409[(2)]);
var state_18409__$1 = state_18409;
var statearr_18411_18463 = state_18409__$1;
(statearr_18411_18463[(2)] = inst_18404);

(statearr_18411_18463[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (1))){
var inst_18386 = null;
var state_18409__$1 = (function (){var statearr_18412 = state_18409;
(statearr_18412[(7)] = inst_18386);

return statearr_18412;
})();
var statearr_18413_18464 = state_18409__$1;
(statearr_18413_18464[(2)] = null);

(statearr_18413_18464[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (4))){
var inst_18389 = (state_18409[(8)]);
var inst_18389__$1 = (state_18409[(2)]);
var inst_18390 = (inst_18389__$1 == null);
var inst_18391 = cljs.core.not(inst_18390);
var state_18409__$1 = (function (){var statearr_18414 = state_18409;
(statearr_18414[(8)] = inst_18389__$1);

return statearr_18414;
})();
if(inst_18391){
var statearr_18415_18465 = state_18409__$1;
(statearr_18415_18465[(1)] = (5));

} else {
var statearr_18416_18466 = state_18409__$1;
(statearr_18416_18466[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (6))){
var state_18409__$1 = state_18409;
var statearr_18420_18467 = state_18409__$1;
(statearr_18420_18467[(2)] = null);

(statearr_18420_18467[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (3))){
var inst_18406 = (state_18409[(2)]);
var inst_18407 = cljs.core.async.close_BANG_(out);
var state_18409__$1 = (function (){var statearr_18430 = state_18409;
(statearr_18430[(9)] = inst_18406);

return statearr_18430;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18409__$1,inst_18407);
} else {
if((state_val_18410 === (2))){
var state_18409__$1 = state_18409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18409__$1,(4),ch);
} else {
if((state_val_18410 === (11))){
var inst_18389 = (state_18409[(8)]);
var inst_18398 = (state_18409[(2)]);
var inst_18386 = inst_18389;
var state_18409__$1 = (function (){var statearr_18431 = state_18409;
(statearr_18431[(10)] = inst_18398);

(statearr_18431[(7)] = inst_18386);

return statearr_18431;
})();
var statearr_18432_18468 = state_18409__$1;
(statearr_18432_18468[(2)] = null);

(statearr_18432_18468[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (9))){
var inst_18389 = (state_18409[(8)]);
var state_18409__$1 = state_18409;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18409__$1,(11),out,inst_18389);
} else {
if((state_val_18410 === (5))){
var inst_18389 = (state_18409[(8)]);
var inst_18386 = (state_18409[(7)]);
var inst_18393 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18389,inst_18386);
var state_18409__$1 = state_18409;
if(inst_18393){
var statearr_18434_18478 = state_18409__$1;
(statearr_18434_18478[(1)] = (8));

} else {
var statearr_18435_18479 = state_18409__$1;
(statearr_18435_18479[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (10))){
var inst_18401 = (state_18409[(2)]);
var state_18409__$1 = state_18409;
var statearr_18448_18480 = state_18409__$1;
(statearr_18448_18480[(2)] = inst_18401);

(statearr_18448_18480[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18410 === (8))){
var inst_18386 = (state_18409[(7)]);
var tmp18433 = inst_18386;
var inst_18386__$1 = tmp18433;
var state_18409__$1 = (function (){var statearr_18449 = state_18409;
(statearr_18449[(7)] = inst_18386__$1);

return statearr_18449;
})();
var statearr_18450_18484 = state_18409__$1;
(statearr_18450_18484[(2)] = null);

(statearr_18450_18484[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___18462,out))
;
return ((function (switch__13584__auto__,c__14658__auto___18462,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_18454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18454[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_18454[(1)] = (1));

return statearr_18454;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_18409){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_18409);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e18455){if((e18455 instanceof Object)){
var ex__13588__auto__ = e18455;
var statearr_18456_18485 = state_18409;
(statearr_18456_18485[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18409);

return cljs.core.cst$kw$recur;
} else {
throw e18455;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__18486 = state_18409;
state_18409 = G__18486;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_18409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_18409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___18462,out))
})();
var state__14660__auto__ = (function (){var statearr_18457 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_18457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___18462);

return statearr_18457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___18462,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args18487 = [];
var len__7296__auto___18577 = arguments.length;
var i__7297__auto___18578 = (0);
while(true){
if((i__7297__auto___18578 < len__7296__auto___18577)){
args18487.push((arguments[i__7297__auto___18578]));

var G__18579 = (i__7297__auto___18578 + (1));
i__7297__auto___18578 = G__18579;
continue;
} else {
}
break;
}

var G__18489 = args18487.length;
switch (G__18489) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18487.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___18581 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___18581,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___18581,out){
return (function (state_18537){
var state_val_18538 = (state_18537[(1)]);
if((state_val_18538 === (7))){
var inst_18533 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18539_18582 = state_18537__$1;
(statearr_18539_18582[(2)] = inst_18533);

(statearr_18539_18582[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (1))){
var inst_18490 = (new Array(n));
var inst_18491 = inst_18490;
var inst_18492 = (0);
var state_18537__$1 = (function (){var statearr_18540 = state_18537;
(statearr_18540[(7)] = inst_18491);

(statearr_18540[(8)] = inst_18492);

return statearr_18540;
})();
var statearr_18545_18583 = state_18537__$1;
(statearr_18545_18583[(2)] = null);

(statearr_18545_18583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (4))){
var inst_18496 = (state_18537[(9)]);
var inst_18496__$1 = (state_18537[(2)]);
var inst_18500 = (inst_18496__$1 == null);
var inst_18501 = cljs.core.not(inst_18500);
var state_18537__$1 = (function (){var statearr_18552 = state_18537;
(statearr_18552[(9)] = inst_18496__$1);

return statearr_18552;
})();
if(inst_18501){
var statearr_18553_18584 = state_18537__$1;
(statearr_18553_18584[(1)] = (5));

} else {
var statearr_18554_18585 = state_18537__$1;
(statearr_18554_18585[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (15))){
var inst_18527 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18555_18586 = state_18537__$1;
(statearr_18555_18586[(2)] = inst_18527);

(statearr_18555_18586[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (13))){
var state_18537__$1 = state_18537;
var statearr_18556_18587 = state_18537__$1;
(statearr_18556_18587[(2)] = null);

(statearr_18556_18587[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (6))){
var inst_18492 = (state_18537[(8)]);
var inst_18523 = (inst_18492 > (0));
var state_18537__$1 = state_18537;
if(cljs.core.truth_(inst_18523)){
var statearr_18557_18588 = state_18537__$1;
(statearr_18557_18588[(1)] = (12));

} else {
var statearr_18558_18589 = state_18537__$1;
(statearr_18558_18589[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (3))){
var inst_18535 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18537__$1,inst_18535);
} else {
if((state_val_18538 === (12))){
var inst_18491 = (state_18537[(7)]);
var inst_18525 = cljs.core.vec(inst_18491);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18537__$1,(15),out,inst_18525);
} else {
if((state_val_18538 === (2))){
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18537__$1,(4),ch);
} else {
if((state_val_18538 === (11))){
var inst_18517 = (state_18537[(2)]);
var inst_18518 = (new Array(n));
var inst_18491 = inst_18518;
var inst_18492 = (0);
var state_18537__$1 = (function (){var statearr_18559 = state_18537;
(statearr_18559[(7)] = inst_18491);

(statearr_18559[(8)] = inst_18492);

(statearr_18559[(10)] = inst_18517);

return statearr_18559;
})();
var statearr_18560_18590 = state_18537__$1;
(statearr_18560_18590[(2)] = null);

(statearr_18560_18590[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (9))){
var inst_18491 = (state_18537[(7)]);
var inst_18515 = cljs.core.vec(inst_18491);
var state_18537__$1 = state_18537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18537__$1,(11),out,inst_18515);
} else {
if((state_val_18538 === (5))){
var inst_18491 = (state_18537[(7)]);
var inst_18492 = (state_18537[(8)]);
var inst_18510 = (state_18537[(11)]);
var inst_18496 = (state_18537[(9)]);
var inst_18503 = (inst_18491[inst_18492] = inst_18496);
var inst_18510__$1 = (inst_18492 + (1));
var inst_18511 = (inst_18510__$1 < n);
var state_18537__$1 = (function (){var statearr_18561 = state_18537;
(statearr_18561[(11)] = inst_18510__$1);

(statearr_18561[(12)] = inst_18503);

return statearr_18561;
})();
if(cljs.core.truth_(inst_18511)){
var statearr_18562_18596 = state_18537__$1;
(statearr_18562_18596[(1)] = (8));

} else {
var statearr_18563_18597 = state_18537__$1;
(statearr_18563_18597[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (14))){
var inst_18530 = (state_18537[(2)]);
var inst_18531 = cljs.core.async.close_BANG_(out);
var state_18537__$1 = (function (){var statearr_18565 = state_18537;
(statearr_18565[(13)] = inst_18530);

return statearr_18565;
})();
var statearr_18566_18599 = state_18537__$1;
(statearr_18566_18599[(2)] = inst_18531);

(statearr_18566_18599[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (10))){
var inst_18521 = (state_18537[(2)]);
var state_18537__$1 = state_18537;
var statearr_18567_18604 = state_18537__$1;
(statearr_18567_18604[(2)] = inst_18521);

(statearr_18567_18604[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18538 === (8))){
var inst_18491 = (state_18537[(7)]);
var inst_18510 = (state_18537[(11)]);
var tmp18564 = inst_18491;
var inst_18491__$1 = tmp18564;
var inst_18492 = inst_18510;
var state_18537__$1 = (function (){var statearr_18568 = state_18537;
(statearr_18568[(7)] = inst_18491__$1);

(statearr_18568[(8)] = inst_18492);

return statearr_18568;
})();
var statearr_18569_18605 = state_18537__$1;
(statearr_18569_18605[(2)] = null);

(statearr_18569_18605[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___18581,out))
;
return ((function (switch__13584__auto__,c__14658__auto___18581,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_18573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18573[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_18573[(1)] = (1));

return statearr_18573;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_18537){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_18537);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e18574){if((e18574 instanceof Object)){
var ex__13588__auto__ = e18574;
var statearr_18575_18606 = state_18537;
(statearr_18575_18606[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18537);

return cljs.core.cst$kw$recur;
} else {
throw e18574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__18607 = state_18537;
state_18537 = G__18607;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_18537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_18537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___18581,out))
})();
var state__14660__auto__ = (function (){var statearr_18576 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_18576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___18581);

return statearr_18576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___18581,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args18608 = [];
var len__7296__auto___18697 = arguments.length;
var i__7297__auto___18698 = (0);
while(true){
if((i__7297__auto___18698 < len__7296__auto___18697)){
args18608.push((arguments[i__7297__auto___18698]));

var G__18699 = (i__7297__auto___18698 + (1));
i__7297__auto___18698 = G__18699;
continue;
} else {
}
break;
}

var G__18610 = args18608.length;
switch (G__18610) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18608.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___18701 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___18701,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___18701,out){
return (function (state_18655){
var state_val_18656 = (state_18655[(1)]);
if((state_val_18656 === (7))){
var inst_18650 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
var statearr_18658_18702 = state_18655__$1;
(statearr_18658_18702[(2)] = inst_18650);

(statearr_18658_18702[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (1))){
var inst_18611 = [];
var inst_18613 = inst_18611;
var inst_18614 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_18655__$1 = (function (){var statearr_18659 = state_18655;
(statearr_18659[(7)] = inst_18613);

(statearr_18659[(8)] = inst_18614);

return statearr_18659;
})();
var statearr_18660_18703 = state_18655__$1;
(statearr_18660_18703[(2)] = null);

(statearr_18660_18703[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (4))){
var inst_18617 = (state_18655[(9)]);
var inst_18617__$1 = (state_18655[(2)]);
var inst_18618 = (inst_18617__$1 == null);
var inst_18619 = cljs.core.not(inst_18618);
var state_18655__$1 = (function (){var statearr_18661 = state_18655;
(statearr_18661[(9)] = inst_18617__$1);

return statearr_18661;
})();
if(inst_18619){
var statearr_18662_18705 = state_18655__$1;
(statearr_18662_18705[(1)] = (5));

} else {
var statearr_18663_18706 = state_18655__$1;
(statearr_18663_18706[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (15))){
var inst_18644 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
var statearr_18664_18707 = state_18655__$1;
(statearr_18664_18707[(2)] = inst_18644);

(statearr_18664_18707[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (13))){
var state_18655__$1 = state_18655;
var statearr_18665_18708 = state_18655__$1;
(statearr_18665_18708[(2)] = null);

(statearr_18665_18708[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (6))){
var inst_18613 = (state_18655[(7)]);
var inst_18639 = inst_18613.length;
var inst_18640 = (inst_18639 > (0));
var state_18655__$1 = state_18655;
if(cljs.core.truth_(inst_18640)){
var statearr_18666_18710 = state_18655__$1;
(statearr_18666_18710[(1)] = (12));

} else {
var statearr_18667_18711 = state_18655__$1;
(statearr_18667_18711[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (3))){
var inst_18652 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18655__$1,inst_18652);
} else {
if((state_val_18656 === (12))){
var inst_18613 = (state_18655[(7)]);
var inst_18642 = cljs.core.vec(inst_18613);
var state_18655__$1 = state_18655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18655__$1,(15),out,inst_18642);
} else {
if((state_val_18656 === (2))){
var state_18655__$1 = state_18655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18655__$1,(4),ch);
} else {
if((state_val_18656 === (11))){
var inst_18621 = (state_18655[(10)]);
var inst_18617 = (state_18655[(9)]);
var inst_18631 = (state_18655[(2)]);
var inst_18633 = [];
var inst_18634 = inst_18633.push(inst_18617);
var inst_18613 = inst_18633;
var inst_18614 = inst_18621;
var state_18655__$1 = (function (){var statearr_18669 = state_18655;
(statearr_18669[(11)] = inst_18631);

(statearr_18669[(7)] = inst_18613);

(statearr_18669[(8)] = inst_18614);

(statearr_18669[(12)] = inst_18634);

return statearr_18669;
})();
var statearr_18670_18712 = state_18655__$1;
(statearr_18670_18712[(2)] = null);

(statearr_18670_18712[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (9))){
var inst_18613 = (state_18655[(7)]);
var inst_18629 = cljs.core.vec(inst_18613);
var state_18655__$1 = state_18655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18655__$1,(11),out,inst_18629);
} else {
if((state_val_18656 === (5))){
var inst_18621 = (state_18655[(10)]);
var inst_18617 = (state_18655[(9)]);
var inst_18614 = (state_18655[(8)]);
var inst_18621__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18617) : f.call(null,inst_18617));
var inst_18622 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18621__$1,inst_18614);
var inst_18623 = cljs.core.keyword_identical_QMARK_(inst_18614,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_18624 = (inst_18622) || (inst_18623);
var state_18655__$1 = (function (){var statearr_18671 = state_18655;
(statearr_18671[(10)] = inst_18621__$1);

return statearr_18671;
})();
if(cljs.core.truth_(inst_18624)){
var statearr_18672_18716 = state_18655__$1;
(statearr_18672_18716[(1)] = (8));

} else {
var statearr_18679_18717 = state_18655__$1;
(statearr_18679_18717[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (14))){
var inst_18647 = (state_18655[(2)]);
var inst_18648 = cljs.core.async.close_BANG_(out);
var state_18655__$1 = (function (){var statearr_18681 = state_18655;
(statearr_18681[(13)] = inst_18647);

return statearr_18681;
})();
var statearr_18682_18718 = state_18655__$1;
(statearr_18682_18718[(2)] = inst_18648);

(statearr_18682_18718[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (10))){
var inst_18637 = (state_18655[(2)]);
var state_18655__$1 = state_18655;
var statearr_18684_18721 = state_18655__$1;
(statearr_18684_18721[(2)] = inst_18637);

(statearr_18684_18721[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18656 === (8))){
var inst_18621 = (state_18655[(10)]);
var inst_18613 = (state_18655[(7)]);
var inst_18617 = (state_18655[(9)]);
var inst_18626 = inst_18613.push(inst_18617);
var tmp18680 = inst_18613;
var inst_18613__$1 = tmp18680;
var inst_18614 = inst_18621;
var state_18655__$1 = (function (){var statearr_18686 = state_18655;
(statearr_18686[(14)] = inst_18626);

(statearr_18686[(7)] = inst_18613__$1);

(statearr_18686[(8)] = inst_18614);

return statearr_18686;
})();
var statearr_18688_18725 = state_18655__$1;
(statearr_18688_18725[(2)] = null);

(statearr_18688_18725[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__14658__auto___18701,out))
;
return ((function (switch__13584__auto__,c__14658__auto___18701,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_18693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18693[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_18693[(1)] = (1));

return statearr_18693;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_18655){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_18655);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e18694){if((e18694 instanceof Object)){
var ex__13588__auto__ = e18694;
var statearr_18695_18730 = state_18655;
(statearr_18695_18730[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18655);

return cljs.core.cst$kw$recur;
} else {
throw e18694;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__18731 = state_18655;
state_18655 = G__18731;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_18655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_18655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___18701,out))
})();
var state__14660__auto__ = (function (){var statearr_18696 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_18696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___18701);

return statearr_18696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___18701,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

