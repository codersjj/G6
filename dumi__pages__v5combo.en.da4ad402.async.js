"use strict";(self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[]).push([[819,9656],{57536:function(e,a,d){d.r(a);var t=d(97163);a.default=t.default},97163:function(e,a,d){d.r(a);var t,o=d(73193),n=d.n(o),i=d(45332),r=d.n(i),u=d(58757),c=d(35667),s="undefined"!=typeof window?window.g6v5:null;a.default=function(){var e=(0,u.useRef)(null),a=(0,u.useState)(!1),d=r()(a,2),o=d[0],i=d[1];return(0,u.useEffect)((function(){t=new s.Graph({container:e.current,width:1e3,height:1e3,type:"graph",node:{labelShape:{position:"bottom",text:{fields:["id"],formatter:function(e){return e.id}}},labelBackgroundShape:{},animates:{update:[{fields:["opacity"],shapeId:"haloShape"}]}},combo:function(e){return{id:e.id,data:n()(n()({},e.data),{},{keyShape:{padding:[10,10,10,10],r:50},labelShape:{text:e.id},animates:{buildIn:[{fields:["opacity"],duration:500,delay:500+500*Math.random()}],buildOut:[{fields:["opacity"],duration:200}],update:[{fields:["lineWidth","r"],shapeId:"keyShape",duration:800},{fields:["opacity"],shapeId:"haloShape",duration:500}]}})}},data:{nodes:[{id:"node1",data:{parentId:"combo1",x:250,y:100}},{id:"node2",data:{parentId:"combo1",x:350,y:100}},{id:"node3",data:{parentId:"combo2",x:100,y:300}},{id:"node4",data:{parentId:"combo1",x:350,y:200}},{id:"node5",data:{x:600,y:300}}],edges:[{id:"edge1",source:"node1",target:"node2",data:{}},{id:"edge2",source:"node1",target:"node3",data:{}},{id:"edge3",source:"node1",target:"node4",data:{}},{id:"edge4",source:"node2",target:"node4",data:{}},{id:"edge5",source:"node3",target:"node4",data:{}},{id:"edge6",source:"node4",target:"node5",data:{}}],combos:[{id:"combo1",data:{parentId:"combo2"}},{id:"combo2",data:{}}]},modes:{default:["collapse-expand-combo",{type:"drag-node",key:"drag-node-behavior",enableTransient:!1},"drag-canvas","zoom-canvas",{type:"click-select",itemTypes:["node","edge","combo"]},{type:"hover-activate",itemTypes:["node","edge"]},{type:"drag-combo",key:"drag-combo-behavior",enableTransient:!1}]}})}),[]),(0,u.useEffect)((function(){t&&(t.updateBehavior({type:"drag-combo",key:"drag-node-behavior",updateComboStructure:o},"default"),t.updateBehavior({type:"drag-combo",key:"drag-combo-behavior",updateComboStructure:o},"default"))}),[o]),(0,c.jsx)("div",{ref:e,children:(0,c.jsxs)("div",{style:{display:"inline-flex",position:"absolute",left:"16px",top:"16px",zIndex:1},children:[(0,c.jsx)("div",{children:"拖拽 combo 时："}),(0,c.jsxs)("select",{className:"update-combo-structure",onChange:function(e){var a;return i("structure"===(null===(a=e.target)||void 0===a?void 0:a.value))},children:[(0,c.jsx)("option",{value:"structure",children:"更新结构"}),(0,c.jsx)("option",{value:"size",children:"更新大小"})]})]})})}}}]);