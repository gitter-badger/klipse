// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__52085){
var vec__52086 = p__52085;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52086,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__52092 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52092,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gcol,gcol,cljs.core.cst$kw$source,(goog.object.get(source_map,"sources")[source]),cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$name,(function (){var temp__4657__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
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
var vec__52101 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52101,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52101,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52101,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52101,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52101,(4),null);
var vec__52104 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52104,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52104,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52104,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52104,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52104,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6221__auto__ = source;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6221__auto__ = line;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6221__auto__ = col;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__52109 = segmap;
var map__52109__$1 = ((((!((map__52109 == null)))?((((map__52109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52109):map__52109);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52109__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__52109,map__52109__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__52109,map__52109__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__52109,map__52109__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__52109,map__52109__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__52109,map__52109__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__52109,map__52109__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args52111 = [];
var len__7296__auto___52117 = arguments.length;
var i__7297__auto___52118 = (0);
while(true){
if((i__7297__auto___52118 < len__7296__auto___52117)){
args52111.push((arguments[i__7297__auto___52118]));

var G__52119 = (i__7297__auto___52118 + (1));
i__7297__auto___52118 = G__52119;
continue;
} else {
}
break;
}

var G__52113 = args52111.length;
switch (G__52113) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52111.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__52114 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__52121 = cljs.core.next(segs__$1);
var G__52122 = nrelseg;
var G__52123 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__52121;
relseg__$1 = G__52122;
result__$1 = G__52123;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52114,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52114,(1),null);
var G__52124 = (gline + (1));
var G__52125 = cljs.core.next(lines__$1);
var G__52126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__52127 = result__$1;
gline = G__52124;
lines__$1 = G__52125;
relseg = G__52126;
result = G__52127;
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
var map__52131 = segmap;
var map__52131__$1 = ((((!((map__52131 == null)))?((((map__52131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52131):map__52131);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52131__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52131__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52131__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52131__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52131__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__52131,map__52131__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__52131,map__52131__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__52128_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__52128_SHARP_,d__$1);
});})(map__52131,map__52131__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__52131,map__52131__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args52133 = [];
var len__7296__auto___52139 = arguments.length;
var i__7297__auto___52140 = (0);
while(true){
if((i__7297__auto___52140 < len__7296__auto___52139)){
args52133.push((arguments[i__7297__auto___52140]));

var G__52141 = (i__7297__auto___52140 + (1));
i__7297__auto___52140 = G__52141;
continue;
} else {
}
break;
}

var G__52135 = args52133.length;
switch (G__52135) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52133.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__52136 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__52143 = cljs.core.next(segs__$1);
var G__52144 = nrelseg;
var G__52145 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__52143;
relseg__$1 = G__52144;
result__$1 = G__52145;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52136,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52136,(1),null);
var G__52146 = (gline + (1));
var G__52147 = cljs.core.next(lines__$1);
var G__52148 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__52149 = result__$1;
gline = G__52146;
lines__$1 = G__52147;
relseg = G__52148;
result = G__52149;
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
var relseg = (function (){var G__52163 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52163) : cljs.core.atom.call(null,G__52163));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__52164){
var vec__52165 = p__52164;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52165,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52165,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52165,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52165,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52165,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__52168){
var vec__52169 = p__52168;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52169,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52169,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52169,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52169,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52169,(4),null);
var seg = vec__52169;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__52169,gcol,sidx,line,col,name,seg,relseg){
return (function (p__52172){
var vec__52173 = p__52172;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52173,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52173,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52173,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52173,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52173,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__52169,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
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
var lines = (function (){var G__52266 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52266) : cljs.core.atom.call(null,G__52266));
})();
var names__GT_idx = (function (){var G__52267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52267) : cljs.core.atom.call(null,G__52267));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__6221__auto__ = cljs.core.cst$kw$preamble_DASH_line_DASH_count.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$gcol.cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4655__auto__ = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
var idx = (function (){var temp__4655__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__52268 = cljs.core.seq(infos);
var chunk__52269 = null;
var count__52270 = (0);
var i__52271 = (0);
while(true){
if((i__52271 < count__52270)){
var info = chunk__52269.cljs$core$IIndexed$_nth$arity$2(null,i__52271);
var segv_52353 = info__GT_segv(info,source_idx,line,col);
var gline_52354 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_52355 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_52354 > (lc_52355 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__52268,chunk__52269,count__52270,i__52271,segv_52353,gline_52354,lc_52355,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_52354 - (lc_52355 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_52353], null));
});})(seq__52268,chunk__52269,count__52270,i__52271,segv_52353,gline_52354,lc_52355,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__52268,chunk__52269,count__52270,i__52271,segv_52353,gline_52354,lc_52355,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52354], null),cljs.core.conj,segv_52353);
});})(seq__52268,chunk__52269,count__52270,i__52271,segv_52353,gline_52354,lc_52355,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__52356 = seq__52268;
var G__52357 = chunk__52269;
var G__52358 = count__52270;
var G__52359 = (i__52271 + (1));
seq__52268 = G__52356;
chunk__52269 = G__52357;
count__52270 = G__52358;
i__52271 = G__52359;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__52268);
if(temp__4657__auto__){
var seq__52268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52268__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__52268__$1);
var G__52360 = cljs.core.chunk_rest(seq__52268__$1);
var G__52361 = c__7032__auto__;
var G__52362 = cljs.core.count(c__7032__auto__);
var G__52363 = (0);
seq__52268 = G__52360;
chunk__52269 = G__52361;
count__52270 = G__52362;
i__52271 = G__52363;
continue;
} else {
var info = cljs.core.first(seq__52268__$1);
var segv_52364 = info__GT_segv(info,source_idx,line,col);
var gline_52365 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_52366 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_52365 > (lc_52366 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__52268,chunk__52269,count__52270,i__52271,segv_52364,gline_52365,lc_52366,info,seq__52268__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_52365 - (lc_52366 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_52364], null));
});})(seq__52268,chunk__52269,count__52270,i__52271,segv_52364,gline_52365,lc_52366,info,seq__52268__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__52268,chunk__52269,count__52270,i__52271,segv_52364,gline_52365,lc_52366,info,seq__52268__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52365], null),cljs.core.conj,segv_52364);
});})(seq__52268,chunk__52269,count__52270,i__52271,segv_52364,gline_52365,lc_52366,info,seq__52268__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__52367 = cljs.core.next(seq__52268__$1);
var G__52368 = null;
var G__52369 = (0);
var G__52370 = (0);
seq__52268 = G__52367;
chunk__52269 = G__52368;
count__52270 = G__52369;
i__52271 = G__52370;
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
var seq__52272_52371 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__52273_52372 = null;
var count__52274_52373 = (0);
var i__52275_52374 = (0);
while(true){
if((i__52275_52374 < count__52274_52373)){
var vec__52276_52375 = chunk__52273_52372.cljs$core$IIndexed$_nth$arity$2(null,i__52275_52374);
var source_idx_52376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52276_52375,(0),null);
var vec__52279_52377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52276_52375,(1),null);
var __52378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52279_52377,(0),null);
var lines_52379__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52279_52377,(1),null);
var seq__52282_52380 = cljs.core.seq(lines_52379__$1);
var chunk__52283_52381 = null;
var count__52284_52382 = (0);
var i__52285_52383 = (0);
while(true){
if((i__52285_52383 < count__52284_52382)){
var vec__52286_52384 = chunk__52283_52381.cljs$core$IIndexed$_nth$arity$2(null,i__52285_52383);
var line_52385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286_52384,(0),null);
var cols_52386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52286_52384,(1),null);
var seq__52289_52387 = cljs.core.seq(cols_52386);
var chunk__52290_52388 = null;
var count__52291_52389 = (0);
var i__52292_52390 = (0);
while(true){
if((i__52292_52390 < count__52291_52389)){
var vec__52293_52391 = chunk__52290_52388.cljs$core$IIndexed$_nth$arity$2(null,i__52292_52390);
var col_52392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52293_52391,(0),null);
var infos_52393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52293_52391,(1),null);
encode_cols(infos_52393,source_idx_52376,line_52385,col_52392);

