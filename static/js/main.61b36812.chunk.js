(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(e,a,t){e.exports=t(46)},26:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/me.9328ad0f.png"},31:function(e,a,t){},40:function(e,a,t){e.exports=t.p+"static/media/movieengine.0173c9cf.png"},41:function(e,a,t){e.exports=t.p+"static/media/taskmanage.ccd61774.png"},42:function(e,a,t){e.exports=t.p+"static/media/othello.81809140.png"},43:function(e,a,t){e.exports=t.p+"static/media/rna.94fe2864.png"},44:function(e,a,t){e.exports=t.p+"static/media/yelpcamp.043a8655.png"},45:function(e,a,t){e.exports=t.p+"static/media/issuetracker.e2c69276.png"},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),s=t.n(l),c=(t(26),t(1)),o=t(2),i=t(4),m=t(3),u=t(14),p=t(19),d=t.n(p),E=(t(29),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=(this.props.data.occupation,this.props.data.description,this.props.data.address.city,this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))})));return r.a.createElement("header",{id:"home"},r.a.createElement("nav",{id:"nav-wrap"},r.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),r.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),r.a.createElement("ul",{id:"nav",className:"nav"},r.a.createElement("li",{className:"current"},r.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),r.a.createElement("li",null,r.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},a))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),h=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e)),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=t(30),v=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.bio,t=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,s=this.props.data.phone,c=this.props.data.email;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"three columns"},r.a.createElement("img",{className:"profile-pic",src:f,alt:"Profile Pic"})),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",{className:"address"},r.a.createElement("span",null,e),r.a.createElement("br",null),r.a.createElement("span",null,t," ",n,", ",l),r.a.createElement("br",null),r.a.createElement("span",null,s),r.a.createElement("br",null),r.a.createElement("span",null,c)))))))}}]),t}(n.Component),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree," ",r.a.createElement("span",null,"\u2022"),r.a.createElement("em",{className:"date"},e.graduated)))})),a=this.props.data.work.map((function(e){if(e.description)var a=e.description.map((function(e){return r.a.createElement("li",{key:e},e)}));return r.a.createElement("div",{key:e.title},r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"info"},e.company),r.a.createElement("p",{className:"info"},r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("p",null,a))})),t=this.props.data.projects.map((function(e){if(e.details)var a=e.details.map((function(e){return r.a.createElement("li",{key:e},e)}));return r.a.createElement("div",{key:e.title},r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"info"},e.location),r.a.createElement("p",{className:"info"},r.a.createElement("em",{className:"date"},e.time)),r.a.createElement("p",null,a))})),n=this.props.data.skills.map((function(e){e.name.toLowerCase();return r.a.createElement("li",{key:e.name},r.a.createElement("em",null,e.name))}));return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},e)))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work Experience"))),r.a.createElement("div",{className:"nine columns main-col"},a)),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Projects"))),r.a.createElement("div",{className:"nine columns main-col"},t)),r.a.createElement("div",{className:"row skill"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Skills"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"bars"},r.a.createElement("ul",{className:"skills"},n)))))}}]),t}(n.Component),b=t(6),g=(t(31),t(20)),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).scrollToTop=function(){g.animateScroll.scrollToTop()},n.submitForm=n.submitForm.bind(Object(b.a)(n)),n.state={status:"",color:"white"},n.onHover=n.onHover.bind(Object(b.a)(n)),n.noHover=n.noHover.bind(Object(b.a)(n)),n.scrollToTop=n.scrollToTop.bind(Object(b.a)(n)),n}return Object(o.a)(t,[{key:"onHover",value:function(){this.setState({color:"orange"})}},{key:"noHover",value:function(){this.setState({color:"white"})}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),r=new XMLHttpRequest;r.open(t.method,t.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},r.send(n)}},{key:"render",value:function(){var e=this.state.status;if(this.props.data)var a=this.props.data.name,t=this.props.data.address.city,n=this.props.data.address.state,l=this.props.data.address.zip,s=this.props.data.phone,c=this.props.data.contactmessage;return r.a.createElement("section",{id:"contact"},r.a.createElement("div",{className:"row section-head"},r.a.createElement("div",{className:"two columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Get In Touch."))),r.a.createElement("div",{className:"ten columns"},r.a.createElement("p",{className:"lead"},c))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"eight columns"},r.a.createElement("form",{action:"https://formspree.io/xeqrrzzz",method:"POST",onSubmit:this.submitForm},r.a.createElement("label",{htmlFor:"contactEmail"},"Email ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("input",{type:"email",size:"35",id:"contactEmail",name:"email"}),r.a.createElement("label",{htmlFor:"contactMessage"},"Message ",r.a.createElement("span",{className:"required"},"*")),r.a.createElement("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message"}),"SUCCESS"===e?r.a.createElement("p",null,"Thanks!"):r.a.createElement("button",{className:"submit"},"Submit"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! There was an error.")),r.a.createElement("div",{id:"message-warning"}," Error boy"),r.a.createElement("div",{id:"message-success"},r.a.createElement("i",{className:"fa fa-check"}),"Your message was sent, thank you!",r.a.createElement("br",null))),r.a.createElement("aside",{className:"four columns footer-widgets"},r.a.createElement("div",{className:"widget widget_contact"},r.a.createElement("h4",null,"Address and Phone"),r.a.createElement("p",{className:"address"},a,r.a.createElement("br",null),t,", ",n," ",l,r.a.createElement("br",null),r.a.createElement("span",null,s))))))}}]),t}(n.Component),k=t(40),y=t(41),j=t(42),O=t(43),S=t(44),C=t(45),D=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e={movieengine:k,taskmanage:y,othello:j,rna:O,yelpcamp:S,issuetracker:C};if(this.props.data)var a=this.props.data.projects.map((function(a){var t=a.image;return r.a.createElement("div",{key:a.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("a",{href:a.url,title:a.title},r.a.createElement("img",{alt:a.title,src:e[t]}),r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,a.title),r.a.createElement("p",null,a.category))),r.a.createElement("div",{className:"link-icon"},r.a.createElement("i",{className:"fa fa-link"})))))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Check Out Some of My Works."),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},a))))}}]),t}(n.Component),x=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){d.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{data:this.state.resumeData.main}),r.a.createElement(v,{data:this.state.resumeData.main}),r.a.createElement(N,{data:this.state.resumeData.resume}),r.a.createElement(D,{data:this.state.resumeData.resume}),r.a.createElement(w,{data:this.state.resumeData.main}),r.a.createElement(h,{data:this.state.resumeData.main}))}}]),t}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(r.a.createElement(x,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/my-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/my-app","/service-worker.js");T?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):R(e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.61b36812.chunk.js.map