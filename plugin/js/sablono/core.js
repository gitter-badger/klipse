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
var G__45868__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__45865 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__45866 = cljs.core.seq(vec__45865);
var first__45867 = cljs.core.first(seq__45866);
var seq__45866__$1 = cljs.core.next(seq__45866);
var tag = first__45867;
var body = seq__45866__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__45868 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45869__i = 0, G__45869__a = new Array(arguments.length -  0);
while (G__45869__i < G__45869__a.length) {G__45869__a[G__45869__i] = arguments[G__45869__i + 0]; ++G__45869__i;}
  args = new cljs.core.IndexedSeq(G__45869__a,0);
} 
return G__45868__delegate.call(this,args);};
G__45868.cljs$lang$maxFixedArity = 0;
G__45868.cljs$lang$applyTo = (function (arglist__45870){
var args = cljs.core.seq(arglist__45870);
return G__45868__delegate(args);
});
G__45868.cljs$core$IFn$_invoke$arity$variadic = G__45868__delegate;
return G__45868;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7001__auto__ = (function sablono$core$update_arglists_$_iter__45877(s__45878){
return (new cljs.core.LazySeq(null,(function (){
var s__45878__$1 = s__45878;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__45878__$1);
if(temp__4657__auto__){
var s__45878__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45878__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__45878__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__45880 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__45879 = (0);
while(true){
if((i__45879 < size__7000__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__45879);
cljs.core.chunk_append(b__45880,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__45883 = (i__45879 + (1));
i__45879 = G__45883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45880),sablono$core$update_arglists_$_iter__45877(cljs.core.chunk_rest(s__45878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45880),null);
}
} else {
var args = cljs.core.first(s__45878__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__45877(cljs.core.rest(s__45878__$2)));
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
var len__7296__auto___45891 = arguments.length;
var i__7297__auto___45892 = (0);
while(true){
if((i__7297__auto___45892 < len__7296__auto___45891)){
args__7303__auto__.push((arguments[i__7297__auto___45892]));

var G__45893 = (i__7297__auto___45892 + (1));
i__7297__auto___45892 = G__45893;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7001__auto__ = (function sablono$core$iter__45885(s__45886){
return (new cljs.core.LazySeq(null,(function (){
var s__45886__$1 = s__45886;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__45886__$1);
if(temp__4657__auto__){
var s__45886__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45886__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__45886__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__45888 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__45887 = (0);
while(true){
if((i__45887 < size__7000__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__45887);
cljs.core.chunk_append(b__45888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__45894 = (i__45887 + (1));
i__45887 = G__45894;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45888),sablono$core$iter__45885(cljs.core.chunk_rest(s__45886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45888),null);
}
} else {
var style = cljs.core.first(s__45886__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__45885(cljs.core.rest(s__45886__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq45884){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45884));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__45899 = goog.dom.getDocument().body;
var G__45900 = (function (){var G__45901 = "script";
var G__45902 = {"src": src};
return goog.dom.createDom(G__45901,G__45902);
})();
return goog.dom.appendChild(G__45899,G__45900);
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
sablono.core.link_to45903 = (function sablono$core$link_to45903(var_args){
var args__7303__auto__ = [];
var len__7296__auto___45906 = arguments.length;
var i__7297__auto___45907 = (0);
while(true){
if((i__7297__auto___45907 < len__7296__auto___45906)){
args__7303__auto__.push((arguments[i__7297__auto___45907]));

var G__45908 = (i__7297__auto___45907 + (1));
i__7297__auto___45907 = G__45908;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to45903.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.link_to45903.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to45903.cljs$lang$maxFixedArity = (1);

sablono.core.link_to45903.cljs$lang$applyTo = (function (seq45904){
var G__45905 = cljs.core.first(seq45904);
var seq45904__$1 = cljs.core.next(seq45904);
return sablono.core.link_to45903.cljs$core$IFn$_invoke$arity$variadic(G__45905,seq45904__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to45903);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to45909 = (function sablono$core$mail_to45909(var_args){
var args__7303__auto__ = [];
var len__7296__auto___45916 = arguments.length;
var i__7297__auto___45917 = (0);
while(true){
if((i__7297__auto___45917 < len__7296__auto___45916)){
args__7303__auto__.push((arguments[i__7297__auto___45917]));

var G__45918 = (i__7297__auto___45917 + (1));
i__7297__auto___45917 = G__45918;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to45909.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.mail_to45909.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__45912){
var vec__45913 = p__45912;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45913,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6221__auto__ = content;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to45909.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to45909.cljs$lang$applyTo = (function (seq45910){
var G__45911 = cljs.core.first(seq45910);
var seq45910__$1 = cljs.core.next(seq45910);
return sablono.core.mail_to45909.cljs$core$IFn$_invoke$arity$variadic(G__45911,seq45910__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to45909);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list45919 = (function sablono$core$unordered_list45919(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7001__auto__ = (function sablono$core$unordered_list45919_$_iter__45926(s__45927){
return (new cljs.core.LazySeq(null,(function (){
var s__45927__$1 = s__45927;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__45927__$1);
if(temp__4657__auto__){
var s__45927__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45927__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__45927__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__45929 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__45928 = (0);
while(true){
if((i__45928 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__45928);
cljs.core.chunk_append(b__45929,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__45932 = (i__45928 + (1));
i__45928 = G__45932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45929),sablono$core$unordered_list45919_$_iter__45926(cljs.core.chunk_rest(s__45927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45929),null);
}
} else {
var x = cljs.core.first(s__45927__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list45919_$_iter__45926(cljs.core.rest(s__45927__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list45919);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list45933 = (function sablono$core$ordered_list45933(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7001__auto__ = (function sablono$core$ordered_list45933_$_iter__45940(s__45941){
return (new cljs.core.LazySeq(null,(function (){
var s__45941__$1 = s__45941;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__45941__$1);
if(temp__4657__auto__){
var s__45941__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45941__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__45941__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__45943 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__45942 = (0);
while(true){
if((i__45942 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__45942);
cljs.core.chunk_append(b__45943,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__45946 = (i__45942 + (1));
i__45942 = G__45946;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45943),sablono$core$ordered_list45933_$_iter__45940(cljs.core.chunk_rest(s__45941__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45943),null);
}
} else {
var x = cljs.core.first(s__45941__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list45933_$_iter__45940(cljs.core.rest(s__45941__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list45933);
/**
 * Create an image element.
 */
sablono.core.image45947 = (function sablono$core$image45947(var_args){
var args45948 = [];
var len__7296__auto___45951 = arguments.length;
var i__7297__auto___45952 = (0);
while(true){
if((i__7297__auto___45952 < len__7296__auto___45951)){
args45948.push((arguments[i__7297__auto___45952]));

var G__45953 = (i__7297__auto___45952 + (1));
i__7297__auto___45952 = G__45953;
continue;
} else {
}
break;
}

var G__45950 = args45948.length;
switch (G__45950) {
case 1:
return sablono.core.image45947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image45947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45948.length)].join('')));

}
});

sablono.core.image45947.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image45947.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image45947.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image45947);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45955_SHARP_,p2__45956_SHARP_){
return [cljs.core.str(p1__45955_SHARP_),cljs.core.str("["),cljs.core.str(p2__45956_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__45957_SHARP_,p2__45958_SHARP_){
return [cljs.core.str(p1__45957_SHARP_),cljs.core.str("-"),cljs.core.str(p2__45958_SHARP_)].join('');
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
sablono.core.color_field45959 = (function sablono$core$color_field45959(var_args){
var args45960 = [];
var len__7296__auto___46027 = arguments.length;
var i__7297__auto___46028 = (0);
while(true){
if((i__7297__auto___46028 < len__7296__auto___46027)){
args45960.push((arguments[i__7297__auto___46028]));

var G__46029 = (i__7297__auto___46028 + (1));
i__7297__auto___46028 = G__46029;
continue;
} else {
}
break;
}

var G__45962 = args45960.length;
switch (G__45962) {
case 1:
return sablono.core.color_field45959.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field45959.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45960.length)].join('')));

}
});

sablono.core.color_field45959.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.color_field45959.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.color_field45959.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.color_field45959.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field45959);

/**
 * Creates a date input field.
 */
sablono.core.date_field45963 = (function sablono$core$date_field45963(var_args){
var args45964 = [];
var len__7296__auto___46031 = arguments.length;
var i__7297__auto___46032 = (0);
while(true){
if((i__7297__auto___46032 < len__7296__auto___46031)){
args45964.push((arguments[i__7297__auto___46032]));

var G__46033 = (i__7297__auto___46032 + (1));
i__7297__auto___46032 = G__46033;
continue;
} else {
}
break;
}

var G__45966 = args45964.length;
switch (G__45966) {
case 1:
return sablono.core.date_field45963.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field45963.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45964.length)].join('')));

}
});

sablono.core.date_field45963.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.date_field45963.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.date_field45963.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.date_field45963.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field45963);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field45967 = (function sablono$core$datetime_field45967(var_args){
var args45968 = [];
var len__7296__auto___46035 = arguments.length;
var i__7297__auto___46036 = (0);
while(true){
if((i__7297__auto___46036 < len__7296__auto___46035)){
args45968.push((arguments[i__7297__auto___46036]));

var G__46037 = (i__7297__auto___46036 + (1));
i__7297__auto___46036 = G__46037;
continue;
} else {
}
break;
}

var G__45970 = args45968.length;
switch (G__45970) {
case 1:
return sablono.core.datetime_field45967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field45967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45968.length)].join('')));

}
});

sablono.core.datetime_field45967.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.datetime_field45967.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.datetime_field45967.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.datetime_field45967.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field45967);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field45971 = (function sablono$core$datetime_local_field45971(var_args){
var args45972 = [];
var len__7296__auto___46039 = arguments.length;
var i__7297__auto___46040 = (0);
while(true){
if((i__7297__auto___46040 < len__7296__auto___46039)){
args45972.push((arguments[i__7297__auto___46040]));

var G__46041 = (i__7297__auto___46040 + (1));
i__7297__auto___46040 = G__46041;
continue;
} else {
}
break;
}

var G__45974 = args45972.length;
switch (G__45974) {
case 1:
return sablono.core.datetime_local_field45971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field45971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45972.length)].join('')));

}
});

sablono.core.datetime_local_field45971.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.datetime_local_field45971.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.datetime_local_field45971.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.datetime_local_field45971.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field45971);

/**
 * Creates a email input field.
 */
sablono.core.email_field45975 = (function sablono$core$email_field45975(var_args){
var args45976 = [];
var len__7296__auto___46043 = arguments.length;
var i__7297__auto___46044 = (0);
while(true){
if((i__7297__auto___46044 < len__7296__auto___46043)){
args45976.push((arguments[i__7297__auto___46044]));

var G__46045 = (i__7297__auto___46044 + (1));
i__7297__auto___46044 = G__46045;
continue;
} else {
}
break;
}

var G__45978 = args45976.length;
switch (G__45978) {
case 1:
return sablono.core.email_field45975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field45975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45976.length)].join('')));

}
});

sablono.core.email_field45975.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.email_field45975.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.email_field45975.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.email_field45975.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field45975);

/**
 * Creates a file input field.
 */
sablono.core.file_field45979 = (function sablono$core$file_field45979(var_args){
var args45980 = [];
var len__7296__auto___46047 = arguments.length;
var i__7297__auto___46048 = (0);
while(true){
if((i__7297__auto___46048 < len__7296__auto___46047)){
args45980.push((arguments[i__7297__auto___46048]));

var G__46049 = (i__7297__auto___46048 + (1));
i__7297__auto___46048 = G__46049;
continue;
} else {
}
break;
}

var G__45982 = args45980.length;
switch (G__45982) {
case 1:
return sablono.core.file_field45979.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field45979.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45980.length)].join('')));

}
});

sablono.core.file_field45979.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.file_field45979.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.file_field45979.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.file_field45979.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field45979);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field45983 = (function sablono$core$hidden_field45983(var_args){
var args45984 = [];
var len__7296__auto___46051 = arguments.length;
var i__7297__auto___46052 = (0);
while(true){
if((i__7297__auto___46052 < len__7296__auto___46051)){
args45984.push((arguments[i__7297__auto___46052]));

var G__46053 = (i__7297__auto___46052 + (1));
i__7297__auto___46052 = G__46053;
continue;
} else {
}
break;
}

var G__45986 = args45984.length;
switch (G__45986) {
case 1:
return sablono.core.hidden_field45983.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field45983.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45984.length)].join('')));

}
});

sablono.core.hidden_field45983.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.hidden_field45983.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.hidden_field45983.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.hidden_field45983.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field45983);

/**
 * Creates a month input field.
 */
sablono.core.month_field45987 = (function sablono$core$month_field45987(var_args){
var args45988 = [];
var len__7296__auto___46055 = arguments.length;
var i__7297__auto___46056 = (0);
while(true){
if((i__7297__auto___46056 < len__7296__auto___46055)){
args45988.push((arguments[i__7297__auto___46056]));

var G__46057 = (i__7297__auto___46056 + (1));
i__7297__auto___46056 = G__46057;
continue;
} else {
}
break;
}

var G__45990 = args45988.length;
switch (G__45990) {
case 1:
return sablono.core.month_field45987.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field45987.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45988.length)].join('')));

}
});

sablono.core.month_field45987.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.month_field45987.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.month_field45987.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.month_field45987.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field45987);

/**
 * Creates a number input field.
 */
sablono.core.number_field45991 = (function sablono$core$number_field45991(var_args){
var args45992 = [];
var len__7296__auto___46059 = arguments.length;
var i__7297__auto___46060 = (0);
while(true){
if((i__7297__auto___46060 < len__7296__auto___46059)){
args45992.push((arguments[i__7297__auto___46060]));

var G__46061 = (i__7297__auto___46060 + (1));
i__7297__auto___46060 = G__46061;
continue;
} else {
}
break;
}

var G__45994 = args45992.length;
switch (G__45994) {
case 1:
return sablono.core.number_field45991.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field45991.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45992.length)].join('')));

}
});

sablono.core.number_field45991.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.number_field45991.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.number_field45991.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.number_field45991.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field45991);

/**
 * Creates a password input field.
 */
sablono.core.password_field45995 = (function sablono$core$password_field45995(var_args){
var args45996 = [];
var len__7296__auto___46063 = arguments.length;
var i__7297__auto___46064 = (0);
while(true){
if((i__7297__auto___46064 < len__7296__auto___46063)){
args45996.push((arguments[i__7297__auto___46064]));

var G__46065 = (i__7297__auto___46064 + (1));
i__7297__auto___46064 = G__46065;
continue;
} else {
}
break;
}

var G__45998 = args45996.length;
switch (G__45998) {
case 1:
return sablono.core.password_field45995.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field45995.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45996.length)].join('')));

}
});

