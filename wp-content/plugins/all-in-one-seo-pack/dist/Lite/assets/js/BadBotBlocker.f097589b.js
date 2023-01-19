import{a as s}from"./vuex.esm.19624049.js";import{B as r}from"./Textarea.55026f9a.js";import{C as l}from"./index.5dd9aaae.js";import{C as n}from"./Card.b5f85ba0.js";import{C as c}from"./SettingsRow.12bb257d.js";import{n as a}from"./_plugin-vue2_normalizer.d86aa1f3.js";import"./client.1a03de11.js";import"./_commonjsHelpers.10c44588.js";import"./translations.b7a6f669.js";import"./default-i18n.31663a66.js";import"./Caret.2b15c7cb.js";import"./index.8eedf1b9.js";import"./isArrayLikeObject.5268a676.js";import"./helpers.a2b0759e.js";import"./constants.a33ff6d4.js";import"./portal-vue.esm.c4534d19.js";import"./Tooltip.e966c16d.js";import"./Slide.fe1da4fd.js";import"./Row.67f2b082.js";const i={components:{BaseTextarea:r,CoreAlert:l,CoreCard:n,CoreSettingsRow:c},data(){return{strings:{badBotBlocker:this.$t.__("Bad Bot Blocker",this.$td),blockBadBotsHttp:this.$t.__("Block Bad Bots using HTTP",this.$td),blockReferralSpamHttp:this.$t.__("Block Referral Spam using HTTP",this.$td),trackBlockedBots:this.$t.__("Track Blocked Bots",this.$td),useCustomBlocklists:this.$t.__("Use Custom Blocklists",this.$td),userAgentBlocklist:this.$t.__("User Agent Blocklist",this.$td),refererBlockList:this.$t.__("Referer Blocklist",this.$td),blockedBotsLog:this.$t.__("Blocked Bots Log",this.$td),logLocation:this.$t.sprintf(this.$t.__("The log for the blocked bots is located here: %1$s",this.$td),'<br><a href="'+this.$aioseo.urls.blockedBotsLogUrl+'" target="_blank">'+this.$aioseo.urls.blockedBotsLogUrl+"</a>")}}},computed:{...s(["options"])}};var p=function(){var o=this,t=o._self._c;return t("div",{staticClass:"aioseo-tools-bad-bot-blocker"},[t("core-card",{attrs:{slug:"badBotBlocker","header-text":o.strings.badBotBlocker}},[t("core-settings-row",{attrs:{name:o.strings.blockBadBotsHttp},scopedSlots:o._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:o.options.deprecated.tools.blocker.blockBots,callback:function(e){o.$set(o.options.deprecated.tools.blocker,"blockBots",e)},expression:"options.deprecated.tools.blocker.blockBots"}})]},proxy:!0}])}),t("core-settings-row",{attrs:{name:o.strings.blockReferralSpamHttp},scopedSlots:o._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:o.options.deprecated.tools.blocker.blockReferer,callback:function(e){o.$set(o.options.deprecated.tools.blocker,"blockReferer",e)},expression:"options.deprecated.tools.blocker.blockReferer"}})]},proxy:!0}])}),o.options.deprecated.tools.blocker.blockBots||o.options.deprecated.tools.blocker.blockReferer?t("core-settings-row",{attrs:{name:o.strings.useCustomBlocklists},scopedSlots:o._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:o.options.deprecated.tools.blocker.custom.enable,callback:function(e){o.$set(o.options.deprecated.tools.blocker.custom,"enable",e)},expression:"options.deprecated.tools.blocker.custom.enable"}})]},proxy:!0}],null,!1,2813344989)}):o._e(),o.options.deprecated.tools.blocker.blockBots&&o.options.deprecated.tools.blocker.custom.enable?t("core-settings-row",{attrs:{name:o.strings.userAgentBlocklist},scopedSlots:o._u([{key:"content",fn:function(){return[t("base-textarea",{attrs:{minHeight:200,maxHeight:200},model:{value:o.options.deprecated.tools.blocker.custom.bots,callback:function(e){o.$set(o.options.deprecated.tools.blocker.custom,"bots",e)},expression:"options.deprecated.tools.blocker.custom.bots"}})]},proxy:!0}],null,!1,2333962956)}):o._e(),o.options.deprecated.tools.blocker.blockReferer&&o.options.deprecated.tools.blocker.custom.enable?t("core-settings-row",{attrs:{name:o.strings.refererBlockList},scopedSlots:o._u([{key:"content",fn:function(){return[t("base-textarea",{attrs:{minHeight:200,maxHeight:200},model:{value:o.options.deprecated.tools.blocker.custom.referer,callback:function(e){o.$set(o.options.deprecated.tools.blocker.custom,"referer",e)},expression:"options.deprecated.tools.blocker.custom.referer"}})]},proxy:!0}],null,!1,3362070519)}):o._e(),o.options.deprecated.tools.blocker.blockBots||o.options.deprecated.tools.blocker.blockReferer?t("core-settings-row",{attrs:{name:o.strings.trackBlockedBots},scopedSlots:o._u([{key:"content",fn:function(){return[t("base-toggle",{model:{value:o.options.deprecated.tools.blocker.track,callback:function(e){o.$set(o.options.deprecated.tools.blocker,"track",e)},expression:"options.deprecated.tools.blocker.track"}}),t("core-alert",{attrs:{type:"blue"},domProps:{innerHTML:o._s(o.strings.logLocation)}})]},proxy:!0}],null,!1,3972286096)}):o._e()],1)],1)},d=[],u=a(i,p,d,!1,null,null,null,null);const U=u.exports;export{U as default};
