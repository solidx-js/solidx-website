const metadata = require('solidx.js/assets/metadata.json');
const fs = require('fs');

for (const [tag, { cls, attribute }] of Object.entries(metadata.element)) {
  const md = `
# ${tag}

- tag: \`<${tag}></${tag}>\`
- class: \`${cls}\`

## 属性

${Object.entries(attribute)
  .map(
    ([attr, { dType, initValue, extra = {} }]) => `
### ${attr}

${extra.title ? extra.title : ''}

- 数据类型: \`${dType}\`
- 初始值: \`${initValue === null ? '-' : initValue}\`
- 最小值: \`${typeof extra.min !== 'undefined' ? extra.min : '-'}\`
- 最大值: \`${typeof extra.max !== 'undefined' ? extra.max : '-'}\`
- 枚举: \`${extra.enums ? extra.enums.join(', ') : '-'}\`

${extra.doc ? extra.doc : ''}
  `
  )
  .join('\n')}
`;

  fs.writeFileSync(`docs/element/${tag}.md`, md, 'utf-8');
}
