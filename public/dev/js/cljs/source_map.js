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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__24152){
var vec__24153 = p__24152;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24153,(1),null);
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
var vec__24198 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24198,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24198,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24198,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24198,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24198,(4),null);
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
var vec__24228 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24228,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24228,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24228,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24228,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24228,(4),null);
var vec__24231 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24231,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24231,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24231,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24231,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24231,(4),null);
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
var map__24244 = segmap;
var map__24244__$1 = ((((!((map__24244 == null)))?((((map__24244.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24244.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24244):map__24244);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24244__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$gline,gline,cljs.core.cst$kw$gcol,gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__24244,map__24244__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__24244,map__24244__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__24244,map__24244__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__24244,map__24244__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__24244,map__24244__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__24244,map__24244__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args24254 = [];
var len__7296__auto___24260 = arguments.length;
var i__7297__auto___24261 = (0);
while(true){
if((i__7297__auto___24261 < len__7296__auto___24260)){
args24254.push((arguments[i__7297__auto___24261]));

var G__24262 = (i__7297__auto___24261 + (1));
i__7297__auto___24261 = G__24262;
continue;
} else {
}
break;
}

var G__24256 = args24254.length;
switch (G__24256) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24254.length)].join('')));

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
var vec__24257 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__24266 = cljs.core.next(segs__$1);
var G__24267 = nrelseg;
var G__24268 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__24266;
relseg__$1 = G__24267;
result__$1 = G__24268;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24257,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24257,(1),null);
var G__24269 = (gline + (1));
var G__24270 = cljs.core.next(lines__$1);
var G__24271 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__24272 = result__$1;
gline = G__24269;
lines__$1 = G__24270;
relseg = G__24271;
result = G__24272;
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
var map__24276 = segmap;
var map__24276__$1 = ((((!((map__24276 == null)))?((((map__24276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24276):map__24276);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276__$1,cljs.core.cst$kw$gcol);
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276__$1,cljs.core.cst$kw$source);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276__$1,cljs.core.cst$kw$line);
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276__$1,cljs.core.cst$kw$col);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24276__$1,cljs.core.cst$kw$name);
var d = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$col,col,cljs.core.cst$kw$source,source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.cst$kw$name,name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__24276,map__24276__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__24276,map__24276__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__24273_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24273_SHARP_,d__$1);
});})(map__24276,map__24276__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__24276,map__24276__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args24288 = [];
var len__7296__auto___24294 = arguments.length;
var i__7297__auto___24295 = (0);
while(true){
if((i__7297__auto___24295 < len__7296__auto___24294)){
args24288.push((arguments[i__7297__auto___24295]));

var G__24296 = (i__7297__auto___24295 + (1));
i__7297__auto___24295 = G__24296;
continue;
} else {
}
break;
}

var G__24290 = args24288.length;
switch (G__24290) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24288.length)].join('')));

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
var vec__24291 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__24342 = cljs.core.next(segs__$1);
var G__24343 = nrelseg;
var G__24344 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__24342;
relseg__$1 = G__24343;
result__$1 = G__24344;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24291,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24291,(1),null);
var G__24346 = (gline + (1));
var G__24347 = cljs.core.next(lines__$1);
var G__24348 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__24349 = result__$1;
gline = G__24346;
lines__$1 = G__24347;
relseg = G__24348;
result = G__24349;
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
var relseg = (function (){var G__24380 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24380) : cljs.core.atom.call(null,G__24380));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__24381){
var vec__24382 = p__24381;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24382,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24382,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24382,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24382,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24382,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__24386){
var vec__24387 = p__24386;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387,(4),null);
var seg = vec__24387;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__24387,gcol,sidx,line,col,name,seg,relseg){
return (function (p__24390){
var vec__24395 = p__24390;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24395,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__24387,gcol,sidx,line,col,name,seg,relseg))
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
var lines = (function (){var G__24553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24553) : cljs.core.atom.call(null,G__24553));
})();
var names__GT_idx = (function (){var G__24554 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24554) : cljs.core.atom.call(null,G__24554));
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
var seq__24556 = cljs.core.seq(infos);
var chunk__24557 = null;
var count__24558 = (0);
var i__24559 = (0);
while(true){
if((i__24559 < count__24558)){
var info = chunk__24557.cljs$core$IIndexed$_nth$arity$2(null,i__24559);
var segv_24704 = info__GT_segv(info,source_idx,line,col);
var gline_24705 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_24706 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_24705 > (lc_24706 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__24556,chunk__24557,count__24558,i__24559,segv_24704,gline_24705,lc_24706,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_24705 - (lc_24706 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24704], null));
});})(seq__24556,chunk__24557,count__24558,i__24559,segv_24704,gline_24705,lc_24706,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__24556,chunk__24557,count__24558,i__24559,segv_24704,gline_24705,lc_24706,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24705], null),cljs.core.conj,segv_24704);
});})(seq__24556,chunk__24557,count__24558,i__24559,segv_24704,gline_24705,lc_24706,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__24714 = seq__24556;
var G__24715 = chunk__24557;
var G__24716 = count__24558;
var G__24717 = (i__24559 + (1));
seq__24556 = G__24714;
chunk__24557 = G__24715;
count__24558 = G__24716;
i__24559 = G__24717;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__24556);
if(temp__4657__auto__){
var seq__24556__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24556__$1)){
var c__7032__auto__ = cljs.core.chunk_first(seq__24556__$1);
var G__24724 = cljs.core.chunk_rest(seq__24556__$1);
var G__24725 = c__7032__auto__;
var G__24726 = cljs.core.count(c__7032__auto__);
var G__24727 = (0);
seq__24556 = G__24724;
chunk__24557 = G__24725;
count__24558 = G__24726;
i__24559 = G__24727;
continue;
} else {
var info = cljs.core.first(seq__24556__$1);
var segv_24728 = info__GT_segv(info,source_idx,line,col);
var gline_24729 = cljs.core.cst$kw$gline.cljs$core$IFn$_invoke$arity$1(info);
var lc_24730 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_24729 > (lc_24730 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__24556,chunk__24557,count__24558,i__24559,segv_24728,gline_24729,lc_24730,info,seq__24556__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_24729 - (lc_24730 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_24728], null));
});})(seq__24556,chunk__24557,count__24558,i__24559,segv_24728,gline_24729,lc_24730,info,seq__24556__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__24556,chunk__24557,count__24558,i__24559,segv_24728,gline_24729,lc_24730,info,seq__24556__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_24729], null),cljs.core.conj,segv_24728);
});})(seq__24556,chunk__24557,count__24558,i__24559,segv_24728,gline_24729,lc_24730,info,seq__24556__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__24738 = cljs.core.next(seq__24556__$1);
var G__24739 = null;
var G__24740 = (0);
var G__24741 = (0);
seq__24556 = G__24738;
chunk__24557 = G__24739;
count__24558 = G__24740;
i__24559 = G__24741;
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
var seq__24563_24742 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__24564_24743 = null;
var count__24565_24744 = (0);
var i__24566_24745 = (0);
while(true){
if((i__24566_24745 < count__24565_24744)){
var vec__24567_24748 = chunk__24564_24743.cljs$core$IIndexed$_nth$arity$2(null,i__24566_24745);
var source_idx_24749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567_24748,(0),null);
var vec__24570_24750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24567_24748,(1),null);
var __24751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24570_24750,(0),null);
var lines_24752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24570_24750,(1),null);
var seq__24573_24764 = cljs.core.seq(lines_24752__$1);
var chunk__24574_24765 = null;
var count__24575_24766 = (0);
var i__24576_24767 = (0);
while(true){
if((i__24576_24767 < count__24575_24766)){
var vec__24577_24768 = chunk__24574_24765.cljs$core$IIndexed$_nth$arity$2(null,i__24576_24767);
var line_24769 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24577_24768,(0),null);
var cols_24770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24577_24768,(1),null);
var seq__24580_24774 = cljs.core.seq(cols_24770);
var chunk__24581_24775 = null;
var count__24582_24776 = (0);
var i__24583_24777 = (0);
while(true){
if((i__24583_24777 < count__24582_24776)){
var vec__24584_24779 = chunk__24581_24775.cljs$core$IIndexed$_nth$arity$2(null,i__24583_24777);
var col_24780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24584_24779,(0),null);
var infos_24781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24584_24779,(1),null);
encode_cols(infos_24781,source_idx_24749,line_24769,col_24780);

