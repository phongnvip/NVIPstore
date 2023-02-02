import pngimg from "../../../../images/test2.png";

const Content = () => {
  return (
    <div className="h-auto w-auto from-cyan-500 to-blue-500 rounded-xl my-12 flex justify-center">
      <a href="Google.com">
        <img src={pngimg} alt="Wild Rift" />
      </a>
    </div>
  );
};

export default Content;
