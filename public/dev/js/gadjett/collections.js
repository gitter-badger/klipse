// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('gadjett.collections');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.zip');
gadjett.collections.to_regular_array = (function gadjett$collections$to_regular_array(arr){
return (new cljs.core.IndexedSeq(arr,(0),null));
});
gadjett.collections._EQ_without_keys_QMARK_ = (function gadjett$collections$_EQ_without_keys_QMARK_(obj_a,obj_b,keys_list){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30150_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__30150_SHARP_,keys_list);
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30155){
var vec__30156 = p__30155;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30156,(1),null);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30163){
var vec__30164 = p__30163;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30164,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30164,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(a,b) : f.call(null,a,b))], null);
}),m));
});
gadjett.collections.map_2d_vec_kv = (function gadjett$collections$map_2d_vec_kv(fk,fv,m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30171){
var vec__30172 = p__30171;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30172,(1),null);
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
var or__6221__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,cljs.core.conj,(function (){var iter__7001__auto__ = (function gadjett$collections$map_reverse_hierarchy_$_iter__30325(s__30326){
return (new cljs.core.LazySeq(null,(function (){
var s__30326__$1 = s__30326;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__30326__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__30353 = cljs.core.first(xs__5205__auto__);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353,(0),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30353,(1),null);
var iterys__6997__auto__ = ((function (s__30326__$1,vec__30353,k1,v1,xs__5205__auto__,temp__4657__auto__){
return (function gadjett$collections$map_reverse_hierarchy_$_iter__30325_$_iter__30327(s__30328){
return (new cljs.core.LazySeq(null,((function (s__30326__$1,vec__30353,k1,v1,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__30328__$1 = s__30328;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__30328__$1);
if(temp__4657__auto____$1){
var s__30328__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__30328__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__30328__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__30330 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__30329 = (0);
while(true){
if((i__30329 < size__7000__auto__)){
var vec__30364 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__30329);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30364,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30364,(1),null);
cljs.core.chunk_append(b__30330,cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false));

var G__30373 = (i__30329 + (1));
i__30329 = G__30373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30330),gadjett$collections$map_reverse_hierarchy_$_iter__30325_$_iter__30327(cljs.core.chunk_rest(s__30328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30330),null);
}
} else {
var vec__30367 = cljs.core.first(s__30328__$2);
var k2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30367,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30367,(1),null);
return cljs.core.cons(cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false),gadjett$collections$map_reverse_hierarchy_$_iter__30325_$_iter__30327(cljs.core.rest(s__30328__$2)));
}
} else {
return null;
}
break;
}
});})(s__30326__$1,vec__30353,k1,v1,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__30326__$1,vec__30353,k1,v1,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq(iterys__6997__auto__(v1));
if(fs__6998__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__6998__auto__,gadjett$collections$map_reverse_hierarchy_$_iter__30325(cljs.core.rest(s__30326__$1)));
} else {
var G__30378 = cljs.core.rest(s__30326__$1);
s__30326__$1 = G__30378;
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
var args30396 = [];
var len__7296__auto___30403 = arguments.length;
var i__7297__auto___30404 = (0);
while(true){
if((i__7297__auto___30404 < len__7296__auto___30403)){
args30396.push((arguments[i__7297__auto___30404]));

var G__30405 = (i__7297__auto___30404 + (1));
i__7297__auto___30404 = G__30405;
continue;
} else {
}
break;
}

var G__30402 = args30396.length;
switch (G__30402) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30396.length)].join('')));

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
var len__7296__auto___30419 = arguments.length;
var i__7297__auto___30420 = (0);
while(true){
if((i__7297__auto___30420 < len__7296__auto___30419)){
args__7303__auto__.push((arguments[i__7297__auto___30420]));

var G__30422 = (i__7297__auto___30420 + (1));
i__7297__auto___30420 = G__30422;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__30416 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(gadjett.collections.range_with_end,args);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30416,(0),null);
var lis = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30416,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
});

gadjett.collections.range_till_end.cljs$lang$maxFixedArity = (0);

gadjett.collections.range_till_end.cljs$lang$applyTo = (function (seq30413){
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30413));
});

