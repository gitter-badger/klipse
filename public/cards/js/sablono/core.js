// Compiled by ClojureScript 1.9.36 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__71254__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__71251 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__71252 = cljs.core.seq.call(null,vec__71251);
var first__71253 = cljs.core.first.call(null,seq__71252);
var seq__71252__$1 = cljs.core.next.call(null,seq__71252);
var tag = first__71253;
var body = seq__71252__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__71254 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__71255__i = 0, G__71255__a = new Array(arguments.length -  0);
while (G__71255__i < G__71255__a.length) {G__71255__a[G__71255__i] = arguments[G__71255__i + 0]; ++G__71255__i;}
  args = new cljs.core.IndexedSeq(G__71255__a,0);
} 
return G__71254__delegate.call(this,args);};
G__71254.cljs$lang$maxFixedArity = 0;
G__71254.cljs$lang$applyTo = (function (arglist__71256){
var args = cljs.core.seq(arglist__71256);
return G__71254__delegate(args);
});
G__71254.cljs$core$IFn$_invoke$arity$variadic = G__71254__delegate;
return G__71254;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7001__auto__ = (function sablono$core$update_arglists_$_iter__71261(s__71262){
return (new cljs.core.LazySeq(null,(function (){
var s__71262__$1 = s__71262;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71262__$1);
if(temp__4657__auto__){
var s__71262__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71262__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__71262__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__71264 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__71263 = (0);
while(true){
if((i__71263 < size__7000__auto__)){
var args = cljs.core._nth.call(null,c__6999__auto__,i__71263);
cljs.core.chunk_append.call(null,b__71264,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__71265 = (i__71263 + (1));
i__71263 = G__71265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71264),sablono$core$update_arglists_$_iter__71261.call(null,cljs.core.chunk_rest.call(null,s__71262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71264),null);
}
} else {
var args = cljs.core.first.call(null,s__71262__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__71261.call(null,cljs.core.rest.call(null,s__71262__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,arglists);
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
var len__7296__auto___71271 = arguments.length;
var i__7297__auto___71272 = (0);
while(true){
if((i__7297__auto___71272 < len__7296__auto___71271)){
args__7303__auto__.push((arguments[i__7297__auto___71272]));

var G__71273 = (i__7297__auto___71272 + (1));
i__7297__auto___71272 = G__71273;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7001__auto__ = (function sablono$core$iter__71267(s__71268){
return (new cljs.core.LazySeq(null,(function (){
var s__71268__$1 = s__71268;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71268__$1);
if(temp__4657__auto__){
var s__71268__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71268__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__71268__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__71270 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__71269 = (0);
while(true){
if((i__71269 < size__7000__auto__)){
var style = cljs.core._nth.call(null,c__6999__auto__,i__71269);
cljs.core.chunk_append.call(null,b__71270,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__71274 = (i__71269 + (1));
i__71269 = G__71274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71270),sablono$core$iter__71267.call(null,cljs.core.chunk_rest.call(null,s__71268__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71270),null);
}
} else {
var style = cljs.core.first.call(null,s__71268__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__71267.call(null,cljs.core.rest.call(null,s__71268__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq71266){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71266));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to71275 = (function sablono$core$link_to71275(var_args){
var args__7303__auto__ = [];
var len__7296__auto___71278 = arguments.length;
var i__7297__auto___71279 = (0);
while(true){
if((i__7297__auto___71279 < len__7296__auto___71278)){
args__7303__auto__.push((arguments[i__7297__auto___71279]));

var G__71280 = (i__7297__auto___71279 + (1));
i__7297__auto___71279 = G__71280;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to71275.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.link_to71275.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to71275.cljs$lang$maxFixedArity = (1);

sablono.core.link_to71275.cljs$lang$applyTo = (function (seq71276){
var G__71277 = cljs.core.first.call(null,seq71276);
var seq71276__$1 = cljs.core.next.call(null,seq71276);
return sablono.core.link_to71275.cljs$core$IFn$_invoke$arity$variadic(G__71277,seq71276__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to71275);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to71281 = (function sablono$core$mail_to71281(var_args){
var args__7303__auto__ = [];
var len__7296__auto___71288 = arguments.length;
var i__7297__auto___71289 = (0);
while(true){
if((i__7297__auto___71289 < len__7296__auto___71288)){
args__7303__auto__.push((arguments[i__7297__auto___71289]));

var G__71290 = (i__7297__auto___71289 + (1));
i__7297__auto___71289 = G__71290;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to71281.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.mail_to71281.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__71284){
var vec__71285 = p__71284;
var content = cljs.core.nth.call(null,vec__71285,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6221__auto__ = content;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to71281.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to71281.cljs$lang$applyTo = (function (seq71282){
var G__71283 = cljs.core.first.call(null,seq71282);
var seq71282__$1 = cljs.core.next.call(null,seq71282);
return sablono.core.mail_to71281.cljs$core$IFn$_invoke$arity$variadic(G__71283,seq71282__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to71281);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list71291 = (function sablono$core$unordered_list71291(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7001__auto__ = (function sablono$core$unordered_list71291_$_iter__71296(s__71297){
return (new cljs.core.LazySeq(null,(function (){
var s__71297__$1 = s__71297;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71297__$1);
if(temp__4657__auto__){
var s__71297__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71297__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__71297__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__71299 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__71298 = (0);
while(true){
if((i__71298 < size__7000__auto__)){
var x = cljs.core._nth.call(null,c__6999__auto__,i__71298);
cljs.core.chunk_append.call(null,b__71299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71300 = (i__71298 + (1));
i__71298 = G__71300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71299),sablono$core$unordered_list71291_$_iter__71296.call(null,cljs.core.chunk_rest.call(null,s__71297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71299),null);
}
} else {
var x = cljs.core.first.call(null,s__71297__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list71291_$_iter__71296.call(null,cljs.core.rest.call(null,s__71297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list71291);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list71301 = (function sablono$core$ordered_list71301(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7001__auto__ = (function sablono$core$ordered_list71301_$_iter__71306(s__71307){
return (new cljs.core.LazySeq(null,(function (){
var s__71307__$1 = s__71307;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71307__$1);
if(temp__4657__auto__){
var s__71307__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71307__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__71307__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__71309 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__71308 = (0);
while(true){
if((i__71308 < size__7000__auto__)){
var x = cljs.core._nth.call(null,c__6999__auto__,i__71308);
cljs.core.chunk_append.call(null,b__71309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__71310 = (i__71308 + (1));
i__71308 = G__71310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71309),sablono$core$ordered_list71301_$_iter__71306.call(null,cljs.core.chunk_rest.call(null,s__71307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71309),null);
}
} else {
var x = cljs.core.first.call(null,s__71307__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list71301_$_iter__71306.call(null,cljs.core.rest.call(null,s__71307__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list71301);
/**
 * Create an image element.
 */
sablono.core.image71311 = (function sablono$core$image71311(var_args){
var args71312 = [];
var len__7296__auto___71315 = arguments.length;
var i__7297__auto___71316 = (0);
while(true){
if((i__7297__auto___71316 < len__7296__auto___71315)){
args71312.push((arguments[i__7297__auto___71316]));

var G__71317 = (i__7297__auto___71316 + (1));
i__7297__auto___71316 = G__71317;
continue;
} else {
}
break;
}

var G__71314 = args71312.length;
switch (G__71314) {
case 1:
return sablono.core.image71311.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image71311.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71312.length)].join('')));

}
});

sablono.core.image71311.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image71311.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image71311.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image71311);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__71319_SHARP_,p2__71320_SHARP_){
return [cljs.core.str(p1__71319_SHARP_),cljs.core.str("["),cljs.core.str(p2__71320_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__71321_SHARP_,p2__71322_SHARP_){
return [cljs.core.str(p1__71321_SHARP_),cljs.core.str("-"),cljs.core.str(p2__71322_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field71323 = (function sablono$core$color_field71323(var_args){
var args71324 = [];
var len__7296__auto___71391 = arguments.length;
var i__7297__auto___71392 = (0);
while(true){
if((i__7297__auto___71392 < len__7296__auto___71391)){
args71324.push((arguments[i__7297__auto___71392]));

var G__71393 = (i__7297__auto___71392 + (1));
i__7297__auto___71392 = G__71393;
continue;
} else {
}
break;
}

var G__71326 = args71324.length;
switch (G__71326) {
case 1:
return sablono.core.color_field71323.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field71323.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71324.length)].join('')));

}
});

sablono.core.color_field71323.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.color_field71323.call(null,name__18785__auto__,null);
});

sablono.core.color_field71323.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.color_field71323.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field71323);

/**
 * Creates a date input field.
 */
sablono.core.date_field71327 = (function sablono$core$date_field71327(var_args){
var args71328 = [];
var len__7296__auto___71395 = arguments.length;
var i__7297__auto___71396 = (0);
while(true){
if((i__7297__auto___71396 < len__7296__auto___71395)){
args71328.push((arguments[i__7297__auto___71396]));

var G__71397 = (i__7297__auto___71396 + (1));
i__7297__auto___71396 = G__71397;
continue;
} else {
}
break;
}

var G__71330 = args71328.length;
switch (G__71330) {
case 1:
return sablono.core.date_field71327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field71327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71328.length)].join('')));

}
});

sablono.core.date_field71327.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.date_field71327.call(null,name__18785__auto__,null);
});

sablono.core.date_field71327.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.date_field71327.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field71327);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field71331 = (function sablono$core$datetime_field71331(var_args){
var args71332 = [];
var len__7296__auto___71399 = arguments.length;
var i__7297__auto___71400 = (0);
while(true){
if((i__7297__auto___71400 < len__7296__auto___71399)){
args71332.push((arguments[i__7297__auto___71400]));

var G__71401 = (i__7297__auto___71400 + (1));
i__7297__auto___71400 = G__71401;
continue;
} else {
}
break;
}

var G__71334 = args71332.length;
switch (G__71334) {
case 1:
return sablono.core.datetime_field71331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field71331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71332.length)].join('')));

}
});

sablono.core.datetime_field71331.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.datetime_field71331.call(null,name__18785__auto__,null);
});

sablono.core.datetime_field71331.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.datetime_field71331.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field71331);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field71335 = (function sablono$core$datetime_local_field71335(var_args){
var args71336 = [];
var len__7296__auto___71403 = arguments.length;
var i__7297__auto___71404 = (0);
while(true){
if((i__7297__auto___71404 < len__7296__auto___71403)){
args71336.push((arguments[i__7297__auto___71404]));

var G__71405 = (i__7297__auto___71404 + (1));
i__7297__auto___71404 = G__71405;
continue;
} else {
}
break;
}

var G__71338 = args71336.length;
switch (G__71338) {
case 1:
return sablono.core.datetime_local_field71335.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field71335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71336.length)].join('')));

}
});

sablono.core.datetime_local_field71335.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.datetime_local_field71335.call(null,name__18785__auto__,null);
});

sablono.core.datetime_local_field71335.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.datetime_local_field71335.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field71335);

/**
 * Creates a email input field.
 */
sablono.core.email_field71339 = (function sablono$core$email_field71339(var_args){
var args71340 = [];
var len__7296__auto___71407 = arguments.length;
var i__7297__auto___71408 = (0);
while(true){
if((i__7297__auto___71408 < len__7296__auto___71407)){
args71340.push((arguments[i__7297__auto___71408]));

var G__71409 = (i__7297__auto___71408 + (1));
i__7297__auto___71408 = G__71409;
continue;
} else {
}
break;
}

var G__71342 = args71340.length;
switch (G__71342) {
case 1:
return sablono.core.email_field71339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field71339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71340.length)].join('')));

}
});

sablono.core.email_field71339.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.email_field71339.call(null,name__18785__auto__,null);
});

sablono.core.email_field71339.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.email_field71339.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field71339);

/**
 * Creates a file input field.
 */
sablono.core.file_field71343 = (function sablono$core$file_field71343(var_args){
var args71344 = [];
var len__7296__auto___71411 = arguments.length;
var i__7297__auto___71412 = (0);
while(true){
if((i__7297__auto___71412 < len__7296__auto___71411)){
args71344.push((arguments[i__7297__auto___71412]));

var G__71413 = (i__7297__auto___71412 + (1));
i__7297__auto___71412 = G__71413;
continue;
} else {
}
break;
}

var G__71346 = args71344.length;
switch (G__71346) {
case 1:
return sablono.core.file_field71343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field71343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71344.length)].join('')));

}
});

sablono.core.file_field71343.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.file_field71343.call(null,name__18785__auto__,null);
});

sablono.core.file_field71343.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.file_field71343.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field71343);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field71347 = (function sablono$core$hidden_field71347(var_args){
var args71348 = [];
var len__7296__auto___71415 = arguments.length;
var i__7297__auto___71416 = (0);
while(true){
if((i__7297__auto___71416 < len__7296__auto___71415)){
args71348.push((arguments[i__7297__auto___71416]));

var G__71417 = (i__7297__auto___71416 + (1));
i__7297__auto___71416 = G__71417;
continue;
} else {
}
break;
}

var G__71350 = args71348.length;
switch (G__71350) {
case 1:
return sablono.core.hidden_field71347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field71347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71348.length)].join('')));

}
});

sablono.core.hidden_field71347.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.hidden_field71347.call(null,name__18785__auto__,null);
});

sablono.core.hidden_field71347.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.hidden_field71347.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field71347);

/**
 * Creates a month input field.
 */
sablono.core.month_field71351 = (function sablono$core$month_field71351(var_args){
var args71352 = [];
var len__7296__auto___71419 = arguments.length;
var i__7297__auto___71420 = (0);
while(true){
if((i__7297__auto___71420 < len__7296__auto___71419)){
args71352.push((arguments[i__7297__auto___71420]));

var G__71421 = (i__7297__auto___71420 + (1));
i__7297__auto___71420 = G__71421;
continue;
} else {
}
break;
}

var G__71354 = args71352.length;
switch (G__71354) {
case 1:
return sablono.core.month_field71351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field71351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71352.length)].join('')));

}
});

