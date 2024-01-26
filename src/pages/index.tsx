import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const codeExampleURL = useBaseUrl('/img/code-exmaple.png');

  return (
    <header className={clsx('hero', styles.heroBanner)} style={{ background: 'none' }}>
      <div className='container'>
        <div className='row row--align-center'>
          <div className='col col-6' style={{ marginBottom: 32 }}>
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
            <div className={styles.buttons}>
              <Link className='button button--primary' to='/docs/example/solar-system'>
                浏览案例
              </Link>
              <Link className='button button--secondary' to='/docs/element/xr-scene'>
                组件文档
              </Link>
            </div>
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

  const { withBaseUrl } = useBaseUrlUtils();

  const renderFeatureList = () => {
    return (
      <section className='container'>
        <h2 style={{ margin: '4rem 0 1rem 0', textAlign: 'center' }}>更简单，更快捷</h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem' }}>零构建引入 3D 功能，无需关注底层技术，开箱即用。</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          {[
            { text: '光源与阴影发生器', url: '/docs/example/光源/point-light', img: withBaseUrl('/img/feature/point-light.png') },
            { text: '载入 GLB 模型', url: '/docs/example/几何体/xr-model', img: withBaseUrl('/img/feature/glb.png') },
            { text: '拖拽变换控件', url: '/docs/example/控制器/drag', img: withBaseUrl('/img/feature/drag.png') },
            { text: '体积光', url: '/docs/example/solar-system', img: withBaseUrl('/img/feature/solar-system.png') },
          ].map((item, index) => (
            <Link key={index} href={item.url} style={{ width: 'calc(50% - 16px)' }}>
              <img
                src={item.img}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  aspectRatio: '2',
                  borderRadius: 'var(--ifm-card-border-radius)',
                  overflow: 'hidden',
                }}
              />
              <div style={{ color: '#fff', padding: '1rem', textAlign: 'center' }}>{item.text}</div>
            </Link>
          ))}
        </div>
      </section>
    );
  };

  const renderFeatureItem = (title: string, subtitle: string) => {
    return (
      <section className='container'>
        <h2 style={{ margin: '4rem 0 1rem 0', textAlign: 'center' }}>{title}</h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem' }}>{subtitle}</p>
      </section>
    );
  };

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <HomepageHeader />

      <main style={{ paddingBottom: 64 }}>
        <HomepageFeatures />

        {renderFeatureItem(
          'HTML 属性或 CSS 变量',
          '无需过程式编码，只需要在 HTML 或 CSS 中声明你要什么。所有状态都可以是受控的。'
        )}

        {renderFeatureItem('原生 CSS 动画系统', '使用原生 CSS 选择器、Transition 和 Animation，就能让 3D 元素动起来。')}

        {renderFeatureList()}
      </main>
    </Layout>
  );
}
