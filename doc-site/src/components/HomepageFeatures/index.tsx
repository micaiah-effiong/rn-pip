import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_ease.svg').default,
    description: (
      <>
        Rn-pip was designed from the ground up to be easily installed and intergrated into
        your React Native App.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_focus.svg').default,
    description: (
      <>
        Rn-pip lets you focus on what matters, and we&apos;ll do the chores. Go
        ahead and keep users engaged by enabling Picture in Picture,
        allowing them to stay immersed in your app's content.
      </>
    ),
  },
  {
    title: 'Typescript Support',
    Svg: require('@site/static/img/undraw_typescript.svg').default,
    description: (
      <>
        Rn-pip provides first-class Typescript support
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (

    <div className='col col--4'>
      <div className="card-demo">
        <div>
          <div className="text--center">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3">{title}</Heading>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
