(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{361:function(e,t,n){var content=n(366);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("39c6faaa",content,!0,{sourceMap:!1})},362:function(e,t,n){"use strict";n.r(t);var r={methods:{onClick:function(e){this.$emit("click",e)}}},l=(n(365),n(25)),component=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"btn__primary",on:{click:this.onClick}},[this._t("default")],2)}),[],!1,null,"f3877f48",null);t.default=component.exports},365:function(e,t,n){"use strict";n(361)},366:function(e,t,n){(t=n(12)(!1)).push([e.i,".btn__primary[data-v-f3877f48]{background:transparent linear-gradient(270deg,#ff7597,#ff0266) 0 0 no-repeat padding-box;border-radius:30px;font-size:13px;text-transform:uppercase;font-weight:700;padding:10px 50px;outline:none}",""]),e.exports=t},420:function(e,t,n){var content=n(509);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("b5fd7a3e",content,!0,{sourceMap:!1})},421:function(e,t,n){var content=n(522);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("3b3264fb",content,!0,{sourceMap:!1})},422:function(e,t,n){var content=n(524);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("22c09d03",content,!0,{sourceMap:!1})},449:function(e,t,n){"use strict";n.r(t);var r={components:{BtnPrimary:n(59).default},data:function(){return{phoneNumber:"",email:"",accountNumber:"",items:[2,3,5]}}},l=(n(508),n(25)),o=n(27),c=n.n(o),d=n(355),v=n(467),m=n(350),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container__verify d-flex flex-column align-center"},[n("h3",[e._v("Book Ticket")]),e._v(" "),n("v-form",{staticClass:"mt-5 d-flex align-center flex-column"},[n("div",[n("label",{attrs:{for:""}},[e._v("Tickets")]),e._v(" "),n("v-select",{attrs:{items:e.items,filled:"",dense:"",solo:"",label:"Select how many tickets"}}),e._v(" "),n("label",{attrs:{for:""}},[e._v("Amount")]),e._v(" "),n("v-text-field",{attrs:{label:"Enter amount",type:"email",required:"","single-line":"",outlined:"",dark:"",dense:"","full-width":"true"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),n("btn-primary",[e._v("Pay 1500")])],1)],1)}),[],!1,null,"5e024c79",null);t.default=component.exports;c()(component,{BtnPrimary:n(59).default}),c()(component,{VForm:d.a,VSelect:v.a,VTextField:m.a})},450:function(e,t,n){"use strict";n.r(t);var r={components:{},data:function(){return{}},methods:{hideDialog:function(){this.$emit("hide-reminder-dialog",!1)}}},l=(n(521),n(25)),o=n(27),c=n.n(o),d=n(172),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container__reminder"},[n("div",{staticClass:"wrapper-bell d-flex flex-column align-center"},[n("v-icon",{staticClass:"icon-reset"},[e._v(" mdi-bell-outline ")]),e._v(" "),n("small",[e._v("2 hrs")]),e._v(" "),n("small",[e._v("reminder")])],1),e._v(" "),n("div",{staticClass:"wrapper-message"},[n("v-icon",{staticClass:"icon-close",on:{click:e.hideDialog}},[e._v("mdi-close-circle-outline")]),e._v(" "),e._m(0)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{},[t("h3",[this._v("Reminder Set Successfully")]),this._v(" "),t("small",[this._v("You will be notified 2hrs before the livestream")])])}],!1,null,"67a031c8",null);t.default=component.exports;c()(component,{VIcon:d.a})},508:function(e,t,n){"use strict";n(420)},509:function(e,t,n){(t=n(12)(!1)).push([e.i,".container__verify[data-v-5e024c79]{background-color:var(--surface);max-width:50em;padding:2em}.description[data-v-5e024c79]{opacity:.6}",""]),e.exports=t},521:function(e,t,n){"use strict";n(421)},522:function(e,t,n){(t=n(12)(!1)).push([e.i,".container__reminder[data-v-67a031c8]{display:grid;grid-template-columns:30% 70%}.wrapper-message[data-v-67a031c8]{position:relative;background-color:var(--surface);padding:4em 2em}.wrapper-message .icon-close[data-v-67a031c8]{position:absolute;top:10px;right:10px}.wrapper-message small[data-v-67a031c8]{opacity:.5}.wrapper-bell[data-v-67a031c8]{background-color:var(--text-on-background);padding:2em}.icon-reset[data-v-67a031c8]{font-size:40px}",""]),e.exports=t},523:function(e,t,n){"use strict";n(422)},524:function(e,t,n){(t=n(12)(!1)).push([e.i,".icon-reset[data-v-23f02114]{color:var(--secondary);font-size:16px}@media screen and (min-width:800px){.container__physical[data-v-23f02114]{display:grid;grid-template-columns:3fr 1.2fr;grid-gap:2.5em;gap:2.5em}}.card-event[data-v-23f02114]{height:600px;border-radius:10px}.card-event[data-v-23f02114],.wrapper-description[data-v-23f02114]{background-color:var(--surface)}.wrapper-reminder[data-v-23f02114]{display:flex;flex-direction:column;align-items:center}.wrapper-reminder[data-v-23f02114]>:not(small){background-color:var(--secondary);padding:10px;font-size:1.5em;border-radius:50%;width:50px;height:50px;margin-bottom:10px;outline:none}.wrapper-img[data-v-23f02114]{background-image:url(https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&q=80&w=1050);background-size:cover;height:65%;border-radius:10px}.tags>*+*[data-v-23f02114]{margin-left:10px}.tags span[data-v-23f02114]{color:var(--secondary);background-color:rgba(225,2,102,.1);border-radius:9px;padding:5px 7px;font-size:12px}.description-event[data-v-23f02114]{font-size:.85rem}",""]),e.exports=t},615:function(e,t,n){"use strict";n.r(t);var r=n(449),l=n(450),o={components:{BtnLarge:n(362).default,BookTicket:r.default,Reminder:l.default},data:function(){return{ticketDialog:!1,reminderDialog:!1}},methods:{hideReminderDialog:function(e){this.reminderDialog=e}}},c=(n(523),n(25)),d=n(27),v=n.n(d),m=n(357),f=n(172),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container__physical px-12 py-8"},[n("div",{staticClass:"card-event mb-4"},[n("div",{staticClass:"wrapper-img"}),e._v(" "),n("div",{class:["wrapper-description","d-flex","justify-space-between","align-center","px-6",this.$vuetify.breakpoint.smAndDown?"flex-column":"flex-row"]},[n("div",[n("div",{staticClass:"tags my-6"},e._l(3,(function(t){return n("span",{key:t},[e._v("#Cooking")])})),0),e._v(" "),n("h3",[e._v("Children Painting Event")]),e._v(" "),n("p",[e._v("by Toby Adamu")])]),e._v(" "),n("button",{staticClass:"wrapper-reminder",on:{click:function(t){e.reminderDialog=!0}}},[n("v-icon",[e._v("mdi-alarm-multiple")]),e._v(" "),n("small",[e._v("Set a Reminder")])],1),e._v(" "),n("v-dialog",{attrs:{width:"550"},model:{value:e.reminderDialog,callback:function(t){e.reminderDialog=t},expression:"reminderDialog"}},[n("Reminder",{on:{"hide-reminder-dialog":e.hideReminderDialog}})],1)],1)]),e._v(" "),n("div",{staticClass:"details-event"},[n("h4",[e._v("About this event")]),e._v(" "),n("p",{staticClass:"description-event"},[e._v('\n      Painting is the practice of applying paint, pigment, color or other\n      medium to a solid surface (called the "matrix" or "support"). The medium\n      is commonly applied to the base with a brush, but other implements, such\n      as knives, sponges, and airbrushes, can be used. In art, the term\n      painting describes both the act and the result of the action (the final\n      work is called "a painting").\n    ')]),e._v(" "),n("div",{staticClass:"group__date-location d-flex justify-space-between"},[n("div",{staticClass:"wrapper-date d-flex flex-column"},[n("span",{staticClass:"d-flex align-start"},[n("v-icon",{staticClass:"icon-reset"},[e._v("mdi-calendar-weekend")]),e._v(" "),n("small",{staticClass:"ml-1"},[e._v("Date and Time")])],1),e._v(" "),n("small",[e._v("Wed, 23rd Sep 2020")]),e._v(" "),n("small",[e._v("6:30pm - 11:00pm")]),e._v(" "),n("small",[e._v("Add to calender")])]),e._v(" "),n("div",{staticClass:"wrapper-location d-flex flex-column"},[n("span",{staticClass:"d-flex align-start"},[n("v-icon",{staticClass:"icon-reset"},[e._v("mdi-map-marker")]),e._v(" "),n("small",{staticClass:"ml-1"},[e._v("Location")])],1),e._v(" "),n("small",[e._v("Freedom Park")]),e._v(" "),n("small",[e._v(" 1, Broadland Road, Ijesha ")]),e._v(" "),n("small",[e._v("View Map")])])]),e._v(" "),n("div",{staticClass:"wrapper-fee my-4"},[n("span",{staticClass:"d-flex align-start"},[n("v-icon",{staticClass:"icon-reset"},[e._v("mdi-wallet")]),e._v(" "),n("small",{staticClass:"ml-1"},[e._v(" Fee ")])],1),e._v(" "),n("small",{staticClass:"align-reset"},[e._v("N 1,500")])]),e._v(" "),n("btn-large",{on:{click:function(t){e.ticketDialog=!0}}},[e._v("PAY FEE FOR BOOK")]),e._v(" "),n("v-dialog",{attrs:{width:"500"},model:{value:e.ticketDialog,callback:function(t){e.ticketDialog=t},expression:"ticketDialog"}},[n("div",{staticClass:"d-flex flex-column py-2",staticStyle:{"background-color":"var(--surface)"}},[n("v-icon",{staticClass:"align-self-end mx-4",on:{click:function(t){e.ticketDialog=!1}}},[e._v("mdi-close-circle-outline")])],1),e._v(" "),n("BookTicket")],1)],1)])}),[],!1,null,"23f02114",null);t.default=component.exports;v()(component,{Reminder:n(450).default,BtnLarge:n(362).default,BookTicket:n(449).default}),v()(component,{VDialog:m.a,VIcon:f.a})}}]);