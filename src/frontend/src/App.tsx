import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Home from "./pages/Home";
import JoinUs from "./pages/JoinUs";
import Media from "./pages/Media";
import Members from "./pages/Members";
import Rules from "./pages/Rules";

function RootLayout() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
      <h1
        className="text-3xl font-bold text-white mb-4"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {title}
      </h1>
      <p className="text-[var(--text-muted)] max-w-md">
        This page is coming soon. For questions, please reach out via our
        Discord server.
      </p>
    </main>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});
const membersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/members",
  component: Members,
});
const rulesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rules",
  component: Rules,
});
const eventsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/events",
  component: Events,
});
const mediaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/media",
  component: Media,
});
const joinRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/join",
  component: JoinUs,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});
const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: () => <PlaceholderPage title="Privacy Policy" />,
});
const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: () => <PlaceholderPage title="Terms of Service" />,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  membersRoute,
  rulesRoute,
  eventsRoute,
  mediaRoute,
  joinRoute,
  contactRoute,
  privacyRoute,
  termsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
