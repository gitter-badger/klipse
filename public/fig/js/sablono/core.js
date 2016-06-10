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
var G__36762__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__36759 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__36760 = cljs.core.seq.call(null,vec__36759);
var first__36761 = cljs.core.first.call(null,seq__36760);
var seq__36760__$1 = cljs.core.next.call(null,seq__36760);
var tag = first__36761;
var body = seq__36760__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__36762 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36763__i = 0, G__36763__a = new Array(arguments.length -  0);
while (G__36763__i < G__36763__a.length) {G__36763__a[G__36763__i] = arguments[G__36763__i + 0]; ++G__36763__i;}
  args = new cljs.core.IndexedSeq(G__36763__a,0);
} 
return G__36762__delegate.call(this,args);};
G__36762.cljs$lang$maxFixedArity = 0;
G__36762.cljs$lang$applyTo = (function (arglist__36764){
var args = cljs.core.seq(arglist__36764);
return G__36762__delegate(args);
});
G__36762.cljs$core$IFn$_invoke$arity$variadic = G__36762__delegate;
return G__36762;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__23395__auto__ = (function sablono$core$update_arglists_$_iter__36769(s__36770){
return (new cljs.core.LazySeq(null,(function (){
var s__36770__$1 = s__36770;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36770__$1);
if(temp__4657__auto__){
var s__36770__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36770__$2)){
var c__23393__auto__ = cljs.core.chunk_first.call(null,s__36770__$2);
var size__23394__auto__ = cljs.core.count.call(null,c__23393__auto__);
var b__36772 = cljs.core.chunk_buffer.call(null,size__23394__auto__);
if((function (){var i__36771 = (0);
while(true){
if((i__36771 < size__23394__auto__)){
var args = cljs.core._nth.call(null,c__23393__auto__,i__36771);
cljs.core.chunk_append.call(null,b__36772,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__36773 = (i__36771 + (1));
i__36771 = G__36773;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36772),sablono$core$update_arglists_$_iter__36769.call(null,cljs.core.chunk_rest.call(null,s__36770__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36772),null);
}
} else {
var args = cljs.core.first.call(null,s__36770__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__36769.call(null,cljs.core.rest.call(null,s__36770__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23395__auto__.call(null,arglists);
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
var args__23697__auto__ = [];
var len__23690__auto___36779 = arguments.length;
var i__23691__auto___36780 = (0);
while(true){
if((i__23691__auto___36780 < len__23690__auto___36779)){
args__23697__auto__.push((arguments[i__23691__auto___36780]));

var G__36781 = (i__23691__auto___36780 + (1));
i__23691__auto___36780 = G__36781;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((0) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__23698__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__23395__auto__ = (function sablono$core$iter__36775(s__36776){
return (new cljs.core.LazySeq(null,(function (){
var s__36776__$1 = s__36776;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36776__$1);
if(temp__4657__auto__){
var s__36776__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36776__$2)){
var c__23393__auto__ = cljs.core.chunk_first.call(null,s__36776__$2);
var size__23394__auto__ = cljs.core.count.call(null,c__23393__auto__);
var b__36778 = cljs.core.chunk_buffer.call(null,size__23394__auto__);
if((function (){var i__36777 = (0);
while(true){
if((i__36777 < size__23394__auto__)){
var style = cljs.core._nth.call(null,c__23393__auto__,i__36777);
cljs.core.chunk_append.call(null,b__36778,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__36782 = (i__36777 + (1));
i__36777 = G__36782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36778),sablono$core$iter__36775.call(null,cljs.core.chunk_rest.call(null,s__36776__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36778),null);
}
} else {
var style = cljs.core.first.call(null,s__36776__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__36775.call(null,cljs.core.rest.call(null,s__36776__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23395__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq36774){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36774));
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
sablono.core.link_to36783 = (function sablono$core$link_to36783(var_args){
var args__23697__auto__ = [];
var len__23690__auto___36786 = arguments.length;
var i__23691__auto___36787 = (0);
while(true){
if((i__23691__auto___36787 < len__23690__auto___36786)){
args__23697__auto__.push((arguments[i__23691__auto___36787]));

var G__36788 = (i__23691__auto___36787 + (1));
i__23691__auto___36787 = G__36788;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to36783.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

sablono.core.link_to36783.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to36783.cljs$lang$maxFixedArity = (1);

sablono.core.link_to36783.cljs$lang$applyTo = (function (seq36784){
var G__36785 = cljs.core.first.call(null,seq36784);
var seq36784__$1 = cljs.core.next.call(null,seq36784);
return sablono.core.link_to36783.cljs$core$IFn$_invoke$arity$variadic(G__36785,seq36784__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to36783);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to36789 = (function sablono$core$mail_to36789(var_args){
var args__23697__auto__ = [];
var len__23690__auto___36796 = arguments.length;
var i__23691__auto___36797 = (0);
while(true){
if((i__23691__auto___36797 < len__23690__auto___36796)){
args__23697__auto__.push((arguments[i__23691__auto___36797]));

var G__36798 = (i__23691__auto___36797 + (1));
i__23691__auto___36797 = G__36798;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to36789.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

sablono.core.mail_to36789.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__36792){
var vec__36793 = p__36792;
var content = cljs.core.nth.call(null,vec__36793,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__22615__auto__ = content;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to36789.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to36789.cljs$lang$applyTo = (function (seq36790){
var G__36791 = cljs.core.first.call(null,seq36790);
var seq36790__$1 = cljs.core.next.call(null,seq36790);
return sablono.core.mail_to36789.cljs$core$IFn$_invoke$arity$variadic(G__36791,seq36790__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to36789);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list36799 = (function sablono$core$unordered_list36799(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__23395__auto__ = (function sablono$core$unordered_list36799_$_iter__36804(s__36805){
return (new cljs.core.LazySeq(null,(function (){
var s__36805__$1 = s__36805;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36805__$1);
if(temp__4657__auto__){
var s__36805__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36805__$2)){
var c__23393__auto__ = cljs.core.chunk_first.call(null,s__36805__$2);
var size__23394__auto__ = cljs.core.count.call(null,c__23393__auto__);
var b__36807 = cljs.core.chunk_buffer.call(null,size__23394__auto__);
if((function (){var i__36806 = (0);
while(true){
if((i__36806 < size__23394__auto__)){
var x = cljs.core._nth.call(null,c__23393__auto__,i__36806);
cljs.core.chunk_append.call(null,b__36807,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36808 = (i__36806 + (1));
i__36806 = G__36808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36807),sablono$core$unordered_list36799_$_iter__36804.call(null,cljs.core.chunk_rest.call(null,s__36805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36807),null);
}
} else {
var x = cljs.core.first.call(null,s__36805__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list36799_$_iter__36804.call(null,cljs.core.rest.call(null,s__36805__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23395__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list36799);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list36809 = (function sablono$core$ordered_list36809(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__23395__auto__ = (function sablono$core$ordered_list36809_$_iter__36814(s__36815){
return (new cljs.core.LazySeq(null,(function (){
var s__36815__$1 = s__36815;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36815__$1);
if(temp__4657__auto__){
var s__36815__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36815__$2)){
var c__23393__auto__ = cljs.core.chunk_first.call(null,s__36815__$2);
var size__23394__auto__ = cljs.core.count.call(null,c__23393__auto__);
var b__36817 = cljs.core.chunk_buffer.call(null,size__23394__auto__);
if((function (){var i__36816 = (0);
while(true){
if((i__36816 < size__23394__auto__)){
var x = cljs.core._nth.call(null,c__23393__auto__,i__36816);
cljs.core.chunk_append.call(null,b__36817,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__36818 = (i__36816 + (1));
i__36816 = G__36818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36817),sablono$core$ordered_list36809_$_iter__36814.call(null,cljs.core.chunk_rest.call(null,s__36815__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36817),null);
}
} else {
var x = cljs.core.first.call(null,s__36815__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list36809_$_iter__36814.call(null,cljs.core.rest.call(null,s__36815__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23395__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list36809);
/**
 * Create an image element.
 */
sablono.core.image36819 = (function sablono$core$image36819(var_args){
var args36820 = [];
var len__23690__auto___36823 = arguments.length;
var i__23691__auto___36824 = (0);
while(true){
if((i__23691__auto___36824 < len__23690__auto___36823)){
args36820.push((arguments[i__23691__auto___36824]));

var G__36825 = (i__23691__auto___36824 + (1));
i__23691__auto___36824 = G__36825;
continue;
} else {
}
break;
}

var G__36822 = args36820.length;
switch (G__36822) {
case 1:
return sablono.core.image36819.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image36819.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36820.length)].join('')));

}
});

sablono.core.image36819.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image36819.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image36819.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image36819);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__36827_SHARP_,p2__36828_SHARP_){
return [cljs.core.str(p1__36827_SHARP_),cljs.core.str("["),cljs.core.str(p2__36828_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__36829_SHARP_,p2__36830_SHARP_){
return [cljs.core.str(p1__36829_SHARP_),cljs.core.str("-"),cljs.core.str(p2__36830_SHARP_)].join('');
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
sablono.core.color_field36831 = (function sablono$core$color_field36831(var_args){
var args36832 = [];
var len__23690__auto___36899 = arguments.length;
var i__23691__auto___36900 = (0);
while(true){
if((i__23691__auto___36900 < len__23690__auto___36899)){
args36832.push((arguments[i__23691__auto___36900]));

var G__36901 = (i__23691__auto___36900 + (1));
i__23691__auto___36900 = G__36901;
continue;
} else {
}
break;
}

var G__36834 = args36832.length;
switch (G__36834) {
case 1:
return sablono.core.color_field36831.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field36831.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36832.length)].join('')));

}
});

sablono.core.color_field36831.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.color_field36831.call(null,name__36746__auto__,null);
});

sablono.core.color_field36831.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.color_field36831.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field36831);

/**
 * Creates a date input field.
 */
sablono.core.date_field36835 = (function sablono$core$date_field36835(var_args){
var args36836 = [];
var len__23690__auto___36903 = arguments.length;
var i__23691__auto___36904 = (0);
while(true){
if((i__23691__auto___36904 < len__23690__auto___36903)){
args36836.push((arguments[i__23691__auto___36904]));

var G__36905 = (i__23691__auto___36904 + (1));
i__23691__auto___36904 = G__36905;
continue;
} else {
}
break;
}

var G__36838 = args36836.length;
switch (G__36838) {
case 1:
return sablono.core.date_field36835.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field36835.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36836.length)].join('')));

}
});

sablono.core.date_field36835.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.date_field36835.call(null,name__36746__auto__,null);
});

sablono.core.date_field36835.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.date_field36835.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field36835);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field36839 = (function sablono$core$datetime_field36839(var_args){
var args36840 = [];
var len__23690__auto___36907 = arguments.length;
var i__23691__auto___36908 = (0);
while(true){
if((i__23691__auto___36908 < len__23690__auto___36907)){
args36840.push((arguments[i__23691__auto___36908]));

var G__36909 = (i__23691__auto___36908 + (1));
i__23691__auto___36908 = G__36909;
continue;
} else {
}
break;
}

var G__36842 = args36840.length;
switch (G__36842) {
case 1:
return sablono.core.datetime_field36839.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field36839.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36840.length)].join('')));

}
});

sablono.core.datetime_field36839.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.datetime_field36839.call(null,name__36746__auto__,null);
});

sablono.core.datetime_field36839.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.datetime_field36839.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field36839);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field36843 = (function sablono$core$datetime_local_field36843(var_args){
var args36844 = [];
var len__23690__auto___36911 = arguments.length;
var i__23691__auto___36912 = (0);
while(true){
if((i__23691__auto___36912 < len__23690__auto___36911)){
args36844.push((arguments[i__23691__auto___36912]));

var G__36913 = (i__23691__auto___36912 + (1));
i__23691__auto___36912 = G__36913;
continue;
} else {
}
break;
}

var G__36846 = args36844.length;
switch (G__36846) {
case 1:
return sablono.core.datetime_local_field36843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field36843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36844.length)].join('')));

}
});

sablono.core.datetime_local_field36843.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.datetime_local_field36843.call(null,name__36746__auto__,null);
});

sablono.core.datetime_local_field36843.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.datetime_local_field36843.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field36843);

/**
 * Creates a email input field.
 */
sablono.core.email_field36847 = (function sablono$core$email_field36847(var_args){
var args36848 = [];
var len__23690__auto___36915 = arguments.length;
var i__23691__auto___36916 = (0);
while(true){
if((i__23691__auto___36916 < len__23690__auto___36915)){
args36848.push((arguments[i__23691__auto___36916]));

var G__36917 = (i__23691__auto___36916 + (1));
i__23691__auto___36916 = G__36917;
continue;
} else {
}
break;
}

var G__36850 = args36848.length;
switch (G__36850) {
case 1:
return sablono.core.email_field36847.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field36847.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36848.length)].join('')));

}
});

sablono.core.email_field36847.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.email_field36847.call(null,name__36746__auto__,null);
});

sablono.core.email_field36847.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.email_field36847.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field36847);

/**
 * Creates a file input field.
 */
sablono.core.file_field36851 = (function sablono$core$file_field36851(var_args){
var args36852 = [];
var len__23690__auto___36919 = arguments.length;
var i__23691__auto___36920 = (0);
while(true){
if((i__23691__auto___36920 < len__23690__auto___36919)){
args36852.push((arguments[i__23691__auto___36920]));

var G__36921 = (i__23691__auto___36920 + (1));
i__23691__auto___36920 = G__36921;
continue;
} else {
}
break;
}

var G__36854 = args36852.length;
switch (G__36854) {
case 1:
return sablono.core.file_field36851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field36851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36852.length)].join('')));

}
});

sablono.core.file_field36851.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.file_field36851.call(null,name__36746__auto__,null);
});

sablono.core.file_field36851.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.file_field36851.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field36851);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field36855 = (function sablono$core$hidden_field36855(var_args){
var args36856 = [];
var len__23690__auto___36923 = arguments.length;
var i__23691__auto___36924 = (0);
while(true){
if((i__23691__auto___36924 < len__23690__auto___36923)){
args36856.push((arguments[i__23691__auto___36924]));

var G__36925 = (i__23691__auto___36924 + (1));
i__23691__auto___36924 = G__36925;
continue;
} else {
}
break;
}

var G__36858 = args36856.length;
switch (G__36858) {
case 1:
return sablono.core.hidden_field36855.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field36855.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36856.length)].join('')));

}
});

sablono.core.hidden_field36855.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.hidden_field36855.call(null,name__36746__auto__,null);
});

sablono.core.hidden_field36855.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.hidden_field36855.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field36855);

/**
 * Creates a month input field.
 */
sablono.core.month_field36859 = (function sablono$core$month_field36859(var_args){
var args36860 = [];
var len__23690__auto___36927 = arguments.length;
var i__23691__auto___36928 = (0);
while(true){
if((i__23691__auto___36928 < len__23690__auto___36927)){
args36860.push((arguments[i__23691__auto___36928]));

var G__36929 = (i__23691__auto___36928 + (1));
i__23691__auto___36928 = G__36929;
continue;
} else {
}
break;
}

var G__36862 = args36860.length;
switch (G__36862) {
case 1:
return sablono.core.month_field36859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field36859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36860.length)].join('')));

}
});

sablono.core.month_field36859.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.month_field36859.call(null,name__36746__auto__,null);
});

sablono.core.month_field36859.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.month_field36859.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field36859);

/**
 * Creates a number input field.
 */
sablono.core.number_field36863 = (function sablono$core$number_field36863(var_args){
var args36864 = [];
var len__23690__auto___36931 = arguments.length;
var i__23691__auto___36932 = (0);
while(true){
if((i__23691__auto___36932 < len__23690__auto___36931)){
args36864.push((arguments[i__23691__auto___36932]));

var G__36933 = (i__23691__auto___36932 + (1));
i__23691__auto___36932 = G__36933;
continue;
} else {
}
break;
}

var G__36866 = args36864.length;
switch (G__36866) {
case 1:
return sablono.core.number_field36863.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field36863.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36864.length)].join('')));

}
});

sablono.core.number_field36863.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.number_field36863.call(null,name__36746__auto__,null);
});

