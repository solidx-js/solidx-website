import React, { useLayoutEffect, useMemo, useState } from 'react';
import CodeBlock from '@theme/CodeBlock';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface ICodeLiveProps {
  className?: string;
  style?: React.CSSProperties;
  children: string;

  vpHeight?: number;
  libs?: string;
}

const isBrowser = typeof window !== 'undefined';

const LIBS: Record<string, { css: string[]; js: string[] }> = {
  solidx: {
    css: ['https://registry.npmmirror.com/solidx.js/latest/files/assets/preset.css'],
    js: ['https://registry.npmmirror.com/solidx.js/latest/files/dist/index.js'],
  },
  regl: {
    css: [],
    js: ['https://registry.npmmirror.com/regl/2.1.0/files/dist/regl.min.js'],
  },
};

export const CodeLive = ({ className, style, children, vpHeight = 400, libs = 'solidx' }: ICodeLiveProps) => {
  const liveContainerRef = React.useRef<HTMLDivElement>(null);
  const [liveVisible, setLiveVisible] = useState<boolean>(false);

  const baseURL = (isBrowser ? window.location.origin : '') + useBaseUrl('/').replace(/\/$/, '');

  // 去除首尾空行
  const fragment = children.replace(/^\s+|\s+$/g, '').replace(/\{\{ BASE_URL \}\}/g, baseURL);

  const iframeHTML = useMemo(() => {
    if (!isBrowser) return '';

    const stylesheets: string[] = [];
    const jsScripts: string[] = [];

    if (libs) {
      libs.split(',').forEach(lib => {
        const { css, js } = LIBS[lib];
        stylesheets.push(...css);
        jsScripts.push(...js);
      });
    }

    let _body = fragment;

    // 把 libs 的 js 插入到 fragment 的第一个 script 标签之前
    if (jsScripts.length > 0) {
      const _i = _body.indexOf('<script');
      if (_i !== -1) {
        _body = _body.slice(0, _i) + jsScripts.map(src => `<script src="${src}"></script>`).join('\n') + _body.slice(_i);
      } else {
        _body += jsScripts.map(src => `<script src="${src}"></script>`).join('\n');
      }
    }

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
    
    ${stylesheets.map(href => `<link rel="stylesheet" href="${href}">`).join('\n')}
  </head>
  <body>
    ${_body}
  </body>
</html>`;

    return html;
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

  useLayoutEffect(() => {
    const _container = liveContainerRef.current;
    if (!_container) return;

    const iframe = _container.querySelector('iframe');
    if (!iframe) return;

    if (liveVisible) {
      // 用 contentDocument 方式写入 iframe，避免 wx 浏览器不兼容
      const doc = iframe.contentDocument;
      if (!doc) return;

      doc.open();
      doc.write(iframeHTML);
      doc.close();
    } else {
      iframe.src = 'about:blank';
    }
  }, [liveVisible]);

  const renderIframe = () => {
    return (
      <div ref={liveContainerRef} style={{ height: vpHeight, overflow: 'hidden', borderRadius: 4, marginBottom: 8 }}>
        {liveVisible ? <iframe title='CodeLive' style={{ display: 'block', width: '100%', height: '100%', border: 'none' }} /> : null}
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