sablono.core.password_field45995.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.password_field45995.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.password_field45995.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.password_field45995.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field45995);

/**
 * Creates a range input field.
 */
sablono.core.range_field45999 = (function sablono$core$range_field45999(var_args){
var args46000 = [];
var len__7296__auto___46067 = arguments.length;
var i__7297__auto___46068 = (0);
while(true){
if((i__7297__auto___46068 < len__7296__auto___46067)){
args46000.push((arguments[i__7297__auto___46068]));

var G__46069 = (i__7297__auto___46068 + (1));
i__7297__auto___46068 = G__46069;
continue;
} else {
}
break;
}

var G__46002 = args46000.length;
switch (G__46002) {
case 1:
return sablono.core.range_field45999.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field45999.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46000.length)].join('')));

}
});

sablono.core.range_field45999.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.range_field45999.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.range_field45999.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.range_field45999.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field45999);

/**
 * Creates a search input field.
 */
sablono.core.search_field46003 = (function sablono$core$search_field46003(var_args){
var args46004 = [];
var len__7296__auto___46071 = arguments.length;
var i__7297__auto___46072 = (0);
while(true){
if((i__7297__auto___46072 < len__7296__auto___46071)){
args46004.push((arguments[i__7297__auto___46072]));

var G__46073 = (i__7297__auto___46072 + (1));
i__7297__auto___46072 = G__46073;
continue;
} else {
}
break;
}

var G__46006 = args46004.length;
switch (G__46006) {
case 1:
return sablono.core.search_field46003.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field46003.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46004.length)].join('')));

}
});

