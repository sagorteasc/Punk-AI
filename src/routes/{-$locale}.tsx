import PunkWork from "@/routes/(main)/punkWork";
import SellPrompt from "@/routes/(main)/sellPrompt";
import StopGuessing from "@/routes/(main)/stopGuessing";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    const locale = params.locale;

    if (locale && locale !== "fr") {
      throw notFound();
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SellPrompt />
      <PunkWork />
      <StopGuessing />
    </div>
  );
}
