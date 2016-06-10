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
return cljs.core.reduce.call(null,(function (m,p__62092){
var vec__62093 = p__62092;
var i = cljs.core.nth.call(null,vec__62093,(0),null);
var v = cljs.core.nth.call(null,vec__62093,(1),null);
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
var vec__62099 = seg;
var gcol = cljs.core.nth.call(null,vec__62099,(0),null);
var source = cljs.core.nth.call(null,vec__62099,(1),null);
var line = cljs.core.nth.call(null,vec__62099,(2),null);
var col = cljs.core.nth.call(null,vec__62099,(3),null);
var name = cljs.core.nth.call(null,vec__62099,(4),null);
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
var vec__62108 = seg;
var gcol = cljs.core.nth.call(null,vec__62108,(0),null);
var source = cljs.core.nth.call(null,vec__62108,(1),null);
var line = cljs.core.nth.call(null,vec__62108,(2),null);
var col = cljs.core.nth.call(null,vec__62108,(3),null);
var name = cljs.core.nth.call(null,vec__62108,(4),null);
var vec__62111 = relseg;
var rgcol = cljs.core.nth.call(null,vec__62111,(0),null);
var rsource = cljs.core.nth.call(null,vec__62111,(1),null);
var rline = cljs.core.nth.call(null,vec__62111,(2),null);
var rcol = cljs.core.nth.call(null,vec__62111,(3),null);
var rname = cljs.core.nth.call(null,vec__62111,(4),null);
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
var map__62116 = segmap;
var map__62116__$1 = ((((!((map__62116 == null)))?((((map__62116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62116):map__62116);
var gcol = cljs.core.get.call(null,map__62116__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__62116__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__62116__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__62116__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__62116__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__62116,map__62116__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__62116,map__62116__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__62116,map__62116__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__62116,map__62116__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__62116,map__62116__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__62116,map__62116__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args62118 = [];
var len__7296__auto___62124 = arguments.length;
var i__7297__auto___62125 = (0);
while(true){
if((i__7297__auto___62125 < len__7296__auto___62124)){
args62118.push((arguments[i__7297__auto___62125]));

var G__62126 = (i__7297__auto___62125 + (1));
i__7297__auto___62125 = G__62126;
continue;
} else {
}
break;
}

var G__62120 = args62118.length;
switch (G__62120) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62118.length)].join('')));

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
var vec__62121 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__62128 = cljs.core.next.call(null,segs__$1);
var G__62129 = nrelseg;
var G__62130 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__62128;
relseg__$1 = G__62129;
result__$1 = G__62130;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__62121,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__62121,(1),null);
var G__62131 = (gline + (1));
var G__62132 = cljs.core.next.call(null,lines__$1);
var G__62133 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__62134 = result__$1;
gline = G__62131;
lines__$1 = G__62132;
relseg = G__62133;
result = G__62134;
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
var map__62138 = segmap;
var map__62138__$1 = ((((!((map__62138 == null)))?((((map__62138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62138):map__62138);
var gcol = cljs.core.get.call(null,map__62138__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__62138__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__62138__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__62138__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__62138__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__62138,map__62138__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__62138,map__62138__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__62135_SHARP_){
return cljs.core.conj.call(null,p1__62135_SHARP_,d__$1);
});})(map__62138,map__62138__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__62138,map__62138__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args62140 = [];
var len__7296__auto___62146 = arguments.length;
var i__7297__auto___62147 = (0);
while(true){
if((i__7297__auto___62147 < len__7296__auto___62146)){
args62140.push((arguments[i__7297__auto___62147]));

var G__62148 = (i__7297__auto___62147 + (1));
i__7297__auto___62147 = G__62148;
continue;
} else {
}
break;
}

var G__62142 = args62140.length;
switch (G__62142) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62140.length)].join('')));

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
var vec__62143 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__62150 = cljs.core.next.call(null,segs__$1);
var G__62151 = nrelseg;
var G__62152 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__62150;
relseg__$1 = G__62151;
result__$1 = G__62152;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__62143,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__62143,(1),null);
var G__62153 = (gline + (1));
var G__62154 = cljs.core.next.call(null,lines__$1);
var G__62155 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__62156 = result__$1;
gline = G__62153;
lines__$1 = G__62154;
relseg = G__62155;
result = G__62156;
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
return (function (p__62169){
var vec__62170 = p__62169;
var _ = cljs.core.nth.call(null,vec__62170,(0),null);
var source = cljs.core.nth.call(null,vec__62170,(1),null);
var line = cljs.core.nth.call(null,vec__62170,(2),null);
var col = cljs.core.nth.call(null,vec__62170,(3),null);
var name = cljs.core.nth.call(null,vec__62170,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__62173){
var vec__62174 = p__62173;
var gcol = cljs.core.nth.call(null,vec__62174,(0),null);
var sidx = cljs.core.nth.call(null,vec__62174,(1),null);
var line = cljs.core.nth.call(null,vec__62174,(2),null);
var col = cljs.core.nth.call(null,vec__62174,(3),null);
var name = cljs.core.nth.call(null,vec__62174,(4),null);
var seg = vec__62174;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__62174,gcol,sidx,line,col,name,seg,relseg){
return (function (p__62177){
var vec__62178 = p__62177;
var _ = cljs.core.nth.call(null,vec__62178,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__62178,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__62178,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__62178,(3),null);
var lname = cljs.core.nth.call(null,vec__62178,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6221__auto__ = name;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__62174,gcol,sidx,line,col,name,seg,relseg))
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
var preamble_lines = cljs.core.take.call(null,(function (){var or__6221__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
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
var seq__62266 = cljs.core.seq.call(null,infos);
var chunk__62267 = null;
var count__62268 = (0);
var i__62269 = (0);
while(true){
if((i__62269 < count__62268)){
var info = cljs.core._nth.call(null,chunk__62267,i__62269);
var segv_62348 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_62349 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_62350 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_62349 > (lc_62350 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__62266,chunk__62267,count__62268,i__62269,segv_62348,gline_62349,lc_62350,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_62349 - (lc_62350 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_62348], null));
});})(seq__62266,chunk__62267,count__62268,i__62269,segv_62348,gline_62349,lc_62350,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__62266,chunk__62267,count__62268,i__62269,segv_62348,gline_62349,lc_62350,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62349], null),cljs.core.conj,segv_62348);
});})(seq__62266,chunk__62267,count__62268,i__62269,segv_62348,gline_62349,lc_62350,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__62351 = seq__62266;
var G__62352 = chunk__62267;
var G__62353 = count__62268;
var G__62354 = (i__62269 + (1));
seq__62266 = G__62351;
chunk__62267 = G__62352;
count__62268 = G__62353;
i__62269 = G__62354;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__62266);
if(temp__4657__auto__){
var seq__62266__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62266__$1)){
var c__7032__auto__ = cljs.core.chunk_first.call(null,seq__62266__$1);
var G__62355 = cljs.core.chunk_rest.call(null,seq__62266__$1);
var G__62356 = c__7032__auto__;
var G__62357 = cljs.core.count.call(null,c__7032__auto__);
var G__62358 = (0);
seq__62266 = G__62355;
chunk__62267 = G__62356;
count__62268 = G__62357;
i__62269 = G__62358;
continue;
} else {
var info = cljs.core.first.call(null,seq__62266__$1);
var segv_62359 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_62360 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_62361 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_62360 > (lc_62361 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__62266,chunk__62267,count__62268,i__62269,segv_62359,gline_62360,lc_62361,info,seq__62266__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_62360 - (lc_62361 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_62359], null));
});})(seq__62266,chunk__62267,count__62268,i__62269,segv_62359,gline_62360,lc_62361,info,seq__62266__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__62266,chunk__62267,count__62268,i__62269,segv_62359,gline_62360,lc_62361,info,seq__62266__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62360], null),cljs.core.conj,segv_62359);
});})(seq__62266,chunk__62267,count__62268,i__62269,segv_62359,gline_62360,lc_62361,info,seq__62266__$1,temp__4657__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__62362 = cljs.core.next.call(null,seq__62266__$1);
var G__62363 = null;
var G__62364 = (0);
var G__62365 = (0);
seq__62266 = G__62362;
chunk__62267 = G__62363;
count__62268 = G__62364;
i__62269 = G__62365;
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
var seq__62270_62366 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__62271_62367 = null;
var count__62272_62368 = (0);
var i__62273_62369 = (0);
while(true){
if((i__62273_62369 < count__62272_62368)){
var vec__62274_62370 = cljs.core._nth.call(null,chunk__62271_62367,i__62273_62369);
var source_idx_62371 = cljs.core.nth.call(null,vec__62274_62370,(0),null);
var vec__62277_62372 = cljs.core.nth.call(null,vec__62274_62370,(1),null);
var __62373 = cljs.core.nth.call(null,vec__62277_62372,(0),null);
var lines_62374__$1 = cljs.core.nth.call(null,vec__62277_62372,(1),null);
var seq__62280_62375 = cljs.core.seq.call(null,lines_62374__$1);
var chunk__62281_62376 = null;
var count__62282_62377 = (0);
var i__62283_62378 = (0);
while(true){
if((i__62283_62378 < count__62282_62377)){
var vec__62284_62379 = cljs.core._nth.call(null,chunk__62281_62376,i__62283_62378);
var line_62380 = cljs.core.nth.call(null,vec__62284_62379,(0),null);
var cols_62381 = cljs.core.nth.call(null,vec__62284_62379,(1),null);
var seq__62287_62382 = cljs.core.seq.call(null,cols_62381);
var chunk__62288_62383 = null;
var count__62289_62384 = (0);
var i__62290_62385 = (0);
while(true){
if((i__62290_62385 < count__62289_62384)){
var vec__62291_62386 = cljs.core._nth.call(null,chunk__62288_62383,i__62290_62385);
var col_62387 = cljs.core.nth.call(null,vec__62291_62386,(0),null);
var infos_62388 = cljs.core.nth.call(null,vec__62291_62386,(1),null);
encode_cols.call(null,infos_62388,source_idx_62371,line_62380,col_62387);

var G__62389 = seq__62287_62382;
var G__62390 = chunk__62288_62383;
var G__62391 = count__62289_62384;
var G__62392 = (i__62290_62385 + (1));
seq__62287_62382 = G__62389;
chunk__62288_62383 = G__62390;
count__62289_62384 = G__62391;
i__62290_62385 = G__62392;
continue;
} else {
var temp__4657__auto___62393 = cljs.core.seq.call(null,seq__62287_62382);
if(temp__4657__auto___62393){
var seq__62287_62394__$1 = temp__4657__auto___62393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62287_62394__$1)){
var c__7032__auto___62395 = cljs.core.chunk_first.call(null,seq__62287_62394__$1);
var G__62396 = cljs.core.chunk_rest.call(null,seq__62287_62394__$1);
var G__62397 = c__7032__auto___62395;
var G__62398 = cljs.core.count.call(null,c__7032__auto___62395);
var G__62399 = (0);
seq__62287_62382 = G__62396;
chunk__62288_62383 = G__62397;
count__62289_62384 = G__62398;
i__62290_62385 = G__62399;
continue;
} else {
var vec__62294_62400 = cljs.core.first.call(null,seq__62287_62394__$1);
var col_62401 = cljs.core.nth.call(null,vec__62294_62400,(0),null);
var infos_62402 = cljs.core.nth.call(null,vec__62294_62400,(1),null);
encode_cols.call(null,infos_62402,source_idx_62371,line_62380,col_62401);

var G__62403 = cljs.core.next.call(null,seq__62287_62394__$1);
var G__62404 = null;
var G__62405 = (0);
var G__62406 = (0);
seq__62287_62382 = G__62403;
chunk__62288_62383 = G__62404;
count__62289_62384 = G__62405;
i__62290_62385 = G__62406;
continue;
}
} else {
}
}
break;
}

var G__62407 = seq__62280_62375;
var G__62408 = chunk__62281_62376;
var G__62409 = count__62282_62377;
var G__62410 = (i__62283_62378 + (1));
seq__62280_62375 = G__62407;
chunk__62281_62376 = G__62408;
count__62282_62377 = G__62409;
i__62283_62378 = G__62410;
continue;
} else {
var temp__4657__auto___62411 = cljs.core.seq.call(null,seq__62280_62375);
if(temp__4657__auto___62411){
var seq__62280_62412__$1 = temp__4657__auto___62411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62280_62412__$1)){
var c__7032__auto___62413 = cljs.core.chunk_first.call(null,seq__62280_62412__$1);
var G__62414 = cljs.core.chunk_rest.call(null,seq__62280_62412__$1);
var G__62415 = c__7032__auto___62413;
var G__62416 = cljs.core.count.call(null,c__7032__auto___62413);
var G__62417 = (0);
seq__62280_62375 = G__62414;
chunk__62281_62376 = G__62415;
count__62282_62377 = G__62416;
i__62283_62378 = G__62417;
continue;
} else {
var vec__62297_62418 = cljs.core.first.call(null,seq__62280_62412__$1);
var line_62419 = cljs.core.nth.call(null,vec__62297_62418,(0),null);
var cols_62420 = cljs.core.nth.call(null,vec__62297_62418,(1),null);
var seq__62300_62421 = cljs.core.seq.call(null,cols_62420);
var chunk__62301_62422 = null;
var count__62302_62423 = (0);
var i__62303_62424 = (0);
while(true){
if((i__62303_62424 < count__62302_62423)){
var vec__62304_62425 = cljs.core._nth.call(null,chunk__62301_62422,i__62303_62424);
var col_62426 = cljs.core.nth.call(null,vec__62304_62425,(0),null);
var infos_62427 = cljs.core.nth.call(null,vec__62304_62425,(1),null);
encode_cols.call(null,infos_62427,source_idx_62371,line_62419,col_62426);

var G__62428 = seq__62300_62421;
var G__62429 = chunk__62301_62422;
var G__62430 = count__62302_62423;
var G__62431 = (i__62303_62424 + (1));
seq__62300_62421 = G__62428;
chunk__62301_62422 = G__62429;
count__62302_62423 = G__62430;
i__62303_62424 = G__62431;
continue;
} else {
var temp__4657__auto___62432__$1 = cljs.core.seq.call(null,seq__62300_62421);
if(temp__4657__auto___62432__$1){
var seq__62300_62433__$1 = temp__4657__auto___62432__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62300_62433__$1)){
var c__7032__auto___62434 = cljs.core.chunk_first.call(null,seq__62300_62433__$1);
var G__62435 = cljs.core.chunk_rest.call(null,seq__62300_62433__$1);
var G__62436 = c__7032__auto___62434;
var G__62437 = cljs.core.count.call(null,c__7032__auto___62434);
var G__62438 = (0);
seq__62300_62421 = G__62435;
chunk__62301_62422 = G__62436;
count__62302_62423 = G__62437;
i__62303_62424 = G__62438;
continue;
} else {
var vec__62307_62439 = cljs.core.first.call(null,seq__62300_62433__$1);
var col_62440 = cljs.core.nth.call(null,vec__62307_62439,(0),null);
var infos_62441 = cljs.core.nth.call(null,vec__62307_62439,(1),null);
encode_cols.call(null,infos_62441,source_idx_62371,line_62419,col_62440);

var G__62442 = cljs.core.next.call(null,seq__62300_62433__$1);
var G__62443 = null;
var G__62444 = (0);
var G__62445 = (0);
seq__62300_62421 = G__62442;
chunk__62301_62422 = G__62443;
count__62302_62423 = G__62444;
i__62303_62424 = G__62445;
continue;
}
} else {
}
}
break;
}

var G__62446 = cljs.core.next.call(null,seq__62280_62412__$1);
var G__62447 = null;
var G__62448 = (0);
var G__62449 = (0);
seq__62280_62375 = G__62446;
chunk__62281_62376 = G__62447;
count__62282_62377 = G__62448;
i__62283_62378 = G__62449;
continue;
}
} else {
}
}
break;
}