sablono.core.search_field46003.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.search_field46003.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.search_field46003.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.search_field46003.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field46003);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field46007 = (function sablono$core$tel_field46007(var_args){
var args46008 = [];
var len__7296__auto___46075 = arguments.length;
var i__7297__auto___46076 = (0);
while(true){
if((i__7297__auto___46076 < len__7296__auto___46075)){
args46008.push((arguments[i__7297__auto___46076]));

var G__46077 = (i__7297__auto___46076 + (1));
i__7297__auto___46076 = G__46077;
continue;
} else {
}
break;
}

var G__46010 = args46008.length;
switch (G__46010) {
case 1:
return sablono.core.tel_field46007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field46007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46008.length)].join('')));

}
});

sablono.core.tel_field46007.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.tel_field46007.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.tel_field46007.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.tel_field46007.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field46007);

/**
 * Creates a text input field.
 */
sablono.core.text_field46011 = (function sablono$core$text_field46011(var_args){
var args46012 = [];
var len__7296__auto___46079 = arguments.length;
var i__7297__auto___46080 = (0);
while(true){
if((i__7297__auto___46080 < len__7296__auto___46079)){
args46012.push((arguments[i__7297__auto___46080]));

var G__46081 = (i__7297__auto___46080 + (1));
i__7297__auto___46080 = G__46081;
continue;
} else {
}
break;
}

var G__46014 = args46012.length;
switch (G__46014) {
case 1:
return sablono.core.text_field46011.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field46011.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46012.length)].join('')));

}
});

