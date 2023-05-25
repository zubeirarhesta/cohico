import DummyPage from "@/components/layout/dummy-page";
import { useRouter } from "next/router";

export default function Dummy() {
  const route = useRouter();
  const url = route.query.dummy;
  const formattedUrl = url?.replace(/-/g, " ") || "";

  return <DummyPage>{formattedUrl}</DummyPage>;
}
