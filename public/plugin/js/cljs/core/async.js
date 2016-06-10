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
var args42916 = [];
var len__7296__auto___42922 = arguments.length;
var i__7297__auto___42923 = (0);
while(true){
if((i__7297__auto___42923 < len__7296__auto___42922)){
args42916.push((arguments[i__7297__auto___42923]));

var G__42924 = (i__7297__auto___42923 + (1));
i__7297__auto___42923 = G__42924;
continue;
} else {
}
break;
}

var G__42918 = args42916.length;
switch (G__42918) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42916.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async42919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42919 = (function (f,blockable,meta42920){
this.f = f;
this.blockable = blockable;
this.meta42920 = meta42920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42921,meta42920__$1){
var self__ = this;
var _42921__$1 = this;
return (new cljs.core.async.t_cljs$core$async42919(self__.f,self__.blockable,meta42920__$1));
});

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42921){
var self__ = this;
var _42921__$1 = this;
return self__.meta42920;
});

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42919.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta42920], null);
});

cljs.core.async.t_cljs$core$async42919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42919";

cljs.core.async.t_cljs$core$async42919.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async42919");
});

cljs.core.async.__GT_t_cljs$core$async42919 = (function cljs$core$async$__GT_t_cljs$core$async42919(f__$1,blockable__$1,meta42920){
return (new cljs.core.async.t_cljs$core$async42919(f__$1,blockable__$1,meta42920));
});

}

return (new cljs.core.async.t_cljs$core$async42919(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args42928 = [];
var len__7296__auto___42931 = arguments.length;
var i__7297__auto___42932 = (0);
while(true){
if((i__7297__auto___42932 < len__7296__auto___42931)){
args42928.push((arguments[i__7297__auto___42932]));

var G__42933 = (i__7297__auto___42932 + (1));
i__7297__auto___42932 = G__42933;
continue;
} else {
}
break;
}

var G__42930 = args42928.length;
switch (G__42930) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42928.length)].join('')));

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
var args42935 = [];
var len__7296__auto___42938 = arguments.length;
var i__7297__auto___42939 = (0);
while(true){
if((i__7297__auto___42939 < len__7296__auto___42938)){
args42935.push((arguments[i__7297__auto___42939]));

var G__42940 = (i__7297__auto___42939 + (1));
i__7297__auto___42939 = G__42940;
continue;
} else {
}
break;
}

var G__42937 = args42935.length;
switch (G__42937) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42935.length)].join('')));

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
var args42942 = [];
var len__7296__auto___42945 = arguments.length;
var i__7297__auto___42946 = (0);
while(true){
if((i__7297__auto___42946 < len__7296__auto___42945)){
args42942.push((arguments[i__7297__auto___42946]));

var G__42947 = (i__7297__auto___42946 + (1));
i__7297__auto___42946 = G__42947;
continue;
} else {
}
break;
}

var G__42944 = args42942.length;
switch (G__42944) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42942.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_42949 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42949) : fn1.call(null,val_42949));
} else {
cljs.core.async.impl.dispatch.run(((function (val_42949,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_42949) : fn1.call(null,val_42949));
});})(val_42949,ret))
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
var args42950 = [];
var len__7296__auto___42953 = arguments.length;
var i__7297__auto___42954 = (0);
while(true){
if((i__7297__auto___42954 < len__7296__auto___42953)){
args42950.push((arguments[i__7297__auto___42954]));

var G__42955 = (i__7297__auto___42954 + (1));
i__7297__auto___42954 = G__42955;
continue;
} else {
}
break;
}

var G__42952 = args42950.length;
switch (G__42952) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42950.length)].join('')));

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
var n__7136__auto___42957 = n;
var x_42958 = (0);
while(true){
if((x_42958 < n__7136__auto___42957)){
(a[x_42958] = (0));

var G__42959 = (x_42958 + (1));
x_42958 = G__42959;
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

var G__42960 = (i + (1));
i = G__42960;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async42964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42964 = (function (alt_flag,flag,meta42965){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta42965 = meta42965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42966,meta42965__$1){
var self__ = this;
var _42966__$1 = this;
return (new cljs.core.async.t_cljs$core$async42964(self__.alt_flag,self__.flag,meta42965__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42966){
var self__ = this;
var _42966__$1 = this;
return self__.meta42965;
});})(flag))
;

cljs.core.async.t_cljs$core$async42964.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async42964.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42964.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta42965], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42964.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42964";

cljs.core.async.t_cljs$core$async42964.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async42964");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async42964 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42964(alt_flag__$1,flag__$1,meta42965){
return (new cljs.core.async.t_cljs$core$async42964(alt_flag__$1,flag__$1,meta42965));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42964(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async42970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42970 = (function (alt_handler,flag,cb,meta42971){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta42971 = meta42971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42972,meta42971__$1){
var self__ = this;
var _42972__$1 = this;
return (new cljs.core.async.t_cljs$core$async42970(self__.alt_handler,self__.flag,self__.cb,meta42971__$1));
});

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42972){
var self__ = this;
var _42972__$1 = this;
return self__.meta42971;
});

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta42971], null);
});

cljs.core.async.t_cljs$core$async42970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42970";

cljs.core.async.t_cljs$core$async42970.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async42970");
});

cljs.core.async.__GT_t_cljs$core$async42970 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42970(alt_handler__$1,flag__$1,cb__$1,meta42971){
return (new cljs.core.async.t_cljs$core$async42970(alt_handler__$1,flag__$1,cb__$1,meta42971));
});

}

