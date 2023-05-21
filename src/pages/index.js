import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import VideoCalling from 'sections/video-calling';
import Pricing from 'sections/pricing';
import Clients from 'sections/clients';
import Blog from 'sections/blog';
import Faq from 'sections/faq';
import Support from 'sections/support-team';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Software Testing Company | QA Services | TestingExperts"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <Services />
        <VideoCalling />
        <Pricing />
        <Clients />
        <Blog />
        <Faq />
        <Support />
      </Layout>
    </ThemeProvider>
  );
}
