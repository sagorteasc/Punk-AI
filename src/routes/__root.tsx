import { Outlet, createRootRoute } from "@tanstack/react-router";
import Providers from "@/providers";
import NotFound from "@/components/NotFound";
import Loading from "@/components/Loading";
import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFound,
  pendingComponent: Loading,
});

function RootComponent() {
  return (
    <div className="font-sora bg-(--bg-color) min-h-screen">
      <Providers>
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
      </Providers>
    </div>
  );
}
