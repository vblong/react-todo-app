(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{17:function(e,t,n){e.exports={item:"TodoItem_item__9-66u",checkbox:"TodoItem_checkbox__3P3s0",textInput:"TodoItem_textInput__1UQIP"}},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),i=n(24),a=n.n(i),r=n(8),s=n(22),l=n(11),d=n(9),u=n(2),j=function(){return Object(u.jsx)("header",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:Object(u.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},b=n(15),h=n(16),p=function(e){var t=Object(c.useState)({title:""}),n=Object(d.a)(t,2),o=n[0],i=n[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),i({title:""})):alert("Please write item")},className:"form-container",children:[Object(u.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){i(Object(l.a)(Object(l.a)({},o),{},Object(b.a)({},e.target.name,e.target.value)))}}),Object(u.jsx)("button",{className:"input-submit",children:Object(u.jsx)(h.a,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},x=n(17),O=n.n(x),m=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),o=n[0],i=n[1],a=e.todo,r=a.completed,s=a.id,l=a.title,j={},b={};return o?j.display="none":b.display="none",Object(c.useEffect)((function(){return function(){console.log("Cleaning up...")}}),[]),Object(u.jsxs)("li",{className:O.a.item,children:[Object(u.jsxs)("div",{onDoubleClick:function(){i(!0)},style:j,children:[Object(u.jsx)("input",{type:"checkbox",className:O.a.checkbox,checked:r,onChange:function(){return e.handleChangeProps(s)}}),Object(u.jsx)("button",{onClick:function(){return e.deleteTodoProps(s)},children:Object(u.jsx)(h.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(u.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(u.jsx)("input",{type:"text",style:b,className:O.a.textInput,value:l,onChange:function(t){e.setUpdate(t.target.value,s)},onKeyDown:function(e){"Enter"===e.key&&i(!1)}})]})},f=function(e){return Object(u.jsx)("ul",{children:e.todos.map((function(t){return Object(u.jsx)(m,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},g=n(41),y=n(3),v=function(){var e=Object(y.f)().slug,t=[{slug:"about-app",title:"About the App",description:"In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items."},{slug:"about-author",title:"About the Author",description:"This app was developed by Ibas Majid, a self-taught web developer and a technical writer. He is opened to freelance Gig. So go ahead and connect with ibas on Twitter @ibaslogic."}].find((function(t){return t.slug===e})),n=t.title,c=t.description;return Object(u.jsxs)("div",{className:"main__content",children:[Object(u.jsx)("h1",{children:n}),Object(u.jsx)("p",{children:c})]})},N=function(e){var t=Object(y.g)(),n=t.url,c=t.path;return Object(u.jsxs)("div",{className:"about__content",children:[Object(u.jsxs)("ul",{className:"about__list",children:[Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"".concat(n,"/about-app"),children:"About App"})}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"".concat(n,"/about-author"),children:"About Author"})})]}),Object(u.jsx)(y.a,{path:"".concat(c,"/:slug"),children:Object(u.jsx)(v,{})})]})},w=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h3",{children:"404 Not Found"})})},S=n(26),k=n(27),T=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),o=n[0],i=n[1];return Object(u.jsxs)("nav",{className:"navBar",children:[Object(u.jsx)("button",{onClick:function(){i(!o)},children:o?Object(u.jsx)(S.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(u.jsx)(k.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(u.jsx)("ul",{className:"menuNav ".concat(o?" showMenu":""),children:[{id:1,path:"/",text:"Home"},{id:2,path:"/About",text:"About"}].map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(r.c,{to:e.path,activeClassName:"active-link",onClick:function(){i(!1)},exact:!0,children:e.text})},e.id)}))})]})},_=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(T,{}),Object(u.jsxs)(y.c,{children:[Object(u.jsx)(y.a,{exact:!0,path:"/",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"inner",children:[Object(u.jsx)(j,{}),Object(u.jsx)(p,{addTodoProps:function(e){var t={id:Object(g.a)(),title:e,completed:!1};o([].concat(Object(s.a)(n),[t]))}}),Object(u.jsx)(f,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(s.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})}),Object(u.jsx)(y.a,{path:"/about",children:Object(u.jsx)(N,{})}),Object(u.jsx)(y.a,{path:"*",children:Object(u.jsx)(w,{})})]})]})};n(38);a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(r.a,{children:Object(u.jsx)(_,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6bb00e68.chunk.js.map