var G__52394 = seq__52289_52387;
var G__52395 = chunk__52290_52388;
var G__52396 = count__52291_52389;
var G__52397 = (i__52292_52390 + (1));
seq__52289_52387 = G__52394;
chunk__52290_52388 = G__52395;
count__52291_52389 = G__52396;
i__52292_52390 = G__52397;
continue;
} else {
var temp__4657__auto___52398 = cljs.core.seq(seq__52289_52387);
if(temp__4657__auto___52398){
var seq__52289_52399__$1 = temp__4657__auto___52398;
if(cljs.core.chunked_seq_QMARK_(seq__52289_52399__$1)){
var c__7032__auto___52400 = cljs.core.chunk_first(seq__52289_52399__$1);
var G__52401 = cljs.core.chunk_rest(seq__52289_52399__$1);
var G__52402 = c__7032__auto___52400;
var G__52403 = cljs.core.count(c__7032__auto___52400);
var G__52404 = (0);
seq__52289_52387 = G__52401;
chunk__52290_52388 = G__52402;
count__52291_52389 = G__52403;
i__52292_52390 = G__52404;
continue;
} else {
var vec__52296_52405 = cljs.core.first(seq__52289_52399__$1);
var col_52406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52296_52405,(0),null);
var infos_52407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52296_52405,(1),null);
encode_cols(infos_52407,source_idx_52376,line_52385,col_52406);

var G__52408 = cljs.core.next(seq__52289_52399__$1);
var G__52409 = null;
var G__52410 = (0);
var G__52411 = (0);
seq__52289_52387 = G__52408;
chunk__52290_52388 = G__52409;
count__52291_52389 = G__52410;
i__52292_52390 = G__52411;
continue;
}
} else {
}
}
break;
}

var G__52412 = seq__52282_52380;
var G__52413 = chunk__52283_52381;
var G__52414 = count__52284_52382;
var G__52415 = (i__52285_52383 + (1));
seq__52282_52380 = G__52412;
chunk__52283_52381 = G__52413;
count__52284_52382 = G__52414;
i__52285_52383 = G__52415;
continue;
} else {
var temp__4657__auto___52416 = cljs.core.seq(seq__52282_52380);
if(temp__4657__auto___52416){
var seq__52282_52417__$1 = temp__4657__auto___52416;
if(cljs.core.chunked_seq_QMARK_(seq__52282_52417__$1)){
var c__7032__auto___52418 = cljs.core.chunk_first(seq__52282_52417__$1);
var G__52419 = cljs.core.chunk_rest(seq__52282_52417__$1);
var G__52420 = c__7032__auto___52418;
var G__52421 = cljs.core.count(c__7032__auto___52418);
var G__52422 = (0);
seq__52282_52380 = G__52419;
chunk__52283_52381 = G__52420;
count__52284_52382 = G__52421;
i__52285_52383 = G__52422;
continue;
} else {
var vec__52299_52423 = cljs.core.first(seq__52282_52417__$1);
var line_52424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52299_52423,(0),null);
var cols_52425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52299_52423,(1),null);
var seq__52302_52426 = cljs.core.seq(cols_52425);
var chunk__52303_52427 = null;
var count__52304_52428 = (0);
var i__52305_52429 = (0);
while(true){
if((i__52305_52429 < count__52304_52428)){
var vec__52306_52430 = chunk__52303_52427.cljs$core$IIndexed$_nth$arity$2(null,i__52305_52429);
var col_52431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52306_52430,(0),null);
var infos_52432 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52306_52430,(1),null);
encode_cols(infos_52432,source_idx_52376,line_52424,col_52431);

var G__52433 = seq__52302_52426;
var G__52434 = chunk__52303_52427;
var G__52435 = count__52304_52428;
var G__52436 = (i__52305_52429 + (1));
seq__52302_52426 = G__52433;
chunk__52303_52427 = G__52434;
count__52304_52428 = G__52435;
i__52305_52429 = G__52436;
continue;
} else {
var temp__4657__auto___52437__$1 = cljs.core.seq(seq__52302_52426);
if(temp__4657__auto___52437__$1){
var seq__52302_52438__$1 = temp__4657__auto___52437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52302_52438__$1)){
var c__7032__auto___52439 = cljs.core.chunk_first(seq__52302_52438__$1);
var G__52440 = cljs.core.chunk_rest(seq__52302_52438__$1);
var G__52441 = c__7032__auto___52439;
var G__52442 = cljs.core.count(c__7032__auto___52439);
var G__52443 = (0);
seq__52302_52426 = G__52440;
chunk__52303_52427 = G__52441;
count__52304_52428 = G__52442;
i__52305_52429 = G__52443;
continue;
} else {
var vec__52309_52444 = cljs.core.first(seq__52302_52438__$1);
var col_52445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52309_52444,(0),null);
var infos_52446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52309_52444,(1),null);
encode_cols(infos_52446,source_idx_52376,line_52424,col_52445);

