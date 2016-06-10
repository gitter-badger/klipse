// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('gadjett.collections');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.zip');
gadjett.collections.to_regular_array = (function gadjett$collections$to_regular_array(arr){
return (new cljs.core.IndexedSeq(arr,(0),null));
});
gadjett.collections._EQ_without_keys_QMARK_ = (function gadjett$collections$_EQ_without_keys_QMARK_(obj_a,obj_b,keys_list){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56235_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__56235_SHARP_,keys_list);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj_a,obj_b], null)));
});
/**
 * Converts a 2d vec to a hash-map.
 *   E.g. 
 * 
 * [[:a 1] [:b 2]] -> {:a 1 :b 2}
 * 
 */
gadjett.collections.vec__GT_map = (function gadjett$collections$vec__GT_map(vec){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,vec);
});
gadjett.collections.map_2d_vec = (function gadjett$collections$map_2d_vec(f,m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56240){
var vec__56241 = p__56240;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56241,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56241,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(id) : f.call(null,id))], null);
}),m);
});
/**
 * Usage:
 * 
 *    (map-object f m)
 * 
 *   Returns a map with the same keys as `m` and with the values transformed by `f`.
 * 
 *   For instance:
 * 
 *           (map-object #(* 100 %) {:a 1 :b 2 :c 3}); => {:a 100 :b 200 :c 300})
 * 
 *   
 */
gadjett.collections.map_object = (function gadjett$collections$map_object(f,m){
return gadjett.collections.vec__GT_map(gadjett.collections.map_2d_vec(f,m));
});
gadjett.collections.map_object_with_key = (function gadjett$collections$map_object_with_key(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56248){
var vec__56249 = p__56248;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56249,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56249,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b))], null);
}),m));
});
gadjett.collections.map_2d_vec_kv = (function gadjett$collections$map_2d_vec_kv(fk,fv,m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56256){
var vec__56257 = p__56256;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56257,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56257,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(fk.cljs$core$IFn$_invoke$arity$1 ? fk.cljs$core$IFn$_invoke$arity$1(k) : fk.call(null,k)),(fv.cljs$core$IFn$_invoke$arity$1 ? fv.cljs$core$IFn$_invoke$arity$1(id) : fv.call(null,id))], null);
}),m);
});
gadjett.collections.map_object_kv = (function gadjett$collections$map_object_kv(fk,fv,m){
return gadjett.collections.vec__GT_map(gadjett.collections.map_2d_vec_kv(fk,fv,m));
});
/**
 * Turns a hash map inside out.
 *   See:  [here](http://stackoverflow.com/a/23653784/813665)
 */
gadjett.collections.map_reverse_hierarchy = (function gadjett$collections$map_reverse_hierarchy(m){
var or__6221__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.conj,(function (){var iter__7001__auto__ = (function gadjett$collections$map_reverse_hierarchy_$_iter__56383(s__56384){
return (new cljs.core.LazySeq(null,(function (){
var s__56384__$1 = s__56384;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__56384__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__56407 = cljs.core.first(xs__5205__auto__);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56407,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56407,(1),null);
var iterys__6997__auto__ = ((function (s__56384__$1,vec__56407,k1,v1,xs__5205__auto__,temp__4657__auto__){
return (function gadjett$collections$map_reverse_hierarchy_$_iter__56383_$_iter__56385(s__56386){
return (new cljs.core.LazySeq(null,((function (s__56384__$1,vec__56407,k1,v1,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__56386__$1 = s__56386;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__56386__$1);
if(temp__4657__auto____$1){
var s__56386__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__56386__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__56386__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__56388 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__56387 = (0);
while(true){
if((i__56387 < size__7000__auto__)){
var vec__56418 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__56387);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56418,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56418,(1),null);
cljs.core.chunk_append(b__56388,cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false));

var G__56424 = (i__56387 + (1));
i__56387 = G__56424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56388),gadjett$collections$map_reverse_hierarchy_$_iter__56383_$_iter__56385(cljs.core.chunk_rest(s__56386__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56388),null);
}
} else {
var vec__56421 = cljs.core.first(s__56386__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56421,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56421,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false),gadjett$collections$map_reverse_hierarchy_$_iter__56383_$_iter__56385(cljs.core.rest(s__56386__$2)));
}
} else {
return null;
}
break;
}
});})(s__56384__$1,vec__56407,k1,v1,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__56384__$1,vec__56407,k1,v1,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq(iterys__6997__auto__(v1));
if(fs__6998__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6998__auto__,gadjett$collections$map_reverse_hierarchy_$_iter__56383(cljs.core.rest(s__56384__$1)));
} else {
var G__56425 = cljs.core.rest(s__56384__$1);
s__56384__$1 = G__56425;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(m);
})());
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
gadjett.collections.mean = (function gadjett$collections$mean(x){
if(cljs.core.empty_QMARK_(x)){
return (0);
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,x) / cljs.core.count(x));
}
});
/**
 * 
 *   Usage:
 * 
 *   (sequence->map s)
 * 
 *   Converts a sequence into a map where the keys are the indexes of the elements in the sequence.
 * 
 *   For instance: 
 * 
 *   (sequence->map [10 20 30]) => {0 10 1 20 2 30}
 *   
 */
gadjett.collections.sequence__GT_map = (function gadjett$collections$sequence__GT_map(s){
return cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(s)),s);
});
gadjett.collections.range_with_end = (function gadjett$collections$range_with_end(var_args){
var args56426 = [];
var len__7296__auto___56429 = arguments.length;
var i__7297__auto___56430 = (0);
while(true){
if((i__7297__auto___56430 < len__7296__auto___56429)){
args56426.push((arguments[i__7297__auto___56430]));

var G__56431 = (i__7297__auto___56430 + (1));
i__7297__auto___56430 = G__56431;
continue;
} else {
}
break;
}

var G__56428 = args56426.length;
switch (G__56428) {
case 1:
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56426.length)].join('')));

}
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1 = (function (end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.cljs$core$IFn$_invoke$arity$1(end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3 = (function (start,end,steps){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,steps)], null);
});