gadjett.collections.append_cyclic = (function gadjett$collections$append_cyclic(lst,a){
if(cljs.core.seq(lst)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(lst),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
} else {
return lst;
}
});
gadjett.collections.assoc_cyclic = (function gadjett$collections$assoc_cyclic(var_args){
var args30429 = [];
var len__7296__auto___30432 = arguments.length;
var i__7297__auto___30433 = (0);
while(true){
if((i__7297__auto___30433 < len__7296__auto___30432)){
args30429.push((arguments[i__7297__auto___30433]));

var G__30434 = (i__7297__auto___30433 + (1));
i__7297__auto___30433 = G__30434;
continue;
} else {
}
break;
}

var G__30431 = args30429.length;
switch (G__30431) {
case 3:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30429.length)].join('')));

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
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2((function (p1__30436_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,p1__30436_SHARP_);
}),(function (p1__30437_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,p1__30437_SHARP_);
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
return (function (p1__30440_SHARP_){
return gadjett.collections.abs((p1__30440_SHARP_ - x));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__30442_SHARP_,p2__30443_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30442_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__30443_SHARP_) : f.call(null,p2__30443_SHARP_))],null));
}),s));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
gadjett.collections.dissoc_in = (function gadjett$collections$dissoc_in(m,p__30452){
var vec__30456 = p__30452;
var seq__30457 = cljs.core.seq(vec__30456);
var first__30458 = cljs.core.first(seq__30457);
var seq__30457__$1 = cljs.core.next(seq__30457);
var k = first__30458;
var ks = seq__30457__$1;
var keys = vec__30456;
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
return (function (p1__30463_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__30463_SHARP_);
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
return (function (p1__30468_SHARP_,p2__30469_SHARP_){
var x__7055__auto__ = (function (){var x__6559__auto__ = maximal_value;
var y__6560__auto__ = p1__30468_SHARP_;
return ((x__6559__auto__ < y__6560__auto__) ? x__6559__auto__ : y__6560__auto__);
})();
return cljs.core._conj((function (){var x__7055__auto____$1 = (function (){var x__6559__auto__ = maximal_value;
var y__6560__auto__ = p2__30469_SHARP_;
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
var lengths = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30479_SHARP_){
return (d * p1__30479_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,gadjett.collections.split_by_predicate(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2(d,coll),pred,(n / d))));
var pos = gadjett.collections.positions(lengths,cljs.core.count(coll));
return pos;
});
gadjett.collections.index_of = (function gadjett$collections$index_of(s,element){
var or__6221__auto__ = cljs.core.ffirst(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30482_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__30482_SHARP_),element);
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__30483_SHARP_,p2__30484_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30483_SHARP_,p2__30484_SHARP_],null));
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
return cljs.core.second(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30489){
var vec__30490 = p__30489;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30490,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30490,(1),null);
return (y <= v);
}),m)))));
});
gadjett.collections.lowest_above_y = (function gadjett$collections$lowest_above_y(m,v){
return cljs.core.second(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30497){
var vec__30498 = p__30497;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30498,(1),null);
return (y >= v);
}),m)))));
});
gadjett.collections.highest_below_x = (function gadjett$collections$highest_below_x(m,v){
return cljs.core.second(cljs.core.last(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30505){
var vec__30506 = p__30505;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30506,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30506,(1),null);
return (x <= v);
}),m)))));
});
gadjett.collections.lowest_above_x = (function gadjett$collections$lowest_above_x(m,v){
return cljs.core.second(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__30514){
var vec__30515 = p__30514;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30515,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30515,(1),null);
return (x >= v);
}),m)))));
});
gadjett.collections.find_keys_with_values_in = (function gadjett$collections$find_keys_with_values_in(m,s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(s,m),cljs.core.keys(m));
});
gadjett.collections.replace_keys = (function gadjett$collections$replace_keys(coll,key_map){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30521_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(key_map,p1__30521_SHARP_,p1__30521_SHARP_);
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
gadjett.collections.linear_y_func = (function gadjett$collections$linear_y_func(p__30532){
var map__30536 = p__30532;
var map__30536__$1 = ((((!((map__30536 == null)))?((((map__30536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30536):map__30536);
var axes = map__30536__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30536__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30536__$1,cljs.core.cst$kw$y);
var G__30538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__30538)){
return gadjett.collections.linear_y;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log,cljs.core.cst$kw$linear], null),G__30538)){
return gadjett.collections.log_x_linear_y;
} else {
return gadjett.collections.linear_y;

}
}
});
gadjett.collections.interpolate_linear_y = (function gadjett$collections$interpolate_linear_y(var_args){
var args__7303__auto__ = [];
var len__7296__auto___30551 = arguments.length;
var i__7297__auto___30552 = (0);
while(true){
if((i__7297__auto___30552 < len__7296__auto___30551)){
args__7303__auto__.push((arguments[i__7297__auto___30552]));

var G__30553 = (i__7297__auto___30552 + (1));
i__7297__auto___30552 = G__30553;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,p__30542){
var map__30543 = p__30542;
var map__30543__$1 = ((((!((map__30543 == null)))?((((map__30543.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30543.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30543):map__30543);
var interpolate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30543__$1,cljs.core.cst$kw$interpolate_QMARK_,cljs.core.constantly(true));
var axes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30543__$1,cljs.core.cst$kw$axes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$linear,cljs.core.cst$kw$y,cljs.core.cst$kw$linear], null));
var or__6221__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,x);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var vec__30545 = cljs.core.last(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(gadjett.collections.highest_below_x(m,x)));
var x_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(0),null);
var y_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30545,(1),null);
var vec__30548 = cljs.core.first(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(gadjett.collections.lowest_above_x(m,x)));
var x_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548,(0),null);
var y_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30548,(1),null);
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

