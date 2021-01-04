interface Vars {
  [key: string]: string;
}

const isPlainObject = (obj: object) => ({}).toString.call(obj) === '[object Object]';

export default function generateVars(vars?: Vars) {
  let themes = {
    // colors
    '@primary-color': '#409EFF',
    '@info-color': '#909399',
    '@success-color': '#67C23A',
    '@processing-color': '#409EFF',
    '@error-color': '#F56C6C',
    '@highlight-color': '#F56C6C',
    '@warning-color': '#E6A23C',

    // border-radius
    '@border-radius-base': '4px',

    // width & height
    '@height-base': '28px',
  }

  if (vars && isPlainObject(vars)) {
    themes = {
      ...themes,
      ...vars,
    }
  }

  return themes;
}
