import CustomFooter from "./CustomFooter";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <CustomFooter />
    </>
  );
}
