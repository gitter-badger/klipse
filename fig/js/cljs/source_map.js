// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__25489){
var vec__25490 = p__25489;
var i = cljs.core.nth.call(null,vec__25490,(0),null);
var v = cljs.core.nth.call(null,vec__25490,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__25496 = seg;
var gcol = cljs.core.nth.call(null,vec__25496,(0),null);
var source = cljs.core.nth.call(null,vec__25496,(1),null);
var line = cljs.core.nth.call(null,vec__25496,(2),null);
var col = cljs.core.nth.call(null,vec__25496,(3),null);
var name = cljs.core.nth.call(null,vec__25496,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(cljs.core.truth_(temp__4657__auto__)){
var name__$1 = temp__4657__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__25505 = seg;
var gcol = cljs.core.nth.call(null,vec__25505,(0),null);
var source = cljs.core.nth.call(null,vec__25505,(1),null);
var line = cljs.core.nth.call(null,vec__25505,(2),null);
var col = cljs.core.nth.call(null,vec__25505,(3),null);
var name = cljs.core.nth.call(null,vec__25505,(4),null);
var vec__25508 = relseg;
var rgcol = cljs.core.nth.call(null,vec__25508,(0),null);
var rsource = cljs.core.nth.call(null,vec__25508,(1),null);
var rline = cljs.core.nth.call(null,vec__25508,(2),null);
var rcol = cljs.core.nth.call(null,vec__25508,(3),null);
var rname = cljs.core.nth.call(null,vec__25508,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__22615__auto__ = source;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__22615__auto__ = line;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__22615__auto__ = col;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__22615__auto__ = name;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__25513 = segmap;
var map__25513__$1 = ((((!((map__25513 == null)))?((((map__25513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25513):map__25513);
var gcol = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25513__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__25513,map__25513__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__25513,map__25513__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__25513,map__25513__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__25513,map__25513__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25513,map__25513__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__25513,map__25513__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args25515 = [];
var len__23690__auto___25521 = arguments.length;
var i__23691__auto___25522 = (0);
while(true){
if((i__23691__auto___25522 < len__23690__auto___25521)){
args25515.push((arguments[i__23691__auto___25522]));

var G__25523 = (i__23691__auto___25522 + (1));
i__23691__auto___25522 = G__25523;
continue;
} else {
}
break;
}

var G__25517 = args25515.length;
switch (G__25517) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25515.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__25518 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25525 = cljs.core.next.call(null,segs__$1);
var G__25526 = nrelseg;
var G__25527 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25525;
relseg__$1 = G__25526;
result__$1 = G__25527;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25518,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25518,(1),null);
var G__25528 = (gline + (1));
var G__25529 = cljs.core.next.call(null,lines__$1);
var G__25530 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25531 = result__$1;
gline = G__25528;
lines__$1 = G__25529;
relseg = G__25530;
result = G__25531;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__25535 = segmap;
var map__25535__$1 = ((((!((map__25535 == null)))?((((map__25535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25535):map__25535);
var gcol = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__25535__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__25535,map__25535__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__25535,map__25535__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__25532_SHARP_){
return cljs.core.conj.call(null,p1__25532_SHARP_,d__$1);
});})(map__25535,map__25535__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__25535,map__25535__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args25537 = [];
var len__23690__auto___25543 = arguments.length;
var i__23691__auto___25544 = (0);
while(true){
if((i__23691__auto___25544 < len__23690__auto___25543)){
args25537.push((arguments[i__23691__auto___25544]));

var G__25545 = (i__23691__auto___25544 + (1));
i__23691__auto___25544 = G__25545;
continue;
} else {
}
break;
}

var G__25539 = args25537.length;
switch (G__25539) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25537.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__25540 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__25547 = cljs.core.next.call(null,segs__$1);
var G__25548 = nrelseg;
var G__25549 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__25547;
relseg__$1 = G__25548;
result__$1 = G__25549;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__25540,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__25540,(1),null);
var G__25550 = (gline + (1));
var G__25551 = cljs.core.next.call(null,lines__$1);
var G__25552 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__25553 = result__$1;
gline = G__25550;
lines__$1 = G__25551;
relseg = G__25552;
result = G__25553;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__25566){
var vec__25567 = p__25566;
var _ = cljs.core.nth.call(null,vec__25567,(0),null);
var source = cljs.core.nth.call(null,vec__25567,(1),null);
var line = cljs.core.nth.call(null,vec__25567,(2),null);
var col = cljs.core.nth.call(null,vec__25567,(3),null);
var name = cljs.core.nth.call(null,vec__25567,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__25570){
var vec__25571 = p__25570;
var gcol = cljs.core.nth.call(null,vec__25571,(0),null);
var sidx = cljs.core.nth.call(null,vec__25571,(1),null);
var line = cljs.core.nth.call(null,vec__25571,(2),null);
var col = cljs.core.nth.call(null,vec__25571,(3),null);
var name = cljs.core.nth.call(null,vec__25571,(4),null);
var seg = vec__25571;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__25571,gcol,sidx,line,col,name,seg,relseg){
return (function (p__25574){
var vec__25575 = p__25574;
var _ = cljs.core.nth.call(null,vec__25575,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__25575,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__25575,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__25575,(3),null);
var lname = cljs.core.nth.call(null,vec__25575,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__22615__auto__ = name;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__25571,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__22615__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__25663 = cljs.core.seq.call(null,infos);
var chunk__25664 = null;
var count__25665 = (0);
var i__25666 = (0);
while(true){
if((i__25666 < count__25665)){
var info = cljs.core._nth.call(null,chunk__25664,i__25666);
var segv_25745 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25746 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25747 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25746 > (lc_25747 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25663,chunk__25664,count__25665,i__25666,segv_25745,gline_25746,lc_25747,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25746 - (lc_25747 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25745], null));
});})(seq__25663,chunk__25664,count__25665,i__25666,segv_25745,gline_25746,lc_25747,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25663,chunk__25664,count__25665,i__25666,segv_25745,gline_25746,lc_25747,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25746], null),cljs.core.conj,segv_25745);
});})(seq__25663,chunk__25664,count__25665,i__25666,segv_25745,gline_25746,lc_25747,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__25748 = seq__25663;
var G__25749 = chunk__25664;
var G__25750 = count__25665;
var G__25751 = (i__25666 + (1));
seq__25663 = G__25748;
chunk__25664 = G__25749;
count__25665 = G__25750;
i__25666 = G__25751;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25663);
if(temp__4657__auto__){
var seq__25663__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25663__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__25663__$1);
var G__25752 = cljs.core.chunk_rest.call(null,seq__25663__$1);
var G__25753 = c__23426__auto__;
var G__25754 = cljs.core.count.call(null,c__23426__auto__);
var G__25755 = (0);
seq__25663 = G__25752;
chunk__25664 = G__25753;
count__25665 = G__25754;
i__25666 = G__25755;
continue;
} else {
var info = cljs.core.first.call(null,seq__25663__$1);
var segv_25756 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_25757 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_25758 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_25757 > (lc_25758 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__25663,chunk__25664,count__25665,i__25666,segv_25756,gline_25757,lc_25758,info,seq__25663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_25757 - (lc_25758 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_25756], null));
});})(seq__25663,chunk__25664,count__25665,i__25666,segv_25756,gline_25757,lc_25758,info,seq__25663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__25663,chunk__25664,count__25665,i__25666,segv_25756,gline_25757,lc_25758,info,seq__25663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25757], null),cljs.core.conj,segv_25756);
});})(seq__25663,chunk__25664,count__25665,i__25666,segv_25756,gline_25757,lc_25758,info,seq__25663__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__25759 = cljs.core.next.call(null,seq__25663__$1);
var G__25760 = null;
var G__25761 = (0);
var G__25762 = (0);
seq__25663 = G__25759;
chunk__25664 = G__25760;
count__25665 = G__25761;
i__25666 = G__25762;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__25667_25763 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__25668_25764 = null;
var count__25669_25765 = (0);
var i__25670_25766 = (0);
while(true){
if((i__25670_25766 < count__25669_25765)){
var vec__25671_25767 = cljs.core._nth.call(null,chunk__25668_25764,i__25670_25766);
var source_idx_25768 = cljs.core.nth.call(null,vec__25671_25767,(0),null);
var vec__25674_25769 = cljs.core.nth.call(null,vec__25671_25767,(1),null);
var __25770 = cljs.core.nth.call(null,vec__25674_25769,(0),null);
var lines_25771__$1 = cljs.core.nth.call(null,vec__25674_25769,(1),null);
var seq__25677_25772 = cljs.core.seq.call(null,lines_25771__$1);
var chunk__25678_25773 = null;
var count__25679_25774 = (0);
var i__25680_25775 = (0);
while(true){
if((i__25680_25775 < count__25679_25774)){
var vec__25681_25776 = cljs.core._nth.call(null,chunk__25678_25773,i__25680_25775);
var line_25777 = cljs.core.nth.call(null,vec__25681_25776,(0),null);
var cols_25778 = cljs.core.nth.call(null,vec__25681_25776,(1),null);
var seq__25684_25779 = cljs.core.seq.call(null,cols_25778);
var chunk__25685_25780 = null;
var count__25686_25781 = (0);
var i__25687_25782 = (0);
while(true){
if((i__25687_25782 < count__25686_25781)){
var vec__25688_25783 = cljs.core._nth.call(null,chunk__25685_25780,i__25687_25782);
var col_25784 = cljs.core.nth.call(null,vec__25688_25783,(0),null);
var infos_25785 = cljs.core.nth.call(null,vec__25688_25783,(1),null);
encode_cols.call(null,infos_25785,source_idx_25768,line_25777,col_25784);

var G__25786 = seq__25684_25779;
var G__25787 = chunk__25685_25780;
var G__25788 = count__25686_25781;
var G__25789 = (i__25687_25782 + (1));
seq__25684_25779 = G__25786;
chunk__25685_25780 = G__25787;
count__25686_25781 = G__25788;
i__25687_25782 = G__25789;
continue;
} else {
var temp__4657__auto___25790 = cljs.core.seq.call(null,seq__25684_25779);
if(temp__4657__auto___25790){
var seq__25684_25791__$1 = temp__4657__auto___25790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25684_25791__$1)){
var c__23426__auto___25792 = cljs.core.chunk_first.call(null,seq__25684_25791__$1);
var G__25793 = cljs.core.chunk_rest.call(null,seq__25684_25791__$1);
var G__25794 = c__23426__auto___25792;
var G__25795 = cljs.core.count.call(null,c__23426__auto___25792);
var G__25796 = (0);
seq__25684_25779 = G__25793;
chunk__25685_25780 = G__25794;
count__25686_25781 = G__25795;
i__25687_25782 = G__25796;
continue;
} else {
var vec__25691_25797 = cljs.core.first.call(null,seq__25684_25791__$1);
var col_25798 = cljs.core.nth.call(null,vec__25691_25797,(0),null);
var infos_25799 = cljs.core.nth.call(null,vec__25691_25797,(1),null);
encode_cols.call(null,infos_25799,source_idx_25768,line_25777,col_25798);

var G__25800 = cljs.core.next.call(null,seq__25684_25791__$1);
var G__25801 = null;
var G__25802 = (0);
var G__25803 = (0);
seq__25684_25779 = G__25800;
chunk__25685_25780 = G__25801;
count__25686_25781 = G__25802;
i__25687_25782 = G__25803;
continue;
}
} else {
}
}
break;
}

var G__25804 = seq__25677_25772;
var G__25805 = chunk__25678_25773;
var G__25806 = count__25679_25774;
var G__25807 = (i__25680_25775 + (1));
seq__25677_25772 = G__25804;
chunk__25678_25773 = G__25805;
count__25679_25774 = G__25806;
i__25680_25775 = G__25807;
continue;
} else {
var temp__4657__auto___25808 = cljs.core.seq.call(null,seq__25677_25772);
if(temp__4657__auto___25808){
var seq__25677_25809__$1 = temp__4657__auto___25808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25677_25809__$1)){
var c__23426__auto___25810 = cljs.core.chunk_first.call(null,seq__25677_25809__$1);
var G__25811 = cljs.core.chunk_rest.call(null,seq__25677_25809__$1);
var G__25812 = c__23426__auto___25810;
var G__25813 = cljs.core.count.call(null,c__23426__auto___25810);
var G__25814 = (0);
seq__25677_25772 = G__25811;
chunk__25678_25773 = G__25812;
count__25679_25774 = G__25813;
i__25680_25775 = G__25814;
continue;
} else {
var vec__25694_25815 = cljs.core.first.call(null,seq__25677_25809__$1);
var line_25816 = cljs.core.nth.call(null,vec__25694_25815,(0),null);
var cols_25817 = cljs.core.nth.call(null,vec__25694_25815,(1),null);
var seq__25697_25818 = cljs.core.seq.call(null,cols_25817);
var chunk__25698_25819 = null;
var count__25699_25820 = (0);
var i__25700_25821 = (0);
while(true){
if((i__25700_25821 < count__25699_25820)){
var vec__25701_25822 = cljs.core._nth.call(null,chunk__25698_25819,i__25700_25821);
var col_25823 = cljs.core.nth.call(null,vec__25701_25822,(0),null);
var infos_25824 = cljs.core.nth.call(null,vec__25701_25822,(1),null);
encode_cols.call(null,infos_25824,source_idx_25768,line_25816,col_25823);

var G__25825 = seq__25697_25818;
var G__25826 = chunk__25698_25819;
var G__25827 = count__25699_25820;
var G__25828 = (i__25700_25821 + (1));
seq__25697_25818 = G__25825;
chunk__25698_25819 = G__25826;
count__25699_25820 = G__25827;
i__25700_25821 = G__25828;
continue;
} else {
var temp__4657__auto___25829__$1 = cljs.core.seq.call(null,seq__25697_25818);
if(temp__4657__auto___25829__$1){
var seq__25697_25830__$1 = temp__4657__auto___25829__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25697_25830__$1)){
var c__23426__auto___25831 = cljs.core.chunk_first.call(null,seq__25697_25830__$1);
var G__25832 = cljs.core.chunk_rest.call(null,seq__25697_25830__$1);
var G__25833 = c__23426__auto___25831;
var G__25834 = cljs.core.count.call(null,c__23426__auto___25831);
var G__25835 = (0);
seq__25697_25818 = G__25832;
chunk__25698_25819 = G__25833;
count__25699_25820 = G__25834;
i__25700_25821 = G__25835;
continue;
} else {
var vec__25704_25836 = cljs.core.first.call(null,seq__25697_25830__$1);
var col_25837 = cljs.core.nth.call(null,vec__25704_25836,(0),null);
var infos_25838 = cljs.core.nth.call(null,vec__25704_25836,(1),null);
encode_cols.call(null,infos_25838,source_idx_25768,line_25816,col_25837);

var G__25839 = cljs.core.next.call(null,seq__25697_25830__$1);
var G__25840 = null;
var G__25841 = (0);
var G__25842 = (0);
seq__25697_25818 = G__25839;
chunk__25698_25819 = G__25840;
count__25699_25820 = G__25841;
i__25700_25821 = G__25842;
continue;
}
} else {
}
}
break;
}

var G__25843 = cljs.core.next.call(null,seq__25677_25809__$1);
var G__25844 = null;
var G__25845 = (0);
var G__25846 = (0);
seq__25677_25772 = G__25843;
chunk__25678_25773 = G__25844;
count__25679_25774 = G__25845;
i__25680_25775 = G__25846;
continue;
}
} else {
}
}
break;
}