var G__24784 = seq__24580_24774;
var G__24785 = chunk__24581_24775;
var G__24786 = count__24582_24776;
var G__24787 = (i__24583_24777 + (1));
seq__24580_24774 = G__24784;
chunk__24581_24775 = G__24785;
count__24582_24776 = G__24786;
i__24583_24777 = G__24787;
continue;
} else {
var temp__4657__auto___24788 = cljs.core.seq(seq__24580_24774);
if(temp__4657__auto___24788){
var seq__24580_24792__$1 = temp__4657__auto___24788;
if(cljs.core.chunked_seq_QMARK_(seq__24580_24792__$1)){
var c__7032__auto___24793 = cljs.core.chunk_first(seq__24580_24792__$1);
var G__24794 = cljs.core.chunk_rest(seq__24580_24792__$1);
var G__24795 = c__7032__auto___24793;
var G__24796 = cljs.core.count(c__7032__auto___24793);
var G__24797 = (0);
seq__24580_24774 = G__24794;
chunk__24581_24775 = G__24795;
count__24582_24776 = G__24796;
i__24583_24777 = G__24797;
continue;
} else {
var vec__24587_24798 = cljs.core.first(seq__24580_24792__$1);
var col_24799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24587_24798,(0),null);
var infos_24800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24587_24798,(1),null);
encode_cols(infos_24800,source_idx_24749,line_24769,col_24799);

var G__24801 = cljs.core.next(seq__24580_24792__$1);
var G__24802 = null;
var G__24803 = (0);
var G__24804 = (0);
seq__24580_24774 = G__24801;
chunk__24581_24775 = G__24802;
count__24582_24776 = G__24803;
i__24583_24777 = G__24804;
continue;
}
} else {
}
}
break;
}

var G__24811 = seq__24573_24764;
var G__24812 = chunk__24574_24765;
var G__24813 = count__24575_24766;
var G__24814 = (i__24576_24767 + (1));
seq__24573_24764 = G__24811;
chunk__24574_24765 = G__24812;
count__24575_24766 = G__24813;
i__24576_24767 = G__24814;
continue;
} else {
var temp__4657__auto___24815 = cljs.core.seq(seq__24573_24764);
if(temp__4657__auto___24815){
var seq__24573_24817__$1 = temp__4657__auto___24815;
if(cljs.core.chunked_seq_QMARK_(seq__24573_24817__$1)){
var c__7032__auto___24818 = cljs.core.chunk_first(seq__24573_24817__$1);
var G__24819 = cljs.core.chunk_rest(seq__24573_24817__$1);
var G__24820 = c__7032__auto___24818;
var G__24821 = cljs.core.count(c__7032__auto___24818);
var G__24822 = (0);
seq__24573_24764 = G__24819;
chunk__24574_24765 = G__24820;
count__24575_24766 = G__24821;
i__24576_24767 = G__24822;
continue;
} else {
var vec__24590_24823 = cljs.core.first(seq__24573_24817__$1);
var line_24824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24590_24823,(0),null);
var cols_24825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24590_24823,(1),null);
var seq__24593_24826 = cljs.core.seq(cols_24825);
var chunk__24594_24827 = null;
var count__24595_24828 = (0);
var i__24596_24829 = (0);
while(true){
if((i__24596_24829 < count__24595_24828)){
var vec__24597_24830 = chunk__24594_24827.cljs$core$IIndexed$_nth$arity$2(null,i__24596_24829);
var col_24831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24597_24830,(0),null);
var infos_24832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24597_24830,(1),null);
encode_cols(infos_24832,source_idx_24749,line_24824,col_24831);

var G__24836 = seq__24593_24826;
var G__24837 = chunk__24594_24827;
var G__24838 = count__24595_24828;
var G__24839 = (i__24596_24829 + (1));
seq__24593_24826 = G__24836;
chunk__24594_24827 = G__24837;
count__24595_24828 = G__24838;
i__24596_24829 = G__24839;
continue;
} else {
var temp__4657__auto___24841__$1 = cljs.core.seq(seq__24593_24826);
if(temp__4657__auto___24841__$1){
var seq__24593_24842__$1 = temp__4657__auto___24841__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24593_24842__$1)){
var c__7032__auto___24844 = cljs.core.chunk_first(seq__24593_24842__$1);
var G__24845 = cljs.core.chunk_rest(seq__24593_24842__$1);
var G__24846 = c__7032__auto___24844;
var G__24847 = cljs.core.count(c__7032__auto___24844);
var G__24848 = (0);
seq__24593_24826 = G__24845;
chunk__24594_24827 = G__24846;
count__24595_24828 = G__24847;
i__24596_24829 = G__24848;
continue;
} else {
var vec__24600_24851 = cljs.core.first(seq__24593_24842__$1);
var col_24852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24600_24851,(0),null);
var infos_24853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24600_24851,(1),null);
encode_cols(infos_24853,source_idx_24749,line_24824,col_24852);

