import NotFound from "@/components/NotFound/NotFound";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Not-found",
};

export default async function PageNotFound() {
  return <NotFound />;
}
