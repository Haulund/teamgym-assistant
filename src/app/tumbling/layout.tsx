import Tabs from "../components/Tabs";

export default function TumblingLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
        <Tabs>{children}</Tabs>
      </div>
    );
  }