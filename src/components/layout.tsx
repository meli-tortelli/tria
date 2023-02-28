import Header from './Header/Header';

type myComponentProps = React.PropsWithChildren<{}>;

export default function Layout({ children }: myComponentProps) {
  return (
    <>
      <Header />
      <h2></h2>
      {children}
    </>
  );
}