gadjett.collections.range_with_end.cljs$lang$maxFixedArity = 3;

gadjett.collections.range_till_end = (function gadjett$collections$range_till_end(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56437 = arguments.length;
var i__7297__auto___56438 = (0);
while(true){
if((i__7297__auto___56438 < len__7296__auto___56437)){
args__7303__auto__.push((arguments[i__7297__auto___56438]));

var G__56439 = (i__7297__auto___56438 + (1));
i__7297__auto___56438 = G__56439;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__56434 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gadjett.collections.range_with_end,args);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56434,(0),null);
var lis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56434,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
});

gadjett.collections.range_till_end.cljs$lang$maxFixedArity = (0);

gadjett.collections.range_till_end.cljs$lang$applyTo = (function (seq56433){
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56433));
});

gadjett.collections.append_cyclic = (function gadjett$collections$append_cyclic(lst,a){
if(cljs.core.seq(lst)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(lst),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
} else {
return lst;
}
});
gadjett.collections.assoc_cyclic = (function gadjett$collections$assoc_cyclic(var_args){
var args56440 = [];
var len__7296__auto___56443 = arguments.length;
var i__7297__auto___56444 = (0);
while(true){
if((i__7297__auto___56444 < len__7296__auto___56443)){
args56440.push((arguments[i__7297__auto___56444]));

var G__56445 = (i__7297__auto___56444 + (1));
i__7297__auto___56444 = G__56445;
continue;
} else {
}
break;
}

var G__56442 = args56440.length;
switch (G__56442) {
case 3:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56440.length)].join('')));

}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3 = (function (coll,k,v){
if(cljs.core.contains_QMARK_(coll,k)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,gadjett.collections.append_cyclic(coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4 = (function (coll,k,v,n){
if((cljs.core.count(coll) < n)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll,k,v);
} else {
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3(coll,k,v);
}
});

gadjett.collections.assoc_cyclic.cljs$lang$maxFixedArity = 4;

gadjett.collections.max_and_min = (function gadjett$collections$max_and_min(x){
if(cljs.core.empty_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__56447_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,p1__56447_SHARP_);
}),(function (p1__56448_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,p1__56448_SHARP_);
})).call(null,x);
}
});
gadjett.collections.compactize_map = (function gadjett$collections$compactize_map(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
/**
 * Run a function on the elements of a map and keep only those elements for which
 *   the function returns true
 */
gadjett.collections.filter_map = (function gadjett$collections$filter_map(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,cljs.core.val),m));
});
gadjett.collections.abs = (function gadjett$collections$abs(x){
var x__6552__auto__ = x;
var y__6553__auto__ = (- x);
return ((x__6552__auto__ > y__6553__auto__) ? x__6552__auto__ : y__6553__auto__);
});
gadjett.collections.nearest_of_ss = (function gadjett$collections$nearest_of_ss(ss,x){
var greater = cljs.core.first(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(ss,cljs.core._GT__EQ_,x));
var smaller = cljs.core.first(cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(ss,cljs.core._LT__EQ_,x));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,((function (greater,smaller){
return (function (p1__56449_SHARP_){
return gadjett.collections.abs((p1__56449_SHARP_ - x));
});})(greater,smaller))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [greater,smaller], null)));
});
gadjett.collections.nearest_of_seq = (function gadjett$collections$nearest_of_seq(a,b){
if(cljs.core.empty_QMARK_(a)){
return b;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gadjett.collections.nearest_of_ss,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set,a)),b);
}
});
gadjett.collections.map_to_object = (function gadjett$collections$map_to_object(f,lst){
return cljs.core.zipmap(lst,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,lst));
});
/**
 * 
 *   Usage:
 * 
 *    (map-with-index coll idx-key val-key)
 * 
 * 
 *   Maps a sequence to a sequence of maps with index and value
 *   For instance:
 *   
 *    (map-with-index [10 20 30] :idx :val) =>  '({:idx 0, :val 10} {:idx 1, :val 20} {:idx 2, :val 30}))
 *   
 */