var G__25847 = seq__25667_25763;
var G__25848 = chunk__25668_25764;
var G__25849 = count__25669_25765;
var G__25850 = (i__25670_25766 + (1));
seq__25667_25763 = G__25847;
chunk__25668_25764 = G__25848;
count__25669_25765 = G__25849;
i__25670_25766 = G__25850;
continue;
} else {
var temp__4657__auto___25851 = cljs.core.seq.call(null,seq__25667_25763);
if(temp__4657__auto___25851){
var seq__25667_25852__$1 = temp__4657__auto___25851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25667_25852__$1)){
var c__23426__auto___25853 = cljs.core.chunk_first.call(null,seq__25667_25852__$1);
var G__25854 = cljs.core.chunk_rest.call(null,seq__25667_25852__$1);
var G__25855 = c__23426__auto___25853;
var G__25856 = cljs.core.count.call(null,c__23426__auto___25853);
var G__25857 = (0);
seq__25667_25763 = G__25854;
chunk__25668_25764 = G__25855;
count__25669_25765 = G__25856;
i__25670_25766 = G__25857;
continue;
} else {
var vec__25707_25858 = cljs.core.first.call(null,seq__25667_25852__$1);
var source_idx_25859 = cljs.core.nth.call(null,vec__25707_25858,(0),null);
var vec__25710_25860 = cljs.core.nth.call(null,vec__25707_25858,(1),null);
var __25861 = cljs.core.nth.call(null,vec__25710_25860,(0),null);
var lines_25862__$1 = cljs.core.nth.call(null,vec__25710_25860,(1),null);
var seq__25713_25863 = cljs.core.seq.call(null,lines_25862__$1);
var chunk__25714_25864 = null;
var count__25715_25865 = (0);
var i__25716_25866 = (0);
while(true){
if((i__25716_25866 < count__25715_25865)){
var vec__25717_25867 = cljs.core._nth.call(null,chunk__25714_25864,i__25716_25866);
var line_25868 = cljs.core.nth.call(null,vec__25717_25867,(0),null);
var cols_25869 = cljs.core.nth.call(null,vec__25717_25867,(1),null);
var seq__25720_25870 = cljs.core.seq.call(null,cols_25869);
var chunk__25721_25871 = null;
var count__25722_25872 = (0);
var i__25723_25873 = (0);
while(true){
if((i__25723_25873 < count__25722_25872)){
var vec__25724_25874 = cljs.core._nth.call(null,chunk__25721_25871,i__25723_25873);
var col_25875 = cljs.core.nth.call(null,vec__25724_25874,(0),null);
var infos_25876 = cljs.core.nth.call(null,vec__25724_25874,(1),null);
encode_cols.call(null,infos_25876,source_idx_25859,line_25868,col_25875);

var G__25877 = seq__25720_25870;
var G__25878 = chunk__25721_25871;
var G__25879 = count__25722_25872;
var G__25880 = (i__25723_25873 + (1));
seq__25720_25870 = G__25877;
chunk__25721_25871 = G__25878;
count__25722_25872 = G__25879;
i__25723_25873 = G__25880;
continue;
} else {
var temp__4657__auto___25881__$1 = cljs.core.seq.call(null,seq__25720_25870);
if(temp__4657__auto___25881__$1){
var seq__25720_25882__$1 = temp__4657__auto___25881__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25720_25882__$1)){
var c__23426__auto___25883 = cljs.core.chunk_first.call(null,seq__25720_25882__$1);
var G__25884 = cljs.core.chunk_rest.call(null,seq__25720_25882__$1);
var G__25885 = c__23426__auto___25883;
var G__25886 = cljs.core.count.call(null,c__23426__auto___25883);
var G__25887 = (0);
seq__25720_25870 = G__25884;
chunk__25721_25871 = G__25885;
count__25722_25872 = G__25886;
i__25723_25873 = G__25887;
continue;
} else {
var vec__25727_25888 = cljs.core.first.call(null,seq__25720_25882__$1);
var col_25889 = cljs.core.nth.call(null,vec__25727_25888,(0),null);
var infos_25890 = cljs.core.nth.call(null,vec__25727_25888,(1),null);
encode_cols.call(null,infos_25890,source_idx_25859,line_25868,col_25889);

var G__25891 = cljs.core.next.call(null,seq__25720_25882__$1);
var G__25892 = null;
var G__25893 = (0);
var G__25894 = (0);
seq__25720_25870 = G__25891;
chunk__25721_25871 = G__25892;
count__25722_25872 = G__25893;
i__25723_25873 = G__25894;
continue;
}
} else {
}
}
break;
}

var G__25895 = seq__25713_25863;
var G__25896 = chunk__25714_25864;
var G__25897 = count__25715_25865;
var G__25898 = (i__25716_25866 + (1));
seq__25713_25863 = G__25895;
chunk__25714_25864 = G__25896;
count__25715_25865 = G__25897;
i__25716_25866 = G__25898;
continue;
} else {
var temp__4657__auto___25899__$1 = cljs.core.seq.call(null,seq__25713_25863);
if(temp__4657__auto___25899__$1){
var seq__25713_25900__$1 = temp__4657__auto___25899__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25713_25900__$1)){
var c__23426__auto___25901 = cljs.core.chunk_first.call(null,seq__25713_25900__$1);
var G__25902 = cljs.core.chunk_rest.call(null,seq__25713_25900__$1);
var G__25903 = c__23426__auto___25901;
var G__25904 = cljs.core.count.call(null,c__23426__auto___25901);
var G__25905 = (0);
seq__25713_25863 = G__25902;
chunk__25714_25864 = G__25903;
count__25715_25865 = G__25904;
i__25716_25866 = G__25905;
continue;
} else {
var vec__25730_25906 = cljs.core.first.call(null,seq__25713_25900__$1);
var line_25907 = cljs.core.nth.call(null,vec__25730_25906,(0),null);
var cols_25908 = cljs.core.nth.call(null,vec__25730_25906,(1),null);
var seq__25733_25909 = cljs.core.seq.call(null,cols_25908);
var chunk__25734_25910 = null;
var count__25735_25911 = (0);
var i__25736_25912 = (0);
while(true){
if((i__25736_25912 < count__25735_25911)){
var vec__25737_25913 = cljs.core._nth.call(null,chunk__25734_25910,i__25736_25912);
var col_25914 = cljs.core.nth.call(null,vec__25737_25913,(0),null);
var infos_25915 = cljs.core.nth.call(null,vec__25737_25913,(1),null);
encode_cols.call(null,infos_25915,source_idx_25859,line_25907,col_25914);

var G__25916 = seq__25733_25909;
var G__25917 = chunk__25734_25910;
var G__25918 = count__25735_25911;
var G__25919 = (i__25736_25912 + (1));
seq__25733_25909 = G__25916;
chunk__25734_25910 = G__25917;
count__25735_25911 = G__25918;
i__25736_25912 = G__25919;
continue;
} else {
var temp__4657__auto___25920__$2 = cljs.core.seq.call(null,seq__25733_25909);
if(temp__4657__auto___25920__$2){
var seq__25733_25921__$1 = temp__4657__auto___25920__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25733_25921__$1)){
var c__23426__auto___25922 = cljs.core.chunk_first.call(null,seq__25733_25921__$1);
var G__25923 = cljs.core.chunk_rest.call(null,seq__25733_25921__$1);
var G__25924 = c__23426__auto___25922;
var G__25925 = cljs.core.count.call(null,c__23426__auto___25922);
var G__25926 = (0);
seq__25733_25909 = G__25923;
chunk__25734_25910 = G__25924;
count__25735_25911 = G__25925;
i__25736_25912 = G__25926;
continue;
} else {
var vec__25740_25927 = cljs.core.first.call(null,seq__25733_25921__$1);
var col_25928 = cljs.core.nth.call(null,vec__25740_25927,(0),null);
var infos_25929 = cljs.core.nth.call(null,vec__25740_25927,(1),null);
encode_cols.call(null,infos_25929,source_idx_25859,line_25907,col_25928);

var G__25930 = cljs.core.next.call(null,seq__25733_25921__$1);
var G__25931 = null;
var G__25932 = (0);
var G__25933 = (0);
seq__25733_25909 = G__25930;
chunk__25734_25910 = G__25931;
count__25735_25911 = G__25932;
i__25736_25912 = G__25933;
continue;
}
} else {
}
}
break;
}

