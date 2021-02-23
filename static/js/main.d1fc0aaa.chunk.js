(this["webpackJsonpbattle-tracker"]=this["webpackJsonpbattle-tracker"]||[]).push([[0],{32:function(t,e,a){},33:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),c=a(18),s=a(19),i=a(6),p=a(2),d=a(3),u=a(5),o=a(4),h=a(0),l=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("header",{children:Object(h.jsx)("a",{href:"/",children:Object(h.jsx)("h1",{children:"\u2694\ufe0f Dungeons & Dragons Battle Tracker"})})})}}]),a}(n.a.Component),j=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).damageRef=n.a.createRef(),t.recordDamage=function(e){e.preventDefault();var a=parseInt(t.damageRef.current.value);t.props.updateHp(a,t.props.hp),e.currentTarget.reset()},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"record-damage",onSubmit:this.recordDamage,children:[Object(h.jsx)("input",{id:"character-".concat(this.props.id,"-damage"),name:"damage",type:"number",ref:this.damageRef,placeholder:"Damage",required:!0}),Object(h.jsx)("button",{id:"character-".concat(this.props.id,"-damage-btn"),disabled:!this.props.battleStarted,children:"Record Damage"})]})}}]),a}(n.a.Component),b=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={hp:t.props.details.hp,damage:0,message:"",status:""},t.getMessage=function(e,a,r){return{nothing:Object(h.jsxs)("span",{className:"hp-update-msg",id:"hpUpdateMsg-".concat(t.props.details.index),children:[Object(h.jsx)("span",{className:"emoji",children:"\ud83e\udd37\u200d\u2642\ufe0f"})," ",Object(h.jsx)("span",{className:a,children:"Nothing happened."})]}),died:Object(h.jsxs)("span",{className:"hp-update-msg",id:"hpUpdateMsg-".concat(t.props.details.index),children:[Object(h.jsx)("span",{className:"emoji",children:"\ud83d\ude31"})," ",Object(h.jsxs)("span",{className:a,children:[e," died!"]})]}),healed:Object(h.jsxs)("span",{className:"hp-update-msg",id:"hpUpdateMsg-".concat(t.props.details.index),children:[Object(h.jsx)("span",{className:"emoji",children:"\u2747\ufe0f "})," ",Object(h.jsxs)("span",{className:a,children:[e," was healed for ",Math.abs(r)," points!"]})]}),revived:Object(h.jsxs)("span",{className:"hp-update-msg",id:"hpUpdateMsg-".concat(t.props.details.index),children:[Object(h.jsx)("span",{className:"emoji",children:"\u2728"})," ",Object(h.jsxs)("span",{className:a,children:[e," was revived!"]})]}),damaged:Object(h.jsxs)("span",{className:"hp-update-msg",id:"hpUpdateMsg-".concat(t.props.details.index),children:[Object(h.jsx)("span",{className:"emoji",children:"\ud83d\udca5"})," ",Object(h.jsxs)("span",{className:a,children:[e," took ",Math.abs(r)," damage!"]})]}),dead:Object(h.jsxs)("span",{className:"hp-update-msg",id:"hpUpdateMsg-".concat(t.props.details.index),children:[Object(h.jsx)("span",{className:"emoji",children:"\ud83d\udc80"})," ",Object(h.jsxs)("span",{className:a,children:[e," is dead."]})]})}[a]},t.updateHp=function(e,a){var r,n=null!==(r=t.state.hp)&&void 0!==r?r:0,c=n-parseInt(e);c<0&&(c=0),c>a&&(c=a);var s={newHp:c,oldHp:n,damage:e};t.setState({hp:c}),t.setState({damage:e}),t.updateStatus(s)},t.updateStatus=function(e){var a=e.newHp,r=e.oldHp,n=e.damage,c="";0===n&&(c="nothing"),a<r&&(c="damaged",0===a&&(c="died")),0===a&&0===r&&(c="dead"),a>r&&(c="healed",0===r&&(c="revived")),t.setState({status:c}),t.setState({message:t.getMessage(t.props.details.name,c,n)})},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.details,e="character"===this.props.type?"PC":"NPC";return Object(h.jsxs)("li",{id:"character-".concat(t.index),children:[Object(h.jsxs)("span",{className:"character-details",id:"character-".concat(t.index,"-details"),children:[t.name," (",t.init,") (",e,")"]}),Object(h.jsxs)("span",{className:"character-hp",id:"character-".concat(t.index,"-hp"),children:[Object(h.jsx)("span",{className:"hp-label",children:"HP: "}),this.state.hp]}),Object(h.jsx)(j,{id:t.index,hp:t.hp,updateHp:this.updateHp,characterStatus:this.state.status,updateStatus:this.updateStatus,battleStarted:this.props.battleStarted}),this.state.message]})}}]),a}(n.a.Component),m=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).getCharacters=function(e){return e?Object.keys(e).map((function(a){return Object(h.jsx)(b,{details:e[a],type:t.props.type,battleStarted:t.props.battleStarted},a)})):null},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this.props.type;return Object(h.jsx)("ul",{id:"".concat(t,"-list"),children:this.getCharacters(this.props.characters)})}}]),a}(n.a.Component);function O(t){switch(t){case 1:return-5;case 2:case 3:return-4;case 4:case 5:return-3;case 6:case 7:return-2;case 8:case 9:return-1;case 10:case 11:return 0;case 12:case 13:return 1;case 14:case 15:return 2;case 16:case 17:return 3;case 18:case 19:return 4;case 20:case 21:return 5;case 22:case 23:return 6;case 24:case 25:return 7;case 26:case 27:return 8;case 28:case 29:return 9;case 30:return 10;default:return 0}}function x(){var t=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}var f=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).nameRef=n.a.createRef(),t.dexRef=n.a.createRef(),t.hpRef=n.a.createRef(),t.initRef=n.a.createRef(),t.createCharacter=function(e){var a;e.preventDefault();var r=O(parseInt(t.dexRef.current.value))+parseInt(t.initRef.current.value),n={index:null!==(a=t.props.characterIndex)&&void 0!==a?a:t.props.npcIndex,name:t.nameRef.current.value,dex:parseInt(t.dexRef.current.value),hp:parseInt(t.hpRef.current.value),init:r};"character"===t.props.type?(t.props.updateCharacters(n.index,n),t.props.updateCharacterCount()):(t.props.updateNPCs(n.index,n),t.props.updateNpcCount()),e.currentTarget.reset()},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this,e=this.props.characterIndex;return Object(h.jsxs)("form",{className:"character-edit",onSubmit:this.createCharacter,children:[Object(h.jsx)("input",{name:"character-name",className:"character-name",id:"addChar-".concat(e),placeholder:"Character Name",ref:this.nameRef,required:!0}),Object(h.jsx)("input",{name:"dexterity",className:"character-dex",id:"charDex-".concat(e),type:"number",min:"1",max:"30",placeholder:"Dex",ref:this.dexRef,required:!0}),Object(h.jsx)("input",{name:"hp",className:"hp-input",id:"hp-".concat(e),placeholder:"HP",type:"number",min:"1",ref:this.hpRef,required:!0}),Object(h.jsx)("input",{name:"initiative",className:"character-initiative",type:"number",min:"1",max:"20",placeholder:"d20",id:"charInit-".concat(e),ref:this.initRef,required:!0}),Object(h.jsx)("button",{type:"submit",id:"add-tmp-char-".concat(e),onClick:function(){t.createCharacter},children:"Add"})]})}}]),a}(n.a.Component),v=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"characters",children:[Object(h.jsx)("h2",{children:"Characters"}),Object(h.jsx)(m,{type:"character",characters:this.props.characters,battleStarted:this.props.battleStarted}),Object(h.jsx)(f,{type:"character",characterIndex:this.props.characterIndex,updateCharacterCount:this.props.updateCharacterCount,updateCharacters:this.props.updateCharacters})]})}}]),a}(n.a.Component),C=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"monsters-npcs",children:[Object(h.jsx)("h2",{children:"Monsters & NPCs"}),Object(h.jsx)(m,{type:"monster-npc",characters:this.props.npcs,battleStarted:this.props.battleStarted}),Object(h.jsx)(f,{type:"npc",npcIndex:this.props.npcIndex,updateNpcCount:this.props.updateNpcCount,updateNPCs:this.props.updateNPCs})]})}}]),a}(n.a.Component),g=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsx)("button",{id:"save-all-fields",disabled:!this.props.battleCanStart,onClick:this.props.updateBattleStarted,children:"Let's go! \ud83d\udca5"})}}]),a}(n.a.Component),S=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"start",id:"save-fields",children:[Object(h.jsx)(g,{battleCanStart:this.props.battleCanStart,updateBattleStarted:this.props.updateBattleStarted}),Object(h.jsx)("p",{className:"description",id:"save-all-fields-desc",children:"Click the button when all characters have been added to start the battle!"})]})}}]),a}(n.a.Component),y=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(p.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={characterCount:0,npcCount:0,characters:[],npcs:[],battleStarted:!1,battleCanStart:!1},t.updateCharacters=function(e,a){var r=t.state.characters;r[e]=a,r.sort((function(t,e){return t.init<e.init||t.init===e.init&&t.dex<e.dex?1:-1})),t.setState({characters:r})},t.updateNPCs=function(e,a){var r=t.state.npcs;r[e]=a,r.sort((function(t,e){return t.init<e.init||t.init===e.init&&t.dex<e.dex?1:-1})),t.setState({npcs:r})},t.updateCharacterCount=function(){var e=t.state.characterCount+1;t.setState({characterCount:e})},t.updateNpcCount=function(){var e=t.state.npcCount+1;t.setState({npcCount:e})},t.maybeUpdateBattleCanStart=function(){var e=t.state.npcCount,a=t.state.characterCount;t.state.battleStarted||t.state.battleCanStart||e>0&&a>0&&t.setState({battleCanStart:!0})},t.updateBattleStarted=function(){t.state.battleStarted||t.setState({battleStarted:!0})},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this.props.match.params,e=localStorage.getItem(t.encounterGuid);e&&this.setState(JSON.parse(e))}},{key:"componentDidUpdate",value:function(){this.maybeUpdateBattleCanStart(),localStorage.setItem(this.props.match.params.encounterGuid,JSON.stringify(this.state))}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l,{}),Object(h.jsxs)("div",{className:"battle-tracker",children:[Object(h.jsx)(v,{characterIndex:this.state.characterCount,updateCharacterCount:this.updateCharacterCount,characters:this.state.characters,updateCharacters:this.updateCharacters,battleStarted:this.state.battleStarted}),Object(h.jsx)(C,{npcIndex:this.state.npcCount,updateNpcCount:this.updateNpcCount,npcs:this.state.npcs,updateNPCs:this.updateNPCs,battleStarted:this.state.battleStarted}),Object(h.jsx)(S,{battleCanStart:this.state.battleCanStart,updateBattleStarted:this.updateBattleStarted})]})]})}}]),a}(n.a.Component),N=function(t){Object(u.a)(a,t);var e=Object(o.a)(a);function a(){var t;Object(p.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).encounterInput=n.a.createRef(),t.goToEncounter=function(e){e.preventDefault();var a=t.encounterInput.current.value;t.props.history.push("/".concat(a))},t}return Object(d.a)(a,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(l,{}),Object(h.jsx)("div",{className:"battle-tracker-home",children:Object(h.jsxs)("form",{className:"start-encounter",onSubmit:this.goToEncounter,children:[Object(h.jsx)("input",{type:"hidden",ref:this.encounterInput,defaultValue:x()}),Object(h.jsx)("button",{type:"submit",children:"Build your encounter \u2694\ufe0f"})]})})]})}}]),a}(n.a.Component),k=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Critical Fail!"}),Object(h.jsx)("p",{children:"The page you were looking for was not found. Roll again, maybe?"})]})},R=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",component:N}),Object(h.jsx)(i.a,{exact:!0,path:"/DnD-Battle-Tracker/",component:N}),Object(h.jsx)(i.a,{path:"/:encounterGuid",component:y}),Object(h.jsx)(i.a,{path:"/DnD-Battle-Tracker/:encounterGuid",component:y}),Object(h.jsx)(i.a,{component:k})]})})};a(32);Object(c.render)(Object(h.jsx)(R,{}),document.querySelector("#main"))}},[[33,1,2]]]);
//# sourceMappingURL=main.d1fc0aaa.chunk.js.map