const fs = require('fs');
const content = fs.readFileSync('apps/frontend/.open-next/server-functions/default/apps/frontend/handler.mjs', 'utf8');
const strings = content.match(/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g);
if(strings){
  const sorted = strings.sort((a,b)=>b.length - a.length);
  console.log(sorted.slice(0, 5).map(s => s.length + ' chars: ' + s.substring(0, 50)));
}
