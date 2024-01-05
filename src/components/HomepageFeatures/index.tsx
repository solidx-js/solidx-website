import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: any;
};

const FeatureList: FeatureItem[] = [
  {
    title: '配置式',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: '无需学习新语言，只需使用HTML和CSS',
  },
  {
    title: '高性能',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,

    // prettier-ignore
    description: (
      <span>
        由 <a target='_blank' href='https://www.babylonjs.com/'>babylon.js</a> 和 <a target='_blank' href='https://lit.dev/'>lit</a> 驱动
      </span>
    ),
  },
  {
    title: '可扩展',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: '创建自己的组件并在场景中使用它们',
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div> */}
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
