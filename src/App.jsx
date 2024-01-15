import styles from "./style";

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials,
Clients, CTA, Footer } from "./components";

// If your react functional component simply returns JSX, then we can remove the curly bracers
// and the return statement

const App = () => (
    <div className="bg-primary w-full overflow-hidden">
      {/* Wrap navbar< */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        {/* <div className={`${styles.boxWidth}`}> */}
        <div className="w-full">
          <Navbar />
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-primary ${styles.flexStart}`}> 
        {/* <div className={`${styles.boxWidth}`}> */}
        <div className="w-full">
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>

    </div>
  );


export default App