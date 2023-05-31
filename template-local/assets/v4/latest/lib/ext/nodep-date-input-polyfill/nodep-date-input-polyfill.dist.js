/*! SWE 4.2.1 2023053T1530 */
(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?b():'function'==typeof define&&define.amd?define(b):b()})(this,function(){'use strict';(function(a){if(a&&'undefined'!=typeof window){var b=document.createElement('style');return b.setAttribute('type','text/css'),b.innerHTML=a,document.head.appendChild(b),a}})('date-input-polyfill {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  border-radius: 0;\n  font-family: sans-serif;\n  font-size: 14px;\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n  cursor: default;\n  z-index: 1; }\n  date-input-polyfill[data-open="false"] {\n    display: none; }\n  date-input-polyfill[data-open="true"] {\n    display: block; }\n  date-input-polyfill select, date-input-polyfill table, date-input-polyfill th, date-input-polyfill td {\n    background: #fff;\n    color: #000;\n    text-shadow: none;\n    border: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    line-height: normal;\n    border-radius: 0;\n    font-family: sans-serif;\n    font-size: 14px;\n    box-shadow: none; }\n  date-input-polyfill select, date-input-polyfill button {\n    border: 0;\n    border-bottom: 1px solid #E0E0E0;\n    height: 24px;\n    vertical-align: top; }\n  date-input-polyfill select {\n    width: 50%; }\n    date-input-polyfill select:first-of-type {\n      border-right: 1px solid #E0E0E0;\n      width: 30%; }\n  date-input-polyfill button {\n    padding: 0;\n    width: 20%;\n    background: #E0E0E0; }\n  date-input-polyfill table {\n    border-collapse: collapse; }\n  date-input-polyfill th, date-input-polyfill td {\n    width: 32px;\n    padding: 4px;\n    text-align: center; }\n  date-input-polyfill td[data-day] {\n    cursor: pointer; }\n    date-input-polyfill td[data-day]:hover {\n      background: #E0E0E0; }\n  date-input-polyfill [data-selected] {\n    font-weight: bold;\n    background: #D8EAF6; }\n\ninput[data-has-picker]::-ms-clear {\n  display: none; }\n');var a=function(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')},b=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),c=function(){function c(){var b=this;if(a(this,c),c.instance)return c.instance;this.date=new Date,this.input=null,this.isOpen=!1,this.container=document.createElement('date-input-polyfill'),this.year=document.createElement('select'),c.createRangeSelect(this.year,this.date.getFullYear()-80,this.date.getFullYear()+20),this.year.className='yearSelect',this.year.addEventListener('change',function(){b.date.setYear(b.year.value),b.refreshDaysMatrix()}),this.container.appendChild(this.year),this.month=document.createElement('select'),this.month.className='monthSelect',this.month.addEventListener('change',function(){b.date.setMonth(b.month.value),b.refreshDaysMatrix()}),this.container.appendChild(this.month),this.today=document.createElement('button'),this.today.textContent='Today',this.today.addEventListener('click',function(){b.date=new Date,b.setInput()}),this.container.appendChild(this.today);var d=document.createElement('table');this.daysHead=document.createElement('thead'),this.days=document.createElement('tbody'),this.days.addEventListener('click',function(a){var c=a.target;if(!c.hasAttribute('data-day'))return!1;var d=b.days.querySelector('[data-selected]');d&&d.removeAttribute('data-selected'),c.setAttribute('data-selected',''),b.date.setDate(parseInt(c.textContent)),b.setInput()}),d.appendChild(this.daysHead),d.appendChild(this.days),this.container.appendChild(d),this.hide(),document.body.appendChild(this.container),document.addEventListener('click',function(a){for(var c=a.target,d=c===b.container;!d&&(c=c.parentNode);)d=c===b.container;'date'===a.target.getAttribute('type')||d||b.hide()})}return b(c,[{key:'hide',value:function(){this.container.setAttribute('data-open',this.isOpen=!1)}},{key:'show',value:function(){this.container.setAttribute('data-open',this.isOpen=!0)}},{key:'goto',value:function(a){var b=a.getBoundingClientRect();this.container.style.top=b.top+b.height+(document.documentElement.scrollTop||document.body.scrollTop)+'px',this.container.style.left=b.left+(document.documentElement.scrollLeft||document.body.scrollLeft)+'px',this.show()}},{key:'attachTo',value:function(a){return a===this.input&&this.isOpen?!1:void(this.input=a,this.sync(),this.goto(this.input.element))}},{key:'sync',value:function(){this.date=this.input.element.valueAsDate?c.absoluteDate(this.input.element.valueAsDate):new Date,this.year.value=this.date.getFullYear(),this.month.value=this.date.getMonth(),this.refreshDaysMatrix()}},{key:'setInput',value:function(){var a=this;this.input.element.value=this.date.getFullYear()+'-'+('0'+(this.date.getMonth()+1)).slice(-2)+'-'+('0'+this.date.getDate()).slice(-2),this.input.element.focus(),setTimeout(function(){a.hide()},100),this.pingInput()}},{key:'refreshLocale',value:function(){if(this.locale===this.input.locale)return!1;this.locale=this.input.locale;for(var a=['<tr>'],b=0,d=this.input.localeText.days.length;b<d;++b)a.push('<th scope="col">'+this.input.localeText.days[b]+'</th>');this.daysHead.innerHTML=a.join(''),c.createRangeSelect(this.month,0,11,this.input.localeText.months,this.date.getMonth()),this.today.textContent=this.input.localeText.today}},{key:'refreshDaysMatrix',value:function(){this.refreshLocale();for(var a=this.date.getFullYear(),b=this.date.getMonth(),d=new Date(a,b,1).getDay(),e=new Date(this.date.getFullYear(),b+1,0).getDate(),f=c.absoluteDate(this.input.element.valueAsDate)||!1,g=f&&a===f.getFullYear()&&b===f.getMonth(),h=[],j=0;j<e+d;++j){if(0==j%7&&h.push('\n          '+(0===j?'':'</tr>')+'\n          <tr>\n        '),j+1<=d){h.push('<td></td>');continue}var i=j+1-d,k=g&&f.getDate()===i;h.push('<td data-day '+(k?'data-selected':'')+'>\n          '+i+'\n        </td>')}this.days.innerHTML=h.join('')}},{key:'pingInput',value:function(){var a,b;try{a=new Event('input'),b=new Event('change')}catch(c){a=document.createEvent('KeyboardEvent'),a.initEvent('input',!0,!1),b=document.createEvent('KeyboardEvent'),b.initEvent('change',!0,!1)}this.input.element.dispatchEvent(a),this.input.element.dispatchEvent(b)}}],[{key:'createRangeSelect',value:function(a,b,c,d,e){a.innerHTML='';for(var f,g=b;g<=c;++g){f=document.createElement('option'),a.appendChild(f);var h=d?d[g-b]:g;f.text=h,f.value=g,g===e&&(f.selected='selected')}return a}},{key:'absoluteDate',value:function(a){return a&&new Date(a.getTime()+1e3*(60*a.getTimezoneOffset()))}}]),c}();c.instance=null;var d={"en_en-US":{days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],today:'Today',format:'M/D/Y'},"en-GB":{days:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],months:['January','February','March','April','May','June','July','August','September','October','November','December'],today:'Today',format:'D/M/Y'},"zh_zh-CN":{days:['\u661F\u671F\u5929','\u661F\u671F\u4E00','\u661F\u671F\u4E8C','\u661F\u671F\u4E09','\u661F\u671F\u56DB','\u661F\u671F\u4E94','\u661F\u671F\u516D'],months:['\u4E00\u6708','\u4E8C\u6708','\u4E09\u6708','\u56DB\u6708','\u4E94\u6708','\u516D\u6708','\u4E03\u6708','\u516B\u6708','\u4E5D\u6708','\u5341\u6708','\u5341\u4E00\u6708','\u5341\u4E8C\u6708'],today:'\u4ECA\u5929',format:'Y/M/D'},"zh-Hans_zh-Hans-CN":{days:['\u5468\u65E5','\u5468\u4E00','\u5468\u4E8C','\u5468\u4E09','\u5468\u56DB','\u5468\u4E94','\u5468\u516D'],months:['\u4E00\u6708','\u4E8C\u6708','\u4E09\u6708','\u56DB\u6708','\u4E94\u6708','\u516D\u6708','\u4E03\u6708','\u516B\u6708','\u4E5D\u6708','\u5341\u6708','\u5341\u4E00\u6708','\u5341\u4E8C\u6708'],today:'\u4ECA\u5929',format:'Y/M/D'},"zh-Hant_zh-Hant-TW":{days:['\u9031\u65E5','\u9031\u4E00','\u9031\u4E8C','\u9031\u4E09','\u9031\u56DB','\u9031\u4E94','\u9031\u516D'],months:['\u4E00\u6708','\u4E8C\u6708','\u4E09\u6708','\u56DB\u6708','\u4E94\u6708','\u516D\u6708','\u4E03\u6708','\u516B\u6708','\u4E5D\u6708','\u5341\u6708','\u5341\u4E00\u6708','\u5341\u4E8C\u6708'],today:'\u4ECA\u5929',format:'Y/M/D'},"de_de-DE":{days:['So','Mo','Di','Mi','Do','Fr','Sa'],months:['Januar','Februar','M\xE4rz','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],today:'Heute',format:'D.M.Y'},"da_da-DA":{days:['S\xF8n','Man','Tirs','Ons','Tors','Fre','L\xF8r'],months:['Januar','Februar','Marts','April','Maj','Juni','Juli','August','September','Oktober','November','December'],today:'I dag',format:'D/M/Y'},es:{days:['Dom','Lun','Mar','Mi\xE9','Jue','Vie','S\xE1b'],months:['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'],today:'Hoy',format:'D/M/Y'},hi:{days:['\u0930\u0935\u093F','\u0938\u094B\u092E','\u092E\u0902\u0917\u0932','\u092C\u0941\u0927','\u0917\u0941\u0930\u0941','\u0936\u0941\u0915\u094D\u0930','\u0936\u0928\u093F'],months:['\u091C\u0928\u0935\u0930\u0940','\u092B\u0930\u0935\u0930\u0940','\u092E\u093E\u0930\u094D\u091A','\u0905\u092A\u094D\u0930\u0947\u0932','\u092E\u0948','\u091C\u0942\u0928','\u091C\u0942\u0932\u093E\u0908','\u0905\u0917\u0938\u094D\u0924','\u0938\u093F\u0924\u092E\u094D\u092C\u0930','\u0906\u0915\u094D\u091F\u094B\u092C\u0930','\u0928\u0935\u092E\u094D\u092C\u0930','\u0926\u093F\u0938\u092E\u094D\u092C\u0930'],today:'\u0906\u091C',format:'D/M/Y'},pt:{days:['Dom','Seg','Ter','Qua','Qui','Sex','S\xE1b'],months:['Janeiro','Fevereiro','Mar\xE7o','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],today:'Hoje',format:'D/M/Y'},ja:{days:['\u65E5','\u6708','\u706B','\u6C34','\u6728','\u91D1','\u571F'],months:['1\u6708','2\u6708','3\u6708','4\u6708','5\u6708','6\u6708','7\u6708','8\u6708','9\u6708','10\u6708','11\u6708','12\u6708'],today:'\u4ECA\u65E5',format:'Y/M/D'},"nl_nl-NL_nl-BE":{days:['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'],months:['Januari','Februari','Maart','April','Mei','Juni','Juli','Augustus','September','Oktober','November','December'],today:'Vandaag',format:'D/M/Y'},"tr_tr-TR":{days:['Pzr','Pzt','Sal','\xC7r\u015F','Pr\u015F','Cum','Cmt'],months:['Ocak','\u015Eubat','Mart','Nisan','May\u0131s','Haziran','Temmuz','A\u011Fustos','Eyl\xFCl','Ekim','Kas\u0131m','Aral\u0131k'],today:'Bug\xFCn',format:'D/M/Y'},"fr_fr-FR":{days:['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'],months:['Janvier','F\xE9vrier','Mars','Avril','Mai','Juin','Juillet','Ao\xFBt','Septembre','Octobre','Novembre','D\xE9cembre'],today:'Auj.',format:'D/M/Y'},"uk_uk-UA":{days:['\u041D\u0434','\u041F\u043D','\u0412\u0442','\u0421\u0440','\u0427\u0442','\u041F\u0442','\u0421\u0431'],months:['\u0421\u0456\u0447\u0435\u043D\u044C','\u041B\u044E\u0442\u0438\u0439','\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C','\u041A\u0432\u0456\u0442\u0435\u043D\u044C','\u0422\u0440\u0430\u0432\u0435\u043D\u044C','\u0427\u0435\u0440\u0432\u0435\u043D\u044C','\u041B\u0438\u043F\u0435\u043D\u044C','\u0421\u0435\u0440\u043F\u0435\u043D\u044C','\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C','\u0416\u043E\u0432\u0442\u0435\u043D\u044C','\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434','\u0413\u0440\u0443\u0434\u0435\u043D\u044C'],today:'\u0421\u044C\u043E\u0433\u043E\u0434\u043D\u0456',format:'D.M.Y'},it:{days:['Dom','Lun','Mar','Mer','Gio','Ven','Sab'],months:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','ottobre','Novembre','Dicembre'],today:'Oggi',format:'D/M/Y'},pl:{days:['Nie','Pon','Wto','\u015Aro','Czw','Pt','Sob'],months:['Stycze\u0144','Luty','Marzec','Kwiecie\u0144','Maj','Czerwiec','Lipiec','Sierpie\u0144','Wrzesie\u0144','Pa\u017Adziernik','Listopad','Grudzie\u0144'],today:'Dzisiaj',format:'D.M.Y'},cs:{days:['Po','\xDAt','St','\u010Ct','P\xE1','So','Ne'],months:['Leden','\xDAnor','B\u0159ezen','Duben','Kv\u011Bten','\u010Cerven','\u010Cervenec','Srpen','Z\xE1\u0159\xED','\u0158\xEDjen','Listopad','Prosinec'],today:'Dnes',format:'D.M.Y'},ru:{days:['\u0412\u0441','\u041F\u043D','\u0412\u0442','\u0421\u0440','\u0427\u0442','\u041F\u0442','\u0421\u0431'],months:['\u042F\u043D\u0432\u0430\u0440\u044C','\u0424\u0435\u0432\u0440\u0430\u043B\u044C','\u041C\u0430\u0440\u0442','\u0410\u043F\u0440\u0435\u043B\u044C','\u041C\u0430\u0439','\u0418\u044E\u043D\u044C','\u0418\u044E\u043B\u044C','\u0410\u0432\u0433\u0443\u0441\u0442','\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C','\u041E\u043A\u0442\u044F\u0431\u0440\u044C','\u041D\u043E\u044F\u0431\u0440\u044C','\u0414\u0435\u043A\u0430\u0431\u0440\u044C'],today:'\u0421\u0435\u0433\u043E\u0434\u043D\u044F',format:'D.M.Y'}},e=function(){function e(b){var d=this;a(this,e),this.element=b,this.element.setAttribute('data-has-picker','');for(var f=this.element,g='';f.parentNode&&(g=f.getAttribute('lang'),!g);)f=f.parentNode;this.locale=g||'en',this.localeText=this.getLocaleText(),Object.defineProperties(this.element,{value:{get:function(){return d.element.polyfillValue},set:function(a){if(!/^\d{4}-\d{2}-\d{2}$/.test(a))return d.element.polyfillValue='',d.element.setAttribute('value',''),!1;d.element.polyfillValue=a;var b=a.split('-');d.element.setAttribute('value',d.localeText.format.replace('Y',b[0]).replace('M',b[1]).replace('D',b[2]))}},valueAsDate:{get:function(){return d.element.polyfillValue?new Date(d.element.polyfillValue):null},set:function(a){d.element.value=a.toISOString().slice(0,10)}},valueAsNumber:{get:function(){return d.element.value?d.element.valueAsDate.getTime():NaN},set:function(a){d.element.valueAsDate=new Date(a)}}}),this.element.value=this.element.getAttribute('value');var h=function(){c.instance.attachTo(d)};this.element.addEventListener('focus',h),this.element.addEventListener('mousedown',h),this.element.addEventListener('mouseup',h),this.element.addEventListener('keydown',function(a){var b=new Date;switch(a.keyCode){case 27:c.instance.hide();break;case 38:d.element.valueAsDate&&(b.setDate(d.element.valueAsDate.getDate()+1),d.element.valueAsDate=b,c.instance.pingInput());break;case 40:d.element.valueAsDate&&(b.setDate(d.element.valueAsDate.getDate()-1),d.element.valueAsDate=b,c.instance.pingInput());break;default:}c.instance.sync()})}return b(e,[{key:'getLocaleText',value:function(){var a=this.locale.toLowerCase();for(var b in d){var c=b.split('_').map(function(a){return a.toLowerCase()});if(!!~c.indexOf(a))return d[b]}for(var e in d){var f=e.split('_').map(function(a){return a.toLowerCase()});if(!!~f.indexOf(a.substr(0,2)))return d[e]}return this.locale='en',this.getLocaleText()}}],[{key:'supportsDateInput',value:function(){var a=document.createElement('input');a.setAttribute('type','date');var b='not-a-date';return a.setAttribute('value',b),document.currentScript&&!document.currentScript.hasAttribute('data-nodep-date-input-polyfill-debug')&&a.value!==b}},{key:'addPickerToDateInputs',value:function(){var a=document.querySelectorAll('input[type="date"]:not([data-has-picker]):not([readonly])'),b=a.length;if(!b)return!1;for(var c=0;c<b;++c)new e(a[c])}}]),e}();if(!e.supportsDateInput()){var f=function(){c.instance=new c,e.addPickerToDateInputs(),document.querySelector('body').addEventListener('mousedown',function(){e.addPickerToDateInputs()})};if('complete'===document.readyState)f();else{var g=!1;document.addEventListener('DOMContentLoaded',function(){g=!0,f()}),window.addEventListener('load',function(){g||f()})}}});