sablono.core.month_field71351.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.month_field71351.call(null,name__18785__auto__,null);
});

sablono.core.month_field71351.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.month_field71351.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field71351);

/**
 * Creates a number input field.
 */
sablono.core.number_field71355 = (function sablono$core$number_field71355(var_args){
var args71356 = [];
var len__7296__auto___71423 = arguments.length;
var i__7297__auto___71424 = (0);
while(true){
if((i__7297__auto___71424 < len__7296__auto___71423)){
args71356.push((arguments[i__7297__auto___71424]));

var G__71425 = (i__7297__auto___71424 + (1));
i__7297__auto___71424 = G__71425;
continue;
} else {
}
break;
}

var G__71358 = args71356.length;
switch (G__71358) {
case 1:
return sablono.core.number_field71355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field71355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71356.length)].join('')));

}
});

sablono.core.number_field71355.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.number_field71355.call(null,name__18785__auto__,null);
});

sablono.core.number_field71355.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.number_field71355.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field71355);

/**
 * Creates a password input field.
 */
sablono.core.password_field71359 = (function sablono$core$password_field71359(var_args){
var args71360 = [];
var len__7296__auto___71427 = arguments.length;
var i__7297__auto___71428 = (0);
while(true){
if((i__7297__auto___71428 < len__7296__auto___71427)){
args71360.push((arguments[i__7297__auto___71428]));

var G__71429 = (i__7297__auto___71428 + (1));
i__7297__auto___71428 = G__71429;
continue;
} else {
}
break;
}

var G__71362 = args71360.length;
switch (G__71362) {
case 1:
return sablono.core.password_field71359.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field71359.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71360.length)].join('')));

}
});

