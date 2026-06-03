import { Outlet, createRootRoute } from "@tanstack/react-router";
import Providers from "@/providers";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
  pendingComponent: Loading,
});

function RootComponent() {
  return (
    <div className="font-sora bg-[#fafafa] min-h-screen">
      <Providers>
        <Outlet />
      </Providers>
    </div>
  );
}
