webpackJsonp([4],{106:function(e,t,a){"use strict";t["default"]={data:function(){return{form:{name:(new Date).getTime(),datatype:"tonghua",importtype:"文件",datavalue:"",desc:""},tagOptions:[{value:"name",label:"名字"},{value:"code",label:"身份证"},{value:"phone",label:"手机号码"},{value:"addr",label:"住址"},{value:"qq",label:"QQ"},{value:"email",label:"邮箱"}],tagValue:[],fileList:[{name:"food.jpeg",url:"https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"}]}},methods:{handleRemove:function(e,t){},handlePreview:function(e){},handleChangeDataType:function(){this.$data.form.datavalue=""},handleAddTag:function(e){this.$data.tags.push({key:e.currentTarget.value,name:e.currentTarget.value,type:"warning"}),e.currentTarget.value=""},onSubmit:function(){},handleClose:function(e){this.tags.splice(this.tags.indexOf(e),1)}}}},110:function(e,t,a){t=e.exports=a(11)(),t.push([e.i,"\n.title h3[data-v-3f4c6bce] {\n  font-size: 30px;\n  font-weight: 400;\n  color: #1f2f3d;\n}\n.title p[data-v-3f4c6bce] {\n  font-size: 12px;\n  color: #1f2f3d;\n}\n.import-form[data-v-3f4c6bce] {\n  box-shadow: 0 0 10px grey;\n  padding: 20px;\n}\n.tags[data-v-3f4c6bce] {\n  display: inline-block;\n  float: left;\n}\n.tags .el-tag[data-v-3f4c6bce] {\n    margin-left: 4px;\n}\n",""])},117:function(e,t,a){var n=a(110);"string"==typeof n&&(n=[[e.i,n,""]]);a(93)(n,{});n.locals&&(e.exports=n.locals)},129:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",[t("el-row",[t("el-col",{staticClass:"title",attrs:{span:12,offset:6}},[t("h3",[t("i",{staticClass:"iconfont icon-list"})," 数据导入"])," ",t("p",["外部数据导入系统，支持 txt/csv/excel 文件格式导入方式"])])])," ",t("el-row",[t("el-col",{attrs:{span:12,offset:6}},[t("el-form",{ref:"form",staticClass:"import-form",attrs:{model:e.form,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"编号"}},[t("el-input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],domProps:{value:e.form.name},on:{input:function(t){e.form.name=t}}})])," ",t("el-form-item",{attrs:{label:"导入类型"}},[t("el-select",{directives:[{name:"model",rawName:"v-model",value:e.form.datatype,expression:"form.datatype"}],attrs:{placeholder:"请选择要导入的数据类型"},domProps:{value:e.form.datatype},on:{change:e.handleChangeDataType,input:function(t){e.form.datatype=t}}},[t("el-option",{attrs:{label:"银行数据",value:"yinghang"}})," ",t("el-option",{attrs:{label:"房产数据",value:"fangchan"}})," ",t("el-option",{attrs:{label:"航班数据",value:"hangban"}})," ",t("el-option",{attrs:{label:"通话记录",value:"tonghua"}})," ",t("el-option",{attrs:{label:"酒店数据",value:"jiudian"}})])])," ","yinghang"==e.form.datatype?t("el-form-item",{attrs:{label:"银行"}},[t("el-select",{directives:[{name:"model",rawName:"v-model",value:e.form.datavalue,expression:"form.datavalue"}],attrs:{placeholder:"请选择银行"},domProps:{value:e.form.datavalue},on:{input:function(t){e.form.datavalue=t}}},[t("el-option",{attrs:{label:"工商银行",value:"gongshang"}})," ",t("el-option",{attrs:{label:"农业银行",value:"nongye"}})," ",t("el-option",{attrs:{label:"建设银行",value:"jianshe"}})," ",t("el-option",{attrs:{label:"民生银行",value:"minsheng"}})," ",t("el-option",{attrs:{label:"浦发银行",value:"pufa"}})])]):e._e()," ","hangban"==e.form.datatype?t("el-form-item",{attrs:{label:"航空公司"}},[t("el-select",{directives:[{name:"model",rawName:"v-model",value:e.form.datavalue,expression:"form.datavalue"}],attrs:{placeholder:"请选择航空公司"},domProps:{value:e.form.datavalue},on:{input:function(t){e.form.datavalue=t}}},[t("el-option",{attrs:{label:"东方航空",value:"dongfang"}})," ",t("el-option",{attrs:{label:"南方航空",value:"nanfang"}})," ",t("el-option",{attrs:{label:"首都航空",value:"shoudu"}})," ",t("el-option",{attrs:{label:"春秋航空",value:"chunqiu"}})," ",t("el-option",{attrs:{label:"长龙航空",value:"changlong"}})])]):e._e()," ","tonghua"==e.form.datatype?t("el-form-item",{attrs:{label:"运营商"}},[t("el-select",{directives:[{name:"model",rawName:"v-model",value:e.form.datavalue,expression:"form.datavalue"}],attrs:{placeholder:"请选择运营商"},domProps:{value:e.form.datavalue},on:{input:function(t){e.form.datavalue=t}}},[t("el-option",{attrs:{label:"中国移动",value:"yidong"}})," ",t("el-option",{attrs:{label:"中国联通",value:"liantong"}})," ",t("el-option",{attrs:{label:"中国电信",value:"dianxin"}})])]):e._e()," ",t("el-form-item",{attrs:{label:"字段设置"}},[t("el-select",{directives:[{name:"model",rawName:"v-model",value:e.tagValue,expression:"tagValue"}],attrs:{clearable:"",multiple:"",placeholder:"请选择"},domProps:{value:e.tagValue},on:{input:function(t){e.tagValue=t}}},[e._l(e.tagOptions,function(e){return t("el-option",{attrs:{label:e.label,value:e.value}})})])])," ",t("el-form-item",{attrs:{label:"导入方式"}},[t("el-radio-group",{directives:[{name:"model",rawName:"v-model",value:e.form.importtype,expression:"form.importtype"}],domProps:{value:e.form.importtype},on:{input:function(t){e.form.importtype=t}}},[t("el-radio",{attrs:{label:"文件"}})," ",t("el-radio",{attrs:{disabled:"",label:"数据库"}})])])," ",t("el-form-item",{attrs:{label:"选择文件"}},[t("el-upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"default-file-list":e.fileList}},[t("el-button",{attrs:{size:"small",type:"primary"}},["点击上传"])," ",t("div",{staticClass:"el-upload__tip",slot:"tip"},["只能上传txt/excel/csv文件"])])])," ",t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},["立即导入"])," ",t("el-button",["取消"])])])])])])},staticRenderFns:[]}},91:function(e,t,a){var n,l;a(117),n=a(106);var o=a(129);l=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(l=n=n["default"]),"function"==typeof l&&(l=l.options),l.render=o.render,l.staticRenderFns=o.staticRenderFns,l._scopeId="data-v-3f4c6bce",e.exports=n},93:function(e,t){function a(e,t){for(var a=0;a<e.length;a++){var n=e[a],l=d[n.id];if(l){l.refs++;for(var o=0;o<l.parts.length;o++)l.parts[o](n.parts[o]);for(;o<n.parts.length;o++)l.parts.push(i(n.parts[o],t))}else{for(var r=[],o=0;o<n.parts.length;o++)r.push(i(n.parts[o],t));d[n.id]={id:n.id,refs:1,parts:r}}}}function n(e){for(var t=[],a={},n=0;n<e.length;n++){var l=e[n],o=l[0],r=l[1],i=l[2],s=l[3],u={css:r,media:i,sourceMap:s};a[o]?a[o].parts.push(u):t.push(a[o]={id:o,parts:[u]})}return t}function l(e,t){var a=c(),n=h[h.length-1];if("top"===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function r(e){var t=document.createElement("style");return t.type="text/css",l(e,t),t}function i(e,t){var a,n,l;if(t.singleton){var i=v++;a=m||(m=r(t)),n=s.bind(null,a,i,!1),l=s.bind(null,a,i,!0)}else a=r(t),n=u.bind(null,a),l=function(){o(a)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else l()}}function s(e,t,a,n){var l=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=b(t,l);else{var o=document.createTextNode(l),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(o,r[t]):e.appendChild(o)}}function u(e,t){var a=t.css,n=t.media,l=t.sourceMap;if(n&&e.setAttribute("media",n),l&&(a+="\n/*# sourceURL="+l.sources[0]+" */",a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),c=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,h=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var l=n(e);return a(l,t),function(e){for(var o=[],r=0;r<l.length;r++){var i=l[r],s=d[i.id];s.refs--,o.push(s)}if(e){var u=n(e);a(u,t)}for(var r=0;r<o.length;r++){var s=o[r];if(0===s.refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete d[s.id]}}}};var b=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()}});