gadjett.collections.map_with_index = (function gadjett$collections$map_with_index(s,idx_key,val_key){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.PersistentArrayMap.fromArray([idx_key,i,val_key,v], true, false);
}),s);
});
/**
 * 
 *   Takes a seq, and returns a map where the keys are the result of applying f to the elements in the seq.
 *   The result of f should be unique for each element in the seq, otherwise you will loose some data.
 *   If it is not unique, consider using [group-by](https://clojuredocs.org/clojure.core/group-by)
 *   
 */
gadjett.collections.mapify = (function gadjett$collections$mapify(s,f){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,s),s);
});
gadjett.collections.map_to_object_with_index = (function gadjett$collections$map_to_object_with_index(f,s){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__56450_SHARP_,p2__56451_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__56450_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__56451_SHARP_) : f.call(null,p2__56451_SHARP_))],null));
}),s));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
gadjett.collections.dissoc_in = (function gadjett$collections$dissoc_in(m,p__56452){
var vec__56456 = p__56452;
var seq__56457 = cljs.core.seq(vec__56456);
var first__56458 = cljs.core.first(seq__56457);
var seq__56457__$1 = cljs.core.next(seq__56457);
var k = first__56458;
var ks = seq__56457__$1;
var keys = vec__56456;
if(ks){
var temp__4655__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = gadjett$collections$dissoc_in(nextmap,ks);
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
/**
 * Splits a collection to items where the separator is a repetition of at least n elements that satisfy pred
 *   inspired by: [this question](http://stackoverflow.com/a/23555616/813665)
 */
gadjett.collections.split_by_predicate = (function gadjett$collections$split_by_predicate(coll,pred,n){
var part = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(pred,coll);
var ppart = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(((function (part){
return (function (x){
return ((cljs.core.count(x) >= n)) && (cljs.core.every_QMARK_(pred,x));
});})(part))
,part);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (part,ppart){
return (function (p1__56459_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__56459_SHARP_);
});})(part,ppart))
,ppart);
});
/**
 * Receives a collection of lengths and returns a list of start and end positions
 */
gadjett.collections.positions = (function gadjett$collections$positions(coll_of_lengths,maximal_value){
var end_pos = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,coll_of_lengths);
var start_pos = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),end_pos);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (end_pos,start_pos){
return (function (p1__56460_SHARP_,p2__56461_SHARP_){
var x__7055__auto__ = (function (){var x__6559__auto__ = maximal_value;
var y__6560__auto__ = p1__56460_SHARP_;
return ((x__6559__auto__ < y__6560__auto__) ? x__6559__auto__ : y__6560__auto__);
})();
return cljs.core._conj((function (){var x__7055__auto____$1 = (function (){var x__6559__auto__ = maximal_value;
var y__6560__auto__ = p2__56461_SHARP_;
return ((x__6559__auto__ < y__6560__auto__) ? x__6559__auto__ : y__6560__auto__);
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
});})(end_pos,start_pos))
,start_pos,end_pos);
});
/**
 * Checks if m1 is a submap of m2.
 *   Map m1 is a submap of m2 if all key/value pairs in m1 exist in m2
 */
