const fs = require('fs');
const path = require('path');

const srcFile = path.join(__dirname, 'src', 'App.tsx');
const content = fs.readFileSync(srcFile, 'utf8');

const components = [
  'Navbar', 'Hero', 'FeatureCard', 'Features', 'Solutions', 'LCDScreens', 
  'LEDScreens', 'USP', 'Pricing', 'Testimonials', 'CaseStudies', 
  'ProjectDetail', 'Resources', 'HowItWorks', 'CTA', 'Contact', 'Footer', 'MainContent'
];

const imports = `import React, { useState, useEffect, useRef, Suspense } from 'react';
import { 
  Monitor, Layout, Clock, Cloud, Shield, Zap, ChevronRight, Menu, X, Play, 
  CheckCircle2, ArrowLeft, AlertCircle, Tv, Smartphone, Globe, Settings, 
  BarChart3, ChevronDown, FileText, Youtube, Award, Users, Rocket, HeartHandshake
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from './LazyVideo';\n\n`;

for (let i = 0; i < components.length; i++) {
  const current = components[i];
  let next = i + 1 < components.length ? components[i + 1] : 'export default function App';
  
  // Find start of current component
  const startIdx = content.indexOf(`const ${current} =`);
  let endIdx = content.indexOf(`const ${next} =`, startIdx);
  
  if (next === 'export default function App') {
     endIdx = content.indexOf(`export default function App`);
  }

  if (startIdx !== -1 && endIdx !== -1) {
    let compCode = content.substring(startIdx, endIdx);
    
    // Write to file
    const fileContent = imports + compCode + `\nexport default ${current};\n`;
    fs.writeFileSync(path.join(__dirname, 'src', 'components', 'sections', `${current}.tsx`), fileContent);
    console.log(`Extracted ${current}`);
  } else {
    console.log(`Could not find boundaries for ${current}`);
  }
}
