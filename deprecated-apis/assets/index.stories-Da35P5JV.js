import{j as Q,c as fe,a as u,F as ve}from"./index-Zi3BSDNR.js";import{r as l}from"./index-CBqU2yxZ.js";import{s as D}from"./index-B8GZ0twM.js";import{d as V,E as Ee,t as xe}from"./calendar-KwX2deRK.js";import{E as q,b as ge,i as H}from"./textbox-YKFjdlvB.js";import"./hooks-Dbuzk741.js";import{E as Le}from"./button-Cqm4fYLD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-button-xW4C7eC1.js";import"./icon-DXMbr5Ny.js";import"./array.polyfill.flat-Nmnx_i-c.js";import"./badge-OaR5SFvt.js";import"./utils-DEZF-nDp.js";import"./progress-spinner-X9ty1VSJ.js";const F={},be="nid",ye=_e(3);function A(t){return Math.floor(Math.random()*t)}function _e(t){const e="abcdefghijklmnopqrstuvwxyz",a=e+"0123456789";let d=e[A(25)];for(let c=1;c<t;c++)d+=a[A(35)];return d}function X(t,e=be){const a=`${e}${e===""?"":"-"}${ye}`;return F[a]=F[a]||0,t.id||t.setAttribute("id",`${a}-${F[a]++}`),t.id}const $={};function Z(t,e,i){t.dispatchEvent(new CustomEvent("focusExit",{detail:{fromElement:e,toElement:i},bubbles:!1}))}function Ce(t){const e=t.target;this.el.contains(e)===!0?this.currentFocusElement=e:(window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),Z(this.el,this.currentFocusElement,e),this.currentFocusElement=null)}function Oe(){Z(this.el,this.currentFocusElement,void 0)}function ke(){document.addEventListener("focusin",this.onDocumentFocusInListener),window.addEventListener("blur",this.onWindowBlurListener)}class Se{constructor(e){this.el=e,this.currentFocusElement=null,this.onWidgetFocusInListener=ke.bind(this),this.onDocumentFocusInListener=Ce.bind(this),this.onWindowBlurListener=Oe.bind(this),this.el.addEventListener("focusin",this.onWidgetFocusInListener)}removeEventListeners(){window.removeEventListener("blur",this.onWindowBlurListener),document.removeEventListener("focusin",this.onDocumentFocusInListener),this.el.removeEventListener("focusin",this.onWidgetFocusInListener)}}function Fe(t){let e=null;return X(t),$[t.id]||(e=new Se(t),$[t.id]=e),e}const Te={alwaysDoFocusManagement:!1,ariaControls:!0,autoCollapse:!1,collapseOnFocusOut:!1,collapseOnMouseOut:!1,collapseOnClickOut:!1,contentSelector:".expander__content",expandedClass:null,expandOnClick:!1,expandOnFocus:!1,expandOnHover:!1,focusManagement:null,hostSelector:".expander__host",simulateSpacebarClick:!1};function Me(t){(t.keyCode===13||t.keyCode===32)&&(this._keyboardClickFlag=!0),t.keyCode===32&&this.options.simulateSpacebarClick===!0&&this.hostEl.click()}function we(){this._mouseClickFlag=!0}function Ie(){this._expandWasKeyboardClickActivated=this._keyboardClickFlag,this._expandWasMouseClickActivated=this._mouseClickFlag,this.expanded=!this.expanded}function De(){this._expandWasFocusActivated=!0,this.expanded=!0}function Ve(){clearTimeout(this._mouseLeft),this._expandWasHoverActivated=!0,this.expanded=!0}function qe(){this.expanded=!1}function He(){clearTimeout(this._mouseLeft),this._mouseLeft=setTimeout(()=>{this.expanded=!1},300)}function Ae(t){this.el.contains(t.target)===!1&&(this.expanded=!1)}function $e(){this.documentClick=!0}function We(){this.documentClick=!1}function Re(t){this.documentClick===!0&&(this.documentClick=!1,this.el.contains(t.target)===!1&&(this.expanded=!1))}function Be(t,e){if(t==="content")e.setAttribute("tabindex","-1"),e.focus();else if(t==="focusable")D(e)[0].focus();else if(t==="interactive")D(e,!0)[0].focus();else if(t!==null){const i=e.querySelector(`#${t}`);i&&i.focus()}}class Ne{constructor(e,i){this.options=Object.assign({},Te,i),this.el=e,this.hostEl=e.querySelector(this.options.hostSelector),this.contentEl=e.querySelector(this.options.contentSelector),Fe(this.el),this._hostKeyDownListener=Me.bind(this),this._hostMouseDownListener=we.bind(this),this._documentClickListener=Ae.bind(this),this._documentTouchStartListener=$e.bind(this),this._documentTouchMoveListener=We.bind(this),this._documentTouchEndListener=Re.bind(this),this._hostClickListener=Ie.bind(this),this._hostFocusListener=De.bind(this),this._hostHoverListener=Ve.bind(this),this._focusExitListener=qe.bind(this),this._mouseLeaveListener=He.bind(this),this.hostEl.getAttribute("aria-expanded")===null&&this.hostEl.setAttribute("aria-expanded","false"),this.options.ariaControls===!0&&(X(this.el,"expander"),this.contentEl.id=this.contentEl.id||`${this.el.id}-content`,this.hostEl.setAttribute("aria-controls",this.contentEl.id)),this.expandOnClick=this.options.expandOnClick,this.expandOnFocus=this.options.expandOnFocus,this.expandOnHover=this.options.expandOnHover,this.options.autoCollapse===!1&&(this.collapseOnClickOut=this.options.collapseOnClickOut,this.collapseOnFocusOut=this.options.collapseOnFocusOut,this.collapseOnMouseOut=this.options.collapseOnMouseOut)}set expandOnClick(e){e===!0?(this.hostEl.addEventListener("keydown",this._hostKeyDownListener),this.hostEl.addEventListener("mousedown",this._hostMouseDownListener),this.hostEl.addEventListener("click",this._hostClickListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):(this.hostEl.removeEventListener("click",this._hostClickListener),this.hostEl.removeEventListener("mousedown",this._hostMouseDownListener),this.hostEl.removeEventListener("keydown",this._hostKeyDownListener))}set expandOnFocus(e){e===!0?(this.hostEl.addEventListener("focus",this._hostFocusListener),this.options.autoCollapse===!0&&(this.collapseOnClickOut=!0,this.collapseOnFocusOut=!0)):this.hostEl.removeEventListener("focus",this._hostFocusListener)}set expandOnHover(e){e===!0?(this.hostEl.addEventListener("mouseenter",this._hostHoverListener),this.contentEl.addEventListener("mouseenter",this._hostHoverListener),this.options.autoCollapse===!0&&(this.collapseOnMouseOut=!0)):(this.hostEl.removeEventListener("mouseenter",this._hostHoverListener),this.contentEl.removeEventListener("mouseenter",this._hostHoverListener))}set collapseOnClickOut(e){e===!0?(document.addEventListener("click",this._documentClickListener),document.addEventListener("touchstart",this._documentTouchStartListener),document.addEventListener("touchmove",this._documentTouchMoveListener),document.addEventListener("touchend",this._documentTouchEndListener)):(document.removeEventListener("click",this._documentClickListener),document.removeEventListener("touchstart",this._documentTouchStartListener),document.removeEventListener("touchmove",this._documentTouchMoveListener),document.removeEventListener("touchend",this._documentTouchEndListener))}set collapseOnFocusOut(e){e===!0?this.el.addEventListener("focusExit",this._focusExitListener):this.el.removeEventListener("focusExit",this._focusExitListener)}set collapseOnMouseOut(e){e===!0?(this.el.addEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.addEventListener("mouseleave",this._mouseLeaveListener)):(this.el.removeEventListener("mouseleave",this._mouseLeaveListener),this.contentEl.removeEventListener("mouseleave",this._mouseLeaveListener))}get expanded(){return this.hostEl.getAttribute("aria-expanded")==="true"}set expanded(e){e===!0&&this.expanded===!1&&(this.hostEl.setAttribute("aria-expanded","true"),this.options.expandedClass&&this.el.classList.add(this.options.expandedClass),(this._expandWasKeyboardClickActivated||this._expandWasMouseClickActivated&&this.options.alwaysDoFocusManagement)&&Be(this.options.focusManagement,this.contentEl),this.el.dispatchEvent(new CustomEvent("expander-expand",{bubbles:!0,detail:this.contentEl}))),e===!1&&this.expanded===!0&&(this.hostEl.setAttribute("aria-expanded","false"),this.options.expandedClass&&this.el.classList.remove(this.options.expandedClass),this.el.dispatchEvent(new CustomEvent("expander-collapse",{bubbles:!0,detail:this.contentEl}))),this._expandWasKeyboardClickActivated=!1,this._expandWasMouseClickActivated=!1,this._expandWasFocusActivated=!1,this._expandWasHoverActivated=!1,this._keyboardClickFlag=!1,this._mouseClickFlag=!1}sleep(){this._destroyed!==!0&&(this.expandOnClick=!1,this.expandOnFocus=!1,this.expandOnHover=!1,this.collapseOnClickOut=!1,this.collapseOnFocusOut=!1,this.collapseOnMouseOut=!1)}destroy(){this.sleep(),this._destroyed=!0,this._hostKeyDownListener=null,this._hostMouseDownListener=null,this._documentClickListener=null,this._documentTouchStartListener=null,this._documentTouchMoveListener=null,this._documentTouchEndListener=null,this._hostClickListener=null,this._hostFocusListener=null,this._hostHoverListener=null,this._focusExitListener=null,this._mouseLeaveListener=null}}const Pe=600,ee=({className:t,inputPlaceholderText:e="YYYY-MM-DD",a11yOpenPopoverText:i="open calendar",range:a,value:d,rangeEnd:c,defaultValue:E,defaultRangeEnd:O,collapseOnSelect:te,onChange:x=()=>{},onInputChange:ne=()=>{},onInputRangeEndChange:se=()=>{},...ae})=>{const k=l.useRef(),m=l.useRef(null),[oe,f]=l.useState(E||""),[ie,v]=l.useState(O||""),S=H(d)?d:oe,T=H(c)?c:ie,[h,g]=l.useState(()=>V(S)),[p,L]=l.useState(()=>V(T)),[re,M]=l.useState(!1),[le,ue]=l.useState(1),de=()=>{M(!0)},ce=()=>{M(!1)};l.useEffect(()=>{if(!m.current)return;k.current=new Ne(m.current,{hostSelector:".ebay-date-textbox--main > .icon-btn",contentSelector:".date-textbox__popover",expandOnClick:!0,autoCollapse:!0}),m.current.addEventListener("expander-expand",de),m.current.addEventListener("expander-collapse",ce);const n=()=>{ue(document.documentElement.clientWidth<Pe?1:2)};return n(),window.addEventListener("resize",n),()=>{var s;(s=k.current)==null||s.destroy(),window.removeEventListener("resize",n)}},[]);const w=(n,s)=>{const r=new Date(n.target.value),o=isNaN(r.getTime())?null:xe(r);s===0?(g(o),f(o||"")):(L(o),v(o||"")),a?x(n,{rangeStart:s===0?o:h,rangeEnd:s===1?o:p}):x(n,{selected:o})},he=(n,{iso:s})=>{if(g(s),f(s),a){const r=h||p,o={rangeStart:s,rangeEnd:r};h&&p?(v(""),L(null),o.rangeEnd=null):r&&(r<s?(g(r),f(r),v(s),L(s),o.rangeStart=r,o.rangeEnd=s):(g(s),f(s),v(r),L(r),o.rangeStart=s,o.rangeEnd=r)),x(n,o)}else x(n,{selected:s});te&&(k.current.expanded=!1)},I=(n,s)=>{s===0?(f(n.target.value),ne(n)):(v(n.target.value),se(n))},[pe,me]=Array.isArray(e)?e:[e,e];return Q("span",{className:fe("date-textbox",t),ref:m,children:[a&&u(q,{value:S,placeholder:pe,onInputChange:n=>I(n,0),onBlur:n=>w(n,0)}),u(q,{className:"ebay-date-textbox--main",placeholder:me,value:a?T:S,onInputChange:n=>I(n,a?1:0),onBlur:n=>w(n,a?1:0),children:u(ge,{name:"calendar24",buttonAriaLabel:i})}),u("div",{hidden:!re,className:"date-textbox__popover",children:u(Ee,{...ae,range:a,interactive:!0,navigable:!0,numMonths:le,selected:h&&p?[h,p]:h||p||void 0,onSelect:he})})]})};try{datetextbox.displayName="datetextbox",datetextbox.__docgenInfo={description:"",displayName:"datetextbox",props:{onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: KeyboardEvent<Element> | MouseEvent<Element, MouseEvent> | FocusEvent<Element, Element>, { iso }: { ...; }) => void"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"(event: MouseEvent<Element, MouseEvent>, { iso }: { iso: `${number}-${number}-${number}`; }) => void"}},range:{defaultValue:null,description:"",name:"range",required:!1,type:{name:"boolean"}},locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"string"}},disableBefore:{defaultValue:null,description:"",name:"disableBefore",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableAfter:{defaultValue:null,description:"",name:"disableAfter",required:!1,type:{name:"`${number}-${number}-${number}`"}},disableWeekdays:{defaultValue:null,description:"",name:"disableWeekdays",required:!1,type:{name:"number[]"}},disableList:{defaultValue:null,description:"",name:"disableList",required:!1,type:{name:"`${number}-${number}-${number}`[]"}},getA11yShowMonthText:{defaultValue:null,description:"",name:"getA11yShowMonthText",required:!1,type:{name:"(monthTitle: string) => string"}},a11ySelectedText:{defaultValue:null,description:"",name:"a11ySelectedText",required:!1,type:{name:"string"}},a11yRangeStartText:{defaultValue:null,description:"",name:"a11yRangeStartText",required:!1,type:{name:"string"}},a11yInRangeText:{defaultValue:null,description:"",name:"a11yInRangeText",required:!1,type:{name:"string"}},a11yRangeEndText:{defaultValue:null,description:"",name:"a11yRangeEndText",required:!1,type:{name:"string"}},a11ySeparator:{defaultValue:null,description:"",name:"a11ySeparator",required:!1,type:{name:"string"}},a11yTodayText:{defaultValue:null,description:"",name:"a11yTodayText",required:!1,type:{name:"string"}},a11yDisabledText:{defaultValue:null,description:"",name:"a11yDisabledText",required:!1,type:{name:"string"}},linkBuilder:{defaultValue:null,description:"",name:"linkBuilder",required:!1,type:{name:"(iso: `${number}-${number}-${number}`) => string"}},onMonthChange:{defaultValue:null,description:"",name:"onMonthChange",required:!1,type:{name:"({ iso }: { iso: `${number}-${number}-${number}`; }) => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},rangeEnd:{defaultValue:null,description:"",name:"rangeEnd",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},defaultRangeEnd:{defaultValue:null,description:"",name:"defaultRangeEnd",required:!1,type:{name:"string"}},collapseOnSelect:{defaultValue:null,description:"",name:"collapseOnSelect",required:!1,type:{name:"boolean"}},inputPlaceholderText:{defaultValue:{value:"YYYY-MM-DD"},description:"",name:"inputPlaceholderText",required:!1,type:{name:"string | string[]"}},a11yOpenPopoverText:{defaultValue:{value:"open calendar"},description:"",name:"a11yOpenPopoverText",required:!1,type:{name:"string"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, EventData> & EbayMouseEventHandler<HTMLInputElement, EventData> & EbayFocusEventHandler<...>"}},onInputChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}},onInputRangeEndChange:{defaultValue:{value:"() => {}"},description:"",name:"onInputRangeEndChange",required:!1,type:{name:"EbayChangeEventHandler<HTMLInputElement, Record<string, any>>"}}}}}catch{}const at={component:ee,title:"form input/ebay-date-textbox"},b={},y={args:{range:!0}},_={args:{collapseOnSelect:!0}},C=t=>u(()=>{const[i,a]=l.useState("");return Q(ve,{children:[u(ee,{value:i,onChange:(E,{selected:O})=>{a(O||"")},onInputChange:E=>{a(E.target.value)},...t}),u("div",{style:{marginTop:16},children:u(Le,{onClick:()=>a("2024-01-03"),children:"Set to 2024-01-03"})})]})},{});var W,R,B;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(B=(R=b.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var N,P,K;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    range: true
  }
}`,...(K=(P=y.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var Y,j,z;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    collapseOnSelect: true
  }
}`,...(z=(j=_.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var U,G,J;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`args => {
  const Component = () => {
    const [value, setValue] = useState('');
    const handleOnChange = (event, {
      selected
    }) => {
      setValue(selected || '');
    };
    const handleOnInputChange = event => {
      setValue(event.target.value);
    };
    return <>
                <EbayDateTextbox value={value} onChange={handleOnChange} onInputChange={handleOnInputChange} {...args} />
                <div style={{
        marginTop: 16
      }}>
                    <EbayButton onClick={() => setValue('2024-01-03')}>Set to 2024-01-03</EbayButton>
                </div>
            </>;
  };
  return <Component />;
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ot=["Default","Range","CollpaseOnSelect","ControlledValues"];export{_ as CollpaseOnSelect,C as ControlledValues,b as Default,y as Range,ot as __namedExportsOrder,at as default};
