import Header from './Header/Header';

type myComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: myComponentProps) {
  return (
    <>
      <Header />
      <h2>Testing</h2>
      {children}
    </>
  );
}