sablono.core.text_field46011.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.text_field46011.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.text_field46011.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.text_field46011.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field46011);

/**
 * Creates a time input field.
 */
sablono.core.time_field46015 = (function sablono$core$time_field46015(var_args){
var args46016 = [];
var len__7296__auto___46083 = arguments.length;
var i__7297__auto___46084 = (0);
while(true){
if((i__7297__auto___46084 < len__7296__auto___46083)){
args46016.push((arguments[i__7297__auto___46084]));

var G__46085 = (i__7297__auto___46084 + (1));
i__7297__auto___46084 = G__46085;
continue;
} else {
}
break;
}

var G__46018 = args46016.length;
switch (G__46018) {
case 1:
return sablono.core.time_field46015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field46015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46016.length)].join('')));

}
});

sablono.core.time_field46015.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.time_field46015.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.time_field46015.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.time_field46015.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field46015);

/**
 * Creates a url input field.
 */
sablono.core.url_field46019 = (function sablono$core$url_field46019(var_args){
var args46020 = [];
var len__7296__auto___46087 = arguments.length;
var i__7297__auto___46088 = (0);
while(true){
if((i__7297__auto___46088 < len__7296__auto___46087)){
args46020.push((arguments[i__7297__auto___46088]));

var G__46089 = (i__7297__auto___46088 + (1));
i__7297__auto___46088 = G__46089;
continue;
} else {
}
break;
}

var G__46022 = args46020.length;
switch (G__46022) {
case 1:
return sablono.core.url_field46019.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field46019.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46020.length)].join('')));

}
});