sablono.core.number_field36863.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.number_field36863.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field36863);

/**
 * Creates a password input field.
 */
sablono.core.password_field36867 = (function sablono$core$password_field36867(var_args){
var args36868 = [];
var len__23690__auto___36935 = arguments.length;
var i__23691__auto___36936 = (0);
while(true){
if((i__23691__auto___36936 < len__23690__auto___36935)){
args36868.push((arguments[i__23691__auto___36936]));

var G__36937 = (i__23691__auto___36936 + (1));
i__23691__auto___36936 = G__36937;
continue;
} else {
}
break;
}

var G__36870 = args36868.length;
switch (G__36870) {
case 1:
return sablono.core.password_field36867.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field36867.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36868.length)].join('')));

}
});

sablono.core.password_field36867.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.password_field36867.call(null,name__36746__auto__,null);
});

sablono.core.password_field36867.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.password_field36867.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field36867);

/**
 * Creates a range input field.
 */
sablono.core.range_field36871 = (function sablono$core$range_field36871(var_args){
var args36872 = [];
var len__23690__auto___36939 = arguments.length;
var i__23691__auto___36940 = (0);
while(true){
if((i__23691__auto___36940 < len__23690__auto___36939)){
args36872.push((arguments[i__23691__auto___36940]));

var G__36941 = (i__23691__auto___36940 + (1));
i__23691__auto___36940 = G__36941;
continue;
} else {
}
break;
}

var G__36874 = args36872.length;
switch (G__36874) {
case 1:
return sablono.core.range_field36871.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field36871.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36872.length)].join('')));

}
});