gadjett.collections.interpolate_linear_y.cljs$lang$applyTo = (function (seq30539){
var G__30540 = cljs.core.first(seq30539);
var seq30539__$1 = cljs.core.next(seq30539);
var G__30541 = cljs.core.first(seq30539__$1);
var seq30539__$2 = cljs.core.next(seq30539__$1);
return gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic(G__30540,G__30541,seq30539__$2);
});

gadjett.collections.linear_x = (function gadjett$collections$linear_x(y,x1,y1,x2,y2){
return (x1 + (((x2 - x1) * (y - y1)) / (y2 - y1)));
});
gadjett.collections.linear_x_func = (function gadjett$collections$linear_x_func(p__30554){
var map__30564 = p__30554;
var map__30564__$1 = ((((!((map__30564 == null)))?((((map__30564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30564):map__30564);
var axes = map__30564__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30564__$1,cljs.core.cst$kw$y);
var G__30566 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__30566)){
return gadjett.collections.linear_x;
} else {
return gadjett.collections.linear_x;

}
});
gadjett.collections.below_and_above_y = (function gadjett$collections$below_and_above_y(y,p__30567,p__30568){
var vec__30575 = p__30567;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30575,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30575,(1),null);
var vec__30578 = p__30568;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30578,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30578,(1),null);
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
var $ = (function (p__30591){
var vec__30592 = p__30591;
var vec__30595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30592,(0),null);
var x_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30595,(0),null);
var y_below = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30595,(1),null);
var vec__30598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30592,(1),null);
var x_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30598,(0),null);
var y_above = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30598,(1),null);
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
var len__7296__auto___30614 = arguments.length;
var i__7297__auto___30615 = (0);
while(true){
if((i__7297__auto___30615 < len__7296__auto___30614)){
args__7303__auto__.push((arguments[i__7297__auto___30615]));

var G__30616 = (i__7297__auto___30615 + (1));
i__7297__auto___30615 = G__30616;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic = (function (m,y,p__30610){
var map__30611 = p__30610;
var map__30611__$1 = ((((!((map__30611 == null)))?((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30611):map__30611);
var interpolate_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30611__$1,cljs.core.cst$kw$interpolate_QMARK_,cljs.core.constantly(true));
var axes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30611__$1,cljs.core.cst$kw$axes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$linear,cljs.core.cst$kw$y,cljs.core.cst$kw$linear], null));
var select_func = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30611__$1,cljs.core.cst$kw$select_DASH_func,gadjett.collections.min_coll);
var values = gadjett.collections.find_keys_with_value(m,y);
var interpolated_values = gadjett.collections.calc_interpolated_values(m,y,interpolate_QMARK_,axes);
var G__30613 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(values,interpolated_values);
return (select_func.cljs$core$IFn$_invoke$arity$1 ? select_func.cljs$core$IFn$_invoke$arity$1(G__30613) : select_func.call(null,G__30613));
});

gadjett.collections.interpolate_linear_x.cljs$lang$maxFixedArity = (2);