var G__52447 = cljs.core.next(seq__52302_52438__$1);
var G__52448 = null;
var G__52449 = (0);
var G__52450 = (0);
seq__52302_52426 = G__52447;
chunk__52303_52427 = G__52448;
count__52304_52428 = G__52449;
i__52305_52429 = G__52450;
continue;
}
} else {
}
}
break;
}

var G__52451 = cljs.core.next(seq__52282_52417__$1);
var G__52452 = null;
var G__52453 = (0);
var G__52454 = (0);
seq__52282_52380 = G__52451;
chunk__52283_52381 = G__52452;
count__52284_52382 = G__52453;
i__52285_52383 = G__52454;
continue;
}
} else {
}
}
break;
}

var G__52455 = seq__52272_52371;
var G__52456 = chunk__52273_52372;
var G__52457 = count__52274_52373;
var G__52458 = (i__52275_52374 + (1));
seq__52272_52371 = G__52455;
chunk__52273_52372 = G__52456;
count__52274_52373 = G__52457;
i__52275_52374 = G__52458;
continue;
} else {
var temp__4657__auto___52459 = cljs.core.seq(seq__52272_52371);
if(temp__4657__auto___52459){
var seq__52272_52460__$1 = temp__4657__auto___52459;
if(cljs.core.chunked_seq_QMARK_(seq__52272_52460__$1)){
var c__7032__auto___52461 = cljs.core.chunk_first(seq__52272_52460__$1);
var G__52462 = cljs.core.chunk_rest(seq__52272_52460__$1);
var G__52463 = c__7032__auto___52461;
var G__52464 = cljs.core.count(c__7032__auto___52461);
var G__52465 = (0);
seq__52272_52371 = G__52462;
chunk__52273_52372 = G__52463;
count__52274_52373 = G__52464;
i__52275_52374 = G__52465;
continue;
} else {
var vec__52312_52466 = cljs.core.first(seq__52272_52460__$1);
var source_idx_52467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52312_52466,(0),null);
var vec__52315_52468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52312_52466,(1),null);
var __52469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52315_52468,(0),null);
var lines_52470__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52315_52468,(1),null);
var seq__52318_52471 = cljs.core.seq(lines_52470__$1);
var chunk__52319_52472 = null;
var count__52320_52473 = (0);
var i__52321_52474 = (0);
while(true){
if((i__52321_52474 < count__52320_52473)){
var vec__52322_52475 = chunk__52319_52472.cljs$core$IIndexed$_nth$arity$2(null,i__52321_52474);
var line_52476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52322_52475,(0),null);
var cols_52477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52322_52475,(1),null);
var seq__52325_52478 = cljs.core.seq(cols_52477);
var chunk__52326_52479 = null;
var count__52327_52480 = (0);
var i__52328_52481 = (0);
while(true){
if((i__52328_52481 < count__52327_52480)){
var vec__52329_52482 = chunk__52326_52479.cljs$core$IIndexed$_nth$arity$2(null,i__52328_52481);
var col_52483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52329_52482,(0),null);
var infos_52484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52329_52482,(1),null);
encode_cols(infos_52484,source_idx_52467,line_52476,col_52483);

var G__52485 = seq__52325_52478;
var G__52486 = chunk__52326_52479;
var G__52487 = count__52327_52480;
var G__52488 = (i__52328_52481 + (1));
seq__52325_52478 = G__52485;
chunk__52326_52479 = G__52486;
count__52327_52480 = G__52487;
i__52328_52481 = G__52488;
continue;
} else {
var temp__4657__auto___52489__$1 = cljs.core.seq(seq__52325_52478);
if(temp__4657__auto___52489__$1){
var seq__52325_52490__$1 = temp__4657__auto___52489__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52325_52490__$1)){
var c__7032__auto___52491 = cljs.core.chunk_first(seq__52325_52490__$1);
var G__52492 = cljs.core.chunk_rest(seq__52325_52490__$1);
var G__52493 = c__7032__auto___52491;
var G__52494 = cljs.core.count(c__7032__auto___52491);
var G__52495 = (0);
seq__52325_52478 = G__52492;
chunk__52326_52479 = G__52493;
count__52327_52480 = G__52494;
i__52328_52481 = G__52495;
continue;
} else {
var vec__52332_52496 = cljs.core.first(seq__52325_52490__$1);
var col_52497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52332_52496,(0),null);
var infos_52498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52332_52496,(1),null);
encode_cols(infos_52498,source_idx_52467,line_52476,col_52497);

