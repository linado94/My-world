(window["aioseopjsonp"]=window["aioseopjsonp"]||[]).push([["redirects-Redirects-vue","redirects-lite-redirects-Activate-vue","redirects-lite-redirects-Blur-vue","redirects-lite-redirects-Redirects-vue","redirects-lite-redirects-Update-vue"],{"75f1":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-redirects-main"},[t.shouldShowMain?s("redirects"):t._e(),t.shouldShowActivate?s("activate"):t._e(),t.shouldShowUpdate?s("update"):t._e(),t.shouldShowLite?s("lite"):t._e()],1)},i=[],n=s("5530"),a=s("2f62"),o=s("a5f3"),l=s("d42e"),d=s("8be1"),c=s("9c0e"),u={mixins:[c["a"]],components:{Activate:o["default"],Lite:l["default"],Redirects:l["default"],Update:d["default"]},data:function(){return{addonSlug:"aioseo-redirects"}},computed:Object(n["a"])({},Object(a["e"])(["options","settings"]))},h=u,_=s("2877"),p=Object(_["a"])(h,r,i,!1,null,null,null);e["default"]=p.exports},8197:function(t,e,s){},"8be1":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},i=[],n=s("2877"),a={},o=Object(n["a"])(a,r,i,!1,null,null,null);e["default"]=o.exports},a5f3:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div")},i=[],n=s("2877"),a={},o=Object(n["a"])(a,r,i,!1,null,null,null);e["default"]=o.exports},a914:function(t,e,s){"use strict";s("8197")},d42e:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-redirects"},[s("blur",{attrs:{noCoreCard:t.noCoreCard}}),s("cta",{attrs:{"cta-link":t.$links.getPricingUrl("redirects","redirects-upsell",t.parentComponentContext?t.parentComponentContext:null),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("redirects",t.parentComponentContext?t.parentComponentContext:null,"home"),"feature-list":[t.strings.serverRedirects,t.strings.automaticRedirects,t.strings.redirectMonitoring,t.strings.monitoring404,t.strings.fullSiteRedirects,t.strings.siteAliases]},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.$isPro&&t.$addons.requiresUpgrade("aioseo-redirects")&&t.$addons.currentPlans("aioseo-redirects")?s("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.thisFeatureRequires)+" "),s("strong",[t._v(t._s(t.$addons.currentPlans("aioseo-redirects")))])]):t._e(),t.$isPro&&t.$addons.isActive("aioseo-redirects")&&!t.$addons.hasMinimumVersion("aioseo-redirects")?s("core-alert",[t._v(" CHANGEME ")]):t._e(),t._v(" "+t._s(t.strings.redirectsDescription)+" ")]},proxy:!0}])})],1)},i=[],n=s("e0e5"),a={components:{Blur:n["default"]},props:{hasMinimumVersion:Boolean,noCoreCard:Boolean,parentComponentContext:String},data:function(){return{strings:{ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Redirects",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Redirects are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),serverRedirects:this.$t.__("Fast Server Redirects",this.$td),automaticRedirects:this.$t.__("Automatic Redirects",this.$td),redirectMonitoring:this.$t.__("Redirect Monitoring",this.$td),monitoring404:this.$t.__("404 Monitoring",this.$td),fullSiteRedirects:this.$t.__("Full Site Redirects",this.$td),siteAliases:this.$t.__("Site Aliases",this.$td),redirectsDescription:this.$t.__("Our Redirection Manager allows you to easily create and manage redirects for your broken links to avoid confusing search engines and users, as well as losing valuable backlinks. It even automatically sends users and search engines from your old URLs to your new ones.",this.$td),thisFeatureRequires:this.$t.__("This feature requires one of the following plans:",this.$td)}}}},o=a,l=(s("a914"),s("2877")),d=Object(l["a"])(o,r,i,!1,null,null,null);e["default"]=d.exports},e0e5:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-redirects-blur"},[t.noCoreCard?t._e():s("core-card",{attrs:{slug:"addNewRedirection","header-text":t.strings.addNewRedirection,noSlide:!0}},[s("core-blur",[s("core-add-redirection",{attrs:{type:t.$constants.REDIRECT_TYPES[0].value,query:t.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0}})],1)],1),t.noCoreCard?s("core-blur",[s("core-add-redirection",{attrs:{type:t.$constants.REDIRECT_TYPES[0].value,query:t.$constants.REDIRECT_QUERY_PARAMS[0].value,slash:!0,case:!0}})],1):t._e(),s("core-blur",[s("base-wp-table",{attrs:{filters:[],totals:{total:0,pages:0,page:1},columns:t.columns,rows:[],"search-label":t.strings.searchUrls,"bulk-options":t.bulkOptions,"additional-filters":t.additionalFilters}})],1)],1)},i=[],n=(s("99af"),{props:{noCoreCard:Boolean},data:function(){return{strings:{addNewRedirection:this.$t.__("Add New Redirection",this.$td),searchUrls:this.$t.__("Search URLs",this.$td)},bulkOptions:[{label:"",value:""}]}},computed:{columns:function(){var t=[{slug:"source_url",label:this.$t.__("Source URL",this.$td)},{slug:"target_url",label:this.$t.__("Target URL",this.$td)},{slug:"hits",label:this.$t.__("Hits",this.$td),width:"97px"},{slug:"type",label:this.$t.__("Type",this.$td),width:"100px"},{slug:"group",label:this.$t.__("Group",this.$td),width:"150px"},{slug:"enabled",label:this.$constants.GLOBAL_STRINGS.enabled,width:"80px"}];return t},additionalFilters:function(){return[{label:this.$t.__("Filter by Group",this.$td),name:"group",options:[{label:this.$t.__("All Groups",this.$td),value:"all"}].concat(this.$constants.REDIRECT_GROUPS)}]}}}),a=n,o=s("2877"),l=Object(o["a"])(a,r,i,!1,null,null,null);e["default"]=l.exports}}]);