sablono.core.range_field36871.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.range_field36871.call(null,name__36746__auto__,null);
});

sablono.core.range_field36871.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.range_field36871.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field36871);

/**
 * Creates a search input field.
 */
sablono.core.search_field36875 = (function sablono$core$search_field36875(var_args){
var args36876 = [];
var len__23690__auto___36943 = arguments.length;
var i__23691__auto___36944 = (0);
while(true){
if((i__23691__auto___36944 < len__23690__auto___36943)){
args36876.push((arguments[i__23691__auto___36944]));

var G__36945 = (i__23691__auto___36944 + (1));
i__23691__auto___36944 = G__36945;
continue;
} else {
}
break;
}

var G__36878 = args36876.length;
switch (G__36878) {
case 1:
return sablono.core.search_field36875.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field36875.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36876.length)].join('')));

}
});

sablono.core.search_field36875.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.search_field36875.call(null,name__36746__auto__,null);
});

sablono.core.search_field36875.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.search_field36875.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field36875);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field36879 = (function sablono$core$tel_field36879(var_args){
var args36880 = [];
var len__23690__auto___36947 = arguments.length;
var i__23691__auto___36948 = (0);
while(true){
if((i__23691__auto___36948 < len__23690__auto___36947)){
args36880.push((arguments[i__23691__auto___36948]));

var G__36949 = (i__23691__auto___36948 + (1));
i__23691__auto___36948 = G__36949;
continue;
} else {
}
break;
}

var G__36882 = args36880.length;
switch (G__36882) {
case 1:
return sablono.core.tel_field36879.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field36879.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36880.length)].join('')));

}
});

