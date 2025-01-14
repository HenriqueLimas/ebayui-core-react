import{j as c,a as e}from"./jsx-runtime-CjohWU4o.js";import{r as D}from"./index-CBqU2yxZ.js";import{a as o}from"./chunk-AY7I2SME-DUSEA8To.js";import{E as r}from"./ebay-switch-DY0iuNRB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bl6ORisp.js";const j={title:"form input/ebay-switch"},l={render:()=>c("span",{className:"field",children:[e(r,{value:"123",id:"switch-1",onChange:(a,i)=>o("onChange")(a,i)}),e("label",{className:"field__label field__label--end",htmlFor:"switch-1",children:"Default"})]}),name:"Default switch-button"},n={render:()=>c("span",{className:"field",children:[e(r,{checked:!0,value:"123",id:"switch-2",onChange:o("switch-change")}),e("label",{className:"field__label field__label--end",htmlFor:"switch-2",children:"Checked"})]}),name:"Selected switch-button"},t={render:()=>c("span",{className:"field",children:[e(r,{disabled:!0,id:"switch-20"}),e("label",{className:"field__label field__label--end",htmlFor:"switch-20",children:"Disabled"})]}),name:"Disabled switch-button"},s={render:()=>{const[a,i]=D.useState(!1);return c("span",{className:"field",children:[e(r,{checked:a,id:"switch-30",onChange:(N,d)=>{o("onChange")(N,d),d&&i(d.checked)}}),e("label",{className:"field__label field__label--end",htmlFor:"switch-30",children:a?"Checked":"Unchecked"})]})},name:"Controlled switch-button"};var h,m,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <span className="field">
            <EbaySwitch value="123" id="switch-1" onChange={(e, props) => action('onChange')(e, props)} />
            <label className="field__label field__label--end" htmlFor="switch-1">
                Default
            </label>
        </span>,
  name: 'Default switch-button'
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var p,u,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <span className="field">
            <EbaySwitch checked value="123" id="switch-2" onChange={action('switch-change')} />
            <label className="field__label field__label--end" htmlFor="switch-2">
                Checked
            </label>
        </span>,
  name: 'Selected switch-button'
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var w,_,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <span className="field">
            <EbaySwitch disabled id="switch-20" />
            <label className="field__label field__label--end" htmlFor="switch-20">
                Disabled
            </label>
        </span>,
  name: 'Disabled switch-button'
}`,...(S=(_=t.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var C,k,g;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <span className="field">
                <EbaySwitch checked={checked} id="switch-30" onChange={(e, props) => {
        action('onChange')(e, props);
        if (props) {
          setChecked(props.checked);
        }
      }} />
                <label className="field__label field__label--end" htmlFor="switch-30">
                    {checked ? 'Checked' : 'Unchecked'}
                </label>
            </span>;
  },
  name: 'Controlled switch-button'
}`,...(g=(k=s.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};const U=["DefaultSwitchButton","SelectedSwitchButton","DisabledSwitchButton","ControlledSwitchButton"];export{s as ControlledSwitchButton,l as DefaultSwitchButton,t as DisabledSwitchButton,n as SelectedSwitchButton,U as __namedExportsOrder,j as default};