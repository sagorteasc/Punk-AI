import PunkWork from "@/routes/(main)/punkWork";
import SellPrompt from "@/routes/(main)/sellPrompt";
import StopGuessing from "@/routes/(main)/stopGuessing";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
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