sablono.core.tel_field36879.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.tel_field36879.call(null,name__36746__auto__,null);
});

sablono.core.tel_field36879.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.tel_field36879.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field36879);

/**
 * Creates a text input field.
 */
sablono.core.text_field36883 = (function sablono$core$text_field36883(var_args){
var args36884 = [];
var len__23690__auto___36951 = arguments.length;
var i__23691__auto___36952 = (0);
while(true){
if((i__23691__auto___36952 < len__23690__auto___36951)){
args36884.push((arguments[i__23691__auto___36952]));

var G__36953 = (i__23691__auto___36952 + (1));
i__23691__auto___36952 = G__36953;
continue;
} else {
}
break;
}

var G__36886 = args36884.length;
switch (G__36886) {
case 1:
return sablono.core.text_field36883.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field36883.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36884.length)].join('')));

}
});

sablono.core.text_field36883.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.text_field36883.call(null,name__36746__auto__,null);
});

sablono.core.text_field36883.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.text_field36883.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field36883);

/**
 * Creates a time input field.
 */
sablono.core.time_field36887 = (function sablono$core$time_field36887(var_args){
var args36888 = [];
var len__23690__auto___36955 = arguments.length;
var i__23691__auto___36956 = (0);
while(true){
if((i__23691__auto___36956 < len__23690__auto___36955)){
args36888.push((arguments[i__23691__auto___36956]));

var G__36957 = (i__23691__auto___36956 + (1));
i__23691__auto___36956 = G__36957;
continue;
} else {
}
break;
}

var G__36890 = args36888.length;
switch (G__36890) {
case 1:
return sablono.core.time_field36887.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field36887.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36888.length)].join('')));

}
});

