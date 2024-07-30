import Roadmap from "../components/Roadmap";
import Content from "../components/Content";
import Related from "../components/Related";

const ProductDetailsPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[222px] px-[135px] pb-[120px] box-border gap-[80px] leading-[normal] tracking-[normal] mq450:gap-[20px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[40px] mq750:pl-[67px] mq750:pr-[67px] mq750:box-border">
      <Roadmap />
      <Content />
      <Related />
    </div>
  );
};

export default ProductDetailsPage;
