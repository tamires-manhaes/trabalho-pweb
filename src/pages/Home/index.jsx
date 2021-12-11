import Container from '../../components/Container';

export const Home = () => {
  return (
    <div className="homePage">
      <Container title="PWEB Cars" showButton>
        <h2>Home page</h2>
        <ul className="carList"></ul>
      </Container>
    </div>
  );
};
