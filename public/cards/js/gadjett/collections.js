// Compiled by ClojureScript 1.9.36 {}
goog.provide('gadjett.collections');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.zip');
gadjett.collections.to_regular_array = (function gadjett$collections$to_regular_array(arr){
return (new cljs.core.IndexedSeq(arr,(0),null));
});
gadjett.collections._EQ_without_keys_QMARK_ = (function gadjett$collections$_EQ_without_keys_QMARK_(obj_a,obj_b,keys_list){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__70582_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__70582_SHARP_,keys_list);
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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,vec);
});
gadjett.collections.map_2d_vec = (function gadjett$collections$map_2d_vec(f,m){
return cljs.core.map.call(null,(function (p__70587){
var vec__70588 = p__70587;
var k = cljs.core.nth.call(null,vec__70588,(0),null);
var id = cljs.core.nth.call(null,vec__70588,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,id)], null);
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
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec.call(null,f,m));
});
gadjett.collections.map_object_with_key = (function gadjett$collections$map_object_with_key(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__70595){
var vec__70596 = p__70595;
var a = cljs.core.nth.call(null,vec__70596,(0),null);
var b = cljs.core.nth.call(null,vec__70596,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,f.call(null,a,b)], null);
}),m));
});
gadjett.collections.map_2d_vec_kv = (function gadjett$collections$map_2d_vec_kv(fk,fv,m){
return cljs.core.map.call(null,(function (p__70603){
var vec__70604 = p__70603;
var k = cljs.core.nth.call(null,vec__70604,(0),null);
var id = cljs.core.nth.call(null,vec__70604,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fk.call(null,k),fv.call(null,id)], null);
}),m);
});
gadjett.collections.map_object_kv = (function gadjett$collections$map_object_kv(fk,fv,m){
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec_kv.call(null,fk,fv,m));
});
/**
 * Turns a hash map inside out.
 *   See:  [here](http://stackoverflow.com/a/23653784/813665)
 */
gadjett.collections.map_reverse_hierarchy = (function gadjett$collections$map_reverse_hierarchy(m){
var or__6221__auto__ = cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.conj,(function (){var iter__7001__auto__ = (function gadjett$collections$map_reverse_hierarchy_$_iter__70715(s__70716){
return (new cljs.core.LazySeq(null,(function (){
var s__70716__$1 = s__70716;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__70716__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var vec__70736 = cljs.core.first.call(null,xs__5205__auto__);
var k1 = cljs.core.nth.call(null,vec__70736,(0),null);
var v1 = cljs.core.nth.call(null,vec__70736,(1),null);
var iterys__6997__auto__ = ((function (s__70716__$1,vec__70736,k1,v1,xs__5205__auto__,temp__4657__auto__){
return (function gadjett$collections$map_reverse_hierarchy_$_iter__70715_$_iter__70717(s__70718){
return (new cljs.core.LazySeq(null,((function (s__70716__$1,vec__70736,k1,v1,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__70718__$1 = s__70718;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__70718__$1);
if(temp__4657__auto____$1){
var s__70718__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__70718__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__70718__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__70720 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__70719 = (0);
while(true){
if((i__70719 < size__7000__auto__)){
var vec__70745 = cljs.core._nth.call(null,c__6999__auto__,i__70719);
var k2 = cljs.core.nth.call(null,vec__70745,(0),null);
var v2 = cljs.core.nth.call(null,vec__70745,(1),null);
cljs.core.chunk_append.call(null,b__70720,cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false));

var G__70751 = (i__70719 + (1));
i__70719 = G__70751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70720),gadjett$collections$map_reverse_hierarchy_$_iter__70715_$_iter__70717.call(null,cljs.core.chunk_rest.call(null,s__70718__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__70720),null);
}
} else {
var vec__70748 = cljs.core.first.call(null,s__70718__$2);
var k2 = cljs.core.nth.call(null,vec__70748,(0),null);
var v2 = cljs.core.nth.call(null,vec__70748,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([k2,cljs.core.PersistentArrayMap.fromArray([k1,v2], true, false)], true, false),gadjett$collections$map_reverse_hierarchy_$_iter__70715_$_iter__70717.call(null,cljs.core.rest.call(null,s__70718__$2)));
}
} else {
return null;
}
break;
}
});})(s__70716__$1,vec__70736,k1,v1,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__70716__$1,vec__70736,k1,v1,xs__5205__auto__,temp__4657__auto__))
;
var fs__6998__auto__ = cljs.core.seq.call(null,iterys__6997__auto__.call(null,v1));
if(fs__6998__auto__){
return cljs.core.concat.call(null,fs__6998__auto__,gadjett$collections$map_reverse_hierarchy_$_iter__70715.call(null,cljs.core.rest.call(null,s__70716__$1)));
} else {
var G__70752 = cljs.core.rest.call(null,s__70716__$1);
s__70716__$1 = G__70752;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,m);
})());
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
gadjett.collections.mean = (function gadjett$collections$mean(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return (0);
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,x) / cljs.core.count.call(null,x));
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
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)),s);
});
gadjett.collections.range_with_end = (function gadjett$collections$range_with_end(var_args){
var args70753 = [];
var len__7296__auto___70756 = arguments.length;
var i__7297__auto___70757 = (0);
while(true){
if((i__7297__auto___70757 < len__7296__auto___70756)){
args70753.push((arguments[i__7297__auto___70757]));

var G__70758 = (i__7297__auto___70757 + (1));
i__7297__auto___70757 = G__70758;
continue;
} else {
}
break;
}

var G__70755 = args70753.length;
switch (G__70755) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70753.length)].join('')));

}
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1 = (function (end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3 = (function (start,end,steps){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end,steps)], null);
});

