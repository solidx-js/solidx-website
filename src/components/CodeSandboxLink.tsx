import React from 'react';

export interface ICodeSandboxLinkProps {
  className?: string;
  style?: React.CSSProperties;
  url: string;
}

export const CodeSandboxLink = ({ className, style, url }: ICodeSandboxLinkProps) => {
  return (
    <iframe
      className={className}
      src={url}
      style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden', ...style }}
      allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
      sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
    ></iframe>
  );
};
