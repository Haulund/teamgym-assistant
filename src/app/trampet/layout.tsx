import TrampetTabs from "../components/TrampetTabs";

export default function TrampetLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
        <TrampetTabs>{children}</TrampetTabs>
      </div>
    );
  }