var G__24856 = cljs.core.next(seq__24593_24842__$1);
var G__24857 = null;
var G__24858 = (0);
var G__24859 = (0);
seq__24593_24826 = G__24856;
chunk__24594_24827 = G__24857;
count__24595_24828 = G__24858;
i__24596_24829 = G__24859;
continue;
}
} else {
}
}
break;
}

var G__24860 = cljs.core.next(seq__24573_24817__$1);
var G__24861 = null;
var G__24862 = (0);
var G__24863 = (0);
seq__24573_24764 = G__24860;
chunk__24574_24765 = G__24861;
count__24575_24766 = G__24862;
i__24576_24767 = G__24863;
continue;
}
} else {
}
}
break;
}

var G__24864 = seq__24563_24742;
var G__24865 = chunk__24564_24743;
var G__24866 = count__24565_24744;
var G__24867 = (i__24566_24745 + (1));
seq__24563_24742 = G__24864;
chunk__24564_24743 = G__24865;
count__24565_24744 = G__24866;
i__24566_24745 = G__24867;
continue;
} else {
var temp__4657__auto___24868 = cljs.core.seq(seq__24563_24742);
if(temp__4657__auto___24868){
var seq__24563_24869__$1 = temp__4657__auto___24868;
if(cljs.core.chunked_seq_QMARK_(seq__24563_24869__$1)){
var c__7032__auto___24870 = cljs.core.chunk_first(seq__24563_24869__$1);
var G__24871 = cljs.core.chunk_rest(seq__24563_24869__$1);
var G__24872 = c__7032__auto___24870;
var G__24873 = cljs.core.count(c__7032__auto___24870);
var G__24874 = (0);
seq__24563_24742 = G__24871;
chunk__24564_24743 = G__24872;
count__24565_24744 = G__24873;
i__24566_24745 = G__24874;
continue;
} else {
var vec__24603_24875 = cljs.core.first(seq__24563_24869__$1);
var source_idx_24876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24603_24875,(0),null);
var vec__24606_24877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24603_24875,(1),null);
var __24878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24606_24877,(0),null);
var lines_24879__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24606_24877,(1),null);
var seq__24609_24880 = cljs.core.seq(lines_24879__$1);
var chunk__24610_24881 = null;
var count__24611_24882 = (0);
var i__24612_24883 = (0);
while(true){
if((i__24612_24883 < count__24611_24882)){
var vec__24613_24884 = chunk__24610_24881.cljs$core$IIndexed$_nth$arity$2(null,i__24612_24883);
var line_24885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24613_24884,(0),null);
var cols_24886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24613_24884,(1),null);
var seq__24616_24887 = cljs.core.seq(cols_24886);
var chunk__24617_24888 = null;
var count__24618_24889 = (0);
var i__24619_24890 = (0);
while(true){
if((i__24619_24890 < count__24618_24889)){
var vec__24620_24901 = chunk__24617_24888.cljs$core$IIndexed$_nth$arity$2(null,i__24619_24890);
var col_24902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24620_24901,(0),null);
var infos_24903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24620_24901,(1),null);
encode_cols(infos_24903,source_idx_24876,line_24885,col_24902);

var G__24904 = seq__24616_24887;
var G__24905 = chunk__24617_24888;
var G__24906 = count__24618_24889;
var G__24907 = (i__24619_24890 + (1));
seq__24616_24887 = G__24904;
chunk__24617_24888 = G__24905;
count__24618_24889 = G__24906;
i__24619_24890 = G__24907;
continue;
} else {
var temp__4657__auto___24909__$1 = cljs.core.seq(seq__24616_24887);
if(temp__4657__auto___24909__$1){
var seq__24616_24910__$1 = temp__4657__auto___24909__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24616_24910__$1)){
var c__7032__auto___24911 = cljs.core.chunk_first(seq__24616_24910__$1);
var G__24912 = cljs.core.chunk_rest(seq__24616_24910__$1);
var G__24913 = c__7032__auto___24911;
var G__24914 = cljs.core.count(c__7032__auto___24911);
var G__24915 = (0);
seq__24616_24887 = G__24912;
chunk__24617_24888 = G__24913;
count__24618_24889 = G__24914;
i__24619_24890 = G__24915;
continue;
} else {
var vec__24623_24916 = cljs.core.first(seq__24616_24910__$1);
var col_24917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24623_24916,(0),null);
var infos_24918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24623_24916,(1),null);
encode_cols(infos_24918,source_idx_24876,line_24885,col_24917);