var G__62450 = seq__62270_62366;
var G__62451 = chunk__62271_62367;
var G__62452 = count__62272_62368;
var G__62453 = (i__62273_62369 + (1));
seq__62270_62366 = G__62450;
chunk__62271_62367 = G__62451;
count__62272_62368 = G__62452;
i__62273_62369 = G__62453;
continue;
} else {
var temp__4657__auto___62454 = cljs.core.seq.call(null,seq__62270_62366);
if(temp__4657__auto___62454){
var seq__62270_62455__$1 = temp__4657__auto___62454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62270_62455__$1)){
var c__7032__auto___62456 = cljs.core.chunk_first.call(null,seq__62270_62455__$1);
var G__62457 = cljs.core.chunk_rest.call(null,seq__62270_62455__$1);
var G__62458 = c__7032__auto___62456;
var G__62459 = cljs.core.count.call(null,c__7032__auto___62456);
var G__62460 = (0);
seq__62270_62366 = G__62457;
chunk__62271_62367 = G__62458;
count__62272_62368 = G__62459;
i__62273_62369 = G__62460;
continue;
} else {
var vec__62310_62461 = cljs.core.first.call(null,seq__62270_62455__$1);
var source_idx_62462 = cljs.core.nth.call(null,vec__62310_62461,(0),null);
var vec__62313_62463 = cljs.core.nth.call(null,vec__62310_62461,(1),null);
var __62464 = cljs.core.nth.call(null,vec__62313_62463,(0),null);
var lines_62465__$1 = cljs.core.nth.call(null,vec__62313_62463,(1),null);
var seq__62316_62466 = cljs.core.seq.call(null,lines_62465__$1);
var chunk__62317_62467 = null;
var count__62318_62468 = (0);
var i__62319_62469 = (0);
while(true){
if((i__62319_62469 < count__62318_62468)){
var vec__62320_62470 = cljs.core._nth.call(null,chunk__62317_62467,i__62319_62469);
var line_62471 = cljs.core.nth.call(null,vec__62320_62470,(0),null);
var cols_62472 = cljs.core.nth.call(null,vec__62320_62470,(1),null);
var seq__62323_62473 = cljs.core.seq.call(null,cols_62472);
var chunk__62324_62474 = null;
var count__62325_62475 = (0);
var i__62326_62476 = (0);
while(true){
if((i__62326_62476 < count__62325_62475)){
var vec__62327_62477 = cljs.core._nth.call(null,chunk__62324_62474,i__62326_62476);
var col_62478 = cljs.core.nth.call(null,vec__62327_62477,(0),null);
var infos_62479 = cljs.core.nth.call(null,vec__62327_62477,(1),null);
encode_cols.call(null,infos_62479,source_idx_62462,line_62471,col_62478);

var G__62480 = seq__62323_62473;
var G__62481 = chunk__62324_62474;
var G__62482 = count__62325_62475;
var G__62483 = (i__62326_62476 + (1));
seq__62323_62473 = G__62480;
chunk__62324_62474 = G__62481;
count__62325_62475 = G__62482;
i__62326_62476 = G__62483;
continue;
} else {
var temp__4657__auto___62484__$1 = cljs.core.seq.call(null,seq__62323_62473);
if(temp__4657__auto___62484__$1){
var seq__62323_62485__$1 = temp__4657__auto___62484__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62323_62485__$1)){
var c__7032__auto___62486 = cljs.core.chunk_first.call(null,seq__62323_62485__$1);
var G__62487 = cljs.core.chunk_rest.call(null,seq__62323_62485__$1);
var G__62488 = c__7032__auto___62486;
var G__62489 = cljs.core.count.call(null,c__7032__auto___62486);
var G__62490 = (0);
seq__62323_62473 = G__62487;
chunk__62324_62474 = G__62488;
count__62325_62475 = G__62489;
i__62326_62476 = G__62490;
continue;
} else {
var vec__62330_62491 = cljs.core.first.call(null,seq__62323_62485__$1);
var col_62492 = cljs.core.nth.call(null,vec__62330_62491,(0),null);
var infos_62493 = cljs.core.nth.call(null,vec__62330_62491,(1),null);
encode_cols.call(null,infos_62493,source_idx_62462,line_62471,col_62492);

var G__62494 = cljs.core.next.call(null,seq__62323_62485__$1);
var G__62495 = null;
var G__62496 = (0);
var G__62497 = (0);
seq__62323_62473 = G__62494;
chunk__62324_62474 = G__62495;
count__62325_62475 = G__62496;
i__62326_62476 = G__62497;
continue;
}
} else {
}
}
break;
}

var G__62498 = seq__62316_62466;
var G__62499 = chunk__62317_62467;
var G__62500 = count__62318_62468;
var G__62501 = (i__62319_62469 + (1));
seq__62316_62466 = G__62498;
chunk__62317_62467 = G__62499;
count__62318_62468 = G__62500;
i__62319_62469 = G__62501;
continue;
} else {
var temp__4657__auto___62502__$1 = cljs.core.seq.call(null,seq__62316_62466);
if(temp__4657__auto___62502__$1){
var seq__62316_62503__$1 = temp__4657__auto___62502__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62316_62503__$1)){
var c__7032__auto___62504 = cljs.core.chunk_first.call(null,seq__62316_62503__$1);
var G__62505 = cljs.core.chunk_rest.call(null,seq__62316_62503__$1);
var G__62506 = c__7032__auto___62504;
var G__62507 = cljs.core.count.call(null,c__7032__auto___62504);
var G__62508 = (0);
seq__62316_62466 = G__62505;
chunk__62317_62467 = G__62506;
count__62318_62468 = G__62507;
i__62319_62469 = G__62508;
continue;
} else {
var vec__62333_62509 = cljs.core.first.call(null,seq__62316_62503__$1);
var line_62510 = cljs.core.nth.call(null,vec__62333_62509,(0),null);
var cols_62511 = cljs.core.nth.call(null,vec__62333_62509,(1),null);
var seq__62336_62512 = cljs.core.seq.call(null,cols_62511);
var chunk__62337_62513 = null;
var count__62338_62514 = (0);
var i__62339_62515 = (0);
while(true){
if((i__62339_62515 < count__62338_62514)){
var vec__62340_62516 = cljs.core._nth.call(null,chunk__62337_62513,i__62339_62515);
var col_62517 = cljs.core.nth.call(null,vec__62340_62516,(0),null);
var infos_62518 = cljs.core.nth.call(null,vec__62340_62516,(1),null);
encode_cols.call(null,infos_62518,source_idx_62462,line_62510,col_62517);

var G__62519 = seq__62336_62512;
var G__62520 = chunk__62337_62513;
var G__62521 = count__62338_62514;
var G__62522 = (i__62339_62515 + (1));
seq__62336_62512 = G__62519;
chunk__62337_62513 = G__62520;
count__62338_62514 = G__62521;
i__62339_62515 = G__62522;
continue;
} else {
var temp__4657__auto___62523__$2 = cljs.core.seq.call(null,seq__62336_62512);
if(temp__4657__auto___62523__$2){
var seq__62336_62524__$1 = temp__4657__auto___62523__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62336_62524__$1)){
var c__7032__auto___62525 = cljs.core.chunk_first.call(null,seq__62336_62524__$1);
var G__62526 = cljs.core.chunk_rest.call(null,seq__62336_62524__$1);
var G__62527 = c__7032__auto___62525;
var G__62528 = cljs.core.count.call(null,c__7032__auto___62525);
var G__62529 = (0);
seq__62336_62512 = G__62526;
chunk__62337_62513 = G__62527;
count__62338_62514 = G__62528;
i__62339_62515 = G__62529;
continue;
} else {
var vec__62343_62530 = cljs.core.first.call(null,seq__62336_62524__$1);
var col_62531 = cljs.core.nth.call(null,vec__62343_62530,(0),null);
var infos_62532 = cljs.core.nth.call(null,vec__62343_62530,(1),null);
encode_cols.call(null,infos_62532,source_idx_62462,line_62510,col_62531);

var G__62533 = cljs.core.next.call(null,seq__62336_62524__$1);
var G__62534 = null;
var G__62535 = (0);
var G__62536 = (0);
seq__62336_62512 = G__62533;
chunk__62337_62513 = G__62534;
count__62338_62514 = G__62535;
i__62339_62515 = G__62536;
continue;
}
} else {
}
}
break;
}

