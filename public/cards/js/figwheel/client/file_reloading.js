// Compiled by ClojureScript 1.9.36 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__22615__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__22615__auto__){
return or__22615__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__22615__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47069_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47069_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__47074 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47075 = null;
var count__47076 = (0);
var i__47077 = (0);
while(true){
if((i__47077 < count__47076)){
var n = cljs.core._nth.call(null,chunk__47075,i__47077);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47078 = seq__47074;
var G__47079 = chunk__47075;
var G__47080 = count__47076;
var G__47081 = (i__47077 + (1));
seq__47074 = G__47078;
chunk__47075 = G__47079;
count__47076 = G__47080;
i__47077 = G__47081;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47074);
if(temp__4657__auto__){
var seq__47074__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47074__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__47074__$1);
var G__47082 = cljs.core.chunk_rest.call(null,seq__47074__$1);
var G__47083 = c__23426__auto__;
var G__47084 = cljs.core.count.call(null,c__23426__auto__);
var G__47085 = (0);
seq__47074 = G__47082;
chunk__47075 = G__47083;
count__47076 = G__47084;
i__47077 = G__47085;
continue;
} else {
var n = cljs.core.first.call(null,seq__47074__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47086 = cljs.core.next.call(null,seq__47074__$1);
var G__47087 = null;
var G__47088 = (0);
var G__47089 = (0);
seq__47074 = G__47086;
chunk__47075 = G__47087;
count__47076 = G__47088;
i__47077 = G__47089;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__47140_47151 = cljs.core.seq.call(null,deps);
var chunk__47141_47152 = null;
var count__47142_47153 = (0);
var i__47143_47154 = (0);
while(true){
if((i__47143_47154 < count__47142_47153)){
var dep_47155 = cljs.core._nth.call(null,chunk__47141_47152,i__47143_47154);
topo_sort_helper_STAR_.call(null,dep_47155,(depth + (1)),state);

var G__47156 = seq__47140_47151;
var G__47157 = chunk__47141_47152;
var G__47158 = count__47142_47153;
var G__47159 = (i__47143_47154 + (1));
seq__47140_47151 = G__47156;
chunk__47141_47152 = G__47157;
count__47142_47153 = G__47158;
i__47143_47154 = G__47159;
continue;
} else {
var temp__4657__auto___47160 = cljs.core.seq.call(null,seq__47140_47151);
if(temp__4657__auto___47160){
var seq__47140_47161__$1 = temp__4657__auto___47160;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47140_47161__$1)){
var c__23426__auto___47162 = cljs.core.chunk_first.call(null,seq__47140_47161__$1);
var G__47163 = cljs.core.chunk_rest.call(null,seq__47140_47161__$1);
var G__47164 = c__23426__auto___47162;
var G__47165 = cljs.core.count.call(null,c__23426__auto___47162);
var G__47166 = (0);
seq__47140_47151 = G__47163;
chunk__47141_47152 = G__47164;
count__47142_47153 = G__47165;
i__47143_47154 = G__47166;
continue;
} else {
var dep_47167 = cljs.core.first.call(null,seq__47140_47161__$1);
topo_sort_helper_STAR_.call(null,dep_47167,(depth + (1)),state);

var G__47168 = cljs.core.next.call(null,seq__47140_47161__$1);
var G__47169 = null;
var G__47170 = (0);
var G__47171 = (0);
seq__47140_47151 = G__47168;
chunk__47141_47152 = G__47169;
count__47142_47153 = G__47170;
i__47143_47154 = G__47171;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47144){
var vec__47148 = p__47144;
var seq__47149 = cljs.core.seq.call(null,vec__47148);
var first__47150 = cljs.core.first.call(null,seq__47149);
var seq__47149__$1 = cljs.core.next.call(null,seq__47149);
var x = first__47150;
var xs = seq__47149__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47148,seq__47149,first__47150,seq__47149__$1,x,xs,get_deps__$1){
return (function (p1__47090_SHARP_){
return clojure.set.difference.call(null,p1__47090_SHARP_,x);
});})(vec__47148,seq__47149,first__47150,seq__47149__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__47184 = cljs.core.seq.call(null,provides);
var chunk__47185 = null;
var count__47186 = (0);
var i__47187 = (0);
while(true){
if((i__47187 < count__47186)){
var prov = cljs.core._nth.call(null,chunk__47185,i__47187);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47188_47196 = cljs.core.seq.call(null,requires);
var chunk__47189_47197 = null;
var count__47190_47198 = (0);
var i__47191_47199 = (0);
while(true){
if((i__47191_47199 < count__47190_47198)){
var req_47200 = cljs.core._nth.call(null,chunk__47189_47197,i__47191_47199);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47200,prov);

var G__47201 = seq__47188_47196;
var G__47202 = chunk__47189_47197;
var G__47203 = count__47190_47198;
var G__47204 = (i__47191_47199 + (1));
seq__47188_47196 = G__47201;
chunk__47189_47197 = G__47202;
count__47190_47198 = G__47203;
i__47191_47199 = G__47204;
continue;
} else {
var temp__4657__auto___47205 = cljs.core.seq.call(null,seq__47188_47196);
if(temp__4657__auto___47205){
var seq__47188_47206__$1 = temp__4657__auto___47205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47188_47206__$1)){
var c__23426__auto___47207 = cljs.core.chunk_first.call(null,seq__47188_47206__$1);
var G__47208 = cljs.core.chunk_rest.call(null,seq__47188_47206__$1);
var G__47209 = c__23426__auto___47207;
var G__47210 = cljs.core.count.call(null,c__23426__auto___47207);
var G__47211 = (0);
seq__47188_47196 = G__47208;
chunk__47189_47197 = G__47209;
count__47190_47198 = G__47210;
i__47191_47199 = G__47211;
continue;
} else {
var req_47212 = cljs.core.first.call(null,seq__47188_47206__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47212,prov);

var G__47213 = cljs.core.next.call(null,seq__47188_47206__$1);
var G__47214 = null;
var G__47215 = (0);
var G__47216 = (0);
seq__47188_47196 = G__47213;
chunk__47189_47197 = G__47214;
count__47190_47198 = G__47215;
i__47191_47199 = G__47216;
continue;
}
} else {
}
}
break;
}

var G__47217 = seq__47184;
var G__47218 = chunk__47185;
var G__47219 = count__47186;
var G__47220 = (i__47187 + (1));
seq__47184 = G__47217;
chunk__47185 = G__47218;
count__47186 = G__47219;
i__47187 = G__47220;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47184);
if(temp__4657__auto__){
var seq__47184__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47184__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__47184__$1);
var G__47221 = cljs.core.chunk_rest.call(null,seq__47184__$1);
var G__47222 = c__23426__auto__;
var G__47223 = cljs.core.count.call(null,c__23426__auto__);
var G__47224 = (0);
seq__47184 = G__47221;
chunk__47185 = G__47222;
count__47186 = G__47223;
i__47187 = G__47224;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47184__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47192_47225 = cljs.core.seq.call(null,requires);
var chunk__47193_47226 = null;
var count__47194_47227 = (0);
var i__47195_47228 = (0);
while(true){
if((i__47195_47228 < count__47194_47227)){
var req_47229 = cljs.core._nth.call(null,chunk__47193_47226,i__47195_47228);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47229,prov);

var G__47230 = seq__47192_47225;
var G__47231 = chunk__47193_47226;
var G__47232 = count__47194_47227;
var G__47233 = (i__47195_47228 + (1));
seq__47192_47225 = G__47230;
chunk__47193_47226 = G__47231;
count__47194_47227 = G__47232;
i__47195_47228 = G__47233;
continue;
} else {
var temp__4657__auto___47234__$1 = cljs.core.seq.call(null,seq__47192_47225);
if(temp__4657__auto___47234__$1){
var seq__47192_47235__$1 = temp__4657__auto___47234__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47192_47235__$1)){
var c__23426__auto___47236 = cljs.core.chunk_first.call(null,seq__47192_47235__$1);
var G__47237 = cljs.core.chunk_rest.call(null,seq__47192_47235__$1);
var G__47238 = c__23426__auto___47236;
var G__47239 = cljs.core.count.call(null,c__23426__auto___47236);
var G__47240 = (0);
seq__47192_47225 = G__47237;
chunk__47193_47226 = G__47238;
count__47194_47227 = G__47239;
i__47195_47228 = G__47240;
continue;
} else {
var req_47241 = cljs.core.first.call(null,seq__47192_47235__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47241,prov);

var G__47242 = cljs.core.next.call(null,seq__47192_47235__$1);
var G__47243 = null;
var G__47244 = (0);
var G__47245 = (0);
seq__47192_47225 = G__47242;
chunk__47193_47226 = G__47243;
count__47194_47227 = G__47244;
i__47195_47228 = G__47245;
continue;
}
} else {
}
}
break;
}

