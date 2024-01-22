import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const codeExampleURL = useBaseUrl('/img/code-exmaple.png');

  return (
    <header className={clsx('hero', styles.heroBanner)} style={{ background: 'none' }}>
      <div className='container'>
        <div className='row row--align-center'>
          <div className='col col-6'>
            <Heading
              as='h1'
              className='hero__title'
              style={{ color: '#fff', fontSize: 64, textDecoration: 'underline', textAlign: 'left' }}
            >
              {siteConfig.title}
            </Heading>
            <p className='hero__subtitle' style={{ color: '#fff', textAlign: 'left' }}>
              {siteConfig.tagline}
            </p>
          </div>
          <div className='col col-6'>
            <img src={codeExampleURL} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={'零门槛，零构建，开箱即用的 WEB 3D 组件'} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
