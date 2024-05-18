(()=>{var e,t={448:(e,t,o)=>{"use strict";o.r(t);const r=window.wp.hooks,c=window.wc.wcSettings;var n=o(9196);const a=window.wp.components;var l=o(5736),s=o(2911),i=o(1191);const m=(0,l.__)("Product Title","woocommerce"),u=((0,n.createElement)(s.Z,{icon:i.Z,className:"wc-block-editor-components-block-icon"}),(0,l.__)("Display the title of a product.","woocommerce")),d=window.wp.blocks;function p(e,{blockDescription:t,blockIcon:o,blockTitle:r,variationName:c,scope:n}){(0,d.registerBlockVariation)(e,{description:t,name:c,title:r,isActive:e=>e.__woocommerceNamespace===c,icon:{src:o},attributes:{__woocommerceNamespace:c},scope:n})}const g="core/post-title",_="woocommerce/product-query/product-title";p(g,{blockDescription:u,blockIcon:(0,n.createElement)(a.Icon,{icon:i.Z}),blockTitle:m,variationName:_,scope:["block"]});var b=o(7255);const w=(0,l.__)("Product Summary","woocommerce"),h=((0,n.createElement)(s.Z,{icon:b.Z,className:"wc-block-editor-components-block-icon"}),"core/post-excerpt");p(h,{blockDescription:(0,l.__)("Display a short description about a product.","woocommerce"),blockIcon:(0,n.createElement)(a.Icon,{icon:b.Z}),blockTitle:w,variationName:"woocommerce/product-query/product-summary",scope:["block"]});var y=o(6080);const k="core/post-template",f="woocommerce/product-query/product-template";p(k,{blockDescription:(0,l.__)("Contains the block elements used to render a product, like its name, featured image, rating, and more.","woocommerce"),blockIcon:(0,n.createElement)(a.Icon,{icon:y.Z}),blockTitle:(0,l.__)("Product template","woocommerce"),variationName:f,scope:["block","inserter"]});const E=window.wp.blockEditor,v=window.wp.data;var S=o(6554),C=o(5656),N=o(9307);o(1612);const x=({text:e,title:t=(0,l.__)("Feedback?","woocommerce"),url:o})=>{const[r,c]=(0,N.useState)(!1);return(0,N.useEffect)((()=>{c(!0)}),[]),(0,n.createElement)(n.Fragment,null,r&&(0,n.createElement)("div",{className:"wc-block-feedback-prompt"},(0,n.createElement)(s.Z,{icon:S.Z}),(0,n.createElement)("h2",{className:"wc-block-feedback-prompt__title"},t),(0,n.createElement)("p",{className:"wc-block-feedback-prompt__text"},e),(0,n.createElement)("a",{href:o,className:"wc-block-feedback-prompt__link",rel:"noreferrer noopener",target:"_blank"},(0,l.__)("Give us your feedback.","woocommerce"),(0,n.createElement)(s.Z,{icon:C.Z,size:16}))))},I=()=>(0,n.createElement)(x,{text:(0,l.__)("Thanks for trying out the Products block! Help us make it better by sharing your feedback.","woocommerce"),title:(0,l.__)("Share your feedback!","woocommerce"),url:"https://airtable.com/shrFX5FAqmCY6hVYI"}),P=e=>"number"==typeof e,O=e=>"boolean"==typeof e,A=e=>"core/query"===e.name&&"woocommerce/product-query"===e.attributes.namespace,B=(e,t)=>{let o=[];return e.forEach((e=>{t(e)&&(o=[...o,e.clientId]),o=[...o,...B(e.innerBlocks,t)]})),o},T=(0,c.getSettingWithCoercion)("postTemplateHasSupportForGridView",!1,O);function L(e,t){const{[t]:o,...r}=e;return r}let q=function(e){return e.GRID="flex",e.STACK="list",e}({}),F=function(e){return e.SINGLE="single",e.THUMBNAIL="thumbnail",e}({});JSON.parse('{"name":"woocommerce/product-collection"}').name;const R=(0,c.getSetting)("stockStatusOptions",[]),j=(0,c.getSetting)("hideOutOfStockItems",!1),$=()=>j?Object.keys(L(R,"outofstock")):Object.keys(R),V={query:{perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",search:"",exclude:[],inherit:null,taxQuery:{},isProductCollectionBlock:!0,featured:!1,woocommerceOnSale:!1,woocommerceStockStatus:$(),woocommerceAttributes:[],woocommerceHandPickedProducts:[],timeFrame:void 0,priceRange:void 0},tagName:"div",displayLayout:{type:q.GRID,columns:3,shrinkColumns:!0},queryContextIncludes:["collection"],forcePageReload:!1},G=($(),F.THUMBNAIL,({name:e,attributes:t})=>"core/post-template"===e&&"woocommerce/product-query/product-template"===t.__woocommerceNamespace),D=e=>"grid"===e?q.GRID:"default"===e?q.STACK:q.GRID,M=e=>e.map((e=>{const{name:t,attributes:o}=e,r=M(e.innerBlocks);return G(e)?((e,t)=>{const{__woocommerceNamespace:o,className:r,layout:c,...n}=e.attributes;return(0,d.createBlock)("woocommerce/product-template",n,t)})(e,r):(({name:e,attributes:t})=>"core/post-title"===e&&"woocommerce/product-query/product-title"===t.__woocommerceNamespace)(e)?((e,t)=>{const{__woocommerceNamespace:o,...r}=e.attributes;return(0,d.createBlock)("core/post-title",{__woocommerceNamespace:"woocommerce/product-collection/product-title",...r},t)})(e,r):(({name:e,attributes:t})=>"core/post-excerpt"===e&&"woocommerce/product-query/product-summary"===t.__woocommerceNamespace)(e)?((e,t)=>{const{__woocommerceNamespace:o,...r}=e.attributes;return(0,d.createBlock)("core/post-excerpt",{__woocommerceNamespace:"woocommerce/product-collection/product-summary",...r},t)})(e,r):(0,d.createBlock)(t,o,r)})),Z=e=>{const t=(0,v.select)("core/block-editor").getBlock(e),o=((e,t)=>{const o=(0,v.select)("core/block-editor").getBlockRootClientId(e)||void 0;return(0,v.select)("core/block-editor").canInsertBlockType("woocommerce/product-collection",o)})(e);if(t&&o){const{attributes:o={},innerBlocks:r=[]}=t,c=((e,t)=>{const o=t.find(G),{layout:r}=(null==o?void 0:o.attributes)||{};return T?(e=>{if(void 0===e)return V.displayLayout;const{type:t,columnCount:o}=e;return{type:D(t),columns:o}})(r):e.displayLayout})(o,r),n=(e=>{const{query:t,namespace:o,...r}=e,{__woocommerceAttributes:c,__woocommerceStockStatus:n,__woocommerceOnSale:a,include:l,...s}=t;return{...r,query:{woocommerceAttributes:c,woocommerceStockStatus:n,woocommerceOnSale:a,woocommerceHandPickedProducts:l,taxQuery:{},isProductCollectionBlock:!0,...s},convertedFromProducts:!0}})({...o,displayLayout:c}),a=M(r),l=(0,d.createBlock)("woocommerce/product-collection",n,a);return(0,v.dispatch)("core/block-editor").replaceBlock(e,l),!0}return!1},H=()=>{var e;e={status:"notseen",time:Date.now(),displayCount:0},window.localStorage.setItem("wc-blocks_upgraded-products-to-product-collection",JSON.stringify(e)),(()=>{if(0===(0,v.select)("core/block-editor").getGlobalBlockCount("core/query"))return;const e=(t=(0,v.select)("core/block-editor").getBlocks(),B(t,A));var t;0!==e.length&&(e=>{const t=e.map(Z);t.length&&t.every((e=>!!e))})(e)})()},U=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function z(e,t){return U(e)&&t in e}const W=e=>{if(U(e)){const t=e.getEditedPostType();return"wp_template"===t||"wp_template_part"===t}return!1},Q="woocommerce/product-query",J="core/query",Y=["attributes","presets","productSelector","onSale","stockStatus","wooInherit"],K=["taxQuery","search",...Y],X=(0,c.getSetting)("stockStatusOptions",[]),ee=(0,c.getSetting)("hideOutOfStockItems",!1),te={allowedControls:K,displayLayout:{type:"flex",columns:3},query:{perPage:9,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",author:"",search:"",exclude:[],sticky:"",inherit:!1,__woocommerceAttributes:[],__woocommerceStockStatus:ee?Object.keys(L(X,"outofstock")):Object.keys(X)}},oe=[["core/post-template",{__woocommerceNamespace:f,className:"products-block-post-template",...(0,c.getSettingWithCoercion)("postTemplateHasSupportForGridView",!1,O)&&{layout:{type:"grid",columnCount:3}}},[["woocommerce/product-image",{imageSizing:F.THUMBNAIL}],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",style:{spacing:{margin:{bottom:"0.75rem",top:"0"}}},isLink:!0,__woocommerceNamespace:_}],["woocommerce/product-price",{textAlign:"center",fontSize:"small"}],["woocommerce/product-button",{textAlign:"center",fontSize:"small"}]]],["core/query-pagination",{layout:{type:"flex",justifyContent:"center"}}],["core/query-no-results"]];let re=function(e){return e.PRODUCT_QUERY="woocommerce/product-query",e.RELATED_PRODUCTS="woocommerce/related-products",e}({});function ce(e,t){const{query:o}=e.attributes;e.setAttributes({query:{...o,...t}})}var ne=o(3849),ae=o.n(ne);function le(e,t,o){const r=new Set(t.map((e=>e[o])));return e.filter((e=>!r.has(e[o])))}const se=window.wp.htmlEntities,ie={clear:(0,l.__)("Clear all selected items","woocommerce"),noItems:(0,l.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:(0,l.__)("No results for %s","woocommerce"),search:(0,l.__)("Search for items","woocommerce"),selected:e=>(0,l.sprintf)(/* translators: Number of items selected from list. */ /* translators: Number of items selected from list. */
(0,l._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:(0,l.__)("Search results updated.","woocommerce")},me=(e,t=e)=>{const o=e.reduce(((e,t)=>{const o=t.parent||0;return e[o]||(e[o]=[]),e[o].push(t),e}),{}),r=("id",t.reduce(((e,t)=>(e[String(t.id)]=t,e)),{}));const c=["0"],n=(e={})=>e.parent?[...n(r[e.parent]),e.name]:e.name?[e.name]:[],a=e=>e.map((e=>{const t=o[e.id];return c.push(""+e.id),{...e,breadcrumbs:n(r[e.parent]),children:t&&t.length?a(t):[]}})),l=a(o[0]||[]);return Object.entries(o).forEach((([e,t])=>{c.includes(e)||l.push(...a(t||[]))})),l},ue=(e,t)=>{if(!t)return e;const o=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(o).map(((e,t)=>o.test(e)?(0,n.createElement)("strong",{key:t},e):(0,n.createElement)(N.Fragment,{key:t},e)))},de=({label:e})=>(0,n.createElement)("span",{className:"woocommerce-search-list__item-count"},e),pe=e=>{const{item:t,search:o}=e,r=t.breadcrumbs&&t.breadcrumbs.length;return(0,n.createElement)("span",{className:"woocommerce-search-list__item-label"},r?(0,n.createElement)("span",{className:"woocommerce-search-list__item-prefix"},1===(c=t.breadcrumbs).length?c.slice(0,1).toString():2===c.length?c.slice(0,1).toString()+" › "+c.slice(-1).toString():c.slice(0,1).toString()+" … "+c.slice(-1).toString()):null,(0,n.createElement)("span",{className:"woocommerce-search-list__item-name"},ue((0,se.decodeEntities)(t.name),o)));var c},ge=({countLabel:e,className:t,depth:o=0,controlId:r="",item:c,isSelected:l,isSingle:s,onSelect:i,search:m="",selected:u,useExpandedPanelId:d,...p})=>{var g,_;const[b,w]=d,h=null!=e&&void 0!==c.count&&null!==c.count,y=!(null===(g=c.breadcrumbs)||void 0===g||!g.length),k=!(null===(_=c.children)||void 0===_||!_.length),f=b===c.id,E=ae()(["woocommerce-search-list__item",`depth-${o}`,t],{"has-breadcrumbs":y,"has-children":k,"has-count":h,"is-expanded":f,"is-radio-button":s}),v=p.name||`search-list-item-${r}`,S=`${v}-${c.id}`,C=(0,N.useCallback)((()=>{w(f?-1:Number(c.id))}),[f,c.id,w]);return k?(0,n.createElement)("div",{className:E,onClick:C,onKeyDown:e=>"Enter"===e.key||" "===e.key?C():null,role:"treeitem",tabIndex:0},s?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("input",{type:"radio",id:S,name:v,value:c.value,onChange:i(c),onClick:e=>e.stopPropagation(),checked:l,className:"woocommerce-search-list__item-input",...p}),(0,n.createElement)(pe,{item:c,search:m}),h?(0,n.createElement)(de,{label:e||c.count}):null):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(a.CheckboxControl,{className:"woocommerce-search-list__item-input",checked:l,...!l&&c.children.some((e=>u.find((t=>t.id===e.id))))?{indeterminate:!0}:{},label:ue((0,se.decodeEntities)(c.name),m),onChange:()=>{l?i(le(u,c.children,"id"))():i(function(e,t,o){const r=le(t,e,"id");return[...e,...r]}(u,c.children))()},onClick:e=>e.stopPropagation()}),h?(0,n.createElement)(de,{label:e||c.count}):null)):(0,n.createElement)("label",{htmlFor:S,className:E},s?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("input",{...p,type:"radio",id:S,name:v,value:c.value,onChange:i(c),checked:l,className:"woocommerce-search-list__item-input"}),(0,n.createElement)(pe,{item:c,search:m})):(0,n.createElement)(a.CheckboxControl,{...p,id:S,name:v,className:"woocommerce-search-list__item-input",value:(0,se.decodeEntities)(c.value),label:ue((0,se.decodeEntities)(c.name),m),onChange:i(c),checked:l}),h?(0,n.createElement)(de,{label:e||c.count}):null)},_e=ge;var be=o(2720),we=o(4333),he=o(837);o(1058);const ye=({id:e,label:t,popoverContents:o,remove:r,screenReaderLabel:c,className:i=""})=>{const[m,u]=(0,N.useState)(!1),d=(0,we.useInstanceId)(ye);if(c=c||t,!t)return null;t=(0,se.decodeEntities)(t);const p=ae()("woocommerce-tag",i,{"has-remove":!!r}),g=`woocommerce-tag__label-${d}`,_=(0,n.createElement)(n.Fragment,null,(0,n.createElement)("span",{className:"screen-reader-text"},c),(0,n.createElement)("span",{"aria-hidden":"true"},t));return(0,n.createElement)("span",{className:p},o?(0,n.createElement)(a.Button,{className:"woocommerce-tag__text",id:g,onClick:()=>u(!0)},_):(0,n.createElement)("span",{className:"woocommerce-tag__text",id:g},_),o&&m&&(0,n.createElement)(a.Popover,{onClose:()=>u(!1)},o),r&&(0,n.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:r(e),label:(0,l.sprintf)(
// Translators: %s label.
// Translators: %s label.
(0,l.__)("Remove %s","woocommerce"),t),"aria-describedby":g},(0,n.createElement)(s.Z,{icon:he.Z,size:20,className:"clear-icon",role:"img"})))},ke=ye;o(9658);const fe=e=>(0,n.createElement)(_e,{...e}),Ee=e=>{const{list:t,selected:o,renderItem:r,depth:c=0,onSelect:a,instanceId:l,isSingle:s,search:i,useExpandedPanelId:m}=e,[u]=m;return t?(0,n.createElement)(N.Fragment,null,t.map((t=>{var d,p;const g=null!==(d=t.children)&&void 0!==d&&d.length&&!s?t.children.every((({id:e})=>o.find((t=>t.id===e)))):!!o.find((({id:e})=>e===t.id)),_=(null===(p=t.children)||void 0===p?void 0:p.length)&&u===t.id;return(0,n.createElement)(N.Fragment,{key:t.id},(0,n.createElement)("li",null,r({item:t,isSelected:g,onSelect:a,isSingle:s,selected:o,search:i,depth:c,useExpandedPanelId:m,controlId:l})),_?(0,n.createElement)(Ee,{...e,list:t.children,depth:c+1}):null)}))):null},ve=({isLoading:e,isSingle:t,selected:o,messages:r,onChange:c,onRemove:s})=>{if(e||t||!o)return null;const i=o.length;return(0,n.createElement)("div",{className:"woocommerce-search-list__selected"},(0,n.createElement)("div",{className:"woocommerce-search-list__selected-header"},(0,n.createElement)("strong",null,r.selected(i)),i>0?(0,n.createElement)(a.Button,{variant:"link",isDestructive:!0,onClick:()=>c([]),"aria-label":r.clear},(0,l.__)("Clear all","woocommerce")):null),i>0?(0,n.createElement)("ul",null,o.map(((e,t)=>(0,n.createElement)("li",{key:t},(0,n.createElement)(ke,{label:e.name,id:e.id,remove:s}))))):null)},Se=({filteredList:e,search:t,onSelect:o,instanceId:r,useExpandedPanelId:c,...a})=>{const{messages:i,renderItem:m,selected:u,isSingle:d}=a,p=m||fe;return 0===e.length?(0,n.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},(0,n.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},(0,n.createElement)(s.Z,{icon:be.Z,role:"img"})),(0,n.createElement)("span",{className:"woocommerce-search-list__not-found-text"},t?(0,l.sprintf)(i.noResults,t):i.noItems)):(0,n.createElement)("ul",{className:"woocommerce-search-list__list"},(0,n.createElement)(Ee,{useExpandedPanelId:c,list:e,selected:u,renderItem:p,onSelect:o,instanceId:r,isSingle:d,search:t}))},Ce=e=>{const{className:t="",isCompact:o,isHierarchical:r,isLoading:c,isSingle:s,list:i,messages:m=ie,onChange:u,onSearch:d,selected:p,type:g="text",debouncedSpeak:_}=e,[b,w]=(0,N.useState)(""),h=(0,N.useState)(-1),y=(0,we.useInstanceId)(Ce),k=(0,N.useMemo)((()=>({...ie,...m})),[m]),f=(0,N.useMemo)((()=>((e,t,o)=>{if(!t)return o?me(e):e;const r=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),c=e.map((e=>!!r.test(e.name)&&e)).filter(Boolean);return o?me(c,e):c})(i,b,r)),[i,b,r]);(0,N.useEffect)((()=>{_&&_(k.updated)}),[_,k]),(0,N.useEffect)((()=>{"function"==typeof d&&d(b)}),[b,d]);const E=(0,N.useCallback)((e=>()=>{s&&u([]);const t=p.findIndex((({id:t})=>t===e));u([...p.slice(0,t),...p.slice(t+1)])}),[s,p,u]),v=(0,N.useCallback)((e=>()=>{Array.isArray(e)?u(e):-1===p.findIndex((({id:t})=>t===e.id))?u(s?[e]:[...p,e]):E(e.id)()}),[s,E,u,p]),S=(0,N.useCallback)((e=>{const[t]=p.filter((t=>!e.find((e=>t.id===e.id))));E(t.id)()}),[E,p]);return(0,n.createElement)("div",{className:ae()("woocommerce-search-list",t,{"is-compact":o,"is-loading":c,"is-token":"token"===g})},"text"===g&&(0,n.createElement)(ve,{...e,onRemove:E,messages:k}),(0,n.createElement)("div",{className:"woocommerce-search-list__search"},"text"===g?(0,n.createElement)(a.TextControl,{label:k.search,type:"search",value:b,onChange:e=>w(e)}):(0,n.createElement)(a.FormTokenField,{disabled:c,label:k.search,onChange:S,onInputChange:e=>w(e),suggestions:[],__experimentalValidateInput:()=>!1,value:c?[(0,l.__)("Loading…","woocommerce")]:p.map((e=>({...e,value:e.name}))),__experimentalShowHowTo:!1})),c?(0,n.createElement)("div",{className:"woocommerce-search-list__list"},(0,n.createElement)(a.Spinner,null)):(0,n.createElement)(Se,{...e,search:b,filteredList:f,messages:k,onSelect:v,instanceId:y,useExpandedPanelId:h}))},Ne=((0,a.withSpokenMessages)(Ce),window.wp.url),xe=window.wp.apiFetch;var Ie,Pe,Oe,Ae,Be,Te,Le,qe,Fe,Re,je=o.n(xe);const $e=(0,c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),Ve=($e.pluginUrl,$e.pluginUrl,$e.buildPhase,null===(Ie=c.STORE_PAGES.shop)||void 0===Ie||Ie.permalink,null===(Pe=c.STORE_PAGES.checkout)||void 0===Pe||Pe.id,null===(Oe=c.STORE_PAGES.checkout)||void 0===Oe||Oe.permalink,null===(Ae=c.STORE_PAGES.privacy)||void 0===Ae||Ae.permalink,null===(Be=c.STORE_PAGES.privacy)||void 0===Be||Be.title,null===(Te=c.STORE_PAGES.terms)||void 0===Te||Te.permalink,null===(Le=c.STORE_PAGES.terms)||void 0===Le||Le.title,null===(qe=c.STORE_PAGES.cart)||void 0===qe||qe.id,null===(Fe=c.STORE_PAGES.cart)||void 0===Fe||Fe.permalink,null!==(Re=c.STORE_PAGES.myaccount)&&void 0!==Re&&Re.permalink?c.STORE_PAGES.myaccount.permalink:(0,c.getSetting)("wpLoginUrl","/wp-login.php"),(0,c.getSetting)("localPickupEnabled",!1),(0,c.getSetting)("countries",{})),Ge=(0,c.getSetting)("countryData",{}),De=(Object.fromEntries(Object.keys(Ge).filter((e=>!0===Ge[e].allowBilling)).map((e=>[e,Ve[e]||""]))),Object.fromEntries(Object.keys(Ge).filter((e=>!0===Ge[e].allowBilling)).map((e=>[e,Ge[e].states||[]]))),Object.fromEntries(Object.keys(Ge).filter((e=>!0===Ge[e].allowShipping)).map((e=>[e,Ve[e]||""]))),Object.fromEntries(Object.keys(Ge).filter((e=>!0===Ge[e].allowShipping)).map((e=>[e,Ge[e].states||[]]))),Object.fromEntries(Object.keys(Ge).map((e=>[e,Ge[e].locale||[]]))),{address:["first_name","last_name","company","address_1","address_2","city","postcode","country","state","phone"],contact:["email"],additional:[]}),Me=((0,c.getSetting)("addressFieldsLocations",De).address,(0,c.getSetting)("addressFieldsLocations",De).contact,(0,c.getSetting)("addressFieldsLocations",De).additional,(0,c.getSetting)("additionalFields",{}),(0,c.getSetting)("additionalContactFields",{}),(0,c.getSetting)("additionalAddressFields",{}),(e,t)=>{const o=new Map;return e.filter((e=>{const r=t(e);return!o.has(r)&&(o.set(r,e),!0)}))}),Ze=e=>je()({path:`wc/store/v1/products/attributes/${e}/terms`});const He=window.wp.escapeHtml,Ue=({error:e})=>(0,n.createElement)("div",{className:"wc-block-error-message"},(({message:e,type:t})=>e?"general"===t?(0,n.createElement)("span",null,(0,l.__)("The following error was returned","woocommerce"),(0,n.createElement)("br",null),(0,n.createElement)("code",null,(0,He.escapeHTML)(e))):"api"===t?(0,n.createElement)("span",null,(0,l.__)("The following error was returned from the API","woocommerce"),(0,n.createElement)("br",null),(0,n.createElement)("code",null,(0,He.escapeHTML)(e))):e:(0,l.__)("An error has prevented the block from being updated.","woocommerce"))(e)),ze=({className:e,item:t,isSelected:o,isLoading:r,onSelect:c,disabled:l,...s})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ge,{...s,key:t.id,className:e,isSelected:o,item:t,onSelect:c,disabled:l}),o&&r&&(0,n.createElement)("div",{key:"loading",className:ae()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},(0,n.createElement)(a.Spinner,null))),We=((0,c.getSetting)("attributes",[]).reduce(((e,t)=>{const o=(r=t)&&r.attribute_name?{id:parseInt(r.attribute_id,10),name:r.attribute_name,taxonomy:"pa_"+r.attribute_name,label:r.attribute_label}:null;var r;return o&&o.id&&e.push(o),e}),[]),e=>{const{count:t,id:o,name:r,parent:c}=e;return{count:t,id:o,name:r,parent:c,breadcrumbs:[],children:[],value:(n=e,z(n,"count")&&z(n,"description")&&z(n,"id")&&z(n,"name")&&z(n,"parent")&&z(n,"slug")&&"number"==typeof n.count&&"string"==typeof n.description&&"number"==typeof n.id&&"string"==typeof n.name&&"number"==typeof n.parent&&"string"==typeof n.slug?e.attr_slug:"")};var n});o(5555);const Qe=(0,we.withInstanceId)((({onChange:e,onOperatorChange:t,instanceId:o,isCompact:r=!1,messages:c={},operator:s="any",selected:i,type:m="text"})=>{const{errorLoadingAttributes:u,isLoadingAttributes:d,productsAttributes:p}=function(e){const[t,o]=(0,N.useState)(null),[r,c]=(0,N.useState)(!1),[n,a]=(0,N.useState)([]),l=(0,N.useRef)(!1);return(0,N.useEffect)((()=>{if(e&&!r&&!l.current)return async function(){c(!0);try{const e=await je()({path:"wc/store/v1/products/attributes"}),t=[];for(const o of e){const e=await Ze(o.id);t.push({...o,parent:0,terms:e.map((e=>({...e,attr_slug:o.taxonomy,parent:o.id})))})}a(t),l.current=!0}catch(e){e instanceof Error&&o(await(async e=>{if(!("json"in e))return{message:e.message,type:e.type||"general"};try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}})(e))}finally{c(!1)}}(),()=>{l.current=!0}}),[r,e]),{errorLoadingAttributes:t,isLoadingAttributes:r,productsAttributes:n}}(!0),g=p.reduce(((e,t)=>{const{terms:o,...r}=t;return[...e,We(r),...o.map(We)]}),[]);return c={clear:(0,l.__)("Clear all product attributes","woocommerce"),noItems:(0,l.__)("Your store doesn't have any product attributes.","woocommerce"),search:(0,l.__)("Search for product attributes","woocommerce"),selected:e=>(0,l.sprintf)(/* translators: %d is the count of attributes selected. */ /* translators: %d is the count of attributes selected. */
(0,l._n)("%d attribute selected","%d attributes selected",e,"woocommerce"),e),updated:(0,l.__)("Product attribute search results updated.","woocommerce"),...c},u?(0,n.createElement)(Ue,{error:u}):(0,n.createElement)(n.Fragment,null,(0,n.createElement)(Ce,{className:"woocommerce-product-attributes",isCompact:r,isHierarchical:!0,isLoading:d,isSingle:!1,list:g,messages:c,onChange:e,renderItem:e=>{const{item:t,search:r,depth:c=0}=e,a=t.count||0,s=["woocommerce-product-attributes__item","woocommerce-search-list__item",{"is-searching":r.length>0,"is-skip-level":0===c&&0!==t.parent}];if(!t.breadcrumbs.length)return(0,n.createElement)(ze,{...e,className:ae()(s),item:t,isLoading:d,disabled:0===t.count,name:`attributes-${o}`,countLabel:(0,l.sprintf)(/* translators: %d is the count of terms. */ /* translators: %d is the count of terms. */
(0,l._n)("%d term","%d terms",a,"woocommerce"),a),"aria-label":(0,l.sprintf)(/* translators: %1$s is the item name, %2$d is the count of terms for the item. */ /* translators: %1$s is the item name, %2$d is the count of terms for the item. */
(0,l._n)("%1$s, has %2$d term","%1$s, has %2$d terms",a,"woocommerce"),t.name,a)});const i=`${t.breadcrumbs[0]}: ${t.name}`;return(0,n.createElement)(ge,{...e,name:`terms-${o}`,className:ae()(...s,"has-count"),countLabel:(0,l.sprintf)(/* translators: %d is the count of products. */ /* translators: %d is the count of products. */
(0,l._n)("%d product","%d products",a,"woocommerce"),a),"aria-label":(0,l.sprintf)(/* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */ /* translators: %1$s is the attribute name, %2$d is the count of products for that attribute. */
(0,l._n)("%1$s, has %2$d product","%1$s, has %2$d products",a,"woocommerce"),i,a)})},selected:i.map((({id:e})=>g.find((t=>t.id===e)))).filter(Boolean),type:m}),!!t&&(0,n.createElement)("div",{hidden:i.length<2},(0,n.createElement)(a.SelectControl,{className:"woocommerce-product-attributes__operator",label:(0,l.__)("Display products matching","woocommerce"),help:(0,l.__)("Pick at least two attributes to use this setting.","woocommerce"),value:s,onChange:t,options:[{label:(0,l.__)("Any selected attributes","woocommerce"),value:"any"},{label:(0,l.__)("All selected attributes","woocommerce"),value:"all"}]})))})),Je=[{key:"title/asc",name:(0,l.__)("Sorted by title","woocommerce")},{key:"date/desc",name:(0,l.__)("Newest","woocommerce")},{key:"popularity/desc",name:(0,l.__)("Best Selling","woocommerce")},{key:"rating/desc",name:(0,l.__)("Top Rated","woocommerce")}];function Ye(e){const{query:t}=e.attributes;return(0,n.createElement)(a.PanelBody,{className:"woocommerce-product-query-panel__sort",title:(0,l.__)("Popular Filters","woocommerce"),initialOpen:!0},(0,n.createElement)("p",null,(0,l.__)("Arrange products by popular pre-sets.","woocommerce")),(0,n.createElement)(a.CustomSelectControl,{hideLabelFromVision:!0,label:(0,l.__)("Choose among these pre-sets","woocommerce"),onChange:t=>{var o,r,c;if(null===(o=t.selectedItem)||void 0===o||!o.key)return;const[n,a]=null===(r=t.selectedItem)||void 0===r||null===(c=r.key)||void 0===c?void 0:c.split("/");ce(e,{order:a,orderBy:n})},options:Je,value:Je.find((e=>e.key===`${t.orderBy}/${t.order}`))}))}const Ke=e=>{const t=(0,N.createInterpolateElement)((0,l.__)("Upgrade all Products (Beta) blocks on this page to <strongText /> for more features!","woocommerce"),{strongText:(0,n.createElement)("strong",null,(0,l.__)("Product Collection","woocommerce"))}),o=(0,l.__)("Upgrade to Product Collection","woocommerce");return(0,n.createElement)(a.Notice,{isDismissible:!1},(0,n.createElement)(n.Fragment,null,t),(0,n.createElement)("br",null),(0,n.createElement)("br",null),(0,n.createElement)(a.Button,{variant:"link",onClick:()=>{e.upgradeBlock()}},o))};o(8669);const Xe=Y.map((e=>`__woocommerce${e[0].toUpperCase()}${e.slice(1)}`));function et(e){var t;const o="string"==typeof e?e:e.value;return null===(t=Object.entries(X).find((([,e])=>e===o)))||void 0===t?void 0:t[0]}const tt={attributes:e=>{const{query:t}=e.attributes,[o,r]=(0,N.useState)([]);return(0,N.useEffect)((()=>{t.__woocommerceAttributes&&r(t.__woocommerceAttributes.map((({termId:e})=>({id:e}))))}),[t.__woocommerceAttributes]),(0,n.createElement)(a.__experimentalToolsPanelItem,{label:(0,l.__)("Product Attributes","woocommerce"),hasValue:()=>{var e;return null===(e=t.__woocommerceAttributes)||void 0===e?void 0:e.length}},(0,n.createElement)(Qe,{messages:{search:(0,l.__)("Attributes","woocommerce")},selected:o,onChange:t=>{const o=t.map((({id:e,value:t})=>({termId:e,taxonomy:t})));ce(e,{__woocommerceAttributes:o})},operator:"any",isCompact:!0,type:"token"}),(0,n.createElement)(a.ExternalLink,{className:"woocommerce-product-query-panel__external-link",href:"/wp-admin/edit.php?post_type=product&page=product_attributes"},(0,l.__)("Manage attributes","woocommerce")))},onSale:e=>{const{query:t}=e.attributes;return(0,n.createElement)(a.__experimentalToolsPanelItem,{label:(0,l.__)("Sale status","woocommerce"),hasValue:()=>t.__woocommerceOnSale},(0,n.createElement)(a.ToggleControl,{label:(0,l.__)("Show only products on sale","woocommerce"),checked:t.__woocommerceOnSale||!1,onChange:t=>{ce(e,{__woocommerceOnSale:t})}}))},productSelector:e=>{const{query:t}=e.attributes,o=function(){const[e,t]=(0,N.useState)([]);return(0,N.useEffect)((()=>{(({selected:e=[],search:t="",queryArgs:o={}})=>{const r=(({selected:e=[],search:t="",queryArgs:o={}})=>{const r=$e.productCount>100,c={per_page:r?100:0,catalog_visibility:"any",search:t,orderby:"title",order:"asc"},n=[(0,Ne.addQueryArgs)("/wc/store/v1/products",{...c,...o})];return r&&e.length&&n.push((0,Ne.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:e,per_page:0})),n})({selected:e,search:t,queryArgs:o});return Promise.all(r.map((e=>je()({path:e})))).then((e=>{const t=e.flat(),o=Me(t,(e=>e.id));return o.map((e=>({...e,parent:0})))})).catch((e=>{throw e}))})({selected:[]}).then((e=>{t(e)}))}),[]),e}();return(0,n.createElement)(a.__experimentalToolsPanelItem,{label:(0,l.__)("Hand-picked Products","woocommerce"),hasValue:()=>{var e;return null===(e=t.include)||void 0===e?void 0:e.length}},(0,n.createElement)(a.FormTokenField,{disabled:!o.length,displayTransform:e=>{var t;return Number.isNaN(Number(e))?e:(null===(t=o.find((t=>t.id===Number(e))))||void 0===t?void 0:t.name)||""},label:(0,l.__)("Pick some products","woocommerce"),onChange:t=>{const r=t.map((e=>{var t;return null===(t=o.find((t=>t.name===e||t.id===Number(e))))||void 0===t?void 0:t.id})).filter(Boolean).map(String);if(!r.length&&e.attributes.query.include){const t=L(e.attributes.query,"include");ce({...e,attributes:{...e.attributes,query:t}},{})}else ce(e,{include:r})},suggestions:o.map((e=>e.name)),validateInput:e=>o.find((t=>t.name===e)),value:o.length?(null==t?void 0:t.include)||[]:[(0,l.__)("Loading…","woocommerce")],__experimentalExpandOnFocus:!0}))},stockStatus:e=>{var t;const{query:o}=e.attributes;return(0,n.createElement)(a.__experimentalToolsPanelItem,{label:(0,l.__)("Stock status","woocommerce"),hasValue:()=>o.__woocommerceStockStatus},(0,n.createElement)(a.FormTokenField,{label:(0,l.__)("Stock status","woocommerce"),onChange:t=>{const o=t.map(et).filter(Boolean);ce(e,{__woocommerceStockStatus:o})},suggestions:Object.values(X),validateInput:e=>Object.values(X).includes(e),value:(null==o||null===(t=o.__woocommerceStockStatus)||void 0===t?void 0:t.map((e=>X[e])))||[],__experimentalExpandOnFocus:!0}))},wooInherit:e=>{const t=function(e,t){const o=(0,N.useRef)();return(0,N.useEffect)((()=>{o.current===e||t&&!t(e,o.current)||(o.current=e)}),[e,t]),o.current}(e.attributes.query,(e=>!1===e.inherit));return(0,n.createElement)(a.ToggleControl,{className:"woo-inherit-query-toggle",label:(0,l.__)("Inherit query from template","woocommerce"),help:(0,l.__)("Toggle to use the global query context that is set with the current template, such as variations of the product catalog or search. Disable to customize the filtering independently.","woocommerce"),checked:e.attributes.query.inherit||!1,onChange:o=>{const r={inherit:o};o&&(r.perPage=(0,c.getSettingWithCoercion)("loopShopPerPage",12,P)),ce(e,{...e.defaultWooQueryParams,...r,...!1===o&&{...t}})}})}},ot=e=>{const t=function(e){const t=(0,v.useSelect)("core/edit-site"),o=(0,v.useSelect)((t=>{var o;return null===(o=t(d.store).getActiveBlockVariation(J,e))||void 0===o?void 0:o.allowedControls}),[e]);return W(t)?function(e){return e.query.inherit}(e)?o.filter((e=>"wooInherit"===e)):o:o.filter((e=>"wooInherit"!==e))}(e.attributes),o=function(e){const t=(0,v.useSelect)((t=>{var o;return null===(o=t("core/blocks").getBlockVariations(J).find((t=>t.name===e)))||void 0===o?void 0:o.attributes}));return t?Object.assign({},...Xe.map((e=>({[e]:t.query[e]})))):{}}(e.attributes.namespace);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(E.InspectorControls,null,(0,n.createElement)(Ke,{upgradeBlock:H}),(null==t?void 0:t.includes("presets"))&&(0,n.createElement)(Ye,{...e}),(0,n.createElement)(a.__experimentalToolsPanel,{className:"woocommerce-product-query-toolspanel",label:(0,l.__)("Advanced Filters","woocommerce"),resetAll:()=>{ce(e,o)}},Object.entries(tt).map((([r,c])=>null!=t&&t.includes(r)?(0,n.createElement)(c,{...e,defaultWooQueryParams:o,key:r}):null)))))};(0,r.addFilter)("editor.BlockEdit",J,(e=>t=>{return(o=t).name===J&&Object.values(re).includes(o.attributes.namespace)?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(ot,{...t}),(0,n.createElement)(e,{...t}),(0,n.createElement)(E.InspectorControls,null,(0,n.createElement)(I,null))):(0,n.createElement)(e,{...t});var o})),o(3085);var rt=o(444);const ct=(0,n.createElement)(rt.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},(0,n.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 19.375L4.5 7.625C4.5 7.55596 4.55596 7.5 4.625 7.5L16.375 7.5C16.444 7.5 16.5 7.55596 16.5 7.625L16.5 19.375C16.5 19.444 16.444 19.5 16.375 19.5L4.625 19.5C4.55596 19.5 4.5 19.444 4.5 19.375ZM4.625 21C3.72754 21 3 20.2725 3 19.375L3 7.625C3 6.72754 3.72754 6 4.625 6L16.375 6C17.2725 6 18 6.72754 18 7.625L18 19.375C18 20.2725 17.2725 21 16.375 21L4.625 21ZM19 3.75L8 3.75L8 2.25L19 2.25C20.5183 2.25 21.75 3.4796 21.75 4.99891L21.75 18L20.25 18L20.25 4.99891C20.25 4.30909 19.6909 3.75 19 3.75Z"})),nt=["woocommerce/woocommerce//archive-product","woocommerce/woocommerce//taxonomy-product_cat","woocommerce/woocommerce//taxonomy-product_tag","woocommerce/woocommerce//taxonomy-product_attribute","woocommerce/woocommerce//product-search-results"],at=e=>{(0,d.registerBlockVariation)(J,{description:(0,l.__)("A block that displays a selection of products in your store.","woocommerce"),name:Q,
/* translators: “Products“ is the name of the block. */
title:(0,l.__)("Products (Beta)","woocommerce"),isActive:e=>e.namespace===Q,icon:(0,n.createElement)(a.Icon,{icon:ct,className:"wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks"}),attributes:{...e,namespace:Q},allowedControls:K,innerBlocks:oe,scope:["inserter"]})};if((0,c.isWpVersion)("6.1",">=")){let e;(0,v.subscribe)((()=>{const t=e,o=(0,v.select)("core/edit-site");if(e=null==o?void 0:o.getEditedPostId(),t!==e&&W(o)){const t=nt.includes(e),o={inherit:t};t&&(o.perPage=(0,c.getSettingWithCoercion)("loopShopPerPage",12,P));const r={...te,query:{...te.query,...o}};(0,d.unregisterBlockVariation)(J,Q),at(r)}}),"core/edit-site");let t=!1;(0,v.subscribe)((()=>{t||(t=!0,at(te))}),"core/edit-post")}const lt=new Set,st="woocommerce/related-products",it={namespace:st,allowedControls:[],displayLayout:{type:"flex",columns:5},query:{perPage:5,pages:0,offset:0,postType:"product",order:"asc",orderBy:"title",author:"",search:"",exclude:[],sticky:"",inherit:!1},lock:{remove:!0,move:!0}},mt=(0,c.getSettingWithCoercion)("postTemplateHasSupportForGridView",!1,O),ut=[["core/heading",{level:2,content:(0,l.__)("Related products","woocommerce"),style:{spacing:{margin:{top:"1rem",bottom:"1rem"}}}}],["core/post-template",{__woocommerceNamespace:f,...mt&&{layout:{type:"grid",columnCount:5}}},[["woocommerce/product-image",{productId:0,imageSizing:"cropped"}],["core/post-title",{textAlign:"center",level:3,fontSize:"medium",isLink:!0,__woocommerceNamespace:_},[]],["woocommerce/product-price",{textAlign:"center",fontSize:"small",style:{spacing:{margin:{bottom:"1rem"}}}},[]],["woocommerce/product-button",{textAlign:"center",fontSize:"small",style:{spacing:{margin:{bottom:"1rem"}}}},[]]]]];(({blockName:e,blockMetadata:t,blockSettings:o,isVariationBlock:r=!1,variationName:c,isAvailableOnPostEditor:n})=>{let a="";(0,v.subscribe)((()=>{var n;const l=a,s=(0,v.select)("core/edit-site");a=function(e){const t=P(e)?void 0:e;return null==t?void 0:t.split("//")[1]}(null==s?void 0:s.getEditedPostId());const i=l!==a,m=Boolean(a);if(!i||!m||!e)return;let u=Boolean((0,d.getBlockType)(e));if(u&&(null!==(n=a)&&void 0!==n&&n.includes("single-product")||null!=l&&l.includes("single-product"))&&(r&&c?(0,d.unregisterBlockVariation)(e,c):(0,d.unregisterBlockType)(e),u=!1),!u)if(r)(0,d.registerBlockVariation)(e,o);else{var p;const e=null==(g=null==o?void 0:o.ancestor)||"object"==typeof g&&0===Object.keys(g).length||"string"==typeof g&&0===g.trim().length?["woocommerce/single-product"]:null==o?void 0:o.ancestor;(0,d.registerBlockType)(t,{...o,ancestor:null!==(p=a)&&void 0!==p&&p.includes("single-product")?void 0:e})}var g}),"core/edit-site"),(0,v.subscribe)((()=>{!(Boolean(c)?lt.has(c):lt.has(e))&&n&&(r?(lt.add(c),(0,d.registerBlockVariation)(e,o)):(lt.add(e),(0,d.registerBlockType)(t,o)))}),"core/edit-post")})({blockName:J,blockMetadata:{},blockSettings:{description:(0,l.__)("Display related products.","woocommerce"),name:"Related Products Controls",title:(0,l.__)("Related Products Controls","woocommerce"),isActive:e=>e.namespace===st,icon:(0,n.createElement)(a.Icon,{icon:ct,className:"wc-block-editor-components-block-icon wc-block-editor-components-block-icon--stacks"}),attributes:it,allowedControls:[],innerBlocks:ut,scope:["block"]},isVariationBlock:!0,variationName:st});const dt=[h,k,g];(0,c.isWpVersion)("6.1",">=")&&(0,r.addFilter)("blocks.registerBlockType","core/custom-class-name/attribute",(function(e,t){return dt.includes(t)&&(e.attributes={...e.attributes,__woocommerceNamespace:{type:"string"}}),e}))},8669:()=>{},3085:()=>{},1612:()=>{},5555:()=>{},9658:()=>{},1058:()=>{},9196:e=>{"use strict";e.exports=window.React},4333:e=>{"use strict";e.exports=window.wp.compose},9307:e=>{"use strict";e.exports=window.wp.element},5736:e=>{"use strict";e.exports=window.wp.i18n},444:e=>{"use strict";e.exports=window.wp.primitives}},o={};function r(e){var c=o[e];if(void 0!==c)return c.exports;var n=o[e]={exports:{}};return t[e].call(n.exports,n,n.exports,r),n.exports}r.m=t,e=[],r.O=(t,o,c,n)=>{if(!o){var a=1/0;for(m=0;m<e.length;m++){for(var[o,c,n]=e[m],l=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(r.O).every((e=>r.O[e](o[s])))?o.splice(s--,1):(l=!1,n<a&&(a=n));if(l){e.splice(m--,1);var i=c();void 0!==i&&(t=i)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[o,c,n]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.j=7844,(()=>{var e={7844:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var c,n,[a,l,s]=o,i=0;if(a.some((t=>0!==e[t]))){for(c in l)r.o(l,c)&&(r.m[c]=l[c]);if(s)var m=s(r)}for(t&&t(o);i<a.length;i++)n=a[i],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(m)},o=self.webpackChunkwebpackWcBlocksJsonp=self.webpackChunkwebpackWcBlocksJsonp||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var c=r.O(void 0,[2869],(()=>r(448)));c=r.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-query"]=c})();