var G__52499 = cljs.core.next(seq__52325_52490__$1);
var G__52500 = null;
var G__52501 = (0);
var G__52502 = (0);
seq__52325_52478 = G__52499;
chunk__52326_52479 = G__52500;
count__52327_52480 = G__52501;
i__52328_52481 = G__52502;
continue;
}
} else {
}
}
break;
}

var G__52503 = seq__52318_52471;
var G__52504 = chunk__52319_52472;
var G__52505 = count__52320_52473;
var G__52506 = (i__52321_52474 + (1));
seq__52318_52471 = G__52503;
chunk__52319_52472 = G__52504;
count__52320_52473 = G__52505;
i__52321_52474 = G__52506;
continue;
} else {
var temp__4657__auto___52507__$1 = cljs.core.seq(seq__52318_52471);
if(temp__4657__auto___52507__$1){
var seq__52318_52508__$1 = temp__4657__auto___52507__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52318_52508__$1)){
var c__7032__auto___52509 = cljs.core.chunk_first(seq__52318_52508__$1);
var G__52510 = cljs.core.chunk_rest(seq__52318_52508__$1);
var G__52511 = c__7032__auto___52509;
var G__52512 = cljs.core.count(c__7032__auto___52509);
var G__52513 = (0);
seq__52318_52471 = G__52510;
chunk__52319_52472 = G__52511;
count__52320_52473 = G__52512;
i__52321_52474 = G__52513;
continue;
} else {
var vec__52335_52514 = cljs.core.first(seq__52318_52508__$1);
var line_52515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52335_52514,(0),null);
var cols_52516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52335_52514,(1),null);
var seq__52338_52517 = cljs.core.seq(cols_52516);
var chunk__52339_52518 = null;
var count__52340_52519 = (0);
var i__52341_52520 = (0);
while(true){
if((i__52341_52520 < count__52340_52519)){
var vec__52342_52521 = chunk__52339_52518.cljs$core$IIndexed$_nth$arity$2(null,i__52341_52520);
var col_52522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52342_52521,(0),null);
var infos_52523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52342_52521,(1),null);
encode_cols(infos_52523,source_idx_52467,line_52515,col_52522);

var G__52524 = seq__52338_52517;
var G__52525 = chunk__52339_52518;
var G__52526 = count__52340_52519;
var G__52527 = (i__52341_52520 + (1));
seq__52338_52517 = G__52524;
chunk__52339_52518 = G__52525;
count__52340_52519 = G__52526;
i__52341_52520 = G__52527;
continue;
} else {
var temp__4657__auto___52528__$2 = cljs.core.seq(seq__52338_52517);
if(temp__4657__auto___52528__$2){
var seq__52338_52529__$1 = temp__4657__auto___52528__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52338_52529__$1)){
var c__7032__auto___52530 = cljs.core.chunk_first(seq__52338_52529__$1);
var G__52531 = cljs.core.chunk_rest(seq__52338_52529__$1);
var G__52532 = c__7032__auto___52530;
var G__52533 = cljs.core.count(c__7032__auto___52530);
var G__52534 = (0);
seq__52338_52517 = G__52531;
chunk__52339_52518 = G__52532;
count__52340_52519 = G__52533;
i__52341_52520 = G__52534;
continue;
} else {
var vec__52345_52535 = cljs.core.first(seq__52338_52529__$1);
var col_52536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52345_52535,(0),null);
var infos_52537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52345_52535,(1),null);
encode_cols(infos_52537,source_idx_52467,line_52515,col_52536);

var G__52538 = cljs.core.next(seq__52338_52529__$1);
var G__52539 = null;
var G__52540 = (0);
var G__52541 = (0);
seq__52338_52517 = G__52538;
chunk__52339_52518 = G__52539;
count__52340_52519 = G__52540;
i__52341_52520 = G__52541;
continue;
}
} else {
}
}
break;
}

var G__52542 = cljs.core.next(seq__52318_52508__$1);
var G__52543 = null;
var G__52544 = (0);
var G__52545 = (0);
seq__52318_52471 = G__52542;
chunk__52319_52472 = G__52543;
count__52320_52473 = G__52544;
i__52321_52474 = G__52545;
continue;
}
} else {
}
}
break;
}

