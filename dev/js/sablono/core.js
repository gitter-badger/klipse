// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14138__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__14133 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__14134 = cljs.core.seq(vec__14133);
var first__14135 = cljs.core.first(seq__14134);
var seq__14134__$1 = cljs.core.next(seq__14134);
var tag = first__14135;
var body = seq__14134__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__14138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14141__i = 0, G__14141__a = new Array(arguments.length -  0);
while (G__14141__i < G__14141__a.length) {G__14141__a[G__14141__i] = arguments[G__14141__i + 0]; ++G__14141__i;}
  args = new cljs.core.IndexedSeq(G__14141__a,0);
} 
return G__14138__delegate.call(this,args);};
G__14138.cljs$lang$maxFixedArity = 0;
G__14138.cljs$lang$applyTo = (function (arglist__14142){
var args = cljs.core.seq(arglist__14142);
return G__14138__delegate(args);
});
G__14138.cljs$core$IFn$_invoke$arity$variadic = G__14138__delegate;
return G__14138;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7001__auto__ = (function sablono$core$update_arglists_$_iter__14155(s__14156){
return (new cljs.core.LazySeq(null,(function (){
var s__14156__$1 = s__14156;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14156__$1);
if(temp__4657__auto__){
var s__14156__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14156__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14156__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14158 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14157 = (0);
while(true){
if((i__14157 < size__7000__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14157);
cljs.core.chunk_append(b__14158,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__14165 = (i__14157 + (1));
i__14157 = G__14165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14158),sablono$core$update_arglists_$_iter__14155(cljs.core.chunk_rest(s__14156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14158),null);
}
} else {
var args = cljs.core.first(s__14156__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__14155(cljs.core.rest(s__14156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14188 = arguments.length;
var i__7297__auto___14189 = (0);
while(true){
if((i__7297__auto___14189 < len__7296__auto___14188)){
args__7303__auto__.push((arguments[i__7297__auto___14189]));

var G__14190 = (i__7297__auto___14189 + (1));
i__7297__auto___14189 = G__14190;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7001__auto__ = (function sablono$core$iter__14176(s__14177){
return (new cljs.core.LazySeq(null,(function (){
var s__14177__$1 = s__14177;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14177__$1);
if(temp__4657__auto__){
var s__14177__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14177__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14177__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14179 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14178 = (0);
while(true){
if((i__14178 < size__7000__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14178);
cljs.core.chunk_append(b__14179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__14197 = (i__14178 + (1));
i__14178 = G__14197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14179),sablono$core$iter__14176(cljs.core.chunk_rest(s__14177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14179),null);
}
} else {
var style = cljs.core.first(s__14177__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__14176(cljs.core.rest(s__14177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14172){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14172));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__14211 = goog.dom.getDocument().body;
var G__14212 = (function (){var G__14213 = "script";
var G__14214 = {"src": src};
return goog.dom.createDom(G__14213,G__14214);
})();
return goog.dom.appendChild(G__14211,G__14212);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14223 = (function sablono$core$link_to14223(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14246 = arguments.length;
var i__7297__auto___14247 = (0);
while(true){
if((i__7297__auto___14247 < len__7296__auto___14246)){
args__7303__auto__.push((arguments[i__7297__auto___14247]));

var G__14248 = (i__7297__auto___14247 + (1));
i__7297__auto___14247 = G__14248;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to14223.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.link_to14223.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to14223.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14223.cljs$lang$applyTo = (function (seq14224){
var G__14225 = cljs.core.first(seq14224);
var seq14224__$1 = cljs.core.next(seq14224);
return sablono.core.link_to14223.cljs$core$IFn$_invoke$arity$variadic(G__14225,seq14224__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to14223);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14265 = (function sablono$core$mail_to14265(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14301 = arguments.length;
var i__7297__auto___14302 = (0);
while(true){
if((i__7297__auto___14302 < len__7296__auto___14301)){
args__7303__auto__.push((arguments[i__7297__auto___14302]));

var G__14304 = (i__7297__auto___14302 + (1));
i__7297__auto___14302 = G__14304;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to14265.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.mail_to14265.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14284){
var vec__14285 = p__14284;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14285,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6221__auto__ = content;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14265.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14265.cljs$lang$applyTo = (function (seq14267){
var G__14274 = cljs.core.first(seq14267);
var seq14267__$1 = cljs.core.next(seq14267);
return sablono.core.mail_to14265.cljs$core$IFn$_invoke$arity$variadic(G__14274,seq14267__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to14265);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14327 = (function sablono$core$unordered_list14327(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7001__auto__ = (function sablono$core$unordered_list14327_$_iter__14366(s__14367){
return (new cljs.core.LazySeq(null,(function (){
var s__14367__$1 = s__14367;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14367__$1);
if(temp__4657__auto__){
var s__14367__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14367__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14367__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14369 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14368 = (0);
while(true){
if((i__14368 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14368);
cljs.core.chunk_append(b__14369,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14386 = (i__14368 + (1));
i__14368 = G__14386;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14369),sablono$core$unordered_list14327_$_iter__14366(cljs.core.chunk_rest(s__14367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14369),null);
}
} else {
var x = cljs.core.first(s__14367__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list14327_$_iter__14366(cljs.core.rest(s__14367__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list14327);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14388 = (function sablono$core$ordered_list14388(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7001__auto__ = (function sablono$core$ordered_list14388_$_iter__14401(s__14402){
return (new cljs.core.LazySeq(null,(function (){
var s__14402__$1 = s__14402;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14402__$1);
if(temp__4657__auto__){
var s__14402__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14402__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14402__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14404 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14403 = (0);
while(true){
if((i__14403 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14403);
cljs.core.chunk_append(b__14404,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__14428 = (i__14403 + (1));
i__14403 = G__14428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14404),sablono$core$ordered_list14388_$_iter__14401(cljs.core.chunk_rest(s__14402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14404),null);
}
} else {
var x = cljs.core.first(s__14402__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list14388_$_iter__14401(cljs.core.rest(s__14402__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list14388);
/**
 * Create an image element.
 */
sablono.core.image14429 = (function sablono$core$image14429(var_args){
var args14433 = [];
var len__7296__auto___14447 = arguments.length;
var i__7297__auto___14448 = (0);
while(true){
if((i__7297__auto___14448 < len__7296__auto___14447)){
args14433.push((arguments[i__7297__auto___14448]));

var G__14449 = (i__7297__auto___14448 + (1));
i__7297__auto___14448 = G__14449;
continue;
} else {
}
break;
}

var G__14440 = args14433.length;
switch (G__14440) {
case 1:
return sablono.core.image14429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14433.length)].join('')));

}
});

sablono.core.image14429.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image14429.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image14429.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image14429);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14452_SHARP_,p2__14453_SHARP_){
return [cljs.core.str(p1__14452_SHARP_),cljs.core.str("["),cljs.core.str(p2__14453_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__14455_SHARP_,p2__14456_SHARP_){
return [cljs.core.str(p1__14455_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14456_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field14458 = (function sablono$core$color_field14458(var_args){
var args14459 = [];
var len__7296__auto___14570 = arguments.length;
var i__7297__auto___14571 = (0);
while(true){
if((i__7297__auto___14571 < len__7296__auto___14570)){
args14459.push((arguments[i__7297__auto___14571]));

var G__14573 = (i__7297__auto___14571 + (1));
i__7297__auto___14571 = G__14573;
continue;
} else {
}
break;
}

var G__14462 = args14459.length;
switch (G__14462) {
case 1:
return sablono.core.color_field14458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14459.length)].join('')));

}
});

sablono.core.color_field14458.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.color_field14458.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.color_field14458.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.color_field14458.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field14458);

/**
 * Creates a date input field.
 */
sablono.core.date_field14469 = (function sablono$core$date_field14469(var_args){
var args14471 = [];
var len__7296__auto___14576 = arguments.length;
var i__7297__auto___14578 = (0);
while(true){
if((i__7297__auto___14578 < len__7296__auto___14576)){
args14471.push((arguments[i__7297__auto___14578]));

var G__14579 = (i__7297__auto___14578 + (1));
i__7297__auto___14578 = G__14579;
continue;
} else {
}
break;
}

var G__14474 = args14471.length;
switch (G__14474) {
case 1:
return sablono.core.date_field14469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14471.length)].join('')));

}
});

sablono.core.date_field14469.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.date_field14469.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.date_field14469.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.date_field14469.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field14469);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14476 = (function sablono$core$datetime_field14476(var_args){
var args14477 = [];
var len__7296__auto___14585 = arguments.length;
var i__7297__auto___14586 = (0);
while(true){
if((i__7297__auto___14586 < len__7296__auto___14585)){
args14477.push((arguments[i__7297__auto___14586]));

var G__14587 = (i__7297__auto___14586 + (1));
i__7297__auto___14586 = G__14587;
continue;
} else {
}
break;
}

var G__14479 = args14477.length;
switch (G__14479) {
case 1:
return sablono.core.datetime_field14476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14477.length)].join('')));

}
});

sablono.core.datetime_field14476.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.datetime_field14476.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.datetime_field14476.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.datetime_field14476.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field14476);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14480 = (function sablono$core$datetime_local_field14480(var_args){
var args14481 = [];
var len__7296__auto___14589 = arguments.length;
var i__7297__auto___14590 = (0);
while(true){
if((i__7297__auto___14590 < len__7296__auto___14589)){
args14481.push((arguments[i__7297__auto___14590]));

var G__14591 = (i__7297__auto___14590 + (1));
i__7297__auto___14590 = G__14591;
continue;
} else {
}
break;
}

var G__14490 = args14481.length;
switch (G__14490) {
case 1:
return sablono.core.datetime_local_field14480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14481.length)].join('')));

}
});

sablono.core.datetime_local_field14480.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.datetime_local_field14480.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.datetime_local_field14480.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.datetime_local_field14480.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field14480);

/**
 * Creates a email input field.
 */
sablono.core.email_field14491 = (function sablono$core$email_field14491(var_args){
var args14492 = [];
var len__7296__auto___14593 = arguments.length;
var i__7297__auto___14594 = (0);
while(true){
if((i__7297__auto___14594 < len__7296__auto___14593)){
args14492.push((arguments[i__7297__auto___14594]));

var G__14595 = (i__7297__auto___14594 + (1));
i__7297__auto___14594 = G__14595;
continue;
} else {
}
break;
}

var G__14494 = args14492.length;
switch (G__14494) {
case 1:
return sablono.core.email_field14491.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14491.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14492.length)].join('')));

}
});

sablono.core.email_field14491.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.email_field14491.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.email_field14491.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.email_field14491.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field14491);

/**
 * Creates a file input field.
 */
sablono.core.file_field14495 = (function sablono$core$file_field14495(var_args){
var args14496 = [];
var len__7296__auto___14598 = arguments.length;
var i__7297__auto___14599 = (0);
while(true){
if((i__7297__auto___14599 < len__7296__auto___14598)){
args14496.push((arguments[i__7297__auto___14599]));

var G__14600 = (i__7297__auto___14599 + (1));
i__7297__auto___14599 = G__14600;
continue;
} else {
}
break;
}

var G__14498 = args14496.length;
switch (G__14498) {
case 1:
return sablono.core.file_field14495.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14495.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14496.length)].join('')));

}
});

sablono.core.file_field14495.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.file_field14495.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.file_field14495.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.file_field14495.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field14495);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14499 = (function sablono$core$hidden_field14499(var_args){
var args14500 = [];
var len__7296__auto___14604 = arguments.length;
var i__7297__auto___14605 = (0);
while(true){
if((i__7297__auto___14605 < len__7296__auto___14604)){
args14500.push((arguments[i__7297__auto___14605]));

var G__14606 = (i__7297__auto___14605 + (1));
i__7297__auto___14605 = G__14606;
continue;
} else {
}
break;
}

var G__14502 = args14500.length;
switch (G__14502) {
case 1:
return sablono.core.hidden_field14499.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14499.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14500.length)].join('')));

}
});

sablono.core.hidden_field14499.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.hidden_field14499.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.hidden_field14499.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.hidden_field14499.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field14499);

/**
 * Creates a month input field.
 */
sablono.core.month_field14506 = (function sablono$core$month_field14506(var_args){
var args14507 = [];
var len__7296__auto___14608 = arguments.length;
var i__7297__auto___14609 = (0);
while(true){
if((i__7297__auto___14609 < len__7296__auto___14608)){
args14507.push((arguments[i__7297__auto___14609]));

var G__14610 = (i__7297__auto___14609 + (1));
i__7297__auto___14609 = G__14610;
continue;
} else {
}
break;
}

var G__14514 = args14507.length;
switch (G__14514) {
case 1:
return sablono.core.month_field14506.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14506.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14507.length)].join('')));

}
});

sablono.core.month_field14506.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.month_field14506.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.month_field14506.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.month_field14506.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field14506);

/**
 * Creates a number input field.
 */
sablono.core.number_field14515 = (function sablono$core$number_field14515(var_args){
var args14516 = [];
var len__7296__auto___14612 = arguments.length;
var i__7297__auto___14613 = (0);
while(true){
if((i__7297__auto___14613 < len__7296__auto___14612)){
args14516.push((arguments[i__7297__auto___14613]));

var G__14614 = (i__7297__auto___14613 + (1));
i__7297__auto___14613 = G__14614;
continue;
} else {
}
break;
}

var G__14521 = args14516.length;
switch (G__14521) {
case 1:
return sablono.core.number_field14515.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14515.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14516.length)].join('')));

}
});

sablono.core.number_field14515.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.number_field14515.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.number_field14515.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.number_field14515.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field14515);

/**
 * Creates a password input field.
 */
sablono.core.password_field14522 = (function sablono$core$password_field14522(var_args){
var args14523 = [];
var len__7296__auto___14616 = arguments.length;
var i__7297__auto___14617 = (0);
while(true){
if((i__7297__auto___14617 < len__7296__auto___14616)){
args14523.push((arguments[i__7297__auto___14617]));

var G__14618 = (i__7297__auto___14617 + (1));
i__7297__auto___14617 = G__14618;
continue;
} else {
}
break;
}

var G__14529 = args14523.length;
switch (G__14529) {
case 1:
return sablono.core.password_field14522.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14522.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14523.length)].join('')));

}
});

sablono.core.password_field14522.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.password_field14522.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.password_field14522.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.password_field14522.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field14522);

/**
 * Creates a range input field.
 */
sablono.core.range_field14530 = (function sablono$core$range_field14530(var_args){
var args14531 = [];
var len__7296__auto___14620 = arguments.length;
var i__7297__auto___14621 = (0);
while(true){
if((i__7297__auto___14621 < len__7296__auto___14620)){
args14531.push((arguments[i__7297__auto___14621]));

var G__14622 = (i__7297__auto___14621 + (1));
i__7297__auto___14621 = G__14622;
continue;
} else {
}
break;
}

var G__14533 = args14531.length;
switch (G__14533) {
case 1:
return sablono.core.range_field14530.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14530.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14531.length)].join('')));

}
});

