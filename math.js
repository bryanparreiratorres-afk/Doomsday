/* DOOMSDAY NEXUS — pure Gregorian calendar mathematics (1500–2100) */
(function (root) {
  'use strict';
  const DAYS = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
  const SHORT_DAYS = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const mod = (n, d) => ((n % d) + d) % d;
  function isLeapYear(y) { return Number.isInteger(y) && y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0); }
  function daysInMonth(m, y) { if (!Number.isInteger(m) || m < 1 || m > 12) return 0; return [31,isLeapYear(y)?29:28,31,30,31,30,31,31,30,31,30,31][m-1]; }
  function isValidDate(d, m, y) { return [d,m,y].every(Number.isInteger) && y >= 1500 && y <= 2100 && m >= 1 && m <= 12 && d >= 1 && d <= daysInMonth(m,y); }
  function centuryAnchor(y) { const c = Math.floor(y/100); return [2,0,5,3][mod(c,4)]; }
  function yearDoomsday(y) { const t = mod(y,100), a = Math.floor(t/12), b = t%12, c = Math.floor(b/4); return mod(centuryAnchor(y)+a+b+c,7); }
  function monthAnchor(m, y) { return [isLeapYear(y)?4:3,isLeapYear(y)?29:28,14,4,9,6,11,8,5,10,7,12][m-1]; }
  function weekday(d,m,y) {
    if (!isValidDate(d,m,y)) throw new RangeError('Data inválida ou fora do intervalo 1500–2100.');
    return mod(yearDoomsday(y)+(d-monthAnchor(m,y)),7);
  }
  function getReasoning(d,m,y) {
    if (!isValidDate(d,m,y)) throw new RangeError('Data inválida.');
    const century = Math.floor(y/100)*100, yy=y%100;
    const a=Math.floor(yy/12), b=yy%12, c=Math.floor(b/4);
    const base=centuryAnchor(y), doom=yearDoomsday(y), anchor=monthAnchor(m,y);
    const delta=d-anchor, offset=mod(delta,7), result=weekday(d,m,y);
    return {day:d,month:m,year:y,century,yy,base,a,b,c,doom,anchor,delta,offset,result,leap:isLeapYear(y)};
  }
  function fmtDate(d,m,y) { return String(d).padStart(2,'0')+'/'+String(m).padStart(2,'0')+'/'+y; }
  function nextDate(d,m,y) {
    if (d<daysInMonth(m,y)) return {d:d+1,m,y};
    if(m<12) return {d:1,m:m+1,y};
    return y===2100 ? {d:1,m:1,y:1500} : {d:1,m:1,y:y+1};
  }
  // Sakamoto weekday calculation, mathematically independent of Conway's method.
  function independentWeekday(d,m,y) {
    const offsets=[0,3,2,5,0,3,5,1,4,6,2,4];
    const yy=m<3?y-1:y;
    return mod(yy+Math.floor(yy/4)-Math.floor(yy/100)+Math.floor(yy/400)+offsets[m-1]+d,7);
  }
  const api={DAYS,SHORT_DAYS,MONTHS,mod,isLeapYear,daysInMonth,isValidDate,centuryAnchor,yearDoomsday,monthAnchor,weekday,getReasoning,fmtDate,nextDate,independentWeekday};
  if(typeof module !== 'undefined' && module.exports) module.exports=api;
  root.DoomsdayMath=api;
})(typeof window!=='undefined'?window:globalThis);