var G__52546 = cljs.core.next(seq__52272_52460__$1);
var G__52547 = null;
var G__52548 = (0);
var G__52549 = (0);
seq__52272_52371 = G__52546;
chunk__52273_52372 = G__52547;
count__52274_52373 = G__52548;
i__52275_52374 = G__52549;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__52348 = {"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__52176_SHARP_){
return [cljs.core.str(p1__52176_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__52177_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__52177_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__52178_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__52178_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__52349 = G__52348;
var G__52350_52550 = G__52349;
var G__52351_52551 = "sourcesContent";
var G__52352_52552 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__52350_52550,G__52351_52551,G__52352_52552);

return G__52349;
} else {
return G__52348;
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
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__52562 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52562,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52562,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__52565 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52565,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52565,(1),null);
var G__52571 = cljs.core.next(col_map_seq);
var G__52572 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__52565,col,infos,vec__52562,line,col_map){
return (function (v,p__52568){
var map__52569 = p__52568;
var map__52569__$1 = ((((!((map__52569 == null)))?((((map__52569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52569):map__52569);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52569__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52569__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__52565,col,infos,vec__52562,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__52571;
new_cols = G__52572;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__52573 = cljs.core.next(line_map_seq);
var G__52574 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__52573;
new_lines = G__52574;
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
var inverted = (function (){var G__52638 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__52638) : cljs.core.atom.call(null,G__52638));
})();
var seq__52639_52701 = cljs.core.seq(reverse_map);
var chunk__52640_52702 = null;
var count__52641_52703 = (0);
var i__52642_52704 = (0);
while(true){
if((i__52642_52704 < count__52641_52703)){
var vec__52643_52705 = chunk__52640_52702.cljs$core$IIndexed$_nth$arity$2(null,i__52642_52704);
var line_52706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52643_52705,(0),null);
var columns_52707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52643_52705,(1),null);
var seq__52646_52708 = cljs.core.seq(columns_52707);
var chunk__52647_52709 = null;
var count__52648_52710 = (0);
var i__52649_52711 = (0);
while(true){
if((i__52649_52711 < count__52648_52710)){
var vec__52650_52712 = chunk__52647_52709.cljs$core$IIndexed$_nth$arity$2(null,i__52649_52711);
var column_52713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52650_52712,(0),null);
var column_info_52714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52650_52712,(1),null);
var seq__52653_52715 = cljs.core.seq(column_info_52714);
var chunk__52654_52716 = null;
var count__52655_52717 = (0);
var i__52656_52718 = (0);
while(true){
if((i__52656_52718 < count__52655_52717)){
var map__52657_52719 = chunk__52654_52716.cljs$core$IIndexed$_nth$arity$2(null,i__52656_52718);
var map__52657_52720__$1 = ((((!((map__52657_52719 == null)))?((((map__52657_52719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52657_52719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52657_52719):map__52657_52719);
var gline_52721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657_52720__$1,cljs.core.cst$kw$gline);
var gcol_52722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657_52720__$1,cljs.core.cst$kw$gcol);
var name_52723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52657_52720__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52721], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52653_52715,chunk__52654_52716,count__52655_52717,i__52656_52718,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52657_52719,map__52657_52720__$1,gline_52721,gcol_52722,name_52723,vec__52650_52712,column_52713,column_info_52714,vec__52643_52705,line_52706,columns_52707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52722], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52706,cljs.core.cst$kw$col,column_52713,cljs.core.cst$kw$name,name_52723], null));
});})(seq__52653_52715,chunk__52654_52716,count__52655_52717,i__52656_52718,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52657_52719,map__52657_52720__$1,gline_52721,gcol_52722,name_52723,vec__52650_52712,column_52713,column_info_52714,vec__52643_52705,line_52706,columns_52707,inverted))
,cljs.core.sorted_map()));

var G__52724 = seq__52653_52715;
var G__52725 = chunk__52654_52716;
var G__52726 = count__52655_52717;
var G__52727 = (i__52656_52718 + (1));
seq__52653_52715 = G__52724;
chunk__52654_52716 = G__52725;
count__52655_52717 = G__52726;
i__52656_52718 = G__52727;
continue;
} else {
var temp__4657__auto___52728 = cljs.core.seq(seq__52653_52715);
if(temp__4657__auto___52728){
var seq__52653_52729__$1 = temp__4657__auto___52728;
if(cljs.core.chunked_seq_QMARK_(seq__52653_52729__$1)){
var c__7032__auto___52730 = cljs.core.chunk_first(seq__52653_52729__$1);
var G__52731 = cljs.core.chunk_rest(seq__52653_52729__$1);
var G__52732 = c__7032__auto___52730;
var G__52733 = cljs.core.count(c__7032__auto___52730);
var G__52734 = (0);
seq__52653_52715 = G__52731;
chunk__52654_52716 = G__52732;
count__52655_52717 = G__52733;
i__52656_52718 = G__52734;
continue;
} else {
var map__52659_52735 = cljs.core.first(seq__52653_52729__$1);
var map__52659_52736__$1 = ((((!((map__52659_52735 == null)))?((((map__52659_52735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52659_52735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52659_52735):map__52659_52735);
var gline_52737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659_52736__$1,cljs.core.cst$kw$gline);
var gcol_52738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659_52736__$1,cljs.core.cst$kw$gcol);
var name_52739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52659_52736__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52737], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52653_52715,chunk__52654_52716,count__52655_52717,i__52656_52718,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52659_52735,map__52659_52736__$1,gline_52737,gcol_52738,name_52739,seq__52653_52729__$1,temp__4657__auto___52728,vec__52650_52712,column_52713,column_info_52714,vec__52643_52705,line_52706,columns_52707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52738], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52706,cljs.core.cst$kw$col,column_52713,cljs.core.cst$kw$name,name_52739], null));
});})(seq__52653_52715,chunk__52654_52716,count__52655_52717,i__52656_52718,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52659_52735,map__52659_52736__$1,gline_52737,gcol_52738,name_52739,seq__52653_52729__$1,temp__4657__auto___52728,vec__52650_52712,column_52713,column_info_52714,vec__52643_52705,line_52706,columns_52707,inverted))
,cljs.core.sorted_map()));

var G__52740 = cljs.core.next(seq__52653_52729__$1);
var G__52741 = null;
var G__52742 = (0);
var G__52743 = (0);
seq__52653_52715 = G__52740;
chunk__52654_52716 = G__52741;
count__52655_52717 = G__52742;
i__52656_52718 = G__52743;
continue;
}
} else {
}
}
break;
}

