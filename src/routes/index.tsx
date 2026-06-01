import SellPrompt from "@/components/SellPrompt";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <SellPrompt />
      <Footer />
    </>
  );
}
