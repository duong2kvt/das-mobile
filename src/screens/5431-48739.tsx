const imgImage = "/das-mobile/assets/da337952627a1aa73d10d72e.png";
const imgImage1 = "/das-mobile/assets/d1c314138607881760028ce9.png";
const imgUnion = "/das-mobile/assets/048949e69b8f93aba829a6b6.svg";

export default function ButtonAppear() {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] relative size-full" data-node-id="5431:48739" data-name="Button appear">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[956px] left-1/2 top-1/2 w-[440px]" data-node-id="5431:48740" data-name="Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-112.95%] max-w-none top-0 w-[325.91%]" src={imgImage} />
          </div>
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute h-[56px] left-1/2 top-[857px] w-[388px]" data-node-id="5431:48741" data-name="Loading">
        <a className="-translate-x-1/2 absolute bottom-0 content-stretch cursor-pointer flex gap-[11.429px] h-[84px] items-center justify-center left-1/2 px-[11.429px] w-[216px]" data-node-id="I5431:48741;5248:50228" data-name="Button">
          <div className="absolute h-[80px] left-0 top-0 w-[214.286px]" data-node-id="I5431:48741;5248:50229" data-name="Union">
            <div className="absolute inset-[-2.29%_-2%_-5.17%_-0.75%]">
              <img alt="" className="block max-w-none size-full" src={imgUnion} />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[24px] leading-[normal] not-italic relative shrink-0 text-[#291d14] text-[32px] text-center tracking-[-0.96px] w-[122px]" data-node-id="I5431:48741;5248:50233" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
            Bắt đầu
          </p>
        </a>
      </div>
    </div>
  );
}