sablono.core.password_field71359.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.password_field71359.call(null,name__18785__auto__,null);
});

sablono.core.password_field71359.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.password_field71359.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field71359);

/**
 * Creates a range input field.
 */
sablono.core.range_field71363 = (function sablono$core$range_field71363(var_args){
var args71364 = [];
var len__7296__auto___71431 = arguments.length;
var i__7297__auto___71432 = (0);
while(true){
if((i__7297__auto___71432 < len__7296__auto___71431)){
args71364.push((arguments[i__7297__auto___71432]));

var G__71433 = (i__7297__auto___71432 + (1));
i__7297__auto___71432 = G__71433;
continue;
} else {
}
break;
}

var G__71366 = args71364.length;
switch (G__71366) {
case 1:
return sablono.core.range_field71363.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field71363.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71364.length)].join('')));

}
});

sablono.core.range_field71363.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.range_field71363.call(null,name__18785__auto__,null);
});

sablono.core.range_field71363.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.range_field71363.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field71363);

/**
 * Creates a search input field.
 */
sablono.core.search_field71367 = (function sablono$core$search_field71367(var_args){
var args71368 = [];
var len__7296__auto___71435 = arguments.length;
var i__7297__auto___71436 = (0);
while(true){
if((i__7297__auto___71436 < len__7296__auto___71435)){
args71368.push((arguments[i__7297__auto___71436]));

var G__71437 = (i__7297__auto___71436 + (1));
i__7297__auto___71436 = G__71437;
continue;
} else {
}
break;
}

var G__71370 = args71368.length;
switch (G__71370) {
case 1:
return sablono.core.search_field71367.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field71367.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71368.length)].join('')));

}
});