gadjett.collections.submap_QMARK_ = (function gadjett$collections$submap_QMARK_(m1,m2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m1,cljs.core.select_keys(m2,cljs.core.keys(m1)));
});
gadjett.collections.subsequence = (function gadjett$collections$subsequence(coll,start,end){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((end - start),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(start,coll));
});
gadjett.collections.split_by_predicate_opt = (function gadjett$collections$split_by_predicate_opt(coll,pred,n,d){
var lengths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56462_SHARP_){
return (d * p1__56462_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,gadjett.collections.split_by_predicate(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(d,coll),pred,(n / d))));
var pos = gadjett.collections.positions(lengths,cljs.core.count(coll));
return pos;
});
gadjett.collections.index_of = (function gadjett$collections$index_of(s,element){
var or__6221__auto__ = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56463_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__56463_SHARP_),element);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__56464_SHARP_,p2__56465_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__56464_SHARP_,p2__56465_SHARP_],null));
}),s)));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (-1);
}
});
gadjett.collections.display_sequence = (function gadjett$collections$display_sequence(long_seq,short_seq,value,abs_step){
var old_step = (cljs.core.second(short_seq) - cljs.core.first(short_seq));
var step = ((cljs.core.second(long_seq) - cljs.core.first(long_seq)) * abs_step);
var position_in_old_sequence = ((value - cljs.core.first(short_seq)) / old_step);
if((((0) <= position_in_old_sequence)) && ((position_in_old_sequence <= (4)))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((value - (step * position_in_old_sequence)),(value + (step * ((5) - position_in_old_sequence))),step);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position_in_old_sequence,(5))){
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((value - (step * (position_in_old_sequence - (1)))),(value + step),step);
} else {
if(cljs.core.empty_QMARK_(short_seq)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((value - step),(value + ((4) * step)),step);
} else {
return cljs.core.range.cljs$core$IFn$_invoke$arity$3(value,(value + ((5) * step)),step);

}
}
}
});
gadjett.collections.highest_below_y = (function gadjett$collections$highest_below_y(m,v){
return cljs.core.second(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56470){
var vec__56471 = p__56470;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56471,(1),null);
return (y <= v);
}),m)))));
});
gadjett.collections.lowest_above_y = (function gadjett$collections$lowest_above_y(m,v){
return cljs.core.second(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56478){
var vec__56479 = p__56478;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56479,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56479,(1),null);
return (y >= v);
}),m)))));
});
gadjett.collections.highest_below_x = (function gadjett$collections$highest_below_x(m,v){
return cljs.core.second(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56486){
var vec__56487 = p__56486;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56487,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56487,(1),null);
return (x <= v);
}),m)))));
});
gadjett.collections.lowest_above_x = (function gadjett$collections$lowest_above_x(m,v){
return cljs.core.second(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56494){
var vec__56495 = p__56494;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56495,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56495,(1),null);
return (x >= v);
}),m)))));
});
gadjett.collections.find_keys_with_values_in = (function gadjett$collections$find_keys_with_values_in(m,s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(s,m),cljs.core.keys(m));
});
gadjett.collections.replace_keys = (function gadjett$collections$replace_keys(coll,key_map){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56498_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(key_map,p1__56498_SHARP_,p1__56498_SHARP_);
}),cljs.core.keys(coll)),cljs.core.vals(coll));
});
gadjett.collections.find_keys_with_value = (function gadjett$collections$find_keys_with_value(m,v){
return gadjett.collections.find_keys_with_values_in(m,cljs.core.PersistentHashSet.fromArray([v], true));
});
gadjett.collections.linear_y = (function gadjett$collections$linear_y(x,x1,y1,x2,y2){
return (y1 + (((y2 - y1) * (x - x1)) / (x2 - x1)));
});
gadjett.collections.log_x_linear_y = (function gadjett$collections$log_x_linear_y(x,x1,y1,x2,y2){
return (y1 + (((y2 - y1) * (Math.log(x) - Math.log(x1))) / (Math.log(x2) - Math.log(x1))));
});
gadjett.collections.linear_y_func = (function gadjett$collections$linear_y_func(p__56499){
var map__56503 = p__56499;
var map__56503__$1 = ((((!((map__56503 == null)))?((((map__56503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56503):map__56503);
var axes = map__56503__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56503__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56503__$1,cljs.core.cst$kw$y);
var G__56505 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__56505)){
return gadjett.collections.linear_y;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log,cljs.core.cst$kw$linear], null),G__56505)){
return gadjett.collections.log_x_linear_y;
} else {
return gadjett.collections.linear_y;

}
}
});
gadjett.collections.interpolate_linear_y = (function gadjett$collections$interpolate_linear_y(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56518 = arguments.length;
var i__7297__auto___56519 = (0);
while(true){
if((i__7297__auto___56519 < len__7296__auto___56518)){
args__7303__auto__.push((arguments[i__7297__auto___56519]));

var G__56520 = (i__7297__auto___56519 + (1));
i__7297__auto___56519 = G__56520;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,p__56509){
var map__56510 = p__56509;
var map__56510__$1 = ((((!((map__56510 == null)))?((((map__56510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56510):map__56510);
var interpolate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56510__$1,cljs.core.cst$kw$interpolate_QMARK_,cljs.core.constantly(true));
var axes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56510__$1,cljs.core.cst$kw$axes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$linear,cljs.core.cst$kw$y,cljs.core.cst$kw$linear], null));
var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,x);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var vec__56512 = cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(gadjett.collections.highest_below_x(m,x)));
var x_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56512,(0),null);
var y_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56512,(1),null);
var vec__56515 = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(gadjett.collections.lowest_above_x(m,x)));
var x_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56515,(0),null);
var y_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56515,(1),null);
if(cljs.core.truth_((function (){var and__6209__auto__ = x_below;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = x_above;
if(cljs.core.truth_(and__6209__auto____$1)){
return (interpolate_QMARK_.cljs$core$IFn$_invoke$arity$2 ? interpolate_QMARK_.cljs$core$IFn$_invoke$arity$2(x_below,x_above) : interpolate_QMARK_.call(null,x_below,x_above));
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return gadjett.collections.linear_y_func(axes).call(null,x,x_below,y_below,x_above,y_above);
} else {
return null;
}
}
});

gadjett.collections.interpolate_linear_y.cljs$lang$maxFixedArity = (2);

gadjett.collections.interpolate_linear_y.cljs$lang$applyTo = (function (seq56506){
var G__56507 = cljs.core.first(seq56506);
var seq56506__$1 = cljs.core.next(seq56506);
var G__56508 = cljs.core.first(seq56506__$1);
var seq56506__$2 = cljs.core.next(seq56506__$1);
return gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic(G__56507,G__56508,seq56506__$2);
});

gadjett.collections.linear_x = (function gadjett$collections$linear_x(y,x1,y1,x2,y2){
return (x1 + (((x2 - x1) * (y - y1)) / (y2 - y1)));
});
gadjett.collections.linear_x_func = (function gadjett$collections$linear_x_func(p__56521){
var map__56525 = p__56521;
var map__56525__$1 = ((((!((map__56525 == null)))?((((map__56525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56525):map__56525);
var axes = map__56525__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56525__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56525__$1,cljs.core.cst$kw$y);
var G__56527 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__56527)){
return gadjett.collections.linear_x;
} else {
return gadjett.collections.linear_x;

}
});
gadjett.collections.below_and_above_y = (function gadjett$collections$below_and_above_y(y,p__56528,p__56529){
var vec__56536 = p__56528;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56536,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56536,(1),null);
var vec__56539 = p__56529;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56539,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56539,(1),null);
if((((y1 < y)) && ((y < y2))) || (((y1 > y)) && ((y > y2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null);
} else {
return null;
}
});
gadjett.collections.find_below_and_above_y = (function gadjett$collections$find_below_and_above_y(m,y){
var $ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,m);
var $__$1 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,$);
var $__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(gadjett.collections.below_and_above_y,y),$__$1,cljs.core.rest($__$1));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,$__$2);
});
gadjett.collections.calc_interpolated_values = (function gadjett$collections$calc_interpolated_values(m,y,interpolate_QMARK_,axes){
var $ = (function (p__56552){
var vec__56553 = p__56552;
var vec__56556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(0),null);
var x_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(0),null);
var y_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56556,(1),null);
var vec__56559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56553,(1),null);
var x_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56559,(0),null);
var y_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56559,(1),null);
if(cljs.core.truth_((function (){var and__6209__auto__ = y_below;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = y_above;
if(cljs.core.truth_(and__6209__auto____$1)){
return (interpolate_QMARK_.cljs$core$IFn$_invoke$arity$2 ? interpolate_QMARK_.cljs$core$IFn$_invoke$arity$2(y_below,y_above) : interpolate_QMARK_.call(null,y_below,y_above));
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return gadjett.collections.linear_x_func(axes).call(null,y,x_below,y_below,x_above,y_above);
} else {
return null;
}
});
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2($,gadjett.collections.find_below_and_above_y(m,y));
});
gadjett.collections.min_coll = (function gadjett$collections$min_coll(coll){
if(cljs.core.empty_QMARK_(coll)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,coll);
}
});
/**
 * Usage:
 * 
 *   (interpolate-linear-x m y :interpolate? interpolate? :axes axes :select-func select-func)
 * 
 *   returnes the interpolated x for a given y acording to the select-func thats passed
 * 
 *   :interpolate? a predicate for deciding eather to calc th interpolation or not.
 *   :axes a map that defines what are the axes scales
 *   :select-func what functionality to use if there are multiple interpolated values
 * 
 *   for instance:
 * 
 *   (interpolate-linear-x {10 30 20 50 70 60}}) => 20
 */
