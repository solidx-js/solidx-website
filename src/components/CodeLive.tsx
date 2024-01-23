import React, { useLayoutEffect, useMemo, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface ICodeLiveProps {
  className?: string;
  style?: React.CSSProperties;
  children: string;

  vpHeight?: number;
}

const isBrowser = typeof window !== 'undefined';

export const CodeLive = ({ className, style, children, vpHeight = 400 }: ICodeLiveProps) => {
  const liveContainerRef = React.useRef<HTMLDivElement>(null);
  const [liveVisible, setLiveVisible] = useState<boolean>(false);

  const baseURL = (isBrowser ? window.location.origin : '') + useBaseUrl('/').replace(/\/$/, '');

  // 去除首尾空行
  const fragment = children.replace(/^\s+|\s+$/g, '');

  const iframeURL = useMemo(() => {
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

    <script src="https://registry.npmmirror.com/solidx.js/latest/files/dist/index.js"></script>
  </body>
</html>`;

    const replacedHtml = html.replace(/\{\{ BASE_URL \}\}/g, baseURL);

    return URL.createObjectURL(new Blob([replacedHtml], { type: 'text/html' }));
  }, [fragment, baseURL]);

  useLayoutEffect(() => {
    const _container = liveContainerRef.current;
    if (!_container) return;

    // 监听 container 何时进入或离开视口
    const observer = new IntersectionObserver(([entry]) => setLiveVisible(entry.isIntersecting));
    observer.observe(_container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const renderIframe = () => {
    return (
      <div ref={liveContainerRef} style={{ height: vpHeight, overflow: 'hidden', borderRadius: 4, marginBottom: 8 }}>
        {iframeURL && liveVisible ? (
          <iframe title='CodeLive' src={iframeURL} style={{ display: 'block', width: '100%', height: '100%', border: 'none' }} />
        ) : null}
      </div>
    );
  };

  return (
    <div data-name='CodeLive' className={className} style={{ ...style }}>
      {renderIframe()}
      <CodeBlock language='html' showLineNumbers children={fragment} />
    </div>
  );
};
