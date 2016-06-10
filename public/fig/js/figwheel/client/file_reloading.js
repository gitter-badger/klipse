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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44748_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44748_SHARP_));
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
var seq__44753 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44754 = null;
var count__44755 = (0);
var i__44756 = (0);
while(true){
if((i__44756 < count__44755)){
var n = cljs.core._nth.call(null,chunk__44754,i__44756);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44757 = seq__44753;
var G__44758 = chunk__44754;
var G__44759 = count__44755;
var G__44760 = (i__44756 + (1));
seq__44753 = G__44757;
chunk__44754 = G__44758;
count__44755 = G__44759;
i__44756 = G__44760;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44753);
if(temp__4657__auto__){
var seq__44753__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44753__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__44753__$1);
var G__44761 = cljs.core.chunk_rest.call(null,seq__44753__$1);
var G__44762 = c__23426__auto__;
var G__44763 = cljs.core.count.call(null,c__23426__auto__);
var G__44764 = (0);
seq__44753 = G__44761;
chunk__44754 = G__44762;
count__44755 = G__44763;
i__44756 = G__44764;
continue;
} else {
var n = cljs.core.first.call(null,seq__44753__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44765 = cljs.core.next.call(null,seq__44753__$1);
var G__44766 = null;
var G__44767 = (0);
var G__44768 = (0);
seq__44753 = G__44765;
chunk__44754 = G__44766;
count__44755 = G__44767;
i__44756 = G__44768;
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

var seq__44819_44830 = cljs.core.seq.call(null,deps);
var chunk__44820_44831 = null;
var count__44821_44832 = (0);
var i__44822_44833 = (0);
while(true){
if((i__44822_44833 < count__44821_44832)){
var dep_44834 = cljs.core._nth.call(null,chunk__44820_44831,i__44822_44833);
topo_sort_helper_STAR_.call(null,dep_44834,(depth + (1)),state);

var G__44835 = seq__44819_44830;
var G__44836 = chunk__44820_44831;
var G__44837 = count__44821_44832;
var G__44838 = (i__44822_44833 + (1));
seq__44819_44830 = G__44835;
chunk__44820_44831 = G__44836;
count__44821_44832 = G__44837;
i__44822_44833 = G__44838;
continue;
} else {
var temp__4657__auto___44839 = cljs.core.seq.call(null,seq__44819_44830);
if(temp__4657__auto___44839){
var seq__44819_44840__$1 = temp__4657__auto___44839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44819_44840__$1)){
var c__23426__auto___44841 = cljs.core.chunk_first.call(null,seq__44819_44840__$1);
var G__44842 = cljs.core.chunk_rest.call(null,seq__44819_44840__$1);
var G__44843 = c__23426__auto___44841;
var G__44844 = cljs.core.count.call(null,c__23426__auto___44841);
var G__44845 = (0);
seq__44819_44830 = G__44842;
chunk__44820_44831 = G__44843;
count__44821_44832 = G__44844;
i__44822_44833 = G__44845;
continue;
} else {
var dep_44846 = cljs.core.first.call(null,seq__44819_44840__$1);
topo_sort_helper_STAR_.call(null,dep_44846,(depth + (1)),state);

var G__44847 = cljs.core.next.call(null,seq__44819_44840__$1);
var G__44848 = null;
var G__44849 = (0);
var G__44850 = (0);
seq__44819_44830 = G__44847;
chunk__44820_44831 = G__44848;
count__44821_44832 = G__44849;
i__44822_44833 = G__44850;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44823){
var vec__44827 = p__44823;
var seq__44828 = cljs.core.seq.call(null,vec__44827);
var first__44829 = cljs.core.first.call(null,seq__44828);
var seq__44828__$1 = cljs.core.next.call(null,seq__44828);
var x = first__44829;
var xs = seq__44828__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44827,seq__44828,first__44829,seq__44828__$1,x,xs,get_deps__$1){
return (function (p1__44769_SHARP_){
return clojure.set.difference.call(null,p1__44769_SHARP_,x);
});})(vec__44827,seq__44828,first__44829,seq__44828__$1,x,xs,get_deps__$1))
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
var seq__44863 = cljs.core.seq.call(null,provides);
var chunk__44864 = null;
var count__44865 = (0);
var i__44866 = (0);
while(true){
if((i__44866 < count__44865)){
var prov = cljs.core._nth.call(null,chunk__44864,i__44866);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44867_44875 = cljs.core.seq.call(null,requires);
var chunk__44868_44876 = null;
var count__44869_44877 = (0);
var i__44870_44878 = (0);
while(true){
if((i__44870_44878 < count__44869_44877)){
var req_44879 = cljs.core._nth.call(null,chunk__44868_44876,i__44870_44878);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44879,prov);

var G__44880 = seq__44867_44875;
var G__44881 = chunk__44868_44876;
var G__44882 = count__44869_44877;
var G__44883 = (i__44870_44878 + (1));
seq__44867_44875 = G__44880;
chunk__44868_44876 = G__44881;
count__44869_44877 = G__44882;
i__44870_44878 = G__44883;
continue;
} else {
var temp__4657__auto___44884 = cljs.core.seq.call(null,seq__44867_44875);
if(temp__4657__auto___44884){
var seq__44867_44885__$1 = temp__4657__auto___44884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44867_44885__$1)){
var c__23426__auto___44886 = cljs.core.chunk_first.call(null,seq__44867_44885__$1);
var G__44887 = cljs.core.chunk_rest.call(null,seq__44867_44885__$1);
var G__44888 = c__23426__auto___44886;
var G__44889 = cljs.core.count.call(null,c__23426__auto___44886);
var G__44890 = (0);
seq__44867_44875 = G__44887;
chunk__44868_44876 = G__44888;
count__44869_44877 = G__44889;
i__44870_44878 = G__44890;
continue;
} else {
var req_44891 = cljs.core.first.call(null,seq__44867_44885__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44891,prov);

var G__44892 = cljs.core.next.call(null,seq__44867_44885__$1);
var G__44893 = null;
var G__44894 = (0);
var G__44895 = (0);
seq__44867_44875 = G__44892;
chunk__44868_44876 = G__44893;
count__44869_44877 = G__44894;
i__44870_44878 = G__44895;
continue;
}
} else {
}
}
break;
}

