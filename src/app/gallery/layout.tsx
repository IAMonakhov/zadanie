import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Галерея 3D объектов",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