sablono.core.search_field71367.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.search_field71367.call(null,name__18785__auto__,null);
});

sablono.core.search_field71367.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.search_field71367.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field71367);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field71371 = (function sablono$core$tel_field71371(var_args){
var args71372 = [];
var len__7296__auto___71439 = arguments.length;
var i__7297__auto___71440 = (0);
while(true){
if((i__7297__auto___71440 < len__7296__auto___71439)){
args71372.push((arguments[i__7297__auto___71440]));

var G__71441 = (i__7297__auto___71440 + (1));
i__7297__auto___71440 = G__71441;
continue;
} else {
}
break;
}

var G__71374 = args71372.length;
switch (G__71374) {
case 1:
return sablono.core.tel_field71371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field71371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71372.length)].join('')));

}
});

sablono.core.tel_field71371.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.tel_field71371.call(null,name__18785__auto__,null);
});

sablono.core.tel_field71371.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.tel_field71371.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field71371);

/**
 * Creates a text input field.
 */
sablono.core.text_field71375 = (function sablono$core$text_field71375(var_args){
var args71376 = [];
var len__7296__auto___71443 = arguments.length;
var i__7297__auto___71444 = (0);
while(true){
if((i__7297__auto___71444 < len__7296__auto___71443)){
args71376.push((arguments[i__7297__auto___71444]));

var G__71445 = (i__7297__auto___71444 + (1));
i__7297__auto___71444 = G__71445;
continue;
} else {
}
break;
}

var G__71378 = args71376.length;
switch (G__71378) {
case 1:
return sablono.core.text_field71375.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field71375.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71376.length)].join('')));

}
});

