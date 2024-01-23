const metadata = require('solidx.js/assets/metadata.json');
const fs = require('fs');

for (const [tag, { cls, attribute }] of Object.entries(metadata.element)) {
  const md = `
# ${tag}

- tag: \`<${tag}></${tag}>\`
- class: \`${cls}\`

## Attributes

${Object.entries(attribute)
  .map(
    ([attr, { dType, initValue }]) => `
### ${attr}

- data type: \`${dType}\`
- initial value: \`${initValue === null ? '-' : initValue}\`

  `
  )
  .join('\n')}
`;

  fs.writeFileSync(`docs/element/${tag}.md`, md, 'utf-8');
}