var G__25934 = cljs.core.next.call(null,seq__25713_25900__$1);
var G__25935 = null;
var G__25936 = (0);
var G__25937 = (0);
seq__25713_25863 = G__25934;
chunk__25714_25864 = G__25935;
count__25715_25865 = G__25936;
i__25716_25866 = G__25937;
continue;
}
} else {
}
}
break;
}

var G__25938 = cljs.core.next.call(null,seq__25667_25852__$1);
var G__25939 = null;
var G__25940 = (0);
var G__25941 = (0);
seq__25667_25763 = G__25938;
chunk__25668_25764 = G__25939;
count__25669_25765 = G__25940;
i__25670_25766 = G__25941;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__25743 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25578_SHARP_){
return [cljs.core.str(p1__25578_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25579_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__25579_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__25580_SHARP_){
return clojure.string.join.call(null,",",p1__25580_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__25744 = G__25743;
goog.object.set(G__25744,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__25744;
} else {
return G__25743;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__25951 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__25951,(0),null);
var col_map = cljs.core.nth.call(null,vec__25951,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__25954 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__25954,(0),null);
var infos = cljs.core.nth.call(null,vec__25954,(1),null);
var G__25960 = cljs.core.next.call(null,col_map_seq);
var G__25961 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__25954,col,infos,vec__25951,line,col_map){
return (function (v,p__25957){
var map__25958 = p__25957;
var map__25958__$1 = ((((!((map__25958 == null)))?((((map__25958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25958):map__25958);
var gline = cljs.core.get.call(null,map__25958__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__25958__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__25954,col,infos,vec__25951,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__25960;
new_cols = G__25961;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__25962 = cljs.core.next.call(null,line_map_seq);
var G__25963 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__25962;
new_lines = G__25963;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__26026_26088 = cljs.core.seq.call(null,reverse_map);
var chunk__26027_26089 = null;
var count__26028_26090 = (0);
var i__26029_26091 = (0);
while(true){
if((i__26029_26091 < count__26028_26090)){
var vec__26030_26092 = cljs.core._nth.call(null,chunk__26027_26089,i__26029_26091);
var line_26093 = cljs.core.nth.call(null,vec__26030_26092,(0),null);
var columns_26094 = cljs.core.nth.call(null,vec__26030_26092,(1),null);
var seq__26033_26095 = cljs.core.seq.call(null,columns_26094);
var chunk__26034_26096 = null;
var count__26035_26097 = (0);
var i__26036_26098 = (0);
while(true){
if((i__26036_26098 < count__26035_26097)){
var vec__26037_26099 = cljs.core._nth.call(null,chunk__26034_26096,i__26036_26098);
var column_26100 = cljs.core.nth.call(null,vec__26037_26099,(0),null);
var column_info_26101 = cljs.core.nth.call(null,vec__26037_26099,(1),null);
var seq__26040_26102 = cljs.core.seq.call(null,column_info_26101);
var chunk__26041_26103 = null;
var count__26042_26104 = (0);
var i__26043_26105 = (0);
while(true){
if((i__26043_26105 < count__26042_26104)){
var map__26044_26106 = cljs.core._nth.call(null,chunk__26041_26103,i__26043_26105);
var map__26044_26107__$1 = ((((!((map__26044_26106 == null)))?((((map__26044_26106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26044_26106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26044_26106):map__26044_26106);
var gline_26108 = cljs.core.get.call(null,map__26044_26107__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26109 = cljs.core.get.call(null,map__26044_26107__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26110 = cljs.core.get.call(null,map__26044_26107__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26108], null),cljs.core.fnil.call(null,((function (seq__26040_26102,chunk__26041_26103,count__26042_26104,i__26043_26105,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26044_26106,map__26044_26107__$1,gline_26108,gcol_26109,name_26110,vec__26037_26099,column_26100,column_info_26101,vec__26030_26092,line_26093,columns_26094,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26109], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26093,new cljs.core.Keyword(null,"col","col",-1959363084),column_26100,new cljs.core.Keyword(null,"name","name",1843675177),name_26110], null));
});})(seq__26040_26102,chunk__26041_26103,count__26042_26104,i__26043_26105,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26044_26106,map__26044_26107__$1,gline_26108,gcol_26109,name_26110,vec__26037_26099,column_26100,column_info_26101,vec__26030_26092,line_26093,columns_26094,inverted))
,cljs.core.sorted_map.call(null)));

var G__26111 = seq__26040_26102;
var G__26112 = chunk__26041_26103;
var G__26113 = count__26042_26104;
var G__26114 = (i__26043_26105 + (1));
seq__26040_26102 = G__26111;
chunk__26041_26103 = G__26112;
count__26042_26104 = G__26113;
i__26043_26105 = G__26114;
continue;
} else {
var temp__4657__auto___26115 = cljs.core.seq.call(null,seq__26040_26102);
if(temp__4657__auto___26115){
var seq__26040_26116__$1 = temp__4657__auto___26115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26040_26116__$1)){
var c__23426__auto___26117 = cljs.core.chunk_first.call(null,seq__26040_26116__$1);
var G__26118 = cljs.core.chunk_rest.call(null,seq__26040_26116__$1);
var G__26119 = c__23426__auto___26117;
var G__26120 = cljs.core.count.call(null,c__23426__auto___26117);
var G__26121 = (0);
seq__26040_26102 = G__26118;
chunk__26041_26103 = G__26119;
count__26042_26104 = G__26120;
i__26043_26105 = G__26121;
continue;
} else {
var map__26046_26122 = cljs.core.first.call(null,seq__26040_26116__$1);
var map__26046_26123__$1 = ((((!((map__26046_26122 == null)))?((((map__26046_26122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26046_26122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26046_26122):map__26046_26122);
var gline_26124 = cljs.core.get.call(null,map__26046_26123__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26125 = cljs.core.get.call(null,map__26046_26123__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26126 = cljs.core.get.call(null,map__26046_26123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26124], null),cljs.core.fnil.call(null,((function (seq__26040_26102,chunk__26041_26103,count__26042_26104,i__26043_26105,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26046_26122,map__26046_26123__$1,gline_26124,gcol_26125,name_26126,seq__26040_26116__$1,temp__4657__auto___26115,vec__26037_26099,column_26100,column_info_26101,vec__26030_26092,line_26093,columns_26094,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26125], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26093,new cljs.core.Keyword(null,"col","col",-1959363084),column_26100,new cljs.core.Keyword(null,"name","name",1843675177),name_26126], null));
});})(seq__26040_26102,chunk__26041_26103,count__26042_26104,i__26043_26105,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26046_26122,map__26046_26123__$1,gline_26124,gcol_26125,name_26126,seq__26040_26116__$1,temp__4657__auto___26115,vec__26037_26099,column_26100,column_info_26101,vec__26030_26092,line_26093,columns_26094,inverted))
,cljs.core.sorted_map.call(null)));

var G__26127 = cljs.core.next.call(null,seq__26040_26116__$1);
var G__26128 = null;
var G__26129 = (0);
var G__26130 = (0);
seq__26040_26102 = G__26127;
chunk__26041_26103 = G__26128;
count__26042_26104 = G__26129;
i__26043_26105 = G__26130;
continue;
}
} else {
}
}
break;
}

var G__26131 = seq__26033_26095;
var G__26132 = chunk__26034_26096;
var G__26133 = count__26035_26097;
var G__26134 = (i__26036_26098 + (1));
seq__26033_26095 = G__26131;
chunk__26034_26096 = G__26132;
count__26035_26097 = G__26133;
i__26036_26098 = G__26134;
continue;
} else {
var temp__4657__auto___26135 = cljs.core.seq.call(null,seq__26033_26095);
if(temp__4657__auto___26135){
var seq__26033_26136__$1 = temp__4657__auto___26135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26033_26136__$1)){
var c__23426__auto___26137 = cljs.core.chunk_first.call(null,seq__26033_26136__$1);
var G__26138 = cljs.core.chunk_rest.call(null,seq__26033_26136__$1);
var G__26139 = c__23426__auto___26137;
var G__26140 = cljs.core.count.call(null,c__23426__auto___26137);
var G__26141 = (0);
seq__26033_26095 = G__26138;
chunk__26034_26096 = G__26139;
count__26035_26097 = G__26140;
i__26036_26098 = G__26141;
continue;
} else {
var vec__26048_26142 = cljs.core.first.call(null,seq__26033_26136__$1);
var column_26143 = cljs.core.nth.call(null,vec__26048_26142,(0),null);
var column_info_26144 = cljs.core.nth.call(null,vec__26048_26142,(1),null);
var seq__26051_26145 = cljs.core.seq.call(null,column_info_26144);
var chunk__26052_26146 = null;
var count__26053_26147 = (0);
var i__26054_26148 = (0);
while(true){
if((i__26054_26148 < count__26053_26147)){
var map__26055_26149 = cljs.core._nth.call(null,chunk__26052_26146,i__26054_26148);
var map__26055_26150__$1 = ((((!((map__26055_26149 == null)))?((((map__26055_26149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26055_26149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26055_26149):map__26055_26149);
var gline_26151 = cljs.core.get.call(null,map__26055_26150__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26152 = cljs.core.get.call(null,map__26055_26150__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26153 = cljs.core.get.call(null,map__26055_26150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26151], null),cljs.core.fnil.call(null,((function (seq__26051_26145,chunk__26052_26146,count__26053_26147,i__26054_26148,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26055_26149,map__26055_26150__$1,gline_26151,gcol_26152,name_26153,vec__26048_26142,column_26143,column_info_26144,seq__26033_26136__$1,temp__4657__auto___26135,vec__26030_26092,line_26093,columns_26094,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26152], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26093,new cljs.core.Keyword(null,"col","col",-1959363084),column_26143,new cljs.core.Keyword(null,"name","name",1843675177),name_26153], null));
});})(seq__26051_26145,chunk__26052_26146,count__26053_26147,i__26054_26148,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26055_26149,map__26055_26150__$1,gline_26151,gcol_26152,name_26153,vec__26048_26142,column_26143,column_info_26144,seq__26033_26136__$1,temp__4657__auto___26135,vec__26030_26092,line_26093,columns_26094,inverted))
,cljs.core.sorted_map.call(null)));

var G__26154 = seq__26051_26145;
var G__26155 = chunk__26052_26146;
var G__26156 = count__26053_26147;
var G__26157 = (i__26054_26148 + (1));
seq__26051_26145 = G__26154;
chunk__26052_26146 = G__26155;
count__26053_26147 = G__26156;
i__26054_26148 = G__26157;
continue;
} else {
var temp__4657__auto___26158__$1 = cljs.core.seq.call(null,seq__26051_26145);
if(temp__4657__auto___26158__$1){
var seq__26051_26159__$1 = temp__4657__auto___26158__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26051_26159__$1)){
var c__23426__auto___26160 = cljs.core.chunk_first.call(null,seq__26051_26159__$1);
var G__26161 = cljs.core.chunk_rest.call(null,seq__26051_26159__$1);
var G__26162 = c__23426__auto___26160;
var G__26163 = cljs.core.count.call(null,c__23426__auto___26160);
var G__26164 = (0);
seq__26051_26145 = G__26161;
chunk__26052_26146 = G__26162;
count__26053_26147 = G__26163;
i__26054_26148 = G__26164;
continue;
} else {
var map__26057_26165 = cljs.core.first.call(null,seq__26051_26159__$1);
var map__26057_26166__$1 = ((((!((map__26057_26165 == null)))?((((map__26057_26165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26057_26165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26057_26165):map__26057_26165);
var gline_26167 = cljs.core.get.call(null,map__26057_26166__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26168 = cljs.core.get.call(null,map__26057_26166__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26169 = cljs.core.get.call(null,map__26057_26166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26167], null),cljs.core.fnil.call(null,((function (seq__26051_26145,chunk__26052_26146,count__26053_26147,i__26054_26148,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26057_26165,map__26057_26166__$1,gline_26167,gcol_26168,name_26169,seq__26051_26159__$1,temp__4657__auto___26158__$1,vec__26048_26142,column_26143,column_info_26144,seq__26033_26136__$1,temp__4657__auto___26135,vec__26030_26092,line_26093,columns_26094,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26168], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26093,new cljs.core.Keyword(null,"col","col",-1959363084),column_26143,new cljs.core.Keyword(null,"name","name",1843675177),name_26169], null));
});})(seq__26051_26145,chunk__26052_26146,count__26053_26147,i__26054_26148,seq__26033_26095,chunk__26034_26096,count__26035_26097,i__26036_26098,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26057_26165,map__26057_26166__$1,gline_26167,gcol_26168,name_26169,seq__26051_26159__$1,temp__4657__auto___26158__$1,vec__26048_26142,column_26143,column_info_26144,seq__26033_26136__$1,temp__4657__auto___26135,vec__26030_26092,line_26093,columns_26094,inverted))
,cljs.core.sorted_map.call(null)));

var G__26170 = cljs.core.next.call(null,seq__26051_26159__$1);
var G__26171 = null;
var G__26172 = (0);
var G__26173 = (0);
seq__26051_26145 = G__26170;
chunk__26052_26146 = G__26171;
count__26053_26147 = G__26172;
i__26054_26148 = G__26173;
continue;
}
} else {
}
}
break;
}

var G__26174 = cljs.core.next.call(null,seq__26033_26136__$1);
var G__26175 = null;
var G__26176 = (0);
var G__26177 = (0);
seq__26033_26095 = G__26174;
chunk__26034_26096 = G__26175;
count__26035_26097 = G__26176;
i__26036_26098 = G__26177;
continue;
}
} else {
}
}
break;
}

var G__26178 = seq__26026_26088;
var G__26179 = chunk__26027_26089;
var G__26180 = count__26028_26090;
var G__26181 = (i__26029_26091 + (1));
seq__26026_26088 = G__26178;
chunk__26027_26089 = G__26179;
count__26028_26090 = G__26180;
i__26029_26091 = G__26181;
continue;
} else {
var temp__4657__auto___26182 = cljs.core.seq.call(null,seq__26026_26088);
if(temp__4657__auto___26182){
var seq__26026_26183__$1 = temp__4657__auto___26182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26026_26183__$1)){
var c__23426__auto___26184 = cljs.core.chunk_first.call(null,seq__26026_26183__$1);
var G__26185 = cljs.core.chunk_rest.call(null,seq__26026_26183__$1);
var G__26186 = c__23426__auto___26184;
var G__26187 = cljs.core.count.call(null,c__23426__auto___26184);
var G__26188 = (0);
seq__26026_26088 = G__26185;
chunk__26027_26089 = G__26186;
count__26028_26090 = G__26187;
i__26029_26091 = G__26188;
continue;
} else {
var vec__26059_26189 = cljs.core.first.call(null,seq__26026_26183__$1);
var line_26190 = cljs.core.nth.call(null,vec__26059_26189,(0),null);
var columns_26191 = cljs.core.nth.call(null,vec__26059_26189,(1),null);
var seq__26062_26192 = cljs.core.seq.call(null,columns_26191);
var chunk__26063_26193 = null;
var count__26064_26194 = (0);
var i__26065_26195 = (0);
while(true){
if((i__26065_26195 < count__26064_26194)){
var vec__26066_26196 = cljs.core._nth.call(null,chunk__26063_26193,i__26065_26195);
var column_26197 = cljs.core.nth.call(null,vec__26066_26196,(0),null);
var column_info_26198 = cljs.core.nth.call(null,vec__26066_26196,(1),null);
var seq__26069_26199 = cljs.core.seq.call(null,column_info_26198);
var chunk__26070_26200 = null;
var count__26071_26201 = (0);
var i__26072_26202 = (0);
while(true){
if((i__26072_26202 < count__26071_26201)){
var map__26073_26203 = cljs.core._nth.call(null,chunk__26070_26200,i__26072_26202);
var map__26073_26204__$1 = ((((!((map__26073_26203 == null)))?((((map__26073_26203.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26073_26203.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26073_26203):map__26073_26203);
var gline_26205 = cljs.core.get.call(null,map__26073_26204__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26206 = cljs.core.get.call(null,map__26073_26204__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26207 = cljs.core.get.call(null,map__26073_26204__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26205], null),cljs.core.fnil.call(null,((function (seq__26069_26199,chunk__26070_26200,count__26071_26201,i__26072_26202,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26073_26203,map__26073_26204__$1,gline_26205,gcol_26206,name_26207,vec__26066_26196,column_26197,column_info_26198,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26206], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26190,new cljs.core.Keyword(null,"col","col",-1959363084),column_26197,new cljs.core.Keyword(null,"name","name",1843675177),name_26207], null));
});})(seq__26069_26199,chunk__26070_26200,count__26071_26201,i__26072_26202,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26073_26203,map__26073_26204__$1,gline_26205,gcol_26206,name_26207,vec__26066_26196,column_26197,column_info_26198,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted))
,cljs.core.sorted_map.call(null)));

var G__26208 = seq__26069_26199;
var G__26209 = chunk__26070_26200;
var G__26210 = count__26071_26201;
var G__26211 = (i__26072_26202 + (1));
seq__26069_26199 = G__26208;
chunk__26070_26200 = G__26209;
count__26071_26201 = G__26210;
i__26072_26202 = G__26211;
continue;
} else {
var temp__4657__auto___26212__$1 = cljs.core.seq.call(null,seq__26069_26199);
if(temp__4657__auto___26212__$1){
var seq__26069_26213__$1 = temp__4657__auto___26212__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26069_26213__$1)){
var c__23426__auto___26214 = cljs.core.chunk_first.call(null,seq__26069_26213__$1);
var G__26215 = cljs.core.chunk_rest.call(null,seq__26069_26213__$1);
var G__26216 = c__23426__auto___26214;
var G__26217 = cljs.core.count.call(null,c__23426__auto___26214);
var G__26218 = (0);
seq__26069_26199 = G__26215;
chunk__26070_26200 = G__26216;
count__26071_26201 = G__26217;
i__26072_26202 = G__26218;
continue;
} else {
var map__26075_26219 = cljs.core.first.call(null,seq__26069_26213__$1);
var map__26075_26220__$1 = ((((!((map__26075_26219 == null)))?((((map__26075_26219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26075_26219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26075_26219):map__26075_26219);
var gline_26221 = cljs.core.get.call(null,map__26075_26220__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26222 = cljs.core.get.call(null,map__26075_26220__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26223 = cljs.core.get.call(null,map__26075_26220__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26221], null),cljs.core.fnil.call(null,((function (seq__26069_26199,chunk__26070_26200,count__26071_26201,i__26072_26202,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26075_26219,map__26075_26220__$1,gline_26221,gcol_26222,name_26223,seq__26069_26213__$1,temp__4657__auto___26212__$1,vec__26066_26196,column_26197,column_info_26198,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26222], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26190,new cljs.core.Keyword(null,"col","col",-1959363084),column_26197,new cljs.core.Keyword(null,"name","name",1843675177),name_26223], null));
});})(seq__26069_26199,chunk__26070_26200,count__26071_26201,i__26072_26202,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26075_26219,map__26075_26220__$1,gline_26221,gcol_26222,name_26223,seq__26069_26213__$1,temp__4657__auto___26212__$1,vec__26066_26196,column_26197,column_info_26198,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted))
,cljs.core.sorted_map.call(null)));

var G__26224 = cljs.core.next.call(null,seq__26069_26213__$1);
var G__26225 = null;
var G__26226 = (0);
var G__26227 = (0);
seq__26069_26199 = G__26224;
chunk__26070_26200 = G__26225;
count__26071_26201 = G__26226;
i__26072_26202 = G__26227;
continue;
}
} else {
}
}
break;
}

var G__26228 = seq__26062_26192;
var G__26229 = chunk__26063_26193;
var G__26230 = count__26064_26194;
var G__26231 = (i__26065_26195 + (1));
seq__26062_26192 = G__26228;
chunk__26063_26193 = G__26229;
count__26064_26194 = G__26230;
i__26065_26195 = G__26231;
continue;
} else {
var temp__4657__auto___26232__$1 = cljs.core.seq.call(null,seq__26062_26192);
if(temp__4657__auto___26232__$1){
var seq__26062_26233__$1 = temp__4657__auto___26232__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26062_26233__$1)){
var c__23426__auto___26234 = cljs.core.chunk_first.call(null,seq__26062_26233__$1);
var G__26235 = cljs.core.chunk_rest.call(null,seq__26062_26233__$1);
var G__26236 = c__23426__auto___26234;
var G__26237 = cljs.core.count.call(null,c__23426__auto___26234);
var G__26238 = (0);
seq__26062_26192 = G__26235;
chunk__26063_26193 = G__26236;
count__26064_26194 = G__26237;
i__26065_26195 = G__26238;
continue;
} else {
var vec__26077_26239 = cljs.core.first.call(null,seq__26062_26233__$1);
var column_26240 = cljs.core.nth.call(null,vec__26077_26239,(0),null);
var column_info_26241 = cljs.core.nth.call(null,vec__26077_26239,(1),null);
var seq__26080_26242 = cljs.core.seq.call(null,column_info_26241);
var chunk__26081_26243 = null;
var count__26082_26244 = (0);
var i__26083_26245 = (0);
while(true){
if((i__26083_26245 < count__26082_26244)){
var map__26084_26246 = cljs.core._nth.call(null,chunk__26081_26243,i__26083_26245);
var map__26084_26247__$1 = ((((!((map__26084_26246 == null)))?((((map__26084_26246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26084_26246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26084_26246):map__26084_26246);
var gline_26248 = cljs.core.get.call(null,map__26084_26247__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26249 = cljs.core.get.call(null,map__26084_26247__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26250 = cljs.core.get.call(null,map__26084_26247__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26248], null),cljs.core.fnil.call(null,((function (seq__26080_26242,chunk__26081_26243,count__26082_26244,i__26083_26245,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26084_26246,map__26084_26247__$1,gline_26248,gcol_26249,name_26250,vec__26077_26239,column_26240,column_info_26241,seq__26062_26233__$1,temp__4657__auto___26232__$1,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26249], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26190,new cljs.core.Keyword(null,"col","col",-1959363084),column_26240,new cljs.core.Keyword(null,"name","name",1843675177),name_26250], null));
});})(seq__26080_26242,chunk__26081_26243,count__26082_26244,i__26083_26245,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26084_26246,map__26084_26247__$1,gline_26248,gcol_26249,name_26250,vec__26077_26239,column_26240,column_info_26241,seq__26062_26233__$1,temp__4657__auto___26232__$1,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted))
,cljs.core.sorted_map.call(null)));

var G__26251 = seq__26080_26242;
var G__26252 = chunk__26081_26243;
var G__26253 = count__26082_26244;
var G__26254 = (i__26083_26245 + (1));
seq__26080_26242 = G__26251;
chunk__26081_26243 = G__26252;
count__26082_26244 = G__26253;
i__26083_26245 = G__26254;
continue;
} else {
var temp__4657__auto___26255__$2 = cljs.core.seq.call(null,seq__26080_26242);
if(temp__4657__auto___26255__$2){
var seq__26080_26256__$1 = temp__4657__auto___26255__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26080_26256__$1)){
var c__23426__auto___26257 = cljs.core.chunk_first.call(null,seq__26080_26256__$1);
var G__26258 = cljs.core.chunk_rest.call(null,seq__26080_26256__$1);
var G__26259 = c__23426__auto___26257;
var G__26260 = cljs.core.count.call(null,c__23426__auto___26257);
var G__26261 = (0);
seq__26080_26242 = G__26258;
chunk__26081_26243 = G__26259;
count__26082_26244 = G__26260;
i__26083_26245 = G__26261;
continue;
} else {
var map__26086_26262 = cljs.core.first.call(null,seq__26080_26256__$1);
var map__26086_26263__$1 = ((((!((map__26086_26262 == null)))?((((map__26086_26262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26086_26262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26086_26262):map__26086_26262);
var gline_26264 = cljs.core.get.call(null,map__26086_26263__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_26265 = cljs.core.get.call(null,map__26086_26263__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_26266 = cljs.core.get.call(null,map__26086_26263__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_26264], null),cljs.core.fnil.call(null,((function (seq__26080_26242,chunk__26081_26243,count__26082_26244,i__26083_26245,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26086_26262,map__26086_26263__$1,gline_26264,gcol_26265,name_26266,seq__26080_26256__$1,temp__4657__auto___26255__$2,vec__26077_26239,column_26240,column_info_26241,seq__26062_26233__$1,temp__4657__auto___26232__$1,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_26265], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_26190,new cljs.core.Keyword(null,"col","col",-1959363084),column_26240,new cljs.core.Keyword(null,"name","name",1843675177),name_26266], null));
});})(seq__26080_26242,chunk__26081_26243,count__26082_26244,i__26083_26245,seq__26062_26192,chunk__26063_26193,count__26064_26194,i__26065_26195,seq__26026_26088,chunk__26027_26089,count__26028_26090,i__26029_26091,map__26086_26262,map__26086_26263__$1,gline_26264,gcol_26265,name_26266,seq__26080_26256__$1,temp__4657__auto___26255__$2,vec__26077_26239,column_26240,column_info_26241,seq__26062_26233__$1,temp__4657__auto___26232__$1,vec__26059_26189,line_26190,columns_26191,seq__26026_26183__$1,temp__4657__auto___26182,inverted))
,cljs.core.sorted_map.call(null)));

var G__26267 = cljs.core.next.call(null,seq__26080_26256__$1);
var G__26268 = null;
var G__26269 = (0);
var G__26270 = (0);
seq__26080_26242 = G__26267;
chunk__26081_26243 = G__26268;
count__26082_26244 = G__26269;
i__26083_26245 = G__26270;
continue;
}
} else {
}
}
break;
}

var G__26271 = cljs.core.next.call(null,seq__26062_26233__$1);
var G__26272 = null;
var G__26273 = (0);
var G__26274 = (0);
seq__26062_26192 = G__26271;
chunk__26063_26193 = G__26272;
count__26064_26194 = G__26273;
i__26065_26195 = G__26274;
continue;
}
} else {
}
}
break;
}

var G__26275 = cljs.core.next.call(null,seq__26026_26183__$1);
var G__26276 = null;
var G__26277 = (0);
var G__26278 = (0);
seq__26026_26088 = G__26275;
chunk__26027_26089 = G__26276;
count__26028_26090 = G__26277;
i__26029_26091 = G__26278;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map?rel=1465451144663