return (new cljs.core.async.t_cljs$core$async42970(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42973_SHARP_){
var G__42977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42973_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42977) : fret.call(null,G__42977));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42974_SHARP_){
var G__42978 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42974_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42978) : fret.call(null,G__42978));
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
var G__42979 = (i + (1));
i = G__42979;
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
var len__7296__auto___42985 = arguments.length;
var i__7297__auto___42986 = (0);
while(true){
if((i__7297__auto___42986 < len__7296__auto___42985)){
args__7303__auto__.push((arguments[i__7297__auto___42986]));

var G__42987 = (i__7297__auto___42986 + (1));
i__7297__auto___42986 = G__42987;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42982){
var map__42983 = p__42982;
var map__42983__$1 = ((((!((map__42983 == null)))?((((map__42983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42983):map__42983);
var opts = map__42983__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42980){
var G__42981 = cljs.core.first(seq42980);
var seq42980__$1 = cljs.core.next(seq42980);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42981,seq42980__$1);
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
var args42988 = [];
var len__7296__auto___43038 = arguments.length;
var i__7297__auto___43039 = (0);
while(true){
if((i__7297__auto___43039 < len__7296__auto___43038)){
args42988.push((arguments[i__7297__auto___43039]));

var G__43040 = (i__7297__auto___43039 + (1));
i__7297__auto___43039 = G__43040;
continue;
} else {
}
break;
}

var G__42990 = args42988.length;
switch (G__42990) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42988.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14658__auto___43042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___43042){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___43042){
return (function (state_43014){
var state_val_43015 = (state_43014[(1)]);
if((state_val_43015 === (7))){
var inst_43010 = (state_43014[(2)]);
var state_43014__$1 = state_43014;
var statearr_43016_43043 = state_43014__$1;
(statearr_43016_43043[(2)] = inst_43010);

(statearr_43016_43043[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (1))){
var state_43014__$1 = state_43014;
var statearr_43017_43044 = state_43014__$1;
(statearr_43017_43044[(2)] = null);

(statearr_43017_43044[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (4))){
var inst_42993 = (state_43014[(7)]);
var inst_42993__$1 = (state_43014[(2)]);
var inst_42994 = (inst_42993__$1 == null);
var state_43014__$1 = (function (){var statearr_43018 = state_43014;
(statearr_43018[(7)] = inst_42993__$1);

return statearr_43018;
})();
if(cljs.core.truth_(inst_42994)){
var statearr_43019_43045 = state_43014__$1;
(statearr_43019_43045[(1)] = (5));

} else {
var statearr_43020_43046 = state_43014__$1;
(statearr_43020_43046[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (13))){
var state_43014__$1 = state_43014;
var statearr_43021_43047 = state_43014__$1;
(statearr_43021_43047[(2)] = null);

(statearr_43021_43047[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (6))){
var inst_42993 = (state_43014[(7)]);
var state_43014__$1 = state_43014;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43014__$1,(11),to,inst_42993);
} else {
if((state_val_43015 === (3))){
var inst_43012 = (state_43014[(2)]);
var state_43014__$1 = state_43014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43014__$1,inst_43012);
} else {
if((state_val_43015 === (12))){
var state_43014__$1 = state_43014;
var statearr_43022_43048 = state_43014__$1;
(statearr_43022_43048[(2)] = null);

(statearr_43022_43048[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (2))){
var state_43014__$1 = state_43014;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43014__$1,(4),from);
} else {
if((state_val_43015 === (11))){
var inst_43003 = (state_43014[(2)]);
var state_43014__$1 = state_43014;
if(cljs.core.truth_(inst_43003)){
var statearr_43023_43049 = state_43014__$1;
(statearr_43023_43049[(1)] = (12));

} else {
var statearr_43024_43050 = state_43014__$1;
(statearr_43024_43050[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (9))){
var state_43014__$1 = state_43014;
var statearr_43025_43051 = state_43014__$1;
(statearr_43025_43051[(2)] = null);

(statearr_43025_43051[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (5))){
var state_43014__$1 = state_43014;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43026_43052 = state_43014__$1;
(statearr_43026_43052[(1)] = (8));

} else {
var statearr_43027_43053 = state_43014__$1;
(statearr_43027_43053[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (14))){
var inst_43008 = (state_43014[(2)]);
var state_43014__$1 = state_43014;
var statearr_43028_43054 = state_43014__$1;
(statearr_43028_43054[(2)] = inst_43008);

(statearr_43028_43054[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (10))){
var inst_43000 = (state_43014[(2)]);
var state_43014__$1 = state_43014;
var statearr_43029_43055 = state_43014__$1;
(statearr_43029_43055[(2)] = inst_43000);

(statearr_43029_43055[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43015 === (8))){
var inst_42997 = cljs.core.async.close_BANG_(to);
var state_43014__$1 = state_43014;
var statearr_43030_43056 = state_43014__$1;
(statearr_43030_43056[(2)] = inst_42997);

(statearr_43030_43056[(1)] = (10));


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
});})(c__14658__auto___43042))
;
return ((function (switch__13584__auto__,c__14658__auto___43042){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_43034 = [null,null,null,null,null,null,null,null];
(statearr_43034[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_43034[(1)] = (1));

return statearr_43034;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_43014){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43014);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43035){if((e43035 instanceof Object)){
var ex__13588__auto__ = e43035;
var statearr_43036_43057 = state_43014;
(statearr_43036_43057[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43014);

return cljs.core.cst$kw$recur;
} else {
throw e43035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43058 = state_43014;
state_43014 = G__43058;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_43014){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_43014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___43042))
})();
var state__14660__auto__ = (function (){var statearr_43037 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___43042);

return statearr_43037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___43042))
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
return (function (p__43246){
var vec__43247 = p__43246;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43247,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43247,(1),null);
var job = vec__43247;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14658__auto___43433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___43433,res,vec__43247,v,p,job,jobs,results){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___43433,res,vec__43247,v,p,job,jobs,results){
return (function (state_43254){
var state_val_43255 = (state_43254[(1)]);
if((state_val_43255 === (1))){
var state_43254__$1 = state_43254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43254__$1,(2),res,v);
} else {
if((state_val_43255 === (2))){
var inst_43251 = (state_43254[(2)]);
var inst_43252 = cljs.core.async.close_BANG_(res);
var state_43254__$1 = (function (){var statearr_43256 = state_43254;
(statearr_43256[(7)] = inst_43251);

return statearr_43256;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43254__$1,inst_43252);
} else {
return null;
}
}
});})(c__14658__auto___43433,res,vec__43247,v,p,job,jobs,results))
;
return ((function (switch__13584__auto__,c__14658__auto___43433,res,vec__43247,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_43260 = [null,null,null,null,null,null,null,null];
(statearr_43260[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_43260[(1)] = (1));

return statearr_43260;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_43254){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43254);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43261){if((e43261 instanceof Object)){
var ex__13588__auto__ = e43261;
var statearr_43262_43434 = state_43254;
(statearr_43262_43434[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43254);

return cljs.core.cst$kw$recur;
} else {
throw e43261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43435 = state_43254;
state_43254 = G__43435;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_43254){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_43254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___43433,res,vec__43247,v,p,job,jobs,results))
})();
var state__14660__auto__ = (function (){var statearr_43263 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___43433);

return statearr_43263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___43433,res,vec__43247,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43264){
var vec__43265 = p__43264;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43265,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43265,(1),null);
var job = vec__43265;
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
var n__7136__auto___43436 = n;
var __43437 = (0);
while(true){
if((__43437 < n__7136__auto___43436)){
var G__43268_43438 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__43268_43438) {
case "compute":
var c__14658__auto___43440 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43437,c__14658__auto___43440,G__43268_43438,n__7136__auto___43436,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (__43437,c__14658__auto___43440,G__43268_43438,n__7136__auto___43436,jobs,results,process,async){
return (function (state_43281){
var state_val_43282 = (state_43281[(1)]);
if((state_val_43282 === (1))){
var state_43281__$1 = state_43281;
var statearr_43283_43441 = state_43281__$1;
(statearr_43283_43441[(2)] = null);

(statearr_43283_43441[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43282 === (2))){
var state_43281__$1 = state_43281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43281__$1,(4),jobs);
} else {
if((state_val_43282 === (3))){
var inst_43279 = (state_43281[(2)]);
var state_43281__$1 = state_43281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43281__$1,inst_43279);
} else {
if((state_val_43282 === (4))){
var inst_43271 = (state_43281[(2)]);
var inst_43272 = process(inst_43271);
var state_43281__$1 = state_43281;
if(cljs.core.truth_(inst_43272)){
var statearr_43284_43442 = state_43281__$1;
(statearr_43284_43442[(1)] = (5));

} else {
var statearr_43285_43443 = state_43281__$1;
(statearr_43285_43443[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43282 === (5))){
var state_43281__$1 = state_43281;
var statearr_43286_43444 = state_43281__$1;
(statearr_43286_43444[(2)] = null);

(statearr_43286_43444[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43282 === (6))){
var state_43281__$1 = state_43281;
var statearr_43287_43445 = state_43281__$1;
(statearr_43287_43445[(2)] = null);

(statearr_43287_43445[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43282 === (7))){
var inst_43277 = (state_43281[(2)]);
var state_43281__$1 = state_43281;
var statearr_43288_43446 = state_43281__$1;
(statearr_43288_43446[(2)] = inst_43277);

(statearr_43288_43446[(1)] = (3));


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
});})(__43437,c__14658__auto___43440,G__43268_43438,n__7136__auto___43436,jobs,results,process,async))
;
return ((function (__43437,switch__13584__auto__,c__14658__auto___43440,G__43268_43438,n__7136__auto___43436,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_43292 = [null,null,null,null,null,null,null];
(statearr_43292[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_43292[(1)] = (1));

return statearr_43292;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_43281){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43281);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43293){if((e43293 instanceof Object)){
var ex__13588__auto__ = e43293;
var statearr_43294_43447 = state_43281;
(statearr_43294_43447[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43281);

return cljs.core.cst$kw$recur;
} else {
throw e43293;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43448 = state_43281;
state_43281 = G__43448;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_43281){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_43281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(__43437,switch__13584__auto__,c__14658__auto___43440,G__43268_43438,n__7136__auto___43436,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_43295 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___43440);

return statearr_43295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(__43437,c__14658__auto___43440,G__43268_43438,n__7136__auto___43436,jobs,results,process,async))
);


break;
case "async":
var c__14658__auto___43449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43437,c__14658__auto___43449,G__43268_43438,n__7136__auto___43436,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (__43437,c__14658__auto___43449,G__43268_43438,n__7136__auto___43436,jobs,results,process,async){
return (function (state_43308){
var state_val_43309 = (state_43308[(1)]);
if((state_val_43309 === (1))){
var state_43308__$1 = state_43308;
var statearr_43310_43450 = state_43308__$1;
(statearr_43310_43450[(2)] = null);

(statearr_43310_43450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43309 === (2))){
var state_43308__$1 = state_43308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43308__$1,(4),jobs);
} else {
if((state_val_43309 === (3))){
var inst_43306 = (state_43308[(2)]);
var state_43308__$1 = state_43308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43308__$1,inst_43306);
} else {
if((state_val_43309 === (4))){
var inst_43298 = (state_43308[(2)]);
var inst_43299 = async(inst_43298);
var state_43308__$1 = state_43308;
if(cljs.core.truth_(inst_43299)){
var statearr_43311_43451 = state_43308__$1;
(statearr_43311_43451[(1)] = (5));

} else {
var statearr_43312_43452 = state_43308__$1;
(statearr_43312_43452[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43309 === (5))){
var state_43308__$1 = state_43308;
var statearr_43313_43453 = state_43308__$1;
(statearr_43313_43453[(2)] = null);

(statearr_43313_43453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43309 === (6))){
var state_43308__$1 = state_43308;
var statearr_43314_43454 = state_43308__$1;
(statearr_43314_43454[(2)] = null);

(statearr_43314_43454[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43309 === (7))){
var inst_43304 = (state_43308[(2)]);
var state_43308__$1 = state_43308;
var statearr_43315_43455 = state_43308__$1;
(statearr_43315_43455[(2)] = inst_43304);

(statearr_43315_43455[(1)] = (3));


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
});})(__43437,c__14658__auto___43449,G__43268_43438,n__7136__auto___43436,jobs,results,process,async))
;
return ((function (__43437,switch__13584__auto__,c__14658__auto___43449,G__43268_43438,n__7136__auto___43436,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_43319 = [null,null,null,null,null,null,null];
(statearr_43319[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_43319[(1)] = (1));

return statearr_43319;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_43308){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43308);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43320){if((e43320 instanceof Object)){
var ex__13588__auto__ = e43320;
var statearr_43321_43456 = state_43308;
(statearr_43321_43456[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43308);

return cljs.core.cst$kw$recur;
} else {
throw e43320;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43457 = state_43308;
state_43308 = G__43457;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_43308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_43308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(__43437,switch__13584__auto__,c__14658__auto___43449,G__43268_43438,n__7136__auto___43436,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_43322 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___43449);

return statearr_43322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(__43437,c__14658__auto___43449,G__43268_43438,n__7136__auto___43436,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__43458 = (__43437 + (1));
__43437 = G__43458;
continue;
} else {
}
break;
}

var c__14658__auto___43459 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___43459,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___43459,jobs,results,process,async){
return (function (state_43344){
var state_val_43345 = (state_43344[(1)]);
if((state_val_43345 === (1))){
var state_43344__$1 = state_43344;
var statearr_43346_43460 = state_43344__$1;
(statearr_43346_43460[(2)] = null);

(statearr_43346_43460[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43345 === (2))){
var state_43344__$1 = state_43344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43344__$1,(4),from);
} else {
if((state_val_43345 === (3))){
var inst_43342 = (state_43344[(2)]);
var state_43344__$1 = state_43344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43344__$1,inst_43342);
} else {
if((state_val_43345 === (4))){
var inst_43325 = (state_43344[(7)]);
var inst_43325__$1 = (state_43344[(2)]);
var inst_43326 = (inst_43325__$1 == null);
var state_43344__$1 = (function (){var statearr_43347 = state_43344;
(statearr_43347[(7)] = inst_43325__$1);

return statearr_43347;
})();
if(cljs.core.truth_(inst_43326)){
var statearr_43348_43461 = state_43344__$1;
(statearr_43348_43461[(1)] = (5));

} else {
var statearr_43349_43462 = state_43344__$1;
(statearr_43349_43462[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43345 === (5))){
var inst_43328 = cljs.core.async.close_BANG_(jobs);
var state_43344__$1 = state_43344;
var statearr_43350_43463 = state_43344__$1;
(statearr_43350_43463[(2)] = inst_43328);

(statearr_43350_43463[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43345 === (6))){
var inst_43330 = (state_43344[(8)]);
var inst_43325 = (state_43344[(7)]);
var inst_43330__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_43331 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43332 = [inst_43325,inst_43330__$1];
var inst_43333 = (new cljs.core.PersistentVector(null,2,(5),inst_43331,inst_43332,null));
var state_43344__$1 = (function (){var statearr_43351 = state_43344;
(statearr_43351[(8)] = inst_43330__$1);

return statearr_43351;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43344__$1,(8),jobs,inst_43333);
} else {
if((state_val_43345 === (7))){
var inst_43340 = (state_43344[(2)]);
var state_43344__$1 = state_43344;
var statearr_43352_43464 = state_43344__$1;
(statearr_43352_43464[(2)] = inst_43340);

(statearr_43352_43464[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43345 === (8))){
var inst_43330 = (state_43344[(8)]);
var inst_43335 = (state_43344[(2)]);
var state_43344__$1 = (function (){var statearr_43353 = state_43344;
(statearr_43353[(9)] = inst_43335);

return statearr_43353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43344__$1,(9),results,inst_43330);
} else {
if((state_val_43345 === (9))){
var inst_43337 = (state_43344[(2)]);
var state_43344__$1 = (function (){var statearr_43354 = state_43344;
(statearr_43354[(10)] = inst_43337);

return statearr_43354;
})();
var statearr_43355_43465 = state_43344__$1;
(statearr_43355_43465[(2)] = null);

(statearr_43355_43465[(1)] = (2));


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
});})(c__14658__auto___43459,jobs,results,process,async))
;
return ((function (switch__13584__auto__,c__14658__auto___43459,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0 = (function (){
var statearr_43359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_43359[(1)] = (1));

return statearr_43359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_43344){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43344);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43360){if((e43360 instanceof Object)){
var ex__13588__auto__ = e43360;
var statearr_43361_43466 = state_43344;
(statearr_43361_43466[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43344);

return cljs.core.cst$kw$recur;
} else {
throw e43360;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43467 = state_43344;
state_43344 = G__43467;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_43344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_43344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___43459,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_43362 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___43459);

return statearr_43362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___43459,jobs,results,process,async))
);


var c__14658__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto__,jobs,results,process,async){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto__,jobs,results,process,async){
return (function (state_43400){
var state_val_43401 = (state_43400[(1)]);
if((state_val_43401 === (7))){
var inst_43396 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
var statearr_43402_43468 = state_43400__$1;
(statearr_43402_43468[(2)] = inst_43396);

(statearr_43402_43468[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (20))){
var state_43400__$1 = state_43400;
var statearr_43403_43469 = state_43400__$1;
(statearr_43403_43469[(2)] = null);

(statearr_43403_43469[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (1))){
var state_43400__$1 = state_43400;
var statearr_43404_43470 = state_43400__$1;
(statearr_43404_43470[(2)] = null);

(statearr_43404_43470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (4))){
var inst_43365 = (state_43400[(7)]);
var inst_43365__$1 = (state_43400[(2)]);
var inst_43366 = (inst_43365__$1 == null);
var state_43400__$1 = (function (){var statearr_43405 = state_43400;
(statearr_43405[(7)] = inst_43365__$1);

return statearr_43405;
})();
if(cljs.core.truth_(inst_43366)){
var statearr_43406_43471 = state_43400__$1;
(statearr_43406_43471[(1)] = (5));

} else {
var statearr_43407_43472 = state_43400__$1;
(statearr_43407_43472[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (15))){
var inst_43378 = (state_43400[(8)]);
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43400__$1,(18),to,inst_43378);
} else {
if((state_val_43401 === (21))){
var inst_43391 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
var statearr_43408_43473 = state_43400__$1;
(statearr_43408_43473[(2)] = inst_43391);

(statearr_43408_43473[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (13))){
var inst_43393 = (state_43400[(2)]);
var state_43400__$1 = (function (){var statearr_43409 = state_43400;
(statearr_43409[(9)] = inst_43393);

return statearr_43409;
})();
var statearr_43410_43474 = state_43400__$1;
(statearr_43410_43474[(2)] = null);

(statearr_43410_43474[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (6))){
var inst_43365 = (state_43400[(7)]);
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43400__$1,(11),inst_43365);
} else {
if((state_val_43401 === (17))){
var inst_43386 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
if(cljs.core.truth_(inst_43386)){
var statearr_43411_43475 = state_43400__$1;
(statearr_43411_43475[(1)] = (19));

} else {
var statearr_43412_43476 = state_43400__$1;
(statearr_43412_43476[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (3))){
var inst_43398 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43400__$1,inst_43398);
} else {
if((state_val_43401 === (12))){
var inst_43375 = (state_43400[(10)]);
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43400__$1,(14),inst_43375);
} else {
if((state_val_43401 === (2))){
var state_43400__$1 = state_43400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43400__$1,(4),results);
} else {
if((state_val_43401 === (19))){
var state_43400__$1 = state_43400;
var statearr_43413_43477 = state_43400__$1;
(statearr_43413_43477[(2)] = null);

(statearr_43413_43477[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (11))){
var inst_43375 = (state_43400[(2)]);
var state_43400__$1 = (function (){var statearr_43414 = state_43400;
(statearr_43414[(10)] = inst_43375);

return statearr_43414;
})();
var statearr_43415_43478 = state_43400__$1;
(statearr_43415_43478[(2)] = null);

(statearr_43415_43478[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (9))){
var state_43400__$1 = state_43400;
var statearr_43416_43479 = state_43400__$1;
(statearr_43416_43479[(2)] = null);

(statearr_43416_43479[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (5))){
var state_43400__$1 = state_43400;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43417_43480 = state_43400__$1;
(statearr_43417_43480[(1)] = (8));

} else {
var statearr_43418_43481 = state_43400__$1;
(statearr_43418_43481[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (14))){
var inst_43380 = (state_43400[(11)]);
var inst_43378 = (state_43400[(8)]);
var inst_43378__$1 = (state_43400[(2)]);
var inst_43379 = (inst_43378__$1 == null);
var inst_43380__$1 = cljs.core.not(inst_43379);
var state_43400__$1 = (function (){var statearr_43419 = state_43400;
(statearr_43419[(11)] = inst_43380__$1);

(statearr_43419[(8)] = inst_43378__$1);

return statearr_43419;
})();
if(inst_43380__$1){
var statearr_43420_43482 = state_43400__$1;
(statearr_43420_43482[(1)] = (15));

} else {
var statearr_43421_43483 = state_43400__$1;
(statearr_43421_43483[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (16))){
var inst_43380 = (state_43400[(11)]);
var state_43400__$1 = state_43400;
var statearr_43422_43484 = state_43400__$1;
(statearr_43422_43484[(2)] = inst_43380);

(statearr_43422_43484[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (10))){
var inst_43372 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
var statearr_43423_43485 = state_43400__$1;
(statearr_43423_43485[(2)] = inst_43372);

(statearr_43423_43485[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (18))){
var inst_43383 = (state_43400[(2)]);
var state_43400__$1 = state_43400;
var statearr_43424_43486 = state_43400__$1;
(statearr_43424_43486[(2)] = inst_43383);

(statearr_43424_43486[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43401 === (8))){
var inst_43369 = cljs.core.async.close_BANG_(to);
var state_43400__$1 = state_43400;
var statearr_43425_43487 = state_43400__$1;
(statearr_43425_43487[(2)] = inst_43369);

(statearr_43425_43487[(1)] = (10));


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
var statearr_43429 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__);

(statearr_43429[(1)] = (1));

return statearr_43429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1 = (function (state_43400){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43400);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43430){if((e43430 instanceof Object)){
var ex__13588__auto__ = e43430;
var statearr_43431_43488 = state_43400;
(statearr_43431_43488[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43400);

return cljs.core.cst$kw$recur;
} else {
throw e43430;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43489 = state_43400;
state_43400 = G__43489;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__ = function(state_43400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1.call(this,state_43400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__,jobs,results,process,async))
})();
var state__14660__auto__ = (function (){var statearr_43432 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_43432;
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
var args43490 = [];
var len__7296__auto___43493 = arguments.length;
var i__7297__auto___43494 = (0);
while(true){
if((i__7297__auto___43494 < len__7296__auto___43493)){
args43490.push((arguments[i__7297__auto___43494]));

var G__43495 = (i__7297__auto___43494 + (1));
i__7297__auto___43494 = G__43495;
continue;
} else {
}
break;
}

var G__43492 = args43490.length;
switch (G__43492) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43490.length)].join('')));

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
var args43497 = [];
var len__7296__auto___43500 = arguments.length;
var i__7297__auto___43501 = (0);
while(true){
if((i__7297__auto___43501 < len__7296__auto___43500)){
args43497.push((arguments[i__7297__auto___43501]));

var G__43502 = (i__7297__auto___43501 + (1));
i__7297__auto___43501 = G__43502;
continue;
} else {
}
break;
}

var G__43499 = args43497.length;
switch (G__43499) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43497.length)].join('')));

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
var args43504 = [];
var len__7296__auto___43557 = arguments.length;
var i__7297__auto___43558 = (0);
while(true){
if((i__7297__auto___43558 < len__7296__auto___43557)){
args43504.push((arguments[i__7297__auto___43558]));

var G__43559 = (i__7297__auto___43558 + (1));
i__7297__auto___43558 = G__43559;
continue;
} else {
}
break;
}

var G__43506 = args43504.length;
switch (G__43506) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43504.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14658__auto___43561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___43561,tc,fc){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___43561,tc,fc){
return (function (state_43532){
var state_val_43533 = (state_43532[(1)]);
if((state_val_43533 === (7))){
var inst_43528 = (state_43532[(2)]);
var state_43532__$1 = state_43532;
var statearr_43534_43562 = state_43532__$1;
(statearr_43534_43562[(2)] = inst_43528);

(statearr_43534_43562[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (1))){
var state_43532__$1 = state_43532;
var statearr_43535_43563 = state_43532__$1;
(statearr_43535_43563[(2)] = null);

(statearr_43535_43563[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (4))){
var inst_43509 = (state_43532[(7)]);
var inst_43509__$1 = (state_43532[(2)]);
var inst_43510 = (inst_43509__$1 == null);
var state_43532__$1 = (function (){var statearr_43536 = state_43532;
(statearr_43536[(7)] = inst_43509__$1);

return statearr_43536;
})();
if(cljs.core.truth_(inst_43510)){
var statearr_43537_43564 = state_43532__$1;
(statearr_43537_43564[(1)] = (5));

} else {
var statearr_43538_43565 = state_43532__$1;
(statearr_43538_43565[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (13))){
var state_43532__$1 = state_43532;
var statearr_43539_43566 = state_43532__$1;
(statearr_43539_43566[(2)] = null);

(statearr_43539_43566[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (6))){
var inst_43509 = (state_43532[(7)]);
var inst_43515 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43509) : p.call(null,inst_43509));
var state_43532__$1 = state_43532;
if(cljs.core.truth_(inst_43515)){
var statearr_43540_43567 = state_43532__$1;
(statearr_43540_43567[(1)] = (9));

} else {
var statearr_43541_43568 = state_43532__$1;
(statearr_43541_43568[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (3))){
var inst_43530 = (state_43532[(2)]);
var state_43532__$1 = state_43532;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43532__$1,inst_43530);
} else {
if((state_val_43533 === (12))){
var state_43532__$1 = state_43532;
var statearr_43542_43569 = state_43532__$1;
(statearr_43542_43569[(2)] = null);

(statearr_43542_43569[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (2))){
var state_43532__$1 = state_43532;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43532__$1,(4),ch);
} else {
if((state_val_43533 === (11))){
var inst_43509 = (state_43532[(7)]);
var inst_43519 = (state_43532[(2)]);
var state_43532__$1 = state_43532;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43532__$1,(8),inst_43519,inst_43509);
} else {
if((state_val_43533 === (9))){
var state_43532__$1 = state_43532;
var statearr_43543_43570 = state_43532__$1;
(statearr_43543_43570[(2)] = tc);

(statearr_43543_43570[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (5))){
var inst_43512 = cljs.core.async.close_BANG_(tc);
var inst_43513 = cljs.core.async.close_BANG_(fc);
var state_43532__$1 = (function (){var statearr_43544 = state_43532;
(statearr_43544[(8)] = inst_43512);

return statearr_43544;
})();
var statearr_43545_43571 = state_43532__$1;
(statearr_43545_43571[(2)] = inst_43513);

(statearr_43545_43571[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (14))){
var inst_43526 = (state_43532[(2)]);
var state_43532__$1 = state_43532;
var statearr_43546_43572 = state_43532__$1;
(statearr_43546_43572[(2)] = inst_43526);

(statearr_43546_43572[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (10))){
var state_43532__$1 = state_43532;
var statearr_43547_43573 = state_43532__$1;
(statearr_43547_43573[(2)] = fc);

(statearr_43547_43573[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43533 === (8))){
var inst_43521 = (state_43532[(2)]);
var state_43532__$1 = state_43532;
if(cljs.core.truth_(inst_43521)){
var statearr_43548_43574 = state_43532__$1;
(statearr_43548_43574[(1)] = (12));

} else {
var statearr_43549_43575 = state_43532__$1;
(statearr_43549_43575[(1)] = (13));

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
});})(c__14658__auto___43561,tc,fc))
;
return ((function (switch__13584__auto__,c__14658__auto___43561,tc,fc){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_43553 = [null,null,null,null,null,null,null,null,null];
(statearr_43553[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_43553[(1)] = (1));

return statearr_43553;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_43532){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43532);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43554){if((e43554 instanceof Object)){
var ex__13588__auto__ = e43554;
var statearr_43555_43576 = state_43532;
(statearr_43555_43576[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43532);

return cljs.core.cst$kw$recur;
} else {
throw e43554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43577 = state_43532;
state_43532 = G__43577;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_43532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_43532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___43561,tc,fc))
})();
var state__14660__auto__ = (function (){var statearr_43556 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___43561);

return statearr_43556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___43561,tc,fc))
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
return (function (state_43641){
var state_val_43642 = (state_43641[(1)]);
if((state_val_43642 === (7))){
var inst_43637 = (state_43641[(2)]);
var state_43641__$1 = state_43641;
var statearr_43643_43664 = state_43641__$1;
(statearr_43643_43664[(2)] = inst_43637);

(statearr_43643_43664[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43642 === (1))){
var inst_43621 = init;
var state_43641__$1 = (function (){var statearr_43644 = state_43641;
(statearr_43644[(7)] = inst_43621);

return statearr_43644;
})();
var statearr_43645_43665 = state_43641__$1;
(statearr_43645_43665[(2)] = null);

(statearr_43645_43665[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43642 === (4))){
var inst_43624 = (state_43641[(8)]);
var inst_43624__$1 = (state_43641[(2)]);
var inst_43625 = (inst_43624__$1 == null);
var state_43641__$1 = (function (){var statearr_43646 = state_43641;
(statearr_43646[(8)] = inst_43624__$1);

return statearr_43646;
})();
if(cljs.core.truth_(inst_43625)){
var statearr_43647_43666 = state_43641__$1;
(statearr_43647_43666[(1)] = (5));

} else {
var statearr_43648_43667 = state_43641__$1;
(statearr_43648_43667[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43642 === (6))){
var inst_43621 = (state_43641[(7)]);
var inst_43628 = (state_43641[(9)]);
var inst_43624 = (state_43641[(8)]);
var inst_43628__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43621,inst_43624) : f.call(null,inst_43621,inst_43624));
var inst_43629 = cljs.core.reduced_QMARK_(inst_43628__$1);
var state_43641__$1 = (function (){var statearr_43649 = state_43641;
(statearr_43649[(9)] = inst_43628__$1);

return statearr_43649;
})();
if(inst_43629){
var statearr_43650_43668 = state_43641__$1;
(statearr_43650_43668[(1)] = (8));

} else {
var statearr_43651_43669 = state_43641__$1;
(statearr_43651_43669[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43642 === (3))){
var inst_43639 = (state_43641[(2)]);
var state_43641__$1 = state_43641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43641__$1,inst_43639);
} else {
if((state_val_43642 === (2))){
var state_43641__$1 = state_43641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43641__$1,(4),ch);
} else {
if((state_val_43642 === (9))){
var inst_43628 = (state_43641[(9)]);
var inst_43621 = inst_43628;
var state_43641__$1 = (function (){var statearr_43652 = state_43641;
(statearr_43652[(7)] = inst_43621);

return statearr_43652;
})();
var statearr_43653_43670 = state_43641__$1;
(statearr_43653_43670[(2)] = null);

(statearr_43653_43670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43642 === (5))){
var inst_43621 = (state_43641[(7)]);
var state_43641__$1 = state_43641;
var statearr_43654_43671 = state_43641__$1;
(statearr_43654_43671[(2)] = inst_43621);

(statearr_43654_43671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43642 === (10))){
var inst_43635 = (state_43641[(2)]);
var state_43641__$1 = state_43641;
var statearr_43655_43672 = state_43641__$1;
(statearr_43655_43672[(2)] = inst_43635);

(statearr_43655_43672[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43642 === (8))){
var inst_43628 = (state_43641[(9)]);
var inst_43631 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_43628) : cljs.core.deref.call(null,inst_43628));
var state_43641__$1 = state_43641;
var statearr_43656_43673 = state_43641__$1;
(statearr_43656_43673[(2)] = inst_43631);

(statearr_43656_43673[(1)] = (10));


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
var statearr_43660 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43660[(0)] = cljs$core$async$reduce_$_state_machine__13585__auto__);

(statearr_43660[(1)] = (1));

return statearr_43660;
});
var cljs$core$async$reduce_$_state_machine__13585__auto____1 = (function (state_43641){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43641);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43661){if((e43661 instanceof Object)){
var ex__13588__auto__ = e43661;
var statearr_43662_43674 = state_43641;
(statearr_43662_43674[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43641);

return cljs.core.cst$kw$recur;
} else {
throw e43661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43675 = state_43641;
state_43641 = G__43675;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13585__auto__ = function(state_43641){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13585__auto____1.call(this,state_43641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13585__auto____0;
cljs$core$async$reduce_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13585__auto____1;
return cljs$core$async$reduce_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_43663 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_43663;
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
var args43676 = [];
var len__7296__auto___43728 = arguments.length;
var i__7297__auto___43729 = (0);
while(true){
if((i__7297__auto___43729 < len__7296__auto___43728)){
args43676.push((arguments[i__7297__auto___43729]));

var G__43730 = (i__7297__auto___43729 + (1));
i__7297__auto___43729 = G__43730;
continue;
} else {
}
break;
}

var G__43678 = args43676.length;
switch (G__43678) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43676.length)].join('')));

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
return (function (state_43703){
var state_val_43704 = (state_43703[(1)]);
if((state_val_43704 === (7))){
var inst_43685 = (state_43703[(2)]);
var state_43703__$1 = state_43703;
var statearr_43705_43732 = state_43703__$1;
(statearr_43705_43732[(2)] = inst_43685);

(statearr_43705_43732[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (1))){
var inst_43679 = cljs.core.seq(coll);
var inst_43680 = inst_43679;
var state_43703__$1 = (function (){var statearr_43706 = state_43703;
(statearr_43706[(7)] = inst_43680);

return statearr_43706;
})();
var statearr_43707_43733 = state_43703__$1;
(statearr_43707_43733[(2)] = null);

(statearr_43707_43733[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (4))){
var inst_43680 = (state_43703[(7)]);
var inst_43683 = cljs.core.first(inst_43680);
var state_43703__$1 = state_43703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43703__$1,(7),ch,inst_43683);
} else {
if((state_val_43704 === (13))){
var inst_43697 = (state_43703[(2)]);
var state_43703__$1 = state_43703;
var statearr_43708_43734 = state_43703__$1;
(statearr_43708_43734[(2)] = inst_43697);

(statearr_43708_43734[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (6))){
var inst_43688 = (state_43703[(2)]);
var state_43703__$1 = state_43703;
if(cljs.core.truth_(inst_43688)){
var statearr_43709_43735 = state_43703__$1;
(statearr_43709_43735[(1)] = (8));

} else {
var statearr_43710_43736 = state_43703__$1;
(statearr_43710_43736[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (3))){
var inst_43701 = (state_43703[(2)]);
var state_43703__$1 = state_43703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43703__$1,inst_43701);
} else {
if((state_val_43704 === (12))){
var state_43703__$1 = state_43703;
var statearr_43711_43737 = state_43703__$1;
(statearr_43711_43737[(2)] = null);

(statearr_43711_43737[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (2))){
var inst_43680 = (state_43703[(7)]);
var state_43703__$1 = state_43703;
if(cljs.core.truth_(inst_43680)){
var statearr_43712_43738 = state_43703__$1;
(statearr_43712_43738[(1)] = (4));

} else {
var statearr_43713_43739 = state_43703__$1;
(statearr_43713_43739[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (11))){
var inst_43694 = cljs.core.async.close_BANG_(ch);
var state_43703__$1 = state_43703;
var statearr_43714_43740 = state_43703__$1;
(statearr_43714_43740[(2)] = inst_43694);

(statearr_43714_43740[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (9))){
var state_43703__$1 = state_43703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43715_43741 = state_43703__$1;
(statearr_43715_43741[(1)] = (11));

} else {
var statearr_43716_43742 = state_43703__$1;
(statearr_43716_43742[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (5))){
var inst_43680 = (state_43703[(7)]);
var state_43703__$1 = state_43703;
var statearr_43717_43743 = state_43703__$1;
(statearr_43717_43743[(2)] = inst_43680);

(statearr_43717_43743[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (10))){
var inst_43699 = (state_43703[(2)]);
var state_43703__$1 = state_43703;
var statearr_43718_43744 = state_43703__$1;
(statearr_43718_43744[(2)] = inst_43699);

(statearr_43718_43744[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43704 === (8))){
var inst_43680 = (state_43703[(7)]);
var inst_43690 = cljs.core.next(inst_43680);
var inst_43680__$1 = inst_43690;
var state_43703__$1 = (function (){var statearr_43719 = state_43703;
(statearr_43719[(7)] = inst_43680__$1);

return statearr_43719;
})();
var statearr_43720_43745 = state_43703__$1;
(statearr_43720_43745[(2)] = null);

(statearr_43720_43745[(1)] = (2));


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
var statearr_43724 = [null,null,null,null,null,null,null,null];
(statearr_43724[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_43724[(1)] = (1));

return statearr_43724;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_43703){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_43703);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e43725){if((e43725 instanceof Object)){
var ex__13588__auto__ = e43725;
var statearr_43726_43746 = state_43703;
(statearr_43726_43746[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43703);

return cljs.core.cst$kw$recur;
} else {
throw e43725;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__43747 = state_43703;
state_43703 = G__43747;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_43703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_43703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_43727 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_43727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_43727;
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
var cs = (function (){var G__43976 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__43976) : cljs.core.atom.call(null,G__43976));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43977 = (function (mult,ch,cs,meta43978){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta43978 = meta43978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_43979,meta43978__$1){
var self__ = this;
var _43979__$1 = this;
return (new cljs.core.async.t_cljs$core$async43977(self__.mult,self__.ch,self__.cs,meta43978__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_43979){
var self__ = this;
var _43979__$1 = this;
return self__.meta43978;
});})(cs))
;

cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43977.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__43980_44204 = self__.cs;
var G__43981_44205 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__43980_44204,G__43981_44205) : cljs.core.reset_BANG_.call(null,G__43980_44204,G__43981_44205));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async43977.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta43978], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async43977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43977";

cljs.core.async.t_cljs$core$async43977.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async43977");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async43977 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async43977(mult__$1,ch__$1,cs__$1,meta43978){
return (new cljs.core.async.t_cljs$core$async43977(mult__$1,ch__$1,cs__$1,meta43978));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async43977(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14658__auto___44206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___44206,cs,m,dchan,dctr,done){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___44206,cs,m,dchan,dctr,done){
return (function (state_44116){
var state_val_44117 = (state_44116[(1)]);
if((state_val_44117 === (7))){
var inst_44112 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44118_44207 = state_44116__$1;
(statearr_44118_44207[(2)] = inst_44112);

(statearr_44118_44207[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (20))){
var inst_44015 = (state_44116[(7)]);
var inst_44027 = cljs.core.first(inst_44015);
var inst_44028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44027,(0),null);
var inst_44029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44027,(1),null);
var state_44116__$1 = (function (){var statearr_44119 = state_44116;
(statearr_44119[(8)] = inst_44028);

return statearr_44119;
})();
if(cljs.core.truth_(inst_44029)){
var statearr_44120_44208 = state_44116__$1;
(statearr_44120_44208[(1)] = (22));

} else {
var statearr_44121_44209 = state_44116__$1;
(statearr_44121_44209[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (27))){
var inst_44064 = (state_44116[(9)]);
var inst_44059 = (state_44116[(10)]);
var inst_43984 = (state_44116[(11)]);
var inst_44057 = (state_44116[(12)]);
var inst_44064__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44057,inst_44059);
var inst_44065 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44064__$1,inst_43984,done);
var state_44116__$1 = (function (){var statearr_44122 = state_44116;
(statearr_44122[(9)] = inst_44064__$1);

return statearr_44122;
})();
if(cljs.core.truth_(inst_44065)){
var statearr_44123_44210 = state_44116__$1;
(statearr_44123_44210[(1)] = (30));

} else {
var statearr_44124_44211 = state_44116__$1;
(statearr_44124_44211[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (1))){
var state_44116__$1 = state_44116;
var statearr_44125_44212 = state_44116__$1;
(statearr_44125_44212[(2)] = null);

(statearr_44125_44212[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (24))){
var inst_44015 = (state_44116[(7)]);
var inst_44034 = (state_44116[(2)]);
var inst_44035 = cljs.core.next(inst_44015);
var inst_43993 = inst_44035;
var inst_43994 = null;
var inst_43995 = (0);
var inst_43996 = (0);
var state_44116__$1 = (function (){var statearr_44126 = state_44116;
(statearr_44126[(13)] = inst_43994);

(statearr_44126[(14)] = inst_43996);

(statearr_44126[(15)] = inst_44034);

(statearr_44126[(16)] = inst_43993);

(statearr_44126[(17)] = inst_43995);

return statearr_44126;
})();
var statearr_44127_44213 = state_44116__$1;
(statearr_44127_44213[(2)] = null);

(statearr_44127_44213[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (39))){
var state_44116__$1 = state_44116;
var statearr_44131_44214 = state_44116__$1;
(statearr_44131_44214[(2)] = null);

(statearr_44131_44214[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (4))){
var inst_43984 = (state_44116[(11)]);
var inst_43984__$1 = (state_44116[(2)]);
var inst_43985 = (inst_43984__$1 == null);
var state_44116__$1 = (function (){var statearr_44132 = state_44116;
(statearr_44132[(11)] = inst_43984__$1);

return statearr_44132;
})();
if(cljs.core.truth_(inst_43985)){
var statearr_44133_44215 = state_44116__$1;
(statearr_44133_44215[(1)] = (5));

} else {
var statearr_44134_44216 = state_44116__$1;
(statearr_44134_44216[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (15))){
var inst_43994 = (state_44116[(13)]);
var inst_43996 = (state_44116[(14)]);
var inst_43993 = (state_44116[(16)]);
var inst_43995 = (state_44116[(17)]);
var inst_44011 = (state_44116[(2)]);
var inst_44012 = (inst_43996 + (1));
var tmp44128 = inst_43994;
var tmp44129 = inst_43993;
var tmp44130 = inst_43995;
var inst_43993__$1 = tmp44129;
var inst_43994__$1 = tmp44128;
var inst_43995__$1 = tmp44130;
var inst_43996__$1 = inst_44012;
var state_44116__$1 = (function (){var statearr_44135 = state_44116;
(statearr_44135[(13)] = inst_43994__$1);

(statearr_44135[(14)] = inst_43996__$1);

(statearr_44135[(18)] = inst_44011);

(statearr_44135[(16)] = inst_43993__$1);

(statearr_44135[(17)] = inst_43995__$1);

return statearr_44135;
})();
var statearr_44136_44217 = state_44116__$1;
(statearr_44136_44217[(2)] = null);

(statearr_44136_44217[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (21))){
var inst_44038 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44140_44218 = state_44116__$1;
(statearr_44140_44218[(2)] = inst_44038);

(statearr_44140_44218[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (31))){
var inst_44064 = (state_44116[(9)]);
var inst_44068 = done(null);
var inst_44069 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44064);
var state_44116__$1 = (function (){var statearr_44141 = state_44116;
(statearr_44141[(19)] = inst_44068);

return statearr_44141;
})();
var statearr_44142_44219 = state_44116__$1;
(statearr_44142_44219[(2)] = inst_44069);

(statearr_44142_44219[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (32))){
var inst_44059 = (state_44116[(10)]);
var inst_44056 = (state_44116[(20)]);
var inst_44058 = (state_44116[(21)]);
var inst_44057 = (state_44116[(12)]);
var inst_44071 = (state_44116[(2)]);
var inst_44072 = (inst_44059 + (1));
var tmp44137 = inst_44056;
var tmp44138 = inst_44058;
var tmp44139 = inst_44057;
var inst_44056__$1 = tmp44137;
var inst_44057__$1 = tmp44139;
var inst_44058__$1 = tmp44138;
var inst_44059__$1 = inst_44072;
var state_44116__$1 = (function (){var statearr_44143 = state_44116;
(statearr_44143[(10)] = inst_44059__$1);

(statearr_44143[(20)] = inst_44056__$1);

(statearr_44143[(22)] = inst_44071);

(statearr_44143[(21)] = inst_44058__$1);

(statearr_44143[(12)] = inst_44057__$1);

return statearr_44143;
})();
var statearr_44144_44220 = state_44116__$1;
(statearr_44144_44220[(2)] = null);

(statearr_44144_44220[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (40))){
var inst_44084 = (state_44116[(23)]);
var inst_44088 = done(null);
var inst_44089 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_44084);
var state_44116__$1 = (function (){var statearr_44145 = state_44116;
(statearr_44145[(24)] = inst_44088);

return statearr_44145;
})();
var statearr_44146_44221 = state_44116__$1;
(statearr_44146_44221[(2)] = inst_44089);

(statearr_44146_44221[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (33))){
var inst_44075 = (state_44116[(25)]);
var inst_44077 = cljs.core.chunked_seq_QMARK_(inst_44075);
var state_44116__$1 = state_44116;
if(inst_44077){
var statearr_44147_44222 = state_44116__$1;
(statearr_44147_44222[(1)] = (36));

} else {
var statearr_44148_44223 = state_44116__$1;
(statearr_44148_44223[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (13))){
var inst_44005 = (state_44116[(26)]);
var inst_44008 = cljs.core.async.close_BANG_(inst_44005);
var state_44116__$1 = state_44116;
var statearr_44149_44224 = state_44116__$1;
(statearr_44149_44224[(2)] = inst_44008);

(statearr_44149_44224[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (22))){
var inst_44028 = (state_44116[(8)]);
var inst_44031 = cljs.core.async.close_BANG_(inst_44028);
var state_44116__$1 = state_44116;
var statearr_44150_44225 = state_44116__$1;
(statearr_44150_44225[(2)] = inst_44031);

(statearr_44150_44225[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (36))){
var inst_44075 = (state_44116[(25)]);
var inst_44079 = cljs.core.chunk_first(inst_44075);
var inst_44080 = cljs.core.chunk_rest(inst_44075);
var inst_44081 = cljs.core.count(inst_44079);
var inst_44056 = inst_44080;
var inst_44057 = inst_44079;
var inst_44058 = inst_44081;
var inst_44059 = (0);
var state_44116__$1 = (function (){var statearr_44151 = state_44116;
(statearr_44151[(10)] = inst_44059);

(statearr_44151[(20)] = inst_44056);

(statearr_44151[(21)] = inst_44058);

(statearr_44151[(12)] = inst_44057);

return statearr_44151;
})();
var statearr_44152_44226 = state_44116__$1;
(statearr_44152_44226[(2)] = null);

(statearr_44152_44226[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (41))){
var inst_44075 = (state_44116[(25)]);
var inst_44091 = (state_44116[(2)]);
var inst_44092 = cljs.core.next(inst_44075);
var inst_44056 = inst_44092;
var inst_44057 = null;
var inst_44058 = (0);
var inst_44059 = (0);
var state_44116__$1 = (function (){var statearr_44153 = state_44116;
(statearr_44153[(10)] = inst_44059);

(statearr_44153[(20)] = inst_44056);

(statearr_44153[(27)] = inst_44091);

(statearr_44153[(21)] = inst_44058);

(statearr_44153[(12)] = inst_44057);

return statearr_44153;
})();
var statearr_44154_44227 = state_44116__$1;
(statearr_44154_44227[(2)] = null);

(statearr_44154_44227[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (43))){
var state_44116__$1 = state_44116;
var statearr_44155_44228 = state_44116__$1;
(statearr_44155_44228[(2)] = null);

(statearr_44155_44228[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (29))){
var inst_44100 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44156_44229 = state_44116__$1;
(statearr_44156_44229[(2)] = inst_44100);

(statearr_44156_44229[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (44))){
var inst_44109 = (state_44116[(2)]);
var state_44116__$1 = (function (){var statearr_44157 = state_44116;
(statearr_44157[(28)] = inst_44109);

return statearr_44157;
})();
var statearr_44158_44230 = state_44116__$1;
(statearr_44158_44230[(2)] = null);

(statearr_44158_44230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (6))){
var inst_44048 = (state_44116[(29)]);
var inst_44047 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_44048__$1 = cljs.core.keys(inst_44047);
var inst_44049 = cljs.core.count(inst_44048__$1);
var inst_44050 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_44049) : cljs.core.reset_BANG_.call(null,dctr,inst_44049));
var inst_44055 = cljs.core.seq(inst_44048__$1);
var inst_44056 = inst_44055;
var inst_44057 = null;
var inst_44058 = (0);
var inst_44059 = (0);
var state_44116__$1 = (function (){var statearr_44159 = state_44116;
(statearr_44159[(10)] = inst_44059);

(statearr_44159[(30)] = inst_44050);

(statearr_44159[(20)] = inst_44056);

(statearr_44159[(21)] = inst_44058);

(statearr_44159[(12)] = inst_44057);

(statearr_44159[(29)] = inst_44048__$1);

return statearr_44159;
})();
var statearr_44160_44231 = state_44116__$1;
(statearr_44160_44231[(2)] = null);

(statearr_44160_44231[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (28))){
var inst_44056 = (state_44116[(20)]);
var inst_44075 = (state_44116[(25)]);
var inst_44075__$1 = cljs.core.seq(inst_44056);
var state_44116__$1 = (function (){var statearr_44161 = state_44116;
(statearr_44161[(25)] = inst_44075__$1);

return statearr_44161;
})();
if(inst_44075__$1){
var statearr_44162_44232 = state_44116__$1;
(statearr_44162_44232[(1)] = (33));

} else {
var statearr_44163_44233 = state_44116__$1;
(statearr_44163_44233[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (25))){
var inst_44059 = (state_44116[(10)]);
var inst_44058 = (state_44116[(21)]);
var inst_44061 = (inst_44059 < inst_44058);
var inst_44062 = inst_44061;
var state_44116__$1 = state_44116;
if(cljs.core.truth_(inst_44062)){
var statearr_44164_44234 = state_44116__$1;
(statearr_44164_44234[(1)] = (27));

} else {
var statearr_44165_44235 = state_44116__$1;
(statearr_44165_44235[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (34))){
var state_44116__$1 = state_44116;
var statearr_44166_44236 = state_44116__$1;
(statearr_44166_44236[(2)] = null);

(statearr_44166_44236[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (17))){
var state_44116__$1 = state_44116;
var statearr_44167_44237 = state_44116__$1;
(statearr_44167_44237[(2)] = null);

(statearr_44167_44237[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (3))){
var inst_44114 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44116__$1,inst_44114);
} else {
if((state_val_44117 === (12))){
var inst_44043 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44168_44238 = state_44116__$1;
(statearr_44168_44238[(2)] = inst_44043);

(statearr_44168_44238[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (2))){
var state_44116__$1 = state_44116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44116__$1,(4),ch);
} else {
if((state_val_44117 === (23))){
var state_44116__$1 = state_44116;
var statearr_44169_44239 = state_44116__$1;
(statearr_44169_44239[(2)] = null);

(statearr_44169_44239[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (35))){
var inst_44098 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44170_44240 = state_44116__$1;
(statearr_44170_44240[(2)] = inst_44098);

(statearr_44170_44240[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (19))){
var inst_44015 = (state_44116[(7)]);
var inst_44019 = cljs.core.chunk_first(inst_44015);
var inst_44020 = cljs.core.chunk_rest(inst_44015);
var inst_44021 = cljs.core.count(inst_44019);
var inst_43993 = inst_44020;
var inst_43994 = inst_44019;
var inst_43995 = inst_44021;
var inst_43996 = (0);
var state_44116__$1 = (function (){var statearr_44171 = state_44116;
(statearr_44171[(13)] = inst_43994);

(statearr_44171[(14)] = inst_43996);

(statearr_44171[(16)] = inst_43993);

(statearr_44171[(17)] = inst_43995);

return statearr_44171;
})();
var statearr_44172_44241 = state_44116__$1;
(statearr_44172_44241[(2)] = null);

(statearr_44172_44241[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (11))){
var inst_44015 = (state_44116[(7)]);
var inst_43993 = (state_44116[(16)]);
var inst_44015__$1 = cljs.core.seq(inst_43993);
var state_44116__$1 = (function (){var statearr_44173 = state_44116;
(statearr_44173[(7)] = inst_44015__$1);

return statearr_44173;
})();
if(inst_44015__$1){
var statearr_44174_44242 = state_44116__$1;
(statearr_44174_44242[(1)] = (16));

} else {
var statearr_44175_44243 = state_44116__$1;
(statearr_44175_44243[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (9))){
var inst_44045 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44176_44244 = state_44116__$1;
(statearr_44176_44244[(2)] = inst_44045);

(statearr_44176_44244[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (5))){
var inst_43991 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_43992 = cljs.core.seq(inst_43991);
var inst_43993 = inst_43992;
var inst_43994 = null;
var inst_43995 = (0);
var inst_43996 = (0);
var state_44116__$1 = (function (){var statearr_44177 = state_44116;
(statearr_44177[(13)] = inst_43994);

(statearr_44177[(14)] = inst_43996);

(statearr_44177[(16)] = inst_43993);

(statearr_44177[(17)] = inst_43995);

return statearr_44177;
})();
var statearr_44178_44245 = state_44116__$1;
(statearr_44178_44245[(2)] = null);

(statearr_44178_44245[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (14))){
var state_44116__$1 = state_44116;
var statearr_44179_44246 = state_44116__$1;
(statearr_44179_44246[(2)] = null);

(statearr_44179_44246[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (45))){
var inst_44106 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44180_44247 = state_44116__$1;
(statearr_44180_44247[(2)] = inst_44106);

(statearr_44180_44247[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (26))){
var inst_44048 = (state_44116[(29)]);
var inst_44102 = (state_44116[(2)]);
var inst_44103 = cljs.core.seq(inst_44048);
var state_44116__$1 = (function (){var statearr_44181 = state_44116;
(statearr_44181[(31)] = inst_44102);

return statearr_44181;
})();
if(inst_44103){
var statearr_44182_44248 = state_44116__$1;
(statearr_44182_44248[(1)] = (42));

} else {
var statearr_44183_44249 = state_44116__$1;
(statearr_44183_44249[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (16))){
var inst_44015 = (state_44116[(7)]);
var inst_44017 = cljs.core.chunked_seq_QMARK_(inst_44015);
var state_44116__$1 = state_44116;
if(inst_44017){
var statearr_44184_44250 = state_44116__$1;
(statearr_44184_44250[(1)] = (19));

} else {
var statearr_44185_44251 = state_44116__$1;
(statearr_44185_44251[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (38))){
var inst_44095 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44186_44252 = state_44116__$1;
(statearr_44186_44252[(2)] = inst_44095);

(statearr_44186_44252[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (30))){
var state_44116__$1 = state_44116;
var statearr_44187_44253 = state_44116__$1;
(statearr_44187_44253[(2)] = null);

(statearr_44187_44253[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (10))){
var inst_43994 = (state_44116[(13)]);
var inst_43996 = (state_44116[(14)]);
var inst_44004 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_43994,inst_43996);
var inst_44005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44004,(0),null);
var inst_44006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44004,(1),null);
var state_44116__$1 = (function (){var statearr_44188 = state_44116;
(statearr_44188[(26)] = inst_44005);

return statearr_44188;
})();
if(cljs.core.truth_(inst_44006)){
var statearr_44189_44254 = state_44116__$1;
(statearr_44189_44254[(1)] = (13));

} else {
var statearr_44190_44255 = state_44116__$1;
(statearr_44190_44255[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (18))){
var inst_44041 = (state_44116[(2)]);
var state_44116__$1 = state_44116;
var statearr_44191_44256 = state_44116__$1;
(statearr_44191_44256[(2)] = inst_44041);

(statearr_44191_44256[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (42))){
var state_44116__$1 = state_44116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44116__$1,(45),dchan);
} else {
if((state_val_44117 === (37))){
var inst_43984 = (state_44116[(11)]);
var inst_44075 = (state_44116[(25)]);
var inst_44084 = (state_44116[(23)]);
var inst_44084__$1 = cljs.core.first(inst_44075);
var inst_44085 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_44084__$1,inst_43984,done);
var state_44116__$1 = (function (){var statearr_44192 = state_44116;
(statearr_44192[(23)] = inst_44084__$1);

return statearr_44192;
})();
if(cljs.core.truth_(inst_44085)){
var statearr_44193_44257 = state_44116__$1;
(statearr_44193_44257[(1)] = (39));

} else {
var statearr_44194_44258 = state_44116__$1;
(statearr_44194_44258[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44117 === (8))){
var inst_43996 = (state_44116[(14)]);
var inst_43995 = (state_44116[(17)]);
var inst_43998 = (inst_43996 < inst_43995);
var inst_43999 = inst_43998;
var state_44116__$1 = state_44116;
if(cljs.core.truth_(inst_43999)){
var statearr_44195_44259 = state_44116__$1;
(statearr_44195_44259[(1)] = (10));

} else {
var statearr_44196_44260 = state_44116__$1;
(statearr_44196_44260[(1)] = (11));

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
});})(c__14658__auto___44206,cs,m,dchan,dctr,done))
;
return ((function (switch__13584__auto__,c__14658__auto___44206,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13585__auto__ = null;
var cljs$core$async$mult_$_state_machine__13585__auto____0 = (function (){
var statearr_44200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44200[(0)] = cljs$core$async$mult_$_state_machine__13585__auto__);

(statearr_44200[(1)] = (1));

return statearr_44200;
});
var cljs$core$async$mult_$_state_machine__13585__auto____1 = (function (state_44116){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_44116);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e44201){if((e44201 instanceof Object)){
var ex__13588__auto__ = e44201;
var statearr_44202_44261 = state_44116;
(statearr_44202_44261[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44116);

return cljs.core.cst$kw$recur;
} else {
throw e44201;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__44262 = state_44116;
state_44116 = G__44262;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13585__auto__ = function(state_44116){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13585__auto____1.call(this,state_44116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13585__auto____0;
cljs$core$async$mult_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13585__auto____1;
return cljs$core$async$mult_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___44206,cs,m,dchan,dctr,done))
})();
var state__14660__auto__ = (function (){var statearr_44203 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_44203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___44206);

return statearr_44203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___44206,cs,m,dchan,dctr,done))
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
var args44263 = [];
var len__7296__auto___44266 = arguments.length;
var i__7297__auto___44267 = (0);
while(true){
if((i__7297__auto___44267 < len__7296__auto___44266)){
args44263.push((arguments[i__7297__auto___44267]));

var G__44268 = (i__7297__auto___44267 + (1));
i__7297__auto___44267 = G__44268;
continue;
} else {
}
break;
}

var G__44265 = args44263.length;
switch (G__44265) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44263.length)].join('')));

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
var len__7296__auto___44280 = arguments.length;
var i__7297__auto___44281 = (0);
while(true){
if((i__7297__auto___44281 < len__7296__auto___44280)){
args__7303__auto__.push((arguments[i__7297__auto___44281]));

var G__44282 = (i__7297__auto___44281 + (1));
i__7297__auto___44281 = G__44282;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((3) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7304__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44274){
var map__44275 = p__44274;
var map__44275__$1 = ((((!((map__44275 == null)))?((((map__44275.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44275.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44275):map__44275);
var opts = map__44275__$1;
var statearr_44277_44283 = state;
(statearr_44277_44283[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__44275,map__44275__$1,opts){
return (function (val){
var statearr_44278_44284 = state;
(statearr_44278_44284[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__44275,map__44275__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_44279_44285 = state;
(statearr_44279_44285[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44270){
var G__44271 = cljs.core.first(seq44270);
var seq44270__$1 = cljs.core.next(seq44270);
var G__44272 = cljs.core.first(seq44270__$1);
var seq44270__$2 = cljs.core.next(seq44270__$1);
var G__44273 = cljs.core.first(seq44270__$2);
var seq44270__$3 = cljs.core.next(seq44270__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44271,G__44272,G__44273,seq44270__$3);
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
var cs = (function (){var G__44454 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44454) : cljs.core.atom.call(null,G__44454));
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
if(typeof cljs.core.async.t_cljs$core$async44455 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44455 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44456){
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
this.meta44456 = meta44456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44457,meta44456__$1){
var self__ = this;
var _44457__$1 = this;
return (new cljs.core.async.t_cljs$core$async44455(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44456__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44457){
var self__ = this;
var _44457__$1 = this;
return self__.meta44456;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__44458_44622 = self__.cs;
var G__44459_44623 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44458_44622,G__44459_44623) : cljs.core.reset_BANG_.call(null,G__44458_44622,G__44459_44623));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44455.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta44456], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44455.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44455";

cljs.core.async.t_cljs$core$async44455.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async44455");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async44455 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44455(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44456){
return (new cljs.core.async.t_cljs$core$async44455(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44456));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44455(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14658__auto___44624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___44624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___44624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44559){
var state_val_44560 = (state_44559[(1)]);
if((state_val_44560 === (7))){
var inst_44475 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44561_44625 = state_44559__$1;
(statearr_44561_44625[(2)] = inst_44475);

(statearr_44561_44625[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (20))){
var inst_44487 = (state_44559[(7)]);
var state_44559__$1 = state_44559;
var statearr_44562_44626 = state_44559__$1;
(statearr_44562_44626[(2)] = inst_44487);

(statearr_44562_44626[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (27))){
var state_44559__$1 = state_44559;
var statearr_44563_44627 = state_44559__$1;
(statearr_44563_44627[(2)] = null);

(statearr_44563_44627[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (1))){
var inst_44463 = (state_44559[(8)]);
var inst_44463__$1 = calc_state();
var inst_44465 = (inst_44463__$1 == null);
var inst_44466 = cljs.core.not(inst_44465);
var state_44559__$1 = (function (){var statearr_44564 = state_44559;
(statearr_44564[(8)] = inst_44463__$1);

return statearr_44564;
})();
if(inst_44466){
var statearr_44565_44628 = state_44559__$1;
(statearr_44565_44628[(1)] = (2));

} else {
var statearr_44566_44629 = state_44559__$1;
(statearr_44566_44629[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (24))){
var inst_44519 = (state_44559[(9)]);
var inst_44533 = (state_44559[(10)]);
var inst_44510 = (state_44559[(11)]);
var inst_44533__$1 = (inst_44510.cljs$core$IFn$_invoke$arity$1 ? inst_44510.cljs$core$IFn$_invoke$arity$1(inst_44519) : inst_44510.call(null,inst_44519));
var state_44559__$1 = (function (){var statearr_44567 = state_44559;
(statearr_44567[(10)] = inst_44533__$1);

return statearr_44567;
})();
if(cljs.core.truth_(inst_44533__$1)){
var statearr_44568_44630 = state_44559__$1;
(statearr_44568_44630[(1)] = (29));

} else {
var statearr_44569_44631 = state_44559__$1;
(statearr_44569_44631[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (4))){
var inst_44478 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44478)){
var statearr_44570_44632 = state_44559__$1;
(statearr_44570_44632[(1)] = (8));

} else {
var statearr_44571_44633 = state_44559__$1;
(statearr_44571_44633[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (15))){
var inst_44504 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44504)){
var statearr_44572_44634 = state_44559__$1;
(statearr_44572_44634[(1)] = (19));

} else {
var statearr_44573_44635 = state_44559__$1;
(statearr_44573_44635[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (21))){
var inst_44509 = (state_44559[(12)]);
var inst_44509__$1 = (state_44559[(2)]);
var inst_44510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44509__$1,cljs.core.cst$kw$solos);
var inst_44511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44509__$1,cljs.core.cst$kw$mutes);
var inst_44512 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44509__$1,cljs.core.cst$kw$reads);
var state_44559__$1 = (function (){var statearr_44574 = state_44559;
(statearr_44574[(12)] = inst_44509__$1);

(statearr_44574[(13)] = inst_44511);

(statearr_44574[(11)] = inst_44510);

return statearr_44574;
})();
return cljs.core.async.ioc_alts_BANG_(state_44559__$1,(22),inst_44512);
} else {
if((state_val_44560 === (31))){
var inst_44541 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44541)){
var statearr_44575_44636 = state_44559__$1;
(statearr_44575_44636[(1)] = (32));

} else {
var statearr_44576_44637 = state_44559__$1;
(statearr_44576_44637[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (32))){
var inst_44518 = (state_44559[(14)]);
var state_44559__$1 = state_44559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44559__$1,(35),out,inst_44518);
} else {
if((state_val_44560 === (33))){
var inst_44509 = (state_44559[(12)]);
var inst_44487 = inst_44509;
var state_44559__$1 = (function (){var statearr_44577 = state_44559;
(statearr_44577[(7)] = inst_44487);

return statearr_44577;
})();
var statearr_44578_44638 = state_44559__$1;
(statearr_44578_44638[(2)] = null);

(statearr_44578_44638[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (13))){
var inst_44487 = (state_44559[(7)]);
var inst_44494 = inst_44487.cljs$lang$protocol_mask$partition0$;
var inst_44495 = (inst_44494 & (64));
var inst_44496 = inst_44487.cljs$core$ISeq$;
var inst_44497 = (inst_44495) || (inst_44496);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44497)){
var statearr_44579_44639 = state_44559__$1;
(statearr_44579_44639[(1)] = (16));

} else {
var statearr_44580_44640 = state_44559__$1;
(statearr_44580_44640[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (22))){
var inst_44519 = (state_44559[(9)]);
var inst_44518 = (state_44559[(14)]);
var inst_44517 = (state_44559[(2)]);
var inst_44518__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44517,(0),null);
var inst_44519__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44517,(1),null);
var inst_44520 = (inst_44518__$1 == null);
var inst_44521 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44519__$1,change);
var inst_44522 = (inst_44520) || (inst_44521);
var state_44559__$1 = (function (){var statearr_44581 = state_44559;
(statearr_44581[(9)] = inst_44519__$1);

(statearr_44581[(14)] = inst_44518__$1);

return statearr_44581;
})();
if(cljs.core.truth_(inst_44522)){
var statearr_44582_44641 = state_44559__$1;
(statearr_44582_44641[(1)] = (23));

} else {
var statearr_44583_44642 = state_44559__$1;
(statearr_44583_44642[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (36))){
var inst_44509 = (state_44559[(12)]);
var inst_44487 = inst_44509;
var state_44559__$1 = (function (){var statearr_44584 = state_44559;
(statearr_44584[(7)] = inst_44487);

return statearr_44584;
})();
var statearr_44585_44643 = state_44559__$1;
(statearr_44585_44643[(2)] = null);

(statearr_44585_44643[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (29))){
var inst_44533 = (state_44559[(10)]);
var state_44559__$1 = state_44559;
var statearr_44586_44644 = state_44559__$1;
(statearr_44586_44644[(2)] = inst_44533);

(statearr_44586_44644[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (6))){
var state_44559__$1 = state_44559;
var statearr_44587_44645 = state_44559__$1;
(statearr_44587_44645[(2)] = false);

(statearr_44587_44645[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (28))){
var inst_44529 = (state_44559[(2)]);
var inst_44530 = calc_state();
var inst_44487 = inst_44530;
var state_44559__$1 = (function (){var statearr_44588 = state_44559;
(statearr_44588[(7)] = inst_44487);

(statearr_44588[(15)] = inst_44529);

return statearr_44588;
})();
var statearr_44589_44646 = state_44559__$1;
(statearr_44589_44646[(2)] = null);

(statearr_44589_44646[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (25))){
var inst_44555 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44590_44647 = state_44559__$1;
(statearr_44590_44647[(2)] = inst_44555);

(statearr_44590_44647[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (34))){
var inst_44553 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44591_44648 = state_44559__$1;
(statearr_44591_44648[(2)] = inst_44553);

(statearr_44591_44648[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (17))){
var state_44559__$1 = state_44559;
var statearr_44592_44649 = state_44559__$1;
(statearr_44592_44649[(2)] = false);

(statearr_44592_44649[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (3))){
var state_44559__$1 = state_44559;
var statearr_44593_44650 = state_44559__$1;
(statearr_44593_44650[(2)] = false);

(statearr_44593_44650[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (12))){
var inst_44557 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44559__$1,inst_44557);
} else {
if((state_val_44560 === (2))){
var inst_44463 = (state_44559[(8)]);
var inst_44468 = inst_44463.cljs$lang$protocol_mask$partition0$;
var inst_44469 = (inst_44468 & (64));
var inst_44470 = inst_44463.cljs$core$ISeq$;
var inst_44471 = (inst_44469) || (inst_44470);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44471)){
var statearr_44594_44651 = state_44559__$1;
(statearr_44594_44651[(1)] = (5));

} else {
var statearr_44595_44652 = state_44559__$1;
(statearr_44595_44652[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (23))){
var inst_44518 = (state_44559[(14)]);
var inst_44524 = (inst_44518 == null);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44524)){
var statearr_44596_44653 = state_44559__$1;
(statearr_44596_44653[(1)] = (26));

} else {
var statearr_44597_44654 = state_44559__$1;
(statearr_44597_44654[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (35))){
var inst_44544 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
if(cljs.core.truth_(inst_44544)){
var statearr_44598_44655 = state_44559__$1;
(statearr_44598_44655[(1)] = (36));

} else {
var statearr_44599_44656 = state_44559__$1;
(statearr_44599_44656[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (19))){
var inst_44487 = (state_44559[(7)]);
var inst_44506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44487);
var state_44559__$1 = state_44559;
var statearr_44600_44657 = state_44559__$1;
(statearr_44600_44657[(2)] = inst_44506);

(statearr_44600_44657[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (11))){
var inst_44487 = (state_44559[(7)]);
var inst_44491 = (inst_44487 == null);
var inst_44492 = cljs.core.not(inst_44491);
var state_44559__$1 = state_44559;
if(inst_44492){
var statearr_44601_44658 = state_44559__$1;
(statearr_44601_44658[(1)] = (13));

} else {
var statearr_44602_44659 = state_44559__$1;
(statearr_44602_44659[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (9))){
var inst_44463 = (state_44559[(8)]);
var state_44559__$1 = state_44559;
var statearr_44603_44660 = state_44559__$1;
(statearr_44603_44660[(2)] = inst_44463);

(statearr_44603_44660[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (5))){
var state_44559__$1 = state_44559;
var statearr_44604_44661 = state_44559__$1;
(statearr_44604_44661[(2)] = true);

(statearr_44604_44661[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (14))){
var state_44559__$1 = state_44559;
var statearr_44605_44662 = state_44559__$1;
(statearr_44605_44662[(2)] = false);

(statearr_44605_44662[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (26))){
var inst_44519 = (state_44559[(9)]);
var inst_44526 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_44519);
var state_44559__$1 = state_44559;
var statearr_44606_44663 = state_44559__$1;
(statearr_44606_44663[(2)] = inst_44526);

(statearr_44606_44663[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (16))){
var state_44559__$1 = state_44559;
var statearr_44607_44664 = state_44559__$1;
(statearr_44607_44664[(2)] = true);

(statearr_44607_44664[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (38))){
var inst_44549 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44608_44665 = state_44559__$1;
(statearr_44608_44665[(2)] = inst_44549);

(statearr_44608_44665[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (30))){
var inst_44519 = (state_44559[(9)]);
var inst_44511 = (state_44559[(13)]);
var inst_44510 = (state_44559[(11)]);
var inst_44536 = cljs.core.empty_QMARK_(inst_44510);
var inst_44537 = (inst_44511.cljs$core$IFn$_invoke$arity$1 ? inst_44511.cljs$core$IFn$_invoke$arity$1(inst_44519) : inst_44511.call(null,inst_44519));
var inst_44538 = cljs.core.not(inst_44537);
var inst_44539 = (inst_44536) && (inst_44538);
var state_44559__$1 = state_44559;
var statearr_44609_44666 = state_44559__$1;
(statearr_44609_44666[(2)] = inst_44539);

(statearr_44609_44666[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (10))){
var inst_44463 = (state_44559[(8)]);
var inst_44483 = (state_44559[(2)]);
var inst_44484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44483,cljs.core.cst$kw$solos);
var inst_44485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44483,cljs.core.cst$kw$mutes);
var inst_44486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44483,cljs.core.cst$kw$reads);
var inst_44487 = inst_44463;
var state_44559__$1 = (function (){var statearr_44610 = state_44559;
(statearr_44610[(16)] = inst_44486);

(statearr_44610[(7)] = inst_44487);

(statearr_44610[(17)] = inst_44484);

(statearr_44610[(18)] = inst_44485);

return statearr_44610;
})();
var statearr_44611_44667 = state_44559__$1;
(statearr_44611_44667[(2)] = null);

(statearr_44611_44667[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (18))){
var inst_44501 = (state_44559[(2)]);
var state_44559__$1 = state_44559;
var statearr_44612_44668 = state_44559__$1;
(statearr_44612_44668[(2)] = inst_44501);

(statearr_44612_44668[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (37))){
var state_44559__$1 = state_44559;
var statearr_44613_44669 = state_44559__$1;
(statearr_44613_44669[(2)] = null);

(statearr_44613_44669[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44560 === (8))){
var inst_44463 = (state_44559[(8)]);
var inst_44480 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_44463);
var state_44559__$1 = state_44559;
var statearr_44614_44670 = state_44559__$1;
(statearr_44614_44670[(2)] = inst_44480);

(statearr_44614_44670[(1)] = (10));


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
});})(c__14658__auto___44624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13584__auto__,c__14658__auto___44624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13585__auto__ = null;
var cljs$core$async$mix_$_state_machine__13585__auto____0 = (function (){
var statearr_44618 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44618[(0)] = cljs$core$async$mix_$_state_machine__13585__auto__);

(statearr_44618[(1)] = (1));

return statearr_44618;
});
var cljs$core$async$mix_$_state_machine__13585__auto____1 = (function (state_44559){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_44559);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e44619){if((e44619 instanceof Object)){
var ex__13588__auto__ = e44619;
var statearr_44620_44671 = state_44559;
(statearr_44620_44671[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44559);

return cljs.core.cst$kw$recur;
} else {
throw e44619;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__44672 = state_44559;
state_44559 = G__44672;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13585__auto__ = function(state_44559){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13585__auto____1.call(this,state_44559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13585__auto____0;
cljs$core$async$mix_$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13585__auto____1;
return cljs$core$async$mix_$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___44624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14660__auto__ = (function (){var statearr_44621 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_44621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___44624);

return statearr_44621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___44624,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args44673 = [];
var len__7296__auto___44676 = arguments.length;
var i__7297__auto___44677 = (0);
while(true){
if((i__7297__auto___44677 < len__7296__auto___44676)){
args44673.push((arguments[i__7297__auto___44677]));

var G__44678 = (i__7297__auto___44677 + (1));
i__7297__auto___44677 = G__44678;
continue;
} else {
}
break;
}

var G__44675 = args44673.length;
switch (G__44675) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44673.length)].join('')));

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
var args44681 = [];
var len__7296__auto___44809 = arguments.length;
var i__7297__auto___44810 = (0);
while(true){
if((i__7297__auto___44810 < len__7296__auto___44809)){
args44681.push((arguments[i__7297__auto___44810]));

var G__44811 = (i__7297__auto___44810 + (1));
i__7297__auto___44810 = G__44811;
continue;
} else {
}
break;
}

var G__44683 = args44681.length;
switch (G__44683) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44681.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__44684 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__44684) : cljs.core.atom.call(null,G__44684));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6221__auto__,mults){
return (function (p1__44680_SHARP_){
if(cljs.core.truth_((p1__44680_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__44680_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__44680_SHARP_.call(null,topic)))){
return p1__44680_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__44680_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6221__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async44685 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44685 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44686){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44686 = meta44686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44687,meta44686__$1){
var self__ = this;
var _44687__$1 = this;
return (new cljs.core.async.t_cljs$core$async44685(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44686__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44687){
var self__ = this;
var _44687__$1 = this;
return self__.meta44686;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__44688 = self__.mults;
var G__44689 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__44688,G__44689) : cljs.core.reset_BANG_.call(null,G__44688,G__44689));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44685.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44685.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta44686], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44685";

cljs.core.async.t_cljs$core$async44685.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async44685");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async44685 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44685(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44686){
return (new cljs.core.async.t_cljs$core$async44685(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44686));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44685(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14658__auto___44813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___44813,mults,ensure_mult,p){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___44813,mults,ensure_mult,p){
return (function (state_44761){
var state_val_44762 = (state_44761[(1)]);
if((state_val_44762 === (7))){
var inst_44757 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
var statearr_44763_44814 = state_44761__$1;
(statearr_44763_44814[(2)] = inst_44757);

(statearr_44763_44814[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (20))){
var state_44761__$1 = state_44761;
var statearr_44764_44815 = state_44761__$1;
(statearr_44764_44815[(2)] = null);

(statearr_44764_44815[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (1))){
var state_44761__$1 = state_44761;
var statearr_44765_44816 = state_44761__$1;
(statearr_44765_44816[(2)] = null);

(statearr_44765_44816[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (24))){
var inst_44740 = (state_44761[(7)]);
var inst_44749 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_44740);
var state_44761__$1 = state_44761;
var statearr_44766_44817 = state_44761__$1;
(statearr_44766_44817[(2)] = inst_44749);

(statearr_44766_44817[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (4))){
var inst_44692 = (state_44761[(8)]);
var inst_44692__$1 = (state_44761[(2)]);
var inst_44693 = (inst_44692__$1 == null);
var state_44761__$1 = (function (){var statearr_44767 = state_44761;
(statearr_44767[(8)] = inst_44692__$1);

return statearr_44767;
})();
if(cljs.core.truth_(inst_44693)){
var statearr_44768_44818 = state_44761__$1;
(statearr_44768_44818[(1)] = (5));

} else {
var statearr_44769_44819 = state_44761__$1;
(statearr_44769_44819[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (15))){
var inst_44734 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
var statearr_44770_44820 = state_44761__$1;
(statearr_44770_44820[(2)] = inst_44734);

(statearr_44770_44820[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (21))){
var inst_44754 = (state_44761[(2)]);
var state_44761__$1 = (function (){var statearr_44771 = state_44761;
(statearr_44771[(9)] = inst_44754);

return statearr_44771;
})();
var statearr_44772_44821 = state_44761__$1;
(statearr_44772_44821[(2)] = null);

(statearr_44772_44821[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (13))){
var inst_44716 = (state_44761[(10)]);
var inst_44718 = cljs.core.chunked_seq_QMARK_(inst_44716);
var state_44761__$1 = state_44761;
if(inst_44718){
var statearr_44773_44822 = state_44761__$1;
(statearr_44773_44822[(1)] = (16));

} else {
var statearr_44774_44823 = state_44761__$1;
(statearr_44774_44823[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (22))){
var inst_44746 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
if(cljs.core.truth_(inst_44746)){
var statearr_44775_44824 = state_44761__$1;
(statearr_44775_44824[(1)] = (23));

} else {
var statearr_44776_44825 = state_44761__$1;
(statearr_44776_44825[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (6))){
var inst_44740 = (state_44761[(7)]);
var inst_44692 = (state_44761[(8)]);
var inst_44742 = (state_44761[(11)]);
var inst_44740__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_44692) : topic_fn.call(null,inst_44692));
var inst_44741 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_44742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_44741,inst_44740__$1);
var state_44761__$1 = (function (){var statearr_44777 = state_44761;
(statearr_44777[(7)] = inst_44740__$1);

(statearr_44777[(11)] = inst_44742__$1);

return statearr_44777;
})();
if(cljs.core.truth_(inst_44742__$1)){
var statearr_44778_44826 = state_44761__$1;
(statearr_44778_44826[(1)] = (19));

} else {
var statearr_44779_44827 = state_44761__$1;
(statearr_44779_44827[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (25))){
var inst_44751 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
var statearr_44780_44828 = state_44761__$1;
(statearr_44780_44828[(2)] = inst_44751);

(statearr_44780_44828[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (17))){
var inst_44716 = (state_44761[(10)]);
var inst_44725 = cljs.core.first(inst_44716);
var inst_44726 = cljs.core.async.muxch_STAR_(inst_44725);
var inst_44727 = cljs.core.async.close_BANG_(inst_44726);
var inst_44728 = cljs.core.next(inst_44716);
var inst_44702 = inst_44728;
var inst_44703 = null;
var inst_44704 = (0);
var inst_44705 = (0);
var state_44761__$1 = (function (){var statearr_44781 = state_44761;
(statearr_44781[(12)] = inst_44704);

(statearr_44781[(13)] = inst_44702);

(statearr_44781[(14)] = inst_44727);

(statearr_44781[(15)] = inst_44703);

(statearr_44781[(16)] = inst_44705);

return statearr_44781;
})();
var statearr_44782_44829 = state_44761__$1;
(statearr_44782_44829[(2)] = null);

(statearr_44782_44829[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (3))){
var inst_44759 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44761__$1,inst_44759);
} else {
if((state_val_44762 === (12))){
var inst_44736 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
var statearr_44783_44830 = state_44761__$1;
(statearr_44783_44830[(2)] = inst_44736);

(statearr_44783_44830[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (2))){
var state_44761__$1 = state_44761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44761__$1,(4),ch);
} else {
if((state_val_44762 === (23))){
var state_44761__$1 = state_44761;
var statearr_44784_44831 = state_44761__$1;
(statearr_44784_44831[(2)] = null);

(statearr_44784_44831[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (19))){
var inst_44692 = (state_44761[(8)]);
var inst_44742 = (state_44761[(11)]);
var inst_44744 = cljs.core.async.muxch_STAR_(inst_44742);
var state_44761__$1 = state_44761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44761__$1,(22),inst_44744,inst_44692);
} else {
if((state_val_44762 === (11))){
var inst_44702 = (state_44761[(13)]);
var inst_44716 = (state_44761[(10)]);
var inst_44716__$1 = cljs.core.seq(inst_44702);
var state_44761__$1 = (function (){var statearr_44785 = state_44761;
(statearr_44785[(10)] = inst_44716__$1);

return statearr_44785;
})();
if(inst_44716__$1){
var statearr_44786_44832 = state_44761__$1;
(statearr_44786_44832[(1)] = (13));

} else {
var statearr_44787_44833 = state_44761__$1;
(statearr_44787_44833[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (9))){
var inst_44738 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
var statearr_44788_44834 = state_44761__$1;
(statearr_44788_44834[(2)] = inst_44738);

(statearr_44788_44834[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (5))){
var inst_44699 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_44700 = cljs.core.vals(inst_44699);
var inst_44701 = cljs.core.seq(inst_44700);
var inst_44702 = inst_44701;
var inst_44703 = null;
var inst_44704 = (0);
var inst_44705 = (0);
var state_44761__$1 = (function (){var statearr_44789 = state_44761;
(statearr_44789[(12)] = inst_44704);

(statearr_44789[(13)] = inst_44702);

(statearr_44789[(15)] = inst_44703);

(statearr_44789[(16)] = inst_44705);

return statearr_44789;
})();
var statearr_44790_44835 = state_44761__$1;
(statearr_44790_44835[(2)] = null);

(statearr_44790_44835[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (14))){
var state_44761__$1 = state_44761;
var statearr_44794_44836 = state_44761__$1;
(statearr_44794_44836[(2)] = null);

(statearr_44794_44836[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (16))){
var inst_44716 = (state_44761[(10)]);
var inst_44720 = cljs.core.chunk_first(inst_44716);
var inst_44721 = cljs.core.chunk_rest(inst_44716);
var inst_44722 = cljs.core.count(inst_44720);
var inst_44702 = inst_44721;
var inst_44703 = inst_44720;
var inst_44704 = inst_44722;
var inst_44705 = (0);
var state_44761__$1 = (function (){var statearr_44795 = state_44761;
(statearr_44795[(12)] = inst_44704);

(statearr_44795[(13)] = inst_44702);

(statearr_44795[(15)] = inst_44703);

(statearr_44795[(16)] = inst_44705);

return statearr_44795;
})();
var statearr_44796_44837 = state_44761__$1;
(statearr_44796_44837[(2)] = null);

(statearr_44796_44837[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (10))){
var inst_44704 = (state_44761[(12)]);
var inst_44702 = (state_44761[(13)]);
var inst_44703 = (state_44761[(15)]);
var inst_44705 = (state_44761[(16)]);
var inst_44710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_44703,inst_44705);
var inst_44711 = cljs.core.async.muxch_STAR_(inst_44710);
var inst_44712 = cljs.core.async.close_BANG_(inst_44711);
var inst_44713 = (inst_44705 + (1));
var tmp44791 = inst_44704;
var tmp44792 = inst_44702;
var tmp44793 = inst_44703;
var inst_44702__$1 = tmp44792;
var inst_44703__$1 = tmp44793;
var inst_44704__$1 = tmp44791;
var inst_44705__$1 = inst_44713;
var state_44761__$1 = (function (){var statearr_44797 = state_44761;
(statearr_44797[(17)] = inst_44712);

(statearr_44797[(12)] = inst_44704__$1);

(statearr_44797[(13)] = inst_44702__$1);

(statearr_44797[(15)] = inst_44703__$1);

(statearr_44797[(16)] = inst_44705__$1);

return statearr_44797;
})();
var statearr_44798_44838 = state_44761__$1;
(statearr_44798_44838[(2)] = null);

(statearr_44798_44838[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (18))){
var inst_44731 = (state_44761[(2)]);
var state_44761__$1 = state_44761;
var statearr_44799_44839 = state_44761__$1;
(statearr_44799_44839[(2)] = inst_44731);

(statearr_44799_44839[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44762 === (8))){
var inst_44704 = (state_44761[(12)]);
var inst_44705 = (state_44761[(16)]);
var inst_44707 = (inst_44705 < inst_44704);
var inst_44708 = inst_44707;
var state_44761__$1 = state_44761;
if(cljs.core.truth_(inst_44708)){
var statearr_44800_44840 = state_44761__$1;
(statearr_44800_44840[(1)] = (10));

} else {
var statearr_44801_44841 = state_44761__$1;
(statearr_44801_44841[(1)] = (11));

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
});})(c__14658__auto___44813,mults,ensure_mult,p))
;
return ((function (switch__13584__auto__,c__14658__auto___44813,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_44805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44805[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_44805[(1)] = (1));

return statearr_44805;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_44761){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_44761);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e44806){if((e44806 instanceof Object)){
var ex__13588__auto__ = e44806;
var statearr_44807_44842 = state_44761;
(statearr_44807_44842[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44761);

return cljs.core.cst$kw$recur;
} else {
throw e44806;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__44843 = state_44761;
state_44761 = G__44843;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_44761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_44761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___44813,mults,ensure_mult,p))
})();
var state__14660__auto__ = (function (){var statearr_44808 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_44808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___44813);

return statearr_44808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___44813,mults,ensure_mult,p))
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
var args44844 = [];
var len__7296__auto___44847 = arguments.length;
var i__7297__auto___44848 = (0);
while(true){
if((i__7297__auto___44848 < len__7296__auto___44847)){
args44844.push((arguments[i__7297__auto___44848]));

var G__44849 = (i__7297__auto___44848 + (1));
i__7297__auto___44848 = G__44849;
continue;
} else {
}
break;
}

var G__44846 = args44844.length;
switch (G__44846) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44844.length)].join('')));

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
var args44851 = [];
var len__7296__auto___44854 = arguments.length;
var i__7297__auto___44855 = (0);
while(true){
if((i__7297__auto___44855 < len__7296__auto___44854)){
args44851.push((arguments[i__7297__auto___44855]));

var G__44856 = (i__7297__auto___44855 + (1));
i__7297__auto___44855 = G__44856;
continue;
} else {
}
break;
}

var G__44853 = args44851.length;
switch (G__44853) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44851.length)].join('')));

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
var args44858 = [];
var len__7296__auto___44929 = arguments.length;
var i__7297__auto___44930 = (0);
while(true){
if((i__7297__auto___44930 < len__7296__auto___44929)){
args44858.push((arguments[i__7297__auto___44930]));

var G__44931 = (i__7297__auto___44930 + (1));
i__7297__auto___44930 = G__44931;
continue;
} else {
}
break;
}

var G__44860 = args44858.length;
switch (G__44860) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44858.length)].join('')));

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
var c__14658__auto___44933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___44933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___44933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44899){
var state_val_44900 = (state_44899[(1)]);
if((state_val_44900 === (7))){
var state_44899__$1 = state_44899;
var statearr_44901_44934 = state_44899__$1;
(statearr_44901_44934[(2)] = null);

(statearr_44901_44934[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (1))){
var state_44899__$1 = state_44899;
var statearr_44902_44935 = state_44899__$1;
(statearr_44902_44935[(2)] = null);

(statearr_44902_44935[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (4))){
var inst_44863 = (state_44899[(7)]);
var inst_44865 = (inst_44863 < cnt);
var state_44899__$1 = state_44899;
if(cljs.core.truth_(inst_44865)){
var statearr_44903_44936 = state_44899__$1;
(statearr_44903_44936[(1)] = (6));

} else {
var statearr_44904_44937 = state_44899__$1;
(statearr_44904_44937[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (15))){
var inst_44895 = (state_44899[(2)]);
var state_44899__$1 = state_44899;
var statearr_44905_44938 = state_44899__$1;
(statearr_44905_44938[(2)] = inst_44895);

(statearr_44905_44938[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (13))){
var inst_44888 = cljs.core.async.close_BANG_(out);
var state_44899__$1 = state_44899;
var statearr_44906_44939 = state_44899__$1;
(statearr_44906_44939[(2)] = inst_44888);

(statearr_44906_44939[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (6))){
var state_44899__$1 = state_44899;
var statearr_44907_44940 = state_44899__$1;
(statearr_44907_44940[(2)] = null);

(statearr_44907_44940[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (3))){
var inst_44897 = (state_44899[(2)]);
var state_44899__$1 = state_44899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44899__$1,inst_44897);
} else {
if((state_val_44900 === (12))){
var inst_44885 = (state_44899[(8)]);
var inst_44885__$1 = (state_44899[(2)]);
var inst_44886 = cljs.core.some(cljs.core.nil_QMARK_,inst_44885__$1);
var state_44899__$1 = (function (){var statearr_44908 = state_44899;
(statearr_44908[(8)] = inst_44885__$1);

return statearr_44908;
})();
if(cljs.core.truth_(inst_44886)){
var statearr_44909_44941 = state_44899__$1;
(statearr_44909_44941[(1)] = (13));

} else {
var statearr_44910_44942 = state_44899__$1;
(statearr_44910_44942[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (2))){
var inst_44862 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_44863 = (0);
var state_44899__$1 = (function (){var statearr_44911 = state_44899;
(statearr_44911[(7)] = inst_44863);

(statearr_44911[(9)] = inst_44862);

return statearr_44911;
})();
var statearr_44912_44943 = state_44899__$1;
(statearr_44912_44943[(2)] = null);

(statearr_44912_44943[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (11))){
var inst_44863 = (state_44899[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_44899,(10),Object,null,(9));
var inst_44872 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44863) : chs__$1.call(null,inst_44863));
var inst_44873 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44863) : done.call(null,inst_44863));
var inst_44874 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44872,inst_44873);
var state_44899__$1 = state_44899;
var statearr_44913_44944 = state_44899__$1;
(statearr_44913_44944[(2)] = inst_44874);


cljs.core.async.impl.ioc_helpers.process_exception(state_44899__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (9))){
var inst_44863 = (state_44899[(7)]);
var inst_44876 = (state_44899[(2)]);
var inst_44877 = (inst_44863 + (1));
var inst_44863__$1 = inst_44877;
var state_44899__$1 = (function (){var statearr_44914 = state_44899;
(statearr_44914[(10)] = inst_44876);

(statearr_44914[(7)] = inst_44863__$1);

return statearr_44914;
})();
var statearr_44915_44945 = state_44899__$1;
(statearr_44915_44945[(2)] = null);

(statearr_44915_44945[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (5))){
var inst_44883 = (state_44899[(2)]);
var state_44899__$1 = (function (){var statearr_44916 = state_44899;
(statearr_44916[(11)] = inst_44883);

return statearr_44916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44899__$1,(12),dchan);
} else {
if((state_val_44900 === (14))){
var inst_44885 = (state_44899[(8)]);
var inst_44890 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44885);
var state_44899__$1 = state_44899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44899__$1,(16),out,inst_44890);
} else {
if((state_val_44900 === (16))){
var inst_44892 = (state_44899[(2)]);
var state_44899__$1 = (function (){var statearr_44917 = state_44899;
(statearr_44917[(12)] = inst_44892);

return statearr_44917;
})();
var statearr_44918_44946 = state_44899__$1;
(statearr_44918_44946[(2)] = null);

(statearr_44918_44946[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (10))){
var inst_44867 = (state_44899[(2)]);
var inst_44868 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44899__$1 = (function (){var statearr_44919 = state_44899;
(statearr_44919[(13)] = inst_44867);

return statearr_44919;
})();
var statearr_44920_44947 = state_44899__$1;
(statearr_44920_44947[(2)] = inst_44868);


cljs.core.async.impl.ioc_helpers.process_exception(state_44899__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_44900 === (8))){
var inst_44881 = (state_44899[(2)]);
var state_44899__$1 = state_44899;
var statearr_44921_44948 = state_44899__$1;
(statearr_44921_44948[(2)] = inst_44881);

(statearr_44921_44948[(1)] = (5));


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
});})(c__14658__auto___44933,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13584__auto__,c__14658__auto___44933,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_44925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44925[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_44925[(1)] = (1));

return statearr_44925;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_44899){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_44899);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e44926){if((e44926 instanceof Object)){
var ex__13588__auto__ = e44926;
var statearr_44927_44949 = state_44899;
(statearr_44927_44949[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44899);

return cljs.core.cst$kw$recur;
} else {
throw e44926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__44950 = state_44899;
state_44899 = G__44950;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_44899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_44899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___44933,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14660__auto__ = (function (){var statearr_44928 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_44928[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___44933);

return statearr_44928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___44933,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args44952 = [];
var len__7296__auto___45010 = arguments.length;
var i__7297__auto___45011 = (0);
while(true){
if((i__7297__auto___45011 < len__7296__auto___45010)){
args44952.push((arguments[i__7297__auto___45011]));

var G__45012 = (i__7297__auto___45011 + (1));
i__7297__auto___45011 = G__45012;
continue;
} else {
}
break;
}

var G__44954 = args44952.length;
switch (G__44954) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44952.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___45014 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___45014,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___45014,out){
return (function (state_44986){
var state_val_44987 = (state_44986[(1)]);
if((state_val_44987 === (7))){
var inst_44966 = (state_44986[(7)]);
var inst_44965 = (state_44986[(8)]);
var inst_44965__$1 = (state_44986[(2)]);
var inst_44966__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44965__$1,(0),null);
var inst_44967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44965__$1,(1),null);
var inst_44968 = (inst_44966__$1 == null);
var state_44986__$1 = (function (){var statearr_44988 = state_44986;
(statearr_44988[(7)] = inst_44966__$1);

(statearr_44988[(8)] = inst_44965__$1);

(statearr_44988[(9)] = inst_44967);

return statearr_44988;
})();
if(cljs.core.truth_(inst_44968)){
var statearr_44989_45015 = state_44986__$1;
(statearr_44989_45015[(1)] = (8));

} else {
var statearr_44990_45016 = state_44986__$1;
(statearr_44990_45016[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44987 === (1))){
var inst_44955 = cljs.core.vec(chs);
var inst_44956 = inst_44955;
var state_44986__$1 = (function (){var statearr_44991 = state_44986;
(statearr_44991[(10)] = inst_44956);

return statearr_44991;
})();
var statearr_44992_45017 = state_44986__$1;
(statearr_44992_45017[(2)] = null);

(statearr_44992_45017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44987 === (4))){
var inst_44956 = (state_44986[(10)]);
var state_44986__$1 = state_44986;
return cljs.core.async.ioc_alts_BANG_(state_44986__$1,(7),inst_44956);
} else {
if((state_val_44987 === (6))){
var inst_44982 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
var statearr_44993_45018 = state_44986__$1;
(statearr_44993_45018[(2)] = inst_44982);

(statearr_44993_45018[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44987 === (3))){
var inst_44984 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44986__$1,inst_44984);
} else {
if((state_val_44987 === (2))){
var inst_44956 = (state_44986[(10)]);
var inst_44958 = cljs.core.count(inst_44956);
var inst_44959 = (inst_44958 > (0));
var state_44986__$1 = state_44986;
if(cljs.core.truth_(inst_44959)){
var statearr_44995_45019 = state_44986__$1;
(statearr_44995_45019[(1)] = (4));

} else {
var statearr_44996_45020 = state_44986__$1;
(statearr_44996_45020[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_44987 === (11))){
var inst_44956 = (state_44986[(10)]);
var inst_44975 = (state_44986[(2)]);
var tmp44994 = inst_44956;
var inst_44956__$1 = tmp44994;
var state_44986__$1 = (function (){var statearr_44997 = state_44986;
(statearr_44997[(10)] = inst_44956__$1);

(statearr_44997[(11)] = inst_44975);

return statearr_44997;
})();
var statearr_44998_45021 = state_44986__$1;
(statearr_44998_45021[(2)] = null);

(statearr_44998_45021[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44987 === (9))){
var inst_44966 = (state_44986[(7)]);
var state_44986__$1 = state_44986;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44986__$1,(11),out,inst_44966);
} else {
if((state_val_44987 === (5))){
var inst_44980 = cljs.core.async.close_BANG_(out);
var state_44986__$1 = state_44986;
var statearr_44999_45022 = state_44986__$1;
(statearr_44999_45022[(2)] = inst_44980);

(statearr_44999_45022[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44987 === (10))){
var inst_44978 = (state_44986[(2)]);
var state_44986__$1 = state_44986;
var statearr_45000_45023 = state_44986__$1;
(statearr_45000_45023[(2)] = inst_44978);

(statearr_45000_45023[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_44987 === (8))){
var inst_44956 = (state_44986[(10)]);
var inst_44966 = (state_44986[(7)]);
var inst_44965 = (state_44986[(8)]);
var inst_44967 = (state_44986[(9)]);
var inst_44970 = (function (){var cs = inst_44956;
var vec__44961 = inst_44965;
var v = inst_44966;
var c = inst_44967;
return ((function (cs,vec__44961,v,c,inst_44956,inst_44966,inst_44965,inst_44967,state_val_44987,c__14658__auto___45014,out){
return (function (p1__44951_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44951_SHARP_);
});
;})(cs,vec__44961,v,c,inst_44956,inst_44966,inst_44965,inst_44967,state_val_44987,c__14658__auto___45014,out))
})();
var inst_44971 = cljs.core.filterv(inst_44970,inst_44956);
var inst_44956__$1 = inst_44971;
var state_44986__$1 = (function (){var statearr_45001 = state_44986;
(statearr_45001[(10)] = inst_44956__$1);

return statearr_45001;
})();
var statearr_45002_45024 = state_44986__$1;
(statearr_45002_45024[(2)] = null);

(statearr_45002_45024[(1)] = (2));


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
});})(c__14658__auto___45014,out))
;
return ((function (switch__13584__auto__,c__14658__auto___45014,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_45006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45006[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_45006[(1)] = (1));

return statearr_45006;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_44986){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_44986);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e45007){if((e45007 instanceof Object)){
var ex__13588__auto__ = e45007;
var statearr_45008_45025 = state_44986;
(statearr_45008_45025[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44986);

return cljs.core.cst$kw$recur;
} else {
throw e45007;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__45026 = state_44986;
state_44986 = G__45026;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_44986){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_44986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___45014,out))
})();
var state__14660__auto__ = (function (){var statearr_45009 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_45009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___45014);

return statearr_45009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___45014,out))
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
var args45027 = [];
var len__7296__auto___45076 = arguments.length;
var i__7297__auto___45077 = (0);
while(true){
if((i__7297__auto___45077 < len__7296__auto___45076)){
args45027.push((arguments[i__7297__auto___45077]));

var G__45078 = (i__7297__auto___45077 + (1));
i__7297__auto___45077 = G__45078;
continue;
} else {
}
break;
}

var G__45029 = args45027.length;
switch (G__45029) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45027.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___45080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___45080,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___45080,out){
return (function (state_45053){
var state_val_45054 = (state_45053[(1)]);
if((state_val_45054 === (7))){
var inst_45035 = (state_45053[(7)]);
var inst_45035__$1 = (state_45053[(2)]);
var inst_45036 = (inst_45035__$1 == null);
var inst_45037 = cljs.core.not(inst_45036);
var state_45053__$1 = (function (){var statearr_45055 = state_45053;
(statearr_45055[(7)] = inst_45035__$1);

return statearr_45055;
})();
if(inst_45037){
var statearr_45056_45081 = state_45053__$1;
(statearr_45056_45081[(1)] = (8));

} else {
var statearr_45057_45082 = state_45053__$1;
(statearr_45057_45082[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (1))){
var inst_45030 = (0);
var state_45053__$1 = (function (){var statearr_45058 = state_45053;
(statearr_45058[(8)] = inst_45030);

return statearr_45058;
})();
var statearr_45059_45083 = state_45053__$1;
(statearr_45059_45083[(2)] = null);

(statearr_45059_45083[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (4))){
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45053__$1,(7),ch);
} else {
if((state_val_45054 === (6))){
var inst_45048 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
var statearr_45060_45084 = state_45053__$1;
(statearr_45060_45084[(2)] = inst_45048);

(statearr_45060_45084[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (3))){
var inst_45050 = (state_45053[(2)]);
var inst_45051 = cljs.core.async.close_BANG_(out);
var state_45053__$1 = (function (){var statearr_45061 = state_45053;
(statearr_45061[(9)] = inst_45050);

return statearr_45061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45053__$1,inst_45051);
} else {
if((state_val_45054 === (2))){
var inst_45030 = (state_45053[(8)]);
var inst_45032 = (inst_45030 < n);
var state_45053__$1 = state_45053;
if(cljs.core.truth_(inst_45032)){
var statearr_45062_45085 = state_45053__$1;
(statearr_45062_45085[(1)] = (4));

} else {
var statearr_45063_45086 = state_45053__$1;
(statearr_45063_45086[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (11))){
var inst_45030 = (state_45053[(8)]);
var inst_45040 = (state_45053[(2)]);
var inst_45041 = (inst_45030 + (1));
var inst_45030__$1 = inst_45041;
var state_45053__$1 = (function (){var statearr_45064 = state_45053;
(statearr_45064[(10)] = inst_45040);

(statearr_45064[(8)] = inst_45030__$1);

return statearr_45064;
})();
var statearr_45065_45087 = state_45053__$1;
(statearr_45065_45087[(2)] = null);

(statearr_45065_45087[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (9))){
var state_45053__$1 = state_45053;
var statearr_45066_45088 = state_45053__$1;
(statearr_45066_45088[(2)] = null);

(statearr_45066_45088[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (5))){
var state_45053__$1 = state_45053;
var statearr_45067_45089 = state_45053__$1;
(statearr_45067_45089[(2)] = null);

(statearr_45067_45089[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (10))){
var inst_45045 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
var statearr_45068_45090 = state_45053__$1;
(statearr_45068_45090[(2)] = inst_45045);

(statearr_45068_45090[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45054 === (8))){
var inst_45035 = (state_45053[(7)]);
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45053__$1,(11),out,inst_45035);
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
});})(c__14658__auto___45080,out))
;
return ((function (switch__13584__auto__,c__14658__auto___45080,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_45072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45072[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_45072[(1)] = (1));

return statearr_45072;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_45053){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_45053);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e45073){if((e45073 instanceof Object)){
var ex__13588__auto__ = e45073;
var statearr_45074_45091 = state_45053;
(statearr_45074_45091[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45053);

return cljs.core.cst$kw$recur;
} else {
throw e45073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__45092 = state_45053;
state_45053 = G__45092;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_45053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_45053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___45080,out))
})();
var state__14660__auto__ = (function (){var statearr_45075 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_45075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___45080);

return statearr_45075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___45080,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45102 = (function (map_LT_,f,ch,meta45103){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta45103 = meta45103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45104,meta45103__$1){
var self__ = this;
var _45104__$1 = this;
return (new cljs.core.async.t_cljs$core$async45102(self__.map_LT_,self__.f,self__.ch,meta45103__$1));
});

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45104){
var self__ = this;
var _45104__$1 = this;
return self__.meta45103;
});

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async45105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45105 = (function (map_LT_,f,ch,meta45103,_,fn1,meta45106){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta45103 = meta45103;
this._ = _;
this.fn1 = fn1;
this.meta45106 = meta45106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45107,meta45106__$1){
var self__ = this;
var _45107__$1 = this;
return (new cljs.core.async.t_cljs$core$async45105(self__.map_LT_,self__.f,self__.ch,self__.meta45103,self__._,self__.fn1,meta45106__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45107){
var self__ = this;
var _45107__$1 = this;
return self__.meta45106;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45105.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async45105.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45105.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45105.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45093_SHARP_){
var G__45108 = (((p1__45093_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__45093_SHARP_) : self__.f.call(null,p1__45093_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__45108) : f1.call(null,G__45108));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45105.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45103,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async45102], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta45106], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45105.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45105";

cljs.core.async.t_cljs$core$async45105.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async45105");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async45105 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45105(map_LT___$1,f__$1,ch__$1,meta45103__$1,___$2,fn1__$1,meta45106){
return (new cljs.core.async.t_cljs$core$async45105(map_LT___$1,f__$1,ch__$1,meta45103__$1,___$2,fn1__$1,meta45106));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45105(self__.map_LT_,self__.f,self__.ch,self__.meta45103,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6209__auto__ = ret;
if(cljs.core.truth_(and__6209__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6209__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__45109 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45109) : self__.f.call(null,G__45109));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async45102.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45103], null);
});

cljs.core.async.t_cljs$core$async45102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45102";

cljs.core.async.t_cljs$core$async45102.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async45102");
});

cljs.core.async.__GT_t_cljs$core$async45102 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45102(map_LT___$1,f__$1,ch__$1,meta45103){
return (new cljs.core.async.t_cljs$core$async45102(map_LT___$1,f__$1,ch__$1,meta45103));
});

}

return (new cljs.core.async.t_cljs$core$async45102(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async45113 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45113 = (function (map_GT_,f,ch,meta45114){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta45114 = meta45114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45115,meta45114__$1){
var self__ = this;
var _45115__$1 = this;
return (new cljs.core.async.t_cljs$core$async45113(self__.map_GT_,self__.f,self__.ch,meta45114__$1));
});

cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45115){
var self__ = this;
var _45115__$1 = this;
return self__.meta45114;
});

cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async45113.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async45113.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45114], null);
});

cljs.core.async.t_cljs$core$async45113.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45113.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45113";

cljs.core.async.t_cljs$core$async45113.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async45113");
});

cljs.core.async.__GT_t_cljs$core$async45113 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45113(map_GT___$1,f__$1,ch__$1,meta45114){
return (new cljs.core.async.t_cljs$core$async45113(map_GT___$1,f__$1,ch__$1,meta45114));
});

}

return (new cljs.core.async.t_cljs$core$async45113(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async45119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45119 = (function (filter_GT_,p,ch,meta45120){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta45120 = meta45120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45121,meta45120__$1){
var self__ = this;
var _45121__$1 = this;
return (new cljs.core.async.t_cljs$core$async45119(self__.filter_GT_,self__.p,self__.ch,meta45120__$1));
});

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45121){
var self__ = this;
var _45121__$1 = this;
return self__.meta45120;
});

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async45119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta45120], null);
});

cljs.core.async.t_cljs$core$async45119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45119";

cljs.core.async.t_cljs$core$async45119.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"cljs.core.async/t_cljs$core$async45119");
});

cljs.core.async.__GT_t_cljs$core$async45119 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45119(filter_GT___$1,p__$1,ch__$1,meta45120){
return (new cljs.core.async.t_cljs$core$async45119(filter_GT___$1,p__$1,ch__$1,meta45120));
});

}

return (new cljs.core.async.t_cljs$core$async45119(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args45122 = [];
var len__7296__auto___45166 = arguments.length;
var i__7297__auto___45167 = (0);
while(true){
if((i__7297__auto___45167 < len__7296__auto___45166)){
args45122.push((arguments[i__7297__auto___45167]));

var G__45168 = (i__7297__auto___45167 + (1));
i__7297__auto___45167 = G__45168;
continue;
} else {
}
break;
}

var G__45124 = args45122.length;
switch (G__45124) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45122.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___45170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___45170,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___45170,out){
return (function (state_45145){
var state_val_45146 = (state_45145[(1)]);
if((state_val_45146 === (7))){
var inst_45141 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45147_45171 = state_45145__$1;
(statearr_45147_45171[(2)] = inst_45141);

(statearr_45147_45171[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (1))){
var state_45145__$1 = state_45145;
var statearr_45148_45172 = state_45145__$1;
(statearr_45148_45172[(2)] = null);

(statearr_45148_45172[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (4))){
var inst_45127 = (state_45145[(7)]);
var inst_45127__$1 = (state_45145[(2)]);
var inst_45128 = (inst_45127__$1 == null);
var state_45145__$1 = (function (){var statearr_45149 = state_45145;
(statearr_45149[(7)] = inst_45127__$1);

return statearr_45149;
})();
if(cljs.core.truth_(inst_45128)){
var statearr_45150_45173 = state_45145__$1;
(statearr_45150_45173[(1)] = (5));

} else {
var statearr_45151_45174 = state_45145__$1;
(statearr_45151_45174[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (6))){
var inst_45127 = (state_45145[(7)]);
var inst_45132 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45127) : p.call(null,inst_45127));
var state_45145__$1 = state_45145;
if(cljs.core.truth_(inst_45132)){
var statearr_45152_45175 = state_45145__$1;
(statearr_45152_45175[(1)] = (8));

} else {
var statearr_45153_45176 = state_45145__$1;
(statearr_45153_45176[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (3))){
var inst_45143 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45145__$1,inst_45143);
} else {
if((state_val_45146 === (2))){
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45145__$1,(4),ch);
} else {
if((state_val_45146 === (11))){
var inst_45135 = (state_45145[(2)]);
var state_45145__$1 = state_45145;
var statearr_45154_45177 = state_45145__$1;
(statearr_45154_45177[(2)] = inst_45135);

(statearr_45154_45177[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (9))){
var state_45145__$1 = state_45145;
var statearr_45155_45178 = state_45145__$1;
(statearr_45155_45178[(2)] = null);

(statearr_45155_45178[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (5))){
var inst_45130 = cljs.core.async.close_BANG_(out);
var state_45145__$1 = state_45145;
var statearr_45156_45179 = state_45145__$1;
(statearr_45156_45179[(2)] = inst_45130);

(statearr_45156_45179[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (10))){
var inst_45138 = (state_45145[(2)]);
var state_45145__$1 = (function (){var statearr_45157 = state_45145;
(statearr_45157[(8)] = inst_45138);

return statearr_45157;
})();
var statearr_45158_45180 = state_45145__$1;
(statearr_45158_45180[(2)] = null);

(statearr_45158_45180[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45146 === (8))){
var inst_45127 = (state_45145[(7)]);
var state_45145__$1 = state_45145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45145__$1,(11),out,inst_45127);
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
});})(c__14658__auto___45170,out))
;
return ((function (switch__13584__auto__,c__14658__auto___45170,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_45162 = [null,null,null,null,null,null,null,null,null];
(statearr_45162[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_45162[(1)] = (1));

return statearr_45162;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_45145){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_45145);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e45163){if((e45163 instanceof Object)){
var ex__13588__auto__ = e45163;
var statearr_45164_45181 = state_45145;
(statearr_45164_45181[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45145);

return cljs.core.cst$kw$recur;
} else {
throw e45163;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__45182 = state_45145;
state_45145 = G__45182;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_45145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_45145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___45170,out))
})();
var state__14660__auto__ = (function (){var statearr_45165 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_45165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___45170);

return statearr_45165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___45170,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args45183 = [];
var len__7296__auto___45186 = arguments.length;
var i__7297__auto___45187 = (0);
while(true){
if((i__7297__auto___45187 < len__7296__auto___45186)){
args45183.push((arguments[i__7297__auto___45187]));

var G__45188 = (i__7297__auto___45187 + (1));
i__7297__auto___45187 = G__45188;
continue;
} else {
}
break;
}

var G__45185 = args45183.length;
switch (G__45185) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45183.length)].join('')));

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
return (function (state_45355){
var state_val_45356 = (state_45355[(1)]);
if((state_val_45356 === (7))){
var inst_45351 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
var statearr_45357_45398 = state_45355__$1;
(statearr_45357_45398[(2)] = inst_45351);

(statearr_45357_45398[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (20))){
var inst_45321 = (state_45355[(7)]);
var inst_45332 = (state_45355[(2)]);
var inst_45333 = cljs.core.next(inst_45321);
var inst_45307 = inst_45333;
var inst_45308 = null;
var inst_45309 = (0);
var inst_45310 = (0);
var state_45355__$1 = (function (){var statearr_45358 = state_45355;
(statearr_45358[(8)] = inst_45332);

(statearr_45358[(9)] = inst_45308);

(statearr_45358[(10)] = inst_45309);

(statearr_45358[(11)] = inst_45310);

(statearr_45358[(12)] = inst_45307);

return statearr_45358;
})();
var statearr_45359_45399 = state_45355__$1;
(statearr_45359_45399[(2)] = null);

(statearr_45359_45399[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (1))){
var state_45355__$1 = state_45355;
var statearr_45360_45400 = state_45355__$1;
(statearr_45360_45400[(2)] = null);

(statearr_45360_45400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (4))){
var inst_45296 = (state_45355[(13)]);
var inst_45296__$1 = (state_45355[(2)]);
var inst_45297 = (inst_45296__$1 == null);
var state_45355__$1 = (function (){var statearr_45361 = state_45355;
(statearr_45361[(13)] = inst_45296__$1);

return statearr_45361;
})();
if(cljs.core.truth_(inst_45297)){
var statearr_45362_45401 = state_45355__$1;
(statearr_45362_45401[(1)] = (5));

} else {
var statearr_45363_45402 = state_45355__$1;
(statearr_45363_45402[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (15))){
var state_45355__$1 = state_45355;
var statearr_45367_45403 = state_45355__$1;
(statearr_45367_45403[(2)] = null);

(statearr_45367_45403[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (21))){
var state_45355__$1 = state_45355;
var statearr_45368_45404 = state_45355__$1;
(statearr_45368_45404[(2)] = null);

(statearr_45368_45404[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (13))){
var inst_45308 = (state_45355[(9)]);
var inst_45309 = (state_45355[(10)]);
var inst_45310 = (state_45355[(11)]);
var inst_45307 = (state_45355[(12)]);
var inst_45317 = (state_45355[(2)]);
var inst_45318 = (inst_45310 + (1));
var tmp45364 = inst_45308;
var tmp45365 = inst_45309;
var tmp45366 = inst_45307;
var inst_45307__$1 = tmp45366;
var inst_45308__$1 = tmp45364;
var inst_45309__$1 = tmp45365;
var inst_45310__$1 = inst_45318;
var state_45355__$1 = (function (){var statearr_45369 = state_45355;
(statearr_45369[(14)] = inst_45317);

(statearr_45369[(9)] = inst_45308__$1);

(statearr_45369[(10)] = inst_45309__$1);

(statearr_45369[(11)] = inst_45310__$1);

(statearr_45369[(12)] = inst_45307__$1);

return statearr_45369;
})();
var statearr_45370_45405 = state_45355__$1;
(statearr_45370_45405[(2)] = null);

(statearr_45370_45405[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (22))){
var state_45355__$1 = state_45355;
var statearr_45371_45406 = state_45355__$1;
(statearr_45371_45406[(2)] = null);

(statearr_45371_45406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (6))){
var inst_45296 = (state_45355[(13)]);
var inst_45305 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45296) : f.call(null,inst_45296));
var inst_45306 = cljs.core.seq(inst_45305);
var inst_45307 = inst_45306;
var inst_45308 = null;
var inst_45309 = (0);
var inst_45310 = (0);
var state_45355__$1 = (function (){var statearr_45372 = state_45355;
(statearr_45372[(9)] = inst_45308);

(statearr_45372[(10)] = inst_45309);

(statearr_45372[(11)] = inst_45310);

(statearr_45372[(12)] = inst_45307);

return statearr_45372;
})();
var statearr_45373_45407 = state_45355__$1;
(statearr_45373_45407[(2)] = null);

(statearr_45373_45407[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (17))){
var inst_45321 = (state_45355[(7)]);
var inst_45325 = cljs.core.chunk_first(inst_45321);
var inst_45326 = cljs.core.chunk_rest(inst_45321);
var inst_45327 = cljs.core.count(inst_45325);
var inst_45307 = inst_45326;
var inst_45308 = inst_45325;
var inst_45309 = inst_45327;
var inst_45310 = (0);
var state_45355__$1 = (function (){var statearr_45374 = state_45355;
(statearr_45374[(9)] = inst_45308);

(statearr_45374[(10)] = inst_45309);

(statearr_45374[(11)] = inst_45310);

(statearr_45374[(12)] = inst_45307);

return statearr_45374;
})();
var statearr_45375_45408 = state_45355__$1;
(statearr_45375_45408[(2)] = null);

(statearr_45375_45408[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (3))){
var inst_45353 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45355__$1,inst_45353);
} else {
if((state_val_45356 === (12))){
var inst_45341 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
var statearr_45376_45409 = state_45355__$1;
(statearr_45376_45409[(2)] = inst_45341);

(statearr_45376_45409[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (2))){
var state_45355__$1 = state_45355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45355__$1,(4),in$);
} else {
if((state_val_45356 === (23))){
var inst_45349 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
var statearr_45377_45410 = state_45355__$1;
(statearr_45377_45410[(2)] = inst_45349);

(statearr_45377_45410[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (19))){
var inst_45336 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
var statearr_45378_45411 = state_45355__$1;
(statearr_45378_45411[(2)] = inst_45336);

(statearr_45378_45411[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (11))){
var inst_45321 = (state_45355[(7)]);
var inst_45307 = (state_45355[(12)]);
var inst_45321__$1 = cljs.core.seq(inst_45307);
var state_45355__$1 = (function (){var statearr_45379 = state_45355;
(statearr_45379[(7)] = inst_45321__$1);

return statearr_45379;
})();
if(inst_45321__$1){
var statearr_45380_45412 = state_45355__$1;
(statearr_45380_45412[(1)] = (14));

} else {
var statearr_45381_45413 = state_45355__$1;
(statearr_45381_45413[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (9))){
var inst_45343 = (state_45355[(2)]);
var inst_45344 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_45355__$1 = (function (){var statearr_45382 = state_45355;
(statearr_45382[(15)] = inst_45343);

return statearr_45382;
})();
if(cljs.core.truth_(inst_45344)){
var statearr_45383_45414 = state_45355__$1;
(statearr_45383_45414[(1)] = (21));

} else {
var statearr_45384_45415 = state_45355__$1;
(statearr_45384_45415[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (5))){
var inst_45299 = cljs.core.async.close_BANG_(out);
var state_45355__$1 = state_45355;
var statearr_45385_45416 = state_45355__$1;
(statearr_45385_45416[(2)] = inst_45299);

(statearr_45385_45416[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (14))){
var inst_45321 = (state_45355[(7)]);
var inst_45323 = cljs.core.chunked_seq_QMARK_(inst_45321);
var state_45355__$1 = state_45355;
if(inst_45323){
var statearr_45386_45417 = state_45355__$1;
(statearr_45386_45417[(1)] = (17));

} else {
var statearr_45387_45418 = state_45355__$1;
(statearr_45387_45418[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (16))){
var inst_45339 = (state_45355[(2)]);
var state_45355__$1 = state_45355;
var statearr_45388_45419 = state_45355__$1;
(statearr_45388_45419[(2)] = inst_45339);

(statearr_45388_45419[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45356 === (10))){
var inst_45308 = (state_45355[(9)]);
var inst_45310 = (state_45355[(11)]);
var inst_45315 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45308,inst_45310);
var state_45355__$1 = state_45355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45355__$1,(13),out,inst_45315);
} else {
if((state_val_45356 === (18))){
var inst_45321 = (state_45355[(7)]);
var inst_45330 = cljs.core.first(inst_45321);
var state_45355__$1 = state_45355;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45355__$1,(20),out,inst_45330);
} else {
if((state_val_45356 === (8))){
var inst_45309 = (state_45355[(10)]);
var inst_45310 = (state_45355[(11)]);
var inst_45312 = (inst_45310 < inst_45309);
var inst_45313 = inst_45312;
var state_45355__$1 = state_45355;
if(cljs.core.truth_(inst_45313)){
var statearr_45389_45420 = state_45355__$1;
(statearr_45389_45420[(1)] = (10));

} else {
var statearr_45390_45421 = state_45355__$1;
(statearr_45390_45421[(1)] = (11));

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
var statearr_45394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45394[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__);

(statearr_45394[(1)] = (1));

return statearr_45394;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____1 = (function (state_45355){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_45355);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e45395){if((e45395 instanceof Object)){
var ex__13588__auto__ = e45395;
var statearr_45396_45422 = state_45355;
(statearr_45396_45422[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45355);

return cljs.core.cst$kw$recur;
} else {
throw e45395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__45423 = state_45355;
state_45355 = G__45423;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__ = function(state_45355){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____1.call(this,state_45355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13585__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto__))
})();
var state__14660__auto__ = (function (){var statearr_45397 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_45397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto__);

return statearr_45397;
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
var args45424 = [];
var len__7296__auto___45427 = arguments.length;
var i__7297__auto___45428 = (0);
while(true){
if((i__7297__auto___45428 < len__7296__auto___45427)){
args45424.push((arguments[i__7297__auto___45428]));

var G__45429 = (i__7297__auto___45428 + (1));
i__7297__auto___45428 = G__45429;
continue;
} else {
}
break;
}

var G__45426 = args45424.length;
switch (G__45426) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45424.length)].join('')));

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
var args45431 = [];
var len__7296__auto___45434 = arguments.length;
var i__7297__auto___45435 = (0);
while(true){
if((i__7297__auto___45435 < len__7296__auto___45434)){
args45431.push((arguments[i__7297__auto___45435]));

var G__45436 = (i__7297__auto___45435 + (1));
i__7297__auto___45435 = G__45436;
continue;
} else {
}
break;
}

var G__45433 = args45431.length;
switch (G__45433) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45431.length)].join('')));

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
var args45438 = [];
var len__7296__auto___45489 = arguments.length;
var i__7297__auto___45490 = (0);
while(true){
if((i__7297__auto___45490 < len__7296__auto___45489)){
args45438.push((arguments[i__7297__auto___45490]));

var G__45491 = (i__7297__auto___45490 + (1));
i__7297__auto___45490 = G__45491;
continue;
} else {
}
break;
}

var G__45440 = args45438.length;
switch (G__45440) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45438.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___45493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___45493,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___45493,out){
return (function (state_45464){
var state_val_45465 = (state_45464[(1)]);
if((state_val_45465 === (7))){
var inst_45459 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
var statearr_45466_45494 = state_45464__$1;
(statearr_45466_45494[(2)] = inst_45459);

(statearr_45466_45494[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45465 === (1))){
var inst_45441 = null;
var state_45464__$1 = (function (){var statearr_45467 = state_45464;
(statearr_45467[(7)] = inst_45441);

return statearr_45467;
})();
var statearr_45468_45495 = state_45464__$1;
(statearr_45468_45495[(2)] = null);

(statearr_45468_45495[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45465 === (4))){
var inst_45444 = (state_45464[(8)]);
var inst_45444__$1 = (state_45464[(2)]);
var inst_45445 = (inst_45444__$1 == null);
var inst_45446 = cljs.core.not(inst_45445);
var state_45464__$1 = (function (){var statearr_45469 = state_45464;
(statearr_45469[(8)] = inst_45444__$1);

return statearr_45469;
})();
if(inst_45446){
var statearr_45470_45496 = state_45464__$1;
(statearr_45470_45496[(1)] = (5));

} else {
var statearr_45471_45497 = state_45464__$1;
(statearr_45471_45497[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45465 === (6))){
var state_45464__$1 = state_45464;
var statearr_45472_45498 = state_45464__$1;
(statearr_45472_45498[(2)] = null);

(statearr_45472_45498[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45465 === (3))){
var inst_45461 = (state_45464[(2)]);
var inst_45462 = cljs.core.async.close_BANG_(out);
var state_45464__$1 = (function (){var statearr_45473 = state_45464;
(statearr_45473[(9)] = inst_45461);

return statearr_45473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45464__$1,inst_45462);
} else {
if((state_val_45465 === (2))){
var state_45464__$1 = state_45464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45464__$1,(4),ch);
} else {
if((state_val_45465 === (11))){
var inst_45444 = (state_45464[(8)]);
var inst_45453 = (state_45464[(2)]);
var inst_45441 = inst_45444;
var state_45464__$1 = (function (){var statearr_45474 = state_45464;
(statearr_45474[(7)] = inst_45441);

(statearr_45474[(10)] = inst_45453);

return statearr_45474;
})();
var statearr_45475_45499 = state_45464__$1;
(statearr_45475_45499[(2)] = null);

(statearr_45475_45499[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45465 === (9))){
var inst_45444 = (state_45464[(8)]);
var state_45464__$1 = state_45464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45464__$1,(11),out,inst_45444);
} else {
if((state_val_45465 === (5))){
var inst_45444 = (state_45464[(8)]);
var inst_45441 = (state_45464[(7)]);
var inst_45448 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45444,inst_45441);
var state_45464__$1 = state_45464;
if(inst_45448){
var statearr_45477_45500 = state_45464__$1;
(statearr_45477_45500[(1)] = (8));

} else {
var statearr_45478_45501 = state_45464__$1;
(statearr_45478_45501[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45465 === (10))){
var inst_45456 = (state_45464[(2)]);
var state_45464__$1 = state_45464;
var statearr_45479_45502 = state_45464__$1;
(statearr_45479_45502[(2)] = inst_45456);

(statearr_45479_45502[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45465 === (8))){
var inst_45441 = (state_45464[(7)]);
var tmp45476 = inst_45441;
var inst_45441__$1 = tmp45476;
var state_45464__$1 = (function (){var statearr_45480 = state_45464;
(statearr_45480[(7)] = inst_45441__$1);

return statearr_45480;
})();
var statearr_45481_45503 = state_45464__$1;
(statearr_45481_45503[(2)] = null);

(statearr_45481_45503[(1)] = (2));


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
});})(c__14658__auto___45493,out))
;
return ((function (switch__13584__auto__,c__14658__auto___45493,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_45485 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45485[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_45485[(1)] = (1));

return statearr_45485;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_45464){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_45464);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e45486){if((e45486 instanceof Object)){
var ex__13588__auto__ = e45486;
var statearr_45487_45504 = state_45464;
(statearr_45487_45504[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45464);

return cljs.core.cst$kw$recur;
} else {
throw e45486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__45505 = state_45464;
state_45464 = G__45505;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_45464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_45464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___45493,out))
})();
var state__14660__auto__ = (function (){var statearr_45488 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_45488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___45493);

return statearr_45488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___45493,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args45506 = [];
var len__7296__auto___45576 = arguments.length;
var i__7297__auto___45577 = (0);
while(true){
if((i__7297__auto___45577 < len__7296__auto___45576)){
args45506.push((arguments[i__7297__auto___45577]));

var G__45578 = (i__7297__auto___45577 + (1));
i__7297__auto___45577 = G__45578;
continue;
} else {
}
break;
}

var G__45508 = args45506.length;
switch (G__45508) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45506.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___45580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___45580,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___45580,out){
return (function (state_45546){
var state_val_45547 = (state_45546[(1)]);
if((state_val_45547 === (7))){
var inst_45542 = (state_45546[(2)]);
var state_45546__$1 = state_45546;
var statearr_45548_45581 = state_45546__$1;
(statearr_45548_45581[(2)] = inst_45542);

(statearr_45548_45581[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (1))){
var inst_45509 = (new Array(n));
var inst_45510 = inst_45509;
var inst_45511 = (0);
var state_45546__$1 = (function (){var statearr_45549 = state_45546;
(statearr_45549[(7)] = inst_45510);

(statearr_45549[(8)] = inst_45511);

return statearr_45549;
})();
var statearr_45550_45582 = state_45546__$1;
(statearr_45550_45582[(2)] = null);

(statearr_45550_45582[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (4))){
var inst_45514 = (state_45546[(9)]);
var inst_45514__$1 = (state_45546[(2)]);
var inst_45515 = (inst_45514__$1 == null);
var inst_45516 = cljs.core.not(inst_45515);
var state_45546__$1 = (function (){var statearr_45551 = state_45546;
(statearr_45551[(9)] = inst_45514__$1);

return statearr_45551;
})();
if(inst_45516){
var statearr_45552_45583 = state_45546__$1;
(statearr_45552_45583[(1)] = (5));

} else {
var statearr_45553_45584 = state_45546__$1;
(statearr_45553_45584[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (15))){
var inst_45536 = (state_45546[(2)]);
var state_45546__$1 = state_45546;
var statearr_45554_45585 = state_45546__$1;
(statearr_45554_45585[(2)] = inst_45536);

(statearr_45554_45585[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (13))){
var state_45546__$1 = state_45546;
var statearr_45555_45586 = state_45546__$1;
(statearr_45555_45586[(2)] = null);

(statearr_45555_45586[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (6))){
var inst_45511 = (state_45546[(8)]);
var inst_45532 = (inst_45511 > (0));
var state_45546__$1 = state_45546;
if(cljs.core.truth_(inst_45532)){
var statearr_45556_45587 = state_45546__$1;
(statearr_45556_45587[(1)] = (12));

} else {
var statearr_45557_45588 = state_45546__$1;
(statearr_45557_45588[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (3))){
var inst_45544 = (state_45546[(2)]);
var state_45546__$1 = state_45546;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45546__$1,inst_45544);
} else {
if((state_val_45547 === (12))){
var inst_45510 = (state_45546[(7)]);
var inst_45534 = cljs.core.vec(inst_45510);
var state_45546__$1 = state_45546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45546__$1,(15),out,inst_45534);
} else {
if((state_val_45547 === (2))){
var state_45546__$1 = state_45546;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45546__$1,(4),ch);
} else {
if((state_val_45547 === (11))){
var inst_45526 = (state_45546[(2)]);
var inst_45527 = (new Array(n));
var inst_45510 = inst_45527;
var inst_45511 = (0);
var state_45546__$1 = (function (){var statearr_45558 = state_45546;
(statearr_45558[(7)] = inst_45510);

(statearr_45558[(10)] = inst_45526);

(statearr_45558[(8)] = inst_45511);

return statearr_45558;
})();
var statearr_45559_45589 = state_45546__$1;
(statearr_45559_45589[(2)] = null);

(statearr_45559_45589[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (9))){
var inst_45510 = (state_45546[(7)]);
var inst_45524 = cljs.core.vec(inst_45510);
var state_45546__$1 = state_45546;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45546__$1,(11),out,inst_45524);
} else {
if((state_val_45547 === (5))){
var inst_45519 = (state_45546[(11)]);
var inst_45510 = (state_45546[(7)]);
var inst_45514 = (state_45546[(9)]);
var inst_45511 = (state_45546[(8)]);
var inst_45518 = (inst_45510[inst_45511] = inst_45514);
var inst_45519__$1 = (inst_45511 + (1));
var inst_45520 = (inst_45519__$1 < n);
var state_45546__$1 = (function (){var statearr_45560 = state_45546;
(statearr_45560[(12)] = inst_45518);

(statearr_45560[(11)] = inst_45519__$1);

return statearr_45560;
})();
if(cljs.core.truth_(inst_45520)){
var statearr_45561_45590 = state_45546__$1;
(statearr_45561_45590[(1)] = (8));

} else {
var statearr_45562_45591 = state_45546__$1;
(statearr_45562_45591[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (14))){
var inst_45539 = (state_45546[(2)]);
var inst_45540 = cljs.core.async.close_BANG_(out);
var state_45546__$1 = (function (){var statearr_45564 = state_45546;
(statearr_45564[(13)] = inst_45539);

return statearr_45564;
})();
var statearr_45565_45592 = state_45546__$1;
(statearr_45565_45592[(2)] = inst_45540);

(statearr_45565_45592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (10))){
var inst_45530 = (state_45546[(2)]);
var state_45546__$1 = state_45546;
var statearr_45566_45593 = state_45546__$1;
(statearr_45566_45593[(2)] = inst_45530);

(statearr_45566_45593[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45547 === (8))){
var inst_45519 = (state_45546[(11)]);
var inst_45510 = (state_45546[(7)]);
var tmp45563 = inst_45510;
var inst_45510__$1 = tmp45563;
var inst_45511 = inst_45519;
var state_45546__$1 = (function (){var statearr_45567 = state_45546;
(statearr_45567[(7)] = inst_45510__$1);

(statearr_45567[(8)] = inst_45511);

return statearr_45567;
})();
var statearr_45568_45594 = state_45546__$1;
(statearr_45568_45594[(2)] = null);

(statearr_45568_45594[(1)] = (2));


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
});})(c__14658__auto___45580,out))
;
return ((function (switch__13584__auto__,c__14658__auto___45580,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_45572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45572[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_45572[(1)] = (1));

return statearr_45572;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_45546){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_45546);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e45573){if((e45573 instanceof Object)){
var ex__13588__auto__ = e45573;
var statearr_45574_45595 = state_45546;
(statearr_45574_45595[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45546);

return cljs.core.cst$kw$recur;
} else {
throw e45573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__45596 = state_45546;
state_45546 = G__45596;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_45546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_45546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___45580,out))
})();
var state__14660__auto__ = (function (){var statearr_45575 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_45575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___45580);

return statearr_45575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___45580,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args45597 = [];
var len__7296__auto___45671 = arguments.length;
var i__7297__auto___45672 = (0);
while(true){
if((i__7297__auto___45672 < len__7296__auto___45671)){
args45597.push((arguments[i__7297__auto___45672]));

var G__45673 = (i__7297__auto___45672 + (1));
i__7297__auto___45672 = G__45673;
continue;
} else {
}
break;
}

var G__45599 = args45597.length;
switch (G__45599) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45597.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14658__auto___45675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14658__auto___45675,out){
return (function (){
var f__14659__auto__ = (function (){var switch__13584__auto__ = ((function (c__14658__auto___45675,out){
return (function (state_45641){
var state_val_45642 = (state_45641[(1)]);
if((state_val_45642 === (7))){
var inst_45637 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
var statearr_45643_45676 = state_45641__$1;
(statearr_45643_45676[(2)] = inst_45637);

(statearr_45643_45676[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (1))){
var inst_45600 = [];
var inst_45601 = inst_45600;
var inst_45602 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_45641__$1 = (function (){var statearr_45644 = state_45641;
(statearr_45644[(7)] = inst_45602);

(statearr_45644[(8)] = inst_45601);

return statearr_45644;
})();
var statearr_45645_45677 = state_45641__$1;
(statearr_45645_45677[(2)] = null);

(statearr_45645_45677[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (4))){
var inst_45605 = (state_45641[(9)]);
var inst_45605__$1 = (state_45641[(2)]);
var inst_45606 = (inst_45605__$1 == null);
var inst_45607 = cljs.core.not(inst_45606);
var state_45641__$1 = (function (){var statearr_45646 = state_45641;
(statearr_45646[(9)] = inst_45605__$1);

return statearr_45646;
})();
if(inst_45607){
var statearr_45647_45678 = state_45641__$1;
(statearr_45647_45678[(1)] = (5));

} else {
var statearr_45648_45679 = state_45641__$1;
(statearr_45648_45679[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (15))){
var inst_45631 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
var statearr_45649_45680 = state_45641__$1;
(statearr_45649_45680[(2)] = inst_45631);

(statearr_45649_45680[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (13))){
var state_45641__$1 = state_45641;
var statearr_45650_45681 = state_45641__$1;
(statearr_45650_45681[(2)] = null);

(statearr_45650_45681[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (6))){
var inst_45601 = (state_45641[(8)]);
var inst_45626 = inst_45601.length;
var inst_45627 = (inst_45626 > (0));
var state_45641__$1 = state_45641;
if(cljs.core.truth_(inst_45627)){
var statearr_45651_45682 = state_45641__$1;
(statearr_45651_45682[(1)] = (12));

} else {
var statearr_45652_45683 = state_45641__$1;
(statearr_45652_45683[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (3))){
var inst_45639 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45641__$1,inst_45639);
} else {
if((state_val_45642 === (12))){
var inst_45601 = (state_45641[(8)]);
var inst_45629 = cljs.core.vec(inst_45601);
var state_45641__$1 = state_45641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45641__$1,(15),out,inst_45629);
} else {
if((state_val_45642 === (2))){
var state_45641__$1 = state_45641;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45641__$1,(4),ch);
} else {
if((state_val_45642 === (11))){
var inst_45605 = (state_45641[(9)]);
var inst_45609 = (state_45641[(10)]);
var inst_45619 = (state_45641[(2)]);
var inst_45620 = [];
var inst_45621 = inst_45620.push(inst_45605);
var inst_45601 = inst_45620;
var inst_45602 = inst_45609;
var state_45641__$1 = (function (){var statearr_45653 = state_45641;
(statearr_45653[(11)] = inst_45621);

(statearr_45653[(7)] = inst_45602);

(statearr_45653[(12)] = inst_45619);

(statearr_45653[(8)] = inst_45601);

return statearr_45653;
})();
var statearr_45654_45684 = state_45641__$1;
(statearr_45654_45684[(2)] = null);

(statearr_45654_45684[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (9))){
var inst_45601 = (state_45641[(8)]);
var inst_45617 = cljs.core.vec(inst_45601);
var state_45641__$1 = state_45641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45641__$1,(11),out,inst_45617);
} else {
if((state_val_45642 === (5))){
var inst_45602 = (state_45641[(7)]);
var inst_45605 = (state_45641[(9)]);
var inst_45609 = (state_45641[(10)]);
var inst_45609__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_45605) : f.call(null,inst_45605));
var inst_45610 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45609__$1,inst_45602);
var inst_45611 = cljs.core.keyword_identical_QMARK_(inst_45602,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_45612 = (inst_45610) || (inst_45611);
var state_45641__$1 = (function (){var statearr_45655 = state_45641;
(statearr_45655[(10)] = inst_45609__$1);

return statearr_45655;
})();
if(cljs.core.truth_(inst_45612)){
var statearr_45656_45685 = state_45641__$1;
(statearr_45656_45685[(1)] = (8));

} else {
var statearr_45657_45686 = state_45641__$1;
(statearr_45657_45686[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (14))){
var inst_45634 = (state_45641[(2)]);
var inst_45635 = cljs.core.async.close_BANG_(out);
var state_45641__$1 = (function (){var statearr_45659 = state_45641;
(statearr_45659[(13)] = inst_45634);

return statearr_45659;
})();
var statearr_45660_45687 = state_45641__$1;
(statearr_45660_45687[(2)] = inst_45635);

(statearr_45660_45687[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (10))){
var inst_45624 = (state_45641[(2)]);
var state_45641__$1 = state_45641;
var statearr_45661_45688 = state_45641__$1;
(statearr_45661_45688[(2)] = inst_45624);

(statearr_45661_45688[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_45642 === (8))){
var inst_45605 = (state_45641[(9)]);
var inst_45601 = (state_45641[(8)]);
var inst_45609 = (state_45641[(10)]);
var inst_45614 = inst_45601.push(inst_45605);
var tmp45658 = inst_45601;
var inst_45601__$1 = tmp45658;
var inst_45602 = inst_45609;
var state_45641__$1 = (function (){var statearr_45662 = state_45641;
(statearr_45662[(7)] = inst_45602);

(statearr_45662[(8)] = inst_45601__$1);

(statearr_45662[(14)] = inst_45614);

return statearr_45662;
})();
var statearr_45663_45689 = state_45641__$1;
(statearr_45663_45689[(2)] = null);

(statearr_45663_45689[(1)] = (2));


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
});})(c__14658__auto___45675,out))
;
return ((function (switch__13584__auto__,c__14658__auto___45675,out){
return (function() {
var cljs$core$async$state_machine__13585__auto__ = null;
var cljs$core$async$state_machine__13585__auto____0 = (function (){
var statearr_45667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45667[(0)] = cljs$core$async$state_machine__13585__auto__);

(statearr_45667[(1)] = (1));

return statearr_45667;
});
var cljs$core$async$state_machine__13585__auto____1 = (function (state_45641){
while(true){
var ret_value__13586__auto__ = (function (){try{while(true){
var result__13587__auto__ = switch__13584__auto__(state_45641);
if(cljs.core.keyword_identical_QMARK_(result__13587__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13587__auto__;
}
break;
}
}catch (e45668){if((e45668 instanceof Object)){
var ex__13588__auto__ = e45668;
var statearr_45669_45690 = state_45641;
(statearr_45669_45690[(5)] = ex__13588__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45641);

return cljs.core.cst$kw$recur;
} else {
throw e45668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13586__auto__,cljs.core.cst$kw$recur)){
var G__45691 = state_45641;
state_45641 = G__45691;
continue;
} else {
return ret_value__13586__auto__;
}
break;
}
});
cljs$core$async$state_machine__13585__auto__ = function(state_45641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13585__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13585__auto____1.call(this,state_45641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13585__auto____0;
cljs$core$async$state_machine__13585__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13585__auto____1;
return cljs$core$async$state_machine__13585__auto__;
})()
;})(switch__13584__auto__,c__14658__auto___45675,out))
})();
var state__14660__auto__ = (function (){var statearr_45670 = (f__14659__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14659__auto__.cljs$core$IFn$_invoke$arity$0() : f__14659__auto__.call(null));
(statearr_45670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14658__auto___45675);

return statearr_45670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14660__auto__);
});})(c__14658__auto___45675,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

