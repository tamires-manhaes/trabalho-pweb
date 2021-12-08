import Container from '../../components/Container';

export const Home = () => {
  return (
    <div className="homePage">
      <Container showMenu title="PWEB Cars">
        <h2>Home page</h2>
        <ul className="carList"></ul>
      </Container>
    </div>
  );
};
