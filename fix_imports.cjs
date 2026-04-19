const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(f => {
  const p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  
  // Fix lib/utils
  c = c.replace(/from '\.\.\/lib\/utils'/g, "from '../../lib/utils'");
  
  // Fix contexts/LanguageContext
  c = c.replace(/from '\.\.\/contexts\/LanguageContext'/g, "from '../../contexts/LanguageContext'");
  c = c.replace(/from '"\.\.\/\.\.\/contexts\/LanguageContext"'/g, 'from "../../contexts/LanguageContext"');
  
  // Fix Logo
  c = c.replace(/from '\.\/Logo'/g, "from '../Logo'");
  
  // Fix LazyVideo
  c = c.replace(/from '\.\/LazyVideo'/g, "from '../LazyVideo'");
  
  fs.writeFileSync(p, c);
  console.log('Updated ' + f);
});
