import fs from 'fs';
import { join } from 'path';
import generateVars from '../index';


interface Vars {
  [key: string]: string;
}

let lessContent = '';
const defaultVars = generateVars();
Object.keys(defaultVars).forEach((key) => {
  const value = (defaultVars as Vars)[key];
  if (value) {
    lessContent += `${key}: ${value};\n`;
  } else {
    console.warn(`The key of ${key} is empty?`);
  }
})

fs.writeFileSync(join(process.cwd(), 'index.less'), lessContent);

console.log('🎉 Generate index.less successfully');
