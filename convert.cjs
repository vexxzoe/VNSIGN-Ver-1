const fs = require('fs');
let html = fs.readFileSync('DEMO.html', 'utf8');
html = html.replace(/class=/g, 'className=');
html = html.replace(/onclick=/g, 'onClick=');
html = html.replace(/<!--(.*?)-->/g, '{/* $1 */}');
html = html.replace(/<br>/g, '<br/>');
html = html.replace(/<img([^>]*[^/])>/g, '<img$1/>');
html = html.replace(/style="([^"]+)"/g, (match, styleStr) => {
  const styleObj = {};
  styleStr.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const parts = rule.split(':');
    if (parts.length < 2) return;
    const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase()).replace(/^-webkit-/, 'Webkit');
    const val = parts.slice(1).join(':').trim();
    styleObj[key] = val;
  });
  return 'style={' + JSON.stringify(styleObj) + '}';
});

const component = `import React from 'react';

const FeaturesPage = () => {
  const openCRMModal = () => console.log('openCRMModal');
  const openDemoLive = () => console.log('openDemoLive');

  return (
    <div className="page-cms pt-24 pb-24">
${html}
    </div>
  );
};

export default FeaturesPage;`;

fs.writeFileSync('src/pages/FeaturesPage.tsx', component);
console.log("Conversion complete");
