import { Button } from "@/components/ui/button";
import Navbar from "../common/Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div
      //   style={{
      //     backgroundImage: "url('/images/background.png')",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //     minHeight: "100vh",
      //     width: "100vw",
      //     // Responsive enhancements:
      //     backgroundAttachment: "scroll", // Better for mobile
      //     overflowX: "hidden", // Prevents horizontal scroll
      //     position: "relative", // For content positioning
      //   }}
      className="text-3xl font-bold"
    >
      <Navbar />

      <section className="main-container">
        <div className="mt-28 md:mt-44 flex flex-col space-y-[450px]  md:space-y-[470px] lg:space-y-[500px]">
          <h1 className="text-center text-4xl md:text-5xl">
            Welcome To Your
            <span className="text-orange-500"> Virtual Office</span>
          </h1>

          <div className="flex justify-center gap-8">
            <Button className="bg-orange-500 rounded-sm font-bold hover:bg-amber-700">
              Instant Demo
            </Button>
            <Button className="bg-transparent border-2 font-bold border-orange-500 hover:text-white hover:bg-amber-700">
              <Link href="/company-setup">Setup Your Company</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
