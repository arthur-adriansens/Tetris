const _0x1ae684=_0x86ce;(function(_0x104700,_0x25d837){const _0x12f1ed=_0x86ce,_0x76a4cd=_0x104700();while(!![]){try{const _0x4b23e0=-parseInt(_0x12f1ed(0x20b))/0x1*(-parseInt(_0x12f1ed(0x1f9))/0x2)+-parseInt(_0x12f1ed(0x1fc))/0x3+-parseInt(_0x12f1ed(0x21a))/0x4*(-parseInt(_0x12f1ed(0x247))/0x5)+-parseInt(_0x12f1ed(0x1fb))/0x6*(parseInt(_0x12f1ed(0x223))/0x7)+parseInt(_0x12f1ed(0x206))/0x8*(-parseInt(_0x12f1ed(0x1f6))/0x9)+-parseInt(_0x12f1ed(0x21c))/0xa*(parseInt(_0x12f1ed(0x22d))/0xb)+parseInt(_0x12f1ed(0x1e9))/0xc;if(_0x4b23e0===_0x25d837)break;else _0x76a4cd['push'](_0x76a4cd['shift']());}catch(_0x588e2c){_0x76a4cd['push'](_0x76a4cd['shift']());}}}(_0x2426,0x9c3f2));const canvas=document[_0x1ae684(0x204)](_0x1ae684(0x1ec)),ctx=canvas[_0x1ae684(0x200)]('2d');function _0x2426(){const _0x3138cf=['key','value','flat','then','keydown','drawBlock','35977296radnsl','scores','grid','canvas','beginPath','POST','isClipping','keys','Tomato','shapes','ArrowLeft','removeEventListener','checkRows','18bLjZOx','height','ArrowDown','32lDtDqM','#game','9852MXOntZ','2456223iKmtgE','getItem','DeepSkyBlue','localStorage','getContext','keyPress','stop','#username','querySelector','length','3696136PrSvwq','fillStyle','addEventListener','fillRect','extraY','56215ZYjUyw','game\x20over','querySelectorAll','classList','rotate','emptyBoard','map','clearRect','strokeStyle','</li>','shape','slice','ArrowRight','LightSalmon','rotated','40028eCcXDZ','resize','3790440PelGGW','piece','clientHeight','log','Error:','forEach','setItem','3871EnWzKv','width','push','includes','lineWidth','split','validMove','fill','error','splice','33fxZFOt','reverse','lineTo','x;1','x;-1','interval','move','json','drop','placeBlock','#personalScores','lowerAutomaticaly','disable','shapeTypes','empty','DarkSeaGreen','floor','y;1','random','toggle','gray','from','moveTo','Gold','application/json','score','265syzAfY','innerHTML','over','mostLeft','Response\x20data:','extraX'];_0x2426=function(){return _0x3138cf;};return _0x2426();}let board,game,piece,color,block_size;const cols=0xa,rows=0xf;let showOptions=![];function dimentions(_0x3442fd=![]){const _0x334156=_0x1ae684;canvas[_0x334156(0x1f7)]=(document['querySelector'](_0x334156(0x1fa))[_0x334156(0x21e)]-0x4)*0.95,block_size=canvas['height']/rows,canvas[_0x334156(0x224)]=block_size*cols;if(_0x3442fd)game['emptyBoard'](!![]);}function _0x86ce(_0x169cf3,_0x1cbed){const _0x2426f6=_0x2426();return _0x86ce=function(_0x86ce90,_0x5b2db8){_0x86ce90=_0x86ce90-0x1e7;let _0x97b3d7=_0x2426f6[_0x86ce90];return _0x97b3d7;},_0x86ce(_0x169cf3,_0x1cbed);}dimentions();const colors=['LightSkyBlue',_0x1ae684(0x1fe),_0x1ae684(0x218),_0x1ae684(0x244),_0x1ae684(0x23c),'Plum',_0x1ae684(0x1f1)];ctx[_0x1ae684(0x213)]=_0x1ae684(0x241),ctx[_0x1ae684(0x227)]=0x1;let startScreen=![];const scoresOL=document[_0x1ae684(0x204)](_0x1ae684(0x237));function loadScores(){const _0x11c0e8=_0x1ae684;let _0x265de2=window[_0x11c0e8(0x1ff)][_0x11c0e8(0x1fd)]('scores');if(!_0x265de2)return[];let _0x18542c=_0x265de2[_0x11c0e8(0x228)](',')['slice']()['sort']((_0x24e413,_0x37cf00)=>_0x37cf00-_0x24e413);_0x18542c['length']>=0xa&&_0x18542c['splice'](0xa);window[_0x11c0e8(0x1ff)][_0x11c0e8(0x222)]('scores',_0x18542c),scoresOL[_0x11c0e8(0x248)]='';for(let _0x2b8ca0 of _0x18542c){scoresOL[_0x11c0e8(0x248)]+='<li>'+_0x2b8ca0+_0x11c0e8(0x214);}return _0x18542c;}function newScore(_0x1f3d7e){const _0x1ff15f=_0x1ae684;if(!_0x1f3d7e)return;document[_0x1ff15f(0x20d)]('#score')[_0x1ff15f(0x221)](_0x20c6ad=>_0x20c6ad[_0x1ff15f(0x248)]=_0x1f3d7e);let _0x57ce00=loadScores();_0x57ce00[_0x1ff15f(0x225)](_0x1f3d7e),window['localStorage'][_0x1ff15f(0x222)](_0x1ff15f(0x1ea),_0x57ce00),loadScores();}window[_0x1ae684(0x208)](_0x1ae684(0x21b),()=>dimentions(!![])),window['onload']=()=>{loadScores(),game=new Game(),piece=new Piece();};class Game{constructor(){const _0x3154e8=_0x1ae684;this[_0x3154e8(0x246)]=0x0,this[_0x3154e8(0x202)]=![],board=this[_0x3154e8(0x1eb)]=this['emptyBoard'](![]);}['emptyBoard'](_0x14919a=!![]){const _0x1d40d1=_0x1ae684;ctx[_0x1d40d1(0x212)](0x0,0x0,canvas['width'],canvas['height']),ctx[_0x1d40d1(0x213)]=_0x1d40d1(0x241),ctx['lineWidth']=0x1,ctx[_0x1d40d1(0x1ed)](![]);for(let _0x29ece5=0x1;_0x29ece5<rows;_0x29ece5++){ctx[_0x1d40d1(0x243)](block_size*_0x29ece5,0x0),ctx[_0x1d40d1(0x22f)](block_size*_0x29ece5,canvas[_0x1d40d1(0x1f7)]),ctx[_0x1d40d1(0x243)](0x0,block_size*_0x29ece5),ctx[_0x1d40d1(0x22f)](canvas[_0x1d40d1(0x1f7)],block_size*_0x29ece5);}ctx['stroke']();if(!_0x14919a)return this[_0x1d40d1(0x23b)]=new Array(cols)[_0x1d40d1(0x22a)](0x0),Array[_0x1d40d1(0x242)]({'length':rows},()=>Array(cols)[_0x1d40d1(0x22a)](0x0));board[_0x1d40d1(0x221)]((_0xe33142,_0x2072ac)=>{const _0x16a4b7=_0x1d40d1;_0xe33142[_0x16a4b7(0x221)]((_0x5ec0a1,_0x509781)=>{const _0xc76ff5=_0x16a4b7;_0x5ec0a1!=0x0&&(ctx[_0xc76ff5(0x207)]=colors[_0x5ec0a1-0x3],this[_0xc76ff5(0x1e8)](_0x2072ac,_0x509781,_0x5ec0a1));});});}[_0x1ae684(0x1e8)](_0x1a6fc0,_0x22725b,_0x3ad33f){const _0x504974=_0x1ae684;_0x3ad33f!=0x0&&ctx[_0x504974(0x209)](_0x22725b*block_size+0x1,_0x1a6fc0*block_size+0x1,block_size-0x2,block_size-0x2);}[_0x1ae684(0x1ef)](_0x494c30=0x0,_0x2b4bba=0x0,_0x4d5adf,_0x32876b){const _0x19191b=_0x1ae684;_0x4d5adf=_0x4d5adf?_0x4d5adf:piece[_0x19191b(0x215)],_0x32876b=_0x32876b?_0x32876b:piece[_0x19191b(0x224)];for(let _0xdd3302 in _0x4d5adf){let _0x320e58=_0xdd3302%_0x32876b+Math['floor'](cols/0x2)-0x2+piece['extraX'],_0x1eed80=Math[_0x19191b(0x23d)](_0xdd3302/_0x32876b)+piece[_0x19191b(0x20a)];if(_0x4d5adf[_0xdd3302]!=0x0&&board[_0x1eed80][_0x320e58]==undefined)return!![];if(board[_0x1eed80][_0x320e58]==0x0||board[_0x1eed80][_0x320e58]>=0x3)continue;if(board[_0x1eed80+_0x494c30][_0x320e58+_0x2b4bba]>=0x3)return!![];}return![];}['validMove'](_0x2ea0b6){const _0x15ad19=_0x1ae684;if(board[rows-0x1][_0x15ad19(0x226)](0x1))return piece[_0x15ad19(0x239)](),piece=!this[_0x15ad19(0x202)]?new Piece():0x0,![];if(_0x2ea0b6==_0x15ad19(0x230)){let _0x331e35=board[_0x15ad19(0x211)](_0x2f08c0=>_0x2f08c0[cols-0x1]);if(_0x331e35[_0x15ad19(0x226)](0x1))return![];if(this[_0x15ad19(0x1ef)](0x0,0x1))return![];}if(_0x2ea0b6==_0x15ad19(0x231)){let _0x648b34=board[_0x15ad19(0x211)](_0x79011d=>_0x79011d[0x0]);if(_0x648b34[_0x15ad19(0x226)](0x1))return![];if(this[_0x15ad19(0x1ef)](0x0,-0x1))return![];}if(_0x2ea0b6!='y;1')return!![];for(let _0x115df6 in piece[_0x15ad19(0x215)]){let _0x4c3955=_0x115df6%piece[_0x15ad19(0x224)]+Math[_0x15ad19(0x23d)](cols/0x2)-0x2+piece[_0x15ad19(0x24c)],_0x231eb0=Math[_0x15ad19(0x23d)](_0x115df6/piece[_0x15ad19(0x224)])+piece[_0x15ad19(0x20a)];if(board[_0x231eb0][_0x4c3955]==0x0||board[_0x231eb0][_0x4c3955]>=0x3)continue;if(board[_0x231eb0+0x1][_0x4c3955]>=0x3)return piece[_0x15ad19(0x239)](),piece=!this['stop']?new Piece():0x0,![];}return!![];}[_0x1ae684(0x1f5)](){const _0x3d30de=_0x1ae684;let _0x505465=![];board[_0x3d30de(0x211)]((_0x470901,_0x2c797d)=>{const _0x297dbb=_0x3d30de;!_0x470901[_0x297dbb(0x226)](0x0)&&!_0x470901[_0x297dbb(0x226)](0x1)&&!_0x470901['includes'](0x2)&&(_0x505465=!![],this[_0x297dbb(0x246)]+=0x64,newScore(this[_0x297dbb(0x246)]),board[_0x297dbb(0x22c)](_0x2c797d,0x1),board[_0x297dbb(0x22c)](0x0,0x0,this[_0x297dbb(0x23b)]));});if(_0x505465)this['emptyBoard']();}['end'](){const _0x3186b3=_0x1ae684;this['stop']=!![],document[_0x3186b3(0x204)](_0x3186b3(0x1fa))[_0x3186b3(0x20e)][_0x3186b3(0x240)](_0x3186b3(0x249)),console[_0x3186b3(0x21f)](_0x3186b3(0x20c));const _0x33a587=document[_0x3186b3(0x204)](_0x3186b3(0x203))[_0x3186b3(0x24e)];if(this[_0x3186b3(0x246)]==0x0||!_0x33a587)return;const _0x2c7ae0='https://sjh-tetris.glitch.me/newScore',_0xdc43d6={'user':_0x33a587,'score':this[_0x3186b3(0x246)]};fetch(_0x2c7ae0,{'method':_0x3186b3(0x1ee),'headers':{'Content-Type':_0x3186b3(0x245)},'body':JSON['stringify'](_0xdc43d6)})[_0x3186b3(0x250)](_0x4d1f17=>_0x4d1f17[_0x3186b3(0x234)]())[_0x3186b3(0x250)](_0x59b3c0=>console[_0x3186b3(0x21f)](_0x3186b3(0x24b),_0x59b3c0))['catch'](_0x17d3e5=>console[_0x3186b3(0x22b)](_0x3186b3(0x220),_0x17d3e5));}}class Piece{constructor(){const _0x29bd77=_0x1ae684;this[_0x29bd77(0x1f2)]={'I':[0x0,0x1,0x0,0x0,0x2,0x0,0x0,0x1,0x0,0x0,0x1,0x0],'J':[0x0,0x1,0x0,0x0,0x2,0x0,0x1,0x1,0x0],'L':[0x0,0x1,0x0,0x0,0x2,0x0,0x0,0x1,0x1],'O':[0x0,0x0,0x0,0x0,0x2,0x1,0x0,0x1,0x1],'S':[0x0,0x0,0x0,0x0,0x2,0x1,0x1,0x1,0x0],'T':[0x0,0x0,0x0,0x1,0x2,0x1,0x0,0x1,0x0],'Z':[0x0,0x0,0x0,0x1,0x2,0x0,0x0,0x1,0x1]},this['shapeTypes']=Object[_0x29bd77(0x1f0)](this[_0x29bd77(0x1f2)]),this[_0x29bd77(0x224)]=0x3,this['extraY']=this['extraX']=this['mostRight']=0x0,this[_0x29bd77(0x24a)]=cols,this[_0x29bd77(0x236)](!![]),document[_0x29bd77(0x208)](_0x29bd77(0x1e7),this[_0x29bd77(0x201)]),this[_0x29bd77(0x238)]();}['disable'](_0x455310=![]){const _0x5640f7=_0x1ae684;clearInterval(this[_0x5640f7(0x232)]),document[_0x5640f7(0x1f4)](_0x5640f7(0x1e7),this['keyPress']),this[_0x5640f7(0x215)]=this['shape'][_0x5640f7(0x211)](_0x16c831=>{const _0xebb330=_0x5640f7;if(_0x16c831!=0x0)return 0x3+this[_0xebb330(0x21d)];return 0x0;});if(_0x455310){game['end']();return;}this[_0x5640f7(0x236)](),game[_0x5640f7(0x210)](!![]);}[_0x1ae684(0x236)](_0x107b52=![],_0x3774e7=![],_0x310058=this[_0x1ae684(0x215)]){const _0x294626=_0x1ae684;this['piece']=_0x107b52?Math[_0x294626(0x23d)](Math[_0x294626(0x23f)]()*this[_0x294626(0x23a)][_0x294626(0x205)]):this[_0x294626(0x21d)],this[_0x294626(0x215)]=_0x107b52?this[_0x294626(0x1f2)][this[_0x294626(0x23a)][this['piece']]]:_0x310058,color=ctx[_0x294626(0x207)]=_0x3774e7?'white':colors[this[_0x294626(0x21d)]];for(let _0x3b1a40 in this[_0x294626(0x215)]){let _0x5157a5=_0x3b1a40%this[_0x294626(0x224)]+Math[_0x294626(0x23d)](cols/0x2)-0x2+this['extraX'],_0x19db57=Math[_0x294626(0x23d)](_0x3b1a40/this['width'])+this[_0x294626(0x20a)];if(this[_0x294626(0x215)][_0x3b1a40]!=0x0){if(_0x107b52&&board[_0x19db57][_0x5157a5]>0x2){this[_0x294626(0x239)](!![]);return;}board[_0x19db57][_0x5157a5]=_0x3774e7?0x0:this[_0x294626(0x215)][_0x3b1a40],game['drawBlock'](_0x19db57,_0x5157a5,this[_0x294626(0x215)][_0x3b1a40]);}}game[_0x294626(0x1f5)]();}[_0x1ae684(0x20f)](){const _0x37bae4=_0x1ae684;if(this['piece']==0x3)return;let _0xe28b80=this['shape'];if(this[_0x37bae4(0x21d)]==0x0){this[_0x37bae4(0x219)]=this[_0x37bae4(0x219)]?!this['rotated']:!![];if(this[_0x37bae4(0x219)]){if(game[_0x37bae4(0x1ef)](0x0,0x0,[0x0,0x0,0x0,0x0,0x1,0x2,0x1,0x1,0x0,0x0,0x0,0x0],0x4))return;this[_0x37bae4(0x236)](![],!![]),this[_0x37bae4(0x215)]=[0x0,0x0,0x0,0x0,0x1,0x2,0x1,0x1,0x0,0x0,0x0,0x0],this[_0x37bae4(0x224)]=0x4;}else{if(game[_0x37bae4(0x1ef)](0x0,0x0,this[_0x37bae4(0x1f2)][this[_0x37bae4(0x23a)][this[_0x37bae4(0x21d)]]],0x3))return;this[_0x37bae4(0x236)](![],!![]),this[_0x37bae4(0x215)]=this['shapes'][this[_0x37bae4(0x23a)][this[_0x37bae4(0x21d)]]],this[_0x37bae4(0x224)]=0x3;}this[_0x37bae4(0x236)]();return;}let _0x19d1e8=Array[_0x37bae4(0x242)]({'length':Math['floor'](this[_0x37bae4(0x215)]['length']/0x3)},(_0x35ba33,_0x240912)=>this[_0x37bae4(0x215)][_0x37bae4(0x216)](_0x240912*0x3,(_0x240912+0x1)*0x3)),_0x30a669=_0x19d1e8[_0x37bae4(0x211)]((_0x2d0035,_0x10122e)=>_0x19d1e8['map'](_0x426bab=>_0x426bab[_0x10122e])),_0x268c7e=_0x30a669[_0x37bae4(0x211)](_0x179d01=>_0x179d01[_0x37bae4(0x22e)]())[_0x37bae4(0x24f)]();if(game[_0x37bae4(0x1ef)](0x0,0x0,_0x268c7e))return;this[_0x37bae4(0x236)](![],!![]),this['shape']=_0x268c7e,this[_0x37bae4(0x236)]();}[_0x1ae684(0x235)](){const _0x4d3b22=_0x1ae684;let _0x17b66d=this[_0x4d3b22(0x233)](_0x4d3b22(0x23e));while(_0x17b66d){_0x17b66d=this['move']('y;1');}}[_0x1ae684(0x233)](_0x10b4e3){const _0x46b473=_0x1ae684;let [_0x51d82a,_0x2e48a6]=_0x10b4e3['split'](';');if(!_0x51d82a||!_0x2e48a6)return![];if(!game[_0x46b473(0x229)](_0x10b4e3))return![];return this[_0x46b473(0x236)](![],!![]),_0x51d82a=='y'?this['extraY']+=Number(_0x2e48a6):this[_0x46b473(0x24c)]+=Number(_0x2e48a6),this[_0x46b473(0x236)](),!![];}[_0x1ae684(0x201)](_0x5aab27){const _0x52ac0d=_0x1ae684;if(game[_0x52ac0d(0x202)])return;let _0x296e6b=_0x5aab27[_0x52ac0d(0x24d)];_0x296e6b=='ArrowUp'?piece[_0x52ac0d(0x20f)]():0x0,_0x296e6b==_0x52ac0d(0x1f3)?piece[_0x52ac0d(0x233)](_0x52ac0d(0x231)):0x0,_0x296e6b==_0x52ac0d(0x217)?piece[_0x52ac0d(0x233)](_0x52ac0d(0x230)):0x0,_0x296e6b==_0x52ac0d(0x1f8)?piece[_0x52ac0d(0x233)](_0x52ac0d(0x23e)):0x0,_0x296e6b=='\x20'?piece[_0x52ac0d(0x235)]():0x0;}['lowerAutomaticaly'](){const _0x231121=_0x1ae684;this[_0x231121(0x232)]=setInterval(()=>{const _0x55b423=_0x231121;if(game[_0x55b423(0x202)]){clearInterval(this[_0x55b423(0x232)]);return;}this[_0x55b423(0x233)]('y;1');},0x3e8);}}