var G__52744 = seq__52646_52708;
var G__52745 = chunk__52647_52709;
var G__52746 = count__52648_52710;
var G__52747 = (i__52649_52711 + (1));
seq__52646_52708 = G__52744;
chunk__52647_52709 = G__52745;
count__52648_52710 = G__52746;
i__52649_52711 = G__52747;
continue;
} else {
var temp__4657__auto___52748 = cljs.core.seq(seq__52646_52708);
if(temp__4657__auto___52748){
var seq__52646_52749__$1 = temp__4657__auto___52748;
if(cljs.core.chunked_seq_QMARK_(seq__52646_52749__$1)){
var c__7032__auto___52750 = cljs.core.chunk_first(seq__52646_52749__$1);
var G__52751 = cljs.core.chunk_rest(seq__52646_52749__$1);
var G__52752 = c__7032__auto___52750;
var G__52753 = cljs.core.count(c__7032__auto___52750);
var G__52754 = (0);
seq__52646_52708 = G__52751;
chunk__52647_52709 = G__52752;
count__52648_52710 = G__52753;
i__52649_52711 = G__52754;
continue;
} else {
var vec__52661_52755 = cljs.core.first(seq__52646_52749__$1);
var column_52756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52661_52755,(0),null);
var column_info_52757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52661_52755,(1),null);
var seq__52664_52758 = cljs.core.seq(column_info_52757);
var chunk__52665_52759 = null;
var count__52666_52760 = (0);
var i__52667_52761 = (0);
while(true){
if((i__52667_52761 < count__52666_52760)){
var map__52668_52762 = chunk__52665_52759.cljs$core$IIndexed$_nth$arity$2(null,i__52667_52761);
var map__52668_52763__$1 = ((((!((map__52668_52762 == null)))?((((map__52668_52762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52668_52762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52668_52762):map__52668_52762);
var gline_52764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52668_52763__$1,cljs.core.cst$kw$gline);
var gcol_52765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52668_52763__$1,cljs.core.cst$kw$gcol);
var name_52766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52668_52763__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52764], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52664_52758,chunk__52665_52759,count__52666_52760,i__52667_52761,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52668_52762,map__52668_52763__$1,gline_52764,gcol_52765,name_52766,vec__52661_52755,column_52756,column_info_52757,seq__52646_52749__$1,temp__4657__auto___52748,vec__52643_52705,line_52706,columns_52707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52706,cljs.core.cst$kw$col,column_52756,cljs.core.cst$kw$name,name_52766], null));
});})(seq__52664_52758,chunk__52665_52759,count__52666_52760,i__52667_52761,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52668_52762,map__52668_52763__$1,gline_52764,gcol_52765,name_52766,vec__52661_52755,column_52756,column_info_52757,seq__52646_52749__$1,temp__4657__auto___52748,vec__52643_52705,line_52706,columns_52707,inverted))
,cljs.core.sorted_map()));

var G__52767 = seq__52664_52758;
var G__52768 = chunk__52665_52759;
var G__52769 = count__52666_52760;
var G__52770 = (i__52667_52761 + (1));
seq__52664_52758 = G__52767;
chunk__52665_52759 = G__52768;
count__52666_52760 = G__52769;
i__52667_52761 = G__52770;
continue;
} else {
var temp__4657__auto___52771__$1 = cljs.core.seq(seq__52664_52758);
if(temp__4657__auto___52771__$1){
var seq__52664_52772__$1 = temp__4657__auto___52771__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52664_52772__$1)){
var c__7032__auto___52773 = cljs.core.chunk_first(seq__52664_52772__$1);
var G__52774 = cljs.core.chunk_rest(seq__52664_52772__$1);
var G__52775 = c__7032__auto___52773;
var G__52776 = cljs.core.count(c__7032__auto___52773);
var G__52777 = (0);
seq__52664_52758 = G__52774;
chunk__52665_52759 = G__52775;
count__52666_52760 = G__52776;
i__52667_52761 = G__52777;
continue;
} else {
var map__52670_52778 = cljs.core.first(seq__52664_52772__$1);
var map__52670_52779__$1 = ((((!((map__52670_52778 == null)))?((((map__52670_52778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52670_52778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52670_52778):map__52670_52778);
var gline_52780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52670_52779__$1,cljs.core.cst$kw$gline);
var gcol_52781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52670_52779__$1,cljs.core.cst$kw$gcol);
var name_52782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52670_52779__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52780], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52664_52758,chunk__52665_52759,count__52666_52760,i__52667_52761,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52670_52778,map__52670_52779__$1,gline_52780,gcol_52781,name_52782,seq__52664_52772__$1,temp__4657__auto___52771__$1,vec__52661_52755,column_52756,column_info_52757,seq__52646_52749__$1,temp__4657__auto___52748,vec__52643_52705,line_52706,columns_52707,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52781], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52706,cljs.core.cst$kw$col,column_52756,cljs.core.cst$kw$name,name_52782], null));
});})(seq__52664_52758,chunk__52665_52759,count__52666_52760,i__52667_52761,seq__52646_52708,chunk__52647_52709,count__52648_52710,i__52649_52711,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52670_52778,map__52670_52779__$1,gline_52780,gcol_52781,name_52782,seq__52664_52772__$1,temp__4657__auto___52771__$1,vec__52661_52755,column_52756,column_info_52757,seq__52646_52749__$1,temp__4657__auto___52748,vec__52643_52705,line_52706,columns_52707,inverted))
,cljs.core.sorted_map()));

var G__52783 = cljs.core.next(seq__52664_52772__$1);
var G__52784 = null;
var G__52785 = (0);
var G__52786 = (0);
seq__52664_52758 = G__52783;
chunk__52665_52759 = G__52784;
count__52666_52760 = G__52785;
i__52667_52761 = G__52786;
continue;
}
} else {
}
}
break;
}

var G__52787 = cljs.core.next(seq__52646_52749__$1);
var G__52788 = null;
var G__52789 = (0);
var G__52790 = (0);
seq__52646_52708 = G__52787;
chunk__52647_52709 = G__52788;
count__52648_52710 = G__52789;
i__52649_52711 = G__52790;
continue;
}
} else {
}
}
break;
}

