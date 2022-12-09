import{B as _}from"./Checkbox.1903802a.js";import{B as u}from"./RadioToggle.2a5182bd.js";import{C as d}from"./Blur.920c6287.js";import{C as p}from"./SettingsRow.d7400549.js";import{n as o}from"./vueComponentNormalizer.67c9b86e.js";import{R as h}from"./RequiredPlans.0a20e7e8.js";import{C as m}from"./Card.efd2e18e.js";import{C as v}from"./ProBadge.3e5c17e9.js";import{C as x}from"./Index.92416e95.js";import{A as f}from"./WpTable.36ecda37.js";import"./index.7b63dad7.js";import"./SaveChanges.68e73792.js";import"./Checkmark.cdcd77fe.js";import"./Row.2d17f2cd.js";import"./index.81e35b24.js";import"./client.90beecd8.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./default-i18n.0e73c33c.js";import"./Caret.eeb84d06.js";import"./helpers.a2b0759e.js";import"./constants.8bff9f56.js";import"./isArrayLikeObject.5268a676.js";import"./portal-vue.esm.18ed59c3.js";import"./vuex.esm.19624049.js";import"./Tooltip.d723c3c3.js";import"./Slide.9538a421.js";import"./attachments.e5102eba.js";import"./cleanForSlug.7a45fb51.js";import"./html.bcbe747e.js";import"./Index.cb09fd7a.js";var $=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"aioseo-opening-hours-blur"},[t("core-blur",[t("core-settings-row",{staticClass:"info-openinghours-row",attrs:{name:s.strings.showOpeningHours,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[t("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[t("base-radio-toggle",{attrs:{name:"openingHours",value:!0,options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]}})],1)]},proxy:!0}])}),t("core-settings-row",{staticClass:"info-hours-row",attrs:{name:s.strings.hours,align:""},scopedSlots:s._u([{key:"content",fn:function(){return[t("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[t("base-toggle",[s._v(" "+s._s(s.strings.open247)+" ")])],1),t("div",{staticClass:"aioseo-col col-xs-12 text-xs-left mt-16"},[t("base-toggle",[s._v(" "+s._s(s.strings.use24hFormat)+" ")])],1),t("div",{staticClass:"aioseo-col col-xs-12 text-xs-left"},[t("div",{staticClass:"aioseo-col-flex text-xs-left"},[t("div",{staticClass:"aioseo-col-day text-xs-left"},[s._v(" "+s._s(s.strings.monday)+" ")]),t("div",{staticClass:"aioseo-col-hours text-xs-left"},[t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"09:00"}}),t("span",{staticClass:"separator"},[s._v("-")]),t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),t("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[t("base-checkbox",{attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.open24h)+" ")]),t("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.closed)+" ")])],1)]),t("div",{staticClass:"aioseo-col-flex text-xs-left"},[t("div",{staticClass:"aioseo-col-day text-xs-left"},[s._v(" "+s._s(s.strings.tuesday)+" ")]),t("div",{staticClass:"aioseo-col-hours text-xs-left"},[t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"09:00"}}),t("span",{staticClass:"separator"},[s._v("-")]),t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),t("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[t("base-checkbox",{attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.open24h)+" ")]),t("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.closed)+" ")])],1)]),t("div",{staticClass:"aioseo-col-flex text-xs-left"},[t("div",{staticClass:"aioseo-col-day text-xs-left"},[s._v(" "+s._s(s.strings.wednesday)+" ")]),t("div",{staticClass:"aioseo-col-hours text-xs-left"},[t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"09:00"}}),t("span",{staticClass:"separator"},[s._v("-")]),t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),t("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[t("base-checkbox",{attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.open24h)+" ")]),t("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.closed)+" ")])],1)]),t("div",{staticClass:"aioseo-col-flex text-xs-left"},[t("div",{staticClass:"aioseo-col-day text-xs-left"},[s._v(" "+s._s(s.strings.thursday)+" ")]),t("div",{staticClass:"aioseo-col-hours text-xs-left"},[t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"09:00"}}),t("span",{staticClass:"separator"},[s._v("-")]),t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),t("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[t("base-checkbox",{attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.open24h)+" ")]),t("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.closed)+" ")])],1)]),t("div",{staticClass:"aioseo-col-flex text-xs-left"},[t("div",{staticClass:"aioseo-col-day text-xs-left"},[s._v(" "+s._s(s.strings.friday)+" ")]),t("div",{staticClass:"aioseo-col-hours text-xs-left"},[t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"09:00"}}),t("span",{staticClass:"separator"},[s._v("-")]),t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),t("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[t("base-checkbox",{attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.open24h)+" ")]),t("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.closed)+" ")])],1)]),t("div",{staticClass:"aioseo-col-flex text-xs-left"},[t("div",{staticClass:"aioseo-col-day text-xs-left"},[s._v(" "+s._s(s.strings.saturday)+" ")]),t("div",{staticClass:"aioseo-col-hours text-xs-left"},[t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"09:00"}}),t("span",{staticClass:"separator"},[s._v("-")]),t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),t("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[t("base-checkbox",{attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.open24h)+" ")]),t("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.closed)+" ")])],1)]),t("div",{staticClass:"aioseo-col-flex text-xs-left"},[t("div",{staticClass:"aioseo-col-day text-xs-left"},[s._v(" "+s._s(s.strings.sunday)+" ")]),t("div",{staticClass:"aioseo-col-hours text-xs-left"},[t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"09:00"}}),t("span",{staticClass:"separator"},[s._v("-")]),t("base-select",{attrs:{size:"medium",options:s.$constants.HOURS_24H_FORMAT,value:"17:00"}})],1),t("div",{staticClass:"aioseo-col-alwaysopen text-xs-left"},[t("base-checkbox",{attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.open24h)+" ")]),t("base-checkbox",{staticClass:"closed-label",attrs:{size:"medium"}},[s._v(" "+s._s(s.strings.closed)+" ")])],1)])])]},proxy:!0}])})],1)],1)},g=[];const b={components:{BaseCheckbox:_,BaseRadioToggle:u,CoreBlur:d,CoreSettingsRow:p},data(){return{strings:{showOpeningHours:this.$t.__("Show Opening Hours",this.$td),displayOpeningHours:this.$t.__("Display Opening Hours",this.$td),labels:this.$t.__("Labels",this.$td),closedLabel:this.$t.__("Closed label",this.$td),closedLabelDesc:this.$t.__("Text to display when 'Closed' setting is checked",this.$td),alwaysOpenLabel:this.$t.__("Open 24h label",this.$td),alwaysOpenLabelDesc:this.$t.__("Text to display when 'Open 24h' setting is checked",this.$td),open247:this.$t.__("Open 24/7",this.$td),use24hFormat:this.$t.__("Use 24h format",this.$td),timezone:this.$t.__("Timezone",this.$td),selectTimeZone:this.$t.__("Select your timezone:",this.$td),hours:this.$t.__("Opening Hours",this.$td),monday:this.$t.__("Monday",this.$td),tuesday:this.$t.__("Tuesday",this.$td),wednesday:this.$t.__("Wednesday",this.$td),thursday:this.$t.__("Thursday",this.$td),friday:this.$t.__("Friday",this.$td),saturday:this.$t.__("Saturday",this.$td),sunday:this.$t.__("Sunday",this.$td),open24h:this.$t.__("Open 24h",this.$td),closed:this.$t.__("Closed",this.$td)}}}},a={};var y=o(b,$,g,!1,C,null,null,null);function C(s){for(let e in a)this[e]=a[e]}const O=function(){return y.exports}();var H=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"aioseo-opening-hours"},[t("core-card",{attrs:{slug:"localBusinessOpeningHours",noSlide:!0},scopedSlots:s._u([{key:"header",fn:function(){return[t("span",[s._v(s._s(s.strings.openingHours))]),t("core-pro-badge")]},proxy:!0}])},[t("blur"),t("cta",{attrs:{"cta-link":s.$links.getPricingUrl("local-seo","local-seo-upsell","opening-hours"),"button-text":s.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":s.features,"align-top":""},scopedSlots:s._u([{key:"header-text",fn:function(){return[s._v(" "+s._s(s.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t("required-plans",{attrs:{addon:"aioseo-local-business"}}),s._v(" "+s._s(s.strings.locationInfo1)+" ")]},proxy:!0}])})],1)],1)},S=[];const R={components:{Blur:O,RequiredPlans:h,CoreCard:m,CoreProBadge:v,Cta:x},data(){return{features:[this.$t.__("Show Opening Hours",this.$td),this.$t.__("Multiple Locations",this.$td),this.$t.__("Opening Hours block, widget and shortcode",this.$td)],strings:{locationInfo1:this.$t.__("Local Business schema markup enables you to tell Google about your business, including your business name, address and phone number, opening hours and price range. This information may be displayed as a Knowledge Graph card or business carousel.",this.$td),openingHours:this.$t.__("Opening Hours Settings",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}}},i={};var z=o(R,H,S,!1,k,null,null,null);function k(s){for(let e in i)this[e]=i[e]}const n=function(){return z.exports}();var w=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div")},T=[];const A={},l={};var U=o(A,w,T,!1,F,null,null,null);function F(s){for(let e in l)this[e]=l[e]}const M=function(){return U.exports}();var L=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div")},B=[];const E={},r={};var G=o(E,L,B,!1,P,null,null,null);function P(s){for(let e in r)this[e]=r[e]}const j=function(){return G.exports}();var I=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"aioseo-opening-hours"},[s.shouldShowMain?t("opening-hours"):s._e(),s.shouldShowActivate?t("activate"):s._e(),s.shouldShowUpdate?t("update"):s._e(),s.shouldShowLite?t("lite"):s._e()],1)},D=[];const q={mixins:[f],components:{OpeningHours:n,Activate:M,Lite:n,Update:j},data(){return{addonSlug:"aioseo-local-business"}}},c={};var N=o(q,I,D,!1,K,null,null,null);function K(s){for(let e in c)this[e]=c[e]}const Os=function(){return N.exports}();export{Os as default};