gadjett.collections.interpolate_linear_x = (function gadjett$collections$interpolate_linear_x(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56569 = arguments.length;
var i__7297__auto___56570 = (0);
while(true){
if((i__7297__auto___56570 < len__7296__auto___56569)){
args__7303__auto__.push((arguments[i__7297__auto___56570]));

var G__56571 = (i__7297__auto___56570 + (1));
i__7297__auto___56570 = G__56571;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic = (function (m,y,p__56565){
var map__56566 = p__56565;
var map__56566__$1 = ((((!((map__56566 == null)))?((((map__56566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56566):map__56566);
var interpolate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56566__$1,cljs.core.cst$kw$interpolate_QMARK_,cljs.core.constantly(true));
var axes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56566__$1,cljs.core.cst$kw$axes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$linear,cljs.core.cst$kw$y,cljs.core.cst$kw$linear], null));
var select_func = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56566__$1,cljs.core.cst$kw$select_DASH_func,gadjett.collections.min_coll);
var values = gadjett.collections.find_keys_with_value(m,y);
var interpolated_values = gadjett.collections.calc_interpolated_values(m,y,interpolate_QMARK_,axes);
var G__56568 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(values,interpolated_values);
return (select_func.cljs$core$IFn$_invoke$arity$1 ? select_func.cljs$core$IFn$_invoke$arity$1(G__56568) : select_func.call(null,G__56568));
});

gadjett.collections.interpolate_linear_x.cljs$lang$maxFixedArity = (2);

gadjett.collections.interpolate_linear_x.cljs$lang$applyTo = (function (seq56562){
var G__56563 = cljs.core.first(seq56562);
var seq56562__$1 = cljs.core.next(seq56562);
var G__56564 = cljs.core.first(seq56562__$1);
var seq56562__$2 = cljs.core.next(seq56562__$1);
return gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic(G__56563,G__56564,seq56562__$2);
});

gadjett.collections.linear_equation = (function gadjett$collections$linear_equation(x1,y1,x2,y2){
var a = ((y1 - y2) / (x1 - x2));
var b = (y1 - (a * x1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});
gadjett.collections.log_x_linear_equation = (function gadjett$collections$log_x_linear_equation(x1,y1,x2,y2){
var a = ((y1 - y2) / (Math.log(x1) - Math.log(x2)));
var b = (y1 - (a * Math.log(x1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
});
gadjett.collections.linear_equation_func = (function gadjett$collections$linear_equation_func(p__56572){
var map__56576 = p__56572;
var map__56576__$1 = ((((!((map__56576 == null)))?((((map__56576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56576):map__56576);
var axes = map__56576__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56576__$1,cljs.core.cst$kw$y);
var G__56578 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__56578)){
return gadjett.collections.linear_equation;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log,cljs.core.cst$kw$linear], null),G__56578)){
return gadjett.collections.log_x_linear_equation;
} else {
return gadjett.collections.linear_equation;

}
}
});
gadjett.collections.intersection_point = (function gadjett$collections$intersection_point(a1,b1,a2,b2){
var x = ((b2 - b1) / (a1 - a2));
var y = ((a1 * x) + b1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
gadjett.collections.log_x_intersection_point = (function gadjett$collections$log_x_intersection_point(a1,b1,a2,b2){
var x = ((b2 - b1) / (a1 - a2));
var y = ((a1 * x) + b1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.exp(x),y], null);
});
gadjett.collections.intersection_point_func = (function gadjett$collections$intersection_point_func(p__56579){
var map__56583 = p__56579;
var map__56583__$1 = ((((!((map__56583 == null)))?((((map__56583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56583):map__56583);
var axes = map__56583__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56583__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56583__$1,cljs.core.cst$kw$y);
var G__56585 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__56585)){
return gadjett.collections.intersection_point;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log,cljs.core.cst$kw$linear], null),G__56585)){
return gadjett.collections.log_x_intersection_point;
} else {
return gadjett.collections.intersection_point;

}
}
});
gadjett.collections.intersection_point_from_2_lines_points = (function gadjett$collections$intersection_point_from_2_lines_points(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56609 = arguments.length;
var i__7297__auto___56610 = (0);
while(true){
if((i__7297__auto___56610 < len__7296__auto___56609)){
args__7303__auto__.push((arguments[i__7297__auto___56610]));

var G__56611 = (i__7297__auto___56610 + (1));
i__7297__auto___56610 = G__56611;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic = (function (p__56589,p__56590,p__56591){
var vec__56592 = p__56589;
var ax1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56592,(0),null);
var ay1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56592,(1),null);
var ax2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56592,(2),null);
var ay2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56592,(3),null);
var vec__56595 = p__56590;
var bx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56595,(0),null);
var by1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56595,(1),null);
var bx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56595,(2),null);
var by2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56595,(3),null);
var map__56598 = p__56591;
var map__56598__$1 = ((((!((map__56598 == null)))?((((map__56598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56598):map__56598);
var axes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56598__$1,cljs.core.cst$kw$axes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$linear,cljs.core.cst$kw$y,cljs.core.cst$kw$linear], null));
var vec__56600 = gadjett.collections.linear_equation_func(axes).call(null,ax1,ay1,ax2,ay2);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56600,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56600,(1),null);
var vec__56603 = gadjett.collections.linear_equation_func(axes).call(null,bx1,by1,bx2,by2);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56603,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56603,(1),null);
var vec__56606 = gadjett.collections.intersection_point_func(axes).call(null,a1,b1,a2,b2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56606,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56606,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});

gadjett.collections.intersection_point_from_2_lines_points.cljs$lang$maxFixedArity = (2);

gadjett.collections.intersection_point_from_2_lines_points.cljs$lang$applyTo = (function (seq56586){
var G__56587 = cljs.core.first(seq56586);
var seq56586__$1 = cljs.core.next(seq56586);
var G__56588 = cljs.core.first(seq56586__$1);
var seq56586__$2 = cljs.core.next(seq56586__$1);
return gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic(G__56587,G__56588,seq56586__$2);
});

/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_keys_in_order = (function gadjett$collections$select_keys_in_order(m,keyseq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(m,keyseq);
});
gadjett.collections.select_vals = (function gadjett$collections$select_vals(map,keyseq){
return cljs.core.vals(cljs.core.select_keys(map,keyseq));
});
/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_vals_in_order = (function gadjett$collections$select_vals_in_order(map,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56612_SHARP_,p2__56613_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__56612_SHARP_,(map.cljs$core$IFn$_invoke$arity$1 ? map.cljs$core$IFn$_invoke$arity$1(p2__56613_SHARP_) : map.call(null,p2__56613_SHARP_)));
}),cljs.core.PersistentVector.EMPTY,ks);
});
gadjett.collections.flatten_keys_STAR_ = (function gadjett$collections$flatten_keys_STAR_(a,ks,m){
if(cljs.core.map_QMARK_(m)){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56621){
var vec__56622 = p__56621;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56622,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56622,(1),null);
return gadjett$collections$flatten_keys_STAR_(a,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ks,k),v);
}),cljs.core.seq(m)));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,ks,m);
}
});
/**
 * Thanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)
 */
