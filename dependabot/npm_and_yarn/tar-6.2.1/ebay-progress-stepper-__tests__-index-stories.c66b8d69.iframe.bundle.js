/*! For license information please see ebay-progress-stepper-__tests__-index-stories.c66b8d69.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_ebay_ui_core_react=self.webpackChunk_ebay_ui_core_react||[]).push([[3467],{"./src/ebay-progress-stepper/__tests__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Blocked:()=>Blocked,Controlled:()=>Controlled,CustomTitles:()=>CustomTitles,Default:()=>Default,DefaultStateComplete:()=>DefaultStateComplete,DefaultStateUpcoming:()=>DefaultStateUpcoming,VerticalColumn:()=>VerticalColumn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),ebay_button=__webpack_require__("./src/ebay-button/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["direction","defaultState","children","className"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var EbayProgressStepper=function EbayProgressStepper(_ref){var _ref$direction=_ref.direction,direction=void 0===_ref$direction?"row":_ref$direction,_ref$defaultState=_ref.defaultState,defaultState=void 0===_ref$defaultState?"active":_ref$defaultState,children=_ref.children,className=_ref.className,rest=_objectWithoutProperties(_ref,_excluded),childrenArray=react.Children.toArray(children),currentIndex=function currentIndexByDefaultState(steps,defaultState){var foundCurrentIndex=steps.findIndex((function(child){return child.props.current}));if(-1===foundCurrentIndex)switch(defaultState){case"complete":return steps.length-1;case"upcoming":return 0}return foundCurrentIndex}(childrenArray,defaultState);return(0,jsx_runtime.jsx)("div",_objectSpread(_objectSpread({},rest),{},{className:classnames_default()(className,"progress-stepper",{"progress-stepper--vertical":"column"===direction}),children:(0,jsx_runtime.jsx)("div",{role:"list",className:"progress-stepper__items",children:childrenArray.map((function(child,index){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[index>0&&(0,jsx_runtime.jsx)("hr",{className:"progress-stepper__separator",role:"presentation"}),(0,react.cloneElement)(child,_objectSpread(_objectSpread({state:stepState(index,currentIndex)},child.props),{},{current:currentIndex===index}))]},index)}))})}))};function stepState(stepIndex,currentIndex){return stepIndex<=currentIndex?"complete":stepIndex>currentIndex?"upcoming":void 0}EbayProgressStepper.displayName="EbayProgressStepper";const ebay_progress_stepper=EbayProgressStepper;try{ebayprogressstepper.displayName="ebayprogressstepper",ebayprogressstepper.__docgenInfo={description:"",displayName:"ebayprogressstepper",props:{direction:{defaultValue:{value:"row"},description:"",name:"direction",required:!1,type:{name:"StepperDirection"}},defaultState:{defaultValue:{value:"active"},description:"",name:"defaultState",required:!1,type:{name:"StepState"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ebay-progress-stepper/ebay-progress-stepper.tsx#ebayprogressstepper"]={docgenInfo:ebayprogressstepper.__docgenInfo,name:"ebayprogressstepper",path:"src/ebay-progress-stepper/ebay-progress-stepper.tsx#ebayprogressstepper"})}catch(__react_docgen_typescript_loader_error){}var ebay_icon=__webpack_require__("./src/ebay-icon/index.ts");function ebay_progress_step_typeof(o){return ebay_progress_step_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ebay_progress_step_typeof(o)}var ebay_progress_step_excluded=["current","state","children","className"];function ebay_progress_step_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ebay_progress_step_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ebay_progress_step_ownKeys(Object(t),!0).forEach((function(r){ebay_progress_step_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ebay_progress_step_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function ebay_progress_step_defineProperty(obj,key,value){return(key=function ebay_progress_step_toPropertyKey(t){var i=function ebay_progress_step_toPrimitive(t,r){if("object"!=ebay_progress_step_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=ebay_progress_step_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==ebay_progress_step_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ebay_progress_step_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function ebay_progress_step_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var typeIcons={complete:"stepperConfirmation24",attention:"stepperAttention24",upcoming:"stepperUpcoming24",active:"stepperConfirmation24"},EbayProgressStep=function EbayProgressStep(_ref){var current=_ref.current,_ref$state=_ref.state,state=void 0===_ref$state?"complete":_ref$state,children=_ref.children,className=_ref.className,rest=ebay_progress_step_objectWithoutProperties(_ref,ebay_progress_step_excluded),childrenArray=react.Children.toArray(children),title=childrenArray.find((function(child){return child.type===ebay_progress_title})),text=childrenArray.filter((function(child){return child.type!==ebay_progress_title})),stepClassNames=classnames_default()(className,"progress-stepper__item",{"progress-stepper__item--attention":"attention"===state}),icon=typeIcons[state],ariaLabel=current?"current":state;return(0,jsx_runtime.jsxs)("div",ebay_progress_step_objectSpread(ebay_progress_step_objectSpread({},rest),{},{className:stepClassNames,role:"listitem","aria-current":current?"step":void 0,children:[(0,jsx_runtime.jsx)("div",{className:"progress-stepper__icon",children:icon&&(0,jsx_runtime.jsx)(ebay_icon.dA,{name:icon,"aria-label":ariaLabel})}),(0,jsx_runtime.jsxs)("div",{className:"progress-stepper__text",children:[title,text]})]}))};EbayProgressStep.displayName="EbayProgressStep";const ebay_progress_step=EbayProgressStep;try{ebayprogressstep.displayName="ebayprogressstep",ebayprogressstep.__docgenInfo={description:"",displayName:"ebayprogressstep",props:{state:{defaultValue:{value:"complete"},description:"",name:"state",required:!1,type:{name:"StepState"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ebay-progress-stepper/ebay-progress-step.tsx#ebayprogressstep"]={docgenInfo:ebayprogressstep.__docgenInfo,name:"ebayprogressstep",path:"src/ebay-progress-stepper/ebay-progress-step.tsx#ebayprogressstep"})}catch(__react_docgen_typescript_loader_error){}const ebay_progress_title=function EbayProgressTitle(_ref){var _ref$as=_ref.as,TitleComponent=void 0===_ref$as?"h4":_ref$as,children=_ref.children;return(0,react.createElement)(TitleComponent,{},children)};try{ebayprogresstitle.displayName="ebayprogresstitle",ebayprogresstitle.__docgenInfo={description:"",displayName:"ebayprogresstitle",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/ebay-progress-stepper/ebay-progress-title.tsx#ebayprogresstitle"]={docgenInfo:ebayprogresstitle.__docgenInfo,name:"ebayprogresstitle",path:"src/ebay-progress-stepper/ebay-progress-title.tsx#ebayprogresstitle"})}catch(__react_docgen_typescript_loader_error){}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const index_stories={parameters:{storySource:{source:"import React, { FC, useState } from 'react'\nimport { EbayButton } from '../../ebay-button'\nimport {\n    EbayProgressStepper,\n    EbayProgressStep as Step,\n    EbayProgressTitle as Title,\n    StepState\n} from '../index'\n\nexport default {\n    title: 'progress/ebay-progress-stepper'\n}\n\nexport const Default = () => (\n    <div style={{ padding: 50 }}>\n        <EbayProgressStepper>\n            <Step>Started</Step>\n            <Step>Shipped</Step>\n            <Step current>Transit</Step>\n            <Step>Delivered</Step>\n        </EbayProgressStepper>\n    </div>\n)\n\nexport const DefaultStateUpcoming = {\n    render: () => (\n        <div style={{ padding: 50 }}>\n            <EbayProgressStepper defaultState=\"upcoming\">\n                <Step>\n                    <Title>Paid</Title>\n                    July 3rd\n                </Step>\n                <Step>\n                    <Title>Shipped</Title>\n                    July 4th\n                </Step>\n                <Step>\n                    <Title>Transit</Title>\n                    July 5th\n                </Step>\n                <Step>\n                    <Title>Delivered</Title>\n                    July 6th\n                </Step>\n            </EbayProgressStepper>\n        </div>\n    ),\n\n    name: 'Default state: upcoming'\n}\n\nexport const DefaultStateComplete = {\n    render: () => (\n        <div style={{ padding: 50 }}>\n            <EbayProgressStepper defaultState=\"complete\">\n                <Step>Started</Step>\n                <Step>Shipped</Step>\n                <Step>Transit</Step>\n                <Step>Delivered</Step>\n            </EbayProgressStepper>\n        </div>\n    ),\n\n    name: 'Default state: complete'\n}\n\nexport const Blocked = () => (\n    <div style={{ padding: 50 }}>\n        <EbayProgressStepper>\n            <Step>Started</Step>\n            <Step>Shipped</Step>\n            <Step state=\"attention\" current>\n                Blocked\n            </Step>\n            <Step>Delivered</Step>\n        </EbayProgressStepper>\n    </div>\n)\n\nexport const CustomTitles = () => (\n    <div style={{ padding: 50 }}>\n        <EbayProgressStepper>\n            <Step>\n                <Title as=\"h1\">H1</Title>\n            </Step>\n            <Step current>\n                <Title as=\"small\">Small</Title>\n            </Step>\n            <Step>\n                <Title as=\"h2\">H2</Title>\n            </Step>\n        </EbayProgressStepper>\n    </div>\n)\n\nexport const VerticalColumn = {\n    render: () => (\n        <div style={{ padding: 50 }}>\n            <EbayProgressStepper direction=\"column\">\n                <Step>\n                    <Title>Order placed</Title>\n                    <p>New Mens Addidas Ultra Boost</p>\n                    <p>Order total $220</p>\n                </Step>\n                <Step current>\n                    <Title>Preparing for shipment</Title>\n                    <p>We will notify you once it ships.</p>\n                </Step>\n                <Step>\n                    <Title>Delivered</Title>\n                    <p>Guaranteed Wednesday, October 09.</p>\n                </Step>\n            </EbayProgressStepper>\n        </div>\n    ),\n\n    name: 'Vertical (column)'\n}\n\nexport const Controlled = () => {\n    const TestingComponent: FC = () => {\n        const MIN = 1\n        const MAX = 4\n        const range = (to: number, from = 0): number[] =>\n            Array.from(Array(to - from + 1)).map((v, k) => from + k)\n\n        const [currentNumber, setCurrentNumber] = useState<number>(2)\n\n        const defaultState = (): StepState => {\n            if (currentNumber < MIN) return 'upcoming'\n            if (currentNumber > MAX) return 'complete'\n            return 'complete'\n        }\n\n        return (\n            <div style={{ padding: 50 }}>\n                <EbayProgressStepper defaultState={defaultState()}>\n                    {range(MAX, MIN).map((n) => (\n                        <Step current={currentNumber === n} key={n}>\n                            Step {n}\n                        </Step>\n                    ))}\n                </EbayProgressStepper>\n                <p>\n                    <EbayButton\n                        onClick={() => {\n                            setCurrentNumber(Math.max(MIN, currentNumber - 1))\n                        }}\n                    >\n                        Back\n                    </EbayButton>\n          &nbsp;\n                    <EbayButton\n                        onClick={() => {\n                            setCurrentNumber(Math.min(MAX, currentNumber + 1))\n                        }}\n                    >\n                        Forward\n                    </EbayButton>\n                </p>\n            </div>\n        )\n    }\n\n    return (\n        <>\n            <TestingComponent />\n        </>\n    )\n}\n",locationsMap:{default:{startLoc:{col:23,line:14},endLoc:{col:1,line:23},startBody:{col:23,line:14},endBody:{col:1,line:23}},"default-state-upcoming":{startLoc:{col:36,line:25},endLoc:{col:1,line:50},startBody:{col:36,line:25},endBody:{col:1,line:50}},"default-state-complete":{startLoc:{col:36,line:52},endLoc:{col:1,line:65},startBody:{col:36,line:52},endBody:{col:1,line:65}},blocked:{startLoc:{col:23,line:67},endLoc:{col:1,line:78},startBody:{col:23,line:67},endBody:{col:1,line:78}},"custom-titles":{startLoc:{col:28,line:80},endLoc:{col:1,line:94},startBody:{col:28,line:80},endBody:{col:1,line:94}},"vertical-column":{startLoc:{col:30,line:96},endLoc:{col:1,line:118},startBody:{col:30,line:96},endBody:{col:1,line:118}},controlled:{startLoc:{col:26,line:120},endLoc:{col:1,line:170},startBody:{col:26,line:120},endBody:{col:1,line:170}}}}},title:"progress/ebay-progress-stepper"};var Default=function Default(){return(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsxs)(ebay_progress_stepper,{children:[(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Started"}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Shipped"}),(0,jsx_runtime.jsx)(ebay_progress_step,{current:!0,children:"Transit"}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Delivered"})]})})};Default.displayName="Default";var DefaultStateUpcoming={render:function render(){return(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsxs)(ebay_progress_stepper,{defaultState:"upcoming",children:[(0,jsx_runtime.jsxs)(ebay_progress_step,{children:[(0,jsx_runtime.jsx)(ebay_progress_title,{children:"Paid"}),"July 3rd"]}),(0,jsx_runtime.jsxs)(ebay_progress_step,{children:[(0,jsx_runtime.jsx)(ebay_progress_title,{children:"Shipped"}),"July 4th"]}),(0,jsx_runtime.jsxs)(ebay_progress_step,{children:[(0,jsx_runtime.jsx)(ebay_progress_title,{children:"Transit"}),"July 5th"]}),(0,jsx_runtime.jsxs)(ebay_progress_step,{children:[(0,jsx_runtime.jsx)(ebay_progress_title,{children:"Delivered"}),"July 6th"]})]})})},name:"Default state: upcoming"},DefaultStateComplete={render:function render(){return(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsxs)(ebay_progress_stepper,{defaultState:"complete",children:[(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Started"}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Shipped"}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Transit"}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Delivered"})]})})},name:"Default state: complete"},Blocked=function Blocked(){return(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsxs)(ebay_progress_stepper,{children:[(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Started"}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Shipped"}),(0,jsx_runtime.jsx)(ebay_progress_step,{state:"attention",current:!0,children:"Blocked"}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:"Delivered"})]})})};Blocked.displayName="Blocked";var CustomTitles=function CustomTitles(){return(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsxs)(ebay_progress_stepper,{children:[(0,jsx_runtime.jsx)(ebay_progress_step,{children:(0,jsx_runtime.jsx)(ebay_progress_title,{as:"h1",children:"H1"})}),(0,jsx_runtime.jsx)(ebay_progress_step,{current:!0,children:(0,jsx_runtime.jsx)(ebay_progress_title,{as:"small",children:"Small"})}),(0,jsx_runtime.jsx)(ebay_progress_step,{children:(0,jsx_runtime.jsx)(ebay_progress_title,{as:"h2",children:"H2"})})]})})};CustomTitles.displayName="CustomTitles";var VerticalColumn={render:function render(){return(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsxs)(ebay_progress_stepper,{direction:"column",children:[(0,jsx_runtime.jsxs)(ebay_progress_step,{children:[(0,jsx_runtime.jsx)(ebay_progress_title,{children:"Order placed"}),(0,jsx_runtime.jsx)("p",{children:"New Mens Addidas Ultra Boost"}),(0,jsx_runtime.jsx)("p",{children:"Order total $220"})]}),(0,jsx_runtime.jsxs)(ebay_progress_step,{current:!0,children:[(0,jsx_runtime.jsx)(ebay_progress_title,{children:"Preparing for shipment"}),(0,jsx_runtime.jsx)("p",{children:"We will notify you once it ships."})]}),(0,jsx_runtime.jsxs)(ebay_progress_step,{children:[(0,jsx_runtime.jsx)(ebay_progress_title,{children:"Delivered"}),(0,jsx_runtime.jsx)("p",{children:"Guaranteed Wednesday, October 09."})]})]})})},name:"Vertical (column)"},Controlled=function Controlled(){var TestingComponent=function TestingComponent(){var _useState2=_slicedToArray((0,react.useState)(2),2),currentNumber=_useState2[0],setCurrentNumber=_useState2[1];return(0,jsx_runtime.jsxs)("div",{style:{padding:50},children:[(0,jsx_runtime.jsx)(ebay_progress_stepper,{defaultState:function defaultState(){return currentNumber<1?"upcoming":"complete"}(),children:function range(to){var from=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from(Array(to-from+1)).map((function(v,k){return from+k}))}(4,1).map((function(n){return(0,jsx_runtime.jsxs)(ebay_progress_step,{current:currentNumber===n,children:["Step ",n]},n)}))}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(ebay_button.aG,{onClick:function onClick(){setCurrentNumber(Math.max(1,currentNumber-1))},children:"Back"})," ",(0,jsx_runtime.jsx)(ebay_button.aG,{onClick:function onClick(){setCurrentNumber(Math.min(4,currentNumber+1))},children:"Forward"})]})]})};return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(TestingComponent,{})})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"() => <div style={{\n  padding: 50\n}}>\n        <EbayProgressStepper>\n            <Step>Started</Step>\n            <Step>Shipped</Step>\n            <Step current>Transit</Step>\n            <Step>Delivered</Step>\n        </EbayProgressStepper>\n    </div>",...Default.parameters?.docs?.source}}},DefaultStateUpcoming.parameters={...DefaultStateUpcoming.parameters,docs:{...DefaultStateUpcoming.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    padding: 50\n  }}>\n            <EbayProgressStepper defaultState=\"upcoming\">\n                <Step>\n                    <Title>Paid</Title>\n                    July 3rd\n                </Step>\n                <Step>\n                    <Title>Shipped</Title>\n                    July 4th\n                </Step>\n                <Step>\n                    <Title>Transit</Title>\n                    July 5th\n                </Step>\n                <Step>\n                    <Title>Delivered</Title>\n                    July 6th\n                </Step>\n            </EbayProgressStepper>\n        </div>,\n  name: 'Default state: upcoming'\n}",...DefaultStateUpcoming.parameters?.docs?.source}}},DefaultStateComplete.parameters={...DefaultStateComplete.parameters,docs:{...DefaultStateComplete.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    padding: 50\n  }}>\n            <EbayProgressStepper defaultState=\"complete\">\n                <Step>Started</Step>\n                <Step>Shipped</Step>\n                <Step>Transit</Step>\n                <Step>Delivered</Step>\n            </EbayProgressStepper>\n        </div>,\n  name: 'Default state: complete'\n}",...DefaultStateComplete.parameters?.docs?.source}}},Blocked.parameters={...Blocked.parameters,docs:{...Blocked.parameters?.docs,source:{originalSource:'() => <div style={{\n  padding: 50\n}}>\n        <EbayProgressStepper>\n            <Step>Started</Step>\n            <Step>Shipped</Step>\n            <Step state="attention" current>\n                Blocked\n            </Step>\n            <Step>Delivered</Step>\n        </EbayProgressStepper>\n    </div>',...Blocked.parameters?.docs?.source}}},CustomTitles.parameters={...CustomTitles.parameters,docs:{...CustomTitles.parameters?.docs,source:{originalSource:'() => <div style={{\n  padding: 50\n}}>\n        <EbayProgressStepper>\n            <Step>\n                <Title as="h1">H1</Title>\n            </Step>\n            <Step current>\n                <Title as="small">Small</Title>\n            </Step>\n            <Step>\n                <Title as="h2">H2</Title>\n            </Step>\n        </EbayProgressStepper>\n    </div>',...CustomTitles.parameters?.docs?.source}}},VerticalColumn.parameters={...VerticalColumn.parameters,docs:{...VerticalColumn.parameters?.docs,source:{originalSource:"{\n  render: () => <div style={{\n    padding: 50\n  }}>\n            <EbayProgressStepper direction=\"column\">\n                <Step>\n                    <Title>Order placed</Title>\n                    <p>New Mens Addidas Ultra Boost</p>\n                    <p>Order total $220</p>\n                </Step>\n                <Step current>\n                    <Title>Preparing for shipment</Title>\n                    <p>We will notify you once it ships.</p>\n                </Step>\n                <Step>\n                    <Title>Delivered</Title>\n                    <p>Guaranteed Wednesday, October 09.</p>\n                </Step>\n            </EbayProgressStepper>\n        </div>,\n  name: 'Vertical (column)'\n}",...VerticalColumn.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"() => {\n  const TestingComponent: FC = () => {\n    const MIN = 1;\n    const MAX = 4;\n    const range = (to: number, from = 0): number[] => Array.from(Array(to - from + 1)).map((v, k) => from + k);\n    const [currentNumber, setCurrentNumber] = useState<number>(2);\n    const defaultState = (): StepState => {\n      if (currentNumber < MIN) return 'upcoming';\n      if (currentNumber > MAX) return 'complete';\n      return 'complete';\n    };\n    return <div style={{\n      padding: 50\n    }}>\n                <EbayProgressStepper defaultState={defaultState()}>\n                    {range(MAX, MIN).map(n => <Step current={currentNumber === n} key={n}>\n                            Step {n}\n                        </Step>)}\n                </EbayProgressStepper>\n                <p>\n                    <EbayButton onClick={() => {\n          setCurrentNumber(Math.max(MIN, currentNumber - 1));\n        }}>\n                        Back\n                    </EbayButton>\n          &nbsp;\n                    <EbayButton onClick={() => {\n          setCurrentNumber(Math.min(MAX, currentNumber + 1));\n        }}>\n                        Forward\n                    </EbayButton>\n                </p>\n            </div>;\n  };\n  return <>\n            <TestingComponent />\n        </>;\n}",...Controlled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DefaultStateUpcoming","DefaultStateComplete","Blocked","CustomTitles","VerticalColumn","Controlled"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);