sablono.core.range_field14530.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.range_field14530.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.range_field14530.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.range_field14530.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field14530);

/**
 * Creates a search input field.
 */
sablono.core.search_field14536 = (function sablono$core$search_field14536(var_args){
var args14537 = [];
var len__7296__auto___14624 = arguments.length;
var i__7297__auto___14625 = (0);
while(true){
if((i__7297__auto___14625 < len__7296__auto___14624)){
args14537.push((arguments[i__7297__auto___14625]));

var G__14626 = (i__7297__auto___14625 + (1));
i__7297__auto___14625 = G__14626;
continue;
} else {
}
break;
}

var G__14539 = args14537.length;
switch (G__14539) {
case 1:
return sablono.core.search_field14536.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14536.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14537.length)].join('')));

}
});

sablono.core.search_field14536.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.search_field14536.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.search_field14536.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.search_field14536.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field14536);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14540 = (function sablono$core$tel_field14540(var_args){
var args14541 = [];
var len__7296__auto___14628 = arguments.length;
var i__7297__auto___14629 = (0);
while(true){
if((i__7297__auto___14629 < len__7296__auto___14628)){
args14541.push((arguments[i__7297__auto___14629]));

var G__14630 = (i__7297__auto___14629 + (1));
i__7297__auto___14629 = G__14630;
continue;
} else {
}
break;
}

var G__14545 = args14541.length;
switch (G__14545) {
case 1:
return sablono.core.tel_field14540.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14540.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14541.length)].join('')));

}
});