gadjett.collections.flatten_keys = (function gadjett$collections$flatten_keys(m){
return gadjett.collections.flatten_keys_STAR_(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});
gadjett.collections.unflatten_keys = (function gadjett$collections$unflatten_keys(m){
return cljs.core.reduce_kv((function (a,b,c){
return cljs.core.assoc_in(a,b,c);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Creates a map with n leaves which are nested values of m.
 * 
 *    (= n (count (flatten-keys (take-from-map n m)))))))
 */
gadjett.collections.take_from_map = (function gadjett$collections$take_from_map(n,m){
return gadjett.collections.unflatten_keys(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,gadjett.collections.flatten_keys(m))));
});
gadjett.collections.recursive_vals = (function gadjett$collections$recursive_vals(m){
if(cljs.core.truth_(m)){
return cljs.core.vals(gadjett.collections.flatten_keys(m));
} else {
return null;
}
});
gadjett.collections.sort_keys_by = (function gadjett$collections$sort_keys_by(a_func,a_map){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(a_func,a_map));
});
gadjett.collections.deep_merge_STAR_ = (function gadjett$collections$deep_merge_STAR_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56626 = arguments.length;
var i__7297__auto___56627 = (0);
while(true){
if((i__7297__auto___56627 < len__7296__auto___56626)){
args__7303__auto__.push((arguments[i__7297__auto___56627]));

var G__56628 = (i__7297__auto___56627 + (1));
i__7297__auto___56627 = G__56628;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var f = (function (old,new$){
if((cljs.core.map_QMARK_(old)) && (cljs.core.map_QMARK_(new$))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(gadjett.collections.deep_merge_STAR_,cljs.core.array_seq([old,new$], 0));
} else {
return new$;
}
});
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,f,maps);
} else {
return cljs.core.last(maps);
}
});