sablono.core.time_field36887.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.time_field36887.call(null,name__36746__auto__,null);
});

sablono.core.time_field36887.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.time_field36887.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field36887);

/**
 * Creates a url input field.
 */
sablono.core.url_field36891 = (function sablono$core$url_field36891(var_args){
var args36892 = [];
var len__23690__auto___36959 = arguments.length;
var i__23691__auto___36960 = (0);
while(true){
if((i__23691__auto___36960 < len__23690__auto___36959)){
args36892.push((arguments[i__23691__auto___36960]));

var G__36961 = (i__23691__auto___36960 + (1));
i__23691__auto___36960 = G__36961;
continue;
} else {
}
break;
}

var G__36894 = args36892.length;
switch (G__36894) {
case 1:
return sablono.core.url_field36891.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field36891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36892.length)].join('')));

}
});

sablono.core.url_field36891.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.url_field36891.call(null,name__36746__auto__,null);
});

sablono.core.url_field36891.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.url_field36891.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field36891);

/**
 * Creates a week input field.
 */
sablono.core.week_field36895 = (function sablono$core$week_field36895(var_args){
var args36896 = [];
var len__23690__auto___36963 = arguments.length;
var i__23691__auto___36964 = (0);
while(true){
if((i__23691__auto___36964 < len__23690__auto___36963)){
args36896.push((arguments[i__23691__auto___36964]));

var G__36965 = (i__23691__auto___36964 + (1));
i__23691__auto___36964 = G__36965;
continue;
} else {
}
break;
}

var G__36898 = args36896.length;
switch (G__36898) {
case 1:
return sablono.core.week_field36895.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field36895.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36896.length)].join('')));

}
});

