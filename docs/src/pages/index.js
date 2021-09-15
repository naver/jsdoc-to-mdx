import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import Logo from "@site/static/img/jsdoc2mdx.svg";

export default function Home() {
  return (
    <Layout
      description="jsdoc to mdx API document generator">
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container">
          <Logo style={{ fill: "#0fbe57" }} />
          <p className="hero__subtitle">
            <span>📜 jsdoc to mdx API document generator, powered with <a href="https://docusaurus.io/" target="_blank">🦖Docusaurus</a> and <a href="https://github.com/jsdoc2md/jsdoc-to-markdown" target="_blank">jsdoc-to-markdown</a></span>
          </p>
          <Link
            className="button button--lg button--primary"
            to={useBaseUrl("docs/installation")}>
              🚀 Get Started
          </Link>
        </div>
      </header>
      <main>
        <p className="hero hero--primary"></p>
        <div className="container padding-vert--lg">
          <h2 className="text--center margin-bottom--xl">Features</h2>
          <div className="row margin-vert--lg">
            <div className="col">
              <h3>MDX(Markdown + JSX) made with your JSDoc</h3>
              <img className={styles.featureImage} src="img/mdx.png" alt="MDX" />
              <p>Already using JSDoc? You can generate MDX documents with it without any modification.</p>
            </div>
            <div className="col">
              <h3>Sidebar</h3>
              <img className={styles.featureImage} src="img/sidebar.png" alt="Sidebar" />
              <p>jsdoc-to-mdx can create a sidebar with an automatically classified JSDoc items in the project.</p>
            </div>
            <div className="col">
              <h3>Powered with Docusaurus</h3>
              <img className={styles.featureImage} src="img/docusaurus.png" alt="Sidebar" />
              <p>jsdoc-to-mdx is designed to be used with Docusaurus. You can easily create your own API document page with Docusaurus's powerful features like i18n.</p>
            </div>
          </div>
          <h2>Showcases</h2>
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card__header">
                  <h3>🎠 Flicking</h3>
                </div>
                <div className="card__image">
                  <img src="img/flicking.png" alt="Flicking" />
                </div>
                <div className="card__footer">
                  <a className="button button--primary button--block" href="https://naver.github.io/egjs-flicking/docs/api/Flicking" target="_blank">Visit</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card__header">
                  <h3>♾️ InfiniteGrid</h3>
                </div>
                <div className="card__image">
                  <img src="img/infinitegrid.png" alt="InfiniteGrid" />
                </div>
                <div className="card__footer">
                  <a className="button button--primary button--block" href="https://naver.github.io/egjs-infinitegrid/docs/api/InfiniteGrid/" target="_blank">Visit</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