sablono.core.tel_field14540.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.tel_field14540.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.tel_field14540.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.tel_field14540.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field14540);

/**
 * Creates a text input field.
 */
sablono.core.text_field14548 = (function sablono$core$text_field14548(var_args){
var args14549 = [];
var len__7296__auto___14632 = arguments.length;
var i__7297__auto___14633 = (0);
while(true){
if((i__7297__auto___14633 < len__7296__auto___14632)){
args14549.push((arguments[i__7297__auto___14633]));

var G__14634 = (i__7297__auto___14633 + (1));
i__7297__auto___14633 = G__14634;
continue;
} else {
}
break;
}

var G__14551 = args14549.length;
switch (G__14551) {
case 1:
return sablono.core.text_field14548.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14548.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14549.length)].join('')));

}
});

sablono.core.text_field14548.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.text_field14548.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.text_field14548.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.text_field14548.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field14548);

/**
 * Creates a time input field.
 */
sablono.core.time_field14552 = (function sablono$core$time_field14552(var_args){
var args14553 = [];
var len__7296__auto___14639 = arguments.length;
var i__7297__auto___14640 = (0);
while(true){
if((i__7297__auto___14640 < len__7296__auto___14639)){
args14553.push((arguments[i__7297__auto___14640]));

var G__14641 = (i__7297__auto___14640 + (1));
i__7297__auto___14640 = G__14641;
continue;
} else {
}
break;
}

var G__14555 = args14553.length;
switch (G__14555) {
case 1:
return sablono.core.time_field14552.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14552.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14553.length)].join('')));

}
});

