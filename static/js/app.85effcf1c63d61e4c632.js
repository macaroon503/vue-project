webpackJsonp([1],{169:function(t,e,a){function n(t){a(95)}var s=a(21)(a(90),a(173),n,null,null);t.exports=s.exports},170:function(t,e,a){function n(t){a(99)}var s=a(21)(a(91),a(177),n,null,null);t.exports=s.exports},171:function(t,e,a){function n(t){a(98)}var s=a(21)(a(92),a(176),n,null,null);t.exports=s.exports},172:function(t,e,a){function n(t){a(97)}var s=a(21)(a(93),a(175),n,null,null);t.exports=s.exports},173:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"row content"},[a("div",{staticClass:"form-group col-md-8"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",id:"name",placeholder:"Grocery, Credit Card, Bill"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-8"},[a("label",{attrs:{for:"cost"}},[t._v("Cost")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cost,expression:"cost"}],staticClass:"form-control",attrs:{type:"text",id:"cost",placeholder:"1000"},domProps:{value:t.cost},on:{input:function(e){e.target.composing||(t.cost=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-8"},[a("label",{attrs:{for:"date"}},[t._v("Date")]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],staticClass:"form-control",attrs:{id:"date"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.date=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"2016-08-30"}},[t._v("2016-08-30")]),t._v(" "),a("option",{attrs:{value:"2016-08-29"}},[t._v("2016-08-29")]),t._v(" "),a("option",{attrs:{value:"2016-08-28"}},[t._v("2016-08-28")]),t._v(" "),a("option",{attrs:{value:"2016-08-27"}},[t._v("2016-08-27")]),t._v(" "),a("option",{attrs:{value:"2016-08-26"}},[t._v("2016-08-26")])])]),t._v(" "),a("div",{staticClass:"form-group col-md-8"},[a("button",{staticClass:"btn btn-primary",on:{click:t.add}},[t._v("Submit")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row header"},[a("div",{staticClass:"col-md-12 header text-center"},[a("h1",[t._v("Add Expense")])])])}]}},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"col-md-4 main"},[a("router-view"),t._v(" "),a("app-menu")],1)])])},staticRenderFns:[]}},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"row header"},[a("div",{staticClass:"col-md-12 header text-center"},[a("h4",[t._v("My name is John")])])]),t._v(" "),a("div",{staticClass:"row content"},[a("p",[t._v("Firstname: John")]),t._v(" "),a("p",[t._v("Lastname: Doe")]),t._v(" "),a("p",[t._v("Email: Join@gmail.com")])])])}]}},176:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row menu"},[a("ul",{staticClass:"nav nav-pills nav-justified"},[a("li",{attrs:{role:"presentation"},on:{click:function(e){t.$router.go(-1)}}},[a("a",[t._v("Back")])]),t._v(" "),a("router-link",{attrs:{to:"/","active-class":"active",exact:"",tag:"li"}},[a("a",[t._v("Home")])]),t._v(" "),a("router-link",{attrs:{to:"/profile","active-class":"active",exact:"",tag:"li"}},[a("a",[t._v("Profile")])])],1)])},staticRenderFns:[]}},177:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"row content"},[t._l(t.items,function(e,n){return a("div",{key:n},[a("div",{staticClass:"col-xs-4"},[a("p",[t._v(t._s(e.date))])]),t._v(" "),a("div",{staticClass:"col-xs-4"},[a("p",[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticClass:"col-xs-4"},[a("p",[t._v(t._s(e.cost))])])])}),t._v(" "),a("div",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-warning",attrs:{to:"/Add",tag:"button"}},[t._v("Add Expense")])],1)],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row header"},[a("div",{staticClass:"col-md-12 header text-center"},[a("h4",[t._v("Total Expense")]),t._v(" "),a("h1",[t._v("26000 Baht")])])])}]}},47:function(t,e,a){"use strict";var n=a(137),s=a.n(n),o=a(180),r=a.n(o),i=a(33),c={apiKey:"AIzaSyDMrBSn1IRVpGmZfY_ZnMuuYQ3nZNQo9YU",authDomain:"ex-mac.firebaseapp.com",databaseURL:"https://ex-mac.firebaseio.com",projectId:"ex-mac",storageBucket:"ex-mac.appspot.com",messagingSenderId:"276625908838"};s.a.initializeApp(c),i.a.use(r.a),e.a=s.a},87:function(t,e,a){"use strict";var n=a(33),s=a(178),o=a(170),r=a.n(o),i=a(172),c=a.n(i),l=a(169),u=a.n(l);n.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/profile",name:"Profile",component:c.a},{path:"/add",name:"Add",component:u.a}]})},88:function(t,e,a){function n(t){a(96)}var s=a(21)(a(89),a(174),n,null,null);t.exports=s.exports},89:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(171),s=a.n(n);e.default={name:"app",components:{appMenu:s.a}}},90:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(47),s=n.a.database();e.default={data:function(){return{date:"2016-08-30",cost:"",name:""}},firebase:{items:s.ref("items")},methods:{add:function(){this.$firebaseRefs.items.push({date:this.date,cost:this.cost,name:this.name}),alert("Data added"),this.date="2016-08-30",this.cost="",this.name=""}}}},91:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(47),s=n.a.database();e.default={firebase:{items:s.ref("items")}}},92:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},93:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},94:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(33),s=a(88),o=a.n(s),r=a(87);n.a.config.productionTip=!1,new n.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a}})},95:function(t,e){},96:function(t,e){},97:function(t,e){},98:function(t,e){},99:function(t,e){}},[94]);
//# sourceMappingURL=app.85effcf1c63d61e4c632.js.map