sablono.core.text_field71375.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.text_field71375.call(null,name__18785__auto__,null);
});

sablono.core.text_field71375.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.text_field71375.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field71375);

/**
 * Creates a time input field.
 */
sablono.core.time_field71379 = (function sablono$core$time_field71379(var_args){
var args71380 = [];
var len__7296__auto___71447 = arguments.length;
var i__7297__auto___71448 = (0);
while(true){
if((i__7297__auto___71448 < len__7296__auto___71447)){
args71380.push((arguments[i__7297__auto___71448]));

var G__71449 = (i__7297__auto___71448 + (1));
i__7297__auto___71448 = G__71449;
continue;
} else {
}
break;
}

var G__71382 = args71380.length;
switch (G__71382) {
case 1:
return sablono.core.time_field71379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field71379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71380.length)].join('')));

}
});

sablono.core.time_field71379.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.time_field71379.call(null,name__18785__auto__,null);
});

sablono.core.time_field71379.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.time_field71379.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field71379);

/**
 * Creates a url input field.
 */
sablono.core.url_field71383 = (function sablono$core$url_field71383(var_args){
var args71384 = [];
var len__7296__auto___71451 = arguments.length;
var i__7297__auto___71452 = (0);
while(true){
if((i__7297__auto___71452 < len__7296__auto___71451)){
args71384.push((arguments[i__7297__auto___71452]));

var G__71453 = (i__7297__auto___71452 + (1));
i__7297__auto___71452 = G__71453;
continue;
} else {
}
break;
}

var G__71386 = args71384.length;
switch (G__71386) {
case 1:
return sablono.core.url_field71383.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field71383.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71384.length)].join('')));

}
});

