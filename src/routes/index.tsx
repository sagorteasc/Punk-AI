import PunkWork from "@/components/PunkWork";
import SellPrompt from "@/components/SellPrompt";
import StopGuessing from "@/components/StopGuessing";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="">
      <Navbar />
      <SellPrompt />
      <PunkWork />
      <StopGuessing />
      <Footer />
    </div>
  );
}