sablono.core.url_field46019.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.url_field46019.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.url_field46019.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.url_field46019.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field46019);

/**
 * Creates a week input field.
 */
sablono.core.week_field46023 = (function sablono$core$week_field46023(var_args){
var args46024 = [];
var len__7296__auto___46091 = arguments.length;
var i__7297__auto___46092 = (0);
while(true){
if((i__7297__auto___46092 < len__7296__auto___46091)){
args46024.push((arguments[i__7297__auto___46092]));

var G__46093 = (i__7297__auto___46092 + (1));
i__7297__auto___46092 = G__46093;
continue;
} else {
}
break;
}

var G__46026 = args46024.length;
switch (G__46026) {
case 1:
return sablono.core.week_field46023.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field46023.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46024.length)].join('')));

}
});

sablono.core.week_field46023.cljs$core$IFn$_invoke$arity$1 = (function (name__14027__auto__){
return sablono.core.week_field46023.cljs$core$IFn$_invoke$arity$2(name__14027__auto__,null);
});

sablono.core.week_field46023.cljs$core$IFn$_invoke$arity$2 = (function (name__14027__auto__,value__14028__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__14027__auto__,value__14028__auto__);
});

sablono.core.week_field46023.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field46023);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box46095 = (function sablono$core$check_box46095(var_args){
var args46096 = [];
var len__7296__auto___46099 = arguments.length;
var i__7297__auto___46100 = (0);
while(true){
if((i__7297__auto___46100 < len__7296__auto___46099)){
args46096.push((arguments[i__7297__auto___46100]));

var G__46101 = (i__7297__auto___46100 + (1));
i__7297__auto___46100 = G__46101;
continue;
} else {
}
break;
}

var G__46098 = args46096.length;
switch (G__46098) {
case 1:
return sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46096.length)].join('')));

}
});

sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box46095.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box46095.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box46095);
/**
 * Creates a radio button.
 */
sablono.core.radio_button46103 = (function sablono$core$radio_button46103(var_args){
var args46104 = [];
var len__7296__auto___46107 = arguments.length;
var i__7297__auto___46108 = (0);
while(true){
if((i__7297__auto___46108 < len__7296__auto___46107)){
args46104.push((arguments[i__7297__auto___46108]));

var G__46109 = (i__7297__auto___46108 + (1));
i__7297__auto___46108 = G__46109;
continue;
} else {
}
break;
}

var G__46106 = args46104.length;
switch (G__46106) {
case 1:
return sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46104.length)].join('')));

}
});

sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button46103.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button46103.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button46103);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__46112 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__46112);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options46113 = (function sablono$core$select_options46113(coll){
var iter__7001__auto__ = (function sablono$core$select_options46113_$_iter__46132(s__46133){
return (new cljs.core.LazySeq(null,(function (){
var s__46133__$1 = s__46133;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__46133__$1);
if(temp__4657__auto__){
var s__46133__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46133__$2)){
var c__6999__auto__ = cljs.core.chunk_first(s__46133__$2);
var size__7000__auto__ = cljs.core.count(c__6999__auto__);
var b__46135 = cljs.core.chunk_buffer(size__7000__auto__);
if((function (){var i__46134 = (0);
while(true){
if((i__46134 < size__7000__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__6999__auto__,i__46134);
cljs.core.chunk_append(b__46135,((cljs.core.sequential_QMARK_(x))?(function (){var vec__46144 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46144,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46144,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46144,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options46113(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__46150 = (i__46134 + (1));
i__46134 = G__46150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46135),sablono$core$select_options46113_$_iter__46132(cljs.core.chunk_rest(s__46133__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46135),null);
}
} else {
var x = cljs.core.first(s__46133__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__46147 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46147,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46147,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46147,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options46113(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options46113_$_iter__46132(cljs.core.rest(s__46133__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options46113);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down46151 = (function sablono$core$drop_down46151(var_args){
var args46152 = [];
var len__7296__auto___46155 = arguments.length;
var i__7297__auto___46156 = (0);
while(true){
if((i__7297__auto___46156 < len__7296__auto___46155)){
args46152.push((arguments[i__7297__auto___46156]));

var G__46157 = (i__7297__auto___46156 + (1));
i__7297__auto___46156 = G__46157;
continue;
} else {
}
break;
}

var G__46154 = args46152.length;
switch (G__46154) {
case 2:
return sablono.core.drop_down46151.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down46151.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46152.length)].join('')));

}
});

sablono.core.drop_down46151.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down46151.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down46151.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down46151.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down46151);
/**
 * Creates a text area element.
 */
sablono.core.text_area46159 = (function sablono$core$text_area46159(var_args){
var args46160 = [];
var len__7296__auto___46163 = arguments.length;
var i__7297__auto___46164 = (0);
while(true){
if((i__7297__auto___46164 < len__7296__auto___46163)){
args46160.push((arguments[i__7297__auto___46164]));

var G__46165 = (i__7297__auto___46164 + (1));
i__7297__auto___46164 = G__46165;
continue;
} else {
}
break;
}

var G__46162 = args46160.length;
switch (G__46162) {
case 1:
return sablono.core.text_area46159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area46159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46160.length)].join('')));

}
});

sablono.core.text_area46159.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area46159.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area46159.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area46159.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area46159);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label46167 = (function sablono$core$label46167(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label46167);
/**
 * Creates a submit button.
 */
sablono.core.submit_button46168 = (function sablono$core$submit_button46168(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button46168);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button46169 = (function sablono$core$reset_button46169(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button46169);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to46170 = (function sablono$core$form_to46170(var_args){
var args__7303__auto__ = [];
var len__7296__auto___46180 = arguments.length;
var i__7297__auto___46181 = (0);
while(true){
if((i__7297__auto___46181 < len__7296__auto___46180)){
args__7303__auto__.push((arguments[i__7297__auto___46181]));

var G__46182 = (i__7297__auto___46181 + (1));
i__7297__auto___46181 = G__46182;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to46170.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.form_to46170.cljs$core$IFn$_invoke$arity$variadic = (function (p__46173,body){
var vec__46174 = p__46173;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46174,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46174,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__46177 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__46178 = "_method";
var G__46179 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__46177,G__46178,G__46179) : sablono.core.hidden_field.call(null,G__46177,G__46178,G__46179));
})()], null)),body));
});

sablono.core.form_to46170.cljs$lang$maxFixedArity = (1);

sablono.core.form_to46170.cljs$lang$applyTo = (function (seq46171){
var G__46172 = cljs.core.first(seq46171);
var seq46171__$1 = cljs.core.next(seq46171);
return sablono.core.form_to46170.cljs$core$IFn$_invoke$arity$variadic(G__46172,seq46171__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to46170);
