const imgShapes = "/das-mobile/assets/02b07e16ea9c4752add63ac0.svg";
const imgGroup1171277045 = "/das-mobile/assets/882a8e02effafb03e0a95cd8.svg";
const imgImage = "/das-mobile/assets/1e3b1629ed36eb95f7e8639e.png";
const imgImage1 = "/das-mobile/assets/da337952627a1aa73d10d72e.png";
const imgMascot13 = "/das-mobile/assets/4bf6e4c5db678bcbb8ade68d.png";
const imgUnion = "/das-mobile/assets/f095c5fd2e0f353790721405.png";
const imgVector1186 = "/das-mobile/assets/121e8755365876f0fa22eb77.svg";
const imgVector1171 = "/das-mobile/assets/9cf441f7873672e6a8e1f79a.svg";
const imgIconInteract = "/das-mobile/assets/83210740229eef1aaf76ee87.svg";
const imgShapes1 = "/das-mobile/assets/b693f69a94f981388ee36c26.svg";

type IconButtonProps = {
  className?: string;
  light?: "True";
  type?: "Right";
};

function IconButton({ className, light = "True", type = "Right" }: IconButtonProps) {
  return (
    <div className={className || "h-[40px] relative w-[76px]"} data-node-id="4856:22054">
      <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="4856:21239" data-name="Shapes">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShapes} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[24px] top-1/2" data-node-id="4856:21242" data-name="Icon">
        <div className="absolute inset-[8.33%_15.83%_8.33%_12.5%]" data-node-id="4856:21243">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1171277045} />
        </div>
      </div>
    </div>
  );
}

type VaBnChinhLaNgiDoProps = {
  className?: string;
  name?: "Letter 1" | "Letter 2" | "Letter 3" | "Letter 4" | "Letter 5" | "Letter 6";
  stage?: "1";
};

