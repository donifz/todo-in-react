(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{20:function(t,e,a){t.exports=a(44)},25:function(t,e,a){},26:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(19),i=a.n(o),s=(a(25),a(9)),l=a(6),d=a(3),r=a(7),u=a(2),m=a(5),h=a(4),p=(a(26),function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={real:"madrid"},n}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"Header"},c.a.createElement("h2",null,"To Do List"))}}]),a}(c.a.Component)),b=function(t){return c.a.createElement("div",{className:"input-form"},c.a.createElement("input",{className:"task-input",placeholder:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430",required:!0,type:"text",onChange:t.handleChange,defaultValue:""}),c.a.createElement("input",{className:"btn submit-btn",type:"submit",value:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:function(){return t.onAdd(t.text)}}))},f=function(t){var e="toDo__text";return c.a.createElement("ul",{className:"to-do"},t.data.map((function(a,n){return c.a.createElement("li",{key:a.id,className:"toDo__list"},c.a.createElement("h3",{className:"title"},"\u0417\u0430\u0434\u0430\u0447\u0430 ",n+1),c.a.createElement("p",{className:a.completed?e+=" status":"toDo__text"},a.title),c.a.createElement("button",{onClick:function(){return t.del(a.id)},className:"btn btn-delete"},"X"),c.a.createElement("button",{onClick:function(){return t.done(a.id)},className:"btn btn-done"},"Done"))})))},v=a(8),j=function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(d.a)(this,a),(n=e.call(this,t)).state={data:[{text:"my name is Loan",id:1,done:!1},{text:"Today i shoul be Raon",id:2,done:!0}],inputText:"",axe:[]},n.maxId=6,n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.addItem=n.addItem.bind(Object(u.a)(n)),n.deleteTask=n.deleteTask.bind(Object(u.a)(n)),n.status=n.status.bind(Object(u.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(t){this.setState({inputText:t.target.value})}},{key:"addItem",value:function(t){if(t){var e={title:t,id:this.maxId++,completed:!1};console.log(this.state.axe),this.setState((function(t){var a=t.data;return{data:[].concat(Object(l.a)(a),[e])}}));v.post("https://jsonplaceholder.typicode.com/todos?_limit=5",e).then((function(t){}))}}},{key:"deleteTask",value:function(t){var e=this.state.data,a=e.findIndex((function(e){return e.id==t})),n=[].concat(Object(l.a)(e.slice(0,a)),Object(l.a)(e.slice(a+1)));console.log(a),this.setState((function(t){t.data;return{data:n}}))}},{key:"status",value:function(t){var e=this.state.data,a=e.find((function(e){return e.id==t})),n=e.findIndex((function(e){return e.id==t})),c=Object(s.a)(Object(s.a)({},a),{},{completed:!a.completed}),o=[].concat(Object(l.a)(e.slice(0,n)),[c],Object(l.a)(e.slice(n+1)));this.setState((function(t){t.data;return{data:o}})),console.log(this.state.data)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement(p,null),c.a.createElement(b,{onAdd:this.addItem,handleChange:this.handleChange,text:this.state.inputText}),c.a.createElement(f,{data:this.state.data,del:this.deleteTask,done:this.status})))}},{key:"componentDidMount",value:function(){var t=this;v.get("https://jsonplaceholder.typicode.com/todos?_limit=5").then((function(e){t.setState({data:e.data}),t.setState({axe:e})}))}}]),a}(c.a.Component);c.a.Component;i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.48d27bac.chunk.js.map