gadjett.collections.deep_merge_STAR_.cljs$lang$maxFixedArity = (0);

gadjett.collections.deep_merge_STAR_.cljs$lang$applyTo = (function (seq56625){
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56625));
});

gadjett.collections.deep_merge = (function gadjett$collections$deep_merge(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56630 = arguments.length;
var i__7297__auto___56631 = (0);
while(true){
if((i__7297__auto___56631 < len__7296__auto___56630)){
args__7303__auto__.push((arguments[i__7297__auto___56631]));

var G__56632 = (i__7297__auto___56631 + (1));
i__7297__auto___56631 = G__56632;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,maps);
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error("Assert failed: (every? map? maps)"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,gadjett.collections.deep_merge_STAR_,maps__$1);
});

gadjett.collections.deep_merge.cljs$lang$maxFixedArity = (0);

gadjett.collections.deep_merge.cljs$lang$applyTo = (function (seq56629){
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56629));
});

gadjett.collections.branches_and_leaves = (function gadjett$collections$branches_and_leaves(m){

var $ = cljs.core.tree_seq(cljs.core.coll_QMARK_,(function (p1__56633_SHARP_){
if(cljs.core.map_QMARK_(p1__56633_SHARP_)){
return cljs.core.vals(p1__56633_SHARP_);
} else {
return p1__56633_SHARP_;
}
}),m);
var $__$1 = cljs.core.group_by(cljs.core.coll_QMARK_,$);
var $__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$1,true,(function (){var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2($__$1,true);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var $__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3($__$2,false,(function (){var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2($__$2,false);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return clojure.set.rename_keys($__$3,new cljs.core.PersistentArrayMap(null, 2, [true,cljs.core.cst$kw$branches,false,cljs.core.cst$kw$leaves], null));
});
gadjett.collections.filter_branches = (function gadjett$collections$filter_branches(m,p){

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$kw$branches.cljs$core$IFn$_invoke$arity$1(gadjett.collections.branches_and_leaves(m)));
});
/**
 * check if index `idx` is in range of vector `v`. More efficiant than ```(get v idx)```
 */
gadjett.collections.out_of_bound_QMARK_ = (function gadjett$collections$out_of_bound_QMARK_(v,idx){
return ((cljs.core.count(v) <= idx)) || (((0) > idx));
});
/**
 * Usage: 
 * 
 *  (partition-between pred coll)
 * 
 *  splits a collection between two items according to the pred.
 *  which means split the sequence on breaking point.
 * 
 *   See: [here](http://stackoverflow.com/questions/23207490/partition-a-seq-by-a-windowing-predicate-in-clojure)
 * 
 *   For instance:
 *  split when ascending serie breaks.
 * 
 *  (partition-between (fn [a b] (> a b)) [1 2 4 9 4 6 8 2]) => [[1 2 4 9] [4 6 8] [2]]
 */
gadjett.collections.partition_between = (function gadjett$collections$partition_between(pred_QMARK_,coll){
var switch$ = cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.not_EQ_,true,cljs.core.map.cljs$core$IFn$_invoke$arity$3(pred_QMARK_,coll,cljs.core.rest(coll)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.first),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,coll,switch$)));
});
/**
 * Ensure `s` is a sequence: if `s` is a sequence returns it; otherwise returns (s)
 */
gadjett.collections.seqify = (function gadjett$collections$seqify(s){
if(cljs.core.seq_QMARK_(s)){
return s;
} else {
var x__7055__auto__ = s;
return cljs.core._conj(cljs.core.List.EMPTY,x__7055__auto__);
}
});
gadjett.collections.edn_zip = (function gadjett$collections$edn_zip(root){
return clojure.zip.zipper((function (p1__56634_SHARP_){
return (cljs.core.vector_QMARK_(p1__56634_SHARP_)) || (cljs.core.map_QMARK_(p1__56634_SHARP_)) || (cljs.core.seq_QMARK_(p1__56634_SHARP_));
}),(function (node){
if(cljs.core.vector_QMARK_(node)){
return cljs.core.vec(node);
} else {
if(cljs.core.map_QMARK_(node)){
return cljs.core.vec(node);
} else {
if(cljs.core.seq_QMARK_(node)){
return cljs.core.seq(node);
} else {
return null;
}
}
}
}),(function (node,children){
return cljs.core.with_meta(((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null))),cljs.core.meta(node));
}),root);
});
gadjett.collections.loc_my_replace = (function gadjett$collections$loc_my_replace(smap,loc){
var temp__4655__auto__ = cljs.core.find(smap,clojure.zip.node(loc));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__56641 = temp__4655__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56641,(0),null);
var vec__56644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56641,(1),null);
var seq__56645 = cljs.core.seq(vec__56644);
var first__56646 = cljs.core.first(seq__56645);
var seq__56645__$1 = cljs.core.next(seq__56645);
var replacement = first__56646;
var values = seq__56645__$1;
var $ = loc;
var $__$1 = clojure.zip.replace($,replacement);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function ($,$__$1,vec__56641,_,vec__56644,seq__56645,first__56646,seq__56645__$1,replacement,values,temp__4655__auto__){
return (function (agg,v){
return clojure.zip.insert_right(agg,v);
});})($,$__$1,vec__56641,_,vec__56644,seq__56645,first__56646,seq__56645__$1,replacement,values,temp__4655__auto__))
,$__$1,cljs.core.reverse(values));
} else {
return loc;
}
});
/**
 * Recursively transforms `form` by replacing keys in `smap` with their
 *   values, spliced. The values in `smap` must be sequences. Like clojure.walk/prewalk-replace but supports list `in values`.
 */