var G__52791 = seq__52639_52701;
var G__52792 = chunk__52640_52702;
var G__52793 = count__52641_52703;
var G__52794 = (i__52642_52704 + (1));
seq__52639_52701 = G__52791;
chunk__52640_52702 = G__52792;
count__52641_52703 = G__52793;
i__52642_52704 = G__52794;
continue;
} else {
var temp__4657__auto___52795 = cljs.core.seq(seq__52639_52701);
if(temp__4657__auto___52795){
var seq__52639_52796__$1 = temp__4657__auto___52795;
if(cljs.core.chunked_seq_QMARK_(seq__52639_52796__$1)){
var c__7032__auto___52797 = cljs.core.chunk_first(seq__52639_52796__$1);
var G__52798 = cljs.core.chunk_rest(seq__52639_52796__$1);
var G__52799 = c__7032__auto___52797;
var G__52800 = cljs.core.count(c__7032__auto___52797);
var G__52801 = (0);
seq__52639_52701 = G__52798;
chunk__52640_52702 = G__52799;
count__52641_52703 = G__52800;
i__52642_52704 = G__52801;
continue;
} else {
var vec__52672_52802 = cljs.core.first(seq__52639_52796__$1);
var line_52803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52672_52802,(0),null);
var columns_52804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52672_52802,(1),null);
var seq__52675_52805 = cljs.core.seq(columns_52804);
var chunk__52676_52806 = null;
var count__52677_52807 = (0);
var i__52678_52808 = (0);
while(true){
if((i__52678_52808 < count__52677_52807)){
var vec__52679_52809 = chunk__52676_52806.cljs$core$IIndexed$_nth$arity$2(null,i__52678_52808);
var column_52810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52679_52809,(0),null);
var column_info_52811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52679_52809,(1),null);
var seq__52682_52812 = cljs.core.seq(column_info_52811);
var chunk__52683_52813 = null;
var count__52684_52814 = (0);
var i__52685_52815 = (0);
while(true){
if((i__52685_52815 < count__52684_52814)){
var map__52686_52816 = chunk__52683_52813.cljs$core$IIndexed$_nth$arity$2(null,i__52685_52815);
var map__52686_52817__$1 = ((((!((map__52686_52816 == null)))?((((map__52686_52816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52686_52816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52686_52816):map__52686_52816);
var gline_52818 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52686_52817__$1,cljs.core.cst$kw$gline);
var gcol_52819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52686_52817__$1,cljs.core.cst$kw$gcol);
var name_52820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52686_52817__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52818], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52682_52812,chunk__52683_52813,count__52684_52814,i__52685_52815,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52686_52816,map__52686_52817__$1,gline_52818,gcol_52819,name_52820,vec__52679_52809,column_52810,column_info_52811,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52819], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52803,cljs.core.cst$kw$col,column_52810,cljs.core.cst$kw$name,name_52820], null));
});})(seq__52682_52812,chunk__52683_52813,count__52684_52814,i__52685_52815,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52686_52816,map__52686_52817__$1,gline_52818,gcol_52819,name_52820,vec__52679_52809,column_52810,column_info_52811,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted))
,cljs.core.sorted_map()));

var G__52821 = seq__52682_52812;
var G__52822 = chunk__52683_52813;
var G__52823 = count__52684_52814;
var G__52824 = (i__52685_52815 + (1));
seq__52682_52812 = G__52821;
chunk__52683_52813 = G__52822;
count__52684_52814 = G__52823;
i__52685_52815 = G__52824;
continue;
} else {
var temp__4657__auto___52825__$1 = cljs.core.seq(seq__52682_52812);
if(temp__4657__auto___52825__$1){
var seq__52682_52826__$1 = temp__4657__auto___52825__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52682_52826__$1)){
var c__7032__auto___52827 = cljs.core.chunk_first(seq__52682_52826__$1);
var G__52828 = cljs.core.chunk_rest(seq__52682_52826__$1);
var G__52829 = c__7032__auto___52827;
var G__52830 = cljs.core.count(c__7032__auto___52827);
var G__52831 = (0);
seq__52682_52812 = G__52828;
chunk__52683_52813 = G__52829;
count__52684_52814 = G__52830;
i__52685_52815 = G__52831;
continue;
} else {
var map__52688_52832 = cljs.core.first(seq__52682_52826__$1);
var map__52688_52833__$1 = ((((!((map__52688_52832 == null)))?((((map__52688_52832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52688_52832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52688_52832):map__52688_52832);
var gline_52834 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688_52833__$1,cljs.core.cst$kw$gline);
var gcol_52835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688_52833__$1,cljs.core.cst$kw$gcol);
var name_52836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688_52833__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52834], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52682_52812,chunk__52683_52813,count__52684_52814,i__52685_52815,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52688_52832,map__52688_52833__$1,gline_52834,gcol_52835,name_52836,seq__52682_52826__$1,temp__4657__auto___52825__$1,vec__52679_52809,column_52810,column_info_52811,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52835], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52803,cljs.core.cst$kw$col,column_52810,cljs.core.cst$kw$name,name_52836], null));
});})(seq__52682_52812,chunk__52683_52813,count__52684_52814,i__52685_52815,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52688_52832,map__52688_52833__$1,gline_52834,gcol_52835,name_52836,seq__52682_52826__$1,temp__4657__auto___52825__$1,vec__52679_52809,column_52810,column_info_52811,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted))
,cljs.core.sorted_map()));

var G__52837 = cljs.core.next(seq__52682_52826__$1);
var G__52838 = null;
var G__52839 = (0);
var G__52840 = (0);
seq__52682_52812 = G__52837;
chunk__52683_52813 = G__52838;
count__52684_52814 = G__52839;
i__52685_52815 = G__52840;
continue;
}
} else {
}
}
break;
}