var G__24919 = cljs.core.next(seq__24616_24910__$1);
var G__24920 = null;
var G__24921 = (0);
var G__24922 = (0);
seq__24616_24887 = G__24919;
chunk__24617_24888 = G__24920;
count__24618_24889 = G__24921;
i__24619_24890 = G__24922;
continue;
}
} else {
}
}
break;
}

var G__24924 = seq__24609_24880;
var G__24925 = chunk__24610_24881;
var G__24926 = count__24611_24882;
var G__24927 = (i__24612_24883 + (1));
seq__24609_24880 = G__24924;
chunk__24610_24881 = G__24925;
count__24611_24882 = G__24926;
i__24612_24883 = G__24927;
continue;
} else {
var temp__4657__auto___24928__$1 = cljs.core.seq(seq__24609_24880);
if(temp__4657__auto___24928__$1){
var seq__24609_24929__$1 = temp__4657__auto___24928__$1;
if(cljs.core.chunked_seq_QMARK_(seq__24609_24929__$1)){
var c__7032__auto___24930 = cljs.core.chunk_first(seq__24609_24929__$1);
var G__24931 = cljs.core.chunk_rest(seq__24609_24929__$1);
var G__24932 = c__7032__auto___24930;
var G__24933 = cljs.core.count(c__7032__auto___24930);
var G__24934 = (0);
seq__24609_24880 = G__24931;
chunk__24610_24881 = G__24932;
count__24611_24882 = G__24933;
i__24612_24883 = G__24934;
continue;
} else {
var vec__24626_24935 = cljs.core.first(seq__24609_24929__$1);
var line_24936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24626_24935,(0),null);
var cols_24937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24626_24935,(1),null);
var seq__24629_24938 = cljs.core.seq(cols_24937);
var chunk__24630_24939 = null;
var count__24631_24940 = (0);
var i__24632_24941 = (0);
while(true){
if((i__24632_24941 < count__24631_24940)){
var vec__24633_24942 = chunk__24630_24939.cljs$core$IIndexed$_nth$arity$2(null,i__24632_24941);
var col_24943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24633_24942,(0),null);
var infos_24944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24633_24942,(1),null);
encode_cols(infos_24944,source_idx_24876,line_24936,col_24943);

var G__24945 = seq__24629_24938;
var G__24946 = chunk__24630_24939;
var G__24947 = count__24631_24940;
var G__24948 = (i__24632_24941 + (1));
seq__24629_24938 = G__24945;
chunk__24630_24939 = G__24946;
count__24631_24940 = G__24947;
i__24632_24941 = G__24948;
continue;
} else {
var temp__4657__auto___24949__$2 = cljs.core.seq(seq__24629_24938);
if(temp__4657__auto___24949__$2){
var seq__24629_24963__$1 = temp__4657__auto___24949__$2;
if(cljs.core.chunked_seq_QMARK_(seq__24629_24963__$1)){
var c__7032__auto___24964 = cljs.core.chunk_first(seq__24629_24963__$1);
var G__24965 = cljs.core.chunk_rest(seq__24629_24963__$1);
var G__24966 = c__7032__auto___24964;
var G__24967 = cljs.core.count(c__7032__auto___24964);
var G__24968 = (0);
seq__24629_24938 = G__24965;
chunk__24630_24939 = G__24966;
count__24631_24940 = G__24967;
i__24632_24941 = G__24968;
continue;
} else {
var vec__24636_24969 = cljs.core.first(seq__24629_24963__$1);
var col_24970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24636_24969,(0),null);
var infos_24971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24636_24969,(1),null);
encode_cols(infos_24971,source_idx_24876,line_24936,col_24970);

var G__24972 = cljs.core.next(seq__24629_24963__$1);
var G__24973 = null;
var G__24974 = (0);
var G__24975 = (0);
seq__24629_24938 = G__24972;
chunk__24630_24939 = G__24973;
count__24631_24940 = G__24974;
i__24632_24941 = G__24975;
continue;
}
} else {
}
}
break;
}

var G__24976 = cljs.core.next(seq__24609_24929__$1);
var G__24977 = null;
var G__24978 = (0);
var G__24979 = (0);
seq__24609_24880 = G__24976;
chunk__24610_24881 = G__24977;
count__24611_24882 = G__24978;
i__24612_24883 = G__24979;
continue;
}
} else {
}
}
break;
}

