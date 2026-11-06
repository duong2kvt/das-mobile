const imgMascot13 = "/das-mobile/assets/684b6b70125ccda24007c258.png";
const imgUnion = "/das-mobile/assets/40ee90cac64a8ccca5eab37b.png";
const imgVector1186 = "/das-mobile/assets/cf80a9da542a010e9fd89ff5.svg";
const imgVector1171 = "/das-mobile/assets/fa41348b6cffa62cc1b36851.svg";
const imgIconInteract = "/das-mobile/assets/4d0b62e8149d4648615b1efe.svg";

export default function MascotGuide() {
  return (
    <div className="relative size-full" data-node-id="5867:110854" data-name="Mascot Guide">
      <div className="absolute flex h-[345.648px] items-center justify-center left-[-49px] top-0 w-[352.254px]" data-node-id="I5867:110854;5049:42575">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[345.648px] relative w-[352.254px]" data-name="mascot 1 3">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[137.47%] left-[-17.27%] max-w-none top-[-20.94%] w-[134.9%]" src={imgMascot13} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[193.973px] left-0 top-[225px] w-[370.83px]" data-node-id="I5867:110854;5049:42576">
        <div className="absolute h-[46.707px] left-[15px] top-0 w-[159.045px]" data-node-id="I5867:110854;5049:42577" data-name="Name tag">
          <div className="absolute flex h-[46.707px] items-center justify-center left-0 top-0 w-[159.045px]" data-node-id="I5867:110854;5049:42578">
            <div className="flex-none rotate-[-1.28deg]">
              <div className="h-[43.191px] relative w-[158.121px]">
                <div className="absolute inset-[-1.16%_-1.26%_-4.63%_-0.32%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector1186} />
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute flex h-[25.578px] items-center justify-center left-[76.4px] top-[9.99px] w-[130.793px]" data-node-id="I5867:110854;5049:42579">
            <div className="flex-none rotate-[-0.98deg]">
              <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[23.349px] leading-[1.4] not-italic relative text-[#f4f0ed] text-[20px] text-center w-[130.412px]">Giáo sư Zũ</p>
            </div>
          </div>
        </div>
        <div className="absolute h-[161.973px] left-0 top-[32px] w-[370.83px]" data-node-id="I5867:110854;5049:42580" data-name="Box chat">
          <div className="absolute h-[145.489px] left-[15.44px] top-[16.48px] w-[355.386px]" data-node-id="I5867:110854;5049:42581">
            <div className="absolute inset-[-0.69%_-0.28%]">
              <img alt="" className="block max-w-none size-full" src={imgVector1171} />
            </div>
          </div>
          <div className="absolute content-stretch flex flex-col gap-[8px] h-[153.288px] items-start left-0 px-[14px] py-[20px] top-0 w-[370.83px]" data-node-id="I5867:110854;5049:42582" data-name="Content">
            <div className="absolute h-[153.288px] left-0 top-0 w-[370.83px]" data-node-id="I5867:110854;5049:42583" data-name="Union">
              <div className="absolute inset-[-0.33%_-0.54%_-1.3%_-0.13%]">
                <img alt="" className="block max-w-none size-full" height="155.788" src={imgUnion} width="373.33" />
              </div>
            </div>
            <div className="content-stretch flex h-[107.532px] items-start justify-center p-[8px] relative shrink-0 w-[336.781px]" data-node-id="I5867:110854;5049:42586" data-name="Text">
              <p className="[word-break:break-word] flex-1 font-['Young_Display_Bold:Bold'] leading-[1.4] min-w-px not-italic relative text-[#3c2b1e] text-[20px]" data-node-id="I5867:110854;5049:42587">{`"Hãy chọn vào cổ vật vừa săn được để xem thông tin chi tiết và câu chuyện của nó nhé!`}</p>
            </div>
            <div className="absolute h-[19px] left-[333px] top-[128px] w-[18px]" data-node-id="I5867:110854;5431:55431" data-name="Icon Interact">
              <div className="absolute inset-[-2.63%_-5.56%_0_-2.78%]">
                <img alt="" className="block max-w-none size-full" src={imgIconInteract} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
