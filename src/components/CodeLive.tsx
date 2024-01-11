import React, { useLayoutEffect, useMemo, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { iframeResizer } from 'iframe-resizer';
import useIsBrowser from '@docusaurus/useIsBrowser';

export interface ICodeLiveProps {
  className?: string;
  style?: React.CSSProperties;
  children: string;

  defaultHeight?: number;
}

export const CodeLive = ({ className, style, children, defaultHeight }: ICodeLiveProps) => {
  const ref = React.useRef<HTMLIFrameElement>(null);
  const isBrowser = useIsBrowser();

  const assetURLs = {
    iframeResizer: (isBrowser ? window.location.origin : '') + useBaseUrl('/iframeResizer.contentWindow.min.js'),
  };

  // 去除首尾空行
  const fragment = children.replace(/^\s+|\s+$/g, '');

  const htmlBlobUrl = useMemo(() => {
    if (!isBrowser) return '';

    const html = `
<html>
  <head>
    <style>
      html, body { margin: 0; padding: 0; }

      .loading {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading::after {
        content: '';
        display: block;
        width: 36px;
        height: 36px;
        border: 3px solid #096dd9;
        border-bottom-color: transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: rotation-loading 1s linear infinite;
      }
      
      @keyframes rotation-loading {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    </style>
    <link rel="stylesheet" href="https://registry.npmmirror.com/solidx.js/latest/files/assets/preset.css" />
  </head>
  <body>
    ${fragment}

    <script src="${assetURLs.iframeResizer}"></script>
    <script src="https://registry.npmmirror.com/solidx.js/latest/files/dist/index.js"></script>
  </body>
</html>`;

    return URL.createObjectURL(new Blob([html], { type: 'text/html' }));
  }, [fragment, isBrowser]);

  useLayoutEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    iframeResizer({ checkOrigin: false, autoResize: true }, iframe);
  }, [htmlBlobUrl]);

  const renderIframe = () => {
    return (
      <iframe
        ref={ref}
        title='CodeLive'
        src={htmlBlobUrl}
        style={{
          display: 'block',
          width: '100%',
          height: defaultHeight,
          border: 'none',
          overflow: 'hidden',
          borderRadius: 4,
          marginBottom: 8,
        }}
        onLoad={() => URL.revokeObjectURL(htmlBlobUrl)}
      />
    );
  };

  return (
    <div data-name='CodeLive' className={className} style={{ ...style }}>
      {htmlBlobUrl && renderIframe()}
      <CodeBlock language='html' showLineNumbers children={fragment} />
    </div>
  );
};