var G__24982 = cljs.core.next(seq__24563_24869__$1);
var G__24983 = null;
var G__24984 = (0);
var G__24985 = (0);
seq__24563_24742 = G__24982;
chunk__24564_24743 = G__24983;
count__24565_24744 = G__24984;
i__24566_24745 = G__24985;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__24639 = {"version": (3), "file": cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((cljs.core.cst$kw$source_DASH_map_DASH_timestamp.cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24434_SHARP_){
return [cljs.core.str(p1__24434_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24435_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__24435_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": cljs.core.cst$kw$lines.cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__24436_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__24436_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
if(cljs.core.truth_(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts))){
var G__24679 = G__24639;
var G__24680_25005 = G__24679;
var G__24681_25006 = "sourcesContent";
var G__24682_25007 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$sources_DASH_content.cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__24680_25005,G__24681_25006,G__24682_25007);

return G__24679;
} else {
return G__24639;
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
var vec__25026 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25026,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25026,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__25030 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25030,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25030,(1),null);
var G__25044 = cljs.core.next(col_map_seq);
var G__25045 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__25030,col,infos,vec__25026,line,col_map){
return (function (v,p__25033){
var map__25034 = p__25033;
var map__25034__$1 = ((((!((map__25034 == null)))?((((map__25034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25034):map__25034);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,cljs.core.cst$kw$gline);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25034__$1,cljs.core.cst$kw$gcol);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__25030,col,infos,vec__25026,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__25044;
new_cols = G__25045;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__25053 = cljs.core.next(line_map_seq);
var G__25054 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__25053;
new_lines = G__25054;
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
var inverted = (function (){var G__25135 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25135) : cljs.core.atom.call(null,G__25135));
})();
var seq__25136_25218 = cljs.core.seq(reverse_map);
var chunk__25137_25219 = null;
var count__25138_25220 = (0);
var i__25139_25221 = (0);
while(true){
if((i__25139_25221 < count__25138_25220)){
var vec__25140_25222 = chunk__25137_25219.cljs$core$IIndexed$_nth$arity$2(null,i__25139_25221);
var line_25223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140_25222,(0),null);
var columns_25224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25140_25222,(1),null);
var seq__25143_25225 = cljs.core.seq(columns_25224);
var chunk__25144_25226 = null;
var count__25145_25227 = (0);
var i__25146_25228 = (0);
while(true){
if((i__25146_25228 < count__25145_25227)){
var vec__25147_25229 = chunk__25144_25226.cljs$core$IIndexed$_nth$arity$2(null,i__25146_25228);
var column_25230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25147_25229,(0),null);
var column_info_25231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25147_25229,(1),null);
var seq__25150_25232 = cljs.core.seq(column_info_25231);
var chunk__25151_25233 = null;
var count__25152_25234 = (0);
var i__25153_25235 = (0);
while(true){
if((i__25153_25235 < count__25152_25234)){
var map__25154_25236 = chunk__25151_25233.cljs$core$IIndexed$_nth$arity$2(null,i__25153_25235);
var map__25154_25237__$1 = ((((!((map__25154_25236 == null)))?((((map__25154_25236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25154_25236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25154_25236):map__25154_25236);
var gline_25238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154_25237__$1,cljs.core.cst$kw$gline);
var gcol_25239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154_25237__$1,cljs.core.cst$kw$gcol);
var name_25240 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25154_25237__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25238], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25150_25232,chunk__25151_25233,count__25152_25234,i__25153_25235,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25154_25236,map__25154_25237__$1,gline_25238,gcol_25239,name_25240,vec__25147_25229,column_25230,column_info_25231,vec__25140_25222,line_25223,columns_25224,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25239], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25223,cljs.core.cst$kw$col,column_25230,cljs.core.cst$kw$name,name_25240], null));
});})(seq__25150_25232,chunk__25151_25233,count__25152_25234,i__25153_25235,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25154_25236,map__25154_25237__$1,gline_25238,gcol_25239,name_25240,vec__25147_25229,column_25230,column_info_25231,vec__25140_25222,line_25223,columns_25224,inverted))
,cljs.core.sorted_map()));

var G__25244 = seq__25150_25232;
var G__25245 = chunk__25151_25233;
var G__25246 = count__25152_25234;
var G__25247 = (i__25153_25235 + (1));
seq__25150_25232 = G__25244;
chunk__25151_25233 = G__25245;
count__25152_25234 = G__25246;
i__25153_25235 = G__25247;
continue;
} else {
var temp__4657__auto___25250 = cljs.core.seq(seq__25150_25232);
if(temp__4657__auto___25250){
var seq__25150_25252__$1 = temp__4657__auto___25250;
if(cljs.core.chunked_seq_QMARK_(seq__25150_25252__$1)){
var c__7032__auto___25253 = cljs.core.chunk_first(seq__25150_25252__$1);
var G__25255 = cljs.core.chunk_rest(seq__25150_25252__$1);
var G__25256 = c__7032__auto___25253;
var G__25257 = cljs.core.count(c__7032__auto___25253);
var G__25258 = (0);
seq__25150_25232 = G__25255;
chunk__25151_25233 = G__25256;
count__25152_25234 = G__25257;
i__25153_25235 = G__25258;
continue;
} else {
var map__25160_25259 = cljs.core.first(seq__25150_25252__$1);
var map__25160_25260__$1 = ((((!((map__25160_25259 == null)))?((((map__25160_25259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25160_25259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25160_25259):map__25160_25259);
var gline_25261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25160_25260__$1,cljs.core.cst$kw$gline);
var gcol_25262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25160_25260__$1,cljs.core.cst$kw$gcol);
var name_25263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25160_25260__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25261], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25150_25232,chunk__25151_25233,count__25152_25234,i__25153_25235,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25160_25259,map__25160_25260__$1,gline_25261,gcol_25262,name_25263,seq__25150_25252__$1,temp__4657__auto___25250,vec__25147_25229,column_25230,column_info_25231,vec__25140_25222,line_25223,columns_25224,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25262], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25223,cljs.core.cst$kw$col,column_25230,cljs.core.cst$kw$name,name_25263], null));
});})(seq__25150_25232,chunk__25151_25233,count__25152_25234,i__25153_25235,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25160_25259,map__25160_25260__$1,gline_25261,gcol_25262,name_25263,seq__25150_25252__$1,temp__4657__auto___25250,vec__25147_25229,column_25230,column_info_25231,vec__25140_25222,line_25223,columns_25224,inverted))
,cljs.core.sorted_map()));

var G__25268 = cljs.core.next(seq__25150_25252__$1);
var G__25269 = null;
var G__25270 = (0);
var G__25271 = (0);
seq__25150_25232 = G__25268;
chunk__25151_25233 = G__25269;
count__25152_25234 = G__25270;
i__25153_25235 = G__25271;
continue;
}
} else {
}
}
break;
}

