(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{138:function(e,t,n){"use strict";n.r(t);var r=n(6),i=n.n(r),a=n(52),o=n.n(a),c=n(143),l=n(7),s=n(0),d=n.n(s),u=n(142),p=n.n(u),b=n(148),g=n(149),m=n(157),h=(n(73),n(51),n(4)),j=n.n(h),f=n(144),O=n(146),v={grey:Object(l.c)("text-align:center;color:black;background-color:",f.a.greyLight,";border:1px solid ",f.a.greyLight,";"),white:Object(l.c)("border:1px solid ",f.a.greyLight,";background-color:white;color:black;@media (",O.a.medium,"){border-left:none;border-right:none;}")},y=Object(c.a)("div",{target:"e1sb8vfm0"})("margin-top:1rem;display:flex;flex-flow:row;@media (",O.a.medium,"){flex-flow:column;}"),k=Object(c.a)("span",{target:"e1sb8vfm1"})("align-self:center;width:10%;@media (",O.a.medium,"){align-self:center;width:100%;text-align:center;margin-bottom:1rem;}"),w=Object(c.a)("div",{target:"e1sb8vfm2"})("padding:1rem 0;width:90%;@media (",O.a.medium,"){padding:1rem 0;font-weight:bold;width:100%;}",function(e){return e.background?v[e.background]:""},";"),x=function(e){var t=e.collection;return Object(l.d)(y,null,Object(l.d)(k,null,t.time),Object(l.d)(w,{background:"grey"},Object(l.d)("span",null,t.title)))};x.propTypes={collection:j.a.object};var S=x,z=n(50),D=n.n(z),C=(n(49),function(e){var t=Object.assign({},e);return Object(l.d)("svg",D()({},t,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 125"}),Object(l.d)("polygon",{points:"80.9,32.3 77.2,28.5 50,55.7 22.8,28.5 19.1,32.3 46.3,59.5 19.1,86.6 22.8,90.4 50,63.2 77.2,90.4 80.9,86.6 53.7,59.5 "}))}),T=Object(l.c)("margin:1rem auto;color:black;&:focus,&:hover{color:",f.a.knowit.green,";}"),I=Object(c.a)("span",{target:"e9878xm0"})({name:"1k1ywwy",styles:"margin-top:0.2rem;display:block;"}),L=function(e){return e.length>100?e.substring(0,100)+"... Les mer":e},q=function(e){var t=e.showDescription,n=e.toggleShowDescription,r=e.description;return r.length<101?Object(l.d)(I,null,r):t?Object(l.d)(I,null,Object(l.d)("div",{dangerouslySetInnerHTML:{__html:r}}),Object(l.d)(m.a,{appearance:"stripped",onClick:n,css:T},Object(l.d)(C,null))):Object(l.d)(I,{onClick:n},Object(l.d)("div",{dangerouslySetInnerHTML:{__html:L(r)}}))};q.propTypes={showDescription:j.a.bool.isRequired,toggleShowDescription:j.a.func.isRequired,description:j.a.string.isRequired},q.defaultProps={description:""};var R=q,_=(n(154),n(158)),H=Object(c.a)("img",{target:"e5nxz3p0"})("height:100px;border-bottom:3px solid ",f.a.primary,";"),M={name:"13gzsmf",styles:"width:60px;height:60px;"},B={name:"17lcynd",styles:"font-size:0.8rem;display:block;font-weight:bold;color:black;&:hover,&:focus{color:black;}"},P=Object(c.a)("span",{target:"e5nxz3p1"})({name:"1baulvz",styles:"display:inline-block;"}),F=function(e){var t=e.speaker,n=e.numberOfSpeakers,r=e.talkId;return Object(l.d)("div",null,Object(l.d)(P,null,t.pic?Object(l.d)(H,{src:Object(u.withPrefix)("/static/pics/"+t.pic)}):Object(l.d)(_.a,{css:M})),Object(l.d)(p.a,{css:B,to:"/speakers#"+r},n>1?t.name+" med flere":t.name))};F.propTypes={speaker:j.a.object.isRequired,numberOfSpeakers:j.a.number.isRequired,talkId:j.a.string.isRequired};var J=F,A=Object(c.a)("div",{target:"e1psjpcb0"})("padding:1rem 1rem;text-align:center;font-weight:bold;width:100%;background-color:",f.a.greyLight,";margin:1rem -1rem;"),E=Object(c.a)("div",{target:"e1psjpcb1"})({name:"t9vckh",styles:"margin-top:3rem;display:flex;"}),G=Object(c.a)("div",{target:"e1psjpcb2"})({name:"1c4p325",styles:"display:inline-block;margin-left:2rem;width:85%;"}),K=Object(c.a)("strong",{target:"e1psjpcb3"})({name:"1pzgj2l",styles:"display:inline-block;text-align:center;width:15%;"}),N=function(e){function t(){var t;return(t=e.call(this)||this).state={showDescription:!1},t.toggleShowDescription=t.toggleShowDescription.bind(o()(o()(t))),t}i()(t,e);var n=t.prototype;return n.toggleShowDescription=function(){this.setState(function(e){return{showDescription:!e.showDescription}})},n.render=function(){var e=this.props.talkId;if("pause"===e)return Object(l.d)(A,null,Object(l.d)("span",null,"Pause"));var t=b.a.talks[e];return Object(l.d)(E,null,Object(l.d)(K,null,t.speakers&&0!==t.speakers.length?Object(l.d)(J,{speaker:t.speakers[0],numberOfSpeakers:t.speakers.length,talkId:e}):null),Object(l.d)(G,null,Object(l.d)("strong",null,t.title),Object(l.d)(R,{description:t.description,showDescription:this.state.showDescription,toggleShowDescription:this.toggleShowDescription})))},t}(d.a.Component);N.propTypes={talkId:j.a.string.isRequired};var Q=N,U=Object(c.a)("div",{target:"e1mofeog0"})("flex:1 ",function(e){return e.double?"50%":"28%"},";padding:1rem;background-color:white;border:1px solid ",f.a.greyLight,";@media (",O.a.medium,"){flex:1 100%;border-left:none;border-right:none;}"),V=Object(c.a)("span",{target:"e1mofeog1"})("color:",f.a.knowit.green,";font-size:0.9rem;"),W=Object(c.a)("span",{target:"e1mofeog2"})("font-size:1.2rem;float:right;color:",f.a.knowit.green,";"),X=function(e){var t=e.collectionTitle,n=e.entry;e.columnSize;return Object(l.d)(U,{double:2===n.columnSize},Object(l.d)(V,null,t),Object(l.d)(W,null,n.room),n.slots.map(function(e,t){return Object(l.d)(Q,{key:e+"_"+t,talkId:e})}))};X.propTypes={collectionTitle:j.a.string,entry:j.a.object};var Y=X,Z=Object(c.a)("div",{target:"e16k5mvk0"})("display:flex;flex-flow:row;flex-wrap:wrap;justify-content:space-between;width:90%;@media (",O.a.medium,"){width:100%;}"),$=function(e){var t=e.entries;e.collectionTitle;return Object(l.d)(Z,null,t.map(function(e,t){return Object(l.d)(Y,{key:e.room,entry:e})}))};$.propTypes={entries:j.a.array,collectionTitle:j.a.string};var ee=$,te=function(e){var t=e.collection;return Object(l.d)(y,null,Object(l.d)(k,null,t.time),Object(l.d)(ee,{entries:t.entries,collectionTitle:t.title}))};te.propTypes={collection:j.a.object};var ne=te,re=(n(74),function(e){var t=e.villageId,n=b.a.villages.find(function(e){return t===e.id});return n?Object(l.d)("li",null,Object(l.d)(p.a,{to:n.path},n.name)):null});re.propTypes={villageId:j.a.string};var ie=re,ae=function(e){var t=e.villages;return t&&0!==t.length?Object(l.d)("ul",null,t.map(function(e){return Object(l.d)(ie,{key:e,villageId:e})})):null};ae.propTypes={village:j.a.arrayOf(j.a.string)};var oe=ae,ce=Object(c.a)("span",{target:"eo6h9pr0"})({name:"1cuk4ah",styles:"padding:2rem;display:inline-block;"}),le=function(e){var t=e.collection;return Object(l.d)(y,null,Object(l.d)(k,null,t.time),Object(l.d)(w,{background:"white"},Object(l.d)(ce,null,t.title),Object(l.d)(oe,{villages:t.villages})))};le.propTypes={collection:j.a.object};var se=le,de=function(e){var t=e.collection;return t?t.isBreak?Object(l.d)(S,{collection:t}):t.entries?Object(l.d)(ne,{collection:t}):Object(l.d)(se,{collection:t}):null};de.propTypes={collection:j.a.object};var ue=de,pe=n(150),be={name:"1rnkgfk",styles:"margin:2rem auto;"},ge=Object(l.c)("margin:0 auto;margin-bottom:-1rem;z-index:1;@media (",O.a.medium,"){display:none;}"),me={name:"z7o9gs",styles:"border-radius:0;box-shadow:none;"},he=Object(c.a)("select",{target:"e12dz6ze0"})("border-radius:0;height:3rem;width:80%;background-color:white;margin:0 auto;display:none;@media (",O.a.medium,"){display:block;}"),je=Object(c.a)("h1",{target:"e12dz6ze1"})({name:"13o6z6d",styles:"margin:0 auto;"}),fe=Object(l.c)("text-transform:uppercase;color:",f.a.primary,";font-size:1.2rem;text-transform:uppercase;&:hover,&:focus,&:visited{color:",f.a.primary,";}"),Oe=function(e){function t(){var t;return(t=e.call(this)||this).onDayClick=t.onDayClick.bind(o()(o()(t))),t.onSelectChange=t.onSelectChange.bind(o()(o()(t))),t.state={activeIndex:0},t}i()(t,e);var n=t.prototype;return n.onDayClick=function(e,t){e.preventDefault(),this.setState({activeIndex:t})},n.onSelectChange=function(e){this.setState({activeIndex:e.target.value})},n.render=function(){var e=this,t=b.a&&b.a.schedules[this.state.activeIndex]?b.a.schedules[this.state.activeIndex]:void 0;return t&&t.day?Object(l.d)(pe.b,{backgroundColor:f.a.greyLightest},Object(l.d)(je,null,"Skjema"),Object(l.d)(g.a,{css:be},Object(l.d)(p.a,{to:"/",css:fe},"Forside"),Object(l.d)(p.a,{to:"/speakers/",css:fe},"Talere")),Object(l.d)(g.a,{css:ge},b.a.schedules.map(function(t,n){return Object(l.d)(m.a,{key:t.day,css:me,appearance:e.state.activeIndex===n?"active":"",onClick:function(t){return e.onDayClick(t,n)}},t.day)})),Object(l.d)(he,{onChange:this.onSelectChange},b.a.schedules.map(function(t,n){return Object(l.d)("option",{key:t.day,value:n,css:me,onClick:function(t){return e.onDayClick(t,n)}},t.day)})),Object(l.d)(pe.a,{backgroundColor:f.a.greyLightest},t.collections.map(function(e,t){return Object(l.d)(ue,{key:e.title+"_"+t,collection:e})}))):Object(l.d)("span",null,"Her skjedde noe feil gitt...")},t}(d.a.Component);t.default=Oe},154:function(e,t,n){var r=n(25).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(17)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},158:function(e,t,n){"use strict";var r=n(50),i=n.n(r),a=(n(49),n(7));n(0);t.a=function(e){var t=Object.assign({},e);return Object(a.d)("svg",i()({},t,{fill:"#000000",height:"48",viewBox:"0 0 24 24",width:"48",xmlns:"http://www.w3.org/2000/svg"}),Object(a.d)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"}),Object(a.d)("path",{d:"M0 0h24v24H0z",fill:"none"}))}}}]);
//# sourceMappingURL=component---src-pages-schedule-js-740be970ad861b69ee18.js.map