var G__44896 = seq__44863;
var G__44897 = chunk__44864;
var G__44898 = count__44865;
var G__44899 = (i__44866 + (1));
seq__44863 = G__44896;
chunk__44864 = G__44897;
count__44865 = G__44898;
i__44866 = G__44899;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44863);
if(temp__4657__auto__){
var seq__44863__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44863__$1)){
var c__23426__auto__ = cljs.core.chunk_first.call(null,seq__44863__$1);
var G__44900 = cljs.core.chunk_rest.call(null,seq__44863__$1);
var G__44901 = c__23426__auto__;
var G__44902 = cljs.core.count.call(null,c__23426__auto__);
var G__44903 = (0);
seq__44863 = G__44900;
chunk__44864 = G__44901;
count__44865 = G__44902;
i__44866 = G__44903;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44863__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44871_44904 = cljs.core.seq.call(null,requires);
var chunk__44872_44905 = null;
var count__44873_44906 = (0);
var i__44874_44907 = (0);
while(true){
if((i__44874_44907 < count__44873_44906)){
var req_44908 = cljs.core._nth.call(null,chunk__44872_44905,i__44874_44907);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44908,prov);

var G__44909 = seq__44871_44904;
var G__44910 = chunk__44872_44905;
var G__44911 = count__44873_44906;
var G__44912 = (i__44874_44907 + (1));
seq__44871_44904 = G__44909;
chunk__44872_44905 = G__44910;
count__44873_44906 = G__44911;
i__44874_44907 = G__44912;
continue;
} else {
var temp__4657__auto___44913__$1 = cljs.core.seq.call(null,seq__44871_44904);
if(temp__4657__auto___44913__$1){
var seq__44871_44914__$1 = temp__4657__auto___44913__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44871_44914__$1)){
var c__23426__auto___44915 = cljs.core.chunk_first.call(null,seq__44871_44914__$1);
var G__44916 = cljs.core.chunk_rest.call(null,seq__44871_44914__$1);
var G__44917 = c__23426__auto___44915;
var G__44918 = cljs.core.count.call(null,c__23426__auto___44915);
var G__44919 = (0);
seq__44871_44904 = G__44916;
chunk__44872_44905 = G__44917;
count__44873_44906 = G__44918;
i__44874_44907 = G__44919;
continue;
} else {
var req_44920 = cljs.core.first.call(null,seq__44871_44914__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44920,prov);

var G__44921 = cljs.core.next.call(null,seq__44871_44914__$1);
var G__44922 = null;
var G__44923 = (0);
var G__44924 = (0);
seq__44871_44904 = G__44921;
chunk__44872_44905 = G__44922;
count__44873_44906 = G__44923;
i__44874_44907 = G__44924;
continue;
}
} else {
}
}
break;
}

