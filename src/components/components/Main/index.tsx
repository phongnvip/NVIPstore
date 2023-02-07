import Content from "./components/content";

const Main = () => {
  return (
    <div className="md:w-11/12 max-sm:w-11/12 w-3/5 bg-transparent flex-col justify-center">
      <Content />
      <Content />
      <Content />
    </div>
  );
};

export default Main;
