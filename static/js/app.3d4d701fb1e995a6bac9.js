webpackJsonp([1],[,,function(t,e,s){s(7);var n=s(0)(s(4),s(13),null,null);t.exports=n.exports},,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(12),i=s.n(n);e.default={name:"app",components:{Hello:i.a}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"demo",data:function(){return{puzzles:[]}},methods:{render:function(){for(var t=[],e=1;e<16;e++)t.push(e);t=t.sort(function(){return Math.random()-.5}),this.puzzles=t,this.puzzles.push("")},moveFn:function(t,e){var s=[this.puzzles[e],this.puzzles[e-1],this.puzzles[e+1],this.puzzles[e-4],this.puzzles[e+4]],n=s[0],i=s[1],u=s[2],r=s[3],l=s[4];""===i&&4!==e&&8!==e&&12!==e?(this.$set(this.puzzles,e-1,n),this.$set(this.puzzles,e,"")):""===u&&3!==e&&7!==e&&11!==e?(this.$set(this.puzzles,e+1,n),this.$set(this.puzzles,e,"")):""===r?(this.$set(this.puzzles,e-4,n),this.$set(this.puzzles,e,"")):""===l&&(this.$set(this.puzzles,e+4,n),this.$set(this.puzzles,e,"")),this.passFn()},passFn:function(){if(""===this.puzzles[15]){this.puzzles.slice(0,15).every(function(t,e){return t===e+1})&&alert("恭喜，你已经成功的拼出了魅力男人！")}}},created:function(){this.render()}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(3),i=s(2),u=s.n(i);n.a.config.productionTip=!1,new n.a({el:"#app",template:"<App/>",components:{App:u.a}})},function(t,e){},function(t,e){},,,,function(t,e,s){s(8);var n=s(0)(s(5),s(14),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("hello")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box",attrs:{id:"demo"}},[s("ul",{staticClass:"puzzle-wrap"},t._l(t.puzzles,function(e,n){return s("li",{staticClass:"puzzle",class:{"puzzle-empty":!e},on:{click:function(s){t.moveFn(e,n)}}},[s("img",{attrs:{src:"static/images/"+e+".png",alt:e}})])})),t._v(" "),s("button",{staticClass:"btn btn-warning btn-block btn-reset",on:{click:t.render}},[t._v("重新开始")])])},staticRenderFns:[]}}],[6]);
//# sourceMappingURL=app.3d4d701fb1e995a6bac9.js.map