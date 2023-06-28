"use strict";(self.webpackChunkelsenyorde=self.webpackChunkelsenyorde||[]).push([[794],{4794:(T,d,u)=>{u.r(d),u.d(d,{PuntsModule:()=>P});var m=u(6814),g=u(6538),t=u(4946),s=u(95),h=u(8433),l=u(2491);const _=[{name:"Viena",lat:41.54057767555261,lng:2.1124358919492825,descripcio:"ambient tranquil, m\xfasica baixa, poca gent, bon caf\xe8.",puntuacio:7,fav:!1,default:!0},{name:"Canalla",lat:41.5470288743763,lng:2.108373638074375,descripcio:"Menjar fant\xe0stic, bona relaci\xf3 qualitat-preu",puntuacio:9,fav:!1,default:!0}];let p=(()=>{class r{constructor(){this.markersArray=(0,t.tdS)([]),this.markersArray.set(this.getInitialArray()),(0,t.cEC)(()=>{localStorage.setItem("elsenyor-punts",JSON.stringify(this.markersArray()))})}getInitialArray(){return localStorage.getItem("elsenyor-punts")&&JSON.parse(localStorage.getItem("elsenyor-punts")).length>0?JSON.parse(localStorage.getItem("elsenyor-punts")):_}addMarkerToArr(e){this.markersArray.mutate(n=>n.push(e))}deleteMarkerFromArr(e){this.markersArray.update(n=>[...n.filter(i=>i.name!==e)])}deleteAllMarkers(){this.markersArray.update(e=>[]),localStorage.removeItem("elsenyor-punts")}modifyMarkerOfArr(e,n){const i=this.markersArray().findIndex(o=>o.name==n);this.markersArray.mutate(o=>o[i]=e)}changeFav(e,n){const i=this.markersArray().findIndex(o=>o.name==e.name);this.markersArray.mutate(o=>o[i].fav=n)}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac}),r})(),f=(()=>{class r{constructor(e){this.puntsService=e,this.markersArr=(0,t.tdS)([]),this.coordEmitter=new t.vpe,this.highlightEmitter=new t.vpe,this.currentLat=0,this.currentLon=0,this.resetMapAfterMarkersArrUpdate=(0,t.cEC)(()=>{this.markersArr()&&this.map&&(this.map.eachLayer(n=>{this.map.removeLayer(n)}),(0,l._6)(this.map),this.addMarkersArrToMap())}),this.markersArr=this.puntsService.markersArray}ngOnInit(){console.log("Map component initilized")}ngAfterViewInit(){this.map=(0,l.ip)("map"),(0,l._6)(this.map),this.addMarkersArrToMap(),this.map.on("click",e=>{this.coordEmitter.emit({lat:e.latlng.lat,lng:e.latlng.lng})})}addMarkersArrToMap(){this.markersArr().map(e=>{let n=(0,h.marker)([e.lat,e.lng],{draggable:!0}).addTo(this.map).bindPopup(`<div class="text-crimson position-relative">\n          <h2 class="text-handle"><b>${e.name}</b></h2>\n          <p><b>Puntuaci\xf3</b>: ${e.puntuacio}</p>\n          <p><b>Descripci\xf3</b>: ${e.descripcio}</p>\n          <button (click)="deleteMarker(e)" class="btn btn-outline-dark text-crimson">Eliminar marcador</button>\n        </div>`);n.on("popupopen",()=>this.emitHighlightCard({coords:{lat:e.lat,lng:e.lng},highlight:!0})),n.on("popupclose",()=>this.emitHighlightCard({coords:{lat:e.lat,lng:e.lng},highlight:!1}))})}emitHighlightCard(e){this.highlightEmitter.emit(e)}centerMap(e,n){(0,l.up)(e,n,this.map)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(p))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-map"]],outputs:{coordEmitter:"coordEmitter",highlightEmitter:"highlightEmitter"},decls:1,vars:0,consts:[["id","map"]],template:function(e,n){1&e&&t._UZ(0,"div",0)},styles:["#map[_ngcontent-%COMP%]{height:600px}"]}),r})();function k(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"form",9),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.submitForm())}),t.TgZ(1,"div")(2,"label",10),t._uU(3,"Nom: "),t.qZA(),t._UZ(4,"input",11),t.TgZ(5,"label",12),t._uU(6,"Puntuaci\xf3: "),t.qZA(),t._UZ(7,"input",13),t.qZA(),t.TgZ(8,"div")(9,"label",14),t._uU(10,"Descripci\xf3: "),t.qZA(),t._UZ(11,"input",15),t.TgZ(12,"label",16),t._uU(13,"Favorit"),t.qZA(),t._UZ(14,"input",17),t.qZA(),t.TgZ(15,"button",18),t._uU(16,"Crea el punt"),t.qZA()()}if(2&r){const e=t.oxw();t.Q6J("formGroup",e.markerForm),t.xp6(4),t.ekj("is-invalid",e.markerForm.get("inputNom").invalid&&e.markerForm.get("inputNom").touched),t.xp6(3),t.ekj("is-invalid",e.markerForm.get("inputPuntuacio").invalid&&e.markerForm.get("inputPuntuacio").touched),t.xp6(4),t.ekj("is-invalid",e.markerForm.get("inputDescripcio").invalid&&e.markerForm.get("inputDescripcio").touched),t.xp6(4),t.Q6J("disabled",!e.markerForm.valid)}}function x(r,a){if(1&r&&(t.ynx(0),t.TgZ(1,"div",2),t._uU(2),t.qZA(),t.TgZ(3,"div",2),t._uU(4),t.qZA(),t.BQk()),2&r){const e=t.oxw().$implicit;t.xp6(2),t.hij(" Descripci\xf3: ",e.descripcio," "),t.xp6(2),t.hij("Puntuaci\xf3: ",e.puntuacio,"")}}function b(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"form",32),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw().$implicit,o=t.oxw();return t.KtG(o.submitModifyForm(i))}),t.TgZ(1,"div")(2,"label",33),t._uU(3,"Nom: "),t.qZA(),t._UZ(4,"input",34),t.qZA(),t.TgZ(5,"div")(6,"label",35),t._uU(7,"Puntuaci\xf3: "),t.qZA(),t._UZ(8,"input",36),t.qZA(),t.TgZ(9,"div")(10,"label",37),t._uU(11,"Descripci\xf3: "),t.qZA(),t._UZ(12,"input",38),t.qZA(),t.TgZ(13,"button",39),t._uU(14,"Envia"),t.qZA()()}if(2&r){const e=t.oxw(2);t.Q6J("formGroup",e.markerModifyForm),t.xp6(4),t.ekj("is-invalid",e.markerModifyForm.get("inputNom2").invalid&&e.markerModifyForm.get("inputNom2").touched),t.xp6(4),t.ekj("is-invalid",e.markerModifyForm.get("inputPuntuacio2").invalid&&e.markerModifyForm.get("inputPuntuacio2").touched),t.xp6(4),t.ekj("is-invalid",e.markerModifyForm.get("inputDescripcio2").invalid&&e.markerModifyForm.get("inputDescripcio2").touched),t.xp6(1),t.Q6J("disabled",!e.markerModifyForm.valid)}}function v(r,a){1&r&&(t.TgZ(0,"small",40),t._uU(1,"Default point"),t.qZA())}function y(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"i",41),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,o=t.oxw();return t.KtG(o.changeFav(i,!1))}),t.qZA()}}function A(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"i",42),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,o=t.oxw();return t.KtG(o.changeFav(i,!0))}),t.qZA()}}function F(r,a){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",19)(2,"div",20)(3,"img",21),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.emitCenterImg(o.lat,o.lng))}),t.qZA(),t.TgZ(4,"div",22)(5,"div",23)(6,"b"),t._uU(7),t.qZA()(),t.YNc(8,x,5,2,"ng-container",24),t.YNc(9,b,15,8,"ng-template",null,25,t.W1O),t.qZA(),t.YNc(11,v,2,0,"small",26),t.YNc(12,y,1,0,"i",27),t.YNc(13,A,1,0,"i",28),t.TgZ(14,"div",29)(15,"button",30),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.showModifyMarker(o))}),t._uU(16," Modifica "),t.qZA(),t.TgZ(17,"button",31),t.NdJ("click",function(){const o=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.deleteMarker(o.name))}),t._uU(18," Elimina "),t.qZA()()()(),t.BQk()}if(2&r){const e=a.$implicit,n=a.index,i=t.MAs(10),o=t.oxw();t.xp6(2),t.Q6J("id","card-"+n),t.xp6(1),t.Q6J("src","https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s("+e.lng+","+e.lat+")/"+e.lng+","+e.lat+",14/500x300?access_token=pk.eyJ1Ijoicm9nZXItbWlyLW1pbiIsImEiOiJjbGoxbmR5cmgwc2EzM25veG12MmpsMzFsIn0._AGFhRr_UiAPltvxQ2ztiQ",t.LSH),t.xp6(4),t.Oqu(e.name),t.xp6(1),t.Q6J("ngIf",o.selectedMarker!=e.name)("ngIfElse",i),t.xp6(3),t.Q6J("ngIf",1==e.default),t.xp6(1),t.Q6J("ngIf",1==e.fav&&0==e.default),t.xp6(1),t.Q6J("ngIf",0==e.fav&&0==e.default)}}function C(r,a){if(1&r){const e=t.EpF();t.TgZ(0,"button",43),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deleteAllMarkers())}),t._uU(1," Elimina tots els punts "),t.qZA()}}const M=[{path:"",component:(()=>{class r{constructor(e,n,i,o){this.fb=e,this.puntsService=n,this.renderer=i,this.el=o,this.markersArr=(0,t.tdS)([]),this.currentCoords={lat:0,lng:0},this.showForm=!1,this.markersArr=this.puntsService.markersArray,this.markerForm=this.fb.group({inputNom:["",[s.kI.required]],inputPuntuacio:[0,[s.kI.required]],inputDescripcio:["",[s.kI.required]],inputFav:!1}),this.markerModifyForm=this.fb.group({inputNom2:["",[s.kI.required]],inputPuntuacio2:[0,[s.kI.required]],inputDescripcio2:["",[s.kI.required]],inputFav2:!1})}ngOnInit(){console.log("Punts component initialized.")}openNewPointInput(e){this.currentCoords={...e},this.showForm=!0}submitForm(){const e=this.markerForm.value;this.puntsService.addMarkerToArr({name:e.inputNom,lat:this.currentCoords.lat,lng:this.currentCoords.lng,descripcio:e.inputDescripcio,puntuacio:e.inputPuntuacio,default:!1,fav:e.inputFav}),this.markerForm.reset(),this.showForm=!1}deleteAllMarkers(){this.puntsService.deleteAllMarkers()}emitCenterImg(e,n){this.mapComponent.centerMap(e,n)}deleteMarker(e){this.puntsService.deleteMarkerFromArr(e)}showModifyMarker(e){this.selectedMarker=e.name,this.markerModifyForm.patchValue({inputNom2:e.name,inputPuntuacio2:e.puntuacio,inputDescripcio2:e.descripcio})}submitModifyForm(e){const n=this.markerModifyForm.value;this.puntsService.modifyMarkerOfArr({name:n.inputNom2,lat:e.lat,lng:e.lng,descripcio:n.inputDescripcio2,puntuacio:n.inputPuntuacio2,default:!1,fav:e.fav},e.name),this.markerModifyForm.reset(),this.selectedMarker=void 0}changeFav(e,n){this.puntsService.changeFav(e,n)}highlightCard(e){this.markersArr().forEach((n,i)=>{n.lat==e.coords.lat&&n.lng==e.coords.lng&&(this.highlightedCard=this.el.nativeElement.querySelector(`#card-${i}`),this.renderer.setStyle(this.highlightedCard,"border",1==e.highlight?"1px solid black":"none"))})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(s.qu),t.Y36(p),t.Y36(t.Qsj),t.Y36(t.SBq))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-punts"]],viewQuery:function(e,n){if(1&e&&t.Gf(f,5),2&e){let i;t.iGM(i=t.CRH())&&(n.mapComponent=i.first)}},decls:16,vars:3,consts:[[1,"fw-bold"],[1,"mb-5"],[1,"text-crimson"],[1,"mb-3",3,"coordEmitter","highlightEmitter"],["class","text-crimson my-4",3,"formGroup","ngSubmit",4,"ngIf"],[1,"punts-wrapper"],[1,"row","g-0",2,"margin","0 -16px 0 -16px"],[4,"ngFor","ngForOf"],["class","btn btn-danger mx-auto mt-4 text-crimson",3,"click",4,"ngIf"],[1,"text-crimson","my-4",3,"formGroup","ngSubmit"],["for","nom",1,"me-2"],["id","nom","type","text","placeholder","nom","formControlName","inputNom",1,"me-2","me-md-3","mb-3"],["for","puntuaci\xf3",1,"me-2"],["id","puntuaci\xf3","type","number","formControlName","inputPuntuacio",1,"me-2","me-md-3","mb-3"],["for","descripci\xf3",1,"me-2"],["id","descripci\xf3","tpye","text","formControlName","inputDescripcio",1,"me-2","me-md-3","mb-3"],["for","fav",1,"me-2"],["id","fav","type","checkbox","formControlName","inputFav",1,"me-2","me-md-3","mb-3"],["type","submit",1,"btn","btn-dark","text-handle",3,"disabled"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","p-3"],[1,"card","text-center","h-100",2,"position","relative",3,"id"],["alt","mapet",1,"cursor-pointer",3,"src","click"],[1,"card-body"],[1,""],[4,"ngIf","ngIfElse"],["markerInput",""],["style","position: absolute; top: 12px; right: 12px",4,"ngIf"],["class","fa-solid fa-star","style","position: absolute; top: 12px; right: 12px",3,"click",4,"ngIf"],["class","fa-regular fa-star","style","position: absolute; top: 12px; right: 12px",3,"click",4,"ngIf"],[1,"card-footer"],[1,"btn","btn-outline-dark","text-crimson","me-2",3,"click"],[1,"btn","btn-outline-danger","text-crimson",3,"click"],["width","70%",3,"formGroup","ngSubmit"],["for","nom2",1,"me-2"],["id","nom2","type","text","placeholder","nom","formControlName","inputNom2",1,"me-2","me-md-3","mb-3"],["for","puntuaci\xf32",1,"me-2"],["id","puntuaci\xf32","type","number","formControlName","inputPuntuacio2",1,"me-2","me-md-3","mb-3"],["for","descripci\xf32",1,"me-2"],["id","descripci\xf32","tpye","text","formControlName","inputDescripcio2",1,"me-2","me-md-3","mb-3"],["type","submit",1,"btn","btn-dark",3,"disabled"],[2,"position","absolute","top","12px","right","12px"],[1,"fa-solid","fa-star",2,"position","absolute","top","12px","right","12px",3,"click"],[1,"fa-regular","fa-star",2,"position","absolute","top","12px","right","12px",3,"click"],[1,"btn","btn-danger","mx-auto","mt-4","text-crimson",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Els meus punts"),t.qZA(),t.TgZ(2,"section",1)(3,"h3",2),t._uU(4,"Mapa de punts guardats"),t.qZA(),t.TgZ(5,"p",2),t._uU(6,' Clica el punt del mapa que vulguis afegir. A sota del mapa podr\xe0s completar la informaci\xf3. Clica el bot\xf3 "Crea el punt" i veur\xe0s com s\'afegeix un punt al mapa i com apareix la targeta del nou punt a la col\xb7lecci\xf3 de baix. Les dues primeres targetes hi s\xf3n per defecte, les pots eliminar. '),t.qZA(),t.TgZ(7,"app-map",3),t.NdJ("coordEmitter",function(o){return n.openNewPointInput(o)})("highlightEmitter",function(o){return n.highlightCard(o)}),t.qZA(),t.YNc(8,k,17,8,"form",4),t.qZA(),t.TgZ(9,"section")(10,"div",5)(11,"h3",2),t._uU(12,"Col\xb7lecci\xf3 de punts guardats"),t.qZA(),t.TgZ(13,"div",6),t.YNc(14,F,19,8,"ng-container",7),t.qZA()(),t.YNc(15,C,2,0,"button",8),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",n.showForm),t.xp6(6),t.Q6J("ngForOf",n.markersArr()),t.xp6(1),t.Q6J("ngIf",n.markersArr()))},dependencies:[m.sg,m.O5,s._Y,s.Fj,s.wV,s.Wl,s.JJ,s.JL,s.sg,s.u,f]}),r})()}];let Z=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.Bz.forChild(M),m.ez,g.Bz]}),r})(),P=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[p],imports:[m.ez,Z,s.UX]}),r})()}}]);