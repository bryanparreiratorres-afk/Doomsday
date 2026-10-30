const assert = require('node:assert/strict');
const D = require('./math.js');
let checked=0;
for (let y=1500;y<=2100;y++) for (let m=1;m<=12;m++) for (let d=1;d<=D.daysInMonth(m,y);d++) {
  assert.equal(D.weekday(d,m,y),D.independentWeekday(d,m,y),`Wrong: ${D.fmtDate(d,m,y)}`);
  checked++;
}
for(const [y,d] of [[1500,3],[1600,2],[1700,0],[1800,5],[1900,3],[2000,2],[2100,0]]) assert.equal(D.centuryAnchor(y),d);
for(const [d,m,y,w] of [[30,10,2026,5],[1,1,2000,6],[29,2,2000,2],[1,1,1500,1],[31,12,2100,5]]) assert.equal(D.weekday(d,m,y),w);
for (const y of [1600,2000]) assert.equal(D.isLeapYear(y),true);
for (const y of [1700,1800,1900,2100]) assert.equal(D.isLeapYear(y),false);
for (const [d,m,y] of [[31,2,2026],[29,2,2100],[0,1,2020],[1,13,2020],[1,1,1499],[1,1,2101]]) assert.equal(D.isValidDate(d,m,y),false);
console.log(`✓ ${checked.toLocaleString('pt-BR')} dates verified against independent Gregorian algorithm.`);
console.log('✓ Century anchors, leap years, date limits and known dates verified.');
