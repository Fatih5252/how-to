import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import '../css/custom.css';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          HowTo
          <Typewriter
            words={[
              '?',
              ' setup a config properly?',
              ' type better messages?',
              ' Configure a module better then the owner of SCNX (scderox)',
              ' Save your SCNX Bot from errors?'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={35}
            delaySpeed={1800}
          />
        </Heading>
        <p className="hero__subtitle">
          <Translate
            id="homepage.taglineText"
            description="The tagline text displayed on the homepage">
            In this project, we will explain HowTo setup a module properly in SCNX.
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
  useEffect(() => {
    const complianceScript = document.createElement('script');
    complianceScript.src = 'https://scnx-partners.s3.eu-central-1.amazonaws.com/partner/compliance-popup.js';
    complianceScript.async = true;
    document.body.appendChild(complianceScript);

    const zammadScript = document.createElement('script');
    zammadScript.src = 'https://tickets.scnx-tutorials.de/assets/chat/chat-no-jquery.min.js';
    zammadScript.async = true;

    zammadScript.onload = () => {
      if (window.ZammadChat) {
        new window.ZammadChat({
          fontSize: '12px',
          chatId: 1,
          show: true
        });
      }
    };

    document.body.appendChild(zammadScript);

    return () => {
      document.body.removeChild(complianceScript);
      if (document.body.contains(zammadScript)) {
        document.body.removeChild(zammadScript);
      }
    };
  }, []);
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
    </Layout>
  );
}