sablono.core.week_field36895.cljs$core$IFn$_invoke$arity$1 = (function (name__36746__auto__){
return sablono.core.week_field36895.call(null,name__36746__auto__,null);
});

sablono.core.week_field36895.cljs$core$IFn$_invoke$arity$2 = (function (name__36746__auto__,value__36747__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__36746__auto__,value__36747__auto__);
});

sablono.core.week_field36895.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field36895);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box36967 = (function sablono$core$check_box36967(var_args){
var args36968 = [];
var len__23690__auto___36971 = arguments.length;
var i__23691__auto___36972 = (0);
while(true){
if((i__23691__auto___36972 < len__23690__auto___36971)){
args36968.push((arguments[i__23691__auto___36972]));

var G__36973 = (i__23691__auto___36972 + (1));
i__23691__auto___36972 = G__36973;
continue;
} else {
}
break;
}

var G__36970 = args36968.length;
switch (G__36970) {
case 1:
return sablono.core.check_box36967.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box36967.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box36967.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36968.length)].join('')));

}
});

sablono.core.check_box36967.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box36967.call(null,name,null);
});

sablono.core.check_box36967.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box36967.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box36967.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box36967.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box36967);
/**
 * Creates a radio button.
 */
sablono.core.radio_button36975 = (function sablono$core$radio_button36975(var_args){
var args36976 = [];
var len__23690__auto___36979 = arguments.length;
var i__23691__auto___36980 = (0);
while(true){
if((i__23691__auto___36980 < len__23690__auto___36979)){
args36976.push((arguments[i__23691__auto___36980]));

var G__36981 = (i__23691__auto___36980 + (1));
i__23691__auto___36980 = G__36981;
continue;
} else {
}
break;
}

var G__36978 = args36976.length;
switch (G__36978) {
case 1:
return sablono.core.radio_button36975.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button36975.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button36975.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36976.length)].join('')));

}
});

sablono.core.radio_button36975.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button36975.call(null,group,null);
});

