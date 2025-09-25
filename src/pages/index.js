import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import '../css/custom.css';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Typewriter } from 'react-simple-typewriter';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          How to{''}
          <Typewriter
            words={[
              '?',
              ' setup a config properly?',
              ' create better messages?'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1800}
          />
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.taglineText"
            description="The tagline text displayed on the homepage">
            In this project, we will explain how to setup a module properly in SCNX.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            <Translate
              id="homepage.goToChangelogButton"
              description="Text for the 'Go to Changelog' button">
              Go to How to!
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to How to! - ${siteConfig.title}`}
      description={
        <Translate
          id="layout.homepageDescription"
          description="How to?">
          How to?
        </Translate>
      }>
      <HomepageHeader />
      <main />
      <SpeedInsights />
      <Analytics />
    </Layout>
  );
}