gadjett.collections.interpolate_linear_x.cljs$lang$applyTo = (function (seq30607){
var G__30608 = cljs.core.first(seq30607);
var seq30607__$1 = cljs.core.next(seq30607);
var G__30609 = cljs.core.first(seq30607__$1);
var seq30607__$2 = cljs.core.next(seq30607__$1);
return gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic(G__30608,G__30609,seq30607__$2);
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
gadjett.collections.linear_equation_func = (function gadjett$collections$linear_equation_func(p__30617){
var map__30621 = p__30617;
var map__30621__$1 = ((((!((map__30621 == null)))?((((map__30621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30621):map__30621);
var axes = map__30621__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30621__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30621__$1,cljs.core.cst$kw$y);
var G__30623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__30623)){
return gadjett.collections.linear_equation;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log,cljs.core.cst$kw$linear], null),G__30623)){
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
gadjett.collections.intersection_point_func = (function gadjett$collections$intersection_point_func(p__30626){
var map__30631 = p__30626;
var map__30631__$1 = ((((!((map__30631 == null)))?((((map__30631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30631):map__30631);
var axes = map__30631__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30631__$1,cljs.core.cst$kw$x);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30631__$1,cljs.core.cst$kw$y);
var G__30635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$linear,cljs.core.cst$kw$linear], null),G__30635)){
return gadjett.collections.intersection_point;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$log,cljs.core.cst$kw$linear], null),G__30635)){
return gadjett.collections.log_x_intersection_point;
} else {
return gadjett.collections.intersection_point;

}
}
});
gadjett.collections.intersection_point_from_2_lines_points = (function gadjett$collections$intersection_point_from_2_lines_points(var_args){
var args__7303__auto__ = [];
var len__7296__auto___30664 = arguments.length;
var i__7297__auto___30665 = (0);
while(true){
if((i__7297__auto___30665 < len__7296__auto___30664)){
args__7303__auto__.push((arguments[i__7297__auto___30665]));

var G__30666 = (i__7297__auto___30665 + (1));
i__7297__auto___30665 = G__30666;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic = (function (p__30642,p__30643,p__30644){
var vec__30645 = p__30642;
var ax1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645,(0),null);
var ay1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645,(1),null);
var ax2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645,(2),null);
var ay2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30645,(3),null);
var vec__30648 = p__30643;
var bx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30648,(0),null);
var by1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30648,(1),null);
var bx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30648,(2),null);
var by2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30648,(3),null);
var map__30651 = p__30644;
var map__30651__$1 = ((((!((map__30651 == null)))?((((map__30651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30651):map__30651);
var axes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30651__$1,cljs.core.cst$kw$axes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$linear,cljs.core.cst$kw$y,cljs.core.cst$kw$linear], null));
var vec__30654 = gadjett.collections.linear_equation_func(axes).call(null,ax1,ay1,ax2,ay2);
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30654,(0),null);
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30654,(1),null);
var vec__30657 = gadjett.collections.linear_equation_func(axes).call(null,bx1,by1,bx2,by2);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30657,(1),null);
var vec__30660 = gadjett.collections.intersection_point_func(axes).call(null,a1,b1,a2,b2);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30660,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});

gadjett.collections.intersection_point_from_2_lines_points.cljs$lang$maxFixedArity = (2);