gadjett.collections.my_replace = (function gadjett$collections$my_replace(smap,form){
if(cljs.core.every_QMARK_(cljs.core.seq_QMARK_,cljs.core.vals(smap))){
} else {
throw (new Error("Assert failed: (every? seq? (vals smap))"));
}

var loc = gadjett.collections.edn_zip(form);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_(loc))){
return clojure.zip.root(loc);
} else {
var G__56647 = clojure.zip.next(gadjett.collections.loc_my_replace(smap,loc));
loc = G__56647;
continue;
}
break;
}
});
/**
 * compact an expression by taking only the first `max-elements-in-coll` from collections and first `max-chars-in-str` from strings. It works recursively. It is useful for logging and reporting.
 */
gadjett.collections.compact = (function gadjett$collections$compact(var_args){
var args__7303__auto__ = [];
var len__7296__auto___56655 = arguments.length;
var i__7297__auto___56656 = (0);
while(true){
if((i__7297__auto___56656 < len__7296__auto___56655)){
args__7303__auto__.push((arguments[i__7297__auto___56656]));

var G__56657 = (i__7297__auto___56656 + (1));
i__7297__auto___56656 = G__56657;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__56652){
var map__56653 = p__56652;
var map__56653__$1 = ((((!((map__56653 == null)))?((((map__56653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56653):map__56653);
var args = map__56653__$1;
var max_elements_in_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56653__$1,cljs.core.cst$kw$max_DASH_elements_DASH_in_DASH_coll,(10));
var max_chars_in_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56653__$1,cljs.core.cst$kw$max_DASH_chars_DASH_in_DASH_str,(20));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,true)){
return x;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,false)){
return x;
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(x,(0),max_chars_in_str);
} else {
if(cljs.core.map_QMARK_(x)){
return gadjett.collections.take_from_map(max_elements_in_coll,gadjett.collections.map_object(((function (map__56653,map__56653__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__56648_SHARP_){
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(p1__56648_SHARP_,cljs.core.array_seq([args], 0));
});})(map__56653,map__56653__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.seqable_QMARK_(x)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_elements_in_coll,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__56653,map__56653__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__56649_SHARP_){
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(p1__56649_SHARP_,cljs.core.array_seq([args], 0));
});})(map__56653,map__56653__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.array_QMARK_(x)){
return [cljs.core.str("***["),cljs.core.str(cljs.core.type(x)),cljs.core.str("]***")].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Function,cljs.core.type(x))){
return "lambda()";
} else {
if((x instanceof Object)){
return [cljs.core.str("***["),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str(cljs.core.type(x))].join(''),(0),(15))),cljs.core.str("]***")].join('');
} else {
return [cljs.core.str("***["),cljs.core.str(cljs.core.type(x)),cljs.core.str("]***")].join('');

}
}
}
}
}
}
}
}
}
}
}
});

gadjett.collections.compact.cljs$lang$maxFixedArity = (1);

gadjett.collections.compact.cljs$lang$applyTo = (function (seq56650){
var G__56651 = cljs.core.first(seq56650);
var seq56650__$1 = cljs.core.next(seq56650);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(G__56651,seq56650__$1);
});

