(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34ce0334"],{"5c20":function(e,t,a){"use strict";var s=a("efaf"),n=a.n(s);n.a},a21f:function(e,t,a){var s=a("584a"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},efaf:function(e,t,a){},f499:function(e,t,a){e.exports=a("a21f")},faa3:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",{staticClass:"page-title"},[e._v(e._s(e.$t("__exchange")))]),a("p",{staticClass:"choice-rates-title"},[e._v("選擇欲交換貨幣")]),a("div",{staticClass:"choice-rates"},e._l(e.ratesItem,function(t,s,n){return a("span",{key:s,staticClass:"badge badge-secondary",class:[e.IN_rates===n?"badge-primary":""],on:{click:function(a){e.exchangeIn(t,s,n)}}},[a("span",{domProps:{innerHTML:e._s(e.$t("__All_currency['"+s+"'].currency"))}})])}),0),a("p",{staticClass:"choice-rates-title"},[e._v("選擇欲兌換貨幣")]),a("div",{staticClass:"choice-rates"},e._l(e.ratesItem,function(t,s,n){return a("span",{key:n,staticClass:"badge badge-secondary",class:[e.TO_rates===n?"badge-primary":""],on:{click:function(a){e.exchangeTo(t,s,n)}}},[a("span",{domProps:{innerHTML:e._s(e.$t("__All_currency['"+s+"'].currency"))}})])}),0),a("div",{staticClass:"see-more choice-rates-seemore"},[a("button",{staticClass:"btn btn-primary card-btn",on:{click:function(t){return t.preventDefault(),e.Convert_rates(t)}}},[e._v("兌換匯率")])])])},n=[],r=a("f499"),c=a.n(r),i=a("4063"),h=new i("myTotalySecretKey"),o={name:"Exchange",props:["rates"],data:function(){return{IN_rates:null,TO_rates:null,Exchange_rates:[],aaaa:1}},computed:{ratesItem:function(){return this.rates}},methods:{exchangeIn:function(e,t,a){var s=e.Exrate,n=e.UTC;this.IN_rates=a,this.Exchange_rates[0]={Rate:t,Name:this.keysFormat(t),Exrate:s,UTC:n}},exchangeTo:function(e,t,a){var s=e.Exrate,n=e.UTC;this.TO_rates=a,this.Exchange_rates[1]={Rate:t,Name:this.keysFormat(t),Exrate:s,UTC:n}},Convert_rates:function(){if(this.Exchange_rates[0]&&this.Exchange_rates[1]){gtag("event","select_content",{content_type:"two-rates",promotions:this.Exchange_rates[0].Name+" TO "+this.Exchange_rates[1].Name,event_category:this.Exchange_rates[0].Name+" TO "+this.Exchange_rates[1].Name,items:[{id:this.Exchange_rates[0].Name,name:this.Exchange_rates[0].Name,Exrate:this.Exchange_rates[0].Exrate,"UPDATE-Time":this.Exchange_rates[0].UTC},{id:this.Exchange_rates[1].Name,name:this.Exchange_rates[1].Name,Exrate:this.Exchange_rates[1].Exrate,"UPDATE-Time":this.Exchange_rates[1].UTC}]});var e={IN_Rate:this.Exchange_rates[0].Rate,IN_Exrate:this.Exchange_rates[0].Exrate,OUT_Rate:this.Exchange_rates[1].Rate,OUT_Exrate:this.Exchange_rates[1].Exrate,UTC:this.Exchange_rates[0].UTC},t=c()(e),a=h.encrypt(t);console.log(a),this.$router.push({name:"Convert",query:{encryptedString:a},params:{item:this.Exchange_rates[0].Name+"TO"+this.Exchange_rates[1].Name,language:"tw"}})}else{var s=this.$route.params.language;"tw"==s?alert(this.$i18n.messages.tw.__exchange_alert_notice):alert(this.$i18n.messages.en.__exchange_alert_notice)}},keysFormat:function(e){return e.length<=6&&(e=e.slice(3,6)),e}}},_=o,g=(a("5c20"),a("2877")),l=Object(g["a"])(_,s,n,!1,null,null,null);l.options.__file="exchange.vue";t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-34ce0334.fb0bdd88.js.map