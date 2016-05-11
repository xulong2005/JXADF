Flotr.addType("gantt",{options:{show:!1,lineWidth:2,barWidth:1,fill:!0,fillColor:null,fillOpacity:.4,centered:!0},draw:function(t){var i=this.ctx,a=t.gantt.barWidth,e=Math.min(t.gantt.lineWidth,a);if(i.save(),i.translate(this.plotOffset.left,this.plotOffset.top),i.lineJoin="miter",i.lineWidth=e,i.strokeStyle=t.color,i.save(),this.gantt.plotShadows(t,a,0,t.gantt.fill),i.restore(),t.gantt.fill){var n=t.gantt.fillColor||t.color;i.fillStyle=this.processColor(n,{opacity:t.gantt.fillOpacity})}this.gantt.plot(t,a,0,t.gantt.fill),i.restore()},plot:function(t,i,a,e){var n=t.data;if(!(n.length<1)){var l,o=t.xaxis,s=t.yaxis,h=this.ctx;for(l=0;l<n.length;l++){var r=n[l][0],d=n[l][1],m=n[l][2],p=!0,f=!0,x=!0;if(null!==d&&null!==m){var g=d,c=d+m,v=r-(t.gantt.centered?i/2:0),u=r+i-(t.gantt.centered?i/2:0);c<o.min||g>o.max||u<s.min||v>s.max||(g<o.min&&(g=o.min,p=!1),c>o.max&&(c=o.max,o.lastSerie!=t&&(f=!1)),v<s.min&&(v=s.min),u>s.max&&(u=s.max,s.lastSerie!=t&&(f=!1)),e&&(h.beginPath(),h.moveTo(o.d2p(g),s.d2p(v)+a),h.lineTo(o.d2p(g),s.d2p(u)+a),h.lineTo(o.d2p(c),s.d2p(u)+a),h.lineTo(o.d2p(c),s.d2p(v)+a),h.fill(),h.closePath()),t.gantt.lineWidth&&(p||x||f)&&(h.beginPath(),h.moveTo(o.d2p(g),s.d2p(v)+a),h[p?"lineTo":"moveTo"](o.d2p(g),s.d2p(u)+a),h[f?"lineTo":"moveTo"](o.d2p(c),s.d2p(u)+a),h[x?"lineTo":"moveTo"](o.d2p(c),s.d2p(v)+a),h.stroke(),h.closePath()))}}}},plotShadows:function(t,i){var a=t.data;if(!(a.length<1)){var e,n,l,o,s=t.xaxis,h=t.yaxis,r=this.ctx,d=this.options.shadowSize;for(e=0;e<a.length;e++)if(n=a[e][0],l=a[e][1],o=a[e][2],null!==l&&null!==o){var m=l,p=l+o,f=n-(t.gantt.centered?i/2:0),x=n+i-(t.gantt.centered?i/2:0);if(!(p<s.min||m>s.max||x<h.min||f>h.max)){m<s.min&&(m=s.min),p>s.max&&(p=s.max),f<h.min&&(f=h.min),x>h.max&&(x=h.max);var g=s.d2p(p)-s.d2p(m)-(s.d2p(p)+d<=this.plotWidth?0:d),c=h.d2p(f)-h.d2p(x)-(h.d2p(f)+d<=this.plotHeight?0:d);r.fillStyle="rgba(0,0,0,0.05)",r.fillRect(Math.min(s.d2p(m)+d,this.plotWidth),Math.min(h.d2p(x)+d,this.plotHeight),g,c)}}}},extendXRange:function(t){if(null===t.options.max){var i,a,e,n,l=t.min,o=t.max,s={},h=null;for(i=0;i<this.series.length;++i)if(e=this.series[i],n=e.gantt,n.show&&e.xaxis==t){for(a=0;a<e.data.length;a++)n.show&&(y=e.data[a][0]+"",s[y]=Math.max(s[y]||0,e.data[a][1]+e.data[a][2]),h=e);for(a in s)o=Math.max(s[a],o)}t.lastSerie=h,t.max=o,t.min=l}},extendYRange:function(t){if(null===t.options.max){var i,a,e,n,l=Number.MIN_VALUE,o=Number.MAX_VALUE,s=null;for(i=0;i<this.series.length;++i)if(e=this.series[i],n=e.gantt,n.show&&!e.hide&&e.yaxis==t){var h=Number.MIN_VALUE,r=Number.MAX_VALUE;for(a=0;a<e.data.length;a++)h=Math.max(h,e.data[a][0]),r=Math.min(r,e.data[a][0]);n.centered?(l=Math.max(h+.5,l),o=Math.min(r-.5,o)):(l=Math.max(h+1,l),o=Math.min(r,o)),n.barWidth+h>l&&(l=t.max+n.barWidth)}t.lastSerie=s,t.max=l,t.min=o,t.tickSize=Flotr.getTickSize(t.options.noTicks,o,l,t.options.tickDecimals)}}});