import React from 'react';
import SEO from 'components/seo';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Pricing from 'sections/pricing';
import Clients from 'sections/clients';
import Support from 'sections/support-team';


export default function HomePage() {
  return (

   
     <>
        <SEO
          title="Software Testing Company | QA Services | TestingExperts"
          description="CrusherslabQA is a leading software testing company that provides QA services & software testing services. We are a team of QA experts who use the latest tools & techniques to ensure the best quality of your software."
        />
        <Banner />
        <Services />
        <feature />
        <Pricing />
        <Clients />
        <Support />
   
     
      </>

  
  );
}
