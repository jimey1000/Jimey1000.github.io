"use strict";(self.webpackChunkems_ng16=self.webpackChunkems_ng16||[]).push([[592],{5643:(p,i,t)=>{t.d(i,{s:()=>_});var e=t(9862),n=t(6306),c=t(8504),s=t(553),o=t(5879),a=t(2760);let _=(()=>{class l{constructor(r,d){this.http=r,this.gs=d}getForms(){return this.http.get(s.N.apiBaseUrl+"form/admin/v1/event/"+this.gs.globals.userInfo.currentEvent.id+"/form")}getFormById(r){return this.http.get(s.N.apiBaseUrl+"form/admin/v1/event/"+this.gs.globals.userInfo.currentEvent.id+"/form/"+r,{headers:new e.WM}).pipe((0,n.K)(this.handleError))}updateFormById(r){return this.http.put(s.N.apiBaseUrl+"form/admin/v1/event/"+this.gs.globals.userInfo.currentEvent.id+"/form/"+r.id,r,{headers:new e.WM}).pipe((0,n.K)(this.handleError))}addNewForm(r){return this.http.post(s.N.apiBaseUrl+"form/admin/v1/event/"+this.gs.globals.userInfo.currentEvent.id+"/form",r,{headers:new e.WM}).pipe((0,n.K)(this.handleError))}deleteForm(r){return this.http.delete(s.N.apiBaseUrl+"form/admin/v1/event/"+this.gs.globals.userInfo.currentEvent.id+"/form/"+r,{headers:new e.WM}).pipe((0,n.K)(this.handleError))}register(r,d){return console.log(d),console.log(r),this.http.post(r,d,{headers:new e.WM}).pipe((0,n.K)(this.handleError))}handleError(r){return 0===r.status?console.error("An error occurred:",r.error):console.error(`Backend returned code ${r.status}, body was: `,r.error),(0,c._)(()=>"Something bad happened; please try again later.")}}return l.\u0275fac=function(r){return new(r||l)(o.LFG(e.eN),o.LFG(a.U))},l.\u0275prov=o.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},6832:(p,i,t)=>{t.d(i,{A:()=>c});var e=t(5879),n=t(3999);let c=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-access-denied"]],decls:14,vars:9,consts:[[1,"row","py-3"],[1,"col-12"],["role","alert",1,"alert","alert-danger","text-center","rounded-0","my-0"],[1,"fa-solid","fa-lock","fa-fade","fa-4x","mb-3"],[1,"alert-heading"],[1,"mb-0"]],template:function(a,_){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"i",3),e.TgZ(4,"h4",4),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e._UZ(10,"hr"),e.TgZ(11,"p",5),e._uU(12),e.ALo(13,"translate"),e.qZA()()()()),2&a&&(e.xp6(5),e.Oqu(e.lcZ(6,3,"Messages.AD")),e.xp6(3),e.Oqu(e.lcZ(9,5,"Messages.ADM")),e.xp6(4),e.Oqu(e.lcZ(13,7,"Messages.ADC")))},dependencies:[n.X$]}),s})()}}]);