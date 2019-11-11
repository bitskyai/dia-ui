(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{aFd4:function(e,t,a){"use strict";var r=a("tAuX"),l=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.Login=k,t.default=void 0;var s=l(a("jHYr"));a("y8nQ");var n=l(a("Vl3Y"));a("5NDa");var o=l(a("5rEg"));a("+L6B");var i=l(a("2/Rp"));a("Pwec");var d=l(a("CtXQ"));a("fOrg");var u=l(a("+KLJ")),f=l(a("p0pE")),c=l(a("2Taf")),m=l(a("vZ4D")),g=l(a("l4Ni")),p=l(a("ujKo")),v=l(a("MhPg")),h=l(a("q1tI")),y=(l(a("17x9")),a("MuoO")),E=a("Y2fQ"),M=l(a("wY1l")),b=a("ArA+"),w=l(a("EKjn")),P=a("osWS"),x=r(a("dRp0")),L=function(e){function t(){var e,a;(0,c.default)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return a=(0,g.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(l))),a.state={confirmDirty:!1,autoCompleteResult:[],redirectUrl:void 0,sending:!1,alertType:"error",error:void 0,errorMsg:void 0},a.handleSubmit=function(e){e.preventDefault(),a.setState((0,f.default)({},a.state,{sending:!0})),a.props.form.validateFieldsAndScroll(function(e,t){e?a.setState((0,f.default)({},a.state,{sending:!1})):(0,x.default)({url:"/apis/login",method:"POST",data:t}).then(function(e){a.setState((0,f.default)({},a.state,{error:void 0,sending:!1}));var t=(0,x.getRedirectURL)(e);t&&(location.href=t)}).catch(function(e){var t={status:500},r=(0,E.formatMessage)({id:"app.common.messages.serverTempDown"});e&&e.status&&(t={status:e.status}),e&&e.status&&(e.status>400&&e.status<500?r=(0,E.formatMessage)({id:"app.common.messages.signInFail"}):e.status>=500&&(r=(0,E.formatMessage)({id:"app.common.messages.serverTempDown"}))),a.setState((0,f.default)({},a.state,{error:t,errorMsg:r,sending:!1}))})})},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a}return(0,v.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=location&&location.hash||"",a="none",r=this.state.errorMsg,l=this.state.alertType,s="";return this.state.redirectUrl?h.default.createElement(b.Redirect,{to:this.state.redirectUrl}):(this.state.error?a="block":1===t.search("existing")&&(a="block",l="info",r=(0,E.formatMessage)({id:"app.containers.LoginPage.existingAccount"}),s=(0,E.formatMessage)({id:"app.containers.LoginPage.existingAccountDescription"})),h.default.createElement("div",null,h.default.createElement(u.default,{message:r,description:s,type:l,style:{marginBottom:"20px",display:a}}),h.default.createElement("a",{href:"/auth/github"},h.default.createElement(i.default,{type:"primary",htmlType:"submit",size:"large",block:!0},h.default.createElement(d.default,{type:"github",style:{verticalAlign:"1.5px"}}),(0,E.formatMessage)({id:"app.containers.LoginPage.signInWithGithub"}))),h.default.createElement("div",{style:{color:"grey",textAlign:"center",padding:"15px 0"}},(0,E.formatMessage)({id:"app.containers.LoginPage.or"})),h.default.createElement(n.default,{className:"login-form",onSubmit:this.handleSubmit},h.default.createElement(n.default.Item,{label:(0,E.formatMessage)({id:"app.common.messages.emailTitle"})},e("email",{rules:[{type:"email",message:(0,E.formatMessage)({id:"app.common.messages.invalidEmail"})},{required:!0,message:(0,E.formatMessage)({id:"app.common.messages.typeValidEmail"})}]})(h.default.createElement(o.default,{size:"large",prefix:h.default.createElement(d.default,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:(0,E.formatMessage)({id:"app.common.messages.emailPlaceholder"})}))),h.default.createElement(n.default.Item,{label:(0,E.formatMessage)({id:"app.common.messages.passwordTitle"})},e("password",{rules:[{required:!0,message:(0,E.formatMessage)({id:"app.containers.LoginPage.typePassword"})},{validator:this.validateToNextPassword}]})(h.default.createElement(o.default,{size:"large",type:"password",prefix:h.default.createElement(d.default,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),placeholder:(0,E.formatMessage)({id:"app.common.messages.passwordPlaceholder"})}))),h.default.createElement(n.default.Item,null,h.default.createElement(i.default,{size:"large",type:"primary",htmlType:"submit",block:!0,ghost:!0,style:{color:P.darkBlueColor},loading:this.state.sending},(0,E.formatMessage)({id:"app.containers.LoginPage.login"}))))))}}]),t}(h.default.Component);function k(){var e=n.default.create({name:"login_form"})(L),t=h.default.createElement("div",null,h.default.createElement(e,null),h.default.createElement("div",{style:{textAlign:"center"}},h.default.createElement(i.default,{type:"link"},h.default.createElement(M.default,{to:"/forgot"},h.default.createElement("span",{style:{textDecoration:"underline"}},(0,E.formatMessage)({id:"app.containers.LoginPage.forgetPassword"})))))),a=h.default.createElement("div",null,h.default.createElement("span",{style:{lineHeight:"60px"}},(0,E.formatMessage)({id:"app.containers.LoginPage.newUser"})),h.default.createElement(i.default,{type:"primary",ghost:!0,style:{color:P.darkBlueColor,marginLeft:"20px"}},h.default.createElement(M.default,{to:"/signup"},(0,E.formatMessage)({id:"app.containers.LoginPage.signUp"}))));return h.default.createElement(w.default,{cardContent:t,cardFooter:a})}var A=(0,y.connect)(function(e){return(0,s.default)(e),{}})(k);t.default=A},xdAK:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a("q1tI")),s=r(a("aFd4")),n=function(){return l.default.createElement(s.default,null)};t.default=n}}]);