"use strict";(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8518],{48518:(Y,W,D)=>{D.r(W),D.d(W,{c:()=>H});var w=D(16424),X=Object.defineProperty,M=(R,x)=>X(R,"name",{value:x,configurable:!0});function z(R,x){for(var f=0;f<x.length;f++){const v=x[f];if(typeof v!="string"&&!Array.isArray(v)){for(const g in v)if(g!=="default"&&!(g in R)){const r=Object.getOwnPropertyDescriptor(v,g);r&&Object.defineProperty(R,g,r.get?r:{enumerable:!0,get:()=>v[g]})}}}return Object.freeze(Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}))}M(z,"_mergeNamespaces");var $={exports:{}};(function(R,x){(function(f){f((0,w.r)())})(function(f){var v={},g=/[^\s\u00a0]/,r=f.Pos,V=f.cmpPos;function B(t){var i=t.search(g);return i==-1?0:i}M(B,"firstNonWS"),f.commands.toggleComment=function(t){t.toggleComment()},f.defineExtension("toggleComment",function(t){t||(t=v);for(var i=this,n=1/0,e=this.listSelections(),s=null,m=e.length-1;m>=0;m--){var o=e[m].from(),l=e[m].to();o.line>=n||(l.line>=n&&(l=r(n,0)),n=o.line,s==null?i.uncomment(o,l,t)?s="un":(i.lineComment(o,l,t),s="line"):s=="un"?i.uncomment(o,l,t):i.lineComment(o,l,t))}});function F(t,i,n){return/\bstring\b/.test(t.getTokenTypeAt(r(i.line,0)))&&!/^[\'\"\`]/.test(n)}M(F,"probablyInsideString");function j(t,i){var n=t.getMode();return n.useInnerComments===!1||!n.innerMode?n:t.getModeAt(i)}M(j,"getMode"),f.defineExtension("lineComment",function(t,i,n){n||(n=v);var e=this,s=j(e,t),m=e.getLine(t.line);if(!(m==null||F(e,t,m))){var o=n.lineComment||s.lineComment;if(!o){(n.blockCommentStart||s.blockCommentStart)&&(n.fullLines=!0,e.blockComment(t,i,n));return}var l=Math.min(i.ch!=0||i.line==t.line?i.line+1:i.line,e.lastLine()+1),b=n.padding==null?" ":n.padding,c=n.commentBlankLines||t.line==i.line;e.operation(function(){if(n.indent){for(var d=null,a=t.line;a<l;++a){var u=e.getLine(a),h=u.slice(0,B(u));(d==null||d.length>h.length)&&(d=h)}for(var a=t.line;a<l;++a){var u=e.getLine(a),p=d.length;!c&&!g.test(u)||(u.slice(0,p)!=d&&(p=B(u)),e.replaceRange(d+o+b,r(a,0),r(a,p)))}}else for(var a=t.line;a<l;++a)(c||g.test(e.getLine(a)))&&e.replaceRange(o+b,r(a,0))})}}),f.defineExtension("blockComment",function(t,i,n){n||(n=v);var e=this,s=j(e,t),m=n.blockCommentStart||s.blockCommentStart,o=n.blockCommentEnd||s.blockCommentEnd;if(!m||!o){(n.lineComment||s.lineComment)&&n.fullLines!=!1&&e.lineComment(t,i,n);return}if(!/\bcomment\b/.test(e.getTokenTypeAt(r(t.line,0)))){var l=Math.min(i.line,e.lastLine());l!=t.line&&i.ch==0&&g.test(e.getLine(l))&&--l;var b=n.padding==null?" ":n.padding;t.line>l||e.operation(function(){if(n.fullLines!=!1){var c=g.test(e.getLine(l));e.replaceRange(b+o,r(l)),e.replaceRange(m+b,r(t.line,0));var d=n.blockCommentLead||s.blockCommentLead;if(d!=null)for(var a=t.line+1;a<=l;++a)(a!=l||c)&&e.replaceRange(d+b,r(a,0))}else{var u=V(e.getCursor("to"),i)==0,h=!e.somethingSelected();e.replaceRange(o,i),u&&e.setSelection(h?i:e.getCursor("from"),i),e.replaceRange(m,t)}})}}),f.defineExtension("uncomment",function(t,i,n){n||(n=v);var e=this,s=j(e,t),m=Math.min(i.ch!=0||i.line==t.line?i.line:i.line-1,e.lastLine()),o=Math.min(t.line,m),l=n.lineComment||s.lineComment,b=[],c=n.padding==null?" ":n.padding,d;e:{if(!l)break e;for(var a=o;a<=m;++a){var u=e.getLine(a),h=u.indexOf(l);if(h>-1&&!/comment/.test(e.getTokenTypeAt(r(a,h+1)))&&(h=-1),h==-1&&g.test(u)||h>-1&&g.test(u.slice(0,h)))break e;b.push(u)}if(e.operation(function(){for(var C=o;C<=m;++C){var O=b[C-o],y=O.indexOf(l),k=y+l.length;y<0||(O.slice(k,k+c.length)==c&&(k+=c.length),d=!0,e.replaceRange("",r(C,y),r(C,k)))}}),d)return!0}var p=n.blockCommentStart||s.blockCommentStart,L=n.blockCommentEnd||s.blockCommentEnd;if(!p||!L)return!1;var N=n.blockCommentLead||s.blockCommentLead,A=e.getLine(o),P=A.indexOf(p);if(P==-1)return!1;var I=m==o?A:e.getLine(m),S=I.indexOf(L,m==o?P+p.length:0),J=r(o,P+1),Q=r(m,S+1);if(S==-1||!/comment/.test(e.getTokenTypeAt(J))||!/comment/.test(e.getTokenTypeAt(Q))||e.getRange(J,Q,`
`).indexOf(L)>-1)return!1;var T=A.lastIndexOf(p,t.ch),E=T==-1?-1:A.slice(0,t.ch).indexOf(L,T+p.length);if(T!=-1&&E!=-1&&E+L.length!=t.ch)return!1;E=I.indexOf(L,i.ch);var U=I.slice(i.ch).lastIndexOf(p,E-i.ch);return T=E==-1||U==-1?-1:i.ch+U,E!=-1&&T!=-1&&T!=i.ch?!1:(e.operation(function(){e.replaceRange("",r(m,S-(c&&I.slice(S-c.length,S)==c?c.length:0)),r(m,S+L.length));var C=P+p.length;if(c&&A.slice(C,C+c.length)==c&&(C+=c.length),e.replaceRange("",r(o,P),r(o,C)),N)for(var O=o+1;O<=m;++O){var y=e.getLine(O),k=y.indexOf(N);if(!(k==-1||g.test(y.slice(0,k)))){var _=k+N.length;c&&y.slice(_,_+c.length)==c&&(_+=c.length),e.replaceRange("",r(O,k),r(O,_))}}}),!0)})})})();var K=$.exports;const G=(0,w.g)(K),H=z({__proto__:null,default:G},[K])}}]);})();

//# sourceMappingURL=8518.159cf68f.chunk.js.map