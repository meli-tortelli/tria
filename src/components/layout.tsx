import Header from './Header/Header';

type myComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: myComponentProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
