import PunkWork from "@/routes/(main)/punkWork";
import SellPrompt from "@/routes/(main)/sellPrompt";
import StopGuessing from "@/routes/(main)/stopGuessing";
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
