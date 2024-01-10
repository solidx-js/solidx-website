// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import { CodeSandboxLink } from '../components/CodeSandboxLink';
import { CodeLive } from '../components/CodeLive';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  CodeSandboxLink,
  CodeLive,
};
