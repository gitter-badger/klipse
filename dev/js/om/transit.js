// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('om.transit');
goog.require('cljs.core');
goog.require('cognitect.transit');
goog.require('com.cognitect.transit');
goog.require('om.tempid');

/**
* @constructor
 * @implements {om.transit.Object}
*/
om.transit.TempIdHandler = (function (){
})
om.transit.TempIdHandler.prototype.tag = (function (_){
var self__ = this;
var ___$1 = this;
return "om/id";
});

om.transit.TempIdHandler.prototype.rep = (function (r){
var self__ = this;
var _ = this;
return r.id;
});

om.transit.TempIdHandler.prototype.stringRep = (function (_){
var self__ = this;
var ___$1 = this;
return null;
});

om.transit.TempIdHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

om.transit.TempIdHandler.cljs$lang$type = true;

om.transit.TempIdHandler.cljs$lang$ctorStr = "om.transit/TempIdHandler";

om.transit.TempIdHandler.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write(writer__6828__auto__,"om.transit/TempIdHandler");
});

om.transit.__GT_TempIdHandler = (function om$transit$__GT_TempIdHandler(){
return (new om.transit.TempIdHandler());
});

om.transit.writer = (function om$transit$writer(var_args){
var args21638 = [];
var len__7296__auto___21641 = arguments.length;
var i__7297__auto___21644 = (0);
while(true){
if((i__7297__auto___21644 < len__7296__auto___21641)){
args21638.push((arguments[i__7297__auto___21644]));

var G__21645 = (i__7297__auto___21644 + (1));
i__7297__auto___21644 = G__21645;
continue;
} else {
}
break;
}

var G__21640 = args21638.length;
switch (G__21640) {
case 0:
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21638.length)].join('')));

}
});

om.transit.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handlers,om.tempid.TempId], null),(new om.transit.TempIdHandler())));
});

om.transit.writer.cljs$lang$maxFixedArity = 1;

om.transit.reader = (function om$transit$reader(var_args){
var args21647 = [];
var len__7296__auto___21652 = arguments.length;
var i__7297__auto___21653 = (0);
while(true){
if((i__7297__auto___21653 < len__7296__auto___21652)){
args21647.push((arguments[i__7297__auto___21653]));

var G__21656 = (i__7297__auto___21653 + (1));
i__7297__auto___21653 = G__21656;
continue;
} else {
}
break;
}

var G__21651 = args21647.length;
switch (G__21651) {
case 0:
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21647.length)].join('')));

}
});

om.transit.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

om.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,cljs.core.assoc_in(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$handlers,"om/id"], null),(function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
})));
});

om.transit.reader.cljs$lang$maxFixedArity = 1;

