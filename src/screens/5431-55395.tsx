const imgImage = "/das-mobile/assets/da337952627a1aa73d10d72e.png";
const imgImage1 = "/das-mobile/assets/d1c314138607881760028ce9.png";

type LoadingProps = {
  className?: string;
  state?: "None";
};

function Loading({ className, state = "None" }: LoadingProps) {
  return (
    <div className={className || "h-[49px] opacity-0 relative w-[388px]"} data-node-id="5248:50256">
      <div className="absolute bg-[#f4f0ed] border-2 border-[#8f6747] border-solid content-stretch flex gap-[8px] h-[48px] items-center left-0 px-[16px] rounded-[12px] top-[-0.48px] w-[388px]" data-node-id="5248:50257" data-name="BG" />
      <div className="absolute bg-[#f3cb2e] content-stretch flex gap-[8px] h-[48px] items-center left-0 opacity-0 px-[16px] rounded-[12px] top-0 w-[6px]" data-node-id="5248:50358" data-name="Load" />
    </div>
  );
}

export default function LoadingScreen() {
  return (
    <a className="bg-[rgba(0,0,0,0.3)] block cursor-pointer relative size-full" data-node-id="5431:55395" data-name="Loading screen">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[956px] left-1/2 top-1/2 w-[440px]" data-node-id="5431:55396" data-name="Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-112.95%] max-w-none top-0 w-[325.91%]" src={imgImage} />
          </div>
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
        </div>
      </div>
      <Loading className="-translate-x-1/2 absolute h-[49px] left-1/2 opacity-0 top-[857px] w-[388px]" />
    </a>
  );
}