sablono.core.url_field71383.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.url_field71383.call(null,name__18785__auto__,null);
});

sablono.core.url_field71383.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.url_field71383.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field71383);

/**
 * Creates a week input field.
 */
sablono.core.week_field71387 = (function sablono$core$week_field71387(var_args){
var args71388 = [];
var len__7296__auto___71455 = arguments.length;
var i__7297__auto___71456 = (0);
while(true){
if((i__7297__auto___71456 < len__7296__auto___71455)){
args71388.push((arguments[i__7297__auto___71456]));

var G__71457 = (i__7297__auto___71456 + (1));
i__7297__auto___71456 = G__71457;
continue;
} else {
}
break;
}

var G__71390 = args71388.length;
switch (G__71390) {
case 1:
return sablono.core.week_field71387.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field71387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71388.length)].join('')));

}
});

sablono.core.week_field71387.cljs$core$IFn$_invoke$arity$1 = (function (name__18785__auto__){
return sablono.core.week_field71387.call(null,name__18785__auto__,null);
});

sablono.core.week_field71387.cljs$core$IFn$_invoke$arity$2 = (function (name__18785__auto__,value__18786__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__18785__auto__,value__18786__auto__);
});

sablono.core.week_field71387.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field71387);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box71459 = (function sablono$core$check_box71459(var_args){
var args71460 = [];
var len__7296__auto___71463 = arguments.length;
var i__7297__auto___71464 = (0);
while(true){
if((i__7297__auto___71464 < len__7296__auto___71463)){
args71460.push((arguments[i__7297__auto___71464]));

var G__71465 = (i__7297__auto___71464 + (1));
i__7297__auto___71464 = G__71465;
continue;
} else {
}
break;
}

var G__71462 = args71460.length;
switch (G__71462) {
case 1:
return sablono.core.check_box71459.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box71459.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box71459.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71460.length)].join('')));

}
});

sablono.core.check_box71459.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box71459.call(null,name,null);
});

sablono.core.check_box71459.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box71459.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box71459.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box71459.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box71459);
/**
 * Creates a radio button.
 */
sablono.core.radio_button71467 = (function sablono$core$radio_button71467(var_args){
var args71468 = [];
var len__7296__auto___71471 = arguments.length;
var i__7297__auto___71472 = (0);
while(true){
if((i__7297__auto___71472 < len__7296__auto___71471)){
args71468.push((arguments[i__7297__auto___71472]));

var G__71473 = (i__7297__auto___71472 + (1));
i__7297__auto___71472 = G__71473;
continue;
} else {
}
break;
}

var G__71470 = args71468.length;
switch (G__71470) {
case 1:
return sablono.core.radio_button71467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button71467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button71467.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71468.length)].join('')));

}
});

sablono.core.radio_button71467.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button71467.call(null,group,null);
});

