(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,n){e.exports=n(33)},26:function(e,t,n){},27:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},28:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(6),l=n.n(r),c=(n(26),n(27),n(28),n(4)),i=n(7),s=n(8),u=n(12),m=n(9),p=n(11),h=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts()}},{key:"shouldComponentUpdate",value:function(e){return e.newPost&&this.props.posts.unshift(e.newPost),!0}},{key:"render",value:function(){var e=this.props.posts.map(function(e){return o.a.createElement("div",{key:e.id},o.a.createElement("h3",null,e.title),o.a.createElement("p",null,e.body))});return o.a.createElement("div",null,o.a.createElement("h1",null,"List"),e)}}]),t}(a.Component),d=Object(c.b)(function(e){return{posts:e.posts.items,newPost:e.posts.item}},{fetchPosts:function(){return function(e){fetch("https://jsonplaceholder.typicode.com/posts").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_POSTS",payload:t})})}}})(h),b=n(10),E=n(5),f=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={title:"",body:""},n.onChange=n.onChange.bind(Object(E.a)(n)),n.onSubmit=n.onSubmit.bind(Object(E.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,body:this.state.body};this.props.createPost(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Add Item"),o.a.createElement("form",{onSubmit:this.onSubmit},o.a.createElement("div",null,o.a.createElement("label",null,"Title: "),o.a.createElement("br",null),o.a.createElement("input",{type:"text",name:"title",onChange:this.onChange,value:this.state.title})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("label",null,"Body: "),o.a.createElement("br",null),o.a.createElement("textarea",{name:"body",onChange:this.onChange,value:this.state.body})),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Submit")))}}]),t}(a.Component),y=Object(c.b)(null,{createPost:function(e){return function(t){fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({type:"NEW_POST",payload:e})})}}})(f),O=n(2),v=n(20),j=n(16),w={items:[],item:{}},S=Object(O.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return Object(j.a)({},e,{items:t.payload});case"NEW_POST":return Object(j.a)({},e,{item:t.payload});default:return e}}}),g=[v.a],_=Object(O.e)(S,{},Object(O.d)(O.a.apply(void 0,g),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));var C=function(){return o.a.createElement(c.a,{store:_},o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(y,null),o.a.createElement(d,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.149e2f86.chunk.js.map