var G__44925 = cljs.core.next.call(null,seq__44863__$1);
var G__44926 = null;
var G__44927 = (0);
var G__44928 = (0);
seq__44863 = G__44925;
chunk__44864 = G__44926;
count__44865 = G__44927;
i__44866 = G__44928;
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
var seq__44933_44937 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44934_44938 = null;
var count__44935_44939 = (0);
var i__44936_44940 = (0);
while(true){
if((i__44936_44940 < count__44935_44939)){
var ns_44941 = cljs.core._nth.call(null,chunk__44934_44938,i__44936_44940);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44941);

var G__44942 = seq__44933_44937;
var G__44943 = chunk__44934_44938;
var G__44944 = count__44935_44939;
var G__44945 = (i__44936_44940 + (1));
seq__44933_44937 = G__44942;
chunk__44934_44938 = G__44943;
count__44935_44939 = G__44944;
i__44936_44940 = G__44945;
continue;
} else {
var temp__4657__auto___44946 = cljs.core.seq.call(null,seq__44933_44937);
if(temp__4657__auto___44946){
var seq__44933_44947__$1 = temp__4657__auto___44946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44933_44947__$1)){
var c__23426__auto___44948 = cljs.core.chunk_first.call(null,seq__44933_44947__$1);
var G__44949 = cljs.core.chunk_rest.call(null,seq__44933_44947__$1);
var G__44950 = c__23426__auto___44948;
var G__44951 = cljs.core.count.call(null,c__23426__auto___44948);
var G__44952 = (0);
seq__44933_44937 = G__44949;
chunk__44934_44938 = G__44950;
count__44935_44939 = G__44951;
i__44936_44940 = G__44952;
continue;
} else {
var ns_44953 = cljs.core.first.call(null,seq__44933_44947__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44953);

var G__44954 = cljs.core.next.call(null,seq__44933_44947__$1);
var G__44955 = null;
var G__44956 = (0);
var G__44957 = (0);
seq__44933_44937 = G__44954;
chunk__44934_44938 = G__44955;
count__44935_44939 = G__44956;
i__44936_44940 = G__44957;
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
var G__44958__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44959__i = 0, G__44959__a = new Array(arguments.length -  0);
while (G__44959__i < G__44959__a.length) {G__44959__a[G__44959__i] = arguments[G__44959__i + 0]; ++G__44959__i;}
  args = new cljs.core.IndexedSeq(G__44959__a,0);
} 
return G__44958__delegate.call(this,args);};
G__44958.cljs$lang$maxFixedArity = 0;
G__44958.cljs$lang$applyTo = (function (arglist__44960){
var args = cljs.core.seq(arglist__44960);
return G__44958__delegate(args);
});
G__44958.cljs$core$IFn$_invoke$arity$variadic = G__44958__delegate;
return G__44958;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44962 = cljs.core._EQ_;
var expr__44963 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44962.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44963))){
var path_parts = ((function (pred__44962,expr__44963){
return (function (p1__44961_SHARP_){
return clojure.string.split.call(null,p1__44961_SHARP_,/[\/\\]/);
});})(pred__44962,expr__44963))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__44962,expr__44963){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44965){if((e44965 instanceof Error)){
var e = e44965;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44965;

}
}})());
});
;})(path_parts,sep,root,pred__44962,expr__44963))
} else {
if(cljs.core.truth_(pred__44962.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44963))){
return ((function (pred__44962,expr__44963){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__44962,expr__44963){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__44962,expr__44963))
);

return deferred.addErrback(((function (deferred,pred__44962,expr__44963){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__44962,expr__44963))
);
});
;})(pred__44962,expr__44963))
} else {
return ((function (pred__44962,expr__44963){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44962,expr__44963))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44966,callback){
var map__44969 = p__44966;
var map__44969__$1 = ((((!((map__44969 == null)))?((((map__44969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44969):map__44969);
var file_msg = map__44969__$1;
var request_url = cljs.core.get.call(null,map__44969__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44969,map__44969__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44969,map__44969__$1,file_msg,request_url))
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
return (function (state_44993){
var state_val_44994 = (state_44993[(1)]);
if((state_val_44994 === (7))){
var inst_44989 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_44995_45015 = state_44993__$1;
(statearr_44995_45015[(2)] = inst_44989);

(statearr_44995_45015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (1))){
var state_44993__$1 = state_44993;
var statearr_44996_45016 = state_44993__$1;
(statearr_44996_45016[(2)] = null);

(statearr_44996_45016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (4))){
var inst_44973 = (state_44993[(7)]);
var inst_44973__$1 = (state_44993[(2)]);
var state_44993__$1 = (function (){var statearr_44997 = state_44993;
(statearr_44997[(7)] = inst_44973__$1);

return statearr_44997;
})();
if(cljs.core.truth_(inst_44973__$1)){
var statearr_44998_45017 = state_44993__$1;
(statearr_44998_45017[(1)] = (5));

} else {
var statearr_44999_45018 = state_44993__$1;
(statearr_44999_45018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (6))){
var state_44993__$1 = state_44993;
var statearr_45000_45019 = state_44993__$1;
(statearr_45000_45019[(2)] = null);

(statearr_45000_45019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (3))){
var inst_44991 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44993__$1,inst_44991);
} else {
if((state_val_44994 === (2))){
var state_44993__$1 = state_44993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44993__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44994 === (11))){
var inst_44985 = (state_44993[(2)]);
var state_44993__$1 = (function (){var statearr_45001 = state_44993;
(statearr_45001[(8)] = inst_44985);

return statearr_45001;
})();
var statearr_45002_45020 = state_44993__$1;
(statearr_45002_45020[(2)] = null);

(statearr_45002_45020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (9))){
var inst_44977 = (state_44993[(9)]);
var inst_44979 = (state_44993[(10)]);
var inst_44981 = inst_44979.call(null,inst_44977);
var state_44993__$1 = state_44993;
var statearr_45003_45021 = state_44993__$1;
(statearr_45003_45021[(2)] = inst_44981);

(statearr_45003_45021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (5))){
var inst_44973 = (state_44993[(7)]);
var inst_44975 = figwheel.client.file_reloading.blocking_load.call(null,inst_44973);
var state_44993__$1 = state_44993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44993__$1,(8),inst_44975);
} else {
if((state_val_44994 === (10))){
var inst_44977 = (state_44993[(9)]);
var inst_44983 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44977);
var state_44993__$1 = state_44993;
var statearr_45004_45022 = state_44993__$1;
(statearr_45004_45022[(2)] = inst_44983);

(statearr_45004_45022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (8))){
var inst_44973 = (state_44993[(7)]);
var inst_44979 = (state_44993[(10)]);
var inst_44977 = (state_44993[(2)]);
var inst_44978 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44979__$1 = cljs.core.get.call(null,inst_44978,inst_44973);
var state_44993__$1 = (function (){var statearr_45005 = state_44993;
(statearr_45005[(9)] = inst_44977);

(statearr_45005[(10)] = inst_44979__$1);

return statearr_45005;
})();
if(cljs.core.truth_(inst_44979__$1)){
var statearr_45006_45023 = state_44993__$1;
(statearr_45006_45023[(1)] = (9));

} else {
var statearr_45007_45024 = state_44993__$1;
(statearr_45007_45024[(1)] = (10));

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
var statearr_45011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45011[(0)] = figwheel$client$file_reloading$state_machine__32305__auto__);

(statearr_45011[(1)] = (1));

return statearr_45011;
});
var figwheel$client$file_reloading$state_machine__32305__auto____1 = (function (state_44993){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_44993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e45012){if((e45012 instanceof Object)){
var ex__32308__auto__ = e45012;
var statearr_45013_45025 = state_44993;
(statearr_45013_45025[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45026 = state_44993;
state_44993 = G__45026;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32305__auto__ = function(state_44993){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32305__auto____1.call(this,state_44993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32305__auto____0;
figwheel$client$file_reloading$state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32305__auto____1;
return figwheel$client$file_reloading$state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__))
})();
var state__32418__auto__ = (function (){var statearr_45014 = f__32417__auto__.call(null);
(statearr_45014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_45014;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45027,callback){
var map__45030 = p__45027;
var map__45030__$1 = ((((!((map__45030 == null)))?((((map__45030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45030):map__45030);
var file_msg = map__45030__$1;
var namespace = cljs.core.get.call(null,map__45030__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45030,map__45030__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45030,map__45030__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45032){
var map__45035 = p__45032;
var map__45035__$1 = ((((!((map__45035 == null)))?((((map__45035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45035):map__45035);
var file_msg = map__45035__$1;
var namespace = cljs.core.get.call(null,map__45035__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45037,callback){
var map__45040 = p__45037;
var map__45040__$1 = ((((!((map__45040 == null)))?((((map__45040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45040):map__45040);
var file_msg = map__45040__$1;
var request_url = cljs.core.get.call(null,map__45040__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45040__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32416__auto___45144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto___45144,out){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto___45144,out){
return (function (state_45126){
var state_val_45127 = (state_45126[(1)]);
if((state_val_45127 === (1))){
var inst_45100 = cljs.core.seq.call(null,files);
var inst_45101 = cljs.core.first.call(null,inst_45100);
var inst_45102 = cljs.core.next.call(null,inst_45100);
var inst_45103 = files;
var state_45126__$1 = (function (){var statearr_45128 = state_45126;
(statearr_45128[(7)] = inst_45101);

(statearr_45128[(8)] = inst_45103);

(statearr_45128[(9)] = inst_45102);

return statearr_45128;
})();
var statearr_45129_45145 = state_45126__$1;
(statearr_45129_45145[(2)] = null);

(statearr_45129_45145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (2))){
var inst_45103 = (state_45126[(8)]);
var inst_45109 = (state_45126[(10)]);
var inst_45108 = cljs.core.seq.call(null,inst_45103);
var inst_45109__$1 = cljs.core.first.call(null,inst_45108);
var inst_45110 = cljs.core.next.call(null,inst_45108);
var inst_45111 = (inst_45109__$1 == null);
var inst_45112 = cljs.core.not.call(null,inst_45111);
var state_45126__$1 = (function (){var statearr_45130 = state_45126;
(statearr_45130[(11)] = inst_45110);

(statearr_45130[(10)] = inst_45109__$1);

return statearr_45130;
})();
if(inst_45112){
var statearr_45131_45146 = state_45126__$1;
(statearr_45131_45146[(1)] = (4));

} else {
var statearr_45132_45147 = state_45126__$1;
(statearr_45132_45147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (3))){
var inst_45124 = (state_45126[(2)]);
var state_45126__$1 = state_45126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45126__$1,inst_45124);
} else {
if((state_val_45127 === (4))){
var inst_45109 = (state_45126[(10)]);
var inst_45114 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45109);
var state_45126__$1 = state_45126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45126__$1,(7),inst_45114);
} else {
if((state_val_45127 === (5))){
var inst_45120 = cljs.core.async.close_BANG_.call(null,out);
var state_45126__$1 = state_45126;
var statearr_45133_45148 = state_45126__$1;
(statearr_45133_45148[(2)] = inst_45120);

(statearr_45133_45148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (6))){
var inst_45122 = (state_45126[(2)]);
var state_45126__$1 = state_45126;
var statearr_45134_45149 = state_45126__$1;
(statearr_45134_45149[(2)] = inst_45122);

(statearr_45134_45149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45127 === (7))){
var inst_45110 = (state_45126[(11)]);
var inst_45116 = (state_45126[(2)]);
var inst_45117 = cljs.core.async.put_BANG_.call(null,out,inst_45116);
var inst_45103 = inst_45110;
var state_45126__$1 = (function (){var statearr_45135 = state_45126;
(statearr_45135[(12)] = inst_45117);

(statearr_45135[(8)] = inst_45103);

return statearr_45135;
})();
var statearr_45136_45150 = state_45126__$1;
(statearr_45136_45150[(2)] = null);

(statearr_45136_45150[(1)] = (2));


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
});})(c__32416__auto___45144,out))
;
return ((function (switch__32304__auto__,c__32416__auto___45144,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____0 = (function (){
var statearr_45140 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45140[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__);

(statearr_45140[(1)] = (1));

return statearr_45140;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____1 = (function (state_45126){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_45126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e45141){if((e45141 instanceof Object)){
var ex__32308__auto__ = e45141;
var statearr_45142_45151 = state_45126;
(statearr_45142_45151[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45152 = state_45126;
state_45126 = G__45152;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__ = function(state_45126){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____1.call(this,state_45126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto___45144,out))
})();
var state__32418__auto__ = (function (){var statearr_45143 = f__32417__auto__.call(null);
(statearr_45143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto___45144);

return statearr_45143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto___45144,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45153,opts){
var map__45157 = p__45153;
var map__45157__$1 = ((((!((map__45157 == null)))?((((map__45157.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45157.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45157):map__45157);
var eval_body__$1 = cljs.core.get.call(null,map__45157__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45157__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e45159){var e = e45159;
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
return (function (p1__45160_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45160_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__45169){
var vec__45170 = p__45169;
var k = cljs.core.nth.call(null,vec__45170,(0),null);
var v = cljs.core.nth.call(null,vec__45170,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45173){
var vec__45174 = p__45173;
var k = cljs.core.nth.call(null,vec__45174,(0),null);
var v = cljs.core.nth.call(null,vec__45174,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45180,p__45181){
var map__45428 = p__45180;
var map__45428__$1 = ((((!((map__45428 == null)))?((((map__45428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45428):map__45428);
var opts = map__45428__$1;
var before_jsload = cljs.core.get.call(null,map__45428__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45428__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45428__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45429 = p__45181;
var map__45429__$1 = ((((!((map__45429 == null)))?((((map__45429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45429):map__45429);
var msg = map__45429__$1;
var files = cljs.core.get.call(null,map__45429__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45429__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45429__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32416__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32417__auto__ = (function (){var switch__32304__auto__ = ((function (c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45582){
var state_val_45583 = (state_45582[(1)]);
if((state_val_45583 === (7))){
var inst_45444 = (state_45582[(7)]);
var inst_45443 = (state_45582[(8)]);
var inst_45445 = (state_45582[(9)]);
var inst_45446 = (state_45582[(10)]);
var inst_45451 = cljs.core._nth.call(null,inst_45444,inst_45446);
var inst_45452 = figwheel.client.file_reloading.eval_body.call(null,inst_45451,opts);
var inst_45453 = (inst_45446 + (1));
var tmp45584 = inst_45444;
var tmp45585 = inst_45443;
var tmp45586 = inst_45445;
var inst_45443__$1 = tmp45585;
var inst_45444__$1 = tmp45584;
var inst_45445__$1 = tmp45586;
var inst_45446__$1 = inst_45453;
var state_45582__$1 = (function (){var statearr_45587 = state_45582;
(statearr_45587[(7)] = inst_45444__$1);

(statearr_45587[(8)] = inst_45443__$1);

(statearr_45587[(9)] = inst_45445__$1);

(statearr_45587[(11)] = inst_45452);

(statearr_45587[(10)] = inst_45446__$1);

return statearr_45587;
})();
var statearr_45588_45674 = state_45582__$1;
(statearr_45588_45674[(2)] = null);

(statearr_45588_45674[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (20))){
var inst_45486 = (state_45582[(12)]);
var inst_45494 = figwheel.client.file_reloading.sort_files.call(null,inst_45486);
var state_45582__$1 = state_45582;
var statearr_45589_45675 = state_45582__$1;
(statearr_45589_45675[(2)] = inst_45494);

(statearr_45589_45675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (27))){
var state_45582__$1 = state_45582;
var statearr_45590_45676 = state_45582__$1;
(statearr_45590_45676[(2)] = null);

(statearr_45590_45676[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (1))){
var inst_45435 = (state_45582[(13)]);
var inst_45432 = before_jsload.call(null,files);
var inst_45433 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45434 = (function (){return ((function (inst_45435,inst_45432,inst_45433,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45177_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45177_SHARP_);
});
;})(inst_45435,inst_45432,inst_45433,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45435__$1 = cljs.core.filter.call(null,inst_45434,files);
var inst_45436 = cljs.core.not_empty.call(null,inst_45435__$1);
var state_45582__$1 = (function (){var statearr_45591 = state_45582;
(statearr_45591[(14)] = inst_45432);

(statearr_45591[(15)] = inst_45433);

(statearr_45591[(13)] = inst_45435__$1);

return statearr_45591;
})();
if(cljs.core.truth_(inst_45436)){
var statearr_45592_45677 = state_45582__$1;
(statearr_45592_45677[(1)] = (2));

} else {
var statearr_45593_45678 = state_45582__$1;
(statearr_45593_45678[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (24))){
var state_45582__$1 = state_45582;
var statearr_45594_45679 = state_45582__$1;
(statearr_45594_45679[(2)] = null);

(statearr_45594_45679[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (39))){
var inst_45536 = (state_45582[(16)]);
var state_45582__$1 = state_45582;
var statearr_45595_45680 = state_45582__$1;
(statearr_45595_45680[(2)] = inst_45536);

(statearr_45595_45680[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (46))){
var inst_45577 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45596_45681 = state_45582__$1;
(statearr_45596_45681[(2)] = inst_45577);

(statearr_45596_45681[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (4))){
var inst_45480 = (state_45582[(2)]);
var inst_45481 = cljs.core.List.EMPTY;
var inst_45482 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45481);
var inst_45483 = (function (){return ((function (inst_45480,inst_45481,inst_45482,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45178_SHARP_){
var and__22603__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45178_SHARP_);
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45178_SHARP_));
} else {
return and__22603__auto__;
}
});
;})(inst_45480,inst_45481,inst_45482,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45484 = cljs.core.filter.call(null,inst_45483,files);
var inst_45485 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45486 = cljs.core.concat.call(null,inst_45484,inst_45485);
var state_45582__$1 = (function (){var statearr_45597 = state_45582;
(statearr_45597[(17)] = inst_45482);

(statearr_45597[(12)] = inst_45486);

(statearr_45597[(18)] = inst_45480);

return statearr_45597;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45598_45682 = state_45582__$1;
(statearr_45598_45682[(1)] = (16));

} else {
var statearr_45599_45683 = state_45582__$1;
(statearr_45599_45683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (15))){
var inst_45470 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45600_45684 = state_45582__$1;
(statearr_45600_45684[(2)] = inst_45470);

(statearr_45600_45684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (21))){
var inst_45496 = (state_45582[(19)]);
var inst_45496__$1 = (state_45582[(2)]);
var inst_45497 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45496__$1);
var state_45582__$1 = (function (){var statearr_45601 = state_45582;
(statearr_45601[(19)] = inst_45496__$1);

return statearr_45601;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45582__$1,(22),inst_45497);
} else {
if((state_val_45583 === (31))){
var inst_45580 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45582__$1,inst_45580);
} else {
if((state_val_45583 === (32))){
var inst_45536 = (state_45582[(16)]);
var inst_45541 = inst_45536.cljs$lang$protocol_mask$partition0$;
var inst_45542 = (inst_45541 & (64));
var inst_45543 = inst_45536.cljs$core$ISeq$;
var inst_45544 = (inst_45542) || (inst_45543);
var state_45582__$1 = state_45582;
if(cljs.core.truth_(inst_45544)){
var statearr_45602_45685 = state_45582__$1;
(statearr_45602_45685[(1)] = (35));

} else {
var statearr_45603_45686 = state_45582__$1;
(statearr_45603_45686[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (40))){
var inst_45557 = (state_45582[(20)]);
var inst_45556 = (state_45582[(2)]);
var inst_45557__$1 = cljs.core.get.call(null,inst_45556,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45558 = cljs.core.get.call(null,inst_45556,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45559 = cljs.core.not_empty.call(null,inst_45557__$1);
var state_45582__$1 = (function (){var statearr_45604 = state_45582;
(statearr_45604[(20)] = inst_45557__$1);

(statearr_45604[(21)] = inst_45558);

return statearr_45604;
})();
if(cljs.core.truth_(inst_45559)){
var statearr_45605_45687 = state_45582__$1;
(statearr_45605_45687[(1)] = (41));

} else {
var statearr_45606_45688 = state_45582__$1;
(statearr_45606_45688[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (33))){
var state_45582__$1 = state_45582;
var statearr_45607_45689 = state_45582__$1;
(statearr_45607_45689[(2)] = false);

(statearr_45607_45689[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (13))){
var inst_45456 = (state_45582[(22)]);
var inst_45460 = cljs.core.chunk_first.call(null,inst_45456);
var inst_45461 = cljs.core.chunk_rest.call(null,inst_45456);
var inst_45462 = cljs.core.count.call(null,inst_45460);
var inst_45443 = inst_45461;
var inst_45444 = inst_45460;
var inst_45445 = inst_45462;
var inst_45446 = (0);
var state_45582__$1 = (function (){var statearr_45608 = state_45582;
(statearr_45608[(7)] = inst_45444);

(statearr_45608[(8)] = inst_45443);

(statearr_45608[(9)] = inst_45445);

(statearr_45608[(10)] = inst_45446);

return statearr_45608;
})();
var statearr_45609_45690 = state_45582__$1;
(statearr_45609_45690[(2)] = null);

(statearr_45609_45690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (22))){
var inst_45500 = (state_45582[(23)]);
var inst_45499 = (state_45582[(24)]);
var inst_45496 = (state_45582[(19)]);
var inst_45504 = (state_45582[(25)]);
var inst_45499__$1 = (state_45582[(2)]);
var inst_45500__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45499__$1);
var inst_45501 = (function (){var all_files = inst_45496;
var res_SINGLEQUOTE_ = inst_45499__$1;
var res = inst_45500__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45500,inst_45499,inst_45496,inst_45504,inst_45499__$1,inst_45500__$1,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45179_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45179_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45500,inst_45499,inst_45496,inst_45504,inst_45499__$1,inst_45500__$1,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45502 = cljs.core.filter.call(null,inst_45501,inst_45499__$1);
var inst_45503 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45504__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45503);
var inst_45505 = cljs.core.not_empty.call(null,inst_45504__$1);
var state_45582__$1 = (function (){var statearr_45610 = state_45582;
(statearr_45610[(23)] = inst_45500__$1);

(statearr_45610[(24)] = inst_45499__$1);

(statearr_45610[(26)] = inst_45502);

(statearr_45610[(25)] = inst_45504__$1);

return statearr_45610;
})();
if(cljs.core.truth_(inst_45505)){
var statearr_45611_45691 = state_45582__$1;
(statearr_45611_45691[(1)] = (23));

} else {
var statearr_45612_45692 = state_45582__$1;
(statearr_45612_45692[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (36))){
var state_45582__$1 = state_45582;
var statearr_45613_45693 = state_45582__$1;
(statearr_45613_45693[(2)] = false);

(statearr_45613_45693[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (41))){
var inst_45557 = (state_45582[(20)]);
var inst_45561 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45562 = cljs.core.map.call(null,inst_45561,inst_45557);
var inst_45563 = cljs.core.pr_str.call(null,inst_45562);
var inst_45564 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_45563)].join('');
var inst_45565 = figwheel.client.utils.log.call(null,inst_45564);
var state_45582__$1 = state_45582;
var statearr_45614_45694 = state_45582__$1;
(statearr_45614_45694[(2)] = inst_45565);

(statearr_45614_45694[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (43))){
var inst_45558 = (state_45582[(21)]);
var inst_45568 = (state_45582[(2)]);
var inst_45569 = cljs.core.not_empty.call(null,inst_45558);
var state_45582__$1 = (function (){var statearr_45615 = state_45582;
(statearr_45615[(27)] = inst_45568);

return statearr_45615;
})();
if(cljs.core.truth_(inst_45569)){
var statearr_45616_45695 = state_45582__$1;
(statearr_45616_45695[(1)] = (44));

} else {
var statearr_45617_45696 = state_45582__$1;
(statearr_45617_45696[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (29))){
var inst_45500 = (state_45582[(23)]);
var inst_45499 = (state_45582[(24)]);
var inst_45536 = (state_45582[(16)]);
var inst_45496 = (state_45582[(19)]);
var inst_45502 = (state_45582[(26)]);
var inst_45504 = (state_45582[(25)]);
var inst_45532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45535 = (function (){var all_files = inst_45496;
var res_SINGLEQUOTE_ = inst_45499;
var res = inst_45500;
var files_not_loaded = inst_45502;
var dependencies_that_loaded = inst_45504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45536,inst_45496,inst_45502,inst_45504,inst_45532,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45534){
var map__45618 = p__45534;
var map__45618__$1 = ((((!((map__45618 == null)))?((((map__45618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45618):map__45618);
var namespace = cljs.core.get.call(null,map__45618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45536,inst_45496,inst_45502,inst_45504,inst_45532,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45536__$1 = cljs.core.group_by.call(null,inst_45535,inst_45502);
var inst_45538 = (inst_45536__$1 == null);
var inst_45539 = cljs.core.not.call(null,inst_45538);
var state_45582__$1 = (function (){var statearr_45620 = state_45582;
(statearr_45620[(16)] = inst_45536__$1);

(statearr_45620[(28)] = inst_45532);

return statearr_45620;
})();
if(inst_45539){
var statearr_45621_45697 = state_45582__$1;
(statearr_45621_45697[(1)] = (32));

} else {
var statearr_45622_45698 = state_45582__$1;
(statearr_45622_45698[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (44))){
var inst_45558 = (state_45582[(21)]);
var inst_45571 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45558);
var inst_45572 = cljs.core.pr_str.call(null,inst_45571);
var inst_45573 = [cljs.core.str("not required: "),cljs.core.str(inst_45572)].join('');
var inst_45574 = figwheel.client.utils.log.call(null,inst_45573);
var state_45582__$1 = state_45582;
var statearr_45623_45699 = state_45582__$1;
(statearr_45623_45699[(2)] = inst_45574);

(statearr_45623_45699[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (6))){
var inst_45477 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45624_45700 = state_45582__$1;
(statearr_45624_45700[(2)] = inst_45477);

(statearr_45624_45700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (28))){
var inst_45502 = (state_45582[(26)]);
var inst_45529 = (state_45582[(2)]);
var inst_45530 = cljs.core.not_empty.call(null,inst_45502);
var state_45582__$1 = (function (){var statearr_45625 = state_45582;
(statearr_45625[(29)] = inst_45529);

return statearr_45625;
})();
if(cljs.core.truth_(inst_45530)){
var statearr_45626_45701 = state_45582__$1;
(statearr_45626_45701[(1)] = (29));

} else {
var statearr_45627_45702 = state_45582__$1;
(statearr_45627_45702[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (25))){
var inst_45500 = (state_45582[(23)]);
var inst_45516 = (state_45582[(2)]);
var inst_45517 = cljs.core.not_empty.call(null,inst_45500);
var state_45582__$1 = (function (){var statearr_45628 = state_45582;
(statearr_45628[(30)] = inst_45516);

return statearr_45628;
})();
if(cljs.core.truth_(inst_45517)){
var statearr_45629_45703 = state_45582__$1;
(statearr_45629_45703[(1)] = (26));

} else {
var statearr_45630_45704 = state_45582__$1;
(statearr_45630_45704[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (34))){
var inst_45551 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
if(cljs.core.truth_(inst_45551)){
var statearr_45631_45705 = state_45582__$1;
(statearr_45631_45705[(1)] = (38));

} else {
var statearr_45632_45706 = state_45582__$1;
(statearr_45632_45706[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (17))){
var state_45582__$1 = state_45582;
var statearr_45633_45707 = state_45582__$1;
(statearr_45633_45707[(2)] = recompile_dependents);

(statearr_45633_45707[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (3))){
var state_45582__$1 = state_45582;
var statearr_45634_45708 = state_45582__$1;
(statearr_45634_45708[(2)] = null);

(statearr_45634_45708[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (12))){
var inst_45473 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45635_45709 = state_45582__$1;
(statearr_45635_45709[(2)] = inst_45473);

(statearr_45635_45709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (2))){
var inst_45435 = (state_45582[(13)]);
var inst_45442 = cljs.core.seq.call(null,inst_45435);
var inst_45443 = inst_45442;
var inst_45444 = null;
var inst_45445 = (0);
var inst_45446 = (0);
var state_45582__$1 = (function (){var statearr_45636 = state_45582;
(statearr_45636[(7)] = inst_45444);

(statearr_45636[(8)] = inst_45443);

(statearr_45636[(9)] = inst_45445);

(statearr_45636[(10)] = inst_45446);

return statearr_45636;
})();
var statearr_45637_45710 = state_45582__$1;
(statearr_45637_45710[(2)] = null);

(statearr_45637_45710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (23))){
var inst_45500 = (state_45582[(23)]);
var inst_45499 = (state_45582[(24)]);
var inst_45496 = (state_45582[(19)]);
var inst_45502 = (state_45582[(26)]);
var inst_45504 = (state_45582[(25)]);
var inst_45507 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45509 = (function (){var all_files = inst_45496;
var res_SINGLEQUOTE_ = inst_45499;
var res = inst_45500;
var files_not_loaded = inst_45502;
var dependencies_that_loaded = inst_45504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45496,inst_45502,inst_45504,inst_45507,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45508){
var map__45638 = p__45508;
var map__45638__$1 = ((((!((map__45638 == null)))?((((map__45638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45638):map__45638);
var request_url = cljs.core.get.call(null,map__45638__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45496,inst_45502,inst_45504,inst_45507,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45510 = cljs.core.reverse.call(null,inst_45504);
var inst_45511 = cljs.core.map.call(null,inst_45509,inst_45510);
var inst_45512 = cljs.core.pr_str.call(null,inst_45511);
var inst_45513 = figwheel.client.utils.log.call(null,inst_45512);
var state_45582__$1 = (function (){var statearr_45640 = state_45582;
(statearr_45640[(31)] = inst_45507);

return statearr_45640;
})();
var statearr_45641_45711 = state_45582__$1;
(statearr_45641_45711[(2)] = inst_45513);

(statearr_45641_45711[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (35))){
var state_45582__$1 = state_45582;
var statearr_45642_45712 = state_45582__$1;
(statearr_45642_45712[(2)] = true);

(statearr_45642_45712[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (19))){
var inst_45486 = (state_45582[(12)]);
var inst_45492 = figwheel.client.file_reloading.expand_files.call(null,inst_45486);
var state_45582__$1 = state_45582;
var statearr_45643_45713 = state_45582__$1;
(statearr_45643_45713[(2)] = inst_45492);

(statearr_45643_45713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (11))){
var state_45582__$1 = state_45582;
var statearr_45644_45714 = state_45582__$1;
(statearr_45644_45714[(2)] = null);

(statearr_45644_45714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (9))){
var inst_45475 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45645_45715 = state_45582__$1;
(statearr_45645_45715[(2)] = inst_45475);

(statearr_45645_45715[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (5))){
var inst_45445 = (state_45582[(9)]);
var inst_45446 = (state_45582[(10)]);
var inst_45448 = (inst_45446 < inst_45445);
var inst_45449 = inst_45448;
var state_45582__$1 = state_45582;
if(cljs.core.truth_(inst_45449)){
var statearr_45646_45716 = state_45582__$1;
(statearr_45646_45716[(1)] = (7));

} else {
var statearr_45647_45717 = state_45582__$1;
(statearr_45647_45717[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (14))){
var inst_45456 = (state_45582[(22)]);
var inst_45465 = cljs.core.first.call(null,inst_45456);
var inst_45466 = figwheel.client.file_reloading.eval_body.call(null,inst_45465,opts);
var inst_45467 = cljs.core.next.call(null,inst_45456);
var inst_45443 = inst_45467;
var inst_45444 = null;
var inst_45445 = (0);
var inst_45446 = (0);
var state_45582__$1 = (function (){var statearr_45648 = state_45582;
(statearr_45648[(7)] = inst_45444);

(statearr_45648[(8)] = inst_45443);

(statearr_45648[(9)] = inst_45445);

(statearr_45648[(32)] = inst_45466);

(statearr_45648[(10)] = inst_45446);

return statearr_45648;
})();
var statearr_45649_45718 = state_45582__$1;
(statearr_45649_45718[(2)] = null);

(statearr_45649_45718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (45))){
var state_45582__$1 = state_45582;
var statearr_45650_45719 = state_45582__$1;
(statearr_45650_45719[(2)] = null);

(statearr_45650_45719[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (26))){
var inst_45500 = (state_45582[(23)]);
var inst_45499 = (state_45582[(24)]);
var inst_45496 = (state_45582[(19)]);
var inst_45502 = (state_45582[(26)]);
var inst_45504 = (state_45582[(25)]);
var inst_45519 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45521 = (function (){var all_files = inst_45496;
var res_SINGLEQUOTE_ = inst_45499;
var res = inst_45500;
var files_not_loaded = inst_45502;
var dependencies_that_loaded = inst_45504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45496,inst_45502,inst_45504,inst_45519,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45520){
var map__45651 = p__45520;
var map__45651__$1 = ((((!((map__45651 == null)))?((((map__45651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45651):map__45651);
var namespace = cljs.core.get.call(null,map__45651__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45651__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45496,inst_45502,inst_45504,inst_45519,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45522 = cljs.core.map.call(null,inst_45521,inst_45500);
var inst_45523 = cljs.core.pr_str.call(null,inst_45522);
var inst_45524 = figwheel.client.utils.log.call(null,inst_45523);
var inst_45525 = (function (){var all_files = inst_45496;
var res_SINGLEQUOTE_ = inst_45499;
var res = inst_45500;
var files_not_loaded = inst_45502;
var dependencies_that_loaded = inst_45504;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45496,inst_45502,inst_45504,inst_45519,inst_45521,inst_45522,inst_45523,inst_45524,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45500,inst_45499,inst_45496,inst_45502,inst_45504,inst_45519,inst_45521,inst_45522,inst_45523,inst_45524,state_val_45583,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45526 = setTimeout(inst_45525,(10));
var state_45582__$1 = (function (){var statearr_45653 = state_45582;
(statearr_45653[(33)] = inst_45519);

(statearr_45653[(34)] = inst_45524);

return statearr_45653;
})();
var statearr_45654_45720 = state_45582__$1;
(statearr_45654_45720[(2)] = inst_45526);

(statearr_45654_45720[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (16))){
var state_45582__$1 = state_45582;
var statearr_45655_45721 = state_45582__$1;
(statearr_45655_45721[(2)] = reload_dependents);

(statearr_45655_45721[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (38))){
var inst_45536 = (state_45582[(16)]);
var inst_45553 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45536);
var state_45582__$1 = state_45582;
var statearr_45656_45722 = state_45582__$1;
(statearr_45656_45722[(2)] = inst_45553);

(statearr_45656_45722[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (30))){
var state_45582__$1 = state_45582;
var statearr_45657_45723 = state_45582__$1;
(statearr_45657_45723[(2)] = null);

(statearr_45657_45723[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (10))){
var inst_45456 = (state_45582[(22)]);
var inst_45458 = cljs.core.chunked_seq_QMARK_.call(null,inst_45456);
var state_45582__$1 = state_45582;
if(inst_45458){
var statearr_45658_45724 = state_45582__$1;
(statearr_45658_45724[(1)] = (13));

} else {
var statearr_45659_45725 = state_45582__$1;
(statearr_45659_45725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (18))){
var inst_45490 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
if(cljs.core.truth_(inst_45490)){
var statearr_45660_45726 = state_45582__$1;
(statearr_45660_45726[(1)] = (19));

} else {
var statearr_45661_45727 = state_45582__$1;
(statearr_45661_45727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (42))){
var state_45582__$1 = state_45582;
var statearr_45662_45728 = state_45582__$1;
(statearr_45662_45728[(2)] = null);

(statearr_45662_45728[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (37))){
var inst_45548 = (state_45582[(2)]);
var state_45582__$1 = state_45582;
var statearr_45663_45729 = state_45582__$1;
(statearr_45663_45729[(2)] = inst_45548);

(statearr_45663_45729[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45583 === (8))){
var inst_45443 = (state_45582[(8)]);
var inst_45456 = (state_45582[(22)]);
var inst_45456__$1 = cljs.core.seq.call(null,inst_45443);
var state_45582__$1 = (function (){var statearr_45664 = state_45582;
(statearr_45664[(22)] = inst_45456__$1);

return statearr_45664;
})();
if(inst_45456__$1){
var statearr_45665_45730 = state_45582__$1;
(statearr_45665_45730[(1)] = (10));

} else {
var statearr_45666_45731 = state_45582__$1;
(statearr_45666_45731[(1)] = (11));

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
});})(c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32304__auto__,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____0 = (function (){
var statearr_45670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45670[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__);

(statearr_45670[(1)] = (1));

return statearr_45670;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____1 = (function (state_45582){
while(true){
var ret_value__32306__auto__ = (function (){try{while(true){
var result__32307__auto__ = switch__32304__auto__.call(null,state_45582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32307__auto__;
}
break;
}
}catch (e45671){if((e45671 instanceof Object)){
var ex__32308__auto__ = e45671;
var statearr_45672_45732 = state_45582;
(statearr_45672_45732[(5)] = ex__32308__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32306__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45733 = state_45582;
state_45582 = G__45733;
continue;
} else {
return ret_value__32306__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__ = function(state_45582){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____1.call(this,state_45582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32305__auto__;
})()
;})(switch__32304__auto__,c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32418__auto__ = (function (){var statearr_45673 = f__32417__auto__.call(null);
(statearr_45673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32416__auto__);

return statearr_45673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32418__auto__);
});})(c__32416__auto__,map__45428,map__45428__$1,opts,before_jsload,on_jsload,reload_dependents,map__45429,map__45429__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32416__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45736,link){
var map__45739 = p__45736;
var map__45739__$1 = ((((!((map__45739 == null)))?((((map__45739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45739):map__45739);
var file = cljs.core.get.call(null,map__45739__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__45739,map__45739__$1,file){
return (function (p1__45734_SHARP_,p2__45735_SHARP_){
if(cljs.core._EQ_.call(null,p1__45734_SHARP_,p2__45735_SHARP_)){
return p1__45734_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__45739,map__45739__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45745){
var map__45746 = p__45745;
var map__45746__$1 = ((((!((map__45746 == null)))?((((map__45746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45746):map__45746);
var match_length = cljs.core.get.call(null,map__45746__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45746__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45741_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45741_SHARP_);
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
var args45748 = [];
var len__23690__auto___45751 = arguments.length;
var i__23691__auto___45752 = (0);
while(true){
if((i__23691__auto___45752 < len__23690__auto___45751)){
args45748.push((arguments[i__23691__auto___45752]));

var G__45753 = (i__23691__auto___45752 + (1));
i__23691__auto___45752 = G__45753;
continue;
} else {
}
break;
}

var G__45750 = args45748.length;
switch (G__45750) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45748.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45755_SHARP_,p2__45756_SHARP_){
return cljs.core.assoc.call(null,p1__45755_SHARP_,cljs.core.get.call(null,p2__45756_SHARP_,key),p2__45756_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45757){
var map__45760 = p__45757;
var map__45760__$1 = ((((!((map__45760 == null)))?((((map__45760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45760):map__45760);
var f_data = map__45760__$1;
var file = cljs.core.get.call(null,map__45760__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45762,files_msg){
var map__45769 = p__45762;
var map__45769__$1 = ((((!((map__45769 == null)))?((((map__45769.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45769.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45769):map__45769);
var opts = map__45769__$1;
var on_cssload = cljs.core.get.call(null,map__45769__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45771_45775 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__45772_45776 = null;
var count__45773_45777 = (0);
var i__45774_45778 = (0);
while(true){
if((i__45774_45778 < count__45773_45777)){
var f_45779 = cljs.core._nth.call(null,chunk__45772_45776,i__45774_45778);
figwheel.client.file_reloading.reload_css_file.call(null,f_45779);

var G__45780 = seq__45771_45775;
var G__45781 = chunk__45772_45776;
var G__45782 = count__45773_45777;
var G__45783 = (i__45774_45778 + (1));
seq__45771_45775 = G__45780;
chunk__45772_45776 = G__45781;
count__45773_45777 = G__45782;
i__45774_45778 = G__45783;
continue;
} else {
var temp__4657__auto___45784 = cljs.core.seq.call(null,seq__45771_45775);
if(temp__4657__auto___45784){
var seq__45771_45785__$1 = temp__4657__auto___45784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45771_45785__$1)){
var c__23426__auto___45786 = cljs.core.chunk_first.call(null,seq__45771_45785__$1);
var G__45787 = cljs.core.chunk_rest.call(null,seq__45771_45785__$1);
var G__45788 = c__23426__auto___45786;
var G__45789 = cljs.core.count.call(null,c__23426__auto___45786);
var G__45790 = (0);
seq__45771_45775 = G__45787;
chunk__45772_45776 = G__45788;
count__45773_45777 = G__45789;
i__45774_45778 = G__45790;
continue;
} else {
var f_45791 = cljs.core.first.call(null,seq__45771_45785__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45791);

var G__45792 = cljs.core.next.call(null,seq__45771_45785__$1);
var G__45793 = null;
var G__45794 = (0);
var G__45795 = (0);
seq__45771_45775 = G__45792;
chunk__45772_45776 = G__45793;
count__45773_45777 = G__45794;
i__45774_45778 = G__45795;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__45769,map__45769__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__45769,map__45769__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1465451190781