sablono.core.radio_button71467.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button71467.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button71467.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button71467.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button71467);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options71475 = (function sablono$core$select_options71475(coll){
var iter__7001__auto__ = (function sablono$core$select_options71475_$_iter__71492(s__71493){
return (new cljs.core.LazySeq(null,(function (){
var s__71493__$1 = s__71493;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__71493__$1);
if(temp__4657__auto__){
var s__71493__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__71493__$2)){
var c__6999__auto__ = cljs.core.chunk_first.call(null,s__71493__$2);
var size__7000__auto__ = cljs.core.count.call(null,c__6999__auto__);
var b__71495 = cljs.core.chunk_buffer.call(null,size__7000__auto__);
if((function (){var i__71494 = (0);
while(true){
if((i__71494 < size__7000__auto__)){
var x = cljs.core._nth.call(null,c__6999__auto__,i__71494);
cljs.core.chunk_append.call(null,b__71495,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__71502 = x;
var text = cljs.core.nth.call(null,vec__71502,(0),null);
var val = cljs.core.nth.call(null,vec__71502,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__71502,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options71475.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__71508 = (i__71494 + (1));
i__71494 = G__71508;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71495),sablono$core$select_options71475_$_iter__71492.call(null,cljs.core.chunk_rest.call(null,s__71493__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__71495),null);
}
} else {
var x = cljs.core.first.call(null,s__71493__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__71505 = x;
var text = cljs.core.nth.call(null,vec__71505,(0),null);
var val = cljs.core.nth.call(null,vec__71505,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__71505,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options71475.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options71475_$_iter__71492.call(null,cljs.core.rest.call(null,s__71493__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7001__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options71475);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down71509 = (function sablono$core$drop_down71509(var_args){
var args71510 = [];
var len__7296__auto___71513 = arguments.length;
var i__7297__auto___71514 = (0);
while(true){
if((i__7297__auto___71514 < len__7296__auto___71513)){
args71510.push((arguments[i__7297__auto___71514]));

var G__71515 = (i__7297__auto___71514 + (1));
i__7297__auto___71514 = G__71515;
continue;
} else {
}
break;
}

var G__71512 = args71510.length;
switch (G__71512) {
case 2:
return sablono.core.drop_down71509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down71509.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71510.length)].join('')));

}
});

sablono.core.drop_down71509.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down71509.call(null,name,options,null);
});

sablono.core.drop_down71509.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down71509.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down71509);
/**
 * Creates a text area element.
 */
sablono.core.text_area71517 = (function sablono$core$text_area71517(var_args){
var args71518 = [];
var len__7296__auto___71521 = arguments.length;
var i__7297__auto___71522 = (0);
while(true){
if((i__7297__auto___71522 < len__7296__auto___71521)){
args71518.push((arguments[i__7297__auto___71522]));

var G__71523 = (i__7297__auto___71522 + (1));
i__7297__auto___71522 = G__71523;
continue;
} else {
}
break;
}

var G__71520 = args71518.length;
switch (G__71520) {
case 1:
return sablono.core.text_area71517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area71517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args71518.length)].join('')));

}
});

sablono.core.text_area71517.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area71517.call(null,name,null);
});

sablono.core.text_area71517.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area71517.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area71517);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label71525 = (function sablono$core$label71525(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label71525);
/**
 * Creates a submit button.
 */
sablono.core.submit_button71526 = (function sablono$core$submit_button71526(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button71526);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button71527 = (function sablono$core$reset_button71527(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button71527);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to71528 = (function sablono$core$form_to71528(var_args){
var args__7303__auto__ = [];
var len__7296__auto___71535 = arguments.length;
var i__7297__auto___71536 = (0);
while(true){
if((i__7297__auto___71536 < len__7296__auto___71535)){
args__7303__auto__.push((arguments[i__7297__auto___71536]));

var G__71537 = (i__7297__auto___71536 + (1));
i__7297__auto___71536 = G__71537;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((1) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to71528.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7304__auto__);
});

sablono.core.form_to71528.cljs$core$IFn$_invoke$arity$variadic = (function (p__71531,body){
var vec__71532 = p__71531;
var method = cljs.core.nth.call(null,vec__71532,(0),null);
var action = cljs.core.nth.call(null,vec__71532,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to71528.cljs$lang$maxFixedArity = (1);

sablono.core.form_to71528.cljs$lang$applyTo = (function (seq71529){
var G__71530 = cljs.core.first.call(null,seq71529);
var seq71529__$1 = cljs.core.next.call(null,seq71529);
return sablono.core.form_to71528.cljs$core$IFn$_invoke$arity$variadic(G__71530,seq71529__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to71528);

//# sourceMappingURL=core.js.map