gadjett.collections.intersection_point_from_2_lines_points.cljs$lang$applyTo = (function (seq30636){
var G__30637 = cljs.core.first(seq30636);
var seq30636__$1 = cljs.core.next(seq30636);
var G__30638 = cljs.core.first(seq30636__$1);
var seq30636__$2 = cljs.core.next(seq30636__$1);
return gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic(G__30637,G__30638,seq30636__$2);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30680_SHARP_,p2__30681_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30680_SHARP_,(map.cljs$core$IFn$_invoke$arity$1 ? map.cljs$core$IFn$_invoke$arity$1(p2__30681_SHARP_) : map.call(null,p2__30681_SHARP_)));
}),cljs.core.PersistentVector.EMPTY,ks);
});
gadjett.collections.flatten_keys_STAR_ = (function gadjett$collections$flatten_keys_STAR_(a,ks,m){
if(cljs.core.map_QMARK_(m)){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30691){
var vec__30692 = p__30691;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30692,(1),null);
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
var len__7296__auto___30702 = arguments.length;
var i__7297__auto___30703 = (0);
while(true){
if((i__7297__auto___30703 < len__7296__auto___30702)){
args__7303__auto__.push((arguments[i__7297__auto___30703]));

var G__30704 = (i__7297__auto___30703 + (1));
i__7297__auto___30703 = G__30704;
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

gadjett.collections.deep_merge_STAR_.cljs$lang$applyTo = (function (seq30697){
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30697));
});

gadjett.collections.deep_merge = (function gadjett$collections$deep_merge(var_args){
var args__7303__auto__ = [];
var len__7296__auto___30706 = arguments.length;
var i__7297__auto___30707 = (0);
while(true){
if((i__7297__auto___30707 < len__7296__auto___30706)){
args__7303__auto__.push((arguments[i__7297__auto___30707]));

var G__30708 = (i__7297__auto___30707 + (1));
i__7297__auto___30707 = G__30708;
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

gadjett.collections.deep_merge.cljs$lang$applyTo = (function (seq30705){
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30705));
});

gadjett.collections.branches_and_leaves = (function gadjett$collections$branches_and_leaves(m){

var $ = cljs.core.tree_seq(cljs.core.coll_QMARK_,(function (p1__30709_SHARP_){
if(cljs.core.map_QMARK_(p1__30709_SHARP_)){
return cljs.core.vals(p1__30709_SHARP_);
} else {
return p1__30709_SHARP_;
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
return clojure.zip.zipper((function (p1__30719_SHARP_){
return (cljs.core.vector_QMARK_(p1__30719_SHARP_)) || (cljs.core.map_QMARK_(p1__30719_SHARP_)) || (cljs.core.seq_QMARK_(p1__30719_SHARP_));
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
var vec__30729 = temp__4655__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30729,(0),null);
var vec__30732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30729,(1),null);
var seq__30733 = cljs.core.seq(vec__30732);
var first__30734 = cljs.core.first(seq__30733);
var seq__30733__$1 = cljs.core.next(seq__30733);
var replacement = first__30734;
var values = seq__30733__$1;
var $ = loc;
var $__$1 = clojure.zip.replace($,replacement);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function ($,$__$1,vec__30729,_,vec__30732,seq__30733,first__30734,seq__30733__$1,replacement,values,temp__4655__auto__){
return (function (agg,v){
return clojure.zip.insert_right(agg,v);
});})($,$__$1,vec__30729,_,vec__30732,seq__30733,first__30734,seq__30733__$1,replacement,values,temp__4655__auto__))
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
var G__30735 = clojure.zip.next(gadjett.collections.loc_my_replace(smap,loc));
loc = G__30735;
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
var len__7296__auto___30743 = arguments.length;
var i__7297__auto___30744 = (0);
while(true){
if((i__7297__auto___30744 < len__7296__auto___30743)){
args__7303__auto__.push((arguments[i__7297__auto___30744]));

var G__30745 = (i__7297__auto___30744 + (1));
i__7297__auto___30744 = G__30745;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__30740){
var map__30741 = p__30740;
var map__30741__$1 = ((((!((map__30741 == null)))?((((map__30741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30741):map__30741);
var args = map__30741__$1;
var max_elements_in_coll = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30741__$1,cljs.core.cst$kw$max_DASH_elements_DASH_in_DASH_coll,(10));
var max_chars_in_str = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30741__$1,cljs.core.cst$kw$max_DASH_chars_DASH_in_DASH_str,(20));
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
return gadjett.collections.take_from_map(max_elements_in_coll,gadjett.collections.map_object(((function (map__30741,map__30741__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__30736_SHARP_){
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(p1__30736_SHARP_,cljs.core.array_seq([args], 0));
});})(map__30741,map__30741__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.seqable_QMARK_(x)){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_elements_in_coll,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__30741,map__30741__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__30737_SHARP_){
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(p1__30737_SHARP_,cljs.core.array_seq([args], 0));
});})(map__30741,map__30741__$1,args,max_elements_in_coll,max_chars_in_str))
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

gadjett.collections.compact.cljs$lang$applyTo = (function (seq30738){
var G__30739 = cljs.core.first(seq30738);
var seq30738__$1 = cljs.core.next(seq30738);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(G__30739,seq30738__$1);
});

