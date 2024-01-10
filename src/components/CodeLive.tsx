import React, { useLayoutEffect, useMemo } from 'react';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { iframeResizer } from 'iframe-resizer';

export interface ICodeLiveProps {
  className?: string;
  style?: React.CSSProperties;
  children: string;

  height?: number;
}

export const CodeLive = ({ className, style, children }: ICodeLiveProps) => {
  const ref = React.useRef<HTMLIFrameElement>(null);
  const assetURLs = {
    iframeResizer: window.location.origin + useBaseUrl('/iframeResizer.contentWindow.min.js'),
  };

  // 去除首尾空行
  const fragment = children.replace(/^\s+|\s+$/g, '');

  const htmlBlobUrl = useMemo(() => {
    const html = `
<html>
  <head>
    <style>
      html, body { margin: 0; padding: 0; }
    </style>
  </head>
  <body>
    ${fragment}

    <script src="${assetURLs.iframeResizer}"></script>
    <script src="https://unpkg.com/solidx.js/dist/index.js"></script>
  </body>
</html>`;

    return URL.createObjectURL(new Blob([html], { type: 'text/html' }));
  }, [fragment]);

  useLayoutEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    iframeResizer({ checkOrigin: false, autoResize: true }, iframe);
  }, []);

  return (
    <div data-name='CodeLive' className={className} style={{ ...style }}>
      <iframe
        ref={ref}
        title='CodeLive'
        src={htmlBlobUrl}
        style={{
          display: 'block',
          width: '100%',
          height: 100,
          border: 'none',
          overflow: 'hidden',
          borderRadius: 4,
          marginBottom: 8,
        }}
      />
      <CodeBlock language='html' showLineNumbers children={fragment} />
    </div>
  );
};