var G__62537 = cljs.core.next.call(null,seq__62316_62503__$1);
var G__62538 = null;
var G__62539 = (0);
var G__62540 = (0);
seq__62316_62466 = G__62537;
chunk__62317_62467 = G__62538;
count__62318_62468 = G__62539;
i__62319_62469 = G__62540;
continue;
}
} else {
}
}
break;
}

var G__62541 = cljs.core.next.call(null,seq__62270_62455__$1);
var G__62542 = null;
var G__62543 = (0);
var G__62544 = (0);
seq__62270_62366 = G__62541;
chunk__62271_62367 = G__62542;
count__62272_62368 = G__62543;
i__62273_62369 = G__62544;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__62346 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__62181_SHARP_){
return [cljs.core.str(p1__62181_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__62182_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__62182_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__62183_SHARP_){
return clojure.string.join.call(null,",",p1__62183_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__62347 = G__62346;
goog.object.set(G__62347,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__62347;
} else {
return G__62346;
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
var vec__62554 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__62554,(0),null);
var col_map = cljs.core.nth.call(null,vec__62554,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__62557 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__62557,(0),null);
var infos = cljs.core.nth.call(null,vec__62557,(1),null);
var G__62563 = cljs.core.next.call(null,col_map_seq);
var G__62564 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__62557,col,infos,vec__62554,line,col_map){
return (function (v,p__62560){
var map__62561 = p__62560;
var map__62561__$1 = ((((!((map__62561 == null)))?((((map__62561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62561):map__62561);
var gline = cljs.core.get.call(null,map__62561__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__62561__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__62557,col,infos,vec__62554,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__62563;
new_cols = G__62564;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__62565 = cljs.core.next.call(null,line_map_seq);
var G__62566 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__62565;
new_lines = G__62566;
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
var seq__62629_62691 = cljs.core.seq.call(null,reverse_map);
var chunk__62630_62692 = null;
var count__62631_62693 = (0);
var i__62632_62694 = (0);
while(true){
if((i__62632_62694 < count__62631_62693)){
var vec__62633_62695 = cljs.core._nth.call(null,chunk__62630_62692,i__62632_62694);
var line_62696 = cljs.core.nth.call(null,vec__62633_62695,(0),null);
var columns_62697 = cljs.core.nth.call(null,vec__62633_62695,(1),null);
var seq__62636_62698 = cljs.core.seq.call(null,columns_62697);
var chunk__62637_62699 = null;
var count__62638_62700 = (0);
var i__62639_62701 = (0);
while(true){
if((i__62639_62701 < count__62638_62700)){
var vec__62640_62702 = cljs.core._nth.call(null,chunk__62637_62699,i__62639_62701);
var column_62703 = cljs.core.nth.call(null,vec__62640_62702,(0),null);
var column_info_62704 = cljs.core.nth.call(null,vec__62640_62702,(1),null);
var seq__62643_62705 = cljs.core.seq.call(null,column_info_62704);
var chunk__62644_62706 = null;
var count__62645_62707 = (0);
var i__62646_62708 = (0);
while(true){
if((i__62646_62708 < count__62645_62707)){
var map__62647_62709 = cljs.core._nth.call(null,chunk__62644_62706,i__62646_62708);
var map__62647_62710__$1 = ((((!((map__62647_62709 == null)))?((((map__62647_62709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62647_62709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62647_62709):map__62647_62709);
var gline_62711 = cljs.core.get.call(null,map__62647_62710__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62712 = cljs.core.get.call(null,map__62647_62710__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62713 = cljs.core.get.call(null,map__62647_62710__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62711], null),cljs.core.fnil.call(null,((function (seq__62643_62705,chunk__62644_62706,count__62645_62707,i__62646_62708,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62647_62709,map__62647_62710__$1,gline_62711,gcol_62712,name_62713,vec__62640_62702,column_62703,column_info_62704,vec__62633_62695,line_62696,columns_62697,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62712], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62696,new cljs.core.Keyword(null,"col","col",-1959363084),column_62703,new cljs.core.Keyword(null,"name","name",1843675177),name_62713], null));
});})(seq__62643_62705,chunk__62644_62706,count__62645_62707,i__62646_62708,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62647_62709,map__62647_62710__$1,gline_62711,gcol_62712,name_62713,vec__62640_62702,column_62703,column_info_62704,vec__62633_62695,line_62696,columns_62697,inverted))
,cljs.core.sorted_map.call(null)));

var G__62714 = seq__62643_62705;
var G__62715 = chunk__62644_62706;
var G__62716 = count__62645_62707;
var G__62717 = (i__62646_62708 + (1));
seq__62643_62705 = G__62714;
chunk__62644_62706 = G__62715;
count__62645_62707 = G__62716;
i__62646_62708 = G__62717;
continue;
} else {
var temp__4657__auto___62718 = cljs.core.seq.call(null,seq__62643_62705);
if(temp__4657__auto___62718){
var seq__62643_62719__$1 = temp__4657__auto___62718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62643_62719__$1)){
var c__7032__auto___62720 = cljs.core.chunk_first.call(null,seq__62643_62719__$1);
var G__62721 = cljs.core.chunk_rest.call(null,seq__62643_62719__$1);
var G__62722 = c__7032__auto___62720;
var G__62723 = cljs.core.count.call(null,c__7032__auto___62720);
var G__62724 = (0);
seq__62643_62705 = G__62721;
chunk__62644_62706 = G__62722;
count__62645_62707 = G__62723;
i__62646_62708 = G__62724;
continue;
} else {
var map__62649_62725 = cljs.core.first.call(null,seq__62643_62719__$1);
var map__62649_62726__$1 = ((((!((map__62649_62725 == null)))?((((map__62649_62725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62649_62725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62649_62725):map__62649_62725);
var gline_62727 = cljs.core.get.call(null,map__62649_62726__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62728 = cljs.core.get.call(null,map__62649_62726__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62729 = cljs.core.get.call(null,map__62649_62726__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62727], null),cljs.core.fnil.call(null,((function (seq__62643_62705,chunk__62644_62706,count__62645_62707,i__62646_62708,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62649_62725,map__62649_62726__$1,gline_62727,gcol_62728,name_62729,seq__62643_62719__$1,temp__4657__auto___62718,vec__62640_62702,column_62703,column_info_62704,vec__62633_62695,line_62696,columns_62697,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62728], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62696,new cljs.core.Keyword(null,"col","col",-1959363084),column_62703,new cljs.core.Keyword(null,"name","name",1843675177),name_62729], null));
});})(seq__62643_62705,chunk__62644_62706,count__62645_62707,i__62646_62708,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62649_62725,map__62649_62726__$1,gline_62727,gcol_62728,name_62729,seq__62643_62719__$1,temp__4657__auto___62718,vec__62640_62702,column_62703,column_info_62704,vec__62633_62695,line_62696,columns_62697,inverted))
,cljs.core.sorted_map.call(null)));

var G__62730 = cljs.core.next.call(null,seq__62643_62719__$1);
var G__62731 = null;
var G__62732 = (0);
var G__62733 = (0);
seq__62643_62705 = G__62730;
chunk__62644_62706 = G__62731;
count__62645_62707 = G__62732;
i__62646_62708 = G__62733;
continue;
}
} else {
}
}
break;
}

var G__62734 = seq__62636_62698;
var G__62735 = chunk__62637_62699;
var G__62736 = count__62638_62700;
var G__62737 = (i__62639_62701 + (1));
seq__62636_62698 = G__62734;
chunk__62637_62699 = G__62735;
count__62638_62700 = G__62736;
i__62639_62701 = G__62737;
continue;
} else {
var temp__4657__auto___62738 = cljs.core.seq.call(null,seq__62636_62698);
if(temp__4657__auto___62738){
var seq__62636_62739__$1 = temp__4657__auto___62738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62636_62739__$1)){
var c__7032__auto___62740 = cljs.core.chunk_first.call(null,seq__62636_62739__$1);
var G__62741 = cljs.core.chunk_rest.call(null,seq__62636_62739__$1);
var G__62742 = c__7032__auto___62740;
var G__62743 = cljs.core.count.call(null,c__7032__auto___62740);
var G__62744 = (0);
seq__62636_62698 = G__62741;
chunk__62637_62699 = G__62742;
count__62638_62700 = G__62743;
i__62639_62701 = G__62744;
continue;
} else {
var vec__62651_62745 = cljs.core.first.call(null,seq__62636_62739__$1);
var column_62746 = cljs.core.nth.call(null,vec__62651_62745,(0),null);
var column_info_62747 = cljs.core.nth.call(null,vec__62651_62745,(1),null);
var seq__62654_62748 = cljs.core.seq.call(null,column_info_62747);
var chunk__62655_62749 = null;
var count__62656_62750 = (0);
var i__62657_62751 = (0);
while(true){
if((i__62657_62751 < count__62656_62750)){
var map__62658_62752 = cljs.core._nth.call(null,chunk__62655_62749,i__62657_62751);
var map__62658_62753__$1 = ((((!((map__62658_62752 == null)))?((((map__62658_62752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62658_62752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62658_62752):map__62658_62752);
var gline_62754 = cljs.core.get.call(null,map__62658_62753__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62755 = cljs.core.get.call(null,map__62658_62753__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62756 = cljs.core.get.call(null,map__62658_62753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62754], null),cljs.core.fnil.call(null,((function (seq__62654_62748,chunk__62655_62749,count__62656_62750,i__62657_62751,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62658_62752,map__62658_62753__$1,gline_62754,gcol_62755,name_62756,vec__62651_62745,column_62746,column_info_62747,seq__62636_62739__$1,temp__4657__auto___62738,vec__62633_62695,line_62696,columns_62697,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62755], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62696,new cljs.core.Keyword(null,"col","col",-1959363084),column_62746,new cljs.core.Keyword(null,"name","name",1843675177),name_62756], null));
});})(seq__62654_62748,chunk__62655_62749,count__62656_62750,i__62657_62751,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62658_62752,map__62658_62753__$1,gline_62754,gcol_62755,name_62756,vec__62651_62745,column_62746,column_info_62747,seq__62636_62739__$1,temp__4657__auto___62738,vec__62633_62695,line_62696,columns_62697,inverted))
,cljs.core.sorted_map.call(null)));

var G__62757 = seq__62654_62748;
var G__62758 = chunk__62655_62749;
var G__62759 = count__62656_62750;
var G__62760 = (i__62657_62751 + (1));
seq__62654_62748 = G__62757;
chunk__62655_62749 = G__62758;
count__62656_62750 = G__62759;
i__62657_62751 = G__62760;
continue;
} else {
var temp__4657__auto___62761__$1 = cljs.core.seq.call(null,seq__62654_62748);
if(temp__4657__auto___62761__$1){
var seq__62654_62762__$1 = temp__4657__auto___62761__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62654_62762__$1)){
var c__7032__auto___62763 = cljs.core.chunk_first.call(null,seq__62654_62762__$1);
var G__62764 = cljs.core.chunk_rest.call(null,seq__62654_62762__$1);
var G__62765 = c__7032__auto___62763;
var G__62766 = cljs.core.count.call(null,c__7032__auto___62763);
var G__62767 = (0);
seq__62654_62748 = G__62764;
chunk__62655_62749 = G__62765;
count__62656_62750 = G__62766;
i__62657_62751 = G__62767;
continue;
} else {
var map__62660_62768 = cljs.core.first.call(null,seq__62654_62762__$1);
var map__62660_62769__$1 = ((((!((map__62660_62768 == null)))?((((map__62660_62768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62660_62768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62660_62768):map__62660_62768);
var gline_62770 = cljs.core.get.call(null,map__62660_62769__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62771 = cljs.core.get.call(null,map__62660_62769__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62772 = cljs.core.get.call(null,map__62660_62769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62770], null),cljs.core.fnil.call(null,((function (seq__62654_62748,chunk__62655_62749,count__62656_62750,i__62657_62751,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62660_62768,map__62660_62769__$1,gline_62770,gcol_62771,name_62772,seq__62654_62762__$1,temp__4657__auto___62761__$1,vec__62651_62745,column_62746,column_info_62747,seq__62636_62739__$1,temp__4657__auto___62738,vec__62633_62695,line_62696,columns_62697,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62771], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62696,new cljs.core.Keyword(null,"col","col",-1959363084),column_62746,new cljs.core.Keyword(null,"name","name",1843675177),name_62772], null));
});})(seq__62654_62748,chunk__62655_62749,count__62656_62750,i__62657_62751,seq__62636_62698,chunk__62637_62699,count__62638_62700,i__62639_62701,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62660_62768,map__62660_62769__$1,gline_62770,gcol_62771,name_62772,seq__62654_62762__$1,temp__4657__auto___62761__$1,vec__62651_62745,column_62746,column_info_62747,seq__62636_62739__$1,temp__4657__auto___62738,vec__62633_62695,line_62696,columns_62697,inverted))
,cljs.core.sorted_map.call(null)));

var G__62773 = cljs.core.next.call(null,seq__62654_62762__$1);
var G__62774 = null;
var G__62775 = (0);
var G__62776 = (0);
seq__62654_62748 = G__62773;
chunk__62655_62749 = G__62774;
count__62656_62750 = G__62775;
i__62657_62751 = G__62776;
continue;
}
} else {
}
}
break;
}

var G__62777 = cljs.core.next.call(null,seq__62636_62739__$1);
var G__62778 = null;
var G__62779 = (0);
var G__62780 = (0);
seq__62636_62698 = G__62777;
chunk__62637_62699 = G__62778;
count__62638_62700 = G__62779;
i__62639_62701 = G__62780;
continue;
}
} else {
}
}
break;
}

var G__62781 = seq__62629_62691;
var G__62782 = chunk__62630_62692;
var G__62783 = count__62631_62693;
var G__62784 = (i__62632_62694 + (1));
seq__62629_62691 = G__62781;
chunk__62630_62692 = G__62782;
count__62631_62693 = G__62783;
i__62632_62694 = G__62784;
continue;
} else {
var temp__4657__auto___62785 = cljs.core.seq.call(null,seq__62629_62691);
if(temp__4657__auto___62785){
var seq__62629_62786__$1 = temp__4657__auto___62785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62629_62786__$1)){
var c__7032__auto___62787 = cljs.core.chunk_first.call(null,seq__62629_62786__$1);
var G__62788 = cljs.core.chunk_rest.call(null,seq__62629_62786__$1);
var G__62789 = c__7032__auto___62787;
var G__62790 = cljs.core.count.call(null,c__7032__auto___62787);
var G__62791 = (0);
seq__62629_62691 = G__62788;
chunk__62630_62692 = G__62789;
count__62631_62693 = G__62790;
i__62632_62694 = G__62791;
continue;
} else {
var vec__62662_62792 = cljs.core.first.call(null,seq__62629_62786__$1);
var line_62793 = cljs.core.nth.call(null,vec__62662_62792,(0),null);
var columns_62794 = cljs.core.nth.call(null,vec__62662_62792,(1),null);
var seq__62665_62795 = cljs.core.seq.call(null,columns_62794);
var chunk__62666_62796 = null;
var count__62667_62797 = (0);
var i__62668_62798 = (0);
while(true){
if((i__62668_62798 < count__62667_62797)){
var vec__62669_62799 = cljs.core._nth.call(null,chunk__62666_62796,i__62668_62798);
var column_62800 = cljs.core.nth.call(null,vec__62669_62799,(0),null);
var column_info_62801 = cljs.core.nth.call(null,vec__62669_62799,(1),null);
var seq__62672_62802 = cljs.core.seq.call(null,column_info_62801);
var chunk__62673_62803 = null;
var count__62674_62804 = (0);
var i__62675_62805 = (0);
while(true){
if((i__62675_62805 < count__62674_62804)){
var map__62676_62806 = cljs.core._nth.call(null,chunk__62673_62803,i__62675_62805);
var map__62676_62807__$1 = ((((!((map__62676_62806 == null)))?((((map__62676_62806.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62676_62806.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62676_62806):map__62676_62806);
var gline_62808 = cljs.core.get.call(null,map__62676_62807__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62809 = cljs.core.get.call(null,map__62676_62807__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62810 = cljs.core.get.call(null,map__62676_62807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62808], null),cljs.core.fnil.call(null,((function (seq__62672_62802,chunk__62673_62803,count__62674_62804,i__62675_62805,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62676_62806,map__62676_62807__$1,gline_62808,gcol_62809,name_62810,vec__62669_62799,column_62800,column_info_62801,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62809], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62793,new cljs.core.Keyword(null,"col","col",-1959363084),column_62800,new cljs.core.Keyword(null,"name","name",1843675177),name_62810], null));
});})(seq__62672_62802,chunk__62673_62803,count__62674_62804,i__62675_62805,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62676_62806,map__62676_62807__$1,gline_62808,gcol_62809,name_62810,vec__62669_62799,column_62800,column_info_62801,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted))
,cljs.core.sorted_map.call(null)));

var G__62811 = seq__62672_62802;
var G__62812 = chunk__62673_62803;
var G__62813 = count__62674_62804;
var G__62814 = (i__62675_62805 + (1));
seq__62672_62802 = G__62811;
chunk__62673_62803 = G__62812;
count__62674_62804 = G__62813;
i__62675_62805 = G__62814;
continue;
} else {
var temp__4657__auto___62815__$1 = cljs.core.seq.call(null,seq__62672_62802);
if(temp__4657__auto___62815__$1){
var seq__62672_62816__$1 = temp__4657__auto___62815__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62672_62816__$1)){
var c__7032__auto___62817 = cljs.core.chunk_first.call(null,seq__62672_62816__$1);
var G__62818 = cljs.core.chunk_rest.call(null,seq__62672_62816__$1);
var G__62819 = c__7032__auto___62817;
var G__62820 = cljs.core.count.call(null,c__7032__auto___62817);
var G__62821 = (0);
seq__62672_62802 = G__62818;
chunk__62673_62803 = G__62819;
count__62674_62804 = G__62820;
i__62675_62805 = G__62821;
continue;
} else {
var map__62678_62822 = cljs.core.first.call(null,seq__62672_62816__$1);
var map__62678_62823__$1 = ((((!((map__62678_62822 == null)))?((((map__62678_62822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62678_62822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62678_62822):map__62678_62822);
var gline_62824 = cljs.core.get.call(null,map__62678_62823__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62825 = cljs.core.get.call(null,map__62678_62823__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62826 = cljs.core.get.call(null,map__62678_62823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62824], null),cljs.core.fnil.call(null,((function (seq__62672_62802,chunk__62673_62803,count__62674_62804,i__62675_62805,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62678_62822,map__62678_62823__$1,gline_62824,gcol_62825,name_62826,seq__62672_62816__$1,temp__4657__auto___62815__$1,vec__62669_62799,column_62800,column_info_62801,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62825], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62793,new cljs.core.Keyword(null,"col","col",-1959363084),column_62800,new cljs.core.Keyword(null,"name","name",1843675177),name_62826], null));
});})(seq__62672_62802,chunk__62673_62803,count__62674_62804,i__62675_62805,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62678_62822,map__62678_62823__$1,gline_62824,gcol_62825,name_62826,seq__62672_62816__$1,temp__4657__auto___62815__$1,vec__62669_62799,column_62800,column_info_62801,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted))
,cljs.core.sorted_map.call(null)));

var G__62827 = cljs.core.next.call(null,seq__62672_62816__$1);
var G__62828 = null;
var G__62829 = (0);
var G__62830 = (0);
seq__62672_62802 = G__62827;
chunk__62673_62803 = G__62828;
count__62674_62804 = G__62829;
i__62675_62805 = G__62830;
continue;
}
} else {
}
}
break;
}

var G__62831 = seq__62665_62795;
var G__62832 = chunk__62666_62796;
var G__62833 = count__62667_62797;
var G__62834 = (i__62668_62798 + (1));
seq__62665_62795 = G__62831;
chunk__62666_62796 = G__62832;
count__62667_62797 = G__62833;
i__62668_62798 = G__62834;
continue;
} else {
var temp__4657__auto___62835__$1 = cljs.core.seq.call(null,seq__62665_62795);
if(temp__4657__auto___62835__$1){
var seq__62665_62836__$1 = temp__4657__auto___62835__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62665_62836__$1)){
var c__7032__auto___62837 = cljs.core.chunk_first.call(null,seq__62665_62836__$1);
var G__62838 = cljs.core.chunk_rest.call(null,seq__62665_62836__$1);
var G__62839 = c__7032__auto___62837;
var G__62840 = cljs.core.count.call(null,c__7032__auto___62837);
var G__62841 = (0);
seq__62665_62795 = G__62838;
chunk__62666_62796 = G__62839;
count__62667_62797 = G__62840;
i__62668_62798 = G__62841;
continue;
} else {
var vec__62680_62842 = cljs.core.first.call(null,seq__62665_62836__$1);
var column_62843 = cljs.core.nth.call(null,vec__62680_62842,(0),null);
var column_info_62844 = cljs.core.nth.call(null,vec__62680_62842,(1),null);
var seq__62683_62845 = cljs.core.seq.call(null,column_info_62844);
var chunk__62684_62846 = null;
var count__62685_62847 = (0);
var i__62686_62848 = (0);
while(true){
if((i__62686_62848 < count__62685_62847)){
var map__62687_62849 = cljs.core._nth.call(null,chunk__62684_62846,i__62686_62848);
var map__62687_62850__$1 = ((((!((map__62687_62849 == null)))?((((map__62687_62849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62687_62849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62687_62849):map__62687_62849);
var gline_62851 = cljs.core.get.call(null,map__62687_62850__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62852 = cljs.core.get.call(null,map__62687_62850__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62853 = cljs.core.get.call(null,map__62687_62850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62851], null),cljs.core.fnil.call(null,((function (seq__62683_62845,chunk__62684_62846,count__62685_62847,i__62686_62848,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62687_62849,map__62687_62850__$1,gline_62851,gcol_62852,name_62853,vec__62680_62842,column_62843,column_info_62844,seq__62665_62836__$1,temp__4657__auto___62835__$1,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62852], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62793,new cljs.core.Keyword(null,"col","col",-1959363084),column_62843,new cljs.core.Keyword(null,"name","name",1843675177),name_62853], null));
});})(seq__62683_62845,chunk__62684_62846,count__62685_62847,i__62686_62848,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62687_62849,map__62687_62850__$1,gline_62851,gcol_62852,name_62853,vec__62680_62842,column_62843,column_info_62844,seq__62665_62836__$1,temp__4657__auto___62835__$1,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted))
,cljs.core.sorted_map.call(null)));

var G__62854 = seq__62683_62845;
var G__62855 = chunk__62684_62846;
var G__62856 = count__62685_62847;
var G__62857 = (i__62686_62848 + (1));
seq__62683_62845 = G__62854;
chunk__62684_62846 = G__62855;
count__62685_62847 = G__62856;
i__62686_62848 = G__62857;
continue;
} else {
var temp__4657__auto___62858__$2 = cljs.core.seq.call(null,seq__62683_62845);
if(temp__4657__auto___62858__$2){
var seq__62683_62859__$1 = temp__4657__auto___62858__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62683_62859__$1)){
var c__7032__auto___62860 = cljs.core.chunk_first.call(null,seq__62683_62859__$1);
var G__62861 = cljs.core.chunk_rest.call(null,seq__62683_62859__$1);
var G__62862 = c__7032__auto___62860;
var G__62863 = cljs.core.count.call(null,c__7032__auto___62860);
var G__62864 = (0);
seq__62683_62845 = G__62861;
chunk__62684_62846 = G__62862;
count__62685_62847 = G__62863;
i__62686_62848 = G__62864;
continue;
} else {
var map__62689_62865 = cljs.core.first.call(null,seq__62683_62859__$1);
var map__62689_62866__$1 = ((((!((map__62689_62865 == null)))?((((map__62689_62865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62689_62865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62689_62865):map__62689_62865);
var gline_62867 = cljs.core.get.call(null,map__62689_62866__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_62868 = cljs.core.get.call(null,map__62689_62866__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_62869 = cljs.core.get.call(null,map__62689_62866__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_62867], null),cljs.core.fnil.call(null,((function (seq__62683_62845,chunk__62684_62846,count__62685_62847,i__62686_62848,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62689_62865,map__62689_62866__$1,gline_62867,gcol_62868,name_62869,seq__62683_62859__$1,temp__4657__auto___62858__$2,vec__62680_62842,column_62843,column_info_62844,seq__62665_62836__$1,temp__4657__auto___62835__$1,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_62868], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_62793,new cljs.core.Keyword(null,"col","col",-1959363084),column_62843,new cljs.core.Keyword(null,"name","name",1843675177),name_62869], null));
});})(seq__62683_62845,chunk__62684_62846,count__62685_62847,i__62686_62848,seq__62665_62795,chunk__62666_62796,count__62667_62797,i__62668_62798,seq__62629_62691,chunk__62630_62692,count__62631_62693,i__62632_62694,map__62689_62865,map__62689_62866__$1,gline_62867,gcol_62868,name_62869,seq__62683_62859__$1,temp__4657__auto___62858__$2,vec__62680_62842,column_62843,column_info_62844,seq__62665_62836__$1,temp__4657__auto___62835__$1,vec__62662_62792,line_62793,columns_62794,seq__62629_62786__$1,temp__4657__auto___62785,inverted))
,cljs.core.sorted_map.call(null)));

var G__62870 = cljs.core.next.call(null,seq__62683_62859__$1);
var G__62871 = null;
var G__62872 = (0);
var G__62873 = (0);
seq__62683_62845 = G__62870;
chunk__62684_62846 = G__62871;
count__62685_62847 = G__62872;
i__62686_62848 = G__62873;
continue;
}
} else {
}
}
break;
}

var G__62874 = cljs.core.next.call(null,seq__62665_62836__$1);
var G__62875 = null;
var G__62876 = (0);
var G__62877 = (0);
seq__62665_62795 = G__62874;
chunk__62666_62796 = G__62875;
count__62667_62797 = G__62876;
i__62668_62798 = G__62877;
continue;
}
} else {
}
}
break;
}

var G__62878 = cljs.core.next.call(null,seq__62629_62786__$1);
var G__62879 = null;
var G__62880 = (0);
var G__62881 = (0);
seq__62629_62691 = G__62878;
chunk__62630_62692 = G__62879;
count__62631_62693 = G__62880;
i__62632_62694 = G__62881;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map