import PricingTabs from "@/components/Pricing/PricingTabs";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const FeaturesPage = () => {
  return (
    <>
      <section>
        <Navbar />

        <div className="flex flex-col items-center justify-center mt-20 gap-4">
          <h1 className="text-4xl font-bold">
            Flexible <span className="text-amber-500"> Plans</span>
          </h1>
          <p className="text-2xl text-center">
            Choose a plan that work best for you and your team
          </p>

          <PricingTabs />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default FeaturesPage;