gadjett.collections.range_with_end.cljs$lang$maxFixedArity = 3;

gadjett.collections.range_till_end = (function gadjett$collections$range_till_end(var_args){
var args__7303__auto__ = [];
var len__7296__auto___70764 = arguments.length;
var i__7297__auto___70765 = (0);
while(true){
if((i__7297__auto___70765 < len__7296__auto___70764)){
args__7303__auto__.push((arguments[i__7297__auto___70765]));

var G__70766 = (i__7297__auto___70765 + (1));
i__7297__auto___70765 = G__70766;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__70761 = cljs.core.apply.call(null,gadjett.collections.range_with_end,args);
var end = cljs.core.nth.call(null,vec__70761,(0),null);
var lis = cljs.core.nth.call(null,vec__70761,(1),null);
return cljs.core.concat.call(null,lis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
});

gadjett.collections.range_till_end.cljs$lang$maxFixedArity = (0);

gadjett.collections.range_till_end.cljs$lang$applyTo = (function (seq70760){
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70760));
});

gadjett.collections.append_cyclic = (function gadjett$collections$append_cyclic(lst,a){
if(cljs.core.seq.call(null,lst)){
return cljs.core.concat.call(null,cljs.core.rest.call(null,lst),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
} else {
return lst;
}
});
gadjett.collections.assoc_cyclic = (function gadjett$collections$assoc_cyclic(var_args){
var args70767 = [];
var len__7296__auto___70770 = arguments.length;
var i__7297__auto___70771 = (0);
while(true){
if((i__7297__auto___70771 < len__7296__auto___70770)){
args70767.push((arguments[i__7297__auto___70771]));

var G__70772 = (i__7297__auto___70771 + (1));
i__7297__auto___70771 = G__70772;
continue;
} else {
}
break;
}

var G__70769 = args70767.length;
switch (G__70769) {
case 3:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args70767.length)].join('')));

}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3 = (function (coll,k,v){
if(cljs.core.contains_QMARK_.call(null,coll,k)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,gadjett.collections.append_cyclic.call(null,coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4 = (function (coll,k,v,n){
if((cljs.core.count.call(null,coll) < n)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return gadjett.collections.assoc_cyclic.call(null,coll,k,v);
}
});

gadjett.collections.assoc_cyclic.cljs$lang$maxFixedArity = 4;

gadjett.collections.max_and_min = (function gadjett$collections$max_and_min(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.juxt.call(null,(function (p1__70774_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__70774_SHARP_);
}),(function (p1__70775_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__70775_SHARP_);
})).call(null,x);
}
});
gadjett.collections.compactize_map = (function gadjett$collections$compactize_map(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
/**
 * Run a function on the elements of a map and keep only those elements for which
 *   the function returns true
 */
gadjett.collections.filter_map = (function gadjett$collections$filter_map(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,f,cljs.core.val),m));
});
gadjett.collections.abs = (function gadjett$collections$abs(x){
var x__6552__auto__ = x;
var y__6553__auto__ = (- x);
return ((x__6552__auto__ > y__6553__auto__) ? x__6552__auto__ : y__6553__auto__);
});
gadjett.collections.nearest_of_ss = (function gadjett$collections$nearest_of_ss(ss,x){
var greater = cljs.core.first.call(null,cljs.core.subseq.call(null,ss,cljs.core._GT__EQ_,x));
var smaller = cljs.core.first.call(null,cljs.core.rsubseq.call(null,ss,cljs.core._LT__EQ_,x));
return cljs.core.apply.call(null,cljs.core.min_key,((function (greater,smaller){
return (function (p1__70776_SHARP_){
return gadjett.collections.abs.call(null,(p1__70776_SHARP_ - x));
});})(greater,smaller))
,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [greater,smaller], null)));
});
gadjett.collections.nearest_of_seq = (function gadjett$collections$nearest_of_seq(a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
return b;
} else {
return cljs.core.map.call(null,cljs.core.partial.call(null,gadjett.collections.nearest_of_ss,cljs.core.apply.call(null,cljs.core.sorted_set,a)),b);
}
});
gadjett.collections.map_to_object = (function gadjett$collections$map_to_object(f,lst){
return cljs.core.zipmap.call(null,lst,cljs.core.map.call(null,f,lst));
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
return cljs.core.map_indexed.call(null,(function (i,v){
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
return cljs.core.zipmap.call(null,cljs.core.map.call(null,f,s),s);
});
gadjett.collections.map_to_object_with_index = (function gadjett$collections$map_to_object_with_index(f,s){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (p1__70777_SHARP_,p2__70778_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__70777_SHARP_,f.call(null,p2__70778_SHARP_)],null));
}),s));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
gadjett.collections.dissoc_in = (function gadjett$collections$dissoc_in(m,p__70779){
var vec__70783 = p__70779;
var seq__70784 = cljs.core.seq.call(null,vec__70783);
var first__70785 = cljs.core.first.call(null,seq__70784);
var seq__70784__$1 = cljs.core.next.call(null,seq__70784);
var k = first__70785;
var ks = seq__70784__$1;
var keys = vec__70783;
if(ks){
var temp__4655__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__4655__auto__)){
var nextmap = temp__4655__auto__;
var newmap = gadjett$collections$dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
/**
 * Splits a collection to items where the separator is a repetition of at least n elements that satisfy pred
 *   inspired by: [this question](http://stackoverflow.com/a/23555616/813665)
 */
gadjett.collections.split_by_predicate = (function gadjett$collections$split_by_predicate(coll,pred,n){
var part = cljs.core.partition_by.call(null,pred,coll);
var ppart = cljs.core.partition_by.call(null,((function (part){
return (function (x){
return ((cljs.core.count.call(null,x) >= n)) && (cljs.core.every_QMARK_.call(null,pred,x));
});})(part))
,part);
return cljs.core.map.call(null,((function (part,ppart){
return (function (p1__70786_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__70786_SHARP_);
});})(part,ppart))
,ppart);
});
/**
 * Receives a collection of lengths and returns a list of start and end positions
 */
gadjett.collections.positions = (function gadjett$collections$positions(coll_of_lengths,maximal_value){
var end_pos = cljs.core.reductions.call(null,cljs.core._PLUS_,coll_of_lengths);
var start_pos = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),end_pos);
return cljs.core.map.call(null,((function (end_pos,start_pos){
return (function (p1__70787_SHARP_,p2__70788_SHARP_){
var x__7055__auto__ = (function (){var x__6559__auto__ = maximal_value;
var y__6560__auto__ = p1__70787_SHARP_;
return ((x__6559__auto__ < y__6560__auto__) ? x__6559__auto__ : y__6560__auto__);
})();
return cljs.core._conj.call(null,(function (){var x__7055__auto____$1 = (function (){var x__6559__auto__ = maximal_value;
var y__6560__auto__ = p2__70788_SHARP_;
return ((x__6559__auto__ < y__6560__auto__) ? x__6559__auto__ : y__6560__auto__);
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
});})(end_pos,start_pos))
,start_pos,end_pos);
});
/**
 * Checks if m1 is a submap of m2.
 *   Map m1 is a submap of m2 if all key/value pairs in m1 exist in m2
 */
gadjett.collections.submap_QMARK_ = (function gadjett$collections$submap_QMARK_(m1,m2){
return cljs.core._EQ_.call(null,m1,cljs.core.select_keys.call(null,m2,cljs.core.keys.call(null,m1)));
});
gadjett.collections.subsequence = (function gadjett$collections$subsequence(coll,start,end){
return cljs.core.take.call(null,(end - start),cljs.core.drop.call(null,start,coll));
});
gadjett.collections.split_by_predicate_opt = (function gadjett$collections$split_by_predicate_opt(coll,pred,n,d){
var lengths = cljs.core.map.call(null,(function (p1__70789_SHARP_){
return (d * p1__70789_SHARP_);
}),cljs.core.map.call(null,cljs.core.count,gadjett.collections.split_by_predicate.call(null,cljs.core.take_nth.call(null,d,coll),pred,(n / d))));
var pos = gadjett.collections.positions.call(null,lengths,cljs.core.count.call(null,coll));
return pos;
});
gadjett.collections.index_of = (function gadjett$collections$index_of(s,element){
var or__6221__auto__ = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__70790_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__70790_SHARP_),element);
}),cljs.core.map_indexed.call(null,(function (p1__70791_SHARP_,p2__70792_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__70791_SHARP_,p2__70792_SHARP_],null));
}),s)));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (-1);
}
});
gadjett.collections.display_sequence = (function gadjett$collections$display_sequence(long_seq,short_seq,value,abs_step){
var old_step = (cljs.core.second.call(null,short_seq) - cljs.core.first.call(null,short_seq));
var step = ((cljs.core.second.call(null,long_seq) - cljs.core.first.call(null,long_seq)) * abs_step);
var position_in_old_sequence = ((value - cljs.core.first.call(null,short_seq)) / old_step);
if((((0) <= position_in_old_sequence)) && ((position_in_old_sequence <= (4)))){
return cljs.core.range.call(null,(value - (step * position_in_old_sequence)),(value + (step * ((5) - position_in_old_sequence))),step);
} else {
if(cljs.core._EQ_.call(null,position_in_old_sequence,(5))){
return cljs.core.range.call(null,(value - (step * (position_in_old_sequence - (1)))),(value + step),step);
} else {
if(cljs.core.empty_QMARK_.call(null,short_seq)){
return cljs.core.range.call(null,(value - step),(value + ((4) * step)),step);
} else {
return cljs.core.range.call(null,value,(value + ((5) * step)),step);

}
}
}
});
gadjett.collections.highest_below_y = (function gadjett$collections$highest_below_y(m,v){
return cljs.core.second.call(null,cljs.core.last.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p__70797){
var vec__70798 = p__70797;
var x = cljs.core.nth.call(null,vec__70798,(0),null);
var y = cljs.core.nth.call(null,vec__70798,(1),null);
return (y <= v);
}),m)))));
});
gadjett.collections.lowest_above_y = (function gadjett$collections$lowest_above_y(m,v){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.second,cljs.core.filter.call(null,(function (p__70805){
var vec__70806 = p__70805;
var x = cljs.core.nth.call(null,vec__70806,(0),null);
var y = cljs.core.nth.call(null,vec__70806,(1),null);
return (y >= v);
}),m)))));
});
gadjett.collections.highest_below_x = (function gadjett$collections$highest_below_x(m,v){
return cljs.core.second.call(null,cljs.core.last.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__70813){
var vec__70814 = p__70813;
var x = cljs.core.nth.call(null,vec__70814,(0),null);
var y = cljs.core.nth.call(null,vec__70814,(1),null);
return (x <= v);
}),m)))));
});
gadjett.collections.lowest_above_x = (function gadjett$collections$lowest_above_x(m,v){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.sort_by.call(null,cljs.core.first,cljs.core.group_by.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__70821){
var vec__70822 = p__70821;
var x = cljs.core.nth.call(null,vec__70822,(0),null);
var y = cljs.core.nth.call(null,vec__70822,(1),null);
return (x >= v);
}),m)))));
});
gadjett.collections.find_keys_with_values_in = (function gadjett$collections$find_keys_with_values_in(m,s){
return cljs.core.filter.call(null,cljs.core.comp.call(null,s,m),cljs.core.keys.call(null,m));
});
gadjett.collections.replace_keys = (function gadjett$collections$replace_keys(coll,key_map){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__70825_SHARP_){
return cljs.core.get.call(null,key_map,p1__70825_SHARP_,p1__70825_SHARP_);
}),cljs.core.keys.call(null,coll)),cljs.core.vals.call(null,coll));
});
gadjett.collections.find_keys_with_value = (function gadjett$collections$find_keys_with_value(m,v){
return gadjett.collections.find_keys_with_values_in.call(null,m,cljs.core.PersistentHashSet.fromArray([v], true));
});
gadjett.collections.linear_y = (function gadjett$collections$linear_y(x,x1,y1,x2,y2){
return (y1 + (((y2 - y1) * (x - x1)) / (x2 - x1)));
});
gadjett.collections.log_x_linear_y = (function gadjett$collections$log_x_linear_y(x,x1,y1,x2,y2){
return (y1 + (((y2 - y1) * (Math.log(x) - Math.log(x1))) / (Math.log(x2) - Math.log(x1))));
});
gadjett.collections.linear_y_func = (function gadjett$collections$linear_y_func(p__70826){
var map__70830 = p__70826;
var map__70830__$1 = ((((!((map__70830 == null)))?((((map__70830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70830):map__70830);
var axes = map__70830__$1;
var x = cljs.core.get.call(null,map__70830__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__70830__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__70832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"linear","linear",872268697)], null),G__70832)){
return gadjett.collections.linear_y;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"linear","linear",872268697)], null),G__70832)){
return gadjett.collections.log_x_linear_y;
} else {
return gadjett.collections.linear_y;

}
}
});
gadjett.collections.interpolate_linear_y = (function gadjett$collections$interpolate_linear_y(var_args){
var args__7303__auto__ = [];
var len__7296__auto___70845 = arguments.length;
var i__7297__auto___70846 = (0);
while(true){
if((i__7297__auto___70846 < len__7296__auto___70845)){
args__7303__auto__.push((arguments[i__7297__auto___70846]));

var G__70847 = (i__7297__auto___70846 + (1));
i__7297__auto___70846 = G__70847;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,p__70836){
var map__70837 = p__70836;
var map__70837__$1 = ((((!((map__70837 == null)))?((((map__70837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70837):map__70837);
var interpolate_QMARK_ = cljs.core.get.call(null,map__70837__$1,new cljs.core.Keyword(null,"interpolate?","interpolate?",-423156286),cljs.core.constantly.call(null,true));
var axes = cljs.core.get.call(null,map__70837__$1,new cljs.core.Keyword(null,"axes","axes",1970866440),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"linear","linear",872268697)], null));
var or__6221__auto__ = cljs.core.get.call(null,m,x);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var vec__70839 = cljs.core.last.call(null,cljs.core.sort.call(null,gadjett.collections.highest_below_x.call(null,m,x)));
var x_below = cljs.core.nth.call(null,vec__70839,(0),null);
var y_below = cljs.core.nth.call(null,vec__70839,(1),null);
var vec__70842 = cljs.core.first.call(null,cljs.core.sort.call(null,gadjett.collections.lowest_above_x.call(null,m,x)));
var x_above = cljs.core.nth.call(null,vec__70842,(0),null);
var y_above = cljs.core.nth.call(null,vec__70842,(1),null);
if(cljs.core.truth_((function (){var and__6209__auto__ = x_below;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = x_above;
if(cljs.core.truth_(and__6209__auto____$1)){
return interpolate_QMARK_.call(null,x_below,x_above);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return gadjett.collections.linear_y_func.call(null,axes).call(null,x,x_below,y_below,x_above,y_above);
} else {
return null;
}
}
});

gadjett.collections.interpolate_linear_y.cljs$lang$maxFixedArity = (2);

gadjett.collections.interpolate_linear_y.cljs$lang$applyTo = (function (seq70833){
var G__70834 = cljs.core.first.call(null,seq70833);
var seq70833__$1 = cljs.core.next.call(null,seq70833);
var G__70835 = cljs.core.first.call(null,seq70833__$1);
var seq70833__$2 = cljs.core.next.call(null,seq70833__$1);
return gadjett.collections.interpolate_linear_y.cljs$core$IFn$_invoke$arity$variadic(G__70834,G__70835,seq70833__$2);
});

gadjett.collections.linear_x = (function gadjett$collections$linear_x(y,x1,y1,x2,y2){
return (x1 + (((x2 - x1) * (y - y1)) / (y2 - y1)));
});
gadjett.collections.linear_x_func = (function gadjett$collections$linear_x_func(p__70848){
var map__70852 = p__70848;
var map__70852__$1 = ((((!((map__70852 == null)))?((((map__70852.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70852.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70852):map__70852);
var axes = map__70852__$1;
var x = cljs.core.get.call(null,map__70852__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__70852__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__70854 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"linear","linear",872268697)], null),G__70854)){
return gadjett.collections.linear_x;
} else {
return gadjett.collections.linear_x;

}
});
gadjett.collections.below_and_above_y = (function gadjett$collections$below_and_above_y(y,p__70855,p__70856){
var vec__70863 = p__70855;
var x1 = cljs.core.nth.call(null,vec__70863,(0),null);
var y1 = cljs.core.nth.call(null,vec__70863,(1),null);
var vec__70866 = p__70856;
var x2 = cljs.core.nth.call(null,vec__70866,(0),null);
var y2 = cljs.core.nth.call(null,vec__70866,(1),null);
if((((y1 < y)) && ((y < y2))) || (((y1 > y)) && ((y > y2)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null);
} else {
return null;
}
});
gadjett.collections.find_below_and_above_y = (function gadjett$collections$find_below_and_above_y(m,y){
var $ = cljs.core.map.call(null,cljs.core.vec,m);
var $__$1 = cljs.core.sort_by.call(null,cljs.core.first,$);
var $__$2 = cljs.core.map.call(null,cljs.core.partial.call(null,gadjett.collections.below_and_above_y,y),$__$1,cljs.core.rest.call(null,$__$1));
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,$__$2);
});
gadjett.collections.calc_interpolated_values = (function gadjett$collections$calc_interpolated_values(m,y,interpolate_QMARK_,axes){
var $ = (function (p__70879){
var vec__70880 = p__70879;
var vec__70883 = cljs.core.nth.call(null,vec__70880,(0),null);
var x_below = cljs.core.nth.call(null,vec__70883,(0),null);
var y_below = cljs.core.nth.call(null,vec__70883,(1),null);
var vec__70886 = cljs.core.nth.call(null,vec__70880,(1),null);
var x_above = cljs.core.nth.call(null,vec__70886,(0),null);
var y_above = cljs.core.nth.call(null,vec__70886,(1),null);
if(cljs.core.truth_((function (){var and__6209__auto__ = y_below;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = y_above;
if(cljs.core.truth_(and__6209__auto____$1)){
return interpolate_QMARK_.call(null,y_below,y_above);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return gadjett.collections.linear_x_func.call(null,axes).call(null,y,x_below,y_below,x_above,y_above);
} else {
return null;
}
});
return cljs.core.keep.call(null,$,gadjett.collections.find_below_and_above_y.call(null,m,y));
});
gadjett.collections.min_coll = (function gadjett$collections$min_coll(coll){
if(cljs.core.empty_QMARK_.call(null,coll)){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.min,coll);
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
var len__7296__auto___70895 = arguments.length;
var i__7297__auto___70896 = (0);
while(true){
if((i__7297__auto___70896 < len__7296__auto___70895)){
args__7303__auto__.push((arguments[i__7297__auto___70896]));

var G__70897 = (i__7297__auto___70896 + (1));
i__7297__auto___70896 = G__70897;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic = (function (m,y,p__70892){
var map__70893 = p__70892;
var map__70893__$1 = ((((!((map__70893 == null)))?((((map__70893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70893):map__70893);
var interpolate_QMARK_ = cljs.core.get.call(null,map__70893__$1,new cljs.core.Keyword(null,"interpolate?","interpolate?",-423156286),cljs.core.constantly.call(null,true));
var axes = cljs.core.get.call(null,map__70893__$1,new cljs.core.Keyword(null,"axes","axes",1970866440),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"linear","linear",872268697)], null));
var select_func = cljs.core.get.call(null,map__70893__$1,new cljs.core.Keyword(null,"select-func","select-func",-1706031810),gadjett.collections.min_coll);
var values = gadjett.collections.find_keys_with_value.call(null,m,y);
var interpolated_values = gadjett.collections.calc_interpolated_values.call(null,m,y,interpolate_QMARK_,axes);
return select_func.call(null,cljs.core.concat.call(null,values,interpolated_values));
});

gadjett.collections.interpolate_linear_x.cljs$lang$maxFixedArity = (2);

gadjett.collections.interpolate_linear_x.cljs$lang$applyTo = (function (seq70889){
var G__70890 = cljs.core.first.call(null,seq70889);
var seq70889__$1 = cljs.core.next.call(null,seq70889);
var G__70891 = cljs.core.first.call(null,seq70889__$1);
var seq70889__$2 = cljs.core.next.call(null,seq70889__$1);
return gadjett.collections.interpolate_linear_x.cljs$core$IFn$_invoke$arity$variadic(G__70890,G__70891,seq70889__$2);
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
gadjett.collections.linear_equation_func = (function gadjett$collections$linear_equation_func(p__70898){
var map__70902 = p__70898;
var map__70902__$1 = ((((!((map__70902 == null)))?((((map__70902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70902):map__70902);
var axes = map__70902__$1;
var x = cljs.core.get.call(null,map__70902__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__70902__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__70904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"linear","linear",872268697)], null),G__70904)){
return gadjett.collections.linear_equation;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"linear","linear",872268697)], null),G__70904)){
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
gadjett.collections.intersection_point_func = (function gadjett$collections$intersection_point_func(p__70905){
var map__70909 = p__70905;
var map__70909__$1 = ((((!((map__70909 == null)))?((((map__70909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70909):map__70909);
var axes = map__70909__$1;
var x = cljs.core.get.call(null,map__70909__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__70909__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__70911 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"linear","linear",872268697)], null),G__70911)){
return gadjett.collections.intersection_point;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"log","log",-1595516004),new cljs.core.Keyword(null,"linear","linear",872268697)], null),G__70911)){
return gadjett.collections.log_x_intersection_point;
} else {
return gadjett.collections.intersection_point;

}
}
});
gadjett.collections.intersection_point_from_2_lines_points = (function gadjett$collections$intersection_point_from_2_lines_points(var_args){
var args__7303__auto__ = [];
var len__7296__auto___70935 = arguments.length;
var i__7297__auto___70936 = (0);
while(true){
if((i__7297__auto___70936 < len__7296__auto___70935)){
args__7303__auto__.push((arguments[i__7297__auto___70936]));

var G__70937 = (i__7297__auto___70936 + (1));
i__7297__auto___70936 = G__70937;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((2) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((2)),(0),null)):null);
return gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7304__auto__);
});

gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic = (function (p__70915,p__70916,p__70917){
var vec__70918 = p__70915;
var ax1 = cljs.core.nth.call(null,vec__70918,(0),null);
var ay1 = cljs.core.nth.call(null,vec__70918,(1),null);
var ax2 = cljs.core.nth.call(null,vec__70918,(2),null);
var ay2 = cljs.core.nth.call(null,vec__70918,(3),null);
var vec__70921 = p__70916;
var bx1 = cljs.core.nth.call(null,vec__70921,(0),null);
var by1 = cljs.core.nth.call(null,vec__70921,(1),null);
var bx2 = cljs.core.nth.call(null,vec__70921,(2),null);
var by2 = cljs.core.nth.call(null,vec__70921,(3),null);
var map__70924 = p__70917;
var map__70924__$1 = ((((!((map__70924 == null)))?((((map__70924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70924):map__70924);
var axes = cljs.core.get.call(null,map__70924__$1,new cljs.core.Keyword(null,"axes","axes",1970866440),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"linear","linear",872268697)], null));
var vec__70926 = gadjett.collections.linear_equation_func.call(null,axes).call(null,ax1,ay1,ax2,ay2);
var a1 = cljs.core.nth.call(null,vec__70926,(0),null);
var b1 = cljs.core.nth.call(null,vec__70926,(1),null);
var vec__70929 = gadjett.collections.linear_equation_func.call(null,axes).call(null,bx1,by1,bx2,by2);
var a2 = cljs.core.nth.call(null,vec__70929,(0),null);
var b2 = cljs.core.nth.call(null,vec__70929,(1),null);
var vec__70932 = gadjett.collections.intersection_point_func.call(null,axes).call(null,a1,b1,a2,b2);
var x = cljs.core.nth.call(null,vec__70932,(0),null);
var y = cljs.core.nth.call(null,vec__70932,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});

gadjett.collections.intersection_point_from_2_lines_points.cljs$lang$maxFixedArity = (2);

gadjett.collections.intersection_point_from_2_lines_points.cljs$lang$applyTo = (function (seq70912){
var G__70913 = cljs.core.first.call(null,seq70912);
var seq70912__$1 = cljs.core.next.call(null,seq70912);
var G__70914 = cljs.core.first.call(null,seq70912__$1);
var seq70912__$2 = cljs.core.next.call(null,seq70912__$1);
return gadjett.collections.intersection_point_from_2_lines_points.cljs$core$IFn$_invoke$arity$variadic(G__70913,G__70914,seq70912__$2);
});

/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_keys_in_order = (function gadjett$collections$select_keys_in_order(m,keyseq){
return cljs.core.map.call(null,m,keyseq);
});
gadjett.collections.select_vals = (function gadjett$collections$select_vals(map,keyseq){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,map,keyseq));
});
/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_vals_in_order = (function gadjett$collections$select_vals_in_order(map,ks){
return cljs.core.reduce.call(null,(function (p1__70938_SHARP_,p2__70939_SHARP_){
return cljs.core.conj.call(null,p1__70938_SHARP_,map.call(null,p2__70939_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks);
});
gadjett.collections.flatten_keys_STAR_ = (function gadjett$collections$flatten_keys_STAR_(a,ks,m){
if(cljs.core.map_QMARK_.call(null,m)){
if(cljs.core.seq.call(null,m)){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,(function (p__70944){
var vec__70945 = p__70944;
var k = cljs.core.nth.call(null,vec__70945,(0),null);
var v = cljs.core.nth.call(null,vec__70945,(1),null);
return gadjett$collections$flatten_keys_STAR_.call(null,a,cljs.core.conj.call(null,ks,k),v);
}),cljs.core.seq.call(null,m)));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.assoc.call(null,a,ks,m);
}
});
/**
 * Thanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)
 */
gadjett.collections.flatten_keys = (function gadjett$collections$flatten_keys(m){
return gadjett.collections.flatten_keys_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});
gadjett.collections.unflatten_keys = (function gadjett$collections$unflatten_keys(m){
return cljs.core.reduce_kv.call(null,(function (a,b,c){
return cljs.core.assoc_in.call(null,a,b,c);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Creates a map with n leaves which are nested values of m.
 * 
 *    (= n (count (flatten-keys (take-from-map n m)))))))
 */
gadjett.collections.take_from_map = (function gadjett$collections$take_from_map(n,m){
return gadjett.collections.unflatten_keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.call(null,n,gadjett.collections.flatten_keys.call(null,m))));
});
gadjett.collections.recursive_vals = (function gadjett$collections$recursive_vals(m){
if(cljs.core.truth_(m)){
return cljs.core.vals.call(null,gadjett.collections.flatten_keys.call(null,m));
} else {
return null;
}
});
gadjett.collections.sort_keys_by = (function gadjett$collections$sort_keys_by(a_func,a_map){
return cljs.core.map.call(null,cljs.core.first,cljs.core.sort_by.call(null,a_func,a_map));
});
gadjett.collections.deep_merge_STAR_ = (function gadjett$collections$deep_merge_STAR_(var_args){
var args__7303__auto__ = [];
var len__7296__auto___70949 = arguments.length;
var i__7297__auto___70950 = (0);
while(true){
if((i__7297__auto___70950 < len__7296__auto___70949)){
args__7303__auto__.push((arguments[i__7297__auto___70950]));

var G__70951 = (i__7297__auto___70950 + (1));
i__7297__auto___70950 = G__70951;
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
if((cljs.core.map_QMARK_.call(null,old)) && (cljs.core.map_QMARK_.call(null,new$))){
return cljs.core.merge_with.call(null,gadjett.collections.deep_merge_STAR_,old,new$);
} else {
return new$;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,f,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

gadjett.collections.deep_merge_STAR_.cljs$lang$maxFixedArity = (0);

gadjett.collections.deep_merge_STAR_.cljs$lang$applyTo = (function (seq70948){
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70948));
});

gadjett.collections.deep_merge = (function gadjett$collections$deep_merge(var_args){
var args__7303__auto__ = [];
var len__7296__auto___70953 = arguments.length;
var i__7297__auto___70954 = (0);
while(true){
if((i__7297__auto___70954 < len__7296__auto___70953)){
args__7303__auto__.push((arguments[i__7297__auto___70954]));

var G__70955 = (i__7297__auto___70954 + (1));
i__7297__auto___70954 = G__70955;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.filter.call(null,cljs.core.identity,maps);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error("Assert failed: (every? map? maps)"));
}

return cljs.core.apply.call(null,cljs.core.merge_with,gadjett.collections.deep_merge_STAR_,maps__$1);
});

gadjett.collections.deep_merge.cljs$lang$maxFixedArity = (0);

gadjett.collections.deep_merge.cljs$lang$applyTo = (function (seq70952){
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq70952));
});

gadjett.collections.branches_and_leaves = (function gadjett$collections$branches_and_leaves(m){

var $ = cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,(function (p1__70956_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__70956_SHARP_)){
return cljs.core.vals.call(null,p1__70956_SHARP_);
} else {
return p1__70956_SHARP_;
}
}),m);
var $__$1 = cljs.core.group_by.call(null,cljs.core.coll_QMARK_,$);
var $__$2 = cljs.core.assoc.call(null,$__$1,true,(function (){var or__6221__auto__ = cljs.core.get.call(null,$__$1,true);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var $__$3 = cljs.core.assoc.call(null,$__$2,false,(function (){var or__6221__auto__ = cljs.core.get.call(null,$__$2,false);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return clojure.set.rename_keys.call(null,$__$3,new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"branches","branches",-1240337268),false,new cljs.core.Keyword(null,"leaves","leaves",-2143630574)], null));
});
gadjett.collections.filter_branches = (function gadjett$collections$filter_branches(m,p){

return cljs.core.filter.call(null,p,new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(gadjett.collections.branches_and_leaves.call(null,m)));
});
/**
 * check if index `idx` is in range of vector `v`. More efficiant than ```(get v idx)```
 */
gadjett.collections.out_of_bound_QMARK_ = (function gadjett$collections$out_of_bound_QMARK_(v,idx){
return ((cljs.core.count.call(null,v) <= idx)) || (((0) > idx));
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
var switch$ = cljs.core.reductions.call(null,cljs.core.not_EQ_,true,cljs.core.map.call(null,pred_QMARK_,coll,cljs.core.rest.call(null,coll)));
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.first),cljs.core.partition_by.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.list,coll,switch$)));
});
/**
 * Ensure `s` is a sequence: if `s` is a sequence returns it; otherwise returns (s)
 */
gadjett.collections.seqify = (function gadjett$collections$seqify(s){
if(cljs.core.seq_QMARK_.call(null,s)){
return s;
} else {
var x__7055__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
}
});
gadjett.collections.edn_zip = (function gadjett$collections$edn_zip(root){
return clojure.zip.zipper.call(null,(function (p1__70957_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__70957_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__70957_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__70957_SHARP_));
}),(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.seq.call(null,node);
} else {
return null;
}
}
}
}),(function (node,children){
return cljs.core.with_meta.call(null,((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null))),cljs.core.meta.call(null,node));
}),root);
});
gadjett.collections.loc_my_replace = (function gadjett$collections$loc_my_replace(smap,loc){
var temp__4655__auto__ = cljs.core.find.call(null,smap,clojure.zip.node.call(null,loc));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__70964 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__70964,(0),null);
var vec__70967 = cljs.core.nth.call(null,vec__70964,(1),null);
var seq__70968 = cljs.core.seq.call(null,vec__70967);
var first__70969 = cljs.core.first.call(null,seq__70968);
var seq__70968__$1 = cljs.core.next.call(null,seq__70968);
var replacement = first__70969;
var values = seq__70968__$1;
var $ = loc;
var $__$1 = clojure.zip.replace.call(null,$,replacement);
return cljs.core.reduce.call(null,((function ($,$__$1,vec__70964,_,vec__70967,seq__70968,first__70969,seq__70968__$1,replacement,values,temp__4655__auto__){
return (function (agg,v){
return clojure.zip.insert_right.call(null,agg,v);
});})($,$__$1,vec__70964,_,vec__70967,seq__70968,first__70969,seq__70968__$1,replacement,values,temp__4655__auto__))
,$__$1,cljs.core.reverse.call(null,values));
} else {
return loc;
}
});
/**
 * Recursively transforms `form` by replacing keys in `smap` with their
 *   values, spliced. The values in `smap` must be sequences. Like clojure.walk/prewalk-replace but supports list `in values`.
 */
gadjett.collections.my_replace = (function gadjett$collections$my_replace(smap,form){
if(cljs.core.every_QMARK_.call(null,cljs.core.seq_QMARK_,cljs.core.vals.call(null,smap))){
} else {
throw (new Error("Assert failed: (every? seq? (vals smap))"));
}

var loc = gadjett.collections.edn_zip.call(null,form);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return clojure.zip.root.call(null,loc);
} else {
var G__70970 = clojure.zip.next.call(null,gadjett.collections.loc_my_replace.call(null,smap,loc));
loc = G__70970;
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
var len__7296__auto___70978 = arguments.length;
var i__7297__auto___70979 = (0);
while(true){
if((i__7297__auto___70979 < len__7296__auto___70978)){
args__7303__auto__.push((arguments[i__7297__auto___70979]));

var G__70980 = (i__7297__auto___70979 + (1));
i__7297__auto___70979 = G__70980;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__70975){
var map__70976 = p__70975;
var map__70976__$1 = ((((!((map__70976 == null)))?((((map__70976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70976):map__70976);
var args = map__70976__$1;
var max_elements_in_coll = cljs.core.get.call(null,map__70976__$1,new cljs.core.Keyword(null,"max-elements-in-coll","max-elements-in-coll",-2076494525),(10));
var max_chars_in_str = cljs.core.get.call(null,map__70976__$1,new cljs.core.Keyword(null,"max-chars-in-str","max-chars-in-str",-182482200),(20));
if(cljs.core._EQ_.call(null,x,true)){
return x;
} else {
if(cljs.core._EQ_.call(null,x,false)){
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
return cljs.core.subs.call(null,x,(0),max_chars_in_str);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return gadjett.collections.take_from_map.call(null,max_elements_in_coll,gadjett.collections.map_object.call(null,((function (map__70976,map__70976__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__70971_SHARP_){
return gadjett.collections.compact.call(null,p1__70971_SHARP_,args);
});})(map__70976,map__70976__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.seqable_QMARK_.call(null,x)){
return cljs.core.take.call(null,max_elements_in_coll,cljs.core.map.call(null,((function (map__70976,map__70976__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__70972_SHARP_){
return gadjett.collections.compact.call(null,p1__70972_SHARP_,args);
});})(map__70976,map__70976__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return [cljs.core.str("***["),cljs.core.str(cljs.core.type.call(null,x)),cljs.core.str("]***")].join('');
} else {
if(cljs.core._EQ_.call(null,Function,cljs.core.type.call(null,x))){
return "lambda()";
} else {
if((x instanceof Object)){
return [cljs.core.str("***["),cljs.core.str(cljs.core.subs.call(null,[cljs.core.str(cljs.core.type.call(null,x))].join(''),(0),(15))),cljs.core.str("]***")].join('');
} else {
return [cljs.core.str("***["),cljs.core.str(cljs.core.type.call(null,x)),cljs.core.str("]***")].join('');

}
}
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

gadjett.collections.compact.cljs$lang$applyTo = (function (seq70973){
var G__70974 = cljs.core.first.call(null,seq70973);
var seq70973__$1 = cljs.core.next.call(null,seq70973);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic(G__70974,seq70973__$1);
});


//# sourceMappingURL=collections.js.map