sablono.core.time_field14552.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.time_field14552.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.time_field14552.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.time_field14552.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field14552);

/**
 * Creates a url input field.
 */
sablono.core.url_field14556 = (function sablono$core$url_field14556(var_args){
var args14557 = [];
var len__7296__auto___14653 = arguments.length;
var i__7297__auto___14655 = (0);
while(true){
if((i__7297__auto___14655 < len__7296__auto___14653)){
args14557.push((arguments[i__7297__auto___14655]));

var G__14656 = (i__7297__auto___14655 + (1));
i__7297__auto___14655 = G__14656;
continue;
} else {
}
break;
}

var G__14560 = args14557.length;
switch (G__14560) {
case 1:
return sablono.core.url_field14556.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14556.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14557.length)].join('')));

}
});

sablono.core.url_field14556.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.url_field14556.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.url_field14556.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.url_field14556.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field14556);

/**
 * Creates a week input field.
 */
sablono.core.week_field14562 = (function sablono$core$week_field14562(var_args){
var args14563 = [];
var len__7296__auto___14668 = arguments.length;
var i__7297__auto___14669 = (0);
while(true){
if((i__7297__auto___14669 < len__7296__auto___14668)){
args14563.push((arguments[i__7297__auto___14669]));

var G__14671 = (i__7297__auto___14669 + (1));
i__7297__auto___14669 = G__14671;
continue;
} else {
}
break;
}

var G__14569 = args14563.length;
switch (G__14569) {
case 1:
return sablono.core.week_field14562.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14562.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14563.length)].join('')));

}
});