var G__25272 = seq__25143_25225;
var G__25273 = chunk__25144_25226;
var G__25274 = count__25145_25227;
var G__25275 = (i__25146_25228 + (1));
seq__25143_25225 = G__25272;
chunk__25144_25226 = G__25273;
count__25145_25227 = G__25274;
i__25146_25228 = G__25275;
continue;
} else {
var temp__4657__auto___25284 = cljs.core.seq(seq__25143_25225);
if(temp__4657__auto___25284){
var seq__25143_25285__$1 = temp__4657__auto___25284;
if(cljs.core.chunked_seq_QMARK_(seq__25143_25285__$1)){
var c__7032__auto___25287 = cljs.core.chunk_first(seq__25143_25285__$1);
var G__25288 = cljs.core.chunk_rest(seq__25143_25285__$1);
var G__25289 = c__7032__auto___25287;
var G__25290 = cljs.core.count(c__7032__auto___25287);
var G__25291 = (0);
seq__25143_25225 = G__25288;
chunk__25144_25226 = G__25289;
count__25145_25227 = G__25290;
i__25146_25228 = G__25291;
continue;
} else {
var vec__25162_25293 = cljs.core.first(seq__25143_25285__$1);
var column_25294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25162_25293,(0),null);
var column_info_25295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25162_25293,(1),null);
var seq__25165_25298 = cljs.core.seq(column_info_25295);
var chunk__25166_25299 = null;
var count__25167_25300 = (0);
var i__25168_25301 = (0);
while(true){
if((i__25168_25301 < count__25167_25300)){
var map__25176_25303 = chunk__25166_25299.cljs$core$IIndexed$_nth$arity$2(null,i__25168_25301);
var map__25176_25304__$1 = ((((!((map__25176_25303 == null)))?((((map__25176_25303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25176_25303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25176_25303):map__25176_25303);
var gline_25305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25176_25304__$1,cljs.core.cst$kw$gline);
var gcol_25306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25176_25304__$1,cljs.core.cst$kw$gcol);
var name_25307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25176_25304__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25305], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25165_25298,chunk__25166_25299,count__25167_25300,i__25168_25301,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25176_25303,map__25176_25304__$1,gline_25305,gcol_25306,name_25307,vec__25162_25293,column_25294,column_info_25295,seq__25143_25285__$1,temp__4657__auto___25284,vec__25140_25222,line_25223,columns_25224,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25306], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25223,cljs.core.cst$kw$col,column_25294,cljs.core.cst$kw$name,name_25307], null));
});})(seq__25165_25298,chunk__25166_25299,count__25167_25300,i__25168_25301,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25176_25303,map__25176_25304__$1,gline_25305,gcol_25306,name_25307,vec__25162_25293,column_25294,column_info_25295,seq__25143_25285__$1,temp__4657__auto___25284,vec__25140_25222,line_25223,columns_25224,inverted))
,cljs.core.sorted_map()));

var G__25316 = seq__25165_25298;
var G__25317 = chunk__25166_25299;
var G__25318 = count__25167_25300;
var G__25319 = (i__25168_25301 + (1));
seq__25165_25298 = G__25316;
chunk__25166_25299 = G__25317;
count__25167_25300 = G__25318;
i__25168_25301 = G__25319;
continue;
} else {
var temp__4657__auto___25320__$1 = cljs.core.seq(seq__25165_25298);
if(temp__4657__auto___25320__$1){
var seq__25165_25321__$1 = temp__4657__auto___25320__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25165_25321__$1)){
var c__7032__auto___25322 = cljs.core.chunk_first(seq__25165_25321__$1);
var G__25324 = cljs.core.chunk_rest(seq__25165_25321__$1);
var G__25325 = c__7032__auto___25322;
var G__25326 = cljs.core.count(c__7032__auto___25322);
var G__25327 = (0);
seq__25165_25298 = G__25324;
chunk__25166_25299 = G__25325;
count__25167_25300 = G__25326;
i__25168_25301 = G__25327;
continue;
} else {
var map__25182_25329 = cljs.core.first(seq__25165_25321__$1);
var map__25182_25330__$1 = ((((!((map__25182_25329 == null)))?((((map__25182_25329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25182_25329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25182_25329):map__25182_25329);
var gline_25331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25182_25330__$1,cljs.core.cst$kw$gline);
var gcol_25332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25182_25330__$1,cljs.core.cst$kw$gcol);
var name_25333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25182_25330__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25331], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25165_25298,chunk__25166_25299,count__25167_25300,i__25168_25301,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25182_25329,map__25182_25330__$1,gline_25331,gcol_25332,name_25333,seq__25165_25321__$1,temp__4657__auto___25320__$1,vec__25162_25293,column_25294,column_info_25295,seq__25143_25285__$1,temp__4657__auto___25284,vec__25140_25222,line_25223,columns_25224,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25332], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25223,cljs.core.cst$kw$col,column_25294,cljs.core.cst$kw$name,name_25333], null));
});})(seq__25165_25298,chunk__25166_25299,count__25167_25300,i__25168_25301,seq__25143_25225,chunk__25144_25226,count__25145_25227,i__25146_25228,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25182_25329,map__25182_25330__$1,gline_25331,gcol_25332,name_25333,seq__25165_25321__$1,temp__4657__auto___25320__$1,vec__25162_25293,column_25294,column_info_25295,seq__25143_25285__$1,temp__4657__auto___25284,vec__25140_25222,line_25223,columns_25224,inverted))
,cljs.core.sorted_map()));

var G__25339 = cljs.core.next(seq__25165_25321__$1);
var G__25340 = null;
var G__25341 = (0);
var G__25342 = (0);
seq__25165_25298 = G__25339;
chunk__25166_25299 = G__25340;
count__25167_25300 = G__25341;
i__25168_25301 = G__25342;
continue;
}
} else {
}
}
break;
}

var G__25344 = cljs.core.next(seq__25143_25285__$1);
var G__25345 = null;
var G__25346 = (0);
var G__25347 = (0);
seq__25143_25225 = G__25344;
chunk__25144_25226 = G__25345;
count__25145_25227 = G__25346;
i__25146_25228 = G__25347;
continue;
}
} else {
}
}
break;
}

