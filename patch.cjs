const fs = require('fs');
const path = require('path');

const cardPath = path.join(__dirname, 'src', 'components', 'sections', 'FeatureCard.tsx');
let card = fs.readFileSync(cardPath, 'utf8');
card = card.replace(
  /<video[\s\S]*?<source src=\{video\} type="video\/mp4" \/>\s*<\/video>/,
  '<LazyVideo src={video} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />'
);
fs.writeFileSync(cardPath, card);

const featPath = path.join(__dirname, 'src', 'components', 'sections', 'Features.tsx');
let feat = fs.readFileSync(featPath, 'utf8');
feat = feat.replace(
  /<video[\s\S]*?<source src="\/assets\/case-studies\/AEON-BETA\/VIDEO\/7517333053904\.mp4" type="video\/mp4" \/>\s*<\/video>/,
  '<LazyVideo src="/assets/case-studies/AEON-BETA/VIDEO/7517333053904.mp4" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[5s]" />'
);
feat = feat.replace(/import \{ LazyVideo \} from '\.\/LazyVideo';/, "import { LazyVideo } from '../LazyVideo';\nimport FeatureCard from './FeatureCard';");
fs.writeFileSync(featPath, feat);
