import{bf as e,r as a,bp as L,bq as R,R as T,bh as I,br as M,bs as N,bi as $,bt as E,bu as h,bv as D,bw as O,bx as A}from"./vendor-jmahd5-8.js";import{a as q,c as w,D as z,b,l as H}from"./index-BPH4mT__.js";import{o as m,q as F,d as l,m as y,L as x,A as U,b as g,r as S,t as W,u as C,v as u,M as Y,w as f,R as _,n as B}from"./antd.bundle-P-JQ724I.js";import{u as p}from"./index-BAUKrt56.js";import{items as G}from"./index-DI7EoyKL.js";/* empty css              */import"./library.bundle-CqWacUqc.js";import"./index-y9sw3G2s.js";function J(){const s=()=>{w()};return e.jsx(m,{title:"碎碎念念",styles:{body:{padding:0}},children:e.jsx(F,{arrows:!0,autoplay:!0,autoplaySpeed:5e3,style:{backgroundColor:"#212529",color:"#fff"},afterChange:s,children:q.map((i,n)=>e.jsx("div",{children:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"160px",padding:8,fontSize:16},children:i})},n))})})}function X(){const[{query:s}]=p("HomeObject","countdownDayList"),[i,n]=a.useState(new Date().toISOString()),[o,r]=a.useState(!1),[t,d]=a.useState([]);a.useEffect(()=>{r(!0),s().then(c=>{c&&d(c),r(!1)})},[]),a.useEffect(()=>{setInterval(()=>{n(l().format(z))},1e3)},[]);const k=c=>{const v=l(l(c).format(b)).diff(l(l(i).format(b)),"day");return v>0?`${v}天`:"就在今天"};return e.jsx(m,{title:"倒数日",children:e.jsx(y,{loading:o,children:e.jsx("div",{style:{overflowY:"scroll",maxHeight:190},children:t.map(c=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:e.jsxs("span",{children:[e.jsxs("span",{style:{fontWeight:"bolder"},children:[c.title,"："]}),e.jsx("span",{className:"nes-text is-error",children:k(c.date)})]})},c.id))})})})}const K=({icon:s,text:i})=>e.jsxs(g,{children:[T.createElement(s),i]});function P(){const[{query:s}]=p("DiaryObject","diaryList"),[i,n]=a.useState([]),[o,r]=a.useState(!1);return a.useEffect(()=>{r(!0),s().then(t=>{t&&n(t),r(!1)})},[]),e.jsx("div",{children:e.jsx(y,{loading:o,children:e.jsx(x,{bordered:!0,header:e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",color:"#000000e0",fontWeight:"600",fontSize:16},children:e.jsx("span",{children:"记事本"})}),style:{backgroundColor:"#fff",border:"1px solid #f0f0f0"},dataSource:i,renderItem:t=>e.jsx(x.Item,{actions:[e.jsx("div",{children:e.jsx(K,{icon:t.likeCount>0?L:R,text:t.likeCount},"list-vertical-like-o")},t.id)],children:e.jsx(x.Item.Meta,{avatar:e.jsx(U,{style:{backgroundColor:t.createName==="hty"?"#722ed1":"#13c2c2"},children:t.createName}),title:t.title,description:e.jsxs("div",{children:[e.jsx("div",{children:t.content}),e.jsxs("div",{style:{marginTop:4},children:["创建人：",t.createName||"hty"]})]})})},t.title)})})})}function Q(){const[{query:s}]=p("HomeObject","calendarList"),[i,n]=a.useState(!1),[o,r]=a.useState([]);return a.useEffect(()=>{n(!0),s().then(t=>{t&&r(t),n(!1)})},[]),e.jsx(m,{title:"日历",children:e.jsx(y,{loading:i,children:e.jsx("div",{style:{overflowY:"scroll",maxHeight:190},children:o.map((t,d)=>e.jsx("div",{style:{display:"flex",alignItems:"center"},children:e.jsx(S,{status:l(t.date).diff(l(),"day")>=0?"processing":"default",text:`${t.date}：${t.record}`})},`li-${d}`))})})})}function V(){return e.jsxs(g,{direction:"vertical",style:{width:"100%",padding:10},size:24,children:[e.jsx(J,{}),e.jsx(X,{}),e.jsx(Q,{}),e.jsx(P,{})]})}function Z(){return e.jsx("div",{style:{padding:10},children:e.jsx(W,{items:G.map(s=>({id:s.id,dot:s.dot,children:e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontWeight:800},children:s.label}),e.jsx("div",{children:s.children})]})})),pending:"未完待续..."})})}function ee(){const s=I(),i=localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")):{},n=a.useMemo(()=>`${100+l().diff(l("2024-02-23"),"day")/10}%`,[]),o=a.useMemo(()=>({together:l().diff(l("2023-12-30"),"day")}),[]),r=t=>{const{key:d}=t;switch(d){case"log":{s("/log");break}case"loginOut":{Y.confirm({content:"确定退出吗？",onOk(){H("退出登录"),localStorage.setItem("isLogin","0"),s("/login")}});break}}};return e.jsxs("div",{className:"user",children:[e.jsxs("div",{className:"avatar",children:[e.jsx("i",{className:i.username==="hty"?"avtar-h":"avtar-y"}),e.jsx("div",{className:"right",children:e.jsxs(g,{direction:"vertical",style:{width:"100%"},children:[e.jsx("div",{className:"name",children:i.username==="hty"?":-)":"关你什么柿.🍅"}),e.jsxs("div",{children:["状态：",e.jsx(S,{status:"success",text:"在线"})]}),e.jsxs("div",{children:[e.jsxs(C,{color:"#92cc41",children:["喜爱度: ",n]}),e.jsxs(C,{color:"#e76e55",children:["恋爱: ",o.together,"天"]})]})]})})]}),e.jsxs(u,{mode:"inline",selectable:!1,onClick:r,children:[e.jsx(u.Item,{icon:e.jsx(M,{}),children:"日志"},"log"),e.jsx(u.Item,{icon:e.jsx(N,{}),children:"退出"},"loginOut")]})]})}const j=({active:s,icon:i,text:n,onClick:o})=>e.jsxs(B,{flex:"auto",style:{textAlign:"center",color:s?"#57bb6b":""},onClick:o,children:[e.jsx("div",{style:{fontSize:16},children:i}),e.jsx("div",{style:{fontSize:12},children:n})]});function ce(){const s=I(),i=$(),[n,o]=a.useState("home");a.useEffect(()=>{r(i.pathname.replace("/mobile/",""))},[]);const r=t=>{w(),o(t),s(t)};return e.jsxs(f,{style:{overflow:"hidden",width:"100vw",height:"100vh"},children:[e.jsx(f.Content,{style:{overflowY:"scroll",overflowX:"hidden"},children:e.jsxs(E,{children:[n==="home"&&e.jsx(h,{path:"home",element:e.jsx(V,{})}),n==="dashboard"&&e.jsx(h,{path:"dashboard",element:e.jsx("div",{children:"暂无"})}),n==="history"&&e.jsx(h,{path:"history",element:e.jsx(Z,{})}),n==="user"&&e.jsx(h,{path:"user",element:e.jsx(ee,{})})]})}),e.jsx(f.Footer,{style:{padding:"6px 0px",backgroundColor:"#fff"},children:e.jsxs(_,{align:"middle",justify:"space-between",children:[e.jsx(j,{icon:e.jsx(D,{}),text:"首页",active:n==="home",onClick:()=>r("home")}),e.jsx(j,{icon:e.jsx(O,{}),text:"时间轴",active:n==="history",onClick:()=>r("history")}),e.jsx(j,{icon:e.jsx(A,{}),text:"我",active:n==="user",onClick:()=>r("user")})]})})]})}export{ce as default};
