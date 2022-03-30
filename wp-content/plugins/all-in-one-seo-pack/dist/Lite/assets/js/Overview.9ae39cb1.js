var B=Object.defineProperty,U=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var m=(t,e,n)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,o=(t,e)=>{for(var n in e||(e={}))V.call(e,n)&&m(t,n,e[n]);if(f)for(var n of f(e))N.call(e,n)&&m(t,n,e[n]);return t},r=(t,e)=>U(t,z(e));import{i as E,o as l,a0 as M}from"./vendor.7b0b1a93.js";import{C as W}from"./Blur.4b173825.js";import{G as R,a as F}from"./Row.de5121b5.js";import{C as u}from"./Card.4dc7db9b.js";import{C as c}from"./Tooltip.80812e50.js";import{S as G}from"./QuestionMark.4dbc0d97.js";import{a as Y,S as Z,b as D,c as Q}from"./InternalOutbound.0ae690c8.js";import{n as a}from"./vueComponentNormalizer.4c221f82.js";import{e as J}from"./index.ff60205e.js";import{U as d}from"./AnimatedNumber.b8ee56f4.js";import{A as K}from"./ToolsSettings.19389363.js";import"./index.ee423bf3.js";import{S as X}from"./SeoSiteScore.8753b911.js";import{T as I,a as q}from"./Row.abb8d63b.js";import{C as p}from"./Index.29aed530.js";import{C as _}from"./Index.da4a6b98.js";import"./Slide.c8a2867c.js";var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"aioseo-link-orphaned",attrs:{viewBox:"0 0 19 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M13.875 3.87495H10.375V5.53745H13.875C15.3713 5.53745 16.5875 6.7537 16.5875 8.24995C16.5875 9.5012 15.73 10.5512 14.5663 10.8575L15.8438 12.135C17.27 11.4087 18.25 9.9562 18.25 8.24995C18.25 5.83495 16.29 3.87495 13.875 3.87495ZM13 7.37495H11.0838L12.8338 9.12495H13V7.37495ZM0.75 1.4862L3.47125 4.20745C2.66729 4.53457 1.97904 5.09383 1.49435 5.81385C1.00966 6.53387 0.750518 7.38199 0.75 8.24995C0.75 10.665 2.71 12.625 5.125 12.625H8.625V10.9625H5.125C3.62875 10.9625 2.4125 9.7462 2.4125 8.24995C2.4125 6.8587 3.47125 5.71245 4.8275 5.5637L6.63875 7.37495H6V9.12495H8.38875L10.375 11.1112V12.625H11.8888L15.3975 16.125L16.5 15.0225L1.86125 0.374954L0.75 1.4862Z",fill:"currentColor"}})])},nt=[];const et={},h={};var st=a(et,tt,nt,!1,it,null,null,null);function it(t){for(let e in h)this[e]=h[e]}var at=function(){return st.exports}(),ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"aioseo-link-count",attrs:{href:t.getLink}},[n("div",{staticClass:"aioseo-link-count-top"},[n(t.getType.icon,{tag:"component"}),n("util-animated-number",{attrs:{number:parseInt(t.count)}})],1),n("div",{staticClass:"aioseo-link-count-bottom"},[n("span",[t._v(t._s(t.getType.name))]),t.type==="orphaned"?n("core-tooltip",{scopedSlots:t._u([{key:"tooltip",fn:function(){return[n("span",[t._v(" "+t._s(t.strings.orphanedPostsDescription)+" ")])]},proxy:!0}],null,!1,2247558736)},[n("div",{staticClass:"disabled-button gray"},[n("svg-circle-question-mark")],1)]):t._e()],1)])},rt=[];const lt={components:{CoreTooltip:c,SvgCircleQuestionMark:G,SvgLinkAffiliate:Y,SvgLinkExternal:Z,SvgLinkInternalInbound:D,SvgLinkOrphaned:at,SvgSearch:J,UtilAnimatedNumber:d},props:{type:{type:String,required:!0},count:{type:Number,required:!0}},data(){return{strings:{orphanedPostsDescription:"Orphaned posts are posts that have no inbound internal links yet and may be more difficult to find by search engines."},icons:[{type:"posts",name:"Posts Crawled",icon:"svg-search"},{type:"external",name:"External Links",icon:"svg-link-external"},{type:"internal",name:"Internal Links",icon:"svg-link-internal-inbound"},{type:"affiliate",name:"Affiliate Links",icon:"svg-link-affiliate"},{type:"orphaned",name:"Orphaned Posts",icon:"svg-link-orphaned"}]}},computed:{getType(){return this.icons.find(t=>t.type===this.type)},getLink(){switch(this.type){case"posts":case"affiliate":case"internal":return"#/links-report?fullReport=1";case"external":return"#/domains-report";case"orphaned":return"#/links-report?orphaned-posts=1";default:return""}}}},g={};var ut=a(lt,ot,rt,!1,ct,null,null,null);function ct(t){for(let e in g)this[e]=g[e]}var dt=function(){return ut.exports}(),pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-card",{staticClass:"aioseo-link-assistant-statistics",attrs:{slug:"internalLinksOverviewCounter",toggles:!1,"no-slide":"","hide-header":""}},[n("grid-row",[n("grid-column",{staticClass:"counter divider-right",attrs:{oneFifth:""}},[n("LinkCount",{attrs:{type:"posts",count:t.totals.crawledPosts}})],1),n("grid-column",{staticClass:"counter divider-right",attrs:{oneFifth:""}},[n("LinkCount",{attrs:{type:"orphaned",count:t.totals.orphanedPosts}})],1),n("grid-column",{staticClass:"counter divider-right",attrs:{oneFifth:""}},[n("LinkCount",{attrs:{type:"external",count:t.totals.externalLinks}})],1),n("grid-column",{staticClass:"counter divider-right",attrs:{oneFifth:""}},[n("LinkCount",{attrs:{type:"internal",count:t.totals.internalLinks}})],1),n("grid-column",{staticClass:"counter",attrs:{oneFifth:""}},[n("LinkCount",{attrs:{type:"affiliate",count:t.totals.affiliateLinks}})],1)],1)],1)},_t=[];const vt={components:{CoreCard:u,GridColumn:R,GridRow:F,LinkCount:dt},props:{totals:{type:Object,required:!0}}},k={};var ft=a(vt,pt,_t,!1,mt,null,null,null);function mt(t){for(let e in k)this[e]=k[e]}var ht=function(){return ft.exports}(),gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._t("default")],2)},kt=[];const yt={props:{targetLineCount:{default:1,type:Number},unit:{default:"px",type:String},min:{default:12,type:Number},max:{default:36,type:Number},constrainToElement:{type:[Boolean,Element],default(){return!1}},elementPadding:{type:Number,default(){return 0}}},data(){return{observer:null}},methods:{calculate(){const t=this.$el,e=this.unit==="px"?1:.05;let n=this.max;if(t.style.display="inline-block",t.style.lineHeight="1px",t.style.fontSize=n+this.unit,this.constrainToElement)for(;t.offsetWidth>this.constrainToElement.offsetWidth-this.elementPadding&&n>this.min;)n-=e,t.style.fontSize=n+this.unit;else for(;t.offsetHeight>this.targetLineCount&&n>this.min;)n-=e,t.style.fontSize=n+this.unit;this.$emit("resize",{size:n,unit:this.unit}),t.style.display=null,t.style.lineHeight=null}},mounted(){this.calculate(),"MutationObserver"in window&&this.observer===null&&(this.observer=new MutationObserver(this.calculate),this.observer.observe(this.$el,{subtree:!0,characterData:!0})),window.addEventListener("resize",this.calculate)},beforeDestroy:function(){this.observer.disconnect(),window.removeEventListener("resize",this.calculate)}},y={};var $t=a(yt,gt,kt,!1,bt,null,null,null);function bt(t){for(let e in y)this[e]=y[e]}var Lt=function(){return $t.exports}(),Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aioseo-link-chart"},[t.total===0?n("svg",{attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{staticClass:"aioseo-link-chart-score__circle",attrs:{stroke:"#e8e8eb","stroke-dasharray":"100","stroke-linecap":"round","stroke-width":2,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}})]):t._e(),0<t.total?n("svg",{attrs:{viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"}},[t._l(t.parts,function(s,i){return[Math.round(s.ratio)&&i!==0?n("circle",{key:i+"_border",staticClass:"aioseo-link-chart-score__circle",attrs:{stroke:"#FFFFFF","stroke-dasharray":Math.round(s.ratio)+" "+parseFloat(99-Math.round(s.ratio)),"stroke-linecap":"round","stroke-width":2.5,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}}):t._e(),Math.round(s.ratio)?n("circle",{key:i+"_stroke",staticClass:"aioseo-link-chart-score__circle",attrs:{stroke:s.color,"stroke-dasharray":(Math.round(s.ratio)===100?100:Math.round(s.ratio)-1)+" 100","stroke-linecap":"round","stroke-width":2,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"}}):t._e()]})],2):t._e(),n("div",{staticClass:"total-amount-wrapper"},[n("div",{staticClass:"total-amount"},[n("div",{staticClass:"total"},[n("util-fit-text",{attrs:{max:40,"constrain-to-element":t.$el,"element-padding":30}},[n("util-animated-number",{attrs:{number:parseInt(t.total)}})],1)],1),n("div",{staticClass:"label"},[t._v(t._s(t.label))])])])])},xt=[];const wt={components:{UtilAnimatedNumber:d,UtilFitText:Lt},props:{parts:{type:Array,required:!0},label:{type:String,required:!0},total:{type:Number,required:!0}}},$={};var St=a(wt,Ct,xt,!1,At,null,null,null);function At(t){for(let e in $)this[e]=$[e]}var Pt=function(){return St.exports}(),Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aioseo-link-chart-with-legend"},[n("div",{staticClass:"chart-left"},[n("LinkChart",{attrs:{parts:t.parts,total:t.total,label:t.label}})],1),n("div",{staticClass:"chart-right"},[t._l(t.sortedParts,function(s,i){return n("div",{key:i,staticClass:"legend"},[n("div",{staticClass:"legend-bullet",style:"background-color: "+s.color}),n("span",{staticClass:"legend-amount"},[n("util-animated-number",{attrs:{number:parseInt(s.count)}})],1),n("span",{staticClass:"legend-label"},[t._v(t._s(s.name))])])}),t.total>0?n("div",{staticClass:"chart-link"},[n("span",{domProps:{innerHTML:t._s(t.link)}})]):t._e()],2)])},Ot=[];const Et={components:{LinkChart:Pt,UtilAnimatedNumber:d},props:{parts:{type:Array,required:!0},total:{type:Number,required:!0},label:{type:String,required:!0},link:{type:String,required:!0}},computed:{sortedParts(){const t=this.parts.map(e=>e);return t.forEach(function(e,n){e.last&&(t.push(t[n]),t.splice(n,1))}),t}}},b={};var Mt=a(Et,Tt,Ot,!1,Rt,null,null,null);function Rt(t){for(let e in b)this[e]=b[e]}var H=function(){return Mt.exports}(),Ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-card",{staticClass:"aioseo-link-assistant-link-ratio",attrs:{slug:"linkAssistantLinkRatio","no-slide":"","header-text":t.strings.header}},[n("LinkChartWithLegend",{attrs:{parts:t.sortedParts,total:t.totals.totalLinks,label:t.strings.totalLinks,link:t.strings.linksReportLink}})],1)},Dt=[];const It={components:{CoreCard:u,LinkChartWithLegend:H},mixins:[X],props:{totals:{type:Object,required:!0}},data(){return{strings:{header:"Internal vs External vs Affiliate Links",totalLinks:"Total Links",linksReportLink:this.$t.sprintf('<a href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/links-report?fullReport=1","See a Full Links Report")}}},computed:{parts(){return[{slug:"external",name:"External Links",count:this.totals.externalLinks},{slug:"affiliate",name:"Affiliate Links",count:this.totals.affiliateLinks},{slug:"internal",name:"Internal Links",count:this.totals.internalLinks}]},sortedParts(){const t=this.parts;return t.sort(function(e,n){return n.count>e.count?1:-1}),t[0].ratio=100,t[1].ratio=t[1].count/this.totals.totalLinks*100,t[2].ratio=t[2].count/this.totals.totalLinks*100,t.forEach(e=>{switch(e.slug){case"external":{e.color="#005AE0";break}case"internal":{e.color="#00AA63";break}case"affiliate":{e.color="#F18200";break}}}),t.filter(function(e){return e.count!==0}),t.forEach((e,n)=>(n===0||t.forEach((s,i)=>(n<i&&(e.ratio=e.ratio+s.ratio),e)),e)),t}}},L={};var qt=a(It,Ft,Dt,!1,Ht,null,null,null);function Ht(t){for(let e in L)this[e]=L[e]}var jt=function(){return qt.exports}(),Bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-card",{staticClass:"aioseo-link-assistant-linking-opportunities",attrs:{slug:"linkAssistantLinkOpportunities","no-slide":"","header-text":t.strings.linkingOpportunities}},[n("div",[n("div",{staticClass:"linking-opportunities-table"},[t.linkingOpportunities.length?n("table-row",{staticClass:"header-row"},t._l(t.columns,function(s,i){return n("table-column",{key:i,class:s.slug},[n("div",{staticClass:"row"},[s.tooltipIcon?t._e():n("div",[t._v(" "+t._s(s.label)+" ")]),s.tooltipIcon?n("div",{staticClass:"aioseo-tooltip-wrapper"},[n("core-tooltip",{staticClass:"action",scopedSlots:t._u([{key:"tooltip",fn:function(){return[n("span",{domProps:{innerHTML:t._s(s.label)}})]},proxy:!0}],null,!0)},[n(s.tooltipIcon,{tag:"component"})],1)],1):t._e()])])}),1):t._e(),t._l(t.linkingOpportunities,function(s,i){return n("table-row",{key:i,staticClass:"row",class:{even:i%2===0}},[n("table-column",{staticClass:"post-title"},[n("div",{staticClass:"row"},[n("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[n("a",{staticClass:"tooltip-url",attrs:{href:s.permalink,target:"_blank"}},[t._v(" "+t._s(s.postTitle)+" ")])]},proxy:!0}],null,!0)},[n("a",{attrs:{href:"#/links-report?postTitle="+s.postTitle}},[t._v(" "+t._s(s.postTitle)+" ")])])],1)]),n("table-column",{staticClass:"internal-inbound"},[n("span",{staticClass:"count"},[t._v(t._s(s.suggestionsInbound))])]),n("table-column",{staticClass:"internal-outbound"},[n("span",{staticClass:"count"},[t._v(t._s(s.suggestionsOutbound))])])],1)}),t.linkingOpportunities.length?t._e():n("table-row",{staticClass:"row even"},[n("table-column",{staticClass:"post-title"},[t._v(" "+t._s(t.strings.noResults)+" ")])],1)],2),t.linkingOpportunities.length?n("div",{staticClass:"links-report-link"},[n("span",{domProps:{innerHTML:t._s(t.link)}})]):t._e()])])},Ut=[];const zt={components:{CoreCard:u,CoreTooltip:c,SvgLinkInternalInbound:D,SvgLinkInternalOutbound:Q,TableColumn:I,TableRow:q},props:{linkingOpportunities:{type:Array,required:!0}},data(){return{strings:{linkingOpportunities:"Linking Opportunities",noResults:"No items found."},link:this.$t.sprintf('<a class="links-report-link" href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/links-report?linkingOpportunities=1","See All Linking Opportunities")}},computed:{columns(){return[{slug:"post-title",label:"Post Title"},{slug:"internal-inbound",label:this.$t.sprintf("%1$sInbound Internal Links%2$sLinks from other posts to this post","<strong>","</strong><br />"),tooltipIcon:"svg-link-internal-inbound"},{slug:"internal-outbound",label:this.$t.sprintf("%1$sOutbound Internal Links%2$sLinks from this post to other posts","<strong>","</strong><br />"),tooltipIcon:"svg-link-internal-outbound"}]}}},C={};var Vt=a(zt,Bt,Ut,!1,Nt,null,null,null);function Nt(t){for(let e in C)this[e]=C[e]}var Wt=function(){return Vt.exports}(),Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-card",{staticClass:"aioseo-link-assistant-linked-domains",attrs:{slug:"linkAssistantLinkedDomains","no-slide":"","header-text":t.strings.mostLinkedDomains}},[n("LinkChartWithLegend",{attrs:{parts:t.sortedParts,total:t.totals.externalLinks,label:t.strings.totalExternalLinks,link:t.strings.link}}),n("div",{staticClass:"domains-table"},[n("table-row",{staticClass:"header-row"},t._l(t.columns,function(s,i){return n("table-column",{key:i,class:s.slug},[t._v(" "+t._s(s.label)+" ")])}),1),t._l(t.mostLinkedDomains,function(s,i){return n("table-row",{key:i,staticClass:"row",class:{even:i%2===0}},[n("table-column",{staticClass:"domain"},[n("div",{staticClass:"row"},[n("img",{staticClass:"favicon",attrs:{src:"https://www.google.com/s2/favicons?sz=32&domain="+s.name}}),n("core-tooltip",{attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[n("a",{staticClass:"tooltip-url",attrs:{href:"https://"+s.name,target:"_blank"}},[t._v(" "+t._s(s.name)+" ")])]},proxy:!0}],null,!0)},[n("a",{staticClass:"domain-name",attrs:{href:"#/domains-report?hostname="+s.name}},[t._v(t._s(s.name))])])],1)]),n("table-column",{staticClass:"count"},[n("span",[t._v(t._s(t.$numbers.numberFormat(s.count)))])])],1)}),t.mostLinkedDomains.length?t._e():n("table-row",{staticClass:"row even"},[n("table-column",{staticClass:"domain"},[t._v(" "+t._s(t.strings.noResults)+" ")])],1)],2)],1)},Yt=[];const Zt={components:{CoreCard:u,CoreTooltip:c,LinkChartWithLegend:H,TableColumn:I,TableRow:q},props:{totals:{type:Object,required:!0},mostLinkedDomains:{type:Array,required:!0}},data(){return{strings:{mostLinkedDomains:"Most Linked to Domains",totalExternalLinks:"Total External Links",noResults:"No items found.",link:this.$t.sprintf('<a href="%1$s">%2$s</a><a href="%1$s"> <span>&rarr;</span></a>',"#/domains-report?fullReport=1","See a Full Domains Report")}}},computed:r(o({},E(["linkAssistant"])),{sortedParts(){const t=this.mostLinkedDomains.map(n=>n).splice(0,3);let e=this.totals.externalLinks;return t[0]&&(t[0].color="#005AE0",t[0].ratio=100,e=e-t[0].count),t[1]&&(t[1].color="#80ACF0",t[1].ratio=t[1].count/this.totals.externalLinks*100,e=e-t[1].count),t[2]&&(t[2].color="#BFD6F7",t[2].ratio=t[2].count/this.totals.externalLinks*100,e=e-t[2].count),e&&t.push({name:"other domains",color:"#E8E8EB",count:e,ratio:e/this.totals.externalLinks*100,last:!0}),t.filter(function(n){return n.count!==0}).sort(function(n,s){return parseInt(s.count)>parseInt(n.count)?1:-1}),t.forEach((n,s)=>(s===0||t.forEach((i,j)=>(s<j&&(n.ratio=n.ratio+i.ratio),n)),n)),t},columns(){return[{slug:"name",label:"Domain"},{slug:"count",label:"# of Links"}]}})},x={};var Qt=a(Zt,Gt,Yt,!1,Jt,null,null,null);function Jt(t){for(let e in x)this[e]=x[e]}var Kt=function(){return Qt.exports}(),Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("core-blur",[t.showTotals?n("grid-row",{staticClass:"overview-link-count"},[n("grid-column",[n("link-counts",{attrs:{totals:t.totals}})],1)],1):t._e(),n("grid-row",[n("grid-column",{attrs:{md:"6"}},[n("link-ratio",{attrs:{totals:t.totals}}),n("linking-opportunities",{attrs:{"linking-opportunities":t.linkingOpportunities}})],1),n("grid-column",{attrs:{md:"6"}},[n("most-linked-domains",{attrs:{totals:t.totals,"most-linked-domains":t.mostLinkedDomains}})],1)],1)],1)},tn=[];const nn={components:{CoreBlur:W,GridColumn:R,GridRow:F,LinkCounts:ht,LinkRatio:jt,LinkingOpportunities:Wt,MostLinkedDomains:Kt},props:{showTotals:{type:Boolean,default(){return!0}}},computed:{totals(){return{crawledPosts:102,externalLinks:753,internalLinks:56,affiliateLinks:175,orphanedPosts:78,totalLinks:753+56+175}},linkingOpportunities(){return[{postTitle:"Test Post Title 1",postId:"123",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 2",postId:"124",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 3",postId:"125",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 4",postId:"126",suggestionsInbound:"2",suggestionsOutbound:"13"},{postTitle:"Test Post Title 5",postId:"127",suggestionsInbound:"2",suggestionsOutbound:"13"}]},mostLinkedDomains(){return[{name:"aioseo.com",count:100},{name:"wpbeginner.com",count:99},{name:"wpforms.com",count:50},{name:"optinmonster.com",count:40},{name:"monsterinsights.com",count:30},{name:"smashballoon.com",count:20},{name:"exactmetrics.com",count:10},{name:"seedprod.com",count:5},{name:"awesomemotive.com",count:4},{name:"easydigitaldownloads.com",count:3}]}}},w={};var en=a(nn,Xt,tn,!1,sn,null,null,null);function sn(t){for(let e in w)this[e]=w[e]}var v=function(){return en.exports}(),an=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("blur"),n("cta",{attrs:{"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-link-assistant","cta-button-action":"","cta-button-loading":t.activationLoading,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("link-assistant"),"feature-list":[t.strings.linkOpportunities,t.strings.domainReports,t.strings.orphanedPosts,t.strings.affiliateLinks]},on:{"cta-button-click":t.activateAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.failed?n("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},on=[];const rn={components:{Blur:v,CoreAlert:p,Cta:_},data(){return{strings:{ctaButtonText:"Activate Link Assistant",ctaHeader:"Enable Link Assistant on your Site",ctaDescription:"Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",linkOpportunities:"Actionable Link Suggestions",orphanedPosts:"See Orphaned Posts",affiliateLinks:"See Affiliate Links",domainReports:"Top Domain Reports",activateError:"An error occurred while activating the addon. Please upload it manually or contact support for more information.",permissionWarning:"You currently don't have permission to activate this addon. Please ask a site administrator to activate first."},failed:!1,activationLoading:!1}},methods:r(o(o(o({},l("linkAssistant",["getMenuData"])),l(["installPlugins"])),M(["updateAddon"])),{activateAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-link-assistant");this.installPlugins([{plugin:t.basename}]).then(e=>{if(e.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const n=[this.getMenuData()];Promise.all(n).then(()=>{this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,this.updateAddon(t)})}).catch(()=>{this.activationLoading=!1})}})},S={};var ln=a(rn,an,on,!1,un,null,null,null);function un(t){for(let e in S)this[e]=S[e]}var cn=function(){return ln.exports}(),dn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("blur"),n("cta",{staticClass:"aioseo-link-assistant-cta",attrs:{"cta-link":t.$links.getPricingUrl("link-assistant","link-assistant-upsell","overview"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("link-assistant","overview","home"),"feature-list":[t.strings.linkOpportunities,t.strings.domainReports,t.strings.orphanedPosts,t.strings.affiliateLinks]},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t.$isPro&&t.$addons.requiresUpgrade("aioseo-link-assistant")&&t.$addons.currentPlans("aioseo-link-assistant")?n("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.thisFeatureRequires)+" "),n("strong",[t._v(t._s(t.$addons.currentPlans("aioseo-link-assistant")))])]):t._e(),t._v(" "+t._s(t.strings.linkAssistantDescription)+" ")]},proxy:!0}])})],1)},pn=[];const _n={components:{Blur:v,CoreAlert:p,Cta:_},data(){return{strings:{ctaButtonText:this.$t.sprintf("Upgrade to %1$s and Unlock Link Assistant","Pro"),ctaHeader:this.$t.sprintf("Link Assistant is only available for licensed %1$s %2$s users.","AIOSEO","Pro"),linkAssistantDescription:"Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",thisFeatureRequires:"This feature requires one of the following plans:",linkOpportunities:"Actionable Link Suggestions",orphanedPosts:"See Orphaned Posts",affiliateLinks:"See Affiliate Links",domainReports:"Top Domain Reports"}}}},A={};var vn=a(_n,dn,pn,!1,fn,null,null,null);function fn(t){for(let e in A)this[e]=A[e]}var P=function(){return vn.exports}(),mn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("blur"),n("cta",{attrs:{"cta-link":t.$aioseo.urls.aio.featureManager+"&aioseo-activate=aioseo-link-assistant","cta-button-action":"","cta-button-loading":t.activationLoading,"same-tab":"","button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getDocUrl("link-assistant"),"feature-list":[t.strings.linkOpportunities,t.strings.domainReports,t.strings.orphanedPosts,t.strings.affiliateLinks]},on:{"cta-button-click":t.upgradeAddon},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[n("core-alert",{attrs:{type:"yellow"}},[t._v(" "+t._s(t.strings.updateRequired)+" ")]),t.failed?n("core-alert",{attrs:{type:"red"}},[t._v(" "+t._s(t.strings.activateError)+" ")]):t._e(),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0},{key:"learn-more-text",fn:function(){return[t._v(" "+t._s(t.strings.learnMoreText)+" ")]},proxy:!0}])})],1)},hn=[];const gn={components:{Blur:v,CoreAlert:p,Cta:_},data(){return{strings:{ctaButtonText:"Update Link Assistant",ctaHeader:"Enable Link Assistant on your Site",ctaDescription:"Get relevant suggestions for adding internal links to all your content as well as finding any orphaned posts that have no internal links.",linkOpportunities:"Actionable Link Suggestions",orphanedPosts:"See Orphaned Posts",affiliateLinks:"See Affiliate Links",domainReports:"Top Domain Reports",activateError:"An error occurred while activating the addon. Please upload it manually or contact support for more information.",permissionWarning:"You currently don't have permission to update this addon. Please ask a site administrator to update.",updateRequired:this.$t.sprintf("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.","AIOSEO","Pro",this.$addons.getAddon("aioseo-link-assistant").minimumVersion,"Link Assistant",this.$addons.getAddon("aioseo-link-assistant").installedVersion)},failed:!1,activationLoading:!1}},computed:o({},E("linkAssistant",["suggestionsScan"])),methods:r(o(o(o({},l("linkAssistant",["getMenuData","pollSuggestionsScan"])),l(["upgradePlugins"])),M(["updateAddon"])),{upgradeAddon(){this.failed=!1,this.activationLoading=!0;const t=this.$addons.getAddon("aioseo-link-assistant");this.upgradePlugins([{plugin:t.sku}]).then(e=>{if(e.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const n=[this.getMenuData()];Promise.all(n).then(()=>{const s=e.body.completed[t.sku];this.activationLoading=!1,t.hasMinimumVersion=!0,t.isActive=!0,t.installedVersion=s.installedVersion,this.updateAddon(t),this.$isPro&&this.suggestionsScan.percent!==100&&this.pollSuggestionsScan()})}).catch(()=>{this.activationLoading=!1})}})},T={};var kn=a(gn,mn,hn,!1,yn,null,null,null);function yn(t){for(let e in T)this[e]=T[e]}var $n=function(){return kn.exports}(),bn=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aioseo-link-assistant-overview"},[t.shouldShowMain?n("overview"):t._e(),t.shouldShowActivate?n("activate"):t._e(),t.shouldShowUpdate?n("update"):t._e(),t.shouldShowLite?n("lite"):t._e()],1)},Ln=[];const Cn={mixins:[K],components:{Activate:cn,Lite:P,Overview:P,Update:$n},data(){return{addonSlug:"aioseo-link-assistant"}}},O={};var xn=a(Cn,bn,Ln,!1,wn,null,null,null);function wn(t){for(let e in O)this[e]=O[e]}var Nn=function(){return xn.exports}();export{Nn as default};