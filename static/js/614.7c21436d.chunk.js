"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[614],{614:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var a=t(434),r=t(791),s=t(600),o=function(e){return e.contacts.items},c=function(e){var n=e.contacts;return{loading:n.loading,error:n.error}},l=function(e){return e.filter},i=t(606),u=t(942),m=t(413),d=t(885),h={form:"ContactForm_form__jW2+H",btn:"ContactForm_btn__y21Oj",label:"ContactForm_label__QFDpC",input:"ContactForm_input__JLCMu"},p=t(184),f={name:"",number:""},_=function(e){var n=e.onSubmit,t=(0,r.useState)((0,m.Z)({},f)),a=(0,d.Z)(t,2),s=a[0],o=a[1],c=function(e){var n=e.currentTarget,t=n.name,a=n.value;o((0,m.Z)((0,m.Z)({},s),{},(0,u.Z)({},t,a)))},l=s.name,i=s.number;return(0,p.jsxs)("form",{className:h.form,onSubmit:function(e){e.preventDefault(),n((0,m.Z)({},s)),o((0,m.Z)({},f))},children:[(0,p.jsxs)("label",{className:h.label,children:[(0,p.jsx)("span",{className:h.txt,children:"name"}),(0,p.jsx)("input",{className:h.input,value:l,onChange:c,type:"text",name:"name",placeholder:"Franklin D. Roosevelt",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,p.jsxs)("label",{className:h.label,children:[(0,p.jsx)("span",{className:h.txt,children:"number"}),(0,p.jsx)("input",{className:h.input,value:i,onChange:c,type:"tel",name:"number",placeholder:"111-22-33",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,p.jsx)("button",{className:h.btn,type:"submit",children:"add contact"})]})};_.defaultProps={onSubmit:function(){}};var x=_,b={label:"Filter_label__xoyem",input:"Filter_input__XCQUd"},j=function(e){var n=e.value,t=e.onChange;return(0,p.jsxs)("label",{className:b.label,children:[(0,p.jsx)("span",{className:b.text,children:"find contacts by name"}),(0,p.jsx)("input",{className:b.input,value:n,onChange:t,type:"text",name:"filter"})]})},v="ContactListItem_item__jM9j9",C="ContactListItem_btn__ftnp4",g=function(e){var n=e.name,t=e.number,a=e.onDeleteContact,r=e.id;return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("li",{className:v,children:["".concat(n," : ").concat(t),(0,p.jsx)("button",{className:C,onClick:function(){return a(r)},children:"delete"})]})})},N={list:"ContactList_list__ZbMa+"},y=function(e){var n=e.contacts,t=e.onDeleteContact;return(0,p.jsx)(p.Fragment,{children:n.length>0?(0,p.jsx)("ul",{className:N.list,children:null===n||void 0===n?void 0:n.map((function(e){return(0,p.jsx)(g,{className:N.item,id:e.id,name:e.name,number:e.number,onDeleteContact:t},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}())}))}):(0,p.jsx)("div",{children:(0,p.jsx)("p",{className:N.text,children:"your phonebook is empty"})})})},F=t(121),Z=function(e){var n=e.children;return(0,p.jsx)("div",{className:F.Z.container,children:n})},k="Titles_title__Zhbto",w="Titles_secondary__title__BxTfT",S=function(){return(0,p.jsx)("h1",{className:k,children:"phonebook"})},D=function(){return(0,p.jsx)("h2",{className:w,children:"contacts"})},L=function(){return(0,p.jsx)("h2",{className:w,children:"...loading"})},A=function(){var e=(0,a.v9)(o),n=(0,a.v9)(c).loading,t=(0,a.v9)(l),u=function(e,n){if(!n)return e;var t=n.toLowerCase();return e.filter((function(e){var n=e.name,a=e.number,r=n.toLowerCase(),s=a.toLowerCase();return r.includes(t)||s.includes(t)}))}(e,t),m=(0,a.I0)();(0,r.useEffect)((function(){m((0,s.yF)())}),[m]);return(0,p.jsxs)(Z,{children:[(0,p.jsx)(S,{}),(0,p.jsx)(x,{onSubmit:function(e){m((0,s.zS)(e))},contacts:e}),e.length>0?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(D,{})," ",(0,p.jsx)(j,{value:t,onChange:function(e){var n=e.target;m((0,i.T)(n.value))}})]}):(0,p.jsx)("div",{children:(0,p.jsx)("p",{className:N.text,children:"your phonebook is empty"})}),!n&&e.length>0&&(0,p.jsx)(y,{contacts:u,onDeleteContact:function(e){m((0,s.vH)(e))}}),n&&(0,p.jsx)(L,{})]})}}}]);
//# sourceMappingURL=614.7c21436d.chunk.js.map