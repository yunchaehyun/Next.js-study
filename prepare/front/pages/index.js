import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>Hello, Next!</div>
    </AppLayout>
  );
};

export default Home;

// next가 pages 폴더를 인식해서 이걸 다 page component로 만들어줌
// code spliting된 page로 만들어주는거임