var G__25349 = seq__25136_25218;
var G__25350 = chunk__25137_25219;
var G__25351 = count__25138_25220;
var G__25352 = (i__25139_25221 + (1));
seq__25136_25218 = G__25349;
chunk__25137_25219 = G__25350;
count__25138_25220 = G__25351;
i__25139_25221 = G__25352;
continue;
} else {
var temp__4657__auto___25353 = cljs.core.seq(seq__25136_25218);
if(temp__4657__auto___25353){
var seq__25136_25354__$1 = temp__4657__auto___25353;
if(cljs.core.chunked_seq_QMARK_(seq__25136_25354__$1)){
var c__7032__auto___25355 = cljs.core.chunk_first(seq__25136_25354__$1);
var G__25356 = cljs.core.chunk_rest(seq__25136_25354__$1);
var G__25357 = c__7032__auto___25355;
var G__25358 = cljs.core.count(c__7032__auto___25355);
var G__25359 = (0);
seq__25136_25218 = G__25356;
chunk__25137_25219 = G__25357;
count__25138_25220 = G__25358;
i__25139_25221 = G__25359;
continue;
} else {
var vec__25184_25361 = cljs.core.first(seq__25136_25354__$1);
var line_25362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184_25361,(0),null);
var columns_25363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25184_25361,(1),null);
var seq__25187_25364 = cljs.core.seq(columns_25363);
var chunk__25188_25365 = null;
var count__25189_25366 = (0);
var i__25190_25367 = (0);
while(true){
if((i__25190_25367 < count__25189_25366)){
var vec__25191_25371 = chunk__25188_25365.cljs$core$IIndexed$_nth$arity$2(null,i__25190_25367);
var column_25372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25191_25371,(0),null);
var column_info_25373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25191_25371,(1),null);
var seq__25194_25374 = cljs.core.seq(column_info_25373);
var chunk__25195_25375 = null;
var count__25196_25376 = (0);
var i__25197_25377 = (0);
while(true){
if((i__25197_25377 < count__25196_25376)){
var map__25198_25378 = chunk__25195_25375.cljs$core$IIndexed$_nth$arity$2(null,i__25197_25377);
var map__25198_25379__$1 = ((((!((map__25198_25378 == null)))?((((map__25198_25378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25198_25378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25198_25378):map__25198_25378);
var gline_25380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198_25379__$1,cljs.core.cst$kw$gline);
var gcol_25381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198_25379__$1,cljs.core.cst$kw$gcol);
var name_25382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198_25379__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25380], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25194_25374,chunk__25195_25375,count__25196_25376,i__25197_25377,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25198_25378,map__25198_25379__$1,gline_25380,gcol_25381,name_25382,vec__25191_25371,column_25372,column_info_25373,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25381], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25362,cljs.core.cst$kw$col,column_25372,cljs.core.cst$kw$name,name_25382], null));
});})(seq__25194_25374,chunk__25195_25375,count__25196_25376,i__25197_25377,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25198_25378,map__25198_25379__$1,gline_25380,gcol_25381,name_25382,vec__25191_25371,column_25372,column_info_25373,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted))
,cljs.core.sorted_map()));

var G__25387 = seq__25194_25374;
var G__25388 = chunk__25195_25375;
var G__25389 = count__25196_25376;
var G__25390 = (i__25197_25377 + (1));
seq__25194_25374 = G__25387;
chunk__25195_25375 = G__25388;
count__25196_25376 = G__25389;
i__25197_25377 = G__25390;
continue;
} else {
var temp__4657__auto___25391__$1 = cljs.core.seq(seq__25194_25374);
if(temp__4657__auto___25391__$1){
var seq__25194_25392__$1 = temp__4657__auto___25391__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25194_25392__$1)){
var c__7032__auto___25393 = cljs.core.chunk_first(seq__25194_25392__$1);
var G__25394 = cljs.core.chunk_rest(seq__25194_25392__$1);
var G__25395 = c__7032__auto___25393;
var G__25396 = cljs.core.count(c__7032__auto___25393);
var G__25397 = (0);
seq__25194_25374 = G__25394;
chunk__25195_25375 = G__25395;
count__25196_25376 = G__25396;
i__25197_25377 = G__25397;
continue;
} else {
var map__25201_25398 = cljs.core.first(seq__25194_25392__$1);
var map__25201_25399__$1 = ((((!((map__25201_25398 == null)))?((((map__25201_25398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25201_25398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25201_25398):map__25201_25398);
var gline_25400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25201_25399__$1,cljs.core.cst$kw$gline);
var gcol_25401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25201_25399__$1,cljs.core.cst$kw$gcol);
var name_25402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25201_25399__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25400], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25194_25374,chunk__25195_25375,count__25196_25376,i__25197_25377,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25201_25398,map__25201_25399__$1,gline_25400,gcol_25401,name_25402,seq__25194_25392__$1,temp__4657__auto___25391__$1,vec__25191_25371,column_25372,column_info_25373,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25401], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25362,cljs.core.cst$kw$col,column_25372,cljs.core.cst$kw$name,name_25402], null));
});})(seq__25194_25374,chunk__25195_25375,count__25196_25376,i__25197_25377,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25201_25398,map__25201_25399__$1,gline_25400,gcol_25401,name_25402,seq__25194_25392__$1,temp__4657__auto___25391__$1,vec__25191_25371,column_25372,column_info_25373,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted))
,cljs.core.sorted_map()));

var G__25406 = cljs.core.next(seq__25194_25392__$1);
var G__25407 = null;
var G__25408 = (0);
var G__25409 = (0);
seq__25194_25374 = G__25406;
chunk__25195_25375 = G__25407;
count__25196_25376 = G__25408;
i__25197_25377 = G__25409;
continue;
}
} else {
}
}
break;
}

