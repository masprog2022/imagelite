"use client";

import { useAuth } from "@/resources";
import GalleryPage from "./gallery/page";
import LoginPage from "./login/page";

export default function Home() {
  const auth = useAuth();
  const user = auth.getUserSession();

  if (!user) {
    return <LoginPage />;
  }

  return <GalleryPage />;
}
