(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e){e.exports={landing:{firstName:"Kaappo",lastName:" Raivio",phoneNumber:"+358 44 279 4938",bio:"I am a 16-year-old high school student in the Otaniemi high school's mathematics and science program. My interests include computer science and information technology in general, photographing and music.",email:"kaappo.raivio@gmail.com",linkedin:"",github:"https://github.com/KaappoRaivio",instagram:"https://instagram.com/kaappo.raivio"},experience:[{position:"Application Developent Associate",organization:"Accenture Technology Solutions Oy",aboutWork:"I took the position as a summer job and was able to use my abilities in creating software and hardware.",fromDate:"the start of June 2019",toDate:"the end of June 2019"}],education:[{university:"Olari school",degree:"Mathematics and science program",gpa:"9,54",fromDate:"August 2016",toDate:"May 2019"},{university:"Otaniemi high school",degree:"Mathematics and science program",gpa:"9,22",fromDate:"August 2019",toDate:"Present"}],skills:[{name:"Java"},{name:"Python"},{name:"Git"},{name:"IBM Watson"}],interests:{paragraphOne:"In addition to programming, I really like photographing. I also play the guitar and make arrangements for it.",paragraphTwo:""},awards:[{awardDetail:"IBM Watson AI Competition, 1st place",link:"https://yle.fi/uutiset/3-9955641"}],images:["./images/resized/DSC_6284.jpg","./images/resized/DSC_7728.jpg","./images/resized/DSC_2493.jpg","./images/resized/DSC_7715.jpg","./images/resized/DSC_5350.jpg","./images/resized/DSC_6420.jpg","./images/resized/DSC_5391.jpg","./images/resized/DSC_7288.jpg","./images/resized/DSC_5864.jpg","./images/resized/DSC_5932.jpg","./images/resized/DSC_5650.jpg","./images/resized/DSC_5940.jpg","./images/resized/DSC_6002.jpg"]}},,function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=t(23),p=t.n(m),d=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},l.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},l.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),l.a.createElement("span",{className:"d-none d-lg-block"},l.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:""}))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#portfolio"},"Portfolio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"Contact")))))}}]),a}(o.Component);a.default=d},function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=t(8),p=t(20),d=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).landingData=e.landingData,t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h1",{className:"mb-0 text-title"},"Contact"),l.a.createElement("h1",{className:"text-subtitle"},this.landingData.firstName,this.landingData.lastName),l.a.createElement("div",{className:"subheading mb-5 text-normal"},this.landingData.phoneNumber," \xb7",l.a.createElement("a",{className:"text-normal",href:"mailto:"+this.landingData.email}," "+this.landingData.email)),l.a.createElement("p",{className:"lead mb-5 text-normal"},this.landingData.bio),l.a.createElement("div",{className:"social-icons"},l.a.createElement("a",{href:this.landingData.github,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:p.a})),l.a.createElement("a",{href:this.landingData.instagram,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(m.a,{icon:p.b})))))}}]),a}(o.Component);a.default=d},function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=function(e){function a(e){var i;return Object(n.a)(this,a),(i=Object(s.a)(this,Object(r.a)(a).call(this,e))).images=e.images.map(function(e,a){return t(35)(e+"")}),console.log(i.images),i}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"w-100 resume-section p-3 p-lg-5 Portfolio align-items-center",id:"portfolio"},l.a.createElement("h1",{className:"mb-0 text-title portfolio"},"Portfolio"),l.a.createElement("div",{className:"image-container"},this.images.map(function(e,a){return l.a.createElement("img",{className:"portfolioimage",src:e,key:a,alt:"paska"})})))}}]),a}(o.Component);a.default=m},,,function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).experience=e.experience,t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5 text-normal"},"Experience"),this.experience.map(function(e,a){return l.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},l.a.createElement("div",{className:"resume-content"},l.a.createElement("h3",{className:"mb-0 text-normal"},e.position),l.a.createElement("div",{className:"subheading mb-3"},e.organization),l.a.createElement("p",null,e.aboutWork)),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-normal"},"from ",e.fromDate," to ",e.toDate)))})))}}]),a}(o.Component);a.default=m},function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).education=e.education,t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5 text-title"},"Education"),this.education.map(function(e,a){return l.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5 text-normal"},l.a.createElement("div",{className:"resume-content text-normal"},l.a.createElement("h3",{className:"mb-0 text-normal"},e.university),l.a.createElement("div",{className:"subheading mb-3"},e.degree),l.a.createElement("p",null,e.gpa)),l.a.createElement("div",{className:"resume-date text-md-right"},l.a.createElement("span",{className:"text-normal"},"from ",e.fromDate," to ",e.toDate)))})))}}]),a}(o.Component);a.default=m},function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=t(8),p=t(12),d=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).skills=e.skills,t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5 text-title"},"Skills"),l.a.createElement("div",{className:"subheading mb-3 text-normal"},"Programming Languages and Tools"),l.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return l.a.createElement("div",{key:a,className:"col-6"},l.a.createElement("p",{className:"list-item"},l.a.createElement(m.a,{icon:p.b,color:"green"}),l.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),a}(o.Component);a.default=d},function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).interests=e.interests,t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Interests"),l.a.createElement("p",null,this.interests.paragraphOne),l.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),a}(o.Component);a.default=m},function(e,a,t){"use strict";t.r(a);var n=t(2),i=t(3),s=t(5),r=t(4),c=t(6),o=t(0),l=t.n(o),m=t(8),p=t(12),d=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).awards=e.awards,t}return Object(c.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},l.a.createElement("div",{className:"w-100"},l.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),l.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map(function(e,a){return l.a.createElement("li",{key:a},l.a.createElement(m.a,{icon:p.a,color:"#ffc107"}),l.a.createElement("span",{className:"ml-2"}," ",e.awardDetail,l.a.createElement("br",null),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Link to an article (in Finnish)")))}))))}}]),a}(o.Component);a.default=d},,,,,function(e,a,t){e.exports=t.p+"static/media/profile.23c3b67f.jpg"},function(e,a,t){e.exports=t(68)},,,,,function(e,a,t){},,,,,,function(e,a,t){var n={"./Awards":18,"./Awards.js":18,"./Education":15,"./Education.js":15,"./Experience":14,"./Experience.js":14,"./Interests":17,"./Interests.js":17,"./Landing":10,"./Landing.js":10,"./Portfolio":11,"./Portfolio.js":11,"./Sidebar":9,"./Sidebar.js":9,"./Skills":16,"./Skills.js":16,"./images/DSC_2493.jpg":36,"./images/DSC_4321.jpg":37,"./images/DSC_5113.jpg":38,"./images/DSC_5350.jpg":39,"./images/DSC_5391.jpg":40,"./images/DSC_5650.jpg":41,"./images/DSC_5864.jpg":42,"./images/DSC_5932.jpg":43,"./images/DSC_5940.jpg":44,"./images/DSC_6002.jpg":45,"./images/DSC_6284.jpg":46,"./images/DSC_6420.jpg":47,"./images/DSC_7288.jpg":48,"./images/DSC_7715.jpg":49,"./images/DSC_7728.jpg":50,"./images/output.jpg":51,"./images/resized/DSC_2493.jpg":52,"./images/resized/DSC_4321.jpg":53,"./images/resized/DSC_5113.jpg":54,"./images/resized/DSC_5350.jpg":55,"./images/resized/DSC_5391.jpg":56,"./images/resized/DSC_5650.jpg":57,"./images/resized/DSC_5864.jpg":58,"./images/resized/DSC_5932.jpg":59,"./images/resized/DSC_5940.jpg":60,"./images/resized/DSC_6002.jpg":61,"./images/resized/DSC_6284.jpg":62,"./images/resized/DSC_6420.jpg":63,"./images/resized/DSC_7288.jpg":64,"./images/resized/DSC_7715.jpg":65,"./images/resized/DSC_7728.jpg":66,"./images/resized/output.jpg":67};function i(e){var a=s(e);return t(a)}function s(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=35},function(e,a,t){e.exports=t.p+"static/media/DSC_2493.33fa6c73.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_4321.7f12803b.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5113.a9bf4ec3.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5350.9b59cb80.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5391.1b74541e.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5650.b9d4fce8.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5864.d7c65e52.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5932.b0141a54.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5940.ac783e84.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_6002.14893cdb.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_6284.a7980868.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_6420.83bc75be.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_7288.907aa27c.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_7715.60a84857.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_7728.93405be0.jpg"},function(e,a,t){e.exports=t.p+"static/media/output.30cb79f2.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_2493.9d0c9e34.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_4321.6b187fa4.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5113.a86f4969.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5350.e5f6d4e3.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5391.3c63729d.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5650.8f2603d2.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5864.f713d0dc.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5932.391b2452.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_5940.5d37388c.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_6002.71e0c9e2.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_6284.0d8b7b9d.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_6420.153c6d5d.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_7288.d55c8717.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_7715.6d1e5ddc.jpg"},function(e,a,t){e.exports=t.p+"static/media/DSC_7728.5118559a.jpg"},function(e,a,t){e.exports=t.p+"static/media/output.f69e1a30.jpg"},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),s=t(22),r=t.n(s),c=(t(29),t(2)),o=t(3),l=t(5),m=t(4),p=t(6),d=t(9),g=t(10),u=(t(14),t(15),t(16),t(17),t(18),t(11)),f=t(7),j=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={landingData:f.landing,experience:f.experience,education:f.education,skills:f.skills,interests:f.interests,awards:f.awards,images:f.images},t}return Object(p.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App bg-secondary"},i.a.createElement(d.default,{sidebarData:this.state.landingData}),i.a.createElement("div",{className:"container-fluid p-0 text-normal"},i.a.createElement("div",{className:"container-fluid p-0 text-normal"},i.a.createElement(u.default,{images:this.state.images})),i.a.createElement(g.default,{landingData:this.state.landingData}),i.a.createElement("hr",{className:"m-0"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[24,1,2]]]);
//# sourceMappingURL=main.7c336bb1.chunk.js.map