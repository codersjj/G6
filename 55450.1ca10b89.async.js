"use strict";(self.webpackChunk_antv_g6_site=self.webpackChunk_antv_g6_site||[]).push([[55450],{55450:function(n,e,t){let r;t.r(e),t.d(e,{dagre:function(){return j},force:function(){return S},initSync:function(){return W},start:function(){return I}});const i=new Array(32).fill(void 0);function o(n){return i[n]}i.push(void 0,null,!0,!1);let _=i.length;function c(n){const e=o(n);return function(n){n<36||(i[n]=_,_=n)}(n),e}function u(n){_===i.length&&i.push(i.length+1);const e=_;return _=i[e],i[e]=n,e}function b(n){return null==n}let f=new BigInt64Array;let a=new Int32Array;function g(){return 0===a.byteLength&&(a=new Int32Array(r.memory.buffer)),a}const w=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});w.decode();let s=new Uint8Array;function l(){return 0===s.byteLength&&(s=new Uint8Array(r.memory.buffer)),s}function d(n,e){return w.decode(l().subarray(n,n+e))}let y=new Float64Array;let m=0;const h=new TextEncoder("utf-8"),p="function"==typeof h.encodeInto?function(n,e){return h.encodeInto(n,e)}:function(n,e){const t=h.encode(n);return e.set(t),{read:n.length,written:t.length}};function A(n,e,t){if(void 0===t){const t=h.encode(n),r=e(t.length);return l().subarray(r,r+t.length).set(t),m=t.length,r}let r=n.length,i=e(r);const o=l();let _=0;for(;_<r;_++){const e=n.charCodeAt(_);if(e>127)break;o[i+_]=e}if(_!==r){0!==_&&(n=n.slice(_)),i=t(i,r,r=_+3*n.length);const e=l().subarray(i+_,i+r);_+=p(n,e).written}return m=_,i}function v(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=v(n[0]));for(let r=1;r<e;r++)t+=", "+v(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}function I(){r.start()}function S(n){return c(r.force(u(n)))}function j(n){return c(r.dagre(u(n)))}function k(n,e){try{return n.apply(this,e)}catch(n){r.__wbindgen_exn_store(u(n))}}function x(){const n={wbg:{}};return n.wbg.__wbindgen_object_drop_ref=function(n){c(n)},n.wbg.__wbindgen_is_object=function(n){const e=o(n);return"object"==typeof e&&null!==e},n.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(n,e){return u(o(n)[o(e)])},n.wbg.__wbindgen_is_undefined=function(n){return void 0===o(n)},n.wbg.__wbindgen_in=function(n,e){return o(n)in o(e)},n.wbg.__wbg_new_1d9a920c6bfc44a8=function(){return u(new Array)},n.wbg.__wbindgen_number_new=function(n){return u(n)},n.wbg.__wbg_push_740e4b286702d964=function(n,e){return o(n).push(o(e))},n.wbg.__wbg_new_0b9bfdd97583284e=function(){return u(new Object)},n.wbg.__wbg_set_a68214f35c417fa9=function(n,e,t){o(n)[e>>>0]=c(t)},n.wbg.__wbg_set_841ac57cff3d672b=function(n,e,t){o(n)[c(e)]=c(t)},n.wbg.__wbg_isArray_27c46c67f498e15d=function(n){return Array.isArray(o(n))},n.wbg.__wbg_length_6e3bbe7c8bd4dbd8=function(n){return o(n).length},n.wbg.__wbindgen_is_bigint=function(n){return"bigint"==typeof o(n)},n.wbg.__wbindgen_bigint_get_as_i64=function(n,e){const t=o(e),i="bigint"==typeof t?t:void 0;(0===f.byteLength&&(f=new BigInt64Array(r.memory.buffer)),f)[n/8+1]=b(i)?0n:i,g()[n/4+0]=!b(i)},n.wbg.__wbindgen_bigint_from_u64=function(n){return u(BigInt.asUintN(64,n))},n.wbg.__wbindgen_jsval_eq=function(n,e){return o(n)===o(e)},n.wbg.__wbindgen_error_new=function(n,e){return u(new Error(d(n,e)))},n.wbg.__wbindgen_number_get=function(n,e){const t=o(e),i="number"==typeof t?t:void 0;(0===y.byteLength&&(y=new Float64Array(r.memory.buffer)),y)[n/8+1]=b(i)?0:i,g()[n/4+0]=!b(i)},n.wbg.__wbindgen_jsval_loose_eq=function(n,e){return o(n)==o(e)},n.wbg.__wbindgen_string_get=function(n,e){const t=o(e),i="string"==typeof t?t:void 0;var _=b(i)?0:A(i,r.__wbindgen_malloc,r.__wbindgen_realloc),c=m;g()[n/4+1]=c,g()[n/4+0]=_},n.wbg.__wbindgen_boolean_get=function(n){const e=o(n);return"boolean"==typeof e?e?1:0:2},n.wbg.__wbg_get_57245cc7d7c7619d=function(n,e){return u(o(n)[e>>>0])},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return u(new Error)},n.wbg.__wbg_stack_658279fe44541cf6=function(n,e){const t=A(o(e).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),i=m;g()[n/4+1]=i,g()[n/4+0]=t},n.wbg.__wbg_error_f851667af71bcfc6=function(n,e){try{console.error(d(n,e))}finally{r.__wbindgen_free(n,e)}},n.wbg.__wbg_next_aaef7c8aa5e212ac=function(){return k((function(n){return u(o(n).next())}),arguments)},n.wbg.__wbg_done_1b73b0672e15f234=function(n){return o(n).done},n.wbg.__wbg_value_1ccc36bc03462d71=function(n){return u(o(n).value)},n.wbg.__wbg_iterator_6f9d4f28845f426c=function(){return u(Symbol.iterator)},n.wbg.__wbg_get_765201544a2b6869=function(){return k((function(n,e){return u(Reflect.get(o(n),o(e)))}),arguments)},n.wbg.__wbindgen_is_function=function(n){return"function"==typeof o(n)},n.wbg.__wbg_call_97ae9d8645dc388b=function(){return k((function(n,e){return u(o(n).call(o(e)))}),arguments)},n.wbg.__wbg_next_579e583d33566a86=function(n){return u(o(n).next)},n.wbg.__wbg_length_9e1ae1900cb0fbd5=function(n){return o(n).length},n.wbg.__wbindgen_memory=function(){return u(r.memory)},n.wbg.__wbg_buffer_3f3d764d4747d564=function(n){return u(o(n).buffer)},n.wbg.__wbg_new_8c3f0052272a457a=function(n){return u(new Uint8Array(o(n)))},n.wbg.__wbg_set_83db9690f9353e79=function(n,e,t){o(n).set(o(e),t>>>0)},n.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003=function(n){let e;try{e=o(n)instanceof Uint8Array}catch{e=!1}return e},n.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b=function(n){let e;try{e=o(n)instanceof ArrayBuffer}catch{e=!1}return e},n.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a=function(n){return Number.isSafeInteger(o(n))},n.wbg.__wbindgen_string_new=function(n,e){return u(d(n,e))},n.wbg.__wbindgen_object_clone_ref=function(n){return u(o(n))},n.wbg.__wbindgen_debug_string=function(n,e){const t=A(v(o(e)),r.__wbindgen_malloc,r.__wbindgen_realloc),i=m;g()[n/4+1]=i,g()[n/4+0]=t},n.wbg.__wbindgen_throw=function(n,e){throw new Error(d(n,e))},n}function U(n,e){return r=n.exports,B.__wbindgen_wasm_module=e,f=new BigInt64Array,y=new Float64Array,a=new Int32Array,s=new Uint8Array,r.__wbindgen_start(),r}function W(n){const e=x();n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n));return U(new WebAssembly.Instance(n,e),n)}async function B(n){void 0===n&&(n=new URL(t(35438),t.b));const e=x();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n));const{instance:r,module:i}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,e);return U(r,i)}e.default=B},35438:function(n,e,t){n.exports=t.p+"static/antv_layout_wasm_bg.9e9ba5da.wasm"}}]);