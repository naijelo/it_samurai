(this.webpackJsonpreact_social=this.webpackJsonpreact_social||[]).push([[3],{300:function(t,e,s){t.exports={link:"Profile_link__35z-U",a:"Profile_a__2gCpu",profile:"Profile_profile__3JkqO"}},301:function(t,e,s){},302:function(t,e,s){t.exports={post:"Post_post__6jlOY"}},303:function(t,e,s){},304:function(t,e,s){"use strict";s.r(e);var i=s(5),n=s(35),r=s(36),a=s(38),o=s(37),c=s(0),u=s.n(c),p=s(300),l=s.n(p),j=s(39),d=(s(301),s(129)),f=s(1),h=function(t){var e=Object(c.useState)(!1),s=Object(d.a)(e,2),i=s[0],n=s[1],r=Object(c.useState)(t.status),a=Object(d.a)(r,2),o=a[0],u=a[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(f.jsxs)("div",{children:[!i&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){n(!0)},children:t.status||"No Status Here"})}),i&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{autoFocus:!0,onBlur:function(){n(!1),t.updateStatus(o)},onChange:function(t){u(t.currentTarget.value)},value:o})})]})},b=s(116),O=function(t){var e=t.profile,s=t.status,i=t.updateStatus,n=t.isOwner,r=t.savePhoto;if(!e)return Object(f.jsx)(j.a,{});return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.photos.large||b.a}),n&&Object(f.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&r(t.target.files[0])}}),Object(f.jsx)(h,{status:s,updateStatus:i})]})})},x=s(94),v=s(302),m=s.n(v),P=function(t){return Object(f.jsxs)("div",{className:m.a.post,children:[Object(f.jsxs)("div",{className:"message",children:["Message: ",t.message]}),Object(f.jsxs)("div",{className:"likes",children:["Likes: ",t.likesCount]})]})},g=s(303),S=s.n(g),k=s(127),_=s(128),w=s(85),y=s(47),C=Object(w.a)(10),I=Object(_.a)({form:"ProfileAddNewPostForm"})((function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(k.a,{name:"newPostText",component:y.b,placeholder:"Post Message",validate:[w.b,C]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add post"})})]})})),N=function(t){var e=t.posts.map((function(t){return Object(f.jsx)(P,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"My posts"}),Object(f.jsx)(I,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(f.jsx)("div",{className:S.a.posts,children:e})]})},U=s(15),T=Object(U.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(x.a)(e))}}}))(N),A=function(t){return Object(f.jsxs)("div",{className:l.a.profile,children:[Object(f.jsx)(O,{profile:t.profile,savePhoto:t.savePhoto,isOwner:t.isOwner,status:t.status,updateStatus:t.updateStatus}),Object(f.jsx)(T,{})]})},M=s(10),D=s(9),J=function(t){Object(a.a)(s,t);var e=Object(o.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorisedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!=t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(f.jsx)(A,Object(i.a)(Object(i.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(u.a.Component);e.default=Object(D.d)(Object(U.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorisedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:x.d,getStatus:x.c,updateStatus:x.f,savePhoto:x.e}),M.f)(J)}}]);
//# sourceMappingURL=3.1515fba8.chunk.js.map