var G__25410 = seq__25187_25364;
var G__25411 = chunk__25188_25365;
var G__25412 = count__25189_25366;
var G__25413 = (i__25190_25367 + (1));
seq__25187_25364 = G__25410;
chunk__25188_25365 = G__25411;
count__25189_25366 = G__25412;
i__25190_25367 = G__25413;
continue;
} else {
var temp__4657__auto___25414__$1 = cljs.core.seq(seq__25187_25364);
if(temp__4657__auto___25414__$1){
var seq__25187_25415__$1 = temp__4657__auto___25414__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25187_25415__$1)){
var c__7032__auto___25416 = cljs.core.chunk_first(seq__25187_25415__$1);
var G__25417 = cljs.core.chunk_rest(seq__25187_25415__$1);
var G__25418 = c__7032__auto___25416;
var G__25419 = cljs.core.count(c__7032__auto___25416);
var G__25420 = (0);
seq__25187_25364 = G__25417;
chunk__25188_25365 = G__25418;
count__25189_25366 = G__25419;
i__25190_25367 = G__25420;
continue;
} else {
var vec__25203_25421 = cljs.core.first(seq__25187_25415__$1);
var column_25422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203_25421,(0),null);
var column_info_25423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203_25421,(1),null);
var seq__25206_25424 = cljs.core.seq(column_info_25423);
var chunk__25207_25425 = null;
var count__25208_25426 = (0);
var i__25209_25427 = (0);
while(true){
if((i__25209_25427 < count__25208_25426)){
var map__25210_25428 = chunk__25207_25425.cljs$core$IIndexed$_nth$arity$2(null,i__25209_25427);
var map__25210_25429__$1 = ((((!((map__25210_25428 == null)))?((((map__25210_25428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25210_25428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25210_25428):map__25210_25428);
var gline_25430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25210_25429__$1,cljs.core.cst$kw$gline);
var gcol_25431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25210_25429__$1,cljs.core.cst$kw$gcol);
var name_25432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25210_25429__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25430], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25206_25424,chunk__25207_25425,count__25208_25426,i__25209_25427,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25210_25428,map__25210_25429__$1,gline_25430,gcol_25431,name_25432,vec__25203_25421,column_25422,column_info_25423,seq__25187_25415__$1,temp__4657__auto___25414__$1,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25431], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25362,cljs.core.cst$kw$col,column_25422,cljs.core.cst$kw$name,name_25432], null));
});})(seq__25206_25424,chunk__25207_25425,count__25208_25426,i__25209_25427,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25210_25428,map__25210_25429__$1,gline_25430,gcol_25431,name_25432,vec__25203_25421,column_25422,column_info_25423,seq__25187_25415__$1,temp__4657__auto___25414__$1,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted))
,cljs.core.sorted_map()));

var G__25433 = seq__25206_25424;
var G__25434 = chunk__25207_25425;
var G__25435 = count__25208_25426;
var G__25436 = (i__25209_25427 + (1));
seq__25206_25424 = G__25433;
chunk__25207_25425 = G__25434;
count__25208_25426 = G__25435;
i__25209_25427 = G__25436;
continue;
} else {
var temp__4657__auto___25440__$2 = cljs.core.seq(seq__25206_25424);
if(temp__4657__auto___25440__$2){
var seq__25206_25441__$1 = temp__4657__auto___25440__$2;
if(cljs.core.chunked_seq_QMARK_(seq__25206_25441__$1)){
var c__7032__auto___25442 = cljs.core.chunk_first(seq__25206_25441__$1);
var G__25443 = cljs.core.chunk_rest(seq__25206_25441__$1);
var G__25444 = c__7032__auto___25442;
var G__25445 = cljs.core.count(c__7032__auto___25442);
var G__25446 = (0);
seq__25206_25424 = G__25443;
chunk__25207_25425 = G__25444;
count__25208_25426 = G__25445;
i__25209_25427 = G__25446;
continue;
} else {
var map__25216_25447 = cljs.core.first(seq__25206_25441__$1);
var map__25216_25448__$1 = ((((!((map__25216_25447 == null)))?((((map__25216_25447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25216_25447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25216_25447):map__25216_25447);
var gline_25449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25216_25448__$1,cljs.core.cst$kw$gline);
var gcol_25450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25216_25448__$1,cljs.core.cst$kw$gcol);
var name_25451 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25216_25448__$1,cljs.core.cst$kw$name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_25449], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__25206_25424,chunk__25207_25425,count__25208_25426,i__25209_25427,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25216_25447,map__25216_25448__$1,gline_25449,gcol_25450,name_25451,seq__25206_25441__$1,temp__4657__auto___25440__$2,vec__25203_25421,column_25422,column_info_25423,seq__25187_25415__$1,temp__4657__auto___25414__$1,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_25450], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$line,line_25362,cljs.core.cst$kw$col,column_25422,cljs.core.cst$kw$name,name_25451], null));
});})(seq__25206_25424,chunk__25207_25425,count__25208_25426,i__25209_25427,seq__25187_25364,chunk__25188_25365,count__25189_25366,i__25190_25367,seq__25136_25218,chunk__25137_25219,count__25138_25220,i__25139_25221,map__25216_25447,map__25216_25448__$1,gline_25449,gcol_25450,name_25451,seq__25206_25441__$1,temp__4657__auto___25440__$2,vec__25203_25421,column_25422,column_info_25423,seq__25187_25415__$1,temp__4657__auto___25414__$1,vec__25184_25361,line_25362,columns_25363,seq__25136_25354__$1,temp__4657__auto___25353,inverted))
,cljs.core.sorted_map()));

var G__25452 = cljs.core.next(seq__25206_25441__$1);
var G__25453 = null;
var G__25454 = (0);
var G__25455 = (0);
seq__25206_25424 = G__25452;
chunk__25207_25425 = G__25453;
count__25208_25426 = G__25454;
i__25209_25427 = G__25455;
continue;
}
} else {
}
}
break;
}

var G__25456 = cljs.core.next(seq__25187_25415__$1);
var G__25457 = null;
var G__25458 = (0);
var G__25459 = (0);
seq__25187_25364 = G__25456;
chunk__25188_25365 = G__25457;
count__25189_25366 = G__25458;
i__25190_25367 = G__25459;
continue;
}
} else {
}
}
break;
}

var G__25460 = cljs.core.next(seq__25136_25354__$1);
var G__25461 = null;
var G__25462 = (0);
var G__25463 = (0);
seq__25136_25218 = G__25460;
chunk__25137_25219 = G__25461;
count__25138_25220 = G__25462;
i__25139_25221 = G__25463;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});