var G__47246 = cljs.core.next.call(null,seq__47184__$1);
var G__47247 = null;
var G__47248 = (0);
var G__47249 = (0);
seq__47184 = G__47246;
chunk__47185 = G__47247;
count__47186 = G__47248;
i__47187 = G__47249;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__47254_47258 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47255_47259 = null;
var count__47256_47260 = (0);
var i__47257_47261 = (0);
while(true){
if((i__47257_47261 < count__47256_47260)){
var ns_47262 = cljs.core._nth.call(null,chunk__47255_47259,i__47257_47261);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47262);

var G__47263 = seq__47254_47258;
var G__47264 = chunk__47255_47259;
var G__47265 = count__47256_47260;
var G__47266 = (i__47257_47261 + (1));
seq__47254_47258 = G__47263;
chunk__47255_47259 = G__47264;
count__47256_47260 = G__47265;
i__47257_47261 = G__47266;
continue;
} else {
var temp__4657__auto___47267 = cljs.core.seq.call(null,seq__47254_47258);
if(temp__4657__auto___47267){
var seq__47254_47268__$1 = temp__4657__auto___47267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47254_47268__$1)){
var c__23426__auto___47269 = cljs.core.chunk_first.call(null,seq__47254_47268__$1);
var G__47270 = cljs.core.chunk_rest.call(null,seq__47254_47268__$1);
var G__47271 = c__23426__auto___47269;
var G__47272 = cljs.core.count.call(null,c__23426__auto___47269);
var G__47273 = (0);
seq__47254_47258 = G__47270;
chunk__47255_47259 = G__47271;
count__47256_47260 = G__47272;
i__47257_47261 = G__47273;
continue;
} else {
var ns_47274 = cljs.core.first.call(null,seq__47254_47268__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47274);

var G__47275 = cljs.core.next.call(null,seq__47254_47268__$1);
var G__47276 = null;
var G__47277 = (0);
var G__47278 = (0);
seq__47254_47258 = G__47275;
chunk__47255_47259 = G__47276;
count__47256_47260 = G__47277;
i__47257_47261 = G__47278;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__22615__auto__ = goog.require__;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47279__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47280__i = 0, G__47280__a = new Array(arguments.length -  0);
while (G__47280__i < G__47280__a.length) {G__47280__a[G__47280__i] = arguments[G__47280__i + 0]; ++G__47280__i;}
  args = new cljs.core.IndexedSeq(G__47280__a,0);
} 
return G__47279__delegate.call(this,args);};
G__47279.cljs$lang$maxFixedArity = 0;
G__47279.cljs$lang$applyTo = (function (arglist__47281){
var args = cljs.core.seq(arglist__47281);
return G__47279__delegate(args);
});
G__47279.cljs$core$IFn$_invoke$arity$variadic = G__47279__delegate;
return G__47279;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47283 = cljs.core._EQ_;
var expr__47284 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47283.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47284))){
var path_parts = ((function (pred__47283,expr__47284){
return (function (p1__47282_SHARP_){
return clojure.string.split.call(null,p1__47282_SHARP_,/[\/\\]/);
});})(pred__47283,expr__47284))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__47283,expr__47284){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47286){if((e47286 instanceof Error)){
var e = e47286;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47286;

}
}})());
});
;})(path_parts,sep,root,pred__47283,expr__47284))
} else {
if(cljs.core.truth_(pred__47283.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47284))){
return ((function (pred__47283,expr__47284){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__47283,expr__47284){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__47283,expr__47284))
);

return deferred.addErrback(((function (deferred,pred__47283,expr__47284){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__47283,expr__47284))
);
});
;})(pred__47283,expr__47284))
} else {
return ((function (pred__47283,expr__47284){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47283,expr__47284))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47287,callback){
var map__47290 = p__47287;
var map__47290__$1 = ((((!((map__47290 == null)))?((((map__47290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47290):map__47290);
var file_msg = map__47290__$1;
var request_url = cljs.core.get.call(null,map__47290__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47290,map__47290__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47290,map__47290__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__){
return (function (state_47314){
var state_val_47315 = (state_47314[(1)]);
if((state_val_47315 === (7))){
var inst_47310 = (state_47314[(2)]);
var state_47314__$1 = state_47314;
var statearr_47316_47336 = state_47314__$1;
(statearr_47316_47336[(2)] = inst_47310);

(statearr_47316_47336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (1))){
var state_47314__$1 = state_47314;
var statearr_47317_47337 = state_47314__$1;
(statearr_47317_47337[(2)] = null);

(statearr_47317_47337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (4))){
var inst_47294 = (state_47314[(7)]);
var inst_47294__$1 = (state_47314[(2)]);
var state_47314__$1 = (function (){var statearr_47318 = state_47314;
(statearr_47318[(7)] = inst_47294__$1);

return statearr_47318;
})();
if(cljs.core.truth_(inst_47294__$1)){
var statearr_47319_47338 = state_47314__$1;
(statearr_47319_47338[(1)] = (5));

} else {
var statearr_47320_47339 = state_47314__$1;
(statearr_47320_47339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (6))){
var state_47314__$1 = state_47314;
var statearr_47321_47340 = state_47314__$1;
(statearr_47321_47340[(2)] = null);

(statearr_47321_47340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (3))){
var inst_47312 = (state_47314[(2)]);
var state_47314__$1 = state_47314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47314__$1,inst_47312);
} else {
if((state_val_47315 === (2))){
var state_47314__$1 = state_47314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47314__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47315 === (11))){
var inst_47306 = (state_47314[(2)]);
var state_47314__$1 = (function (){var statearr_47322 = state_47314;
(statearr_47322[(8)] = inst_47306);

return statearr_47322;
})();
var statearr_47323_47341 = state_47314__$1;
(statearr_47323_47341[(2)] = null);

(statearr_47323_47341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (9))){
var inst_47300 = (state_47314[(9)]);
var inst_47298 = (state_47314[(10)]);
var inst_47302 = inst_47300.call(null,inst_47298);
var state_47314__$1 = state_47314;
var statearr_47324_47342 = state_47314__$1;
(statearr_47324_47342[(2)] = inst_47302);

(statearr_47324_47342[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (5))){
var inst_47294 = (state_47314[(7)]);
var inst_47296 = figwheel.client.file_reloading.blocking_load.call(null,inst_47294);
var state_47314__$1 = state_47314;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47314__$1,(8),inst_47296);
} else {
if((state_val_47315 === (10))){
var inst_47298 = (state_47314[(10)]);
var inst_47304 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47298);
var state_47314__$1 = state_47314;
var statearr_47325_47343 = state_47314__$1;
(statearr_47325_47343[(2)] = inst_47304);

(statearr_47325_47343[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47315 === (8))){
var inst_47294 = (state_47314[(7)]);
var inst_47300 = (state_47314[(9)]);
var inst_47298 = (state_47314[(2)]);
var inst_47299 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47300__$1 = cljs.core.get.call(null,inst_47299,inst_47294);
var state_47314__$1 = (function (){var statearr_47326 = state_47314;
(statearr_47326[(9)] = inst_47300__$1);

(statearr_47326[(10)] = inst_47298);

return statearr_47326;
})();
if(cljs.core.truth_(inst_47300__$1)){
var statearr_47327_47344 = state_47314__$1;
(statearr_47327_47344[(1)] = (9));

} else {
var statearr_47328_47345 = state_47314__$1;
(statearr_47328_47345[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__32416__auto__))
;
return ((function (switch__32304__auto__,c__32416__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32305__auto__ = null;
var figwheel$client$file_reloading$state_machine__32305__auto____0 = (function (){
var statearr_47332 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47332[(0)] = figwheel$client$file_reloading$state_machine__32305__auto__);

(statearr_47332[(1)] = (1));

return statearr_47332;
});
var figwheel$client$file_reloading$state_machine__32305__auto____1 = (function (state_47314){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_47314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e47333){if((e47333 instanceof Object)){
var ex__32308__auto__ = e47333;
var statearr_47334_47346 = state_47314;
(statearr_47334_47346[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47347 = state_47314;
state_47314 = G__47347;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32305__auto__ = function(state_47314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32305__auto____1.call(this,state_47314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32305__auto____0;
figwheel$client$file_reloading$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32305__auto____1;
return figwheel$client$file_reloading$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__))
})();
var state__32418__auto__ = (function (){var statearr_47335 = f__32417__auto__.call(null);
(statearr_47335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_47335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__))
);

return c__32416__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47348,callback){
var map__47351 = p__47348;
var map__47351__$1 = ((((!((map__47351 == null)))?((((map__47351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47351):map__47351);
var file_msg = map__47351__$1;
var namespace = cljs.core.get.call(null,map__47351__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47351,map__47351__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47351,map__47351__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47353){
var map__47356 = p__47353;
var map__47356__$1 = ((((!((map__47356 == null)))?((((map__47356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47356):map__47356);
var file_msg = map__47356__$1;
var namespace = cljs.core.get.call(null,map__47356__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__22603__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__22603__auto__){
var or__22615__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
var or__22615__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__22615__auto____$1)){
return or__22615__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__22603__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47358,callback){
var map__47361 = p__47358;
var map__47361__$1 = ((((!((map__47361 == null)))?((((map__47361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47361):map__47361);
var file_msg = map__47361__$1;
var request_url = cljs.core.get.call(null,map__47361__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32416__auto___47465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___47465,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___47465,out){
return (function (state_47447){
var state_val_47448 = (state_47447[(1)]);
if((state_val_47448 === (1))){
var inst_47421 = cljs.core.seq.call(null,files);
var inst_47422 = cljs.core.first.call(null,inst_47421);
var inst_47423 = cljs.core.next.call(null,inst_47421);
var inst_47424 = files;
var state_47447__$1 = (function (){var statearr_47449 = state_47447;
(statearr_47449[(7)] = inst_47424);

(statearr_47449[(8)] = inst_47423);

(statearr_47449[(9)] = inst_47422);

return statearr_47449;
})();
var statearr_47450_47466 = state_47447__$1;
(statearr_47450_47466[(2)] = null);

(statearr_47450_47466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (2))){
var inst_47424 = (state_47447[(7)]);
var inst_47430 = (state_47447[(10)]);
var inst_47429 = cljs.core.seq.call(null,inst_47424);
var inst_47430__$1 = cljs.core.first.call(null,inst_47429);
var inst_47431 = cljs.core.next.call(null,inst_47429);
var inst_47432 = (inst_47430__$1 == null);
var inst_47433 = cljs.core.not.call(null,inst_47432);
var state_47447__$1 = (function (){var statearr_47451 = state_47447;
(statearr_47451[(10)] = inst_47430__$1);

(statearr_47451[(11)] = inst_47431);

return statearr_47451;
})();
if(inst_47433){
var statearr_47452_47467 = state_47447__$1;
(statearr_47452_47467[(1)] = (4));

} else {
var statearr_47453_47468 = state_47447__$1;
(statearr_47453_47468[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (3))){
var inst_47445 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47447__$1,inst_47445);
} else {
if((state_val_47448 === (4))){
var inst_47430 = (state_47447[(10)]);
var inst_47435 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47430);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47447__$1,(7),inst_47435);
} else {
if((state_val_47448 === (5))){
var inst_47441 = cljs.core.async.close_BANG_.call(null,out);
var state_47447__$1 = state_47447;
var statearr_47454_47469 = state_47447__$1;
(statearr_47454_47469[(2)] = inst_47441);

(statearr_47454_47469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (6))){
var inst_47443 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47455_47470 = state_47447__$1;
(statearr_47455_47470[(2)] = inst_47443);

(statearr_47455_47470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (7))){
var inst_47431 = (state_47447[(11)]);
var inst_47437 = (state_47447[(2)]);
var inst_47438 = cljs.core.async.put_BANG_.call(null,out,inst_47437);
var inst_47424 = inst_47431;
var state_47447__$1 = (function (){var statearr_47456 = state_47447;
(statearr_47456[(12)] = inst_47438);

(statearr_47456[(7)] = inst_47424);

return statearr_47456;
})();
var statearr_47457_47471 = state_47447__$1;
(statearr_47457_47471[(2)] = null);

(statearr_47457_47471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__32416__auto___47465,out))
;
return ((function (switch__32304__auto__,c__32416__auto___47465,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____0 = (function (){
var statearr_47461 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47461[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__);

(statearr_47461[(1)] = (1));

return statearr_47461;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____1 = (function (state_47447){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_47447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e47462){if((e47462 instanceof Object)){
var ex__32308__auto__ = e47462;
var statearr_47463_47472 = state_47447;
(statearr_47463_47472[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47473 = state_47447;
state_47447 = G__47473;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__ = function(state_47447){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____1.call(this,state_47447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___47465,out))
})();
var state__32418__auto__ = (function (){var statearr_47464 = f__32417__auto__.call(null);
(statearr_47464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___47465);

return statearr_47464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___47465,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47474,opts){
var map__47478 = p__47474;
var map__47478__$1 = ((((!((map__47478 == null)))?((((map__47478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47478):map__47478);
var eval_body__$1 = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__22603__auto__ = eval_body__$1;
if(cljs.core.truth_(and__22603__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__22603__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47480){var e = e47480;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47481_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47481_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47490){
var vec__47491 = p__47490;
var k = cljs.core.nth.call(null,vec__47491,(0),null);
var v = cljs.core.nth.call(null,vec__47491,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47494){
var vec__47495 = p__47494;
var k = cljs.core.nth.call(null,vec__47495,(0),null);
var v = cljs.core.nth.call(null,vec__47495,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47501,p__47502){
var map__47749 = p__47501;
var map__47749__$1 = ((((!((map__47749 == null)))?((((map__47749.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47749.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47749):map__47749);
var opts = map__47749__$1;
var before_jsload = cljs.core.get.call(null,map__47749__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47749__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47749__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47750 = p__47502;
var map__47750__$1 = ((((!((map__47750 == null)))?((((map__47750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47750):map__47750);
var msg = map__47750__$1;
var files = cljs.core.get.call(null,map__47750__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47750__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47750__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47903){
var state_val_47904 = (state_47903[(1)]);
if((state_val_47904 === (7))){
var inst_47766 = (state_47903[(7)]);
var inst_47765 = (state_47903[(8)]);
var inst_47767 = (state_47903[(9)]);
var inst_47764 = (state_47903[(10)]);
var inst_47772 = cljs.core._nth.call(null,inst_47765,inst_47767);
var inst_47773 = figwheel.client.file_reloading.eval_body.call(null,inst_47772,opts);
var inst_47774 = (inst_47767 + (1));
var tmp47905 = inst_47766;
var tmp47906 = inst_47765;
var tmp47907 = inst_47764;
var inst_47764__$1 = tmp47907;
var inst_47765__$1 = tmp47906;
var inst_47766__$1 = tmp47905;
var inst_47767__$1 = inst_47774;
var state_47903__$1 = (function (){var statearr_47908 = state_47903;
(statearr_47908[(7)] = inst_47766__$1);

(statearr_47908[(8)] = inst_47765__$1);

(statearr_47908[(11)] = inst_47773);

(statearr_47908[(9)] = inst_47767__$1);

(statearr_47908[(10)] = inst_47764__$1);

return statearr_47908;
})();
var statearr_47909_47995 = state_47903__$1;
(statearr_47909_47995[(2)] = null);

(statearr_47909_47995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (20))){
var inst_47807 = (state_47903[(12)]);
var inst_47815 = figwheel.client.file_reloading.sort_files.call(null,inst_47807);
var state_47903__$1 = state_47903;
var statearr_47910_47996 = state_47903__$1;
(statearr_47910_47996[(2)] = inst_47815);

(statearr_47910_47996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (27))){
var state_47903__$1 = state_47903;
var statearr_47911_47997 = state_47903__$1;
(statearr_47911_47997[(2)] = null);

(statearr_47911_47997[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (1))){
var inst_47756 = (state_47903[(13)]);
var inst_47753 = before_jsload.call(null,files);
var inst_47754 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47755 = (function (){return ((function (inst_47756,inst_47753,inst_47754,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47498_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47498_SHARP_);
});
;})(inst_47756,inst_47753,inst_47754,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47756__$1 = cljs.core.filter.call(null,inst_47755,files);
var inst_47757 = cljs.core.not_empty.call(null,inst_47756__$1);
var state_47903__$1 = (function (){var statearr_47912 = state_47903;
(statearr_47912[(14)] = inst_47754);

(statearr_47912[(13)] = inst_47756__$1);

(statearr_47912[(15)] = inst_47753);

return statearr_47912;
})();
if(cljs.core.truth_(inst_47757)){
var statearr_47913_47998 = state_47903__$1;
(statearr_47913_47998[(1)] = (2));

} else {
var statearr_47914_47999 = state_47903__$1;
(statearr_47914_47999[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (24))){
var state_47903__$1 = state_47903;
var statearr_47915_48000 = state_47903__$1;
(statearr_47915_48000[(2)] = null);

(statearr_47915_48000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (39))){
var inst_47857 = (state_47903[(16)]);
var state_47903__$1 = state_47903;
var statearr_47916_48001 = state_47903__$1;
(statearr_47916_48001[(2)] = inst_47857);

(statearr_47916_48001[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (46))){
var inst_47898 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
var statearr_47917_48002 = state_47903__$1;
(statearr_47917_48002[(2)] = inst_47898);

(statearr_47917_48002[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (4))){
var inst_47801 = (state_47903[(2)]);
var inst_47802 = cljs.core.List.EMPTY;
var inst_47803 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47802);
var inst_47804 = (function (){return ((function (inst_47801,inst_47802,inst_47803,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47499_SHARP_){
var and__22603__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47499_SHARP_);
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47499_SHARP_));
} else {
return and__22603__auto__;
}
});
;})(inst_47801,inst_47802,inst_47803,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47805 = cljs.core.filter.call(null,inst_47804,files);
var inst_47806 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47807 = cljs.core.concat.call(null,inst_47805,inst_47806);
var state_47903__$1 = (function (){var statearr_47918 = state_47903;
(statearr_47918[(17)] = inst_47803);

(statearr_47918[(18)] = inst_47801);

(statearr_47918[(12)] = inst_47807);

return statearr_47918;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47919_48003 = state_47903__$1;
(statearr_47919_48003[(1)] = (16));

} else {
var statearr_47920_48004 = state_47903__$1;
(statearr_47920_48004[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (15))){
var inst_47791 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
var statearr_47921_48005 = state_47903__$1;
(statearr_47921_48005[(2)] = inst_47791);

(statearr_47921_48005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (21))){
var inst_47817 = (state_47903[(19)]);
var inst_47817__$1 = (state_47903[(2)]);
var inst_47818 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47817__$1);
var state_47903__$1 = (function (){var statearr_47922 = state_47903;
(statearr_47922[(19)] = inst_47817__$1);

return statearr_47922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47903__$1,(22),inst_47818);
} else {
if((state_val_47904 === (31))){
var inst_47901 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47903__$1,inst_47901);
} else {
if((state_val_47904 === (32))){
var inst_47857 = (state_47903[(16)]);
var inst_47862 = inst_47857.cljs$lang$protocol_mask$partition0$;
var inst_47863 = (inst_47862 & (64));
var inst_47864 = inst_47857.cljs$core$ISeq$;
var inst_47865 = (inst_47863) || (inst_47864);
var state_47903__$1 = state_47903;
if(cljs.core.truth_(inst_47865)){
var statearr_47923_48006 = state_47903__$1;
(statearr_47923_48006[(1)] = (35));

} else {
var statearr_47924_48007 = state_47903__$1;
(statearr_47924_48007[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (40))){
var inst_47878 = (state_47903[(20)]);
var inst_47877 = (state_47903[(2)]);
var inst_47878__$1 = cljs.core.get.call(null,inst_47877,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47879 = cljs.core.get.call(null,inst_47877,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47880 = cljs.core.not_empty.call(null,inst_47878__$1);
var state_47903__$1 = (function (){var statearr_47925 = state_47903;
(statearr_47925[(20)] = inst_47878__$1);

(statearr_47925[(21)] = inst_47879);

return statearr_47925;
})();
if(cljs.core.truth_(inst_47880)){
var statearr_47926_48008 = state_47903__$1;
(statearr_47926_48008[(1)] = (41));

} else {
var statearr_47927_48009 = state_47903__$1;
(statearr_47927_48009[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (33))){
var state_47903__$1 = state_47903;
var statearr_47928_48010 = state_47903__$1;
(statearr_47928_48010[(2)] = false);

(statearr_47928_48010[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (13))){
var inst_47777 = (state_47903[(22)]);
var inst_47781 = cljs.core.chunk_first.call(null,inst_47777);
var inst_47782 = cljs.core.chunk_rest.call(null,inst_47777);
var inst_47783 = cljs.core.count.call(null,inst_47781);
var inst_47764 = inst_47782;
var inst_47765 = inst_47781;
var inst_47766 = inst_47783;
var inst_47767 = (0);
var state_47903__$1 = (function (){var statearr_47929 = state_47903;
(statearr_47929[(7)] = inst_47766);

(statearr_47929[(8)] = inst_47765);

(statearr_47929[(9)] = inst_47767);

(statearr_47929[(10)] = inst_47764);

return statearr_47929;
})();
var statearr_47930_48011 = state_47903__$1;
(statearr_47930_48011[(2)] = null);

(statearr_47930_48011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (22))){
var inst_47817 = (state_47903[(19)]);
var inst_47820 = (state_47903[(23)]);
var inst_47825 = (state_47903[(24)]);
var inst_47821 = (state_47903[(25)]);
var inst_47820__$1 = (state_47903[(2)]);
var inst_47821__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47820__$1);
var inst_47822 = (function (){var all_files = inst_47817;
var res_SINGLEQUOTE_ = inst_47820__$1;
var res = inst_47821__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47817,inst_47820,inst_47825,inst_47821,inst_47820__$1,inst_47821__$1,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47500_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47500_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47817,inst_47820,inst_47825,inst_47821,inst_47820__$1,inst_47821__$1,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47823 = cljs.core.filter.call(null,inst_47822,inst_47820__$1);
var inst_47824 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47825__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47824);
var inst_47826 = cljs.core.not_empty.call(null,inst_47825__$1);
var state_47903__$1 = (function (){var statearr_47931 = state_47903;
(statearr_47931[(26)] = inst_47823);

(statearr_47931[(23)] = inst_47820__$1);

(statearr_47931[(24)] = inst_47825__$1);

(statearr_47931[(25)] = inst_47821__$1);

return statearr_47931;
})();
if(cljs.core.truth_(inst_47826)){
var statearr_47932_48012 = state_47903__$1;
(statearr_47932_48012[(1)] = (23));

} else {
var statearr_47933_48013 = state_47903__$1;
(statearr_47933_48013[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (36))){
var state_47903__$1 = state_47903;
var statearr_47934_48014 = state_47903__$1;
(statearr_47934_48014[(2)] = false);

(statearr_47934_48014[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (41))){
var inst_47878 = (state_47903[(20)]);
var inst_47882 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47883 = cljs.core.map.call(null,inst_47882,inst_47878);
var inst_47884 = cljs.core.pr_str.call(null,inst_47883);
var inst_47885 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_47884)].join('');
var inst_47886 = figwheel.client.utils.log.call(null,inst_47885);
var state_47903__$1 = state_47903;
var statearr_47935_48015 = state_47903__$1;
(statearr_47935_48015[(2)] = inst_47886);

(statearr_47935_48015[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (43))){
var inst_47879 = (state_47903[(21)]);
var inst_47889 = (state_47903[(2)]);
var inst_47890 = cljs.core.not_empty.call(null,inst_47879);
var state_47903__$1 = (function (){var statearr_47936 = state_47903;
(statearr_47936[(27)] = inst_47889);

return statearr_47936;
})();
if(cljs.core.truth_(inst_47890)){
var statearr_47937_48016 = state_47903__$1;
(statearr_47937_48016[(1)] = (44));

} else {
var statearr_47938_48017 = state_47903__$1;
(statearr_47938_48017[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (29))){
var inst_47823 = (state_47903[(26)]);
var inst_47817 = (state_47903[(19)]);
var inst_47820 = (state_47903[(23)]);
var inst_47825 = (state_47903[(24)]);
var inst_47857 = (state_47903[(16)]);
var inst_47821 = (state_47903[(25)]);
var inst_47853 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47856 = (function (){var all_files = inst_47817;
var res_SINGLEQUOTE_ = inst_47820;
var res = inst_47821;
var files_not_loaded = inst_47823;
var dependencies_that_loaded = inst_47825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47857,inst_47821,inst_47853,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47855){
var map__47939 = p__47855;
var map__47939__$1 = ((((!((map__47939 == null)))?((((map__47939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47939):map__47939);
var namespace = cljs.core.get.call(null,map__47939__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47857,inst_47821,inst_47853,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47857__$1 = cljs.core.group_by.call(null,inst_47856,inst_47823);
var inst_47859 = (inst_47857__$1 == null);
var inst_47860 = cljs.core.not.call(null,inst_47859);
var state_47903__$1 = (function (){var statearr_47941 = state_47903;
(statearr_47941[(28)] = inst_47853);

(statearr_47941[(16)] = inst_47857__$1);

return statearr_47941;
})();
if(inst_47860){
var statearr_47942_48018 = state_47903__$1;
(statearr_47942_48018[(1)] = (32));

} else {
var statearr_47943_48019 = state_47903__$1;
(statearr_47943_48019[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (44))){
var inst_47879 = (state_47903[(21)]);
var inst_47892 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47879);
var inst_47893 = cljs.core.pr_str.call(null,inst_47892);
var inst_47894 = [cljs.core.str("not required: "),cljs.core.str(inst_47893)].join('');
var inst_47895 = figwheel.client.utils.log.call(null,inst_47894);
var state_47903__$1 = state_47903;
var statearr_47944_48020 = state_47903__$1;
(statearr_47944_48020[(2)] = inst_47895);

(statearr_47944_48020[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (6))){
var inst_47798 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
var statearr_47945_48021 = state_47903__$1;
(statearr_47945_48021[(2)] = inst_47798);

(statearr_47945_48021[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (28))){
var inst_47823 = (state_47903[(26)]);
var inst_47850 = (state_47903[(2)]);
var inst_47851 = cljs.core.not_empty.call(null,inst_47823);
var state_47903__$1 = (function (){var statearr_47946 = state_47903;
(statearr_47946[(29)] = inst_47850);

return statearr_47946;
})();
if(cljs.core.truth_(inst_47851)){
var statearr_47947_48022 = state_47903__$1;
(statearr_47947_48022[(1)] = (29));

} else {
var statearr_47948_48023 = state_47903__$1;
(statearr_47948_48023[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (25))){
var inst_47821 = (state_47903[(25)]);
var inst_47837 = (state_47903[(2)]);
var inst_47838 = cljs.core.not_empty.call(null,inst_47821);
var state_47903__$1 = (function (){var statearr_47949 = state_47903;
(statearr_47949[(30)] = inst_47837);

return statearr_47949;
})();
if(cljs.core.truth_(inst_47838)){
var statearr_47950_48024 = state_47903__$1;
(statearr_47950_48024[(1)] = (26));

} else {
var statearr_47951_48025 = state_47903__$1;
(statearr_47951_48025[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (34))){
var inst_47872 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
if(cljs.core.truth_(inst_47872)){
var statearr_47952_48026 = state_47903__$1;
(statearr_47952_48026[(1)] = (38));

} else {
var statearr_47953_48027 = state_47903__$1;
(statearr_47953_48027[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (17))){
var state_47903__$1 = state_47903;
var statearr_47954_48028 = state_47903__$1;
(statearr_47954_48028[(2)] = recompile_dependents);

(statearr_47954_48028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (3))){
var state_47903__$1 = state_47903;
var statearr_47955_48029 = state_47903__$1;
(statearr_47955_48029[(2)] = null);

(statearr_47955_48029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (12))){
var inst_47794 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
var statearr_47956_48030 = state_47903__$1;
(statearr_47956_48030[(2)] = inst_47794);

(statearr_47956_48030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (2))){
var inst_47756 = (state_47903[(13)]);
var inst_47763 = cljs.core.seq.call(null,inst_47756);
var inst_47764 = inst_47763;
var inst_47765 = null;
var inst_47766 = (0);
var inst_47767 = (0);
var state_47903__$1 = (function (){var statearr_47957 = state_47903;
(statearr_47957[(7)] = inst_47766);

(statearr_47957[(8)] = inst_47765);

(statearr_47957[(9)] = inst_47767);

(statearr_47957[(10)] = inst_47764);

return statearr_47957;
})();
var statearr_47958_48031 = state_47903__$1;
(statearr_47958_48031[(2)] = null);

(statearr_47958_48031[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (23))){
var inst_47823 = (state_47903[(26)]);
var inst_47817 = (state_47903[(19)]);
var inst_47820 = (state_47903[(23)]);
var inst_47825 = (state_47903[(24)]);
var inst_47821 = (state_47903[(25)]);
var inst_47828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47830 = (function (){var all_files = inst_47817;
var res_SINGLEQUOTE_ = inst_47820;
var res = inst_47821;
var files_not_loaded = inst_47823;
var dependencies_that_loaded = inst_47825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47821,inst_47828,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47829){
var map__47959 = p__47829;
var map__47959__$1 = ((((!((map__47959 == null)))?((((map__47959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47959):map__47959);
var request_url = cljs.core.get.call(null,map__47959__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47821,inst_47828,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47831 = cljs.core.reverse.call(null,inst_47825);
var inst_47832 = cljs.core.map.call(null,inst_47830,inst_47831);
var inst_47833 = cljs.core.pr_str.call(null,inst_47832);
var inst_47834 = figwheel.client.utils.log.call(null,inst_47833);
var state_47903__$1 = (function (){var statearr_47961 = state_47903;
(statearr_47961[(31)] = inst_47828);

return statearr_47961;
})();
var statearr_47962_48032 = state_47903__$1;
(statearr_47962_48032[(2)] = inst_47834);

(statearr_47962_48032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (35))){
var state_47903__$1 = state_47903;
var statearr_47963_48033 = state_47903__$1;
(statearr_47963_48033[(2)] = true);

(statearr_47963_48033[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (19))){
var inst_47807 = (state_47903[(12)]);
var inst_47813 = figwheel.client.file_reloading.expand_files.call(null,inst_47807);
var state_47903__$1 = state_47903;
var statearr_47964_48034 = state_47903__$1;
(statearr_47964_48034[(2)] = inst_47813);

(statearr_47964_48034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (11))){
var state_47903__$1 = state_47903;
var statearr_47965_48035 = state_47903__$1;
(statearr_47965_48035[(2)] = null);

(statearr_47965_48035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (9))){
var inst_47796 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
var statearr_47966_48036 = state_47903__$1;
(statearr_47966_48036[(2)] = inst_47796);

(statearr_47966_48036[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (5))){
var inst_47766 = (state_47903[(7)]);
var inst_47767 = (state_47903[(9)]);
var inst_47769 = (inst_47767 < inst_47766);
var inst_47770 = inst_47769;
var state_47903__$1 = state_47903;
if(cljs.core.truth_(inst_47770)){
var statearr_47967_48037 = state_47903__$1;
(statearr_47967_48037[(1)] = (7));

} else {
var statearr_47968_48038 = state_47903__$1;
(statearr_47968_48038[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (14))){
var inst_47777 = (state_47903[(22)]);
var inst_47786 = cljs.core.first.call(null,inst_47777);
var inst_47787 = figwheel.client.file_reloading.eval_body.call(null,inst_47786,opts);
var inst_47788 = cljs.core.next.call(null,inst_47777);
var inst_47764 = inst_47788;
var inst_47765 = null;
var inst_47766 = (0);
var inst_47767 = (0);
var state_47903__$1 = (function (){var statearr_47969 = state_47903;
(statearr_47969[(7)] = inst_47766);

(statearr_47969[(8)] = inst_47765);

(statearr_47969[(32)] = inst_47787);

(statearr_47969[(9)] = inst_47767);

(statearr_47969[(10)] = inst_47764);

return statearr_47969;
})();
var statearr_47970_48039 = state_47903__$1;
(statearr_47970_48039[(2)] = null);

(statearr_47970_48039[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (45))){
var state_47903__$1 = state_47903;
var statearr_47971_48040 = state_47903__$1;
(statearr_47971_48040[(2)] = null);

(statearr_47971_48040[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (26))){
var inst_47823 = (state_47903[(26)]);
var inst_47817 = (state_47903[(19)]);
var inst_47820 = (state_47903[(23)]);
var inst_47825 = (state_47903[(24)]);
var inst_47821 = (state_47903[(25)]);
var inst_47840 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47842 = (function (){var all_files = inst_47817;
var res_SINGLEQUOTE_ = inst_47820;
var res = inst_47821;
var files_not_loaded = inst_47823;
var dependencies_that_loaded = inst_47825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47821,inst_47840,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47841){
var map__47972 = p__47841;
var map__47972__$1 = ((((!((map__47972 == null)))?((((map__47972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47972):map__47972);
var namespace = cljs.core.get.call(null,map__47972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47972__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47821,inst_47840,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47843 = cljs.core.map.call(null,inst_47842,inst_47821);
var inst_47844 = cljs.core.pr_str.call(null,inst_47843);
var inst_47845 = figwheel.client.utils.log.call(null,inst_47844);
var inst_47846 = (function (){var all_files = inst_47817;
var res_SINGLEQUOTE_ = inst_47820;
var res = inst_47821;
var files_not_loaded = inst_47823;
var dependencies_that_loaded = inst_47825;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47821,inst_47840,inst_47842,inst_47843,inst_47844,inst_47845,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47823,inst_47817,inst_47820,inst_47825,inst_47821,inst_47840,inst_47842,inst_47843,inst_47844,inst_47845,state_val_47904,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47847 = setTimeout(inst_47846,(10));
var state_47903__$1 = (function (){var statearr_47974 = state_47903;
(statearr_47974[(33)] = inst_47845);

(statearr_47974[(34)] = inst_47840);

return statearr_47974;
})();
var statearr_47975_48041 = state_47903__$1;
(statearr_47975_48041[(2)] = inst_47847);

(statearr_47975_48041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (16))){
var state_47903__$1 = state_47903;
var statearr_47976_48042 = state_47903__$1;
(statearr_47976_48042[(2)] = reload_dependents);

(statearr_47976_48042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (38))){
var inst_47857 = (state_47903[(16)]);
var inst_47874 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47857);
var state_47903__$1 = state_47903;
var statearr_47977_48043 = state_47903__$1;
(statearr_47977_48043[(2)] = inst_47874);

(statearr_47977_48043[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (30))){
var state_47903__$1 = state_47903;
var statearr_47978_48044 = state_47903__$1;
(statearr_47978_48044[(2)] = null);

(statearr_47978_48044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (10))){
var inst_47777 = (state_47903[(22)]);
var inst_47779 = cljs.core.chunked_seq_QMARK_.call(null,inst_47777);
var state_47903__$1 = state_47903;
if(inst_47779){
var statearr_47979_48045 = state_47903__$1;
(statearr_47979_48045[(1)] = (13));

} else {
var statearr_47980_48046 = state_47903__$1;
(statearr_47980_48046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (18))){
var inst_47811 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
if(cljs.core.truth_(inst_47811)){
var statearr_47981_48047 = state_47903__$1;
(statearr_47981_48047[(1)] = (19));

} else {
var statearr_47982_48048 = state_47903__$1;
(statearr_47982_48048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (42))){
var state_47903__$1 = state_47903;
var statearr_47983_48049 = state_47903__$1;
(statearr_47983_48049[(2)] = null);

(statearr_47983_48049[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (37))){
var inst_47869 = (state_47903[(2)]);
var state_47903__$1 = state_47903;
var statearr_47984_48050 = state_47903__$1;
(statearr_47984_48050[(2)] = inst_47869);

(statearr_47984_48050[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47904 === (8))){
var inst_47764 = (state_47903[(10)]);
var inst_47777 = (state_47903[(22)]);
var inst_47777__$1 = cljs.core.seq.call(null,inst_47764);
var state_47903__$1 = (function (){var statearr_47985 = state_47903;
(statearr_47985[(22)] = inst_47777__$1);

return statearr_47985;
})();
if(inst_47777__$1){
var statearr_47986_48051 = state_47903__$1;
(statearr_47986_48051[(1)] = (10));

} else {
var statearr_47987_48052 = state_47903__$1;
(statearr_47987_48052[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
});})(c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32304__auto__,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____0 = (function (){
var statearr_47991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47991[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__);

(statearr_47991[(1)] = (1));

return statearr_47991;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____1 = (function (state_47903){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_47903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e47992){if((e47992 instanceof Object)){
var ex__32308__auto__ = e47992;
var statearr_47993_48053 = state_47903;
(statearr_47993_48053[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48054 = state_47903;
state_47903 = G__48054;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__ = function(state_47903){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____1.call(this,state_47903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32418__auto__ = (function (){var statearr_47994 = f__32417__auto__.call(null);
(statearr_47994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_47994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__,map__47749,map__47749__$1,opts,before_jsload,on_jsload,reload_dependents,map__47750,map__47750__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32416__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48057,link){
var map__48060 = p__48057;
var map__48060__$1 = ((((!((map__48060 == null)))?((((map__48060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48060):map__48060);
var file = cljs.core.get.call(null,map__48060__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48060,map__48060__$1,file){
return (function (p1__48055_SHARP_,p2__48056_SHARP_){
if(cljs.core._EQ_.call(null,p1__48055_SHARP_,p2__48056_SHARP_)){
return p1__48055_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48060,map__48060__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48066){
var map__48067 = p__48066;
var map__48067__$1 = ((((!((map__48067 == null)))?((((map__48067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48067):map__48067);
var match_length = cljs.core.get.call(null,map__48067__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48067__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48062_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48062_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args48069 = [];
var len__23690__auto___48072 = arguments.length;
var i__23691__auto___48073 = (0);
while(true){
if((i__23691__auto___48073 < len__23690__auto___48072)){
args48069.push((arguments[i__23691__auto___48073]));

var G__48074 = (i__23691__auto___48073 + (1));
i__23691__auto___48073 = G__48074;
continue;
} else {
}
break;
}

var G__48071 = args48069.length;
switch (G__48071) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48069.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48076_SHARP_,p2__48077_SHARP_){
return cljs.core.assoc.call(null,p1__48076_SHARP_,cljs.core.get.call(null,p2__48077_SHARP_,key),p2__48077_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__48078){
var map__48081 = p__48078;
var map__48081__$1 = ((((!((map__48081 == null)))?((((map__48081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48081):map__48081);
var f_data = map__48081__$1;
var file = cljs.core.get.call(null,map__48081__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48083,files_msg){
var map__48090 = p__48083;
var map__48090__$1 = ((((!((map__48090 == null)))?((((map__48090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48090):map__48090);
var opts = map__48090__$1;
var on_cssload = cljs.core.get.call(null,map__48090__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__48092_48096 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__48093_48097 = null;
var count__48094_48098 = (0);
var i__48095_48099 = (0);
while(true){
if((i__48095_48099 < count__48094_48098)){
var f_48100 = cljs.core._nth.call(null,chunk__48093_48097,i__48095_48099);
figwheel.client.file_reloading.reload_css_file.call(null,f_48100);

var G__48101 = seq__48092_48096;
var G__48102 = chunk__48093_48097;
var G__48103 = count__48094_48098;
var G__48104 = (i__48095_48099 + (1));
seq__48092_48096 = G__48101;
chunk__48093_48097 = G__48102;
count__48094_48098 = G__48103;
i__48095_48099 = G__48104;
continue;
} else {
var temp__4657__auto___48105 = cljs.core.seq.call(null,seq__48092_48096);
if(temp__4657__auto___48105){
var seq__48092_48106__$1 = temp__4657__auto___48105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48092_48106__$1)){
var c__23426__auto___48107 = cljs.core.chunk_first.call(null,seq__48092_48106__$1);
var G__48108 = cljs.core.chunk_rest.call(null,seq__48092_48106__$1);
var G__48109 = c__23426__auto___48107;
var G__48110 = cljs.core.count.call(null,c__23426__auto___48107);
var G__48111 = (0);
seq__48092_48096 = G__48108;
chunk__48093_48097 = G__48109;
count__48094_48098 = G__48110;
i__48095_48099 = G__48111;
continue;
} else {
var f_48112 = cljs.core.first.call(null,seq__48092_48106__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_48112);

var G__48113 = cljs.core.next.call(null,seq__48092_48106__$1);
var G__48114 = null;
var G__48115 = (0);
var G__48116 = (0);
seq__48092_48096 = G__48113;
chunk__48093_48097 = G__48114;
count__48094_48098 = G__48115;
i__48095_48099 = G__48116;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__48090,map__48090__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__48090,map__48090__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1465451194077