sablono.core.radio_button36975.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button36975.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button36975.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button36975.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button36975);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options36983 = (function sablono$core$select_options36983(coll){
var iter__23395__auto__ = (function sablono$core$select_options36983_$_iter__37000(s__37001){
return (new cljs.core.LazySeq(null,(function (){
var s__37001__$1 = s__37001;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37001__$1);
if(temp__4657__auto__){
var s__37001__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37001__$2)){
var c__23393__auto__ = cljs.core.chunk_first.call(null,s__37001__$2);
var size__23394__auto__ = cljs.core.count.call(null,c__23393__auto__);
var b__37003 = cljs.core.chunk_buffer.call(null,size__23394__auto__);
if((function (){var i__37002 = (0);
while(true){
if((i__37002 < size__23394__auto__)){
var x = cljs.core._nth.call(null,c__23393__auto__,i__37002);
cljs.core.chunk_append.call(null,b__37003,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37010 = x;
var text = cljs.core.nth.call(null,vec__37010,(0),null);
var val = cljs.core.nth.call(null,vec__37010,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37010,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36983.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__37016 = (i__37002 + (1));
i__37002 = G__37016;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37003),sablono$core$select_options36983_$_iter__37000.call(null,cljs.core.chunk_rest.call(null,s__37001__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37003),null);
}
} else {
var x = cljs.core.first.call(null,s__37001__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__37013 = x;
var text = cljs.core.nth.call(null,vec__37013,(0),null);
var val = cljs.core.nth.call(null,vec__37013,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__37013,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options36983.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options36983_$_iter__37000.call(null,cljs.core.rest.call(null,s__37001__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__23395__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options36983);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down37017 = (function sablono$core$drop_down37017(var_args){
var args37018 = [];
var len__23690__auto___37021 = arguments.length;
var i__23691__auto___37022 = (0);
while(true){
if((i__23691__auto___37022 < len__23690__auto___37021)){
args37018.push((arguments[i__23691__auto___37022]));

var G__37023 = (i__23691__auto___37022 + (1));
i__23691__auto___37022 = G__37023;
continue;
} else {
}
break;
}

var G__37020 = args37018.length;
switch (G__37020) {
case 2:
return sablono.core.drop_down37017.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down37017.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37018.length)].join('')));

}
});

sablono.core.drop_down37017.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down37017.call(null,name,options,null);
});

sablono.core.drop_down37017.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down37017.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down37017);
/**
 * Creates a text area element.
 */
sablono.core.text_area37025 = (function sablono$core$text_area37025(var_args){
var args37026 = [];
var len__23690__auto___37029 = arguments.length;
var i__23691__auto___37030 = (0);
while(true){
if((i__23691__auto___37030 < len__23690__auto___37029)){
args37026.push((arguments[i__23691__auto___37030]));

var G__37031 = (i__23691__auto___37030 + (1));
i__23691__auto___37030 = G__37031;
continue;
} else {
}
break;
}

var G__37028 = args37026.length;
switch (G__37028) {
case 1:
return sablono.core.text_area37025.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area37025.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37026.length)].join('')));

}
});

sablono.core.text_area37025.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area37025.call(null,name,null);
});

sablono.core.text_area37025.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area37025.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area37025);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label37033 = (function sablono$core$label37033(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label37033);
/**
 * Creates a submit button.
 */
sablono.core.submit_button37034 = (function sablono$core$submit_button37034(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button37034);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button37035 = (function sablono$core$reset_button37035(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button37035);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to37036 = (function sablono$core$form_to37036(var_args){
var args__23697__auto__ = [];
var len__23690__auto___37043 = arguments.length;
var i__23691__auto___37044 = (0);
while(true){
if((i__23691__auto___37044 < len__23690__auto___37043)){
args__23697__auto__.push((arguments[i__23691__auto___37044]));

var G__37045 = (i__23691__auto___37044 + (1));
i__23691__auto___37044 = G__37045;
continue;
} else {
}
break;
}

var argseq__23698__auto__ = ((((1) < args__23697__auto__.length))?(new cljs.core.IndexedSeq(args__23697__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to37036.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__23698__auto__);
});

sablono.core.form_to37036.cljs$core$IFn$_invoke$arity$variadic = (function (p__37039,body){
var vec__37040 = p__37039;
var method = cljs.core.nth.call(null,vec__37040,(0),null);
var action = cljs.core.nth.call(null,vec__37040,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to37036.cljs$lang$maxFixedArity = (1);

sablono.core.form_to37036.cljs$lang$applyTo = (function (seq37037){
var G__37038 = cljs.core.first.call(null,seq37037);
var seq37037__$1 = cljs.core.next.call(null,seq37037);
return sablono.core.form_to37036.cljs$core$IFn$_invoke$arity$variadic(G__37038,seq37037__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to37036);

//# sourceMappingURL=core.js.map?rel=1465451163870