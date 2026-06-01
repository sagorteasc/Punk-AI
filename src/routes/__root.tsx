import { Outlet, createRootRoute } from "@tanstack/react-router";
import Providers from "@/providers";

export const Route = createRootRoute({
  component: RootComponent,
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
