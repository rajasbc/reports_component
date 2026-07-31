const fs = require('fs');
const path = require('path');
const files = ['TrendBarChart/TrendBarChart.tsx', 'TrendLinechart/TrendLinechart.tsx'];
files.forEach(f => {
  const p = path.join('src/components', f);
  let c = fs.readFileSync(p, 'utf8');
  c = c.replace(/fill="var\(--chart-text, #666\)"/g, 'fill="#000000"');
  c = c.replace(/fill="#666"/g, 'fill="#000000"');
  fs.writeFileSync(p, c);
});
