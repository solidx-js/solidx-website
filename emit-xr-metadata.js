const metadata = require('solidx.js/assets/metadata.json');
const fs = require('fs');

function renderAttribute(level, attr, data) {
  const { dType, initValue, extra = {} } = data;
  const _dType = dType.toLowerCase();
  const _initValue = typeof extra.initValue === 'undefined' ? '-' : initValue;
  const _min = typeof extra.min !== 'undefined' ? extra.min : '-';
  const _max = typeof extra.max !== 'undefined' ? extra.max : '-';
  const _enums = extra.enums ? extra.enums.join(', ') : '-';

  let _uriPreset = '';

  if (extra.uriPreset) {
    _uriPreset = `
      ${Object.entries(extra.uriPreset)
        .map(([_p, _uri]) => {
          return `
${'#'.repeat(level + 1)} ${_uri.protocol}://${_uri.host}?

${Object.entries(_uri.query)
  .map(([_qn, _d]) => renderAttribute(level + 2, _qn, _d))
  .join('\n')}
        `;
        })
        .join('\n')}
    `;
  }

  return `
${'#'.repeat(level)} ${attr}

${extra.title ? extra.title : ''}

${extra.doc ? extra.doc : ''}

| 数据类型 | 初始值 | 最小值 | 最大值 | 枚举 |
| --- | --- | --- | --- | --- |
| \`${_dType}\` | ${_initValue} | ${_min} | ${_max} | ${_enums} |

${_uriPreset}
`;
}

for (const [tag, { cls, attribute }] of Object.entries(metadata.element)) {
  const md = `
# ${tag}

- tag: \`<${tag}></${tag}>\`
- class: \`${cls}\`

## 属性

${Object.entries(attribute)
  .filter(_d => !_d[1].hidden)
  .map(_d => renderAttribute(3, _d[0], _d[1]))
  .join('\n')}
`;

  fs.writeFileSync(`docs/element/${tag}.md`, md, 'utf-8');
}