var G__52841 = seq__52675_52805;
var G__52842 = chunk__52676_52806;
var G__52843 = count__52677_52807;
var G__52844 = (i__52678_52808 + (1));
seq__52675_52805 = G__52841;
chunk__52676_52806 = G__52842;
count__52677_52807 = G__52843;
i__52678_52808 = G__52844;
continue;
} else {
var temp__4657__auto___52845__$1 = cljs.core.seq(seq__52675_52805);
if(temp__4657__auto___52845__$1){
var seq__52675_52846__$1 = temp__4657__auto___52845__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52675_52846__$1)){
var c__7032__auto___52847 = cljs.core.chunk_first(seq__52675_52846__$1);
var G__52848 = cljs.core.chunk_rest(seq__52675_52846__$1);
var G__52849 = c__7032__auto___52847;
var G__52850 = cljs.core.count(c__7032__auto___52847);
var G__52851 = (0);
seq__52675_52805 = G__52848;
chunk__52676_52806 = G__52849;
count__52677_52807 = G__52850;
i__52678_52808 = G__52851;
continue;
} else {
var vec__52690_52852 = cljs.core.first(seq__52675_52846__$1);
var column_52853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52690_52852,(0),null);
var column_info_52854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52690_52852,(1),null);
var seq__52693_52855 = cljs.core.seq(column_info_52854);
var chunk__52694_52856 = null;
var count__52695_52857 = (0);
var i__52696_52858 = (0);
while(true){
if((i__52696_52858 < count__52695_52857)){
var map__52697_52859 = chunk__52694_52856.cljs$core$IIndexed$_nth$arity$2(null,i__52696_52858);
var map__52697_52860__$1 = ((((!((map__52697_52859 == null)))?((((map__52697_52859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52697_52859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52697_52859):map__52697_52859);
var gline_52861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697_52860__$1,cljs.core.cst$kw$gline);
var gcol_52862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697_52860__$1,cljs.core.cst$kw$gcol);
var name_52863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52697_52860__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52861], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52693_52855,chunk__52694_52856,count__52695_52857,i__52696_52858,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52697_52859,map__52697_52860__$1,gline_52861,gcol_52862,name_52863,vec__52690_52852,column_52853,column_info_52854,seq__52675_52846__$1,temp__4657__auto___52845__$1,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52862], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52803,cljs.core.cst$kw$col,column_52853,cljs.core.cst$kw$name,name_52863], null));
});})(seq__52693_52855,chunk__52694_52856,count__52695_52857,i__52696_52858,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52697_52859,map__52697_52860__$1,gline_52861,gcol_52862,name_52863,vec__52690_52852,column_52853,column_info_52854,seq__52675_52846__$1,temp__4657__auto___52845__$1,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted))
,cljs.core.sorted_map()));

var G__52864 = seq__52693_52855;
var G__52865 = chunk__52694_52856;
var G__52866 = count__52695_52857;
var G__52867 = (i__52696_52858 + (1));
seq__52693_52855 = G__52864;
chunk__52694_52856 = G__52865;
count__52695_52857 = G__52866;
i__52696_52858 = G__52867;
continue;
} else {
var temp__4657__auto___52868__$2 = cljs.core.seq(seq__52693_52855);
if(temp__4657__auto___52868__$2){
var seq__52693_52869__$1 = temp__4657__auto___52868__$2;
if(cljs.core.chunked_seq_QMARK_(seq__52693_52869__$1)){
var c__7032__auto___52870 = cljs.core.chunk_first(seq__52693_52869__$1);
var G__52871 = cljs.core.chunk_rest(seq__52693_52869__$1);
var G__52872 = c__7032__auto___52870;
var G__52873 = cljs.core.count(c__7032__auto___52870);
var G__52874 = (0);
seq__52693_52855 = G__52871;
chunk__52694_52856 = G__52872;
count__52695_52857 = G__52873;
i__52696_52858 = G__52874;
continue;
} else {
var map__52699_52875 = cljs.core.first(seq__52693_52869__$1);
var map__52699_52876__$1 = ((((!((map__52699_52875 == null)))?((((map__52699_52875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52699_52875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52699_52875):map__52699_52875);
var gline_52877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699_52876__$1,cljs.core.cst$kw$gline);
var gcol_52878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699_52876__$1,cljs.core.cst$kw$gcol);
var name_52879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52699_52876__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_52877], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__52693_52855,chunk__52694_52856,count__52695_52857,i__52696_52858,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52699_52875,map__52699_52876__$1,gline_52877,gcol_52878,name_52879,seq__52693_52869__$1,temp__4657__auto___52868__$2,vec__52690_52852,column_52853,column_info_52854,seq__52675_52846__$1,temp__4657__auto___52845__$1,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_52878], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_52803,cljs.core.cst$kw$col,column_52853,cljs.core.cst$kw$name,name_52879], null));
});})(seq__52693_52855,chunk__52694_52856,count__52695_52857,i__52696_52858,seq__52675_52805,chunk__52676_52806,count__52677_52807,i__52678_52808,seq__52639_52701,chunk__52640_52702,count__52641_52703,i__52642_52704,map__52699_52875,map__52699_52876__$1,gline_52877,gcol_52878,name_52879,seq__52693_52869__$1,temp__4657__auto___52868__$2,vec__52690_52852,column_52853,column_info_52854,seq__52675_52846__$1,temp__4657__auto___52845__$1,vec__52672_52802,line_52803,columns_52804,seq__52639_52796__$1,temp__4657__auto___52795,inverted))
,cljs.core.sorted_map()));

var G__52880 = cljs.core.next(seq__52693_52869__$1);
var G__52881 = null;
var G__52882 = (0);
var G__52883 = (0);
seq__52693_52855 = G__52880;
chunk__52694_52856 = G__52881;
count__52695_52857 = G__52882;
i__52696_52858 = G__52883;
continue;
}
} else {
}
}
break;
}

var G__52884 = cljs.core.next(seq__52675_52846__$1);
var G__52885 = null;
var G__52886 = (0);
var G__52887 = (0);
seq__52675_52805 = G__52884;
chunk__52676_52806 = G__52885;
count__52677_52807 = G__52886;
i__52678_52808 = G__52887;
continue;
}
} else {
}
}
break;
}

var G__52888 = cljs.core.next(seq__52639_52796__$1);
var G__52889 = null;
var G__52890 = (0);
var G__52891 = (0);
seq__52639_52701 = G__52888;
chunk__52640_52702 = G__52889;
count__52641_52703 = G__52890;
i__52642_52704 = G__52891;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});