sablono.core.week_field14562.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.week_field14562.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.week_field14562.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.week_field14562.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field14562);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14688 = (function sablono$core$check_box14688(var_args){
var args14689 = [];
var len__7296__auto___14703 = arguments.length;
var i__7297__auto___14704 = (0);
while(true){
if((i__7297__auto___14704 < len__7296__auto___14703)){
args14689.push((arguments[i__7297__auto___14704]));

var G__14705 = (i__7297__auto___14704 + (1));
i__7297__auto___14704 = G__14705;
continue;
} else {
}
break;
}

var G__14699 = args14689.length;
switch (G__14699) {
case 1:
return sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14689.length)].join('')));

}
});

sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box14688.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box14688.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box14688);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14713 = (function sablono$core$radio_button14713(var_args){
var args14714 = [];
var len__7296__auto___14734 = arguments.length;
var i__7297__auto___14735 = (0);
while(true){
if((i__7297__auto___14735 < len__7296__auto___14734)){
args14714.push((arguments[i__7297__auto___14735]));

var G__14736 = (i__7297__auto___14735 + (1));
i__7297__auto___14735 = G__14736;
continue;
} else {
}
break;
}

var G__14731 = args14714.length;
switch (G__14731) {
case 1:
return sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14714.length)].join('')));

}
});

sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button14713.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button14713.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button14713);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__14741 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__14741);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14743 = (function sablono$core$select_options14743(coll){
var iter__7001__auto__ = (function sablono$core$select_options14743_$_iter__14777(s__14778){
return (new cljs.core.LazySeq(null,(function (){
var s__14778__$1 = s__14778;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__14778__$1);
if(temp__4657__auto__){
var s__14778__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14778__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__14778__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__14780 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__14779 = (0);
while(true){
if((i__14779 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__14779);
cljs.core.chunk_append(b__14780,((cljs.core.sequential_QMARK_(x))?(function (){var vec__14794 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14794,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options14743(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__14809 = (i__14779 + (1));
i__14779 = G__14809;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14780),sablono$core$select_options14743_$_iter__14777(cljs.core.chunk_rest(s__14778__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14780),null);
}
} else {
var x = cljs.core.first(s__14778__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__14801 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14801,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options14743(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options14743_$_iter__14777(cljs.core.rest(s__14778__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options14743);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14811 = (function sablono$core$drop_down14811(var_args){
var args14813 = [];
var len__7296__auto___14817 = arguments.length;
var i__7297__auto___14820 = (0);
while(true){
if((i__7297__auto___14820 < len__7296__auto___14817)){
args14813.push((arguments[i__7297__auto___14820]));

var G__14822 = (i__7297__auto___14820 + (1));
i__7297__auto___14820 = G__14822;
continue;
} else {
}
break;
}

var G__14816 = args14813.length;
switch (G__14816) {
case 2:
return sablono.core.drop_down14811.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14811.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14813.length)].join('')));

}
});

sablono.core.drop_down14811.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14811.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down14811.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down14811.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down14811);
/**
 * Creates a text area element.
 */
sablono.core.text_area14825 = (function sablono$core$text_area14825(var_args){
var args14826 = [];
var len__7296__auto___14829 = arguments.length;
var i__7297__auto___14830 = (0);
while(true){
if((i__7297__auto___14830 < len__7296__auto___14829)){
args14826.push((arguments[i__7297__auto___14830]));

var G__14831 = (i__7297__auto___14830 + (1));
i__7297__auto___14830 = G__14831;
continue;
} else {
}
break;
}

var G__14828 = args14826.length;
switch (G__14828) {
case 1:
return sablono.core.text_area14825.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14825.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14826.length)].join('')));

}
});

sablono.core.text_area14825.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14825.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area14825.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area14825.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area14825);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14835 = (function sablono$core$label14835(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label14835);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14841 = (function sablono$core$submit_button14841(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button14841);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14844 = (function sablono$core$reset_button14844(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button14844);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to14846 = (function sablono$core$form_to14846(var_args){
var args__7303__auto__ = [];
var len__7296__auto___14860 = arguments.length;
var i__7297__auto___14861 = (0);
while(true){
if((i__7297__auto___14861 < len__7296__auto___14860)){
args__7303__auto__.push((arguments[i__7297__auto___14861]));

var G__14862 = (i__7297__auto___14861 + (1));
i__7297__auto___14861 = G__14862;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to14846.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.form_to14846.cljs$core$IFn$_invoke$arity$variadic = (function (p__14853,body){
var vec__14854 = p__14853;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14854,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14854,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__14857 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__14858 = "_method";
var G__14859 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__14857,G__14858,G__14859) : sablono.core.hidden_field.call(null,G__14857,G__14858,G__14859));
})()], null)),body));
});

sablono.core.form_to14846.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14846.cljs$lang$applyTo = (function (seq14851){
var G__14852 = cljs.core.first(seq14851);
var seq14851__$1 = cljs.core.next(seq14851);
return sablono.core.form_to14846.cljs$core$IFn$_invoke$arity$variadic(G__14852,seq14851__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to14846);