function VaBnChinhLaNgiDo({ className, name = "Letter 1", stage = "1" }: VaBnChinhLaNgiDoProps) {
  const is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6 = stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5", "Letter 6"].includes(name);
  const isLetter2And1 = name === "Letter 2" && stage === "1";
  const isLetter3And1 = name === "Letter 3" && stage === "1";
  const isLetter4And1 = name === "Letter 4" && stage === "1";
  const isLetter5And1 = name === "Letter 5" && stage === "1";
  const isLetter6And1 = name === "Letter 6" && stage === "1";
  return (
    <div className={className || "h-[28px] relative w-[320.781px]"} id={isLetter6And1 ? "node-5431_71981" : isLetter5And1 ? "node-5431_71979" : isLetter4And1 ? "node-5431_71977" : isLetter3And1 ? "node-5431_71975" : isLetter2And1 ? "node-5431_71973" : "node-5431_71971"}>
      <p className="[word-break:break-word] absolute font-['Young_Display_Bold:Bold'] leading-[0] left-0 not-italic opacity-0 text-[20px] text-[rgba(0,0,0,0)] top-0 w-[320.781px]" id={isLetter6And1 ? "node-5431_71980" : isLetter5And1 ? "node-5431_71978" : isLetter4And1 ? "node-5431_71976" : isLetter3And1 ? "node-5431_71974" : isLetter2And1 ? "node-5431_71972" : "node-5431_71970"}>
        <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6 ? "" : "text-[#3c2b1e]"}`}>{isLetter6And1 ? "Và... Bạn chính là người " : isLetter5And1 ? "Và... Bạn chính là " : isLetter4And1 ? "Và... Bạn chính " : isLetter3And1 ? "Và... Bạn " : isLetter2And1 ? "Và... " : "Và... "}</span>
        <span className={`leading-[1.4] ${is1AndIsLetter2OrLetter3OrLetter4OrLetter5OrLetter6 ? "text-[#3c2b1e]" : ""}`}>{isLetter6And1 ? "đó!!!" : isLetter5And1 ? "người " : isLetter4And1 ? "là " : isLetter3And1 ? "chính " : isLetter2And1 ? "Bạn " : "Bạn chính là người đó!!!"}</span>
        {stage === "1" && ["Letter 2", "Letter 3", "Letter 4", "Letter 5"].includes(name) && <span className="leading-[1.4]">{isLetter5And1 ? "đó!!!" : isLetter4And1 ? "người đó!!!" : isLetter3And1 ? "là người đó!!!" : isLetter2And1 ? "chính là người đó!!!" : ""}</span>}
      </p>
    </div>
  );
}

export default function Scene5() {
  return (
    <a className="block cursor-pointer relative size-full" data-node-id="5431:48798" data-name="Scene 5">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[956px] left-1/2 top-1/2 w-[440px]" data-node-id="5431:48799" data-name="Image">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[103.3%] left-[-3.82%] max-w-none top-0 w-[107.64%]" src={imgImage} />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-full left-[-112.95%] max-w-none top-0 w-[325.91%]" src={imgImage1} />
          </div>
          <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bottom-[40px] h-[419px] left-[calc(50%+0.5px)] w-[371px]" data-node-id="5431:71955" data-name="Mascot Guide">
        <div className="absolute flex h-[345.648px] items-center justify-center left-[-49px] top-0 w-[352.254px]" data-node-id="5431:71956">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[345.648px] relative w-[352.254px]" data-name="mascot 1 3">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[119.66%] left-[-4.3%] max-w-none top-[-14.28%] w-[117.42%]" src={imgMascot13} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[193.973px] left-0 top-[225px] w-[370.83px]" data-node-id="5431:71957">
          <div className="absolute h-[46.707px] left-[15px] top-0 w-[159.045px]" data-node-id="5431:71958" data-name="Name tag">
            <div className="absolute flex h-[46.707px] items-center justify-center left-0 top-0 w-[159.045px]" data-node-id="5431:71959">
              <div className="flex-none rotate-[-1.28deg]">
                <div className="h-[43.191px] relative w-[158.121px]">
                  <div className="absolute inset-[-1.16%_-1.26%_-4.63%_-0.32%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1186} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-x-1/2 absolute flex h-[25.578px] items-center justify-center left-[76.4px] top-[9.99px] w-[130.793px]" data-node-id="5431:71960">
              <div className="flex-none rotate-[-0.98deg]">
                <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[23.349px] leading-[1.4] not-italic relative text-[#f4f0ed] text-[20px] text-center w-[130.412px]">Giáo sư Zũ</p>
              </div>
            </div>
          </div>
          <div className="absolute h-[161.973px] left-0 top-[32px] w-[370.83px]" data-node-id="5431:71961" data-name="Box chat">
            <div className="absolute h-[145.489px] left-[15.44px] top-[16.48px] w-[355.386px]" data-node-id="5431:71962">
              <div className="absolute inset-[-0.69%_-0.28%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1171} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[8px] h-[153.288px] items-start left-0 px-[14px] py-[20px] top-0 w-[370.83px]" data-node-id="5431:71963" data-name="Content">
              <div className="absolute h-[153.288px] left-0 top-0 w-[370.829px]" data-node-id="5431:71964" data-name="Union">
                <div className="absolute inset-[-0.33%_-0.54%_-1.3%_-0.13%]">
                  <img alt="" className="block max-w-none size-full" height="155.788" src={imgUnion} width="373.33" />
                </div>
              </div>
              <div className="content-stretch flex h-[107.532px] items-start p-[8px] relative shrink-0 w-[336.781px]" data-node-id="5431:71966" data-name="Text">
                <div className="bg-[rgba(255,255,255,0)] h-[56px] relative shrink-0 w-[212.781px]" data-node-id="5431:72001" data-name="Và... Bạn chính là người đó!!! - Animation ▶">
                  <VaBnChinhLaNgiDo className="absolute h-[28px] left-0 top-0 w-[320.781px]" />
                  <VaBnChinhLaNgiDo className="absolute h-[28px] left-0 top-0 w-[320.781px]" name="Letter 2" />
                  <VaBnChinhLaNgiDo className="absolute h-[28px] left-0 top-0 w-[320.781px]" name="Letter 3" />
                  <VaBnChinhLaNgiDo className="absolute h-[28px] left-0 top-0 w-[320.781px]" name="Letter 4" />
                  <VaBnChinhLaNgiDo className="absolute h-[28px] left-0 top-0 w-[320.781px]" name="Letter 5" />
                  <VaBnChinhLaNgiDo className="absolute h-[28px] left-0 top-0 w-[320.781px]" name="Letter 6" />
                </div>
              </div>
              <div className="absolute h-[19px] left-[333px] top-[128px] w-[18px]" data-node-id="5431:71968" data-name="Icon Interact">
                <div className="absolute inset-[-2.63%_-5.56%_0_-2.78%]">
                  <img alt="" className="block max-w-none size-full" src={imgIconInteract} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 pb-[40px] pt-[64px] px-[24px] top-0 w-[440px]" data-node-id="5604:19294" data-name="Header">
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="5604:19295" data-name="Navigation">
          <IconButton className="h-[40px] opacity-0 relative shrink-0 w-[76px]" />
          <div className="content-stretch flex h-[14px] items-center justify-center opacity-0 relative shrink-0" data-node-id="5604:19297" data-name="Text containner">
            <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-full leading-[normal] not-italic relative shrink-0 text-[#f4f0ed] text-[18px] text-center tracking-[-0.54px] w-[168px]" data-node-id="5604:19298" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
              Săn cổ vật
            </p>
          </div>
          <div className="flex items-center justify-center relative shrink-0" data-node-id="5604:19299">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[40px] relative w-[76px]" data-name="Icon Button">
                <div className="absolute h-[40px] left-0 right-0 top-0" data-node-id="5604:19300" data-name="Shapes">
                  <div className="absolute inset-[-1.25%_-2.63%_-5%_-0.66%]">
                    <img alt="" className="block max-w-none size-full" src={imgShapes1} />
                  </div>
                </div>
                <div className="-translate-x-1/2 absolute flex h-[11px] items-center justify-center left-1/2 top-[calc(50%-5px)] w-[54px]" data-node-id="5604:19303">
                  <div className="-scale-y-100 flex-none rotate-180">
                    <p className="[word-break:break-word] font-['Young_Display_Bold:Bold'] h-[11px] leading-[normal] not-italic relative text-[#291d14] text-[14px] text-center tracking-[-0.28px] w-[54px]" style={{ fontFeatureSettings: '"cv01" 1, "cv02" 1, "cv03" 1, "cv04" 1, "cv10" 1' }}>
                      Bỏ qua
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
